import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getPartie, getSousThemesByPartie, parties } from "@/content/parties";
import { PartieIcon } from "@/components/ui/PartieIcon";
import { BackLink } from "@/components/ui/BackLink";

export function generateStaticParams() {
  return parties.map((p) => ({ partie: p.slug }));
}

export default async function PartiePage({
  params,
}: {
  params: Promise<{ partie: string }>;
}) {
  const { partie: slug } = await params;
  const partie = getPartie(slug);
  if (!partie) notFound();

  const sousThemes = getSousThemesByPartie(partie.id);

  return (
    <div className="space-y-6">
      <header>
        <BackLink fallback="/rubriques" label="Retour" />
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <PartieIcon name={partie.icone} className="size-6" />
          </span>
          <h1 className="text-xl font-bold leading-tight">{partie.titre}</h1>
        </div>
        <p className="mt-2 text-sm text-muted">{partie.description}</p>
      </header>

      <ul className="space-y-3">
        {sousThemes.map((st) => (
          <li key={st.id}>
            <Link
              href={`/rubriques/${partie.slug}/${st.slug}`}
              className="flex items-center gap-3 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
            >
              <span aria-hidden className="text-2xl">
                {st.emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{st.titre}</span>
                <span className="block text-sm text-muted">
                  Pages {st.pages[0]}–{st.pages[1]} du livret
                </span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
