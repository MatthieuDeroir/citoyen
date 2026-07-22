import { notFound } from "next/navigation";
import { getSousTheme, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getMasteredCardIds } from "@/lib/parcours";
import { shuffle } from "@/lib/shuffle";
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

  const session = await auth();
  const userId = session!.user!.id!;

  const { flashcards } = getContent(sousTheme.id);
  if (flashcards.length === 0) notFound();

  // Ne rejouer que les cartes non maîtrisées ; quand tout est maîtrisé, tout rejouer.
  const mastered = await getMasteredCardIds(userId, flashcards.map((c) => c.id));
  const remaining = flashcards.filter((c) => !mastered.has(c.id));
  const deck = remaining.length > 0 ? shuffle(remaining) : shuffle(flashcards);

  return (
    <FlashcardPlayer
      next={getNextSession(slug, "cartes")}
      deck={deck}
      title={sousTheme.titre}
      backHref={`/parcours/${sousTheme.slug}`}
      onRate={reviewCard}
    />
  );
}
