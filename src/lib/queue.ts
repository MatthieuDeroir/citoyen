import { and, asc, eq, lte } from "drizzle-orm";
import { db } from "@/lib/db";
import { cardProgress } from "@/db/schema";
import { allFlashcards, type Flashcard } from "@/content";

const MAX_DUE = 40;
const MAX_NEW = 10;
/** 1 nouvelle carte intercalée toutes les N dues. */
const NEW_EVERY = 3;

export interface DailyQueue {
  cards: Flashcard[];
  dueCount: number;
  newCount: number;
}

/** File du jour : cartes dues (SRS) + nouvelles cartes dans l'ordre pédagogique. */
export async function getDailyQueue(userId: string): Promise<DailyQueue> {
  const now = new Date();

  const dueRows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(and(eq(cardProgress.userId, userId), lte(cardProgress.dueAt, now)))
    .orderBy(asc(cardProgress.dueAt))
    .limit(MAX_DUE);

  const seenRows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(eq(cardProgress.userId, userId));
  const seen = new Set(seenRows.map((r) => r.cardId));

  const dueCards = dueRows
    .map((r) => allFlashcards.find((c) => c.id === r.cardId))
    .filter((c): c is Flashcard => Boolean(c));

  // allFlashcards est déjà dans l'ordre du livret (partie 1 → annexes)
  const newCards = allFlashcards.filter((c) => !seen.has(c.id)).slice(0, MAX_NEW);

  // intercalage : 1 nouvelle toutes les NEW_EVERY dues
  const cards: Flashcard[] = [];
  let newIdx = 0;
  for (let i = 0; i < dueCards.length; i++) {
    cards.push(dueCards[i]);
    if ((i + 1) % NEW_EVERY === 0 && newIdx < newCards.length) {
      cards.push(newCards[newIdx++]);
    }
  }
  while (newIdx < newCards.length) cards.push(newCards[newIdx++]);

  return { cards, dueCount: dueCards.length, newCount: newCards.length };
}

export async function getDueCount(userId: string): Promise<number> {
  const rows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(and(eq(cardProgress.userId, userId), lte(cardProgress.dueAt, new Date())));
  return rows.length;
}
