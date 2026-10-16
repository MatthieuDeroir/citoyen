"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { TRICOLORE, hasard } from "./couleurs";

/** Pluie de confettis tricolores, une fois, par-dessus l'écran. */
export function Confettis({ nombre = 70, seed = 3 }: { nombre?: number; seed?: number }) {
  const reduit = useReducedMotion();
  const pieces = useMemo(() => {
    const r = hasard(seed * 104729);
    return Array.from({ length: nombre }, (_, i) => ({
      gauche: r() * 100,
      derive: (r() - 0.5) * 160,
      delai: r() * 0.5,
      duree: 1.8 + r() * 1.4,
      tours: (r() > 0.5 ? 1 : -1) * (360 + r() * 720),
      largeur: 6 + r() * 6,
      couleur: TRICOLORE[i % 3],
    }));
  }, [nombre, seed]);
  if (reduit) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.gauche}%`,
            width: p.largeur,
            height: p.largeur * 0.45,
            background: p.couleur,
            borderRadius: 1,
            boxShadow: p.couleur === "#ffffff" ? "0 0 0 1px rgba(0,0,145,.3)" : undefined,
          }}
          initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
          animate={{ y: "105vh", x: p.derive, rotate: p.tours, opacity: [1, 1, 0.9, 0] }}
          transition={{ duration: p.duree, delay: p.delai, ease: [0.25, 0.4, 0.6, 1] }}
        />
      ))}
    </div>
  );
}
