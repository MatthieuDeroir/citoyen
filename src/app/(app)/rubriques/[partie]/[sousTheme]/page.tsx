import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  Layers,
  ListChecks,
  Lock,
  MessageCircleQuestion,
  TextCursorInput,
} from "lucide-react";
import { auth } from "@/lib/auth";
import {
  getSousThemeProgress,
  getUnlockedSousThemes,
  type SousThemeProgress,
} from "@/lib/parcours";
import { getPartie, getSousTheme } from "@/content/parties";
import { getContent } from "@/content";

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

export default async function SousThemePage({
  params,
  searchParams,
}: {
  params: Promise<{ partie: string; sousTheme: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const [{ partie: partieSlug, sousTheme: stSlug }, { from }] = await Promise.all([
    params,
    searchParams,
  ]);
  const partie = getPartie(partieSlug);
  const sousTheme = getSousTheme(stSlug);
  if (!partie || !sousTheme || sousTheme.partieId !== partie.id) notFound();

  const session = await auth();
  const userId = session!.user!.id!;

  const unlocked = await getUnlockedSousThemes(userId);
  if (!unlocked.has(sousTheme.id)) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-5 text-center">
        <span className="flex size-20 items-center justify-center rounded-full bg-border">
          <Lock className="size-9 text-muted" />
        </span>
        <div>
          <h1 className="text-xl font-bold">Unité verrouillée</h1>
          <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
            Termine l&apos;unité précédente à 60&nbsp;% dans le parcours pour débloquer «&nbsp;
            {sousTheme.titre}&nbsp;».
          </p>
        </div>
        <Link
          href="/parcours"
          className="rounded-2xl bg-primary px-6 py-3 font-semibold text-on-primary transition-transform active:scale-95"
        >
          Aller au parcours
        </Link>
      </div>
    );
  }

  const content = getContent(sousTheme.id);
  const progress = await getSousThemeProgress(userId, sousTheme.id);

  const totalDone =
    progress.cartes.done + progress.qcm.done + progress.ouvertes.done + progress.trous.done;
  const totalAll =
    progress.cartes.total + progress.qcm.total + progress.ouvertes.total + progress.trous.total;
  const percent = totalAll === 0 ? 0 : Math.round((totalDone / totalAll) * 100);

  const fromParcours = from === "parcours";
  const backHref = fromParcours ? "/parcours" : `/rubriques/${partie.slug}`;
  const backLabel = fromParcours ? "Parcours" : partie.titreCourt;

  return (
    <div className="space-y-6">
      <header>
        <Link
          href={backHref}
          className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted"
        >
          <ChevronLeft className="size-4" /> {backLabel}
        </Link>
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
          réussis au moins une fois.
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
    </div>
  );
}
