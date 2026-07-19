import { EXAM_PASS, EXAM_TOTAL } from "@/lib/examen";

interface Props {
  /** Scores dans l'ordre chronologique (du plus ancien au plus récent). */
  scores: number[];
  height?: number;
}

/** Courbe d'évolution des scores d'examen blanc, avec le seuil d'admission. */
export function ExamChart({ scores, height = 110 }: Props) {
  const w = 100; // viewBox en %
  const pad = 6;
  const max = EXAM_TOTAL;

  const x = (i: number) =>
    scores.length === 1 ? w / 2 : pad + (i / (scores.length - 1)) * (w - pad * 2);
  const y = (score: number) => pad + (1 - score / max) * (height - pad * 2);

  const points = scores.map((s, i) => `${x(i)},${y(s)}`).join(" ");
  const threshold = y(EXAM_PASS);

  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      preserveAspectRatio="none"
      className="h-full w-full"
      role="img"
      aria-label={`Évolution des scores sur ${scores.length} examen${scores.length > 1 ? "s" : ""}`}
    >
      {/* seuil d'admission (32/40) */}
      <line
        x1={0}
        x2={w}
        y1={threshold}
        y2={threshold}
        className="stroke-success/60"
        strokeWidth="0.8"
        strokeDasharray="2.5 2"
        vectorEffect="non-scaling-stroke"
      />
      {scores.length > 1 && (
        <polyline
          points={points}
          fill="none"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}
      {scores.map((s, i) => (
        <circle
          key={i}
          cx={x(i)}
          cy={y(s)}
          r="2"
          className={s >= EXAM_PASS ? "fill-success" : "fill-accent"}
        />
      ))}
    </svg>
  );
}
