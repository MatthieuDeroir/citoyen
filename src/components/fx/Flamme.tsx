"use client";

import { motion, useReducedMotion } from "motion/react";
import { Flame } from "lucide-react";

/** Flamme de la série : vacille doucement quand elle est allumée. */
export function Flamme({ allumee, className = "size-4" }: { allumee: boolean; className?: string }) {
  const reduit = useReducedMotion();
  if (!allumee || reduit) return <Flame className={className} />;
  return (
    <motion.span
      className="inline-flex origin-bottom"
      animate={{ scaleY: [1, 1.12, 0.96, 1.08, 1], rotate: [0, -4, 3, -2, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Flame className={className} />
    </motion.span>
  );
}
