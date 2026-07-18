import { z } from "zod";
import {
  allFlashcards,
  allQcms,
  allOuvertes,
  allTrous,
  sousThemes,
} from "../src/content";
import { annales } from "../src/content/examen";

const sousThemeIds = new Set(sousThemes.map((s) => s.id));
const validSousTheme = z
  .string()
  .refine((id) => sousThemeIds.has(id), { message: "sousThemeId inconnu" });

const flashcardSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+-s\d+-fc-\d{3}$/),
  sousThemeId: validSousTheme,
  front: z.string().min(5),
  back: z.string().min(2),
  hint: z.string().optional(),
  sourcePage: z.number().int().min(1).max(83),
});

const qcmSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+-s\d+-qcm-\d{3}$/),
    sousThemeId: validSousTheme,
    question: z.string().min(5),
    choices: z.array(z.string().min(1)).length(4),
    correctIndex: z.number().int().min(0).max(3),
    explication: z.string().min(10),
    sourcePage: z.number().int().min(1).max(83),
  })
  .refine((q) => new Set(q.choices).size === q.choices.length, {
    message: "choix dupliqués",
  });

const ouverteSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+-s\d+-qo-\d{3}$/),
  sousThemeId: validSousTheme,
  question: z.string().min(5),
  expectedAnswer: z.string().min(20),
  keyPoints: z.array(z.string().min(3)).min(1),
  sourcePage: z.number().int().min(1).max(83),
});

const trousSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+-s\d+-tt-\d{3}$/),
    sousThemeId: validSousTheme,
    intro: z.string().optional(),
    template: z.string().min(10),
    blanks: z
      .array(
        z.object({
          index: z.number().int().min(1),
          accepted: z.array(z.string().min(1)).min(1),
          strict: z.boolean().optional(),
        }),
      )
      .min(1),
    sourcePage: z.number().int().min(1).max(83),
  })
  .superRefine((t, ctx) => {
    const templateIndexes = [...t.template.matchAll(/\{\{(\d+)\}\}/g)].map((m) =>
      Number(m[1]),
    );
    const blankIndexes = t.blanks.map((b) => b.index);
    if (new Set(blankIndexes).size !== blankIndexes.length) {
      ctx.addIssue({ code: "custom", message: "index de blank dupliqué" });
    }
    for (const idx of templateIndexes) {
      if (!blankIndexes.includes(idx)) {
        ctx.addIssue({
          code: "custom",
          message: `{{${idx}}} du template sans blank correspondant`,
        });
      }
    }
    for (const idx of blankIndexes) {
      if (!templateIndexes.includes(idx)) {
        ctx.addIssue({
          code: "custom",
          message: `blank ${idx} absent du template`,
        });
      }
    }
  });

let errors = 0;

function check(label: string, items: { id: string }[], schema: z.ZodTypeAny) {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.id)) {
      console.error(`✗ ${label} ${item.id} : ID dupliqué`);
      errors++;
    }
    seen.add(item.id);
    const result = schema.safeParse(item);
    if (!result.success) {
      for (const issue of result.error.issues) {
        console.error(`✗ ${label} ${item.id} : ${issue.path.join(".")} — ${issue.message}`);
        errors++;
      }
    }
  }
  console.log(`  ${label} : ${items.length} items`);
}

const annaleSchema = z
  .object({
    id: z.string().regex(/^an-(pv|si|dd|hg|vs)-\d{3}$/),
    sousThemeId: validSousTheme,
    question: z.string().min(5),
    choices: z.array(z.string().min(1)).length(4),
    correctIndex: z.literal(0), // convention annales : bonne réponse en premier, mélange à l'affichage
    explication: z.string().min(10),
    sourcePage: z.number().int().min(1).max(11), // pages du PDF ministériel
  })
  .refine((q) => new Set(q.choices).size === q.choices.length, {
    message: "choix dupliqués",
  });

console.log("Validation du contenu…");
check("flashcard", allFlashcards, flashcardSchema);
check("qcm", allQcms, qcmSchema);
check("ouverte", allOuvertes, ouverteSchema);
check("trous", allTrous, trousSchema);
check("annale", annales, annaleSchema);

if (errors > 0) {
  console.error(`\n${errors} erreur(s) de contenu.`);
  process.exit(1);
}
console.log("\n✓ Contenu valide.");
