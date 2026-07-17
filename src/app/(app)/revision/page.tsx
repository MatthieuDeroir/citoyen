import Link from "next/link";
import { auth } from "@/lib/auth";
import { getDailyQueue } from "@/lib/queue";
import { reviewCard } from "@/actions/reviews";
import { FlashcardPlayer } from "@/components/players/FlashcardPlayer";
import { PartyPopper } from "lucide-react";

export const metadata = { title: "Réviser" };

export default async function RevisionPage() {
  const session = await auth();
  const userId = session!.user!.id!;

  const queue = await getDailyQueue(userId);

  if (queue.cards.length === 0) {
    return (
      <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 text-center">
        <PartyPopper className="size-14 text-primary" />
        <h1 className="text-2xl font-bold">Tout est à jour !</h1>
        <p className="max-w-xs text-muted">
          Aucune carte à réviser pour le moment. Reviens plus tard, ou entraîne-toi
          avec les QCM et exercices d&apos;une rubrique.
        </p>
        <Link
          href="/rubriques"
          className="rounded-2xl bg-primary px-6 py-3 font-semibold text-on-primary"
        >
          Explorer les rubriques
        </Link>
      </div>
    );
  }

  return (
    <FlashcardPlayer
      deck={queue.cards}
      title={`Révision du jour · ${queue.dueCount} due${queue.dueCount > 1 ? "s" : ""} + ${queue.newCount} nouvelle${queue.newCount > 1 ? "s" : ""}`}
      backHref="/dashboard"
      onRate={reviewCard}
    />
  );
}
