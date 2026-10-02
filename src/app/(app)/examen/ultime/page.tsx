import { buildUltime } from "@/lib/examen";
import { withChoiceOrder } from "@/lib/shuffle";
import { submitExamen } from "@/actions/examen";
import { ExamenPlayer } from "@/components/players/ExamenPlayer";

export const metadata = { title: "Examen ultime" };
export const dynamic = "force-dynamic";

export default function ExamenUltimePage() {
  return <ExamenPlayer deck={withChoiceOrder(buildUltime())} mode="ultime" onSubmit={submitExamen} />;
}
