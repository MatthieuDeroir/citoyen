"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Plus, CalendarCheck } from "lucide-react";
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

/** Bilan de fin de leçon : ce qui a bougé sur chacun des 5 thèmes. */
export function BilanLeconView({ bilan, resultats }: { bilan: BilanLecon; resultats?: boolean[] }) {
  const delta = bilan.scoreApres - bilan.scoreAvant;
  const admis = bilan.scoreApres >= EXAM_PASS;
  // fin de l'anneau : les barres des thèmes prennent le relais
  const apresAnneau = 1.35;
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overscroll-contain py-4">
      {bilan.correct >= SEUIL_FETE && <Confettis seed={bilan.correct + bilan.leconsAujourdhui} />}
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
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: apresAnneau, type: "spring", stiffness: 300, damping: 20 }}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-3 py-1 text-sm font-semibold text-gold"
        >
          <Flamme allumee={bilan.serie > 0} /> Série : {bilan.serie} jour{bilan.serie > 1 ? "s" : ""}
        </motion.p>
      </header>

      <section className="rounded-card border border-border bg-surface p-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-bold">Score attendu à l&apos;examen</h2>
          <p className="tabular-nums">
            <span className={`text-2xl font-extrabold ${admis ? "text-success" : ""}`}>
              <Compteur de={bilan.scoreAvant} a={bilan.scoreApres} decimales={1} duree={1.2} delai={apresAnneau} />
            </span>
            <span className="text-muted">/{EXAM_TOTAL}</span>
          </p>
        </div>
        <p className="mt-0.5 text-sm text-muted">
          {delta >= 0.05 ? `+${fmt(delta)} ` : delta <= -0.05 ? `${fmt(delta)} ` : "Stable "}
          sur cette leçon · admission estimée à {Math.round(bilan.admission * 100)} %
        </p>

        <ul className="mt-4 space-y-3">
          {bilan.themes.map((t, i) => {
            const d = t.apres - t.avant;
            return (
              <li key={t.id}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{t.titre}</span>
                  <span className="tabular-nums text-muted">
                    {d >= 0.05 && <span className="mr-1.5 font-semibold text-success">+{fmt(d)}</span>}
                    {d <= -0.05 && <span className="mr-1.5 font-semibold text-accent">{fmt(d)}</span>}
                    {fmt(t.apres)}/{t.max}
                  </span>
                </div>
                <div className="relative mt-1 h-2.5 overflow-hidden rounded-full bg-border">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-primary/35"
                    style={{ width: `${(Math.min(t.avant, t.apres) / t.max) * 100}%` }}
                  />
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full ${d <= -0.05 ? "bg-accent" : "bg-primary"}`}
                    initial={{ width: `${(t.avant / t.max) * 100}%` }}
                    animate={{ width: `${(t.apres / t.max) * 100}%` }}
                    transition={{ delay: apresAnneau + i * 0.12, duration: 0.7, ease: "easeOut" }}
                  />
                  {/* seuil d'admission : 80 % de chaque thème */}
                  <span className="absolute inset-y-0 left-[80%] w-0.5 bg-foreground/30" />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="flex items-center gap-2 rounded-card bg-primary-soft p-4 text-sm">
        <CalendarCheck className="size-5 shrink-0 text-primary" />
        <AnnonceDate a={bilan.annonce} />
      </p>

      <div className="mt-auto flex flex-col gap-3">
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
