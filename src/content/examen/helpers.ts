import type { Qcm } from "../types";

/**
 * Annale officielle : la bonne réponse est toujours en premier (correctIndex 0),
 * les players mélangent l'ordre d'affichage des choix.
 * `page` = page du PDF « Questions de connaissance » du ministère (12 déc. 2025).
 */
export function annale(
  id: string,
  sousThemeId: string,
  page: number,
  question: string,
  bonne: string,
  distracteurs: [string, string, string],
  explication: string,
): Qcm {
  return {
    id,
    sousThemeId,
    question,
    choices: [bonne, ...distracteurs],
    correctIndex: 0,
    explication,
    sourcePage: page,
  };
}
