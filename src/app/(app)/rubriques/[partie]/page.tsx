import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ChevronLeft, Lock } from "lucide-react";
import { auth } from "@/lib/auth";
import { getUnlockedSousThemes } from "@/lib/parcours";
import { getPartie, getSousThemesByPartie } from "@/content/parties";
import { getContent } from "@/content";
import { PartieIcon } from "@/components/ui/PartieIcon";

export default async function PartiePage({
  params,
}: {
  params: Promise<{ partie: string }>;
}) {
  const { partie: slug } = await params;
  const partie = getPartie(slug);
  if (!partie) notFound();

  const session = await auth();
  const unlocked = await getUnlockedSousThemes(session!.user!.id!);
  const sousThemes = getSousThemesByPartie(partie.id);

  return (
    <div className="space-y-6">
      <header>
        <Link
          href="/rubriques"
          className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted"
        >
          <ChevronLeft className="size-4" /> Rubriques
        </Link>
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <PartieIcon name={partie.icone} className="size-6" />
          </span>
          <h1 className="text-xl font-bold leading-tight">{partie.titre}</h1>
        </div>
        <p className="mt-2 text-sm text-muted">{partie.description}</p>
      </header>

      <ul className="space-y-3">
        {sousThemes.map((st) => {
          const content = getContent(st.id);
          const total =
            content.flashcards.length +
            content.qcms.length +
            content.ouvertes.length +
            content.trous.length;
          const isUnlocked = unlocked.has(st.id);
          const ready = total > 0; // les cartes sont en libre accès

          return (
            <li key={st.id}>
              <Link
                href={ready ? `/rubriques/${partie.slug}/${st.slug}` : "#"}
                aria-disabled={!ready}
                className={`flex items-center gap-3 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform ${
                  ready ? "active:scale-[0.98]" : "pointer-events-none opacity-50"
                }`}
              >
                <span aria-hidden className="text-2xl">
                  {st.emoji}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{st.titre}</span>
                  <span className="block text-sm text-muted">
                    {total === 0
                      ? "Bientôt disponible"
                      : !isUnlocked
                        ? `${content.flashcards.length} cartes en libre accès · exercices via le parcours`
                        : `${content.flashcards.length} cartes · ${content.qcms.length} QCM · ${
                            content.ouvertes.length + content.trous.length
                          } exercices`}
                  </span>
                </span>
                {ready && !isUnlocked && <Lock className="size-4 shrink-0 text-muted" />}
                {ready && <ChevronRight className="size-5 shrink-0 text-muted" />}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
