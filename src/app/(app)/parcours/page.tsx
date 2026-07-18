import Link from "next/link";
import { Lock, Star, Check } from "lucide-react";
import { auth } from "@/lib/auth";
import { getParcours } from "@/lib/parcours";
import { parties } from "@/content/parties";
import { PartieIcon } from "@/components/ui/PartieIcon";
import { ProgressRing } from "@/components/ui/ProgressRing";

export const metadata = { title: "Parcours" };

export default async function ParcoursPage() {
  const session = await auth();
  const unites = await getParcours(session!.user!.id!);

  let currentPartieId = "";

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Parcours</h1>
        <p className="mt-1 text-sm text-muted">
          Suis le livret unité par unité. Atteins 60&nbsp;% pour déverrouiller la suivante.
        </p>
      </header>

      <ol className="relative space-y-3">
        {unites.map((unite, i) => {
          const partie = parties.find((p) => p.id === unite.sousTheme.partieId)!;
          const showPartieHeader = partie.id !== currentPartieId;
          currentPartieId = partie.id;
          const percent = Math.round(unite.progress * 100);
          // léger zigzag façon Duolingo
          const offset = ["ml-0", "ml-10", "ml-4", "ml-12", "ml-2"][i % 5];

          return (
            <li key={unite.sousTheme.id}>
              {showPartieHeader && (
                <div className="mb-3 mt-6 flex items-center gap-2 first:mt-0">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <PartieIcon name={partie.icone} className="size-4" />
                  </span>
                  <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
                    {partie.titreCourt}
                  </h2>
                </div>
              )}

              <div className={offset}>
                {unite.unlocked ? (
                  <Link
                    href={`/rubriques/${partie.slug}/${unite.sousTheme.slug}?from=parcours`}
                    className={`flex w-fit max-w-full items-center gap-4 rounded-card border-2 p-3 pr-5 shadow-sm transition-transform active:scale-[0.97] ${
                      unite.perfect
                        ? "border-gold bg-gold-soft"
                        : "border-border bg-surface"
                    }`}
                  >
                    <ProgressRing progress={unite.progress} size={56} strokeWidth={5}>
                      {unite.perfect ? (
                        <Star className="size-6 fill-gold text-gold" />
                      ) : percent >= 100 ? (
                        <Check className="size-6 text-success" />
                      ) : (
                        <span className="text-xs font-bold tabular-nums">{percent}%</span>
                      )}
                    </ProgressRing>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold leading-tight">
                        {unite.sousTheme.titre}
                      </span>
                      <span className="block text-xs text-muted">
                        {unite.perfect ? "Unité parfaite ⭐" : unite.sousTheme.description}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <div className="flex w-fit max-w-full items-center gap-4 rounded-card border-2 border-dashed border-border bg-surface/50 p-3 pr-5 opacity-60">
                    <span className="flex size-14 items-center justify-center rounded-full bg-border">
                      <Lock className="size-5 text-muted" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold leading-tight text-muted">
                        {unite.sousTheme.titre}
                      </span>
                      <span className="block text-xs text-muted">
                        Termine l&apos;unité précédente à 60&nbsp;%
                      </span>
                    </span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
