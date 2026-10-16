import type { Question } from "../types";

/** Système institutionnel et politique. */
export const si: Question[] = [
  {
    id: "an-si-001",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Comment est désigné le Premier ministre ?",
    choices: [
      "Il est nommé par le président de la République",
      "Il est élu par l'Assemblée nationale",
      "Il est élu au suffrage universel direct",
      "Il est désigné par le parti majoritaire"
    ],
    explication: "Le président de la République nomme le Premier ministre (article 8 de la Constitution).",
    page: 16
  },
  {
    id: "an-si-002",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui peut se présenter aux élections présidentielles ?",
    choices: [
      "Tout citoyen français majeur remplissant les conditions, dont 500 parrainages d'élus",
      "Tout citoyen français ayant recueilli 500 000 signatures d'électeurs",
      "Tout citoyen français âgé d'au moins 35 ans",
      "Tout citoyen français ayant déjà exercé un mandat d'élu"
    ],
    explication: "Il faut être français, électeur, âgé d'au moins 18 ans et réunir 500 parrainages d'élus.",
    page: 16
  },
  {
    id: "an-si-003",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À qui appartient la souveraineté nationale ?",
    choices: [
      "Au peuple",
      "Au Parlement",
      "Au président de la République",
      "À l'État"
    ],
    explication: "« La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. »",
    page: 16
  },
  {
    id: "an-si-004",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui est élu lors des élections municipales ?",
    choices: [
      "Les conseillers municipaux",
      "Le maire, élu directement par les habitants",
      "Les conseillers départementaux",
      "Les conseillers régionaux"
    ],
    explication: "Les électeurs de la commune élisent les conseillers municipaux, qui élisent ensuite le maire.",
    page: 16
  },
  {
    id: "an-si-005",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "L'inscription sur les listes électorales est :",
    choices: [
      "Indispensable pour pouvoir voter",
      "Automatique pour toute personne résidant en France",
      "Facultative si l'on présente sa carte d'identité",
      "Valable pour une seule élection"
    ],
    explication: "Pour voter, il faut être inscrit sur les listes électorales de sa commune (inscription automatique à 18 ans pour les jeunes recensés).",
    page: 16
  },
  {
    id: "an-si-006",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle condition est nécessaire pour voter aux élections présidentielles ?",
    choices: [
      "Être français, majeur et inscrit sur les listes électorales",
      "Être français, majeur et payer l'impôt sur le revenu",
      "Être majeur et résider en France depuis cinq ans",
      "Être français et avoir au moins 21 ans"
    ],
    explication: "Le droit de vote appartient aux citoyens français majeurs inscrits sur les listes électorales et jouissant de leurs droits civiques.",
    page: 16
  },
  {
    id: "an-si-007",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle condition faut-il remplir pour être candidat aux élections municipales ?",
    choices: [
      "Avoir au moins 18 ans et être électeur ou contribuable de la commune",
      "Être né dans la commune et y résider",
      "Avoir au moins 23 ans et y habiter depuis 5 ans",
      "Être inscrit dans la commune depuis au moins 10 ans"
    ],
    explication: "Tout électeur français ou citoyen de l'UE d'au moins 18 ans, attaché à la commune, peut se présenter.",
    page: 16
  },
  {
    id: "an-si-008",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Parmi ces autorités, laquelle est élue ?",
    choices: [
      "Le député",
      "Le préfet",
      "Le Premier ministre",
      "Le recteur d'académie"
    ],
    explication: "Le député est élu au suffrage universel direct ; préfet, recteur et commissaire sont nommés.",
    page: 16
  },
  {
    id: "an-si-009",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelles sont les fonctions du maire ?",
    choices: [
      "Diriger l'administration communale et être officier d'état civil",
      "Diriger la police nationale et la gendarmerie de la commune",
      "Nommer les conseillers municipaux et les adjoints",
      "Juger les litiges entre les habitants de la commune"
    ],
    explication: "Le maire gère la commune, célèbre les mariages et représente l'État pour l'état civil.",
    page: 19
  },
  {
    id: "an-si-010",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une personne, n'ayant pas d'accès à internet, veut s'inscrire sur les listes électorales pour pouvoir voter aux prochaines élections politiques. Où peut-elle s'inscrire ?",
    choices: [
      "À la mairie de sa commune",
      "À la préfecture de son département",
      "Au tribunal judiciaire",
      "Au bureau de poste"
    ],
    explication: "L'inscription sur les listes électorales se fait en mairie (ou en ligne).",
    page: 16
  },
  {
    id: "an-si-011",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quel âge peut-on devenir électeur ?",
    choices: [
      "18 ans",
      "16 ans",
      "21 ans",
      "17 ans"
    ],
    explication: "Le droit de vote s'acquiert à la majorité, fixée à 18 ans.",
    page: 16
  },
  {
    id: "an-si-012",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En France, est-ce obligatoire de voter ?",
    choices: [
      "Non, voter est un droit, pas une obligation",
      "Oui, sous peine d'amende",
      "Oui, pour l'élection présidentielle uniquement",
      "Non, sauf pour les élections municipales"
    ],
    explication: "Le vote est un droit et un devoir civique, mais il n'est pas juridiquement obligatoire.",
    page: 16
  },
  {
    id: "an-si-013",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "A-t-on le droit de ne pas respecter une loi ?",
    choices: [
      "Non, la loi s'impose à tous",
      "Oui, si elle est contraire à ses convictions",
      "Oui, tant qu'elle n'a pas été approuvée par référendum",
      "Oui, si l'on n'a pas voté pour les députés qui l'ont adoptée"
    ],
    explication: "Nul n'est au-dessus de la loi : elle s'applique à tous, on peut seulement militer pour la changer.",
    page: 16
  },
  {
    id: "an-si-014",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Comment sont désignés les députés ?",
    choices: [
      "Ils sont élus au suffrage universel direct",
      "Ils sont élus au suffrage universel indirect",
      "Ils sont élus par les conseillers municipaux",
      "Ils sont nommés par le Premier ministre"
    ],
    explication: "Les députés sont élus pour 5 ans au suffrage universel direct, lors des élections législatives.",
    page: 16
  },
  {
    id: "an-si-015",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui vote les lois ?",
    choices: [
      "Le Parlement (Assemblée nationale et Sénat)",
      "Le gouvernement",
      "Le président de la République",
      "Le Conseil d'État"
    ],
    explication: "Le pouvoir législatif appartient au Parlement, composé de l'Assemblée nationale et du Sénat.",
    page: 16
  },
  {
    id: "an-si-016",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    choices: [
      "Législatif, exécutif et judiciaire",
      "Législatif, exécutif et constitutionnel",
      "Exécutif, judiciaire et médiatique",
      "Législatif, administratif et judiciaire"
    ],
    explication: "Le pouvoir législatif fait la loi, l'exécutif l'applique, le judiciaire la fait respecter.",
    page: 16
  },
  {
    id: "an-si-017",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que l'État de droit ?",
    choices: [
      "Un État où la loi s'applique à tous, y compris aux pouvoirs publics",
      "Un État où le gouvernement peut déroger aux lois",
      "Un État où les juges sont élus par le peuple",
      "Un État dirigé par un président élu"
    ],
    explication: "Dans un État de droit, chacun — citoyens comme institutions — est soumis au droit.",
    page: 16
  },
  {
    id: "an-si-018",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelles sont les durées du mandat du conseil municipal et du maire ?",
    choices: [
      "6 ans",
      "5 ans",
      "4 ans",
      "7 ans"
    ],
    explication: "Le conseil municipal, et donc le maire qu'il élit, est renouvelé tous les 6 ans.",
    page: 19
  },
  {
    id: "an-si-019",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui est élu lors des élections législatives ?",
    choices: [
      "Les députés",
      "Les sénateurs",
      "Les conseillers départementaux",
      "Les députés européens"
    ],
    explication: "Les législatives désignent les 577 députés de l'Assemblée nationale.",
    page: 16
  },
  {
    id: "an-si-020",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la durée du mandat du Président de la République française ?",
    choices: [
      "5 ans",
      "7 ans",
      "6 ans",
      "4 ans"
    ],
    explication: "Depuis le référendum de 2000, le mandat présidentiel est de 5 ans (quinquennat).",
    page: 16
  },
  {
    id: "an-si-021",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la durée du mandat des députés ?",
    choices: [
      "5 ans",
      "6 ans",
      "4 ans",
      "7 ans"
    ],
    explication: "Les députés sont élus pour 5 ans, sauf dissolution de l'Assemblée nationale.",
    page: 16
  },
  {
    id: "an-si-022",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la durée du mandat des sénateurs ?",
    choices: [
      "6 ans",
      "9 ans",
      "5 ans",
      "7 ans"
    ],
    explication: "Les sénateurs sont élus pour 6 ans au suffrage universel indirect, le Sénat étant renouvelé par moitié tous les 3 ans.",
    page: 16
  },
  {
    id: "an-si-023",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui dirige l'action du gouvernement ?",
    choices: [
      "Le Premier ministre",
      "Le président de l'Assemblée nationale",
      "Le ministre de l'Intérieur",
      "Le président du Sénat"
    ],
    explication: "Le Premier ministre dirige l'action du gouvernement (article 21 de la Constitution).",
    page: 16
  },
  {
    id: "an-si-024",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En France, est-ce possible d'adhérer à un parti politique ?",
    choices: [
      "Oui, librement",
      "Oui, mais seulement à partir de 21 ans",
      "Oui, après déclaration à la mairie",
      "Non, c'est réservé aux élus"
    ],
    explication: "Les partis politiques se forment et exercent leur activité librement (article 4 de la Constitution).",
    page: 16
  },
  {
    id: "an-si-025",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui sanctionne l'auteur d'un vol ?",
    choices: [
      "La justice (un tribunal)",
      "La police",
      "Le maire de la commune",
      "Le préfet"
    ],
    explication: "Seule l'autorité judiciaire peut juger et sanctionner les infractions : nul ne peut se faire justice soi-même.",
    page: 16
  },
  {
    id: "an-si-026",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui gère les collèges publics ?",
    choices: [
      "Le département",
      "La commune",
      "La région",
      "Le rectorat"
    ],
    explication: "Les communes gèrent les écoles, les départements les collèges et les régions les lycées.",
    page: 19
  },
  {
    id: "an-si-027",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui gère les écoles primaires et maternelles publiques ?",
    choices: [
      "La commune",
      "Le département",
      "La région",
      "La préfecture"
    ],
    explication: "La commune construit et entretient les écoles maternelles et élémentaires.",
    page: 19
  },
  {
    id: "an-si-028",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Comment sont désignés les maires ?",
    choices: [
      "Ils sont élus par le conseil municipal",
      "Ils sont élus directement par les habitants",
      "Ils sont nommés par le préfet",
      "Ils sont élus par les conseillers départementaux"
    ],
    explication: "Après les élections municipales, le conseil municipal élit le maire parmi ses membres.",
    page: 19
  },
  {
    id: "an-si-029",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle collectivité territoriale est responsable des transports régionaux ?",
    choices: [
      "La région",
      "Le département",
      "La commune",
      "L'intercommunalité"
    ],
    explication: "La région organise notamment les transports régionaux (TER) et gère les lycées.",
    page: 19
  },
  {
    id: "an-si-030",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est l'une des voies possibles pour modifier la Constitution ?",
    choices: [
      "Le référendum",
      "Une loi ordinaire votée par l'Assemblée nationale",
      "Un décret du président de la République",
      "Une décision du Conseil constitutionnel"
    ],
    explication: "La Constitution peut être révisée par référendum ou par le Parlement réuni en Congrès.",
    page: 16
  },
  {
    id: "an-si-031",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui assure l'intérim du président de la République en cas de décès ?",
    choices: [
      "Le président du Sénat",
      "Le Premier ministre",
      "Le président de l'Assemblée nationale",
      "Le président du Conseil constitutionnel"
    ],
    explication: "En cas de vacance de la présidence, le président du Sénat assure l'intérim.",
    page: 16
  },
  {
    id: "an-si-032",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le rôle du Conseil constitutionnel ?",
    choices: [
      "Vérifier que les lois sont conformes à la Constitution",
      "Contrôler l'action du gouvernement",
      "Juger les litiges entre l'administration et les citoyens",
      "Conseiller le gouvernement sur ses projets de loi"
    ],
    explication: "Le Conseil constitutionnel contrôle la constitutionnalité des lois et veille à la régularité des grandes élections.",
    page: 16
  },
  {
    id: "an-si-033",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle condition est obligatoire pour se présenter à l'élection présidentielle ?",
    choices: [
      "Avoir la nationalité française",
      "Avoir au moins 35 ans",
      "Être membre d'un parti politique",
      "Avoir déjà exercé un mandat électif"
    ],
    explication: "Le candidat doit être français, électeur, âgé d'au moins 18 ans et parrainé par 500 élus.",
    page: 16
  },
  {
    id: "an-si-034",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Combien y a-t-il de départements en France ?",
    choices: [
      "101",
      "96",
      "100",
      "95"
    ],
    explication: "La France compte 101 départements, dont 5 d'outre-mer.",
    page: 19
  },
  {
    id: "an-si-035",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Comment est organisé le découpage administratif de la France ?",
    choices: [
      "En communes, départements et régions",
      "En communes, cantons et provinces",
      "En régions et États fédérés",
      "En départements et provinces"
    ],
    explication: "Le territoire est organisé en collectivités : communes, départements et régions.",
    page: 19
  },
  {
    id: "an-si-036",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui représente l'État dans un département ?",
    choices: [
      "Le préfet",
      "Le président du conseil départemental",
      "Le maire du chef-lieu",
      "Le sénateur du département"
    ],
    explication: "Le préfet, nommé par le président de la République, représente l'État dans le département.",
    page: 19
  },
  {
    id: "an-si-037",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le rôle du Président de la République ?",
    choices: [
      "Chef de l'État, il veille au respect de la Constitution et à l'indépendance nationale",
      "Chef du gouvernement, il dirige l'action des ministres et l'administration",
      "Chef du Parlement, il vote les lois et contrôle le gouvernement",
      "Chef de la justice, il nomme et révoque librement les juges"
    ],
    explication: "Le président est le chef de l'État, garant des institutions, chef des armées, et il nomme le Premier ministre.",
    page: 16
  },
  {
    id: "an-si-038",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le rôle du Premier ministre ?",
    choices: [
      "Diriger l'action du gouvernement et assurer l'exécution des lois",
      "Présider le Conseil des ministres et promulguer les lois",
      "Présider l'Assemblée nationale et fixer son ordre du jour",
      "Commander les armées et négocier les traités"
    ],
    explication: "Nommé par le président, le Premier ministre conduit la politique de la Nation avec son gouvernement.",
    page: 16
  },
  {
    id: "an-si-039",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le rôle du Défenseur des droits ?",
    choices: [
      "Défendre les citoyens face aux administrations et lutter contre les discriminations",
      "Défendre les accusés devant les tribunaux",
      "Contrôler la conformité des lois à la Constitution",
      "Représenter la France devant les cours européennes"
    ],
    explication: "Autorité indépendante, le Défenseur des droits protège les droits des usagers et combat les discriminations.",
    page: 16
  },
  {
    id: "an-si-040",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En quelle année la citoyenneté européenne a-t-elle été créée ?",
    choices: [
      "1992",
      "1957",
      "1979",
      "1986"
    ],
    explication: "La citoyenneté européenne a été instituée par le traité de Maastricht en 1992.",
    page: 22
  },
  {
    id: "an-si-041",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le dernier État à avoir intégré l'Union européenne en 2013 ?",
    choices: [
      "La Croatie",
      "La Bulgarie",
      "La Slovénie",
      "La Serbie"
    ],
    explication: "La Croatie est devenue le 28e État membre de l'UE le 1er juillet 2013.",
    page: 22
  },
  {
    id: "an-si-042",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui a composé l'hymne de l'Union européenne ?",
    choices: [
      "Ludwig van Beethoven",
      "Wolfgang Amadeus Mozart",
      "Joseph Haydn",
      "Franz Schubert"
    ],
    explication: "L'« Ode à la joie », extraite de la 9e symphonie de Beethoven, est l'hymne européen.",
    page: 22
  },
  {
    id: "an-si-043",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quand est célébrée la journée de l'Europe ?",
    choices: [
      "Le 9 mai",
      "Le 8 mai",
      "Le 1er mai",
      "Le 25 mars"
    ],
    explication: "Le 9 mai commémore la déclaration Schuman de 1950, acte fondateur de la construction européenne.",
    page: 22
  },
  {
    id: "an-si-044",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Où est le siège de la Banque centrale européenne ?",
    choices: [
      "À Francfort",
      "À Bruxelles",
      "À Luxembourg",
      "À Strasbourg"
    ],
    explication: "La BCE, qui gère l'euro, siège à Francfort-sur-le-Main, en Allemagne.",
    page: 22
  },
  {
    id: "an-si-045",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Où est le siège de la Commission européenne ?",
    choices: [
      "À Bruxelles",
      "À Strasbourg",
      "À Luxembourg",
      "À La Haye"
    ],
    explication: "La Commission européenne siège à Bruxelles, en Belgique.",
    page: 22
  },
  {
    id: "an-si-046",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui siège au Parlement européen ?",
    choices: [
      "Les députés européens élus par les citoyens de l'Union",
      "Les ministres des États membres",
      "Les commissaires européens",
      "Des députés désignés par les parlements nationaux"
    ],
    explication: "Les eurodéputés, élus tous les 5 ans au suffrage universel direct, siègent au Parlement européen.",
    page: 22
  },
  {
    id: "an-si-047",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Les citoyens de l'Union européenne peuvent-ils voter aux élections locales dans un autre État de l'Union ?",
    choices: [
      "Oui, aux élections municipales et européennes de leur État de résidence",
      "Oui, à toutes les élections, y compris nationales",
      "Non, ils votent uniquement dans leur pays d'origine",
      "Oui, mais uniquement aux élections européennes"
    ],
    explication: "La citoyenneté européenne donne le droit de vote aux municipales et aux européennes dans l'État de résidence.",
    page: 22
  },
  {
    id: "an-si-048",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    choices: [
      "27",
      "28",
      "25",
      "26"
    ],
    explication: "Depuis le départ du Royaume-Uni en 2020, l'UE compte 27 États membres.",
    page: 22
  },
  {
    id: "an-si-049",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
    choices: [
      "1992",
      "1957",
      "1986",
      "1999"
    ],
    explication: "Signé en 1992, le traité de Maastricht crée l'Union européenne et la citoyenneté européenne.",
    page: 22
  },
  {
    id: "an-si-050",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel traité concerne la construction de l'Union européenne ?",
    choices: [
      "Le traité de Maastricht",
      "Le traité de Versailles",
      "Le traité de l'Élysée",
      "Le traité de l'Atlantique Nord"
    ],
    explication: "Le traité de Maastricht (1992) fonde l'Union européenne ; Versailles (1919) clôt la Première Guerre mondiale.",
    page: 22
  },
  {
    id: "an-si-051",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel État a quitté l'Union européenne en 2020 ?",
    choices: [
      "Le Royaume-Uni",
      "La Suisse",
      "Le Danemark",
      "La Norvège"
    ],
    explication: "Après le référendum de 2016, le Royaume-Uni a quitté l'UE le 31 janvier 2020 (Brexit).",
    page: 22
  },
  {
    id: "an-si-052",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la devise de l'Union européenne ?",
    choices: [
      "« Unie dans la diversité »",
      "« Unie dans la paix »",
      "« L'union fait la force »",
      "« Liberté, Égalité, Fraternité »"
    ],
    explication: "La devise de l'UE est « Unie dans la diversité ».",
    page: 22
  },
  {
    id: "an-si-053",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est l'hymne de l'Union européenne ?",
    choices: [
      "L'Ode à la joie",
      "Le Beau Danube bleu",
      "Le Boléro",
      "L'Hymne à la paix"
    ],
    explication: "L'hymne européen est l'« Ode à la joie » de Beethoven.",
    page: 22
  },
  {
    id: "an-si-054",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "De quoi est composé le drapeau européen ?",
    choices: [
      "De douze étoiles dorées en cercle sur fond bleu",
      "De vingt-sept étoiles dorées en cercle sur fond bleu",
      "De douze étoiles blanches en cercle sur fond bleu",
      "De douze étoiles dorées en carré sur fond blanc"
    ],
    explication: "Les douze étoiles en cercle symbolisent l'unité et l'harmonie entre les peuples d'Europe.",
    page: 22
  },
  {
    id: "an-si-055",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui élit les députés européens ?",
    choices: [
      "Les citoyens de l'Union européenne, au suffrage universel direct",
      "Les parlements nationaux de chaque État membre",
      "Les chefs d'État et de gouvernement",
      "Les citoyens de l'Union, au suffrage universel indirect"
    ],
    explication: "Les eurodéputés sont élus tous les 5 ans par les citoyens de chaque État membre.",
    page: 22
  },
  {
    id: "an-si-056",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Où est le siège du Parlement européen ?",
    choices: [
      "À Strasbourg",
      "À Bruxelles",
      "À Francfort",
      "À La Haye"
    ],
    explication: "Le siège officiel du Parlement européen est à Strasbourg, en France.",
    page: 22
  },
  {
    id: "p2-s1-qcm-001",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Pour combien de temps le Président de la République est-il élu ?",
    choices: [
      "5 ans, renouvelables une fois",
      "7 ans, renouvelables une fois",
      "5 ans, sans limite de mandats",
      "6 ans, renouvelables une fois"
    ],
    explication: "Le Président de la République est élu au suffrage universel direct pour cinq ans, renouvelables une fois.",
    page: 16
  },
  {
    id: "p2-s1-qcm-002",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Combien y a-t-il de députés à l'Assemblée nationale ?",
    choices: [
      "577",
      "348",
      "500",
      "925"
    ],
    explication: "Les députés sont au nombre de 577, élus au suffrage universel direct tous les cinq ans. Les sénateurs sont 348.",
    page: 16
  },
  {
    id: "p2-s1-qcm-003",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Comment les sénateurs sont-ils élus ?",
    choices: [
      "Au suffrage universel indirect, pour 6 ans",
      "Au suffrage universel direct, pour 5 ans",
      "Nommés par le Président de la République",
      "Au suffrage universel direct, pour 6 ans"
    ],
    explication: "Les 348 sénateurs sont élus au suffrage universel indirect (par des élus) pour un mandat de six ans.",
    page: 16
  },
  {
    id: "p2-s1-qcm-004",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel est le rôle du pouvoir législatif ?",
    choices: [
      "Élaborer et voter les lois",
      "Mettre en œuvre les lois",
      "Rendre la justice",
      "Contrôler les élections"
    ],
    explication: "Le pouvoir législatif (députés et sénateurs) élabore et vote les lois ; l'exécutif les met en œuvre ; le judiciaire rend la justice.",
    page: 16
  },
  {
    id: "p2-s1-qcm-005",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui veille à la conformité des lois avec la Constitution ?",
    choices: [
      "Le Conseil constitutionnel",
      "Le Sénat",
      "Le Premier ministre",
      "La Cour de cassation"
    ],
    explication: "Le Conseil constitutionnel est chargé de veiller à la conformité des lois avec la Constitution et contrôle la régularité des élections nationales.",
    page: 17
  },
  {
    id: "p2-s1-qcm-006",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "En quelle année les femmes françaises ont-elles obtenu le droit de vote ?",
    choices: [
      "1944",
      "1848",
      "1958",
      "1936"
    ],
    explication: "Les femmes françaises ont obtenu le droit de vote en avril 1944 et ont voté pour la première fois un an plus tard, en avril 1945.",
    page: 17
  },
  {
    id: "p2-s1-qcm-007",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quand a eu lieu le premier vote au suffrage universel (masculin) en France ?",
    choices: [
      "1848",
      "1789",
      "1944",
      "1918"
    ],
    explication: "Le premier vote au suffrage universel a eu lieu en 1848, mais il ne concernait que les hommes en âge de voter.",
    page: 17
  },
  {
    id: "p2-s1-qcm-008",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Laquelle de ces conditions n'est PAS requise pour voter en France ?",
    choices: [
      "Avoir un emploi",
      "Être majeur (18 ans)",
      "Être inscrit sur les listes électorales",
      "Ne pas avoir été privé de ses droits civiques"
    ],
    explication: "Pour voter il faut : la nationalité française (ou UE pour certaines élections), être majeur, ne pas être privé de ses droits civiques et être inscrit sur les listes électorales. L'emploi n'a rien à voir.",
    page: 17
  },
  {
    id: "p2-s1-qcm-009",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui nomme le Premier ministre ?",
    choices: [
      "Le Président de la République",
      "L'Assemblée nationale",
      "Le Sénat",
      "Le Conseil constitutionnel"
    ],
    explication: "Le Président de la République nomme le Premier ministre, qui dirige l'action du Gouvernement. Le Gouvernement détermine et conduit la politique de la Nation.",
    page: 18
  },
  {
    id: "p2-s1-qcm-010",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que garantit le caractère secret du vote ?",
    choices: [
      "Le passage par un isoloir et le dépôt du bulletin sous enveloppe dans l'urne",
      "Le vote par correspondance uniquement",
      "L'anonymat sur les listes électorales",
      "L'interdiction des panneaux d'affichage électoral"
    ],
    explication: "Le vote est personnel et secret : on passe par un isoloir pour mettre son bulletin dans une enveloppe, déposée ensuite dans une urne. Il est interdit d'entrer à plusieurs dans un isoloir.",
    page: 17
  },
  {
    id: "p2-s1-qcm-011",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Faut-il présenter une pièce d'identité pour voter en France ?",
    choices: [
      "Oui, sauf exception dans les communes de moins de 1 000 habitants",
      "Non, jamais",
      "Oui, uniquement un passeport",
      "Non, la carte électorale suffit toujours"
    ],
    explication: "Les Français et les ressortissants de l'UE doivent présenter une pièce d'identité pour voter, sauf dans les communes de moins de 1 000 habitants où ce n'est pas obligatoire.",
    page: 17
  },
  {
    id: "p2-s2-qcm-001",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Combien la France compte-t-elle de régions au total ?",
    choices: [
      "18",
      "13",
      "22",
      "27"
    ],
    explication: "La France compte 13 régions métropolitaines et 5 régions d'outre-mer, soit 18 régions en tout.",
    page: 19
  },
  {
    id: "p2-s2-qcm-002",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel est le département français le plus récent ?",
    choices: [
      "Mayotte",
      "La Réunion",
      "La Guyane",
      "La Corse-du-Sud"
    ],
    explication: "Mayotte est devenue le 101e département français en 2011.",
    page: 19
  },
  {
    id: "p2-s2-qcm-003",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui est responsable des écoles primaires publiques ?",
    choices: [
      "Les communes",
      "Les départements",
      "Les régions",
      "L'État uniquement"
    ],
    explication: "Les communes gèrent les écoles primaires (maternelles et élémentaires), les départements les collèges, et les régions les lycées.",
    page: 19
  },
  {
    id: "p2-s2-qcm-004",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui est responsable des collèges publics ?",
    choices: [
      "Les départements",
      "Les communes",
      "Les régions",
      "Les intercommunalités"
    ],
    explication: "Les départements sont responsables des collèges publics, de l'action sociale, des routes départementales et de la protection de l'enfance.",
    page: 19
  },
  {
    id: "p2-s2-qcm-005",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui est responsable de la construction et de l'entretien des lycées publics ?",
    choices: [
      "Les régions",
      "Les communes",
      "Les départements",
      "Le ministère de l'Éducation"
    ],
    explication: "Les régions sont chargées des lycées publics, des transports publics, du développement économique et de la formation professionnelle.",
    page: 19
  },
  {
    id: "p2-s2-qcm-006",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui tient les registres de l'état civil (naissances, mariages, décès) ?",
    choices: [
      "Les communes",
      "Les préfectures",
      "Les départements",
      "Les tribunaux"
    ],
    explication: "Les communes tiennent les registres de l'état civil : elles enregistrent les naissances, les mariages et les décès.",
    page: 19
  },
  {
    id: "p2-s2-qcm-007",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui représente l'État dans les régions et départements ?",
    choices: [
      "Les préfets",
      "Les maires",
      "Les présidents de conseil régional",
      "Les sénateurs"
    ],
    explication: "L'État est représenté par les préfets de région et de département (ou par les hauts-commissaires dans certaines collectivités d'outre-mer).",
    page: 19
  },
  {
    id: "p2-s2-qcm-008",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Lequel de ces territoires est à la fois un département et une région d'outre-mer ?",
    choices: [
      "La Réunion",
      "La Polynésie française",
      "La Nouvelle-Calédonie",
      "Wallis-et-Futuna"
    ],
    explication: "Guadeloupe, Martinique, Mayotte, Guyane et La Réunion sont à la fois départements et régions. Les autres sont des collectivités à statut particulier.",
    page: 20
  },
  {
    id: "p2-s2-qcm-009",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Combien la France compte-t-elle de départements ?",
    choices: [
      "101",
      "96",
      "100",
      "112"
    ],
    explication: "La France compte 101 départements : 96 en métropole et 5 en outre-mer.",
    page: 19
  },
  {
    id: "p2-s2-qcm-010",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que gèrent typiquement les intercommunalités ?",
    choices: [
      "L'eau, l'assainissement, les déchets, les transports urbains",
      "Les collèges et les lycées",
      "La justice et la police nationale",
      "Les impôts nationaux"
    ],
    explication: "Les communes regroupées en intercommunalités (communautés de communes, métropoles…) gèrent des services publics comme l'eau, l'assainissement, les déchets ou les transports urbains.",
    page: 19
  },
  {
    id: "p2-s2-qcm-011",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Les ressortissants de l'Union européenne peuvent-ils se présenter comme candidats aux élections municipales en France ?",
    choices: [
      "Oui, ils peuvent voter et se présenter comme candidats",
      "Non, ils peuvent seulement voter",
      "Non, ils n'ont aucun droit électoral en France",
      "Oui, mais uniquement comme conseillers régionaux"
    ],
    explication: "Les élections municipales permettent aux citoyens français et aux ressortissants de l'Union européenne de voter et de se présenter comme candidats.",
    page: 19
  },
  {
    id: "p2-s2-qcm-012",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel est le numéro de département de la Guadeloupe ?",
    choices: [
      "971",
      "972",
      "973",
      "974"
    ],
    explication: "Guadeloupe : 971, Martinique : 972, Guyane : 973, La Réunion : 974, Mayotte : 976.",
    page: 21
  },
  {
    id: "p2-s2-qcm-013",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Parmi ces noms, lequel est celui d'une région métropolitaine française ?",
    choices: [
      "Nouvelle-Aquitaine",
      "Nouvelle-Bretagne",
      "Grande-Provence",
      "Île-Bourgogne"
    ],
    explication: "La Nouvelle-Aquitaine fait partie des 13 régions métropolitaines, avec entre autres Hauts-de-France, Normandie, Île-de-France, Grand Est, Bretagne, Pays de la Loire, Centre-Val de Loire, Bourgogne-Franche-Comté, Auvergne-Rhône-Alpes, Occitanie, Provence-Alpes-Côte d'Azur et Corse.",
    page: 21
  },
  {
    id: "p2-s3-qcm-001",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel traité a créé l'Union européenne en 1992 ?",
    choices: [
      "Le traité de Maastricht",
      "Le traité de Rome",
      "Le traité de Lisbonne",
      "Le traité de Paris"
    ],
    explication: "Le traité de Maastricht, signé en 1992, crée l'Union européenne, la citoyenneté européenne et la Banque centrale européenne. Le traité de Rome (1957) avait créé la CEE.",
    page: 22
  },
  {
    id: "p2-s3-qcm-002",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Combien d'États membres compte l'Union européenne aujourd'hui ?",
    choices: [
      "27",
      "28",
      "25",
      "30"
    ],
    explication: "L'UE compte 27 États membres depuis le départ du Royaume-Uni (Brexit) en 2020.",
    page: 22
  },
  {
    id: "p2-s3-qcm-003",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Lequel de ces pays n'est PAS un pays fondateur de la construction européenne ?",
    choices: [
      "L'Espagne",
      "La France",
      "L'Italie",
      "Le Luxembourg"
    ],
    explication: "Les six fondateurs (1957) sont la France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg. L'Espagne a adhéré en 1986.",
    page: 22
  },
  {
    id: "p2-s3-qcm-004",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Combien d'étoiles figurent sur le drapeau européen ?",
    choices: [
      "12",
      "27",
      "15",
      "9"
    ],
    explication: "Le drapeau européen porte 12 étoiles, symbole de l'unité et de l'harmonie entre les Européens — quel que soit le nombre d'États membres.",
    page: 22
  },
  {
    id: "p2-s3-qcm-005",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel est l'hymne de l'Union européenne ?",
    choices: [
      "L'Ode à la joie (Beethoven)",
      "La Marseillaise",
      "Le Chant des partisans",
      "L'Hymne à l'amour"
    ],
    explication: "L'hymne européen est l'Ode à la joie, extrait de la Neuvième symphonie de Beethoven, adopté en 1985.",
    page: 23
  },
  {
    id: "p2-s3-qcm-006",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Depuis quand les pièces et billets en euros circulent-ils ?",
    choices: [
      "Le 1er janvier 2002",
      "1992",
      "1999",
      "Le 1er janvier 2000"
    ],
    explication: "Les pièces et billets en euros sont mis en circulation depuis le 1er janvier 2002. La France partage l'euro avec 20 autres pays.",
    page: 23
  },
  {
    id: "p2-s3-qcm-007",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Où siège le Parlement européen ?",
    choices: [
      "À Strasbourg",
      "À Bruxelles",
      "À Paris",
      "À Francfort"
    ],
    explication: "Le Parlement européen siège à Strasbourg, en France. La Commission européenne est à Bruxelles et la BCE à Francfort.",
    page: 23
  },
  {
    id: "p2-s3-qcm-008",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle est la devise de l'Union européenne ?",
    choices: [
      "« Unie dans la diversité »",
      "« Liberté, égalité, fraternité »",
      "« La paix par l'union »",
      "« Ensemble pour l'Europe »"
    ],
    explication: "La devise de l'UE, adoptée en 2020, est « Unie dans la diversité ».",
    page: 23
  },
  {
    id: "p2-s3-qcm-009",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Pourquoi la journée de l'Europe est-elle célébrée le 9 mai ?",
    choices: [
      "En mémoire de la déclaration de Robert Schuman du 9 mai 1950",
      "C'est la date de signature du traité de Rome",
      "C'est la date d'entrée en vigueur de l'euro",
      "C'est l'anniversaire du traité de Maastricht"
    ],
    explication: "Le 9 mai 1950, Robert Schuman présentait les bases de la coopération européenne — l'acte de naissance de l'UE. Le 9 mai commémore la paix et l'unité en Europe.",
    page: 23
  },
  {
    id: "p2-s3-qcm-010",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel événement a fait passer l'UE de 28 à 27 membres en 2020 ?",
    choices: [
      "Le Brexit (départ du Royaume-Uni)",
      "Le départ de la Norvège",
      "L'adhésion de la Croatie",
      "La réunification allemande"
    ],
    explication: "Le Royaume-Uni a quitté l'Union européenne en 2020 (Brexit), ramenant le nombre d'États membres à 27.",
    page: 22
  },
  {
    id: "p2-s3-qcm-011",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel est le rôle de la Commission européenne ?",
    choices: [
      "C'est l'organe exécutif de l'UE, basé à Bruxelles",
      "Elle vote les lois au nom des citoyens européens",
      "Elle gère la politique monétaire et l'euro",
      "Elle rend la justice au niveau européen"
    ],
    explication: "La Commission européenne, créée en 1958 et basée à Bruxelles, est l'organe exécutif de l'Union européenne. Le Parlement (Strasbourg) vote les lois et la BCE (Francfort) gère la politique monétaire.",
    page: 23
  },
  {
    id: "p2-s3-qcm-012",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "En 2004, combien de pays ont rejoint l'Union européenne en une seule vague d'élargissement ?",
    choices: [
      "10",
      "6",
      "5",
      "3"
    ],
    explication: "En 2004, 10 pays d'Europe centrale et de l'Est (dont la Pologne et la Hongrie) ont rejoint l'UE, la faisant passer de 15 à 25 États membres.",
    page: 22
  },
];
