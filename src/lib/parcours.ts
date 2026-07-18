import { and, eq, gte, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, cardProgress } from "@/db/schema";
import { getContent, sousThemes, type SousTheme } from "@/content";

/** Seuil (cartes validées + exercices réussis) pour déverrouiller l'unité suivante. */
const UNLOCK_THRESHOLD = 0.6;

// Une carte est « validée » dès qu'une révision réussie (Correct/Facile) est
// enregistrée : repetitions ≥ 1. La maîtrise long terme (intervalle ≥ 21 j)
// reste réservée aux badges — sinon la progression stagnerait des semaines à 0.

export interface UniteParcours {
  sousTheme: SousTheme;
  /** 0 → 1 : cartes maîtrisées + exercices réussis / total */
  progress: number;
  unlocked: boolean;
  perfect: boolean;
}

/** Sous-thèmes accessibles : le verrou du parcours s'applique partout (rubriques, sessions, file du jour). */
export async function getUnlockedSousThemes(userId: string): Promise<Set<string>> {
  const unites = await getParcours(userId);
  return new Set(unites.filter((u) => u.unlocked).map((u) => u.sousTheme.id));
}

export interface ModeProgress {
  done: number;
  total: number;
}

export interface SousThemeProgress {
  cartes: ModeProgress;
  qcm: ModeProgress;
  ouvertes: ModeProgress;
  trous: ModeProgress;
}

/** Détail par activité : cartes maîtrisées et exercices réussis (distincts). */
export async function getSousThemeProgress(
  userId: string,
  sousThemeId: string,
): Promise<SousThemeProgress> {
  const content = getContent(sousThemeId);
  const cardIds = content.flashcards.map((c) => c.id);
  const exerciseIds = [
    ...content.qcms.map((q) => q.id),
    ...content.ouvertes.map((q) => q.id),
    ...content.trous.map((t) => t.id),
  ];

  const masteredRows =
    cardIds.length === 0
      ? []
      : await db
          .select({ cardId: cardProgress.cardId })
          .from(cardProgress)
          .where(
            and(
              eq(cardProgress.userId, userId),
              gte(cardProgress.repetitions, 1),
              inArray(cardProgress.cardId, cardIds),
            ),
          );
  const mastered = new Set(masteredRows.map((r) => r.cardId));

  const solvedRows =
    exerciseIds.length === 0
      ? []
      : await db
          .select({ exerciseId: attempts.exerciseId })
          .from(attempts)
          .where(
            and(
              eq(attempts.userId, userId),
              eq(attempts.verdict, "correct"),
              inArray(attempts.exerciseId, exerciseIds),
            ),
          );
  const solved = new Set(solvedRows.map((r) => r.exerciseId));

  const count = (ids: string[], set: Set<string>) =>
    ids.filter((id) => set.has(id)).length;

  return {
    cartes: { done: count(cardIds, mastered), total: cardIds.length },
    qcm: { done: count(content.qcms.map((q) => q.id), solved), total: content.qcms.length },
    ouvertes: {
      done: count(content.ouvertes.map((q) => q.id), solved),
      total: content.ouvertes.length,
    },
    trous: { done: count(content.trous.map((t) => t.id), solved), total: content.trous.length },
  };
}

export async function getParcours(userId: string): Promise<UniteParcours[]> {
  const masteredRows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(
      and(
        eq(cardProgress.userId, userId),
        gte(cardProgress.repetitions, 1),
      ),
    );
  const mastered = new Set(masteredRows.map((r) => r.cardId));

  const correctRows = await db
    .select({ exerciseId: attempts.exerciseId })
    .from(attempts)
    .where(and(eq(attempts.userId, userId), inArray(attempts.verdict, ["correct"])));
  const solved = new Set(correctRows.map((r) => r.exerciseId));

  const unites: UniteParcours[] = [];
  let previousProgress = 1; // la première unité est toujours déverrouillée

  for (const st of sousThemes) {
    const content = getContent(st.id);
    const cardIds = content.flashcards.map((c) => c.id);
    const exerciseIds = [
      ...content.qcms.map((q) => q.id),
      ...content.ouvertes.map((q) => q.id),
      ...content.trous.map((t) => t.id),
    ];
    const total = cardIds.length + exerciseIds.length;
    const done =
      cardIds.filter((id) => mastered.has(id)).length +
      exerciseIds.filter((id) => solved.has(id)).length;
    const progress = total === 0 ? 0 : done / total;

    unites.push({
      sousTheme: st,
      progress,
      unlocked: previousProgress >= UNLOCK_THRESHOLD,
      perfect: total > 0 && done === total,
    });
    previousProgress = progress;
  }

  return unites;
}
