import type {
  Flashcard,
  Qcm,
  QuestionOuverte,
  SousThemeContent,
  TexteATrous,
} from "./types";
import { deviseSymboles } from "./p1/devise-symboles";
import { principesRepublique } from "./p1/principes-republique";
import { democratieEtatDeDroit } from "./p2/democratie-etat-de-droit";
import { organisationTerritoriale } from "./p2/organisation-territoriale";
import { unionEuropeenne } from "./p2/union-europeenne";

export * from "./types";
export * from "./parties";

/**
 * Registre du contenu transcrit depuis le livret.
 * Chaque fichier de sous-thème s'enregistre ici au fur et à mesure de la transcription.
 */
const registry: Record<string, SousThemeContent> = {
  "p1-s1": deviseSymboles,
  "p1-s2": principesRepublique,
  "p2-s1": democratieEtatDeDroit,
  "p2-s2": organisationTerritoriale,
  "p2-s3": unionEuropeenne,
};

export const allFlashcards: Flashcard[] = Object.values(registry).flatMap(
  (c) => c.flashcards,
);
export const allQcms: Qcm[] = Object.values(registry).flatMap((c) => c.qcms);
export const allOuvertes: QuestionOuverte[] = Object.values(registry).flatMap(
  (c) => c.ouvertes,
);
export const allTrous: TexteATrous[] = Object.values(registry).flatMap(
  (c) => c.trous,
);

const flashcardById = new Map(allFlashcards.map((f) => [f.id, f]));
const qcmById = new Map(allQcms.map((q) => [q.id, q]));
const ouverteById = new Map(allOuvertes.map((q) => [q.id, q]));
const trousById = new Map(allTrous.map((t) => [t.id, t]));

export const getFlashcard = (id: string) => flashcardById.get(id);
export const getQcm = (id: string) => qcmById.get(id);
export const getOuverte = (id: string) => ouverteById.get(id);
export const getTrous = (id: string) => trousById.get(id);

export function getContent(sousThemeId: string): SousThemeContent {
  return (
    registry[sousThemeId] ?? { flashcards: [], qcms: [], ouvertes: [], trous: [] }
  );
}
