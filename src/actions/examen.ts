"use server";

import { eq, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, examens, userStats } from "@/db/schema";
import { getQcm } from "@/content";
import { annalesById } from "@/content/examen";
import { addXp, markActivity } from "@/lib/xp";
import {
  EXAM_PASS,
  EXAM_TOTAL,
  ULTIME_TOTAL,
  isPassed,
  isUltime,
  type ExamDetailEntry,
} from "@/lib/examen";

export interface ExamResult {
  examId: string;
  score: number;
  passed: boolean;
  xp: number;
  corrections: { qcmId: string; chosenIndex: number | null; correct: boolean }[];
}

/**
 * Corrige un examen blanc (ou ultime) côté serveur, persiste l'examen (historique, rotation
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
  // 40 questions (examen blanc) ou exactement toute la banque (examen ultime)
  const ultime = isUltime(questionIds.length);
  const valid =
    new Set(questionIds).size === questionIds.length &&
    (ultime
      ? questionIds.length === ULTIME_TOTAL && questionIds.every((id) => annalesById.has(id))
      : questionIds.length <= EXAM_TOTAL);
  if (!valid) throw new Error("Sujet invalide");

  const answerById = new Map(answers.map((a) => [a.qcmId, a.chosenIndex]));
  const now = new Date();
  const corrections: ExamResult["corrections"] = [];
  let correctCount = 0;

  const attemptRows: (typeof attempts.$inferInsert)[] = [];

  for (const qcmId of questionIds) {
    const qcm = annalesById.get(qcmId) ?? getQcm(qcmId);
    if (!qcm) continue;
    const chosenIndex = answerById.get(qcmId) ?? null;
    const correct = chosenIndex === qcm.correctIndex;
    if (correct) correctCount++;
    corrections.push({ qcmId, chosenIndex, correct });
    // examen ultime : une question laissée sans réponse (copie rendue en
    // avance) n'est pas une erreur à retravailler
    if (chosenIndex === null && ultime) continue;
    attemptRows.push({
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

  // insertion groupée : 258 allers-retours vers Turso seraient trop lents
  for (let i = 0; i < attemptRows.length; i += 100) {
    await db.insert(attempts).values(attemptRows.slice(i, i + 100));
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
    .set({ totalAttempts: sql`${userStats.totalAttempts} + ${attemptRows.length}` })
    .where(eq(userStats.userId, userId));

  const total = questionIds.length;
  const passed = isPassed(correctCount, total);
  const perfect = correctCount === total;
  const xp = ultime
    ? // examen ultime : 1 XP / bonne réponse, +200 si 80 %, +300 pour un sans-faute
      correctCount + (passed ? 200 : 0) + (perfect ? 300 : 0)
    : // examen blanc : 1 XP / bonne réponse, +100 si admis (32+), +2 par bonne
      // réponse au-delà de la 32e, +100 pour un sans-faute.
      correctCount +
      (passed ? 100 : 0) +
      Math.max(0, correctCount - EXAM_PASS) * 2 +
      (perfect && total === EXAM_TOTAL ? 100 : 0);
  if (xp > 0) await addXp(userId, xp, "bonus");
  else await markActivity(userId); // un examen tenté compte pour le streak même à 0 XP

  return { examId: exam.id, score: correctCount, passed, xp, corrections };
}
