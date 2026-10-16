/**
 * Vérifie que les 258 intitulés officiels (banque du ministère, 12 déc. 2025)
 * et leurs bonnes réponses sont intacts : `npx tsx scripts/v2/check-officielles.ts`.
 */
import { readFileSync } from "node:fs";
import { questions } from "../../src/content";

const ref: { id: string; question: string; reponse: string }[] = JSON.parse(
  readFileSync(new URL("./officielles.json", import.meta.url), "utf8"),
);
const byId = new Map(questions.map((q) => [q.id, q]));
let bad = 0;
for (const a of ref) {
  const q = byId.get(a.id);
  if (!q) {
    console.error("absente", a.id);
    bad++;
  } else if (q.question !== a.question || q.choices[0] !== a.reponse || !q.official) {
    console.error("modifiée", a.id);
    bad++;
  }
}
console.log(`${ref.length} officielles vérifiées, ${bad} écart(s)`);
process.exit(bad ? 1 : 0);
