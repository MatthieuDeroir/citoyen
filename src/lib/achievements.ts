import { and, eq, gte } from "drizzle-orm";
import { db } from "@/lib/db";
import { achievements, cardProgress, userStats } from "@/db/schema";
import { MASTERY_INTERVAL_DAYS } from "@/lib/srs";
import { allFlashcards, parties, sousThemes } from "@/content";

export interface AchievementDef {
  id: string;
  titre: string;
  description: string;
  emoji: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "premier-pas", titre: "Premier pas", description: "Faire sa première révision", emoji: "👣" },
  { id: "streak-7", titre: "Une semaine !", description: "7 jours de streak", emoji: "🔥" },
  { id: "streak-30", titre: "Un mois !", description: "30 jours de streak", emoji: "🚀" },
  { id: "streak-100", titre: "Centurion", description: "100 jours de streak", emoji: "🏛️" },
  { id: "xp-1000", titre: "Millier", description: "Cumuler 1 000 XP", emoji: "💫" },
  { id: "cartes-50", titre: "Mémoire vive", description: "50 cartes maîtrisées", emoji: "🧠" },
  { id: "cartes-100", titre: "Encyclopédie", description: "100 cartes maîtrisées", emoji: "📚" },
  ...parties.map((p) => ({
    id: `partie-${p.id}`,
    titre: p.titreCourt,
    description: `Maîtriser toutes les cartes de « ${p.titreCourt} »`,
    emoji: "🏅",
  })),
];

export interface AchievementState extends AchievementDef {
  unlocked: boolean;
  unlockedAt?: Date;
}

/** Calcule les badges, persiste les nouveaux débloqués, renvoie l'état complet. */
export async function getAchievements(userId: string): Promise<AchievementState[]> {
  const [stats] = await db.select().from(userStats).where(eq(userStats.userId, userId));
  const unlockedRows = await db
    .select()
    .from(achievements)
    .where(eq(achievements.userId, userId));
  const unlockedMap = new Map(unlockedRows.map((r) => [r.achievementId, r.unlockedAt]));

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

  const conditions: Record<string, boolean> = {
    "premier-pas": (stats?.totalReviews ?? 0) >= 1,
    "streak-7": (stats?.longestStreak ?? 0) >= 7,
    "streak-30": (stats?.longestStreak ?? 0) >= 30,
    "streak-100": (stats?.longestStreak ?? 0) >= 100,
    "xp-1000": (stats?.totalXp ?? 0) >= 1000,
    "cartes-50": mastered.size >= 50,
    "cartes-100": mastered.size >= 100,
  };
  for (const partie of parties) {
    const stIds = sousThemes.filter((s) => s.partieId === partie.id).map((s) => s.id);
    const cards = allFlashcards.filter((c) => stIds.includes(c.sousThemeId));
    conditions[`partie-${partie.id}`] =
      cards.length > 0 && cards.every((c) => mastered.has(c.id));
  }

  const now = new Date();
  const result: AchievementState[] = [];
  for (const def of ACHIEVEMENTS) {
    const already = unlockedMap.get(def.id);
    const met = conditions[def.id] ?? false;
    if (met && !already) {
      await db
        .insert(achievements)
        .values({ userId, achievementId: def.id, unlockedAt: now })
        .onConflictDoNothing();
    }
    result.push({
      ...def,
      unlocked: Boolean(already) || met,
      unlockedAt: already ?? (met ? now : undefined),
    });
  }
  return result;
}
