import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  Layers,
  ListChecks,
  MessageCircleQuestion,
  TextCursorInput,
} from "lucide-react";
import { getPartie, getSousTheme, sousThemes, parties } from "@/content/parties";
import { getContent } from "@/content";

export function generateStaticParams() {
  return sousThemes.map((st) => {
    const partie = parties.find((p) => p.id === st.partieId)!;
    return { partie: partie.slug, sousTheme: st.slug };
  });
}

const modes = [
  {
    href: "cartes",
    label: "Cartes de révision",
    description: "Mémorise recto-verso",
    icon: Layers,
    count: (c: ReturnType<typeof getContent>) => c.flashcards.length,
  },
  {
    href: "qcm",
    label: "QCM",
    description: "Choisis la bonne réponse",
    icon: ListChecks,
    count: (c: ReturnType<typeof getContent>) => c.qcms.length,
  },
  {
    href: "ouvertes",
    label: "Questions ouvertes",
    description: "Réponds comme à l'entretien",
    icon: MessageCircleQuestion,
    count: (c: ReturnType<typeof getContent>) => c.ouvertes.length,
  },
  {
    href: "trous",
    label: "Textes à trous",
    description: "Complète les phrases clés",
    icon: TextCursorInput,
    count: (c: ReturnType<typeof getContent>) => c.trous.length,
  },
] as const;

export default async function SousThemePage({
  params,
}: {
  params: Promise<{ partie: string; sousTheme: string }>;
}) {
  const { partie: partieSlug, sousTheme: stSlug } = await params;
  const partie = getPartie(partieSlug);
  const sousTheme = getSousTheme(stSlug);
  if (!partie || !sousTheme || sousTheme.partieId !== partie.id) notFound();

  const content = getContent(sousTheme.id);

  return (
    <div className="space-y-6">
      <header>
        <Link
          href={`/rubriques/${partie.slug}`}
          className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted"
        >
          <ChevronLeft className="size-4" /> {partie.titreCourt}
        </Link>
        <h1 className="text-xl font-bold leading-tight">{sousTheme.titre}</h1>
        <p className="mt-2 text-sm text-muted">{sousTheme.description}</p>
      </header>

      <ul className="grid grid-cols-1 gap-3">
        {modes.map(({ href, label, description, icon: Icon, count }) => {
          const n = count(content);
          if (n === 0) return null;
          return (
            <li key={href}>
              <Link
                href={`/session/${href}/${sousTheme.slug}`}
                className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold">{label}</span>
                  <span className="block text-sm text-muted">{description}</span>
                </span>
                <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary">
                  {n}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
