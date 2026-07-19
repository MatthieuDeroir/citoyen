/**
 * Niveaux fondés sur l'XP total. La courbe est volontairement lente :
 * premier niveau à 150 XP puis +60 XP par niveau (150, 210, 270…),
 * soit plusieurs jours de pratique par niveau une fois lancé.
 */
const TITLES = [
  "Nouveau venu",
  "Curieux de la République",
  "Apprenti citoyen",
  "Lecteur du Livret",
  "Élève appliqué",
  "Élève de la République",
  "Connaisseur des symboles",
  "Connaisseur du Livret",
  "Ami de Marianne",
  "Fidèle de la devise",
  "Gardien de la devise",
  "Habitué des institutions",
  "Expert des institutions",
  "Défenseur des droits",
  "Ambassadeur des valeurs",
  "Pilier de la République",
  "Sage de la République",
  "Mémoire de la Nation",
  "Grand citoyen",
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

export function levelCostOf(level: number): number {
  return 150 + (level - 1) * 60;
}

export function getLevel(totalXp: number): Level {
  let level = 1;
  let remaining = Math.max(0, totalXp);
  while (remaining >= levelCostOf(level)) {
    remaining -= levelCostOf(level);
    level++;
  }
  const cost = levelCostOf(level);
  return {
    level,
    title: TITLES[Math.min(level, TITLES.length) - 1],
    intoLevel: remaining,
    levelCost: cost,
    progress: remaining / cost,
  };
}
