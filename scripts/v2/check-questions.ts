/**
 * Vérifie les fichiers de questions : `npx tsx scripts/v2/check-questions.ts [theme]`.
 * Ids uniques, 4 choix distincts non vides, notion connue, variantes rattachées
 * à une question officielle existante, champs obligatoires.
 */
import { sousThemes } from "../../src/content/parties";
import type { Question } from "../../src/content/types";

const only = process.argv[2];
const themes = ["pv", "si", "dd", "hg", "vs"].filter((t) => !only || t === only);
const notions = new Set(sousThemes.map((s) => s.id));
let errors = 0;
const fail = (id: string, msg: string) => {
  errors++;
  console.error(`✗ ${id} : ${msg}`);
};

async function main() {
  const all: Question[] = [];
  for (const t of themes) {
    const mod = await import(`../../src/content/questions/${t}.ts`);
    const qs: Question[] = mod[t];
    for (const q of qs) if (q.theme !== t) fail(q.id, `theme ${q.theme} dans le fichier ${t}`);
    all.push(...qs);
  }
  const ids = new Set<string>();
  const byId = new Map(all.map((q) => [q.id, q]));
  for (const q of all) {
    if (ids.has(q.id)) fail(q.id, "id en double");
    ids.add(q.id);
    if (!notions.has(q.notion)) fail(q.id, `notion inconnue ${q.notion}`);
    if (![1, 2, 3].includes(q.difficulty)) fail(q.id, "difficulty hors 1-3");
    if (!["connaissance", "situation"].includes(q.kind)) fail(q.id, "kind invalide");
    if (!q.question?.trim() || !q.explication?.trim()) fail(q.id, "question ou explication vide");
    if (q.choices.length !== 4) fail(q.id, `${q.choices.length} choix`);
    const norm = q.choices.map((c) => c.trim().toLowerCase());
    if (new Set(norm).size !== norm.length || norm.some((c) => !c)) fail(q.id, "choix vides ou en double");
    if (q.variantOf) {
      const src = byId.get(q.variantOf);
      if (!src && !only) fail(q.id, `variante d'une question absente ${q.variantOf}`);
      if (q.official) fail(q.id, "une variante n'est pas officielle");
    }
  }
  const count = (f: (q: Question) => boolean) => all.filter(f).length;
  console.log(
    `${all.length} questions · officielles ${count((q) => q.official)} · variantes ${count((q) => !!q.variantOf)} · situations ${count((q) => q.kind === "situation")} · difficulté 1/2/3 : ${count((q) => q.difficulty === 1)}/${count((q) => q.difficulty === 2)}/${count((q) => q.difficulty === 3)}`,
  );
  if (errors) {
    console.error(`${errors} erreur(s)`);
    process.exit(1);
  }
}
main();
