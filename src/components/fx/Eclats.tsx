"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { TRICOLORE, hasard } from "./couleurs";

/**
 * Éclats tricolores qui jaillissent du centre de leur parent (positionné en
 * relative) : la confirmation d'une bonne réponse.
 */
export function Eclats({ seed = 1, nombre = 18 }: { seed?: number; nombre?: number }) {
  const reduit = useReducedMotion();
  const eclats = useMemo(() => {
    const r = hasard(seed * 7919);
    return Array.from({ length: nombre }, (_, i) => {
      const angle = (i / nombre) * Math.PI * 2 + r() * 0.5;
      const distance = 70 + r() * 80;
      return {
        x: Math.cos(angle) * distance * 1.6,
        y: Math.sin(angle) * distance * 0.7,
        taille: 7 + r() * 6,
        couleur: TRICOLORE[i % 3],
        rotation: r() * 360,
        rond: r() > 0.5,
      };
    });
  }, [seed, nombre]);
  if (reduit) return null;
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {eclats.map((e, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{
            width: e.taille,
            height: e.rond ? e.taille : e.taille * 0.45,
            background: e.couleur,
            borderRadius: e.rond ? 999 : 1,
            boxShadow: e.couleur === "#ffffff" ? "0 0 0 1px rgba(0,0,145,.35)" : undefined,
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.4, rotate: 0 }}
          animate={{ x: e.x, y: e.y, opacity: 0, scale: 1, rotate: e.rotation }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </span>
  );
}
