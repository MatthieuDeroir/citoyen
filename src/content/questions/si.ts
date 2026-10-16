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
    explication: "Le président de la République nomme le Premier ministre. Il n'est pas élu : l'Assemblée nationale ne vote pas pour le désigner.",
    page: 16
  },
  {
    id: "an-si-001-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-001",
    difficulty: 3,
    question: "Selon le livret, sur proposition de qui le président de la République nomme-t-il les ministres ?",
    choices: [
      "Du Premier ministre",
      "Du président de l'Assemblée nationale",
      "Du parti majoritaire à l'Assemblée",
      "Du président du Sénat"
    ],
    explication: "Le président nomme le gouvernement (les ministres) sur proposition du Premier ministre, qui en dirige l'action. Le parti majoritaire n'a aucun pouvoir de nomination.",
    page: 16
  },
  {
    id: "an-si-002",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui peut se présenter aux élections présidentielles ?",
    choices: [
      "Tout citoyen français majeur remplissant les conditions, dont 500 parrainages d'élus",
      "Tout citoyen français majeur remplissant les conditions, dont 500 000 signatures d'électeurs",
      "Tout citoyen français âgé d'au moins 35 ans et parrainé par 500 élus",
      "Tout citoyen de l'Union européenne majeur et parrainé par 500 élus"
    ],
    explication: "Seuls les candidats qui ont obtenu 500 parrainages d'élus peuvent se présenter. Il s'agit de signatures d'élus, pas d'électeurs, et aucun âge minimal de 35 ans n'est exigé.",
    page: 16
  },
  {
    id: "an-si-002-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-002",
    difficulty: 2,
    question: "Que faut-il avoir obtenu pour pouvoir se présenter à l'élection présidentielle ?",
    choices: [
      "500 parrainages d'élus",
      "1 000 parrainages d'élus",
      "500 000 signatures d'électeurs",
      "100 parrainages de parlementaires"
    ],
    explication: "Seuls les candidats qui ont obtenu 500 parrainages d'élus peuvent se présenter. Il ne s'agit pas d'une pétition de citoyens.",
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
      "Au gouvernement",
      "À l'État"
    ],
    explication: "« La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. » Le Parlement n'en est que le représentant.",
    page: 16
  },
  {
    id: "an-si-004",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui est élu lors des élections municipales ?",
    choices: [
      "Les conseillers municipaux",
      "Le maire, élu directement par les habitants",
      "Les conseillers municipaux et le préfet",
      "Le maire et ses adjoints, élus directement"
    ],
    explication: "Les électeurs de la commune élisent les conseillers municipaux, qui élisent ensuite le maire parmi eux. Le maire n'est donc pas élu directement par les habitants.",
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
    explication: "Être inscrit sur les listes électorales fait partie des conditions pour voter : si elle n'est pas remplie, on ne peut pas voter. La carte d'identité ne remplace pas l'inscription.",
    page: 16
  },
  {
    id: "an-si-006",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quelle condition est nécessaire pour voter aux élections présidentielles ?",
    choices: [
      "Être français, majeur et inscrit sur les listes électorales",
      "Être français, âgé d'au moins 21 ans et inscrit sur les listes électorales",
      "Être français ou européen, majeur et inscrit sur les listes électorales",
      "Être français, majeur et payer l'impôt sur le revenu"
    ],
    explication: "Il faut être français, majeur (18 ans), ne pas être privé de ses droits civiques et être inscrit sur les listes. Les ressortissants de l'UE ne votent qu'aux municipales et aux européennes.",
    page: 16
  },
  {
    id: "an-si-006-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-006",
    difficulty: 2,
    question: "Un citoyen français majeur qui n'est pas inscrit sur les listes électorales peut-il voter à l'élection présidentielle ?",
    choices: [
      "Non, l'inscription est une condition pour voter",
      "Oui, en présentant sa carte d'identité",
      "Oui, dans le bureau de vote de sa commune de naissance",
      "Oui, mais seulement au second tour"
    ],
    explication: "Si l'une des conditions (nationalité, majorité, droits civiques, inscription) n'est pas remplie, on ne peut pas voter. La pièce d'identité prouve l'identité, elle ne remplace pas l'inscription.",
    page: 16
  },
  {
    id: "an-si-007",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quelle condition faut-il remplir pour être candidat aux élections municipales ?",
    choices: [
      "Avoir au moins 18 ans et être électeur ou contribuable de la commune",
      "Avoir au moins 18 ans et être né dans la commune",
      "Avoir au moins 21 ans et être électeur de la commune",
      "Avoir au moins 18 ans et habiter la commune depuis cinq ans"
    ],
    explication: "Il suffit d'avoir 18 ans et d'avoir une attache avec la commune (électeur ou contribuable). Ni la naissance sur place ni une durée de résidence ne sont exigées.",
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
    explication: "Le député est élu au suffrage universel direct. Le Premier ministre est nommé par le président de la République ; le préfet et le recteur sont des fonctionnaires nommés.",
    page: 16
  },
  {
    id: "an-si-008-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-008",
    difficulty: 3,
    question: "Parmi ces personnes, laquelle n'est pas élue ?",
    choices: [
      "Le préfet",
      "Le sénateur",
      "Le conseiller régional",
      "Le député européen"
    ],
    explication: "Le préfet est nommé pour représenter l'État. Le sénateur est bien élu, mais au suffrage universel indirect, par des élus locaux.",
    page: 16
  },
  {
    id: "an-si-009",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quelles sont les fonctions du maire ?",
    choices: [
      "Diriger l'administration communale et être officier d'état civil",
      "Diriger l'administration communale et représenter l'État dans le département",
      "Gérer les collèges publics et célébrer les mariages",
      "Nommer les conseillers municipaux et les adjoints"
    ],
    explication: "Le maire dirige la commune et tient l'état civil (naissances, mariages, décès). Représenter l'État dans le département est le rôle du préfet, et les collèges relèvent du département.",
    page: 19
  },
  {
    id: "an-si-009-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-009",
    difficulty: 3,
    question: "Laquelle de ces responsabilités relève de la commune ?",
    choices: [
      "Les activités sportives et culturelles",
      "L'action sociale et la protection de l'enfance",
      "La formation professionnelle",
      "Les transports publics régionaux"
    ],
    explication: "Les communes gèrent notamment les écoles primaires, les activités sportives et culturelles, les routes communales et l'état civil. L'action sociale relève du département, la formation professionnelle et les transports de la région.",
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
      "À la sous-préfecture de son arrondissement",
      "Au bureau de vote, le jour du scrutin"
    ],
    explication: "On s'inscrit sur internet ou à la mairie de son lieu de résidence. La préfecture ne gère pas les inscriptions, et le jour du scrutin il est trop tard.",
    page: 16
  },
  {
    id: "an-si-010-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-010",
    difficulty: 3,
    question: "Selon le livret, comment peut-on s'inscrire sur les listes électorales ?",
    choices: [
      "Sur internet ou à la mairie de son lieu de résidence",
      "Sur internet ou à la préfecture de son département",
      "Uniquement à la mairie de sa commune de naissance",
      "Au bureau de vote, le jour du premier tour"
    ],
    explication: "Le livret prévoit deux voies : internet ou la mairie du lieu de résidence. La commune de naissance et la préfecture ne sont pas compétentes.",
    page: 16
  },
  {
    id: "an-si-011",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
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
      "Oui, voter est une obligation sous peine d'amende",
      "Non, sauf pour l'élection présidentielle",
      "Oui, sauf pour les Français de l'étranger"
    ],
    explication: "Le vote est un droit et un devoir civique, mais il n'est pas juridiquement obligatoire en France, quelle que soit l'élection.",
    page: 16
  },
  {
    id: "an-si-013",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "A-t-on le droit de ne pas respecter une loi ?",
    choices: [
      "Non, la loi s'impose à tous",
      "Oui, si elle est contraire à sa religion",
      "Oui, si l'on n'a pas voté pour elle",
      "Oui, si l'on est un élu de la République"
    ],
    explication: "Dans un État de droit, la loi doit être respectée par tous, y compris par l'État et les élus. On peut seulement agir pour la faire changer.",
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
      "Ils sont élus par les élus locaux",
      "Ils sont nommés par le Premier ministre"
    ],
    explication: "Les 577 députés sont élus au suffrage universel direct tous les 5 ans. Ce sont les sénateurs qui sont élus au suffrage indirect, par des élus locaux.",
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
      "Le gouvernement (Premier ministre et ministres)",
      "Le Conseil constitutionnel et le Conseil d'État",
      "Le président de la République et le gouvernement"
    ],
    explication: "Le pouvoir législatif appartient au Parlement (Assemblée nationale et Sénat). Le gouvernement met en œuvre les lois ; le Conseil constitutionnel vérifie leur conformité à la Constitution.",
    page: 16
  },
  {
    id: "an-si-015-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-015",
    difficulty: 2,
    question: "Outre le vote des lois, quelle mission le Parlement exerce-t-il ?",
    choices: [
      "Il contrôle le Gouvernement",
      "Il nomme le Premier ministre",
      "Il contrôle la conformité des lois à la Constitution",
      "Il rend la justice administrative"
    ],
    explication: "Le Parlement vote les lois et contrôle le Gouvernement. Le Premier ministre est nommé par le président, et le contrôle de constitutionnalité revient au Conseil constitutionnel.",
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
    explication: "Le législatif vote les lois, l'exécutif les met en œuvre, le judiciaire rend la justice. Le Conseil constitutionnel n'est pas un « pouvoir » distinct.",
    page: 16
  },
  {
    id: "an-si-016-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-016",
    difficulty: 2,
    question: "Quel pouvoir consiste à « définir la politique de la Nation et mettre en œuvre les lois » ?",
    choices: [
      "Le pouvoir exécutif",
      "Le pouvoir législatif",
      "Le pouvoir judiciaire",
      "Le pouvoir administratif"
    ],
    explication: "Le pouvoir exécutif, exercé par le gouvernement, définit la politique de la Nation et met en œuvre les lois. Le législatif les élabore et les vote.",
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
      "Un État où la loi s'applique à tous, sauf aux élus en exercice",
      "Un État où le gouvernement peut déroger aux lois en cas de besoin",
      "Un État où tous les citoyens majeurs ont le droit de vote"
    ],
    explication: "Dans un État de droit, la loi doit être respectée par tous, y compris par l'État. Le suffrage universel relève de la démocratie, pas de la définition de l'État de droit.",
    page: 16
  },
  {
    id: "an-si-017-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-017",
    difficulty: 3,
    question: "Selon le livret, sous le contrôle de qui l'administration agit-elle ?",
    choices: [
      "Du juge",
      "Du préfet",
      "Du Conseil constitutionnel",
      "Du ministre de l'Intérieur"
    ],
    explication: "L'administration respecte la Constitution, les lois et les principes républicains, et agit sous le contrôle du juge. Le Conseil constitutionnel contrôle les lois, pas l'administration.",
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
    explication: "Le maire et les conseillers municipaux sont élus pour 6 ans, comme les conseillers départementaux et régionaux. Les 5 ans sont ceux du président et des députés.",
    page: 19
  },
  {
    id: "an-si-018-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-018",
    difficulty: 3,
    question: "Lequel de ces mandats ne dure pas 6 ans ?",
    choices: [
      "Celui de député",
      "Celui de conseiller départemental",
      "Celui de conseiller régional",
      "Celui de sénateur"
    ],
    explication: "Les députés sont élus pour 5 ans. Les sénateurs, les conseillers municipaux, départementaux et régionaux sont élus pour 6 ans.",
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
    explication: "Les législatives désignent les 577 députés de l'Assemblée nationale. Les sénateurs, eux, sont élus par des élus locaux.",
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
    explication: "Le président est élu pour 5 ans au suffrage universel direct. Le septennat (7 ans) a été remplacé par le quinquennat en 2000.",
    page: 16
  },
  {
    id: "an-si-020-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-020",
    difficulty: 3,
    question: "Le mandat du président de la République est :",
    choices: [
      "De cinq ans, renouvelable une fois",
      "De cinq ans, renouvelable sans limite",
      "De sept ans, renouvelable une fois",
      "De cinq ans, non renouvelable"
    ],
    explication: "Le président est élu au suffrage universel direct pour cinq ans, renouvelables une fois. Le mandat de sept ans n'existe plus depuis 2000.",
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
    explication: "Les députés sont élus pour 5 ans, sauf dissolution de l'Assemblée nationale. Les 6 ans sont la durée du mandat des sénateurs.",
    page: 16
  },
  {
    id: "an-si-021-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-021",
    difficulty: 3,
    question: "Quel mandat a la même durée que celui des députés ?",
    choices: [
      "Celui du président de la République",
      "Celui des sénateurs",
      "Celui des maires",
      "Celui des conseillers régionaux"
    ],
    explication: "Députés et président de la République sont élus pour 5 ans. Les sénateurs, les maires et les conseillers régionaux le sont pour 6 ans.",
    page: 16
  },
  {
    id: "an-si-022",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quelle est la durée du mandat des sénateurs ?",
    choices: [
      "6 ans",
      "9 ans",
      "5 ans",
      "7 ans"
    ],
    explication: "Les 348 sénateurs sont élus pour 6 ans au suffrage universel indirect. Le mandat de 9 ans a été supprimé en 2003 ; 5 ans est la durée du mandat des députés.",
    page: 16
  },
  {
    id: "an-si-022-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-022",
    difficulty: 2,
    question: "Par qui les sénateurs sont-ils élus ?",
    choices: [
      "Par des élus locaux, au suffrage universel indirect",
      "Par les citoyens, au suffrage universel direct",
      "Par les députés de l'Assemblée nationale",
      "Par les maires seuls, réunis en Congrès"
    ],
    explication: "Les sénateurs sont élus au suffrage universel indirect par les élus locaux (conseillers municipaux, départementaux et régionaux). Seuls les députés sont élus directement par les citoyens.",
    page: 16
  },
  {
    id: "an-si-023",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui dirige l'action du gouvernement ?",
    choices: [
      "Le Premier ministre",
      "Le président de la République",
      "Le président de l'Assemblée nationale",
      "Le président du Sénat"
    ],
    explication: "Le Premier ministre dirige l'action du gouvernement (article 21). Le président de la République nomme le gouvernement sur sa proposition, mais n'en dirige pas l'action.",
    page: 16
  },
  {
    id: "an-si-024",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "En France, est-ce possible d'adhérer à un parti politique ?",
    choices: [
      "Oui, librement",
      "Oui, après autorisation de la préfecture",
      "Oui, après déclaration à la mairie",
      "Non, seuls les élus peuvent y adhérer"
    ],
    explication: "Les partis politiques se forment et exercent leur activité librement : aucune autorisation ni déclaration n'est demandée pour y adhérer.",
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
      "La police nationale ou la gendarmerie",
      "Le préfet du département",
      "Le maire de la commune"
    ],
    explication: "La justice, rendue par les juges, sanctionne les infractions par des peines prévues par la loi. La police enquête et interpelle, mais ne juge pas.",
    page: 16
  },
  {
    id: "an-si-025-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-025",
    difficulty: 3,
    question: "Qui règle les litiges entre les citoyens et l'administration ?",
    choices: [
      "Les juges",
      "Le préfet du département",
      "Le Conseil constitutionnel",
      "Le ministre concerné"
    ],
    explication: "La justice, rendue par les juges, règle les litiges entre particuliers et entre citoyens et administration. Le Conseil constitutionnel ne juge que la conformité des lois.",
    page: 16
  },
  {
    id: "an-si-026",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui gère les collèges publics ?",
    choices: [
      "Le département",
      "La commune",
      "La région",
      "Le rectorat"
    ],
    explication: "Les communes gèrent les écoles primaires, les départements les collèges et les régions les lycées.",
    page: 19
  },
  {
    id: "an-si-026-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-026",
    difficulty: 3,
    question: "Le chauffage du lycée public de votre fille est en panne depuis des semaines. Quelle collectivité est responsable du bâtiment ?",
    choices: [
      "La région",
      "Le département",
      "La commune",
      "L'intercommunalité"
    ],
    explication: "La région construit et entretient les lycées publics. Le département s'occupe des collèges, la commune des écoles primaires.",
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
    explication: "La commune est responsable des écoles primaires publiques (maternelles et élémentaires) ; le département gère les collèges, la région les lycées.",
    page: 19
  },
  {
    id: "an-si-027-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-027",
    difficulty: 2,
    question: "Laquelle de ces responsabilités appartient au département ?",
    choices: [
      "L'aide aux personnes âgées",
      "Les écoles maternelles",
      "Les lycées publics",
      "Les transports régionaux"
    ],
    explication: "Le département gère les collèges, l'action sociale, la protection de l'enfance et l'aide aux personnes âgées. Les écoles relèvent de la commune, lycées et transports de la région.",
    page: 19
  },
  {
    id: "an-si-028",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Comment sont désignés les maires ?",
    choices: [
      "Ils sont élus par le conseil municipal",
      "Ils sont élus directement par les habitants",
      "Ils sont nommés par le préfet",
      "Ils sont élus par les conseillers départementaux"
    ],
    explication: "Les habitants élisent le conseil municipal, qui élit ensuite le maire parmi ses membres. Le maire n'est donc pas élu directement.",
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
    explication: "La région est chargée des transports publics, du développement économique, de la formation professionnelle et des lycées. Les transports urbains relèvent plutôt des intercommunalités.",
    page: 19
  },
  {
    id: "an-si-029-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-029",
    difficulty: 3,
    question: "Laquelle de ces compétences relève de la région ?",
    choices: [
      "Le développement économique",
      "L'action sociale",
      "Les routes départementales",
      "L'état civil"
    ],
    explication: "La région est chargée des transports publics, du développement économique, de la formation professionnelle et des lycées. L'action sociale et les routes départementales relèvent du département, l'état civil de la commune.",
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
    explication: "Les modifications de la Constitution doivent être approuvées par référendum ou par le Parlement réuni en Congrès. Une loi ordinaire ne suffit pas.",
    page: 16
  },
  {
    id: "an-si-030-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-030",
    difficulty: 3,
    question: "Hors référendum, par qui une modification de la Constitution peut-elle être approuvée ?",
    choices: [
      "Par le Parlement réuni en Congrès",
      "Par le Conseil constitutionnel en séance plénière",
      "Par l'Assemblée nationale seule",
      "Par le président de la République, par décret"
    ],
    explication: "Les modifications de la Constitution doivent être approuvées par référendum ou par le Parlement (Assemblée nationale et Sénat) réuni en Congrès. Ni l'Assemblée seule ni le Conseil constitutionnel ne peuvent le faire.",
    page: 16
  },
  {
    id: "an-si-031",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui assure l'intérim du président de la République en cas de décès ?",
    choices: [
      "Le président du Sénat",
      "Le Premier ministre",
      "Le président de l'Assemblée nationale",
      "Le président du Conseil constitutionnel"
    ],
    explication: "En cas de vacance de la présidence, l'intérim est assuré par le président du Sénat, et non par le Premier ministre ou le président de l'Assemblée nationale.",
    page: 16
  },
  {
    id: "an-si-032",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quel est le rôle du Conseil constitutionnel ?",
    choices: [
      "Vérifier que les lois sont conformes à la Constitution",
      "Contrôler l'action du gouvernement",
      "Juger les litiges entre l'administration et les citoyens",
      "Conseiller le gouvernement sur ses projets de loi"
    ],
    explication: "Le Conseil constitutionnel veille à la conformité des lois avec la Constitution. Contrôler le gouvernement est le rôle du Parlement ; conseiller le gouvernement sur ses projets de loi est celui du Conseil d'État.",
    page: 16
  },
  {
    id: "an-si-032-v1",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-032",
    difficulty: 3,
    question: "Outre le contrôle des lois, quelle mission le livret attribue-t-il au Conseil constitutionnel ?",
    choices: [
      "Contrôler la régularité des élections nationales",
      "Contrôler la régularité des élections municipales",
      "Conseiller le gouvernement sur ses projets de loi",
      "Nommer les membres du gouvernement"
    ],
    explication: "Le Conseil constitutionnel veille à la conformité des lois avec la Constitution et contrôle la régularité des élections nationales. Les élections municipales ne relèvent pas de lui.",
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
      "Être âgé d'au moins 35 ans",
      "Être membre d'un parti politique",
      "Résider en France depuis dix ans"
    ],
    explication: "Le candidat doit être français, électeur, majeur et parrainé par 500 élus. L'appartenance à un parti n'est pas exigée et il n'y a pas d'âge minimal de 35 ans.",
    page: 16
  },
  {
    id: "an-si-034",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Combien y a-t-il de départements en France ?",
    choices: [
      "101",
      "96",
      "100",
      "95"
    ],
    explication: "La France compte 101 départements : 96 en métropole et 5 en outre-mer. Le plus récent est Mayotte (2011).",
    page: 19
  },
  {
    id: "an-si-034-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-034",
    difficulty: 3,
    question: "Combien de départements la France compte-t-elle en métropole ?",
    choices: [
      "96",
      "101",
      "95",
      "99"
    ],
    explication: "Sur 101 départements, 96 sont en métropole et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte).",
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
      "En communes, départements et provinces",
      "En communes, districts et régions",
      "En régions, États fédérés et communes"
    ],
    explication: "Les collectivités territoriales sont les communes, les départements, les régions et les collectivités d'outre-mer. La France n'est pas un État fédéral et n'a plus de provinces.",
    page: 19
  },
  {
    id: "an-si-035-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-035",
    difficulty: 3,
    question: "Comment appelle-t-on le transfert de compétences et de moyens de l'État vers les collectivités territoriales ?",
    choices: [
      "La décentralisation",
      "La déconcentration",
      "La délégation de service public",
      "La fédéralisation"
    ],
    explication: "Par la décentralisation, l'État transfère des compétences et des moyens aux collectivités territoriales. La déconcentration désigne au contraire la présence de l'État sur le territoire, par exemple avec les préfets.",
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
    explication: "Le préfet, nommé par l'État, le représente dans le département. Le président du conseil départemental dirige la collectivité, il ne représente pas l'État.",
    page: 19
  },
  {
    id: "an-si-036-v1",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-036",
    difficulty: 3,
    question: "Qui représente l'État dans certaines collectivités d'outre-mer ?",
    choices: [
      "Un haut-commissaire",
      "Le président de la collectivité",
      "Un ambassadeur de France",
      "Le député de la collectivité"
    ],
    explication: "L'État est représenté par les préfets de région et de département, ou par des hauts-commissaires dans certaines collectivités d'outre-mer. Le président de la collectivité est un élu local.",
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
    explication: "Le président est le chef de l'État et des armées, garant des institutions. C'est le Premier ministre qui dirige l'action du gouvernement.",
    page: 16
  },
  {
    id: "an-si-038",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quel est le rôle du Premier ministre ?",
    choices: [
      "Diriger l'action du gouvernement et assurer l'exécution des lois",
      "Présider le Conseil des ministres et promulguer les lois",
      "Présider l'Assemblée nationale et fixer son ordre du jour",
      "Commander les armées et négocier les traités"
    ],
    explication: "Nommé par le président, le Premier ministre dirige l'action du gouvernement. Présider le Conseil des ministres et promulguer les lois revient au président de la République.",
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
      "Défendre les personnes poursuivies devant les tribunaux pénaux",
      "Vérifier que les lois respectent les droits garantis par la Constitution",
      "Représenter les citoyens devant la Cour européenne des droits de l'homme"
    ],
    explication: "Autorité indépendante, le Défenseur des droits protège les usagers face aux services publics et combat les discriminations. Défendre un accusé est le rôle d'un avocat ; contrôler les lois, celui du Conseil constitutionnel.",
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
      "2000"
    ],
    explication: "La citoyenneté européenne a été créée en 1992 par le traité de Maastricht. 1957 est la date du traité de Rome (CEE), 2000 celle de la Charte des droits fondamentaux.",
    page: 22
  },
  {
    id: "an-si-040-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-040",
    difficulty: 2,
    question: "Quel droit la citoyenneté européenne donne-t-elle à un Français ?",
    choices: [
      "S'installer et travailler dans un autre pays de l'UE",
      "Voter aux élections nationales du pays de l'UE où il réside",
      "Obtenir la nationalité de son pays de résidence après un an",
      "Se présenter à l'élection présidentielle d'un autre État membre"
    ],
    explication: "Les citoyens européens sont libres de circuler, travailler, étudier et s'installer dans les autres pays de l'UE, et votent aux élections locales du pays de résidence. Les élections nationales restent réservées aux nationaux.",
    page: 22
  },
  {
    id: "an-si-041",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quel est le dernier État à avoir intégré l'Union européenne en 2013 ?",
    choices: [
      "La Croatie",
      "La Bulgarie",
      "La Slovénie",
      "La Roumanie"
    ],
    explication: "La Croatie est entrée dans l'UE en 2013, portant le nombre de membres à 28. La Bulgarie et la Roumanie ont adhéré en 2007, la Slovénie en 2004.",
    page: 22
  },
  {
    id: "an-si-041-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-041",
    difficulty: 3,
    question: "Quels pays ont rejoint l'Union européenne en 2007 ?",
    choices: [
      "La Roumanie et la Bulgarie",
      "La Croatie et la Slovénie",
      "La Pologne et la Hongrie",
      "L'Autriche et la Suède"
    ],
    explication: "La Roumanie et la Bulgarie sont entrées en 2007 (27 membres), avant la Croatie en 2013. La Pologne et la Hongrie ont adhéré en 2004, l'Autriche et la Suède en 1995.",
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
    explication: "L'hymne européen, l'« Ode à la joie », est extrait de la Neuvième symphonie de Ludwig van Beethoven.",
    page: 22
  },
  {
    id: "an-si-042-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-042",
    difficulty: 3,
    question: "De quelle œuvre l'hymne européen est-il extrait ?",
    choices: [
      "De la Neuvième symphonie de Beethoven",
      "De la Cinquième symphonie de Beethoven",
      "De la Neuvième symphonie de Dvořák",
      "De La Flûte enchantée de Mozart"
    ],
    explication: "L'« Ode à la joie » est extraite de la Neuvième symphonie de Ludwig van Beethoven. La Neuvième de Dvořák est la « Symphonie du Nouveau Monde ».",
    page: 22
  },
  {
    id: "an-si-043",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quand est célébrée la journée de l'Europe ?",
    choices: [
      "Le 9 mai",
      "Le 8 mai",
      "Le 1er mai",
      "Le 25 mars"
    ],
    explication: "La journée de l'Europe, le 9 mai, commémore la déclaration Schuman de 1950. Le 8 mai est l'anniversaire de la victoire de 1945.",
    page: 22
  },
  {
    id: "an-si-043-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-043",
    difficulty: 2,
    question: "Quel événement la journée de l'Europe commémore-t-elle ?",
    choices: [
      "La déclaration de Robert Schuman du 9 mai 1950",
      "La signature du traité de Rome en 1957",
      "La signature du traité de Maastricht en 1992",
      "La création de la CECA en 1951"
    ],
    explication: "Le 9 mai 1950, Robert Schuman, ministre français des affaires étrangères, présenta les bases de la coopération européenne, considérées comme l'acte de naissance de l'UE.",
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
    explication: "La BCE a été mise en place en 1998 à Francfort, en Allemagne. Bruxelles accueille la Commission, Strasbourg le Parlement européen.",
    page: 22
  },
  {
    id: "an-si-044-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-044",
    difficulty: 3,
    question: "Quel traité a créé la Banque centrale européenne ?",
    choices: [
      "Le traité de Maastricht",
      "Le traité de Rome",
      "Le traité de Lisbonne",
      "Le traité de Paris"
    ],
    explication: "Le traité de Maastricht (1992) crée l'UE, la citoyenneté européenne et la BCE, mise en place le 1er juin 1998 à Francfort. Le traité de Rome (1957) avait créé la CEE.",
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
      "À Francfort"
    ],
    explication: "La Commission européenne, organe exécutif de l'UE, siège à Bruxelles. Strasbourg est le siège du Parlement européen, Francfort celui de la BCE.",
    page: 22
  },
  {
    id: "an-si-045-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-045",
    difficulty: 3,
    question: "En quelle année la Commission européenne, organe exécutif de l'UE, a-t-elle été créée ?",
    choices: [
      "1958",
      "1957",
      "1951",
      "1992"
    ],
    explication: "La Commission européenne a été créée en 1958, au lendemain du traité de Rome (1957). 1951 est la date de la CECA, 1992 celle de l'Union européenne.",
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
    explication: "Les députés européens, élus tous les 5 ans par les citoyens de l'Union, siègent au Parlement européen. Les ministres siègent au Conseil de l'UE, les commissaires à la Commission.",
    page: 22
  },
  {
    id: "an-si-046-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-046",
    difficulty: 2,
    question: "Quelle institution européenne est élue directement par les citoyens ?",
    choices: [
      "Le Parlement européen",
      "La Commission européenne",
      "Le Conseil européen",
      "La Banque centrale européenne"
    ],
    explication: "Tous les cinq ans, les citoyens de l'Union élisent les députés du Parlement européen. La Commission et la BCE ne sont pas élues par les citoyens.",
    page: 22
  },
  {
    id: "an-si-047",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Les citoyens de l'Union européenne peuvent-ils voter aux élections locales dans un autre État de l'Union ?",
    choices: [
      "Oui, aux élections municipales et européennes de leur État de résidence",
      "Oui, aux élections municipales et régionales de leur État de résidence",
      "Oui, aux élections municipales et législatives de leur État de résidence",
      "Non, ils ne peuvent voter que dans leur pays d'origine"
    ],
    explication: "Un ressortissant de l'UE peut voter aux élections municipales et européennes de son pays de résidence. Les élections régionales et nationales lui restent fermées.",
    page: 22
  },
  {
    id: "an-si-047-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-047",
    difficulty: 3,
    question: "Un Espagnol installé à Lyon peut-il voter à l'élection présidentielle française ?",
    choices: [
      "Non, seulement aux municipales et aux européennes",
      "Oui, s'il réside en France depuis cinq ans",
      "Oui, comme tout citoyen de l'Union européenne",
      "Non, seulement aux régionales et aux européennes"
    ],
    explication: "Un ressortissant de l'UE peut voter en France aux élections municipales et européennes, jamais à la présidentielle, réservée aux Français. Les régionales ne lui sont pas ouvertes non plus.",
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
    explication: "Depuis le départ du Royaume-Uni en 2020, l'UE compte 27 États membres. Elle en comptait 28 entre 2013 et 2020.",
    page: 22
  },
  {
    id: "an-si-048-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-048",
    difficulty: 2,
    question: "Combien d'États membres l'Union européenne comptait-elle juste avant le Brexit ?",
    choices: [
      "28",
      "27",
      "29",
      "25"
    ],
    explication: "Après l'adhésion de la Croatie en 2013, l'UE comptait 28 membres. Le départ du Royaume-Uni en 2020 l'a ramenée à 27.",
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
      "2002"
    ],
    explication: "Le traité de Maastricht a été signé en 1992. 1957 est l'année du traité de Rome, 2002 celle de l'arrivée des pièces et billets en euros.",
    page: 22
  },
  {
    id: "an-si-049-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-049",
    difficulty: 3,
    question: "Lequel de ces éléments n'a PAS été créé par le traité de Maastricht ?",
    choices: [
      "La Communauté économique européenne",
      "La citoyenneté européenne",
      "La Banque centrale européenne",
      "L'Union européenne"
    ],
    explication: "Le traité de Maastricht (1992) crée l'UE, la citoyenneté européenne et la BCE. La CEE date du traité de Rome de 1957.",
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
      "Le traité de Francfort"
    ],
    explication: "Le traité de Maastricht (1992) crée l'Union européenne. Le traité de Versailles (1919) clôt la Première Guerre mondiale ; celui de l'Élysée (1963) est un traité franco-allemand.",
    page: 22
  },
  {
    id: "an-si-050-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-050",
    difficulty: 2,
    question: "Quel traité a instauré la Communauté économique européenne en 1957 ?",
    choices: [
      "Le traité de Rome",
      "Le traité de Maastricht",
      "Le traité de Paris",
      "Le traité de Lisbonne"
    ],
    explication: "Le traité de Rome instaure en 1957 la CEE entre six pays fondateurs. Le traité de Maastricht, en 1992, crée l'Union européenne.",
    page: 22
  },
  {
    id: "an-si-051",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quel État a quitté l'Union européenne en 2020 ?",
    choices: [
      "Le Royaume-Uni",
      "La Suisse",
      "Le Danemark",
      "La Norvège"
    ],
    explication: "Le Royaume-Uni a quitté l'UE en 2020 (Brexit). La Suisse et la Norvège n'en ont jamais été membres ; le Danemark y est depuis 1973.",
    page: 22
  },
  {
    id: "an-si-051-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-051",
    difficulty: 3,
    question: "En quelle année le Royaume-Uni avait-il rejoint la construction européenne ?",
    choices: [
      "1973",
      "1957",
      "1981",
      "1986"
    ],
    explication: "Le Royaume-Uni est entré en 1973, avec l'Irlande et le Danemark, et a quitté l'UE en 2020. 1981 est l'année de la Grèce, 1986 celle de l'Espagne et du Portugal.",
    page: 22
  },
  {
    id: "an-si-052",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quelle est la devise de l'Union européenne ?",
    choices: [
      "« Unie dans la diversité »",
      "« Unie dans la paix »",
      "« L'union fait la force »",
      "« Unie dans la solidarité »"
    ],
    explication: "La devise de l'UE est « Unie dans la diversité ». « L'union fait la force » est la devise de la Belgique.",
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
      "La Symphonie du Nouveau Monde"
    ],
    explication: "L'hymne européen est l'« Ode à la joie », extraite de la Neuvième symphonie de Beethoven et adoptée en 1985.",
    page: 22
  },
  {
    id: "an-si-053-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-053",
    difficulty: 3,
    question: "En quelle année l'Ode à la joie a-t-elle été adoptée comme hymne européen ?",
    choices: [
      "1985",
      "1957",
      "1992",
      "2002"
    ],
    explication: "L'hymne européen a été adopté en 1985. 1957 correspond au traité de Rome, 1992 au traité de Maastricht, 2002 à l'arrivée de l'euro.",
    page: 22
  },
  {
    id: "an-si-054",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "De quoi est composé le drapeau européen ?",
    choices: [
      "De douze étoiles dorées en cercle sur fond bleu",
      "De vingt-sept étoiles dorées en cercle sur fond bleu",
      "De douze étoiles blanches en cercle sur fond bleu",
      "De douze étoiles dorées en carré sur fond blanc"
    ],
    explication: "Le drapeau compte douze étoiles dorées en cercle sur fond bleu, quel que soit le nombre d'États membres (27). Elles symbolisent l'unité et l'harmonie entre les Européens.",
    page: 22
  },
  {
    id: "an-si-054-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-054",
    difficulty: 2,
    question: "Que symbolisent les douze étoiles du drapeau européen ?",
    choices: [
      "L'unité et l'harmonie entre les Européens",
      "Les douze pays fondateurs de la CEE",
      "Les douze premières monnaies remplacées par l'euro",
      "Les douze membres de la première Commission"
    ],
    explication: "Les douze étoiles symbolisent l'unité et l'harmonie entre les Européens, indépendamment du nombre d'États. La CEE n'avait que six pays fondateurs.",
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
    explication: "Tous les cinq ans, les citoyens de l'Union élisent directement leurs députés européens. Ils ne sont pas désignés par les parlements nationaux.",
    page: 22
  },
  {
    id: "an-si-055-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-055",
    difficulty: 2,
    question: "Tous les combien de temps les citoyens élisent-ils les députés européens ?",
    choices: [
      "Tous les 5 ans",
      "Tous les 6 ans",
      "Tous les 4 ans",
      "Tous les 7 ans"
    ],
    explication: "Les députés du Parlement européen sont élus tous les cinq ans par les citoyens de l'Union.",
    page: 22
  },
  {
    id: "an-si-056",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Où est le siège du Parlement européen ?",
    choices: [
      "À Strasbourg",
      "À Bruxelles",
      "À Luxembourg",
      "À Francfort"
    ],
    explication: "Le siège du Parlement européen est à Strasbourg, en France. Bruxelles est le siège de la Commission européenne, Francfort celui de la BCE.",
    page: 22
  },
  {
    id: "an-si-056-v1",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    variantOf: "an-si-056",
    difficulty: 2,
    question: "Quelle institution européenne a son siège à Strasbourg ?",
    choices: [
      "Le Parlement européen",
      "La Commission européenne",
      "La Banque centrale européenne",
      "Le Conseil de l'Union européenne"
    ],
    explication: "Le Parlement européen siège à Strasbourg. La Commission et le Conseil de l'UE sont à Bruxelles, la BCE à Francfort.",
    page: 22
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
      "555",
      "925"
    ],
    explication: "L'Assemblée nationale compte 577 députés, élus au suffrage universel direct. 348 est le nombre de sénateurs.",
    page: 16
  },
  {
    id: "p2-s1-qcm-006",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "En quelle année les femmes françaises ont-elles obtenu le droit de vote ?",
    choices: [
      "1944",
      "1945",
      "1848",
      "1946"
    ],
    explication: "Les femmes ont obtenu le droit de vote en avril 1944 et ont voté pour la première fois un an plus tard, en avril 1945.",
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
      "1830",
      "1875"
    ],
    explication: "Le premier vote au suffrage universel a eu lieu en 1848, mais il ne concernait que les hommes. Les femmes n'ont voté qu'à partir de 1945.",
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
      "Payer l'impôt sur le revenu",
      "Être majeur (18 ans)",
      "Être inscrit sur les listes électorales",
      "Ne pas avoir été privé de ses droits civiques"
    ],
    explication: "Pour voter, il faut être français (ou européen pour certaines élections), majeur, non privé de ses droits civiques et inscrit sur les listes. Le paiement d'un impôt n'est pas exigé : le suffrage est universel.",
    page: 17
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
      "Le vote par procuration confié à un proche",
      "Le dépôt du bulletin à découvert devant les assesseurs",
      "La signature de la liste d'émargement par chaque électeur"
    ],
    explication: "Le vote est personnel et secret : on passe par un isoloir pour mettre son bulletin dans une enveloppe, déposée ensuite dans l'urne. Il est interdit d'entrer à plusieurs dans un isoloir.",
    page: 17
  },
  {
    id: "p2-s1-qcm-011",
    theme: "si",
    notion: "p2-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Faut-il présenter une pièce d'identité pour voter en France ?",
    choices: [
      "Oui, sauf exception dans les communes de moins de 1 000 habitants",
      "Oui, sauf exception dans les communes de moins de 3 500 habitants",
      "Oui, dans toutes les communes, sans aucune exception",
      "Non, la carte électorale suffit dans toutes les communes"
    ],
    explication: "Les Français et les ressortissants de l'UE doivent présenter une pièce d'identité, sauf dans les communes de moins de 1 000 habitants. Même là, le président du bureau peut demander une preuve d'identité.",
    page: 17
  },
  {
    id: "p2-s2-qcm-001",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Combien la France compte-t-elle de régions au total ?",
    choices: [
      "18",
      "13",
      "22",
      "17"
    ],
    explication: "La France compte 13 régions métropolitaines et 5 régions d'outre-mer, soit 18 régions en tout. 13 ne compte que la métropole.",
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
      "La Martinique"
    ],
    explication: "Mayotte est devenue le 101e département français en 2011.",
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
      "Les tribunaux judiciaires"
    ],
    explication: "Les communes tiennent les registres de l'état civil : elles enregistrent les naissances, les mariages et les décès. Le maire y agit comme officier d'état civil.",
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
      "Saint-Pierre-et-Miquelon"
    ],
    explication: "Guadeloupe, Martinique, Mayotte, Guyane et La Réunion sont à la fois départements et régions. Les autres sont des collectivités d'outre-mer à statut particulier.",
    page: 20
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
      "L'eau, l'assainissement, les déchets et les transports urbains",
      "Les collèges, l'action sociale et la protection de l'enfance",
      "Les lycées, la formation professionnelle et les TER",
      "L'état civil, les mariages et les listes électorales"
    ],
    explication: "Les intercommunalités (communautés de communes, métropoles…) gèrent des services publics comme l'eau, l'assainissement, les déchets ou les transports urbains. Collèges et action sociale relèvent du département, lycées et formation professionnelle de la région.",
    page: 19
  },
  {
    id: "p2-s2-qcm-011",
    theme: "si",
    notion: "p2-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Les ressortissants de l'Union européenne peuvent-ils se présenter comme candidats aux élections municipales en France ?",
    choices: [
      "Oui, ils peuvent voter et se présenter comme candidats",
      "Non, ils peuvent seulement y voter",
      "Non, ils peuvent seulement voter aux européennes",
      "Oui, mais seulement s'ils résident en France depuis dix ans"
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
    difficulty: 3,
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
    question: "Lequel de ces noms est celui d'une des 13 régions métropolitaines actuelles ?",
    choices: [
      "Nouvelle-Aquitaine",
      "Midi-Pyrénées",
      "Rhône-Alpes",
      "Nord-Pas-de-Calais"
    ],
    explication: "La Nouvelle-Aquitaine fait partie des 13 régions métropolitaines. Midi-Pyrénées, Rhône-Alpes et Nord-Pas-de-Calais sont d'anciennes régions, fondues respectivement dans l'Occitanie, l'Auvergne-Rhône-Alpes et les Hauts-de-France.",
    page: 21
  },
  {
    id: "p2-s3-qcm-003",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Lequel de ces pays n'est PAS un pays fondateur de la construction européenne ?",
    choices: [
      "Le Danemark",
      "La Belgique",
      "Les Pays-Bas",
      "Le Luxembourg"
    ],
    explication: "Les six fondateurs de 1957 sont la France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg. Le Danemark a adhéré en 1973.",
    page: 22
  },
  {
    id: "p2-s3-qcm-006",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Depuis quand les pièces et billets en euros circulent-ils ?",
    choices: [
      "Le 1er janvier 2002",
      "Le 1er janvier 1999",
      "Le 1er janvier 2000",
      "Le 1er janvier 1993"
    ],
    explication: "Les pièces et billets en euros circulent depuis le 1er janvier 2002, d'abord dans 12 pays. La France partage aujourd'hui l'euro avec 20 autres pays de l'UE.",
    page: 23
  },
  {
    id: "p2-s3-qcm-011",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel est le rôle de la Commission européenne ?",
    choices: [
      "C'est l'organe exécutif de l'UE, qui siège à Bruxelles",
      "C'est l'organe exécutif de l'UE, qui siège à Strasbourg",
      "C'est l'assemblée élue de l'UE, qui siège à Bruxelles",
      "C'est la banque centrale de l'UE, qui siège à Francfort"
    ],
    explication: "La Commission européenne, créée en 1958, est l'organe exécutif de l'UE et siège à Bruxelles. Strasbourg accueille le Parlement européen, Francfort la BCE.",
    page: 23
  },
  {
    id: "p2-s3-qcm-012",
    theme: "si",
    notion: "p2-s3",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "En 2004, combien de pays ont rejoint l'Union européenne en une seule vague d'élargissement ?",
    choices: [
      "10",
      "12",
      "8",
      "5"
    ],
    explication: "En 2004, 10 pays (dont la Pologne, la Hongrie, Malte et Chypre) ont rejoint l'UE, qui est passée de 15 à 25 membres.",
    page: 22
  },
];
