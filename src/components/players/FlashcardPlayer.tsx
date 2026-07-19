"use client";

import { useMemo, useState } from "react";
import { useExitSession } from "@/components/players/useExitSession";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "motion/react";
import { X, RotateCcw, Check, Zap, Lightbulb } from "lucide-react";
import type { Flashcard } from "@/content/types";
import { getSousTheme } from "@/content/parties";
import type { Rating } from "@/lib/srs";
import { CardText } from "@/components/ui/CardText";
import { SessionResults } from "@/components/players/SessionResults";

export type { Rating };

interface Props {
  deck: Flashcard[];
  title: string;
  backHref: string;
  /** server action de persistance SRS ; renvoie l'XP gagné */
  onRate?: (cardId: string, rating: Rating) => Promise<{ xp: number } | void> | void;
  next?: { href: string; label: string };
}

const SWIPE_THRESHOLD = 90;

export function FlashcardPlayer({ deck, title, backHref, onRate, next }: Props) {
  const initialQueue = useMemo(() => deck.map((c) => c.id), [deck]);
  const cardById = useMemo(() => new Map(deck.map((c) => [c.id, c])), [deck]);

  const [queue, setQueue] = useState<string[]>(initialQueue);
  const [position, setPosition] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [counts, setCounts] = useState({ again: 0, good: 0, easy: 0 });
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [xpTotal, setXpTotal] = useState(0);
  const exitSession = useExitSession(backHref);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const againTint = useTransform(x, [-150, -40], [1, 0]);
  const goodTint = useTransform(x, [40, 150], [0, 1]);

  const currentId = queue[position];
  const card = currentId ? cardById.get(currentId) : undefined;
  const emoji = card ? getSousTheme(card.sousThemeId)?.emoji : undefined;
  const done = position >= queue.length;

  function rate(rating: Rating) {
    if (!card) return;
    // fire-and-forget : la persistance ne doit pas bloquer l'animation
    Promise.resolve(onRate?.(card.id, rating))
      .then((res) => {
        if (res?.xp) setXpTotal((x) => x + res.xp);
      })
      .catch(() => {});
    setCounts((c) => ({ ...c, [rating]: c[rating] + 1 }));
    setSeen((s) => new Set(s).add(card.id));
    if (rating === "again") {
      setQueue((q) => [...q, card.id]);
    }
    setFlipped(false);
    setShowHint(false);
    x.set(0);
    setPosition((p) => p + 1);
  }

  function handleDragEnd() {
    if (!flipped) {
      x.set(0);
      return;
    }
    const offset = x.get();
    if (offset > SWIPE_THRESHOLD) rate("good");
    else if (offset < -SWIPE_THRESHOLD) rate("again");
    else x.set(0);
  }

  if (done) {
    const total = counts.again + counts.good + counts.easy;
    const score = total === 0 ? 0 : Math.round(((counts.good + counts.easy) / total) * 100);
    return (
      <SessionResults
        title={title}
        next={next}
        score={score}
        xp={xpTotal}
        stats={[
          { label: "Cartes vues", value: seen.size },
          { label: "Réussies", value: counts.good + counts.easy },
          { label: "À revoir", value: counts.again },
        ]}
        backHref={backHref}
        onRestart={() => {
          setQueue(initialQueue);
          setPosition(0);
          setCounts({ again: 0, good: 0, easy: 0 });
          setSeen(new Set());
          setXpTotal(0);
          setFlipped(false);
        }}
      />
    );
  }

  const progress = queue.length === 0 ? 0 : position / queue.length;

  return (
    <div className="flex flex-1 flex-col">
      {/* Header : fermer + progression */}
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
          {Math.min(position + 1, queue.length)}/{queue.length}
        </span>
      </header>

      {/* Carte */}
      <div className="relative flex-1 py-3">
        <AnimatePresence mode="wait">
          {card && (
            <motion.div
              key={`${card.id}-${position}`}
              className="absolute inset-x-0 inset-y-3 mx-auto max-w-xl cursor-pointer touch-pan-y"
              drag={flipped ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              style={{ x, rotate, perspective: 1200 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={() => setFlipped((f) => !f)}
            >
              {/* teintes swipe */}
              {flipped && (
                <>
                  <motion.div
                    aria-hidden
                    style={{ opacity: againTint }}
                    className="pointer-events-none absolute inset-0 z-10 rounded-card bg-accent/20"
                  />
                  <motion.div
                    aria-hidden
                    style={{ opacity: goodTint }}
                    className="pointer-events-none absolute inset-0 z-10 rounded-card bg-success/20"
                  />
                </>
              )}

              {/* Recto — chaque face porte sa propre rotation : backface-visibility
                  fiable partout (Firefox l'ignore quand la rotation est sur un parent) */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-card border border-border bg-surface text-center shadow-lg"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                <span aria-hidden className="tricolore absolute inset-x-0 top-0 h-1.5" />
                {/* m-auto : centré si ça tient, scroll sinon (petits écrans) */}
                <div className="flex h-full flex-col overflow-y-auto p-5 pb-9">
                  <div className="m-auto flex flex-col items-center">
                    {emoji && (
                      <span aria-hidden className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-soft text-3xl">
                        {emoji}
                      </span>
                    )}
                    <span className="mb-3 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      Question
                    </span>
                    <p
                      className={`text-balance font-semibold leading-snug ${
                        card.front.length > 120 ? "text-lg" : "text-xl sm:text-2xl"
                      }`}
                    >
                      {card.front}
                    </p>
                    {card.hint && (
                      <div className="mt-5">
                        {showHint ? (
                          <p className="text-sm italic text-muted">💡 {card.hint}</p>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowHint(true);
                            }}
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                          >
                            <Lightbulb className="size-4" /> Indice
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <p className="pointer-events-none absolute inset-x-0 bottom-3 text-xs text-muted">
                  Touche la carte pour la retourner
                </p>
              </motion.div>

              {/* Verso */}
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-card border border-primary/30 bg-surface text-center shadow-lg"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                initial={false}
                animate={{ rotateY: flipped ? 0 : -180 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                <span aria-hidden className="tricolore absolute inset-x-0 top-0 h-1.5" />
                {emoji && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-8 -right-6 select-none text-[9rem] opacity-[0.07]"
                  >
                    {emoji}
                  </span>
                )}
                {/* m-auto : centré quand la réponse est courte, scroll depuis le haut sinon */}
                <div className="flex h-full flex-col overflow-y-auto p-6">
                  <div className="m-auto flex flex-col items-center">
                    <span className="mb-4 rounded-full bg-success-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-success">
                      Réponse
                    </span>
                    <CardText
                      text={card.back}
                      className={`leading-relaxed ${card.back.length > 400 ? "text-base" : "text-lg"}`}
                    />
                    <p className="mt-5 text-xs text-muted">
                      Question : <span className="italic">{card.front}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Boutons SRS */}
      <div className="h-20">
        <AnimatePresence>
          {flipped && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="grid grid-cols-3 gap-3"
            >
              <button
                onClick={() => rate("again")}
                className="flex flex-col items-center gap-1 rounded-2xl bg-accent-soft py-3 font-semibold text-accent transition-transform active:scale-95"
              >
                <RotateCcw className="size-5" />
                <span className="text-sm">À revoir</span>
              </button>
              <button
                onClick={() => rate("good")}
                className="flex flex-col items-center gap-1 rounded-2xl bg-success-soft py-3 font-semibold text-success transition-transform active:scale-95"
              >
                <Check className="size-5" />
                <span className="text-sm">Correct</span>
              </button>
              <button
                onClick={() => rate("easy")}
                className="flex flex-col items-center gap-1 rounded-2xl bg-gold-soft py-3 font-semibold text-gold transition-transform active:scale-95"
              >
                <Zap className="size-5" />
                <span className="text-sm">Facile</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {!flipped && (
          <p className="pt-6 text-center text-sm text-muted">
            Réfléchis à la réponse, puis retourne la carte
          </p>
        )}
      </div>
    </div>
  );
}
