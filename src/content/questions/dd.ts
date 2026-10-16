import type { Question } from "../types";

/** Droits et devoirs. */
export const dd: Question[] = [
  {
    id: "an-dd-001",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quoi sert le droit de grève ?",
    choices: [
      "À cesser le travail pour défendre des revendications professionnelles",
      "À cesser le travail en continuant d'être payé normalement",
      "À quitter son poste face à un danger grave et imminent",
      "À bloquer l'accès de l'entreprise aux salariés non grévistes"
    ],
    explication: "Le droit de grève permet aux salariés de cesser collectivement le travail pour défendre leurs intérêts professionnels. Quitter son poste face à un danger relève d'un autre droit (le droit de retrait), et la grève ne garantit pas le maintien du salaire.",
    page: 25
  },
  {
    id: "an-dd-002",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    choices: [
      "De l'ordre public et de la sécurité",
      "De l'intérêt économique et de la croissance",
      "De la volonté de la majorité parlementaire",
      "De la tradition et des bonnes mœurs"
    ],
    explication: "Les libertés peuvent être limitées par la loi pour protéger l'ordre public, la sécurité et les droits d'autrui (risque de troubles, état d'urgence). Ni l'intérêt économique ni l'opinion de la majorité ne suffisent à restreindre un droit.",
    page: 25
  },
  {
    id: "an-dd-002-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-002",
    difficulty: 3,
    question: "En cas de « crise exceptionnelle et temporaire » comme un état d'urgence, quelle liberté le livret cite-t-il comme pouvant être restreinte par l'État ?",
    choices: [
      "La liberté d'aller et venir",
      "La liberté de pensée",
      "Le droit à un procès équitable",
      "L'interdiction de la torture"
    ],
    explication: "Le livret cite l'état d'urgence parmi les exceptions à la liberté de circulation. La liberté de pensée, elle, est qualifiée de « totale », et l'interdiction de la torture fait partie des droits essentiels liés à la dignité.",
    page: 25
  },
  {
    id: "an-dd-003",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?",
    choices: [
      "« Les hommes naissent et demeurent libres et égaux en droits »",
      "« Liberté, Égalité, Fraternité »",
      "« Gouvernement du peuple, par le peuple et pour le peuple »",
      "« La France est une République indivisible »"
    ],
    explication: "C'est l'article 1er de la DDHC du 26 août 1789. « Liberté, Égalité, Fraternité » est la devise de la République, et les deux autres formules viennent de la Constitution de 1958.",
    page: 25
  },
  {
    id: "an-dd-003-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-003",
    difficulty: 3,
    question: "Après avoir proclamé que les hommes naissent libres et égaux en droits, la DDHC précise sur quoi seules les distinctions sociales peuvent être fondées. Sur quoi ?",
    choices: [
      "Sur l'utilité commune",
      "Sur les vertus et les talents",
      "Sur la volonté générale",
      "Sur la naissance et le rang"
    ],
    explication: "Article 1er : « Les distinctions sociales ne peuvent être fondées que sur l'utilité commune. » Les « vertus » et les « talents » apparaissent à l'article 6, à propos de l'accès aux emplois publics.",
    page: 25
  },
  {
    id: "an-dd-004",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "L'article 4 de la Déclaration des droits de l'homme et du citoyen affirme que « la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ». Qu'est-ce que cela signifie ?",
    choices: [
      "Ma liberté s'arrête là où commence celle des autres",
      "On ne peut faire que ce que la loi autorise expressément",
      "Chacun peut faire tout ce qui ne lui nuit pas à lui-même",
      "La liberté de chacun dépend de l'accord de la majorité"
    ],
    explication: "La liberté de chacun a pour seule limite le respect des droits d'autrui. C'est l'inverse d'une liberté limitée à ce que la loi autorise : selon l'article 5, tout ce qui n'est pas défendu par la loi est permis.",
    page: 25
  },
  {
    id: "an-dd-004-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-004",
    difficulty: 3,
    question: "Selon l'article 4 de la DDHC, qui peut fixer les bornes de la liberté de chacun ?",
    choices: [
      "La loi, et elle seule",
      "Le juge, au cas par cas",
      "Le Gouvernement, par décret",
      "Chaque citoyen, pour lui-même"
    ],
    explication: "L'article 4 précise que les bornes de la liberté « ne peuvent être déterminées que par la Loi ». Le juge veille ensuite à l'application de la loi, mais il ne fixe pas lui-même ces limites.",
    page: 25
  },
  {
    id: "an-dd-005",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Que dit l'article 1er de la Constitution française ?",
    choices: [
      "La France est une République indivisible, laïque, démocratique et sociale",
      "La France est une République indivisible, laïque, démocratique et libérale",
      "La langue de la République est le français",
      "La souveraineté nationale appartient au peuple"
    ],
    explication: "L'article 1er définit la République comme indivisible, laïque, démocratique et sociale. La langue française (article 2) et la souveraineté du peuple (article 3) figurent bien dans la Constitution, mais pas dans l'article 1er.",
    page: 25
  },
  {
    id: "an-dd-005-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-005",
    difficulty: 2,
    question: "Lequel de ces qualificatifs ne fait PAS partie de la définition de la République à l'article 1er de la Constitution ?",
    choices: [
      "Libérale",
      "Sociale",
      "Laïque",
      "Indivisible"
    ],
    explication: "La République est « indivisible, laïque, démocratique et sociale ». « Libérale » n'en fait pas partie : le mot « sociale » renvoie au contraire au devoir de la Nation d'assurer à chacun les conditions de son développement.",
    page: 25
  },
  {
    id: "an-dd-006",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que garantit la liberté de la presse ?",
    choices: [
      "Le droit d'informer et de publier sans censure",
      "Le droit de publier toute information, même diffamatoire",
      "L'impossibilité de poursuivre un journaliste en justice",
      "Le droit de diffuser toute opinion, même négationniste"
    ],
    explication: "La presse est libre d'informer et de publier sans censure préalable. Elle reste encadrée par la loi : les propos diffamatoires et la contestation de crimes contre l'humanité exposent les journalistes à des poursuites.",
    page: 25
  },
  {
    id: "an-dd-006-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-006",
    difficulty: 3,
    question: "Quel article de la DDHC fait de la « libre communication des pensées et des opinions » un principe fondamental, sur lequel repose la liberté de la presse ?",
    choices: [
      "L'article 11",
      "L'article 10",
      "L'article 4",
      "L'article 9"
    ],
    explication: "L'article 11 protège la libre communication des pensées : tout citoyen peut parler, écrire, imprimer librement. L'article 10, tout proche, protège la liberté d'opinion, « même religieuse ».",
    page: 25
  },
  {
    id: "an-dd-007",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que permet la liberté de circulation ?",
    choices: [
      "Se déplacer librement sur le territoire, en sortir et y revenir",
      "Entrer en France sans visa, quelle que soit sa nationalité",
      "Se déplacer librement, même pendant l'exécution d'une peine",
      "Voyager seul à l'étranger dès 16 ans, sans aucune formalité"
    ],
    explication: "Tout citoyen circule librement en France et dans l'Union européenne et peut entrer et sortir du territoire. Il existe des exceptions : prisonniers, visas pour les étrangers non européens, autorisation de sortie du territoire pour les mineurs voyageant sans leurs parents.",
    page: 25
  },
  {
    id: "an-dd-007-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-007",
    difficulty: 2,
    question: "Que doit obtenir un mineur qui voyage à l'étranger sans ses parents ?",
    choices: [
      "Une autorisation de sortie du territoire",
      "Un visa délivré par la préfecture",
      "Une attestation d'hébergement à l'étranger",
      "Un certificat délivré par son établissement scolaire"
    ],
    explication: "La liberté d'aller et venir connaît des exceptions : les mineurs qui voyagent sans leurs parents doivent obtenir une autorisation de sortie du territoire.",
    page: 25
  },
  {
    id: "an-dd-008",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que signifie être citoyen d'un État ?",
    choices: [
      "Avoir sa nationalité, avec les droits et devoirs qui s'y attachent",
      "Résider sur son territoire depuis plus de cinq ans",
      "Y payer ses impôts et ses cotisations sociales",
      "Y être né, quelle que soit sa nationalité"
    ],
    explication: "Être citoyen d'un État, c'est avoir sa nationalité et, à ce titre, des droits et des devoirs. Payer ses impôts ou résider en France ne fait pas de quelqu'un un citoyen : ces obligations concernent tous les résidents.",
    page: 25
  },
  {
    id: "an-dd-008-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-008",
    difficulty: 3,
    question: "Selon le livret, que garantissent les droits et devoirs des citoyens ?",
    choices: [
      "Un équilibre entre les libertés individuelles et le bien commun",
      "La primauté des libertés individuelles sur le bien commun",
      "La primauté du bien commun sur les libertés individuelles",
      "L'égalité des revenus entre tous les citoyens"
    ],
    explication: "Le livret présente les droits et devoirs comme ce qui conditionne la vie en société et garantit « un équilibre entre les libertés individuelles et le bien commun » : aucun des deux ne l'emporte par principe sur l'autre.",
    page: 25
  },
  {
    id: "an-dd-009",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que sont les droits fondamentaux ?",
    choices: [
      "Des droits essentiels garantis à toute personne",
      "Des droits essentiels garantis aux seuls citoyens français",
      "Des droits essentiels que la loi ne peut jamais limiter",
      "Des droits essentiels réservés aux personnes majeures"
    ],
    explication: "Les droits fondamentaux sont garantis par la Constitution, la DDHC et les traités ; la plupart s'appliquent à toute personne résidant en France. Ils ne sont pas absolus pour autant : la loi peut les encadrer pour protéger l'ordre public.",
    page: 25
  },
  {
    id: "an-dd-009-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-009",
    difficulty: 3,
    question: "Lequel de ces textes ne fait PAS partie de ceux qui, selon le livret, garantissent principalement les droits fondamentaux en France ?",
    choices: [
      "Le Code civil de 1804",
      "La Charte de l'environnement de 2004",
      "Le préambule de la Constitution de 1946",
      "La Convention européenne des droits de l'homme"
    ],
    explication: "Le livret cite la Constitution de 1958 et son préambule, la DDHC de 1789, le préambule de 1946, la Charte de l'environnement de 2004 et les textes internationaux comme la CEDH. Le Code civil fixe les règles applicables entre les personnes.",
    page: 25
  },
  {
    id: "an-dd-010",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel droit protège une personne contre une arrestation arbitraire ?",
    choices: [
      "Le droit à la sûreté",
      "Le droit de résistance à l'oppression",
      "Le droit au respect de la vie privée",
      "Le droit à la dignité de la personne humaine"
    ],
    explication: "La sûreté protège chacun contre toute arrestation, détention ou sanction arbitraire (article 7 de la DDHC). La résistance à l'oppression est un autre droit naturel cité à l'article 2.",
    page: 25
  },
  {
    id: "an-dd-010-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-010",
    difficulty: 2,
    question: "Au nom du droit à la sûreté, qui contrôle toute privation de liberté ?",
    choices: [
      "Un juge",
      "Le préfet du département",
      "Le commissaire de police",
      "Le ministre de l'Intérieur"
    ],
    explication: "Personne ne peut être arrêté ou enfermé sans raison légale, et toute privation de liberté est contrôlée par un juge. La police agit sous ce contrôle.",
    page: 25
  },
  {
    id: "an-dd-011",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est le texte fondateur établissant les droits et les devoirs de chaque citoyen ?",
    choices: [
      "La Déclaration des droits de l'homme et du citoyen de 1789",
      "La Constitution de 1958",
      "Le Code civil de 1804",
      "La Déclaration universelle des droits de l'homme de 1948"
    ],
    explication: "La DDHC de 1789 fonde les droits et devoirs des citoyens ; la Constitution de 1958 y renvoie dans son préambule, ce qui lui donne valeur constitutionnelle.",
    page: 25
  },
  {
    id: "an-dd-011-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-011",
    difficulty: 3,
    question: "À quelle date la Déclaration des droits de l'homme et du citoyen a-t-elle été adoptée ?",
    choices: [
      "Le 26 août 1789",
      "Le 14 juillet 1789",
      "Le 14 juillet 1790",
      "Le 4 août 1789"
    ],
    explication: "La Charte des droits et devoirs du citoyen rappelle la DDHC « du 26 août 1789 ». Le 14 juillet 1789 est la prise de la Bastille et le 14 juillet 1790 la fête de la Fédération.",
    page: 25
  },
  {
    id: "an-dd-012",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel texte affirme que tous les hommes naissent libres et égaux en droits ?",
    choices: [
      "La Déclaration des droits de l'homme et du citoyen",
      "La Constitution de 1958",
      "Le Code civil",
      "Le préambule de la Constitution de 1946"
    ],
    explication: "L'article 1er de la DDHC de 1789 proclame la liberté et l'égalité en droits. Le préambule de 1946 ajoute d'autres principes, comme l'égalité entre les femmes et les hommes.",
    page: 25
  },
  {
    id: "an-dd-012-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-012",
    difficulty: 2,
    question: "Quel article de la DDHC proclame que les hommes naissent et demeurent libres et égaux en droits ?",
    choices: [
      "L'article 1er",
      "L'article 2",
      "L'article 4",
      "L'article 6"
    ],
    explication: "C'est l'article 1er. L'article 2 énumère les droits naturels (liberté, propriété, sûreté, résistance à l'oppression), l'article 4 définit la liberté et l'article 6 la loi.",
    page: 25
  },
  {
    id: "an-dd-013",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle situation est une atteinte à la dignité humaine ?",
    choices: [
      "La traite des êtres humains",
      "Une fouille menée par la police sous le contrôle d'un juge",
      "Un licenciement pour faute grave",
      "Une amende pour excès de vitesse"
    ],
    explication: "L'esclavage, le travail forcé, la traite et les traitements inhumains portent atteinte à la dignité humaine. Une fouille contrôlée par un juge fait partie des pouvoirs légaux de la police.",
    page: 25
  },
  {
    id: "an-dd-013-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-013",
    difficulty: 2,
    question: "Selon le livret, laquelle de ces situations de travail est une atteinte à la dignité ?",
    choices: [
      "Être employé par une entreprise sans être rémunéré",
      "Être payé au SMIC horaire",
      "Travailler 35 heures par semaine",
      "Être embauché en contrat à durée déterminée"
    ],
    explication: "Le livret cite explicitement le cas d'une personne employée par une entreprise et non rémunérée comme une atteinte à la dignité, qui se rapproche du travail forcé.",
    page: 25
  },
  {
    id: "an-dd-014",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que la liberté d'expression ?",
    choices: [
      "Le droit d'exprimer ses opinions dans les limites fixées par la loi",
      "Le droit de tout dire, y compris des injures et des menaces",
      "Le droit de tout dire en ligne, où la loi ne s'applique pas",
      "Le droit de s'exprimer, sauf pour critiquer les institutions"
    ],
    explication: "Chacun peut exprimer ses idées, mais sans appel à la violence, insulte, menace ni propos discriminatoires. Ces limites s'appliquent aussi sur les réseaux sociaux, et la critique des institutions reste libre.",
    page: 25
  },
  {
    id: "an-dd-015",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Suite à une interpellation par la police, il est possible de :",
    choices: [
      "Être assisté par un avocat",
      "Refuser toute fouille par les policiers",
      "Exiger d'être entendu directement par un juge",
      "Être relâché après avoir prévenu un proche"
    ],
    explication: "Une personne arrêtée ou en garde à vue est informée de ses droits : garder le silence, être assistée par un avocat, prévenir un proche. Prévenir un proche n'entraîne pas sa libération, et la police peut fouiller sous le contrôle du juge.",
    page: 25
  },
  {
    id: "an-dd-015-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-015",
    difficulty: 3,
    question: "Quels droits sont notifiés à une personne placée en garde à vue ?",
    choices: [
      "Garder le silence, être assistée par un avocat, prévenir un proche",
      "Garder le silence, être libérée sous caution, prévenir son employeur",
      "Être assistée par un avocat, refuser toute fouille, garder le silence",
      "Prévenir un proche, être jugée dans l'heure, garder le silence"
    ],
    explication: "Le livret cite trois droits : garder le silence, être assistée par un avocat et prévenir un proche. La personne est aussi informée des motifs de son arrestation.",
    page: 25
  },
  {
    id: "an-dd-016",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Tous les citoyens français ont-ils une religion ?",
    choices: [
      "Non, chacun est libre de croire ou de ne pas croire",
      "Oui, chacun doit la déclarer à l'état civil",
      "Oui, mais chacun peut en changer une fois majeur",
      "Non, car la pratique religieuse est interdite en public"
    ],
    explication: "La liberté de conscience permet d'avoir une religion, d'en changer ou de ne pas en avoir. La laïcité n'interdit pas la pratique religieuse : c'est l'État et ses agents qui sont neutres.",
    page: 25
  },
  {
    id: "an-dd-016-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-016",
    difficulty: 2,
    question: "Une personne détenue en prison conserve-t-elle sa liberté de culte ?",
    choices: [
      "Oui, elle la conserve pendant toute sa détention",
      "Non, elle est suspendue pendant la durée de la peine",
      "Oui, mais seulement après la moitié de sa peine",
      "Non, sauf autorisation spéciale du juge"
    ],
    explication: "Le livret le précise : les personnes emprisonnées conservent la liberté de culte pendant leur détention. Elles sont privées de leur liberté d'aller et venir, pas de leur liberté de conscience.",
    page: 25
  },
  {
    id: "an-dd-017",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "À quel âge est la majorité numérique en France ?",
    choices: [
      "15 ans",
      "13 ans",
      "16 ans",
      "18 ans"
    ],
    explication: "La majorité numérique est fixée à 15 ans : avant cet âge, on ne peut pas s'inscrire seul sur les réseaux sociaux. La majorité civile, elle, est à 18 ans.",
    page: 32
  },
  {
    id: "an-dd-017-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-017",
    difficulty: 3,
    question: "Quelle loi a instauré la majorité numérique à 15 ans pour lutter contre le cyber-harcèlement ?",
    choices: [
      "La loi du 7 juillet 2023",
      "La loi du 2 août 2021",
      "La loi du 26 janvier 2024",
      "La loi du 17 mai 2013"
    ],
    explication: "C'est la loi du 7 juillet 2023. La loi du 2 août 2021 est la loi de bioéthique, celle du 26 janvier 2024 la loi CIAI (intégration) et celle du 17 mai 2013 la loi sur le mariage pour tous.",
    page: 32
  },
  {
    id: "an-dd-018",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Dans lequel de ces endroits est-on autorisé à fumer ?",
    choices: [
      "Dans la rue",
      "Dans le hall d'un immeuble",
      "Dans la cour d'une école",
      "Sur un quai de gare couvert"
    ],
    explication: "Fumer est interdit dans les lieux publics fermés ou couverts (gares, halls, restaurants) et, depuis le 1er juillet 2025, aux abords des écoles, dans les parcs, sur les plages et dans les abribus. La rue reste autorisée.",
    page: 32
  },
  {
    id: "an-dd-018-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-018",
    difficulty: 2,
    question: "Depuis le 1er juillet 2025, dans lequel de ces lieux en plein air est-il également interdit de fumer ?",
    choices: [
      "Sur une plage",
      "Sur un trottoir en centre-ville",
      "Sur son balcon privé",
      "Sur le parking d'un supermarché"
    ],
    explication: "Depuis le 1er juillet 2025, l'interdiction s'étend aux parcs, aux plages, aux abribus, aux abords des écoles et aux installations sportives. L'amende est de 135 €.",
    page: 32
  },
  {
    id: "an-dd-019",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En France, la conduite sans permis d'une moto est :",
    choices: [
      "Un délit puni par la loi",
      "Une contravention punie d'une simple amende",
      "Un crime jugé par la cour d'assises",
      "Autorisée si le conducteur est assuré"
    ],
    explication: "Conduire sans permis est un délit, puni d'un an de prison et de 15 000 € d'amende. Ce n'est donc pas une simple contravention, qui ne peut pas mener en prison.",
    page: 32
  },
  {
    id: "an-dd-019-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-019",
    difficulty: 3,
    question: "Quelle peine encourt une personne qui conduit sans permis ?",
    choices: [
      "1 an de prison et 15 000 € d'amende",
      "3 mois de prison et 3 750 € d'amende",
      "3 ans de prison et 9 000 € d'amende",
      "Une amende de 135 €, sans prison"
    ],
    explication: "La conduite sans permis est punie d'un an de prison et de 15 000 € d'amende. Trois ans et 9 000 € sanctionnent l'alcool au volant au-delà de 0,8 g/l ; trois mois et 3 750 €, un excès de vitesse de plus de 50 km/h.",
    page: 32
  },
  {
    id: "an-dd-020",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "En quoi consiste le devoir de solidarité ?",
    choices: [
      "Contribuer à aider les personnes en difficulté, notamment par l'impôt",
      "Verser chaque année une partie de son salaire à une association",
      "Héberger chez soi les personnes sans logement de son quartier",
      "Accomplir chaque année des heures de bénévolat obligatoires"
    ],
    explication: "La solidarité passe d'abord par la protection sociale, financée par les impôts et les cotisations ; l'engagement associatif l'illustre aussi, mais il reste volontaire.",
    page: 32
  },
  {
    id: "an-dd-020-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-020",
    difficulty: 3,
    question: "Selon le livret, quel exemple illustre la solidarité intergénérationnelle ?",
    choices: [
      "Les cotisations des salariés financent les retraites",
      "Les impôts financent les écoles et les hôpitaux publics",
      "La Sécurité sociale rembourse les frais de santé",
      "Les citoyens participent à la défense de la Nation"
    ],
    explication: "La solidarité intergénérationnelle se traduit par le soutien entre générations : en cotisant, chaque salarié contribue aux retraites. Les impôts, la Sécurité sociale et la défense relèvent de la solidarité collective.",
    page: 32
  },
  {
    id: "an-dd-021",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Est-ce légal d'être marié à plusieurs personnes en même temps ?",
    choices: [
      "Non, la polygamie est interdite en France",
      "Oui, si les mariages ont été célébrés à l'étranger",
      "Oui, avec l'accord écrit de chacun des époux",
      "Oui, si la religion des époux le permet"
    ],
    explication: "La polygamie est interdite et constitue une infraction pénale, même si un mariage a été célébré à l'étranger ou si une religion l'autorise.",
    page: 32
  },
  {
    id: "an-dd-021-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-021",
    difficulty: 2,
    question: "Quel mariage est le seul reconnu par la loi en France ?",
    choices: [
      "Le mariage civil célébré en mairie",
      "Le mariage civil ou religieux, au choix des époux",
      "Le mariage religieux suivi d'une déclaration en mairie",
      "Le mariage enregistré chez un notaire"
    ],
    explication: "Seul le mariage civil, célébré en mairie par le maire ou un adjoint, est reconnu par la loi. Les mariés reçoivent un acte de mariage et un livret de famille ; le notaire intervient pour le divorce par consentement mutuel.",
    page: 32
  },
  {
    id: "an-dd-022",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Est-ce obligatoire de déclarer ses impôts chaque année en France ?",
    choices: [
      "Oui, c'est une obligation légale annuelle",
      "Non, seulement si l'on est imposable",
      "Oui, mais seulement pour les salariés",
      "Non, l'employeur s'en charge avec le prélèvement à la source"
    ],
    explication: "Toute personne majeure résidant en France et non rattachée au foyer fiscal de ses parents doit déclarer chaque année l'intégralité de ses revenus, même si elle n'est pas imposable. Une fausse déclaration peut être sanctionnée.",
    page: 32
  },
  {
    id: "an-dd-022-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-022",
    difficulty: 3,
    question: "Qui doit déclarer ses revenus chaque année, selon le livret ?",
    choices: [
      "Toute personne majeure résidant en France, non rattachée au foyer de ses parents",
      "Toute personne de nationalité française, quel que soit son pays de résidence",
      "Toute personne résidant en France dont les revenus dépassent le SMIC",
      "Toute personne salariée en France, dès l'âge de 16 ans"
    ],
    explication: "Le critère est la résidence, pas la nationalité ni le niveau de revenu : toute personne majeure résidant en France et qui n'est plus rattachée au foyer fiscal de ses parents déclare l'intégralité de ses revenus.",
    page: 32
  },
  {
    id: "an-dd-023",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Est-il obligatoire de porter secours à une personne en danger ?",
    choices: [
      "Oui, la non-assistance à personne en danger est punie",
      "Non, sauf si l'on est médecin ou pompier",
      "Oui, même si cela met sa propre vie en danger",
      "Non, c'est seulement un devoir moral"
    ],
    explication: "Chacun doit porter secours à autrui dans la mesure où il peut le faire sans mettre sa propre vie en péril. La non-assistance à personne en danger est un délit.",
    page: 32
  },
  {
    id: "an-dd-023-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-023",
    difficulty: 2,
    question: "Selon le livret, dans quelle limite s'applique l'obligation de porter secours à autrui ?",
    choices: [
      "Dans la mesure où l'on peut agir sans mettre sa propre vie en péril",
      "En toutes circonstances, même au péril de sa propre vie",
      "Seulement si la personne en danger est un membre de sa famille",
      "Seulement si l'on a suivi une formation aux premiers secours"
    ],
    explication: "L'assistance à personne en danger impose de porter secours « dans la mesure où » on peut le faire sans mettre sa propre vie en péril. Alerter les secours fait partie de ce devoir.",
    page: 32
  },
  {
    id: "an-dd-024",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Être juré d'assises est :",
    choices: [
      "Un devoir civique auquel on ne peut se soustraire sans motif grave",
      "Une mission réservée aux volontaires inscrits en mairie",
      "Une fonction réservée aux magistrats et aux avocats",
      "Une activité facultative que l'on peut refuser librement"
    ],
    explication: "Participer au jury d'assises est un devoir réservé aux citoyens français : la personne tirée au sort ne peut pas refuser librement, sauf dispense pour motif sérieux.",
    page: 32
  },
  {
    id: "an-dd-024-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-024",
    difficulty: 2,
    question: "Quelle juridiction juge les crimes avec la participation de citoyens jurés ?",
    choices: [
      "La cour d'assises",
      "Le tribunal correctionnel",
      "Le tribunal de police",
      "Le conseil de prud'hommes"
    ],
    explication: "Les crimes sont jugés par la cour d'assises, où siègent des jurés. Le tribunal correctionnel juge les délits, le tribunal de police les contraventions et le conseil de prud'hommes les litiges du travail.",
    page: 32
  },
  {
    id: "an-dd-025",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "La vente d'alcool en France est interdite aux personnes de moins de :",
    choices: [
      "18 ans",
      "16 ans",
      "21 ans",
      "17 ans"
    ],
    explication: "La vente d'alcool est interdite aux mineurs, c'est-à-dire aux moins de 18 ans, quel que soit le type de boisson.",
    page: 32
  },
  {
    id: "an-dd-025-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-025",
    difficulty: 2,
    question: "La consommation d'alcool dans l'espace public peut-elle être interdite ?",
    choices: [
      "Oui, par un arrêté municipal",
      "Non, elle est libre pour toute personne majeure",
      "Oui, mais uniquement par une loi nationale",
      "Non, seule sa vente aux mineurs est encadrée"
    ],
    explication: "Le maire peut interdire la consommation d'alcool dans l'espace public par arrêté municipal. L'ivresse publique est par ailleurs punie d'une amende pouvant aller jusqu'à 150 €.",
    page: 32
  },
  {
    id: "an-dd-026",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Le non-respect du code de la route est :",
    choices: [
      "Une infraction punie par la loi",
      "Sanctionné uniquement en cas d'accident",
      "Une simple faute réparée par l'assurance",
      "Toléré hors agglomération"
    ],
    explication: "Les infractions routières sont sanctionnées même sans accident : amendes, retrait de points, suspension du permis, voire prison pour les plus graves.",
    page: 32
  },
  {
    id: "an-dd-026-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-026",
    difficulty: 3,
    question: "Un automobiliste dépasse la vitesse autorisée de plus de 50 km/h. De quoi s'agit-il ?",
    choices: [
      "D'un délit, avec retrait de 6 points du permis",
      "D'une contravention, avec retrait d'1 point du permis",
      "D'une contravention, avec une amende de 68 €",
      "D'un crime jugé par la cour d'assises"
    ],
    explication: "Au-delà de 50 km/h, l'excès de vitesse est un délit : jusqu'à 3 mois de prison, 3 750 € d'amende et 6 points retirés. L'amende de 68 € et le retrait d'1 point concernent un dépassement de moins de 20 km/h.",
    page: 32
  },
  {
    id: "an-dd-027",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Lequel de ces crimes ou délits peut entrainer la privation des droits civils et politiques par un juge ?",
    choices: [
      "La fraude électorale",
      "Un excès de vitesse de moins de 20 km/h",
      "Le tapage nocturne",
      "Le non-respect du tri des déchets"
    ],
    explication: "La privation des droits civiques sanctionne des infractions graves, comme la fraude électorale. Les autres propositions sont des contraventions, punies d'une amende.",
    page: 32
  },
  {
    id: "an-dd-027-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-027",
    difficulty: 2,
    question: "Selon le livret, quel type de condamnation peut entraîner la privation des droits civiques et politiques ?",
    choices: [
      "Une condamnation pour viol ou agression sexuelle",
      "Une condamnation pour tapage nocturne",
      "Un retard dans la déclaration de ses revenus",
      "Une amende pour stationnement gênant"
    ],
    explication: "Le livret cite les condamnations pour viol ou agression sexuelle : pendant plusieurs années, la personne condamnée ne peut plus voter ni se présenter aux élections.",
    page: 32
  },
  {
    id: "an-dd-028",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Pour obtenir une carte d'identité, il faut :",
    choices: [
      "Avoir la nationalité française et fournir les justificatifs demandés",
      "Résider en France depuis au moins cinq ans, quelle que soit sa nationalité",
      "Être majeur et posséder un titre de séjour en cours de validité",
      "Être inscrit sur les listes électorales de sa commune"
    ],
    explication: "La carte nationale d'identité est délivrée aux personnes de nationalité française ; les étrangers résidant en France détiennent un titre de séjour.",
    page: 32
  },
  {
    id: "an-dd-029",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Pour quel motif peut-on limiter la liberté d'expression ?",
    choices: [
      "L'injure, la diffamation ou l'incitation à la haine",
      "La critique du gouvernement ou du président",
      "L'expression d'une opinion religieuse",
      "La caricature et la satire"
    ],
    explication: "La loi punit les abus de la liberté d'expression qui portent atteinte à autrui : injures, diffamation, provocation à la haine. Critiquer le pouvoir, exprimer une opinion religieuse ou caricaturer restent permis.",
    page: 25
  },
  {
    id: "an-dd-029-v1",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-029",
    difficulty: 2,
    question: "Sur un réseau social, lequel de ces messages est interdit par la loi ?",
    choices: [
      "Un message qui incite à la violence contre un groupe de personnes",
      "Un message qui critique violemment la politique du Gouvernement",
      "Un dessin satirique qui caricature un responsable politique",
      "Un message affirmant que l'on ne croit en aucune religion"
    ],
    explication: "La liberté d'expression sur les réseaux sociaux est protégée, mais les contenus qui incitent à la haine ou à la violence sont interdits. La critique, la satire et l'athéisme relèvent de la liberté d'opinion.",
    page: 25
  },
  {
    id: "an-dd-030",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Que doit faire un citoyen s'il est appelé à être juré dans un procès d'assises ?",
    choices: [
      "Se présenter et participer au jury",
      "Proposer un autre électeur volontaire pour le remplacer",
      "Refuser par simple courrier, sans avoir à se justifier",
      "Ne se présenter que si le procès dure moins d'une semaine"
    ],
    explication: "Être juré est un devoir civique : il faut se présenter, sauf dispense accordée pour un motif sérieux. On ne peut ni se faire remplacer ni refuser sans justification.",
    page: 32
  },
  {
    id: "an-dd-031",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est l'âge de la majorité civile en France ?",
    choices: [
      "18 ans",
      "21 ans",
      "16 ans",
      "20 ans"
    ],
    explication: "Depuis 1974, la majorité civile est fixée à 18 ans ; elle était auparavant de 21 ans.",
    page: 32
  },
  {
    id: "an-dd-031-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-031",
    difficulty: 3,
    question: "En quelle année la majorité civile a-t-elle été abaissée à 18 ans ?",
    choices: [
      "1974",
      "1968",
      "1975",
      "1981"
    ],
    explication: "La majorité à 18 ans date de 1974, sous Valéry Giscard d'Estaing. 1975 est l'année de la loi Veil et 1981 celle de l'abolition de la peine de mort.",
    page: 32
  },
  {
    id: "an-dd-032",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Quel est l'un des devoirs principaux d'un citoyen français ?",
    choices: [
      "Respecter les lois",
      "Voter à toutes les élections",
      "Adhérer à un syndicat",
      "Accomplir un service militaire"
    ],
    explication: "Respecter la loi est la première obligation de toute personne vivant en France. Le vote n'est pas obligatoire et le service militaire obligatoire n'existe plus depuis 1997.",
    page: 32
  },
  {
    id: "an-dd-032-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-032",
    difficulty: 2,
    question: "Selon le livret, quelle attitude chaque citoyen doit-il adopter face aux résultats d'une élection ?",
    choices: [
      "Les respecter, quelles que soient ses opinions politiques",
      "Les respecter seulement s'il a lui-même voté",
      "Les respecter seulement si la participation dépasse 50 %",
      "Les respecter seulement s'ils sont confirmés par référendum"
    ],
    explication: "Le respect des résultats électoraux est un principe essentiel de la démocratie et de l'État de droit : ils s'imposent à tout citoyen, quelles que soient ses opinions.",
    page: 32
  },
  {
    id: "an-dd-033",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 1,
    question: "Quelle est l'infraction la plus grave ?",
    choices: [
      "Le crime",
      "Le délit",
      "La contravention",
      "L'amende forfaitaire"
    ],
    explication: "Les infractions sont classées par gravité croissante : contraventions, délits, crimes. Les crimes sont jugés par la cour d'assises ou la cour criminelle.",
    page: 32
  },
  {
    id: "an-dd-033-v1",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    variantOf: "an-dd-033",
    difficulty: 2,
    question: "Comment les infractions sont-elles classées, de la moins grave à la plus grave ?",
    choices: [
      "Contravention, délit, crime",
      "Délit, contravention, crime",
      "Contravention, crime, délit",
      "Délit, crime, contravention"
    ],
    explication: "La contravention (excès de vitesse, tapage nocturne) est la moins grave, le délit (vol, harcèlement moral) intermédiaire, le crime (viol, meurtre, terrorisme) le plus grave.",
    page: 32
  },
  {
    id: "an-dd-034",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que la citoyenneté numérique ?",
    choices: [
      "Se comporter de façon responsable et respectueuse sur internet",
      "Disposer d'une identité numérique reconnue par l'État",
      "Pouvoir accomplir toutes ses démarches administratives en ligne",
      "Avoir le droit de voter par internet aux élections"
    ],
    explication: "La citoyenneté numérique, enseignée notamment à l'école, consiste à faire un usage responsable, éthique et sûr des technologies : les droits et devoirs s'appliquent aussi en ligne.",
    page: 32
  },
  {
    id: "an-dd-035",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Qu'est-ce que le devoir de mémoire ?",
    choices: [
      "Se souvenir des événements douloureux de l'histoire pour qu'ils ne se reproduisent pas",
      "Conserver les archives et les papiers de sa famille pour les transmettre",
      "Célébrer chaque année les victoires militaires et les grands personnages",
      "Ne jamais remettre en cause les décisions prises par les dirigeants passés"
    ],
    explication: "Le devoir de mémoire honore les victimes de l'histoire (Shoah, guerres, esclavage) pour éviter que ces drames se reproduisent ; il ne se réduit pas à célébrer des victoires.",
    page: 32
  },
  {
    id: "an-dd-036",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 3,
    question: "Qui peut être appelé à faire partie d'un jury d'assises en France ?",
    choices: [
      "Tout citoyen français de plus de 23 ans, tiré au sort sur les listes électorales",
      "Tout citoyen français de plus de 18 ans, volontaire et inscrit en mairie",
      "Tout résident de plus de 25 ans, tiré au sort parmi les contribuables",
      "Tout citoyen français de plus de 30 ans, désigné par le juge"
    ],
    explication: "Les jurés sont tirés au sort parmi les citoyens inscrits sur les listes électorales, âgés d'au moins 23 ans. Ce devoir est réservé aux Français.",
    page: 32
  },
  {
    id: "an-dd-037",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: true,
    difficulty: 2,
    question: "Une personne est privée de ses droits civils et politiques pendant 5 ans suite à une condamnation. Parmi ces propositions laquelle est correcte ? Pendant 5 ans,…",
    choices: [
      "Elle ne peut ni voter ni être élue",
      "Elle ne peut plus exercer d'activité salariée",
      "Elle ne peut plus quitter le territoire français",
      "Elle perd automatiquement la nationalité française"
    ],
    explication: "La privation des droits civiques retire notamment le droit de vote et l'éligibilité. Elle n'interdit pas de travailler et ne fait pas perdre la nationalité.",
    page: 32
  },
  {
    id: "p3-s1-qcm-001",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que définit le Code civil, promulgué en 1804 par Napoléon Bonaparte ?",
    choices: [
      "Les règles essentielles applicables entre les personnes",
      "Les infractions et les peines qui leur correspondent",
      "Les droits et obligations des salariés et des employeurs",
      "L'organisation et le fonctionnement des pouvoirs publics"
    ],
    explication: "Le Code civil fixe les règles essentielles entre les personnes. Les infractions et leurs peines relèvent du Code pénal, et l'organisation des pouvoirs publics de la Constitution.",
    page: 25
  },
  {
    id: "p3-s1-qcm-002",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Lequel de ces droits est réservé aux citoyens français ?",
    choices: [
      "Le droit de vote aux élections nationales",
      "Le droit de créer une association",
      "Le droit de rejoindre un syndicat",
      "Le droit de créer une entreprise"
    ],
    explication: "Le droit de vote aux élections nationales, la défense nationale et le jury d'assises sont réservés aux Français. Tout travailleur peut rejoindre un syndicat, et il n'est pas nécessaire d'être Français pour créer une association ou une entreprise.",
    page: 25
  },
  {
    id: "p3-s1-qcm-003",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Que dit l'article 10 de la DDHC de 1789 ?",
    choices: [
      "« Nul ne doit être inquiété pour ses opinions, même religieuses »",
      "« La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui »",
      "« La libre communication des pensées et des opinions est un des droits les plus précieux »",
      "« Tout homme est présumé innocent jusqu'à ce qu'il ait été déclaré coupable »"
    ],
    explication: "L'article 10 protège la liberté de pensée et de religion, pourvu que leur manifestation ne trouble pas l'ordre public. La libre communication des pensées relève de l'article 11, la présomption d'innocence de l'article 9.",
    page: 26
  },
  {
    id: "p3-s1-qcm-004",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Combien d'États composent l'espace Schengen ?",
    choices: [
      "23 États membres de l'UE et 4 États associés",
      "27 États membres de l'UE et 4 États associés",
      "23 États membres de l'UE, sans État associé",
      "25 États membres de l'UE et 2 États associés"
    ],
    explication: "L'espace Schengen réunit 23 États membres de l'UE et 4 États associés : Norvège, Islande, Suisse et Liechtenstein. Tous les membres de l'UE n'en font donc pas partie.",
    page: 27
  },
  {
    id: "p3-s1-qcm-005",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Un médecin peut-il révéler le dossier médical d'une personne ?",
    choices: [
      "Non, pas sans son consentement",
      "Oui, à son employeur s'il le demande",
      "Oui, à ses proches, sans son accord",
      "Oui, à son assureur sur simple demande"
    ],
    explication: "Le secret professionnel et médical fait partie du droit au respect de la vie privée : un médecin ne peut pas révéler le dossier médical d'une personne sans son consentement, pas même à sa famille.",
    page: 28
  },
  {
    id: "p3-s1-qcm-006",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Depuis le 8 mars 2024, quelle liberté est garantie par la Constitution ?",
    choices: [
      "La liberté de recourir à l'IVG",
      "Le droit au mariage pour tous",
      "Le droit à la contraception",
      "Le recours à la PMA pour toutes les femmes"
    ],
    explication: "Depuis le 8 mars 2024, la liberté de recourir à l'interruption volontaire de grossesse est inscrite dans la Constitution. Le mariage pour tous (2013) et la PMA pour toutes (2021) résultent de lois.",
    page: 29
  },
  {
    id: "p3-s1-qcm-007",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qu'autorise la loi bioéthique du 2 août 2021 ?",
    choices: [
      "La PMA pour toutes les femmes",
      "La GPA pour les couples d'hommes",
      "La PMA réservée aux couples mariés",
      "La PMA pour les couples hétérosexuels uniquement"
    ],
    explication: "La loi de 2021 ouvre la PMA aux couples hétérosexuels, aux couples de femmes et aux femmes seules. La gestation pour autrui (GPA) reste interdite : c'est un délit.",
    page: 29
  },
  {
    id: "p3-s1-qcm-009",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qu'est-ce que l'aide juridictionnelle ?",
    choices: [
      "Une aide financière de l'État pour payer un avocat",
      "Un avocat gratuit garanti à tous, sans condition",
      "Une permanence gratuite tenue par des associations",
      "Une autorité indépendante saisie en cas de discrimination"
    ],
    explication: "L'aide juridictionnelle est une aide financière de l'État pour les personnes ayant peu de moyens qui ont besoin d'un avocat. Les permanences gratuites sont celles des maisons de justice et du droit ; l'autorité indépendante est le Défenseur des droits.",
    page: 30
  },
  {
    id: "p3-s1-qcm-010",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qu'est-ce que le Défenseur des droits ?",
    choices: [
      "Une autorité administrative indépendante créée en 2011",
      "Une autorité administrative indépendante créée en 2001",
      "Un service du ministère de la Justice créé en 2011",
      "Un juge spécialisé dans les discriminations, créé en 2011"
    ],
    explication: "Le Défenseur des droits est une autorité administrative indépendante créée en 2011. Ce n'est ni un juge ni un service ministériel : il intervient en cas de litige avec une administration, de discrimination ou d'atteinte aux droits.",
    page: 30
  },
  {
    id: "p3-s1-qcm-011",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Que doit faire l'organisateur d'une manifestation ?",
    choices: [
      "La déclarer à l'administration, avec le parcours prévu",
      "Obtenir une autorisation écrite du ministre de l'Intérieur",
      "Prévenir le commissariat le jour même, sans autre formalité",
      "Rien, la liberté de manifester dispense de toute démarche"
    ],
    explication: "Pour éviter les troubles à l'ordre public, une manifestation doit faire l'objet d'une déclaration préalable auprès de l'administration, qui précise le parcours et identifie les organisateurs. Il s'agit d'une déclaration, pas d'une demande d'autorisation.",
    page: 31
  },
  {
    id: "p3-s1-qcm-012",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quelle loi reconnaît le droit de créer ou de rejoindre une association ?",
    choices: [
      "La loi du 1er juillet 1901",
      "La loi du 9 décembre 1905",
      "La loi du 29 juillet 1881",
      "La loi du 21 mars 1884"
    ],
    explication: "La liberté d'association date de la loi du 1er juillet 1901. La loi de 1881 concerne la liberté de la presse, celle de 1884 les syndicats et celle de 1905 la séparation des Églises et de l'État.",
    page: 31
  },
  {
    id: "p3-s1-qcm-014",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Le droit à la contraception est-il garanti en France ?",
    choices: [
      "Oui, y compris pour les mineurs",
      "Oui, mais seulement pour les personnes majeures",
      "Non, seule l'IVG est garantie par la loi",
      "Non, il relève du seul choix du médecin"
    ],
    explication: "Le droit à la contraception, qui permet de choisir de ne pas devenir parent, est garanti par plusieurs dispositifs législatifs et de santé publique, y compris pour les mineurs.",
    page: 29
  },
  {
    id: "p3-s1-qcm-015",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Lequel de ces actes le livret cite-t-il comme une atteinte interdite au droit de disposer de son corps ?",
    choices: [
      "La stérilisation forcée",
      "Le refus d'un traitement médical",
      "La vaccination obligatoire des enfants",
      "Le recours à une IVG par une mineure"
    ],
    explication: "Le viol, la mutilation, la stérilisation forcée et l'excision sont interdits et sanctionnés par le juge. Refuser un traitement, vacciner les enfants (obligatoire) ou recourir à une IVG, même mineure, sont prévus par la loi.",
    page: 29
  },
  {
    id: "p3-s1-qcm-016",
    theme: "dd",
    notion: "p3-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Qui peut restreindre la liberté de réunion en cas de risque de trouble à l'ordre public ?",
    choices: [
      "Le maire ou le préfet, sous le contrôle du juge",
      "Le préfet seul, sans contrôle du juge",
      "Le juge seul, à la demande de la police",
      "Le ministre de l'Intérieur seul, par décret"
    ],
    explication: "En cas de risque de violences ou d'émeutes, l'autorité administrative (maire, préfet…) peut restreindre la liberté de réunion, mais toujours sous le contrôle du juge.",
    page: 30
  },
  {
    id: "p3-s2-qcm-001",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quel tribunal juge les auteurs de contraventions ?",
    choices: [
      "Le tribunal de police",
      "Le tribunal correctionnel",
      "La cour d'assises",
      "Le conseil de prud'hommes"
    ],
    explication: "Les contraventions sont jugées par le tribunal de police, les délits par le tribunal correctionnel et les crimes par la cour d'assises ou la cour criminelle. Les prud'hommes jugent les litiges du travail.",
    page: 32
  },
  {
    id: "p3-s2-qcm-002",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Le vol, la fraude fiscale et le harcèlement moral sont des exemples de…",
    choices: [
      "délits",
      "contraventions",
      "crimes",
      "fautes civiles"
    ],
    explication: "Ce sont des délits, jugés par le tribunal correctionnel : amende d'au moins 3 750 € et jusqu'à 10 ans d'emprisonnement. Le braquage, lui, est un crime.",
    page: 32
  },
  {
    id: "p3-s2-qcm-003",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Quelle est la peine maximale encourue pour un crime ?",
    choices: [
      "La réclusion criminelle à perpétuité",
      "30 ans de réclusion criminelle",
      "20 ans de réclusion criminelle",
      "10 ans d'emprisonnement"
    ],
    explication: "Les crimes sont punis d'une réclusion criminelle pouvant aller jusqu'à la perpétuité (prison à vie). Dix ans d'emprisonnement, c'est le maximum prévu pour un délit.",
    page: 33
  },
  {
    id: "p3-s2-qcm-004",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Une contravention peut-elle donner lieu à une peine de prison ?",
    choices: [
      "Non, elle est sanctionnée par une amende",
      "Oui, jusqu'à deux mois de prison",
      "Oui, mais seulement en cas de récidive",
      "Non, elle donne lieu à un simple avertissement"
    ],
    explication: "Les contraventions (excès de vitesse, tapage nocturne) ne peuvent pas mener en prison, mais l'amende est obligatoire : ce n'est pas un simple avertissement.",
    page: 32
  },
  {
    id: "p3-s2-qcm-005",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Le vote est-il obligatoire en France ?",
    choices: [
      "Non, mais c'est un devoir civique important",
      "Oui, sous peine d'une amende forfaitaire",
      "Oui, mais seulement pour l'élection présidentielle",
      "Non, c'est un droit qui n'a rien d'un devoir"
    ],
    explication: "Contrairement à certains pays, le vote n'est pas obligatoire en France. C'est pourtant un devoir civique : la Charte rappelle que « voter est un droit, c'est aussi un devoir civique ».",
    page: 34
  },
  {
    id: "p3-s2-qcm-006",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Qui doit contribuer au financement des services publics ?",
    choices: [
      "Tous les résidents, selon leurs moyens",
      "Les seuls citoyens de nationalité française",
      "Les seules personnes qui exercent un emploi",
      "Les seuls foyers imposables sur le revenu"
    ],
    explication: "Selon l'article 13 de la DDHC, la contribution commune est indispensable : tous les résidents, et pas uniquement les Français, participent au financement des services publics selon leurs moyens.",
    page: 34
  },
  {
    id: "p3-s2-qcm-007",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Depuis quand le service militaire obligatoire n'existe-t-il plus en France ?",
    choices: [
      "1997",
      "1995",
      "1992",
      "2003"
    ],
    explication: "Le service militaire obligatoire n'existe plus depuis 1997. Les jeunes participent désormais à la Journée Défense et Citoyenneté (JDC).",
    page: 35
  },
  {
    id: "p3-s2-qcm-008",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "À quel âge les jeunes Français doivent-ils se faire recenser à la mairie ?",
    choices: [
      "16 ans",
      "18 ans",
      "15 ans",
      "17 ans"
    ],
    explication: "Dès 16 ans, les Françaises et les Français doivent se faire recenser à la mairie pour participer à la Journée Défense et Citoyenneté.",
    page: 35
  },
  {
    id: "p3-s2-qcm-009",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "La scolarité est obligatoire de…",
    choices: [
      "3 à 16 ans",
      "6 à 16 ans",
      "3 à 18 ans",
      "6 à 18 ans"
    ],
    explication: "La scolarité est obligatoire de 3 à 16 ans, à partir de la rentrée de l'année civile des 3 ans de l'enfant ; avant 2019, elle commençait à 6 ans.",
    page: 36
  },
  {
    id: "p3-s2-qcm-011",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Le service militaire volontaire (SMV) mis en place au 1er janvier 2026 s'adresse…",
    choices: [
      "aux jeunes de 18 à 25 ans, français ou étrangers, exclus de l'emploi",
      "aux jeunes de 18 à 25 ans de nationalité française uniquement",
      "à tous les jeunes Français de 16 à 25 ans, sans condition",
      "aux étudiants de 18 à 30 ans, français ou étrangers"
    ],
    explication: "Le SMV, d'une durée de 8 mois, s'adresse aux jeunes de 18 à 25 ans, français ou étrangers, exclus du marché de l'emploi, pour leur apporter une formation et affirmer les valeurs de la République.",
    page: 35
  },
  {
    id: "p3-s2-qcm-013",
    theme: "dd",
    notion: "p3-s2",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Sur quoi repose en premier lieu la défense nationale française aujourd'hui ?",
    choices: [
      "Une armée de métier et la dissuasion nucléaire",
      "Une armée de conscription et la dissuasion nucléaire",
      "Une armée de métier et le service militaire volontaire",
      "La réserve citoyenne et les forces de l'OTAN"
    ],
    explication: "La défense nationale repose en premier lieu sur une armée de métier et une stratégie de dissuasion nucléaire. Le SMV et les réserves la complètent sans en être le socle.",
    page: 35
  },
  {
    id: "annexes-s1-qcm-001",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Selon l'article 2 de la DDHC, quels sont les droits naturels et imprescriptibles de l'Homme ?",
    choices: [
      "La liberté, la propriété, la sûreté et la résistance à l'oppression",
      "La liberté, l'égalité, la sûreté et la résistance à l'oppression",
      "La liberté, la propriété, l'égalité et la fraternité",
      "La vie, la liberté, la sûreté et la propriété"
    ],
    explication: "L'article 2 cite la liberté, la propriété, la sûreté et la résistance à l'oppression. L'égalité, proclamée à l'article 1er, ne figure pas dans cette liste.",
    page: 78
  },
  {
    id: "annexes-s1-qcm-002",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Selon l'article 6 de la DDHC, la loi est…",
    choices: [
      "l'expression de la volonté générale",
      "l'expression de la souveraineté du Roi",
      "l'œuvre commune des juges et des élus",
      "la garantie des droits naturels de l'Homme"
    ],
    explication: "« La Loi est l'expression de la volonté générale. Elle doit être la même pour tous, soit qu'elle protège, soit qu'elle punisse » (article 6).",
    page: 78
  },
  {
    id: "annexes-s1-qcm-003",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Quel article de la DDHC fonde la présomption d'innocence ?",
    choices: [
      "L'article 9",
      "L'article 7",
      "L'article 8",
      "L'article 16"
    ],
    explication: "L'article 9 dispose que « tout homme est présumé innocent jusqu'à ce qu'il ait été déclaré coupable ». L'article 7 encadre les arrestations, l'article 8 les peines.",
    page: 78
  },
  {
    id: "annexes-s1-qcm-004",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Selon l'article 16 de la DDHC, une société sans garantie des droits ni séparation des pouvoirs…",
    choices: [
      "n'a point de Constitution",
      "n'est pas une République",
      "n'a point de souveraineté",
      "n'est pas une Nation"
    ],
    explication: "« Toute Société dans laquelle la garantie des Droits n'est pas assurée, ni la séparation des Pouvoirs déterminée, n'a point de Constitution » (article 16).",
    page: 78
  },
  {
    id: "annexes-s1-qcm-005",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "En application de quel article la Charte des droits et devoirs du citoyen français est-elle établie ?",
    choices: [
      "L'article 21-24 du code civil",
      "L'article 1er de la Constitution",
      "L'article 371-1 du code civil",
      "L'article 433-5 du code pénal"
    ],
    explication: "La Charte est établie en application de l'article 21-24 du code civil. L'article 371-1 du code civil définit l'autorité parentale, et l'article 433-5 du code pénal punit l'outrage.",
    page: 79
  },
  {
    id: "annexes-s1-qcm-006",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Selon la Charte, quelle est la position de la République à l'égard des cultes ?",
    choices: [
      "Elle n'en reconnaît, n'en salarie ni n'en subventionne aucun",
      "Elle reconnaît les cultes déclarés, sans les salarier",
      "Elle subventionne les cultes, mais n'en salarie aucun",
      "Elle reconnaît tous les cultes et les subventionne à égalité"
    ],
    explication: "La République garantit le libre exercice des cultes mais n'en reconnaît, n'en salarie ni n'en subventionne aucun : l'État et les religions sont séparés.",
    page: 79
  },
  {
    id: "annexes-s1-qcm-008",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 2,
    question: "Selon la Charte, dans quel cas une personne devenue française peut-elle être déchue de la nationalité ?",
    choices: [
      "Si elle se livre à des actes contraires aux intérêts fondamentaux de la France",
      "Si elle s'abstient de voter à plusieurs élections successives",
      "Si elle conserve la nationalité de son pays d'origine",
      "Si elle s'installe durablement dans un pays étranger"
    ],
    explication: "Une personne ayant acquis la nationalité française peut en être déchue si elle s'est soustraite à ses obligations de défense ou livrée à des actes contraires aux intérêts fondamentaux de la France.",
    page: 80
  },
  {
    id: "annexes-s1-qcm-009",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Que garantit l'article 8 de la DDHC en matière de peines ?",
    choices: [
      "On ne peut être puni qu'en vertu d'une loi antérieure au délit",
      "Tout accusé est présumé innocent jusqu'à sa condamnation",
      "Nul ne peut être arrêté hors des cas prévus par la loi",
      "Toute peine doit être prononcée par un jury populaire"
    ],
    explication: "« Nul ne peut être puni qu'en vertu d'une Loi établie et promulguée antérieurement au délit » (article 8) : c'est la légalité et la non-rétroactivité des peines. La présomption d'innocence relève de l'article 9, l'arrestation de l'article 7.",
    page: 78
  },
  {
    id: "annexes-s1-qcm-010",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Selon la Charte, à quels domaines s'étend l'égal accès des femmes et des hommes que favorise la République ?",
    choices: [
      "Aux mandats électoraux, aux fonctions électives et aux responsabilités professionnelles et sociales",
      "Aux seuls mandats électoraux et fonctions électives, hors vie professionnelle",
      "Aux seules responsabilités professionnelles, hors mandats électoraux",
      "Aux seuls emplois publics, hors entreprises privées et associations"
    ],
    explication: "La Charte précise que « la République favorise l'égal accès des femmes et des hommes aux mandats électoraux et fonctions électives, ainsi qu'aux responsabilités professionnelles et sociales ».",
    page: 80
  },
  {
    id: "annexes-s1-qcm-011",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Selon l'article 14 de la DDHC, que peuvent faire les citoyens au sujet de la contribution publique ?",
    choices: [
      "En constater la nécessité et la consentir librement",
      "La refuser s'ils la jugent excessive",
      "En fixer chacun le montant pour lui-même",
      "En constater la nécessité, sans en suivre l'emploi"
    ],
    explication: "L'article 14 permet aux citoyens, par eux-mêmes ou par leurs représentants, de constater la nécessité de la contribution publique, de la consentir librement, d'en suivre l'emploi et d'en déterminer la quotité, l'assiette, le recouvrement et la durée.",
    page: 78
  },
  {
    id: "annexes-s1-qcm-012",
    theme: "dd",
    notion: "annexes-s1",
    kind: "connaissance",
    official: false,
    difficulty: 3,
    question: "Que garantit l'article 15 de la DDHC ?",
    choices: [
      "Le droit de la Société de demander compte à tout agent public de son administration",
      "Le droit de tout citoyen de concourir personnellement à la formation de la loi",
      "Le droit de la Société à une force publique instituée pour l'avantage de tous",
      "Le droit de tout citoyen d'accéder aux emplois publics selon sa capacité"
    ],
    explication: "« La Société a le droit de demander compte à tout Agent public de son administration » (article 15). La formation de la loi et l'accès aux emplois publics relèvent de l'article 6, la force publique de l'article 12.",
    page: 78
  },
  {
    id: "ms-dd-001",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Karim, naturalisé l'an dernier, n'est pas allé voter aux élections municipales. Un collègue lui affirme qu'il va recevoir une amende. Qu'en est-il ?",
    choices: [
      "Il ne risque rien : voter n'est pas obligatoire, même si c'est un devoir civique",
      "Il recevra une amende forfaitaire, comme tout électeur qui s'abstient",
      "Il sera radié des listes électorales après cette première abstention",
      "Il risque de perdre sa nationalité, récemment acquise"
    ],
    explication: "Le vote n'est pas obligatoire en France, contrairement à certains pays ; c'est un devoir civique important qui assure la légitimité des élus. L'abstention n'entraîne ni amende ni radiation.",
    page: 34
  },
  {
    id: "ms-dd-002",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Au bureau de vote de son quartier, Fatou souhaite entrer dans l'isoloir avec son mari pour qu'ils choisissent leurs bulletins ensemble. Est-ce permis ?",
    choices: [
      "Non : le vote est personnel et secret, on entre seul dans l'isoloir",
      "Oui, si les deux époux sont inscrits dans ce même bureau",
      "Oui, si le président du bureau de vote donne son accord",
      "Oui, à condition que chacun glisse sa propre enveloppe dans l'urne"
    ],
    explication: "Le vote est personnel et secret : chaque électeur passe seul par l'isoloir avant de déposer son enveloppe dans l'urne. Il est interdit d'y entrer à plusieurs.",
    page: 17
  },
  {
    id: "ms-dd-003",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Pendant une manifestation devant la préfecture, Bruno brûle un drapeau tricolore pour protester contre une réforme. Il affirme que sa liberté de manifester le protège. A-t-il raison ?",
    choices: [
      "Non : l'outrage au drapeau tricolore est puni par le Code pénal",
      "Oui : la liberté de manifester couvre tous les gestes symboliques",
      "Oui, à condition que le drapeau lui appartienne personnellement",
      "Non, mais seulement si le drapeau a été pris sur un bâtiment public"
    ],
    explication: "Les atteintes aux symboles de la République sont punies : le Code pénal sanctionne l'outrage au drapeau tricolore ou à l'hymne national, notamment lors d'une manifestation publique.",
    page: 33
  },
  {
    id: "ms-dd-004",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Sofia, 24 ans, vit seule et a signé son premier contrat de travail. Comme l'impôt est prélevé chaque mois sur son salaire, elle pense n'avoir aucune démarche à faire. Que doit-elle faire ?",
    choices: [
      "Déclarer chaque année l'intégralité de ses revenus",
      "Rien : le prélèvement à la source remplace la déclaration",
      "Déclarer ses revenus seulement s'ils dépassent le SMIC",
      "Laisser ses parents déclarer ses revenus avec les leurs"
    ],
    explication: "Toute personne majeure résidant en France et qui n'est plus rattachée au foyer fiscal de ses parents doit déclarer chaque année l'intégralité de ses revenus. Sofia vit seule : elle déclare elle-même.",
    page: 34
  },
  {
    id: "ms-dd-005",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Paul loue un studio et touche quelques centaines d'euros par mois. Il décide de ne pas les mentionner sur sa déclaration de revenus, jugeant la somme trop faible. Que risque-t-il ?",
    choices: [
      "Une sanction : il faut déclarer l'intégralité de ses revenus",
      "Rien : les petits revenus annexes n'ont pas à être déclarés",
      "Rien, tant que les loyers sont versés en espèces",
      "Rien, tant que son foyer n'est pas imposable"
    ],
    explication: "La déclaration doit porter sur l'intégralité des revenus, quel que soit leur montant. Une fausse déclaration à l'administration peut être sanctionnée.",
    page: 34
  },
  {
    id: "ms-dd-006",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Ahmed, de nationalité marocaine, travaille à Lille depuis trois ans. Il pense que, n'étant pas français, il n'a pas à financer les services publics. A-t-il raison ?",
    choices: [
      "Non : tous les résidents y contribuent, selon leurs moyens",
      "Oui, tant qu'il n'a pas obtenu la nationalité française",
      "Oui : il ne paie que les taxes incluses dans ses achats",
      "Oui : il reste imposé uniquement dans son pays d'origine"
    ],
    explication: "Le financement des services publics est un devoir constitutionnel (article 13 de la DDHC) : tous les résidents, et pas uniquement les Français, y participent selon leurs moyens.",
    page: 34
  },
  {
    id: "ms-dd-007",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Nadia a une fille de 4 ans. Elle préfère la garder à la maison et ne l'inscrire à l'école qu'à 6 ans, « comme avant ». Le peut-elle ?",
    choices: [
      "Non : l'instruction est obligatoire dès 3 ans",
      "Oui : l'école n'est obligatoire qu'à partir de 6 ans",
      "Oui, si elle l'inscrit en crèche jusqu'à ses 6 ans",
      "Oui, si l'enfant ne parle pas encore le français"
    ],
    explication: "La scolarité est obligatoire de 3 à 16 ans, dès la rentrée de l'année civile des 3 ans de l'enfant. Les parents qui ne la respectent pas s'exposent à des poursuites, et les enfants qui ne parlent pas français sont accueillis comme les autres.",
    page: 36
  },
  {
    id: "ms-dd-008",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Kevin, 15 ans, veut quitter le collège pour aider dans le commerce de son oncle. Ses parents sont d'accord. Est-ce possible ?",
    choices: [
      "Non : jusqu'à 16 ans, il reste soumis à l'obligation d'instruction",
      "Oui : l'accord de ses deux parents suffit",
      "Oui, dès qu'il a obtenu le diplôme du brevet",
      "Oui, s'il en informe la mairie de sa commune"
    ],
    explication: "L'instruction est obligatoire jusqu'à 16 ans, et l'accord des parents ne permet pas d'y déroger : ils s'exposeraient à des poursuites.",
    page: 36
  },
  {
    id: "ms-dd-009",
    theme: "dd",
    notion: "annexes-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Isabelle reçoit une convocation pour siéger comme jurée à la cour d'assises de Bordeaux. Elle pense pouvoir l'ignorer, car elle ne s'est jamais portée volontaire. Que doit-elle faire ?",
    choices: [
      "Répondre à la convocation : participer au jury est un devoir du citoyen",
      "Rien : le jury d'assises ne réunit que des citoyens volontaires",
      "Envoyer un membre de sa famille siéger à sa place",
      "Rien, si elle n'a aucune formation juridique"
    ],
    explication: "La Charte des droits et devoirs du citoyen range parmi les devoirs du citoyen français celui de « participer aux jurys d'assises ». Les jurés sont tirés au sort, pas volontaires.",
    page: 80
  },
  {
    id: "ms-dd-010",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Lucas, citoyen belge, vit à Lyon depuis dix ans et vote aux élections municipales. Il se demande s'il peut être tiré au sort comme juré d'assises. Qu'en est-il ?",
    choices: [
      "Non : le jury d'assises est réservé aux citoyens français",
      "Oui, puisqu'il est inscrit sur une liste électorale en France",
      "Oui, car il réside en France depuis plus de cinq ans",
      "Oui, comme tout ressortissant de l'Union européenne"
    ],
    explication: "Le livret cite le jury d'assises parmi les droits et devoirs spécifiques aux citoyens français, avec le droit de vote aux élections nationales et la défense. Voter aux municipales en tant qu'Européen n'y donne pas accès.",
    page: 25
  },
  {
    id: "ms-dd-011",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Inès, Française, vient d'avoir 16 ans. Ses parents se demandent quelle démarche liée à la défense elle doit accomplir. Laquelle ?",
    choices: [
      "Se faire recenser à la mairie pour participer à la JDC",
      "S'inscrire au service militaire volontaire pendant 8 mois",
      "Attendre une convocation à 18 ans, sans démarche",
      "Se faire recenser au commissariat de son quartier"
    ],
    explication: "Dès 16 ans, les Françaises et les Français doivent se faire recenser à la mairie pour participer à la Journée Défense et Citoyenneté. Le SMV, lui, est volontaire et ouvert de 18 à 25 ans.",
    page: 35
  },
  {
    id: "ms-dd-012",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Youssef, 22 ans, de nationalité tunisienne, réside à Marseille et cherche en vain un emploi. Il voudrait rejoindre le service militaire volontaire. Est-ce possible ?",
    choices: [
      "Oui : le SMV est ouvert aux jeunes de 18 à 25 ans, même étrangers",
      "Non : le SMV est réservé aux jeunes de nationalité française",
      "Non : le SMV est réservé aux jeunes de moins de 21 ans",
      "Oui, mais seulement après avoir obtenu sa naturalisation"
    ],
    explication: "Depuis le 1er janvier 2026, le SMV de 8 mois s'adresse aux jeunes de 18 à 25 ans, français ou étrangers, exclus du marché de l'emploi.",
    page: 35
  },
  {
    id: "ms-dd-013",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Hugo, 40 ans, comptable, pense que la défense du pays ne le concerne plus depuis la fin du service militaire obligatoire. A-t-il raison ?",
    choices: [
      "Non : en cas de crise ou de guerre, tout citoyen peut être appelé",
      "Oui : seuls les militaires de métier peuvent être mobilisés",
      "Oui : seuls les jeunes ayant fait la JDC peuvent être appelés",
      "Oui : seuls les réservistes déjà engagés peuvent être appelés"
    ],
    explication: "La défense repose d'abord sur une armée de métier, complétée par des réserves de volontaires. Mais en cas de crise ou de guerre, tout citoyen peut être appelé à participer à la défense du pays.",
    page: 35
  },
  {
    id: "ms-dd-014",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Leïla est régulièrement insultée et frappée par son conjoint. Elle ne sait pas vers qui se tourner. Que peut-elle faire ?",
    choices: [
      "Appeler le 3919 et porter plainte auprès de la police ou de la gendarmerie",
      "Appeler le 119 et déposer plainte auprès du maire de sa commune",
      "Appeler le 115 et attendre que la situation s'apaise d'elle-même",
      "Appeler le 3018 et demander une médiation avec son conjoint"
    ],
    explication: "Le 3919 est le numéro dédié aux violences conjugales, et les victimes peuvent porter plainte auprès de la police ou de la gendarmerie et demander l'aide d'associations. Le 119 concerne l'enfance maltraitée, le 115 l'hébergement d'urgence et le 3018 le harcèlement scolaire.",
    page: 69
  },
  {
    id: "ms-dd-015",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "En pleine nuit, Antoine entend chez ses voisins des cris et des coups : une femme appelle à l'aide. Quelle attitude respecte la loi ?",
    choices: [
      "Appeler le 17 pour alerter la police",
      "Ne rien faire : c'est une affaire privée entre conjoints",
      "Attendre le lendemain pour prévenir le syndic",
      "Appeler le 115, le numéro de l'hébergement d'urgence"
    ],
    explication: "Une personne est en danger : alerter les secours fait partie du devoir d'assistance, et ne pas le faire peut constituer une non-assistance à personne en danger. Le 17 est le numéro de police secours.",
    page: 36
  },
  {
    id: "ms-dd-016",
    theme: "dd",
    notion: "annexes-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Le mari d'Aïcha lui interdit de prendre l'emploi qu'on lui propose et exige qu'elle lui remette chaque mois l'intégralité de son salaire. A-t-il ce droit ?",
    choices: [
      "Non : chaque conjoint exerce librement une profession et dispose de ses revenus",
      "Oui, s'il assure seul la plus grande part des charges du ménage",
      "Non pour l'emploi, mais il peut exiger qu'elle lui remette son salaire",
      "Oui, car l'accord du conjoint est requis pour travailler"
    ],
    explication: "Selon la Charte, « chacun des conjoints peut librement exercer une profession, percevoir ses revenus et en disposer comme il l'entend après avoir contribué aux charges communes ». L'homme et la femme ont les mêmes droits dans tous les domaines.",
    page: 80
  },
  {
    id: "ms-dd-017",
    theme: "dd",
    notion: "annexes-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Après leur séparation, Julien pense qu'il revient désormais à la mère seule de décider de l'éducation de leur fille, puisqu'elle l'héberge. A-t-il raison ?",
    choices: [
      "Non : sauf décision de justice contraire, les parents exercent l'autorité parentale en commun",
      "Oui : après une séparation, l'autorité parentale revient automatiquement à la mère",
      "Oui : le parent qui héberge l'enfant décide seul de son éducation",
      "Non : c'est le père qui décide seul, en tant que chef de famille"
    ],
    explication: "La Charte rappelle que les parents exercent en commun l'autorité parentale. Après une séparation ou un divorce, elle reste exercée par les deux parents, sauf décision de justice contraire.",
    page: 80
  },
  {
    id: "ms-dd-018",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lors d'un repas de famille, Marc gifle son fils de 9 ans « pour l'éduquer » et affirme qu'il en a le droit en tant que père. A-t-il raison ?",
    choices: [
      "Non : l'autorité parentale s'exerce sans violences physiques ni psychologiques",
      "Oui, si la gifle reste exceptionnelle et ne laisse aucune trace",
      "Oui, tant que cela se passe dans le cadre privé du foyer",
      "Oui, jusqu'à ce que l'enfant atteigne l'âge de 13 ans"
    ],
    explication: "L'autorité parentale s'exerce sans violences physiques ou psychologiques : les châtiments corporels sont interdits par la loi car ils portent atteinte à l'intégrité et à la dignité de l'enfant.",
    page: 74
  },
  {
    id: "ms-dd-019",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Sarah, animatrice de centre de loisirs, remarque qu'un enfant arrive souvent avec des bleus et lui confie être frappé chez lui. Quel numéro peut-elle appeler ?",
    choices: [
      "Le 119, numéro de l'enfance maltraitée",
      "Le 3018, numéro du harcèlement scolaire",
      "Le 116 000, numéro des enfants disparus",
      "Le 3919, numéro des violences conjugales"
    ],
    explication: "Le 119 est le numéro dédié à l'enfance maltraitée, joignable gratuitement 24h/24. Le 3018 concerne le harcèlement scolaire et le 116 000 les enfants disparus.",
    page: 69
  },
  {
    id: "ms-dd-020",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Une famille installée à Montreuil prévoit de faire exciser sa fille de 7 ans pendant les vacances dans son pays d'origine, « selon la tradition ». Quelle est la règle ?",
    choices: [
      "C'est interdit et sanctionné : l'excision est une atteinte à l'intégrité du corps",
      "C'est permis si l'acte est pratiqué hors du territoire français",
      "C'est permis si les deux parents y consentent par écrit",
      "C'est permis si l'acte est réalisé par un médecin"
    ],
    explication: "L'excision fait partie des atteintes au corps interdites et sanctionnées par le juge ; les parents ont l'obligation de protéger l'enfant, et toute maltraitance physique porte atteinte à son intégrité et à sa dignité.",
    page: 29
  },
  {
    id: "ms-dd-021",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lina, 12 ans, reçoit chaque jour des insultes de ses camarades, au collège et sur une messagerie. Ses parents veulent obtenir de l'aide. Quel numéro peuvent-ils appeler ?",
    choices: [
      "Le 3018, numéro dédié au harcèlement scolaire",
      "Le 3919, numéro dédié aux violences conjugales",
      "Le 115, numéro de l'hébergement d'urgence",
      "Le 116 000, numéro des enfants disparus"
    ],
    explication: "Le 3018 est le numéro dédié au harcèlement scolaire, y compris en ligne. Les parents doivent aussi protéger leur enfant contre le harcèlement et veiller à son usage des réseaux sociaux.",
    page: 69
  },
  {
    id: "ms-dd-022",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Depuis des mois, la responsable de Sami l'humilie devant ses collègues et le dénigre chaque jour. Il envisage de porter plainte. Comment la loi qualifie-t-elle ces faits de harcèlement moral ?",
    choices: [
      "Un délit, jugé par le tribunal correctionnel",
      "Une contravention, jugée par le tribunal de police",
      "Un crime, jugé par la cour d'assises",
      "Un simple différend, réglé par le règlement intérieur"
    ],
    explication: "Le livret cite le harcèlement moral parmi les délits, comme le vol ou la fraude fiscale : ils sont jugés par le tribunal correctionnel et punis d'au moins 3 750 € d'amende et jusqu'à 10 ans d'emprisonnement.",
    page: 32
  },
  {
    id: "ms-dd-023",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Léo, 13 ans, veut créer seul un compte sur un réseau social, comme ses camarades. Ses parents se demandent si c'est permis. Que dit la loi ?",
    choices: [
      "Il ne peut pas s'inscrire seul avant 15 ans",
      "Il le peut : la majorité numérique est fixée à 13 ans",
      "Il le peut s'il utilise un pseudonyme",
      "Il doit attendre sa majorité civile, à 18 ans"
    ],
    explication: "La loi du 7 juillet 2023 a fixé la majorité numérique à 15 ans pour lutter contre le cyber-harcèlement : avant cet âge, s'inscrire seul sur les réseaux sociaux n'est plus possible.",
    page: 76
  },
  {
    id: "ms-dd-024",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Une entreprise de Nantes écarte la candidature de Moussa, pourtant qualifié, en lui expliquant que son nom « risque de déranger la clientèle ». Qu'en dit la loi ?",
    choices: [
      "C'est une discrimination liée à l'origine, punie par la loi",
      "C'est permis : l'employeur choisit librement qui il embauche",
      "C'est permis dans une entreprise de moins de 50 salariés",
      "C'est permis si le poste est en contact avec la clientèle"
    ],
    explication: "Traiter différemment une personne en raison de son origine est une discrimination punie par la loi. Toute décision d'un employeur (embauche, promotion…) doit être fondée sur des raisons professionnelles.",
    page: 70
  },
  {
    id: "ms-dd-025",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Pour un poste d'infirmier, un hôpital privé demande à Diego de présenter son diplôme. Diego y voit une discrimination. A-t-il raison ?",
    choices: [
      "Non : l'employeur peut exiger un diplôme si le poste requiert une qualification",
      "Oui : exiger un diplôme est toujours une discrimination à l'embauche",
      "Oui : seul un employeur public a le droit de demander un diplôme",
      "Non, mais seulement parce que l'hôpital relève du secteur privé"
    ],
    explication: "Aucune discrimination liée au genre, à la religion ou au physique n'est permise au travail. Mais si un emploi exige un niveau de qualification, l'employeur peut demander la présentation de diplômes, quel que soit le secteur.",
    page: 70
  },
  {
    id: "ms-dd-026",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Un propriétaire refuse de louer son appartement à Awa et Ibrahim en raison de leur origine. Que peuvent-ils faire ?",
    choices: [
      "Signaler cette discrimination au Défenseur des droits",
      "Rien : un propriétaire choisit librement son locataire",
      "Rien, si le logement appartient à un particulier",
      "Saisir le conseil de prud'hommes de leur commune"
    ],
    explication: "Refuser un logement en raison de l'origine est une discrimination punie par la loi. Le Défenseur des droits, autorité indépendante, intervient notamment en cas de discrimination ; les prud'hommes ne jugent que les litiges du travail.",
    page: 30
  },
  {
    id: "ms-dd-027",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Des habitants d'un quartier de Rennes veulent créer une association pour organiser une fête des voisins. L'un d'eux pense qu'il faut d'abord l'autorisation du maire. A-t-il raison ?",
    choices: [
      "Non : la loi de 1901 reconnaît à chacun le droit de créer une association",
      "Oui : toute association doit être autorisée par le maire",
      "Oui : il faut obtenir l'accord préalable du préfet",
      "Non, mais tous ses membres doivent être de nationalité française"
    ],
    explication: "La loi du 1er juillet 1901 reconnaît le droit de créer ou de rejoindre une association, sans autorisation préalable. Les associations doivent seulement respecter les lois de la République.",
    page: 31
  },
  {
    id: "ms-dd-028",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Une association appelle publiquement à rejeter les principes républicains et à la haine contre une partie de la population. L'État peut-il agir ?",
    choices: [
      "Oui : une association contraire aux principes républicains peut être dissoute par l'État",
      "Non : la liberté d'association protège toutes les associations sans exception",
      "Non : seuls les membres de l'association peuvent décider de sa dissolution",
      "Oui, mais seulement si l'association reçoit des subventions publiques"
    ],
    explication: "La liberté d'association n'est pas absolue : les associations doivent respecter les lois de la République, et une association qui ne respecte pas les principes républicains peut être dissoute par l'État.",
    page: 31
  },
  {
    id: "ms-dd-029",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Un collectif de Toulouse prépare une marche pour le climat dans le centre-ville. Que doit-il faire avant le jour J ?",
    choices: [
      "Déclarer la manifestation à l'administration, avec son parcours",
      "Obtenir une autorisation du ministre de l'Intérieur",
      "Rien : la liberté de manifester dispense de toute démarche",
      "Prévenir la presse locale pour rendre la marche légale"
    ],
    explication: "Pour éviter les troubles à l'ordre public, une manifestation doit être déclarée auprès de l'administration ; cette déclaration préalable précise le parcours et identifie les organisateurs.",
    page: 31
  },
  {
    id: "ms-dd-030",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Craignant des émeutes, le préfet interdit un rassemblement prévu dans une ville. Les organisateurs dénoncent une décision illégale. Le préfet pouvait-il agir ainsi ?",
    choices: [
      "Oui, face à un risque de trouble à l'ordre public, sous le contrôle du juge",
      "Non : la liberté de réunion ne peut jamais être restreinte",
      "Non : seul le Président de la République peut interdire un rassemblement",
      "Oui, et sa décision échappe à tout contrôle du juge"
    ],
    explication: "En cas de risque de trouble à l'ordre public (violences, émeutes), l'autorité administrative, maire ou préfet, peut restreindre la liberté de réunion, sous le contrôle du juge.",
    page: 30
  },
  {
    id: "ms-dd-031",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Chloé, en contrat à durée déterminée dans une entreprise de logistique, veut adhérer à un syndicat. Son responsable affirme que c'est réservé aux salariés en CDI. A-t-il raison ?",
    choices: [
      "Non : tout travailleur peut rejoindre un syndicat, sans condition",
      "Oui : l'adhésion syndicale est réservée aux salariés en CDI",
      "Non, mais elle doit d'abord obtenir l'accord de son employeur",
      "Oui, tant que sa période d'essai n'est pas terminée"
    ],
    explication: "Chaque travailleur, sans condition, a le droit de rejoindre une organisation syndicale pour le représenter au travail. La Charte reconnaît aussi le droit de défendre ses intérêts par l'action syndicale.",
    page: 70
  },
  {
    id: "ms-dd-032",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Les salariés d'un entrepôt cessent ensemble le travail pendant deux jours pour obtenir une hausse de leurs salaires. Que font-ils ?",
    choices: [
      "Ils exercent leur droit de grève",
      "Ils exercent leur droit de retrait",
      "Ils commettent un abandon de poste",
      "Ils présentent une démission collective"
    ],
    explication: "Cesser collectivement le travail pour défendre des revendications professionnelles, c'est faire grève. Le droit de retrait concerne un danger grave et imminent, pas une revendication salariale.",
    page: 25
  },
  {
    id: "ms-dd-033",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Le voisin de Nicolas a été placé en garde à vue puis jugé coupable en première instance ; il a fait appel. Sur les réseaux sociaux, des habitants le présentent déjà comme un criminel. Quel est son statut ?",
    choices: [
      "Il reste présumé innocent tant que sa condamnation n'est pas définitive",
      "Il est présumé coupable depuis son placement en garde à vue",
      "Il est présumé coupable depuis le jugement de première instance",
      "Il est présumé coupable puisqu'il a gardé le silence en garde à vue"
    ],
    explication: "La présomption d'innocence s'applique tant qu'aucune condamnation définitive n'a été prononcée. Un premier jugement frappé d'appel n'est pas définitif, et garder le silence est un droit.",
    page: 30
  },
  {
    id: "ms-dd-034",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Nathalie, aux revenus modestes, doit se défendre lors d'un procès devant un tribunal français, mais n'a pas les moyens de payer un avocat. Que peut-elle demander ?",
    choices: [
      "L'aide juridictionnelle, aide financière de l'État",
      "Que le Défenseur des droits plaide à sa place",
      "Que le maire désigne un avocat payé par la commune",
      "Rien : sans moyens, elle se défendra seule"
    ],
    explication: "L'aide juridictionnelle est une aide financière de l'État pour les personnes ayant peu de moyens qui ont besoin d'un avocat lors d'un procès. Le Défenseur des droits n'est pas un avocat.",
    page: 30
  },
  {
    id: "ms-dd-035",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lors d'une soirée chez des amis, un invité filme Emma à son insu et publie la vidéo en ligne. Emma est furieuse. Que peut-elle faire ?",
    choices: [
      "Porter plainte : la filmer sans autorisation porte atteinte à sa vie privée",
      "Rien : la soirée réunissait de nombreuses personnes",
      "Rien, puisque la vidéo a été tournée par un ami",
      "Saisir le maire, chargé de faire respecter le droit à l'image"
    ],
    explication: "Il est interdit de filmer une personne sans son autorisation dans un lieu privé. Une victime d'atteinte à sa vie privée peut porter plainte auprès de la police ou de la gendarmerie ; le juge judiciaire veille au respect de ce droit.",
    page: 28
  },
  {
    id: "ms-dd-036",
    theme: "dd",
    notion: "p3-s1",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "L'employeur de Rachid appelle son médecin traitant pour savoir de quelle maladie souffre son salarié, en arrêt depuis trois semaines. Que doit faire le médecin ?",
    choices: [
      "Refuser de répondre : il est tenu au secret médical",
      "Répondre, puisque l'employeur verse le salaire",
      "Répondre, si l'arrêt dépasse quinze jours",
      "Répondre, si l'employeur le demande par écrit"
    ],
    explication: "Le secret professionnel et médical fait partie du droit au respect de la vie privée : un médecin ne peut pas révéler le dossier médical d'une personne sans son consentement.",
    page: 28
  },
  {
    id: "ms-dd-037",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Lors d'un contrôle routier, Damien, agacé, insulte le policier qui lui demande ses papiers. Quelle est la conséquence ?",
    choices: [
      "Il commet un outrage, puni plus sévèrement envers un policier",
      "Rien : il exerce simplement sa liberté d'expression",
      "Rien, si le contrôle lui paraissait injustifié",
      "Une simple remarque, sans aucune suite pénale"
    ],
    explication: "L'article 433-5 du Code pénal sanctionne l'outrage envers une personne chargée d'une mission de service public, avec des peines renforcées envers une personne dépositaire de l'autorité publique, comme un policier.",
    page: 33
  },
  {
    id: "ms-dd-038",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "À la sortie de l'école, un parent d'élève menace violemment l'institutrice de son fils à cause d'une mauvaise note. Que prévoit la loi ?",
    choices: [
      "Des sanctions aggravées, l'enseignante étant chargée d'une mission de service public",
      "Les mêmes sanctions qu'envers n'importe quel particulier",
      "Aucune sanction, tant qu'il n'a porté aucun coup",
      "Une sanction décidée uniquement par le directeur de l'école"
    ],
    explication: "Pour garantir le respect des institutions, le Code pénal prévoit des sanctions aggravées en cas d'atteinte aux personnes chargées d'une mission de service public, comme les forces de l'ordre, les juges ou les enseignants.",
    page: 33
  },
  {
    id: "ms-dd-039",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 2,
    question: "Dans une rue de Strasbourg, Ana voit un homme s'effondrer sur le trottoir. Elle n'a aucune formation médicale. Quelle attitude respecte la loi ?",
    choices: [
      "Appeler les secours et aider dans la mesure de ses moyens",
      "Passer son chemin : seul un professionnel de santé doit agir",
      "Attendre qu'un autre passant se charge d'appeler les secours",
      "Filmer la scène pour pouvoir témoigner ensuite"
    ],
    explication: "L'assistance à personne en danger impose à chacun, pas seulement aux soignants, de porter secours dans la mesure de ses moyens, notamment en prévenant les secours. S'y soustraire est un délit.",
    page: 36
  },
  {
    id: "ms-dd-040",
    theme: "dd",
    notion: "p3-s2",
    kind: "situation",
    official: false,
    difficulty: 3,
    question: "Sur une route de campagne, Mehdi arrive le premier sur un accident : une voiture est en flammes avec son conducteur à l'intérieur. Que lui impose la loi ?",
    choices: [
      "Alerter les secours et agir sans mettre sa propre vie en péril",
      "Entrer dans la voiture en flammes, sous peine de non-assistance",
      "Rien, puisqu'il n'est pas impliqué dans l'accident",
      "Rien, s'il n'a pas suivi de formation aux premiers secours"
    ],
    explication: "Le devoir d'assistance s'applique « dans la mesure où » l'on peut agir sans mettre sa propre vie en péril. Alerter les secours en fait partie : ne rien faire serait un délit, mais nul n'est tenu de risquer sa vie.",
    page: 36
  },
];
