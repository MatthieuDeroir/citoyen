"use client";

import { useMemo, useRef, useState } from "react";
import type { JourPoint, Rythme } from "@/lib/memoire";
import { formatJourCourt } from "@/lib/format";

const W = 600;
const H = 300;
const PAD = { top: 16, right: 92, bottom: 30, left: 36 };
const DAY_MS = 86_400_000;

const t = (day: string) => new Date(`${day}T12:00:00Z`).getTime();

interface Props {
  jours: JourPoint[];
  today: string;
  depart: string;
  totalCore: number;
  /** questions acquises nécessaires pour un score attendu de 32/40 */
  seuilAdmission: number | null;
  rythmes: Rythme[];
  /** rythme dont la projection est tracée au départ */
  initial: Rythme["cle"];
}

/**
 * Questions acquises et maîtrisées par jour, droite de base (12/jour depuis le
 * premier jour) et projection au rythme choisi jusqu'à la banque complète.
 * Un seul axe : des questions.
 */
export function CourbeProgres({ jours, today, depart, totalCore, seuilAdmission, rythmes, initial }: Props) {
  const [cle, setCle] = useState<Rythme["cle"]>(initial);
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const base = rythmes.find((r) => r.cle === "base")!;
  const rythme = rythmes.find((r) => r.cle === cle) ?? base;
  const last = jours[jours.length - 1];
  const acquises = last?.acquises ?? 0;

  const geo = useMemo(() => {
    const x0 = t(depart);
    const ends = [t(today) + 7 * DAY_MS, t(base.banqueAcquise!)];
    if (rythme.banqueAcquise) ends.push(t(rythme.banqueAcquise));
    const x1 = Math.max(...ends);
    const sx = (ms: number) => PAD.left + ((ms - x0) / (x1 - x0)) * (W - PAD.left - PAD.right);
    const sy = (v: number) => H - PAD.bottom - (v / totalCore) * (H - PAD.top - PAD.bottom);
    // graduations de date : ~5 repères
    const span = (x1 - x0) / DAY_MS;
    const step = Math.max(1, Math.ceil(span / 5 / 7) * 7);
    const ticks: string[] = [];
    for (let d = 0; d <= span; d += step) ticks.push(new Date(x0 + d * DAY_MS).toISOString().slice(0, 10));
    return { x0, x1, sx, sy, ticks };
  }, [depart, today, base.banqueAcquise, rythme.banqueAcquise, totalCore]);

  const { sx, sy } = geo;
  const path = (pts: [number, number][]) =>
    pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
  const lineAcq = path(jours.map((j) => [sx(t(j.day)), sy(j.acquises)]));
  const lineMai = path(jours.map((j) => [sx(t(j.day)), sy(j.maitrisees)]));
  const baseEnd = t(base.banqueAcquise!);
  const proj =
    rythme.cle !== "base" && rythme.banqueAcquise && acquises < totalCore
      ? path([
          [sx(t(today)), sy(acquises)],
          [sx(t(rythme.banqueAcquise)), sy(totalCore)],
        ])
      : null;

  const yTicks = [0, Math.round(totalCore / 2), totalCore];
  const h = hover !== null ? jours[hover] : null;
  const baseAt = (day: string) =>
    Math.min(totalCore, Math.max(0, ((t(day) - geo.x0) / DAY_MS + 1) * base.parJour));

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg || !jours.length) return;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    let best = 0;
    let dist = Infinity;
    jours.forEach((j, i) => {
      const d = Math.abs(sx(t(j.day)) - x);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    setHover(best);
  }

  // étiquettes de fin de ligne, écartées si elles se chevauchent
  const labAcq = sy(acquises);
  let labMai = sy(last?.maitrisees ?? 0);
  if (Math.abs(labMai - labAcq) < 14) labMai = labAcq + 14;

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded bg-[var(--chart-acquises)]" /> Acquises
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 rounded bg-[var(--chart-maitrisees)]" /> Maîtrisées
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 border-t-2 border-dashed border-muted" /> Base 12/jour
        </span>
      </div>

      <div className="relative">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-none select-none"
          role="img"
          aria-label={`Questions acquises : ${acquises} sur ${totalCore}`}
          onPointerMove={onMove}
          onPointerDown={onMove}
          onPointerLeave={() => setHover(null)}
        >
          {/* grille */}
          {yTicks.map((v) => (
            <g key={v}>
              <line x1={PAD.left} x2={W - PAD.right} y1={sy(v)} y2={sy(v)} stroke="var(--border)" />
              <text x={PAD.left - 6} y={sy(v) + 4} textAnchor="end" fontSize="11" fill="var(--muted)">
                {v}
              </text>
            </g>
          ))}
          {geo.ticks.map((d) => (
            <text key={d} x={sx(t(d))} y={H - 10} textAnchor="middle" fontSize="11" fill="var(--muted)">
              {formatJourCourt(d)}
            </text>
          ))}

          {/* seuil d'admission (score attendu 32/40) */}
          {seuilAdmission !== null && seuilAdmission < totalCore && (
            <g>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={sy(seuilAdmission)}
                y2={sy(seuilAdmission)}
                stroke="var(--success)"
                strokeDasharray="2 4"
                opacity="0.7"
              />
              <text x={W - PAD.right + 6} y={sy(seuilAdmission) + 4} fontSize="11" fill="var(--muted)">
                Admissible
              </text>
            </g>
          )}
          <text x={W - PAD.right + 6} y={sy(totalCore) + 4} fontSize="11" fill="var(--muted)">
            Banque
          </text>

          {/* aujourd'hui */}
          <line
            x1={sx(t(today))}
            x2={sx(t(today))}
            y1={PAD.top}
            y2={H - PAD.bottom}
            stroke="var(--muted)"
            strokeOpacity="0.35"
          />

          {/* droite de base */}
          <path
            d={path([
              [sx(geo.x0), sy(0)],
              [sx(baseEnd), sy(totalCore)],
            ])}
            stroke="var(--muted)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            fill="none"
          />
          {proj && (
            <path d={proj} stroke="var(--chart-acquises)" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.8" />
          )}

          <path d={lineMai} stroke="var(--chart-maitrisees)" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path d={lineAcq} stroke="var(--chart-acquises)" strokeWidth="2" fill="none" strokeLinejoin="round" />

          {last && (
            <>
              <circle cx={sx(t(last.day))} cy={labAcq} r="4" fill="var(--chart-acquises)" stroke="var(--surface)" strokeWidth="2" />
              <text x={sx(t(last.day)) + 8} y={labAcq - 6} fontSize="12" fontWeight="700" fill="var(--foreground)">
                {acquises}
              </text>
              <text x={sx(t(last.day)) + 8} y={labMai + 14} fontSize="11" fill="var(--muted)">
                {last.maitrisees}
              </text>
            </>
          )}

          {h && (
            <g>
              <line
                x1={sx(t(h.day))}
                x2={sx(t(h.day))}
                y1={PAD.top}
                y2={H - PAD.bottom}
                stroke="var(--foreground)"
                strokeOpacity="0.25"
              />
              <circle cx={sx(t(h.day))} cy={sy(h.acquises)} r="4" fill="var(--chart-acquises)" stroke="var(--surface)" strokeWidth="2" />
              <circle cx={sx(t(h.day))} cy={sy(h.maitrisees)} r="4" fill="var(--chart-maitrisees)" stroke="var(--surface)" strokeWidth="2" />
            </g>
          )}
        </svg>

        {h && (
          <div
            className="pointer-events-none absolute top-1 rounded-xl border border-border bg-surface-raised px-3 py-2 text-xs shadow-lg"
            style={{
              left: `${(sx(t(h.day)) / W) * 100}%`,
              transform: sx(t(h.day)) > W / 2 ? "translateX(calc(-100% - 8px))" : "translateX(8px)",
            }}
          >
            <p className="font-bold">{formatJourCourt(h.day)}</p>
            <p>
              <span className="mr-1 inline-block size-2 rounded-full bg-[var(--chart-acquises)]" />
              {h.acquises} acquises
            </p>
            <p>
              <span className="mr-1 inline-block size-2 rounded-full bg-[var(--chart-maitrisees)]" />
              {h.maitrisees} maîtrisées
            </p>
            <p className="text-muted">Base : {Math.round(baseAt(h.day))}</p>
            <p className="text-muted">{h.reponses} réponses ce jour-là</p>
          </div>
        )}
      </div>

      {rythmes.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Projection">
          {rythmes
            .filter((r) => r.cle !== "base")
            .map((r) => (
              <button
                key={r.cle}
                role="radio"
                aria-checked={cle === r.cle}
                onClick={() => setCle(cle === r.cle ? "base" : r.cle)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 transition-colors ${
                  cle === r.cle
                    ? "bg-primary text-on-primary ring-primary"
                    : "bg-surface text-muted ring-border hover:text-foreground"
                }`}
              >
                Projection · {r.label.toLowerCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
