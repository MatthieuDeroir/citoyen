"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ArrowRight, Sparkles, CircleCheck, CircleAlert, CircleX } from "lucide-react";
import type { QuestionOuverte } from "@/content/types";
import { SessionResults } from "@/components/players/SessionResults";
import { submitSelfEval } from "@/actions/attempts";

interface Props {
  deck: QuestionOuverte[];
  title: string;
  backHref: string;
}

type Verdict = "correct" | "partial" | "incorrect";

interface GradeResponse {
  gradedBy: "ai" | "self";
  verdict?: Verdict;
  score?: number;
  feedback?: string;
  expectedAnswer: string;
  xp?: number;
}

const verdictUi: Record<Verdict, { icon: typeof CircleCheck; label: string; cls: string }> = {
  correct: { icon: CircleCheck, label: "Correct", cls: "text-success bg-success-soft" },
  partial: { icon: CircleAlert, label: "Partiellement juste", cls: "text-gold bg-gold-soft" },
  incorrect: { icon: CircleX, label: "À retravailler", cls: "text-accent bg-accent-soft" },
};

export function OuvertePlayer({ deck, title, backHref }: Props) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [grading, setGrading] = useState(false);
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [xpTotal, setXpTotal] = useState(0);
  const router = useRouter();

  const question = deck[index];
  const done = index >= deck.length;

  async function grade() {
    if (!question || answer.trim().length === 0 || grading) return;
    setGrading(true);
    try {
      const res = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "ouverte", exerciseId: question.id, answer }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data: GradeResponse = await res.json();
      setResult(data);
      if (data.gradedBy === "ai") {
        const gained = data.xp ?? 0;
        setScores((s) => [...s, data.score ?? 0]);
        if (gained > 0) setXpTotal((x) => x + gained);
      }
    } catch {
      setResult({ gradedBy: "self", expectedAnswer: question.expectedAnswer });
    } finally {
      setGrading(false);
    }
  }

  async function selfEval(verdict: Verdict) {
    if (!question) return;
    const score = verdict === "correct" ? 100 : verdict === "partial" ? 50 : 0;
    setScores((s) => [...s, score]);
    try {
      const res = await submitSelfEval(question.id, answer, verdict);
      if (res?.xp) setXpTotal((x) => x + res.xp);
    } catch {}
    next();
  }

  function next() {
    setAnswer("");
    setResult(null);
    setIndex((i) => i + 1);
  }

  if (done) {
    const avg = scores.length === 0 ? 0 : Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    return (
      <SessionResults
        title={title}
        score={avg}
        xp={xpTotal}
        stats={[
          { label: "Questions", value: deck.length },
          { label: "Score moyen", value: `${avg}%` },
        ]}
        backHref={backHref}
        onRestart={() => {
          setIndex(0);
          setScores([]);
          setXpTotal(0);
          setAnswer("");
          setResult(null);
        }}
      />
    );
  }

  const progress = deck.length === 0 ? 0 : index / deck.length;
  const verdict = result?.verdict ? verdictUi[result.verdict] : null;

  return (
    <div className="flex min-h-[calc(100dvh-1rem)] flex-col pb-4">
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
          key={question.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.18 }}
          className="flex flex-1 flex-col gap-4 pt-4"
        >
          <div className="rounded-card border border-border bg-surface p-5 shadow-sm">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary">
              Comme à l&apos;entretien
            </p>
            <h1 className="text-lg font-bold leading-snug">{question.question}</h1>
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={grading || result !== null}
            placeholder="Réponds avec tes mots, comme si tu étais en préfecture…"
            rows={5}
            className="w-full resize-none rounded-2xl border-2 border-border bg-surface p-4 outline-none transition-colors focus:border-primary disabled:opacity-70"
          />

          {!result && (
            <button
              onClick={grade}
              disabled={answer.trim().length === 0 || grading}
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
                  Envoyer ma réponse
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
                {result.gradedBy === "ai" && verdict && (
                  <>
                    <div className={`flex items-center gap-2 rounded-2xl p-4 font-semibold ${verdict.cls}`}>
                      <verdict.icon className="size-6 shrink-0" />
                      <span>{verdict.label}</span>
                      <span className="ml-auto text-sm tabular-nums">{result.score}/100</span>
                    </div>
                    {result.feedback && (
                      <div className="rounded-2xl bg-primary-soft p-4 text-sm leading-relaxed">
                        <p className="mb-1 font-bold text-primary">Feedback</p>
                        <p>{result.feedback}</p>
                      </div>
                    )}
                    <details className="rounded-2xl border border-border bg-surface p-4 text-sm">
                      <summary className="cursor-pointer font-semibold">Réponse modèle</summary>
                      <p className="mt-2 leading-relaxed text-muted">{result.expectedAnswer}</p>
                    </details>
                    <button
                      onClick={next}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
                    >
                      {index + 1 < deck.length ? "Question suivante" : "Voir les résultats"}
                      <ArrowRight className="size-5" />
                    </button>
                  </>
                )}

                {result.gradedBy === "self" && (
                  <>
                    <div className="rounded-2xl bg-gold-soft p-4 text-sm">
                      <p className="font-semibold text-gold">
                        Correction IA indisponible — compare ta réponse et évalue-toi.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-surface p-4 text-sm">
                      <p className="mb-1 font-bold">Réponse modèle</p>
                      <p className="leading-relaxed text-muted">{result.expectedAnswer}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => selfEval("incorrect")}
                        className="rounded-2xl bg-accent-soft py-3 font-semibold text-accent active:scale-95"
                      >
                        Faux
                      </button>
                      <button
                        onClick={() => selfEval("partial")}
                        className="rounded-2xl bg-gold-soft py-3 font-semibold text-gold active:scale-95"
                      >
                        Partiel
                      </button>
                      <button
                        onClick={() => selfEval("correct")}
                        className="rounded-2xl bg-success-soft py-3 font-semibold text-success active:scale-95"
                      >
                        Juste
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
