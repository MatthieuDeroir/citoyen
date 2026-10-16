"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

/** Nombre qui défile de `de` à `a` (une seule fois, au montage). */
export function Compteur({
  de = 0,
  a,
  decimales = 0,
  duree = 1.1,
  delai = 0,
}: {
  de?: number;
  a: number;
  decimales?: number;
  duree?: number;
  delai?: number;
}) {
  const reduit = useReducedMotion();
  const [v, setV] = useState(reduit ? a : de);
  useEffect(() => {
    if (reduit) return;
    const c = animate(de, a, { duration: duree, delay: delai, ease: [0.22, 1, 0.36, 1], onUpdate: setV });
    return () => c.stop();
  }, [de, a, duree, delai, reduit]);
  return (
    <span className="tabular-nums">
      {(reduit ? a : v).toLocaleString("fr-FR", {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales,
      })}
    </span>
  );
}
