import { notFound } from "next/navigation";
import { getSousTheme, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getSolvedIds } from "@/lib/parcours";
import { shuffle } from "@/lib/shuffle";
import { OuvertePlayer } from "@/components/players/OuvertePlayer";

export function generateStaticParams() {
  return sousThemes.map((st) => ({ sousTheme: st.slug }));
}

export default async function OuvertesSessionPage({
  params,
}: {
  params: Promise<{ sousTheme: string }>;
}) {
  const { sousTheme: slug } = await params;
  const sousTheme = getSousTheme(slug);
  if (!sousTheme) notFound();

  const session = await auth();
  const userId = session!.user!.id!;

  const { ouvertes } = getContent(sousTheme.id);
  if (ouvertes.length === 0) notFound();

  // Ne rejouer que les exercices non validés ; quand tout est validé, tout rejouer.
  const solved = await getSolvedIds(userId, ouvertes.map((o) => o.id));
  const remaining = ouvertes.filter((o) => !solved.has(o.id));
  const deck = remaining.length > 0 ? shuffle(remaining) : shuffle(ouvertes);

  return (
    <OuvertePlayer
      next={getNextSession(slug, "ouvertes")}
      deck={deck}
      title={sousTheme.titre}
      backHref={`/parcours/${sousTheme.slug}`}
    />
  );
}
