import { and, eq, gte, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, cardProgress } from "@/db/schema";
import { getContent, sousThemes, type SousTheme } from "@/content";

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

/** Toutes les unités sont accessibles : le parcours n'a plus de verrou. */
export async function getUnlockedSousThemes(_userId: string): Promise<Set<string>> {
  return new Set(sousThemes.map((s) => s.id));
}

export interface ModeProgress {
  done: number;
  total: number;
}

// Questions ouvertes et textes à trous retirés du parcours pour l'instant :
// la progression ne porte plus que sur les cartes et les QCM.
export interface SousThemeProgress {
  cartes: ModeProgress;
  qcm: ModeProgress;
}

/** Détail par activité : cartes maîtrisées et QCM réussis (distincts). */
export async function getSousThemeProgress(
  userId: string,
  sousThemeId: string,
): Promise<SousThemeProgress> {
  const content = getContent(sousThemeId);
  const cardIds = content.flashcards.map((c) => c.id);
  const exerciseIds = content.qcms.map((q) => q.id);

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
    qcm: { done: count(exerciseIds, solved), total: exerciseIds.length },
  };
}

/** Exercices déjà réussis (verdict correct) parmi `ids`. */
export async function getSolvedIds(
  userId: string,
  ids: string[],
): Promise<Set<string>> {
  if (ids.length === 0) return new Set();
  const rows = await db
    .select({ exerciseId: attempts.exerciseId })
    .from(attempts)
    .where(
      and(
        eq(attempts.userId, userId),
        eq(attempts.verdict, "correct"),
        inArray(attempts.exerciseId, ids),
      ),
    );
  return new Set(rows.map((r) => r.exerciseId));
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

  for (const st of sousThemes) {
    const content = getContent(st.id);
    const cardIds = content.flashcards.map((c) => c.id);
    // Questions ouvertes et textes à trous retirés du parcours pour l'instant.
    const exerciseIds = content.qcms.map((q) => q.id);
    const total = cardIds.length + exerciseIds.length;
    const done =
      cardIds.filter((id) => mastered.has(id)).length +
      exerciseIds.filter((id) => solved.has(id)).length;
    const progress = total === 0 ? 0 : done / total;

    unites.push({
      sousTheme: st,
      progress,
      unlocked: true,
      perfect: total > 0 && done === total,
    });
  }

  return unites;
}
