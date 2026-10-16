/**
 * Mémoire, score attendu et projection — fonctions pures, sans accès DB.
 *
 * Le journal des réponses (table `attempts`) est la seule source de vérité :
 * l'état de chaque question se rejoue réponse par réponse (`rejouer`).
 *
 * Vocabulaire (affiché tel quel dans l'app) :
 * - question ACQUISE : la dernière réponse est juste ;
 * - question MAÎTRISÉE : réussie à nouveau au moins 7 jours après une bonne
 *   réponse, sans erreur entre les deux. Une erreur la fait redescendre.
 */
import type { Question, ThemeId } from "@/content/types";
import { THEMES, EXAM_PASS, isCore } from "@/content/themes";
import { daysBetween, parisDay } from "@/lib/dates";

const DAY_MS = 86_400_000;
export const MASTERY_DAYS = 7;
const MAX_INTERVAL_DAYS = 120;
/** Une question ratée revient dès la leçon suivante passé ce délai. */
const RETRY_DELAY_MS = 4 * 60 * 60 * 1000;

export interface Reponse {
  questionId: string;
  correct: boolean;
  at: Date;
}

export interface Etat {
  streak: number;
  intervalDays: number;
  ease: number;
  seen: number;
  correct: number;
  /** acquise puis ratée */
  lapses: number;
  lastCorrect: boolean;
  lastAt: Date;
  lastCorrectAt: Date | null;
  masteredAt: Date | null;
  dueAt: Date;
}

/** Applique une réponse à l'état d'une question. */
export function appliquer(prev: Etat | undefined, correct: boolean, at: Date): Etat {
  const s: Etat = prev ?? {
    streak: 0,
    intervalDays: 0,
    ease: 2.5,
    seen: 0,
    correct: 0,
    lapses: 0,
    lastCorrect: false,
    lastAt: at,
    lastCorrectAt: null,
    masteredAt: null,
    dueAt: at,
  };
  if (!correct) {
    return {
      ...s,
      seen: s.seen + 1,
      streak: 0,
      intervalDays: 0,
      ease: Math.max(1.3, s.ease - 0.2),
      lapses: s.lapses + (s.lastCorrect ? 1 : 0),
      lastCorrect: false,
      lastAt: at,
      masteredAt: null,
      dueAt: new Date(at.getTime() + RETRY_DELAY_MS),
    };
  }
  const streak = s.streak + 1;
  const mastered =
    s.masteredAt ??
    (s.lastCorrect &&
    s.lastCorrectAt &&
    at.getTime() - s.lastCorrectAt.getTime() >= MASTERY_DAYS * DAY_MS
      ? at
      : null);
  // 1re bonne réponse : peut-être un coup de chance (1 sur 4) → contrôle à 3 jours,
  // ou dès demain après une erreur. La 2e place la suivante au seuil de maîtrise.
  const intervalDays =
    streak === 1
      ? s.seen === 0
        ? 3
        : 1
      : streak === 2
        ? MASTERY_DAYS
        : Math.min(MAX_INTERVAL_DAYS, Math.round(s.intervalDays * s.ease));
  return {
    ...s,
    seen: s.seen + 1,
    correct: s.correct + 1,
    streak,
    intervalDays,
    ease: Math.min(3, s.ease + (streak > 2 ? 0.05 : 0)),
    lastCorrect: true,
    lastAt: at,
    lastCorrectAt: at,
    masteredAt: mastered,
    dueAt: new Date(at.getTime() + intervalDays * DAY_MS),
  };
}

/* ------------------------------------------------------------------ */
/* Rejeu du journal                                                   */
/* ------------------------------------------------------------------ */

export interface JourPoint {
  day: string;
  /** questions comptées (banque + situations) acquises en fin de journée */
  acquises: number;
  maitrisees: number;
  reponses: number;
}

