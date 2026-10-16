/**
 * Simulation du moteur : `npx tsx scripts/v2/test-memoire.ts`.
 * Un élève fictif fait une leçon par jour pendant 40 jours et répond juste
 * selon une mémoire imparfaite ; on vérifie leçons, score attendu et dates.
 */
import { questions, coreQuestions } from "../../src/content";
import {
  composer, groupes, projeter, reglage, rejouer, scoreAttendu,
  acquisitionsPourAdmission, pReussite, retention, LECON_TAILLE, RYTHME_BASE, type Reponse,
} from "../../src/lib/memoire";

const coreIds = new Set(coreQuestions.map((q) => q.id));
const gs = groupes(questions);
let seed = 42;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const assert = (c: boolean, m: string) => { if (!c) { console.error("✗", m); process.exitCode = 1; } else console.log("✓", m); };

console.log(`${questions.length} questions, ${coreIds.size} comptées, base ${RYTHME_BASE}/jour`);
const start = new Date("2026-10-17T08:00:00Z");
const reponses: Reponse[] = [];

// état vide
let r = rejouer([], coreIds, start);
let plan = composer(questions, r.etats, reglage(r), start, rnd);
assert(plan.length === LECON_TAILLE, "leçon vide : 15 questions");
assert(plan.every((p) => p.role === "nouvelle"), "leçon vide : uniquement des nouvelles");
assert(new Set(plan.map((p) => p.id)).size === plan.length, "pas de doublon");
const s0 = scoreAttendu(gs, r.etats, start);
console.log("score départ", s0.total.toFixed(1), "admission", s0.admission.toFixed(3), "à acquérir", acquisitionsPourAdmission(gs, r.etats, start));

for (let d = 0; d < 40; d++) {
  const now = new Date(start.getTime() + d * 86_400_000);
  r = rejouer(reponses, coreIds, now);
  plan = composer(questions, r.etats, reglage(r), now, rnd);
  assert(plan.length === LECON_TAILLE && new Set(plan.map((p) => p.id)).size === LECON_TAILLE, `jour ${d + 1} : 15 questions distinctes`);
  plan.forEach((p, i) => {
    const e = r.etats.get(p.id);
    // élève : 50 % sur une nouvelle, sinon sa probabilité estimée
    const ok = rnd() < (e ? Math.min(0.95, pReussite(e, now) + 0.1) : 0.5);
    reponses.push({ questionId: p.id, correct: ok, at: new Date(now.getTime() + i * 20_000) });
  });
  if (d % 10 === 9) {
    const rr = rejouer(reponses, coreIds, now);
    const sc = scoreAttendu(gs, rr.etats, now);
    const roles = plan.reduce<Record<string, number>>((a, p) => ((a[p.role] = (a[p.role] ?? 0) + 1), a), {});
    const proj = projeter(rr.jours, coreIds.size, acquisitionsPourAdmission(gs, rr.etats, now, retention(rr)), now);
    console.log(`jour ${d + 1}: score ${sc.total.toFixed(1)}/40, admission ${(sc.admission * 100).toFixed(0)} %, acquises ${proj.acquises}, maîtrisées ${proj.maitrisees}, rôles ${JSON.stringify(roles)}`);
    for (const ry of proj.rythmes) console.log(`   ${ry.label}: ${ry.parJour.toFixed(1)}/j → admissible ${ry.admissible}, banque maîtrisée ${ry.banqueMaitrisee}`);
    console.log("   réglage :", reglage(rr).raison);
  }
}
const last = rejouer(reponses, coreIds, new Date(start.getTime() + 40 * 86_400_000));
assert(last.jours.length === 41, `série quotidienne continue (${last.jours.length} jours)`);
