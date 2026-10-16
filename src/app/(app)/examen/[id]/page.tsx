import Link from "next/link";
import { notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { ArrowLeft, CircleCheck, CircleX } from "lucide-react";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { examens } from "@/db/schema";
import { getQuestion } from "@/content";
import { isPassed, isUltime, type ExamDetailEntry } from "@/lib/examen";

export const metadata = { title: "Revue d'examen" };

const dateFmt = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Paris",
});

export default async function ExamenReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const userId = session!.user!.id!;

  const [exam] = await db
    .select()
    .from(examens)
    .where(and(eq(examens.id, id), eq(examens.userId, userId)));
  if (!exam) notFound();

  let detail: ExamDetailEntry[] = [];
  try {
    detail = JSON.parse(exam.detail) as ExamDetailEntry[];
  } catch {
    notFound();
  }

  // les erreurs (et questions laissées sans réponse) en haut
  const sorted = [...detail].sort((a, b) => Number(a.correct) - Number(b.correct));
  const passed = isPassed(exam.score, exam.total);

  return (
    <div className="space-y-6 pb-6">
      <header className="flex items-center gap-3">
        <Link
          href="/examen"
          aria-label="Retour à l'examen blanc"
          className="flex size-10 items-center justify-center rounded-full border border-border bg-surface"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <div>
          <h1 className="text-xl font-bold tabular-nums">
            {exam.score}/{exam.total}{" "}
            <span className={`text-sm ${passed ? "text-success" : "text-accent"}`}>
              {passed ? "Admis" : "Recalé"}
            </span>
          </h1>
          <p className="text-xs text-muted">
            {isUltime(exam.total) ? "Examen ultime · " : ""}
            {dateFmt.format(exam.createdAt)}
          </p>
        </div>
      </header>

      <section className="space-y-3">
        {sorted.map(({ qcmId, chosenIndex, correct }) => {
          const qcm = getQuestion(qcmId);
          if (!qcm) return null;
          return (
            <details
              key={qcmId}
              open={!correct}
              className={`rounded-2xl border p-4 ${
                correct ? "border-success/40 bg-surface" : "border-accent/40 bg-surface"
              }`}
            >
              <summary className="flex cursor-pointer items-start gap-2 text-sm font-semibold">
                {correct ? (
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" />
                ) : (
                  <CircleX className="mt-0.5 size-4 shrink-0 text-accent" />
                )}
                <span>{qcm.question}</span>
              </summary>
              <div className="mt-3 space-y-1 text-sm">
                {!correct && (
                  <p className="text-accent">
                    Ta réponse :{" "}
                    {chosenIndex === null
                      ? "aucune réponse"
                      : (qcm.choices[chosenIndex] ?? "—")}
                  </p>
                )}
                <p className="text-success">
                  Bonne réponse : {qcm.choices[0]}
                </p>
                <p className="mt-2 text-muted">{qcm.explication}</p>
              </div>
            </details>
          );
        })}
      </section>
    </div>
  );
}
