import type { SousThemeContent } from "../types";

const S = "p5-s3";

export const vieFamiliale: SousThemeContent = {
  flashcards: [
    {
      id: `${S}-fc-001`,
      sousThemeId: S,
      front: "Quel mariage est reconnu par la loi en France ?",
      back: "Seul le **mariage civil célébré en mairie** est reconnu, par le maire ou un adjoint, dans la commune où vit au moins l'un des futurs mariés ou de leurs parents. Les mariés reçoivent un **acte de mariage** et un **livret de famille**.",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-002`,
      sousThemeId: S,
      front: "À partir de quel âge peut-on se marier ?",
      back: "À partir de **18 ans**. Possible dès **16 ans** seulement avec **autorisation spéciale du procureur** de la République et accord des parents (art. 145 et 148 du code civil).",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-003`,
      sousThemeId: S,
      front: "La polygamie est-elle autorisée en France ?",
      back: "**Non** : être marié à plusieurs personnes à la fois est **interdit par la loi** et constitue une **infraction pénale**.",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-004`,
      sousThemeId: S,
      front: "Depuis quand le mariage homosexuel est-il autorisé ?",
      back: "Depuis la loi du **17 mai 2013**. La France est devenue le **14e pays au monde** à autoriser le mariage entre personnes de même sexe.",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-005`,
      sousThemeId: S,
      front: "Comment peut-on divorcer en France ?",
      back: "Soit **devant un juge**, soit **par consentement mutuel devant un notaire**. L'**autorité parentale** continue d'être exercée par les deux parents, sauf décision de justice contraire.",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-006`,
      sousThemeId: S,
      front: "Qu'est-ce que l'état civil ?",
      back: "Le service public (en mairie) qui dresse les **actes d'état civil**. La déclaration des **naissances** (dans les **5 jours**), mariages et décès est **obligatoire**.",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-007`,
      sousThemeId: S,
      front: "Quels congés existent autour de la naissance d'un enfant ?",
      back: "- **Congé maternité** : l'employeur ne peut pas licencier la salariée\n- **Congé paternité** : **28 jours** depuis le 1er juillet 2021\n- **Congé parental d'éducation** (enfant de moins de 16 ans)\n- **Congé supplémentaire de naissance** (1 ou 2 mois) pour les enfants nés dès le 1er janvier 2026",
      sourcePage: 73,
    },
    {
      id: `${S}-fc-008`,
      sousThemeId: S,
      front: "Qu'est-ce que la Convention Internationale des Droits de l'Enfant ?",
      back: "Document signé en **1989** par **196 États** dans le cadre de l'**ONU** : il présente les droits fondamentaux des enfants et impose des obligations aux États. C'est le fondement de l'action de l'**UNICEF**.",
      sourcePage: 74,
    },
    {
      id: `${S}-fc-009`,
      sousThemeId: S,
      front: "Citez des droits de l'enfant.",
      back: "L'**égalité**, avoir un **nom et une identité**, être **soigné** et nourri, **aller à l'école**, la protection de la **vie privée**, être protégé contre la **violence** et l'**exploitation**, pouvoir **s'exprimer** ; les enfants handicapés ont droit à la même vie que les autres.",
      sourcePage: 74,
    },
    {
      id: `${S}-fc-010`,
      sousThemeId: S,
      front: "Qu'est-ce que l'autorité parentale ?",
      back: "Définie à l'**article 371-1 du code civil** : un ensemble de droits et devoirs pour protéger l'**intérêt de l'enfant** jusqu'à sa majorité. Elle s'exerce **sans violences physiques ou psychologiques** — l'excision et les châtiments corporels sont interdits.",
      sourcePage: 74,
    },
    {
      id: `${S}-fc-011`,
      sousThemeId: S,
      front: "Peut-on déshériter totalement ses enfants en France ?",
      back: "**Non** : le partage doit être **équitable entre tous les membres de la fratrie**.",
      sourcePage: 74,
    },
    {
      id: `${S}-fc-012`,
      sousThemeId: S,
      front: "Comment s'organise le système scolaire français ?",
      back: "- **École maternelle** (dès 3 ans, début de l'instruction obligatoire)\n- **École élémentaire** (6-11 ans) — maternelle + élémentaire = école primaire\n- **Collège** (4 années)\n- **Lycée** (général, technologique ou professionnel : seconde, première, terminale)\nLes mairies gèrent les inscriptions à l'école publique.",
      sourcePage: 75,
    },
    {
      id: `${S}-fc-013`,
      sousThemeId: S,
      front: "Comment les enfants qui ne parlent pas français sont-ils accueillis à l'école ?",
      back: "Les enfants **allophones** sont accueillis comme les autres : ils y apprennent le **français** ainsi que les autres matières. Les enfants handicapés peuvent bénéficier d'un **emploi du temps aménagé**.",
      sourcePage: 75,
    },
    {
      id: `${S}-fc-014`,
      sousThemeId: S,
      front: "Qu'est-ce que la majorité numérique ?",
      back: "**15 ans**, instaurée par la **loi du 7 juillet 2023** pour lutter contre le cyber-harcèlement : avant cet âge, on ne peut pas s'inscrire seul sur les réseaux sociaux. Les parents doivent veiller au bon usage des écrans.",
      sourcePage: 76,
    },
  ],

  qcms: [
    {
      id: `${S}-qcm-001`,
      sousThemeId: S,
      question: "Quel mariage est reconnu par la loi française ?",
      choices: [
        "Le mariage civil célébré en mairie",
        "Le mariage religieux",
        "Le mariage civil ou religieux, au choix",
        "Le mariage devant notaire",
      ],
      correctIndex: 0,
      explication:
        "En France, seul le mariage civil célébré en mairie par le maire ou un adjoint est reconnu par la loi.",
      sourcePage: 73,
    },
    {
      id: `${S}-qcm-002`,
      sousThemeId: S,
      question: "La polygamie est…",
      choices: [
        "interdite par la loi : c'est une infraction pénale",
        "autorisée si tous les époux sont d'accord",
        "tolérée pour les mariages célébrés à l'étranger",
        "une simple contravention",
      ],
      correctIndex: 0,
      explication:
        "La polygamie (être marié à plusieurs personnes à la fois) est interdite par la loi et constitue une infraction pénale.",
      sourcePage: 73,
    },
    {
      id: `${S}-qcm-003`,
      sousThemeId: S,
      question: "Sous combien de jours doit-on déclarer une naissance ?",
      choices: ["5 jours", "1 mois", "15 jours", "48 heures"],
      correctIndex: 0,
      explication:
        "La déclaration de la naissance des enfants doit être faite à l'état civil dans les 5 jours qui suivent la naissance.",
      sourcePage: 73,
    },
    {
      id: `${S}-qcm-004`,
      sousThemeId: S,
      question: "Combien de temps dure le congé paternité depuis le 1er juillet 2021 ?",
      choices: ["28 jours", "14 jours", "11 jours", "3 mois"],
      correctIndex: 0,
      explication: "Depuis le 1er juillet 2021, le congé paternité dure 28 jours.",
      sourcePage: 73,
    },
    {
      id: `${S}-qcm-005`,
      sousThemeId: S,
      question: "Un employeur peut-il licencier une salariée enceinte pour ce motif ?",
      choices: [
        "Non, la loi garantit à la femme de conserver son emploi",
        "Oui, avec un préavis",
        "Oui, si l'entreprise est en difficulté",
        "Oui, pendant la période d'essai uniquement",
      ],
      correctIndex: 0,
      explication:
        "Pendant la grossesse et le congé maternité, la loi garantit à la femme de conserver son emploi : l'employeur ne peut pas la licencier pour ce motif.",
      sourcePage: 73,
    },
    {
      id: `${S}-qcm-006`,
      sousThemeId: S,
      question: "Qu'est-ce que la Convention Internationale des Droits de l'Enfant (1989) ?",
      choices: [
        "Un document de l'ONU signé par 196 États protégeant les enfants",
        "Une loi française sur l'école",
        "Un traité européen sur la famille",
        "Une charte de l'UNICEF sans valeur juridique",
      ],
      correctIndex: 0,
      explication:
        "En 1989, 196 États ont signé la Convention Internationale des Droits de l'Enfant dans le cadre de l'ONU. C'est le fondement de l'action de l'UNICEF.",
      sourcePage: 74,
    },
    {
      id: `${S}-qcm-007`,
      sousThemeId: S,
      question: "Quel article du code civil définit l'autorité parentale ?",
      choices: ["L'article 371-1", "L'article 433-5", "L'article 145", "L'article 4"],
      correctIndex: 0,
      explication:
        "L'article 371-1 du code civil définit l'autorité parentale : un ensemble de droits et devoirs visant à protéger l'intérêt de l'enfant.",
      sourcePage: 74,
    },
    {
      id: `${S}-qcm-008`,
      sousThemeId: S,
      question: "Les châtiments corporels sur les enfants sont…",
      choices: [
        "interdits par la loi, comme toute maltraitance physique",
        "tolérés dans le cadre familial",
        "autorisés s'ils sont légers",
        "uniquement déconseillés",
      ],
      correctIndex: 0,
      explication:
        "L'autorité parentale s'exerce sans violences physiques ou psychologiques. Toutes les maltraitances, comme l'excision et les châtiments corporels, sont interdites par la loi.",
      sourcePage: 74,
    },
    {
      id: `${S}-qcm-009`,
      sousThemeId: S,
      question: "Que regroupe l'école primaire ?",
      choices: [
        "L'école maternelle et l'école élémentaire",
        "Le collège et le lycée",
        "Uniquement le CP au CM2",
        "La crèche et la maternelle",
      ],
      correctIndex: 0,
      explication:
        "L'école primaire regroupe l'école maternelle (dès 3 ans) et l'école élémentaire (6 à 11 ans).",
      sourcePage: 75,
    },
    {
      id: `${S}-qcm-010`,
      sousThemeId: S,
      question: "À quel âge la majorité numérique est-elle fixée ?",
      choices: ["15 ans", "13 ans", "16 ans", "18 ans"],
      correctIndex: 0,
      explication:
        "La loi du 7 juillet 2023 a instauré la majorité numérique à 15 ans : avant cet âge, on ne peut pas s'inscrire seul sur les réseaux sociaux.",
      sourcePage: 76,
    },
  ],

  ouvertes: [
    {
      id: `${S}-qo-001`,
      sousThemeId: S,
      question: "Comment se marie-t-on en France ?",
      expectedAnswer:
        "Seul le mariage civil est reconnu : il est célébré en mairie par le maire ou un adjoint, dans la commune où vit au moins l'un des futurs mariés ou de leurs parents. Il est possible à partir de 18 ans. Les mariés reçoivent un acte de mariage et un livret de famille. Depuis le 17 mai 2013, le mariage est ouvert aux couples de même sexe. La polygamie est interdite.",
      keyPoints: [
        "mariage civil en mairie",
        "18 ans",
        "mariage pour tous 2013 ou interdiction de la polygamie",
      ],
      sourcePage: 73,
    },
    {
      id: `${S}-qo-002`,
      sousThemeId: S,
      question: "Quelles sont les obligations des parents envers leurs enfants ?",
      expectedAnswer:
        "L'autorité parentale (article 371-1 du code civil) impose de protéger l'enfant (sécurité, santé, vie privée, moralité), d'assurer son éducation et son bien-être, de le protéger contre le racket, la prostitution, les addictions, le harcèlement et la violence, de veiller à ses relations et à son usage des réseaux sociaux. Elle s'exerce sans violences physiques ou psychologiques, et l'école est obligatoire de 3 à 16 ans.",
      keyPoints: [
        "protéger l'enfant (sécurité, santé…)",
        "assurer son éducation / scolarité obligatoire",
        "sans violences",
      ],
      sourcePage: 74,
    },
    {
      id: `${S}-qo-003`,
      sousThemeId: S,
      question: "Comment fonctionne l'école en France ?",
      expectedAnswer:
        "L'instruction est obligatoire de 3 à 16 ans. L'école primaire regroupe la maternelle (dès 3 ans) et l'élémentaire (6-11 ans) ; viennent ensuite le collège (4 ans) puis le lycée général, technologique ou professionnel (seconde, première, terminale). Les mairies gèrent les inscriptions. Les enfants allophones sont accueillis et apprennent le français ; les parents participent à la communauté éducative.",
      keyPoints: [
        "obligatoire de 3 à 16 ans",
        "maternelle/élémentaire puis collège puis lycée",
      ],
      sourcePage: 75,
    },
  ],

  trous: [
    {
      id: `${S}-tt-001`,
      sousThemeId: S,
      template:
        "Le mariage est possible à partir de {{1}} ans. Depuis le 17 mai {{2}}, le mariage est ouvert aux couples de même sexe ; la France est le {{3}}e pays au monde à l'avoir autorisé.",
      blanks: [
        { index: 1, accepted: ["18", "dix-huit"], strict: true },
        { index: 2, accepted: ["2013"], strict: true },
        { index: 3, accepted: ["14", "quatorzième"], strict: true },
      ],
      sourcePage: 73,
    },
    {
      id: `${S}-tt-002`,
      sousThemeId: S,
      template:
        "La Convention Internationale des Droits de l'Enfant a été signée en {{1}} par 196 États dans le cadre de l'{{2}}. Elle est le fondement de l'action de l'{{3}}.",
      blanks: [
        { index: 1, accepted: ["1989"], strict: true },
        { index: 2, accepted: ["onu", "organisation des nations unies"] },
        { index: 3, accepted: ["unicef"] },
      ],
      sourcePage: 74,
    },
    {
      id: `${S}-tt-003`,
      sousThemeId: S,
      template:
        "Le congé paternité dure {{1}} jours depuis 2021. La majorité numérique est fixée à {{2}} ans par la loi du 7 juillet {{3}}.",
      blanks: [
        { index: 1, accepted: ["28"], strict: true },
        { index: 2, accepted: ["15", "quinze"], strict: true },
        { index: 3, accepted: ["2023"], strict: true },
      ],
      sourcePage: 76,
    },
  ],
};
