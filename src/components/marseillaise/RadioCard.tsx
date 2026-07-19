"use client";

import { Pause, Play, RadioTower } from "lucide-react";
import { useAmbiance } from "@/components/marseillaise/MarseillaiseProvider";

/**
 * Radio Chante France (chanson française) en direct — flux publics 128 kbps.
 * Choix de la webradio par décennie ; la lecture survit à la navigation via
 * le MarseillaiseProvider (mini-bouton flottant pour couper).
 */
const STATIONS = [
  {
    id: "cf",
    label: "Généraliste",
    title: "Chante France",
    src: "https://chantefrance.ice.infomaniak.ch/chantefrance-128.mp3",
  },
  {
    id: "cf60",
    label: "60's",
    title: "Chante France 60's",
    src: "https://chantefrance60s.ice.infomaniak.ch/chantefrance60s-128.mp3",
  },
  {
    id: "cf70",
    label: "70's",
    title: "Chante France 70's",
    src: "https://chantefrance70s.ice.infomaniak.ch/chantefrance70s-128.mp3",
  },
  {
    id: "cf80",
    label: "80's",
    title: "Chante France 80's",
    src: "https://chantefrance80s.ice.infomaniak.ch/chantefrance80s-128.mp3",
  },
  {
    id: "cf90",
    label: "90-2000",
    title: "Chante France 90-2000's",
    src: "https://chantefrance.ice.infomaniak.ch/chantefrance90-2000-128.mp3",
  },
] as const;

export function RadioCard() {
  const { playing, current, select, toggle } = useAmbiance();
  const active = STATIONS.find((s) => s.src === current?.src);

  return (
    <section className="rounded-card border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <RadioTower className="size-6" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-bold">
            {active ? active.title : "Radio chanson française"}
          </h2>
          <p className="truncate text-xs text-muted">
            {playing
              ? "En direct · Chante France"
              : "Les classiques en continu, par décennie"}
          </p>
        </div>
        <button
          onClick={() => {
            if (current) toggle();
            else select({ title: STATIONS[0].title, artist: "En direct", src: STATIONS[0].src, cover: "" });
          }}
          aria-label={playing ? "Mettre en pause" : "Écouter la radio"}
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-md shadow-primary/25 transition-transform active:scale-95"
        >
          {playing ? <Pause className="size-6" /> : <Play className="ml-0.5 size-6" />}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {STATIONS.map((s) => {
          const isActive = active?.id === s.id && playing;
          return (
            <button
              key={s.id}
              onClick={() =>
                select({ title: s.title, artist: "En direct", src: s.src, cover: "" })
              }
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-primary bg-primary text-on-primary"
                  : "border-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
