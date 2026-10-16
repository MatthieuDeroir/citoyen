"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";

const MAX = 4;
const DOUBLE_TAP = 2.5;

interface Vue {
  s: number;
  x: number;
  y: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Page du livret zoomable : pincer, double tap, glisser quand la page est
 * zoomée, boutons + / − / page entière. Non zoomée, la page laisse le défilement
 * vertical à la page (touch-action: pan-y).
 */
export function PageZoomable({ n, priorite = false }: { n: number; priorite?: boolean }) {
  const boite = useRef<HTMLDivElement>(null);
  const [vue, setVue] = useState<Vue>({ s: 1, x: 0, y: 0 });
  const [anime, setAnime] = useState(false);
  const pointeurs = useRef(new Map<number, { x: number; y: number }>());
  const geste = useRef<{ vue: Vue; d: number; m: { x: number; y: number } } | null>(null);
  const dernierTap = useRef(0);

  // garde la page couvrant le cadre : pas de bord vide en se déplaçant
  function borner(v: Vue): Vue {
    const el = boite.current;
    if (!el || v.s <= 1) return { s: 1, x: 0, y: 0 };
    const w = el.clientWidth;
    const h = el.clientHeight;
    return { s: v.s, x: clamp(v.x, w - w * v.s, 0), y: clamp(v.y, h - h * v.s, 0) };
  }

  /** Zoom vers `s` en gardant le point `m` (coordonnées du cadre) immobile. */
  function zoomer(depuis: Vue, s: number, m: { x: number; y: number }): Vue {
    const sc = clamp(s, 1, MAX);
    const px = (m.x - depuis.x) / depuis.s;
    const py = (m.y - depuis.y) / depuis.s;
    return borner({ s: sc, x: m.x - px * sc, y: m.y - py * sc });
  }

  const local = (e: { clientX: number; clientY: number }) => {
    const r = boite.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  function debutGeste() {
    const pts = [...pointeurs.current.values()];
    if (pts.length >= 2) {
      const [a, b] = pts;
      geste.current = {
        vue,
        d: Math.hypot(a.x - b.x, a.y - b.y),
        m: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      };
    } else if (pts.length === 1) {
      geste.current = { vue, d: 0, m: pts[0] };
    } else {
      geste.current = null;
    }
  }

  function onPointerDown(e: React.PointerEvent) {
    pointeurs.current.set(e.pointerId, local(e));
    if (pointeurs.current.size === 1) {
      const now = Date.now();
      if (now - dernierTap.current < 280) {
        // double tap : zoom sur le point touché, ou retour à la page entière
        setAnime(true);
        setVue(vue.s > 1 ? { s: 1, x: 0, y: 0 } : zoomer(vue, DOUBLE_TAP, local(e)));
        dernierTap.current = 0;
        return;
      }
      dernierTap.current = now;
    }
    if (pointeurs.current.size === 2 || vue.s > 1) {
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        // pointeur déjà relâché : rien à capturer
      }
    }
    setAnime(false);
    debutGeste();
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!pointeurs.current.has(e.pointerId) || !geste.current) return;
    pointeurs.current.set(e.pointerId, local(e));
    const pts = [...pointeurs.current.values()];
    const g = geste.current;
    if (pts.length >= 2 && g.d > 0) {
      const [a, b] = pts;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const z = zoomer(g.vue, (g.vue.s * d) / g.d, g.m);
      setVue(borner({ ...z, x: z.x + (m.x - g.m.x), y: z.y + (m.y - g.m.y) }));
    } else if (pts.length === 1 && g.vue.s > 1) {
      setVue(borner({ s: g.vue.s, x: g.vue.x + (pts[0].x - g.m.x), y: g.vue.y + (pts[0].y - g.m.y) }));
    }
  }

  function onPointerUp(e: React.PointerEvent) {
    pointeurs.current.delete(e.pointerId);
    debutGeste();
  }

  function bouton(facteur: number | null) {
    const el = boite.current;
    if (!el) return;
    setAnime(true);
    const centre = { x: el.clientWidth / 2, y: el.clientHeight / 2 };
    setVue(facteur === null ? { s: 1, x: 0, y: 0 } : zoomer(vue, vue.s * facteur, centre));
  }

  const zoomee = vue.s > 1;

  return (
    <figure className="relative">
      <div
        ref={boite}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`overflow-hidden rounded-2xl border border-border bg-white shadow-sm ${
          zoomee ? "cursor-grab touch-none active:cursor-grabbing" : "touch-pan-y"
        }`}
      >
        <img
          src={`/livret/page-${String(n).padStart(2, "0")}.webp`}
          alt={`Livret du citoyen, page ${n}`}
          loading={priorite ? "eager" : "lazy"}
          draggable={false}
          className="block w-full origin-top-left select-none"
          style={{
            transform: `translate3d(${vue.x}px, ${vue.y}px, 0) scale(${vue.s})`,
            transition: anime ? "transform 0.25s ease-out" : undefined,
          }}
        />
      </div>
      <div className="absolute right-2 bottom-2 flex gap-1 rounded-xl bg-surface/90 p-1 shadow-md ring-1 ring-border backdrop-blur">
        <button
          onClick={() => bouton(1 / 1.5)}
          disabled={!zoomee}
          aria-label="Dézoomer"
          className="rounded-lg p-1.5 text-foreground disabled:opacity-30"
        >
          <ZoomOut className="size-5" />
        </button>
        <button
          onClick={() => bouton(1.5)}
          disabled={vue.s >= MAX}
          aria-label="Zoomer"
          className="rounded-lg p-1.5 text-foreground disabled:opacity-30"
        >
          <ZoomIn className="size-5" />
        </button>
        {zoomee && (
          <button onClick={() => bouton(null)} aria-label="Page entière" className="rounded-lg p-1.5 text-foreground">
            <Maximize className="size-5" />
          </button>
        )}
      </div>
      {zoomee && (
        <figcaption className="pointer-events-none absolute top-2 left-2 rounded-lg bg-surface/90 px-2 py-0.5 text-xs font-semibold tabular-nums shadow ring-1 ring-border">
          ×{vue.s.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}
        </figcaption>
      )}
    </figure>
  );
}
