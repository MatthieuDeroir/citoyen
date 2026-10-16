"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, XCircle, ArrowRight, BookOpen, Loader2 } from "lucide-react";
import type { QuestionDeLecon } from "@/lib/lecon";
import { repondre, terminerLecon, type BilanLecon } from "@/actions/lecon";
import { BilanLeconView } from "@/components/lecon/BilanLecon";
import { LivretPanneau } from "@/components/lecon/LivretPanneau";

const ROLE_LABEL: Record<QuestionDeLecon["role"], string> = {
  revision: "Révision",
  nouvelle: "Nouvelle",
  piege: "Piège",
};

/**
 * Copie locale des réponses de la leçon. Le retour arrière du navigateur
 * réutilise la page telle qu'elle a été chargée (cache client de Next) : sans
 * cette copie, la leçon repartirait du début. Elle sert aussi à renvoyer une
 * réponse que le serveur n'aurait pas reçue (réseau coupé).
 */
const cleLocale = (leconId: string) => `citoyen:lecon:${leconId}`;

function lireLocal(leconId: string): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(cleLocale(leconId)) ?? "{}");
  } catch {
    return {};
  }
}

function ecrireLocal(leconId: string, questionId: string, chosen: number) {
  try {
    const m = lireLocal(leconId);
    m[questionId] = chosen;
    localStorage.setItem(cleLocale(leconId), JSON.stringify(m));
  } catch {
    // stockage indisponible (navigation privée) : le serveur reste la référence
  }
}

const KEYS = ["1", "2", "3", "4"];
const LETTERS = ["A", "B", "C", "D"];

interface Props {
  leconId: string;
  items: QuestionDeLecon[];
  themeLabels: Record<string, string>;
  notionLabels: Record<string, string>;
}

