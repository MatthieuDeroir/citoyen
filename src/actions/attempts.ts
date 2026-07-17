"use server";

import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, userStats } from "@/db/schema";
import { getQcm } from "@/content";
import { addXp, XP } from "@/lib/xp";

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

  return { correct, xp };
}
