import { and, eq, gte, sql } from "drizzle-orm";
import { Flame, Snowflake, Zap, Layers, Target, LogOut } from "lucide-react";
import { auth, signOut } from "@/lib/auth";
import { db } from "@/lib/db";
import { cardProgress, userStats, xpEvents } from "@/db/schema";
import { MASTERY_INTERVAL_DAYS } from "@/lib/srs";
import { allFlashcards } from "@/content";
import { getAchievements } from "@/lib/achievements";
import { parisDay } from "@/lib/dates";

export const metadata = { title: "Stats" };

export default async function StatsPage() {
  const session = await auth();
  const userId = session!.user!.id!;

  const [stats] = await db.select().from(userStats).where(eq(userStats.userId, userId));
  const masteredRows = await db
    .select({ n: sql<number>`count(*)` })
    .from(cardProgress)
    .where(
      and(
        eq(cardProgress.userId, userId),
        gte(cardProgress.intervalDays, MASTERY_INTERVAL_DAYS),
      ),
    );
  const mastered = masteredRows[0]?.n ?? 0;

  // XP des 7 derniers jours
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    days.push(parisDay(new Date(Date.now() - i * 24 * 60 * 60 * 1000)));
  }
  const xpRows = await db
    .select({ day: xpEvents.day, total: sql<number>`sum(${xpEvents.amount})` })
    .from(xpEvents)
    .where(and(eq(xpEvents.userId, userId), gte(xpEvents.day, days[0])))
    .groupBy(xpEvents.day);
  const xpByDay = new Map(xpRows.map((r) => [r.day, r.total]));
  const maxXp = Math.max(50, ...days.map((d) => xpByDay.get(d) ?? 0));

  const badges = await getAchievements(userId);
  const unlockedCount = badges.filter((b) => b.unlocked).length;

  const tiles = [
    { icon: Flame, label: "Streak actuel", value: stats?.currentStreak ?? 0 },
    { icon: Target, label: "Record", value: stats?.longestStreak ?? 0 },
    { icon: Zap, label: "XP total", value: stats?.totalXp ?? 0 },
    { icon: Layers, label: "Cartes maîtrisées", value: `${mastered}/${allFlashcards.length}` },
  ];

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Statistiques</h1>
          <p className="mt-1 text-sm text-muted">
            {session?.user?.name ?? session?.user?.email}
          </p>
        </div>
        {(stats?.streakFreezes ?? 0) > 0 && (
          <span className="flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1.5 text-sm font-semibold text-sky-600 dark:bg-sky-950">
            <Snowflake className="size-4" /> {stats!.streakFreezes} gel
            {stats!.streakFreezes > 1 ? "s" : ""}
          </span>
        )}
      </header>

      <section className="grid grid-cols-2 gap-3">
        {tiles.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-card border border-border bg-surface p-4 shadow-sm">
            <Icon className="mb-2 size-5 text-primary" />
            <p className="text-2xl font-black tabular-nums">{value}</p>
            <p className="text-xs text-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="rounded-card border border-border bg-surface p-4 shadow-sm">
        <h2 className="mb-3 font-bold">XP des 7 derniers jours</h2>
        <div className="flex h-28 items-end gap-2">
          {days.map((day) => {
            const xp = xpByDay.get(day) ?? 0;
            return (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] font-semibold tabular-nums text-muted">
                  {xp > 0 ? xp : ""}
                </span>
                <div
                  className={`w-full rounded-t-md ${xp > 0 ? "bg-primary" : "bg-border"}`}
                  style={{ height: `${Math.max(4, (xp / maxXp) * 80)}px` }}
                />
                <span className="text-[10px] text-muted">{day.slice(8)}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-bold">
          Badges{" "}
          <span className="text-sm font-normal text-muted">
            ({unlockedCount}/{badges.length})
          </span>
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              title={badge.description}
              className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-center ${
                badge.unlocked
                  ? "border-gold bg-gold-soft"
                  : "border-border bg-surface opacity-45 grayscale"
              }`}
            >
              <span className="text-2xl">{badge.emoji}</span>
              <span className="text-[11px] font-semibold leading-tight">{badge.titre}</span>
            </div>
          ))}
        </div>
      </section>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface py-3 font-semibold text-muted transition-colors hover:text-accent"
        >
          <LogOut className="size-5" /> Se déconnecter
        </button>
      </form>
    </div>
  );
}
