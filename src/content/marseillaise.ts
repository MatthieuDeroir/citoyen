/**
 * Paroles de La Marseillaise (Rouget de Lisle, 1792 — domaine public),
 * texte établi d'après Wikisource « La Marseillaise (1792) »,
 * synchronisées sur l'enregistrement Georges Thill / Musique de la Garde
 * républicaine (Columbia, 1931 — Wikimedia Commons, domaine public) :
 * couplet 1, refrain, « Amour sacré de la Patrie », refrain.
 * `t` = seconde d'entrée de la ligne.
 */
export interface LyricLine {
  t: number;
  text: string;
}

export const MARSEILLAISE_LYRICS: LyricLine[] = [
  { t: 0.0, text: "♪" },
  { t: 23.0, text: "Allons, enfants de la Patrie !" },
  { t: 27.0, text: "Le jour de gloire est arrivé." },
  { t: 30.8, text: "Contre nous de la tyrannie" },
  { t: 34.5, text: "L’étendard sanglant est levé." },
  { t: 38.2, text: "L’étendard sanglant est levé." },
  { t: 44.0, text: "Entendez-vous dans les campagnes" },
  { t: 48.0, text: "Mugir ces féroces soldats ?" },
  { t: 52.0, text: "Ils viennent jusque dans nos bras," },
  { t: 56.0, text: "Égorger vos fils, vos compagnes !…" },
  { t: 63.0, text: "Aux armes, citoyens !" },
  { t: 67.5, text: "Formez vos bataillons !" },
  { t: 71.5, text: "Marchons, marchons !" },
  { t: 75.5, text: "Qu’un sang impur abreuve nos sillons !" },
  { t: 82.5, text: "Aux armes, citoyens !" },
  { t: 87.0, text: "Formez vos bataillons !" },
  { t: 91.0, text: "Marchons, marchons !" },
  { t: 95.0, text: "Qu’un sang impur abreuve nos sillons !" },
  { t: 101.0, text: "♪" },
  { t: 105.0, text: "Amour sacré de la Patrie," },
  { t: 109.6, text: "Conduis, soutiens nos bras vengeurs :" },
  { t: 114.2, text: "Liberté ! liberté chérie" },
  { t: 118.8, text: "Combats avec tes défenseurs." },
  { t: 123.4, text: "Combats avec tes défenseurs." },
  { t: 131.0, text: "Sous nos drapeaux que la Victoire" },
  { t: 137.5, text: "Accoure à tes mâles accents :" },
  { t: 144.0, text: "Que tes ennemis expirants" },
  { t: 150.5, text: "Voient ton triomphe et notre gloire." },
  { t: 158.0, text: "Aux armes, citoyens !" },
  { t: 162.5, text: "Formez vos bataillons !" },
  { t: 166.5, text: "Marchons, marchons !" },
  { t: 170.5, text: "Qu’un sang impur abreuve nos sillons !" },
  { t: 177.5, text: "Aux armes, citoyens !" },
  { t: 182.0, text: "Formez vos bataillons !" },
  { t: 186.0, text: "Marchons, marchons !" },
  { t: 190.0, text: "Qu’un sang impur abreuve nos sillons !" },
];