export interface Rejeu {
  etats: Map<string, Etat>;
  /** une entrée par jour, du premier jour actif à aujourd'hui inclus */
  jours: JourPoint[];
  /** 7 derniers jours : part de bonnes réponses en leçon */
  reussite7: number | null;
  reponses7: number;
  /** 14 derniers jours : part des révisions de questions acquises ratées */
  oubli14: number | null;
  echantillonOubli: number;
}

/**
 * Rejoue toutes les réponses (triées par date) et produit l'état de chaque
 * question et la série quotidienne des questions acquises et maîtrisées.
 */
export function rejouer(
  reponses: Reponse[],
  coreIds: Set<string>,
  now: Date = new Date(),
): Rejeu {
  const sorted = [...reponses].sort((a, b) => a.at.getTime() - b.at.getTime());
  const etats = new Map<string, Etat>();
  const jours: JourPoint[] = [];
  let acquises = 0;
  let maitrisees = 0;
  const today = parisDay(now);
  const since7 = now.getTime() - 7 * DAY_MS;
  const since14 = now.getTime() - 14 * DAY_MS;
  let ok7 = 0;
  let n7 = 0;
  let oublis = 0;
  let nOubli = 0;

  let current: JourPoint | null = null;
  const pushDay = (day: string) => {
    // jours sans activité : la série reste plate
    if (current) {
      jours.push(current);
      let gap = daysBetween(current.day, day);
      let d = current.day;
      while (gap > 1) {
        d = nextDay(d);
        jours.push({ day: d, acquises, maitrisees, reponses: 0 });
        gap--;
      }
    }
    current = { day, acquises, maitrisees, reponses: 0 };
  };

  for (const r of sorted) {
    const day = parisDay(r.at);
    if (!current || (current as JourPoint).day !== day) pushDay(day);
    const prev = etats.get(r.questionId);
    const next = appliquer(prev, r.correct, r.at);
    etats.set(r.questionId, next);
    const t = r.at.getTime();
    if (t >= since7) {
      n7++;
      if (r.correct) ok7++;
    }
    if (t >= since14 && prev?.lastCorrect) {
      nOubli++;
      if (!r.correct) oublis++;
    }
    if (coreIds.has(r.questionId)) {
      acquises += (next.lastCorrect ? 1 : 0) - (prev?.lastCorrect ? 1 : 0);
      maitrisees += (next.masteredAt ? 1 : 0) - (prev?.masteredAt ? 1 : 0);
    }
    const c = current as unknown as JourPoint;
    c.acquises = acquises;
    c.maitrisees = maitrisees;
    c.reponses++;
  }
  if (current && (current as JourPoint).day !== today) pushDay(today);
  if (current) jours.push(current);

  return {
    etats,
    jours,
    reussite7: n7 ? ok7 / n7 : null,
    reponses7: n7,
    oubli14: nOubli ? oublis / nOubli : null,
    echantillonOubli: nOubli,
  };
}

function nextDay(day: string): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function addDays(day: string, n: number): string {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + Math.round(n));
  return d.toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------ */
/* Score attendu à l'examen                                           */
/* ------------------------------------------------------------------ */

/** Probabilité de réussir une question jamais vue (1 chance sur 4, un peu de culture). */
const P_NOUVELLE = 0.3;
const P_RATEE = 0.45;
/** Rétention d'une question acquise, entretenue par les révisions, faute de mesure. */
const RETENTION_DEFAUT = 0.95;

/**
 * Rétention mesurée : 1 − taux d'oubli des 14 derniers jours (dès 20 révisions
 * de questions acquises), bornée entre 70 et 97 %.
 */
export function retention(r: Pick<Rejeu, "oubli14" | "echantillonOubli">): number {
  if (r.oubli14 === null || r.echantillonOubli < 20) return RETENTION_DEFAUT;
  return Math.min(0.97, Math.max(0.7, 1 - r.oubli14));
}

/** Probabilité visée une fois la révision faite : sert à projeter l'admissibilité. */
function pCible(e: Etat | undefined, now: Date, pAcquise: number): number {
  if (e?.masteredAt) return Math.min(0.98, pAcquise + 0.03);
  if (e?.lastCorrect) return pAcquise;
  return pReussite(e, now);
}

