"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Pause, Play, RadioTower } from "lucide-react";
import { RADIO_STATIONS, radioUrl } from "@/lib/radio";
import { useAmbiance } from "@/components/marseillaise/MarseillaiseProvider";

interface NowPlaying {
  artist: string | null;
  title: string | null;
  cover: string | null;
}

/**
 * Radio Chante France (chanson française) en direct — choix de la webradio
 * par décennie, pochette + artiste + titre du morceau en cours (métadonnées
 * ICY via /api/radio/meta, rafraîchies toutes les 20 s). La lecture survit à
 * la navigation via le MarseillaiseProvider.
 */
export function RadioCard() {
  const { playing, current, select, toggle } = useAmbiance();
  const [now, setNow] = useState<NowPlaying | null>(null);

  const active = RADIO_STATIONS.find((s) => radioUrl(s) === current?.src);

  // morceau en cours : au choix de la station puis toutes les 20 s en lecture
  useEffect(() => {
    if (!active) {
      setNow(null);
      return;
    }
    let cancelled = false;
    const load = () =>
      fetch(`/api/radio/meta?station=${active.id}`)
        .then((r) => r.json())
        .then((data: NowPlaying) => {
          if (!cancelled) setNow(data);
        })
        .catch(() => {});
    load();
    if (!playing) return;
    const timer = setInterval(load, 20_000);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [active, playing]);

  function play(stationId: string) {
    const station = RADIO_STATIONS.find((s) => s.id === stationId)!;
    setNow(null);
    select({
      title: station.title,
      artist: "En direct",
      src: radioUrl(station),
      cover: "",
    });
  }

  return (
    <section className="rounded-card border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-center gap-4">
        {now?.cover ? (
          <img
            src={now.cover}
            alt=""
            className="size-14 shrink-0 rounded-xl border border-border object-cover"
          />
        ) : (
          <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <RadioTower className="size-6" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-bold">
            {now?.title ?? (active ? active.title : "Radio chanson française")}
          </h2>
          <p className="truncate text-sm text-muted">
            {now?.artist ?? (playing ? "En direct · Chante France" : "Les classiques en continu, par décennie")}
          </p>
          {active && now?.title && (
            <p className="truncate text-[10px] text-muted">
              En direct · {active.title}
            </p>
          )}
        </div>
        <button
          onClick={() => (current ? toggle() : play(RADIO_STATIONS[0].id))}
          aria-label={playing ? "Mettre en pause" : "Écouter la radio"}
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-md shadow-primary/25 transition-transform active:scale-95"
        >
          {playing ? <Pause className="size-6" /> : <Play className="ml-0.5 size-6" />}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {RADIO_STATIONS.map((s) => {
          const isActive = active?.id === s.id && playing;
          return (
            <button
              key={s.id}
              onClick={() => play(s.id)}
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
