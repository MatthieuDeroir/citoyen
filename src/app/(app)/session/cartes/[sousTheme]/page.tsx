import { notFound, redirect } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getUnlockedSousThemes } from "@/lib/parcours";
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
  const unlocked = await getUnlockedSousThemes(session!.user!.id!);
  if (!unlocked.has(sousTheme.id)) redirect("/parcours");

  const { flashcards } = getContent(sousTheme.id);
  if (flashcards.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <FlashcardPlayer
      next={getNextSession(slug, "cartes")}
      deck={flashcards}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
      onRate={reviewCard}
    />
  );
}
