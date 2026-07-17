import { and, eq, gte, inArray } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, cardProgress } from "@/db/schema";
import { MASTERY_INTERVAL_DAYS } from "@/lib/srs";
import { getContent, sousThemes, type SousTheme } from "@/content";

/** Seuil de maîtrise (cartes + exercices réussis) pour déverrouiller l'unité suivante. */
const UNLOCK_THRESHOLD = 0.6;

export interface UniteParcours {
  sousTheme: SousTheme;
  /** 0 → 1 : cartes maîtrisées + exercices réussis / total */
  progress: number;
  unlocked: boolean;
  perfect: boolean;
}

export async function getParcours(userId: string): Promise<UniteParcours[]> {
  const masteredRows = await db
    .select({ cardId: cardProgress.cardId })
    .from(cardProgress)
    .where(
      and(
        eq(cardProgress.userId, userId),
        gte(cardProgress.intervalDays, MASTERY_INTERVAL_DAYS),
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
