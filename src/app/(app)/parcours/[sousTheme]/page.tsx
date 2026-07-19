import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Layers,
  ListChecks,
  MessageCircleQuestion,
  TextCursorInput,
} from "lucide-react";
import { BackLink } from "@/components/ui/BackLink";
import { auth } from "@/lib/auth";
import { getSousThemeProgress, type SousThemeProgress } from "@/lib/parcours";
import { getPartie, getSousTheme, sousThemes } from "@/content/parties";
import { getContent } from "@/content";

export function generateStaticParams() {
  return sousThemes.map((st) => ({ sousTheme: st.slug }));
}

const modes = [
  {
    href: "cartes",
    key: "cartes",
    label: "Cartes de révision",
    description: "Mémorise recto-verso",
    doneLabel: "revues avec succès",
    icon: Layers,
    count: (c: ReturnType<typeof getContent>) => c.flashcards.length,
  },
  {
    href: "qcm",
    key: "qcm",
    label: "QCM",
    description: "Choisis la bonne réponse",
    doneLabel: "réussis",
    icon: ListChecks,
    count: (c: ReturnType<typeof getContent>) => c.qcms.length,
  },
  {
    href: "ouvertes",
    key: "ouvertes",
    label: "Questions ouvertes",
    description: "Réponds comme à l'entretien",
    doneLabel: "réussies",
    icon: MessageCircleQuestion,
    count: (c: ReturnType<typeof getContent>) => c.ouvertes.length,
  },
  {
    href: "trous",
    key: "trous",
    label: "Textes à trous",
    description: "Complète les phrases clés",
    doneLabel: "réussis",
    icon: TextCursorInput,
    count: (c: ReturnType<typeof getContent>) => c.trous.length,
  },
] as const;

export default async function UniteParcoursPage({
  params,
}: {
  params: Promise<{ sousTheme: string }>;
}) {
  const { sousTheme: stSlug } = await params;
  const sousTheme = getSousTheme(stSlug);
  if (!sousTheme) notFound();
  const partie = getPartie(sousTheme.partieId)!;

  const session = await auth();
  const userId = session!.user!.id!;

  const content = getContent(sousTheme.id);
  const progress = await getSousThemeProgress(userId, sousTheme.id);

  const totalDone =
    progress.cartes.done + progress.qcm.done + progress.ouvertes.done + progress.trous.done;
  const totalAll =
    progress.cartes.total + progress.qcm.total + progress.ouvertes.total + progress.trous.total;
  const percent = totalAll === 0 ? 0 : Math.round((totalDone / totalAll) * 100);

  return (
    <div className="space-y-6">
      <header>
        <BackLink fallback="/parcours" label="Retour" />
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-xl font-bold leading-tight">
            {sousTheme.emoji} {sousTheme.titre}
          </h1>
          <span className="mt-0.5 shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold tabular-nums text-primary">
            {percent}%
          </span>
        </div>
        <p className="mt-2 text-sm text-muted">{sousTheme.description}</p>
        <p className="mt-1 text-xs text-muted">
          {totalDone}/{totalAll} éléments validés — cartes revues avec succès et exercices
          réussis au moins une fois (examens blancs compris).
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3">
        {modes.map(({ href, key, label, description, doneLabel, icon: Icon, count }) => {
          const n = count(content);
          if (n === 0) return null;
          const p: SousThemeProgress[keyof SousThemeProgress] = progress[key];
          const full = p.done >= p.total;
          return (
            <li key={href}>
              <Link
                href={`/session/${href}/${sousTheme.slug}`}
                className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm transition-transform active:scale-[0.98]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{label}</span>
                  <span className="block text-sm text-muted">{description}</span>
                  <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-border">
                    <span
                      className={`block h-full rounded-full ${full ? "bg-success" : "bg-primary"}`}
                      style={{ width: `${p.total === 0 ? 0 : (p.done / p.total) * 100}%` }}
                    />
                  </span>
                </span>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold tabular-nums ${
                    full ? "bg-success-soft text-success" : "bg-primary-soft text-primary"
                  }`}
                  title={`${p.done} ${doneLabel} sur ${p.total}`}
                >
                  {p.done}/{p.total}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href={`/rubriques/${partie.slug}/${sousTheme.slug}`}
        className="flex items-center gap-3 rounded-card border border-border bg-surface p-4 text-sm shadow-sm transition-transform active:scale-[0.98]"
      >
        <BookOpen className="size-5 shrink-0 text-primary" />
        <span className="min-w-0 flex-1">
          <span className="block font-semibold">Lire ce chapitre dans le livret</span>
          <span className="block text-muted">
            Pages {sousTheme.pages[0]}–{sousTheme.pages[1]} du Livret du citoyen
          </span>
        </span>
      </Link>
    </div>
  );
}
