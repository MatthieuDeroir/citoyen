"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, XCircle, ArrowRight, ArrowLeft, BookOpen, Loader2, Undo2 } from "lucide-react";
import type { QuestionDeLecon } from "@/lib/lecon";
import { repondre, terminerLecon, type BilanLecon } from "@/actions/lecon";
import { BilanLeconView } from "@/components/lecon/BilanLecon";
import { LivretPanneau } from "@/components/lecon/LivretPanneau";
import { Eclats } from "@/components/fx/Eclats";
import { Flamme } from "@/components/fx/Flamme";
import { vibrer } from "@/lib/haptique";

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
  // relecture d'une question déjà répondue (lecture seule) ; null = question en cours
  const [revue, setRevue] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [bilan, setBilan] = useState<BilanLecon | null>(null);
  const [finishing, setFinishing] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const pending = useRef<Map<string, number>>(new Map());
  const advancing = useRef(false);
  const suivantRef = useRef<HTMLButtonElement>(null);

  const q = items[index];
  const done = index >= items.length;
  // question précédente relisible depuis l'écran affiché (en cours ou en relecture)
  const depuis = revue ?? index;
  const precedente = depuis > 0 && items[depuis - 1]?.chosen !== null ? depuis - 1 : null;
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
    if (!q || revealed || revue !== null) return;
    setItems((cur) => cur.map((it, i) => (i === index ? { ...it, chosen: original } : it)));
    setRevealed(true);
    vibrer(original === 0 ? 12 : [30, 50, 30]);
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
      // relecture : ← → pour naviguer, Échap pour revenir à la question en cours
      if (e.key === "ArrowLeft" && precedente !== null) {
        e.preventDefault();
        setRevue(precedente);
        return;
      }
      if (revue !== null) {
        if (e.key === "Escape" || e.key === "ArrowRight" || e.key === "Enter") {
          e.preventDefault();
          setRevue(revue + 1 < index ? (e.key === "ArrowRight" ? revue + 1 : null) : null);
        }
        return;
      }
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

  if (bilan) return <BilanLeconView bilan={bilan} resultats={items.map((it) => it.chosen === 0)} />;

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

  const enRevue = revue !== null;
  // question affichée : celle en cours, ou celle qu'on relit
  const v = enRevue ? items[revue] : q;
  const chosen = v.chosen;
  const vRevealed = enRevue || revealed;
  // bonnes réponses d'affilée jusqu'à la question en cours (révélée)
  let combo = 0;
  for (let i = revealed ? index : index - 1; i >= 0 && items[i]?.chosen === 0; i--) combo++;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex shrink-0 items-center gap-3 py-2">
        <Link
          href="/"
          aria-label="Quitter la leçon (elle reprendra où tu en es)"
          className="rounded-full p-2 text-muted transition-colors hover:text-foreground"
        >
          <X className="size-6" />
        </Link>
        <div className="flex h-3 flex-1 gap-1">
          {items.map((it, i) => {
            const fait = it.chosen !== null && !(i === index && !revealed);
            return (
              <button
                key={it.id}
                type="button"
                disabled={!fait}
                onClick={() => setRevue(i === index ? null : i)}
                aria-label={`Revoir la question ${i + 1}`}
                className={`relative h-full flex-1 overflow-hidden rounded-full disabled:cursor-default ${
                  i === index && !fait ? "bg-primary/30" : "bg-border"
                } ${i === revue ? "outline-2 outline-offset-2 outline-foreground/60" : ""}`}
              >
                <motion.span
                  className={`absolute inset-0 origin-left rounded-full ${it.chosen === 0 ? "bg-success" : "bg-accent"}`}
                  initial={false}
                  animate={{ scaleX: fait ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                />
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          {combo >= 3 ? (
            <motion.span
              key={`combo-${combo}`}
              initial={{ scale: 0.4, opacity: 0, y: 6 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="inline-flex items-center gap-1 rounded-full bg-gold-soft px-2 py-0.5 text-sm font-bold tabular-nums text-gold"
              title={`${combo} bonnes réponses d'affilée`}
            >
              <Flamme allumee className="size-4" /> {combo}
            </motion.span>
          ) : (
            <motion.span
              key="pos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm font-semibold tabular-nums text-muted"
            >
              {index + 1}/{items.length}
            </motion.span>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={enRevue ? `revue-${v.id}` : v.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.18 }}
          // -mx-1 px-1 : de la place pour le rebond des cartes, sans défilement horizontal
          className="-mx-1 min-h-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto overscroll-contain px-1 pt-3 pb-4"
        >
          {(precedente !== null || enRevue) && (
            <div className="flex items-center justify-between gap-2 text-sm">
              {precedente !== null ? (
                <button
                  onClick={() => setRevue(precedente)}
                  className="-ml-1 inline-flex items-center gap-1 rounded-lg px-1 py-0.5 font-semibold text-primary"
                >
                  <ArrowLeft className="size-4" /> Précédente
                </button>
              ) : (
                <span />
              )}
              {enRevue && (
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted ring-1 ring-border">
                  Relecture · question {revue + 1}
                </span>
              )}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span
              className={`rounded-full px-2.5 py-1 ${
                v.role === "piege"
                  ? "bg-accent-soft text-accent"
                  : v.role === "revision"
                    ? "bg-gold-soft text-gold"
                    : "bg-primary-soft text-primary"
              }`}
            >
              {ROLE_LABEL[v.role]}
            </span>
            {v.kind === "situation" && (
              <span className="rounded-full bg-surface px-2.5 py-1 text-foreground ring-1 ring-border">
                Mise en situation
              </span>
            )}
            <span className="truncate text-muted">{themeLabels[v.theme]}</span>
          </div>

          <h1 className="text-lg font-bold leading-snug">{v.question}</h1>

          <div className="space-y-3">
            {v.order.map((i, pos) => {
              const isCorrect = i === 0;
              const isChosen = i === chosen;
              const state = !vRevealed
                ? "idle"
                : isCorrect
                  ? "correct"
                  : isChosen
                    ? "wrong"
                    : "dim";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + pos * 0.05, duration: 0.22, ease: "easeOut" }}
                >
                <motion.button
                  onClick={() => choose(i)}
                  disabled={vRevealed}
                  animate={
                    enRevue
                      ? {}
                      : state === "wrong"
                      ? { x: [0, -8, 8, -6, 6, 0] }
                      : state === "correct" && isChosen
                        ? { scale: [1, 1.04, 1] }
                        : state === "correct"
                          ? { scale: [1, 1.025, 1, 1.025, 1] }
                          : {}
                  }
                  transition={{ duration: state === "correct" && !isChosen ? 0.9 : 0.4, delay: state === "correct" && !isChosen ? 0.3 : 0 }}
                  className={`relative flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left font-medium transition-colors ${
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
                  <span className="flex-1">{v.choices[i]}</span>
                  {vRevealed && isCorrect && (
                    <motion.span
                      initial={enRevue ? false : { scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 14, delay: isChosen ? 0 : 0.3 }}
                      className="shrink-0"
                    >
                      <Check className="size-5" strokeWidth={3} />
                    </motion.span>
                  )}
                  {state === "wrong" && <XCircle className="size-5 shrink-0" />}
                  {state === "correct" && isChosen && !enRevue && <Eclats seed={index + 1} />}
                </motion.button>
                </motion.div>
              );
            })}
          </div>

          <AnimatePresence>
            {vRevealed && (
              <motion.div
                initial={enRevue ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                // explication et bouton suivant ramenés à l'écran s'ils dépassent
                onAnimationComplete={() =>
                  !enRevue && suivantRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
                }
                className="overflow-hidden"
              >
                <div className="rounded-2xl bg-primary-soft p-4 text-sm leading-relaxed">
                  <p className="mb-1 font-bold text-primary">
                    {chosen === 0 ? "Exact." : "Pas tout à fait."}
                  </p>
                  <p>{v.explication}</p>
                  {v.page && (
                    <button
                      onClick={() => setLivret(v.page!)}
                      className="mt-3 inline-flex items-center gap-1.5 text-left text-xs font-semibold text-primary underline-offset-2 hover:underline"
                    >
                      <BookOpen className="size-4 shrink-0" />
                      Livret p. {v.page} · {notionLabels[v.notion]}
                    </button>
                  )}
                </div>
                {enRevue ? (
                  <div className="mt-4 flex gap-2">
                    {revue + 1 < index && (
                      <button
                        onClick={() => setRevue(revue + 1)}
                        className="flex items-center justify-center gap-1 rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm font-semibold"
                      >
                        Suivante <ArrowRight className="size-4" />
                      </button>
                    )}
                    <button
                      onClick={() => setRevue(null)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
                    >
                      <Undo2 className="size-5" /> Revenir à la question {index + 1}
                    </button>
                  </div>
                ) : (
                  <button
                    ref={suivantRef}
                    onClick={next}
                    autoFocus
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
                  >
                    {index + 1 < items.length ? "Question suivante" : "Voir le bilan"}
                    <ArrowRight className="size-5" />
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {livret !== null && (
          <LivretPanneau page={livret} titre={notionLabels[v.notion]} onClose={() => setLivret(null)} />
        )}
      </AnimatePresence>
      <p className="sr-only" aria-live="polite">
        {enRevue
          ? `Relecture de la question ${revue + 1}`
          : `${revealed ? (chosen === 0 ? "Bonne réponse" : "Mauvaise réponse") : ""} — ${correctCount} justes`}
      </p>
    </div>
  );
}
