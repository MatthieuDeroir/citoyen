import type { Question, ThemeId } from "./types";
import { pv } from "./questions/pv";
import { si } from "./questions/si";
import { dd } from "./questions/dd";
import { hg } from "./questions/hg";
import { vs } from "./questions/vs";
import { isCore } from "./themes";

export * from "./types";
export * from "./parties";
export * from "./themes";

/** Toutes les questions, au format de l'examen. */
export const questions: Question[] = [...pv, ...si, ...dd, ...hg, ...vs];

const byId = new Map(questions.map((q) => [q.id, q]));
export const getQuestion = (id: string) => byId.get(id);

/** Questions qui comptent pour la date d'examen (banque officielle + mises en situation). */
export const coreQuestions = questions.filter(isCore);

export const questionsByTheme = (theme: ThemeId) => questions.filter((q) => q.theme === theme);

/** Variantes par question d'origine. */
export const variantsOf = new Map<string, Question[]>();
for (const q of questions) {
  if (q.variantOf) variantsOf.set(q.variantOf, [...(variantsOf.get(q.variantOf) ?? []), q]);
}
