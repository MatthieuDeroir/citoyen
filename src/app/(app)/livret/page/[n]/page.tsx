/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BackLink } from "@/components/ui/BackLink";
import { sousThemes } from "@/content/parties";

const PAGES = 83;

/** Une page du livret, ouverte depuis la correction d'une question. */
export default async function LivretPage({ params }: { params: Promise<{ n: string }> }) {
  const n = Number((await params).n);
  if (!Number.isInteger(n) || n < 1 || n > PAGES) notFound();
  const st = sousThemes.find((s) => n >= s.pages[0] && n <= s.pages[1]);
  const pad = (k: number) => String(k).padStart(2, "0");

  return (
    <div className="space-y-4">
      <header>
        <BackLink fallback="/livret" label="Retour" />
        <h1 className="text-xl font-bold">Livret du citoyen, page {n}</h1>
        {st && (
          <p className="mt-1 text-sm text-muted">
            {st.emoji} {st.titre}
          </p>
        )}
      </header>
      <img
        src={`/livret/page-${pad(n)}.webp`}
        alt={`Livret du citoyen, page ${n}`}
        className="w-full rounded-2xl border border-border shadow-sm"
      />
      <nav className="flex justify-between text-sm font-semibold text-primary">
        {n > 1 ? (
          <Link href={`/livret/page/${n - 1}`} className="flex items-center gap-1">
            <ChevronLeft className="size-4" /> Page {n - 1}
          </Link>
        ) : (
          <span />
        )}
        {n < PAGES && (
          <Link href={`/livret/page/${n + 1}`} className="flex items-center gap-1">
            Page {n + 1} <ChevronRight className="size-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
