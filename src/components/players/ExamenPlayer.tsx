"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Timer,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  CircleCheck,
  CircleX,
} from "lucide-react";
import type { Qcm } from "@/content/types";
import { EXAM_DURATION_MINUTES, EXAM_PASS, EXAM_TOTAL } from "@/lib/examen";
import type { ExamResult } from "@/actions/examen";

interface Props {
  deck: Qcm[];
  onSubmit: (answers: { qcmId: string; chosenIndex: number }[]) => Promise<ExamResult>;
}

export function ExamenPlayer({ deck, onSubmit }: Props) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_MINUTES * 60);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);
  const submittedRef = useRef(false);

  const qcmById = useMemo(() => new Map(deck.map((q) => [q.id, q])), [deck]);
  const answeredCount = Object.keys(answers).length;

  async function finish(current: Record<string, number>) {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      const payload = Object.entries(current).map(([qcmId, chosenIndex]) => ({
        qcmId,
        chosenIndex,
      }));
      setResult(await onSubmit(payload));
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (!started || result || submittedRef.current) return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          // temps écoulé : soumission automatique
          setAnswers((current) => {
            finish(current);
            return current;
          });
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, result]);

  /* ---------- écran d'accueil ---------- */
  if (!started) {
    return (
      <div className="flex min-h-[70dvh] flex-col items-center justify-center gap-6 text-center">
        <span className="flex size-20 items-center justify-center rounded-3xl bg-primary-soft text-primary">
          <GraduationCap className="size-10" />
        </span>
        <div>
          <h1 className="text-2xl font-black">Examen blanc</h1>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            Conditions réelles de l&apos;examen civique : <strong>{EXAM_TOTAL} questions</strong>,{" "}
            <strong>{EXAM_DURATION_MINUTES} minutes</strong>, admis à partir de{" "}
            <strong>
              {EXAM_PASS}/{EXAM_TOTAL}
            </strong>{" "}
            bonnes réponses. Pas de correction pendant l&apos;épreuve.
          </p>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="rounded-2xl bg-primary px-8 py-3.5 font-semibold text-on-primary shadow-lg shadow-primary/25 transition-transform active:scale-95"
        >
          Commencer l&apos;examen
        </button>
        <Link href="/dashboard" className="text-sm font-medium text-muted">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  /* ---------- résultats ---------- */
  if (result) {
    return (
      <div className="space-y-6 pb-6">
        <div
          className={`flex flex-col items-center gap-3 rounded-card p-6 text-center ${
            result.passed ? "bg-success-soft" : "bg-accent-soft"
          }`}
        >
          {result.passed ? (
            <CircleCheck className="size-14 text-success" />
          ) : (
            <CircleX className="size-14 text-accent" />
          )}
          <h1 className="text-2xl font-black">
            {result.passed ? "Admis ! 🎉" : "Recalé cette fois"}
          </h1>
          <p className="text-4xl font-black tabular-nums">
            {result.score}/{EXAM_TOTAL}
          </p>
          <p className="text-sm text-muted">
            Seuil de réussite : {EXAM_PASS}/{EXAM_TOTAL} · +{result.xp} XP
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-bold">Correction détaillée</h2>
          {result.corrections.map(({ qcmId, chosenIndex, correct }, i) => {
            const qcm = qcmById.get(qcmId);
            if (!qcm) return null;
            return (
              <details
                key={qcmId}
                className={`rounded-2xl border p-4 ${
                  correct ? "border-success/40 bg-surface" : "border-accent/40 bg-surface"
                }`}
              >
                <summary className="flex cursor-pointer items-start gap-2 text-sm font-semibold">
                  {correct ? (
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" />
                  ) : (
                    <CircleX className="mt-0.5 size-4 shrink-0 text-accent" />
                  )}
                  <span>
                    {i + 1}. {qcm.question}
                  </span>
                </summary>
                <div className="mt-3 space-y-1 text-sm">
                  {!correct && (
                    <p className="text-accent">
                      Ta réponse : {qcm.choices[chosenIndex] ?? "—"}
                    </p>
                  )}
                  <p className="text-success">
                    Bonne réponse : {qcm.choices[qcm.correctIndex]}
                  </p>
                  <p className="mt-2 text-muted">{qcm.explication}</p>
                </div>
              </details>
            );
          })}
        </section>

        <Link
          href="/dashboard"
          className="flex items-center justify-center rounded-2xl bg-primary py-3.5 font-semibold text-on-primary"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  /* ---------- épreuve ---------- */
  const qcm = deck[index];
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const urgent = secondsLeft < 300;

  return (
    <div className="flex min-h-[calc(100dvh-1rem)] flex-col pb-4">
      <header className="flex items-center justify-between gap-3 py-2">
        <span className="text-sm font-semibold text-muted tabular-nums">
          {index + 1}/{deck.length}
        </span>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-primary transition-[width]"
            style={{ width: `${(answeredCount / deck.length) * 100}%` }}
          />
        </div>
        <span
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold tabular-nums ${
            urgent ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"
          }`}
        >
          <Timer className="size-4" />
          {minutes}:{String(seconds).padStart(2, "0")}
        </span>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={qcm.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.15 }}
          className="flex flex-1 flex-col gap-4 pt-4"
        >
          <h1 className="text-lg font-bold leading-snug">{qcm.question}</h1>

          <div className="space-y-3">
            {qcm.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => setAnswers((a) => ({ ...a, [qcm.id]: i }))}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left font-medium transition-colors ${
                  answers[qcm.id] === i
                    ? "border-primary bg-primary-soft"
                    : "border-border bg-surface active:scale-[0.99]"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          <div className="mt-auto flex gap-3">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex items-center justify-center gap-1 rounded-2xl border border-border bg-surface px-5 py-3.5 font-semibold disabled:opacity-40"
            >
              <ArrowLeft className="size-5" />
            </button>
            {index + 1 < deck.length ? (
              <button
                onClick={() => setIndex((i) => i + 1)}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
              >
                Suivante <ArrowRight className="size-5" />
              </button>
            ) : (
              <button
                onClick={() => finish(answers)}
                disabled={submitting}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-success py-3.5 font-semibold text-white transition-transform active:scale-[0.98] disabled:opacity-60"
              >
                {submitting ? "Correction…" : `Terminer (${answeredCount}/${deck.length} répondues)`}
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
