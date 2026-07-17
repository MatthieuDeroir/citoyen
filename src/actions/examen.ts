"use server";

import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, userStats } from "@/db/schema";
import { getQcm } from "@/content";
import { addXp } from "@/lib/xp";
import { EXAM_PASS, EXAM_TOTAL } from "@/lib/examen";

export interface ExamResult {
  score: number;
  passed: boolean;
  xp: number;
  corrections: { qcmId: string; chosenIndex: number; correct: boolean }[];
}

/** Corrige un examen blanc côté serveur et persiste les tentatives. */
export async function submitExamen(
  answers: { qcmId: string; chosenIndex: number }[],
): Promise<ExamResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (answers.length > EXAM_TOTAL) throw new Error("Trop de réponses");

  const now = new Date();
  const corrections: ExamResult["corrections"] = [];
  let correctCount = 0;

  for (const { qcmId, chosenIndex } of answers) {
    const qcm = getQcm(qcmId);
    if (!qcm) continue;
    const correct = chosenIndex === qcm.correctIndex;
    if (correct) correctCount++;
    corrections.push({ qcmId, chosenIndex, correct });

    await db.insert(attempts).values({
      userId,
      exerciseId: qcmId,
      exerciseType: "qcm",
      userAnswer: String(chosenIndex),
      verdict: correct ? "correct" : "incorrect",
      score: correct ? 100 : 0,
      gradedBy: "local",
      createdAt: now,
    });
  }

  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + ${answers.length}` })
    .where(eq(userStats.userId, userId));

  const passed = correctCount >= EXAM_PASS;
  const xp = correctCount * 5 + (passed ? 50 : 0);
  if (xp > 0) await addXp(userId, xp, "bonus");

  return { score: correctCount, passed, xp, corrections };
}
