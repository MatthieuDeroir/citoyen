import { NextResponse } from "next/server";
import { and, eq, inArray, isNotNull } from "drizzle-orm";
import webpush from "web-push";
import { db } from "@/lib/db";
import { lecons, pushSubscriptions, userStats } from "@/db/schema";
import { getEffectiveStreak } from "@/lib/serie";
import { parisDay } from "@/lib/dates";

export const maxDuration = 60;

/**
 * Cron Vercel (11 h et 17 h UTC, soit vers midi et 18 h à Paris) : rappelle
 * aux abonnés de ce créneau qu'ils n'ont pas encore fini de leçon aujourd'hui.
 * Les abonnements expirés (404/410) sont supprimés.
 */
export async function GET(request: Request) {
  if (request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  if (!publicKey || !privateKey) {
    return NextResponse.json({ error: "VAPID non configuré" }, { status: 500 });
  }
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT ?? "mailto:admin@example.com",
    publicKey,
    privateKey,
  );

  const subs = await db.select().from(pushSubscriptions);
  if (subs.length === 0) return NextResponse.json({ sent: 0 });

  const creneau = new Date().getUTCHours() < 14 ? "midi" : "soir";
  const userIds = [...new Set(subs.map((s) => s.userId))];
  const statsRows = await db
    .select()
    .from(userStats)
    .where(inArray(userStats.userId, userIds));
  const statsByUser = new Map(statsRows.map((s) => [s.userId, s]));
  const faites = await db
    .select({ userId: lecons.userId })
    .from(lecons)
    .where(and(eq(lecons.day, parisDay()), isNotNull(lecons.finishedAt), inArray(lecons.userId, userIds)));
  const ontFait = new Set(faites.map((f) => f.userId));

  let sent = 0;
  const dead: string[] = [];

  for (const userId of userIds) {
    const stats = statsByUser.get(userId);
    if (!(stats?.reminderSlots ?? "soir").split(",").includes(creneau)) continue;
    if (ontFait.has(userId)) continue; // leçon du jour faite, pas de rappel

    const streak = getEffectiveStreak(stats);
    const payload = JSON.stringify({
      title: streak > 0 ? `🔥 Série de ${streak} jour${streak > 1 ? "s" : ""} en jeu` : "📚 Ta leçon du jour",
      body: "15 questions, 7 minutes : ta date d'examen avance à chaque leçon.",
      tag: "rappel-lecon",
      url: "/",
    });

    for (const sub of subs.filter((s) => s.userId === userId)) {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          payload,
        );
        sent++;
      } catch (err) {
        const status = (err as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) dead.push(sub.endpoint);
      }
    }
  }

  if (dead.length > 0) {
    await db.delete(pushSubscriptions).where(inArray(pushSubscriptions.endpoint, dead));
  }

  return NextResponse.json({ sent, removed: dead.length });
}
