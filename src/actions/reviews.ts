"use server";

import { and, eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { cardProgress, userStats } from "@/db/schema";
import { review, nextDueDate, INITIAL_STATE, type Rating } from "@/lib/srs";
import { getFlashcard } from "@/content";
import { addXp, XP } from "@/lib/xp";

export async function reviewCard(cardId: string, rating: Rating) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (!getFlashcard(cardId)) throw new Error("Carte inconnue");

  const now = new Date();
  const existing = (
    await db
      .select()
      .from(cardProgress)
      .where(and(eq(cardProgress.userId, userId), eq(cardProgress.cardId, cardId)))
  )[0];

  const state = existing
    ? {
        ease: existing.ease,
        intervalDays: existing.intervalDays,
        repetitions: existing.repetitions,
        lapses: existing.lapses,
      }
    : INITIAL_STATE;

  const next = review(state, rating);
  const dueAt = nextDueDate(next, now);

  await db
    .insert(cardProgress)
    .values({
      userId,
      cardId,
      ...next,
      dueAt,
      lastReviewedAt: now,
    })
    .onConflictDoUpdate({
      target: [cardProgress.userId, cardProgress.cardId],
      set: { ...next, dueAt, lastReviewedAt: now },
    });

  await db
    .update(userStats)
    .set({ totalReviews: sql`${userStats.totalReviews} + 1` })
    .where(eq(userStats.userId, userId));

  const xp = rating === "again" ? XP.cardAgain : XP.cardGood;
  await addXp(userId, xp, "review");

  return { xp };
}