export function LeconPlayer({ leconId, items: initial, themeLabels, notionLabels }: Props) {
  const router = useRouter();
  const [items, setItems] = useState(initial);
  const [index, setIndex] = useState(0);
  // tant que la copie locale n'est pas fusionnée, on n'affiche rien (pas de saut visible)
  const [pret, setPret] = useState(false);
  const [livret, setLivret] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [bilan, setBilan] = useState<BilanLecon | null>(null);
  const [finishing, setFinishing] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const pending = useRef<Map<string, number>>(new Map());
  const advancing = useRef(false);

  const q = items[index];
  const done = index >= items.length;
  const correctCount = items.filter((i) => i.chosen === 0).length;

  const envoyer = useCallback(
    async (id: string, chosen: number) => {
      pending.current.set(id, chosen);
      try {
        await repondre(leconId, id, chosen);
        pending.current.delete(id);
      } catch {
        // hors ligne : renvoyé avant la clôture de la leçon
      }
    },
    [leconId],
  );

  function choose(original: number) {
    if (!q || revealed) return;
    setItems((cur) => cur.map((it, i) => (i === index ? { ...it, chosen: original } : it)));
    setRevealed(true);
    ecrireLocal(leconId, q.id, original);
    void envoyer(q.id, original);
  }

  function next() {
    if (advancing.current) return;
    advancing.current = true;
    setRevealed(false);
    setIndex((i) => i + 1);
    if (index + 1 >= items.length) void finish();
  }

  useEffect(() => {
    advancing.current = false;
  }, [index]);

  const finish = useCallback(async () => {
    setFinishing(true);
    setErreur(null);
    try {
      for (const [id, chosen] of [...pending.current]) {
        await repondre(leconId, id, chosen);
        pending.current.delete(id);
      }
      setBilan(await terminerLecon(leconId));
      try {
        localStorage.removeItem(cleLocale(leconId));
      } catch {}
      router.refresh();
    } catch {
      setErreur("Connexion impossible — tes réponses sont gardées, réessaie.");
    } finally {
      setFinishing(false);
    }
  }, [leconId, router]);

  // À l'ouverture (y compris par « retour » ou « Reprendre ») : fusion des
  // réponses serveur et locales, puis reprise à la première question sans
  // réponse ; tout est répondu → droit au bilan.
  const fusionnee = useRef(false);
  useEffect(() => {
    if (fusionnee.current) return;
    fusionnee.current = true;
    const local = lireLocal(leconId);
    const merged = initial.map((it) =>
      it.chosen === null && local[it.id] !== undefined ? { ...it, chosen: local[it.id] } : it,
    );
    void Promise.resolve().then(() => {
      setItems(merged);
      for (const it of merged) {
        // réponse connue du seul appareil : le serveur ne l'a pas reçue
        if (initial.find((x) => x.id === it.id)?.chosen === null && it.chosen !== null) {
          void envoyer(it.id, it.chosen);
        }
      }
      const first = merged.findIndex((it) => it.chosen === null);
      setIndex(first < 0 ? merged.length : first);
      setPret(true);
      if (first < 0) void finish();
    });
  }, [leconId, initial, envoyer, finish]);

  // clavier : 1-4 ou A-D pour répondre, Entrée / espace pour continuer
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey || done || !pret || livret !== null) return;
      if (!revealed) {
        const k = e.key.toUpperCase();
        const pos = KEYS.indexOf(k) >= 0 ? KEYS.indexOf(k) : LETTERS.indexOf(k);
        if (pos >= 0 && q && pos < q.order.length) {
          e.preventDefault();
          choose(q.order[pos]);
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        next();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (bilan) return <BilanLeconView bilan={bilan} />;

  if (!pret) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loader2 className="size-8 animate-spin text-primary" />
      </div>
    );
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        {erreur ? (
          <>
            <p className="max-w-xs text-sm text-muted">{erreur}</p>
            <button
              onClick={finish}
              disabled={finishing}
              className="rounded-2xl bg-primary px-6 py-3 font-semibold text-on-primary disabled:opacity-60"
            >
              Réessayer
            </button>
          </>
        ) : (
          <>
            <Loader2 className="size-8 animate-spin text-primary" />
            <p className="text-sm text-muted">Calcul de tes progrès…</p>
          </>
        )}
      </div>
    );
  }

  const chosen = q.chosen;

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 py-2">
        <Link
          href="/"
          aria-label="Quitter la leçon (elle reprendra où tu en es)"
          className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
        >
          <X className="size-6" />
        </Link>
        <div className="flex h-3 flex-1 gap-1">
          {items.map((it, i) => (
            <span
              key={it.id}
              className={`h-full flex-1 rounded-full transition-colors ${
                it.chosen === null || (i === index && !revealed)
                  ? i === index
                    ? "bg-primary/40"
                    : "bg-border"
                  : it.chosen === 0
                    ? "bg-success"
                    : "bg-accent"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold tabular-nums text-muted">
          {index + 1}/{items.length}
        </span>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.18 }}
          className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pt-3 pb-4"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span
              className={`rounded-full px-2.5 py-1 ${
                q.role === "piege"
                  ? "bg-accent-soft text-accent"
                  : q.role === "revision"
                    ? "bg-gold-soft text-gold"
                    : "bg-primary-soft text-primary"
              }`}
            >
              {ROLE_LABEL[q.role]}
            </span>
            {q.kind === "situation" && (
              <span className="rounded-full bg-surface px-2.5 py-1 text-foreground ring-1 ring-border">
                Mise en situation
              </span>
            )}
            <span className="truncate text-muted">{themeLabels[q.theme]}</span>
          </div>

          <h1 className="text-lg font-bold leading-snug">{q.question}</h1>

          <div className="space-y-3">
            {q.order.map((i, pos) => {
              const isCorrect = i === 0;
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
                      : state === "correct" && isChosen
                        ? { scale: [1, 1.03, 1] }
                        : {}
                  }
                  transition={{ duration: 0.4 }}
                  className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left font-medium transition-colors ${
                    state === "idle"
                      ? "border-border bg-surface hover:border-primary/40 active:scale-[0.99]"
                      : state === "correct"
                        ? "border-success bg-success-soft text-success"
                        : state === "wrong"
                          ? "border-accent bg-accent-soft text-accent"
                          : "border-border bg-surface opacity-50"
                  }`}
                >
                  <span className="hidden size-6 shrink-0 items-center justify-center rounded-md border border-current text-xs opacity-60 sm:flex">
                    {pos + 1}
                  </span>
                  <span className="flex-1">{q.choices[i]}</span>
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
                className="overflow-hidden"
              >
                <div className="rounded-2xl bg-primary-soft p-4 text-sm leading-relaxed">
                  <p className="mb-1 font-bold text-primary">
                    {chosen === 0 ? "Exact." : "Pas tout à fait."}
                  </p>
                  <p>{q.explication}</p>
                  {q.page && (
                    <button
                      onClick={() => setLivret(q.page!)}
                      className="mt-3 inline-flex items-center gap-1.5 text-left text-xs font-semibold text-primary underline-offset-2 hover:underline"
                    >
                      <BookOpen className="size-4 shrink-0" />
                      Livret p. {q.page} · {notionLabels[q.notion]}
                    </button>
                  )}
                </div>
                <button
                  onClick={next}
                  autoFocus
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
                >
                  {index + 1 < items.length ? "Question suivante" : "Voir le bilan"}
                  <ArrowRight className="size-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {livret !== null && (
          <LivretPanneau page={livret} titre={notionLabels[q.notion]} onClose={() => setLivret(null)} />
        )}
      </AnimatePresence>
      <p className="sr-only" aria-live="polite">
        {revealed ? (chosen === 0 ? "Bonne réponse" : "Mauvaise réponse") : ""} — {correctCount} justes
      </p>
    </div>
  );
}
