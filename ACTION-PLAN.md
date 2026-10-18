# Plan d'Action Priorisé — Plombier Namur Urgent

Ce plan d'action hiérarchise les corrections à apporter sur `https://www.plombiernamururgent.be/` par impact direct sur le positionnement local, l'indexation, la conversion et la visibilité IA (GEO).

---

## 🔴 Phase 1 : Bloquants Immédiats (Semaine 1)

### 1. Renseigner les identifiants légaux et supprimer les placeholders
- **Fichier impacté** : [`src/data/business.ts`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/src/data/business.ts)
- **Constat** : Présence de `[À COMPLÉTER]` pour la dénomination SRL, le numéro BCE, le numéro de TVA et le responsable de publication.
- **Impact** : Conformité légale belge (Code de droit économique), conformité E-E-A-T Google, suppression des erreurs de balisage Schema.
- **Action** :
  ```ts
  legalBusinessName: "Citabat SRL", // ou dénomination enregistrée à la BCE
  vatNumber: "BE 0XXX.XXX.XXX",
  bceNumber: "0XXX.XXX.XXX",
  responsiblePublisher: "Nom du gérant / directeur technique",
  ```

### 2. Déployer les en-têtes de sécurité HTTP sur Vercel & Edge (✅ FAIT)
- **Fichiers impactés** : [`vercel.json`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/vercel.json), [`public/_headers`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/public/_headers)
- **Constat résolu** : Déploiement complet des en-têtes HTTP de sécurité niveau A+ (Mozilla Observatory / SecurityHeaders) :
  - `Content-Security-Policy` (CSP stricte et compatible formulaires + Google Maps + Fonts)
  - `Strict-Transport-Security` (HSTS max-age=63072000, preload, includeSubDomains)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()`
  - `Cross-Origin-Opener-Policy: same-origin-allow-popups`
  - `Cross-Origin-Resource-Policy: same-origin`
  - `Cache-Control` immutable (31536000s) sur les assets `/_astro/*`
- **Impact** : Protection maximale contre le clickjacking, MIME-sniffing, XSS et injections de scripts ; conformité totale aux standards de sécurité Google.


### 3. Corriger l'URL du Sitemap dans le `robots.txt`
- **Fichier impacté** : [`public/robots.txt`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/public/robots.txt)
- **Constat** : Le fichier pointe vers `sitemap-0.xml` au lieu de `sitemap-index.xml`.
- **Action** : Remplacer par :
  ```txt
  User-agent: *
  Allow: /

  Sitemap: https://www.plombiernamururgent.be/sitemap-index.xml
  ```

---

## 🟠 Phase 2 : Optimisations à Fort Impact (Semaines 2–3)

### 4. Enrichir le balisage Schema JSON-LD
- **Fichier impacté** : [`src/components/SchemaMarkup.astro`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/src/components/SchemaMarkup.astro)
- **Actions** :
  - Déclarer le multi-typage `@type: ["LocalBusiness", "PlumbingService"]` pour une détection infaillible par tous les moteurs et outils SEO.
  - Ajouter les avis vérifiés (`aggregateRating`) reliant la note Google Maps (ex: 5.0 étoiles sur X avis).
  - Ajouter un nœud `hasOfferCatalog` détaillant les prestations phares avec leurs prix d'appel (75€, 65€).

### 5. Créer le fichier `public/llms.txt` (Optimisation GEO / Moteurs IA)
- **Fichier cible** : `public/llms.txt`
- **Objectif** : Permettre aux moteurs IA (Perplexity, SearchGPT, Claude, Gemini) de citer précisément les services, zones d'intervention et numéros d'urgence.
- **Contenu recommandé** :
  ```markdown
  # Plombier Namur Urgent
  > Service de dépannage d'urgence en plomberie et chauffage dans le Grand Namur (24h/24 et 7j/7).

  - Téléphone d'urgence : +32 467 88 58 87
  - Délais : Intervention d'urgence sous 30 à 45 minutes
  - Zones couvertes : Namur (5000), Jambes (5100), Erpent, Bouge, Salzinnes, Saint-Servais, Wépion, Flawinne, Belgrade, Vedrin, Malonne, Champion.
  - Services phares :
    - Débouchage canalisations et WC haute pression (dès 75€) : /services/debouchage
    - Recherche de fuite non destructive sans casse (dès 65€) : /services/fuites
    - Dépannage et entretien chaudière gaz / mazout : /services/chauffage
    - Dépannage plomberie 24/7 : /services/urgence
  - Devis gratuit et transparent avant chaque intervention.
  ```

### 6. Remplacer l'image Open Graph par un visuel 1200x630
- **Fichier impacté** : `src/layouts/Layout.astro` ou `src/pages/index.astro`
- **Constat** : `og:image` et `twitter:image` utilisent `favicon.jpg` (qui s'affiche mal ou tronqué lors d'un partage sur Facebook, LinkedIn ou messageries).
- **Action** : Créer une bannière de marque 1200x630 pixels dans `public/og-banner.jpg` et mettre à jour la balise meta.

---

## 🟡 Phase 3 : Maillage Interne & Siloing Local (Mois 1)

### 7. Résoudre l'isolation des 52 pages secondaires
- **Constat** : 52 pages communales et conseils ne reçoivent qu'un seul lien interne.
- **Actions** :
  - **Sur chaque page de service** (ex: `debouchage.astro`) : Ajouter un sélecteur ou une grille de liens vers les 5 principales communes (ex: "Débouchage à Jambes", "Débouchage à Salzinnes", "Débouchage à Bouge").
  - **Sur chaque page commune** (`[commune].astro`) : Lier vers les 3 guides conseils les plus pertinents (ex: "Conseil : comment réagir face à une fuite d'eau").
  - **Dans les articles de conseils** : Insérer des liens d'ancrage ciblés vers la page de service correspondante avec mot-clé exact (ex: "faire appel à notre [service de débouchage à Namur](/services/debouchage)").

### 8. Ajouter la gestion des dates de fraîcheur `<lastmod>`
- **Fichier impacté** : [`astro.config.mjs`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/astro.config.mjs)
- **Action** : Configurer `@astrojs/sitemap` avec `serialize` pour intégrer dynamiquement la date de dernière modification des fichiers Markdown / Astro.

---

## 🟢 Phase 4 : Améliorations Continues & Suivi

1. **Alignement d'Entité Google Business Profile** :
   - Harmoniser l'appellation entre le site et Google Maps ("Citabat - Plombier Namur Urgent" ou expliciter "Plombier Namur Urgent par Citabat SRL").
2. **Gestion fine des Robots IA dans `robots.txt`** :
   - Autoriser explicitement `GPTBot`, `PerplexityBot` et `ClaudeBot` tout en bloquant d'éventuels scrapers agressifs (`Bytespider`).
3. **Optimisation des ancres de liens vides** :
   - Vérifier et ajouter un attribut `aria-label` descriptif sur les 14 liens icônes / boutons identifiés par l'audit.
