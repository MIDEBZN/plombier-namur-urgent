import fs from 'fs';
import path from 'path';

const dir = 'content/seo-articles';

// 1. Title and Meta corrections for articles 07, 09, 24, 27, 29, 30
function fixFrontmatters() {
  // Art 07
  let art07 = fs.readFileSync(path.join(dir, '07-mon-wc-est-bouche-namur-plombier-ou-societe-debouchage.md'), 'utf8');
  art07 = art07.replace(/meta_description:\s*".*?"/, 'meta_description: "WC bouché à Namur ? Plombier ou déboucheur ? Découvrez qui appeler, les tarifs 2026 et les solutions rapides sans arnaque. Tél : 0467 88 58 87."');
  fs.writeFileSync(path.join(dir, '07-mon-wc-est-bouche-namur-plombier-ou-societe-debouchage.md'), art07);

  // Art 09
  let art09 = fs.readFileSync(path.join(dir, '09-combien-coute-remplacement-boiler-namur.md'), 'utf8');
  art09 = art09.replace(/meta_description:\s*".*?"/, 'meta_description: "Remplacement de boiler à Namur en 2026 : prix fourniture, pose, aides et comparaison électrique vs gaz. Devis rapide. Contactez le 0467 88 58 87."');
  fs.writeFileSync(path.join(dir, '09-combien-coute-remplacement-boiler-namur.md'), art09);

  // Art 24
  let art24 = fs.readFileSync(path.join(dir, '24-quand-faire-inspecter-canalisations-camera-namur-prix.md'), 'utf8');
  art24 = art24.replace(/title:\s*".*?"/, 'title: "Inspection Canalisation Caméra Namur : Prix et Conseils"');
  fs.writeFileSync(path.join(dir, '24-quand-faire-inspecter-canalisations-camera-namur-prix.md'), art24);

  // Art 27
  let art27 = fs.readFileSync(path.join(dir, '27-que-faire-canalisation-gelee-eclatee-namur.md'), 'utf8');
  art27 = art27.replace(/title:\s*".*?"/, 'title: "Canalisation Gelée à Namur : Que Faire et Qui Appeler ?"');
  fs.writeFileSync(path.join(dir, '27-que-faire-canalisation-gelee-eclatee-namur.md'), art27);

  // Art 29
  let art29 = fs.readFileSync(path.join(dir, '29-plombier-ou-chauffagiste-namur-qui-appeler-panne.md'), 'utf8');
  art29 = art29.replace(/title:\s*".*?"/, 'title: "Plombier ou Chauffagiste à Namur : Qui Appeler ?"');
  fs.writeFileSync(path.join(dir, '29-plombier-ou-chauffagiste-namur-qui-appeler-panne.md'), art29);

  // Art 30
  let art30 = fs.readFileSync(path.join(dir, '30-quel-plombier-intervient-jambes-bouge-wepion-erpent-salzinnes.md'), 'utf8');
  art30 = art30.replace(/title:\s*".*?"/, 'title: "Plombier Namur : Dépannage à Jambes, Bouge et Salzinnes"');
  fs.writeFileSync(path.join(dir, '30-quel-plombier-intervient-jambes-bouge-wepion-erpent-salzinnes.md'), art30);
  
  console.log('Frontmatter title and meta updates applied successfully.');
}

