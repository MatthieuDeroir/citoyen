import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { chargerLecon } from "@/lib/lecon";
import { sousThemes, THEMES } from "@/content";
import { LeconPlayer } from "@/components/lecon/LeconPlayer";

export const metadata = { title: "Leçon" };

const themeLabels = Object.fromEntries(THEMES.map((t) => [t.id, t.titreCourt]));
const notionLabels = Object.fromEntries(sousThemes.map((s) => [s.id, s.titre]));

export default async function LeconPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const data = await chargerLecon(session!.user!.id!, id);
  if (!data) notFound();

  return (
    <LeconPlayer
      // une leçon déjà finie rouvre directement sur son bilan
      key={id}
      leconId={id}
      items={data.items}
      themeLabels={themeLabels}
      notionLabels={notionLabels}
    />
  );
}
