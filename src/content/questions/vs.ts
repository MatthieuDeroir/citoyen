import type { Question } from "../types";

/** Vivre dans la société française. */
export const vs: Question[] = [
  {
    id: "an-vs-001",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Où faut-il déclarer la naissance d'un enfant ?",
    choices: [
      "À la mairie du lieu de naissance",
      "À la mairie du domicile des parents",
      "À la préfecture du lieu de naissance",
      "À la CAF du domicile des parents"
    ],
    explication: "La naissance se déclare à l'état civil de la mairie de la commune où l'enfant est né, et non à celle du domicile des parents.",
    page: 62
  },
  {
    id: "an-vs-001-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-001",
    difficulty: 3,
    question: "Un enfant naît à la maternité de Lyon ; ses parents habitent à Villeurbanne. Où la naissance doit-elle être déclarée ?",
    choices: [
      "À la mairie de Lyon",
      "À la mairie de Villeurbanne",
      "À la préfecture du Rhône",
      "À la mairie de Villeurbanne ou de Lyon, au choix"
    ],
    explication: "La déclaration se fait à l'état civil de la mairie du lieu de naissance, ici Lyon, même si les parents habitent ailleurs.",
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
      "Ouvrir une cloison entre deux pièces",
      "Remplacer les fenêtres par du double vitrage",
      "Sous-louer une chambre du logement"
    ],
    explication: "Le locataire peut faire des travaux décoratifs, comme peindre les murs. Pour tout autre travail, même d'amélioration comme changer les fenêtres, il doit demander la permission au propriétaire (loi du 6 juillet 1989).",
    page: 62
  },
  {
    id: "an-vs-002-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-002",
    difficulty: 3,
    question: "Un locataire veut transformer sa cuisine. Que doit-il faire d'abord ?",
    choices: [
      "Demander la permission au propriétaire",
      "Déposer une déclaration préalable en mairie",
      "Prévenir son assurance habitation",
      "Rien, il est libre dans son logement"
    ],
    explication: "Hors travaux décoratifs, le locataire doit demander la permission au propriétaire (loi du 6 juillet 1989). La déclaration préalable en mairie concerne les modifications extérieures d'un logement.",
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
    explication: "Seul le mariage civil célébré en mairie par le maire ou un adjoint est reconnu par la loi. Le PACS est un contrat distinct : ce n'est pas un mariage.",
    page: 73
  },
  {
    id: "an-vs-003-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-003",
    difficulty: 3,
    question: "Dans quelle commune un mariage civil peut-il être célébré ?",
    choices: [
      "Celle où vit l'un des futurs mariés ou l'un de leurs parents",
      "Uniquement celle où vit la future épouse",
      "Uniquement celle où les futurs mariés sont nés",
      "N'importe quelle commune choisie par les futurs mariés"
    ],
    explication: "Le mariage est célébré par le maire ou un adjoint, à la mairie de la commune où vit au moins l'un des futurs mariés ou l'un de leurs parents.",
    page: 73
  },
  {
    id: "an-vs-004",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Le stationnement sur une place réservée aux personnes handicapées :",
    choices: [
      "Est interdit et puni d'une amende",
      "Est toléré pour un arrêt de moins de 5 minutes",
      "Est autorisé avec les feux de détresse allumés",
      "Est autorisé la nuit, quand la place est libre"
    ],
    explication: "Ces places sont réservées aux titulaires de la carte « mobilité inclusion » : les occuper sans carte, même brièvement, expose à une amende.",
    page: 62
  },
  {
    id: "an-vs-004-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-004",
    difficulty: 2,
    question: "Qui peut stationner sur une place réservée aux personnes handicapées ?",
    choices: [
      "Le titulaire d'une carte « mobilité inclusion »",
      "Toute personne âgée de plus de 75 ans",
      "Une femme enceinte de plus de 6 mois",
      "Le conducteur d'un véhicule de livraison"
    ],
    explication: "Ces places sont réservées aux personnes en situation de handicap titulaires de la carte « mobilité inclusion ». L'âge ou la grossesse ne suffisent pas.",
    page: 62
  },
  {
    id: "an-vs-005",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Si une machine à laver est cassée, il est possible de :",
    choices: [
      "La faire réparer ou la déposer en déchetterie pour recyclage",
      "La déposer sur le trottoir devant chez soi",
      "La mettre dans le bac de tri des emballages",
      "La laisser dans le local poubelles de l'immeuble"
    ],
    explication: "Les appareils électroménagers se réparent ou se déposent en déchèterie. Les abandonner dans la rue ou dans la nature est un dépôt sauvage puni d'une amende.",
    page: 62
  },
  {
    id: "an-vs-005-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-005",
    difficulty: 2,
    question: "Que risque une personne qui abandonne un vieux réfrigérateur au bord d'un chemin ?",
    choices: [
      "Une amende, car c'est un dépôt sauvage",
      "Rien, si l'appareil est déposé hors de la ville",
      "Rien, si elle prévient la mairie ensuite",
      "Seulement l'obligation de venir le reprendre"
    ],
    explication: "Jeter des déchets dans la rue ou dans la nature, hors des dispositifs de collecte, est un dépôt sauvage interdit et puni d'une amende. Les encombrants vont en déchèterie.",
    page: 62
  },
  {
    id: "an-vs-006",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Dans quel cas faut-il déclarer son enfant au service d'état civil ?",
    choices: [
      "Dans tous les cas, pour toute naissance",
      "Seulement si les parents sont mariés",
      "Seulement si l'un des parents est français",
      "Seulement si l'enfant est né à l'hôpital"
    ],
    explication: "La déclaration des naissances à l'état civil est obligatoire dans tous les cas, quelle que soit la situation des parents.",
    page: 73
  },
  {
    id: "an-vs-006-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-006",
    difficulty: 2,
    question: "Que dresse le service d'état civil de la mairie ?",
    choices: [
      "Les actes de naissance, de mariage et de décès",
      "Les titres de séjour et les cartes de résident",
      "Les permis de construire et de démolir",
      "Les actes de vente immobilière"
    ],
    explication: "L'état civil dresse les actes d'état civil : la déclaration des naissances, des mariages et des décès y est obligatoire. Les titres de séjour relèvent de la préfecture, les ventes immobilières du notaire.",
    page: 73
  },
  {
    id: "an-vs-007",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quand faut-il déclarer son enfant au service d'état civil ?",
    choices: [
      "Dans les 5 jours suivant la naissance",
      "Dans les 3 jours suivant la naissance",
      "Dans les 8 jours suivant la naissance",
      "Dans les 15 jours suivant la naissance"
    ],
    explication: "La déclaration de naissance est obligatoire dans les 5 jours qui suivent la naissance, ni 3 ni 8 ni 15.",
    page: 73
  },
  {
    id: "an-vs-007-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-007",
    difficulty: 3,
    question: "Un père déclare la naissance de sa fille 10 jours après l'accouchement. Que faut-il en penser ?",
    choices: [
      "Il a dépassé le délai légal de 5 jours",
      "Il respecte le délai légal de 15 jours",
      "Il respecte le délai légal d'un mois",
      "Il n'existe aucun délai légal"
    ],
    explication: "La déclaration de naissance doit être faite dans les 5 jours qui suivent la naissance : à 10 jours, le délai est dépassé.",
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
      "Le 115"
    ],
    explication: "Le 17 joint Police secours ; le 15 est le SAMU, le 18 les sapeurs-pompiers et le 115 l'hébergement d'urgence.",
    page: 62
  },
  {
    id: "an-vs-008-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-008",
    difficulty: 2,
    question: "Le 17 permet de joindre :",
    choices: [
      "Police secours",
      "Les sapeurs-pompiers",
      "Le SAMU",
      "L'hébergement d'urgence"
    ],
    explication: "Le 17 est le numéro de Police secours. Les pompiers sont au 18, le SAMU au 15 et l'hébergement d'urgence au 115.",
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
    explication: "Le 15 est le SAMU (urgences médicales) ; le 17 joint la police, le 18 les pompiers et le 115 l'hébergement d'urgence.",
    page: 62
  },
  {
    id: "an-vs-009-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-009",
    difficulty: 3,
    question: "Le 15, le 17 et le 18 permettent de joindre respectivement :",
    choices: [
      "Le SAMU, la police, les pompiers",
      "La police, le SAMU, les pompiers",
      "Le SAMU, les pompiers, la police",
      "Les pompiers, la police, le SAMU"
    ],
    explication: "15 : SAMU ; 17 : Police secours ; 18 : sapeurs-pompiers. Le 112 est le numéro d'urgence européen.",
    page: 62
  },
  {
    id: "an-vs-010",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Auprès de quelle institution les parents peuvent inscrire leurs enfants à l'école publique ?",
    choices: [
      "La mairie",
      "Le rectorat",
      "Le département",
      "La préfecture"
    ],
    explication: "Les mairies sont compétentes pour gérer les inscriptions des enfants à l'école publique, et non le rectorat, le département ou la préfecture.",
    page: 62
  },
  {
    id: "an-vs-010-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-010",
    difficulty: 2,
    question: "Une famille s'installe dans une commune avec un enfant de 4 ans. Où doit-elle l'inscrire à l'école maternelle publique ?",
    choices: [
      "À la mairie de la commune",
      "Au rectorat de l'académie",
      "À la préfecture du département",
      "Au conseil départemental"
    ],
    explication: "Les mairies sont compétentes pour gérer les inscriptions des enfants à l'école publique, maternelle comme élémentaire.",
    page: 62
  },
  {
    id: "an-vs-011",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "En cas de divorce, qui exerce l'autorité parentale ?",
    choices: [
      "Les deux parents, en commun",
      "Le parent chez qui l'enfant réside",
      "La mère, sauf décision contraire du juge",
      "Le parent qui verse la pension"
    ],
    explication: "Après une séparation, l'autorité parentale continue d'être exercée par les deux parents, sauf décision de justice contraire. Le lieu de résidence de l'enfant n'y change rien.",
    page: 73
  },
  {
    id: "an-vs-011-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-011",
    difficulty: 3,
    question: "Après un divorce, l'enfant vit chez sa mère. Le père garde-t-il l'autorité parentale ?",
    choices: [
      "Oui, sauf décision de justice contraire",
      "Non, elle revient au parent chez qui vit l'enfant",
      "Oui, mais seulement pendant les vacances scolaires",
      "Non, sauf s'il verse une pension alimentaire"
    ],
    explication: "L'autorité parentale continue d'être exercée par les deux parents après la séparation, sauf décision de justice contraire, quel que soit le lieu de résidence de l'enfant.",
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
    explication: "L'aide juridictionnelle prend en charge tout ou partie des frais de justice et d'avocat. Le RSA, l'APL et la complémentaire santé solidaire ont d'autres objets.",
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
      "Seulement les deux époux, d'un commun accord",
      "Seulement l'époux qui a quitté le domicile",
      "Seulement l'époux qui a les revenus les plus élevés"
    ],
    explication: "Chacun des époux peut demander le divorce, seul ou ensemble. Le consentement mutuel n'est qu'une des voies possibles, pas une condition.",
    page: 73
  },
  {
    id: "an-vs-013-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-013",
    difficulty: 3,
    question: "Devant qui un divorce par consentement mutuel peut-il être conclu ?",
    choices: [
      "Devant un notaire",
      "Devant le maire",
      "Devant le procureur de la République",
      "Devant un officier d'état civil"
    ],
    explication: "Les époux peuvent divorcer soit devant un juge, soit par consentement mutuel devant un notaire. Le maire célèbre le mariage mais ne prononce pas le divorce.",
    page: 73
  },
  {
    id: "an-vs-014",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    choices: [
      "L'Assurance maladie",
      "La caisse d'allocations familiales (CAF)",
      "L'URSSAF",
      "Sa mutuelle uniquement"
    ],
    explication: "L'Assurance maladie, par la CPAM, rembourse les frais de santé ; la mutuelle ne fait que compléter. La CAF verse les prestations familiales et l'URSSAF collecte les cotisations.",
    page: 62
  },
  {
    id: "an-vs-014-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-014",
    difficulty: 3,
    question: "Quelle caisse effectue le remboursement des frais de santé d'un assuré ?",
    choices: [
      "La caisse primaire d'assurance maladie (CPAM)",
      "La caisse d'allocations familiales (CAF)",
      "La caisse d'assurance retraite et de santé au travail (CARSAT)",
      "L'Union de recouvrement des cotisations (URSSAF)"
    ],
    explication: "Le remboursement des frais de santé est effectué par la CPAM. La CAF verse les prestations familiales, la CARSAT gère la retraite et l'URSSAF collecte les cotisations.",
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
    explication: "La contraception est libre et peut être remboursée par l'Assurance maladie ; elle ne nécessite l'accord de personne, pas même du conjoint.",
    page: 62
  },
  {
    id: "an-vs-016",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?",
    choices: [
      "Les soignants ne divulguent pas les informations médicales des patients",
      "Les patients doivent garder secrets leurs traitements",
      "Le médecin peut renseigner l'employeur sur la maladie",
      "Les informations médicales sont partagées avec le conjoint"
    ],
    explication: "Les personnels de santé ont l'obligation de garder secrètes les informations médicales d'un patient, y compris vis-à-vis de son employeur ou de sa famille.",
    page: 62
  },
  {
    id: "an-vs-016-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-016",
    difficulty: 2,
    question: "L'employeur d'un salarié appelle son médecin pour connaître sa maladie. Que doit faire le médecin ?",
    choices: [
      "Refuser, car il est tenu au secret médical",
      "Répondre, car l'employeur paie le salaire",
      "Répondre si le salarié est en arrêt de travail",
      "Indiquer le diagnostic mais pas le traitement"
    ],
    explication: "Les personnels de santé ont l'obligation de garder secrètes les informations médicales d'un patient : c'est le principe de confidentialité, qui vaut aussi face à l'employeur.",
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
      "À prouver son identité auprès de l'administration",
      "À payer ses consultations sans avancer d'argent",
      "À justifier de ses droits aux aides de la CAF"
    ],
    explication: "La carte Vitale justifie les droits à l'Assurance maladie ; le remboursement est effectué par la CPAM. Ce n'est ni une pièce d'identité ni un moyen de paiement.",
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
      "À ouvrir ses droits à l'Assurance maladie",
      "À financer la Sécurité sociale"
    ],
    explication: "La mutuelle complémentaire aide à payer les frais que la Sécurité sociale ne prend pas entièrement en charge. Elle ne remplace pas l'Assurance maladie, à laquelle l'inscription est obligatoire.",
    page: 62
  },
  {
    id: "an-vs-018-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-018",
    difficulty: 3,
    question: "Que doit proposer un employeur à l'ensemble de ses salariés en matière de santé ?",
    choices: [
      "Une complémentaire santé collective, sauf exceptions",
      "Une carte Vitale professionnelle",
      "Le remboursement intégral des consultations",
      "L'inscription à la CPAM à sa place"
    ],
    explication: "Les employeurs ont l'obligation de proposer une couverture complémentaire santé collective à l'ensemble de leurs salariés, sauf exceptions.",
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
      "Être remboursé par sa mutuelle seule",
      "Partager les frais avec son employeur"
    ],
    explication: "Le tiers payant permet au patient de ne pas avancer la part remboursée par l'Assurance maladie : le professionnel de santé est payé directement.",
    page: 62
  },
  {
    id: "an-vs-019-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-019",
    difficulty: 3,
    question: "Avec le tiers payant, quelle part des frais le patient n'a-t-il pas à avancer ?",
    choices: [
      "La part remboursée par l'Assurance maladie",
      "La totalité des frais, dépassements compris",
      "La part qui reste à sa charge",
      "Seulement la part prise en charge par l'employeur"
    ],
    explication: "Le tiers payant permet au patient de ne pas avancer la part remboursée par l'Assurance maladie lors d'une consultation.",
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
      "Facultative pour les personnes qui ont une mutuelle privée",
      "Obligatoire seulement pour les salariés et les retraités",
      "Obligatoire seulement pour les personnes de nationalité française"
    ],
    explication: "Tous les résidents en France ont l'obligation d'être inscrits à l'Assurance maladie, quelle que soit leur nationalité ou leur situation professionnelle. La mutuelle ne fait que compléter.",
    page: 62
  },
  {
    id: "an-vs-020-v1",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-020",
    difficulty: 2,
    question: "Une personne étrangère s'installe durablement en France. Doit-elle s'inscrire à l'Assurance maladie ?",
    choices: [
      "Oui, tous les résidents en ont l'obligation",
      "Non, seulement si elle occupe un emploi",
      "Non, seulement après sa naturalisation",
      "Non, si elle garde l'assurance de son pays"
    ],
    explication: "Tous les résidents en France ont l'obligation d'être inscrits à l'Assurance maladie, selon leur situation et dans les conditions fixées par la loi.",
    page: 62
  },
  {
    id: "an-vs-021",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
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
    difficulty: 1,
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
    difficulty: 1,
    question: "Qu'est-ce que le SMIC ?",
    choices: [
      "Le salaire minimum légal en France",
      "Le salaire moyen constaté en France",
      "Le salaire minimum des fonctionnaires",
      "Une allocation versée aux chômeurs"
    ],
    explication: "Le SMIC (salaire minimum de croissance) est le salaire horaire minimum garanti en France aux salariés du secteur privé.",
    page: 70
  },
  {
    id: "an-vs-023-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-023",
    difficulty: 3,
    question: "À partir de quel âge un salarié du secteur privé doit-il percevoir au moins le SMIC ?",
    choices: [
      "18 ans (16 ans avec autorisation parentale)",
      "16 ans (14 ans avec autorisation parentale)",
      "18 ans, sans aucune exception",
      "21 ans (18 ans avec autorisation parentale)"
    ],
    explication: "Les salariés du privé âgés d'au moins 18 ans (16 ans avec autorisation parentale ou s'ils sont émancipés) doivent percevoir au moins le SMIC.",
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
      "S'inscrire auprès de l'URSSAF",
      "S'inscrire à la caisse d'allocations familiales",
      "S'inscrire à la CPAM de son domicile"
    ],
    explication: "Pour être accompagné dans la recherche d'emploi et indemnisé en cas de perte d'emploi, il faut s'inscrire à France Travail. L'URSSAF, la CAF et la CPAM ont d'autres missions.",
    page: 70
  },
  {
    id: "an-vs-024-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-024",
    difficulty: 3,
    question: "Quel organisme peut verser l'allocation d'aide au retour à l'emploi (ARE) ?",
    choices: [
      "France Travail",
      "La caisse d'allocations familiales (CAF)",
      "La caisse primaire d'assurance maladie (CPAM)",
      "L'URSSAF"
    ],
    explication: "France Travail peut verser chaque mois l'ARE aux personnes ayant perdu leur emploi, sous conditions. La CAF verse les prestations familiales, pas l'allocation chômage.",
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
    explication: "Le code du travail fixe la durée légale du travail à 35 heures par semaine ; 39 heures était l'ancienne durée légale.",
    page: 70
  },
  {
    id: "an-vs-025-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-025",
    difficulty: 3,
    question: "Quel texte fixe la durée légale du travail à 35 heures par semaine ?",
    choices: [
      "Le code du travail",
      "La convention collective",
      "Le règlement intérieur",
      "Le contrat de travail"
    ],
    explication: "Le code du travail fixe les règles pour tous, dont la durée légale de 35 heures. Les conventions collectives adaptent ces règles à une activité donnée.",
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
      "Le parent qui a la garde de l'enfant"
    ],
    explication: "Tout salarié, père ou mère, peut bénéficier d'un congé parental d'éducation après la naissance ou l'adoption d'un enfant.",
    page: 73
  },
  {
    id: "an-vs-026-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-026",
    difficulty: 2,
    question: "Que permet le congé parental d'éducation ?",
    choices: [
      "Interrompre ou réduire son activité pour élever son enfant",
      "Toucher une prime de naissance versée par l'employeur",
      "S'absenter une journée pour déclarer la naissance",
      "Être dispensé de travail pendant la grossesse"
    ],
    explication: "Le congé parental d'éducation permet au parent salarié d'interrompre ou de réduire son activité professionnelle pour élever son enfant.",
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
    explication: "Chacun est libre de créer son entreprise en France : il n'est pas nécessaire d'être français, ni d'attendre une durée de résidence.",
    page: 70
  },
  {
    id: "an-vs-027-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-027",
    difficulty: 2,
    question: "Parmi ces démarches, laquelle est exigée pour créer une entreprise ?",
    choices: [
      "Immatriculer l'entreprise",
      "Obtenir la nationalité française",
      "Trouver un associé français",
      "Obtenir l'accord du maire"
    ],
    explication: "Créer une entreprise exige notamment d'enregistrer les statuts, d'immatriculer l'entreprise, de publier dans un journal d'annonces légales et de déclarer le siège social. La nationalité française n'est pas requise.",
    page: 70
  },
  {
    id: "an-vs-028",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
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
      "Le règlement intérieur et le Code civil",
      "Le Code civil et le Code de commerce",
      "Le contrat de travail et le Code pénal"
    ],
    explication: "Le droit du travail repose sur le code du travail, les conventions collectives et, dans les entreprises d'au moins 50 salariés, le règlement intérieur. Le Code civil et le Code de commerce n'en sont pas la base.",
    page: 70
  },
  {
    id: "an-vs-029-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-029",
    difficulty: 3,
    question: "Qu'est-ce qu'une convention collective ?",
    choices: [
      "Un accord négocié entre représentants des employeurs et des salariés",
      "Un règlement rédigé par l'employeur seul pour son entreprise",
      "Une loi votée par le Parlement pour tous les salariés",
      "Un contrat signé entre un salarié et son employeur"
    ],
    explication: "Les conventions collectives sont des accords négociés entre les organisations représentant les employeurs et les salariés d'une activité donnée. Le règlement intérieur, lui, est rédigé par l'employeur.",
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
    explication: "Le conseil de prud'hommes juge les litiges entre un employeur et son salarié. Les litiges entre commerçants relèvent du tribunal de commerce.",
    page: 70
  },
  {
    id: "an-vs-030-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-030",
    difficulty: 2,
    question: "Un salarié conteste son licenciement. Quelle juridiction est compétente ?",
    choices: [
      "Le conseil de prud'hommes",
      "Le tribunal de commerce",
      "Le tribunal administratif",
      "Le tribunal correctionnel"
    ],
    explication: "En cas de litige entre un employeur et son salarié, le conseil de prud'hommes est compétent.",
    page: 70
  },
  {
    id: "an-vs-031",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Qui a le droit de se syndiquer ?",
    choices: [
      "Tout salarié, quelle que soit sa nationalité",
      "Uniquement les salariés de nationalité française",
      "Uniquement les salariés en CDI",
      "Uniquement les salariés des grandes entreprises"
    ],
    explication: "Chaque travailleur, sans condition, a le droit de rejoindre une organisation syndicale pour le représenter au travail.",
    page: 70
  },
  {
    id: "an-vs-031-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-031",
    difficulty: 2,
    question: "Un salarié étranger en CDD veut adhérer à un syndicat. Que dit la loi ?",
    choices: [
      "Il en a le droit, sans condition",
      "Il doit attendre la fin de sa période d'essai",
      "Il doit obtenir l'accord de son employeur",
      "Il doit d'abord être embauché en CDI"
    ],
    explication: "Chaque travailleur, sans condition de nationalité ni de contrat, a le droit de rejoindre une organisation syndicale.",
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
    explication: "Pendant la grossesse et le congé maternité, la loi garantit à la femme de conserver son emploi : l'employeur ne peut pas la licencier pour ce motif, même en période d'essai.",
    page: 70
  },
  {
    id: "an-vs-032-v1",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-032",
    difficulty: 3,
    question: "Pendant quelle période la loi garantit-elle à une salariée de conserver son emploi ?",
    choices: [
      "Pendant la grossesse et le congé maternité",
      "Seulement pendant le congé maternité",
      "Seulement à partir du 6e mois de grossesse",
      "Seulement si elle est en CDI"
    ],
    explication: "La protection couvre toute la période de grossesse et le congé maternité : l'employeur ne peut pas licencier la salariée pour ce motif.",
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
    explication: "L'instruction est obligatoire de 3 à 16 ans. Le piège « 6 ans » correspond à l'ancien début de l'obligation, avant 2019.",
    page: 73
  },
  {
    id: "an-vs-033-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-033",
    difficulty: 2,
    question: "Des parents veulent attendre les 6 ans de leur enfant pour l'inscrire à l'école. Est-ce possible ?",
    choices: [
      "Non, l'instruction est obligatoire dès 3 ans",
      "Oui, l'instruction n'est obligatoire qu'à 6 ans",
      "Oui, si l'enfant ne parle pas encore français",
      "Oui, avec l'accord écrit du maire"
    ],
    explication: "L'instruction est obligatoire de 3 à 16 ans : l'enfant doit être instruit dès 3 ans, sous peine de sanctions pour les parents.",
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
    explication: "Les parents qui ne respectent pas l'obligation d'instruction peuvent être sanctionnés par une amende et une peine de prison : ce sont des sanctions pénales, pas seulement administratives.",
    page: 73
  },
  {
    id: "an-vs-035",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle est la définition de l'autorité parentale ?",
    choices: [
      "L'ensemble des droits et devoirs des parents pour protéger l'enfant et assurer son éducation",
      "Le pouvoir reconnu au père de prendre seul les décisions importantes pour toute la famille",
      "Le droit des parents de décider des études et du métier de leur enfant, même devenu majeur",
      "L'ensemble des règles de comportement imposées aux enfants par l'école et par l'État"
    ],
    explication: "L'article 371-1 du code civil définit l'autorité parentale comme un ensemble de droits et de devoirs visant à protéger l'intérêt de l'enfant, jusqu'à sa majorité ou son émancipation.",
    page: 73
  },
  {
    id: "an-vs-035-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-035",
    difficulty: 3,
    question: "Jusqu'à quand l'autorité parentale appartient-elle aux parents ?",
    choices: [
      "Jusqu'à la majorité ou l'émancipation de l'enfant",
      "Jusqu'à la fin de l'instruction obligatoire, à 16 ans",
      "Jusqu'à la majorité numérique, à 15 ans",
      "Jusqu'à la fin des études de l'enfant"
    ],
    explication: "L'autorité parentale appartient aux parents jusqu'à ce que l'enfant devienne adulte : majorité ou émancipation.",
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
      "Un voyage dans le pays d'origine des parents",
      "La garde d'un frère ou d'une sœur plus jeune"
    ],
    explication: "Seules les absences pour raisons de santé ou familiales (mariage, enterrement…) sont acceptées. Des vacances ou un voyage ne sont pas des motifs légitimes.",
    page: 73
  },
  {
    id: "an-vs-036-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-036",
    difficulty: 3,
    question: "Une élève manque l'école pour assister au mariage de sa sœur. Cette absence est-elle acceptée ?",
    choices: [
      "Oui, c'est un motif familial accepté",
      "Non, seule la maladie est acceptée",
      "Non, sauf accord écrit du maire",
      "Non, sauf si le mariage a lieu à l'étranger"
    ],
    explication: "Les absences pour raisons de santé ou familiales (mariage, enterrement…) sont acceptées par les établissements scolaires.",
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
    explication: "L'instruction est obligatoire jusqu'à 16 ans. 18 ans est l'âge de la majorité, pas la fin de l'instruction obligatoire.",
    page: 73
  },
  {
    id: "an-vs-037-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-037",
    difficulty: 2,
    question: "Un adolescent de 15 ans veut arrêter l'école. Que dit la loi ?",
    choices: [
      "Il ne peut pas : l'instruction est obligatoire jusqu'à 16 ans",
      "Il peut, si ses deux parents donnent leur accord écrit",
      "Il peut, s'il a obtenu son diplôme de fin de collège",
      "Il peut, s'il a trouvé un emploi déclaré à temps plein"
    ],
    explication: "L'instruction est obligatoire jusqu'à 16 ans : ni l'accord des parents ni un emploi ne permettent d'y déroger avant cet âge.",
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
    explication: "L'instruction est obligatoire dès 3 ans, âge d'entrée à l'école maternelle ; 6 ans est l'âge d'entrée à l'école élémentaire.",
    page: 73
  },
  {
    id: "an-vs-038-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-038",
    difficulty: 2,
    question: "Dans quel établissement commence l'instruction obligatoire ?",
    choices: [
      "L'école maternelle",
      "L'école élémentaire",
      "La crèche",
      "Le cours préparatoire (CP)"
    ],
    explication: "L'école maternelle accueille les enfants au début de l'instruction obligatoire, qui débute à 3 ans. Le CP marque l'entrée à l'école élémentaire, vers 6 ans.",
    page: 73
  },
  {
    id: "an-vs-039",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Comment s'appellent les établissements scolaires que les élèves intègrent après l'école élémentaire ?",
    choices: [
      "Les collèges",
      "Les lycées",
      "Les écoles primaires",
      "Les cours moyens"
    ],
    explication: "Après l'école élémentaire (du CP au CM2), les élèves entrent au collège pour quatre années, puis au lycée. Le cours moyen fait partie de l'école élémentaire.",
    page: 73
  },
  {
    id: "an-vs-039-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-039",
    difficulty: 2,
    question: "Combien d'années les élèves passent-ils au collège ?",
    choices: [
      "Quatre années",
      "Trois années",
      "Cinq années",
      "Deux années"
    ],
    explication: "Le collège accueille tous les enfants à l'issue de l'école élémentaire pour quatre années ; le lycée dure ensuite trois ans.",
    page: 73
  },
  {
    id: "an-vs-040",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "En tant que parent d'élève, il est possible de :",
    choices: [
      "Participer aux élections des représentants de parents d'élèves",
      "Choisir la classe et l'enseignant de son enfant chaque année",
      "Assister aux cours de son enfant quand on le souhaite",
      "Fixer avec le directeur les dates de vacances de l'école"
    ],
    explication: "Les parents font partie de la communauté éducative : ils peuvent se porter candidats aux élections de représentants de parents d'élèves ou rejoindre une association de parents.",
    page: 73
  },
  {
    id: "an-vs-040-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-040",
    difficulty: 3,
    question: "Au sein de l'école, les parents d'élèves font partie :",
    choices: [
      "De la communauté éducative",
      "De l'équipe pédagogique",
      "Du corps des inspecteurs",
      "Du conseil municipal"
    ],
    explication: "Les parents font partie de la communauté éducative. L'équipe pédagogique (professeurs, ATSEM, animateurs…) est leur interlocutrice, mais ils n'en font pas partie.",
    page: 73
  },
  {
    id: "an-vs-041",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle instruction est prévue pour les enfants qui ne parlent pas français ?",
    choices: [
      "Un accueil en classe spécifique avec un enseignement renforcé du français",
      "Une scolarisation repoussée jusqu'à ce qu'ils parlent français",
      "Des cours donnés uniquement dans leur langue d'origine",
      "Une dispense de l'obligation d'instruction"
    ],
    explication: "Les enfants allophones sont accueillis à l'école comme les autres : ils y apprennent le français ainsi que les autres matières.",
    page: 73
  },
  {
    id: "an-vs-041-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-041",
    difficulty: 3,
    question: "Un enfant allophone est un enfant :",
    choices: [
      "Dont la langue maternelle n'est pas le français",
      "Qui a des difficultés d'audition",
      "Qui parle déjà plusieurs langues étrangères",
      "Qui est arrivé en France depuis moins d'un an"
    ],
    explication: "Un enfant allophone est un enfant dont la langue maternelle n'est pas le français. Il est accueilli à l'école comme les autres et y apprend le français.",
    page: 73
  },
  {
    id: "an-vs-042",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "S'agissant de l'accueil des enfants en situation de handicap à l'école, laquelle des propositions est vraie ?",
    choices: [
      "Ils ont le droit d'être scolarisés, avec un accompagnement adapté",
      "Ils sont scolarisés uniquement dans des établissements spécialisés",
      "Ils peuvent être refusés si l'école n'est pas équipée",
      "Ils sont dispensés de l'obligation d'instruction"
    ],
    explication: "Les enfants en situation de handicap ont droit à la même vie que les autres et peuvent bénéficier d'un emploi du temps aménagé pour suivre leurs soins.",
    page: 73
  },
  {
    id: "an-vs-042-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-042",
    difficulty: 2,
    question: "De quel aménagement un enfant en situation de handicap peut-il bénéficier à l'école ?",
    choices: [
      "Un emploi du temps aménagé pour suivre ses soins",
      "Une dispense des contrôles et des examens",
      "Un enseignement donné uniquement à domicile",
      "Une scolarité réservée aux matinées"
    ],
    explication: "Les enfants en situation de handicap peuvent bénéficier d'un emploi du temps aménagé à l'école pour suivre leurs soins.",
    page: 73
  },
  {
    id: "an-vs-043",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
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
    id: "an-vs-043-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-043",
    difficulty: 3,
    question: "Selon le livret, depuis le 1er juillet 2021, combien de jours au total un père peut-il s'arrêter à la naissance (congé de naissance de 3 jours compris) ?",
    choices: [
      "28 jours",
      "14 jours",
      "21 jours",
      "35 jours"
    ],
    explication: "Le livret indique un congé paternité de 28 jours depuis le 1er juillet 2021 : 25 jours de congé paternité s'ajoutent aux 3 jours du congé de naissance.",
    page: 73
  },
  {
    id: "an-vs-044",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Est-ce possible de punir physiquement ses enfants ?",
    choices: [
      "Non, les violences éducatives ordinaires sont interdites",
      "Oui, une fessée légère reste autorisée par la loi",
      "Oui, si la punition a un but éducatif",
      "Oui, tant que l'enfant a moins de 6 ans"
    ],
    explication: "L'autorité parentale s'exerce sans violences physiques ou psychologiques : les châtiments corporels sont interdits par la loi.",
    page: 73
  },
  {
    id: "an-vs-044-v1",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-vs-044",
    difficulty: 2,
    question: "Selon le code civil, l'autorité parentale s'exerce :",
    choices: [
      "Sans violences physiques ni psychologiques",
      "Sans violences physiques graves",
      "Avec des punitions physiques légères tolérées",
      "Selon les traditions de chaque famille"
    ],
    explication: "L'autorité parentale s'exerce sans violences physiques ou psychologiques : même légers, les châtiments corporels sont interdits.",
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
      "Chez un avocat",
      "Chez un agent immobilier",
      "À la mairie"
    ],
    explication: "L'achat d'un bien immobilier doit obligatoirement faire l'objet d'un acte signé chez le notaire. La mairie intervient pour le permis de construire, pas pour la vente.",
    page: 62
  },
  {
    id: "p5-s1-qcm-003",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Que risque-t-on en conduisant sans permis ?",
    choices: [
      "1 an de prison et 15 000 € d'amende",
      "3 ans de prison et 9 000 € d'amende",
      "3 mois de prison et 3 750 € d'amende",
      "6 mois de prison et 7 500 € d'amende"
    ],
    explication: "Conduire sans permis est puni d'un an de prison et de 15 000 € d'amende. 3 ans et 9 000 € sanctionnent l'alcool au-delà de 0,8 g/l, 3 mois et 3 750 € l'excès de vitesse de plus de 50 km/h.",
    page: 64
  },
  {
    id: "p5-s1-qcm-005",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "De quelle loi proviennent les règles anti-tabac ?",
    choices: [
      "La loi Évin (10 janvier 1991)",
      "La loi Veil (17 janvier 1975)",
      "La loi Neuwirth (28 décembre 1967)",
      "La loi Taubira (17 mai 2013)"
    ],
    explication: "Les règles anti-tabac proviennent de la loi Évin du 10 janvier 1991. La loi Veil concerne l'IVG, la loi Taubira le mariage pour tous, la loi Neuwirth la contraception.",
    page: 65
  },
  {
    id: "p5-s1-qcm-006",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Depuis le 1er juillet 2025, où est-il désormais interdit de fumer ?",
    choices: [
      "Dans les parcs, plages, abribus et abords des écoles",
      "Dans les rues piétonnes, marchés et terrasses ouvertes",
      "Dans les voitures, balcons et cours d'immeuble",
      "Dans les rues, parkings et jardins privés"
    ],
    explication: "Depuis le 1er juillet 2025, il est interdit de fumer dans les parcs et jardins publics, sur les plages, dans les abribus, aux abords des écoles et des installations sportives, pendant les heures d'ouverture. Fumer dans la rue reste autorisé.",
    page: 65
  },
  {
    id: "p5-s1-qcm-007",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Depuis 2024, quel tri est devenu obligatoire pour tous ?",
    choices: [
      "Le tri des déchets verts et alimentaires (compostage)",
      "Le tri du verre et des emballages en plastique",
      "Le tri des textiles et des chaussures",
      "Le tri des piles et des ampoules"
    ],
    explication: "Depuis 2024, le tri des déchets verts et alimentaires, destinés au compostage, est obligatoire pour les particuliers et les professionnels.",
    page: 66
  },
  {
    id: "p5-s1-qcm-008",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "À quelle température maximale est-il conseillé de régler son chauffage ?",
    choices: [
      "19°C",
      "20°C",
      "21°C",
      "18°C"
    ],
    explication: "Le livret conseille de régler son chauffage à 19°C maximum (et son chauffe-eau à 55°C).",
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
    explication: "La Sécurité sociale a été créée en 1945, à la Libération, par volonté de solidarité nationale. 1958 est l'année de la Constitution de la Ve République.",
    page: 68
  },
  {
    id: "p5-s1-qcm-011",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
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
    difficulty: 3,
    question: "Que risque-t-on pour un excès de vitesse de plus de 50 km/h ?",
    choices: [
      "Un délit : jusqu'à 3 mois de prison, 3 750 € d'amende et 6 points en moins",
      "Un délit : jusqu'à 1 an de prison, 15 000 € d'amende et 6 points en moins",
      "Une contravention : 135 € d'amende et 4 points en moins",
      "Un délit : jusqu'à 3 ans de prison, 9 000 € d'amende et 8 points en moins"
    ],
    explication: "Un excès de plus de 50 km/h est un délit : jusqu'à 3 mois de prison, 3 750 € d'amende et 6 points retirés, voire la suspension du permis. 1 an et 15 000 € sanctionnent la conduite sans permis.",
    page: 63
  },
  {
    id: "p5-s1-qcm-014",
    theme: "vs",
    notion: "p5-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
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
      "Le contrat d'intérim",
      "Le contrat saisonnier"
    ],
    explication: "Le CDI (contrat à durée indéterminée) correspond à un emploi permanent ; le CDD et l'intérim servent à un travail temporaire.",
    page: 71
  },
  {
    id: "p5-s2-qcm-006",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qui accompagne spécifiquement les jeunes de moins de 25 ans vers l'emploi ?",
    choices: [
      "Les Missions Locales",
      "Les chambres des métiers (CMA)",
      "Les caisses d'allocations familiales",
      "Les chambres de commerce (CCI)"
    ],
    explication: "Les Missions Locales accompagnent les jeunes de moins de 25 ans vers l'emploi. La CMA et la CCI aident à créer une entreprise.",
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
    difficulty: 3,
    question: "Quels emplois publics sont fermés aux candidats européens non français ?",
    choices: [
      "Les emplois de « souveraineté » (défense, affaires étrangères)",
      "Les emplois hospitaliers (médecins, infirmiers)",
      "Les emplois territoriaux (mairies, départements)",
      "Les emplois d'enseignant (écoles, collèges)"
    ],
    explication: "Les candidats européens n'ont pas accès aux emplois dits de « souveraineté », comme la défense ou les affaires étrangères ; les autres emplois publics leur sont ouverts.",
    page: 72
  },
  {
    id: "p5-s2-qcm-010",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
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
    id: "p5-s2-qcm-012",
    theme: "vs",
    notion: "p5-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel texte régit le statut des fonctionnaires ?",
    choices: [
      "Le Code général de la fonction publique",
      "Le Code du travail",
      "Le Code de l'action sociale et des familles",
      "Le Code civil"
    ],
    explication: "Le statut du fonctionnaire est régi par le Code général de la fonction publique, et non par le Code du travail qui s'applique aux salariés du privé.",
    page: 72
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
    id: "p5-s3-qcm-006",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qu'est-ce que la Convention Internationale des Droits de l'Enfant (1989) ?",
    choices: [
      "Un document de l'ONU signé par 196 États protégeant les enfants",
      "Un traité du Conseil de l'Europe signé par 46 États",
      "Une loi française votée pour protéger les enfants",
      "Une charte de l'UNICEF signée par 27 États"
    ],
    explication: "En 1989, 196 États ont signé la Convention internationale des droits de l'enfant dans le cadre de l'ONU. Elle est le fondement de l'action de l'UNICEF, qui dépend de l'ONU.",
    page: 74
  },
  {
    id: "p5-s3-qcm-007",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel article du code civil définit l'autorité parentale ?",
    choices: [
      "L'article 371-1",
      "L'article 145",
      "L'article 148",
      "L'article 212"
    ],
    explication: "L'article 371-1 du code civil définit l'autorité parentale. Les articles 145 et 148 concernent l'âge du mariage.",
    page: 74
  },
  {
    id: "p5-s3-qcm-009",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Que regroupe l'école primaire ?",
    choices: [
      "L'école maternelle et l'école élémentaire",
      "L'école élémentaire et le collège",
      "La crèche et l'école maternelle",
      "L'école maternelle seule"
    ],
    explication: "L'école primaire regroupe l'école maternelle (dès 3 ans) et l'école élémentaire (du CP au CM2) ; le collège relève du secondaire.",
    page: 75
  },
  {
    id: "p5-s3-qcm-010",
    theme: "vs",
    notion: "p5-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
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
];
