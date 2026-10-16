import type { Question, ThemeId } from "./types";

export interface Theme {
  id: ThemeId;
  titre: string;
  titreCourt: string;
  /** questions de connaissance par examen */
  connaissance: number;
  /** mises en situation par examen */
  situation: number;
}

/**
 * Format officiel (arrêté du 10 octobre 2025) : 40 questions, 28 de connaissance
 * et 12 mises en situation, admis à 32/40.
 */
export const THEMES: Theme[] = [
  { id: "pv", titre: "Principes et valeurs de la République", titreCourt: "Principes et valeurs", connaissance: 5, situation: 6 },
  { id: "si", titre: "Système institutionnel et politique", titreCourt: "Institutions", connaissance: 6, situation: 0 },
  { id: "dd", titre: "Droits et devoirs", titreCourt: "Droits et devoirs", connaissance: 5, situation: 6 },
  { id: "hg", titre: "Histoire, géographie et culture", titreCourt: "Histoire et culture", connaissance: 8, situation: 0 },
  { id: "vs", titre: "Vivre dans la société française", titreCourt: "Vie en société", connaissance: 4, situation: 0 },
];

export const themeById = new Map(THEMES.map((t) => [t.id, t]));

export const EXAM_TOTAL = 40;
export const EXAM_PASS = 32;
export const EXAM_DURATION_MINUTES = 45;

/** Nombre de questions d'un examen pour une thématique et un type. */
export function examSlots(theme: ThemeId, kind: Question["kind"]): number {
  const t = themeById.get(theme)!;
  return kind === "situation" ? t.situation : t.connaissance;
}

/**
 * Questions qui comptent pour la date d'examen : la banque officielle et les
 * mises en situation (absentes de la banque publiée, donc rédigées ici).
 * Les variantes entraînent mais ne comptent pas.
 */
export function isCore(q: Question): boolean {
  return q.official || (q.kind === "situation" && !q.variantOf);
}
