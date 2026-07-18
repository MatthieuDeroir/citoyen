import { notFound, redirect } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getUnlockedSousThemes } from "@/lib/parcours";
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
  const unlocked = await getUnlockedSousThemes(session!.user!.id!);
  if (!unlocked.has(sousTheme.id)) redirect("/parcours");

  const { ouvertes } = getContent(sousTheme.id);
  if (ouvertes.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <OuvertePlayer
      next={getNextSession(slug, "ouvertes")}
      deck={ouvertes}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
    />
  );
}
