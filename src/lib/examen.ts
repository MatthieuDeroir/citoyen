import { allQcms, sousThemes, type Qcm } from "@/content";

/**
 * Format officiel de l'examen civique (arrêté du 10 octobre 2025) :
 * 40 QCM, 45 minutes, admis à partir de 32/40 (80 %).
 * Répartition par thématique : P1 11 · P2 6 · P3 11 · P4 8 · P5 4.
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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Tire un sujet d'examen blanc selon la répartition officielle. */
export function buildExam(): Qcm[] {
  const byTheme = new Map<string, Qcm[]>();
  for (const qcm of allQcms) {
    const theme = themeOf(qcm);
    byTheme.set(theme, [...(byTheme.get(theme) ?? []), qcm]);
  }

  const selected: Qcm[] = [];
  for (const [theme, count] of Object.entries(DISTRIBUTION)) {
    selected.push(...shuffle(byTheme.get(theme) ?? []).slice(0, count));
  }
  return shuffle(selected);
}
