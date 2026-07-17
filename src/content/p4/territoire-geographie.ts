import type { SousThemeContent } from "../types";

const S = "p4-s2";

export const territoireGeographie: SousThemeContent = {
  flashcards: [
    {
      id: `${S}-fc-001`,
      sousThemeId: S,
      front: "Quelle est la population de la France et la superficie de son territoire ?",
      back: "En 2025 : **68,6 millions d'habitants**, sur **675 000 km²** (métropole et outre-mer).",
      sourcePage: 49,
    },
    {
      id: `${S}-fc-002`,
      sousThemeId: S,
      front: "Avec quels pays la France métropolitaine partage-t-elle des frontières terrestres ?",
      back: "**8 pays** : Allemagne, Andorre, Belgique, Espagne, Italie, Luxembourg, Monaco et Suisse.",
      sourcePage: 49,
    },
    {
      id: `${S}-fc-003`,
      sousThemeId: S,
      front: "Sur quelles mers et océans la France métropolitaine est-elle ouverte ?",
      back: "**5 500 km de côtes** sur la **Manche**, la **mer du Nord**, l'**océan Atlantique** et la **mer Méditerranée**.",
      sourcePage: 49,
    },
    {
      id: `${S}-fc-004`,
      sousThemeId: S,
      front: "Quelles sont les plus grandes villes de France ?",
      back: "**Paris, Lyon, Lille, Marseille, Toulouse, Bordeaux, Nantes, Nice et Strasbourg** — des villes à dimension internationale.",
      sourcePage: 49,
    },
    {
      id: `${S}-fc-005`,
      sousThemeId: S,
      front: "Quel statut la France a-t-elle à l'ONU ?",
      back: "**Membre permanent du Conseil de sécurité**, avec un **droit de véto**. L'ONU a été créée en **1945** pour maintenir la paix et la sécurité internationales. La France est aussi membre de l'UE, l'OTAN, le G7, le G20, la Francophonie.",
      sourcePage: 49,
    },
    {
      id: `${S}-fc-006`,
      sousThemeId: S,
      front: "Quel rang économique la France occupe-t-elle dans le monde ?",
      back: "La **7e puissance économique mondiale** (2024), avec un PIB de 2 830 milliards de dollars. Elle est aussi la **2e puissance maritime au monde** derrière les États-Unis, grâce à l'outre-mer.",
      sourcePage: 49,
    },
    {
      id: `${S}-fc-007`,
      sousThemeId: S,
      front: "Citez des secteurs d'excellence de l'économie française.",
      back: "L'**aéronautique et le spatial**, le **luxe et la mode**, l'**agroalimentaire**, l'**énergie**, la **pharmacie**, le **numérique**, l'**automobile**. Les fusées Ariane décollent de **Kourou, en Guyane**.",
      sourcePage: 50,
    },
    {
      id: `${S}-fc-008`,
      sousThemeId: S,
      front: "Quels sont les plus grands ports maritimes commerciaux français ?",
      back: "**Le Havre, Marseille-Fos, Dunkerque, Nantes-Saint-Nazaire**. Plus de 90 % du commerce international de marchandises s'effectue par bateau.",
      sourcePage: 50,
    },
    {
      id: `${S}-fc-009`,
      sousThemeId: S,
      front: "Quelle place la France occupe-t-elle dans l'agriculture européenne ?",
      back: "**Première puissance agricole de l'UE** : 24 % des céréales européennes, premier cheptel bovin d'Europe. Environ la **moitié du territoire** est agricole.",
      sourcePage: 50,
    },
    {
      id: `${S}-fc-010`,
      sousThemeId: S,
      front: "Quelle est la plus haute montagne de France, et quelles sont les principales chaînes ?",
      back: "Le **Mont-Blanc (4 810 m)**, plus haute montagne de France et d'Europe, dans les **Alpes** (frontière avec l'Italie). Les **Pyrénées** (frontière avec l'Espagne), le **Massif central**, le **Jura** et les **Vosges**.",
      sourcePage: 51,
    },
    {
      id: `${S}-fc-011`,
      sousThemeId: S,
      front: "Citez les principaux fleuves français.",
      back: "- La **Loire** : le plus long, célèbre pour ses châteaux\n- La **Seine** : traverse Paris\n- La **Garonne** : Toulouse et Bordeaux\n- Le **Rhône** : Lyon\n- Le **Rhin** : frontière partielle avec l'Allemagne",
      sourcePage: 51,
    },
    {
      id: `${S}-fc-012`,
      sousThemeId: S,
      front: "Où se trouvent les principaux volcans actifs français ?",
      back: "Dans les **Antilles, à La Réunion et à Mayotte**. Le **Piton de la Fournaise** (La Réunion, 2 600 m) est l'un des volcans les plus actifs au monde, inscrit à l'**UNESCO**.",
      sourcePage: 51,
    },
    {
      id: `${S}-fc-013`,
      sousThemeId: S,
      front: "Quelle est la plus grande forêt de France ?",
      back: "La **forêt amazonienne de Guyane** (8 millions d'hectares), qui abrite la plus grande variété de faune et de flore de la planète. En métropole : 17,5 millions d'hectares, soit **32 % du territoire**.",
      sourcePage: 52,
    },
    {
      id: `${S}-fc-014`,
      sousThemeId: S,
      front: "Qu'est-ce que la grotte de Lascaux ?",
      back: "La plus célèbre grotte préhistorique de France, en **Dordogne (Nouvelle-Aquitaine)** : des **peintures rupestres** datant de **18 000 à 15 000 ans avant J.-C.**",
      sourcePage: 52,
    },
  ],

  qcms: [
    {
      id: `${S}-qcm-001`,
      sousThemeId: S,
      question: "Combien la France compte-t-elle d'habitants en 2025 ?",
      choices: ["68,6 millions", "58 millions", "75 millions", "62 millions"],
      correctIndex: 0,
      explication:
        "En 2025, la France compte 68,6 millions d'habitants et son territoire s'étend sur 675 000 km², en métropole et outre-mer.",
      sourcePage: 49,
    },
    {
      id: `${S}-qcm-002`,
      sousThemeId: S,
      question: "Avec combien de pays la France métropolitaine partage-t-elle une frontière terrestre ?",
      choices: ["8", "6", "5", "10"],
      correctIndex: 0,
      explication:
        "La France partage ses frontières avec 8 pays : Allemagne, Andorre, Belgique, Espagne, Italie, Luxembourg, Monaco et Suisse.",
      sourcePage: 49,
    },
    {
      id: `${S}-qcm-003`,
      sousThemeId: S,
      question: "Quel statut particulier la France détient-elle à l'ONU ?",
      choices: [
        "Membre permanent du Conseil de sécurité avec droit de véto",
        "Présidence permanente de l'Assemblée générale",
        "Simple membre observateur",
        "Elle héberge le siège de l'ONU",
      ],
      correctIndex: 0,
      explication:
        "La France est membre permanent du Conseil de sécurité de l'ONU, ce qui lui donne un droit de véto et renforce son influence internationale.",
      sourcePage: 49,
    },
    {
      id: `${S}-qcm-004`,
      sousThemeId: S,
      question: "Quel rang économique mondial la France occupe-t-elle en 2024 ?",
      choices: ["7e puissance économique mondiale", "3e", "10e", "15e"],
      correctIndex: 0,
      explication:
        "En 2024, la France est la 7e puissance économique mondiale avec un PIB de 2 830 milliards de dollars.",
      sourcePage: 49,
    },
    {
      id: `${S}-qcm-005`,
      sousThemeId: S,
      question: "D'où décollent les fusées Ariane ?",
      choices: ["De Kourou, en Guyane", "De Toulouse", "De Cap Canaveral", "De La Réunion"],
      correctIndex: 0,
      explication:
        "La France joue un rôle central dans l'accès européen à l'espace, notamment grâce au pas de tir de Kourou, en Guyane, d'où décollent les fusées Ariane.",
      sourcePage: 50,
    },
    {
      id: `${S}-qcm-006`,
      sousThemeId: S,
      question: "Quelle est la place de la France dans l'agriculture de l'Union européenne ?",
      choices: [
        "Première puissance agricole de l'UE",
        "Deuxième derrière l'Allemagne",
        "Cinquième",
        "Dixième",
      ],
      correctIndex: 0,
      explication:
        "La France est la première puissance agricole de l'UE : 24 % des céréales européennes et le premier cheptel bovin d'Europe.",
      sourcePage: 50,
    },
    {
      id: `${S}-qcm-007`,
      sousThemeId: S,
      question: "Quel est le plus haut sommet de France ?",
      choices: ["Le Mont-Blanc (4 810 m)", "Le Piton de la Fournaise", "Le Puy de Dôme", "La Meije"],
      correctIndex: 0,
      explication:
        "Le Mont-Blanc, dans les Alpes, culmine à 4 810 m : c'est la plus haute montagne de France et d'Europe.",
      sourcePage: 51,
    },
    {
      id: `${S}-qcm-008`,
      sousThemeId: S,
      question: "Quel est le plus long fleuve français ?",
      choices: ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
      correctIndex: 0,
      explication:
        "La Loire est le plus long fleuve français, connue pour ses paysages naturels et ses châteaux. La Seine traverse Paris, la Garonne Toulouse et Bordeaux, le Rhône Lyon.",
      sourcePage: 51,
    },
    {
      id: `${S}-qcm-009`,
      sousThemeId: S,
      question: "Quel fleuve traverse Lyon ?",
      choices: ["Le Rhône", "La Loire", "La Seine", "Le Rhin"],
      correctIndex: 0,
      explication:
        "Le Rhône traverse Lyon, chef-lieu de la région Auvergne-Rhône-Alpes. Le Rhin délimite partiellement la frontière avec l'Allemagne.",
      sourcePage: 51,
    },
    {
      id: `${S}-qcm-010`,
      sousThemeId: S,
      question: "Où se trouve la grotte de Lascaux ?",
      choices: [
        "En Dordogne, région Nouvelle-Aquitaine",
        "Dans les Alpes",
        "En Bretagne",
        "Dans le Massif central",
      ],
      correctIndex: 0,
      explication:
        "La grotte de Lascaux, la plus célèbre grotte préhistorique française, est située en Dordogne. Ses peintures rupestres datent de 18 000 à 15 000 ans avant J.-C.",
      sourcePage: 52,
    },
    {
      id: `${S}-qcm-011`,
      sousThemeId: S,
      question: "Où se trouve le Piton de la Fournaise, l'un des volcans les plus actifs au monde ?",
      choices: ["Sur l'île de La Réunion", "En Guadeloupe", "En Auvergne", "À Mayotte"],
      correctIndex: 0,
      explication:
        "Le Piton de la Fournaise (2 600 m), sur l'île de La Réunion, est l'un des volcans les plus actifs au monde, inscrit au patrimoine mondial de l'UNESCO.",
      sourcePage: 51,
    },
  ],

  ouvertes: [
    {
      id: `${S}-qo-001`,
      sousThemeId: S,
      question: "Pourquoi dit-on que la France est une grande puissance mondiale ?",
      expectedAnswer:
        "La France est l'une des dix plus grandes puissances mondiales : membre permanent du Conseil de sécurité de l'ONU avec droit de véto, 7e puissance économique mondiale, 2e puissance maritime, première puissance agricole de l'UE, avec des ambassades dans plus de 150 pays et une présence dans l'UE, l'OTAN, le G7, le G20 et la Francophonie.",
      keyPoints: [
        "membre permanent du Conseil de sécurité de l'ONU (droit de véto)",
        "au moins un autre élément (7e économie, 2e puissance maritime, agriculture, réseau diplomatique)",
      ],
      sourcePage: 49,
    },
    {
      id: `${S}-qo-002`,
      sousThemeId: S,
      question: "Citez les principales chaînes de montagnes et les grands fleuves de France.",
      expectedAnswer:
        "Les montagnes : les Alpes (avec le Mont-Blanc, 4 810 m), les Pyrénées, le Massif central, le Jura et les Vosges. Les fleuves : la Loire (le plus long), la Seine (Paris), la Garonne (Toulouse, Bordeaux), le Rhône (Lyon) et le Rhin (frontière avec l'Allemagne).",
      keyPoints: [
        "au moins deux chaînes de montagnes",
        "au moins trois fleuves corrects",
      ],
      sourcePage: 51,
    },
    {
      id: `${S}-qo-003`,
      sousThemeId: S,
      question: "Quels sont les atouts économiques de la France ?",
      expectedAnswer:
        "Des secteurs d'excellence : aéronautique et spatial (Ariane à Kourou), luxe et mode, agroalimentaire, énergie, pharmacie, numérique, automobile. Sa position géographique avec plusieurs façades maritimes et de grands ports (Le Havre, Marseille-Fos, Dunkerque, Nantes-Saint-Nazaire), et une agriculture puissante (première de l'UE).",
      keyPoints: [
        "au moins deux secteurs d'excellence",
        "façades maritimes/ports ou agriculture",
      ],
      sourcePage: 50,
    },
  ],

  trous: [
    {
      id: `${S}-tt-001`,
      sousThemeId: S,
      template:
        "En 2025, la France compte {{1}} millions d'habitants. Le sommet du {{2}} est la plus haute montagne de France et d'Europe ({{3}} mètres).",
      blanks: [
        { index: 1, accepted: ["68,6", "68.6"], strict: true },
        { index: 2, accepted: ["mont-blanc", "mont blanc"] },
        { index: 3, accepted: ["4 810", "4810"], strict: true },
      ],
      sourcePage: 49,
    },
    {
      id: `${S}-tt-002`,
      sousThemeId: S,
      template:
        "Le plus long fleuve français est la {{1}}. La {{2}} traverse Paris, le {{3}} traverse Lyon et la {{4}} traverse Toulouse et Bordeaux.",
      blanks: [
        { index: 1, accepted: ["loire"] },
        { index: 2, accepted: ["seine"] },
        { index: 3, accepted: ["rhône", "rhone"] },
        { index: 4, accepted: ["garonne"] },
      ],
      sourcePage: 51,
    },
    {
      id: `${S}-tt-003`,
      sousThemeId: S,
      template:
        "La France est membre permanent du Conseil de {{1}} de l'ONU, ce qui lui donne un droit de {{2}}. L'ONU a été créée en {{3}} pour maintenir la paix.",
      blanks: [
        { index: 1, accepted: ["sécurité", "securite"] },
        { index: 2, accepted: ["véto", "veto"] },
        { index: 3, accepted: ["1945"], strict: true },
      ],
      sourcePage: 49,
    },
  ],
};
