import { notFound } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
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

  const { ouvertes } = getContent(sousTheme.id);
  if (ouvertes.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <OuvertePlayer
      deck={ouvertes}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
    />
  );
}
