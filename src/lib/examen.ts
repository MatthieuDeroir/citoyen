import type { Question } from "@/content/types";
import { THEMES, EXAM_PASS, EXAM_TOTAL } from "@/content/themes";
import { shuffle } from "@/lib/shuffle";

/**
 * Examen blanc au format officiel (arrêté du 10 octobre 2025) : 40 questions,
 * 45 minutes, admis à 32/40. Par thématique, les questions de connaissance
 * viennent de la banque officielle et les mises en situation de celles
 * rédigées pour l'app (la banque des situations n'est pas publiée).
 *
 * NB : module pur (importé côté client pour ses types) — l'accès DB vit
 * dans lib/examenDb.ts.
 */
export { EXAM_TOTAL, EXAM_PASS, EXAM_DURATION_MINUTES } from "@/content/themes";

/** Seuil d'admission (80 %) appliqué à n'importe quel nombre de questions. */
export function passMark(total: number): number {
  return Math.ceil((total * EXAM_PASS) / EXAM_TOTAL);
}

export function isPassed(score: number, total: number): boolean {
  return score >= passMark(total);
}

/** v1 : un examen enregistré de plus de 40 questions est un « examen ultime ». */
export function isUltime(total: number): boolean {
  return total > EXAM_TOTAL;
}

export interface ExamDetailEntry {
  qcmId: string;
  chosenIndex: number | null;
  correct: boolean;
}

/**
 * Tire un sujet selon la répartition officielle. Les questions jamais tombées
 * dans un examen précédent passent en priorité.
 */
export function buildExam(questions: Question[], seenIds: Set<string> = new Set()): Question[] {
  const selected: Question[] = [];
  for (const t of THEMES) {
    const pools: [Question[], number][] = [
      [questions.filter((q) => q.theme === t.id && q.official), t.connaissance],
      [questions.filter((q) => q.theme === t.id && q.kind === "situation" && !q.variantOf), t.situation],
    ];
    for (const [pool, count] of pools) {
      const fresh = shuffle(pool.filter((q) => !seenIds.has(q.id)));
      const already = shuffle(pool.filter((q) => seenIds.has(q.id)));
      selected.push(...[...fresh, ...already].slice(0, count));
    }
  }
  return shuffle(selected);
}
