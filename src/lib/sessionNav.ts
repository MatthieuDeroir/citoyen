import { getContent } from "@/content";
import { getSousTheme } from "@/content/parties";

// Questions ouvertes et textes à trous retirés du parcours pour l'instant :
// seules les cartes et les QCM restent proposés.
const ORDER = ["cartes", "qcm"] as const;
export type SessionMode = (typeof ORDER)[number];

const LABELS: Record<SessionMode, string> = {
  cartes: "Cartes de révision",
  qcm: "QCM",
};

const COUNTS: Record<SessionMode, (c: ReturnType<typeof getContent>) => number> = {
  cartes: (c) => c.flashcards.length,
  qcm: (c) => c.qcms.length,
};

/**
 * Activité suivante du sous-thème (ordre pédagogique cartes → QCM),
 * pour enchaîner directement depuis l'écran de résultats.
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
