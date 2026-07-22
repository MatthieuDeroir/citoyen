import type { SousThemeContent } from "../types";

const S = "p2-s2";

export const organisationTerritoriale: SousThemeContent = {
  flashcards: [
    {
      id: `${S}-fc-001`,
      sousThemeId: S,
      front: "Qu'est-ce que la décentralisation ?",
      back: "L'État **transfère des compétences et des moyens** à d'autres autorités appelées **collectivités territoriales** : communes, départements, régions et collectivités d'outre-mer.",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-002`,
      sousThemeId: S,
      front: "Qui représente l'État dans les territoires ?",
      back: "Les **préfets** de région et de département (ou les **hauts-commissaires** dans certaines collectivités d'outre-mer).",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-003`,
      sousThemeId: S,
      front: "Combien la France compte-t-elle de communes et qui les gère ?",
      back: "**34 875 communes** (au 1er janvier 2025), chacune gérée par un **maire** et un **conseil municipal** élus pour **6 ans**.",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-004`,
      sousThemeId: S,
      front: "Quelles sont les responsabilités des communes ?",
      back: "- Les **écoles primaires** publiques (maternelles et élémentaires)\n- Les activités sportives et culturelles\n- L'entretien des **routes communales**\n- Les registres de l'**état civil** (naissances, mariages, décès)",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-005`,
      sousThemeId: S,
      front: "Qu'est-ce qu'une intercommunalité ?",
      back: "Un **regroupement de communes** (communautés de communes, métropoles…) qui gère des services publics : eau, assainissement, déchets, transports urbains…",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-006`,
      sousThemeId: S,
      front: "Combien la France compte-t-elle de départements ?",
      back: "**101 départements** : 96 en métropole et 5 en outre-mer. Le plus récent est **Mayotte (2011)**. Ils sont administrés par les conseils départementaux.",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-007`,
      sousThemeId: S,
      front: "Quelles sont les responsabilités des départements ?",
      back: "- Les **collèges** publics\n- L'**action sociale**\n- Les **routes départementales**\n- La **protection de l'enfance** et l'aide aux **personnes âgées**",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-008`,
      sousThemeId: S,
      front: "Combien la France compte-t-elle de régions ?",
      back: "**18 régions** : 13 métropolitaines et 5 en outre-mer, administrées par les conseils régionaux.",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-009`,
      sousThemeId: S,
      front: "Quelles sont les responsabilités des régions ?",
      back: "- Les **transports publics**\n- Le **développement économique**\n- La **formation professionnelle**\n- La construction et l'entretien des **lycées** publics",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-010`,
      sousThemeId: S,
      front: "Combien la France compte-t-elle de territoires d'outre-mer, et lesquels sont à la fois départements et régions ?",
      back: "**12 territoires d'outre-mer**. 5 sont à la fois départements et régions : **Guadeloupe, Martinique, Mayotte, Guyane, La Réunion**.",
      sourcePage: 20,
    },
    {
      id: `${S}-fc-011`,
      sousThemeId: S,
      front: "Citez des collectivités d'outre-mer à statut particulier.",
      back: "**Nouvelle-Calédonie, Polynésie française, Saint-Martin, Saint-Barthélemy, Saint-Pierre-et-Miquelon, Terres australes et antarctiques françaises, Wallis-et-Futuna** (7 au total).",
      sourcePage: 20,
    },
    {
      id: `${S}-fc-012`,
      sousThemeId: S,
      front: "Quelles îles constituent les Antilles françaises ?",
      back: "**La Martinique, la Guadeloupe, Saint-Martin et Saint-Barthélemy**.",
      sourcePage: 20,
    },
    {
      id: `${S}-fc-013`,
      sousThemeId: S,
      front: "Les ressortissants de l'Union européenne peuvent-ils être candidats aux élections municipales ?",
      back: "Oui : les élections municipales permettent aux **citoyens français** et aux **ressortissants de l'Union européenne** de **voter et de se présenter comme candidats**.",
      sourcePage: 19,
    },
    {
      id: `${S}-fc-014`,
      sousThemeId: S,
      front: "Quels sont les noms des 13 régions métropolitaines ?",
      back: "**Hauts-de-France, Normandie, Île-de-France, Grand Est, Bretagne, Pays de la Loire, Centre-Val de Loire, Bourgogne-Franche-Comté, Nouvelle-Aquitaine, Auvergne-Rhône-Alpes, Occitanie, Provence-Alpes-Côte d'Azur, Corse**.",
      sourcePage: 21,
    },
    {
      id: `${S}-fc-015`,
      sousThemeId: S,
      front: "Quels sont les numéros des départements et régions d'outre-mer (DROM) ?",
      back: "**Guadeloupe : 971, Martinique : 972, Guyane : 973, La Réunion : 974, Mayotte : 976**.",
      sourcePage: 21,
    },
  ],

  qcms: [
    {
      id: `${S}-qcm-001`,
      sousThemeId: S,
      question: "Combien la France compte-t-elle de régions au total ?",
      choices: ["18", "13", "22", "27"],
      correctIndex: 0,
      explication:
        "La France compte 13 régions métropolitaines et 5 régions d'outre-mer, soit 18 régions en tout.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-002`,
      sousThemeId: S,
      question: "Quel est le département français le plus récent ?",
      choices: ["Mayotte", "La Réunion", "La Guyane", "La Corse-du-Sud"],
      correctIndex: 0,
      explication: "Mayotte est devenue le 101e département français en 2011.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-003`,
      sousThemeId: S,
      question: "Qui est responsable des écoles primaires publiques ?",
      choices: ["Les communes", "Les départements", "Les régions", "L'État uniquement"],
      correctIndex: 0,
      explication:
        "Les communes gèrent les écoles primaires (maternelles et élémentaires), les départements les collèges, et les régions les lycées.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-004`,
      sousThemeId: S,
      question: "Qui est responsable des collèges publics ?",
      choices: ["Les départements", "Les communes", "Les régions", "Les intercommunalités"],
      correctIndex: 0,
      explication:
        "Les départements sont responsables des collèges publics, de l'action sociale, des routes départementales et de la protection de l'enfance.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-005`,
      sousThemeId: S,
      question: "Qui est responsable de la construction et de l'entretien des lycées publics ?",
      choices: ["Les régions", "Les communes", "Les départements", "Le ministère de l'Éducation"],
      correctIndex: 0,
      explication:
        "Les régions sont chargées des lycées publics, des transports publics, du développement économique et de la formation professionnelle.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-006`,
      sousThemeId: S,
      question: "Qui tient les registres de l'état civil (naissances, mariages, décès) ?",
      choices: ["Les communes", "Les préfectures", "Les départements", "Les tribunaux"],
      correctIndex: 0,
      explication:
        "Les communes tiennent les registres de l'état civil : elles enregistrent les naissances, les mariages et les décès.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-007`,
      sousThemeId: S,
      question: "Qui représente l'État dans les régions et départements ?",
      choices: ["Les préfets", "Les maires", "Les présidents de conseil régional", "Les sénateurs"],
      correctIndex: 0,
      explication:
        "L'État est représenté par les préfets de région et de département (ou par les hauts-commissaires dans certaines collectivités d'outre-mer).",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-008`,
      sousThemeId: S,
      question: "Lequel de ces territoires est à la fois un département et une région d'outre-mer ?",
      choices: ["La Réunion", "La Polynésie française", "La Nouvelle-Calédonie", "Wallis-et-Futuna"],
      correctIndex: 0,
      explication:
        "Guadeloupe, Martinique, Mayotte, Guyane et La Réunion sont à la fois départements et régions. Les autres sont des collectivités à statut particulier.",
      sourcePage: 20,
    },
    {
      id: `${S}-qcm-009`,
      sousThemeId: S,
      question: "Combien la France compte-t-elle de départements ?",
      choices: ["101", "96", "100", "112"],
      correctIndex: 0,
      explication: "La France compte 101 départements : 96 en métropole et 5 en outre-mer.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-010`,
      sousThemeId: S,
      question: "Que gèrent typiquement les intercommunalités ?",
      choices: [
        "L'eau, l'assainissement, les déchets, les transports urbains",
        "Les collèges et les lycées",
        "La justice et la police nationale",
        "Les impôts nationaux",
      ],
      correctIndex: 0,
      explication:
        "Les communes regroupées en intercommunalités (communautés de communes, métropoles…) gèrent des services publics comme l'eau, l'assainissement, les déchets ou les transports urbains.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-011`,
      sousThemeId: S,
      question:
        "Les ressortissants de l'Union européenne peuvent-ils se présenter comme candidats aux élections municipales en France ?",
      choices: [
        "Oui, ils peuvent voter et se présenter comme candidats",
        "Non, ils peuvent seulement voter",
        "Non, ils n'ont aucun droit électoral en France",
        "Oui, mais uniquement comme conseillers régionaux",
      ],
      correctIndex: 0,
      explication:
        "Les élections municipales permettent aux citoyens français et aux ressortissants de l'Union européenne de voter et de se présenter comme candidats.",
      sourcePage: 19,
    },
    {
      id: `${S}-qcm-012`,
      sousThemeId: S,
      question: "Quel est le numéro de département de la Guadeloupe ?",
      choices: ["971", "972", "973", "974"],
      correctIndex: 0,
      explication:
        "Guadeloupe : 971, Martinique : 972, Guyane : 973, La Réunion : 974, Mayotte : 976.",
      sourcePage: 21,
    },
    {
      id: `${S}-qcm-013`,
      sousThemeId: S,
      question: "Parmi ces noms, lequel est celui d'une région métropolitaine française ?",
      choices: ["Nouvelle-Aquitaine", "Nouvelle-Bretagne", "Grande-Provence", "Île-Bourgogne"],
      correctIndex: 0,
      explication:
        "La Nouvelle-Aquitaine fait partie des 13 régions métropolitaines, avec entre autres Hauts-de-France, Normandie, Île-de-France, Grand Est, Bretagne, Pays de la Loire, Centre-Val de Loire, Bourgogne-Franche-Comté, Auvergne-Rhône-Alpes, Occitanie, Provence-Alpes-Côte d'Azur et Corse.",
      sourcePage: 21,
    },
  ],

  ouvertes: [
    {
      id: `${S}-qo-001`,
      sousThemeId: S,
      question: "Quels sont les différents niveaux de collectivités territoriales en France ?",
      expectedAnswer:
        "Dans le cadre de la décentralisation, l'État transfère des compétences aux collectivités territoriales : les communes (gérées par un maire et un conseil municipal), les départements (conseils départementaux), les régions (conseils régionaux) et les collectivités d'outre-mer. L'État y est représenté par les préfets.",
      keyPoints: ["communes", "départements", "régions", "outre-mer et/ou préfets"],
      sourcePage: 19,
    },
    {
      id: `${S}-qo-002`,
      sousThemeId: S,
      question: "Que fait la mairie de votre commune ? Citez quelques-unes de ses responsabilités.",
      expectedAnswer:
        "La commune est gérée par le maire et le conseil municipal élus pour six ans. Elle est responsable des écoles primaires publiques, des activités sportives et culturelles, de l'entretien des routes communales, et tient les registres de l'état civil (naissances, mariages, décès).",
      keyPoints: [
        "écoles primaires/maternelles",
        "état civil (naissances, mariages, décès)",
        "au moins une autre compétence (routes communales, sport, culture)",
      ],
      sourcePage: 19,
    },
    {
      id: `${S}-qo-003`,
      sousThemeId: S,
      question: "Citez des territoires français d'outre-mer.",
      expectedAnswer:
        "La France compte 12 territoires d'outre-mer : la Guadeloupe, la Martinique, Mayotte, la Guyane et La Réunion (départements et régions), ainsi que la Nouvelle-Calédonie, la Polynésie française, Saint-Martin, Saint-Barthélemy, Saint-Pierre-et-Miquelon, les Terres australes et antarctiques françaises et Wallis-et-Futuna.",
      keyPoints: ["au moins trois territoires d'outre-mer corrects"],
      sourcePage: 20,
    },
  ],

  trous: [
    {
      id: `${S}-tt-001`,
      sousThemeId: S,
      template:
        "La France compte {{1}} départements (dont 96 en métropole) et {{2}} régions au total. Le département le plus récent est {{3}}, créé en {{4}}.",
      blanks: [
        { index: 1, accepted: ["101"], strict: true },
        { index: 2, accepted: ["18"], strict: true },
        { index: 3, accepted: ["mayotte"] },
        { index: 4, accepted: ["2011"], strict: true },
      ],
      sourcePage: 19,
    },
    {
      id: `${S}-tt-002`,
      sousThemeId: S,
      template:
        "Les communes gèrent les écoles {{1}}, les départements les {{2}} et les régions les {{3}}.",
      blanks: [
        { index: 1, accepted: ["primaires", "maternelles et élémentaires", "primaires publiques"] },
        { index: 2, accepted: ["collèges", "colleges publics"] },
        { index: 3, accepted: ["lycées", "lycees publics"] },
      ],
      sourcePage: 19,
    },
    {
      id: `${S}-tt-003`,
      sousThemeId: S,
      template:
        "Dans les territoires, l'État est représenté par les {{1}} de région et de département. Chaque commune est gérée par un {{2}} et un conseil municipal élus pour {{3}} ans.",
      blanks: [
        { index: 1, accepted: ["préfets", "prefets"] },
        { index: 2, accepted: ["maire"] },
        { index: 3, accepted: ["6", "six"], strict: true },
      ],
      sourcePage: 19,
    },
  ],
};
