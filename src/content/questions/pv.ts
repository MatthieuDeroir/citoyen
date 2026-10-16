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
    explication: "La Marseillaise commence par « Allons enfants de la patrie, le jour de gloire est arrivé ! ».",
    page: 6
  },
  {
    id: "an-pv-002",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?",
    choices: [
      "Son expérience et ses compétences professionnelles",
      "Sa situation familiale et son projet d'avoir des enfants",
      "Son lieu de naissance et ses origines familiales",
      "Son appartenance syndicale et ses engagements passés"
    ],
    explication: "Seules les questions liées au poste sont permises : religion, opinions ou santé relèvent de la vie privée et les discriminations sont interdites.",
    page: 10
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
    explication: "Chaque foyer doit déclarer ses revenus chaque année : l'impôt finance les services publics.",
    page: 10
  },
  {
    id: "an-pv-004",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    choices: [
      "Ils financent les écoles, les hôpitaux et les routes",
      "Ils financent uniquement la défense et la police",
      "Ils servent seulement à rembourser la dette de l'État",
      "Ils financent l'entretien des lieux de culte construits après 1905"
    ],
    explication: "Les impôts financent les services publics : éducation, santé, sécurité, infrastructures.",
    page: 10
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
    explication: "Depuis la loi de 1901, chacun peut créer ou rejoindre librement une association.",
    page: 10
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
    explication: "On peut s'exprimer librement, mais l'injure, la diffamation et l'incitation à la haine sont punies par la loi.",
    page: 10
  },
  {
    id: "an-pv-007",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Lequel de ces prénoms évoque un symbole de la République ?",
    choices: [
      "Marianne",
      "Jeanne",
      "Joséphine",
      "Anne"
    ],
    explication: "Marianne est la figure allégorique de la République française.",
    page: 6
  },
  {
    id: "an-pv-008",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Lequel de ces symboles représente la République française ?",
    choices: [
      "Le drapeau bleu, blanc, rouge",
      "La fleur de lys",
      "L'aigle impérial",
      "La croix de Lorraine"
    ],
    explication: "Le drapeau tricolore est le symbole officiel de la République (article 2 de la Constitution).",
    page: 6
  },
  {
    id: "an-pv-009",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Où peut-on voir la devise de la République ?",
    choices: [
      "Sur le fronton des mairies et des bâtiments publics",
      "Sur les panneaux d'entrée de ville",
      "Sur les plaques d'immatriculation",
      "À l'entrée des lieux de culte"
    ],
    explication: "« Liberté, Égalité, Fraternité » figure sur les frontons des mairies, des écoles et des bâtiments publics.",
    page: 6
  },
  {
    id: "an-pv-010",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Lesquels sont des symboles officiels de la République française ?",
    choices: [
      "Le drapeau tricolore et La Marseillaise",
      "Le coq gaulois et la croix de Lorraine",
      "Le drapeau tricolore et la fleur de lys",
      "La Marseillaise et l'aigle impérial"
    ],
    explication: "La Constitution reconnaît le drapeau tricolore, La Marseillaise, la devise et le principe du gouvernement du peuple.",
    page: 6
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
      "Oui, au nom de la liberté d'expression",
      "Oui, lors d'une manifestation déclarée",
      "Oui, si le drapeau vous appartient"
    ],
    explication: "L'outrage au drapeau tricolore commis en public est une infraction pénale.",
    page: 6
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
    explication: "La Sécurité sociale a été créée en 1945, à la Libération.",
    page: 10
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
    explication: "Le 14 juillet commémore la prise de la Bastille (1789) et la fête de la Fédération (1790).",
    page: 6
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
    explication: "Le bonnet phrygien, hérité des esclaves affranchis de l'Antiquité, symbolise la liberté.",
    page: 6
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
    explication: "La fraternité, c'est l'entraide et la solidarité qui unissent les citoyens.",
    page: 6
  },
  {
    id: "an-pv-016",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?",
    choices: [
      "Le coq",
      "Marianne",
      "Le bonnet phrygien",
      "Le faisceau de licteur"
    ],
    explication: "Le coq gaulois figure sur les maillots des équipes de France.",
    page: 6
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
    explication: "La devise officielle de la République est « Liberté, Égalité, Fraternité » (article 2 de la Constitution).",
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
    explication: "Toute personne peut fonder une association ou en devenir membre, sans autorisation préalable.",
    page: 10
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
    explication: "Selon la DDHC de 1789, la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.",
    page: 10
  },
  {
    id: "an-pv-020",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Selon la Constitution, la France est une République…",
    choices: [
      "Indivisible, laïque, démocratique et sociale",
      "Indivisible, laïque, démocratique et libérale",
      "Unie, laïque, fédérale et sociale",
      "Indivisible, neutre, parlementaire et sociale"
    ],
    explication: "L'article 1er de la Constitution : « La France est une République indivisible, laïque, démocratique et sociale. »",
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
      "Sur la carte Vitale",
      "Sur les tickets de métro"
    ],
    explication: "Marianne figure notamment sur les timbres, ainsi que sur les documents officiels de l'État.",
    page: 6
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
      "Seuls les citoyens français ont des droits"
    ],
    explication: "L'égalité signifie que tous les citoyens ont les mêmes droits et sont égaux devant la loi.",
    page: 6
  },
  {
    id: "an-pv-023",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une personne peut-elle changer librement de religion en France ?",
    choices: [
      "Oui, la liberté de conscience le garantit",
      "Oui, mais il faut le déclarer à la mairie",
      "Non, sauf en cas de mariage",
      "Oui, mais une seule fois après sa majorité"
    ],
    explication: "Chacun est libre de croire, de ne pas croire ou de changer de religion : c'est la liberté de conscience.",
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
    explication: "L'État est neutre : il garantit la liberté de culte mais ne reconnaît, ne salarie ni ne subventionne aucun culte.",
    page: 10
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
      "Demander ou renouveler son titre de séjour",
      "Déposer une plainte pour un vol",
      "Demander le versement de ses allocations familiales"
    ],
    explication: "La mairie délivre les actes d'état civil (naissance, mariage, décès) et accompagne les démarches des habitants.",
    page: 10
  },
  {
    id: "an-pv-026",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En France, il est possible pour l'État de financer :",
    choices: [
      "L'entretien des édifices religieux construits avant 1905",
      "Le salaire des responsables religieux",
      "La construction de nouveaux lieux de culte",
      "L'organisation des fêtes religieuses"
    ],
    explication: "Les édifices religieux antérieurs à 1905 appartiennent aux collectivités publiques, qui peuvent les entretenir ; les cultes eux-mêmes ne sont pas financés.",
    page: 10
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
      "1882",
      "1789",
      "1946"
    ],
    explication: "La loi du 9 décembre 1905 sépare les Églises et l'État : c'est le fondement de la laïcité.",
    page: 10
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
    explication: "La loi de 1905 garantit la liberté de conscience et le libre exercice des cultes, sans reconnaissance officielle.",
    page: 10
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
    explication: "La laïcité garantit la liberté de conscience et l'égalité de tous, quelle que soit leur croyance.",
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
    explication: "Le 9 décembre, anniversaire de la loi de 1905, est la journée de la laïcité.",
    page: 10
  },
  {
    id: "an-pv-031",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?",
    choices: [
      "Un signe discret, comme une petite médaille",
      "Un voile, s'il est porté avec discrétion",
      "Une grande croix, si l'élève est majeur",
      "Aucun, même discret"
    ],
    explication: "La loi de 2004 interdit aux élèves les signes religieux ostensibles à l'école publique ; les signes discrets restent permis.",
    page: 10
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
    explication: "L'antisémitisme désigne la haine et les discriminations visant les Juifs ; il est puni par la loi.",
    page: 10
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
    explication: "La loi de 1905 de séparation des Églises et de l'État fonde la laïcité française.",
    page: 10
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
    explication: "Les services publics, et notamment l'école publique, sont soumis à la neutralité religieuse.",
    page: 10
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
    explication: "La laïcité repose sur la liberté de conscience, la séparation des Églises et de l'État et l'égalité de tous devant la loi.",
    page: 10
  },
  {
    id: "an-pv-036",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À l'école, la charte de la laïcité permet de :",
    choices: [
      "Rappeler les règles de la laïcité et du vivre-ensemble",
      "Interdire l'enseignement du fait religieux",
      "Permettre aux familles de choisir les cours suivis",
      "Fixer le calendrier des fêtes religieuses à l'école"
    ],
    explication: "Affichée dans les écoles, la charte de la laïcité explique le sens et les règles de la laïcité à l'école.",
    page: 10
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
    explication: "Tous les agents publics sont tenus à la neutralité religieuse dans l'exercice de leurs fonctions.",
    page: 10
  },
  {
    id: "an-pv-038",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une personne déclare ne croire en aucun dieu. On peut dire :",
    choices: [
      "Qu'elle est athée, et c'est son droit",
      "Qu'elle est agnostique, et c'est son droit",
      "Qu'elle est laïque, et c'est son droit",
      "Qu'elle est apatride, et c'est son droit"
    ],
    explication: "La liberté de conscience protège aussi le droit de ne pas croire.",
    page: 10
  },
  {
    id: "p1-s1-qcm-001",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle est la devise de la République française ?",
    choices: [
      "Liberté, Égalité, Fraternité",
      "Liberté, Justice, Solidarité",
      "Unité, Égalité, Laïcité",
      "Liberté, Égalité, Laïcité"
    ],
    explication: "La devise « Liberté, Égalité, Fraternité » consacre les valeurs fondatrices de la République. Elle est inscrite sur le fronton des bâtiments publics.",
    page: 6
  },
  {
    id: "p1-s1-qcm-002",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Selon l'article 4 de la DDHC de 1789, la liberté consiste à…",
    choices: [
      "pouvoir faire tout ce qui ne nuit pas à autrui",
      "pouvoir faire tout ce que l'on veut",
      "obéir aux lois de l'État",
      "voter aux élections"
    ],
    explication: "L'article 4 de la DDHC proclame que « la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui », dans le cadre défini par la loi.",
    page: 6
  },
  {
    id: "p1-s1-qcm-003",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Depuis quand l'égalité entre les femmes et les hommes est-elle inscrite dans le préambule de la Constitution ?",
    choices: [
      "1946",
      "1789",
      "1958",
      "1905"
    ],
    explication: "L'égalité femmes-hommes est inscrite dans le préambule de la Constitution depuis 1946 et s'applique dans tous les domaines : travail, santé, éducation…",
    page: 6
  },
  {
    id: "p1-s1-qcm-004",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qu'est-ce que l'antisémitisme ?",
    choices: [
      "Une forme spécifique de racisme et de haine dirigée contre les Juifs",
      "Une discrimination fondée sur le sexe",
      "Une hostilité envers les personnes LGBT+",
      "Une discrimination fondée sur l'âge"
    ],
    explication: "L'antisémitisme est une forme spécifique de racisme et de haine dirigée contre les Juifs, fondée sur des préjugés, des stéréotypes et des discriminations.",
    page: 7
  },
  {
    id: "p1-s1-qcm-005",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel exemple illustre la solidarité intergénérationnelle ?",
    choices: [
      "Les cotisations des salariés financent les retraites",
      "La Sécurité sociale rembourse les soins",
      "Les impôts financent les services publics",
      "Les citoyens participent à la défense de la Nation"
    ],
    explication: "La solidarité intergénérationnelle se traduit par le soutien entre générations : en cotisant, chaque salarié contribue aux versements des retraites.",
    page: 7
  },
  {
    id: "p1-s1-qcm-006",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que s'est-il passé le 14 juillet 1789 ?",
    choices: [
      "La prise de la Bastille par le peuple de Paris",
      "La Fête de la Fédération",
      "La proclamation de la République",
      "La signature de la Constitution"
    ],
    explication: "Le 14 juillet 1789, le peuple de Paris a pris la Bastille (une prison royale), ce qui marque le début de la Révolution française. La Fête de la Fédération a eu lieu un an plus tard, le 14 juillet 1790.",
    page: 8
  },
  {
    id: "p1-s1-qcm-007",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Depuis quelle année le 14 juillet est-il la fête nationale ?",
    choices: [
      "1880",
      "1789",
      "1790",
      "1958"
    ],
    explication: "Depuis 1880, le 14 juillet est consacré comme jour de fête nationale pour commémorer la prise de la Bastille (1789) et la Fête de la Fédération (1790).",
    page: 8
  },
  {
    id: "p1-s1-qcm-008",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que porte Marianne, et que symbolise cet attribut ?",
    choices: [
      "Un bonnet phrygien, symbole de la liberté",
      "Une couronne de laurier, symbole de la victoire",
      "Un drapeau tricolore, symbole de la Nation",
      "Une balance, symbole de la justice"
    ],
    explication: "Marianne porte un bonnet phrygien, symbole de la liberté. Sa statue, placée dans toutes les mairies, rappelle la Révolution française.",
    page: 8
  },
  {
    id: "p1-s1-qcm-009",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Pendant quelle période le drapeau tricolore n'a-t-il PAS été le drapeau de la France ?",
    choices: [
      "La Restauration (1814-1830)",
      "La Révolution (1789-1799)",
      "La IIIe République (1870-1940)",
      "L'Occupation (1940-1944)"
    ],
    explication: "Devenu officiel en 1794, le drapeau tricolore a été abandonné lors de la Restauration (1814-1830), avant d'être rétabli ensuite.",
    page: 8
  },
  {
    id: "p1-s1-qcm-010",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Lequel de ces symboles n'a PAS de statut officiel selon la Constitution ?",
    choices: [
      "Le coq",
      "Le drapeau tricolore",
      "La Marseillaise",
      "La langue française"
    ],
    explication: "Le coq représente la fierté, le courage et la vigilance ; il est largement reconnu comme symbole national mais n'a pas de statut officiel dans la Constitution.",
    page: 8
  },
  {
    id: "p1-s1-qcm-011",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelles sont les couleurs du drapeau tricolore français ?",
    choices: [
      "Bleu, blanc, rouge",
      "Bleu, rouge, blanc",
      "Blanc, rouge, bleu",
      "Rouge, blanc, vert"
    ],
    explication: "Le drapeau tricolore (bleu, blanc, rouge) a été créé pendant la Révolution et est devenu le drapeau officiel de la France en 1794.",
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
      "Une discrimination fondée sur l'origine ou l'appartenance ethnique ou raciale d'une personne",
      "Un traitement dénigrant envers une personne en raison de son sexe",
      "Une discrimination fondée sur la religion supposée de la personne",
      "Une attitude hostile envers une personne en raison de son orientation sexuelle"
    ],
    explication: "Le racisme est une discrimination fondée sur l'origine ou l'appartenance ethnique ou raciale d'une personne — à distinguer du sexisme, de la discrimination sur critère religieux et de la haine anti-LGBT+.",
    page: 7
  },
  {
    id: "p1-s1-qcm-013",
    theme: "pv",
    notion: "p1-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Sur quoi une décision d'employeur (embauche, promotion…) doit-elle obligatoirement être fondée ?",
    choices: [
      "Des raisons professionnelles",
      "Les convictions religieuses du candidat",
      "L'origine du candidat",
      "Les opinions politiques du candidat"
    ],
    explication: "Toute décision d'un employeur doit être fondée sur des raisons professionnelles et non personnelles ; se fonder sur la religion, l'origine ou les opinions politiques constituerait une discrimination.",
    page: 7
  },
  {
    id: "p1-s2-qcm-001",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Selon l'article 1er de la Constitution de 1958, la France est une République…",
    choices: [
      "indivisible, laïque, démocratique et sociale",
      "libre, égalitaire, fraternelle et laïque",
      "unie, laïque, parlementaire et solidaire",
      "indivisible, séculière, représentative et sociale"
    ],
    explication: "L'article 1er de la Constitution du 4 octobre 1958 précise que « La France est une République indivisible, laïque, démocratique et sociale ».",
    page: 10
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
      "Les décrets",
      "Les traités commerciaux"
    ],
    explication: "Dans un État de droit, la Constitution se situe tout en haut de la hiérarchie des normes : elle est au-dessus de toutes les lois.",
    page: 10
  },
  {
    id: "p1-s2-qcm-003",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle loi organise la séparation des Églises et de l'État ?",
    choices: [
      "La loi de 1905",
      "La loi de 2004",
      "La loi de 2010",
      "La loi de 1881"
    ],
    explication: "La loi de 1905 sur la séparation des Églises et de l'État fonde la neutralité de l'État vis-à-vis des religions, avec des exceptions historiques en Alsace et en Moselle.",
    page: 11
  },
  {
    id: "p1-s2-qcm-004",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "L'État peut-il financer la construction d'un édifice religieux ?",
    choices: [
      "Non, mais il peut financer la restauration d'un monument religieux classé au patrimoine",
      "Oui, sans condition",
      "Oui, si la commune est d'accord",
      "Non, en aucun cas et pour aucun bâtiment"
    ],
    explication: "L'État ne finance ni la construction d'édifices religieux ni le personnel religieux, mais il a la possibilité de financer la restauration d'un monument religieux classé au patrimoine.",
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
      "interdit uniquement dans l'espace public",
      "un crime"
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
      "La critique d'une religion",
      "La caricature d'un personnage religieux",
      "La moquerie envers une croyance"
    ],
    explication: "Les limites de la liberté d'expression concernent notamment la diffamation, l'incitation à la haine, l'incitation à discriminer et le négationnisme — mais pas le blasphème.",
    page: 12
  },
  {
    id: "p1-s2-qcm-007",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que interdit la loi du 11 octobre 2010 ?",
    choices: [
      "La dissimulation du visage dans l'espace public",
      "Le port de signes religieux dans la rue",
      "Les manifestations religieuses",
      "La distribution de tracts religieux"
    ],
    explication: "La loi du 11 octobre 2010 interdit la dissimulation du visage dans l'espace public (cagoule, masque, voile intégral…) afin de protéger l'ordre public.",
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
      "Non, les agents publics doivent rester neutres au travail",
      "Oui, c'est une liberté fondamentale",
      "Oui, si le signe est discret",
      "Non, sauf dans les hôpitaux"
    ],
    explication: "Pour garantir la neutralité de l'État, les agents publics ne peuvent pas montrer leur religion ou leurs opinions au travail. Les usagers du service public, eux, le peuvent.",
    page: 13
  },
  {
    id: "p1-s2-qcm-009",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que prévoit la loi du 15 mars 2004 dans les écoles publiques ?",
    choices: [
      "L'interdiction des signes religieux ostensibles, les signes discrets restant autorisés",
      "L'interdiction de tous les signes religieux, même discrets",
      "L'autorisation de tous les signes religieux",
      "L'interdiction des signes religieux pour les seuls enseignants"
    ],
    explication: "Dans les établissements scolaires publics, il est interdit de porter un signe ou un vêtement montrant sa religion de manière ostensible (visible immédiatement) ; les signes discrets sont autorisés.",
    page: 13
  },
  {
    id: "p1-s2-qcm-010",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Selon l'article 3 de la Constitution, à qui appartient la souveraineté nationale ?",
    choices: [
      "Au peuple, qui l'exerce par ses représentants et par le référendum",
      "Au Président de la République",
      "Au Parlement",
      "Au Gouvernement"
    ],
    explication: "« La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum » (article 3 de la Constitution de 1958).",
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
    explication: "L'État favorise l'égalité des chances en intervenant dans l'éducation (école gratuite), le logement social, l'emploi (RSA) et la santé (Sécurité sociale).",
    page: 14
  },
  {
    id: "p1-s2-qcm-012",
    theme: "pv",
    notion: "p1-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Un employeur peut-il refuser une autorisation d'absence demandée par un salarié pour une fête religieuse ?",
    choices: [
      "Oui, à condition que ce refus ne soit pas discriminatoire",
      "Non, il doit toujours l'accorder",
      "Oui, mais uniquement dans la fonction publique",
      "Non, sauf s'il s'agit d'un agent public"
    ],
    explication: "Le salarié peut solliciter une autorisation d'absence pour une fête religieuse ; l'employeur peut la refuser à condition que ce refus ne soit pas discriminatoire, en la motivant par le règlement intérieur ou des nécessités de service.",
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
      "à tout citoyen d'au moins 18 ans disposant de ses droits civils et politiques",
      "aux seuls citoyens de plus de 25 ans",
      "aux seuls membres d'un parti politique",
      "aux seuls citoyens nés en France"
    ],
    explication: "Tous les citoyens, hommes et femmes, ayant au moins 18 ans et disposant de leurs droits civils et politiques, ont le droit de voter et de se présenter aux élections dans les conditions fixées par la loi.",
    page: 14
  },
];
