"use client";

import { useRouter } from "next/navigation";

/**
 * Sortie d'une session d'exercice : remplace l'entrée d'historique de la
 * session par `fallback`, pour qu'un « retour » ultérieur ne re-rentre
 * jamais dans l'exercice quitté.
 *
 * Volontairement `router.replace` et non `router.back()` : la navigation
 * retour/avant du navigateur réutilise les pages mises en cache côté client
 * sans re-fetch, même après un `revalidatePath` côté serveur (cache local
 * dédié au back/forward). `replace` suit le chemin de navigation normal, qui
 * va bien récupérer la progression à jour après un exercice.
 */
export function useExitSession(fallback: string): () => void {
  const router = useRouter();
  return () => {
    router.replace(fallback);
  };
}
