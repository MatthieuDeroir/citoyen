import { notFound } from "next/navigation";
import { getSousTheme, sousThemes } from "@/content/parties";
import { getContent } from "@/content";
import { getNextSession } from "@/lib/sessionNav";
import { auth } from "@/lib/auth";
import { getSolvedIds } from "@/lib/parcours";
import { shuffle, withChoiceOrder } from "@/lib/shuffle";
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
  const userId = session!.user!.id!;

  const { qcms } = getContent(sousTheme.id);
  if (qcms.length === 0) notFound();

  // Ne jouer que les questions non validées ; quand tout est validé, tout rejouer.
  const solved = await getSolvedIds(userId, qcms.map((q) => q.id));
  const remaining = qcms.filter((q) => !solved.has(q.id));
  const deck = withChoiceOrder(remaining.length > 0 ? shuffle(remaining) : shuffle(qcms));

  return (
    <QcmPlayer
      next={getNextSession(slug, "qcm")}
      deck={deck}
      title={sousTheme.titre}
      backHref={`/parcours/${sousTheme.slug}`}
      onSubmit={submitQcm}
    />
  );
}
