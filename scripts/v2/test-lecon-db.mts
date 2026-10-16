/**
 * Déroule une leçon complète contre une COPIE de base locale :
 *   cp local.db /tmp/test.db && TURSO_DATABASE_URL=file:/tmp/test.db npx tsx scripts/v2/test-lecon-db.mts
 */
if (!process.env.TURSO_DATABASE_URL?.startsWith("file:") || process.env.TURSO_DATABASE_URL === "file:local.db") {
  throw new Error("À lancer uniquement sur une copie : TURSO_DATABASE_URL=file:/chemin/copie.db");
}
import { db } from "@/lib/db";
import { attempts, lecons } from "@/db/schema";
import { eq } from "drizzle-orm";
import { creerLecon, chargerLecon, bilanUtilisateur, leconEnCours } from "@/lib/lecon";

const U = "dev-local";
const avant = await bilanUtilisateur(U);
console.log("historique : réponses", avant.rejeu.jours.reduce((a, j) => a + j.reponses, 0), "acquises", avant.projection.acquises, "score", avant.score.total.toFixed(1));
console.log("réglage :", avant.reglage.raison);
const id = await creerLecon(U);
const l = await chargerLecon(U, id);
console.log("leçon", id, l!.items.length, "questions", JSON.stringify(l!.items.reduce((a: any, i) => ((a[i.role] = (a[i.role] ?? 0) + 1), a), {})));
console.log("en cours :", (await leconEnCours(U))?.id === id);
// répond juste aux 10 premières, faux aux 5 dernières
for (const [k, it] of l!.items.entries()) {
  const chosen = k < 10 ? 0 : 1;
  await db.insert(attempts).values({ userId: U, exerciseId: it.id, exerciseType: "qcm", userAnswer: String(chosen), verdict: chosen === 0 ? "correct" : "incorrect", score: chosen === 0 ? 100 : 0, gradedBy: "local", createdAt: new Date(), leconId: id });
}
const repris = await chargerLecon(U, id);
console.log("reprise : répondues", repris!.items.filter((i) => i.chosen !== null).length);
await db.update(lecons).set({ finishedAt: new Date() }).where(eq(lecons.id, id));
const apres = await bilanUtilisateur(U);
console.log("après : acquises", apres.projection.acquises, "score", apres.score.total.toFixed(1), "admission", apres.score.admission.toFixed(3), "restant", apres.projection.restantPourAdmission);
for (const r of apres.projection.rythmes) console.log(" ", r.label, r.parJour.toFixed(1), r.admissible, r.banqueMaitrisee);
const id2 = await creerLecon(U);
const l2 = await chargerLecon(U, id2);
const overlap = l2!.items.filter((i) => l!.items.some((j) => j.id === i.id)).map((i) => i.role);
console.log("leçon 2 : reprend", overlap.length, "questions de la 1re (ratées à revoir dans 4 h, donc 0 attendu)");
