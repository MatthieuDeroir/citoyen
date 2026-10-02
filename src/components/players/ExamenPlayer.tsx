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
  Trophy,
  PlayCircle,
  SkipForward,
} from "lucide-react";
import type { Qcm } from "@/content/types";
import type { WithChoiceOrder } from "@/lib/shuffle";
import { EXAM_DURATION_MINUTES, EXAM_TOTAL, passMark } from "@/lib/examen";
import { clearSession, saveSession, useSavedSession } from "@/lib/sessionStore";
import type { ExamResult } from "@/actions/examen";

type Deck = (Qcm & WithChoiceOrder)[];

/** État sauvegardé pour reprendre un examen quitté en cours de route. */
interface ExamSaveState {
  deck: Deck;
  index: number;
  answers: Record<string, number>;
  secondsLeft: number;
}

interface Props {
  /** Paquet déjà mélangé côté serveur (voir `withChoiceOrder`) : mélanger
   * l'ordre des choix ici, côté client, provoquerait un mismatch
   * d'hydratation (Math.random() diffère entre le SSR et l'hydratation). */
  deck: Deck;
  /** « blanc » : 40 questions en 45 min · « ultime » : toute la banque, sans chrono. */
  mode?: "blanc" | "ultime";
  onSubmit: (
    questionIds: string[],
    answers: { qcmId: string; chosenIndex: number }[],
  ) => Promise<ExamResult>;
}

