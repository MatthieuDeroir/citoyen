import Link from "next/link";
import {
  GraduationCap,
  ChevronRight,
  CircleCheck,
  CircleX,
  TrendingUp,
} from "lucide-react";
import { auth } from "@/lib/auth";
import {
  EXAM_DURATION_MINUTES,
  EXAM_PASS,
  EXAM_TOTAL,
  getExamHistory,
} from "@/lib/examen";
import { ExamChart } from "@/components/ui/ExamChart";

export const metadata = { title: "Examen blanc" };
export const dynamic = "force-dynamic";

const dateFmt = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Paris",
});

export default async function ExamenHubPage() {
  const session = await auth();
  const history = await getExamHistory(session!.user!.id!);
  const best = history.reduce((m, e) => Math.max(m, e.score), 0);
  const chronological = [...history].reverse();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Examen blanc</h1>
        <p className="mt-1 text-sm text-muted">
          {EXAM_TOTAL} questions officielles · {EXAM_DURATION_MINUTES} min · admis à{" "}
          {EXAM_PASS}/{EXAM_TOTAL}
        </p>
      </header>

      <Link
        href="/examen/nouveau"
        className="flex items-center gap-4 rounded-card border-2 border-primary/30 bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary">
          <GraduationCap className="size-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-bold">Lancer un examen blanc</span>
          <span className="block text-sm text-muted">
            Chaque sujet privilégie les questions jamais tombées
          </span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-muted" />
      </Link>

      {history.length > 0 && (
        <section className="rounded-card border border-border bg-surface p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-bold">
              <TrendingUp className="size-5 text-primary" /> Évolution
            </h2>
            <span className="text-sm font-semibold tabular-nums text-muted">
              Record : {best}/{EXAM_TOTAL}
            </span>
          </div>
          <div className="h-28">
            <ExamChart scores={chronological.map((e) => e.score)} />
          </div>
          <p className="mt-1 text-right text-[11px] text-muted">
            Ligne pointillée : seuil d&apos;admission ({EXAM_PASS}/{EXAM_TOTAL})
          </p>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="font-bold">Historique</h2>
        {history.length === 0 && (
          <p className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
            Aucun examen blanc passé pour l&apos;instant. Lance-toi : le premier
            sert de point de repère !
          </p>
        )}
        {history.map((exam) => (
          <Link
            key={exam.id}
            href={`/examen/${exam.id}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-transform active:scale-[0.99]"
          >
            {exam.passed ? (
              <CircleCheck className="size-6 shrink-0 text-success" />
            ) : (
              <CircleX className="size-6 shrink-0 text-accent" />
            )}
            <span className="min-w-0 flex-1">
              <span className="block font-bold tabular-nums">
                {exam.score}/{exam.total}
                <span
                  className={`ml-2 text-xs font-semibold ${exam.passed ? "text-success" : "text-accent"}`}
                >
                  {exam.passed ? "Admis" : "Recalé"}
                </span>
              </span>
              <span className="block text-xs text-muted">
                {dateFmt.format(exam.createdAt)}
              </span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-muted" />
          </Link>
        ))}
      </section>
    </div>
  );
}
