import { notFound } from "next/navigation";

// Textes à trous retirés du parcours pour l'instant (correction IA à fiabiliser
// et contenu à auditer). Le contenu et le lecteur (TrousPlayer) restent en place
// pour une réactivation ultérieure ; seule la route est désactivée.
export default function TrousSessionPage() {
  notFound();
}