export function ExamenPlayer({ deck: initialDeck, mode = "blanc", onSubmit }: Props) {
  const ultime = mode === "ultime";
  const storageKey = `examen-${mode}`;
  const saved = useSavedSession<ExamSaveState>(storageKey);
  const [deck, setDeck] = useState(initialDeck);
  const [started, setStarted] = useState(false);
  const [confirmFinish, setConfirmFinish] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_MINUTES * 60);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);
  const submittedRef = useRef(false);

  const qcmById = useMemo(() => new Map(deck.map((q) => [q.id, q])), [deck]);
  const answeredCount = Object.keys(answers).length;
  const pass = passMark(deck.length);
  const title = ultime ? "Examen ultime" : "Examen blanc";

  // Sauvegarde continue : un clic par mégarde ailleurs dans l'app ne fait
  // plus perdre l'examen, il se reprend depuis l'accueil ou cette page.
  useEffect(() => {
    if (!started || result || submittedRef.current) return;
    saveSession<ExamSaveState>({
      key: storageKey,
      href: ultime ? "/examen/ultime" : "/examen/nouveau",
      title,
      progress: `${answeredCount}/${deck.length} répondues${
        ultime ? "" : ` · ${Math.ceil(secondsLeft / 60)} min restantes`
      }`,
      state: { deck, index, answers, secondsLeft },
    });
  }, [started, result, deck, index, answers, secondsLeft, answeredCount, storageKey, ultime, title]);

  function resume(state: ExamSaveState) {
    setDeck(state.deck);
    setIndex(Math.min(state.index, state.deck.length - 1));
    setAnswers(state.answers);
    setSecondsLeft(state.secondsLeft);
    setStarted(true);
  }

  function startFresh() {
    clearSession(storageKey);
    setDeck(initialDeck);
    setStarted(true);
  }

  function nextUnanswered() {
    for (let step = 1; step <= deck.length; step++) {
      const i = (index + step) % deck.length;
      if (answers[deck[i].id] === undefined) {
        setIndex(i);
        return;
      }
    }
  }

  async function finish(current: Record<string, number>) {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      const payload = Object.entries(current).map(([qcmId, chosenIndex]) => ({
        qcmId,
        chosenIndex,
      }));
      setResult(await onSubmit(deck.map((q) => q.id), payload));
      clearSession(storageKey);
    } catch {
      // échec réseau : la copie reste sauvegardée, on peut la rendre à nouveau
      submittedRef.current = false;
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (ultime || !started || result || submittedRef.current) return;
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
  }, [started, result, ultime]);

  /* ---------- écran d'accueil ---------- */
  if (!started) {
    const savedAnswered = saved ? Object.keys(saved.state.answers).length : 0;
    return (
      <div className="flex min-h-[70dvh] flex-col items-center justify-center gap-6 text-center">
        <span className="flex size-20 items-center justify-center rounded-3xl bg-primary-soft text-primary">
          {ultime ? <Trophy className="size-10" /> : <GraduationCap className="size-10" />}
        </span>
        <div>
          <h1 className="text-2xl font-black">{title}</h1>
          {ultime ? (
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
              <strong>Toutes les {deck.length} questions officielles</strong> publiées par le
              ministère de l&apos;Intérieur, dans un ordre aléatoire. Pas de chrono : ta copie
              est sauvegardée au fil de l&apos;eau, tu peux faire une pause et reprendre plus
              tard. Objectif : <strong>{pass}/{deck.length}</strong> (80 %).
            </p>
          ) : (
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
              Conditions réelles de l&apos;examen civique : <strong>{EXAM_TOTAL} questions</strong>,{" "}
              <strong>{EXAM_DURATION_MINUTES} minutes</strong>, admis à partir de{" "}
              <strong>
                {pass}/{EXAM_TOTAL}
              </strong>{" "}
              bonnes réponses. Pas de correction pendant l&apos;épreuve. Le sujet est tiré des{" "}
              <strong>questions officielles</strong> publiées par le ministère de l&apos;Intérieur.
            </p>
          )}
        </div>
        {saved ? (
          <div className="flex w-full max-w-sm flex-col gap-3">
            <button
              onClick={() => resume(saved.state)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-3.5 font-semibold text-on-primary shadow-lg shadow-primary/25 transition-transform active:scale-95"
            >
              <PlayCircle className="size-5" />
              Reprendre ({savedAnswered}/{saved.state.deck.length} répondues)
            </button>
            <button
              onClick={startFresh}
              className="rounded-2xl border border-border bg-surface px-8 py-3 text-sm font-semibold transition-transform active:scale-95"
            >
              Abandonner et commencer un nouveau sujet
            </button>
          </div>
        ) : (
          <button
            onClick={startFresh}
            className="rounded-2xl bg-primary px-8 py-3.5 font-semibold text-on-primary shadow-lg shadow-primary/25 transition-transform active:scale-95"
          >
            Commencer l&apos;examen
          </button>
        )}
        <Link href="/examen" className="text-sm font-medium text-muted">
          Retour
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
            {result.score}/{deck.length}
          </p>
          <p className="text-sm text-muted">
            Seuil de réussite : {pass}/{deck.length} · +{result.xp} XP
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
                      Ta réponse :{" "}
                      {chosenIndex === null
                        ? "aucune réponse"
                        : (qcm.choices[chosenIndex] ?? "—")}
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

        <div className="flex gap-3">
          <Link
            href="/examen"
            className="flex flex-1 items-center justify-center rounded-2xl border border-border bg-surface py-3.5 font-semibold"
          >
            Historique
          </Link>
          <Link
            href="/dashboard"
            className="flex flex-1 items-center justify-center rounded-2xl bg-primary py-3.5 font-semibold text-on-primary"
          >
            Accueil
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- épreuve ---------- */
  const qcm = deck[index];
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const urgent = secondsLeft < 300;

  return (
    <div className="flex flex-1 flex-col">
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
        {ultime ? (
          <span className="rounded-full bg-primary-soft px-3 py-1 text-sm font-bold tabular-nums text-primary">
            {answeredCount} rép.
          </span>
        ) : (
          <span
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold tabular-nums ${
              urgent ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"
            }`}
          >
            <Timer className="size-4" />
            {minutes}:{String(seconds).padStart(2, "0")}
          </span>
        )}
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={qcm.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.15 }}
          className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pt-4"
        >
          <h1 className="text-lg font-bold leading-snug">{qcm.question}</h1>

          <div className="space-y-3">
            {qcm.order.map((i) => {
              const choice = qcm.choices[i];
              return (
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
              );
            })}
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

          {ultime && (
            <div className="flex items-center justify-between gap-3 pb-1 text-sm">
              <button
                onClick={nextUnanswered}
                disabled={answeredCount === deck.length}
                className="flex items-center gap-1 font-semibold text-primary disabled:opacity-40"
              >
                <SkipForward className="size-4" /> Prochaine sans réponse
              </button>
              {confirmFinish ? (
                <button
                  onClick={() => finish(answers)}
                  disabled={submitting}
                  className="rounded-full bg-accent px-3 py-1.5 font-semibold text-white disabled:opacity-60"
                >
                  {submitting
                    ? "Correction…"
                    : `Confirmer (${deck.length - answeredCount} sans réponse)`}
                </button>
              ) : (
                <button
                  onClick={() => setConfirmFinish(true)}
                  className="font-semibold text-muted underline-offset-2 hover:underline"
                >
                  Rendre la copie
                </button>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
