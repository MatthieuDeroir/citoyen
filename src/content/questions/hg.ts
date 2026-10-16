import type { Question } from "../types";

/** Histoire, géographie et culture. */
export const hg: Question[] = [
  {
    id: "an-hg-001",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Parmi ces textes, lequel a été adopté sous Napoléon Ier ?",
    choices: [
      "Le Code civil",
      "La Charte constitutionnelle",
      "La Déclaration des droits de l'homme",
      "L'édit de Nantes"
    ],
    explication: "Napoléon Ier, empereur en 1804, est à l'origine du Code civil. La Déclaration des droits de l'homme date de 1789, avant son arrivée au pouvoir ; la Charte constitutionnelle est celle de la Restauration de Louis XVIII.",
    page: 38
  },
  {
    id: "an-hg-001-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-001",
    difficulty: 2,
    question: "Outre le Code civil, laquelle de ces créations doit-on à Napoléon Ier ?",
    choices: [
      "La Banque de France",
      "La Sécurité sociale",
      "Le Conseil constitutionnel",
      "L'Académie française"
    ],
    explication: "Napoléon est à l'origine du Code civil, de la Banque de France et des préfets. La Sécurité sociale date de 1945 et le Conseil constitutionnel de la Constitution de 1958.",
    page: 38
  },
  {
    id: "an-hg-002",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Qui a été président de la Ve République ?",
    choices: [
      "Charles de Gaulle",
      "René Coty",
      "Georges Clemenceau",
      "Raymond Poincaré"
    ],
    explication: "Le général de Gaulle fonde la Ve République en 1958 et en devient le premier président. Georges Clemenceau dirigeait le gouvernement en 1918, sous la IIIe République.",
    page: 38
  },
  {
    id: "an-hg-002-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-002",
    difficulty: 3,
    question: "En quelle année le général de Gaulle devient-il le premier président de la Ve République ?",
    choices: [
      "1959",
      "1958",
      "1962",
      "1965"
    ],
    explication: "La Constitution est adoptée en 1958, mais la frise des présidents du livret fait débuter le mandat du général de Gaulle en 1959. Le piège est 1958, année de naissance de la Ve République.",
    page: 38
  },
  {
    id: "an-hg-003",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est l'objectif des lois scolaires de la IIIe République ?",
    choices: [
      "Rendre l'école gratuite, laïque et obligatoire",
      "Rendre l'école laïque, payante et obligatoire",
      "Rendre l'école gratuite, religieuse et facultative",
      "Rendre l'école obligatoire jusqu'à 16 ans"
    ],
    explication: "Les lois Jules Ferry rendent l'école publique gratuite (1881), puis laïque et obligatoire (1882). Les trois mots vont ensemble : gratuite, laïque et obligatoire.",
    page: 38
  },
  {
    id: "an-hg-003-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-003",
    difficulty: 3,
    question: "Qu'instaure la loi Jules Ferry de 1882 ?",
    choices: [
      "L'école laïque et obligatoire",
      "L'école publique gratuite",
      "La liberté de la presse",
      "La séparation des Églises et de l'État"
    ],
    explication: "En 1882, l'école devient laïque et obligatoire. La gratuité date de 1881, tout comme la loi sur la liberté de la presse ; la séparation des Églises et de l'État date de 1905.",
    page: 38
  },
  {
    id: "an-hg-004",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que signifie la date du 14 juillet pour les Français ?",
    choices: [
      "La prise de la Bastille en 1789",
      "L'abolition des privilèges en 1789",
      "La Déclaration des droits de l'homme en 1789",
      "La proclamation de la République en 1792"
    ],
    explication: "Le 14 juillet commémore la prise de la Bastille (14 juillet 1789), qui marque le début de la Révolution, ainsi que la fête de la Fédération (14 juillet 1790). La Déclaration des droits de l'homme est adoptée en 1789, mais pas un 14 juillet.",
    page: 38
  },
  {
    id: "an-hg-004-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-004",
    difficulty: 3,
    question: "Outre la prise de la Bastille, quel autre événement la fête nationale du 14 juillet commémore-t-elle ?",
    choices: [
      "La fête de la Fédération (1790)",
      "La chute de Louis XVI (1792)",
      "L'adoption de la DDHC (1789)",
      "La première Constitution (1791)"
    ],
    explication: "Fête nationale depuis 1880, le 14 juillet commémore la prise de la Bastille (1789) et la fête de la Fédération (14 juillet 1790), qui affirme l'attachement de la France à la Constitution.",
    page: 38
  },
  {
    id: "an-hg-005",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Pourquoi l'année 1958 est importante pour la France ?",
    choices: [
      "C'est la naissance de la Ve République",
      "C'est la naissance de la IVe République",
      "C'est la signature du traité de Rome",
      "C'est la fin de la guerre d'Algérie"
    ],
    explication: "En 1958, une nouvelle Constitution, adoptée par référendum, fonde la Ve République, toujours en vigueur. La IVe République date de 1946, le traité de Rome de 1957 et la fin de la guerre d'Algérie de 1962.",
    page: 38
  },
  {
    id: "an-hg-005-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-005",
    difficulty: 3,
    question: "Comment la Constitution de la Ve République a-t-elle été adoptée ?",
    choices: [
      "Par référendum, le 28 septembre 1958",
      "Par le Parlement, le 4 octobre 1958",
      "Par référendum, le 4 octobre 1958",
      "Par le Parlement, le 28 septembre 1958"
    ],
    explication: "La Constitution est adoptée par référendum le 28 septembre 1958, puis promulguée le 4 octobre 1958. Le 4 octobre est la date de promulgation, pas celle du vote.",
    page: 38
  },
  {
    id: "an-hg-006",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Lequel de ces pays est un pays fondateur de l'Union européenne ?",
    choices: [
      "L'Italie",
      "L'Espagne",
      "Le Portugal",
      "Le Danemark"
    ],
    explication: "Les six pays fondateurs sont la France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg. L'Espagne, le Portugal et le Danemark ont rejoint la construction européenne plus tard.",
    page: 38
  },
  {
    id: "an-hg-006-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-006",
    difficulty: 3,
    question: "Lequel de ces groupes ne comprend que des pays fondateurs de la construction européenne ?",
    choices: [
      "La Belgique, les Pays-Bas et le Luxembourg",
      "La Belgique, les Pays-Bas et le Danemark",
      "L'Italie, l'Espagne et le Portugal",
      "L'Allemagne, l'Autriche et le Luxembourg"
    ],
    explication: "Les six fondateurs sont la France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg. Le Danemark, l'Espagne, le Portugal et l'Autriche ont adhéré plus tard.",
    page: 38
  },
  {
    id: "an-hg-007",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Simone Veil est une figure importante de l'histoire française. Elle a notamment :",
    choices: [
      "Fait voter la loi légalisant l'interruption volontaire de grossesse (1975)",
      "Fait voter l'abolition de la peine de mort (1981)",
      "Fait voter la loi autorisant la pilule contraceptive (1967)",
      "Fait voter la loi sur le mariage pour tous (2013)"
    ],
    explication: "Ministre de la Santé, Simone Veil a présenté et soutenu la loi du 17 janvier 1975 dépénalisant l'avortement. La pilule avait été autorisée par la loi Neuwirth de 1967 ; l'abolition de la peine de mort a été portée par Robert Badinter.",
    page: 38
  },
  {
    id: "an-hg-007-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-007",
    difficulty: 3,
    question: "En quelle année la loi « Veil » dépénalisant l'avortement a-t-elle été adoptée ?",
    choices: [
      "1975",
      "1967",
      "1974",
      "1981"
    ],
    explication: "La loi Veil date du 17 janvier 1975. 1967 est l'année de la loi Neuwirth sur la pilule, 1974 celle de la majorité à 18 ans et 1981 celle de l'abolition de la peine de mort.",
    page: 38
  },
  {
    id: "an-hg-008",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Dans quelle région est située une partie des plages du débarquement ayant permis d'engager la libération de la France ?",
    choices: [
      "La Normandie",
      "Les Hauts-de-France",
      "La Bretagne",
      "La Nouvelle-Aquitaine"
    ],
    explication: "La libération de la France débute par le débarquement des Alliés en Normandie, le 6 juin 1944.",
    page: 38
  },
  {
    id: "an-hg-008-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-008",
    difficulty: 2,
    question: "À quelle date a eu lieu le débarquement des Alliés en Normandie ?",
    choices: [
      "Le 6 juin 1944",
      "Le 15 août 1944",
      "Le 25 août 1944",
      "Le 6 juin 1943"
    ],
    explication: "Le débarquement en Normandie a lieu le 6 juin 1944, appuyé par la Résistance. Le 25 août 1944 est la date de la libération de Paris.",
    page: 38
  },
  {
    id: "an-hg-009",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Dans quelle ville les rois de France étaient-ils couronnés ?",
    choices: [
      "Reims",
      "Saint-Denis",
      "Paris",
      "Orléans"
    ],
    explication: "Sous l'Ancien Régime, les rois sont couronnés à la cathédrale de Reims. Saint-Denis est le lieu où beaucoup d'entre eux ont été inhumés, pas celui de leur sacre.",
    page: 38
  },
  {
    id: "an-hg-009-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-009",
    difficulty: 2,
    question: "Que se déroulait-il à la cathédrale de Reims sous l'Ancien Régime ?",
    choices: [
      "Le couronnement des rois de France",
      "L'inhumation des rois de France",
      "La signature de l'édit de Nantes",
      "La réunion des états généraux"
    ],
    explication: "Le livret rappelle que les rois de France étaient couronnés à la cathédrale de Reims. Saint-Denis est le lieu où beaucoup d'entre eux ont été inhumés.",
    page: 38
  },
  {
    id: "an-hg-010",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel roi de France a été guillotiné pendant la Révolution française ?",
    choices: [
      "Louis XVI",
      "Louis XV",
      "Louis XVIII",
      "Charles X"
    ],
    explication: "Louis XVI, renversé le 10 août 1792, est guillotiné place de la Concorde en 1793. Louis XVIII et Charles X régneront plus tard, pendant la Restauration (1815-1830).",
    page: 38
  },
  {
    id: "an-hg-010-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-010",
    difficulty: 3,
    question: "Que s'est-il passé le 10 août 1792 ?",
    choices: [
      "Louis XVI est renversé",
      "Louis XVI est guillotiné",
      "La Bastille est prise",
      "Louis XVI tente de fuir"
    ],
    explication: "Le 10 août 1792, Louis XVI est renversé, puis jugé ; il n'est guillotiné qu'en 1793. Sa tentative de fuite est antérieure et la prise de la Bastille date du 14 juillet 1789.",
    page: 38
  },
  {
    id: "an-hg-011",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "En quelle année a débuté la Révolution française ?",
    choices: [
      "1789",
      "1792",
      "1793",
      "1799"
    ],
    explication: "La Révolution française débute en 1789, avec la prise de la Bastille le 14 juillet. 1792 marque le début de la Première République et 1799 la prise du pouvoir par Napoléon Bonaparte.",
    page: 38
  },
  {
    id: "an-hg-011-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-011",
    difficulty: 3,
    question: "Lequel de ces événements est le plus ancien ?",
    choices: [
      "Le début de la Révolution française",
      "La monarchie constitutionnelle",
      "La chute de Louis XVI",
      "La proclamation du Premier Empire"
    ],
    explication: "Ordre chronologique : début de la Révolution (1789), monarchie constitutionnelle (1791), chute de Louis XVI (10 août 1792), Premier Empire (1804).",
    page: 38
  },
  {
    id: "an-hg-012",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En quelle année Napoléon Ier est-il devenu empereur ?",
    choices: [
      "1804",
      "1799",
      "1815",
      "1802"
    ],
    explication: "Napoléon Bonaparte devient empereur en 1804. En 1799, il prend le pouvoir sans être encore empereur ; en 1815, il abdique après Waterloo.",
    page: 38
  },
  {
    id: "an-hg-012-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-012",
    difficulty: 3,
    question: "Que fait Napoléon Bonaparte en 1799 ?",
    choices: [
      "Il prend le pouvoir",
      "Il devient empereur",
      "Il crée le Code civil",
      "Il rétablit l'esclavage"
    ],
    explication: "En 1799, Napoléon Bonaparte prend le pouvoir ; il ne devient empereur qu'en 1804. Il rétablit l'esclavage en 1802.",
    page: 38
  },
  {
    id: "an-hg-013",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Lequel de ces personnages a un lien avec la République française ?",
    choices: [
      "Marianne",
      "Jeanne d'Arc",
      "Vercingétorix",
      "Clovis"
    ],
    explication: "Marianne, coiffée du bonnet phrygien, incarne la République française ; son buste est présent dans les mairies. Jeanne d'Arc et Clovis sont des figures du Moyen Âge.",
    page: 38
  },
  {
    id: "an-hg-014",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "De quand date l'appel à la résistance du général de Gaulle ?",
    choices: [
      "Du 18 juin 1940",
      "Du 22 juin 1940",
      "Du 18 juin 1942",
      "Du 10 mai 1940"
    ],
    explication: "Le 18 juin 1940, depuis Londres, le général de Gaulle lance sur la BBC l'appel qui marque le début de la Résistance.",
    page: 38
  },
  {
    id: "an-hg-014-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-014",
    difficulty: 2,
    question: "Que s'est-il passé le 18 juin 1940 ?",
    choices: [
      "L'appel du général de Gaulle sur la BBC",
      "L'installation du régime de Vichy",
      "Le débarquement des Alliés en Normandie",
      "La signature de l'armistice franco-allemand"
    ],
    explication: "Le 18 juin 1940, le général de Gaulle lance depuis Londres, via la BBC, l'appel qui marque le début de la Résistance. Le débarquement de Normandie a lieu le 6 juin 1944.",
    page: 38
  },
  {
    id: "an-hg-015",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que la Shoah ?",
    choices: [
      "L'extermination des Juifs d'Europe par l'Allemagne nazie",
      "La déportation des opposants soviétiques en Sibérie",
      "Le génocide des Arméniens par l'Empire ottoman",
      "L'occupation de toute la France par l'Allemagne nazie"
    ],
    explication: "La Shoah désigne l'extermination de millions de Juifs par les nazis pendant la Seconde Guerre mondiale. L'occupation totale de la France, à partir de 1942, est un autre fait de cette guerre.",
    page: 38
  },
  {
    id: "an-hg-015-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-015",
    difficulty: 2,
    question: "Quel régime français porte une part de responsabilité dans la déportation des Juifs ?",
    choices: [
      "Le régime de Vichy",
      "Le Gouvernement provisoire",
      "La Troisième République",
      "La Quatrième République"
    ],
    explication: "Le régime de Vichy (1940-1944) du maréchal Pétain collabore avec l'Allemagne nazie et porte une part de responsabilité dans la déportation des Juifs. Le Gouvernement provisoire lui succède à la Libération.",
    page: 38
  },
  {
    id: "an-hg-016",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel pays a été une colonie française ?",
    choices: [
      "L'Algérie",
      "L'Égypte",
      "La Libye",
      "L'Angola"
    ],
    explication: "L'Algérie faisait partie de l'empire colonial français ; elle obtient son indépendance en 1962, à l'issue de la guerre d'Algérie. L'Égypte, la Libye et l'Angola n'ont jamais été des colonies françaises.",
    page: 38
  },
  {
    id: "an-hg-016-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-016",
    difficulty: 3,
    question: "Pendant quelles années s'est déroulée la guerre d'Algérie ?",
    choices: [
      "De 1954 à 1962",
      "De 1946 à 1954",
      "De 1958 à 1962",
      "De 1954 à 1958"
    ],
    explication: "La guerre d'Algérie dure de 1954 à 1962. De 1946 à 1954, c'est la guerre d'Indochine ; 1958 est l'année où la crise algérienne fait tomber la IVe République.",
    page: 38
  },
  {
    id: "an-hg-017",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    choices: [
      "Jules Ferry",
      "Léon Gambetta",
      "Georges Clemenceau",
      "Victor Schoelcher"
    ],
    explication: "Jules Ferry, ministre de l'Instruction publique, fait voter l'école gratuite (1881), puis laïque et obligatoire (1882). Léon Gambetta est l'un des pères de la IIIe République, mais pas l'auteur des lois scolaires.",
    page: 38
  },
  {
    id: "an-hg-017-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-017",
    difficulty: 2,
    question: "Sous quel régime les lois scolaires de Jules Ferry ont-elles été adoptées ?",
    choices: [
      "La IIIe République",
      "La IIe République",
      "Le Second Empire",
      "La IVe République"
    ],
    explication: "Les lois Ferry (1881-1882) sont adoptées sous la IIIe République (1870-1940). La IIe République (1848-1852) est celle de l'abolition de l'esclavage.",
    page: 38
  },
  {
    id: "an-hg-018",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    choices: [
      "Depuis 1962",
      "Depuis 1958",
      "Depuis 1946",
      "Depuis 1969"
    ],
    explication: "Le référendum de 1962 instaure l'élection du président au suffrage universel direct. Le piège est 1958 : la Ve République naît cette année-là, mais le président n'est pas encore élu directement par les Français.",
    page: 38
  },
  {
    id: "an-hg-019",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "En quelle année l'Union européenne a-t-elle été fondée ?",
    choices: [
      "1992",
      "1957",
      "1951",
      "2002"
    ],
    explication: "L'Union européenne naît du traité de Maastricht, signé en 1992. 1951 est la date de la CECA, 1957 celle de la CEE (traité de Rome) et 2002 celle de la mise en circulation de l'euro.",
    page: 38
  },
  {
    id: "an-hg-019-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-019",
    difficulty: 2,
    question: "Quel traité, signé en 1992, a créé l'Union européenne ?",
    choices: [
      "Le traité de Maastricht",
      "Le traité de Rome",
      "Le traité de Lisbonne",
      "Le traité de Paris"
    ],
    explication: "Le traité de Maastricht (1992) crée l'Union européenne et la citoyenneté européenne. Le traité de Rome (1957) avait créé la Communauté économique européenne.",
    page: 38
  },
  {
    id: "an-hg-020",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quand a eu lieu la Seconde Guerre mondiale ?",
    choices: [
      "De 1939 à 1945",
      "De 1938 à 1944",
      "De 1940 à 1945",
      "De 1939 à 1944"
    ],
    explication: "La Seconde Guerre mondiale, déclenchée par Adolf Hitler, dure de 1939 à 1945. La France est envahie en 1940 et l'Allemagne capitule le 8 mai 1945.",
    page: 38
  },
  {
    id: "an-hg-020-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-020",
    difficulty: 3,
    question: "À partir de quelle année la France est-elle occupée en totalité par l'Allemagne ?",
    choices: [
      "1942",
      "1940",
      "1941",
      "1943"
    ],
    explication: "Envahie en 1940, la France est d'abord occupée partiellement, puis totalement à partir de 1942.",
    page: 38
  },
  {
    id: "an-hg-021",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quand a eu lieu la Première Guerre mondiale ?",
    choices: [
      "De 1914 à 1918",
      "De 1912 à 1918",
      "De 1914 à 1919",
      "De 1915 à 1918"
    ],
    explication: "La Première Guerre mondiale débute en juillet 1914 et s'achève avec l'armistice du 11 novembre 1918. Le traité de Versailles est signé en 1919, mais les combats ont cessé en 1918.",
    page: 38
  },
  {
    id: "an-hg-021-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-021",
    difficulty: 2,
    question: "Quel traité, signé le 28 juin 1919, met fin à la Première Guerre mondiale ?",
    choices: [
      "Le traité de Versailles",
      "Le traité de Paris",
      "Le traité de Rome",
      "Le traité de Francfort"
    ],
    explication: "Le traité de Versailles du 28 juin 1919 met fin à la guerre et prévoit la création de la Société des Nations. Le traité de Rome (1957) crée la CEE.",
    page: 38
  },
  {
    id: "an-hg-022",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Sous quel président a été abolie la peine de mort en France ?",
    choices: [
      "François Mitterrand",
      "Valéry Giscard d'Estaing",
      "Jacques Chirac",
      "Georges Pompidou"
    ],
    explication: "La peine de mort est abolie en 1981, sous François Mitterrand, grâce à la loi portée par son ministre de la Justice, Robert Badinter. Giscard d'Estaing était président de 1974 à 1981.",
    page: 38
  },
  {
    id: "an-hg-022-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-022",
    difficulty: 2,
    question: "Qui a porté l'abolition de la peine de mort en 1981 ?",
    choices: [
      "Robert Badinter",
      "Christiane Taubira",
      "Simone Veil",
      "Valéry Giscard d'Estaing"
    ],
    explication: "Robert Badinter, ministre de la Justice de François Mitterrand, a soutenu l'abolition totale de la peine de mort en 1981. Christiane Taubira a porté la loi sur le mariage pour tous en 2013.",
    page: 38
  },
  {
    id: "an-hg-023",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que célèbre-t-on le 8 mai ?",
    choices: [
      "La victoire des Alliés et la fin de la Seconde Guerre mondiale en Europe (1945)",
      "L'armistice et la fin des combats de la Première Guerre mondiale (1918)",
      "Le débarquement allié en Normandie et le début de la Libération (1944)",
      "La libération de Paris et la fin de l'occupation de la capitale (1944)"
    ],
    explication: "Le 8 mai 1945, l'Allemagne capitule face aux Alliés : ce jour férié commémore la fin de la Seconde Guerre mondiale en Europe. L'armistice de 1918 est commémoré le 11 novembre.",
    page: 38
  },
  {
    id: "an-hg-023-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-023",
    difficulty: 2,
    question: "Lequel de ces événements de la fin de la Seconde Guerre mondiale est le plus récent ?",
    choices: [
      "La capitulation de l'Allemagne",
      "La libération de Paris",
      "Le débarquement en Normandie",
      "L'appel du général de Gaulle"
    ],
    explication: "Ordre chronologique : appel du 18 juin 1940, débarquement (6 juin 1944), libération de Paris (25 août 1944), capitulation de l'Allemagne (8 mai 1945).",
    page: 38
  },
  {
    id: "an-hg-024",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quelle est la première étape de la construction européenne en 1951 ?",
    choices: [
      "La Communauté européenne du charbon et de l'acier (CECA)",
      "La Communauté économique européenne (CEE)",
      "La Communauté européenne de défense (CED)",
      "La Communauté européenne de l'énergie atomique (Euratom)"
    ],
    explication: "En 1951, six pays créent la CECA, première étape de la construction européenne. La CEE vient ensuite, avec le traité de Rome de 1957.",
    page: 38
  },
  {
    id: "an-hg-024-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-024",
    difficulty: 2,
    question: "Que crée le traité de Rome, signé en 1957 ?",
    choices: [
      "La Communauté économique européenne",
      "La Communauté européenne du charbon et de l'acier",
      "L'Union européenne",
      "La monnaie unique européenne"
    ],
    explication: "Le traité de Rome (1957) crée la CEE entre six pays fondateurs. La CECA date de 1951 et l'Union européenne du traité de Maastricht (1992).",
    page: 38
  },
  {
    id: "an-hg-025",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    choices: [
      "Jean Moulin",
      "Philippe Pétain",
      "Pierre Laval",
      "Georges Clemenceau"
    ],
    explication: "Jean Moulin, missionné par le général de Gaulle, a unifié la Résistance ; il a été arrêté et torturé à mort par les nazis. Le maréchal Pétain dirigeait au contraire le régime de Vichy, qui collaborait avec l'occupant.",
    page: 38
  },
  {
    id: "an-hg-025-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-025",
    difficulty: 2,
    question: "Quel a été le sort de Jean Moulin, chef de la Résistance unifiée ?",
    choices: [
      "Il a été torturé à mort par les nazis",
      "Il a été fusillé à la Libération",
      "Il est mort lors du débarquement",
      "Il a dirigé le Gouvernement provisoire"
    ],
    explication: "Arrêté, Jean Moulin a été torturé à mort par les nazis. C'est le général de Gaulle qui a dirigé le Gouvernement provisoire à la Libération.",
    page: 38
  },
  {
    id: "an-hg-026",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    choices: [
      "À l'armistice de la Première Guerre mondiale (1918)",
      "À la victoire des Alliés en 1945",
      "À la bataille de Verdun (1916)",
      "À la signature du traité de Versailles (1919)"
    ],
    explication: "Le 11 novembre commémore l'armistice de 1918, la victoire et la paix, et rend hommage à tous les morts pour la France. Le traité de Versailles, signé le 28 juin 1919, est postérieur.",
    page: 38
  },
  {
    id: "an-hg-026-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-026",
    difficulty: 2,
    question: "Lequel de ces événements est le plus ancien ?",
    choices: [
      "L'armistice de la Grande Guerre",
      "Le traité de Versailles",
      "La création de l'ONU",
      "Le début de la Seconde Guerre mondiale"
    ],
    explication: "Ordre chronologique : armistice (11 novembre 1918), traité de Versailles (28 juin 1919), début de la Seconde Guerre mondiale (1939), création de l'ONU (1945).",
    page: 38
  },
  {
    id: "an-hg-027",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Depuis quand l'esclavage a-t-il été aboli en France ?",
    choices: [
      "1848",
      "1794",
      "1815",
      "1870"
    ],
    explication: "L'esclavage est définitivement aboli en 1848, sous la Deuxième République. En 1815, Napoléon abolit seulement la traite des Noirs, après avoir rétabli l'esclavage en 1802.",
    page: 38
  },
  {
    id: "an-hg-027-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-027",
    difficulty: 3,
    question: "Qu'a décidé Napoléon en 1802 au sujet de l'esclavage ?",
    choices: [
      "Il a rétabli l'esclavage",
      "Il a aboli l'esclavage",
      "Il a aboli la traite des Noirs",
      "Il a interdit la traite à Nantes"
    ],
    explication: "Napoléon rétablit l'esclavage en 1802, puis abolit la traite des Noirs en 1815. L'abolition définitive de l'esclavage date de 1848.",
    page: 38
  },
  {
    id: "an-hg-028",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui a aboli l'esclavage en France ?",
    choices: [
      "Victor Schœlcher",
      "Victor Hugo",
      "L'abbé Grégoire",
      "Toussaint Louverture"
    ],
    explication: "Victor Schoelcher, sous-secrétaire d'État chargé des colonies, rédige le décret de 1848 qui abolit l'esclavage. Victor Hugo, son contemporain, s'est surtout engagé contre la peine de mort et les inégalités sociales.",
    page: 38
  },
  {
    id: "an-hg-028-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-028",
    difficulty: 3,
    question: "Sous quel régime l'esclavage a-t-il été définitivement aboli, en 1848 ?",
    choices: [
      "La Deuxième République",
      "La Monarchie de Juillet",
      "Le Second Empire",
      "La Première République"
    ],
    explication: "L'abolition de 1848 marque la Deuxième République (1848-1852). La Monarchie de Juillet prend fin avec la révolution de 1848, et le Second Empire ne commence qu'en 1852.",
    page: 38
  },
  {
    id: "an-hg-029",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Depuis quelle année l'école publique est-elle gratuite ?",
    choices: [
      "1881",
      "1882",
      "1848",
      "1905"
    ],
    explication: "La loi Jules Ferry de 1881 rend l'école publique gratuite. La loi de 1882 la rend laïque et obligatoire : c'est le piège principal.",
    page: 38
  },
  {
    id: "an-hg-029-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-029",
    difficulty: 3,
    question: "Quelle grande loi de liberté date, comme la gratuité de l'école, de 1881 ?",
    choices: [
      "La loi sur la liberté de la presse",
      "La loi sur la liberté d'association",
      "La loi autorisant les syndicats",
      "La loi de séparation des Églises et de l'État"
    ],
    explication: "La loi sur la liberté de la presse date du 29 juillet 1881. Les syndicats sont autorisés en 1884, la liberté d'association date de 1901 et la séparation des Églises et de l'État de 1905.",
    page: 38
  },
  {
    id: "an-hg-030",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En 1944, qu'est-ce qui a changé pour les femmes ?",
    choices: [
      "Elles ont obtenu le droit de vote",
      "Elles ont pu ouvrir un compte bancaire sans leur mari",
      "Elles ont obtenu le droit à la contraception",
      "Elles ont obtenu le droit à l'avortement"
    ],
    explication: "Les femmes obtiennent le droit de vote en avril 1944 et votent pour la première fois en 1945. La contraception est autorisée en 1967 et l'avortement dépénalisé en 1975.",
    page: 38
  },
  {
    id: "an-hg-030-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-030",
    difficulty: 3,
    question: "En quelle année les Françaises ont-elles voté pour la première fois ?",
    choices: [
      "1945",
      "1944",
      "1946",
      "1936"
    ],
    explication: "Le droit de vote est accordé aux femmes en avril 1944, mais elles votent pour la première fois un an plus tard, en avril 1945.",
    page: 38
  },
  {
    id: "an-hg-031",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle organisation a été créée en 1945 après la Seconde Guerre mondiale ?",
    choices: [
      "L'Organisation des Nations unies (ONU)",
      "La Société des Nations (SDN)",
      "L'Organisation du traité de l'Atlantique Nord (OTAN)",
      "La Communauté européenne du charbon et de l'acier (CECA)"
    ],
    explication: "L'ONU est créée en 1945, après la Seconde Guerre mondiale, pour maintenir la paix et la sécurité internationales. La Société des Nations avait été prévue par le traité de Versailles de 1919.",
    page: 38
  },
  {
    id: "an-hg-031-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-031",
    difficulty: 3,
    question: "Quelle organisation, prévue par le traité de Versailles, a inspiré la création de l'ONU ?",
    choices: [
      "La Société des Nations",
      "Le Conseil de l'Europe",
      "L'Organisation du traité de l'Atlantique Nord",
      "La Communauté européenne du charbon et de l'acier"
    ],
    explication: "Le traité de Versailles (1919) prévoit la création de la Société des Nations, qui a inspiré plus tard l'Organisation des Nations unies.",
    page: 38
  },
  {
    id: "an-hg-032",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En quelle année l'euro est-il devenu la monnaie officielle de la France ?",
    choices: [
      "2002",
      "1992",
      "2000",
      "2004"
    ],
    explication: "Les pièces et billets en euros sont mis en circulation le 1er janvier 2002. 1992 est l'année du traité de Maastricht, qui crée l'Union européenne.",
    page: 38
  },
  {
    id: "an-hg-032-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-032",
    difficulty: 3,
    question: "Avec combien d'autres pays de l'Union européenne la France partage-t-elle l'euro ?",
    choices: [
      "20",
      "26",
      "15",
      "11"
    ],
    explication: "La France partage l'euro avec 20 autres pays de l'Union européenne. 26 correspond au nombre total des autres États membres : tous n'ont pas adopté l'euro.",
    page: 38
  },
  {
    id: "an-hg-033",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Lors de la seconde guerre mondiale, à quelle date la ville de Paris a-t-elle été libérée ?",
    choices: [
      "Le 25 août 1944",
      "Le 6 juin 1944",
      "Le 19 août 1944",
      "Le 8 mai 1945"
    ],
    explication: "Paris est libérée le 25 août 1944, après le débarquement de Normandie du 6 juin 1944. L'Allemagne capitule le 8 mai 1945.",
    page: 38
  },
  {
    id: "an-hg-033-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-033",
    difficulty: 2,
    question: "Que s'est-il passé le 25 août 1944 ?",
    choices: [
      "La libération de Paris",
      "Le débarquement en Normandie",
      "La capitulation de l'Allemagne",
      "L'entrée en guerre des États-Unis"
    ],
    explication: "Le 25 août 1944, Paris est libérée. Le débarquement en Normandie a eu lieu le 6 juin 1944 et la capitulation allemande le 8 mai 1945.",
    page: 38
  },
  {
    id: "an-hg-034",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quel était le principal port français impliqué dans la traite négrière au XVIIIe siècle ?",
    choices: [
      "Nantes",
      "Bordeaux",
      "Le Havre",
      "Marseille"
    ],
    explication: "Selon le livret, Nantes était le principal port français impliqué dans la traite transatlantique, qui a déporté 1,2 million d'Africains vers les colonies.",
    page: 38
  },
  {
    id: "an-hg-034-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-034",
    difficulty: 3,
    question: "Combien d'Africains la traite transatlantique a-t-elle déportés vers les colonies françaises ?",
    choices: [
      "1,2 million",
      "120 000",
      "5 millions",
      "12 millions"
    ],
    explication: "Selon le livret, la traite a impliqué la déportation forcée d'1,2 million d'Africains vers les Antilles, La Réunion et la Guyane.",
    page: 38
  },
  {
    id: "an-hg-035",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel célèbre philosophe des Lumières a dénoncé l'esclavage ?",
    choices: [
      "Montesquieu",
      "Descartes",
      "Pascal",
      "Colbert"
    ],
    explication: "Parmi les philosophes des Lumières, le livret souligne que Montesquieu dénonce l'esclavage. Descartes et Pascal sont des penseurs du XVIIe siècle, avant les Lumières ; Colbert était ministre de Louis XIV.",
    page: 38
  },
  {
    id: "an-hg-035-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-035",
    difficulty: 3,
    question: "Lequel de ces penseurs est cité par le livret parmi les philosophes des Lumières ?",
    choices: [
      "Condorcet",
      "Descartes",
      "Pascal",
      "Bossuet"
    ],
    explication: "Le livret cite Rousseau, Voltaire, Diderot, Montesquieu, Condorcet et d'Alembert. Descartes, Pascal et Bossuet ont vécu au XVIIe siècle, avant les Lumières.",
    page: 38
  },
  {
    id: "an-hg-036",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle œuvre a été écrite par Victor Hugo ?",
    choices: [
      "Les Misérables",
      "Le Comte de Monte-Cristo",
      "Germinal",
      "Madame Bovary"
    ],
    explication: "Victor Hugo (1802-1885) est l'auteur des Misérables et de Notre-Dame de Paris. Le Comte de Monte-Cristo est d'Alexandre Dumas, Germinal d'Émile Zola et Madame Bovary de Gustave Flaubert.",
    page: 53
  },
  {
    id: "an-hg-036-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-036",
    difficulty: 2,
    question: "Quel autre roman célèbre Victor Hugo a-t-il écrit ?",
    choices: [
      "Notre-Dame de Paris",
      "Les Trois Mousquetaires",
      "Le Rouge et le Noir",
      "L'Assommoir"
    ],
    explication: "Victor Hugo a écrit Les Misérables et Notre-Dame de Paris. Les Trois Mousquetaires sont d'Alexandre Dumas, Le Rouge et le Noir de Stendhal et L'Assommoir d'Émile Zola.",
    page: 53
  },
  {
    id: "an-hg-037",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel peintre est français ?",
    choices: [
      "Claude Monet",
      "Vincent Van Gogh",
      "Pablo Picasso",
      "Francisco de Goya"
    ],
    explication: "Claude Monet est un peintre français, fondateur de l'impressionnisme. Vincent Van Gogh, exposé au musée d'Orsay, était néerlandais ; Picasso et Goya étaient espagnols.",
    page: 53
  },
  {
    id: "an-hg-037-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-037",
    difficulty: 2,
    question: "Quel mouvement de peinture Claude Monet a-t-il contribué à fonder ?",
    choices: [
      "L'impressionnisme",
      "Le cubisme",
      "Le fauvisme",
      "Le surréalisme"
    ],
    explication: "Claude Monet est l'un des fondateurs de l'impressionnisme. Le livret présente Paul Cézanne comme précurseur du cubisme.",
    page: 53
  },
  {
    id: "an-hg-038",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quel plat est une spécialité de la cuisine française ?",
    choices: [
      "Le bœuf bourguignon",
      "La paella",
      "Le goulash",
      "L'osso buco"
    ],
    explication: "Le bœuf bourguignon est cité par le livret parmi les plats traditionnels français, avec le pot-au-feu et la blanquette de veau.",
    page: 53
  },
  {
    id: "an-hg-039",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Marie Curie ?",
    choices: [
      "Une scientifique, deux fois prix Nobel",
      "Une résistante, compagnon de la Libération",
      "Une femme politique, première femme ministre",
      "Une écrivaine, prix Nobel de littérature"
    ],
    explication: "Marie Curie, physicienne née en Pologne et naturalisée française, a reçu le prix Nobel de physique (1903), puis celui de chimie (1911). Elle est inhumée au Panthéon.",
    page: 38
  },
  {
    id: "an-hg-039-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-039",
    difficulty: 2,
    question: "Quelle découverte a valu à Marie Curie le prix Nobel de physique en 1903 ?",
    choices: [
      "La radioactivité",
      "Les rayons X",
      "La pénicilline",
      "L'électron"
    ],
    explication: "On doit à Marie Curie la découverte de la radioactivité, récompensée par le Nobel de physique en 1903. En 1911, elle reçoit le Nobel de chimie pour l'isolement du radium.",
    page: 38
  },
  {
    id: "an-hg-040",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui a peint « La liberté guidant le peuple » ?",
    choices: [
      "Eugène Delacroix",
      "Jacques-Louis David",
      "Théodore Géricault",
      "Gustave Courbet"
    ],
    explication: "La Liberté guidant le peuple (1830) est d'Eugène Delacroix. Le piège est Géricault, peintre romantique de la même époque, auteur du Radeau de la Méduse.",
    page: 53
  },
  {
    id: "an-hg-041",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Dans quel grand musée parisien est exposée la Joconde ?",
    choices: [
      "Le Louvre",
      "Le musée d'Orsay",
      "Le musée de l'Orangerie",
      "Le Petit Palais"
    ],
    explication: "La Joconde, peinte par Léonard de Vinci, est exposée au musée du Louvre. Le musée d'Orsay est consacré aux impressionnistes.",
    page: 53
  },
  {
    id: "an-hg-041-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-041",
    difficulty: 3,
    question: "Depuis quand le Louvre, ancien palais royal, est-il pensé comme un musée universel ?",
    choices: [
      "1793",
      "1789",
      "1804",
      "1889"
    ],
    explication: "Le Louvre, situé dans un ancien palais royal, a été pensé dès sa création en 1793 comme un musée universel.",
    page: 53
  },
  {
    id: "an-hg-042",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel château célèbre se trouve près de Paris et symbolise le pouvoir royal de Louis XIV ?",
    choices: [
      "Le château de Versailles",
      "Le château de Fontainebleau",
      "Le château de Chambord",
      "Le château de Vincennes"
    ],
    explication: "Louis XIV, le « Roi-Soleil », a fait construire le château de Versailles, joyau de l'architecture classique situé près de Paris.",
    page: 53
  },
  {
    id: "an-hg-042-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-042",
    difficulty: 3,
    question: "Pendant quelles années Louis XIV a-t-il régné ?",
    choices: [
      "De 1643 à 1715",
      "De 1610 à 1643",
      "De 1715 à 1774",
      "De 1589 à 1610"
    ],
    explication: "Louis XIV règne de 1643 à 1715. De 1589 à 1610, c'est le règne d'Henri IV ; de 1715 à 1774, celui de Louis XV.",
    page: 53
  },
  {
    id: "an-hg-043",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Où peut-on voir des peintures préhistoriques en France ?",
    choices: [
      "Dans la grotte de Lascaux",
      "Dans les gorges du Verdon",
      "Au gouffre de Padirac",
      "Dans les catacombes de Paris"
    ],
    explication: "La grotte de Lascaux, en Dordogne, est la plus célèbre grotte préhistorique de France. Le gouffre de Padirac est une cavité naturelle sans peintures rupestres.",
    page: 53
  },
  {
    id: "an-hg-043-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-043",
    difficulty: 3,
    question: "De quand datent les peintures rupestres de la grotte de Lascaux ?",
    choices: [
      "De 18 000 à 15 000 ans avant J.-C.",
      "De 1 800 à 1 500 ans avant J.-C.",
      "De 180 000 à 150 000 ans avant J.-C.",
      "De 8 000 à 5 000 ans avant J.-C."
    ],
    explication: "Les peintures de Lascaux datent d'entre 18 000 et 15 000 ans avant Jésus-Christ.",
    page: 53
  },
  {
    id: "an-hg-044",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel peintre célèbre a peint les Nymphéas ?",
    choices: [
      "Claude Monet",
      "Auguste Renoir",
      "Édouard Manet",
      "Edgar Degas"
    ],
    explication: "Claude Monet est l'auteur des Nymphéas et d'Impression, soleil levant. Renoir, autre impressionniste, est surtout connu pour ses figures humaines.",
    page: 53
  },
  {
    id: "an-hg-044-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-044",
    difficulty: 3,
    question: "Lequel de ces tableaux a été peint par Claude Monet ?",
    choices: [
      "Impression, soleil levant",
      "Le Déjeuner sur l'herbe",
      "Bal du moulin de la Galette",
      "Les Glaneuses"
    ],
    explication: "Impression, soleil levant, de Monet, a donné son nom à l'impressionnisme. Le Déjeuner sur l'herbe est d'Édouard Manet, le Bal du moulin de la Galette d'Auguste Renoir.",
    page: 53
  },
  {
    id: "an-hg-045",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Pendant quelles journées peut-on visiter gratuitement des lieux culturels en France ?",
    choices: [
      "Les Journées européennes du patrimoine",
      "La Fête de la musique",
      "Le Printemps des poètes",
      "Le festival d'Avignon"
    ],
    explication: "Chaque année en septembre, les Journées européennes du patrimoine permettent de visiter des lieux habituellement fermés au public. La Fête de la musique célèbre les musiciens le 21 juin.",
    page: 53
  },
  {
    id: "an-hg-045-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-045",
    difficulty: 2,
    question: "Quand ont lieu les Journées du patrimoine, créées en France en 1984 ?",
    choices: [
      "Chaque année en septembre",
      "Chaque année en juin",
      "Chaque année en mai",
      "Chaque année en juillet"
    ],
    explication: "Les Journées du patrimoine ont lieu chaque année au mois de septembre ; créées en France en 1984, elles existent aujourd'hui dans 48 pays.",
    page: 53
  },
  {
    id: "an-hg-046",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Que symbolise le 1er mai ?",
    choices: [
      "La fête du Travail",
      "La fête de la Victoire",
      "La journée de l'Europe",
      "La fête de la Fédération"
    ],
    explication: "Le 1er mai est la fête du Travail ; on y offre traditionnellement du muguet. La victoire de 1945 est fêtée le 8 mai.",
    page: 38
  },
  {
    id: "an-hg-046-v1",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-046",
    difficulty: 3,
    question: "Depuis quand le 1er mai est-il un jour férié en France ?",
    choices: [
      "1947",
      "1886",
      "1936",
      "1919"
    ],
    explication: "Le 1er mai est férié depuis 1947. Il trouve ses racines dans la journée du 1er mai 1886, aux États-Unis, pour la journée de huit heures.",
    page: 38
  },
  {
    id: "an-hg-047",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Monsieur Rouget de Lisle ?",
    choices: [
      "L'auteur et compositeur de la Marseillaise",
      "Le peintre de La Liberté guidant le peuple",
      "Le rédacteur de la Déclaration des droits de l'homme",
      "Le sculpteur de la statue de la Liberté"
    ],
    explication: "Claude Joseph Rouget de Lisle (1760-1836), officier du génie, a composé la Marseillaise en 1792. La Liberté guidant le peuple est un tableau de Delacroix.",
    page: 53
  },
  {
    id: "an-hg-047-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-047",
    difficulty: 3,
    question: "En quelle année Rouget de Lisle a-t-il composé la Marseillaise ?",
    choices: [
      "1792",
      "1789",
      "1795",
      "1830"
    ],
    explication: "La Marseillaise a été composée en 1792 par Rouget de Lisle, officier du génie. 1789 est l'année de la prise de la Bastille.",
    page: 53
  },
  {
    id: "an-hg-048",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quelle occasion a été construite la Tour Eiffel ?",
    choices: [
      "L'Exposition universelle de 1889",
      "L'Exposition universelle de 1900",
      "Les Jeux olympiques de 1924",
      "Le centenaire de la mort de Napoléon"
    ],
    explication: "Gustave Eiffel a conçu la tour pour l'Exposition universelle de 1889. Celle de 1900 a vu naître la gare devenue le musée d'Orsay.",
    page: 53
  },
  {
    id: "an-hg-048-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-048",
    difficulty: 2,
    question: "Lequel de ces monuments a été construit pour l'Exposition universelle de 1889 ?",
    choices: [
      "La tour Eiffel",
      "La gare d'Orsay",
      "L'Arc de triomphe",
      "L'Opéra Garnier"
    ],
    explication: "La tour Eiffel a été conçue pour l'Exposition universelle de 1889. Le bâtiment du musée d'Orsay, ancienne gare, a été construit pour celle de 1900.",
    page: 53
  },
  {
    id: "an-hg-049",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    choices: [
      "Les Alpes",
      "Les Pyrénées",
      "Le Jura",
      "Les Vosges"
    ],
    explication: "Les Alpes séparent la France de l'Italie ; on y trouve le mont Blanc. Les Pyrénées marquent la frontière avec l'Espagne.",
    page: 49
  },
  {
    id: "an-hg-050",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Molière ?",
    choices: [
      "Un auteur de théâtre et comédien du XVIIe siècle",
      "Un auteur de fables du XVIIe siècle",
      "Un auteur de tragédies du XVIIIe siècle",
      "Un philosophe des Lumières du XVIIIe siècle"
    ],
    explication: "Molière est un dramaturge et comédien du XVIIe siècle, sous le règne de Louis XIV, célèbre pour ses comédies (L'Avare, Le Bourgeois gentilhomme). Les fables du XVIIe siècle sont celles de La Fontaine.",
    page: 53
  },
  {
    id: "an-hg-050-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-050",
    difficulty: 2,
    question: "Laquelle de ces comédies a été écrite par Molière ?",
    choices: [
      "L'Avare",
      "Le Cid",
      "Phèdre",
      "Le Mariage de Figaro"
    ],
    explication: "Molière est l'auteur de L'Avare et du Bourgeois gentilhomme. Le Cid est de Corneille, Phèdre de Racine et Le Mariage de Figaro de Beaumarchais.",
    page: 53
  },
  {
    id: "an-hg-051",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Charles Baudelaire ?",
    choices: [
      "Un poète, auteur des Fleurs du mal",
      "Un poète, auteur des Contemplations",
      "Un romancier, auteur de Germinal",
      "Un dramaturge, auteur du Cid"
    ],
    explication: "Charles Baudelaire (1821-1867), poète majeur du XIXe siècle, est célèbre pour Les Fleurs du mal. Les Contemplations sont de Victor Hugo.",
    page: 53
  },
  {
    id: "an-hg-051-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-051",
    difficulty: 2,
    question: "Qui a écrit le recueil « Les Fleurs du mal » ?",
    choices: [
      "Charles Baudelaire",
      "Guillaume Apollinaire",
      "Paul Verlaine",
      "Arthur Rimbaud"
    ],
    explication: "Les Fleurs du mal sont de Charles Baudelaire. Guillaume Apollinaire, poète naturalisé, est l'auteur d'Alcools et de Calligrammes.",
    page: 53
  },
  {
    id: "an-hg-052",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était George Sand ?",
    choices: [
      "Une romancière du XIXe siècle",
      "Une philosophe du XXe siècle",
      "Une peintre impressionniste du XIXe siècle",
      "Une chanteuse réaliste du XXe siècle"
    ],
    explication: "George Sand (1804-1876), de son vrai nom Aurore Dupin, est une romancière du XIXe siècle connue pour ses engagements féministes (Indiana, Lélia). La philosophe du XXe siècle est Simone de Beauvoir.",
    page: 53
  },
  {
    id: "an-hg-052-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-052",
    difficulty: 3,
    question: "Quel était le vrai nom de George Sand ?",
    choices: [
      "Aurore Dupin",
      "Édith Gassion",
      "Marguerite Donnadieu",
      "Suzanne Valadon"
    ],
    explication: "George Sand s'appelait Aurore Dupin et utilisait un pseudonyme masculin pour publier. Édith Gassion est le vrai nom d'Édith Piaf, Marguerite Donnadieu celui de Marguerite Duras.",
    page: 53
  },
  {
    id: "an-hg-053",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Simone de Beauvoir ?",
    choices: [
      "Une philosophe et écrivaine, figure du féminisme",
      "Une ministre, auteure de la loi sur l'IVG",
      "Une scientifique, prix Nobel de chimie",
      "Une romancière, connue sous un pseudonyme"
    ],
    explication: "Simone de Beauvoir (1908-1986), écrivaine engagée, est considérée comme le précurseur du mouvement féministe français. La loi sur l'IVG est celle de Simone Veil ; le pseudonyme est celui de George Sand.",
    page: 53
  },
  {
    id: "an-hg-053-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-053",
    difficulty: 3,
    question: "Qui le livret présente-t-il comme le précurseur du mouvement féministe français ?",
    choices: [
      "Simone de Beauvoir",
      "George Sand",
      "Simone Veil",
      "Françoise Giroud"
    ],
    explication: "Le livret présente Simone de Beauvoir comme le précurseur du mouvement féministe français. George Sand est connue pour ses engagements féministes, mais au XIXe siècle et comme romancière.",
    page: 53
  },
  {
    id: "an-hg-054",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui était Albert Camus ?",
    choices: [
      "Un écrivain, prix Nobel de littérature",
      "Un philosophe, qui a refusé le prix Nobel",
      "Un écrivain, deux fois prix Goncourt",
      "Un poète, auteur du recueil Alcools"
    ],
    explication: "Albert Camus, écrivain et philosophe né en Algérie, a reçu le prix Nobel de littérature. Le double prix Goncourt est Romain Gary, et Alcools est d'Apollinaire.",
    page: 53
  },
  {
    id: "an-hg-054-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-054",
    difficulty: 3,
    question: "Par quel journal clandestin Albert Camus s'est-il engagé dans la Résistance ?",
    choices: [
      "Combat",
      "L'Express",
      "L'Humanité",
      "Le Figaro"
    ],
    explication: "Albert Camus s'est engagé dans la Résistance notamment via le journal clandestin Combat. L'Express a été cofondé par Françoise Giroud après la guerre.",
    page: 53
  },
  {
    id: "an-hg-055",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Marguerite Yourcenar ?",
    choices: [
      "Une écrivaine, première femme élue à l'Académie française",
      "Une chanteuse, interprète de La Vie en rose",
      "Une philosophe, figure du féminisme",
      "Une scientifique, deux fois prix Nobel"
    ],
    explication: "Marguerite Yourcenar, née à Bruxelles et naturalisée, a été la première femme élue à l'Académie française. La Vie en rose est d'Édith Piaf.",
    page: 53
  },
  {
    id: "an-hg-055-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-055",
    difficulty: 3,
    question: "Quel roman a rendu célèbre Marguerite Yourcenar ?",
    choices: [
      "Mémoires d'Hadrien",
      "L'Amant",
      "Indiana",
      "La Vie devant soi"
    ],
    explication: "Marguerite Yourcenar est célèbre pour Mémoires d'Hadrien. L'Amant est de Marguerite Duras, Indiana de George Sand et La Vie devant soi de Romain Gary (sous le nom d'Émile Ajar).",
    page: 53
  },
  {
    id: "an-hg-056",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Paul Cézanne ?",
    choices: [
      "Un peintre, célèbre pour ses vues de la montagne Sainte-Victoire",
      "Un peintre, célèbre pour ses Nymphéas",
      "Un sculpteur, célèbre pour Le Penseur",
      "Un peintre, célèbre pour ses danseuses"
    ],
    explication: "Paul Cézanne, peintre des paysages provençaux et de la montagne Sainte-Victoire, est considéré comme le père de la peinture moderne. Les Nymphéas sont de Monet, Le Penseur de Rodin.",
    page: 53
  },
  {
    id: "an-hg-056-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-056",
    difficulty: 3,
    question: "Quel peintre est considéré comme le père de la peinture moderne et le précurseur du cubisme ?",
    choices: [
      "Paul Cézanne",
      "Claude Monet",
      "Auguste Renoir",
      "Edgar Degas"
    ],
    explication: "Le livret présente Paul Cézanne (1839-1906) comme le père de la peinture moderne et le précurseur du cubisme. Monet et Renoir sont des impressionnistes.",
    page: 53
  },
  {
    id: "an-hg-057",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Auguste Rodin ?",
    choices: [
      "Un sculpteur, auteur du Penseur",
      "Un sculpteur, auteur de la statue de la Liberté",
      "Un peintre, auteur des Nymphéas",
      "Un architecte, auteur de la tour Eiffel"
    ],
    explication: "Auguste Rodin, l'un des pères de la sculpture moderne, est l'auteur du Penseur et de L'Âge d'airain. La statue de la Liberté est de Bartholdi.",
    page: 53
  },
  {
    id: "an-hg-057-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-057",
    difficulty: 3,
    question: "Laquelle de ces œuvres est une sculpture d'Auguste Rodin ?",
    choices: [
      "L'Âge d'airain",
      "La Liberté éclairant le monde",
      "Le Radeau de la Méduse",
      "La Danse"
    ],
    explication: "Rodin est connu pour Le Penseur et L'Âge d'airain. La Liberté éclairant le monde est de Bartholdi, Le Radeau de la Méduse un tableau de Géricault et La Danse une sculpture de Carpeaux.",
    page: 53
  },
  {
    id: "an-hg-058",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était un célèbre compositeur français ?",
    choices: [
      "Claude Debussy",
      "Franz Liszt",
      "Richard Wagner",
      "Giuseppe Verdi"
    ],
    explication: "Claude Debussy (1862-1918) est l'un des plus grands musiciens français. Liszt était hongrois, Wagner allemand et Verdi italien.",
    page: 53
  },
  {
    id: "an-hg-058-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-058",
    difficulty: 2,
    question: "À quelle époque Claude Debussy occupe-t-il une place essentielle dans la musique ?",
    choices: [
      "Au début du XXe siècle",
      "Au XVIIIe siècle",
      "Au début du XIXe siècle",
      "À la fin du XXe siècle"
    ],
    explication: "Claude Debussy (1862-1918) occupe une place essentielle dans la musique du début du XXe siècle.",
    page: 53
  },
  {
    id: "an-hg-059",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui était Auguste Renoir ?",
    choices: [
      "Un peintre impressionniste",
      "Un peintre cubiste",
      "Un sculpteur, auteur du Baiser",
      "Un peintre de la Renaissance"
    ],
    explication: "Auguste Renoir (1841-1919) est un peintre impressionniste, connu pour ses figures humaines. Le Baiser est une sculpture de Rodin.",
    page: 53
  },
  {
    id: "an-hg-059-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-059",
    difficulty: 3,
    question: "Pour quels sujets Auguste Renoir est-il particulièrement connu ?",
    choices: [
      "Les figures humaines, surtout de femmes et d'enfants",
      "Les paysages de montagne, surtout la Sainte-Victoire",
      "Les natures mortes, surtout les fruits et les fleurs",
      "Les nénuphars, surtout ceux du jardin de Giverny"
    ],
    explication: "Le livret présente Renoir comme connu pour ses représentations de figures humaines, notamment de femmes et d'enfants. La Sainte-Victoire et les natures mortes évoquent Cézanne, les nénuphars Monet.",
    page: 53
  },
  {
    id: "an-hg-060",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quel musée est situé à Paris ?",
    choices: [
      "Le musée d'Orsay",
      "Le musée du Prado",
      "Le Rijksmuseum",
      "La National Gallery"
    ],
    explication: "Le musée d'Orsay, installé à Paris dans une ancienne gare, abrite la plus grande collection impressionniste au monde. Le Prado est à Madrid, le Rijksmuseum à Amsterdam, la National Gallery à Londres.",
    page: 53
  },
  {
    id: "an-hg-060-v1",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-060",
    difficulty: 2,
    question: "Qu'était le bâtiment du musée d'Orsay avant de devenir un musée ?",
    choices: [
      "Une gare ferroviaire",
      "Un palais royal",
      "Une caserne militaire",
      "Un marché couvert"
    ],
    explication: "Construit pour l'Exposition universelle de 1900, le bâtiment du musée d'Orsay a d'abord été une gare ferroviaire. C'est le Louvre qui occupe un ancien palais royal.",
    page: 53
  },
  {
    id: "an-hg-061",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quel monument historique se trouve sur une île en Normandie ?",
    choices: [
      "Le Mont-Saint-Michel",
      "Fort Boyard",
      "Le château d'If",
      "Les falaises d'Étretat"
    ],
    explication: "Le Mont-Saint-Michel, îlot rocheux au milieu d'une baie de Normandie, porte une abbaye inscrite au patrimoine mondial de l'UNESCO.",
    page: 49
  },
  {
    id: "an-hg-061-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-061",
    difficulty: 2,
    question: "Qu'a-t-on construit au sommet du Mont-Saint-Michel ?",
    choices: [
      "Une abbaye",
      "Une cathédrale",
      "Un château fort",
      "Un palais épiscopal"
    ],
    explication: "Au sommet du Mont-Saint-Michel a été construite une abbaye, longtemps lieu de pèlerinage, aujourd'hui inscrite au patrimoine mondial de l'UNESCO.",
    page: 49
  },
  {
    id: "an-hg-062",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    choices: [
      "Lyon",
      "Annecy",
      "Avignon",
      "Colmar"
    ],
    explication: "Lyon figure parmi les plus grandes villes de France, avec Paris, Lille, Marseille, Toulouse, Bordeaux, Nantes, Nice et Strasbourg.",
    page: 49
  },
  {
    id: "an-hg-063",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle île fait partie des Antilles françaises ?",
    choices: [
      "La Guadeloupe",
      "La Réunion",
      "La Nouvelle-Calédonie",
      "Saint-Pierre-et-Miquelon"
    ],
    explication: "La Guadeloupe et la Martinique forment les Antilles françaises. La Réunion se trouve dans l'océan Indien.",
    page: 49
  },
  {
    id: "an-hg-064",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle île est française ?",
    choices: [
      "La Corse",
      "La Sardaigne",
      "Majorque",
      "Malte"
    ],
    explication: "La Corse est une île française de Méditerranée. La Sardaigne, sa voisine, est italienne.",
    page: 49
  },
  {
    id: "an-hg-065",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle est la plus haute montagne de France ?",
    choices: [
      "Le mont Blanc",
      "Le mont Ventoux",
      "La barre des Écrins",
      "Le pic du Midi"
    ],
    explication: "Le mont Blanc (4 810 m), dans les Alpes, est la plus haute montagne de France et d'Europe.",
    page: 49
  },
  {
    id: "an-hg-065-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-065",
    difficulty: 3,
    question: "Quelle altitude le livret donne-t-il pour le sommet du mont Blanc ?",
    choices: [
      "4 810 m",
      "4 180 m",
      "3 810 m",
      "5 810 m"
    ],
    explication: "Selon le livret, le mont Blanc culmine à 4 810 m, ce qui en fait le plus haut sommet de France et d'Europe.",
    page: 49
  },
  {
    id: "an-hg-066",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle île française est située dans l'océan indien ?",
    choices: [
      "La Réunion",
      "La Martinique",
      "La Guadeloupe",
      "La Nouvelle-Calédonie"
    ],
    explication: "La Réunion est une île française de l'océan Indien, comme Mayotte. La Martinique et la Guadeloupe sont aux Antilles.",
    page: 49
  },
  {
    id: "an-hg-066-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-066",
    difficulty: 3,
    question: "Sur quelle île française se trouve le Piton de la Fournaise ?",
    choices: [
      "La Réunion",
      "La Martinique",
      "La Guadeloupe",
      "Mayotte"
    ],
    explication: "Le Piton de la Fournaise (2 600 m), à La Réunion, est l'un des volcans les plus actifs au monde. Il y a aussi des volcans aux Antilles et à Mayotte, mais pas celui-ci.",
    page: 49
  },
  {
    id: "an-hg-067",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel département français a une frontière avec le Brésil ?",
    choices: [
      "La Guyane",
      "La Martinique",
      "La Guadeloupe",
      "Saint-Martin"
    ],
    explication: "La Guyane, territoire français d'Amérique du Sud, est entourée du Brésil et du Suriname. Saint-Martin est une île des Antilles.",
    page: 49
  },
  {
    id: "an-hg-067-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-067",
    difficulty: 3,
    question: "Quels pays entourent la Guyane ?",
    choices: [
      "Le Brésil et le Suriname",
      "Le Brésil et le Venezuela",
      "Le Suriname et la Colombie",
      "Le Venezuela et le Guyana"
    ],
    explication: "La Guyane est entourée du Brésil et du Suriname, et bordée par l'océan Atlantique.",
    page: 49
  },
  {
    id: "an-hg-068",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "De quelle ville française décolle la fusée Ariane ?",
    choices: [
      "Kourou",
      "Toulouse",
      "Cayenne",
      "Pointe-à-Pitre"
    ],
    explication: "Les fusées Ariane décollent du pas de tir de Kourou, en Guyane. Cayenne est une autre ville de Guyane, et Toulouse un grand centre de l'aéronautique, mais aucune n'accueille de pas de tir.",
    page: 49
  },
  {
    id: "an-hg-068-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-068",
    difficulty: 2,
    question: "Dans quel territoire français se trouve Kourou, d'où décollent les fusées Ariane ?",
    choices: [
      "La Guyane",
      "La Martinique",
      "La Guadeloupe",
      "La Réunion"
    ],
    explication: "Le pas de tir de Kourou se trouve en Guyane, en Amérique du Sud. Il contribue au rôle central de la France dans l'accès européen à l'espace.",
    page: 49
  },
  {
    id: "an-hg-069",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle mer ou océan borde la France métropolitaine ?",
    choices: [
      "La mer Méditerranée",
      "La mer Noire",
      "La mer Baltique",
      "La mer Adriatique"
    ],
    explication: "Les 5 500 km de côtes de la France métropolitaine s'ouvrent sur la Manche, la mer du Nord, l'océan Atlantique et la mer Méditerranée.",
    page: 49
  },
  {
    id: "an-hg-069-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-069",
    difficulty: 3,
    question: "Sur quelles mers et océans s'ouvrent les côtes de la France métropolitaine ?",
    choices: [
      "Manche, mer du Nord, Atlantique, Méditerranée",
      "Manche, mer Baltique, Atlantique, Méditerranée",
      "Mer d'Irlande, mer du Nord, Atlantique, Méditerranée",
      "Manche, mer du Nord, Atlantique, mer Adriatique"
    ],
    explication: "La France métropolitaine dispose de 5 500 km de côtes ouvertes sur la Manche, la mer du Nord, l'océan Atlantique et la mer Méditerranée.",
    page: 49
  },
  {
    id: "an-hg-070",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle mer se situe entre la France et l'Angleterre ?",
    choices: [
      "La Manche",
      "La mer du Nord",
      "La mer Celtique",
      "La mer d'Irlande"
    ],
    explication: "La Manche sépare la France de l'Angleterre. La mer du Nord borde aussi la France, mais plus au nord-est, vers la Belgique.",
    page: 49
  },
  {
    id: "an-hg-071",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle île est un département d'outre-mer français ?",
    choices: [
      "La Martinique",
      "Tahiti",
      "La Nouvelle-Calédonie",
      "Saint-Barthélemy"
    ],
    explication: "La Martinique est un département et région d'outre-mer. Tahiti, la Nouvelle-Calédonie et Saint-Barthélemy sont des territoires français, mais pas des départements.",
    page: 49
  },
  {
    id: "an-hg-072",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que la France d'outre-mer ?",
    choices: [
      "Les territoires français situés hors d'Europe",
      "Les anciennes colonies devenues indépendantes",
      "Les pays francophones d'Afrique",
      "Les territoires étrangers administrés par la France"
    ],
    explication: "La France d'outre-mer regroupe les territoires français situés hors d'Europe (Antilles, Guyane, La Réunion, Mayotte…). Les anciennes colonies devenues indépendantes ne sont plus françaises.",
    page: 49
  },
  {
    id: "an-hg-073",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la population approximative de la France en 2025 ?",
    choices: [
      "68 millions d'habitants",
      "55 millions d'habitants",
      "60 millions d'habitants",
      "75 millions d'habitants"
    ],
    explication: "En 2025, la France compte 68,6 millions d'habitants, métropole et outre-mer compris.",
    page: 49
  },
  {
    id: "an-hg-073-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-073",
    difficulty: 3,
    question: "Quelle est la superficie du territoire français, métropole et outre-mer compris ?",
    choices: [
      "675 000 km²",
      "550 000 km²",
      "450 000 km²",
      "875 000 km²"
    ],
    explication: "Le territoire français s'étend sur 675 000 km², en métropole et outre-mer.",
    page: 49
  },
  {
    id: "an-hg-074",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le principal port maritime de France ?",
    choices: [
      "Marseille",
      "Bordeaux",
      "Brest",
      "Toulon"
    ],
    explication: "Marseille (Marseille-Fos) est le principal port maritime français. Le livret cite aussi Le Havre, Dunkerque et Nantes-Saint-Nazaire parmi les plus grands ports ; Bordeaux, Brest et Toulon n'en font pas partie.",
    page: 49
  },
  {
    id: "an-hg-074-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-074",
    difficulty: 3,
    question: "Lequel de ces ports figure parmi les plus grands ports maritimes commerciaux français ?",
    choices: [
      "Dunkerque",
      "Bordeaux",
      "Brest",
      "La Rochelle"
    ],
    explication: "Les plus grands ports maritimes commerciaux français sont Le Havre, Marseille-Fos, Dunkerque et Nantes-Saint-Nazaire.",
    page: 49
  },
  {
    id: "an-hg-075",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Combien y a-t-il de régions en France métropolitaine ?",
    choices: [
      "13",
      "22",
      "18",
      "12"
    ],
    explication: "Depuis 2016, la France métropolitaine compte 13 régions. Le piège est 18 : c'est le total avec les 5 régions d'outre-mer ; 22 était le nombre de régions métropolitaines avant 2016.",
    page: 49
  },
  {
    id: "an-hg-075-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-075",
    difficulty: 3,
    question: "Combien la France compte-t-elle de régions au total, outre-mer compris ?",
    choices: [
      "18",
      "13",
      "22",
      "27"
    ],
    explication: "La France compte 18 régions : 13 en métropole et 5 en outre-mer. 13 ne compte que la métropole.",
    page: 49
  },
  {
    id: "an-hg-076",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle chaîne de montagnes est située entre la France et l'Espagne ?",
    choices: [
      "Les Pyrénées",
      "Les Alpes",
      "Les Cévennes",
      "Le Massif central"
    ],
    explication: "Les Pyrénées se situent entre la France et l'Espagne. Les Alpes séparent la France de l'Italie.",
    page: 49
  },
  {
    id: "an-hg-077",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle île française se trouve au sud-est du continent africain ?",
    choices: [
      "Mayotte",
      "La Martinique",
      "La Nouvelle-Calédonie",
      "Saint-Barthélemy"
    ],
    explication: "Mayotte, département français, est située dans le canal du Mozambique, au sud-est du continent africain. La Martinique et Saint-Barthélemy sont aux Antilles, la Nouvelle-Calédonie dans le Pacifique.",
    page: 49
  },
  {
    id: "an-hg-078",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?",
    choices: [
      "Lyon",
      "Clermont-Ferrand",
      "Grenoble",
      "Saint-Étienne"
    ],
    explication: "Lyon, traversée par le Rhône, est le chef-lieu de la région Auvergne-Rhône-Alpes. Clermont-Ferrand était le chef-lieu de l'ancienne région Auvergne.",
    page: 49
  },
  {
    id: "an-hg-078-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-078",
    difficulty: 2,
    question: "De quelle région Lyon est-elle le chef-lieu ?",
    choices: [
      "Auvergne-Rhône-Alpes",
      "Bourgogne-Franche-Comté",
      "Provence-Alpes-Côte d'Azur",
      "Occitanie"
    ],
    explication: "Lyon est le chef-lieu de la région Auvergne-Rhône-Alpes. Le chef-lieu de l'Occitanie est Toulouse, celui de Provence-Alpes-Côte d'Azur Marseille.",
    page: 49
  },
  {
    id: "an-hg-079",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quel est le chef-lieu de la région Bretagne ?",
    choices: [
      "Rennes",
      "Brest",
      "Nantes",
      "Vannes"
    ],
    explication: "Rennes est le chef-lieu de la région Bretagne. Nantes, souvent associée à la Bretagne historique, est le chef-lieu de la région Pays de la Loire.",
    page: 49
  },
  {
    id: "an-hg-080",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le chef-lieu de la région Provence-Alpes-Côte d'Azur ?",
    choices: [
      "Marseille",
      "Nice",
      "Toulon",
      "Aix-en-Provence"
    ],
    explication: "Marseille est le chef-lieu de la région Provence-Alpes-Côte d'Azur. Nice et Toulon sont de grandes villes de la région, mais n'en sont pas le chef-lieu.",
    page: 49
  },
  {
    id: "an-hg-081",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le 101ème département français depuis 2011 ?",
    choices: [
      "Mayotte",
      "La Guyane",
      "Saint-Martin",
      "La Nouvelle-Calédonie"
    ],
    explication: "Mayotte est devenue le 101e département français en 2011. La Guyane était déjà un département bien avant ; Saint-Martin et la Nouvelle-Calédonie ne sont pas des départements.",
    page: 49
  },
  {
    id: "an-hg-081-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-081",
    difficulty: 3,
    question: "En quelle année Mayotte est-elle devenue le 101e département français ?",
    choices: [
      "2011",
      "2001",
      "2007",
      "2014"
    ],
    explication: "Mayotte est devenue le 101e département français en 2011.",
    page: 49
  },
  {
    id: "an-hg-082",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle région française est réputée pour ses stations de ski ?",
    choices: [
      "Auvergne-Rhône-Alpes",
      "La Bretagne",
      "La Normandie",
      "Les Hauts-de-France"
    ],
    explication: "Les Alpes, en région Auvergne-Rhône-Alpes, sont particulièrement réputées pour leurs stations de ski en hiver.",
    page: 49
  },
  {
    id: "an-hg-083",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quel fleuve traverse Paris ?",
    choices: [
      "La Seine",
      "La Loire",
      "La Marne",
      "L'Oise"
    ],
    explication: "La Seine traverse Paris. La Loire est le plus long fleuve français, connue pour ses châteaux.",
    page: 49
  },
  {
    id: "an-hg-083-v1",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-hg-083",
    difficulty: 2,
    question: "Quel fleuve traverse Toulouse et Bordeaux ?",
    choices: [
      "La Garonne",
      "La Dordogne",
      "La Loire",
      "Le Rhône"
    ],
    explication: "La Garonne traverse Toulouse (chef-lieu de l'Occitanie) et Bordeaux (chef-lieu de la Nouvelle-Aquitaine). La Seine traverse Paris et le Rhône Lyon.",
    page: 49
  },
  {
    id: "p4-s1-qcm-001",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel roi a unifié plusieurs royaumes francs et adopté la religion chrétienne ?",
    choices: [
      "Clovis",
      "Charlemagne",
      "Hugues Capet",
      "Pépin le Bref"
    ],
    explication: "Clovis (466-511) a unifié plusieurs royaumes habités par des peuples francs et adopté la religion chrétienne, une étape importante de l'unité du territoire. Charlemagne, autre roi franc, a régné près de trois siècles plus tard.",
    page: 39
  },
  {
    id: "p4-s1-qcm-002",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel édit Henri IV a-t-il promulgué en 1598 pour mettre fin aux guerres de religion ?",
    choices: [
      "L'édit de Nantes",
      "L'édit de Fontainebleau",
      "L'édit de Villers-Cotterêts",
      "L'édit de Saint-Germain"
    ],
    explication: "En 1598, Henri IV promulgue l'édit de Nantes, qui met fin aux guerres de religion entre catholiques et protestants. L'édit de Fontainebleau, en 1685, le révoquera.",
    page: 39
  },
  {
    id: "p4-s1-qcm-003",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel roi était surnommé le « Roi-Soleil » ?",
    choices: [
      "Louis XIV",
      "Louis XIII",
      "Louis XV",
      "Louis XVI"
    ],
    explication: "Louis XIV, le « Roi-Soleil », règne de 1643 à 1715 et fait construire le château de Versailles. Louis XV lui succède en 1715.",
    page: 39
  },
  {
    id: "p4-s1-qcm-005",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Où et quand Louis XVI a-t-il été guillotiné ?",
    choices: [
      "Place de la Concorde, en 1793",
      "Place de la Concorde, en 1792",
      "Place de la Bastille, en 1793",
      "Place de la Nation, en 1794"
    ],
    explication: "Renversé le 10 août 1792 puis jugé, Louis XVI est guillotiné sur la place de la Concorde en 1793. Le piège est 1792, année où il est renversé.",
    page: 40
  },
  {
    id: "p4-s1-qcm-007",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle loi reconnaît la traite et l'esclavage comme crime contre l'humanité ?",
    choices: [
      "La loi Taubira de 2001",
      "La loi Veil de 1975",
      "La loi Ferry de 1881",
      "La loi Badinter de 1981"
    ],
    explication: "La loi Taubira de 2001 reconnaît la traite et l'esclavage comme un crime contre l'humanité ; la journée nationale des mémoires est commémorée chaque 10 mai. La loi Veil (1975) dépénalise l'avortement et la loi Badinter (1981) abolit la peine de mort.",
    page: 42
  },
  {
    id: "p4-s1-qcm-009",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Comment le Second Empire prend-il fin en 1870 ?",
    choices: [
      "Par la défaite face à la Prusse",
      "Par la défaite de Waterloo",
      "Par la mort de Napoléon III",
      "Par un référendum perdu"
    ],
    explication: "Le Second Empire de Napoléon III prend fin en 1870, après la défaite de l'armée française contre la Prusse. Waterloo (1815) marque la fin du Premier Empire de Napoléon Ier.",
    page: 42
  },
  {
    id: "p4-s1-qcm-012",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qui était président du Conseil lors de la victoire de 1918 ?",
    choices: [
      "Georges Clemenceau",
      "Raymond Poincaré",
      "Philippe Pétain",
      "Léon Gambetta"
    ],
    explication: "La France victorieuse de 1918 est dirigée par le président du Conseil Georges Clemenceau. Pétain était un chef militaire, et Gambetta, l'un des pères de la IIIe République, était mort en 1882.",
    page: 43
  },
  {
    id: "p4-s1-qcm-016",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quels conflits meurtriers ont marqué la décolonisation française ?",
    choices: [
      "L'Indochine et l'Algérie",
      "Le Maroc et la Tunisie",
      "L'Indochine et le Maroc",
      "La Tunisie et l'Algérie"
    ],
    explication: "La plupart des colonies obtiennent leur indépendance par des processus négociés, mais deux conflits meurtriers éclatent : l'Indochine (1946-1954) et l'Algérie (1954-1962). Le Maroc et la Tunisie font partie des indépendances négociées.",
    page: 45
  },
  {
    id: "p4-s1-qcm-019",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que permet la loi du 17 mai 2013 ?",
    choices: [
      "Le mariage et l'adoption pour les couples homosexuels",
      "Le pacte civil de solidarité pour tous les couples",
      "Le divorce par consentement mutuel sans juge",
      "La procréation médicalement assistée pour toutes"
    ],
    explication: "La loi du 17 mai 2013 (mariage pour tous), soutenue par Christiane Taubira sous François Hollande, permet aux couples homosexuels de se marier et d'adopter. Le premier mariage est célébré à Montpellier le 29 mai 2013.",
    page: 46
  },
  {
    id: "p4-s1-qcm-020",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel est l'ordre chronologique correct des présidents de la Ve République ?",
    choices: [
      "De Gaulle, Pompidou, Giscard d'Estaing, Mitterrand, Chirac",
      "De Gaulle, Giscard d'Estaing, Pompidou, Mitterrand, Chirac",
      "De Gaulle, Mitterrand, Pompidou, Chirac, Giscard d'Estaing",
      "Pompidou, De Gaulle, Mitterrand, Giscard d'Estaing, Chirac"
    ],
    explication: "L'ordre est : de Gaulle (1959), Pompidou (1969), Giscard d'Estaing (1974), Mitterrand (1981), Chirac (1995), puis Sarkozy (2007), Hollande (2012) et Macron (2017).",
    page: 47
  },
  {
    id: "p4-s1-qcm-022",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "En quelle année débute le Moyen Âge, sur la frise historique du livret ?",
    choices: [
      "476",
      "1492",
      "511",
      "800"
    ],
    explication: "Sur la frise historique, le Moyen Âge débute en 476 et s'achève en 1492, date qui marque le début de l'Ancien Régime.",
    page: 38
  },
  {
    id: "p4-s1-qcm-023",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Comment appelle-t-on le gouvernement dirigé par le Général de Gaulle entre 1944 et 1946 ?",
    choices: [
      "Le Gouvernement provisoire de la République française",
      "Le gouvernement de la Quatrième République",
      "Le gouvernement de l'État français de Vichy",
      "Le Conseil national de la Résistance"
    ],
    explication: "Le Gouvernement provisoire de la République française, dirigé par le général de Gaulle jusqu'en janvier 1946, succède au régime de Vichy à la Libération et précède la IVe République (1946-1958).",
    page: 44
  },
  {
    id: "p4-s1-qcm-024",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel président de la Ve République a été réélu en 2002 ?",
    choices: [
      "Jacques Chirac",
      "François Mitterrand",
      "Emmanuel Macron",
      "François Hollande"
    ],
    explication: "Jacques Chirac est réélu en 2002. François Mitterrand a été réélu en 1988 et Emmanuel Macron en 2022.",
    page: 47
  },
  {
    id: "p4-s1-qcm-025",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui a remporté la toute première édition du Tour de France, en 1903 ?",
    choices: [
      "Maurice-François Garin",
      "Guillaume Apollinaire",
      "Haroun Tazieff",
      "Romain Gary"
    ],
    explication: "Maurice-François Garin (1871-1957), cycliste professionnel né en Italie et naturalisé français, remporte en 1903 le premier Tour de France de l'Histoire.",
    page: 48
  },
  {
    id: "p4-s1-qcm-026",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle personnalité naturalisée est considérée comme le père de la volcanologie contemporaine ?",
    choices: [
      "Haroun Tazieff",
      "Georges Charpak",
      "Marc Chagall",
      "Léon Gambetta"
    ],
    explication: "Né à Varsovie, Haroun Tazieff (1914-1998) a largement contribué à faire connaître la volcanologie au grand public. Georges Charpak, autre naturalisé, était physicien (prix Nobel 1992).",
    page: 48
  },
  {
    id: "p4-s1-qcm-027",
    theme: "hg",
    notion: "p4-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle personnalité naturalisée, d'origine suisse, a cofondé le journal L'Express ?",
    choices: [
      "Françoise Giroud",
      "Simone Veil",
      "Marguerite Yourcenar",
      "Andrée Chedid"
    ],
    explication: "Françoise Giroud (1916-2003), d'origine suisse, cofondatrice de L'Express, a aussi été deux fois secrétaire d'État. Andrée Chedid, née au Caire, est une femme de lettres et poétesse.",
    page: 48
  },
  {
    id: "p4-s2-qcm-002",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Avec combien de pays la France métropolitaine partage-t-elle une frontière terrestre ?",
    choices: [
      "8",
      "7",
      "6",
      "9"
    ],
    explication: "La France partage ses frontières avec 8 pays : Allemagne, Andorre, Belgique, Espagne, Italie, Luxembourg, Monaco et Suisse.",
    page: 49
  },
  {
    id: "p4-s2-qcm-003",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel statut particulier la France détient-elle à l'ONU ?",
    choices: [
      "Membre permanent du Conseil de sécurité avec droit de véto",
      "Membre permanent du Conseil de sécurité sans droit de véto",
      "Membre non permanent du Conseil de sécurité avec droit de véto",
      "Présidence permanente de l'Assemblée générale des Nations unies"
    ],
    explication: "La France est membre permanent du Conseil de sécurité de l'ONU, ce qui lui donne un droit de véto (la possibilité de bloquer une décision en votant contre) et renforce son influence internationale.",
    page: 49
  },
  {
    id: "p4-s2-qcm-004",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel rang économique mondial la France occupe-t-elle en 2024 ?",
    choices: [
      "7e puissance économique mondiale",
      "5e puissance économique mondiale",
      "4e puissance économique mondiale",
      "9e puissance économique mondiale"
    ],
    explication: "En 2024, la France est la 7e puissance économique mondiale avec un PIB de 2 830 milliards de dollars.",
    page: 49
  },
  {
    id: "p4-s2-qcm-006",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle est la place de la France dans l'agriculture de l'Union européenne ?",
    choices: [
      "Première puissance agricole de l'UE",
      "Deuxième puissance agricole de l'UE",
      "Troisième puissance agricole de l'UE",
      "Cinquième puissance agricole de l'UE"
    ],
    explication: "La France est la première puissance agricole de l'UE : 24 % des céréales européennes et le premier cheptel bovin d'Europe.",
    page: 50
  },
  {
    id: "p4-s2-qcm-008",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel est le plus long fleuve français ?",
    choices: [
      "La Loire",
      "La Seine",
      "Le Rhône",
      "La Garonne"
    ],
    explication: "La Loire est le plus long fleuve français, connue pour ses paysages naturels et ses châteaux. La Seine traverse Paris, la Garonne Toulouse et Bordeaux, le Rhône Lyon.",
    page: 51
  },
  {
    id: "p4-s2-qcm-009",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel fleuve traverse Lyon ?",
    choices: [
      "Le Rhône",
      "La Loire",
      "La Garonne",
      "Le Rhin"
    ],
    explication: "Le Rhône traverse Lyon, chef-lieu de la région Auvergne-Rhône-Alpes. La Garonne traverse Toulouse et Bordeaux ; le Rhin délimite partiellement la frontière avec l'Allemagne.",
    page: 51
  },
  {
    id: "p4-s2-qcm-010",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Où se trouve la grotte de Lascaux ?",
    choices: [
      "En Dordogne, région Nouvelle-Aquitaine",
      "En Ardèche, région Auvergne-Rhône-Alpes",
      "Dans le Lot, région Occitanie",
      "En Corrèze, région Nouvelle-Aquitaine"
    ],
    explication: "La grotte de Lascaux, la plus célèbre grotte préhistorique française, est située dans le département de la Dordogne, en région Nouvelle-Aquitaine. Ses peintures rupestres datent de 18 000 à 15 000 ans avant J.-C.",
    page: 52
  },
  {
    id: "p4-s2-qcm-012",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Dans combien de pays environ la France dispose-t-elle d'ambassades et de consulats ?",
    choices: [
      "Plus de 150 pays",
      "Environ 80 pays",
      "Environ 120 pays",
      "Plus de 190 pays"
    ],
    explication: "La France est l'une des dix plus grandes puissances mondiales : elle dispose d'ambassades et de consulats dans plus de 150 pays, l'un des plus grands réseaux diplomatiques au monde.",
    page: 49
  },
  {
    id: "p4-s2-qcm-013",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qu'est-ce que Paris La Défense ?",
    choices: [
      "Le plus grand quartier d'affaires d'Europe",
      "Le plus grand quartier ministériel de Paris",
      "Le principal centre spatial européen",
      "Le plus grand campus universitaire de France"
    ],
    explication: "Paris La Défense est le plus grand quartier d'affaires d'Europe : il abrite plus de 500 entreprises, dont les sièges sociaux de la plupart des grandes entreprises françaises.",
    page: 49
  },
  {
    id: "p4-s2-qcm-014",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Combien la France compte-t-elle environ de grands groupes économiques de plus de 10 000 salariés ?",
    choices: [
      "Une centaine",
      "Une dizaine",
      "Environ 500",
      "Un millier"
    ],
    explication: "La France compte une centaine de grands groupes économiques de plus de 10 000 salariés, des entreprises multinationales présentes dans de nombreux pays.",
    page: 49
  },
  {
    id: "p4-s2-qcm-015",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel rang mondial la France occupe-t-elle en tant que puissance maritime ?",
    choices: [
      "2e, derrière les États-Unis",
      "1re, devant les États-Unis",
      "2e, derrière la Chine",
      "3e, derrière le Royaume-Uni"
    ],
    explication: "Grâce à ses territoires d'outre-mer et sa présence sur tous les océans, la France est la 2e puissance maritime au monde, derrière les États-Unis.",
    page: 50
  },
  {
    id: "p4-s2-qcm-016",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle région est réputée pour l'élevage de vaches laitières et de porcs ?",
    choices: [
      "La Bretagne",
      "Le Sud-Est",
      "La Champagne",
      "Le bassin parisien"
    ],
    explication: "La Bretagne et l'Ouest sont réputés pour l'élevage de vaches laitières et de porcs. Le bassin parisien est plutôt connu pour le blé et la betterave, le Sud-Est pour les fruits, légumes et le vin.",
    page: 50
  },
  {
    id: "p4-s2-qcm-017",
    theme: "hg",
    notion: "p4-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Sur combien de pays s'étend la forêt amazonienne, dont une partie se trouve en Guyane française ?",
    choices: [
      "9",
      "7",
      "11",
      "5"
    ],
    explication: "La forêt amazonienne, qui couvre notamment 8 millions d'hectares en Guyane, s'étend sur 9 pays et abrite la plus grande variété de faune et de flore de la planète.",
    page: 52
  },
  {
    id: "p4-s3-qcm-008",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Où se situe le Palais des Papes ?",
    choices: [
      "À Avignon",
      "À Arles",
      "À Nîmes",
      "À Orange"
    ],
    explication: "Le Palais des Papes, chef-d'œuvre de l'architecture gothique du XIVe siècle inscrit à l'UNESCO, se situe dans le centre historique d'Avignon, en Provence-Alpes-Côte d'Azur, sur les rives du Rhône.",
    page: 56
  },
  {
    id: "p4-s3-qcm-009",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel rang la langue française occupe-t-elle dans le monde ?",
    choices: [
      "4e langue la plus parlée au monde",
      "2e langue la plus parlée au monde",
      "6e langue la plus parlée au monde",
      "8e langue la plus parlée au monde"
    ],
    explication: "Selon l'OIF, le français est la 4e langue la plus parlée au monde, avec plus de 300 millions de personnes sur les 5 continents.",
    page: 57
  },
  {
    id: "p4-s3-qcm-010",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quand a lieu la fête de la musique ?",
    choices: [
      "Le 21 juin",
      "Le 21 mars",
      "Le 24 juin",
      "Le 21 juillet"
    ],
    explication: "La fête de la musique, lancée en 1982, a lieu le 21 juin de chaque année : tous les musiciens peuvent s'exprimer, notamment dans la rue.",
    page: 58
  },
  {
    id: "p4-s3-qcm-011",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Contre quelle équipe la France a-t-elle gagné sa première Coupe du monde de football en 1998 ?",
    choices: [
      "Le Brésil",
      "La Croatie",
      "L'Italie",
      "L'Allemagne"
    ],
    explication: "Le 12 juillet 1998, la France gagne la finale face au Brésil — première étoile. En 2018, les Bleus l'emportent contre la Croatie — deuxième étoile.",
    page: 59
  },
  {
    id: "p4-s3-qcm-012",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qu'est-ce qui est inscrit par l'UNESCO au patrimoine culturel immatériel de l'humanité ?",
    choices: [
      "Le repas gastronomique français",
      "Le pot-au-feu traditionnel",
      "Le bœuf bourguignon",
      "La blanquette de veau"
    ],
    explication: "Le repas gastronomique français, qui célèbre les moments importants de la vie, est inscrit par l'UNESCO au patrimoine culturel immatériel de l'humanité. Le pot-au-feu, le bœuf bourguignon et la blanquette sont des plats traditionnels, mais pas inscrits en tant que tels.",
    page: 60
  },
  {
    id: "p4-s3-qcm-013",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "De quelle région vient le fromage Brocciu ?",
    choices: [
      "La Corse",
      "La Normandie",
      "Le Nord",
      "La Savoie"
    ],
    explication: "Le Brocciu vient de Corse, le Camembert de Normandie et le Maroilles du Nord de la France — tous protégés par une appellation.",
    page: 60
  },
  {
    id: "p4-s3-qcm-016",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel festival de jazz est cité dans le livret comme exemple d'événement culturel français ?",
    choices: [
      "Le festival de jazz de Marciac",
      "Le festival de jazz d'Antibes Juan-les-Pins",
      "Le festival de jazz de Nice",
      "Le festival de jazz de Vienne"
    ],
    explication: "Le livret cite les Journées du patrimoine, le festival de théâtre d'Avignon, le festival de jazz de Marciac et le festival du cinéma à Cannes.",
    page: 53
  },
  {
    id: "p4-s3-qcm-017",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Combien la France compte-t-elle environ de musées ?",
    choices: [
      "Plus de 1 200",
      "Environ 600",
      "Environ 300",
      "Plus de 3 000"
    ],
    explication: "La France compte plus de 1 200 musées, dont une centaine de musées nationaux, couvrant l'art, l'histoire, la science, l'archéologie…",
    page: 54
  },
  {
    id: "p4-s3-qcm-018",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Combien de coureurs ont participé à la toute première édition du Tour de France, en 1903 ?",
    choices: [
      "60 coureurs",
      "170 coureurs",
      "100 coureurs",
      "30 coureurs"
    ],
    explication: "La première édition du Tour de France, en 1903, a réuni 60 coureurs sur six étapes (2 300 km). Dans sa version moderne, le Tour réunit plus de 170 coureurs sur environ 3 000 km et 20 étapes.",
    page: 58
  },
  {
    id: "p4-s3-qcm-019",
    theme: "hg",
    notion: "p4-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "À quelle époque remonte l'introduction de la vigne en France ?",
    choices: [
      "L'époque romaine",
      "Le Moyen Âge",
      "Le XVIIe siècle",
      "La Renaissance"
    ],
    explication: "L'histoire du vin en France remonte à l'époque romaine, quand la vigne a été introduite et cultivée dans de nombreuses régions du pays. Ce n'est qu'au XVIIe siècle que la méthode de fermentation en bouteille du champagne est mise au point, en Champagne.",
    page: 60
  },
];
