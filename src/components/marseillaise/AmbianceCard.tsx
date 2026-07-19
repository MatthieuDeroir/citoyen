"use client";

/* eslint-disable @next/next/no-img-element */
import { Music4, Pause, Play, SkipForward } from "lucide-react";
import type { AmbianceTrack } from "@/lib/ambiance";
import { useAmbiance } from "@/components/marseillaise/MarseillaiseProvider";

/**
 * Ambiance chanson française : tire au hasard dans un pool d'une centaine de
 * classiques (Piaf, Brel, Brassens, Aznavour…) — extraits 30 s Deezer,
 * enchaînés automatiquement.
 */
export function AmbianceCard({ tracks }: { tracks: AmbianceTrack[] }) {
  const { playing, current, toggle, next } = useAmbiance();

  if (tracks.length === 0) return null;

  return (
    <section className="flex items-center gap-4 rounded-card border border-border bg-surface p-4 shadow-sm">
      {current?.cover ? (
        <img
          src={current.cover}
          alt=""
          className="size-12 shrink-0 rounded-xl border border-border object-cover"
        />
      ) : (
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Music4 className="size-6" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h2 className="truncate font-bold">
          {current ? current.title : "Ambiance française"}
        </h2>
        <p className="truncate text-xs text-muted">
          {current
            ? current.artist
            : `${tracks.length} classiques de la chanson en aléatoire`}
        </p>
        <p className="text-[10px] text-muted">Extraits 30 s · Deezer</p>
      </div>
      {playing && (
        <button
          onClick={next}
          aria-label="Titre suivant"
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform active:scale-90"
        >
          <SkipForward className="size-5" />
        </button>
      )}
      <button
        onClick={() => toggle(tracks)}
        aria-label={playing ? "Mettre en pause" : "Lancer l'ambiance"}
        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-md shadow-primary/25 transition-transform active:scale-95"
      >
        {playing ? <Pause className="size-6" /> : <Play className="ml-0.5 size-6" />}
      </button>
    </section>
  );
}
