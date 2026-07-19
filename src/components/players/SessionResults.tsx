"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { RotateCcw, ArrowLeft, ArrowRight, Trophy, ThumbsUp, Dumbbell } from "lucide-react";
import { useExitSession } from "@/components/players/useExitSession";

interface Props {
  title: string;
  /** 0-100 */
  score: number;
  stats: { label: string; value: number | string }[];
  backHref: string;
  onRestart?: () => void;
  /** XP gagné, affiché quand la persistance est branchée */
  xp?: number;
  /** activité suivante du sous-thème, pour enchaîner */
  next?: { href: string; label: string };
}

export function SessionResults({ title, score, stats, backHref, onRestart, xp, next }: Props) {
  const exit = useExitSession(backHref);
  useEffect(() => {
    if (score < 80) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    import("canvas-confetti").then(({ default: confetti }) => {
      if (cancelled) return;
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#000091", "#ffffff", "#e1000f"],
      });
    });
    return () => {
      cancelled = true;
    };
  }, [score]);

  const { Icon, message } =
    score >= 80
      ? { Icon: Trophy, message: "Excellent !" }
      : score >= 50
        ? { Icon: ThumbsUp, message: "Bien joué, continue !" }
        : { Icon: Dumbbell, message: "L'entraînement paie, persévère !" };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-4 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="flex size-24 items-center justify-center rounded-full bg-primary-soft text-primary"
      >
        <Icon className="size-12" />
      </motion.div>

      <div>
        <h1 className="text-2xl font-bold">{message}</h1>
        <p className="mt-1 text-muted">{title}</p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-black text-primary"
      >
        {score}%
      </motion.p>

      {typeof xp === "number" && xp > 0 && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="rounded-full bg-gold-soft px-4 py-1.5 font-bold text-gold"
        >
          +{xp} XP
        </motion.p>
      )}

      <div className="flex w-full max-w-xs justify-center gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex-1 rounded-2xl border border-border bg-surface px-2 py-3"
          >
            <p className="text-xl font-bold tabular-nums">{s.value}</p>
            <p className="text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-xs flex-col gap-2 pt-2">
        {next && (
          <Link
            href={next.href}
            replace
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]"
          >
            Continuer : {next.label} <ArrowRight className="size-5" />
          </Link>
        )}
        {onRestart && (
          <button
            onClick={onRestart}
            className={`flex items-center justify-center gap-2 rounded-2xl py-3.5 font-semibold transition-transform active:scale-[0.98] ${
              next
                ? "border border-border bg-surface"
                : "bg-primary text-on-primary"
            }`}
          >
            <RotateCcw className="size-5" /> Recommencer
          </button>
        )}
        <button
          onClick={exit}
          className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface py-3.5 font-semibold transition-transform active:scale-[0.98]"
        >
          <ArrowLeft className="size-5" /> Retour
        </button>
      </div>
    </div>
  );
}
