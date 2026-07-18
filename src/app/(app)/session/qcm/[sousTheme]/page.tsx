import { notFound, redirect } from "next/navigation";
import { getSousTheme, getPartie, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getUnlockedSousThemes } from "@/lib/parcours";
import { QcmPlayer } from "@/components/players/QcmPlayer";
import { submitQcm } from "@/actions/attempts";

export function generateStaticParams() {
  return sousThemes.map((st) => ({ sousTheme: st.slug }));
}

export default async function QcmSessionPage({
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

  const { qcms } = getContent(sousTheme.id);
  if (qcms.length === 0) notFound();

  const partie = getPartie(sousTheme.partieId)!;

  return (
    <QcmPlayer
      next={getNextSession(slug, "qcm")}
      deck={qcms}
      title={sousTheme.titre}
      backHref={`/rubriques/${partie.slug}/${sousTheme.slug}`}
      onSubmit={submitQcm}
    />
  );
}
