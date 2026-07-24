import Link from "next/link";
import { PartyPopper } from "lucide-react";
import { auth } from "@/lib/auth";
import { allQcms } from "@/content";
import { getSolvedIds } from "@/lib/parcours";
import { shuffle, withChoiceOrder } from "@/lib/shuffle";
import { QcmPlayer } from "@/components/players/QcmPlayer";
import { submitQcm } from "@/actions/attempts";

export const metadata = { title: "Révision éclair" };
export const dynamic = "force-dynamic";

/** Révision éclair : 5 questions parmi toutes celles déjà validées. */
const SESSION_SIZE = 5;

export default async function RevisionQcmPage() {
  const session = await auth();
  const userId = session!.user!.id!;

  const solved = await getSolvedIds(userId, allQcms.map((q) => q.id));
  const validated = allQcms.filter((q) => solved.has(q.id));

  if (validated.length === 0) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 text-center">
        <PartyPopper className="size-14 text-primary" />
        <h1 className="text-2xl font-bold">Rien à réviser encore</h1>
        <p className="max-w-xs text-muted">
          La révision éclair repioche dans les questions que tu as déjà
          validées. Commence par des QCM dans le parcours.
        </p>
        <Link
          href="/parcours"
          className="rounded-2xl bg-primary px-6 py-3 font-semibold text-on-primary"
        >
          Aller au parcours
        </Link>
      </div>
    );
  }

  return (
    <QcmPlayer
      deck={withChoiceOrder(shuffle(validated).slice(0, SESSION_SIZE))}
      title="Révision éclair"
      backHref="/dashboard"
      onSubmit={submitQcm}
    />
  );
}
