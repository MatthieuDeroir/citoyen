/**
 * Niveaux fondés sur l'XP total : chaque niveau coûte un peu plus cher
 * que le précédent (100, 125, 150…). Les titres suivent le thème civique.
 */
const TITLES = [
  "Nouveau venu",
  "Apprenti citoyen",
  "Élève de la République",
  "Connaisseur du Livret",
  "Ami de Marianne",
  "Gardien de la devise",
  "Expert des institutions",
  "Ambassadeur des valeurs",
  "Sage de la République",
  "Citoyen d'honneur",
];

export interface Level {
  level: number;
  title: string;
  /** XP accumulé dans le niveau courant */
  intoLevel: number;
  /** XP nécessaire pour passer au niveau suivant */
  levelCost: number;
  /** 0 → 1 */
  progress: number;
}

export function getLevel(totalXp: number): Level {
  let level = 1;
  let remaining = Math.max(0, totalXp);
  let cost = 100;
  while (remaining >= cost) {
    remaining -= cost;
    level++;
    cost = 100 + (level - 1) * 25;
  }
  return {
    level,
    title: TITLES[Math.min(level, TITLES.length) - 1],
    intoLevel: remaining,
    levelCost: cost,
    progress: remaining / cost,
  };
}
