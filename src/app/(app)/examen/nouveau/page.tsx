import { auth } from "@/lib/auth";
import { buildExam, getSeenExamQuestionIds } from "@/lib/examen";
import { submitExamen } from "@/actions/examen";
import { ExamenPlayer } from "@/components/players/ExamenPlayer";

export const metadata = { title: "Examen blanc" };
export const dynamic = "force-dynamic";

export default async function NouvelExamenPage() {
  const session = await auth();
  const seen = await getSeenExamQuestionIds(session!.user!.id!);
  const deck = buildExam(seen);
  return <ExamenPlayer deck={deck} onSubmit={submitExamen} />;
}
