import type { Question } from "../types";

/** Vivre dans la société française. */
export const vs: Question[] = [
  {
    id: "an-vs-001",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Où faut-il déclarer la naissance d'un enfant ?",
    choices: [
      "À la mairie du lieu de naissance",
      "À la mairie du domicile des parents",
      "À la préfecture du département",
      "À la caisse d'allocations familiales"
    ],
    explication: "La naissance est déclarée au service d'état civil de la mairie du lieu de naissance.",
    page: 62
  },
  {
    id: "an-vs-002",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle action peut réaliser le locataire d'un logement sans l'autorisation du propriétaire ?",
    choices: [
      "Repeindre les murs de son logement",
      "Abattre une cloison",
      "Remplacer la chaudière par un autre modèle",
      "Sous-louer une partie du logement"
    ],
    explication: "Le locataire peut faire des aménagements simples (peinture, décoration) ; les transformations lourdes exigent l'accord du propriétaire.",
    page: 62
  },
  {
    id: "an-vs-003",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel mariage est reconnu légalement ?",
    choices: [
      "Le mariage civil célébré en mairie",
      "Le mariage religieux célébré dans un lieu de culte",
      "Le mariage célébré selon la coutume du pays d'origine",
      "Le PACS signé en mairie"
    ],
    explication: "Seul le mariage civil a une valeur légale ; la cérémonie religieuse ne peut avoir lieu qu'après.",
    page: 73
  },
  {
    id: "an-vs-004",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Le stationnement sur une place réservée aux personnes handicapées :",
    choices: [
      "Est interdit et puni d'une amende",
      "Est toléré pour un arrêt de moins de 5 minutes",
      "Est autorisé avec les feux de détresse allumés",
      "Est autorisé si aucune autre place n'est libre"
    ],
    explication: "Stationner sans carte sur une place réservée est une infraction passible d'une amende de 135 €.",
    page: 62
  },
  {
    id: "an-vs-005",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Si une machine à laver est cassée, il est possible de :",
    choices: [
      "La faire réparer ou la déposer en déchetterie pour recyclage",
      "La mettre dans le conteneur des ordures ménagères",
      "La déposer dans un bois ou un terrain vague",
      "La laisser dans le local poubelles de l'immeuble"
    ],
    explication: "Les encombrants et appareils électriques se réparent, se donnent ou se recyclent — jamais dans la nature.",
    page: 62
  },
  {
    id: "an-vs-006",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Dans quel cas faut-il déclarer son enfant au service d'état civil ?",
    choices: [
      "Dans tous les cas, pour toute naissance",
      "Seulement si les parents sont mariés",
      "Seulement si l'un des parents est français",
      "Seulement si l'enfant est né à l'hôpital"
    ],
    explication: "Toute naissance doit être déclarée à l'état civil : c'est ce qui établit l'existence juridique de l'enfant.",
    page: 73
  },
  {
    id: "an-vs-007",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quand faut-il déclarer son enfant au service d'état civil ?",
    choices: [
      "Dans les 5 jours suivant la naissance",
      "Dans les 3 jours suivant la naissance",
      "Dans les 15 jours suivant la naissance",
      "Dans le mois suivant la naissance"
    ],
    explication: "La déclaration de naissance doit être faite dans les 5 jours à la mairie du lieu de naissance.",
    page: 73
  },
  {
    id: "an-vs-008",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel numéro d'urgence permet d'appeler la police ?",
    choices: [
      "Le 17",
      "Le 15",
      "Le 18",
      "Le 119"
    ],
    explication: "Le 17 joint la police, le 15 le SAMU, le 18 les pompiers, le 112 est le numéro européen.",
    page: 62
  },
  {
    id: "an-vs-009",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    choices: [
      "Le 15",
      "Le 17",
      "Le 18",
      "Le 115"
    ],
    explication: "Le 15 est le numéro du SAMU (urgences médicales).",
    page: 62
  },
  {
    id: "an-vs-010",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Auprès de quelle institution les parents peuvent inscrire leurs enfants à l'école publique ?",
    choices: [
      "La mairie",
      "Le rectorat",
      "La préfecture",
      "La caisse d'allocations familiales"
    ],
    explication: "L'inscription à l'école maternelle et élémentaire publique se fait à la mairie de la commune.",
    page: 62
  },
  {
    id: "an-vs-011",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En cas de divorce, qui exerce l'autorité parentale ?",
    choices: [
      "Les deux parents, en commun",
      "Le parent qui a la garde de l'enfant",
      "La mère, sauf décision contraire du juge",
      "Le juge aux affaires familiales"
    ],
    explication: "Sauf décision contraire du juge, l'autorité parentale reste exercée conjointement après le divorce.",
    page: 73
  },
  {
    id: "an-vs-012",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    choices: [
      "L'aide juridictionnelle",
      "Le revenu de solidarité active (RSA)",
      "L'aide personnalisée au logement (APL)",
      "La complémentaire santé solidaire"
    ],
    explication: "L'aide juridictionnelle prend en charge tout ou partie des frais de justice et d'avocat.",
    page: 62
  },
  {
    id: "an-vs-013",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui peut demander le divorce de personnes mariées ?",
    choices: [
      "Chacun des deux époux",
      "Seulement le mari",
      "Seulement l'époux qui a les revenus les plus élevés",
      "Seulement les deux époux, d'un commun accord"
    ],
    explication: "Le divorce peut être demandé par l'un ou l'autre des époux, ou par les deux ensemble.",
    page: 73
  },
  {
    id: "an-vs-014",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    choices: [
      "L'Assurance maladie",
      "La caisse d'allocations familiales (CAF)",
      "Sa mutuelle uniquement",
      "Le centre communal d'action sociale"
    ],
    explication: "L'Assurance maladie (CPAM) rembourse les frais de santé, en partie complétés par une mutuelle.",
    page: 62
  },
  {
    id: "an-vs-015",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "La contraception :",
    choices: [
      "Est libre et peut être remboursée par l'Assurance maladie",
      "Est libre mais réservée aux personnes majeures",
      "Nécessite l'accord du conjoint",
      "Est libre mais jamais remboursée"
    ],
    explication: "La contraception est un droit ; elle est gratuite pour les moins de 26 ans.",
    page: 62
  },
  {
    id: "an-vs-016",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?",
    choices: [
      "Les soignants ne divulguent pas les informations médicales des patients",
      "Les patients doivent garder secrets leurs traitements",
      "Le médecin peut informer l'employeur de son patient",
      "Les dossiers médicaux sont accessibles à toute la famille"
    ],
    explication: "Le secret médical protège toutes les informations de santé du patient.",
    page: 62
  },
  {
    id: "an-vs-017",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quoi sert la carte Vitale ?",
    choices: [
      "À justifier de ses droits à l'Assurance maladie et être remboursé",
      "À prouver son identité",
      "À payer ses consultations",
      "À obtenir des aides au logement"
    ],
    explication: "La carte Vitale atteste des droits à l'Assurance maladie et permet le remboursement automatique des soins.",
    page: 62
  },
  {
    id: "an-vs-018",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quoi sert une mutuelle santé ?",
    choices: [
      "À compléter les remboursements de l'Assurance maladie",
      "À remplacer l'Assurance maladie",
      "À obtenir sa carte Vitale",
      "À payer moins d'impôts"
    ],
    explication: "La complémentaire santé rembourse tout ou partie des frais non couverts par la Sécurité sociale.",
    page: 62
  },
  {
    id: "an-vs-019",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que le tiers payant ?",
    choices: [
      "Ne pas avancer les frais médicaux",
      "Payer ses soins en trois fois sans frais",
      "Être remboursé par une tierce personne",
      "Une aide réservée aux personnes sans revenus"
    ],
    explication: "Avec le tiers payant, l'Assurance maladie et la mutuelle paient directement le professionnel de santé.",
    page: 62
  },
  {
    id: "an-vs-020",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "L'inscription à l'Assurance maladie est :",
    choices: [
      "Obligatoire pour toute personne travaillant ou résidant en France de façon stable",
      "Facultative pour les personnes sans emploi",
      "Réservée aux salariés et aux retraités",
      "Obligatoire seulement pour les Français"
    ],
    explication: "Toute personne résidant ou travaillant en France de manière stable et régulière relève de l'Assurance maladie.",
    page: 62
  },
  {
    id: "an-vs-021",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "L'avortement est-il possible en France ?",
    choices: [
      "Oui, l'IVG est un droit garanti par la loi",
      "Oui, mais avec l'accord du conjoint",
      "Oui, mais uniquement en cas de danger pour la mère",
      "Non, sauf à l'étranger"
    ],
    explication: "L'IVG est légale depuis la loi Veil de 1975 ; sa liberté est inscrite dans la Constitution depuis 2024.",
    page: 62
  },
  {
    id: "an-vs-022",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Travailler sans être déclaré est :",
    choices: [
      "Interdit : c'est du travail dissimulé, sanctionné par la loi",
      "Autorisé pour moins de 10 heures par semaine",
      "Autorisé si l'employeur et le salarié sont d'accord",
      "Autorisé pendant la période d'essai"
    ],
    explication: "Le travail non déclaré prive de protection sociale et expose employeur et salarié à des sanctions.",
    page: 70
  },
  {
    id: "an-vs-023",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que le SMIC ?",
    choices: [
      "Le salaire minimum légal en France",
      "Une aide versée aux personnes sans emploi",
      "Le salaire moyen en France",
      "Un impôt prélevé sur les salaires"
    ],
    explication: "Le SMIC (salaire minimum interprofessionnel de croissance) est le salaire horaire minimum légal.",
    page: 70
  },
  {
    id: "an-vs-024",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    choices: [
      "S'inscrire à France Travail",
      "S'inscrire à la mairie de sa commune",
      "Demander une autorisation à la préfecture",
      "S'inscrire à la caisse d'allocations familiales"
    ],
    explication: "France Travail (ex-Pôle emploi) accompagne la recherche d'emploi et verse les allocations chômage.",
    page: 70
  },
  {
    id: "an-vs-025",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la durée légale du temps de travail par semaine ?",
    choices: [
      "35 heures",
      "39 heures",
      "40 heures",
      "32 heures"
    ],
    explication: "La durée légale du travail à temps complet est de 35 heures par semaine.",
    page: 70
  },
  {
    id: "an-vs-026",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui peut demander un congé parental d'éducation ?",
    choices: [
      "Chacun des deux parents",
      "La mère uniquement",
      "Le parent qui gagne le moins",
      "Le père uniquement, à partir du deuxième enfant"
    ],
    explication: "Le congé parental est ouvert au père comme à la mère, après la naissance ou l'adoption.",
    page: 73
  },
  {
    id: "an-vs-027",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une personne étrangère, en situation régulière, peut créer son entreprise :",
    choices: [
      "Oui, elle en a le droit",
      "Oui, mais après 5 ans de résidence en France",
      "Oui, mais seulement avec un associé français",
      "Non, sauf si elle obtient la nationalité française"
    ],
    explication: "Toute personne en situation régulière peut créer une entreprise en France.",
    page: 70
  },
  {
    id: "an-vs-028",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une femme peut-elle créer son entreprise ?",
    choices: [
      "Oui, librement, sans aucune autorisation",
      "Oui, avec l'accord de son mari",
      "Oui, mais seulement si elle est célibataire",
      "Oui, avec une autorisation de la préfecture"
    ],
    explication: "Hommes et femmes sont égaux en droits : une femme entreprend librement.",
    page: 70
  },
  {
    id: "an-vs-029",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quels sont les textes qui définissent les règles au travail ?",
    choices: [
      "Le Code du travail et les conventions collectives",
      "Le règlement intérieur de l'entreprise seul",
      "Le Code civil et le Code pénal",
      "Le contrat de travail seul"
    ],
    explication: "Le Code du travail et les conventions collectives fixent les droits et devoirs au travail.",
    page: 70
  },
  {
    id: "an-vs-030",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    choices: [
      "Les litiges entre salariés et employeurs",
      "Les litiges entre commerçants",
      "Les litiges entre locataires et propriétaires",
      "Les litiges entre l'administration et les usagers"
    ],
    explication: "Les prud'hommes règlent les conflits individuels liés au contrat de travail.",
    page: 70
  },
  {
    id: "an-vs-031",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui a le droit de se syndiquer ?",
    choices: [
      "Tout salarié, quelle que soit sa nationalité",
      "Uniquement les salariés de nationalité française",
      "Uniquement les salariés en CDI",
      "Uniquement les salariés des grandes entreprises"
    ],
    explication: "La liberté syndicale est garantie à tous les travailleurs.",
    page: 70
  },
  {
    id: "an-vs-032",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Est-il possible de licencier une femme enceinte ou en congé maternité, en raison de sa grossesse ?",
    choices: [
      "Non, c'est interdit par la loi",
      "Oui, pendant la période d'essai",
      "Oui, si l'entreprise a moins de 10 salariés",
      "Oui, avec l'accord de l'inspection du travail"
    ],
    explication: "Le licenciement lié à la grossesse ou à la maternité est une discrimination interdite.",
    page: 70
  },
  {
    id: "an-vs-033",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "L'instruction des enfants est obligatoire de :",
    choices: [
      "3 à 16 ans",
      "6 à 16 ans",
      "3 à 18 ans",
      "6 à 18 ans"
    ],
    explication: "Depuis 2019, l'instruction est obligatoire de 3 à 16 ans, puis formation obligatoire jusqu'à 18 ans.",
    page: 73
  },
  {
    id: "an-vs-034",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    choices: [
      "Des sanctions pénales : amende et peine de prison",
      "Une amende administrative uniquement",
      "La suppression des allocations familiales",
      "Un simple rappel à la loi par le maire"
    ],
    explication: "Le non-respect de l'obligation d'instruction est un délit passible d'amende et d'emprisonnement.",
    page: 73
  },
  {
    id: "an-vs-035",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la définition de l'autorité parentale ?",
    choices: [
      "L'ensemble des droits et devoirs des parents pour protéger l'enfant et assurer son éducation",
      "Le pouvoir du père sur les décisions de la famille",
      "Le droit des parents de choisir le métier de leur enfant",
      "Le droit des parents d'infliger des châtiments corporels"
    ],
    explication: "L'autorité parentale vise l'intérêt de l'enfant : le protéger, l'entretenir et l'éduquer.",
    page: 73
  },
  {
    id: "an-vs-036",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel motif d'absence est accepté par l'école ?",
    choices: [
      "La maladie de l'enfant",
      "Un départ anticipé en vacances",
      "Un rendez-vous administratif d'un parent",
      "Une fête de famille"
    ],
    explication: "Seuls des motifs légitimes (maladie, réunion de famille exceptionnelle…) justifient une absence scolaire.",
    page: 73
  },
  {
    id: "an-vs-037",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    choices: [
      "16 ans",
      "18 ans",
      "14 ans",
      "15 ans"
    ],
    explication: "L'instruction est obligatoire jusqu'à 16 ans ; une formation est ensuite obligatoire jusqu'à 18 ans.",
    page: 73
  },
  {
    id: "an-vs-038",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quel âge commence l'instruction obligatoire des enfants ?",
    choices: [
      "3 ans",
      "6 ans",
      "4 ans",
      "5 ans"
    ],
    explication: "Depuis la rentrée 2019, l'instruction est obligatoire dès 3 ans.",
    page: 73
  },
  {
    id: "an-vs-039",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Comment s'appellent les établissements scolaires que les élèves intègrent après l'école élémentaire ?",
    choices: [
      "Les collèges",
      "Les lycées",
      "Les écoles moyennes",
      "Les classes préparatoires"
    ],
    explication: "Après l'école élémentaire, les élèves entrent au collège (de la 6e à la 3e).",
    page: 73
  },
  {
    id: "an-vs-040",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En tant que parent d'élève, il est possible de :",
    choices: [
      "Participer aux élections des représentants de parents d'élèves",
      "Choisir la classe et l'enseignant de son enfant",
      "Assister aux cours quand on le souhaite",
      "Modifier le règlement intérieur de l'école"
    ],
    explication: "Les parents participent à la vie de l'école, notamment via leurs représentants élus.",
    page: 73
  },
  {
    id: "an-vs-041",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle instruction est prévue pour les enfants qui ne parlent pas français ?",
    choices: [
      "Un accueil en classe spécifique avec un enseignement renforcé du français",
      "Une scolarisation repoussée jusqu'à ce qu'ils parlent français",
      "Des cours entièrement donnés dans leur langue d'origine",
      "Une inscription obligatoire dans une école privée"
    ],
    explication: "Les élèves allophones sont scolarisés et bénéficient d'unités pédagogiques dédiées (UPE2A) pour apprendre le français.",
    page: 73
  },
  {
    id: "an-vs-042",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "S'agissant de l'accueil des enfants en situation de handicap à l'école, laquelle des propositions est vraie ?",
    choices: [
      "Ils ont le droit d'être scolarisés, avec un accompagnement adapté",
      "Ils sont scolarisés uniquement dans des établissements spécialisés",
      "Ils peuvent être refusés si l'école n'est pas équipée",
      "Ils sont dispensés de l'obligation d'instruction"
    ],
    explication: "L'école inclusive garantit la scolarisation des élèves en situation de handicap, avec des accompagnants (AESH).",
    page: 73
  },
  {
    id: "an-vs-043",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Depuis le 1er juillet 2021, quelle est la durée du congé paternité ?",
    choices: [
      "25 jours",
      "11 jours",
      "14 jours",
      "30 jours"
    ],
    explication: "Le congé de paternité est de 25 jours calendaires (32 en cas de naissances multiples), en plus des 3 jours de congé de naissance.",
    page: 73
  },
  {
    id: "an-vs-044",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Est-ce possible de punir physiquement ses enfants ?",
    choices: [
      "Non, les violences éducatives ordinaires sont interdites",
      "Oui, une fessée reste autorisée",
      "Oui, si c'est dans un but éducatif",
      "Oui, jusqu'à ses 6 ans"
    ],
    explication: "Depuis la loi de 2019, l'autorité parentale s'exerce sans violences physiques ni psychologiques.",
    page: 73
  },
  {
    id: "p5-s1-qcm-001",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Chez qui doit-on obligatoirement signer un achat immobilier ?",
    choices: [
      "Chez le notaire",
      "À la mairie",
      "Chez un avocat",
      "À la préfecture"
    ],
    explication: "L'achat d'un bien immobilier doit obligatoirement faire l'objet d'un acte signé chez le notaire. Pour construire, il faut un permis de construire déposé en mairie.",
    page: 62
  },
  {
    id: "p5-s1-qcm-002",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que peut faire un locataire sans demander la permission au propriétaire ?",
    choices: [
      "Des travaux décoratifs, comme peindre les murs",
      "Abattre une cloison",
      "Changer les fenêtres",
      "Transformer la cuisine"
    ],
    explication: "Le locataire peut faire des travaux décoratifs. Pour d'autres travaux, il doit demander la permission au propriétaire (loi du 6 juillet 1989).",
    page: 62
  },
  {
    id: "p5-s1-qcm-003",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que risque-t-on en conduisant sans permis ?",
    choices: [
      "1 an de prison et 15 000 € d'amende",
      "Une simple amende de 135 €",
      "Un retrait de points",
      "Un avertissement"
    ],
    explication: "Conduire sans permis est un délit puni d'un an de prison et de 15 000 euros d'amende.",
    page: 64
  },
  {
    id: "p5-s1-qcm-004",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Peut-on se garer sur une place réservée aux personnes handicapées sans handicap ?",
    choices: [
      "Non, ces places sont réservées aux titulaires d'une carte « mobilité inclusion »",
      "Oui, pour moins de 5 minutes",
      "Oui, la nuit",
      "Oui, le dimanche"
    ],
    explication: "Ces places sont réservées aux personnes en situation de handicap, titulaires d'une carte « mobilité inclusion ».",
    page: 63
  },
  {
    id: "p5-s1-qcm-005",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "De quelle loi proviennent les règles anti-tabac ?",
    choices: [
      "La loi Évin (10 janvier 1991)",
      "La loi Veil",
      "La loi Taubira",
      "La loi Neuwirth"
    ],
    explication: "Les mesures encadrant le tabac proviennent de la loi Évin, votée le 10 janvier 1991 et complétée au fil du temps. Le non-respect est puni de 135 € d'amende.",
    page: 65
  },
  {
    id: "p5-s1-qcm-006",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Depuis le 1er juillet 2025, où est-il désormais interdit de fumer ?",
    choices: [
      "Dans les parcs, plages, abribus et abords des écoles",
      "Uniquement dans les restaurants",
      "Dans la rue partout en France",
      "Chez soi"
    ],
    explication: "Depuis le 1er juillet 2025, il est interdit de fumer dans les parcs et jardins publics, plages, abribus, abords des écoles et installations sportives pendant les heures d'ouverture.",
    page: 65
  },
  {
    id: "p5-s1-qcm-007",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Depuis 2024, quel tri est devenu obligatoire pour tous ?",
    choices: [
      "Le tri des déchets verts et alimentaires (compostage)",
      "Le tri du verre uniquement",
      "Le tri des piles",
      "Aucun tri n'est obligatoire"
    ],
    explication: "Depuis 2024, le tri des déchets verts et alimentaires (destinés au compostage) est obligatoire pour les particuliers et les professionnels.",
    page: 66
  },
  {
    id: "p5-s1-qcm-008",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "À quelle température maximale est-il conseillé de régler son chauffage ?",
    choices: [
      "19°C",
      "23°C",
      "25°C",
      "16°C"
    ],
    explication: "Parmi les gestes efficaces : régler son chauffage à 19°C maximum, son chauffe-eau à 55°C, et éteindre les appareils en veille.",
    page: 67
  },
  {
    id: "p5-s1-qcm-009",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "En quelle année la Sécurité sociale a-t-elle été créée ?",
    choices: [
      "1945",
      "1958",
      "1936",
      "1981"
    ],
    explication: "La Sécurité sociale a été créée en 1945, à la Libération, par volonté de solidarité nationale. Elle incarne le principe de fraternité.",
    page: 68
  },
  {
    id: "p5-s1-qcm-010",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel numéro appeler pour le SAMU ?",
    choices: [
      "Le 15",
      "Le 17",
      "Le 18",
      "Le 115"
    ],
    explication: "Le 15 est le SAMU, le 17 Police secours, le 18 les sapeurs-pompiers et le 115 l'hébergement d'urgence. Le 112, numéro d'urgence européen, permet aussi de joindre les secours. Ces appels sont gratuits, 24h/24.",
    page: 69
  },
  {
    id: "p5-s1-qcm-011",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel numéro est dédié aux victimes de violences conjugales ?",
    choices: [
      "Le 3919",
      "Le 3018",
      "Le 115",
      "Le 119"
    ],
    explication: "Le 3919 est dédié aux violences conjugales, le 3018 au harcèlement scolaire, le 119 à l'enfance maltraitée et le 115 à l'hébergement d'urgence.",
    page: 69
  },
  {
    id: "p5-s1-qcm-012",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que risque-t-on pour un excès de vitesse de plus de 50 km/h ?",
    choices: [
      "Un délit : jusqu'à 3 mois de prison, 3 750 € d'amende et 6 points en moins",
      "Une simple amende de 35 €",
      "Un simple avertissement oral",
      "La confiscation définitive du véhicule"
    ],
    explication: "Un excès de vitesse de plus de 50 km/h est un délit puni de 3 mois de prison maximum, d'une amende pouvant aller jusqu'à 3 750 €, d'un retrait de 6 points, voire d'une suspension du permis.",
    page: 63
  },
  {
    id: "p5-s1-qcm-013",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que risque-t-on en cas de non-paiement du titre de transport dans les transports collectifs ?",
    choices: [
      "Une amende",
      "Rien, c'est toléré",
      "La suspension du permis de conduire",
      "Une peine de prison"
    ],
    explication: "L'usage des transports collectifs est conditionné au paiement d'un titre de transport ; en cas de non-paiement, une amende peut être appliquée. Certaines villes les rendent toutefois gratuits.",
    page: 64
  },
  {
    id: "p5-s1-qcm-014",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel numéro permet de signaler un enfant disparu ?",
    choices: [
      "Le 116 000",
      "Le 119",
      "Le 197",
      "Le 3114"
    ],
    explication: "Le 116 000 est dédié aux enfants disparus, le 119 à l'enfance maltraitée, le 197 à l'alerte attentat et le 3114 à la prévention du suicide.",
    page: 69
  },
  {
    id: "p5-s2-qcm-001",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle est la durée légale du temps de travail hebdomadaire en France ?",
    choices: [
      "35 heures",
      "39 heures",
      "40 heures",
      "32 heures"
    ],
    explication: "Le code du travail fixe la durée légale du temps de travail à 35 heures par semaine.",
    page: 70
  },
  {
    id: "p5-s2-qcm-002",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que signifie SMIC ?",
    choices: [
      "Salaire minimum de croissance",
      "Salaire moyen interprofessionnel courant",
      "Seuil minimum d'imposition commun",
      "Salaire minimum d'insertion des cadres"
    ],
    explication: "Le SMIC (salaire minimum de croissance) est le salaire horaire minimum garanti en France.",
    page: 70
  },
  {
    id: "p5-s2-qcm-003",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel tribunal juge les litiges entre employeurs et salariés ?",
    choices: [
      "Le conseil de prud'hommes",
      "Le tribunal correctionnel",
      "Le tribunal de police",
      "La cour d'assises"
    ],
    explication: "En cas de litige entre un employeur et son salarié, le conseil de prud'hommes est compétent.",
    page: 70
  },
  {
    id: "p5-s2-qcm-004",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel contrat correspond à un emploi permanent ?",
    choices: [
      "Le CDI",
      "Le CDD",
      "L'intérim",
      "Le stage"
    ],
    explication: "Le CDI (contrat à durée indéterminée) correspond à un emploi permanent ; le CDD et l'intérim sont temporaires.",
    page: 71
  },
  {
    id: "p5-s2-qcm-005",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel organisme accompagne la recherche d'emploi et verse l'ARE ?",
    choices: [
      "France Travail",
      "La CPAM",
      "La CAF",
      "L'URSSAF"
    ],
    explication: "France Travail aide à trouver un emploi, propose des formations et peut verser l'Allocation d'aide au retour à l'emploi (ARE) sous conditions.",
    page: 71
  },
  {
    id: "p5-s2-qcm-006",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui accompagne spécifiquement les jeunes de moins de 25 ans vers l'emploi ?",
    choices: [
      "Les Missions Locales",
      "Les préfectures",
      "Les mairies",
      "Les régions"
    ],
    explication: "L'accompagnement des jeunes de moins de 25 ans est réalisé par les Missions Locales.",
    page: 71
  },
  {
    id: "p5-s2-qcm-007",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Faut-il être français pour créer une entreprise en France ?",
    choices: [
      "Non, chacun est libre de créer son entreprise",
      "Oui, c'est réservé aux Français",
      "Oui, sauf dans le commerce",
      "Non, mais uniquement pour les Européens"
    ],
    explication: "Chacun est libre de créer son entreprise en France ; il n'est pas nécessaire d'être français. Des démarches administratives sont toutefois exigées.",
    page: 71
  },
  {
    id: "p5-s2-qcm-008",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelles sont les trois fonctions publiques ?",
    choices: [
      "D'État, territoriale et hospitalière",
      "Nationale, régionale et communale",
      "Civile, militaire et judiciaire",
      "Administrative, technique et sociale"
    ],
    explication: "Un fonctionnaire travaille dans l'une des trois fonctions publiques : d'État, territoriale ou hospitalière. Le recrutement se fait par concours.",
    page: 72
  },
  {
    id: "p5-s2-qcm-009",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quels emplois publics sont fermés aux candidats européens non français ?",
    choices: [
      "Les emplois de « souveraineté » (défense, affaires étrangères)",
      "Les emplois hospitaliers",
      "Les emplois territoriaux",
      "Les emplois d'enseignant"
    ],
    explication: "Les candidats européens n'ont pas accès aux emplois dits de « souveraineté », comme la défense ou les affaires étrangères.",
    page: 72
  },
  {
    id: "p5-s2-qcm-010",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "À partir de combien de salariés une entreprise doit-elle avoir un règlement intérieur ?",
    choices: [
      "50",
      "10",
      "100",
      "20"
    ],
    explication: "Le règlement intérieur est rédigé par l'employeur dont l'entreprise compte au moins 50 salariés : il détaille les règles de santé, sécurité et comportement au travail.",
    page: 70
  },
  {
    id: "p5-s2-qcm-011",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Un employeur peut-il refuser d'embaucher un candidat en raison de sa religion ?",
    choices: [
      "Non, c'est une discrimination interdite",
      "Oui, s'il le justifie",
      "Oui, sans justification",
      "Oui, uniquement dans le secteur privé"
    ],
    explication: "Dans le cadre professionnel, aucune discrimination liée au genre, à la religion ou au physique n'est autorisée. Seule l'exigence d'un diplôme pour vérifier une qualification est possible.",
    page: 70
  },
  {
    id: "p5-s2-qcm-012",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel texte régit le statut des fonctionnaires ?",
    choices: [
      "Le Code général de la fonction publique",
      "Le Code du travail",
      "Le Code civil",
      "La Constitution"
    ],
    explication: "Le statut du fonctionnaire, agent public titulaire recruté par concours, est régi par le Code général de la fonction publique.",
    page: 72
  },
  {
    id: "p5-s3-qcm-001",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel mariage est reconnu par la loi française ?",
    choices: [
      "Le mariage civil célébré en mairie",
      "Le mariage religieux",
      "Le mariage civil ou religieux, au choix",
      "Le mariage devant notaire"
    ],
    explication: "En France, seul le mariage civil célébré en mairie par le maire ou un adjoint est reconnu par la loi.",
    page: 73
  },
  {
    id: "p5-s3-qcm-002",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "La polygamie est…",
    choices: [
      "interdite par la loi : c'est une infraction pénale",
      "autorisée si tous les époux sont d'accord",
      "tolérée pour les mariages célébrés à l'étranger",
      "une simple contravention"
    ],
    explication: "La polygamie (être marié à plusieurs personnes à la fois) est interdite par la loi et constitue une infraction pénale.",
    page: 73
  },
  {
    id: "p5-s3-qcm-003",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Sous combien de jours doit-on déclarer une naissance ?",
    choices: [
      "5 jours",
      "1 mois",
      "15 jours",
      "48 heures"
    ],
    explication: "La déclaration de la naissance des enfants doit être faite à l'état civil dans les 5 jours qui suivent la naissance.",
    page: 73
  },
  {
    id: "p5-s3-qcm-004",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Combien de temps dure le congé paternité depuis le 1er juillet 2021 ?",
    choices: [
      "28 jours",
      "14 jours",
      "11 jours",
      "3 mois"
    ],
    explication: "Depuis le 1er juillet 2021, le congé paternité dure 28 jours.",
    page: 73
  },
  {
    id: "p5-s3-qcm-005",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Un employeur peut-il licencier une salariée enceinte pour ce motif ?",
    choices: [
      "Non, la loi garantit à la femme de conserver son emploi",
      "Oui, avec un préavis",
      "Oui, si l'entreprise est en difficulté",
      "Oui, pendant la période d'essai uniquement"
    ],
    explication: "Pendant la grossesse et le congé maternité, la loi garantit à la femme de conserver son emploi : l'employeur ne peut pas la licencier pour ce motif.",
    page: 73
  },
  {
    id: "p5-s3-qcm-006",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qu'est-ce que la Convention Internationale des Droits de l'Enfant (1989) ?",
    choices: [
      "Un document de l'ONU signé par 196 États protégeant les enfants",
      "Une loi française sur l'école",
      "Un traité européen sur la famille",
      "Une charte de l'UNICEF sans valeur juridique"
    ],
    explication: "En 1989, 196 États ont signé la Convention Internationale des Droits de l'Enfant dans le cadre de l'ONU. C'est le fondement de l'action de l'UNICEF.",
    page: 74
  },
  {
    id: "p5-s3-qcm-007",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel article du code civil définit l'autorité parentale ?",
    choices: [
      "L'article 371-1",
      "L'article 433-5",
      "L'article 145",
      "L'article 4"
    ],
    explication: "L'article 371-1 du code civil définit l'autorité parentale : un ensemble de droits et devoirs visant à protéger l'intérêt de l'enfant.",
    page: 74
  },
  {
    id: "p5-s3-qcm-008",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Les châtiments corporels sur les enfants sont…",
    choices: [
      "interdits par la loi, comme toute maltraitance physique",
      "tolérés dans le cadre familial",
      "autorisés s'ils sont légers",
      "uniquement déconseillés"
    ],
    explication: "L'autorité parentale s'exerce sans violences physiques ou psychologiques. Toutes les maltraitances, comme l'excision et les châtiments corporels, sont interdites par la loi.",
    page: 74
  },
  {
    id: "p5-s3-qcm-009",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que regroupe l'école primaire ?",
    choices: [
      "L'école maternelle et l'école élémentaire",
      "Le collège et le lycée",
      "Uniquement le CP au CM2",
      "La crèche et la maternelle"
    ],
    explication: "L'école primaire regroupe l'école maternelle (dès 3 ans) et l'école élémentaire (6 à 11 ans).",
    page: 75
  },
  {
    id: "p5-s3-qcm-010",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "À quel âge la majorité numérique est-elle fixée ?",
    choices: [
      "15 ans",
      "13 ans",
      "16 ans",
      "18 ans"
    ],
    explication: "La loi du 7 juillet 2023 a instauré la majorité numérique à 15 ans : avant cet âge, on ne peut pas s'inscrire seul sur les réseaux sociaux.",
    page: 76
  },
  {
    id: "p5-s3-qcm-011",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Contre quoi les parents ont-ils l'obligation de protéger leur enfant, selon le code civil ?",
    choices: [
      "Le racket, le viol, la prostitution, les addictions et le harcèlement",
      "Uniquement les mauvaises fréquentations",
      "Uniquement les accidents domestiques",
      "Rien, cela relève uniquement de l'école"
    ],
    explication: "Les parents ont l'obligation de protéger l'enfant contre le racket, le viol, la prostitution, les addictions, le harcèlement et la violence, en surveillant notamment ses relations et son usage des réseaux sociaux.",
    page: 74
  },
  {
    id: "p5-s3-qcm-012",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que risquent les parents en cas de non-scolarisation de leur enfant sans motif valable ?",
    choices: [
      "Une amende et une peine de prison",
      "Rien, ce n'est pas sanctionné",
      "Un simple rappel à l'ordre",
      "La perte de la nationalité"
    ],
    explication: "L'instruction est obligatoire de 3 à 16 ans. Les parents qui ne respectent pas cette obligation peuvent être sanctionnés par une amende et une peine de prison.",
    page: 75
  },
];
