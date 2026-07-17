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

export interface SousTheme {
  id: string; // "p1-s1"
  partieId: PartieId;
  slug: string;
  titre: string;
  description: string;
  pages: [number, number];
}

export interface Flashcard {
  id: string; // "p1-s1-fc-001"
  sousThemeId: string;
  /** question ou notion, recto */
  front: string;
  /** réponse à mémoriser, verso — markdown léger (**gras**, listes -) */
  back: string;
  hint?: string;
  sourcePage: number;
}

export interface Qcm {
  id: string; // "p1-s1-qcm-001"
  sousThemeId: string;
  question: string;
  choices: string[]; // 4 choix
  correctIndex: number;
  /** affichée après réponse, bonne ou mauvaise */
  explication: string;
  sourcePage: number;
}

export interface QuestionOuverte {
  id: string; // "p1-s1-qo-001"
  sousThemeId: string;
  question: string;
  /** réponse modèle montrée à l'utilisateur après correction */
  expectedAnswer: string;
  /** points-clés injectés dans le prompt de correction */
  keyPoints: string[];
  sourcePage: number;
}

export interface Blank {
  /** correspond au {{n}} du template */
  index: number;
  /** toutes les formes acceptées en correction locale */
  accepted: string[];
  /** dates, chiffres, noms propres : correction exacte, jamais d'IA ni de tolérance typo */
  strict?: boolean;
}

export interface TexteATrous {
  id: string; // "p1-s1-tt-001"
  sousThemeId: string;
  intro?: string;
  /** texte avec trous notés {{1}}, {{2}}… */
  template: string;
  blanks: Blank[];
  sourcePage: number;
}

export interface SousThemeContent {
  flashcards: Flashcard[];
  qcms: Qcm[];
  ouvertes: QuestionOuverte[];
  trous: TexteATrous[];
}

export type ExerciseType = "qcm" | "ouverte" | "trous";
