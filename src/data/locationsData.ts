// Differentiated local data for the 11 Grand Namur communes
// Provides factual geographical, infrastructural, and housing context without generic AI duplication.

export interface LocationDetail {
  slug: string;
  name: string;
  postalCode: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  neighbourhoods: string[];
  accessRoutes: string[];
  housingAndPlumbingContext: string;
  frequentInterventions: string[];
  waterContext: string;
  emergencyGuidance: string;
  faqs: Array<{ question: string; answer: string }>;
  nearbyCommunes: Array<{ name: string; slug: string }>;
}

export const LOCATIONS_DATA: Record<string, LocationDetail> = {
  jambes: {
    slug: "jambes",
    name: "Jambes",
    postalCode: "5100",
    metaTitle: "Plombier Jambes (5100) 24/7 | Dépannage, Débouchage & Fuites",
    metaDescription: "Dépannage plomberie d'urgence à Jambes (5100). Débouchage canalisations, recherche de fuite sans casse et réparation chauffe-eau. Devis clair avant travaux.",
    h1: "Plombier à Jambes (5100) : Dépannage et Débouchage 24/7",
    lead: "Sur la rive droite de la Meuse, Jambes alterne entre boulevards commerçants et quartiers résidentiels. Nos techniciens interviennent 24h/24 pour sécuriser vos installations sanitaires et circuits de chauffage.",
    neighbourhoods: ["Avenue Jean Materne", "Montagne Sainte-Barbe", "Amée", "Velaine", "Enhaive", "Gare de Jambes"],
    accessRoutes: ["N4 (Chaussée de Liège)", "Pont de Jambes", "Pont des Ardennes", "N90"],
    housingAndPlumbingContext: "Le parc immobilier jamboise présente deux profils distincts : des immeubles à appartements et maisons de maître du début du XXe siècle le long de la Meuse avec des colonnes de chute anciennes sujettes à l'engorgement, et des villas plus récentes vers la Montagne Sainte-Barbe équipées de chaudières à condensation et d'adoucisseurs.",
    frequentInterventions: [
      "Débouchage haute pression de colonnes collectives et WC bouchés",
      "Recherche acoustique de fuite sous carrelage et plancher",
      "Remplacement de mitigeurs et robinetterie entartrée",
      "Dépannage de chaudières murales gaz et radiateurs froids"
    ],
    waterContext: "L'eau distribuée sur Jambes présente une dureté moyenne de 28 à 32 °f (degrés français). Cette forte teneur en calcaire accélère l'entartrage des chauffe-eaux et corps de chauffe.",
    emergencyGuidance: "En maison mitoyenne, le compteur d'eau se trouve généralement en cave en façade avant. En appartement, chaque logement dispose d'un robinet d'arrêt divisionnaire situé dans la gaine technique de palier ou sous l'évier.",
    faqs: [
      {
        question: "Quel est le délai moyen pour un dépannage urgent à Jambes ?",
        answer: "Grâce à notre proximité immédiate et aux accès par les ponts de Meuse (Pont de Jambes et Pont des Ardennes), nous intervenons généralement dans un délai restreint selon la circulation locale."
      },
      {
        question: "Intervenez-vous pour un débouchage d'égout à Jambes le week-end ?",
        answer: "Oui, notre équipe de garde dispose d'un véhicule équipé d'un système hydrocureur haute pression disponible 24h/24, y compris samedis, dimanches et jours fériés."
      },
      {
        question: "L'eau à Jambes est-elle calcaire ?",
        answer: "Oui, le réseau namurois délivre une eau calcaire (>28 °f). L'installation d'un adoucisseur d'eau à sel ou CO2 permet de prolonger la durée de vie de vos appareils ménagers et chauffe-eaux."
      }
    ],
    nearbyCommunes: [
      { name: "Erpent", slug: "erpent" },
      { name: "Wépion", slug: "wepion" },
      { name: "Salzinnes", slug: "salzinnes" }
    ]
  },
  erpent: {
    slug: "erpent",
    name: "Erpent",
    postalCode: "5101",
    metaTitle: "Plombier Erpent (5101) | Chauffage, Sanitaire & Dépannage 24/7",
    metaDescription: "Service de plomberie et chauffage à Erpent (5101). Installation sanitaire, détartrage adoucisseur, entretien chaudière et fuites d'eau. Intervention express.",
    h1: "Plombier Chauffagiste à Erpent (5101) : Dépannage et Entretien",
    lead: "Sur les hauteurs namuroises bordant la Nationale 4, Erpent regroupe de nombreux lotissements récents et zones scolaires. Nous assurons le dépannage rapide et la maintenance préventive de vos équipements.",
    neighbourhoods: ["Erpent-Val", "Plateau d'Erpent", "Quartier Collège d'Erpent", "Chaussée de Marche"],
    accessRoutes: ["N4 (Chaussée de Marche)", "Accès rapide E411 (Sortie 15 Loyers/Erpent)"],
    housingAndPlumbingContext: "Erpent est caractérisé par un bâti résidentiel récent, constitué majoritairement de maisons unifamiliales et de résidences contemporaines dotées de planchers chauffants, de pompes à chaleur air-eau et de réseaux sanitaires en multicouche/PER.",
    frequentInterventions: [
      "Pose et entretien périodique d'adoucisseurs d'eau sanitaires",
      "Désembouage des circuits de plancher chauffant basse température",
      "Remplacement de ballons d'eau chaude thermodynamiques",
      "Réparation de fuites sur raccords encastrés"
    ],
    waterContext: "Sur le plateau d'Erpent, la minéralisation de l'eau est élevée (environ 30 °f). Les installations modernes dotées d'échangeurs fins de chaudières à condensation nécessitent une protection anti-calcaire rigoureuse.",
    emergencyGuidance: "Dans les habitations unifamiliales d'Erpent, le compteur d'eau avec vanne d'arrêt principale est le plus souvent situé dans le garage, la buanderie ou le vide ventilé.",
    faqs: [
      {
        question: "Assurez-vous l'entretien de chaudière et pompe à chaleur à Erpent ?",
        answer: "Oui, nos chauffagistes qualifiés assurent le contrôle périodique et le désembouage des systèmes de chauffage individuel gaz, mazout et pompes à chaleur."
      },
      {
        question: "Comment réagir en cas de fuite sous un plancher chauffant à Erpent ?",
        answer: "Coupez le circulateur de la chaudière, fermez les vannes du collecteur (nourrice) correspondant et contactez-nous pour une détection de fuite non destructive par thermographie infrarouge."
      },
      {
        question: "Proposez-vous des devis gratuits pour rénovation de salle de bain à Erpent ?",
        answer: "Tout à fait. Nous venons sur place étudier votre projet (douche italienne, meuble double vasque, WC suspendu) et établissons un devis clair et chiffré avant travaux."
      }
    ],
    nearbyCommunes: [
      { name: "Jambes", slug: "jambes" },
      { name: "Bouge", slug: "bouge" }
    ]
  },
  salzinnes: {
    slug: "salzinnes",
    name: "Salzinnes",
    postalCode: "5000",
    metaTitle: "Plombier Salzinnes (5000) 24/7 | Recherche de Fuite & Débouchage",
    metaDescription: "SOS Plombier Salzinnes (5000). Détection de fuite sans casse, débouchage WC et canalisation, dépannage chauffe-eau. Dépannage rapide de jour comme de nuit.",
    h1: "Plombier à Salzinnes (5000) : Dépannage Plomberie 24/7",
    lead: "Quartier dynamique abritant la Clinique Sainte-Élisabeth et de nombreuses maisons ouvrières et mitoyennes, Salzinnes requiert une réactivité maximale pour la plomberie d'urgence.",
    neighbourhoods: ["Place Wiertz", "Avenue de Sambre et Meuse", "Quartier Sainte-Élisabeth", "Avenue Reine Astrid", "Val-Saint-Bernard"],
    accessRoutes: ["N90 (Avenue Reine Astrid)", "N922", "Pont de Salzinnes"],
    housingAndPlumbingContext: "Les constructions à Salzinnes présentent une forte proportion de maisons de rangée des années 1920-1960. Les installations comportent parfois des colonnes de décharge en fonte ou d'anciennes canalisations d'arrivée en plomb qu'il convient de remplacer lors des rénovations.",
    frequentInterventions: [
      "Remplacement d'anciennes canalisations corrodées et tuyaux en plomb",
      "Débouchage d'urgence de siphons de sol et WC",
      "Réparation de fuites sur tuyaux de chauffe-eau et mitigeurs",
      "Remplacement de groupes de sécurité de boiler qui fuient"
    ],
    waterContext: "L'eau du réseau de distribution est dure (environ 29 °f). Le calcaire combiné à la vétusté de certains tuyaux en acier galvanisé entraîne des pertes de pression et des dépôts d'oxyde de fer.",
    emergencyGuidance: "Dans les maisons de rangée salzinnoises, le compteur est presque systématiquement situé au sous-sol près du mur mitoyen de rue. Manipulez la vanne quart-de-tour ou le volant avec précaution s'il n'a pas été actionné depuis longtemps.",
    faqs: [
      {
        question: "Pouvez-vous intervenir en urgence près de la Clinique Sainte-Élisabeth ?",
        answer: "Oui, nous sommes régulièrement en intervention dans le secteur de Salzinnes et pouvons sécuriser un logement inondé ou une panne de chauffe-eau rapidement."
      },
      {
        question: "Que faire si mon robinet d'arrêt général est bloqué par le calcaire ?",
        answer: "Ne forcez pas avec une clé au risque de casser le raccord avant-compteur. Appelez immédiatement notre service d'urgence pour une fermeture sécurisée ou le remplacement de la vanne."
      },
      {
        question: "Comment identifier si mes canalisations contiennent encore du plomb à Salzinnes ?",
        answer: "Nos techniciens vérifient visuellement les tuyaux métalliques : le plomb est gris mat, mou et se raye facilement à l'ongle ou avec une pièce de monnaie. Nous vous proposons alors un devis de remplacement en cuivre ou multicouche."
      }
    ],
    nearbyCommunes: [
      { name: "Flawinne", slug: "flawinne" },
      { name: "Saint-Servais", slug: "saint-servais" },
      { name: "Jambes", slug: "jambes" }
    ]
  },
  "saint-servais": {
    slug: "saint-servais",
    name: "Saint-Servais",
    postalCode: "5002",
    metaTitle: "Plombier Saint-Servais (5002) 24/7 | Dépannage & Chaudière",
    metaDescription: "Plombier chauffagiste à Saint-Servais (5002). Dépannage de chaudière, débouchage canalisation express et réparation de fuites d'eau. Tarifs transparents.",
    h1: "Plombier Chauffagiste à Saint-Servais (5002) : Urgence 24/7",
    lead: "Carrefour historique au nord de Namur bordé par la Chaussée de Waterloo, Saint-Servais comprend une forte densité résidentielle. Nous répondons présent pour tous vos travaux de plomberie et de chauffage.",
    neighbourhoods: ["Chaussée de Waterloo", "Quartier Beau-Vallon", "Faubourg de Saint-Servais", "Bricgniot", "Rue Saint-Donat"],
    accessRoutes: ["N4 (Chaussée de Waterloo)", "Liaison vers la N954 et la gare de Namur"],
    housingAndPlumbingContext: "Saint-Servais possède une diversité d'habitats allant des appartements en copropriété aux maisons ouvrières rénovées. Les pannes de chaudières murales et les engorgements de tuyaux d'évacuation de cuisine y sont fréquents.",
    frequentInterventions: [
      "Dépannage de chaudières gaz et remise en pression de circuit",
      "Débouchage électromécanique de tuyauteries de cuisine et salle de bain",
      "Installation de robinets thermostatiques et purge de radiateurs",
      "Détection de fuites invisibles dans les murs mitoyens"
    ],
    waterContext: "Dureté calcaire de l'ordre de 28 à 30 °f. Entartrage marqué des résistances de chauffe-eau et des corps thermostatiques de douche.",
    emergencyGuidance: "Vanne générale généralement située au sous-sol ou en caveau de compteur en rez-de-chaussée. Si une fuite survient dans une gaine d'immeuble, avertissez également le syndic ou le concierge.",
    faqs: [
      {
        question: "Quel est le coût d'un dépannage de chaudière à Saint-Servais ?",
        answer: "Le tarif dépend de la nature de la panne (sonde défectueuse, vase d'expansion, circulateur, remise en pression). Notre technicien établit un diagnostic sur place et vous soumet un devis avant toute réparation."
      },
      {
        question: "Intervenez-vous pour des WC suspendus qui fuient à Saint-Servais ?",
        answer: "Oui, nous intervenons sur tous modèles de bâti-supports (Geberit, Grohe, Siamp) pour remplacer les joints de cloche, flotteurs ou mécanismes de chasse sans détériorer l'habillage."
      },
      {
        question: "Fournissez-vous des rapports pour les assurances habitation ?",
        answer: "Oui, après chaque recherche de fuite ou réparation de dégât des eaux, nous vous remettons une facture détaillée avec photos justificatives conforme aux exigences des assureurs belges."
      }
    ],
    nearbyCommunes: [
      { name: "Belgrade", slug: "belgrade" },
      { name: "Bouge", slug: "bouge" },
      { name: "Salzinnes", slug: "salzinnes" }
    ]
  },
  bouge: {
    slug: "bouge",
    name: "Bouge",
    postalCode: "5004",
    metaTitle: "Plombier Bouge (5004) 24/7 | Dépannage Plomberie & Chauffage",
    metaDescription: "Urgence plombier à Bouge (5004). Proximité CHR de Namur. Dépannage fuite, débouchage canalisation et entretien chaudière gaz/mazout. Devis gratuit.",
    h1: "Plombier à Bouge (5004) : Dépannage et Chauffagiste 24/7",
    lead: "Surplombant la vallée de la Meuse à proximité du CHR de Namur, Bouge bénéficie d'une situation géographique stratégique. Nos techniciens y assurent une permanence plomberie et chauffage 24/7.",
    neighbourhoods: ["Le Coquelet", "Proximité CHR Sambre et Meuse", "Chaussée de Louvain", "Quartier Sainte-Marguerite", "Rue de Balart"],
    accessRoutes: ["N80 (Chaussée de Louvain)", "N921", "N4"],
    housingAndPlumbingContext: "Le tissu urbain de Bouge est constitué de maisons individuelles bourgeoises, de villas résidentielles et de résidences médicalisées. La pression sur le réseau de distribution peut être localement forte en bas de coteau, nécessitant l'installation de réducteurs de pression.",
    frequentInterventions: [
      "Pose et réglage de réducteurs de pression pour protéger la robinetterie",
      "Remplacement en urgence de chauffe-eaux électriques et boilers gaz",
      "Recherche et colmatage de fuites sur canalisations enterrées",
      "Débouchage de collecteurs d'eaux pluviales et d'eaux vannes"
    ],
    waterContext: "Eau calcaire (dureté 27-31 °f). La présence combinée d'une pression parfois supérieure à 5 bars en pied de colline accentue le risque de coups de bélier et de rupture de flexibles.",
    emergencyGuidance: "Repérez votre réducteur de pression après compteur. En cas de surpression ou de tuyau percé, fermez la vanne d'isolement située directement en amont du compteur d'eau.",
    faqs: [
      {
        question: "Pourquoi mes canalisations claquent-elles quand je coupe un robinet à Bouge ?",
        answer: "Il s'agit du coup de bélier, favorisé par une pression excessive sur le réseau. L'installation d'un réducteur de pression taré à 3 bars et d'anti-béliers résout définitivement ce problème."
      },
      {
        question: "Êtes-vous disponibles pour une fuite de nuit à Bouge ?",
        answer: "Oui, notre service de dépannage 24/7 intervient la nuit, les dimanches et les jours fériés pour colmater toute fuite menaçant votre logement."
      },
      {
        question: "Réalisez-vous l'entretien des chaudières mazout et gaz à Bouge ?",
        answer: "Oui, nos techniciens certifiés réalisent le nettoyage, l'analyse des fumées et la délivrance de l'attestation légale de contrôle périodique requise en Wallonie."
      }
    ],
    nearbyCommunes: [
      { name: "Champion", slug: "champion" },
      { name: "Vedrin", slug: "vedrin" },
      { name: "Jambes", slug: "jambes" }
    ]
  },
  wepion: {
    slug: "wepion",
    name: "Wépion",
    postalCode: "5100",
    metaTitle: "Plombier Wépion (5100) 24/7 | Spécialiste Débouchage & Fuites",
    metaDescription: "Dépannage plomberie et assainissement à Wépion (5100). Débouchage égouts, inspection caméra, pompes de relevage et réparation chauffe-eau le long de la Meuse.",
    h1: "Plombier à Wépion (5100) : Dépannage Plomberie et Assainissement",
    lead: "Étendu sur la rive gauche de la Meuse le long de la Chaussée de Dinant, Wépion présente des défis hydrauliques particuliers liés à la proximité du fleuve et aux propriétés en pente.",
    neighbourhoods: ["Chaussée de Dinant", "Quartier de la Fosse", "Hauteurs de Wépion", "Bord de Meuse", "Vierly"],
    accessRoutes: ["N92 (Chaussée de Dinant)", "N95"],
    housingAndPlumbingContext: "De nombreuses habitations de Wépion comportent des sous-sols aménagés, des fosses septiques ou des stations de micro-épuration, ainsi que des pompes de relevage pour évacuer les eaux usées vers le collecteur principal de la N92.",
    frequentInterventions: [
      "Dépannage et remplacement de pompes de relevage bloquées",
      "Débouchage et curage de canalisations d'eaux usées vers la Meuse",
      "Protection contre les refoulements d'égout (pose de clapets anti-retour)",
      "Installation et réglage d'adoucisseurs d'eau pour villas"
    ],
    waterContext: "Dureté de l'eau calcaire (30 °f). Proximité de la nappe alluviale de la Meuse avec risques accrus d'infiltrations en sous-sol lors des crues ou de fortes pluies.",
    emergencyGuidance: "Si votre pompe de relevage disjoncte ou émet une alarme sonore, stoppez immédiatement l'utilisation des sanitaires du sous-sol pour éviter tout débordement, puis contactez notre permanence.",
    faqs: [
      {
        question: "Que faire si ma pompe de relevage ne démarre plus à Wépion ?",
        answer: "Vérifiez que le disjoncteur différentiel n'a pas sauté. Ne tirez plus d'eau et appelez-nous : un blocage par des lingettes ou un flotteur défectueux peut être résolu sur place."
      },
      {
        question: "Comment éviter que les égouts ne refoulent dans ma cave à Wépion ?",
        answer: "La pose d'un clapet anti-retour aux normes NBN EN 13564 sur la canalisation d'évacuation empêche les eaux usées de remonter lors des hausses de niveau du collecteur public."
      },
      {
        question: "Intervenez-vous tout au long de la Chaussée de Dinant ?",
        answer: "Oui, nous desservons l'ensemble de Wépion depuis La Pairelle jusqu'aux limites de Profondeville."
      }
    ],
    nearbyCommunes: [
      { name: "Jambes", slug: "jambes" },
      { name: "Malonne", slug: "malonne" }
    ]
  },
  flawinne: {
    slug: "flawinne",
    name: "Flawinne",
    postalCode: "5020",
    metaTitle: "Plombier Flawinne (5020) 24/7 | Dépannage Sanitaire & Débouchage",
    metaDescription: "Urgence plomberie à Flawinne (5020). Dépannage fuite d'eau, débouchage WC, remplacement robinetterie et chauffe-eau. Intervention rapide avec devis préalable.",
    h1: "Plombier à Flawinne (5020) : Intervention Rapide et Chauffage",
    lead: "Située à l'ouest de Namur entre la Sambre et le plateau hesbignon, Flawinne rassemble un habitat villageois et de récents quartiers familiaux. Nous garantissons un service de proximité transparent.",
    neighbourhoods: ["Flawinne Centre", "Caserne de Flawinne", "Quartier des Prés", "Haut-Bois"],
    accessRoutes: ["N90 (Route de la Basse-Sambre)", "Liaison directe vers Salzinnes"],
    housingAndPlumbingContext: "Maisons unifamiliales mitoyennes et lotissements récents. Les installations nécessitent régulièrement des mises en conformité de raccordements à l'égouttage et le remplacement de chauffe-eaux vieillissants.",
    frequentInterventions: [
      "Débouchage de canalisations d'eaux usées et éviers",
      "Remplacement de boilers électriques entartrés",
      "Réparation de robinetteries de salle de bain et de cuisine",
      "Contrôle de sécurité des installations de gaz domestique"
    ],
    waterContext: "Eau calcaire (28 °f). Les résistances stéatites ou blindées de chauffe-eau accumulent des blocs de calcaire réduisant le volume d'eau chaude disponible.",
    emergencyGuidance: "Le compteur d'eau se trouve la plupart du temps dans la cave ou dans un coffret technique d'entrée. Fermez la vanne en tournant d'un quart de tour ou à fond dans le sens horaire.",
    faqs: [
      {
        question: "Mon chauffe-eau ne produit plus d'eau chaude à Flawinne, pouvez-vous intervenir ?",
        answer: "Oui, nous vérifions l'alimentation électrique, le thermostat de sécurité, la résistance et le groupe de sécurité pour réparer ou remplacer l'appareil sans délai."
      },
      {
        question: "Proposez-vous le curage des canalisations à Flawinne ?",
        answer: "Oui, notre matériel hydrocureur haute pression décolle le tartre, les graisses et les résidus qui réduisent le diamètre utile de vos tuyaux d'évacuation."
      },
      {
        question: "Vos devis sont-ils gratuits à Flawinne ?",
        answer: "Nous établissons systématiquement un devis transparent et gratuit avant l'exécution de tout travail programmé."
      }
    ],
    nearbyCommunes: [
      { name: "Salzinnes", slug: "salzinnes" },
      { name: "Belgrade", slug: "belgrade" },
      { name: "Malonne", slug: "malonne" }
    ]
  },
  belgrade: {
    slug: "belgrade",
    name: "Belgrade",
    postalCode: "5001",
    metaTitle: "Plombier Belgrade (5001) 24/7 | Dépannage Chaudière & Débouchage",
    metaDescription: "Service de plomberie d'urgence à Belgrade (5001). Réparation fuite d'eau, dépannage chaudière, WC bouché. Artisans qualifiés et tarifs transparents.",
    h1: "Plombier à Belgrade (5001) : Dépannage Sanitaire et Chauffage",
    lead: "Bordée par la Route de Gembloux et connectée directement au centre namurois, Belgrade accueille une zone résidentielle dense et active. Nous intervenons rapidement pour tout problème de plomberie.",
    neighbourhoods: ["Route de Gembloux", "Belgrade-Village", "Quartier Reine Astrid", "Chemin des Vignobles"],
    accessRoutes: ["N4 (Route de Gembloux)", "N904", "Proximité N4 et rocade nord"],
    housingAndPlumbingContext: "Composé de maisons mitoyennes d'après-guerre et de villas individuelles. Les installations de chauffage central au gaz et les sanitaires y nécessitent un suivi attentif de la pression et de l'étanchéité.",
    frequentInterventions: [
      "Dépannage de chaudières murales gaz (perte de pression, brûleur)",
      "Débouchage de canalisations d'égout et chambres de visite",
      "Remplacement de mécanismes de WC et chasses d'eau fuyardes",
      "Détection de fuites d'eau après compteur"
    ],
    waterContext: "Dureté de l'eau calcaire (28 à 31 °f). Usure prématurée des joints élastomères et des cartouches céramiques de robinets.",
    emergencyGuidance: "Si vous constatez que votre compteur tourne alors que tous les robinets sont fermés, une fuite invisible existe. Isolez les WC, puis fermez l'arrivée principale avant de nous appeler.",
    faqs: [
      {
        question: "Ma chasse d'eau coule en continu à Belgrade, est-ce urgent ?",
        answer: "Une chasse d'eau qui coule peut gaspiller plusieurs centaines de litres par jour et doubler votre facture d'eau. Nous remplaçons le joint ou le flotteur rapidement pour stopper la perte."
      },
      {
        question: "Intervenez-vous pour un débouchage de WC le week-end à Belgrade ?",
        answer: "Oui, notre permanence 24/7 débouche vos toilettes et canalisations tous les jours de la semaine sans délai."
      },
      {
        question: "Effectuez-vous le contrôle périodique des chaudières à Belgrade ?",
        answer: "Oui, nos techniciens agréés réalisent l'entretien obligatoire en Wallonie avec attestation de contrôle de combustion conforme."
      }
    ],
    nearbyCommunes: [
      { name: "Saint-Servais", slug: "saint-servais" },
      { name: "Flawinne", slug: "flawinne" }
    ]
  },
  vedrin: {
    slug: "vedrin",
    name: "Vedrin",
    postalCode: "5020",
    metaTitle: "Plombier Vedrin (5020) 24/7 | Dépannage Chauffage & Sanitaire",
    metaDescription: "Plombier chauffagiste à Vedrin (5020). Dépannage fuites, débouchage haute pression, installation adoucisseur d'eau et entretien chaudière. Intervention 24/7.",
    h1: "Plombier à Vedrin (5020) : Spécialiste Plomberie et Chauffage",
    lead: "Au nord de Namur, Vedrin concilie charme campagnard et lotissements modernes à proximité de l'échangeur de Daussoulx (E411/E42). Nous assurons un dépannage ultra-réactif.",
    neighbourhoods: ["Vedrin Centre", "Quartier des Comognes", "Frizet", "Proximité Daussoulx"],
    accessRoutes: ["N954 (Chaussée de Louvain / Vedrin)", "Échangeur E411/E42 Daussoulx"],
    housingAndPlumbingContext: "Nombreuses maisons 4 façades, fermettes rénovées et constructions contemporaines. Les installations disposent fréquemment de fosses d'assainissement individuel ou de collecteurs longs nécessitant un curage régulier.",
    frequentInterventions: [
      "Curage préventif et débouchage de longues canalisations d'évacuation",
      "Installation et révision complète d'adoucisseurs d'eau à sel",
      "Maintenance de chaudières mazout et gaz condensation",
      "Remplacement de groupes hydrophores pour eau de pluie"
    ],
    waterContext: "Eau calcaire de la nappe hesbignonne (31 °f). Risque élevé d'entartrage des tuyauteries et des serpentins de chauffe-eau.",
    emergencyGuidance: "Vanne générale habituellement en buanderie ou garage. Si vous possédez un groupe hydrophore de récupération d'eau de pluie, pensez à basculer la vanne d'inversion en cas de disjonction de la pompe.",
    faqs: [
      {
        question: "Pouvez-vous réparer un groupe hydrophore d'eau de pluie à Vedrin ?",
        answer: "Oui, nous vérifions la membrane du ballon à vessie, le pressostat et le clapet anti-retour pour rétablir la pression de vos chasses et robinets de jardin."
      },
      {
        question: "Installez-vous des adoucisseurs d'eau à Vedrin ?",
        answer: "Oui, nous installons des adoucisseurs volumétriques adaptés au nombre d'occupants pour protéger intégralement votre plomberie du calcaire hesbignon."
      },
      {
        question: "Quel est le temps d'arrivée moyen à Vedrin ?",
        answer: "Grâce à notre accès aisé depuis les grands axes namurois, nous rejoignons Vedrin rapidement pour toute urgence plomberie."
      }
    ],
    nearbyCommunes: [
      { name: "Champion", slug: "champion" },
      { name: "Bouge", slug: "bouge" }
    ]
  },
  malonne: {
    slug: "malonne",
    name: "Malonne",
    postalCode: "5020",
    metaTitle: "Plombier Malonne (5020) 24/7 | Dépannage Plomberie & Chauffage",
    metaDescription: "Artisan plombier à Malonne (5020). Débouchage canalisations, détection de fuite, dépannage chaudière et chauffe-eau. Dépannage d'urgence 24h/24 et 7j/7.",
    h1: "Plombier à Malonne (5020) : Dépannage Sanitaire et Chauffage",
    lead: "Vallonnée et verdoyante, Malonne s'étend du Fond de Malonne jusqu'aux coteaux du Piroy. Nous nous déplaçons avec des camionnettes outillées pour tout dépannage plomberie et chauffage.",
    neighbourhoods: ["Fond de Malonne", "Le Piroy", "Reumet", "Saint-Berthuin", "Bauce"],
    accessRoutes: ["N954", "Route de la Navinne", "Accès via la Sambre (N90)"],
    housingAndPlumbingContext: "Habitat mixte alternant maisons anciennes en pierre du pays et villas isolées. Les dénivelés importants imposent des réseaux sanitaires avec réducteurs de pression en bas et surpresseurs ou circulateurs adaptés en hauteur.",
    frequentInterventions: [
      "Réparation de fuites sur raccords en cuivre et canalisations enterrées",
      "Débouchage de fosses et tuyauteries de drainage par hydrocurage",
      "Entretien et réglage de chaudières mazout et gaz",
      "Installation de robinets extérieurs antigel pour jardins et dépendances"
    ],
    waterContext: "Eau calcaire (29 °f). Présence fréquente d'eau de source ou de puits en parallèle de l'eau de ville dans les anciennes propriétés, nécessitant un clapet anti-pollution (disconnecteur) strict.",
    emergencyGuidance: "Dans les maisons anciennes de Malonne, vérifiez si vous disposez d'un robinet d'arrêt en sous-sol ou d'une trappe extérieure en limite de propriété.",
    faqs: [
      {
        question: "Mes tuyaux risquent-ils de geler en hiver à Malonne ?",
        answer: "Dans les maisons anciennes ou isolées sur les hauteurs de Malonne, les canalisations extérieures ou en combles doivent être calorifugées. Nous installons des manchons isolants et des robinets de purge antigel."
      },
      {
        question: "Débouchez-vous les canalisations extérieures à Malonne ?",
        answer: "Oui, notre système hydrocureur propulse un jet d'eau jusqu'à 200 bars pour désintégrer les racines, boues et amas qui bouchent vos tuyaux extérieurs."
      },
      {
        question: "Réalisez-vous l'entretien de chaudières au mazout à Malonne ?",
        answer: "Oui, nos techniciens qualifiés nettoient les carneaux, changent le gicleur, règlent la flamme et délivrent l'attestation de contrôle périodique annuel."
      }
    ],
    nearbyCommunes: [
      { name: "Wépion", slug: "wepion" },
      { name: "Flawinne", slug: "flawinne" }
    ]
  },
  champion: {
    slug: "champion",
    name: "Champion",
    postalCode: "5020",
    metaTitle: "Plombier Champion (5020) 24/7 | Dépannage Fuite & Débouchage",
    metaDescription: "SOS Plombier Champion (5020). Dépannage rapide le long de la Chaussée de Louvain. Débouchage WC, réparation de fuites, dépannage chauffe-eau. Devis clair.",
    h1: "Plombier à Champion (5020) : Dépannage Plomberie 24/7",
    lead: "Bordant la Chaussée de Louvain au nord de Namur, Champion combine centres d'enseignement, commerces et quartiers calmes. Notre service d'urgence répond à toute défaillance sanitaire et de chauffage.",
    neighbourhoods: ["Chaussée de Louvain (N80)", "Quartier Sainte-Chrétienne", "Champion Village", "Fond de Champion"],
    accessRoutes: ["N80 (Chaussée de Louvain)", "Accès direct autoroute E411 (Sortie 13 Champion)"],
    housingAndPlumbingContext: "Comporte des ensembles scolaires, des immeubles résidentiels et des maisons individuelles. Les sollicitations portent majoritairement sur les urgences sanitaires (fuites, WC bouchés) et la modernisation de robinetterie.",
    frequentInterventions: [
      "Débouchage express de toilettes et colonnes sanitaires",
      "Remplacement de mécanismes de chasse d'eau et robinets flotteurs",
      "Recherche non destructive de fuites d'eau sous carrelage",
      "Entretien périodique et détartrage de ballons d'eau chaude"
    ],
    waterContext: "Eau calcaire (30 °f). Nécessité d'un détartrage régulier des chauffe-eaux et de la pose de filtres anticalcaire.",
    emergencyGuidance: "Repérez le compteur dans le garage ou le sous-sol. En cas d'inondation, fermez la vanne principale et coupez l'électricité de la pièce touchée.",
    faqs: [
      {
        question: "En combien de temps intervenez-vous à la sortie d'autoroute de Champion ?",
        answer: "Notre proximité de la Chaussée de Louvain et de la sortie 13 nous permet d'intervenir promptement en cas d'urgence déclarée."
      },
      {
        question: "Réparez-vous les fuites d'eau invisibles à Champion ?",
        answer: "Oui, nous utilisons des caméras d'inspection endoscopique et la détection acoustique pour localiser avec précision la fuite sans démolition inutile."
      },
      {
        question: "Installez-vous des mitigeurs thermostatiques à Champion ?",
        answer: "Oui, nous remplaçons les anciens mélangeurs par des mitigeurs modernes avec butée de sécurité à 38°C pour un confort optimal."
      }
    ],
    nearbyCommunes: [
      { name: "Bouge", slug: "bouge" },
      { name: "Vedrin", slug: "vedrin" }
    ]
  }
};
