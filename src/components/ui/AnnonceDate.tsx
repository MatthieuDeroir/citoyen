import type { Annonce } from "@/lib/memoire";
import { formatJour } from "@/lib/format";

/** La phrase de la date d'examen, identique partout (accueil, progrès, bilan). */
export function AnnonceDate({ a, restant }: { a: Annonce; restant?: number | null }) {
  switch (a.type) {
    case "admis":
      return (
        <span>
          Tu es <strong>admissible</strong> : score attendu au-dessus de 32/40.
        </span>
      );
    case "consolider":
      return (
        <span>
          Tu as acquis assez de questions pour 32/40 : <strong>tiens tes révisions</strong> pour les garder.
        </span>
      );
    case "date":
      return (
        <span>
          Admissible le <strong>{formatJour(a.date)}</strong>
          {restant ? `, encore ${restant} questions à acquérir` : ""}
          <span className="text-muted"> · {a.base ? "rythme de base" : "ton rythme de la semaine"}</span>
        </span>
      );
    case "oubli":
      return (
        <span>
          À ton taux d&apos;oubli actuel, même toute la banque ne suffit pas : <strong>les révisions d&apos;abord</strong>.
        </span>
      );
    case "rythme":
      return <span className="text-muted">Fais quelques leçons pour estimer ta date.</span>;
  }
}
