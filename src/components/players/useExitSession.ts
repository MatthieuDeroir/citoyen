"use client";

import { useRouter } from "next/navigation";

/**
 * Sortie d'une session d'exercice : retour arrière dans l'historique, pour
 * qu'un « retour » ultérieur ne re-rentre jamais dans l'exercice quitté.
 * `fallback` sert quand la session est ouverte directement (lien, reload).
 */
export function useExitSession(fallback: string): () => void {
  const router = useRouter();
  return () => {
    if (window.history.length > 1) router.back();
    else router.push(fallback);
  };
}
