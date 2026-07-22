"use server";

import { and, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { cardProgress, userStats } from "@/db/schema";
import { review, nextDueDate, INITIAL_STATE, type Rating } from "@/lib/srs";
import { getFlashcard } from "@/content";
import { markActivity } from "@/lib/xp";

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

  // Les cartes de révision ne rapportent pas d'XP, mais comptent pour le streak au même
  // titre que n'importe quel exercice : seuls les exercices en donnent.
  await markActivity(userId, now);

  // Purge le cache client : la progression (parcours, dashboard, classement…)
  // doit être à jour même en revenant en arrière dans l'historique.
  revalidatePath("/", "layout");

  return { xp: 0 };
}
