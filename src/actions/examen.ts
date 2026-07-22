"use server";

import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, examens, userStats } from "@/db/schema";
import { getQcm } from "@/content";
import { annalesById } from "@/content/examen";
import { addXp, markActivity } from "@/lib/xp";
import { EXAM_PASS, EXAM_TOTAL, type ExamDetailEntry } from "@/lib/examen";

export interface ExamResult {
  examId: string;
  score: number;
  passed: boolean;
  xp: number;
  corrections: { qcmId: string; chosenIndex: number | null; correct: boolean }[];
}

/**
 * Corrige un examen blanc côté serveur, persiste l'examen (historique, rotation
 * du sujet) et une tentative par question — une annale réussie compte ainsi
 * dans la progression de sa rubrique.
 */
export async function submitExamen(
  questionIds: string[],
  answers: { qcmId: string; chosenIndex: number }[],
): Promise<ExamResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  if (questionIds.length > EXAM_TOTAL) throw new Error("Sujet invalide");

  const answerById = new Map(answers.map((a) => [a.qcmId, a.chosenIndex]));
  const now = new Date();
  const corrections: ExamResult["corrections"] = [];
  let correctCount = 0;

  for (const qcmId of questionIds) {
    const qcm = annalesById.get(qcmId) ?? getQcm(qcmId);
    if (!qcm) continue;
    const chosenIndex = answerById.get(qcmId) ?? null;
    const correct = chosenIndex === qcm.correctIndex;
    if (correct) correctCount++;
    corrections.push({ qcmId, chosenIndex, correct });

    await db.insert(attempts).values({
      userId,
      exerciseId: qcmId,
      exerciseType: "qcm",
      userAnswer: chosenIndex === null ? "" : String(chosenIndex),
      verdict: correct ? "correct" : "incorrect",
      score: correct ? 100 : 0,
      gradedBy: "local",
      createdAt: now,
    });
  }

  const [exam] = await db
    .insert(examens)
    .values({
      userId,
      score: correctCount,
      total: questionIds.length,
      detail: JSON.stringify(corrections satisfies ExamDetailEntry[]),
      createdAt: now,
    })
    .returning({ id: examens.id });

  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + ${corrections.length}` })
    .where(eq(userStats.userId, userId));

  // 1 XP / bonne réponse, +100 si admis (32+), +2 par bonne réponse au-delà
  // de la 32e, +100 pour un sans-faute.
  const passed = correctCount >= EXAM_PASS;
  const xp =
    correctCount +
    (passed ? 100 : 0) +
    Math.max(0, correctCount - EXAM_PASS) * 2 +
    (correctCount === EXAM_TOTAL && questionIds.length === EXAM_TOTAL ? 100 : 0);
  if (xp > 0) await addXp(userId, xp, "bonus");
  else await markActivity(userId); // un examen tenté compte pour le streak même à 0 XP

  // Purge le cache client : la progression (parcours, dashboard, classement…)
  // doit être à jour même en revenant en arrière dans l'historique.
  revalidatePath("/", "layout");

  return { examId: exam.id, score: correctCount, passed, xp, corrections };
}
