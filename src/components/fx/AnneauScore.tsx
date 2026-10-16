"use client";

import { motion, useReducedMotion } from "motion/react";
import { Compteur } from "./Compteur";

/**
 * Score de la leçon dans un anneau d'un segment par question, allumés dans
 * l'ordre des réponses (vert juste, rouge faux) pendant que le nombre défile.
 */
export function AnneauScore({ resultats }: { resultats: boolean[] }) {
  const reduit = useReducedMotion();
  const n = resultats.length;
  const justes = resultats.filter(Boolean).length;
  const R = 70;
  const C = 2 * Math.PI * R;
  const ecart = n > 1 ? 4 : 0;
  const seg = C / n - ecart;
  const pas = 1.1 / Math.max(1, n);

  return (
    <div className="relative mx-auto size-44">
      <svg viewBox="0 0 180 180" className="size-full -rotate-90" aria-hidden>
        {resultats.map((ok, i) => (
          <g key={i}>
            <circle
              cx="90"
              cy="90"
              r={R}
              fill="none"
              stroke="var(--border)"
              strokeWidth="12"
              strokeDasharray={`${seg} ${C - seg}`}
              strokeDashoffset={-i * (seg + ecart)}
            />
            <motion.circle
              cx="90"
              cy="90"
              r={R}
              fill="none"
              stroke={ok ? "var(--success)" : "var(--accent)"}
              strokeWidth="12"
              strokeLinecap="butt"
              strokeDasharray={`${seg} ${C - seg}`}
              strokeDashoffset={-i * (seg + ecart)}
              initial={reduit ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + i * pas, duration: 0.18 }}
            />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-5xl font-extrabold leading-none">
          <Compteur a={justes} duree={1.25} delai={0.15} />
        </p>
        <p className="mt-1 text-sm font-semibold text-muted">sur {n}</p>
      </div>
    </div>
  );
}
