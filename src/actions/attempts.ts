"use server";

import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, userStats } from "@/db/schema";
import { getQcm } from "@/content";
import { addXp, markActivity, XP } from "@/lib/xp";
import { revalidateProgressPaths } from "@/lib/revalidateProgress";

/** Enregistre une réponse de QCM ; la correction fait foi côté serveur. */
export async function submitQcm(qcmId: string, chosenIndex: number) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");

  const qcm = getQcm(qcmId);
  if (!qcm) throw new Error("QCM inconnu");

  const correct = chosenIndex === qcm.correctIndex;

  await db.insert(attempts).values({
    userId,
    exerciseId: qcmId,
    exerciseType: "qcm",
    userAnswer: String(chosenIndex),
    verdict: correct ? "correct" : "incorrect",
    score: correct ? 100 : 0,
    gradedBy: "local",
    createdAt: new Date(),
  });

  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + 1` })
    .where(eq(userStats.userId, userId));

  const xp = correct ? XP.qcmCorrect : 0;
  if (xp > 0) await addXp(userId, xp, "qcm");
  else await markActivity(userId); // une réponse fausse compte aussi pour le streak

  revalidateProgressPaths();

  return { correct, xp };
}

/** Auto-évaluation d'une question ouverte quand la correction IA est indisponible. */
export async function submitSelfEval(
  exerciseId: string,
  answer: string,
  verdict: "correct" | "partial" | "incorrect",
) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");

  const { getOuverte } = await import("@/content");
  if (!getOuverte(exerciseId)) throw new Error("Exercice inconnu");

  const score = verdict === "correct" ? 100 : verdict === "partial" ? 50 : 0;

  await db.insert(attempts).values({
    userId,
    exerciseId,
    exerciseType: "ouverte",
    userAnswer: answer.slice(0, 1500),
    verdict,
    score,
    gradedBy: "self",
    createdAt: new Date(),
  });

  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + 1` })
    .where(eq(userStats.userId, userId));

  const xp =
    verdict === "correct" ? XP.ouverteCorrect : verdict === "partial" ? XP.ouvertePartial : 0;
  if (xp > 0) await addXp(userId, xp, "ouverte");
  else await markActivity(userId);

  revalidateProgressPaths();

  return { xp };
}
