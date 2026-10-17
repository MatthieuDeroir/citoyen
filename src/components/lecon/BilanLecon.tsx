"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Plus, CalendarCheck, ChevronDown } from "lucide-react";
import type { BilanLecon } from "@/actions/lecon";
import { commencerLecon } from "@/actions/lecon";
import { EXAM_PASS, EXAM_TOTAL } from "@/content/themes";
import { AnnonceDate } from "@/components/ui/AnnonceDate";
import { AnneauScore } from "@/components/fx/AnneauScore";
import { Compteur } from "@/components/fx/Compteur";
import { Confettis } from "@/components/fx/Confettis";
import { Flamme } from "@/components/fx/Flamme";

/** Seuil des confettis : 80 % de la leçon, comme les 32/40 de l'examen. */
const SEUIL_FETE = 12;

const fmt = (n: number) => n.toLocaleString("fr-FR", { maximumFractionDigits: 1, minimumFractionDigits: 1 });
const pluriel = (n: number, mot: string) => `${mot}${Math.abs(n) > 1 ? "s" : ""}`;

/**
 * Bilan de fin de leçon, en trois temps et en phrases simples :
 * ta leçon, ce qu'elle t'a apporté, où tu en es pour l'examen.
 */
export function BilanLeconView({ bilan, resultats }: { bilan: BilanLecon; resultats?: boolean[] }) {
  const { apport } = bilan;
  const apprises = apport.acquisesApres - apport.acquisesAvant;
  const gain = bilan.scoreApres - bilan.scoreAvant;
  const admis = bilan.scoreApres >= EXAM_PASS;
  // fin de l'anneau : la suite du bilan prend le relais
  const apresAnneau = 1.35;
  const pct = (v: number) => `${(Math.max(0, Math.min(EXAM_TOTAL, v)) / EXAM_TOTAL) * 100}%`;

  return (
    <div className="-mx-1 flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto overscroll-contain px-1 py-4">
      {bilan.correct >= SEUIL_FETE && <Confettis seed={bilan.correct + bilan.leconsAujourdhui} />}

      {/* 1. ta leçon */}
      <header className="text-center">
        <p className="text-sm font-semibold text-muted">
          Leçon {bilan.leconsAujourdhui > 1 ? `n° ${bilan.leconsAujourdhui} ` : ""}terminée
        </p>
        {resultats?.length ? (
          <div className="mt-3">
            <AnneauScore resultats={resultats} />
          </div>
        ) : (
          <p className="mt-1 text-5xl font-extrabold tabular-nums">
            {bilan.correct}
            <span className="text-2xl text-muted">/{bilan.total}</span>
          </p>
        )}
        <p className="mt-2 font-semibold">
          {bilan.correct > 1
            ? `${bilan.correct} bonnes réponses sur ${bilan.total}`
            : `${bilan.correct} bonne réponse sur ${bilan.total}`}
        </p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: apresAnneau, type: "spring", stiffness: 300, damping: 20 }}
          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-3 py-1 text-sm font-semibold text-gold"
        >
          <Flamme allumee={bilan.serie > 0} />
          {`${bilan.serie} ${pluriel(bilan.serie, "jour")} d'affilée`}
        </motion.p>
      </header>

      {/* 2. ce que la leçon t'a apporté */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: apresAnneau + 0.1, duration: 0.3 }}
        className="rounded-card border border-border bg-surface p-4"
      >
        <h2 className="font-bold">Ce que cette leçon t&apos;a apporté</h2>
        <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-success-soft px-1 py-2.5">
            <dd className="text-2xl font-extrabold text-success tabular-nums">
              {apprises > 0 ? "+" : apprises < 0 ? "−" : ""}
              {Math.abs(apprises)}
            </dd>
            <dt className="text-xs font-medium">
              {/* négatif : plus de questions oubliées qu'apprises dans la leçon */}
              {apprises < 0 ? pluriel(apprises, "oubliée") : pluriel(apprises, "apprise")}
            </dt>
          </div>
          <div className="rounded-xl bg-accent-soft px-1 py-2.5">
            <dd className="text-2xl font-extrabold text-accent tabular-nums">{apport.aRevoir}</dd>
            <dt className="text-xs font-medium">à revoir</dt>
          </div>
          <div className="rounded-xl bg-primary-soft px-1 py-2.5">
            <dd className="text-2xl font-extrabold text-primary tabular-nums">{apport.decouvertes}</dd>
            <dt className="text-xs font-medium">{pluriel(apport.decouvertes, "découverte")}</dt>
          </div>
        </dl>
        <p className="mt-3 text-sm">
          Tu connais maintenant <strong>{apport.acquisesApres}</strong>
          {` des ${apport.totalCore} questions de l'examen.`}
          {apport.aRevoir > 0 && " Celles que tu as ratées reviendront dans tes prochaines leçons."}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-success"
            initial={{ width: `${(apport.acquisesAvant / apport.totalCore) * 100}%` }}
            animate={{ width: `${(apport.acquisesApres / apport.totalCore) * 100}%` }}
            transition={{ delay: apresAnneau + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.section>

      {/* 3. où tu en es pour l'examen */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: apresAnneau + 0.25, duration: 0.3 }}
        className="rounded-card border border-border bg-surface p-4"
      >
        <h2 className="font-bold">Si l&apos;examen avait lieu aujourd&apos;hui</h2>
        <p className="mt-1 text-sm">
          Tu aurais environ{" "}
          <strong className={`text-lg tabular-nums ${admis ? "text-success" : ""}`}>
            <Compteur de={bilan.scoreAvant} a={bilan.scoreApres} duree={1} delai={apresAnneau + 0.4} />
          </strong>{" "}
          bonnes réponses sur {EXAM_TOTAL}. Il en faut {EXAM_PASS} pour être admis.
        </p>

        <div className="relative mt-6 mb-1">
          <div className="relative h-3 overflow-hidden rounded-full bg-border">
            <motion.div
              className={`absolute inset-y-0 left-0 rounded-full ${admis ? "bg-success" : "bg-primary"}`}
              initial={{ width: pct(bilan.scoreAvant) }}
              animate={{ width: pct(bilan.scoreApres) }}
              transition={{ delay: apresAnneau + 0.4, duration: 1, ease: "easeOut" }}
            />
          </div>
          {/* repère d'admission */}
          <div className="absolute -top-5 bottom-0" style={{ left: pct(EXAM_PASS) }}>
            <span className="absolute -top-0.5 -translate-x-1/2 text-[11px] font-bold whitespace-nowrap text-success">
              admis
            </span>
            <span className="absolute top-3.5 bottom-0 w-0.5 -translate-x-1/2 bg-foreground/50" />
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-muted tabular-nums">
            <span>0</span>
            <span>{EXAM_TOTAL}</span>
          </div>
        </div>
        <p className="text-xs text-muted">
          {gain >= 0.05
            ? `+${fmt(gain)} grâce à cette leçon. `
            : gain <= -0.05
              ? `${fmt(gain)} : des questions que tu savais ont été ratées. `
              : ""}
          Estimation d&apos;après toutes tes réponses, sur la répartition officielle des 40 questions.
        </p>

        <details className="group mt-3 border-t border-border pt-2 text-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between py-1 font-semibold text-primary">
            Détail par thème
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
          </summary>
          <ul className="mt-2 space-y-2.5">
            {bilan.themes.map((t) => (
              <li key={t.id}>
                <div className="flex items-baseline justify-between gap-2">
                  <span>{t.titre}</span>
                  <span className="shrink-0 text-muted tabular-nums">
                    ≈ {fmt(t.apres)} sur {t.max} questions
                  </span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-border">
                  <div
                    className={`h-full rounded-full ${t.apres / t.max >= 0.8 ? "bg-success" : "bg-primary"}`}
                    style={{ width: `${(t.apres / t.max) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </details>
      </motion.section>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: apresAnneau + 0.4 }}
        className="flex items-center gap-2 rounded-card bg-primary-soft p-4 text-sm"
      >
        <CalendarCheck className="size-5 shrink-0 text-primary" />
        <AnnonceDate a={bilan.annonce} />
      </motion.p>

      <div className="mt-auto flex flex-col gap-3 pt-1">
        <form action={commencerLecon}>
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]">
            <Plus className="size-5" /> Encore une leçon
          </button>
        </form>
        <Link
          href="/"
          className="rounded-2xl border border-border bg-surface py-3 text-center font-semibold transition-transform active:scale-[0.98]"
        >
          Terminer pour aujourd&apos;hui
        </Link>
      </div>
    </div>
  );
}