/** Probabilité estimée de répondre juste aujourd'hui. */
export function pReussite(e: Etat | undefined, now: Date = new Date()): number {
  if (!e) return P_NOUVELLE;
  if (!e.lastCorrect || !e.lastCorrectAt) return P_RATEE;
  const elapsed = (now.getTime() - e.lastCorrectAt.getTime()) / DAY_MS;
  const stability = Math.max(2, e.intervalDays * 1.5);
  const retention = Math.pow(0.9, elapsed / stability);
  const plafond = e.masteredAt ? 0.98 : 0.92;
  return 0.25 + 0.75 * plafond * retention;
}

export interface Groupe {
  theme: ThemeId;
  kind: Question["kind"];
  /** questions de l'examen pour ce groupe */
  slots: number;
  /** questions comptées du groupe */
  pool: Question[];
}

export function groupes(questions: Question[]): Groupe[] {
  const out: Groupe[] = [];
  for (const t of THEMES) {
    const pool = (kind: Question["kind"]) =>
      questions.filter((q) => isCore(q) && q.theme === t.id && q.kind === kind);
    const situations = pool("situation");
    // sans mise en situation rédigée, leurs places se reportent sur la connaissance
    const reportees = situations.length ? 0 : t.situation;
    const connaissance = pool("connaissance");
    if (connaissance.length) {
      out.push({ theme: t.id, kind: "connaissance", slots: t.connaissance + reportees, pool: connaissance });
    }
    if (t.situation && situations.length) {
      out.push({ theme: t.id, kind: "situation", slots: t.situation, pool: situations });
    }
  }
  return out;
}

export interface ScoreAttendu {
  total: number;
  parTheme: Record<ThemeId, number>;
  /** maximum par thème (questions de l'examen) */
  maxParTheme: Record<ThemeId, number>;
  /** probabilité d'avoir au moins 32/40 */
  admission: number;
}

export function scoreAttendu(
  gs: Groupe[],
  etats: Map<string, Etat>,
  now: Date = new Date(),
): ScoreAttendu {
  const parTheme = {} as Record<ThemeId, number>;
  const maxParTheme = {} as Record<ThemeId, number>;
  let total = 0;
  let variance = 0;
  for (const g of gs) {
    const p = g.pool.reduce((a, q) => a + pReussite(etats.get(q.id), now), 0) / g.pool.length;
    const s = g.slots * p;
    parTheme[g.theme] = (parTheme[g.theme] ?? 0) + s;
    maxParTheme[g.theme] = (maxParTheme[g.theme] ?? 0) + g.slots;
    total += s;
    variance += g.slots * p * (1 - p);
  }
  const sigma = Math.sqrt(Math.max(variance, 1e-6));
  return { total, parTheme, maxParTheme, admission: 1 - normalCdf((EXAM_PASS - 0.5 - total) / sigma) };
}

