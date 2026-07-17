import { and, eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { userStats, xpEvents } from "@/db/schema";
import { parisDay, parisYesterday } from "@/lib/dates";

export const XP = {
  cardGood: 10,
  cardEasy: 10,
  cardAgain: 5,
  qcmCorrect: 10,
  ouverteCorrect: 20,
  ouvertePartial: 10,
  trousCorrect: 15,
  trousPartial: 8,
} as const;

const FREEZE_MAX = 5;

export type XpSource = "review" | "qcm" | "ouverte" | "trous" | "bonus";

/**
 * Ajoute de l'XP, met à jour le total et gère le streak :
 * le streak s'incrémente le premier moment du jour où l'objectif quotidien est atteint.
 * Un jour manqué peut être couvert par un gel de streak.
 */
export async function addXp(userId: string, amount: number, source: XpSource) {
  const now = new Date();
  const today = parisDay(now);

  await db.insert(xpEvents).values({ userId, amount, source, day: today, createdAt: now });

  let stats = (
    await db.select().from(userStats).where(eq(userStats.userId, userId))
  )[0];
  if (!stats) {
    await db.insert(userStats).values({ userId }).onConflictDoNothing();
    stats = (await db.select().from(userStats).where(eq(userStats.userId, userId)))[0];
  }

  const todayXpRow = await db
    .select({ total: sql<number>`coalesce(sum(${xpEvents.amount}), 0)` })
    .from(xpEvents)
    .where(and(eq(xpEvents.userId, userId), eq(xpEvents.day, today)));
  const todayXp = todayXpRow[0]?.total ?? 0;

  const update: Partial<typeof userStats.$inferInsert> = {
    totalXp: stats.totalXp + amount,
  };

  const goalReached = todayXp >= stats.dailyXpGoal;
  const alreadyCounted = stats.lastActivityDate === today;

  if (goalReached && !alreadyCounted) {
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

    update.currentStreak = streak;
    update.longestStreak = Math.max(stats.longestStreak, streak);
    update.lastActivityDate = today;
    update.streakFreezes = freezes;
  }

  await db.update(userStats).set(update).where(eq(userStats.userId, userId));

  return { todayXp, goalReached };
}

export async function getTodayXp(userId: string): Promise<number> {
  const rows = await db
    .select({ total: sql<number>`coalesce(sum(${xpEvents.amount}), 0)` })
    .from(xpEvents)
    .where(and(eq(xpEvents.userId, userId), eq(xpEvents.day, parisDay())));
  return rows[0]?.total ?? 0;
}
