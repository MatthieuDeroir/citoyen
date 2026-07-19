import { and, asc, eq, gte, lte } from "drizzle-orm";
import { db } from "@/lib/db";
import { cardProgress } from "@/db/schema";
import { allFlashcards, type Flashcard } from "@/content";
import { getUnlockedSousThemes } from "@/lib/parcours";

const MAX_DUE = 40;
/** cartes proposées « en avance » quand rien n'est dû */
const AHEAD_COUNT = 20;

export interface DailyQueue {
  cards: Flashcard[];
  dueCount: number;
  /** true si la session est une révision en avance (aucune carte due) */
  ahead: boolean;
}

/**
 * File de révision : uniquement les cartes déjà acquises (au moins une
 * révision réussie) des unités déverrouillées. La découverte de nouvelles
 * cartes se fait dans le parcours et les rubriques, jamais ici.
 */
export async function getDailyQueue(userId: string): Promise<DailyQueue> {
  const unlocked = await getUnlockedSousThemes(userId);
  const acquiredWhere = and(
    eq(cardProgress.userId, userId),
    gte(cardProgress.repetitions, 1),
  );

  const toCards = (rows: { cardId: string }[]) =>
    rows
      .map((r) => allFlashcards.find((c) => c.id === r.cardId))
      .filter((c): c is Flashcard => Boolean(c) && unlocked.has(c!.sousThemeId));

  const dueRows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(and(acquiredWhere, lte(cardProgress.dueAt, new Date())))
    .orderBy(asc(cardProgress.dueAt))
    .limit(MAX_DUE);
  const dueCards = toCards(dueRows);

  if (dueCards.length > 0) {
    return { cards: dueCards, dueCount: dueCards.length, ahead: false };
  }

  // rien n'est dû : révision en avance des cartes qui arrivent à échéance
  const aheadRows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(acquiredWhere)
    .orderBy(asc(cardProgress.dueAt))
    .limit(AHEAD_COUNT);
  const aheadCards = toCards(aheadRows);

  return { cards: aheadCards, dueCount: 0, ahead: aheadCards.length > 0 };
}

/** Cartes acquises dues (unités déverrouillées uniquement). */
export async function getDueCount(userId: string): Promise<number> {
  const unlocked = await getUnlockedSousThemes(userId);
  const rows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(
      and(
        eq(cardProgress.userId, userId),
        gte(cardProgress.repetitions, 1),
        lte(cardProgress.dueAt, new Date()),
      ),
    );
  const byId = new Map(allFlashcards.map((c) => [c.id, c]));
  return rows.filter((r) => {
    const card = byId.get(r.cardId);
    return card && unlocked.has(card.sousThemeId);
  }).length;
}
