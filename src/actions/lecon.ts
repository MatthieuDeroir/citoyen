"use server";

import { redirect } from "next/navigation";
import { and, eq, isNull, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { attempts, lecons, userStats } from "@/db/schema";
import { getQuestion, THEMES, type ThemeId } from "@/content";
import {
  apportDeLecon,
  bilanUtilisateur,
  creerLecon,
  leconEnCours,
  leconsTermineesDuJour,
  type Apport,
  type PlanStocke,
  type ScoresParTheme,
} from "@/lib/lecon";
import { getEffectiveStreak, markActivity } from "@/lib/serie";
import { annonce, rythmeDeReference, type Annonce } from "@/lib/memoire";

async function userIdOrThrow() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Non authentifié");
  return userId;
}

/** Reprend la leçon du jour en cours, ou en compose une nouvelle. */
export async function commencerLecon() {
  const userId = await userIdOrThrow();
  const current = await leconEnCours(userId);
  const id = current?.id ?? (await creerLecon(userId));
  redirect(`/lecon/${id}`);
}

/** Enregistre une réponse. Idempotent : une question ne compte qu'une fois par leçon. */
export async function repondre(
  leconId: string,
  questionId: string,
  chosenIndex: number,
): Promise<{ correct: boolean }> {
  const userId = await userIdOrThrow();
  const [row] = await db
    .select({ plan: lecons.plan, finishedAt: lecons.finishedAt })
    .from(lecons)
    .where(and(eq(lecons.id, leconId), eq(lecons.userId, userId)));
  if (!row) throw new Error("Leçon introuvable");
  const plan = JSON.parse(row.plan) as PlanStocke[];
  const q = getQuestion(questionId);
  if (!q || !plan.some((p) => p.id === questionId)) throw new Error("Question hors leçon");
  if (!Number.isInteger(chosenIndex) || chosenIndex < 0 || chosenIndex >= q.choices.length) {
    throw new Error("Réponse invalide");
  }
  const correct = chosenIndex === 0;

  const already = await db
    .select({ verdict: attempts.verdict })
    .from(attempts)
    .where(
      and(
        eq(attempts.userId, userId),
        eq(attempts.leconId, leconId),
        eq(attempts.exerciseId, questionId),
      ),
    );
  if (already.length) return { correct: already[0].verdict === "correct" };

  await db.insert(attempts).values({
    userId,
    exerciseId: questionId,
    exerciseType: "qcm",
    userAnswer: String(chosenIndex),
    verdict: correct ? "correct" : "incorrect",
    score: correct ? 100 : 0,
    gradedBy: "local",
    createdAt: new Date(),
    leconId,
  });
  await db
    .update(lecons)
    .set({
      answered: sql`${lecons.answered} + 1`,
      correct: sql`${lecons.correct} + ${correct ? 1 : 0}`,
    })
    .where(eq(lecons.id, leconId));
  await db
    .update(userStats)
    .set({ totalAttempts: sql`${userStats.totalAttempts} + 1` })
    .where(eq(userStats.userId, userId));
  return { correct };
}

export interface BilanLecon {
  correct: number;
  total: number;
  themes: { id: ThemeId; titre: string; avant: number; apres: number; max: number }[];
  scoreAvant: number;
  scoreApres: number;
  admission: number;
  leconsAujourdhui: number;
  serie: number;
  annonce: Annonce;
  apport: Apport;
}

/** Clôt la leçon (série du jour) et renvoie le bilan : ce qui a bougé sur chaque thème. */
export async function terminerLecon(leconId: string): Promise<BilanLecon> {
  const userId = await userIdOrThrow();
  const [row] = await db
    .select()
    .from(lecons)
    .where(and(eq(lecons.id, leconId), eq(lecons.userId, userId)));
  if (!row) throw new Error("Leçon introuvable");
  const now = new Date();
  await db
    .update(lecons)
    .set({ finishedAt: now })
    .where(and(eq(lecons.id, leconId), isNull(lecons.finishedAt)));
  await markActivity(userId, now);

  const [{ score, projection }, apport, leconsAujourdhui, stats] = await Promise.all([
    bilanUtilisateur(userId, now),
    apportDeLecon(userId, leconId, now),
    leconsTermineesDuJour(userId, now),
    db.select().from(userStats).where(eq(userStats.userId, userId)),
  ]);
  const before = JSON.parse(row.before) as ScoresParTheme;
  const scoreAvant = Object.values(before).reduce((a, b) => a + b, 0);
  const ref = rythmeDeReference(projection);
  return {
    correct: row.correct,
    total: (JSON.parse(row.plan) as PlanStocke[]).length,
    themes: THEMES.map((t) => ({
      id: t.id,
      titre: t.titreCourt,
      avant: before[t.id] ?? 0,
      apres: score.parTheme[t.id] ?? 0,
      max: score.maxParTheme[t.id] ?? 0,
    })),
    scoreAvant,
    scoreApres: score.total,
    admission: score.admission,
    leconsAujourdhui,
    serie: getEffectiveStreak(stats[0], now),
    annonce: annonce(score, projection, ref),
    apport,
  };
}
