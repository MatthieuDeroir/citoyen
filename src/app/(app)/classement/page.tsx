/* eslint-disable @next/next/no-img-element */
import { Trophy } from "lucide-react";
import { auth } from "@/lib/auth";
import { getClassement } from "@/lib/classement";
import { EXAM_TOTAL } from "@/lib/examen";

export const metadata = { title: "Classement" };
export const dynamic = "force-dynamic";

const MEDALS = ["🥇", "🥈", "🥉"];

export default async function ClassementPage() {
  const session = await auth();
  const me = session!.user!.id!;
  const entries = await getClassement();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          <Trophy className="size-7 text-gold" /> Classement
        </h1>
        <p className="mt-1 text-sm text-muted">
          Complétion du livret, meilleur examen blanc et niveau de chaque
          citoyen en formation.
        </p>
      </header>

      <section className="space-y-3">
        {entries.map((entry, i) => {
          const isMe = entry.userId === me;
          return (
            <div
              key={entry.userId}
              className={`flex items-center gap-3 rounded-card border p-4 shadow-sm ${
                isMe ? "border-primary/50 bg-primary-soft" : "border-border bg-surface"
              }`}
            >
              <span className="w-8 shrink-0 text-center text-lg font-black tabular-nums">
                {MEDALS[i] ?? i + 1}
              </span>
              {entry.image ? (
                <img
                  src={entry.image}
                  alt=""
                  className="size-10 shrink-0 rounded-full border border-border"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
                  {entry.name.slice(0, 1).toUpperCase()}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">
                  {entry.name}
                  {isMe && <span className="ml-1 text-xs font-semibold text-primary">(toi)</span>}
                </p>
                <p className="text-xs text-muted">
                  Niv. {entry.level.level} — {entry.level.title}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-black tabular-nums">
                  {Math.round(entry.completion * 100)}&nbsp;%
                </p>
                <p className="text-xs tabular-nums text-muted">
                  {entry.bestExam !== null
                    ? `Examen : ${entry.bestExam}/${EXAM_TOTAL}`
                    : "Aucun examen"}
                </p>
              </div>
            </div>
          );
        })}
        {entries.length === 0 && (
          <p className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted">
            Personne au classement pour l&apos;instant.
          </p>
        )}
      </section>
    </div>
  );
}
