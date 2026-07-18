import type { Qcm } from "../types";
import { annalesPrincipes } from "./principes";
import { annalesSysteme } from "./systeme";
import { annalesDroits } from "./droits";
import { annalesHistoire } from "./histoire";
import { annalesVivre } from "./vivre";

/**
 * Banque officielle des questions de l'examen civique (ministère de
 * l'Intérieur, 12 décembre 2025) : 258 intitulés transcrits du PDF,
 * choix et corrections rédigés d'après le Livret du citoyen 2026.
 */
export const annales: Qcm[] = [
  ...annalesPrincipes,
  ...annalesSysteme,
  ...annalesDroits,
  ...annalesHistoire,
  ...annalesVivre,
];

export const annalesById = new Map(annales.map((q) => [q.id, q]));

export { annalesPrincipes, annalesSysteme, annalesDroits, annalesHistoire, annalesVivre };
