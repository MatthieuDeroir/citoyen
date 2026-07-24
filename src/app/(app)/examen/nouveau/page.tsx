import { auth } from "@/lib/auth";
import { buildExam } from "@/lib/examen";
import { getSeenExamQuestionIds } from "@/lib/examenDb";
import { withChoiceOrder } from "@/lib/shuffle";
import { submitExamen } from "@/actions/examen";
import { ExamenPlayer } from "@/components/players/ExamenPlayer";

export const metadata = { title: "Examen blanc" };
export const dynamic = "force-dynamic";

export default async function NouvelExamenPage() {
  const session = await auth();
  const seen = await getSeenExamQuestionIds(session!.user!.id!);
  const deck = withChoiceOrder(buildExam(seen));
  return <ExamenPlayer deck={deck} onSubmit={submitExamen} />;
}
