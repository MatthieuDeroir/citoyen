/** Les trois couleurs du drapeau, pour les éclats et confettis. */
export const TRICOLORE = ["#000091", "#ffffff", "#e1000f"] as const;

/** Pseudo-aléatoire déterministe : un même effet se rejoue à l'identique. */
export function hasard(seed: number) {
  let s = seed % 2147483647 || 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}
