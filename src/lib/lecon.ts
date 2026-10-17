/**
 * Accès DB des leçons et de la mémoire. La logique vit dans lib/memoire.ts
 * (pure) ; ici on charge le journal, on rejoue, on persiste.
 */
import { and, desc, eq, isNull } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, lecons } from "@/db/schema";
import { coreQuestions, getQuestion, questions, type ThemeId } from "@/content";
import {
  acquisitionsPourAdmission,
  composer,
  groupes,
  projeter,
  reglage,
  rejouer,
  retention,
  scoreAttendu,
  type PlanItem,
  type Reponse,
  type Role,
} from "@/lib/memoire";
import { shuffle } from "@/lib/shuffle";
import { parisDay } from "@/lib/dates";

const coreIds = new Set(coreQuestions.map((q) => q.id));
const GROUPES = groupes(questions);

/** Journal des réponses QCM de l'utilisateur (questions encore au programme). */
export async function chargerReponses(userId: string): Promise<Reponse[]> {
  const rows = await db
    .select({
      id: attempts.exerciseId,
      verdict: attempts.verdict,
      at: attempts.createdAt,
      leconId: attempts.leconId,
    })
    .from(attempts)
    .where(and(eq(attempts.userId, userId), eq(attempts.exerciseType, "qcm")));
  return rows
    .filter((r) => getQuestion(r.id))
    .map((r) => ({ questionId: r.id, correct: r.verdict === "correct", at: r.at, leconId: r.leconId }));
}

export interface Apport {
  /** questions comptées acquises avant et après la leçon */
  acquisesAvant: number;
  acquisesApres: number;
  totalCore: number;
  /** ratées dans la leçon : elles reviendront */
  aRevoir: number;
  /** vues pour la première fois */
  decouvertes: number;
}

/** Ce que la leçon a changé : on rejoue le journal avec et sans ses réponses. */
export async function apportDeLecon(userId: string, leconId: string, now: Date = new Date()): Promise<Apport> {
  const reponses = await chargerReponses(userId);
  const dans = reponses.filter((r) => r.leconId === leconId);
  const avant = rejouer(reponses.filter((r) => r.leconId !== leconId), coreIds, now);
  const apres = rejouer(reponses, coreIds, now);
  const acquises = (r: ReturnType<typeof rejouer>) =>
    [...r.etats].filter(([id, e]) => coreIds.has(id) && e.lastCorrect).length;
  return {
    acquisesAvant: acquises(avant),
    acquisesApres: acquises(apres),
    totalCore: coreIds.size,
    aRevoir: dans.filter((r) => !r.correct).length,
    decouvertes: new Set(dans.filter((r) => !avant.etats.has(r.questionId)).map((r) => r.questionId)).size,
  };
}

/** Tout ce qu'il faut savoir sur la préparation de l'utilisateur, à l'instant. */
export async function bilanUtilisateur(userId: string, now: Date = new Date()) {
  const rejeu = rejouer(await chargerReponses(userId), coreIds, now);
  const score = scoreAttendu(GROUPES, rejeu.etats, now);
  const restant = acquisitionsPourAdmission(GROUPES, rejeu.etats, now, retention(rejeu));
  const projection = projeter(rejeu.jours, coreIds.size, restant, now);
  return { rejeu, score, projection, reglage: reglage(rejeu) };
}

export interface PlanStocke extends PlanItem {
  /** ordre d'affichage des choix */
  order: number[];
}

export type ScoresParTheme = Record<ThemeId, number>;

export async function leconEnCours(userId: string, now: Date = new Date()) {
  const [row] = await db
    .select()
    .from(lecons)
    .where(and(eq(lecons.userId, userId), eq(lecons.day, parisDay(now)), isNull(lecons.finishedAt)))
    .orderBy(desc(lecons.createdAt))
    .limit(1);
  return row ?? null;
}

export async function leconsTermineesDuJour(userId: string, now: Date = new Date()) {
  const rows = await db
    .select({ id: lecons.id, finishedAt: lecons.finishedAt })
    .from(lecons)
    .where(and(eq(lecons.userId, userId), eq(lecons.day, parisDay(now))));
  return rows.filter((r) => r.finishedAt).length;
}

/** Compose et enregistre une nouvelle leçon ; renvoie son id. */
export async function creerLecon(userId: string, now: Date = new Date()): Promise<string> {
  const { rejeu, score, reglage: r } = await bilanUtilisateur(userId, now);
  const plan: PlanStocke[] = composer(questions, rejeu.etats, r, now).map((p) => ({
    ...p,
    order: shuffle(getQuestion(p.id)!.choices.map((_, i) => i)),
  }));
  const [row] = await db
    .insert(lecons)
    .values({
      userId,
      day: parisDay(now),
      plan: JSON.stringify(plan),
      before: JSON.stringify(score.parTheme),
      createdAt: now,
    })
    .returning({ id: lecons.id });
  return row.id;
}

export interface QuestionDeLecon {
  id: string;
  role: Role;
  theme: ThemeId;
  kind: "connaissance" | "situation";
  official: boolean;
  question: string;
  choices: string[];
  order: number[];
  explication: string;
  page?: number;
  notion: string;
  /** déjà répondue (reprise) : index choisi */
  chosen: number | null;
}

/** Charge une leçon de l'utilisateur avec ses questions et les réponses déjà données. */
export async function chargerLecon(userId: string, leconId: string) {
  const [row] = await db
    .select()
    .from(lecons)
    .where(and(eq(lecons.id, leconId), eq(lecons.userId, userId)));
  if (!row) return null;
  const done = await db
    .select({ id: attempts.exerciseId, answer: attempts.userAnswer })
    .from(attempts)
    .where(and(eq(attempts.userId, userId), eq(attempts.leconId, leconId)));
  const chosenById = new Map(done.map((d) => [d.id, Number(d.answer)]));
  const plan = JSON.parse(row.plan) as PlanStocke[];
  const items: QuestionDeLecon[] = plan.flatMap((p) => {
    const q = getQuestion(p.id);
    if (!q) return [];
    return [
      {
        id: q.id,
        role: p.role,
        theme: q.theme,
        kind: q.kind,
        official: q.official,
        question: q.question,
        choices: q.choices,
        order: p.order,
        explication: q.explication,
        page: q.page,
        notion: q.notion,
        chosen: chosenById.get(q.id) ?? null,
      },
    ];
  });
  return { lecon: row, items, before: JSON.parse(row.before) as ScoresParTheme };
}
