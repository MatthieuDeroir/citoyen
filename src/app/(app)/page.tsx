import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { Play, Plus, Check, GraduationCap, ChevronRight, CalendarCheck } from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { examens, userStats } from "@/db/schema";
import { bilanUtilisateur, leconEnCours, leconsTermineesDuJour } from "@/lib/lecon";
import { annonce, rythmeDeReference, LECON_TAILLE } from "@/lib/memoire";
import { AnnonceDate } from "@/components/ui/AnnonceDate";
import { getEffectiveStreak } from "@/lib/serie";
import { commencerLecon } from "@/actions/lecon";
import { THEMES, EXAM_PASS, EXAM_TOTAL } from "@/content";
import { fmt1 } from "@/lib/format";
import { Logo } from "@/components/ui/Logo";
import { Flamme } from "@/components/fx/Flamme";

export const metadata = { title: "Aujourd'hui" };

const DAY_MS = 86_400_000;

/** Un examen blanc par semaine : suggéré si le dernier date de plus de 7 jours. */
function examenSuggere(dernier: Date | undefined): boolean {
  return !dernier || Date.now() - dernier.getTime() > 7 * DAY_MS;
}

export default async function AujourdhuiPage() {
  const session = await auth();
  const userId = session!.user!.id!;
  const prenom = session?.user?.name?.split(" ")[0];

  const [bilan, enCours, faites, [stats], [dernierExamen]] = await Promise.all([
    bilanUtilisateur(userId),
    leconEnCours(userId),
    leconsTermineesDuJour(userId),
    db.select().from(userStats).where(eq(userStats.userId, userId)),
    db
      .select({ createdAt: examens.createdAt })
      .from(examens)
      .where(eq(examens.userId, userId))
      .orderBy(desc(examens.createdAt))
      .limit(1),
  ]);
  const serie = getEffectiveStreak(stats);
  const { score, projection } = bilan;
  const ref = rythmeDeReference(projection);
  const admis = score.total >= EXAM_PASS;
  const examenDu = examenSuggere(dernierExamen?.createdAt);
  const commencee = enCours ? enCours.answered : 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Logo />
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${
            serie > 0 ? "bg-gold-soft text-gold" : "bg-surface text-muted ring-1 ring-border"
          }`}
          title="Jours d'affilée avec au moins une leçon"
        >
          <Flamme allumee={serie > 0} /> {serie}
        </span>
      </div>

      <section className="rounded-card bg-primary p-5 text-on-primary shadow-lg shadow-primary/20">
        <p className="text-sm font-semibold opacity-80">
          {prenom ? `Bonjour ${prenom}` : "Bonjour"} ·{" "}
          {faites === 0 ? "leçon du jour à faire" : `${faites} leçon${faites > 1 ? "s" : ""} aujourd'hui`}
        </p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">
          {enCours
            ? "Ta leçon t'attend"
            : faites === 0
              ? "La leçon du jour"
              : "Leçon du jour faite"}
        </h1>
        <p className="mt-1 text-sm opacity-80">
          {enCours
            ? `${commencee}/${LECON_TAILLE} questions faites`
            : faites === 0
              ? `${LECON_TAILLE} questions · environ 7 minutes`
              : "Ta série est assurée. Une de plus fait avancer ta date."}
        </p>
        <form action={commencerLecon} className="mt-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3.5 font-bold text-[#000091] transition-transform active:scale-[0.98]">
            {enCours ? (
              <>
                <Play className="size-5" /> Reprendre
              </>
            ) : faites === 0 ? (
              <>
                <Play className="size-5" /> Commencer
              </>
            ) : (
              <>
                <Plus className="size-5" /> Encore une
              </>
            )}
          </button>
        </form>
        {faites > 0 && !enCours && (
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold opacity-80">
            <Check className="size-4" /> Objectif du jour atteint
          </p>
        )}
      </section>

      <Link
        href="/progres"
        className="block rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.99]"
      >
        <div className="flex items-baseline justify-between">
          <h2 className="font-bold">Score attendu</h2>
          <p className="tabular-nums">
            <span className={`text-2xl font-extrabold ${admis ? "text-success" : ""}`}>
              {fmt1(score.total)}
            </span>
            <span className="text-muted">/{EXAM_TOTAL}</span>
          </p>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {THEMES.map((t) => {
            const ratio = (score.parTheme[t.id] ?? 0) / (score.maxParTheme[t.id] || 1);
            return (
              <div key={t.id} title={t.titre}>
                <div className="relative h-14 overflow-hidden rounded-lg bg-border">
                  <div
                    className={`absolute inset-x-0 bottom-0 ${ratio >= 0.8 ? "bg-success" : "bg-primary"}`}
                    style={{ height: `${ratio * 100}%` }}
                  />
                  <span className="absolute inset-x-0 bottom-[80%] h-0.5 bg-foreground/30" />
                </div>
                <p className="mt-1 truncate text-center text-[10px] font-semibold text-muted">
                  {t.titreCourt}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-3 flex items-center gap-2 text-sm">
          <CalendarCheck className="size-4 shrink-0 text-primary" />
          <AnnonceDate a={annonce(score, projection, ref)} />
        </p>
      </Link>

      {examenDu && (
        <Link
          href="/examen"
          className="flex items-center gap-4 rounded-card border-2 border-primary/25 bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <GraduationCap className="size-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold">Examen blanc de la semaine</span>
            <span className="block text-sm text-muted">40 questions · 45 minutes · conditions réelles</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-muted" />
        </Link>
      )}

      {!examenDu && (
        <Link href="/examen" className="block text-center text-sm font-semibold text-primary">
          Examens blancs
        </Link>
      )}
    </div>
  );
}