function normalCdf(x: number): number {
  // Abramowitz-Stegun 26.2.17
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp((-x * x) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x > 0 ? 1 - p : p;
}

/**
 * Nombre de questions encore à acquérir pour un score attendu ≥ 32/40, en
 * supposant que les questions acquises restent entretenues par les révisions
 * et qu'on acquiert d'abord celles qui rapportent le plus (ce que fait la
 * composition des leçons). `null` si toute la banque ne suffit pas.
 */
export function acquisitionsPourAdmission(
  gs: Groupe[],
  etats: Map<string, Etat>,
  now = new Date(),
  pAcquise = RETENTION_DEFAUT,
): number | null {
  const state = gs.map((g) => {
    const restantes = g.pool
      .filter((q) => !etats.get(q.id)?.lastCorrect)
      .map((q) => pReussite(etats.get(q.id), now));
    const sum = g.pool.reduce((a, q) => a + pCible(etats.get(q.id), now, pAcquise), 0);
    return { g, restantes, sum };
  });
  const score = () => state.reduce((a, s) => a + (s.g.slots * s.sum) / s.g.pool.length, 0);
  let k = 0;
  while (score() < EXAM_PASS) {
    let best = -1;
    let bestGain = 0;
    state.forEach((s, i) => {
      if (!s.restantes.length) return;
      const gain = (s.g.slots / s.g.pool.length) * (pAcquise - s.restantes[s.restantes.length - 1]);
      if (gain > bestGain) {
        bestGain = gain;
        best = i;
      }
    });
    if (best < 0) return null;
    const s = state[best];
    s.sum += pAcquise - s.restantes.pop()!;
    k++;
  }
  return k;
}

/* ------------------------------------------------------------------ */
/* Projection de la date d'examen                                     */
/* ------------------------------------------------------------------ */

/** Une leçon = 15 questions ; rythme de base = 80 % de 15, à l'image des 32/40. */
export const LECON_TAILLE = 15;
export const RYTHME_BASE = (LECON_TAILLE * EXAM_PASS) / 40;

export interface Rythme {
  cle: "base" | "debut" | "mois" | "semaine";
  label: string;
  /** questions acquises nettes par jour */
  parJour: number;
  /** date où le score attendu atteint 32/40 */
  admissible: string | null;
  /** date où toute la banque est acquise, puis maîtrisée (+7 j) */
  banqueAcquise: string | null;
  banqueMaitrisee: string | null;
}

export interface Projection {
  totalCore: number;
  acquises: number;
  maitrisees: number;
  restantPourAdmission: number | null;
  rythmes: Rythme[];
  /** premier jour actif (ou aujourd'hui) : point de départ de la droite de base */
  depart: string;
}

const HORIZON_JOURS = 730;

export function projeter(
  jours: JourPoint[],
  totalCore: number,
  restantPourAdmission: number | null,
  now: Date = new Date(),
): Projection {
  const today = parisDay(now);
  const last = jours[jours.length - 1];
  const acquises = last?.acquises ?? 0;
  const maitrisees = last?.maitrisees ?? 0;
  const depart = jours[0]?.day ?? today;
  const restant = totalCore - acquises;

  const ilYa = (n: number) => {
    const day = addDays(today, -n);
    const p = [...jours].reverse().find((j) => j.day <= day);
    return p?.acquises ?? 0;
  };
  const ecoules = Math.max(1, daysBetween(depart, today) + 1);
  const pente = (n: number) => {
    const span = Math.min(n, ecoules);
    return (acquises - (span >= ecoules ? 0 : ilYa(span))) / span;
  };

  const dated = (from: string, perDay: number, need: number | null) => {
    if (need === null || perDay <= 0) return null;
    const d = Math.ceil(need / perDay);
    return d > HORIZON_JOURS ? null : addDays(from, d);
  };

  const rythmes: Rythme[] = [];
  // droite de base : depuis le premier jour, toute la banque à 12 par jour
  const baseAcquise = addDays(depart, Math.ceil(totalCore / RYTHME_BASE));
  rythmes.push({
    cle: "base",
    label: "Rythme de base (12/jour)",
    parJour: RYTHME_BASE,
    admissible: dated(today, RYTHME_BASE, restantPourAdmission),
    banqueAcquise: baseAcquise,
    banqueMaitrisee: addDays(baseAcquise, MASTERY_DAYS),
  });
  if (jours.length) {
    for (const [cle, label, n] of [
      ["debut", "Depuis le début", ecoules],
      ["mois", "30 derniers jours", 30],
      ["semaine", "7 derniers jours", 7],
    ] as const) {
      const parJour = pente(n);
      const acq = restant <= 0 ? today : dated(today, parJour, restant);
      rythmes.push({
        cle,
        label,
        parJour,
        admissible: restantPourAdmission === 0 ? today : dated(today, parJour, restantPourAdmission),
        banqueAcquise: acq,
        banqueMaitrisee: acq ? addDays(acq, MASTERY_DAYS) : null,
      });
    }
  }
  return { totalCore, acquises, maitrisees, restantPourAdmission, rythmes, depart };
}

/* ------------------------------------------------------------------ */
/* Composition d'une leçon                                            */
/* ------------------------------------------------------------------ */

export type Role = "revision" | "nouvelle" | "piege";

export interface PlanItem {
  id: string;
  role: Role;
}

export interface ReglageLecon {
  revisionsMax: number;
  pieges: number;
  /** ordre de préférence des difficultés pour les questions nouvelles */
  difficultes: (1 | 2 | 3)[];
  /** pourquoi, en clair */
  raison: string;
}

/**
 * Réglage de la leçon par la réussite récente : on vise environ 70 % de
 * bonnes réponses. Au-delà de 85 % sur 7 jours, la difficulté monte.
 */
export function reglage(r: Pick<Rejeu, "reussite7" | "reponses7" | "oubli14" | "echantillonOubli">): ReglageLecon {
  let revisionsMax = 8;
  let pieges = 2;
  let difficultes: (1 | 2 | 3)[] = [3, 2, 1];
  const raisons: string[] = [];
  if (r.reussite7 !== null && r.reponses7 >= 30) {
    const pct = Math.round(r.reussite7 * 100);
    if (r.reussite7 > 0.85) {
      pieges = 4;
      difficultes = [3, 2, 1];
      raisons.push(`${pct} % de réussite sur 7 jours : plus de pièges et de questions difficiles.`);
    } else if (r.reussite7 < 0.55) {
      pieges = 1;
      difficultes = [2, 1, 3];
      raisons.push(`${pct} % de réussite sur 7 jours : on consolide avant de corser.`);
    } else {
      raisons.push(`${pct} % de réussite sur 7 jours, dans la cible (≈ 70 %).`);
    }
  } else {
    raisons.push("Pas encore assez de réponses cette semaine pour régler la difficulté : questions les plus dures d'abord.");
  }
  if (r.oubli14 !== null && r.echantillonOubli >= 20) {
    const pct = Math.round(r.oubli14 * 100);
    if (r.oubli14 > 0.25) {
      revisionsMax = 10;
      raisons.push(`Tu oublies ${pct} % des questions acquises : plus de révisions.`);
    } else if (r.oubli14 < 0.1) {
      revisionsMax = 6;
      raisons.push(`Seulement ${pct} % d'oubli : on avance plus vite.`);
    }
  }
  return { revisionsMax, pieges, difficultes, raison: raisons.join(" ") };
}

/**
 * Compose une leçon de 15 questions :
 * 1. les révisions dues (questions ratées d'abord, puis les plus en retard) ;
 * 2. des pièges : variantes de questions déjà acquises, pour vérifier qu'on
 *    connaît le fait et pas seulement l'intitulé ;
 * 3. des questions nouvelles de la banque, dans les thèmes où elles rapportent
 *    le plus de points à l'examen, les plus difficiles d'abord ;
 * 4. à défaut, approfondissement (questions du livret hors banque), puis les
 *    questions les plus fragiles.
 */
export function composer(
  questions: Question[],
  etats: Map<string, Etat>,
  r: ReglageLecon,
  now: Date = new Date(),
  random: () => number = Math.random,
): PlanItem[] {
  const plan: PlanItem[] = [];
  const pris = new Set<string>();
  const add = (q: Question, role: Role) => {
    if (pris.has(q.id) || plan.length >= LECON_TAILLE) return;
    pris.add(q.id);
    plan.push({ id: q.id, role });
  };
  const byId = new Map(questions.map((q) => [q.id, q]));
  const melanger = <T,>(arr: T[]) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // 1. révisions dues
  const dues = [...etats.entries()]
    .filter(([id, e]) => byId.has(id) && e.dueAt.getTime() <= now.getTime())
    .sort(([ia, a], [ib, b]) => {
      if (a.lastCorrect !== b.lastCorrect) return a.lastCorrect ? 1 : -1;
      const ca = isCore(byId.get(ia)!) ? 0 : 1;
      const cb = isCore(byId.get(ib)!) ? 0 : 1;
      if (ca !== cb) return ca - cb;
      return a.dueAt.getTime() - b.dueAt.getTime();
    });
  for (const [id] of dues.slice(0, r.revisionsMax)) add(byId.get(id)!, "revision");

  // 2. pièges : variantes jamais vues de questions acquises
  const pieges = melanger(
    questions.filter(
      (q) => q.variantOf && !etats.has(q.id) && etats.get(q.variantOf)?.lastCorrect,
    ),
  );
  for (const q of pieges.slice(0, r.pieges)) add(q, "piege");

  // 3. nouvelles questions de la banque, groupe par groupe selon le gain à l'examen
  const gs = groupes(questions).map((g) => ({
    g,
    file: trierParDifficulte(
      melanger(g.pool.filter((q) => !etats.has(q.id))),
      r.difficultes,
    ),
    pris: 0,
  }));
  while (plan.length < LECON_TAILLE) {
    let best: (typeof gs)[number] | null = null;
    let bestGain = 0;
    for (const s of gs) {
      if (!s.file.length) continue;
      // poids d'une question à l'examen, décroissant si le groupe a déjà donné
      // dans cette leçon : la leçon reste variée
      const gain = (s.g.slots / s.g.pool.length) / (1 + s.pris * 0.6);
      if (gain > bestGain) {
        bestGain = gain;
        best = s;
      }
    }
    if (!best) break;
    add(best.file.shift()!, "nouvelle");
    best.pris++;
  }

  // 4a. approfondissement : questions du livret hors banque jamais vues
  if (plan.length < LECON_TAILLE) {
    const extra = trierParDifficulte(
      melanger(questions.filter((q) => !isCore(q) && !q.variantOf && !etats.has(q.id))),
      r.difficultes,
    );
    for (const q of extra) add(q, "nouvelle");
  }
  // 4b. les questions les plus fragiles, même non dues
  if (plan.length < LECON_TAILLE) {
    const fragiles = questions
      .filter((q) => etats.has(q.id) && !pris.has(q.id))
      .sort((a, b) => pReussite(etats.get(a.id), now) - pReussite(etats.get(b.id), now));
    for (const q of fragiles) add(q, "revision");
  }

  // ordre final mélangé, sans commencer par un piège
  const out = melanger(plan);
  const first = out.findIndex((p) => p.role !== "piege");
  if (first > 0) [out[0], out[first]] = [out[first], out[0]];
  return out;
}

function trierParDifficulte(qs: Question[], ordre: (1 | 2 | 3)[]): Question[] {
  const rang = (d: number) => ordre.indexOf(d as 1 | 2 | 3);
  return [...qs].sort((a, b) => rang(a.difficulty) - rang(b.difficulty));
}

/**
 * Rythme qui sert à annoncer LA date : celui des 7 derniers jours dès qu'il y a
 * une semaine d'historique et un rythme positif, sinon le rythme de base.
 */
export function rythmeDeReference(p: Projection, jours: number): Rythme {
  const semaine = p.rythmes.find((r) => r.cle === "semaine");
  if (semaine && jours >= 7 && semaine.parJour > 0) return semaine;
  return p.rythmes[0];
}

/** Ce qu'on annonce sur la date d'examen, dans cet ordre de priorité. */
export type Annonce =
  | { type: "admis" }
  | { type: "consolider" }
  | { type: "date"; date: string; base: boolean }
  | { type: "oubli" }
  | { type: "rythme" };

export function annonce(score: Pick<ScoreAttendu, "total">, p: Projection, ref: Rythme): Annonce {
  if (score.total >= EXAM_PASS) return { type: "admis" };
  if (p.restantPourAdmission === 0) return { type: "consolider" };
  if (p.restantPourAdmission === null) return { type: "oubli" };
  if (ref.admissible) return { type: "date", date: ref.admissible, base: ref.cle === "base" };
  return { type: "rythme" };
}
