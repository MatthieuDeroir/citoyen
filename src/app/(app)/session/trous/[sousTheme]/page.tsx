import { notFound } from "next/navigation";
import { getSousTheme, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getSolvedIds } from "@/lib/parcours";
import { shuffle } from "@/lib/shuffle";
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
  const userId = session!.user!.id!;

  const { trous } = getContent(sousTheme.id);
  if (trous.length === 0) notFound();

  // Ne rejouer que les exercices non validés ; quand tout est validé, tout rejouer.
  const solved = await getSolvedIds(userId, trous.map((t) => t.id));
  const remaining = trous.filter((t) => !solved.has(t.id));
  const deck = remaining.length > 0 ? shuffle(remaining) : shuffle(trous);

  return (
    <TrousPlayer
      next={getNextSession(slug, "trous")}
      deck={deck}
      title={sousTheme.titre}
      backHref={`/parcours/${sousTheme.slug}`}
    />
  );
}
