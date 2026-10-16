/** Retour haptique discret (mobiles qui le permettent ; sans effet ailleurs). */
export function vibrer(motif: number | number[]) {
  try {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate(motif);
  } catch {
    // API absente ou bloquée : rien à faire
  }
}
