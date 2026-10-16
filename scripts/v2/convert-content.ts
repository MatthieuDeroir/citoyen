/**
 * Conversion unique v1 → v2 : annales + QCM du livret vers des fichiers
 * `src/content/questions/<theme>.ts` au format `Question`.
 * Les identifiants sont conservés (l'historique des tentatives s'y rattache).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { annales } from "../../src/content/examen";
import { allQcms, sousThemes } from "../../src/content";

const THEMES = ["pv", "si", "dd", "hg", "vs"] as const;
const partieTheme: Record<string, string> = {
  p1: "pv", p2: "si", p3: "dd", annexes: "dd", p4: "hg", p5: "vs",
};
const st = new Map(sousThemes.map((s) => [s.id, s]));

type Out = {
  id: string; theme: string; notion: string; kind: "connaissance";
  official: boolean; difficulty: 2; question: string; choices: string[];
  explication: string; page?: number;
};
const out: Out[] = [];
for (const a of annales) {
  out.push({
    id: a.id, theme: a.id.slice(3, 5), notion: a.sousThemeId, kind: "connaissance",
    official: true, difficulty: 2, question: a.question, choices: a.choices,
    explication: a.explication, page: st.get(a.sousThemeId)?.pages[0],
  });
}
for (const q of allQcms) {
  if (q.id.startsWith("an-")) continue;
  const s = st.get(q.sousThemeId)!;
  const choices = [q.choices[q.correctIndex], ...q.choices.filter((_, i) => i !== q.correctIndex)];
  out.push({
    id: q.id, theme: partieTheme[s.partieId], notion: q.sousThemeId, kind: "connaissance",
    official: false, difficulty: 2, question: q.question, choices,
    explication: q.explication, page: q.sourcePage,
  });
}

const titles: Record<string, string> = {
  pv: "Principes et valeurs de la République",
  si: "Système institutionnel et politique",
  dd: "Droits et devoirs",
  hg: "Histoire, géographie et culture",
  vs: "Vivre dans la société française",
};
mkdirSync("src/content/questions", { recursive: true });
for (const t of THEMES) {
  const items = out.filter((q) => q.theme === t);
  const body = items.map((q) => "  " + JSON.stringify(q, null, 2).replace(/\n/g, "\n  ")).join(",\n");
  writeFileSync(
    `src/content/questions/${t}.ts`,
    `import type { Question } from "../types";\n\n/** ${titles[t]}. */\nexport const ${t}: Question[] = [\n${body},\n];\n`,
  );
  console.log(t, items.length, items.filter((q) => q.official).length);
}
