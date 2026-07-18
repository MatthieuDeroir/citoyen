import { getContent } from "@/content";
import { getSousTheme } from "@/content/parties";

const ORDER = ["cartes", "qcm", "ouvertes", "trous"] as const;
export type SessionMode = (typeof ORDER)[number];

const LABELS: Record<SessionMode, string> = {
  cartes: "Cartes de révision",
  qcm: "QCM",
  ouvertes: "Questions ouvertes",
  trous: "Textes à trous",
};

const COUNTS: Record<SessionMode, (c: ReturnType<typeof getContent>) => number> = {
  cartes: (c) => c.flashcards.length,
  qcm: (c) => c.qcms.length,
  ouvertes: (c) => c.ouvertes.length,
  trous: (c) => c.trous.length,
};

/**
 * Activité suivante du sous-thème (ordre pédagogique cartes → QCM →
 * ouvertes → trous), pour enchaîner directement depuis l'écran de résultats.
 */
export function getNextSession(
  sousThemeSlug: string,
  current: SessionMode,
): { href: string; label: string } | undefined {
  const st = getSousTheme(sousThemeSlug);
  if (!st) return undefined;
  const content = getContent(st.id);
  for (const mode of ORDER.slice(ORDER.indexOf(current) + 1)) {
    if (COUNTS[mode](content) > 0) {
      return { href: `/session/${mode}/${st.slug}`, label: LABELS[mode] };
    }
  }
  return undefined;
}
