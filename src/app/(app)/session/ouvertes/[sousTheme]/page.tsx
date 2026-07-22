import { notFound } from "next/navigation";

// Questions ouvertes retirées du parcours pour l'instant (correction IA à fiabiliser
// et contenu à auditer). Le contenu et le lecteur (OuvertePlayer) restent en place
// pour une réactivation ultérieure ; seule la route est désactivée.
export default function OuvertesSessionPage() {
  notFound();
}
