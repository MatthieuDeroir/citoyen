import Link from "next/link";
import { PartyPopper } from "lucide-react";
import { auth } from "@/lib/auth";
import { getErrorQcms } from "@/lib/erreurs";
import { shuffle, withChoiceOrder } from "@/lib/shuffle";
import { QcmPlayer } from "@/components/players/QcmPlayer";
import { submitQcm } from "@/actions/attempts";

export const metadata = { title: "Corriger mes erreurs" };
export const dynamic = "force-dynamic";

/** Une session de correction reste digeste ; le reste attend la suivante. */
const SESSION_SIZE = 15;

export default async function ErreursPage() {
  const session = await auth();
  const errors = await getErrorQcms(session!.user!.id!);

  if (errors.length === 0) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 text-center">
        <PartyPopper className="size-14 text-primary" />
        <h1 className="text-2xl font-bold">Aucune erreur à corriger !</h1>
        <p className="max-w-xs text-muted">
          Toutes tes dernières réponses sont justes. Les questions ratées en QCM
          ou en examen blanc atterriront ici.
        </p>
        <Link
          href="/dashboard"
          className="rounded-2xl bg-primary px-6 py-3 font-semibold text-on-primary"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  const deck = withChoiceOrder(shuffle(errors).slice(0, SESSION_SIZE));

  return (
    <QcmPlayer
      deck={deck}
      title={`Corriger mes erreurs · ${errors.length}`}
      backHref="/dashboard"
      onSubmit={submitQcm}
    />
  );
}
