"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

/**
 * Bouton retour qui revient à la page réellement précédente (historique) ;
 * `fallback` sert quand la page est ouverte directement (lien partagé, reload).
 */
export function BackLink({
  fallback,
  label,
}: {
  fallback: string;
  label: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) router.back();
        else router.push(fallback);
      }}
      className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-muted"
    >
      <ChevronLeft className="size-4" /> {label}
    </button>
  );
}
