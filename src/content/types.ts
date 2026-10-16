export type PartieId = "p1" | "p2" | "p3" | "p4" | "p5" | "annexes";

export interface Partie {
  id: PartieId;
  slug: string;
  titre: string;
  titreCourt: string;
  description: string;
  /** nom d'icône lucide, résolu côté composant */
  icone: string;
  pages: [number, number];
}

/** Sous-thème du livret : sert de « notion » pour suivre les progrès. */
export interface SousTheme {
  id: string; // "p1-s1"
  partieId: PartieId;
  slug: string;
  titre: string;
  description: string;
  emoji: string;
  pages: [number, number];
}

/** Les 5 thématiques officielles de l'examen civique. */
export type ThemeId = "pv" | "si" | "dd" | "hg" | "vs";

export type QuestionKind = "connaissance" | "situation";

/**
 * Une question, toujours au format de l'examen : QCM à 4 choix.
 * La bonne réponse est TOUJOURS en premier dans `choices` ; l'affichage mélange.
 */
export interface Question {
  /** stable : l'historique des réponses s'y rattache */
  id: string;
  theme: ThemeId;
  /** id du sous-thème du livret ("p1-s1") */
  notion: string;
  kind: QuestionKind;
  /** intitulé de la banque officielle du ministère (12 déc. 2025) */
  official: boolean;
  /** variante d'une question officielle : même notion, autre angle */
  variantOf?: string;
  /** 1 = accessible, 2 = exigeante, 3 = piège / détail fin */
  difficulty: 1 | 2 | 3;
  question: string;
  choices: [string, string, string, string] | string[];
  /** affichée après la réponse, juste ou fausse */
  explication: string;
  /** page du Livret du citoyen 2026 */
  page?: number;
}
