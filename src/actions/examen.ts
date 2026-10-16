"use server";

import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, examens, userStats } from "@/db/schema";
import { getQuestion } from "@/content";
import { markActivity } from "@/lib/serie";
import { EXAM_TOTAL, isPassed, type ExamDetailEntry } from "@/lib/examen";

export interface ExamResult {
  examId: string;
  score: number;
  passed: boolean;
  corrections: ExamDetailEntry[];
}

/**
 * Corrige un examen blanc côté serveur et l'enregistre (historique, rotation
 * du sujet). Chaque réponse rejoint le journal : elle compte dans la mémoire
 * de la question comme une réponse en leçon.
 */
export async function submitExamen(
  questionIds: string[],
  answers: { qcmId: string; chosenIndex: number }[],
): Promise<ExamResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (
    new Set(questionIds).size !== questionIds.length ||
    questionIds.length > EXAM_TOTAL ||
    !questionIds.every((id) => getQuestion(id))
  ) {
    throw new Error("Sujet invalide");
  }

  const answerById = new Map(answers.map((a) => [a.qcmId, a.chosenIndex]));
  const now = new Date();
  const examId = crypto.randomUUID();
  const corrections: ExamDetailEntry[] = [];
  const attemptRows: (typeof attempts.$inferInsert)[] = [];

  for (const qcmId of questionIds) {
    const chosenIndex = answerById.get(qcmId) ?? null;
    const correct = chosenIndex === 0; // la bonne réponse est toujours en premier
    corrections.push({ qcmId, chosenIndex, correct });
    attemptRows.push({
      userId,
      exerciseId: qcmId,
      exerciseType: "qcm",
      userAnswer: chosenIndex === null ? "" : String(chosenIndex),
      verdict: correct ? "correct" : "incorrect",
      score: correct ? 100 : 0,
      gradedBy: "local",
      createdAt: now,
      leconId: examId,
    });
  }
  const score = corrections.filter((c) => c.correct).length;

  await db.insert(attempts).values(attemptRows);
  await db.insert(examens).values({
    id: examId,
    userId,
    score,
    total: questionIds.length,
    detail: JSON.stringify(corrections),
    createdAt: now,
  });
  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + ${attemptRows.length}` })
    .where(eq(userStats.userId, userId));
  await markActivity(userId, now);

  return { examId, score, passed: isPassed(score, questionIds.length), corrections };
}
