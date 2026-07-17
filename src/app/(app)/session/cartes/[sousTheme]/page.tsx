import { notFound } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { FlashcardPlayer } from "@/components/players/FlashcardPlayer";

export function generateStaticParams() {
  return sousThemes.map((st) => ({ sousTheme: st.slug }));
}

export default async function CartesSessionPage({
  params,
}: {
  params: Promise<{ sousTheme: string }>;
}) {
  const { sousTheme: slug } = await params;
  const sousTheme = getSousTheme(slug);
  if (!sousTheme) notFound();

  const { flashcards } = getContent(sousTheme.id);
  if (flashcards.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <FlashcardPlayer
      deck={flashcards}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
    />
  );
}
