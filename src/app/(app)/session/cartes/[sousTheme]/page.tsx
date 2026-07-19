import { notFound } from "next/navigation";
import { getSousTheme, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { FlashcardPlayer } from "@/components/players/FlashcardPlayer";
import { reviewCard } from "@/actions/reviews";

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

  return (
    <FlashcardPlayer
      next={getNextSession(slug, "cartes")}
      deck={flashcards}
      title={sousTheme.titre}
      backHref={`/parcours/${sousTheme.slug}`}
      onRate={reviewCard}
    />
  );
}
