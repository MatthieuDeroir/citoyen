import { buildExam } from "@/lib/examen";
import { submitExamen } from "@/actions/examen";
import { ExamenPlayer } from "@/components/players/ExamenPlayer";

export const metadata = { title: "Examen blanc" };
export const dynamic = "force-dynamic";

export default function ExamenPage() {
  const deck = buildExam();
  return <ExamenPlayer deck={deck} onSubmit={submitExamen} />;
}
