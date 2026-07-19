import { and, asc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { attempts } from "@/db/schema";
import { getQcm, type Qcm } from "@/content";

/**
 * QCM dont la **dernière** tentative est une erreur (rubriques et examens
 * blancs confondus). Corriger une de ces questions repasse par `submitQcm`,
 * donc valide la question dans la progression de sa rubrique.
 */
export async function getErrorQcms(userId: string): Promise<Qcm[]> {
  const rows = await db
    .select({
      exerciseId: attempts.exerciseId,
      verdict: attempts.verdict,
    })
    .from(attempts)
    .where(and(eq(attempts.userId, userId), eq(attempts.exerciseType, "qcm")))
    .orderBy(asc(attempts.createdAt));

  // la dernière ligne rencontrée par exercice fait foi
  const latest = new Map<string, string>();
  for (const r of rows) latest.set(r.exerciseId, r.verdict);

  return [...latest.entries()]
    .filter(([, verdict]) => verdict === "incorrect")
    .map(([id]) => getQcm(id))
    .filter((q): q is Qcm => Boolean(q));
}
