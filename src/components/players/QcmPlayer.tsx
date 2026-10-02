"use client";

import { useEffect, useRef, useState } from "react";
import { useExitSession } from "@/components/players/useExitSession";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, XCircle, ArrowRight, PlayCircle } from "lucide-react";
import type { Qcm } from "@/content/types";
import type { WithChoiceOrder } from "@/lib/shuffle";
import { SessionResults } from "@/components/players/SessionResults";
import { clearSession, saveSession, useSavedSession } from "@/lib/sessionStore";

type Deck = (Qcm & WithChoiceOrder)[];

/** État sauvegardé pour reprendre une session QCM quittée en cours de route. */
interface QcmSaveState {
  deck: Deck;
  index: number;
  correctCount: number;
  xpTotal: number;
}

interface Props {
  /** Paquet déjà mélangé côté serveur (ordre des questions et des choix) —
   * voir `withChoiceOrder` : mélanger ici, côté client, provoquerait un
   * mismatch d'hydratation (Math.random() donne un résultat différent au
   * SSR et à l'hydratation). */
  deck: Deck;
  title: string;
  /** Active la reprise : la session est sauvegardée sous cette clé, et
   * `resumeHref` est la page qui permet de la reprendre. */
  resume?: { key: string; href: string };
  backHref: string;
  onSubmit?: (qcmId: string, chosenIndex: number) => Promise<{ correct: boolean; xp: number }>;
  next?: { href: string; label: string };
}

export function QcmPlayer({
  deck: initialDeck,
  title,
  backHref,
  onSubmit,
  next: nextSession,
  resume,
}: Props) {
  const saved = useSavedSession<QcmSaveState>(resume?.key);
  // tant que l'utilisateur n'a pas choisi entre reprendre et recommencer
  const [resumeDecided, setResumeDecided] = useState(false);
  const [questions, setQuestions] = useState(initialDeck);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [pending, setPending] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [xpTotal, setXpTotal] = useState(0);
  const [sessionKey, setSessionKey] = useState(0);
  const exitSession = useExitSession(backHref);
  // Verrou anti double-clic/double-tap : sans lui, un deuxième appel rapproché
  // à next() incrémente l'index deux fois et saute une question sans que rien
  // ne s'affiche entre les deux (mode="wait" ne rend jamais l'état intermédiaire).
  const advancingRef = useRef(false);

  const qcm = questions[index];
  const done = index >= questions.length;
  const revealed = chosen !== null;

  useEffect(() => {
    advancingRef.current = false;
  }, [index]);

  async function choose(i: number) {
    if (revealed || pending || !qcm) return;
    setPending(true);
    setChosen(i);
    const isCorrect = i === qcm.correctIndex;
    const newCorrect = correctCount + (isCorrect ? 1 : 0);
    let newXp = xpTotal;
    if (isCorrect) setCorrectCount(newCorrect);
    try {
      const res = await onSubmit?.(qcm.id, i);
      if (res?.xp) {
        newXp += res.xp;
        setXpTotal(newXp);
      }
    } catch {
      // hors-ligne / erreur : la session continue sans persistance
    } finally {
      setPending(false);
    }
    if (resume) {
      const nextIndex = index + 1;
      if (nextIndex >= questions.length) clearSession(resume.key);
      else
        saveSession<QcmSaveState>({
          key: resume.key,
          href: resume.href,
          title,
          progress: `${nextIndex}/${questions.length} questions faites`,
          state: { deck: questions, index: nextIndex, correctCount: newCorrect, xpTotal: newXp },
        });
    }
  }

  function restore(state: QcmSaveState) {
    setQuestions(state.deck);
    setIndex(state.index);
    setCorrectCount(state.correctCount);
    setXpTotal(state.xpTotal);
    setResumeDecided(true);
  }

  function next() {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setChosen(null);
    setIndex((i) => i + 1);
  }

  // session sauvegardée : proposer de la reprendre avant de commencer
  if (resume && saved && !resumeDecided && index === 0 && !revealed) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-5 text-center">
        <PlayCircle className="size-14 text-primary" />
        <div>
          <h1 className="text-2xl font-bold">Session en cours</h1>
          <p className="mx-auto mt-1 max-w-xs text-sm text-muted">
            {title} · {saved.progress}
          </p>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-3">
          <button
            onClick={() => restore(saved.state)}
            className="rounded-2xl bg-primary px-6 py-3.5 font-semibold text-on-primary transition-transform active:scale-95"
          >
            Reprendre
          </button>
          <button
            onClick={() => {
              clearSession(resume.key);
              setResumeDecided(true);
            }}
            className="rounded-2xl border border-border bg-surface px-6 py-3 text-sm font-semibold transition-transform active:scale-95"
          >
            Recommencer une nouvelle session
          </button>
        </div>
      </div>
    );
  }

  if (done) {
    const score = questions.length === 0 ? 0 : Math.round((correctCount / questions.length) * 100);
    return (
      <SessionResults
        title={title}
        next={nextSession}
        score={score}
        xp={xpTotal}
        stats={[
          { label: "Questions", value: questions.length },
          { label: "Justes", value: correctCount },
          { label: "Fautes", value: questions.length - correctCount },
        ]}
        backHref={backHref}
        onRestart={() => {
          setIndex(0);
          setChosen(null);
          setCorrectCount(0);
          setXpTotal(0);
          setSessionKey((k) => k + 1);
        }}
      />
    );
  }

  const progress = questions.length === 0 ? 0 : index / questions.length;

  return (
    <div key={sessionKey} className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 py-2">
        <button
          aria-label="Quitter la session"
          onClick={exitSession}
          className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
        >
          <X className="size-6" />
        </button>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-primary"
            animate={{ width: `${progress * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>
        <span className="text-sm font-semibold text-muted tabular-nums">
          {index + 1}/{questions.length}
        </span>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={qcm.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.18 }}
          className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pt-4"
        >
          <h1 className="text-lg font-bold leading-snug">{qcm.question}</h1>

          <div className="space-y-3">
            {qcm.order.map((i) => {
              const choice = qcm.choices[i];
              const isCorrect = i === qcm.correctIndex;
              const isChosen = i === chosen;
              const state = !revealed
                ? "idle"
                : isCorrect
                  ? "correct"
                  : isChosen
                    ? "wrong"
                    : "dim";

              return (
                <motion.button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={revealed}
                  animate={
                    state === "wrong"
                      ? { x: [0, -8, 8, -6, 6, 0] }
                      : state === "correct" && revealed
                        ? { scale: [1, 1.03, 1] }
                        : {}
                  }
                  transition={{ duration: 0.4 }}
                  className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left font-medium transition-colors ${
                    state === "idle"
                      ? "border-border bg-surface active:scale-[0.99]"
                      : state === "correct"
                        ? "border-success bg-success-soft text-success"
                        : state === "wrong"
                          ? "border-accent bg-accent-soft text-accent"
                          : "border-border bg-surface opacity-50"
                  }`}
                >
                  <span className="flex-1">{choice}</span>
                  {revealed && isCorrect && <Check className="size-5 shrink-0" />}
                  {state === "wrong" && <XCircle className="size-5 shrink-0" />}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="rounded-2xl bg-primary-soft p-4 text-sm leading-relaxed">
                  <p className="mb-1 font-bold text-primary">Explication</p>
                  <p>{qcm.explication}</p>
                </div>
                <button
                  onClick={next}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
                >
                  {index + 1 < questions.length ? "Question suivante" : "Voir les résultats"}
                  <ArrowRight className="size-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
