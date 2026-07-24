/** Fisher-Yates, sans muter l'entrée. */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface WithChoiceOrder {
  /** Ordre d'affichage des choix (indices dans `choices`). */
  order: number[];
}

/**
 * Attache à chaque QCM un ordre d'affichage des choix mélangé, calculé une
 * seule fois ici (côté serveur). `shuffle()` utilise Math.random() : l'appeler
 * pendant le rendu d'un composant client provoquerait un tirage différent au
 * SSR et à l'hydratation, donc un mismatch d'hydratation React — perçu comme
 * des clics fantômes ou des questions qui changent toutes seules.
 */
export function withChoiceOrder<T extends { choices: string[] }>(
  items: readonly T[],
): (T & WithChoiceOrder)[] {
  return items.map((item) => ({
    ...item,
    order: shuffle(item.choices.map((_, i) => i)),
  }));
}
