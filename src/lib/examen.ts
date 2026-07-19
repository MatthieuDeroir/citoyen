import { sousThemes, type Qcm } from "@/content";
import { annales } from "@/content/examen";
import { shuffle } from "@/lib/shuffle";

/**
 * Format officiel de l'examen civique (arrêté du 10 octobre 2025) :
 * 40 QCM, 45 minutes, admis à partir de 32/40 (80 %).
 * Répartition par thématique : P1 11 · P2 6 · P3 11 · P4 8 · P5 4.
 * Le sujet est tiré de la banque officielle des questions du ministère
 * (« Questions de connaissance », 12 décembre 2025 — src/content/examen/).
 *
 * NB : ce module est importé par des composants client (constantes) — il doit
 * rester pur, sans accès DB. Les requêtes vivent dans lib/examenDb.ts.
 */
export const EXAM_TOTAL = 40;
export const EXAM_PASS = 32;
export const EXAM_DURATION_MINUTES = 45;

const DISTRIBUTION: Record<string, number> = {
  p1: 11,
  p2: 6,
  p3: 11, // les annexes (DDHC, Charte) relèvent des droits et devoirs
  p4: 8,
  p5: 4,
};

function themeOf(qcm: Qcm): string {
  const st = sousThemes.find((s) => s.id === qcm.sousThemeId);
  if (!st) return "p1";
  return st.partieId === "annexes" ? "p3" : st.partieId;
}

export interface ExamDetailEntry {
  qcmId: string;
  chosenIndex: number | null;
  correct: boolean;
}

/**
 * Tire un sujet d'examen blanc dans les annales, selon la répartition officielle.
 * Les questions jamais tombées dans un examen précédent sont servies en priorité ;
 * quand une thématique est épuisée, elle est complétée par des questions déjà vues
 * (le cycle repart naturellement une fois toute la banque parcourue).
 */
export function buildExam(seenIds: Set<string> = new Set()): Qcm[] {
  const byTheme = new Map<string, Qcm[]>();
  for (const qcm of annales) {
    const theme = themeOf(qcm);
    byTheme.set(theme, [...(byTheme.get(theme) ?? []), qcm]);
  }

  const selected: Qcm[] = [];
  for (const [theme, count] of Object.entries(DISTRIBUTION)) {
    const pool = byTheme.get(theme) ?? [];
    const fresh = shuffle(pool.filter((q) => !seenIds.has(q.id)));
    const already = shuffle(pool.filter((q) => seenIds.has(q.id)));
    selected.push(...[...fresh, ...already].slice(0, count));
  }
  return shuffle(selected);
}
