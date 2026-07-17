import type { SousThemeContent } from "../types";

const S = "p3-s2";

export const obligationsDevoirs: SousThemeContent = {
  flashcards: [
    {
      id: `${S}-fc-001`,
      sousThemeId: S,
      front: "Quelles sont les trois catégories d'infractions, de la moins grave à la plus grave ?",
      back: "- Les **contraventions** (tribunal de police)\n- Les **délits** (tribunal correctionnel)\n- Les **crimes** (cour d'assises ou cour criminelle)",
      sourcePage: 32,
    },
    {
      id: `${S}-fc-002`,
      sousThemeId: S,
      front: "Qu'est-ce qu'une contravention ? Donnez des exemples.",
      back: "L'infraction la **moins grave** (excès de vitesse, tapage nocturne). Pas de prison possible : sanctionnée par une **amende**. Jugée par le **tribunal de police**.",
      sourcePage: 32,
    },
    {
      id: `${S}-fc-003`,
      sousThemeId: S,
      front: "Qu'est-ce qu'un délit ? Donnez des exemples et les sanctions.",
      back: "Infraction intermédiaire : **vol, fraude fiscale, harcèlement moral, agression sexuelle, homicide involontaire**… Amende ≥ **3 750 €** et jusqu'à **10 ans d'emprisonnement**. Jugé par le **tribunal correctionnel**.",
      sourcePage: 32,
    },
    {
      id: `${S}-fc-004`,
      sousThemeId: S,
      front: "Qu'est-ce qu'un crime ? Donnez des exemples et les sanctions.",
      back: "L'infraction la **plus grave** : braquage, viol, assassinat, meurtre, terrorisme… Réclusion criminelle pouvant aller jusqu'à la **perpétuité**. Jugé par la **cour d'assises** ou la cour criminelle.",
      sourcePage: 33,
    },
    {
      id: `${S}-fc-005`,
      sousThemeId: S,
      front: "Que sanctionne l'article 433-5 du Code pénal ?",
      back: "L'**outrage** commis envers une personne chargée d'une **mission de service public**, avec des peines renforcées pour les personnes dépositaires de l'autorité publique (policier, magistrat, élu).",
      sourcePage: 33,
    },
    {
      id: `${S}-fc-006`,
      sousThemeId: S,
      front: "Les atteintes aux symboles de la République sont-elles punies ?",
      back: "**Oui** : le Code pénal sanctionne l'**outrage au drapeau tricolore ou à l'hymne national**, notamment lors d'une manifestation publique. Refuser d'obéir à un policier ou gendarme est aussi un délit.",
      sourcePage: 33,
    },
    {
      id: `${S}-fc-007`,
      sousThemeId: S,
      front: "Le vote est-il obligatoire en France ?",
      back: "**Non**, mais c'est un **devoir civique important** : il assure la légitimité des représentants élus. Le respect des **résultats électoraux** s'impose à tout citoyen.",
      sourcePage: 34,
    },
    {
      id: `${S}-fc-008`,
      sousThemeId: S,
      front: "Que dit l'article 13 de la DDHC sur les impôts ?",
      back: "« Pour l'entretien de la force publique et pour les dépenses d'administration, une **contribution commune est indispensable**. » Payer ses impôts est un **devoir constitutionnel** pour tous les résidents.",
      sourcePage: 34,
    },
    {
      id: `${S}-fc-009`,
      sousThemeId: S,
      front: "Qui doit déclarer ses revenus en France ?",
      back: "**Toute personne majeure résidant en France** et qui n'est plus rattachée au foyer fiscal de ses parents doit déclarer chaque année l'intégralité de ses revenus et payer ses impôts. Une fausse déclaration peut être sanctionnée.",
      sourcePage: 34,
    },
    {
      id: `${S}-fc-010`,
      sousThemeId: S,
      front: "Depuis quand le service militaire obligatoire n'existe-t-il plus, et par quoi a-t-il été remplacé ?",
      back: "Plus de service militaire obligatoire depuis **1997**. Les jeunes participent à la **Journée Défense et Citoyenneté (JDC)**, avec recensement à la mairie **dès 16 ans**.",
      sourcePage: 35,
    },
    {
      id: `${S}-fc-011`,
      sousThemeId: S,
      front: "Qu'est-ce que le service militaire volontaire (SMV) ?",
      back: "Depuis le **1er janvier 2026**, un service de **8 mois** pour les jeunes de **18 à 25 ans**, français ou étrangers, exclus du marché de l'emploi : formation et affirmation des valeurs de la République.",
      sourcePage: 35,
    },
    {
      id: `${S}-fc-012`,
      sousThemeId: S,
      front: "Que dit l'article 2 de la Charte de l'environnement ?",
      back: "« Toute personne a le **devoir de prendre part à la préservation et à l'amélioration de l'environnement**. » (Charte de 2004)",
      sourcePage: 35,
    },
    {
      id: `${S}-fc-013`,
      sousThemeId: S,
      front: "Entre quels âges la scolarité est-elle obligatoire ?",
      back: "De **3 à 16 ans**. Les parents qui ne scolarisent pas leurs enfants s'exposent à des **poursuites judiciaires**.",
      sourcePage: 36,
    },
    {
      id: `${S}-fc-014`,
      sousThemeId: S,
      front: "Qu'est-ce que le devoir d'assistance à personne en danger ?",
      back: "L'obligation de **porter secours à autrui** dans la mesure où on peut le faire **sans mettre sa propre vie en péril**. La **non-assistance à personne en danger est un délit** puni par la loi.",
      sourcePage: 36,
    },
    {
      id: `${S}-fc-015`,
      sousThemeId: S,
      front: "Quel rôle les parents jouent-ils dans la transmission des valeurs républicaines ?",
      back: "Ils sont les **premiers acteurs de l'éducation** : transmettre liberté, égalité, fraternité et laïcité au quotidien. Les parents étrangers s'engagent à assurer une éducation respectueuse des valeurs de la République (article 20 de la **loi CIAI du 26 janvier 2024**).",
      sourcePage: 36,
    },
  ],

  qcms: [
    {
      id: `${S}-qcm-001`,
      sousThemeId: S,
      question: "Quel tribunal juge les auteurs de contraventions ?",
      choices: ["Le tribunal de police", "Le tribunal correctionnel", "La cour d'assises", "Le Conseil constitutionnel"],
      correctIndex: 0,
      explication:
        "Les contraventions (infractions les moins graves) sont jugées par le tribunal de police, les délits par le tribunal correctionnel et les crimes par la cour d'assises.",
      sourcePage: 32,
    },
    {
      id: `${S}-qcm-002`,
      sousThemeId: S,
      question: "Le vol et la fraude fiscale sont des exemples de…",
      choices: ["délits", "contraventions", "crimes", "incivilités"],
      correctIndex: 0,
      explication:
        "Les délits (vol, fraude fiscale, harcèlement moral, agression sexuelle…) sont sanctionnés par une amende d'au moins 3 750 € et jusqu'à 10 ans d'emprisonnement.",
      sourcePage: 32,
    },
    {
      id: `${S}-qcm-003`,
      sousThemeId: S,
      question: "Quelle est la peine maximale pour un crime ?",
      choices: [
        "La réclusion criminelle à perpétuité",
        "10 ans d'emprisonnement",
        "Une amende de 3 750 euros",
        "5 ans de prison",
      ],
      correctIndex: 0,
      explication:
        "Les crimes (braquage, viol, assassinat, terrorisme…) sont les infractions les plus graves, sanctionnées par une réclusion criminelle pouvant aller jusqu'à la perpétuité.",
      sourcePage: 33,
    },
    {
      id: `${S}-qcm-004`,
      sousThemeId: S,
      question: "Une contravention peut-elle donner lieu à une peine de prison ?",
      choices: [
        "Non, uniquement à une amende",
        "Oui, jusqu'à 1 an",
        "Oui, jusqu'à 6 mois",
        "Oui, en cas de récidive uniquement",
      ],
      correctIndex: 0,
      explication:
        "Les contraventions (excès de vitesse, tapage nocturne…) ne peuvent pas donner lieu à une peine de prison ; elles sont sanctionnées par une amende obligatoire.",
      sourcePage: 32,
    },
    {
      id: `${S}-qcm-005`,
      sousThemeId: S,
      question: "Le vote est-il obligatoire en France ?",
      choices: [
        "Non, mais c'est un devoir civique important",
        "Oui, sous peine d'amende",
        "Oui, depuis 1944",
        "Non, et il est déconseillé",
      ],
      correctIndex: 0,
      explication:
        "Contrairement à certains pays, le vote n'est pas obligatoire en France, mais c'est un devoir civique important qui assure la légitimité des représentants élus.",
      sourcePage: 34,
    },
    {
      id: `${S}-qcm-006`,
      sousThemeId: S,
      question: "Qui doit contribuer au financement des services publics ?",
      choices: [
        "Tous les résidents, pas uniquement les Français",
        "Uniquement les citoyens français",
        "Uniquement les entreprises",
        "Uniquement les personnes riches",
      ],
      correctIndex: 0,
      explication:
        "Tous les résidents doivent participer au financement des services publics selon leurs moyens (article 13 de la DDHC) : transports, éducation, santé, sécurité…",
      sourcePage: 34,
    },
    {
      id: `${S}-qcm-007`,
      sousThemeId: S,
      question: "Depuis quand le service militaire obligatoire n'existe-t-il plus en France ?",
      choices: ["1997", "1945", "2001", "2026"],
      correctIndex: 0,
      explication:
        "Le service militaire obligatoire n'existe plus depuis 1997. Les jeunes participent désormais à la Journée Défense et Citoyenneté (JDC).",
      sourcePage: 35,
    },
    {
      id: `${S}-qcm-008`,
      sousThemeId: S,
      question: "À quel âge doit-on se faire recenser à la mairie ?",
      choices: ["16 ans", "18 ans", "15 ans", "21 ans"],
      correctIndex: 0,
      explication:
        "Dès l'âge de 16 ans, les Françaises et les Français doivent se faire recenser à la mairie pour participer à la Journée Défense et Citoyenneté.",
      sourcePage: 35,
    },
    {
      id: `${S}-qcm-009`,
      sousThemeId: S,
      question: "La scolarité est obligatoire de…",
      choices: ["3 à 16 ans", "6 à 16 ans", "3 à 18 ans", "6 à 18 ans"],
      correctIndex: 0,
      explication:
        "La scolarité est obligatoire de 3 à 16 ans. Les parents doivent scolariser leurs enfants dès la rentrée de l'année civile de leurs 3 ans.",
      sourcePage: 36,
    },
    {
      id: `${S}-qcm-010`,
      sousThemeId: S,
      question: "Que risque-t-on en cas de non-assistance à personne en danger ?",
      choices: [
        "C'est un délit puni par la loi",
        "Rien, aider est facultatif",
        "Une simple contravention",
        "Un rappel à la loi sans sanction",
      ],
      correctIndex: 0,
      explication:
        "L'assistance à personne en danger impose de porter secours à autrui si on peut le faire sans mettre sa propre vie en péril. S'y soustraire est un délit.",
      sourcePage: 36,
    },
    {
      id: `${S}-qcm-011`,
      sousThemeId: S,
      question: "Le nouveau service militaire volontaire (SMV) mis en place au 1er janvier 2026 s'adresse…",
      choices: [
        "aux jeunes de 18 à 25 ans exclus du marché de l'emploi",
        "à tous les jeunes de 16 ans",
        "uniquement aux étudiants",
        "aux étrangers uniquement",
      ],
      correctIndex: 0,
      explication:
        "Le SMV, d'une durée de 8 mois, s'adresse aux jeunes de 18 à 25 ans, français ou étrangers, exclus du marché de l'emploi, pour leur apporter une formation et affirmer les valeurs de la République.",
      sourcePage: 35,
    },
  ],

  ouvertes: [
    {
      id: `${S}-qo-001`,
      sousThemeId: S,
      question: "Quels sont les principaux devoirs des citoyens français ?",
      expectedAnswer:
        "Respecter les lois et les institutions, respecter les principes et valeurs de la République, participer à la vie démocratique (voter, respecter les résultats électoraux), contribuer aux charges publiques (payer ses impôts), défendre la patrie, protéger l'environnement, scolariser ses enfants et transmettre les valeurs républicaines, et faire preuve d'entraide et de solidarité.",
      keyPoints: [
        "respecter les lois",
        "payer ses impôts / contribuer aux charges publiques",
        "au moins deux autres devoirs (voter, défense, environnement, scolarité, solidarité)",
      ],
      sourcePage: 32,
    },
    {
      id: `${S}-qo-002`,
      sousThemeId: S,
      question: "Expliquez la différence entre contravention, délit et crime.",
      expectedAnswer:
        "Les infractions sont classées en trois catégories selon leur gravité. Les contraventions sont les moins graves (excès de vitesse, tapage nocturne) : amende, pas de prison, tribunal de police. Les délits sont intermédiaires (vol, fraude fiscale, agression sexuelle) : amende d'au moins 3 750 € et jusqu'à 10 ans d'emprisonnement, tribunal correctionnel. Les crimes sont les plus graves (viol, meurtre, terrorisme) : jusqu'à la réclusion à perpétuité, cour d'assises.",
      keyPoints: [
        "trois niveaux de gravité croissante",
        "contraventions = amende / tribunal de police",
        "délits = tribunal correctionnel",
        "crimes = cour d'assises, perpétuité possible",
      ],
      sourcePage: 32,
    },
    {
      id: `${S}-qo-003`,
      sousThemeId: S,
      question: "Pourquoi paye-t-on des impôts en France ?",
      expectedAnswer:
        "Le financement des services publics est un devoir constitutionnel : l'article 13 de la DDHC indique que « pour l'entretien de la force publique et pour les dépenses d'administration, une contribution commune est indispensable ». Tous les résidents contribuent selon leurs moyens pour financer les transports, les équipements collectifs, l'éducation, la santé et la sécurité.",
      keyPoints: [
        "financer les services publics (éducation, santé, sécurité…)",
        "devoir constitutionnel / contribution selon ses moyens",
      ],
      sourcePage: 34,
    },
    {
      id: `${S}-qo-004`,
      sousThemeId: S,
      question: "Comment les citoyens participent-ils à la défense nationale aujourd'hui ?",
      expectedAnswer:
        "La défense repose sur une armée de métier et la dissuasion nucléaire. Le service militaire obligatoire n'existe plus depuis 1997 : les jeunes se font recenser à 16 ans et participent à la Journée Défense et Citoyenneté (JDC). Depuis le 1er janvier 2026, un service militaire volontaire de 8 mois s'adresse aux 18-25 ans. Des réserves (militaire, police, citoyenne, sanitaire) accueillent des volontaires, et en cas de crise ou de guerre, tout citoyen peut être appelé.",
      keyPoints: [
        "armée de métier / plus de service obligatoire depuis 1997",
        "JDC et recensement à 16 ans",
        "réserves ou SMV ou mobilisation en cas de guerre",
      ],
      sourcePage: 35,
    },
  ],

  trous: [
    {
      id: `${S}-tt-001`,
      sousThemeId: S,
      template:
        "Les contraventions sont jugées par le tribunal de {{1}}, les délits par le tribunal {{2}} et les crimes par la cour d'{{3}}.",
      blanks: [
        { index: 1, accepted: ["police"] },
        { index: 2, accepted: ["correctionnel"] },
        { index: 3, accepted: ["assises"] },
      ],
      sourcePage: 32,
    },
    {
      id: `${S}-tt-002`,
      sousThemeId: S,
      template:
        "La scolarité est obligatoire de {{1}} à {{2}} ans. Le service militaire obligatoire n'existe plus depuis {{3}} ; dès 16 ans, les jeunes se font recenser pour la Journée {{4}} et Citoyenneté.",
      blanks: [
        { index: 1, accepted: ["3", "trois"], strict: true },
        { index: 2, accepted: ["16", "seize"], strict: true },
        { index: 3, accepted: ["1997"], strict: true },
        { index: 4, accepted: ["défense", "defense"] },
      ],
      sourcePage: 36,
    },
    {
      id: `${S}-tt-003`,
      sousThemeId: S,
      intro: "Article 13 de la DDHC de 1789 :",
      template:
        "« Pour l'entretien de la force {{1}} et pour les dépenses d'administration, une {{2}} commune est indispensable. »",
      blanks: [
        { index: 1, accepted: ["publique"] },
        { index: 2, accepted: ["contribution"] },
      ],
      sourcePage: 34,
    },
  ],
};
