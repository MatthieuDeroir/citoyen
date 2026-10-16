import type { Question } from "../types";

/** Principes et valeurs de la République. */
export const pv: Question[] = [
  {
    id: "an-pv-001",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Complétez les paroles de la Marseillaise « Allons enfants de la patrie… »",
    choices: [
      "Le jour de gloire est arrivé !",
      "Le jour de colère est arrivé !",
      "L'heure de gloire est arrivée !",
      "Le jour de victoire est arrivé !"
    ],
    explication: "La Marseillaise commence par « Allons enfants de la Patrie, le jour de gloire est arrivé ! ». Les autres propositions déforment un mot du vers.",
    page: 9
  },
  {
    id: "an-pv-001-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-001",
    difficulty: 3,
    question: "Dans le refrain de La Marseillaise, quels mots suivent « Aux armes, citoyens » ?",
    choices: [
      "Formez vos bataillons",
      "Formons nos bataillons",
      "Levez vos étendards",
      "Rejoignez vos bataillons"
    ],
    explication: "Le refrain dit : « Aux armes, citoyens, formez vos bataillons, marchons, marchons ! ». Le piège « formons » mélange avec « marchons », qui vient juste après.",
    page: 9
  },
  {
    id: "an-pv-002",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?",
    choices: [
      "Son expérience et ses compétences professionnelles",
      "Sa situation familiale et son projet d'avoir des enfants",
      "Son lieu de naissance et ses origines familiales",
      "Ses convictions religieuses et ses pratiques"
    ],
    explication: "Toute décision d'un employeur doit être fondée sur des raisons professionnelles. Interroger sur l'origine, la religion ou la vie familiale peut fonder une discrimination, punie par la loi.",
    page: 7
  },
  {
    id: "an-pv-002-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-002",
    difficulty: 2,
    question: "Lors d'un entretien d'embauche, un recruteur demande à Samia quelle religion elle pratique. Cette question est-elle permise ?",
    choices: [
      "Non, elle est sans lien avec le poste",
      "Oui, si elle est posée à tous les candidats",
      "Oui, si le poste est au contact du public",
      "Oui, si la candidate peut refuser de répondre"
    ],
    explication: "Une embauche doit reposer sur des raisons professionnelles ; les convictions religieuses ne peuvent pas être un critère. Poser la question à tous ne la rend pas légitime.",
    page: 7
  },
  {
    id: "an-pv-003",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Déclarer ses revenus aux services fiscaux est :",
    choices: [
      "Une obligation légale",
      "Obligatoire uniquement si l'on est imposable",
      "Obligatoire uniquement pour les salariés",
      "Facultatif la première année en France"
    ],
    explication: "Chaque foyer doit déclarer ses revenus chaque année, même s'il n'est pas imposable. Remplir ses obligations fiscales est un acte solidaire qui finance les services publics.",
    page: 7
  },
  {
    id: "an-pv-003-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-003",
    difficulty: 2,
    question: "Selon le livret, remplir ses obligations fiscales est :",
    choices: [
      "Un acte solidaire qui finance les services publics",
      "Un acte de générosité laissé au choix de chacun",
      "Un devoir réservé aux citoyens de nationalité française",
      "Une contribution qui ne finance que l'État central"
    ],
    explication: "Le livret présente le paiement de l'impôt comme un acte solidaire, au bénéfice de tous. Ce n'est ni facultatif ni réservé aux Français.",
    page: 7
  },
  {
    id: "an-pv-004",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    choices: [
      "Ils financent les écoles, les hôpitaux et les routes",
      "Ils financent uniquement la défense et la police",
      "Ils servent seulement à rembourser la dette de l'État",
      "Ils financent l'entretien des lieux de culte construits après 1905"
    ],
    explication: "Les impôts financent les services publics : éducation, santé, sécurité, infrastructures. L'État ne finance aucun culte, et les édifices construits après 1905 ne sont pas publics.",
    page: 7
  },
  {
    id: "an-pv-004-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-004",
    difficulty: 3,
    question: "Selon le livret, de quelle forme de solidarité relève le paiement des impôts ?",
    choices: [
      "De la solidarité collective",
      "De la solidarité intergénérationnelle",
      "De la solidarité familiale",
      "De la solidarité associative"
    ],
    explication: "Le livret classe les obligations fiscales dans la solidarité collective, avec la Sécurité sociale. La solidarité intergénérationnelle désigne les cotisations qui financent les retraites.",
    page: 7
  },
  {
    id: "an-pv-005",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "La liberté d'association est :",
    choices: [
      "Un droit fondamental garanti par la loi",
      "Un droit soumis à l'autorisation préalable du préfet",
      "Un droit réservé aux personnes de nationalité française",
      "Un droit accordé uniquement aux personnes majeures"
    ],
    explication: "La loi du 1er juillet 1901 reconnaît à chacun le droit de créer ou de rejoindre une association, sans autorisation préalable.",
    page: 31
  },
  {
    id: "an-pv-005-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-005",
    difficulty: 3,
    question: "Quelle loi reconnaît la liberté d'association ?",
    choices: [
      "La loi du 1er juillet 1901",
      "La loi du 9 décembre 1905",
      "La loi du 29 juillet 1881",
      "La loi du 21 mars 1884"
    ],
    explication: "La liberté d'association date de 1901. Les dates voisines correspondent à d'autres grandes lois de la IIIe République : liberté de la presse (1881), syndicats (1884), laïcité (1905).",
    page: 31
  },
  {
    id: "an-pv-006",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "La liberté d'expression sur les réseaux sociaux en France est :",
    choices: [
      "Autorisée, mais encadrée par la loi",
      "Totale, car internet échappe à la loi française",
      "Autorisée uniquement sous son vrai nom",
      "Autorisée, sauf pour critiquer le gouvernement"
    ],
    explication: "On peut s'exprimer librement en ligne comme ailleurs, mais la diffamation, les injures publiques et l'incitation à la haine sont punies. Critiquer le gouvernement reste permis.",
    page: 12
  },
  {
    id: "an-pv-006-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-006",
    difficulty: 3,
    question: "Sur un réseau social, Hugo affirme, en sachant que c'est faux, que son voisin vole dans la caisse de son magasin, pour lui nuire. Comment qualifier ce message ?",
    choices: [
      "Une diffamation, punie par la loi",
      "Une opinion protégée par la liberté d'expression",
      "Un blasphème, puni par la loi",
      "Une injure privée, sans conséquence"
    ],
    explication: "Dire des choses fausses sur quelqu'un pour lui nuire, c'est la diffamation, l'une des limites de la liberté d'expression. Le blasphème, lui, n'est pas un délit en France.",
    page: 12
  },
  {
    id: "an-pv-007",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Lequel de ces prénoms évoque un symbole de la République ?",
    choices: [
      "Marianne",
      "Jeanne",
      "Joséphine",
      "Clémence"
    ],
    explication: "Marianne, femme coiffée d'un bonnet phrygien, est le symbole de la République. Jeanne d'Arc est une figure historique, pas un symbole officiel.",
    page: 8
  },
  {
    id: "an-pv-007-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-007",
    difficulty: 3,
    question: "Selon le livret, où la statue de Marianne est-elle placée ?",
    choices: [
      "Dans toutes les mairies",
      "Dans toutes les préfectures",
      "Dans toutes les écoles publiques",
      "Dans tous les tribunaux"
    ],
    explication: "Le livret précise que la statue de Marianne est placée dans toutes les mairies, où elle rappelle la Révolution française.",
    page: 8
  },
  {
    id: "an-pv-008",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Lequel de ces symboles représente la République française ?",
    choices: [
      "Le drapeau bleu, blanc, rouge",
      "La fleur de lys sur fond bleu",
      "L'aigle impérial doré",
      "La croix de Lorraine"
    ],
    explication: "Le drapeau tricolore est un symbole de la République. La fleur de lys évoque la monarchie, l'aigle l'Empire, la croix de Lorraine la France libre.",
    page: 8
  },
  {
    id: "an-pv-008-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-008",
    difficulty: 3,
    question: "En quelle année le drapeau tricolore est-il devenu le drapeau officiel de la France ?",
    choices: [
      "En 1794",
      "En 1789",
      "En 1792",
      "En 1830"
    ],
    explication: "Créé pendant la Révolution, le drapeau tricolore devient officiel en 1794. Il est abandonné sous la Restauration (1814-1830), puis rétabli.",
    page: 8
  },
  {
    id: "an-pv-009",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Où peut-on voir la devise de la République ?",
    choices: [
      "Sur le fronton des mairies et des bâtiments publics",
      "Sur les panneaux d'entrée de toutes les communes",
      "Sur les plaques d'immatriculation des véhicules",
      "À l'entrée des églises et des autres lieux de culte"
    ],
    explication: "« Liberté, Égalité, Fraternité » est inscrite sur le fronton des bâtiments publics (préfectures, mairies…). Les lieux de culte, séparés de l'État, ne la portent pas.",
    page: 6
  },
  {
    id: "an-pv-009-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-009",
    difficulty: 2,
    question: "« Liberté, Égalité, Fraternité » est inscrit au fronton de la préfecture. Que désigne cette formule ?",
    choices: [
      "La devise de la République",
      "L'article 1er de la Constitution",
      "Le refrain de La Marseillaise",
      "Le premier article de la DDHC"
    ],
    explication: "C'est la devise de la France, qui consacre les valeurs fondatrices de la République. L'article 1er de la Constitution énonce, lui, une République indivisible, laïque, démocratique et sociale.",
    page: 6
  },
  {
    id: "an-pv-010",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Lesquels sont des symboles officiels de la République française ?",
    choices: [
      "Le drapeau tricolore et La Marseillaise",
      "Le drapeau tricolore et le coq gaulois",
      "Le drapeau tricolore et la fleur de lys",
      "La Marseillaise et l'aigle impérial"
    ],
    explication: "Le drapeau tricolore et l'hymne national ont un statut officiel. Le coq est largement reconnu comme symbole national, mais il n'a pas de statut officiel selon la Constitution.",
    page: 8
  },
  {
    id: "an-pv-010-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-010",
    difficulty: 3,
    question: "Lequel de ces éléments ne figure PAS parmi les symboles de la France présentés par le livret ?",
    choices: [
      "La croix de Lorraine",
      "Le coq",
      "La langue française",
      "La fête nationale"
    ],
    explication: "Le livret présente la fête nationale, l'hymne, la langue officielle, Marianne, le drapeau et le coq. La croix de Lorraine est l'emblème de la France libre, pas un symbole de la République.",
    page: 8
  },
  {
    id: "an-pv-011",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Peut-on brûler publiquement un drapeau français ?",
    choices: [
      "Non, l'outrage public au drapeau est puni par la loi",
      "Oui, au nom de la liberté d'expression et d'opinion",
      "Oui, lors d'une manifestation déclarée en préfecture",
      "Oui, si le drapeau vous appartient personnellement"
    ],
    explication: "L'outrage au drapeau tricolore commis en public est une infraction pénale, même lors d'une manifestation et même si le drapeau vous appartient.",
    page: 8
  },
  {
    id: "an-pv-012",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quand la sécurité sociale a-t-elle été établie en France ?",
    choices: [
      "En 1945",
      "En 1936",
      "En 1958",
      "En 1968"
    ],
    explication: "La Sécurité sociale a été créée en 1945, à la Libération. 1936 est l'année des congés payés du Front populaire.",
    page: 7
  },
  {
    id: "an-pv-012-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-012",
    difficulty: 2,
    question: "Selon le livret, la Sécurité sociale est un exemple de :",
    choices: [
      "La solidarité par laquelle la Nation protège chacun",
      "La neutralité de l'État envers les religions",
      "La souveraineté exercée par le peuple",
      "L'unité d'une République indivisible"
    ],
    explication: "Le principe de solidarité signifie que la Nation assure une protection aux individus, par exemple la Sécurité sociale. Elle illustre aussi le caractère social de la République (santé).",
    page: 7
  },
  {
    id: "an-pv-013",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que commémore la fête nationale ?",
    choices: [
      "La prise de la Bastille du 14 juillet 1789",
      "La proclamation de la République du 22 septembre 1792",
      "L'abolition des privilèges du 4 août 1789",
      "La Déclaration des droits de l'homme du 26 août 1789"
    ],
    explication: "Le 14 juillet commémore la prise de la Bastille (1789) et la Fête de la Fédération (1790). Les autres dates sont aussi révolutionnaires, mais ne sont pas fêtées.",
    page: 8
  },
  {
    id: "an-pv-013-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-013",
    difficulty: 3,
    question: "Quel événement s'est déroulé le 14 juillet 1790 ?",
    choices: [
      "La Fête de la Fédération",
      "La prise de la Bastille",
      "La proclamation de la République",
      "La création de La Marseillaise"
    ],
    explication: "Un an après la prise de la Bastille, le 14 juillet 1790, est célébrée la Fête de la Fédération. La fête nationale commémore ces deux événements depuis 1880.",
    page: 8
  },
  {
    id: "an-pv-014",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que porte Marianne sur la tête ?",
    choices: [
      "Un bonnet phrygien",
      "Une couronne de lauriers",
      "Une cocarde tricolore",
      "Un diadème étoilé"
    ],
    explication: "Marianne porte un bonnet phrygien, symbole de la liberté. La cocarde tricolore est un autre emblème révolutionnaire, mais elle ne coiffe pas Marianne.",
    page: 8
  },
  {
    id: "an-pv-014-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-014",
    difficulty: 2,
    question: "Que symbolise le bonnet phrygien porté par Marianne ?",
    choices: [
      "La liberté",
      "L'égalité",
      "La fraternité",
      "La souveraineté"
    ],
    explication: "Le livret présente le bonnet phrygien comme le symbole de la liberté.",
    page: 8
  },
  {
    id: "an-pv-015",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que signifie le mot « fraternité » dans la devise française ?",
    choices: [
      "La solidarité entre tous les membres de la société",
      "L'égalité de tous devant la loi",
      "Le droit de penser et de s'exprimer librement",
      "L'attachement à la nation et à ses traditions"
    ],
    explication: "La fraternité implique une solidarité entre les individus, collective et intergénérationnelle. L'égalité devant la loi et la liberté de penser relèvent des deux autres valeurs de la devise.",
    page: 7
  },
  {
    id: "an-pv-015-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-015",
    difficulty: 2,
    question: "Selon le livret, la fraternité républicaine repose sur :",
    choices: [
      "La volonté civique de vivre ensemble",
      "Une origine commune à tous les Français",
      "Un héritage religieux partagé",
      "L'appartenance à une même culture"
    ],
    explication: "La fraternité repose sur la capacité à voir en l'autre un semblable malgré les différences : elle est civique, et non basée sur l'origine ou la religion.",
    page: 7
  },
  {
    id: "an-pv-016",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?",
    choices: [
      "Le coq",
      "Marianne",
      "Le bonnet phrygien",
      "Le faisceau de licteur"
    ],
    explication: "Le coq figure sur les maillots des équipes de France. Il représente la fierté, le courage et la vigilance.",
    page: 8
  },
  {
    id: "an-pv-016-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-016",
    difficulty: 3,
    question: "Selon le livret, que représente le coq ?",
    choices: [
      "La fierté, le courage et la vigilance",
      "La liberté, l'égalité et la fraternité",
      "La force, la justice et la paix",
      "L'unité, la loyauté et l'honneur"
    ],
    explication: "Le coq représente la fierté, le courage et la vigilance. Utilisé depuis l'Antiquité, il n'a pas de statut officiel selon la Constitution.",
    page: 8
  },
  {
    id: "an-pv-017",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle est la devise de la République française ?",
    choices: [
      "Liberté, Égalité, Fraternité",
      "Liberté, Égalité, Solidarité",
      "Liberté, Justice, Fraternité",
      "Unité, Égalité, Fraternité"
    ],
    explication: "La devise de la France est « Liberté, Égalité, Fraternité ». La solidarité découle de la fraternité, mais ne figure pas dans la devise.",
    page: 6
  },
  {
    id: "an-pv-017-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-017",
    difficulty: 2,
    question: "Lequel de ces mots ne fait PAS partie de la devise de la République ?",
    choices: [
      "Solidarité",
      "Liberté",
      "Égalité",
      "Fraternité"
    ],
    explication: "La devise est « Liberté, Égalité, Fraternité ». La solidarité est une conséquence de la fraternité, pas un mot de la devise.",
    page: 6
  },
  {
    id: "an-pv-018",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que la liberté d'association ?",
    choices: [
      "Le droit de créer ou de rejoindre une association librement",
      "Le droit de manifester sur la voie publique sans déclaration",
      "Le droit de créer une association après accord du maire",
      "Le droit pour toute association de recevoir des subventions"
    ],
    explication: "Toute personne peut fonder une association ou en devenir membre, sans autorisation préalable. Aucune subvention n'est due, et manifester est une autre liberté.",
    page: 31
  },
  {
    id: "an-pv-018-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-018",
    difficulty: 2,
    question: "Une association qui ne respecte pas les principes républicains peut-elle être dissoute ?",
    choices: [
      "Oui, par l'État",
      "Non, la liberté d'association est absolue",
      "Oui, mais seulement par ses propres membres",
      "Non, sauf si elle reçoit des subventions"
    ],
    explication: "La liberté d'association n'est pas sans limite : une association qui ne respecte pas les principes républicains peut être dissoute par l'État.",
    page: 31
  },
  {
    id: "an-pv-019",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce qu'une liberté ?",
    choices: [
      "Un droit fondamental de faire tout ce qui ne nuit pas à autrui",
      "Un droit de faire tout ce que la morale religieuse autorise",
      "Un droit de faire seulement ce que l'État a expressément permis",
      "Un droit de faire tout ce que l'on veut, du moment qu'on est chez soi"
    ],
    explication: "Selon l'article 4 de la DDHC de 1789, la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. Ce qui n'est pas interdit par la loi est permis : nul besoin d'une autorisation expresse.",
    page: 6
  },
  {
    id: "an-pv-019-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-019",
    difficulty: 3,
    question: "Selon la DDHC de 1789, qui fixe les limites de la liberté de chacun ?",
    choices: [
      "La loi",
      "Le juge",
      "Le Gouvernement",
      "La morale"
    ],
    explication: "La liberté consiste à faire tout ce qui ne nuit pas à autrui, ses limites étant définies par la loi. Le juge applique la loi, il ne la fixe pas.",
    page: 6
  },
  {
    id: "an-pv-020",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Selon la Constitution, la France est une République…",
    choices: [
      "Indivisible, laïque, démocratique et sociale",
      "Indivisible, laïque, démocratique et libérale",
      "Unie, laïque, fédérale et sociale",
      "Indivisible, neutre, parlementaire et sociale"
    ],
    explication: "L'article 1er de la Constitution du 4 octobre 1958 : « La France est une République indivisible, laïque, démocratique et sociale. » Un seul mot change dans chaque piège.",
    page: 10
  },
  {
    id: "an-pv-020-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-020",
    difficulty: 3,
    question: "Quel texte précise que « La France est une République indivisible, laïque, démocratique et sociale » ?",
    choices: [
      "L'article 1er de la Constitution de 1958",
      "L'article 1er de la DDHC de 1789",
      "L'article 3 de la Constitution de 1958",
      "L'article 1er de la loi de 1905"
    ],
    explication: "Les principes de la République sont définis à l'article 1er de la Constitution du 4 octobre 1958. L'article 3 traite de la souveraineté nationale.",
    page: 10
  },
  {
    id: "an-pv-021",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Sur quel document peut-on voir Marianne ?",
    choices: [
      "Sur les timbres postaux",
      "Sur les billets en euros",
      "Sur les chèques bancaires",
      "Sur les tickets de métro"
    ],
    explication: "Marianne figure sur les timbres et sur les documents de l'administration française. Les billets en euros, communs à l'Union, n'en portent pas.",
    page: 8
  },
  {
    id: "an-pv-021-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-021",
    difficulty: 2,
    question: "Selon le livret, où Marianne apparaît-elle, en dehors des mairies ?",
    choices: [
      "Sur les documents de l'administration",
      "Sur les billets de banque en euros",
      "Sur le drapeau de l'Union européenne",
      "Sur la façade des lieux de culte"
    ],
    explication: "Marianne apparaît sur les documents de l'administration française, et sa statue est placée dans toutes les mairies.",
    page: 8
  },
  {
    id: "an-pv-022",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une des valeurs de la devise républicaine est l'Égalité. Qu'est-ce que cela signifie ?",
    choices: [
      "La loi est la même pour tous, sans distinction",
      "Chacun reçoit les mêmes aides, quelle que soit sa situation",
      "Chacun paie le même montant d'impôt",
      "Chacun obtient les mêmes résultats, quels que soient ses efforts"
    ],
    explication: "Tous les citoyens ont les mêmes droits quels que soient leur sexe, leur origine, leur religion, leurs opinions ou leur orientation sexuelle. L'égalité des droits n'est pas l'uniformité des aides ou des impôts.",
    page: 6
  },
  {
    id: "an-pv-022-v1",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-022",
    difficulty: 3,
    question: "Selon l'article 1er de la DDHC, les hommes naissent et demeurent…",
    choices: [
      "libres et égaux en droits",
      "libres et égaux en devoirs",
      "égaux et solidaires en droits",
      "libres et égaux devant Dieu"
    ],
    explication: "« Les hommes naissent et demeurent libres et égaux en droits » (article 1er de la DDHC de 1789). Ce principe fonde aussi le caractère social de la République.",
    page: 6
  },
  {
    id: "an-pv-023",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Une personne peut-elle changer librement de religion en France ?",
    choices: [
      "Oui, la liberté de conscience le garantit",
      "Oui, mais il faut le déclarer à la mairie",
      "Oui, mais seulement après sa majorité",
      "Oui, mais une seule fois dans sa vie"
    ],
    explication: "La laïcité garantit la liberté de conscience : chacun est libre d'avoir ou non une religion, d'en changer (droit de se convertir) ou de ne plus en avoir, sans aucune démarche.",
    page: 10
  },
  {
    id: "an-pv-023-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-023",
    difficulty: 2,
    question: "Selon le livret, la liberté de conscience permet à chacun :",
    choices: [
      "D'avoir une religion, d'en changer ou de ne plus en avoir",
      "De choisir une religion une seule fois, à sa majorité",
      "De pratiquer sa religion sans aucune limite",
      "De faire reconnaître sa religion par l'État"
    ],
    explication: "La liberté de conscience couvre le droit de croire, de se convertir ou de ne plus croire. La pratique religieuse reste limitée par le respect de l'ordre public, et l'État ne reconnaît aucun culte.",
    page: 10
  },
  {
    id: "an-pv-024",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    choices: [
      "L'État ne privilégie et ne finance aucune religion",
      "L'État finance tous les cultes de manière égale",
      "L'État interdit les signes religieux dans la rue",
      "L'État ne reconnaît que les grandes religions"
    ],
    explication: "L'État ne soutient aucune organisation religieuse et les considère toutes de la même manière. Neutralité ne veut pas dire financement égal : il n'en finance aucune.",
    page: 11
  },
  {
    id: "an-pv-024-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-024",
    difficulty: 3,
    question: "L'État a-t-il le droit de payer un personnel religieux ?",
    choices: [
      "Non, sauf exceptions comme en Alsace et en Moselle",
      "Oui, pour les cultes présents en France avant 1905",
      "Oui, à condition de payer tous les cultes à égalité",
      "Non, sauf dans les communes de plus de 10 000 habitants"
    ],
    explication: "L'État n'a pas le droit de payer un personnel religieux. Il existe des exceptions en Alsace et en Moselle, où l'État, pour des raisons historiques, a des accords spéciaux avec certaines religions.",
    page: 11
  },
  {
    id: "an-pv-025",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que peut faire un usager du service public dans une mairie ?",
    choices: [
      "Demander un acte d'état civil ou faire ses démarches administratives",
      "Demander ou renouveler son titre de séjour ou sa carte de résident",
      "Déposer une plainte pour un vol ou une agression",
      "Demander le versement de ses allocations familiales mensuelles"
    ],
    explication: "La commune tient les registres de l'état civil (naissances, mariages, décès). Le titre de séjour relève de la préfecture, la plainte de la police ou de la gendarmerie, les allocations de la CAF.",
    page: 19
  },
  {
    id: "an-pv-025-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-025",
    difficulty: 2,
    question: "Mehdi a besoin de l'acte de naissance de son fils, né à Lyon. À qui doit-il s'adresser ?",
    choices: [
      "À la mairie de Lyon",
      "À la préfecture du Rhône",
      "Au tribunal judiciaire de Lyon",
      "À la caisse d'allocations familiales"
    ],
    explication: "Les registres de l'état civil sont tenus par la commune où l'événement a eu lieu : c'est donc la mairie de Lyon qui délivre l'acte de naissance.",
    page: 19
  },
  {
    id: "an-pv-026",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "En France, il est possible pour l'État de financer :",
    choices: [
      "L'entretien des édifices religieux construits avant 1905",
      "Le salaire des prêtres, pasteurs, rabbins et imams",
      "La construction de nouveaux lieux de culte en ville",
      "L'organisation des grandes fêtes religieuses"
    ],
    explication: "Les édifices religieux antérieurs à 1905 appartiennent à des collectivités publiques, qui peuvent les entretenir ; l'État peut aussi restaurer un monument religieux classé. Il ne finance ni construction ni personnel religieux.",
    page: 11
  },
  {
    id: "an-pv-026-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-026",
    difficulty: 2,
    question: "Une église du XIIe siècle classée au patrimoine doit être restaurée. L'État peut-il financer les travaux ?",
    choices: [
      "Oui, il peut restaurer un monument religieux classé",
      "Non, la loi de 1905 interdit tout financement",
      "Oui, à condition que la paroisse paie la moitié",
      "Non, seuls les fidèles peuvent payer les travaux"
    ],
    explication: "L'État n'a pas le droit de financer la construction d'un édifice religieux, mais il a la possibilité de financer la restauration d'un monument religieux classé au patrimoine.",
    page: 11
  },
  {
    id: "an-pv-027",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    choices: [
      "1905",
      "1901",
      "1882",
      "1946"
    ],
    explication: "La loi de 1905 sépare les Églises et l'État : c'est le fondement de la laïcité. 1901 est l'année de la loi sur la liberté d'association.",
    page: 11
  },
  {
    id: "an-pv-027-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-027",
    difficulty: 2,
    question: "En 1905, la France adopte une loi qui :",
    choices: [
      "Sépare les Églises et l'État",
      "Reconnaît la liberté d'association",
      "Rend l'école gratuite et obligatoire",
      "Reconnaît la liberté de la presse"
    ],
    explication: "La loi de 1905 organise la séparation des Églises et de l'État. La liberté d'association date de 1901, la liberté de la presse de 1881.",
    page: 11
  },
  {
    id: "an-pv-028",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que dit la loi de 1905 ?",
    choices: [
      "La République ne reconnaît, ne salarie ni ne subventionne aucun culte",
      "L'État reconnaît et finance les principales religions",
      "Les signes religieux sont interdits dans l'espace public",
      "Les ministres des cultes sont nommés par l'État"
    ],
    explication: "La loi de 1905 garantit le libre exercice des cultes, sans en reconnaître, en salarier ni en subventionner aucun. Elle n'interdit pas les signes religieux dans la rue.",
    page: 11
  },
  {
    id: "an-pv-028-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-028",
    difficulty: 3,
    question: "La République « ne salarie » aucun culte. Qu'est-ce que cela signifie ?",
    choices: [
      "L'État ne paie pas les responsables religieux",
      "L'État ne paie pas l'entretien des églises anciennes",
      "L'État n'emploie pas de croyants dans ses services",
      "L'État ne verse aucune aide aux fidèles pratiquants"
    ],
    explication: "Ne salarier aucun culte, c'est ne pas payer de personnel religieux. L'entretien des édifices antérieurs à 1905 reste possible, et les agents publics peuvent avoir une religion à titre personnel.",
    page: 11
  },
  {
    id: "an-pv-029",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que garantit le principe de laïcité ?",
    choices: [
      "La liberté de croire ou de ne pas croire",
      "La neutralité religieuse de chaque citoyen en public",
      "Un financement égal de toutes les religions",
      "La primauté des religions historiques de la France"
    ],
    explication: "La laïcité garantit la liberté de conscience et le respect de toutes les croyances. La neutralité s'impose à l'État et à ses agents, pas aux citoyens dans l'espace public.",
    page: 10
  },
  {
    id: "an-pv-029-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-029",
    difficulty: 2,
    question: "Laquelle de ces libertés n'est PAS garantie par la laïcité ?",
    choices: [
      "Imposer sa religion à autrui par la pression",
      "Ne plus avoir de religion",
      "Changer de religion",
      "Pratiquer sa religion dans le respect de l'ordre public"
    ],
    explication: "La laïcité garantit la liberté d'avoir ou non une religion, d'en changer et de la pratiquer dans les limites de l'ordre public. Convaincre par la violence, la menace ou la pression est interdit.",
    page: 10
  },
  {
    id: "an-pv-030",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel jour célèbre-t-on officiellement la laïcité en France ?",
    choices: [
      "Le 9 décembre",
      "Le 26 août",
      "Le 4 août",
      "Le 22 septembre"
    ],
    explication: "La laïcité, principe de valeur constitutionnelle, est officiellement célébrée le 9 décembre, date anniversaire de la loi de 1905. Le 26 août est la date de la DDHC (1789).",
    page: 10
  },
  {
    id: "an-pv-030-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-030",
    difficulty: 2,
    question: "À quoi correspond le 9 décembre, journée de la laïcité ?",
    choices: [
      "À la loi de séparation de 1905",
      "À la loi de 2004 sur les signes religieux",
      "À l'adoption de la Constitution de 1958",
      "À la Déclaration des droits de l'homme"
    ],
    explication: "Le 9 décembre rappelle la loi du 9 décembre 1905, texte fondateur de la laïcité. La loi sur les signes religieux à l'école date du 15 mars 2004.",
    page: 10
  },
  {
    id: "an-pv-031",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?",
    choices: [
      "Un signe discret, comme une petite médaille",
      "Un voile, s'il est porté avec discrétion",
      "Une grande croix, si l'élève est majeur",
      "Aucun, même discret"
    ],
    explication: "La loi du 15 mars 2004 interdit aux élèves les signes ou tenues montrant leur religion de manière ostensible ; les signes discrets restent autorisés. L'âge de l'élève n'y change rien.",
    page: 13
  },
  {
    id: "an-pv-031-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-031",
    difficulty: 3,
    question: "Quelle loi interdit aux élèves des écoles publiques de porter des signes religieux ostensibles ?",
    choices: [
      "La loi du 15 mars 2004",
      "La loi du 9 décembre 1905",
      "La loi du 11 octobre 2010",
      "La loi du 28 mars 1882"
    ],
    explication: "C'est la loi du 15 mars 2004. Celle du 11 octobre 2010 interdit la dissimulation du visage dans l'espace public.",
    page: 13
  },
  {
    id: "an-pv-032",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel terme désigne précisément la haine ou les préjugés contre les Juifs ?",
    choices: [
      "L'antisémitisme",
      "Le racisme",
      "La xénophobie",
      "L'intégrisme"
    ],
    explication: "L'antisémitisme est une forme spécifique de racisme et de haine dirigée contre les Juifs. « Racisme » est le terme général, pas le terme précis.",
    page: 7
  },
  {
    id: "an-pv-032-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-032",
    difficulty: 3,
    question: "Comment le livret appelle-t-il une discrimination fondée sur la religion supposée d'une personne ?",
    choices: [
      "La discrimination sur critère religieux",
      "La discrimination fondée sur l'origine",
      "Le prosélytisme abusif",
      "L'antisémitisme"
    ],
    explication: "La discrimination sur critère religieux vise la religion supposée de la personne. La discrimination fondée sur l'origine définit le racisme, et l'antisémitisme vise précisément les Juifs.",
    page: 7
  },
  {
    id: "an-pv-033",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel texte est considéré comme le texte fondateur de la laïcité ?",
    choices: [
      "La loi du 9 décembre 1905",
      "La Déclaration des droits de l'homme de 1789",
      "La Constitution de 1958",
      "Les lois Jules Ferry de 1882"
    ],
    explication: "La loi de 1905 de séparation des Églises et de l'État fonde la laïcité. La DDHC garantit la liberté d'opinion, et la Constitution de 1958 a repris le principe.",
    page: 11
  },
  {
    id: "an-pv-033-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-033",
    difficulty: 3,
    question: "Quel est l'objet de la loi de 1905 ?",
    choices: [
      "La séparation des Églises et de l'État",
      "La liberté de conscience des seuls élèves",
      "La neutralité des entreprises privées",
      "La reconnaissance officielle des cultes"
    ],
    explication: "La loi de 1905 porte sur la séparation des Églises et de l'État. Elle ne reconnaît aucun culte et ne s'applique pas aux entreprises privées.",
    page: 11
  },
  {
    id: "an-pv-034",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quelle institution française doit rester neutre en matière de religion ?",
    choices: [
      "L'école publique",
      "Les associations cultuelles",
      "Les écoles privées sous contrat",
      "Les aumôneries"
    ],
    explication: "L'État, les collectivités et les services publics, dont l'école publique, sont neutres vis-à-vis des religions. Les associations cultuelles et les aumôneries sont, par nature, religieuses.",
    page: 11
  },
  {
    id: "an-pv-034-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-034",
    difficulty: 2,
    question: "Selon le livret, qui doit être neutre vis-à-vis des religions ?",
    choices: [
      "L'État et les services publics",
      "Les citoyens dans l'espace public",
      "Les salariés des entreprises privées",
      "Les usagers des services publics"
    ],
    explication: "La neutralité s'impose à l'État, aux collectivités territoriales et aux services publics. Les citoyens dans la rue, les salariés du privé et les usagers peuvent manifester leur religion.",
    page: 11
  },
  {
    id: "an-pv-035",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que la laïcité ?",
    choices: [
      "La séparation des Églises et de l'État et la liberté de conscience",
      "L'interdiction des religions dans l'espace public",
      "Un financement égal de toutes les religions par l'État",
      "La reconnaissance officielle des grandes religions"
    ],
    explication: "La laïcité repose sur la liberté de conscience, la séparation des Églises et de l'État et la neutralité de l'État. Elle n'interdit pas la religion dans l'espace public.",
    page: 10
  },
  {
    id: "an-pv-035-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-035",
    difficulty: 2,
    question: "Laquelle de ces affirmations sur la laïcité est inexacte ?",
    choices: [
      "Elle interdit tout signe religieux dans la rue",
      "Elle garantit la liberté de ne pas croire",
      "Elle impose la neutralité de l'État",
      "Elle garantit le libre exercice des cultes"
    ],
    explication: "Toute personne a le droit de montrer sa religion dans l'espace public (rues, parcs, transports). Seule la dissimulation du visage y est interdite, par la loi de 2010.",
    page: 10
  },
  {
    id: "an-pv-036",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "À l'école, la charte de la laïcité permet de :",
    choices: [
      "Rappeler les règles de la laïcité et du vivre-ensemble",
      "Interdire l'enseignement du fait religieux",
      "Permettre aux familles de choisir les cours suivis",
      "Fixer le calendrier des fêtes religieuses à l'école"
    ],
    explication: "La Charte de la laïcité à l'École liste les règles qui garantissent la laïcité à l'école. On ne peut pas refuser un enseignement du programme pour motif religieux.",
    page: 13
  },
  {
    id: "an-pv-036-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-036",
    difficulty: 3,
    question: "À qui s'adresse la Charte de la laïcité à l'École ?",
    choices: [
      "Aux personnels, aux élèves et aux parents",
      "Aux seuls enseignants et chefs d'établissement",
      "Aux seuls élèves des collèges et lycées",
      "Aux seuls parents lors de l'inscription"
    ],
    explication: "La Charte s'adresse à l'ensemble des personnels (professeurs, animateurs périscolaires…), aux élèves et aux parents d'élèves.",
    page: 13
  },
  {
    id: "an-pv-037",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?",
    choices: [
      "Les agents du service public",
      "Les usagers du service public",
      "Uniquement les enseignants",
      "Les représentants des cultes"
    ],
    explication: "Les personnes qui travaillent dans les services publics doivent rester neutres pendant leur travail. La neutralité ne s'impose pas aux usagers.",
    page: 12
  },
  {
    id: "an-pv-037-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-037",
    difficulty: 3,
    question: "Dans une mairie, qui peut porter un signe religieux visible ?",
    choices: [
      "L'usager venu faire une démarche",
      "L'agent d'accueil, si le signe reste discret",
      "L'agent d'accueil, en dehors du guichet",
      "Personne, ni agent ni usager"
    ],
    explication: "Les usagers peuvent porter un signe religieux dans un service public, en respectant ses règles de fonctionnement. Les agents, eux, ne peuvent pas montrer leur religion pendant leur travail.",
    page: 12
  },
  {
    id: "an-pv-038",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Une personne déclare ne croire en aucun dieu. On peut dire :",
    choices: [
      "Qu'elle est athée, et c'est son droit",
      "Qu'elle est agnostique, et c'est son droit",
      "Qu'elle est laïque, et c'est son droit",
      "Qu'elle est déiste, et c'est son droit"
    ],
    explication: "Une personne est dite athée lorsqu'elle ne croit en aucune religion ; agnostique lorsqu'elle est sceptique vis-à-vis de la religion. « Laïque » qualifie l'État, pas une croyance.",
    page: 10
  },
  {
    id: "an-pv-038-v1",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-pv-038",
    difficulty: 3,
    question: "Selon le livret, comment appelle-t-on une personne sceptique vis-à-vis de la religion ?",
    choices: [
      "Agnostique",
      "Athée",
      "Laïque",
      "Apostat"
    ],
    explication: "Le livret distingue l'agnostique, sceptique vis-à-vis de la religion, de l'athée, qui ne croit en aucune religion.",
    page: 10
  },
  {
    id: "p1-s1-qcm-003",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Depuis quand l'égalité entre les femmes et les hommes est-elle inscrite dans le préambule de la Constitution ?",
    choices: [
      "1946",
      "1944",
      "1958",
      "1789"
    ],
    explication: "L'égalité femmes-hommes est inscrite dans le préambule de la Constitution depuis 1946 et s'applique dans tous les domaines. 1944 est l'année du droit de vote des femmes.",
    page: 6
  },
  {
    id: "p1-s1-qcm-005",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel exemple illustre la solidarité intergénérationnelle ?",
    choices: [
      "Les cotisations des salariés financent les retraites",
      "La Sécurité sociale rembourse les soins",
      "Les impôts financent les services publics",
      "Les citoyens participent à la défense de la Nation"
    ],
    explication: "En cotisant, chaque salarié contribue aux versements des retraites : c'est la solidarité intergénérationnelle. Les autres exemples relèvent de la solidarité collective.",
    page: 7
  },
  {
    id: "p1-s1-qcm-007",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Depuis quelle année le 14 juillet est-il la fête nationale ?",
    choices: [
      "1880",
      "1790",
      "1792",
      "1848"
    ],
    explication: "Depuis 1880, le 14 juillet est la fête nationale. 1790 est l'année de la Fête de la Fédération qu'elle commémore, 1792 celle de La Marseillaise.",
    page: 8
  },
  {
    id: "p1-s1-qcm-009",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Pendant quelle période le drapeau tricolore n'a-t-il PAS été le drapeau de la France ?",
    choices: [
      "La Restauration (1814-1830)",
      "Le Premier Empire (1804-1814)",
      "La IIe République (1848-1852)",
      "La IIIe République (1870-1940)"
    ],
    explication: "Devenu officiel en 1794, le drapeau tricolore a été abandonné lors de la Restauration (1814-1830), avant d'être rétabli.",
    page: 8
  },
  {
    id: "p1-s1-qcm-010",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Lequel de ces symboles n'a PAS de statut officiel selon la Constitution ?",
    choices: [
      "Le coq",
      "Le drapeau tricolore",
      "La Marseillaise",
      "La langue française"
    ],
    explication: "Le coq, symbole de fierté, de courage et de vigilance, est largement reconnu mais n'a pas de statut officiel selon la Constitution, contrairement au drapeau, à l'hymne et à la langue.",
    page: 8
  },
  {
    id: "p1-s1-qcm-012",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Comment le livret définit-il le racisme ?",
    choices: [
      "Une discrimination fondée sur l'origine ou l'appartenance ethnique",
      "Un traitement dénigrant envers une personne en raison de son sexe",
      "Une discrimination fondée sur la religion supposée de la personne",
      "Une attitude hostile liée à l'orientation sexuelle d'une personne"
    ],
    explication: "Le racisme est une discrimination fondée sur l'origine ou l'appartenance ethnique ou raciale. Les autres définitions sont celles du sexisme, de la discrimination sur critère religieux et de la haine anti-LGBT+.",
    page: 7
  },
  {
    id: "p1-s2-qcm-002",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Dans la hiérarchie des normes, quel texte est au-dessus de toutes les lois ?",
    choices: [
      "La Constitution",
      "Le Code civil",
      "Les décrets du Président",
      "Le règlement de l'Assemblée"
    ],
    explication: "Dans un État de droit, la Constitution se situe tout en haut de la hiérarchie des normes : elle est au-dessus de toutes les lois. Le Code civil est lui-même un ensemble de lois.",
    page: 10
  },
  {
    id: "p1-s2-qcm-004",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "L'État peut-il financer la construction d'un édifice religieux ?",
    choices: [
      "Non, mais il peut restaurer un monument religieux classé",
      "Oui, s'il s'agit d'un culte présent en France avant 1905",
      "Oui, si la commune accepte de participer au projet",
      "Non, ni la construction ni la restauration d'aucun édifice"
    ],
    explication: "L'État ne finance ni la construction d'édifices religieux ni le personnel religieux, mais il peut financer la restauration d'un monument religieux classé au patrimoine.",
    page: 11
  },
  {
    id: "p1-s2-qcm-005",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "En France, le blasphème est…",
    choices: [
      "autorisé : ce n'est pas un délit",
      "un délit puni d'une amende",
      "un délit, sauf sous forme de caricature",
      "interdit seulement dans les médias"
    ],
    explication: "Le blasphème n'est pas un délit en France. Chacun a le droit de critiquer ou de se moquer d'une religion, y compris par la caricature : c'est la liberté d'expression.",
    page: 11
  },
  {
    id: "p1-s2-qcm-006",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Laquelle de ces pratiques est une limite légale à la liberté d'expression ?",
    choices: [
      "L'incitation à la haine raciale, ethnique ou religieuse",
      "La critique publique d'une religion et de ses dogmes",
      "La caricature d'un prophète ou d'un dieu",
      "La critique publique du gouvernement en place"
    ],
    explication: "Les limites de la liberté d'expression concernent notamment la diffamation, l'incitation à la haine, l'incitation à discriminer et le négationnisme — mais pas le blasphème ni la critique politique.",
    page: 12
  },
  {
    id: "p1-s2-qcm-007",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qu'interdit la loi du 11 octobre 2010 ?",
    choices: [
      "La dissimulation du visage dans l'espace public",
      "Les signes religieux ostensibles à l'école publique",
      "Les signes religieux portés par les agents publics",
      "La distribution de tracts religieux dans la rue"
    ],
    explication: "La loi du 11 octobre 2010 interdit la dissimulation du visage dans l'espace public (cagoule, masque, voile intégral…) pour protéger l'ordre public. Les signes ostensibles à l'école relèvent de la loi de 2004.",
    page: 12
  },
  {
    id: "p1-s2-qcm-008",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Un agent public peut-il porter un signe religieux pendant son travail ?",
    choices: [
      "Non, ils doivent rester neutres au travail",
      "Oui, c'est une liberté fondamentale",
      "Oui, si le signe est discret",
      "Non, sauf dans les hôpitaux publics"
    ],
    explication: "Pour garantir la neutralité de l'État, les agents publics ne peuvent pas porter de signes religieux au travail, même discrets, y compris à l'hôpital. Les usagers, eux, le peuvent.",
    page: 13
  },
  {
    id: "p1-s2-qcm-010",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Selon l'article 3 de la Constitution, à qui appartient la souveraineté nationale ?",
    choices: [
      "Au peuple, qui l'exerce par ses représentants et par référendum",
      "Au peuple, qui l'exerce uniquement par ses représentants",
      "Au Parlement, qui l'exerce au nom du peuple",
      "Au Président de la République, élu par le peuple"
    ],
    explication: "« La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum » (article 3 de la Constitution de 1958). Oublier le référendum rend la réponse fausse.",
    page: 14
  },
  {
    id: "p1-s2-qcm-011",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle mesure illustre le caractère social de la République ?",
    choices: [
      "L'école gratuite",
      "Le suffrage universel",
      "La séparation des pouvoirs",
      "La liberté de la presse"
    ],
    explication: "L'État favorise l'égalité des chances par l'éducation (école gratuite), le logement social, l'emploi (RSA) et la santé (Sécurité sociale). Le suffrage universel relève du caractère démocratique.",
    page: 14
  },
  {
    id: "p1-s2-qcm-012",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Un employeur peut-il refuser une autorisation d'absence demandée par un salarié pour une fête religieuse ?",
    choices: [
      "Oui, à condition que ce refus ne soit pas discriminatoire",
      "Non, il doit toujours l'accorder",
      "Oui, mais uniquement dans la fonction publique",
      "Non, sauf s'il s'agit d'un agent public"
    ],
    explication: "Un salarié ou un agent public peut solliciter une autorisation d'absence pour une fête religieuse ; l'employeur peut la refuser si ce refus n'est pas discriminatoire, par exemple pour des nécessités de service.",
    page: 13
  },
  {
    id: "p1-s2-qcm-013",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "En France, le droit de se présenter aux élections appartient…",
    choices: [
      "à tout citoyen majeur jouissant de ses droits civiques",
      "aux seuls citoyens français depuis au moins dix ans",
      "aux seuls citoyens membres d'un parti politique",
      "aux seuls citoyens ayant déjà voté une fois"
    ],
    explication: "Tous les citoyens, hommes et femmes, d'au moins 18 ans et disposant de leurs droits civils et politiques ont le droit de voter et de se présenter aux élections, dans les conditions fixées par la loi.",
    page: 14
  },
  {
    id: "ms-pv-001",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Camille, agente d'accueil à la mairie de Nantes, souhaite porter une grande croix bien visible sur son uniforme pendant son service. Est-ce conforme aux principes de la République ?",
    choices: [
      "Non, un agent public doit rester neutre au travail",
      "Oui, la liberté de conscience s'applique partout",
      "Oui, si aucun usager ne s'en plaint",
      "Oui, si elle n'en parle pas aux usagers"
    ],
    explication: "Pour garantir la neutralité de l'État, les agents publics ne peuvent pas porter de signes religieux au travail. Leur liberté de conscience reste entière en dehors du service.",
    page: 13
  },
  {
    id: "ms-pv-002",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Fatima vient à la mairie de Roubaix déposer un dossier d'inscription scolaire ; elle porte un foulard. L'agent refuse de la recevoir tant qu'elle ne l'a pas retiré. Ce refus est-il conforme ?",
    choices: [
      "Non, la neutralité ne s'impose pas aux usagers",
      "Oui, toute personne doit être neutre dans une mairie",
      "Oui, aucun signe religieux n'est admis dans un bâtiment public",
      "Non, mais elle devra le retirer si le maire l'exige"
    ],
    explication: "Les usagers peuvent porter un signe religieux dans un service public, en respectant ses règles de fonctionnement. L'interdiction d'exposer des emblèmes dans les bâtiments vise les locaux, pas les personnes.",
    page: 12
  },
  {
    id: "ms-pv-003",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Aux urgences d'un hôpital public de Toulouse, Karim exige, pour des raisons religieuses, que sa femme soit examinée par une médecin femme, alors que seul un médecin homme est de garde. Que prévoit le principe de laïcité ?",
    choices: [
      "On ne peut pas exiger d'adapter le service public à sa religion",
      "L'hôpital doit faire venir une médecin femme sans délai",
      "L'hôpital doit respecter ce choix au nom de la liberté de culte",
      "Le médecin doit d'abord obtenir l'accord écrit du mari"
    ],
    explication: "Il n'est pas possible d'exiger une adaptation du service public au nom d'une religion. La liberté de culte ne permet pas d'imposer ses convictions au fonctionnement du service.",
    page: 12
  },
  {
    id: "ms-pv-004",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Noah, élève de quatrième dans un collège public de Strasbourg, porte une petite médaille religieuse discrète. Est-ce autorisé ?",
    choices: [
      "Oui, les signes discrets sont autorisés à l'école",
      "Non, tout signe religieux est interdit à l'école",
      "Oui, mais seulement avec l'accord écrit de ses parents",
      "Non, la loi de 2004 interdit même les signes discrets"
    ],
    explication: "La loi du 15 mars 2004 interdit seulement les signes ou tenues montrant sa religion de manière ostensible ; les signes discrets sont autorisés.",
    page: 13
  },
  {
    id: "ms-pv-005",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Pendant un cours de SVT sur l'évolution des espèces, Yasmine, collégienne dans un établissement public, refuse d'y assister en invoquant sa religion. Que prévoit la laïcité à l'école ?",
    choices: [
      "Elle ne peut pas refuser un enseignement du programme",
      "Elle peut être dispensée si ses parents l'écrivent",
      "Le professeur doit adapter son cours à ses croyances",
      "Elle peut suivre à la place un cours de son choix"
    ],
    explication: "Il n'est pas possible de refuser, en raison de sa religion, un enseignement du programme scolaire. La laïcité à l'école vise à permettre aux élèves de penser librement.",
    page: 13
  },
  {
    id: "ms-pv-006",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "David, comptable dans une entreprise privée de Marseille, porte une kippa au bureau. Son employeur veut la lui interdire sans aucune justification. Le peut-il ?",
    choices: [
      "Non, sauf pour le bon fonctionnement ou la sécurité",
      "Oui, la laïcité s'applique à tous les lieux de travail",
      "Oui, l'employeur fixe librement la tenue de ses salariés",
      "Non, un employeur privé ne peut jamais poser de limite"
    ],
    explication: "Les salariés du privé peuvent porter des signes religieux, sauf si cela perturbe le bon fonctionnement de l'entreprise ou pour des raisons de sécurité. L'employeur peut fixer des limites justifiées dans le règlement intérieur, pas sans motif.",
    page: 13
  },
  {
    id: "ms-pv-007",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Harpreet travaille sur un chantier de BTP où le casque de protection est obligatoire. Son employeur lui demande de retirer son turban pour porter le casque. Cette demande est-elle conforme ?",
    choices: [
      "Oui, une limite fondée sur la sécurité est possible",
      "Non, un salarié du privé porte toujours ses signes",
      "Oui, car la laïcité interdit les signes au travail",
      "Non, seul un inspecteur du travail peut l'exiger"
    ],
    explication: "Un salarié du privé peut exprimer sa religion au travail, sauf pour des raisons de sécurité ou de bon fonctionnement. La laïcité n'interdit pas les signes religieux dans les entreprises privées.",
    page: 13
  },
  {
    id: "ms-pv-008",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Rachel, infirmière dans un hôpital public, demande un jour d'absence pour Yom Kippour. Sa cadre refuse, car le service manque de personnel ce jour-là. Ce refus est-il conforme ?",
    choices: [
      "Oui, il est motivé par les nécessités du service",
      "Non, une fête religieuse ouvre droit à une absence",
      "Oui, un agent public ne peut jamais s'absenter pour un culte",
      "Non, sauf si Rachel n'a plus de jours de congé"
    ],
    explication: "Un agent public peut solliciter une autorisation d'absence pour une fête religieuse. L'employeur peut la refuser si ce refus n'est pas discriminatoire, notamment pour des nécessités de service.",
    page: 13
  },
  {
    id: "ms-pv-009",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Sur un marché de Saint-Denis, un passant interpelle Aminata, qui porte un voile, en affirmant que « la laïcité interdit les signes religieux dans la rue ». A-t-il raison ?",
    choices: [
      "Non, chacun peut montrer sa religion dans la rue",
      "Oui, la laïcité impose la neutralité dans la rue",
      "Oui, depuis la loi du 11 octobre 2010",
      "Non, sauf sur les marchés et dans les transports"
    ],
    explication: "Toute personne a le droit de montrer sa religion dans l'espace public, marchés et transports compris. La loi de 2010 interdit seulement la dissimulation du visage, pas le voile.",
    page: 12
  },
  {
    id: "ms-pv-010",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Dans un parc de Lyon, une femme se promène avec un voile intégral qui dissimule entièrement son visage. Est-ce autorisé ?",
    choices: [
      "Non, la dissimulation du visage y est interdite",
      "Oui, c'est la liberté de manifester sa religion",
      "Oui, l'interdiction ne vise que les services publics",
      "Non, mais seulement à proximité des écoles"
    ],
    explication: "La loi du 11 octobre 2010 interdit la dissimulation du visage dans tout l'espace public (cagoule, masque, voile intégral…), pour protéger l'ordre public.",
    page: 12
  },
  {
    id: "ms-pv-011",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Une association veut organiser chaque vendredi une prière collective sur un boulevard parisien, en bloquant la circulation. Que prévoit la loi ?",
    choices: [
      "Elle peut être encadrée ou interdite pour l'ordre public",
      "Elle est libre, la liberté de culte s'exerçant partout",
      "Elle est interdite, comme toute pratique religieuse dehors",
      "Elle est permise si tous les participants sont majeurs"
    ],
    explication: "Chacun peut participer à des célébrations religieuses dans l'espace public, mais une manifestation religieuse peut être soumise à autorisation, encadrée ou interdite pour éviter des troubles à l'ordre public (prières de rue).",
    page: 12
  },
  {
    id: "ms-pv-012",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Devant la gare de Bordeaux, Paul distribue calmement des tracts invitant les passants à découvrir sa religion. Est-ce permis ?",
    choices: [
      "Oui, s'il ne trouble pas l'ordre public et ne force personne",
      "Non, le prosélytisme est interdit en France",
      "Non, c'est réservé à l'intérieur des lieux de culte",
      "Oui, à condition d'être ministre du culte"
    ],
    explication: "Le prosélytisme est autorisé s'il n'use ni de violence, ni de menace, ni de pression ; distribuer des tracts religieux dans la rue est possible tant que cela ne trouble pas l'ordre public.",
    page: 11
  },
  {
    id: "ms-pv-013",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Thomas, agent au guichet de la mairie de Grenoble, profite de ses rendez-vous pour conseiller aux usagers de rejoindre son église. Est-ce permis ?",
    choices: [
      "Non, le prosélytisme y est interdit",
      "Oui, s'il attend d'avoir traité le dossier",
      "Oui, le prosélytisme est autorisé en France",
      "Non, sauf si l'usager l'interroge d'abord"
    ],
    explication: "Le prosélytisme est autorisé en France, mais il est interdit dans les services publics, en application du principe de neutralité de l'État.",
    page: 11
  },
  {
    id: "ms-pv-014",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lucas, chef d'équipe, laisse entendre à Nadia que son contrat ne sera pas renouvelé si elle ne rejoint pas son groupe religieux. Ce comportement est-il admis ?",
    choices: [
      "Non, convaincre par la menace ou la pression est interdit",
      "Oui, le prosélytisme est libre dans une entreprise privée",
      "Oui, tant qu'il ne le fait pas pendant les heures de travail",
      "Non, sauf si l'entreprise a une identité religieuse"
    ],
    explication: "Le prosélytisme n'est autorisé qu'à condition de ne pas forcer quelqu'un à croire par la violence, la menace ou la pression. Une décision d'emploi doit en outre reposer sur des raisons professionnelles.",
    page: 11
  },
  {
    id: "ms-pv-015",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Un journal satirique publie une caricature qui se moque d'un prophète. Des lecteurs choqués portent plainte pour blasphème. Que va-t-il se passer ?",
    choices: [
      "La plainte n'aboutira pas : le blasphème n'est pas un délit",
      "Le journal sera condamné pour atteinte au sacré",
      "Le journal devra retirer le dessin à la demande des fidèles",
      "Le journal sera condamné si la religion est minoritaire"
    ],
    explication: "En France, le blasphème n'est pas un délit : chacun peut critiquer ou se moquer d'une religion, y compris par la caricature. Personne ne peut être puni pour avoir insulté une divinité.",
    page: 11
  },
  {
    id: "ms-pv-016",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Sur son blog, Marc appelle ses lecteurs à s'en prendre physiquement aux fidèles d'une religion. Que dit la loi ?",
    choices: [
      "C'est puni : l'incitation à la haine religieuse est interdite",
      "C'est protégé : le blasphème n'est pas un délit",
      "C'est permis, car un blog relève de la vie privée",
      "C'est puni seulement si la religion est reconnue"
    ],
    explication: "On peut critiquer une religion, mais pas inciter à la haine contre ses fidèles : l'incitation à la haine raciale, ethnique ou religieuse est une limite de la liberté d'expression. Viser des personnes n'est pas du blasphème.",
    page: 12
  },
  {
    id: "ms-pv-017",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lors d'une réunion publique, un orateur affirme que la Shoah n'a jamais existé. Que dit la loi ?",
    choices: [
      "C'est une infraction : le négationnisme est puni",
      "C'est une opinion protégée par la liberté d'expression",
      "Ce n'est une infraction que s'il le publie par écrit",
      "C'est une faute morale, mais sans aucune sanction"
    ],
    explication: "La remise en cause de crimes contre l'humanité, dont le négationnisme (nier l'existence de la Shoah), fait partie des limites légales de la liberté d'expression.",
    page: 12
  },
  {
    id: "ms-pv-018",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Léa, fonctionnaire territoriale, publie sur son blog personnel, le week-end, un article très critique envers la politique du gouvernement. Est-ce permis ?",
    choices: [
      "Oui, critiquer le gouvernement relève de la liberté d'expression",
      "Non, critiquer les institutions en public est un délit",
      "Oui, mais seulement si elle publie sous un pseudonyme",
      "Non, la critique politique est réservée aux journalistes"
    ],
    explication: "Les limites de la liberté d'expression visent la diffamation, l'injure, l'incitation à la haine ou à discriminer et le négationnisme, pas la critique du gouvernement. La neutralité des agents s'applique pendant leur travail.",
    page: 12
  },
  {
    id: "ms-pv-019",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Un propriétaire de Montreuil refuse de louer son appartement à Moussa en expliquant qu'il « préfère des locataires d'origine française ». Ce refus est-il conforme à la loi ?",
    choices: [
      "Non, c'est une discrimination fondée sur l'origine",
      "Oui, un propriétaire choisit librement son locataire",
      "Oui, tant que le refus n'est pas donné par écrit",
      "Non, mais seulement si Moussa est de nationalité française"
    ],
    explication: "Traiter différemment une personne en raison de son origine, notamment pour un logement, est une discrimination punie par la loi, quelle que soit la forme du refus ou la nationalité de la victime.",
    page: 6
  },
  {
    id: "ms-pv-020",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Dans une agence bancaire, Julie n'obtient pas la promotion qu'elle mérite, son directeur jugeant qu'« une mère de jeunes enfants sera moins disponible ». Cette décision est-elle conforme ?",
    choices: [
      "Non, elle doit reposer sur des raisons professionnelles",
      "Oui, l'employeur organise librement son équipe",
      "Oui, si un homme aussi compétent est promu",
      "Non, mais seulement dans la fonction publique"
    ],
    explication: "Toute décision d'un employeur, embauche ou promotion, doit être fondée sur des raisons professionnelles et non personnelles. Écarter une femme à cause de sa maternité contrevient à l'égalité femmes-hommes.",
    page: 7
  },
  {
    id: "ms-pv-021",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "À poste et compétences égales, une entreprise de Rennes paie Sarah moins que son collègue Antoine, au motif qu'il est un homme. Est-ce conforme aux principes de la République ?",
    choices: [
      "Non, l'égalité femmes-hommes s'applique au travail",
      "Oui, si Sarah a accepté ce salaire à l'embauche",
      "Oui, l'égalité ne concerne que les droits politiques",
      "Non, mais seulement dans les entreprises publiques"
    ],
    explication: "L'égalité entre les femmes et les hommes, inscrite dans le préambule de la Constitution depuis 1946, s'applique dans tous les domaines, dont le travail.",
    page: 6
  },
  {
    id: "ms-pv-022",
    theme: "pv",
    notion: "annexes-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Le mari de Leïla lui interdit de travailler et exige de gérer seul le salaire qu'elle percevrait. Que dit la Charte des droits et devoirs du citoyen français ?",
    choices: [
      "Chaque conjoint peut travailler et disposer de ses revenus",
      "Le mari peut s'y opposer en tant que chef de famille",
      "Leïla doit obtenir l'accord de son mari pour travailler",
      "Leïla peut travailler, mais son mari gère ses revenus"
    ],
    explication: "Selon la Charte, chacun des conjoints peut librement exercer une profession, percevoir ses revenus et en disposer comme il l'entend, après avoir contribué aux charges communes.",
    page: 80
  },
  {
    id: "ms-pv-023",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Dans un club de football amateur de Lille, l'entraîneur exclut Théo de l'équipe après avoir appris qu'il est homosexuel. Cette décision est-elle conforme ?",
    choices: [
      "Non, c'est une discrimination liée à l'orientation sexuelle",
      "Oui, une association choisit librement ses membres",
      "Oui, si le règlement intérieur du club le prévoit",
      "Non, mais seulement si le club reçoit des subventions"
    ],
    explication: "Traiter différemment une personne en raison de son orientation sexuelle est une discrimination punie par la loi ; l'État lutte activement contre la haine et la discrimination anti-LGBT+.",
    page: 7
  },
  {
    id: "ms-pv-024",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Au travail, des collègues de Manon multiplient les remarques dénigrantes sur ses compétences « parce qu'elle est une femme ». Comment le livret qualifie-t-il ce comportement ?",
    choices: [
      "Du sexisme",
      "De l'humour protégé par la liberté d'expression",
      "Une discrimination sur critère religieux",
      "Une simple maladresse sans enjeu"
    ],
    explication: "Le sexisme est un traitement dénigrant envers une personne en raison de son sexe ; l'État lutte activement contre lui.",
    page: 7
  },
  {
    id: "ms-pv-025",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Une agence immobilière écarte la candidature de Mohamed en supposant, d'après son prénom, qu'il est musulman. En réalité, il n'a pas de religion. Que retenir ?",
    choices: [
      "C'est une discrimination fondée sur la religion supposée",
      "Ce n'est pas une discrimination, puisqu'il n'est pas croyant",
      "C'est un refus légal si l'agence le motive par écrit",
      "C'est permis pour une agence privée, pas pour l'État"
    ],
    explication: "Le livret définit la discrimination sur critère religieux comme une discrimination fondée sur la religion supposée de la personne : peu importe sa croyance réelle.",
    page: 7
  },
  {
    id: "ms-pv-026",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Dans son quartier de Clermont-Ferrand, Inès organise une collecte au profit d'une association humanitaire. Quel principe républicain cette action met-elle en œuvre ?",
    choices: [
      "La solidarité et la fraternité",
      "La laïcité et la neutralité",
      "L'indivisibilité de la République",
      "La souveraineté nationale"
    ],
    explication: "Le livret cite les collectes au profit d'associations humanitaires comme exemple de participation citoyenne mettant en œuvre le principe républicain de solidarité et de fraternité.",
    page: 7
  },
  {
    id: "ms-pv-027",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Bastien estime qu'il n'a pas à payer d'impôts, puisqu'il n'utilise ni l'hôpital ni les transports en commun. Que faut-il lui répondre ?",
    choices: [
      "L'impôt finance les services publics au bénéfice de tous",
      "Il a raison : chacun paie les services qu'il utilise",
      "Il a raison s'il n'a pas la nationalité française",
      "L'impôt ne finance de toute façon que l'armée"
    ],
    explication: "Remplir ses obligations fiscales est un acte solidaire qui finance les services publics au bénéfice de tous, que l'on s'en serve ou non : c'est la solidarité collective.",
    page: 7
  },
  {
    id: "ms-pv-028",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Clara, jeune salariée à Nice, voit chaque mois des cotisations retraite prélevées sur son salaire. Quelle forme de solidarité ce mécanisme illustre-t-il selon le livret ?",
    choices: [
      "La solidarité intergénérationnelle",
      "La solidarité collective par l'impôt",
      "La solidarité associative",
      "La solidarité familiale"
    ],
    explication: "En cotisant, chaque salarié contribue aux versements des retraites : c'est l'exemple donné par le livret de la solidarité intergénérationnelle. L'impôt relève de la solidarité collective.",
    page: 7
  },
  {
    id: "ms-pv-029",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Julien, naturalisé français l'an dernier, pense que la participation à la défense de la Nation ne concerne que les Français de naissance. A-t-il raison ?",
    choices: [
      "Non, ce devoir concerne chaque citoyen français",
      "Oui, il ne vise que les Français de naissance",
      "Oui, il est réservé aux militaires de carrière",
      "Non, mais seulement s'il a moins de 25 ans"
    ],
    explication: "Le principe de solidarité exige que chaque citoyen français participe à la défense de la Nation en cas de nécessité. La naturalisation donne les mêmes droits et les mêmes devoirs.",
    page: 7
  },
  {
    id: "ms-pv-030",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lors de la cérémonie du 14 juillet devant la mairie de Dijon, l'hymne national retentit. Quelle attitude est conforme au respect des symboles de la République ?",
    choices: [
      "L'écouter debout, dans le calme",
      "Le siffler pour protester contre le gouvernement",
      "Continuer à discuter, l'hymne n'ayant rien d'officiel",
      "Entonner un autre chant pour se démarquer"
    ],
    explication: "La Marseillaise est l'hymne national, l'un des symboles de la France. On peut critiquer le gouvernement par d'autres moyens, mais les symboles communs se respectent.",
    page: 8
  },
  {
    id: "ms-pv-031",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Un collègue de Mei lui explique que le 14 juillet célèbre uniquement la prise de la Bastille. Que peut-elle lui répondre ?",
    choices: [
      "Il oublie la Fête de la Fédération de 1790",
      "Il a raison, seule l'année 1789 est commémorée",
      "Il oublie la proclamation de la République de 1792",
      "Il oublie l'abolition des privilèges du 4 août 1789"
    ],
    explication: "Depuis 1880, le 14 juillet commémore deux événements : la prise de la Bastille (14 juillet 1789) et la Fête de la Fédération (14 juillet 1790).",
    page: 8
  },
  {
    id: "ms-pv-032",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Dans une commune bretonne, le conseil municipal veut rédiger les actes officiels de la mairie uniquement en breton. Est-ce conforme ?",
    choices: [
      "Non, la seule langue officielle est le français",
      "Oui, chaque région choisit sa langue officielle",
      "Oui, si la majorité des habitants parle breton",
      "Oui, si une traduction est fournie sur demande"
    ],
    explication: "La République est indivisible et n'a qu'une seule langue officielle : le français. Les actes officiels doivent donc être rédigés en français.",
    page: 10
  },
  {
    id: "ms-pv-033",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Une communauté religieuse veut juger elle-même les conflits entre ses membres selon ses propres règles, à la place des tribunaux. Est-ce conforme au principe d'une République indivisible ?",
    choices: [
      "Non, tous sont soumis aux mêmes lois",
      "Oui, si tous les membres sont d'accord",
      "Oui, pour les seules affaires familiales",
      "Non, sauf en Alsace et en Moselle"
    ],
    explication: "Aucun individu ou groupe ne peut décider à la place de l'ensemble des Français : tous, partout, sont soumis aux mêmes lois. Les accords d'Alsace-Moselle concernent les cultes, pas la justice.",
    page: 10
  },
  {
    id: "ms-pv-034",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Lors d'un débat, Yanis affirme qu'en France le peuple ne décide jamais directement, puisqu'il élit des représentants. A-t-il raison ?",
    choices: [
      "Non, le peuple peut aussi décider par référendum",
      "Oui, seuls les élus exercent la souveraineté",
      "Non, le peuple vote directement chaque loi",
      "Oui, le référendum est réservé aux élus locaux"
    ],
    explication: "Selon l'article 3 de la Constitution, la souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum.",
    page: 14
  },
  {
    id: "ms-pv-035",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lina, 18 ans, citoyenne française disposant de ses droits civils et politiques, veut se présenter aux élections municipales de sa commune. Est-ce possible ?",
    choices: [
      "Oui, à 18 ans elle peut voter et se présenter",
      "Non, il faut avoir au moins 21 ans",
      "Oui, mais seulement si un parti la présente",
      "Non, tant qu'elle n'a pas voté une première fois"
    ],
    explication: "Tout citoyen d'au moins 18 ans (majorité civile) disposant de ses droits civils et politiques peut voter et se présenter aux élections, dans les conditions fixées par la loi.",
    page: 14
  },
  {
    id: "ms-pv-036",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Mécontent d'une décision du conseil municipal, Kevin envisage de dégrader la façade de la mairie pour se faire entendre. Quelle attitude est conforme aux principes de la République ?",
    choices: [
      "Contester par les voies légales : vote, pétition, recours",
      "Dégrader la mairie, la colère justifiant ce geste",
      "Menacer le maire, puisqu'il doit écouter le peuple",
      "Bloquer l'entrée de la mairie jusqu'à l'annulation"
    ],
    explication: "Dans une démocratie, les dirigeants sont élus et les décisions se contestent par des moyens légaux. La violence et les menaces ne sont jamais un moyen d'expression admis.",
    page: 14
  },
  {
    id: "ms-pv-037",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Une secrétaire de mairie affiche au-dessus de son guichet une affiche du parti politique qu'elle soutient. Est-ce conforme ?",
    choices: [
      "Non, aucun emblème politique ne doit être exposé",
      "Oui, la liberté d'opinion s'applique au guichet",
      "Oui, si l'affiche ne comporte aucun symbole religieux",
      "Non, sauf pendant les campagnes électorales"
    ],
    explication: "La neutralité des services publics n'est pas seulement religieuse : aucun signe ou emblème religieux, politique ou philosophique ne doit être exposé dans les bureaux ou aux guichets.",
    page: 12
  },
  {
    id: "ms-pv-038",
    theme: "pv",
    notion: "p1-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Dans une association de quartier, un bénévole propose de réserver l'aide alimentaire aux familles « de la même origine » que les membres. Cette proposition est-elle conforme aux principes de la République ?",
    choices: [
      "Non, la fraternité républicaine ne repose pas sur l'origine",
      "Oui, une association aide librement qui elle veut",
      "Oui, si l'association ne reçoit aucune subvention",
      "Oui, la fraternité unit les membres d'une même communauté"
    ],
    explication: "La fraternité républicaine est civique et non basée sur l'origine ou la religion ; traiter différemment des personnes en raison de leur origine est une discrimination punie par la loi.",
    page: 7
  },
  {
    id: "ms-pv-039",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "La famille d'Aïcha, 25 ans, lui interdit de se convertir à une autre religion et menace de la renier. Que dit la loi ?",
    choices: [
      "Aïcha est libre de changer de religion",
      "Elle doit obtenir l'accord de sa famille",
      "Elle ne peut se convertir qu'après un délai légal",
      "Elle doit déclarer sa conversion à la mairie"
    ],
    explication: "La laïcité garantit la liberté de conscience : chacun est libre d'avoir une religion, d'en changer (droit de se convertir) ou de ne plus en avoir, sans autorisation ni démarche.",
    page: 10
  },
  {
    id: "ms-pv-040",
    theme: "pv",
    notion: "p1-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Le conseil municipal d'une ville vote une subvention pour financer la construction d'un nouveau lieu de culte. Cette décision est-elle conforme à la laïcité ?",
    choices: [
      "Non, la construction d'un édifice religieux ne peut être financée",
      "Oui, si chaque religion reçoit la même somme",
      "Oui, si ce culte était présent en France avant 1905",
      "Non, sauf si les habitants l'approuvent par référendum"
    ],
    explication: "Les pouvoirs publics, neutres, ne soutiennent aucune organisation religieuse : ils ne peuvent pas financer la construction d'un édifice religieux. Seule la restauration d'un monument classé peut être financée.",
    page: 11
  },
];
