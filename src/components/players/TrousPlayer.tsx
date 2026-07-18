"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ArrowRight, Sparkles, Check, XCircle } from "lucide-react";
import type { TexteATrous } from "@/content/types";
import { SessionResults } from "@/components/players/SessionResults";

interface Props {
  deck: TexteATrous[];
  title: string;
  backHref: string;
  next?: { href: string; label: string };
}

interface BlankResult {
  index: number;
  correct: boolean;
  comment?: string;
  accepted: string;
}

interface GradeResponse {
  gradedBy: "local" | "ai";
  verdict: "correct" | "partial" | "incorrect";
  score: number;
  blanks: BlankResult[];
  xp: number;
}

export function TrousPlayer({ deck, title, backHref, next: nextSession }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [error, setError] = useState(false);
  const [scores, setScores] = useState<number[]>([]);
  const [xpTotal, setXpTotal] = useState(0);
  const router = useRouter();

  const exercise = deck[index];
  const done = index >= deck.length;

  const parts = exercise ? exercise.template.split(/\{\{(\d+)\}\}/g) : [];
  const allFilled =
    exercise?.blanks.every((b) => (answers[b.index] ?? "").trim().length > 0) ?? false;

  async function grade() {
    if (!exercise || grading || !allFilled) return;
    setGrading(true);
    setError(false);
    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "trous",
          exerciseId: exercise.id,
          answers: Object.fromEntries(
            Object.entries(answers).map(([k, v]) => [String(k), v]),
          ),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data: GradeResponse = await res.json();
      setResult(data);
      setScores((s) => [...s, data.score]);
      if (data.xp) setXpTotal((x) => x + data.xp);
    } catch {
      setError(true);
    } finally {
      setGrading(false);
    }
  }

  function next() {
    setAnswers({});
    setResult(null);
    setError(false);
    setIndex((i) => i + 1);
  }

  if (done) {
    const avg = scores.length === 0 ? 0 : Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    return (
      <SessionResults
        title={title}
        next={nextSession}
        score={avg}
        xp={xpTotal}
        stats={[
          { label: "Textes", value: deck.length },
          { label: "Score moyen", value: `${avg}%` },
        ]}
        backHref={backHref}
        onRestart={() => {
          setIndex(0);
          setScores([]);
          setXpTotal(0);
          setAnswers({});
          setResult(null);
        }}
      />
    );
  }

  const progress = deck.length === 0 ? 0 : index / deck.length;
  const resultByIndex = new Map(result?.blanks.map((b) => [b.index, b]) ?? []);

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 py-2">
        <button
          aria-label="Quitter la session"
          onClick={() => router.push(backHref)}
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
          {index + 1}/{deck.length}
        </span>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={exercise.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.18 }}
          className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pt-4"
        >
          {exercise.intro && (
            <p className="text-sm font-semibold text-muted">{exercise.intro}</p>
          )}

          <div className="rounded-card border border-border bg-surface p-5 text-lg leading-loose shadow-sm">
            {parts.map((part, i) => {
              if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
              const blankIndex = Number(part);
              const res = resultByIndex.get(blankIndex);
              return (
                <span key={i} className="inline-block align-baseline">
                  <input
                    type="text"
                    value={answers[blankIndex] ?? ""}
                    onChange={(e) =>
                      setAnswers((a) => ({ ...a, [blankIndex]: e.target.value }))
                    }
                    disabled={result !== null || grading}
                    size={Math.max(6, (answers[blankIndex] ?? "").length)}
                    aria-label={`Trou ${blankIndex}`}
                    className={`mx-1 inline-block rounded-lg border-b-2 bg-transparent px-2 py-0.5 text-center text-base font-semibold outline-none transition-colors ${
                      res == null
                        ? "border-primary/50 focus:border-primary"
                        : res.correct
                          ? "border-success bg-success-soft text-success"
                          : "border-accent bg-accent-soft text-accent line-through"
                    }`}
                  />
                  {res && !res.correct && (
                    <span className="mx-1 inline-block font-semibold text-success">
                      {res.accepted}
                    </span>
                  )}
                </span>
              );
            })}
          </div>

          {error && (
            <p className="rounded-2xl bg-accent-soft p-3 text-sm font-medium text-accent">
              Impossible de corriger pour le moment. Vérifie ta connexion et réessaie.
            </p>
          )}

          {!result && (
            <button
              onClick={grade}
              disabled={!allFilled || grading}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98] disabled:opacity-50"
            >
              {grading ? (
                <>
                  <Sparkles className="size-5 animate-pulse" />
                  Correction en cours…
                </>
              ) : (
                <>
                  <Send className="size-5" />
                  Corriger
                </>
              )}
            </button>
          )}

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                <div
                  className={`flex items-center gap-2 rounded-2xl p-4 font-semibold ${
                    result.verdict === "correct"
                      ? "bg-success-soft text-success"
                      : result.verdict === "partial"
                        ? "bg-gold-soft text-gold"
                        : "bg-accent-soft text-accent"
                  }`}
                >
                  {result.verdict === "correct" ? (
                    <Check className="size-6" />
                  ) : (
                    <XCircle className="size-6" />
                  )}
                  <span>
                    {result.verdict === "correct"
                      ? "Parfait !"
                      : result.verdict === "partial"
                        ? "Presque !"
                        : "À revoir"}
                  </span>
                  <span className="ml-auto text-sm tabular-nums">{result.score}/100</span>
                </div>

                {result.blanks.some((b) => !b.correct && b.comment) && (
                  <ul className="space-y-1 rounded-2xl bg-primary-soft p-4 text-sm">
                    {result.blanks
                      .filter((b) => !b.correct && b.comment)
                      .map((b) => (
                        <li key={b.index}>
                          <span className="font-bold text-primary">Trou {b.index} :</span>{" "}
                          {b.comment}
                        </li>
                      ))}
                  </ul>
                )}

                <button
                  onClick={next}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
                >
                  {index + 1 < deck.length ? "Texte suivant" : "Voir les résultats"}
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
