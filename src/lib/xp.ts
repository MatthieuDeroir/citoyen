import { and, eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { userStats, xpEvents } from "@/db/schema";
import { parisDay, parisYesterday } from "@/lib/dates";

export const XP = {
  qcmCorrect: 5,
  ouverteCorrect: 12,
  ouvertePartial: 6,
  trousCorrect: 8,
  trousPartial: 4,
} as const;

const FREEZE_MAX = 5;

export type XpSource = "review" | "qcm" | "ouverte" | "trous" | "bonus";

/**
 * Comptabilise une activité du jour (carte révisée, QCM, ouverte, trous, examen…)
 * pour le streak, indépendamment de tout objectif d'XP : dès qu'un exercice est fait,
 * le streak avance. Un jour manqué peut être couvert par un gel de streak.
 * Sans effet si l'activité du jour est déjà comptabilisée.
 */
export async function markActivity(userId: string, now: Date = new Date()) {
  const today = parisDay(now);

  let stats = (
    await db.select().from(userStats).where(eq(userStats.userId, userId))
  )[0];
  if (!stats) {
    await db.insert(userStats).values({ userId }).onConflictDoNothing();
    stats = (await db.select().from(userStats).where(eq(userStats.userId, userId)))[0];
  }

  if (stats.lastActivityDate === today) return;

  const yesterday = parisYesterday(now);
  let streak: number;
  let freezes = stats.streakFreezes;

  if (stats.lastActivityDate === yesterday) {
    streak = stats.currentStreak + 1;
  } else if (stats.lastActivityDate) {
    // jour(s) manqué(s) : un gel couvre un seul jour d'absence
    const missedOneDay =
      parisYesterday(new Date(now.getTime() - 24 * 60 * 60 * 1000)) ===
      stats.lastActivityDate;
    if (missedOneDay && freezes > 0) {
      freezes -= 1;
      streak = stats.currentStreak + 1;
    } else {
      streak = 1;
    }
  } else {
    streak = 1;
  }

  // +1 gel tous les 7 jours de streak
  if (streak > 0 && streak % 7 === 0) {
    freezes = Math.min(FREEZE_MAX, freezes + 1);
  }

  await db
    .update(userStats)
    .set({
      currentStreak: streak,
      longestStreak: Math.max(stats.longestStreak, streak),
      lastActivityDate: today,
      streakFreezes: freezes,
    })
    .where(eq(userStats.userId, userId));
}

/**
 * Ajoute de l'XP, met à jour le total et comptabilise l'activité du jour pour le streak.
 */
export async function addXp(userId: string, amount: number, source: XpSource) {
  const now = new Date();
  const today = parisDay(now);

  await db.insert(xpEvents).values({ userId, amount, source, day: today, createdAt: now });

  const stats = (
    await db.select().from(userStats).where(eq(userStats.userId, userId))
  )[0];
  if (!stats) {
    await db.insert(userStats).values({ userId }).onConflictDoNothing();
  }

  await db
    .update(userStats)
    .set({ totalXp: (stats?.totalXp ?? 0) + amount })
    .where(eq(userStats.userId, userId));

  await markActivity(userId, now);

  const todayXpRow = await db
    .select({ total: sql<number>`coalesce(sum(${xpEvents.amount}), 0)` })
    .from(xpEvents)
    .where(and(eq(xpEvents.userId, userId), eq(xpEvents.day, today)));
  const todayXp = todayXpRow[0]?.total ?? 0;
  const goalReached = todayXp >= (stats?.dailyXpGoal ?? 50);

  return { todayXp, goalReached };
}

export async function getTodayXp(userId: string): Promise<number> {
  const rows = await db
    .select({ total: sql<number>`coalesce(sum(${xpEvents.amount}), 0)` })
    .from(xpEvents)
    .where(and(eq(xpEvents.userId, userId), eq(xpEvents.day, parisDay())));
  return rows[0]?.total ?? 0;
}
