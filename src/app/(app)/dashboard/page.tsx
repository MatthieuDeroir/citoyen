import Link from "next/link";
import { and, eq, gte } from "drizzle-orm";
import { Flame, Snowflake, ChevronRight, Zap, GraduationCap } from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { cardProgress, userStats } from "@/db/schema";
import { getTodayXp } from "@/lib/xp";
import { getDueCount } from "@/lib/queue";
import { MASTERY_INTERVAL_DAYS } from "@/lib/srs";
import { allFlashcards, parties, sousThemes } from "@/content";
import { Logo } from "@/components/ui/Logo";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { PartieIcon } from "@/components/ui/PartieIcon";

export const metadata = { title: "Accueil" };

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user!.id!;
  const prenom = session?.user?.name?.split(" ")[0];

  const [stats] = await db.select().from(userStats).where(eq(userStats.userId, userId));
  const todayXp = await getTodayXp(userId);
  const dueCount = await getDueCount(userId);

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

  const goal = stats?.dailyXpGoal ?? 50;
  const streak = stats?.currentStreak ?? 0;
  const freezes = stats?.streakFreezes ?? 0;

  const partiesProgress = parties
    .map((partie) => {
      const stIds = sousThemes.filter((s) => s.partieId === partie.id).map((s) => s.id);
      const cards = allFlashcards.filter((c) => stIds.includes(c.sousThemeId));
      if (cards.length === 0) return null;
      const done = cards.filter((c) => mastered.has(c.id)).length;
      return { partie, total: cards.length, done };
    })
    .filter(Boolean) as { partie: (typeof parties)[number]; total: number; done: number }[];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Logo />
        <div
          className="flex items-center gap-2 rounded-full bg-gold-soft px-3 py-1.5 font-semibold text-gold"
          title={`${freezes} gel${freezes > 1 ? "s" : ""} de streak`}
        >
          <Flame className="size-5" />
          <span className="tabular-nums">{streak}</span>
          {freezes > 0 && (
            <span className="flex items-center gap-0.5 text-sky-500">
              <Snowflake className="size-4" />
              <span className="text-xs tabular-nums">{freezes}</span>
            </span>
          )}
        </div>
      </div>

      <header>
        <p className="text-sm text-muted">Bonjour{prenom ? ` ${prenom}` : ""} 👋</p>
        <h1 className="text-2xl font-bold">Prêt à réviser ?</h1>
      </header>

      {/* Objectif du jour + CTA révision */}
      <section className="flex items-center gap-5 rounded-card border border-border bg-surface p-5 shadow-sm">
        <ProgressRing progress={todayXp / goal} size={104}>
          <span className="text-lg font-black tabular-nums">{todayXp}</span>
          <span className="text-[10px] font-semibold uppercase text-muted">/ {goal} XP</span>
        </ProgressRing>
        <div className="min-w-0 flex-1">
          <h2 className="font-bold">
            {todayXp >= goal ? "Objectif atteint 🎉" : "Objectif du jour"}
          </h2>
          <p className="mt-0.5 text-sm text-muted">
            {dueCount > 0
              ? `${dueCount} carte${dueCount > 1 ? "s" : ""} à réviser`
              : "Aucune carte en retard"}
          </p>
          <Link
            href="/revision"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary transition-transform active:scale-95"
          >
            <Zap className="size-4" />
            Lancer la révision
          </Link>
        </div>
      </section>

      {/* Examen blanc */}
      <Link
        href="/examen"
        className="flex items-center gap-4 rounded-card border-2 border-primary/30 bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary">
          <GraduationCap className="size-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-bold">Examen blanc</span>
          <span className="block text-sm text-muted">
            40 questions · 45 min · admis à 32/40, comme le vrai examen
          </span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-muted" />
      </Link>

      {/* Progression par partie */}
      <section className="space-y-3">
        <h2 className="font-bold">Ta progression</h2>
        {partiesProgress.map(({ partie, total, done }) => (
          <Link
            key={partie.id}
            href={`/rubriques/${partie.slug}`}
            className="flex items-center gap-3 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <PartieIcon name={partie.icone} className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{partie.titreCourt}</p>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-700"
                  style={{ width: `${total === 0 ? 0 : (done / total) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-semibold tabular-nums text-muted">
              {done}/{total}
            </span>
            <ChevronRight className="size-4 shrink-0 text-muted" />
          </Link>
        ))}
      </section>
    </div>
  );
}
