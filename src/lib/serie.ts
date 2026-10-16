import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { userStats } from "@/db/schema";
import { daysBetween, parisDay, parisYesterday } from "@/lib/dates";

const FREEZE_MAX = 5;

/**
 * Comptabilise une activité du jour (leçon terminée, examen blanc)
 * pour la série : dès qu'une leçon est finie,
 * la série avance. Un jour manqué peut être couvert par un gel de streak.
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

export interface StreakStats {
  currentStreak: number;
  lastActivityDate: string | null;
  streakFreezes: number;
}

/**
 * Streak réellement en cours "maintenant". `currentStreak` en base n'est mis à jour
 * que lors d'une activité (voir `markActivity`) : un utilisateur absent depuis des
 * jours garde donc en base le dernier streak calculé, comme s'il était toujours actif.
 * Cette fonction recalcule la valeur réelle à afficher sans toucher à la base, en
 * appliquant la même règle de gel qu'un retour d'activité appliquerait.
 */
export function getEffectiveStreak(
  stats: StreakStats | undefined,
  now: Date = new Date(),
): number {
  if (!stats?.lastActivityDate) return 0;
  const gap = daysBetween(stats.lastActivityDate, parisDay(now));
  if (gap <= 1) return stats.currentStreak;
  if (gap === 2 && stats.streakFreezes > 0) return stats.currentStreak;
  return 0;
}
