import type { SousThemeContent } from "../types";

const S = "p5-s2";

export const travaillerEnFrance: SousThemeContent = {
  flashcards: [
    {
      id: `${S}-fc-001`,
      sousThemeId: S,
      front: "Quels sont les trois types de documents qui définissent le droit du travail ?",
      back: "- Le **code du travail** (droits et obligations pour tous : 35 heures, salaire…)\n- Les **conventions collectives** (accords négociés par activité)\n- Le **règlement intérieur** (entreprises d'au moins **50 salariés**)",
      sourcePage: 70,
    },
    {
      id: `${S}-fc-002`,
      sousThemeId: S,
      front: "Qu'est-ce que le SMIC ?",
      back: "Le **salaire minimum de croissance** : le salaire horaire minimum garanti en France pour les salariés d'au moins 18 ans (16 ans avec autorisation parentale).",
      sourcePage: 70,
    },
    {
      id: `${S}-fc-003`,
      sousThemeId: S,
      front: "Quelle est la durée légale du temps de travail en France ?",
      back: "**35 heures par semaine**, fixée par le code du travail.",
      sourcePage: 70,
    },
    {
      id: `${S}-fc-004`,
      sousThemeId: S,
      front: "Qui juge les litiges entre un employeur et un salarié ?",
      back: "Le **conseil de prud'hommes**. Par ailleurs, chaque travailleur a le droit de rejoindre une **organisation syndicale**, sans condition.",
      sourcePage: 70,
    },
    {
      id: `${S}-fc-005`,
      sousThemeId: S,
      front: "Que doit indiquer un contrat de travail ?",
      back: "Le **salaire**, les **compétences** nécessaires, la **date de début**, la **durée du travail** et le **type de contrat**. Il est obligatoire et signé entre le salarié et l'employeur.",
      sourcePage: 71,
    },
    {
      id: `${S}-fc-006`,
      sousThemeId: S,
      front: "Quels sont les principaux types de contrats de travail ?",
      back: "- **CDD** : contrat à durée déterminée (travail temporaire)\n- **CDI** : contrat à durée indéterminée (emploi permanent)\n- Le contrat d'**intérim**",
      sourcePage: 71,
    },
    {
      id: `${S}-fc-007`,
      sousThemeId: S,
      front: "Qu'est-ce que France Travail ?",
      back: "Organisme public qui accompagne la **recherche d'emploi** (formations, conseils) et verse l'**ARE** (Allocation d'aide au retour à l'emploi) sous conditions. Les **Missions Locales** accompagnent les jeunes de moins de 25 ans.",
      sourcePage: 71,
    },
    {
      id: `${S}-fc-008`,
      sousThemeId: S,
      front: "Faut-il être français pour créer une entreprise en France ?",
      back: "**Non**, chacun est libre de créer son entreprise. Démarches : enregistrer les statuts, immatriculer l'entreprise, publier dans un journal d'annonces légales, déclarer le siège social.",
      sourcePage: 71,
    },
    {
      id: `${S}-fc-009`,
      sousThemeId: S,
      front: "Quels sont les quatre grands secteurs d'activité pour la création d'entreprise ?",
      back: "- L'**artisanat** (production, transformation, services)\n- Le **commerce**\n- Les **professions libérales** (médecins, avocats…)\n- L'**activité agricole**\nAides : chambre des métiers (CMA), chambre de commerce (CCI).",
      sourcePage: 72,
    },
    {
      id: `${S}-fc-010`,
      sousThemeId: S,
      front: "Quelles sont les trois fonctions publiques ?",
      back: "- La fonction publique d'**État**\n- La fonction publique **territoriale**\n- La fonction publique **hospitalière**\nRecrutement par **concours** ; un fonctionnaire est titularisé dans un grade (A, B ou C).",
      sourcePage: 72,
    },
    {
      id: `${S}-fc-011`,
      sousThemeId: S,
      front: "Quelles conditions pour se présenter à un concours de la fonction publique ?",
      back: "Conditions d'âge et de diplôme, **nationalité française ou d'un pays de l'UE/EEE**, jouir de ses **droits civiques**, casier judiciaire (bulletin n°2) vierge de condamnation incompatible. Les emplois de **souveraineté** (défense, affaires étrangères) sont réservés aux Français.",
      sourcePage: 72,
    },
  ],

  qcms: [
    {
      id: `${S}-qcm-001`,
      sousThemeId: S,
      question: "Quelle est la durée légale du temps de travail hebdomadaire en France ?",
      choices: ["35 heures", "39 heures", "40 heures", "32 heures"],
      correctIndex: 0,
      explication:
        "Le code du travail fixe la durée légale du temps de travail à 35 heures par semaine.",
      sourcePage: 70,
    },
    {
      id: `${S}-qcm-002`,
      sousThemeId: S,
      question: "Que signifie SMIC ?",
      choices: [
        "Salaire minimum de croissance",
        "Salaire moyen interprofessionnel courant",
        "Seuil minimum d'imposition commun",
        "Salaire minimum d'insertion des cadres",
      ],
      correctIndex: 0,
      explication:
        "Le SMIC (salaire minimum de croissance) est le salaire horaire minimum garanti en France.",
      sourcePage: 70,
    },
    {
      id: `${S}-qcm-003`,
      sousThemeId: S,
      question: "Quel tribunal juge les litiges entre employeurs et salariés ?",
      choices: [
        "Le conseil de prud'hommes",
        "Le tribunal correctionnel",
        "Le tribunal de police",
        "La cour d'assises",
      ],
      correctIndex: 0,
      explication:
        "En cas de litige entre un employeur et son salarié, le conseil de prud'hommes est compétent.",
      sourcePage: 70,
    },
    {
      id: `${S}-qcm-004`,
      sousThemeId: S,
      question: "Quel contrat correspond à un emploi permanent ?",
      choices: ["Le CDI", "Le CDD", "L'intérim", "Le stage"],
      correctIndex: 0,
      explication:
        "Le CDI (contrat à durée indéterminée) correspond à un emploi permanent ; le CDD et l'intérim sont temporaires.",
      sourcePage: 71,
    },
    {
      id: `${S}-qcm-005`,
      sousThemeId: S,
      question: "Quel organisme accompagne la recherche d'emploi et verse l'ARE ?",
      choices: ["France Travail", "La CPAM", "La CAF", "L'URSSAF"],
      correctIndex: 0,
      explication:
        "France Travail aide à trouver un emploi, propose des formations et peut verser l'Allocation d'aide au retour à l'emploi (ARE) sous conditions.",
      sourcePage: 71,
    },
    {
      id: `${S}-qcm-006`,
      sousThemeId: S,
      question: "Qui accompagne spécifiquement les jeunes de moins de 25 ans vers l'emploi ?",
      choices: ["Les Missions Locales", "Les préfectures", "Les mairies", "Les régions"],
      correctIndex: 0,
      explication:
        "L'accompagnement des jeunes de moins de 25 ans est réalisé par les Missions Locales.",
      sourcePage: 71,
    },
    {
      id: `${S}-qcm-007`,
      sousThemeId: S,
      question: "Faut-il être français pour créer une entreprise en France ?",
      choices: [
        "Non, chacun est libre de créer son entreprise",
        "Oui, c'est réservé aux Français",
        "Oui, sauf dans le commerce",
        "Non, mais uniquement pour les Européens",
      ],
      correctIndex: 0,
      explication:
        "Chacun est libre de créer son entreprise en France ; il n'est pas nécessaire d'être français. Des démarches administratives sont toutefois exigées.",
      sourcePage: 71,
    },
    {
      id: `${S}-qcm-008`,
      sousThemeId: S,
      question: "Quelles sont les trois fonctions publiques ?",
      choices: [
        "D'État, territoriale et hospitalière",
        "Nationale, régionale et communale",
        "Civile, militaire et judiciaire",
        "Administrative, technique et sociale",
      ],
      correctIndex: 0,
      explication:
        "Un fonctionnaire travaille dans l'une des trois fonctions publiques : d'État, territoriale ou hospitalière. Le recrutement se fait par concours.",
      sourcePage: 72,
    },
    {
      id: `${S}-qcm-009`,
      sousThemeId: S,
      question: "Quels emplois publics sont fermés aux candidats européens non français ?",
      choices: [
        "Les emplois de « souveraineté » (défense, affaires étrangères)",
        "Les emplois hospitaliers",
        "Les emplois territoriaux",
        "Les emplois d'enseignant",
      ],
      correctIndex: 0,
      explication:
        "Les candidats européens n'ont pas accès aux emplois dits de « souveraineté », comme la défense ou les affaires étrangères.",
      sourcePage: 72,
    },
    {
      id: `${S}-qcm-010`,
      sousThemeId: S,
      question: "À partir de combien de salariés une entreprise doit-elle avoir un règlement intérieur ?",
      choices: ["50", "10", "100", "20"],
      correctIndex: 0,
      explication:
        "Le règlement intérieur est rédigé par l'employeur dont l'entreprise compte au moins 50 salariés : il détaille les règles de santé, sécurité et comportement au travail.",
      sourcePage: 70,
    },
  ],

  ouvertes: [
    {
      id: `${S}-qo-001`,
      sousThemeId: S,
      question: "Quels sont vos droits en tant que salarié en France ?",
      expectedAnswer:
        "Un contrat de travail obligatoire précisant salaire, durée et type de contrat ; un salaire au moins égal au SMIC ; une durée légale de travail de 35 heures par semaine ; la protection contre toute discrimination ; le droit de rejoindre un syndicat ; et en cas de litige, la possibilité de saisir le conseil de prud'hommes.",
      keyPoints: [
        "SMIC ou 35 heures",
        "au moins deux autres droits (contrat, syndicat, non-discrimination, prud'hommes)",
      ],
      sourcePage: 70,
    },
    {
      id: `${S}-qo-002`,
      sousThemeId: S,
      question: "Que faire si vous perdez votre emploi en France ?",
      expectedAnswer:
        "S'inscrire à France Travail, organisme public qui accompagne la recherche d'emploi et propose des formations adaptées. Si les conditions sont remplies (avoir travaillé suffisamment longtemps, ne pas avoir quitté volontairement son travail), France Travail verse chaque mois l'Allocation d'aide au retour à l'emploi (ARE). Les jeunes de moins de 25 ans sont accompagnés par les Missions Locales.",
      keyPoints: ["s'inscrire à France Travail", "ARE / allocation chômage sous conditions"],
      sourcePage: 71,
    },
    {
      id: `${S}-qo-003`,
      sousThemeId: S,
      question: "Comment devient-on fonctionnaire en France ?",
      expectedAnswer:
        "L'accès à la fonction publique (d'État, territoriale ou hospitalière) est ouvert à tous sans discrimination, par concours. Il faut remplir des conditions d'âge et de diplôme, avoir la nationalité française ou d'un pays de l'UE/EEE, jouir de ses droits civiques et ne pas avoir de condamnation incompatible au casier judiciaire. Après un stage, l'agent est titularisé dans un grade.",
      keyPoints: [
        "concours",
        "conditions (nationalité, droits civiques, diplôme…)",
      ],
      sourcePage: 72,
    },
  ],

  trous: [
    {
      id: `${S}-tt-001`,
      sousThemeId: S,
      template:
        "La durée légale du travail est de {{1}} heures par semaine. Les salariés doivent percevoir un salaire au moins égal au {{2}}. Les litiges sont jugés par le conseil de {{3}}.",
      blanks: [
        { index: 1, accepted: ["35"], strict: true },
        { index: 2, accepted: ["smic", "salaire minimum de croissance"] },
        { index: 3, accepted: ["prud'hommes", "prudhommes", "prud hommes"] },
      ],
      sourcePage: 70,
    },
    {
      id: `${S}-tt-002`,
      sousThemeId: S,
      template:
        "Le {{1}} est un contrat pour un travail temporaire, tandis que le {{2}} correspond à un emploi permanent. Pour être accompagné dans sa recherche d'emploi, il faut s'inscrire à {{3}}.",
      blanks: [
        { index: 1, accepted: ["cdd", "contrat à durée déterminée"] },
        { index: 2, accepted: ["cdi", "contrat à durée indéterminée"] },
        { index: 3, accepted: ["france travail"] },
      ],
      sourcePage: 71,
    },
    {
      id: `${S}-tt-003`,
      sousThemeId: S,
      template:
        "Les trois fonctions publiques sont : la fonction publique d'{{1}}, la fonction publique {{2}} et la fonction publique {{3}}. On y est recruté par {{4}}.",
      blanks: [
        { index: 1, accepted: ["état", "etat"] },
        { index: 2, accepted: ["territoriale"] },
        { index: 3, accepted: ["hospitalière"] },
        { index: 4, accepted: ["concours"] },
      ],
      sourcePage: 72,
    },
  ],
};
