/** Test de la correction : matching local + appel Mistral réel (npx tsx --env-file=.env.local scripts/test-grading.ts) */
import { matchBlank, normalize } from "../src/lib/grading/local";
import { gradeOuverte, gradeTrousRemainder } from "../src/lib/grading/mistral";

// --- correction locale ---
const cases: [Parameters<typeof matchBlank>[0], string, boolean][] = [
  [{ index: 1, accepted: ["liberté"] }, "Liberté", true],
  [{ index: 1, accepted: ["liberté"] }, "la liberté", true], // article retiré
  [{ index: 1, accepted: ["liberté"] }, "libertee", true], // typo Levenshtein 1
  [{ index: 1, accepted: ["liberté"] }, "égalité", false],
  [{ index: 1, accepted: ["1789"], strict: true }, "1789", true],
  [{ index: 1, accepted: ["1789"], strict: true }, "1798", false], // strict : pas de tolérance
  [{ index: 1, accepted: ["la marseillaise"] }, "La Marseillaise", true],
  [{ index: 1, accepted: ["référendum"] }, "referendum", true], // accents
  [{ index: 1, accepted: ["peuple"] }, "", false],
];

let failures = 0;
for (const [blank, answer, expected] of cases) {
  const got = matchBlank(blank, answer);
  if (got !== expected) {
    console.error(`✗ matchBlank(${JSON.stringify(blank.accepted)}, "${answer}") = ${got}, attendu ${expected}`);
    failures++;
  }
}
console.log(failures === 0 ? `✓ matching local : ${cases.length} cas OK` : `${failures} échecs`);
console.log(`  normalize("L'Égalité  ") = "${normalize("L'Égalité  ")}"`);

// --- Mistral réel ---
async function main() {
  console.log("\nTest Mistral — question ouverte (réponse partielle attendue)…");
  const r1 = await gradeOuverte({
    question: "Citez au moins trois symboles de la République française.",
    expectedAnswer:
      "Les symboles de la France sont : la fête nationale du 14 juillet, l'hymne national La Marseillaise, la langue française, Marianne, le drapeau tricolore et le coq.",
    keyPoints: ["au moins trois parmi : 14 juillet, La Marseillaise, le français, Marianne, drapeau tricolore, coq"],
    userAnswer: "Le drapeau bleu blanc rouge et la Marseillaise",
  });
  console.log("→", r1);
  console.assert(r1.verdict === "partial" || r1.verdict === "incorrect", "2 symboles sur 3 demandés → partial attendu");

  console.log("\nTest Mistral — trous (synonyme)…");
  const r2 = await gradeTrousRemainder({
    filledTemplate: "La souveraineté nationale appartient au ___ qui l'exerce par ses représentants et par la voie du référendum.",
    toJudge: [{ index: 1, accepted: ["peuple"], candidat: "les citoyens français" }],
  });
  console.log("→", JSON.stringify(r2));

  console.log("\n✓ Correction Mistral fonctionnelle.");
}

main().then(() => process.exit(0)).catch((e) => {
  console.error("✗ Échec Mistral :", e.message);
  process.exit(1);
});
