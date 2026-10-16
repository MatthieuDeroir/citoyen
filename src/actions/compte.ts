"use server";

import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  achievements,
  attempts,
  cardProgress,
  examens,
  lecons,
  reinitialisations,
  userStats,
  xpEvents,
} from "@/db/schema";
import { confirmationValide } from "@/lib/compte";

/**
 * Remet la progression à zéro : réponses, leçons, examens, série, et les
 * données de la v1. Le compte, les rappels et leur créneau sont gardés.
 * Tout ce qui est supprimé est d'abord archivé dans `reinitialisations`,
 * dans le même lot atomique que les suppressions.
 */
export async function reinitialiserCompte(confirmation: string) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (!confirmationValide(confirmation)) {
    throw new Error("Confirmation incorrecte");
  }

  const [a, l, e, s, c, x, h] = await Promise.all([
    db.select().from(attempts).where(eq(attempts.userId, userId)),
    db.select().from(lecons).where(eq(lecons.userId, userId)),
    db.select().from(examens).where(eq(examens.userId, userId)),
    db.select().from(userStats).where(eq(userStats.userId, userId)),
    db.select().from(cardProgress).where(eq(cardProgress.userId, userId)),
    db.select().from(xpEvents).where(eq(xpEvents.userId, userId)),
    db.select().from(achievements).where(eq(achievements.userId, userId)),
  ]);
  const archive = JSON.stringify({
    attempts: a,
    lecons: l,
    examens: e,
    userStats: s,
    cardProgress: c,
    xpEvents: x,
    achievements: h,
  });

  await db.batch([
    db.insert(reinitialisations).values({ userId, archive, createdAt: new Date() }),
    db.delete(attempts).where(eq(attempts.userId, userId)),
    db.delete(lecons).where(eq(lecons.userId, userId)),
    db.delete(examens).where(eq(examens.userId, userId)),
    db.delete(cardProgress).where(eq(cardProgress.userId, userId)),
    db.delete(xpEvents).where(eq(xpEvents.userId, userId)),
    db.delete(achievements).where(eq(achievements.userId, userId)),
    db
      .update(userStats)
      .set({
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: null,
        totalXp: 0,
        streakFreezes: 2,
        totalReviews: 0,
        totalAttempts: 0,
      })
      .where(eq(userStats.userId, userId)),
  ]);

  return { ok: true, reponses: a.length, lecons: l.length, examens: e.length };
}
