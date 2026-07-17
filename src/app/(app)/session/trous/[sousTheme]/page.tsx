import { notFound } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
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

  const { trous } = getContent(sousTheme.id);
  if (trous.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <TrousPlayer
      deck={trous}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
    />
  );
}
