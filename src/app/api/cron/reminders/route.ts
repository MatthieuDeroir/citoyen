import { NextResponse } from "next/server";
import { eq, inArray } from "drizzle-orm";
import webpush from "web-push";
import { db } from "@/lib/db";
import { pushSubscriptions, userStats } from "@/db/schema";
import { getTodayXp } from "@/lib/xp";

export const maxDuration = 60;

/**
 * Cron Vercel : rappelle aux utilisateurs abonnés de faire leur session
 * quand l'objectif XP du jour (Europe/Paris) n'est pas atteint.
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

  const userIds = [...new Set(subs.map((s) => s.userId))];
  const statsRows = await db
    .select()
    .from(userStats)
    .where(inArray(userStats.userId, userIds));
  const statsByUser = new Map(statsRows.map((s) => [s.userId, s]));

  let sent = 0;
  const dead: string[] = [];

  for (const userId of userIds) {
    const stats = statsByUser.get(userId);
    const goal = stats?.dailyXpGoal ?? 50;
    const todayXp = await getTodayXp(userId);
    if (todayXp >= goal) continue; // objectif atteint, pas de rappel

    const streak = stats?.currentStreak ?? 0;
    const remaining = goal - todayXp;
    const body =
      streak > 0
        ? `Ta série de ${streak} jour${streak > 1 ? "s" : ""} est en jeu ! Encore ${remaining} XP pour la garder.`
        : `Encore ${remaining} XP pour atteindre ton objectif du jour. Une petite session ?`;
    const payload = JSON.stringify({
      title: streak > 0 ? `🔥 Ne perds pas ta série !` : "📚 C'est l'heure de réviser",
      body,
      tag: "rappel-streak",
      url: "/revision",
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
