/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { BackLink } from "@/components/ui/BackLink";
import {
  getPartie,
  getSousTheme,
  getSousThemesByPartie,
  parties,
  sousThemes,
} from "@/content/parties";

export function generateStaticParams() {
  return sousThemes.map((st) => ({
    partie: parties.find((p) => p.id === st.partieId)!.slug,
    sousTheme: st.slug,
  }));
}

export default async function LectureSousThemePage({
  params,
}: {
  params: Promise<{ partie: string; sousTheme: string }>;
}) {
  const { partie: partieSlug, sousTheme: stSlug } = await params;
  const partie = getPartie(partieSlug);
  const sousTheme = getSousTheme(stSlug);
  if (!partie || !sousTheme || sousTheme.partieId !== partie.id) notFound();

  // la page d'ouverture de la partie est rattachée à son premier sous-thème,
  // les pages de fin (ressources…) au dernier
  const siblings = getSousThemesByPartie(partie.id);
  const first = siblings[0]?.id === sousTheme.id;
  const last = siblings[siblings.length - 1]?.id === sousTheme.id;
  const from = first ? partie.pages[0] : sousTheme.pages[0];
  const to = last ? partie.pages[1] : sousTheme.pages[1];
  const pageNumbers = Array.from({ length: to - from + 1 }, (_, i) => from + i);

  return (
    <div className="space-y-4">
      <header>
        <BackLink fallback={`/rubriques/${partie.slug}`} label="Retour" />
        <h1 className="text-xl font-bold leading-tight">
          {sousTheme.emoji} {sousTheme.titre}
        </h1>
        <p className="mt-1 text-sm text-muted">
          Livret du citoyen, pages {from}–{to} — texte original.
        </p>
      </header>

      <div className="space-y-3">
        {pageNumbers.map((n) => (
          <img
            key={n}
            src={`/livret/page-${String(n).padStart(2, "0")}.webp`}
            alt={`Livret du citoyen, page ${n}`}
            loading="lazy"
            className="w-full rounded-2xl border border-border shadow-sm"
          />
        ))}
      </div>

      <Link
        href={`/parcours/${sousTheme.slug}`}
        className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 font-semibold text-on-primary transition-transform active:scale-[0.98]"
      >
        <Dumbbell className="size-5" /> S&apos;entraîner sur ce chapitre
      </Link>
    </div>
  );
}
