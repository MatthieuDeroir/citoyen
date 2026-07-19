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
        <h1 className="text-2xl font-bold">Rien à réviser ici !</h1>
        <p className="max-w-xs text-muted">
          La révision reprend les cartes que tu as déjà validées. Commence par
          apprendre des cartes dans le parcours ou les rubriques.
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
    <FlashcardPlayer
      deck={queue.cards}
      title={
        queue.ahead
          ? `Révision en avance · ${queue.cards.length} carte${queue.cards.length > 1 ? "s" : ""}`
          : `Révision du jour · ${queue.dueCount} carte${queue.dueCount > 1 ? "s" : ""} due${queue.dueCount > 1 ? "s" : ""}`
      }
      backHref="/dashboard"
      onRate={reviewCard}
    />
  );
}
