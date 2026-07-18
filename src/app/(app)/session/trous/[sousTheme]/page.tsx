import { notFound, redirect } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getUnlockedSousThemes } from "@/lib/parcours";
import { TrousPlayer } from "@/components/players/TrousPlayer";

export function generateStaticParams() {
  return sousThemes.map((st) => ({ sousTheme: st.slug }));
}

export default async function TrousSessionPage({
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

  const { trous } = getContent(sousTheme.id);
  if (trous.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <TrousPlayer
      next={getNextSession(slug, "trous")}
      deck={trous}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
    />
  );
}
