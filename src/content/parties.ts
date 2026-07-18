import type { Partie, SousTheme } from "./types";

export const parties: Partie[] = [
  {
    id: "p1",
    slug: "principes-et-valeurs",
    titre: "Principes et valeurs de la République",
    titreCourt: "Principes et valeurs",
    description: "La devise, les symboles et les grands principes républicains.",
    icone: "Landmark",
    pages: [5, 14],
  },
  {
    id: "p2",
    slug: "systeme-institutionnel",
    titre: "Système institutionnel et politique",
    titreCourt: "Institutions",
    description: "La démocratie, l'organisation territoriale et l'Union européenne.",
    icone: "Building2",
    pages: [15, 23],
  },
  {
    id: "p3",
    slug: "droits-et-devoirs",
    titre: "Droits et devoirs des citoyens",
    titreCourt: "Droits et devoirs",
    description: "Les droits fondamentaux et les obligations de chaque citoyen.",
    icone: "Scale",
    pages: [24, 36],
  },
  {
    id: "p4",
    slug: "histoire-geographie-culture",
    titre: "Histoire, géographie et culture",
    titreCourt: "Histoire et culture",
    description: "Les grandes périodes, les personnages, le territoire et le patrimoine.",
    icone: "MapIcon",
    pages: [37, 60],
  },
  {
    id: "p5",
    slug: "vivre-en-societe",
    titre: "Vivre dans la société française",
    titreCourt: "Vie en société",
    description: "La vie quotidienne, le travail et la vie familiale en France.",
    icone: "Users",
    pages: [61, 76],
  },
  {
    id: "annexes",
    slug: "annexes",
    titre: "Annexes — textes fondamentaux",
    titreCourt: "Annexes",
    description: "La DDHC de 1789 et la Charte des droits et devoirs du citoyen.",
    icone: "ScrollText",
    pages: [77, 83],
  },
];

export const sousThemes: SousTheme[] = [
  {
    id: "p1-s1",
    partieId: "p1",
    slug: "devise-et-symboles",
    titre: "La devise et les symboles de la République",
    description: "Liberté, égalité, fraternité — drapeau, Marianne, 14 juillet…",
    emoji: "🇫🇷",
    pages: [6, 9],
  },
  {
    id: "p1-s2",
    partieId: "p1",
    slug: "principes-de-la-republique",
    titre: "Les principes de la République",
    description: "Une République indivisible, laïque, démocratique et sociale.",
    emoji: "🏛️",
    pages: [10, 14],
  },
  {
    id: "p2-s1",
    partieId: "p2",
    slug: "democratie-et-etat-de-droit",
    titre: "Démocratie et état de droit",
    description: "Les pouvoirs, les élections et la séparation des pouvoirs.",
    emoji: "🗳️",
    pages: [16, 18],
  },
  {
    id: "p2-s2",
    partieId: "p2",
    slug: "organisation-territoriale",
    titre: "Organisation territoriale de la République",
    description: "Communes, départements, régions et outre-mer.",
    emoji: "🗺️",
    pages: [19, 21],
  },
  {
    id: "p2-s3",
    partieId: "p2",
    slug: "union-europeenne",
    titre: "L'Union européenne et ses institutions",
    description: "La construction européenne et ses institutions.",
    emoji: "🇪🇺",
    pages: [22, 23],
  },
  {
    id: "p3-s1",
    partieId: "p3",
    slug: "droits-fondamentaux",
    titre: "Les droits fondamentaux",
    description: "Libertés, protection sociale, éducation, santé…",
    emoji: "📜",
    pages: [25, 31],
  },
  {
    id: "p3-s2",
    partieId: "p3",
    slug: "obligations-et-devoirs",
    titre: "Les obligations et devoirs des citoyens",
    description: "Respect de la loi, impôts, défense, scolarité…",
    emoji: "⚖️",
    pages: [32, 36],
  },
  {
    id: "p4-s1",
    partieId: "p4",
    slug: "periodes-et-personnages",
    titre: "Principales périodes et personnages",
    description: "De la Gaule à la Ve République : dates et figures clés.",
    emoji: "👑",
    pages: [38, 48],
  },
  {
    id: "p4-s2",
    partieId: "p4",
    slug: "territoire-et-geographie",
    titre: "Territoire et géographie",
    description: "Fleuves, montagnes, frontières, outre-mer.",
    emoji: "⛰️",
    pages: [49, 52],
  },
  {
    id: "p4-s3",
    partieId: "p4",
    slug: "culture-et-patrimoine",
    titre: "La culture et le patrimoine",
    description: "Monuments, artistes, gastronomie, langue française.",
    emoji: "🎨",
    pages: [53, 60],
  },
  {
    id: "p5-s1",
    partieId: "p5",
    slug: "vie-quotidienne",
    titre: "La vie quotidienne",
    description: "Logement, santé, école, démarches administratives.",
    emoji: "🏠",
    pages: [62, 69],
  },
  {
    id: "p5-s2",
    partieId: "p5",
    slug: "travailler-en-france",
    titre: "Travailler en France",
    description: "Droit du travail, recherche d'emploi, protection sociale.",
    emoji: "💼",
    pages: [70, 72],
  },
  {
    id: "p5-s3",
    partieId: "p5",
    slug: "vie-familiale",
    titre: "La vie familiale",
    description: "Mariage, égalité dans la famille, protection de l'enfance.",
    emoji: "👨‍👩‍👧",
    pages: [73, 76],
  },
  {
    id: "annexes-s1",
    partieId: "annexes",
    slug: "textes-fondamentaux",
    titre: "Les textes fondamentaux",
    description: "DDHC de 1789 et Charte des droits et devoirs du citoyen.",
    emoji: "📖",
    pages: [78, 80],
  },
];

export function getPartie(id: string): Partie | undefined {
  return parties.find((p) => p.id === id || p.slug === id);
}

export function getSousTheme(idOrSlug: string): SousTheme | undefined {
  return sousThemes.find((s) => s.id === idOrSlug || s.slug === idOrSlug);
}

export function getSousThemesByPartie(partieId: string): SousTheme[] {
  return sousThemes.filter((s) => s.partieId === partieId);
}
