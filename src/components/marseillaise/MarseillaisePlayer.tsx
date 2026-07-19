"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { MARSEILLAISE_LYRICS } from "@/content/marseillaise";
import { useMarseillaise } from "@/components/marseillaise/MarseillaiseProvider";

/** Avance (s) appliquée au passage des lignes, pour compenser les timings tardifs. */
const LEAD_SECONDS = 1.5;

/**
 * Carte de l'accueil : paroles synchronisées façon YouTube Music — la ligne
 * en cours est mise en avant et centrée par translation du bloc de paroles,
 * taper une ligne y saute. L'audio vit dans le MarseillaiseProvider (layout),
 * la lecture continue donc en naviguant.
 */
export function MarseillaisePlayer() {
  const { playing, time, duration, toggle, seek } = useMarseillaise();
  const windowRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [offset, setOffset] = useState(0);

  let activeIndex = 0;
  for (let i = 0; i < MARSEILLAISE_LYRICS.length; i++) {
    if (time + LEAD_SECONDS >= MARSEILLAISE_LYRICS[i].t) activeIndex = i;
  }

  // centre la ligne active dans la fenêtre en translatant le bloc de paroles
  useLayoutEffect(() => {
    const win = windowRef.current;
    const line = lineRefs.current[activeIndex];
    if (!win || !line) return;
    const target = line.offsetTop + line.clientHeight / 2 - win.clientHeight / 2;
    setOffset(Math.max(0, target));
  }, [activeIndex]);

  const progress = duration > 0 ? time / duration : 0;
  const showLyrics = playing || time > 0;

  return (
    <section className="overflow-hidden rounded-card border border-border bg-surface shadow-sm">
      <div className="flex items-center gap-4 p-4">
        <button
          onClick={toggle}
          aria-label={playing ? "Mettre en pause" : "Écouter La Marseillaise"}
          className="tricolore shrink-0 rounded-full p-[3px] transition-transform active:scale-95"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-primary text-on-primary">
            {playing ? (
              <Pause className="size-6" />
            ) : (
              <Play className="ml-0.5 size-6" />
            )}
          </span>
        </button>
        <div className="min-w-0 flex-1">
          <h2 className="font-bold">La Marseillaise</h2>
          <p className="truncate text-xs text-muted">
            Hymne national · Rouget de Lisle, 1792
          </p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {showLyrics && (
        <div
          ref={windowRef}
          className="relative h-52 overflow-hidden border-t border-border px-5"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        >
          <div
            className="space-y-2 py-24 transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${offset}px)` }}
          >
            {MARSEILLAISE_LYRICS.map((line, i) => (
              <button
                key={i}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                onClick={() => seek(line.t)}
                className={`block w-full text-left font-bold leading-snug transition-all duration-300 ${
                  i === activeIndex
                    ? "text-lg text-foreground"
                    : "text-base text-muted opacity-50"
                }`}
              >
                {line.text}
              </button>
            ))}
            <p className="pt-4 text-[10px] text-muted">
              Enregistrement : Georges Thill · Musique de la Garde républicaine,
              1931 (domaine public)
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
