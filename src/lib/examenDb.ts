import { and, desc, eq, gt, lte } from "drizzle-orm";
import { db } from "@/lib/db";
import { examens } from "@/db/schema";
import { EXAM_TOTAL, isPassed, type ExamDetailEntry } from "@/lib/examen";

/**
 * Accès DB des examens blancs — volontairement séparé de lib/examen.ts, qui
 * doit rester pur : ses constantes sont importées par des composants client,
 * le client libsql ne doit jamais partir dans le bundle navigateur.
 */

/** Ids des questions déjà tombées dans les examens blancs (hors examen ultime). */
export async function getSeenExamQuestionIds(userId: string): Promise<Set<string>> {
  const rows = await db
    .select({ detail: examens.detail })
    .from(examens)
    .where(and(eq(examens.userId, userId), lte(examens.total, EXAM_TOTAL)));
  const seen = new Set<string>();
  for (const row of rows) {
    try {
      for (const entry of JSON.parse(row.detail) as ExamDetailEntry[]) {
        seen.add(entry.qcmId);
      }
    } catch {
      // détail illisible : on l'ignore
    }
  }
  return seen;
}

export interface ExamHistoryEntry {
  id: string;
  score: number;
  total: number;
  passed: boolean;
  createdAt: Date;
}

/**
 * Historique du plus récent au plus ancien : examens blancs (40 questions)
 * par défaut, ou examens ultimes (toute la banque) avec `ultime`.
 */
export async function getExamHistory(
  userId: string,
  { ultime = false }: { ultime?: boolean } = {},
): Promise<ExamHistoryEntry[]> {
  const rows = await db
    .select({
      id: examens.id,
      score: examens.score,
      total: examens.total,
      createdAt: examens.createdAt,
    })
    .from(examens)
    .where(
      and(
        eq(examens.userId, userId),
        ultime ? gt(examens.total, EXAM_TOTAL) : lte(examens.total, EXAM_TOTAL),
      ),
    )
    .orderBy(desc(examens.createdAt));
  return rows.map((r) => ({ ...r, passed: isPassed(r.score, r.total) }));
}
