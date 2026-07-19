import Link from "next/link";
import { eq } from "drizzle-orm";
import {
  Flame,
  Snowflake,
  ChevronRight,
  Zap,
  GraduationCap,
  Star,
} from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { userStats } from "@/db/schema";
import { getTodayXp } from "@/lib/xp";
import { getDueCount } from "@/lib/queue";
import { getParcours } from "@/lib/parcours";
import { getLevel } from "@/lib/levels";
import { parties } from "@/content";
import { Logo } from "@/components/ui/Logo";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { GoalEditor } from "@/components/ui/GoalEditor";

export const metadata = { title: "Accueil" };

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user!.id!;
  const prenom = session?.user?.name?.split(" ")[0];

  const [stats] = await db.select().from(userStats).where(eq(userStats.userId, userId));
  const todayXp = await getTodayXp(userId);
  const dueCount = await getDueCount(userId);

  const goal = stats?.dailyXpGoal ?? 50;
  const streak = stats?.currentStreak ?? 0;
  const freezes = stats?.streakFreezes ?? 0;
  const level = getLevel(stats?.totalXp ?? 0);

  // unité en cours du parcours (première déverrouillée non terminée)
  const unites = await getParcours(userId);
  const currentUnite = unites.find((u) => u.unlocked && u.progress < 1);
  const currentPartie = currentUnite
    ? parties.find((p) => p.id === currentUnite.sousTheme.partieId)
    : undefined;

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
        {/* Niveau (XP total) */}
        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-primary-soft px-3.5 py-2.5">
          <Star className="size-5 shrink-0 fill-primary text-primary" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-primary">
              Niveau {level.level} — {level.title}
            </p>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-primary/15">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-700"
                style={{ width: `${level.progress * 100}%` }}
              />
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold tabular-nums text-primary">
            {level.intoLevel}/{level.levelCost} XP
          </span>
        </div>
      </header>

      {/* Objectif du jour (paramétrable) */}
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
            {todayXp >= goal
              ? "Ta série est en sécurité pour aujourd'hui."
              : `Encore ${goal - todayXp} XP pour prolonger ta série.`}
          </p>
          <div className="mt-3">
            <GoalEditor current={goal} />
          </div>
        </div>
      </section>

      {/* Reprendre le parcours */}
      {currentUnite && currentPartie && (
        <Link
          href={`/rubriques/${currentPartie.slug}/${currentUnite.sousTheme.slug}?from=parcours`}
          className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
        >
          <ProgressRing progress={currentUnite.progress} size={52} strokeWidth={5}>
            <span aria-hidden className="text-xl">
              {currentUnite.sousTheme.emoji}
            </span>
          </ProgressRing>
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
              Reprendre le parcours
            </span>
            <span className="block truncate font-bold">{currentUnite.sousTheme.titre}</span>
            <span className="block text-sm text-muted">
              {Math.round(currentUnite.progress * 100)}&nbsp;%
              {Math.round(currentUnite.progress * 100) >= 60
                ? " — unité suivante débloquée ✓"
                : ` — encore ${60 - Math.round(currentUnite.progress * 100)} % pour débloquer la suite`}
            </span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-muted" />
        </Link>
      )}

      {/* Révision (cartes acquises) */}
      <Link
        href="/revision"
        className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary">
          <Zap className="size-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-bold">Révision</span>
          <span className="block text-sm text-muted">
            {dueCount > 0
              ? `${dueCount} carte${dueCount > 1 ? "s" : ""} acquise${dueCount > 1 ? "s" : ""} à revoir aujourd'hui`
              : "Tout est à jour — révise en avance pour consolider"}
          </span>
        </span>
        {dueCount > 0 && (
          <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold tabular-nums text-accent">
            {dueCount}
          </span>
        )}
        <ChevronRight className="size-5 shrink-0 text-muted" />
      </Link>

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
            40 questions officielles · 45 min · admis à 32/40
          </span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-muted" />
      </Link>
    </div>
  );
}
