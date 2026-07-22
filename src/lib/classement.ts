import { eq, gte, sql, and } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts, cardProgress, examens, userStats, users } from "@/db/schema";
import { allFlashcards, allQcms } from "@/content";
import { getLevel, type Level } from "@/lib/levels";

export interface ClassementEntry {
  userId: string;
  name: string;
  image: string | null;
  level: Level;
  totalXp: number;
  /** 0 → 1 : cartes validées + exercices réussis / total du contenu */
  completion: number;
  bestExam: number | null;
}

/** Classement de tous les utilisateurs : complétion, meilleur examen, niveau. */
export async function getClassement(): Promise<ClassementEntry[]> {
  // Questions ouvertes et textes à trous retirés du parcours pour l'instant.
  const totalItems = allFlashcards.length + allQcms.length;

  const rows = await db
    .select({
      userId: users.id,
      name: users.name,
      email: users.email,
      image: users.image,
      totalXp: userStats.totalXp,
    })
    .from(users)
    .innerJoin(userStats, eq(userStats.userId, users.id));

  const cardCounts = await db
    .select({ userId: cardProgress.userId, n: sql<number>`count(*)` })
    .from(cardProgress)
    .where(gte(cardProgress.repetitions, 1))
    .groupBy(cardProgress.userId);
  const cardsByUser = new Map(cardCounts.map((r) => [r.userId, r.n]));

  const solvedCounts = await db
    .select({
      userId: attempts.userId,
      n: sql<number>`count(distinct ${attempts.exerciseId})`,
    })
    .from(attempts)
    .where(and(eq(attempts.verdict, "correct")))
    .groupBy(attempts.userId);
  const solvedByUser = new Map(solvedCounts.map((r) => [r.userId, r.n]));

  const bestScores = await db
    .select({ userId: examens.userId, best: sql<number>`max(${examens.score})` })
    .from(examens)
    .groupBy(examens.userId);
  const bestByUser = new Map(bestScores.map((r) => [r.userId, r.best]));

  const entries: ClassementEntry[] = rows.map((r) => {
    const done =
      (cardsByUser.get(r.userId) ?? 0) + (solvedByUser.get(r.userId) ?? 0);
    return {
      userId: r.userId,
      name: r.name ?? r.email?.split("@")[0] ?? "Citoyen anonyme",
      image: r.image,
      level: getLevel(r.totalXp),
      totalXp: r.totalXp,
      completion: totalItems === 0 ? 0 : Math.min(1, done / totalItems),
      bestExam: bestByUser.get(r.userId) ?? null,
    };
  });

  return entries.sort(
    (a, b) => b.completion - a.completion || b.totalXp - a.totalXp,
  );
}