// 2. FAQ additions for articles 04, 05, 06, 07, 09, 10, 11, 13, 14, 16, 17, 18, 19, 20
const faqAdditions = {
  '04-qui-appeler-namur-fuite-eau-urgente.md': `
### L'eau coule depuis le plafond du voisin du dessus absent, qui contacter ?
Si vous résidez en copropriété à Namur et que l'occupant supérieur est absent, avertissez immédiatement le syndic d'immeuble et vos voisins de palier pour localiser la vanne de colonne montante. En cas d'inondation majeure menaçant la structure du bâtiment ou les réseaux électriques, la police de Namur peut être sollicitée pour faire ouvrir la porte par un serrurier assermenté.

### Combien de temps met un plombier pour arriver à Namur centre ou Jambes ?
Grâce à notre dispositif d'astreinte locale positionné des deux côtés de la Meuse, nos artisans interviennent en moyenne en **25 à 45 minutes** à Namur centre, Jambes, Salzinnes ou Bouge pour toute fuite d'eau urgente.
`,
  '05-comment-trouver-plombier-fiable-namur-eviter-arnaques.md': `
### Comment vérifier le numéro de TVA ou BCE d'un plombier à Namur ?
Consultez gratuitement le site officiel de la Banque-Carrefour des Entreprises (BCE / KBO). Entrez le numéro de TVA à 10 chiffres (ex: BE 0XXX.XXX.XXX) : vérifiez que l'entreprise est active, domiciliée en Belgique et enregistrée sous le code NACE 43221 (Installation d'eau et de gaz).

### Quel recours si un plombier namurois exige un paiement en liquide exorbitant ?
Refusez tout paiement sans facture légale. Vous avez le droit d'exiger une facture détaillée avant de régler. En cas de menace ou d'extorsion, contactez immédiatement l'Inspection économique du SPF Économie ou déposez plainte auprès de la zone de police de Namur.
`,
  '06-combien-coute-recherche-fuite-invisible-namur.md': `
### Combien de temps dure une recherche de fuite par caméra thermique ?
L'inspection thermique et acoustique dure en moyenne **entre 1 heure et 2 heures** selon la surface du logement et la complexité du réseau encastré. Le technicien cartographie l'intégralité des circuits pour isoler le point d'échappement exact.

### L'injection de gaz traceur présente-t-elle un danger pour les habitants ?
Absolument aucun. Le gaz traceur utilisé est un mélange composé de 95 % d'azote et 5 % d'hydrogène. Il est inodore, incolore, non toxique, ininflammable et certifié de qualité alimentaire. Il ne présente aucun risque pour les humains, les enfants ou les animaux domestiques.
`,
  '07-mon-wc-est-bouche-namur-plombier-ou-societe-debouchage.md': `
### Quels objets ne faut-il jamais jeter dans la cuvette des toilettes ?
Ne jetez jamais de lingettes nettoyantes (même étiquetées biodégradables), rouleaux de papier essuie-tout, serviettes hygiéniques, tampons, cotons-tiges, préservatifs ou litières pour chat. Ces éléments ne se dissolvent pas dans l'eau et s'agglomèrent en un bouchon indestructible.

### Peut-on déboucher un WC suspendu Geberit avec un furet manuel ?
Oui, mais avec d'extrêmes précautions : un furet métallique rigide mal guidé peut rayer l'émail de la cuvette ou percer la manchette d'évacuation souple située dans le bâti-support. Nos artisans utilisent des furets à tête rotative gainée en téflon pour protéger la céramique.
`,
  '09-combien-coute-remplacement-boiler-namur.md': `
### Quelle capacité de boiler choisir pour une famille de 4 personnes à Namur ?
Pour un foyer de 4 personnes équipé d'une douche et d'une baignoire, prévoyez une cuve de **200 à 250 litres** si vous profitez d'un tarif électrique bi-horaire (chauffe nocturne). En tarif continu ou avec un chauffe-eau thermodynamique performant, un ballon de **150 à 200 litres** suffit amplement.

### Faut-il obligatoirement remplacer le groupe de sécurité lors du changement de boiler ?
Oui, c'est une exigence formelle de sécurité et de conformité légale. Le groupe de sécurité 7 bars neuf évite les surpressions lors de la chauffe de l'eau. Les fabricants annulent la garantie de la cuve en cas de conservation d'un vieux groupe de sécurité usagé.
`,
  '10-qui-paie-plombier-namur-locataire-ou-proprietaire.md': `
### Que faire si le propriétaire namurois refuse de faire réparer une fuite urgente ?
Envoyez sans tarder une mise en demeure par courrier recommandé avec accusé de réception fixant un délai précis. En cas de péril imminent (inondation continue), le locataire peut faire exécuter les travaux conservatoires indispensables aux frais du propriétaire après l'avoir dûment informé.

### Qui paie le détartrage annuel de la chaudière ou du chauffe-eau ?
En Région wallonne, l'entretien régulier, le détartrage préventif et le contrôle périodique des appareils de chauffage et de production d'eau chaude sont à la charge exclusive du **locataire occupant**. Seul le remplacement complet d'une cuve percée par usure normale revient au propriétaire.
`,
  '11-assurance-habitation-rembourse-recherche-fuite-plombier-namur.md': `
### Quel est le délai légal pour déclarer un dégât des eaux à son assureur en Belgique ?
En Belgique, vous disposez d'un délai légal de **8 jours ouvrés** à compter de la découverte du sinistre pour adresser votre déclaration écrite à votre compagnie d'assurance ou à votre courtier, accompagnée des premières photos du dommage.

### La facture de réparation du tuyau responsable de la fuite est-elle remboursée ?
L'assurance dégât des eaux prend en charge la recherche de fuite et les réparations des dommages collatéraux (murs, plafonds, parquets, meubles). En revanche, la réparation du tuyau lui-même (soudure, raccord) reste traditionnellement à la charge de l'assuré, sauf option contractuelle spécifique "perte d'eau" souscrite.
`,
  '13-quel-est-tarif-plombier-namur-soir-dimanche-jour-ferie.md': `
### À partir de quelle heure s'applique le tarif de nuit d'un plombier à Namur ?
La tranche horaire de nuit commence généralement à **18h ou 20h** selon les entreprises, avec une première majoration de 50 %. Entre 22h et 06h du matin, la majoration peut atteindre 100 % sur la main-d'œuvre horaire pour mobiliser l'équipe d'astreinte de garde.

### Le devis d'urgence doit-il obligatoirement mentionner les suppléments horaires ?
Oui ! La loi belge sur les pratiques du marché et la protection du consommateur impose une transparence tarifaire stricte. L'artisan doit vous informer préalablement du montant de la majoration de nuit ou de week-end avant d'engager les travaux chez vous.
`,
  '14-comment-obtenir-devis-plombier-namur-sans-frais-caches.md': `
### Le devis d'un plombier est-il gratuit pour une urgence à Namur ?
Une estimation indicative claire vous est communiquée gratuitement par téléphone dès votre appel. Sur place, avant toute réparation, le technicien ausculte la panne et vous présente un devis écrit ferme et définitif sans frais cachés.

### Un devis signé par le client peut-il être revu à la hausse en cours de travaux ?
Non. Un devis signé a la valeur d'un contrat ferme et engage les deux parties. L'artisan ne peut réclamer aucun supplément de prix, sauf si des complications structurelles imprévisibles surviennent, nécessitant impérativement un avenant écrit accepté par le client.
`,
  '16-pourquoi-faible-pression-eau-namur-qui-appeler.md': `
### Comment savoir si la baisse de pression provient de la SWDE ou de chez moi ?
Ouvrez le robinet de purge situé juste après le compteur d'eau en cave. Si la pression y est vigoureuse mais très faible aux étages supérieurs, le problème se situe sur votre réseau privé intérieur (tuyau entartré ou réducteur défectueux). Si le débit est squelettique dès le compteur, contactez la SWDE.

### Quel est le rôle d'un surpresseur d'eau domestique ?
Un groupe surpresseur est une pompe automatique couplée à un réservoir à membrane qui augmente et stabilise la pression d'eau à environ 3 à 3,5 bars dans les étages élevés d'une maison ou dans les zones rurales namuroises où la pression du réseau public est insuffisante.
`,
  '17-comment-detecter-fuite-eau-apres-compteur-namur.md': `
### Que faire si le compteur SWDE tourne alors que la vanne d'entrée de la maison est fermée ?
Cela prouve irréfutablement que la fuite d'eau se situe sur le tronçon de tuyau extérieur enterré reliant le compteur de voirie au mur de façade de votre habitation. Une détection électro-acoustique par un plombier spécialisé est nécessaire pour repérer la fuite sous la terre.

### La SWDE accorde-t-elle un dégrèvement en cas de fuite cachée ?
Oui. La SWDE applique une procédure de modération de facture pour les volumes d'eau anormaux causés par une fuite invisible sur canalisation enterrée, à condition de fournir une facture de réparation acquittée établie par un artisan plombier agréé.
`,
  '18-eau-calcaire-namur-adoucisseur-combien-ca-coute.md': `
### À quelle dureté idéale faut-il régler son adoucisseur d'eau à Namur ?
Les experts recommandent un réglage de consigne entre **8 °fH et 12 °fH (degrés français)**. Cela permet de stopper totalement l'entartrage des boilers et robinets tout en conservant une eau équilibrée et non agressive pour les tuyauteries métalliques.

### L'eau adoucie au sel est-elle bonne pour la santé et potable ?
Oui ! L'adoucisseur sur résine échangeuse d'ions échange simplement les ions calcium contre des ions sodium dans des proportions minimes sans altérer la potabilité de l'eau. Elle reste parfaitement conforme à toutes les normes sanitaires européennes de l'eau de boisson.
`,
  '19-combien-coute-remplacement-wc-namur.md': `
### Peut-on installer un WC suspendu sur une cloison en plaques de plâtre ?
Oui, grâce à l'utilisation d'un **bâti-support autoportant renforcé** ancré directement dans la dalle de sol en béton au moyen de goujons métalliques d'ancrage lourds. La cloison en plâtre ne sert alors que de simple habillage décoratif sans porter le poids de l'usager.

### Quelle charge mécanique un WC suspendu Geberit peut-il supporter ?
Les bâtis-supports certifiés des fabricants leaders comme Geberit ou Grohe sont testés selon la norme européenne NF EN 997 pour supporter une charge statique continue d'au moins **400 kg** sans aucune déformation.
`,
  '20-combien-coute-installation-remplacement-robinet-namur.md': `
### Pourquoi installer des robinets d'arrêt quart de tour sous l'évier ou le lavabo ?
La pose de petits robinets d'arrêt dédiés (robinets Schell) sous chaque sanitaire permet d'isoler un mitigeur fuyard sans avoir à couper l'eau de toute la maison pendant la réparation. C'est un confort absolu au quotidien.

### Comment détartrer efficacement un mousseur de robinet bouché par le calcaire namurois ?
Dévissez simplement l'embout aérateur métallique du bec de robinet avec une petite clé ou une pince protégée par un chiffon. Plongez la grille et le filtre dans un verre de vinaigre blanc chaud pendant 30 minutes : le calcaire se dissout complètement et le jet redevient parfaitement fluide.
`
};

function appendFaqs() {
  for (const [filename, extraFaq] of Object.entries(faqAdditions)) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) {
      console.warn('File not found:', filename);
      continue;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the end of FAQ section, right before the next ## (usually ## Conclusion)
    const conclusionIdx = content.search(/\n## (?:Conclusion|[0-9]+\.\s*Conclusion)/i);
    if (conclusionIdx !== -1) {
      const beforeConclusion = content.slice(0, conclusionIdx);
      const afterConclusion = content.slice(conclusionIdx);
      const updated = beforeConclusion.trim() + '\n' + extraFaq.trim() + '\n\n---\n\n' + afterConclusion.trim() + '\n';
      fs.writeFileSync(filePath, updated);
      console.log('Appended extra FAQs to:', filename);
    } else {
      console.warn('Could not find Conclusion section in:', filename);
    }
  }
}

fixFrontmatters();
appendFaqs();
console.log('Enhancement complete.');
