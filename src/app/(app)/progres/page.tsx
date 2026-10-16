import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { LogOut, GraduationCap, ChevronRight } from "lucide-react";
import { auth, signOut } from "@/lib/auth";
import { db } from "@/lib/db";
import { examens, userStats } from "@/db/schema";
import { bilanUtilisateur } from "@/lib/lecon";
import { annonce, rythmeDeReference, MASTERY_DAYS } from "@/lib/memoire";
import { AnnonceDate } from "@/components/ui/AnnonceDate";
import { coreQuestions, getQuestion, sousThemes, THEMES, EXAM_PASS, EXAM_TOTAL } from "@/content";
import { fmt1 } from "@/lib/format";
import { parisDay } from "@/lib/dates";
import { CourbeProgres } from "@/components/progres/CourbeProgres";
import { ReminderSettings } from "@/components/pwa/ReminderSettings";

export const metadata = { title: "Progrès" };

export default async function ProgresPage() {
  const session = await auth();
  const userId = session!.user!.id!;
  const [{ rejeu, score, projection, reglage }, [stats], derniersExamens] = await Promise.all([
    bilanUtilisateur(userId),
    db.select().from(userStats).where(eq(userStats.userId, userId)),
    db
      .select({ id: examens.id, score: examens.score, total: examens.total, createdAt: examens.createdAt })
      .from(examens)
      .where(eq(examens.userId, userId))
      .orderBy(desc(examens.createdAt))
      .limit(5),
  ]);
  const today = parisDay();
  const ref = rythmeDeReference(projection);
  const { etats } = rejeu;

  // par notion (sous-thème du livret) : questions comptées acquises / maîtrisées
  const notions = sousThemes
    .map((st) => {
      const pool = coreQuestions.filter((q) => q.notion === st.id);
      const acquises = pool.filter((q) => etats.get(q.id)?.lastCorrect).length;
      const maitrisees = pool.filter((q) => etats.get(q.id)?.masteredAt).length;
      const vues = pool.filter((q) => etats.has(q.id)).length;
      return { st, total: pool.length, acquises, maitrisees, vues };
    })
    .filter((n) => n.total > 0)
    .sort((a, b) => a.acquises / a.total - b.acquises / b.total);

  // questions qui résistent : ratées en ce moment, les plus souvent ratées d'abord
  const resistantes = [...etats.entries()]
    .filter(([, e]) => !e.lastCorrect)
    .sort(([, a], [, b]) => b.seen - b.correct - (a.seen - a.correct))
    .slice(0, 6)
    .flatMap(([id, e]) => {
      const q = getQuestion(id);
      return q ? [{ q, erreurs: e.seen - e.correct }] : [];
    });

  const seuil =
    projection.restantPourAdmission === null ? null : projection.acquises + projection.restantPourAdmission;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Progrès</h1>
        <p className="mt-1 text-sm text-muted">
          {projection.acquises} questions acquises sur {projection.totalCore} (banque officielle et mises en
          situation) · {projection.maitrisees} maîtrisées
        </p>
      </header>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-card border border-border bg-surface p-4">
          <p className="text-xs font-semibold text-muted">Score attendu</p>
          <p className="mt-1 tabular-nums">
            <span className={`text-3xl font-extrabold ${score.total >= EXAM_PASS ? "text-success" : ""}`}>
              {fmt1(score.total)}
            </span>
            <span className="text-muted">/{EXAM_TOTAL}</span>
          </p>
          <p className="text-xs text-muted">admis à {EXAM_PASS}</p>
        </div>
        <div className="rounded-card border border-border bg-surface p-4">
          <p className="text-xs font-semibold text-muted">Chance d&apos;admission</p>
          <p className="mt-1 text-3xl font-extrabold tabular-nums">{Math.round(score.admission * 100)} %</p>
          <p className="text-xs text-muted">si l&apos;examen avait lieu aujourd&apos;hui</p>
        </div>
      </section>

      <section className="rounded-card border border-border bg-surface p-4">
        <h2 className="font-bold">Date d&apos;examen</h2>
        <p className="mt-1 text-sm">
          <AnnonceDate a={annonce(score, projection, ref)} restant={projection.restantPourAdmission} />
        </p>
        <div className="mt-4">
          <CourbeProgres
            jours={rejeu.jours}
            today={today}
            depart={projection.depart}
            auDepart={projection.auDepart}
            totalCore={projection.totalCore}
            seuilAdmission={seuil}
            rythmes={projection.rythmes}
            initial={ref.cle}
          />
        </div>

        <table className="mt-4 w-full text-left text-sm">
          <caption className="sr-only">Projections selon le rythme</caption>
          <thead className="text-xs text-muted">
            <tr>
              <th className="py-1 font-semibold">Rythme</th>
              <th className="py-1 text-right font-semibold">/jour</th>
              <th className="py-1 text-right font-semibold">Admissible</th>
              <th className="py-1 text-right font-semibold">Banque maîtrisée</th>
            </tr>
          </thead>
          <tbody className="tabular-nums">
            {projection.rythmes.map((r) => (
              <tr key={r.cle} className={`border-t border-border ${r.cle === ref.cle ? "font-semibold" : ""}`}>
                <td className="py-1.5">{r.cle === "base" ? "Base (80 % de 15)" : r.label}</td>
                <td className="py-1.5 text-right">{fmt1(r.parJour)}</td>
                <td className="py-1.5 text-right">{r.admissible ? formatCourt(r.admissible) : "—"}</td>
                <td className="py-1.5 text-right">{r.banqueMaitrisee ? formatCourt(r.banqueMaitrisee) : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs text-muted">
          Rythme net : questions acquises moins les oublis. La droite de base suppose 12 questions acquises
          par jour (80 % d&apos;une leçon de 15, comme les 32/40 exigés). Une question est maîtrisée quand
          tu la réussis encore {MASTERY_DAYS} jours plus tard.
        </p>
      </section>

      <section className="rounded-card border border-border bg-surface p-4">
        <h2 className="font-bold">Par thème</h2>
        <ul className="mt-3 space-y-3">
          {THEMES.map((t) => {
            const s = score.parTheme[t.id] ?? 0;
            const max = score.maxParTheme[t.id] ?? 1;
            return (
              <li key={t.id}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{t.titre}</span>
                  <span className="tabular-nums text-muted">
                    {fmt1(s)}/{max}
                  </span>
                </div>
                <div className="relative mt-1 h-2.5 overflow-hidden rounded-full bg-border">
                  <div
                    className={`h-full rounded-full ${s / max >= 0.8 ? "bg-success" : "bg-primary"}`}
                    style={{ width: `${(s / max) * 100}%` }}
                  />
                  <span className="absolute inset-y-0 left-[80%] w-0.5 bg-foreground/30" />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-card border border-border bg-surface p-4">
        <h2 className="font-bold">Par notion</h2>
        <p className="text-xs text-muted">Les plus faibles d&apos;abord · questions acquises / comptées</p>
        <ul className="mt-3 divide-y divide-border">
          {notions.map((n) => (
            <li key={n.st.id} className="flex items-center gap-3 py-2.5">
              <span className="text-xl" aria-hidden>
                {n.st.emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">{n.st.titre}</span>
                <span className="mt-1 flex h-1.5 overflow-hidden rounded-full bg-border">
                  <span className="bg-[var(--chart-maitrisees)]" style={{ width: `${(n.maitrisees / n.total) * 100}%` }} />
                  <span
                    className="bg-[var(--chart-acquises)]"
                    style={{ width: `${((n.acquises - n.maitrisees) / n.total) * 100}%` }}
                  />
                </span>
              </span>
              <span className="text-right text-xs tabular-nums text-muted">
                <span className="block font-semibold text-foreground">
                  {n.acquises}/{n.total}
                </span>
                {n.vues < n.total ? `${n.total - n.vues} jamais vues` : "tout vu"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {resistantes.length > 0 && (
        <section className="rounded-card border border-border bg-surface p-4">
          <h2 className="font-bold">Questions qui résistent</h2>
          <p className="text-xs text-muted">Ratées à la dernière tentative : elles reviennent dans tes leçons.</p>
          <ul className="mt-3 space-y-3">
            {resistantes.map(({ q, erreurs }) => (
              <li key={q.id} className="text-sm">
                <p className="font-medium">{q.question}</p>
                <p className="mt-0.5 text-success">→ {q.choices[0]}</p>
                <p className="text-xs text-muted">
                  {erreurs} erreur{erreurs > 1 ? "s" : ""}
                  {q.page ? ` · livret p. ${q.page}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-card border border-border bg-surface p-4 text-sm">
        <h2 className="font-bold">Mémoire</h2>
        <dl className="mt-2 grid grid-cols-2 gap-y-2">
          <dt className="text-muted">Réussite sur 7 jours</dt>
          <dd className="text-right font-semibold tabular-nums">
            {rejeu.reussite7 === null ? "—" : `${Math.round(rejeu.reussite7 * 100)} %`}
          </dd>
          <dt className="text-muted">Oubli sur 14 jours</dt>
          <dd className="text-right font-semibold tabular-nums">
            {rejeu.oubli14 === null ? "—" : `${Math.round(rejeu.oubli14 * 100)} %`}
          </dd>
          <dt className="text-muted">Série record</dt>
          <dd className="text-right font-semibold tabular-nums">{stats?.longestStreak ?? 0} j</dd>
        </dl>
        <p className="mt-3 text-xs text-muted">{reglage.raison}</p>
      </section>

      <Link
        href="/examen"
        className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 transition-transform active:scale-[0.99]"
      >
        <GraduationCap className="size-6 shrink-0 text-primary" />
        <span className="min-w-0 flex-1">
          <span className="block font-semibold">Examens blancs</span>
          <span className="block text-sm text-muted">
            {derniersExamens.length
              ? `Derniers : ${derniersExamens
                  .filter((e) => e.total === EXAM_TOTAL)
                  .map((e) => e.score)
                  .join(" · ")}`
              : "Aucun pour l'instant"}
          </span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-muted" />
      </Link>

      <ReminderSettings slots={stats?.reminderSlots ?? "soir"} />

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface py-3 text-sm font-semibold text-muted">
          <LogOut className="size-4" /> Se déconnecter
        </button>
      </form>
    </div>
  );
}

function formatCourt(day: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", timeZone: "UTC" }).format(
    new Date(`${day}T12:00:00Z`),
  );
}
