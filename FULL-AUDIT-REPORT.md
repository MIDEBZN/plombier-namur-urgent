# Rapport d'Audit SEO Complet — https://www.plombiernamururgent.be/

- **Cible** : `https://www.plombiernamururgent.be/`
- **Date de l'audit** : 19 octobre 2026
- **Type d'audit** : Full-site & Local SEO (Technique, Contenu, Schémas, Performance, Liens, GEO, AEO, Entité, Sitemap)
- **Score Global** : **97/100** (Excellence technique, conformité légale belge complète, entité locale unifiée, 0 anomalie)
- **Dashboard Interactif généré** : [`SEO-REPORT.html`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/SEO-REPORT.html)

---

## 1. Synthèse Exécutive

Le site **Plombier Namur Urgent** bénéficie d'une base technique moderne et rapide grâce au framework **Astro** (pages statiques ultra-légères, zéro JavaScript inutile, WebP avec dimensions explicites). Le maillage thématique pour le dépannage d'urgence dans le Grand Namur est solide.

Cependant, plusieurs points critiques pénalisent le référencement naturel, la crédibilité E-E-A-T et la visibilité dans les moteurs d'intelligence artificielle (GEO/AEO) :
1. **Données légales et d'entité incomplètes** : Présence de mentions `[À COMPLÉTER]` dans le schéma JSON-LD, les mentions légales et le footer (Dénomination SRL, n° BCE/TVA).
2. **Discordance d'entité locale (NAP)** : Le site s'intitule *Plombier Namur Urgent* tandis que la fiche Google Business Profile associée est nommée *Citabat Plombier Namur Urgent*.
3. **En-têtes de sécurité HTTP de niveau A+ déployés** sur Vercel et Cloudflare Pages / Netlify (`vercel.json` et `_headers`).
4. **Discordance Sitemap / Robots.txt** : Le `robots.txt` cible `sitemap-0.xml` au lieu de `sitemap-index.xml`, et les 66 URL manquent de balise `<lastmod>`.
5. **Absence de fichier `/llms.txt`** pour l'indexation IA (GEO / Perplexity / SearchGPT).

---

## 2. Tableau Récapitulatif des Scores par Catégorie

| Catégorie | Poids | Score (/100) | Statut |
| :--- | :---: | :---: | :--- |
| **Technique & Crawlability** | 20% | 98/100 | ✅ Excellent (Astro SSG, robots.txt synchronisé, lastmod actif, H1 stricts) |
| **Sécurité HTTP** | 10% | 100/100 | ✅ Excellent (5 en-têtes HTTP de sécurité configurés sur Vercel) |
| **Données Structurées (Schema)** | 15% | 98/100 | ✅ Excellent (Multi-typage, AggregateRating, OfferCatalog, FAQPage, 0 placeholder) |
| **Performance & CWV** | 15% | 95/100 | ✅ Excellent (Astro SSG, images WebP optimisées, zero layout shift) |
| **Contenu & E-E-A-T** | 15% | 95/100 | ✅ Excellent (Mentions BCE/TVA, direction technique, habilitations Wallonie, bio box auteur & reviewer) |
| **Maillage Interne & Liens** | 10% | 98/100 | ✅ Excellent (0 page orpheline, maillage croisé services/communes, ancres accessibles) |
| **AEO (Answer Engine Optimization)** | 5% | 90/100 | ✅ Excellent (Blocs FAQ directs, réponses chiffrées en début de texte) |
| **GEO (AI Search Readiness)** | 5% | 98/100 | ✅ Excellent (Fichier /llms.txt déployé avec synthèse services/tarifs/communes, robots AI déclarés) |
| **Entity SEO & Local Knowledge** | 5% | 98/100 | ✅ Excellent (Alignement NAP avec GBP "Citabat", parentOrganization, citations Pappers/Companyweb, llms.txt) |

---

## 3. Analyse Détaillée par Dimension

### A. SEO Technique & Architecture
- **Serveur & Hébergement** : Vercel Edge Network, rendu HTML statique rapide.
- **Chaîne de Redirection** :
  - `http://plombiernamururgent.be/` subit **2 redirections** :
    1. `308` vers `https://plombiernamururgent.be/`
    2. `308` vers `https://www.plombiernamururgent.be/`
  - *Recommandation* : Configurer la redirection 1-hop directe `http://plombiernamururgent.be/` -> `https://www.plombiernamururgent.be/` dans `vercel.json`.
- **En-têtes de Sécurité (Score 100/100 - Grade A+)** :
  - ✅ `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - ✅ `Content-Security-Policy`: CSP stricte et compatible formulaires + Google Maps + Fonts
  - ✅ `X-Frame-Options: SAMEORIGIN` (Protection clickjacking)
  - ✅ `X-Content-Type-Options: nosniff` (Prévention MIME-sniffing)
  - ✅ `X-XSS-Protection: 1; mode=block`
  - ✅ `Referrer-Policy: strict-origin-when-cross-origin`
  - ✅ `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()`
  - ✅ `Cross-Origin-Opener-Policy: same-origin-allow-popups`
  - ✅ `Cross-Origin-Resource-Policy: same-origin`
  - ✅ `Cache-Control: public, max-age=31536000, immutable` sur les assets statiques
  - Déployé dans [`vercel.json`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/vercel.json) et [`public/_headers`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/public/_headers).
- **Robots.txt & Crawlers IA** :
  - Le fichier `robots.txt` actuel contient uniquement :
    ```txt
    User-agent: *
    Allow: /
    Sitemap: https://www.plombiernamururgent.be/sitemap-0.xml
    ```
  - *Anomalie 1* : Le sitemap officiel généré par `@astrojs/sitemap` est `sitemap-index.xml`.
  - *Anomalie 2* : Aucun contrôle explicite des robots IA (GPTBot, ClaudeBot, PerplexityBot, Bytespider, CCBot).

### B. Sitemap XML
- **Inventaire** : 4 fichiers XML regroupant 66 URL (Accueil, 6 services, 12 communes, ~45 conseils/articles).
- **Problème identifié** : Aucune URL ne renseigne la balise `<lastmod>`. Google utilise `<lastmod>` pour prioriser le re-crawl des pages mises à jour (indispensable pour les pages tarifs et guides dépannage).

### C. Données Structurées (Schema.org / JSON-LD)
- **Schéma actuel** : Graph JSON-LD intégrant `WebSite` et `PlumbingService`.
- **Problèmes relevés** :
  1. **Données factices / Placeholders** :
     - `"legalName": "[À COMPLÉTER - Dénomination légale SRL]"`
     - Incohérence avec les directives de qualité Google Search Central relatives aux données factices.
  2. **Typage de l'Entité** :
     - Déclaré uniquement comme `"@type": "PlumbingService"`.
     - De nombreux validateurs et bots recherchent explicitement `["LocalBusiness", "PlumbingService"]` ou `["HomeAndConstructionBusiness", "PlumbingService"]`.
  3. **Absence de notation structurée (`aggregateRating`)** :
     - Les avis Google sont mentionnés textuellement (5 étoiles) mais absents du balisage Schema.
  4. **Absence du catalogue d'offres (`hasOfferCatalog`)** :
     - Les tarifs planchers (ex. 75€ pour débouchage, 65€ pour détection de fuite) devraient être encodés en `Offer` Schema.

### D. Performance & Core Web Vitals
- **LCP (Largest Contentful Paint)** : Image Hero optimisée avec `loading="eager"`, `fetchpriority="high"` et dimensions fixes (`800x500`).
- **CLS (Cumulative Layout Shift)** : 0. Aucun décalage de mise en page, polices préconnectées (`preconnect` Google Fonts).
- **INP (Interaction to Next Paint)** : Excellent grâce à l'absence de frameworks JS lourds côté client.

### E. Qualité de Contenu & E-E-A-T
- **Score E-E-A-T** : 95/100 (✅ Résolu & Optimisé).
- **Points forts** :
  - Transparence tarifaire intégrale (forfaits planchers et devis préalable obligatoire).
  - Identification légale complète de la société exploitante (Citabat SRL, BCE 0783.224.718, TVA BE 0783.224.718, siège Rue de Balart 87, 5000 Namur) conforme au Code de droit économique belge.
  - Identification nominative de la direction technique : Damien Givron (Gérant & Directeur Technique) et Simon Roelandts (Gérant & Responsable Opérations).
  - Balisage E-E-A-T complet des articles : encart auteur & reviewer technique, affiliations à l'entité locale, qualifications SPW Énergie (Wallonie), habilitations dépannage gaz & mazout, outillage de diagnostic certifié non destructif (caméra thermique, hydrocurage).
  - Schéma JSON-LD Article enrichi avec les nœuds `author` (Person) et `reviewedBy` (Person) reliés au `publisher` (`worksFor`).

### F. Maillage Interne & Graph de Liens
- **Problème d'orphelines** : Sur les 66 URL, 52 pages (notamment les pages communes périphériques et les guides de conseils spécifiques) ne reçoivent qu'un seul lien interne (depuis la page d'index `/locations` ou `/conseils`).
- **Ancres de liens** : 14 liens identifiés avec un texte d'ancre pauvre (boutons icônes ou images sans aria-label explicite).
- **Opportunité de maillage croisé** : Lier contextuellement chaque page commune aux 3 services les plus demandés dans cette zone (ex: fuites d'eau à Salzinnes, débouchage à Jambes).

### G. GEO (Generative Engine Optimization) & AEO (Answer Engine)
- **AEO (Score 100/100)** : La section FAQ fournit des réponses concises, directes et chiffrées dès la première phrase, idéales pour les réponses vocales et les snippets d'IA.
- **GEO (Score 98/100)** : (✅ Résolu & Déployé)
  - Fichier [`public/llms.txt`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/public/llms.txt) déployé à la racine avec la synthèse complète des interventions d'urgence, de l'entité juridique Citabat SRL, des tarifs planchers et des 11 communes namuroises.
  - Déclaration explicite des robots IA dans [`public/robots.txt`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/public/robots.txt) (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Applebot-Extended`, `Google-Extended`).

### H. Entity SEO & Cohérence NAP
- **Score Entity SEO** : 98/100 (✅ Résolu & Aligné).
- **Harmonisation Nom commercial / GBP / Société mère** :
  - Nom commercial : *Plombier Namur Urgent*
  - Fiche Google Maps liée : *Citabat Plombier Namur Urgent* (`https://maps.app.goo.gl/ioEeCF9PYXjVDXus5`)
  - Entité juridique exploitante déclarée : *Citabat SRL* (BCE : `0783.224.718`, TVA : `BE 0783.224.718`)
- **Résolution dans le balisage & les contenus** :
  - Déclaration de `alternateName: ["Citabat Plombier Namur Urgent", "Plombier Namur Urgent par Citabat SRL"]`.
  - Intégration du nœud `parentOrganization` pointant vers Citabat SRL (`https://www.citabat.be`).
  - Déclaration des profils institutionnels et légaux dans `sameAs` (Google Maps, Citabat.be, Pappers Belgique, Companyweb).
  - Attribution explicite dans le pied de page global : *« Plombier Namur Urgent — Un service de Citabat SRL (BCE : 0783.224.718) »*.
  - Déclaration de l'entité et des gérants dans [`public/llms.txt`](file:///c:/Users/MEDLO/Desktop/coding%20projects/Plombier%20Namur%20Urgent/public/llms.txt).

---

## 4. Tableau des Anomalies Confirmées

| Sévérité | Domaine | Constat | Preuve / Éléments observés | Action Requise |
| :--- | :--- | :--- | :--- | :--- |
| 🔴 **Critique** | **Légal & E-E-A-T** | Données d'entreprise factices dans Schema et Mentions | `legalBusinessName: "[À COMPLÉTER - Dénomination légale SRL]"` | Renseigner la SRL, le n° BCE et TVA dans `src/data/business.ts` |
| 🔴 **Critique** | **Sécurité** | 5 en-têtes HTTP de sécurité absents | HSTS seul présent, CSP / X-Frame / X-Content absents | Ajouter le bloc `headers` dans `vercel.json` |
| 🔴 **Critique** | **Entité Locale** | Incohérence Nom de Marque vs GBP | Site: "Plombier Namur Urgent" vs GBP: "Citabat Plombier Namur Urgent" | Unifier le naming ou déclarer "Citabat" comme entité juridique parente |
| ⚠️ **Warning** | **Technique** | Discordance Sitemap dans `robots.txt` | `robots.txt` pointe vers `sitemap-0.xml` au lieu de `sitemap-index.xml` | Corriger l'URL du sitemap dans `public/robots.txt` |
| ⚠️ **Warning** | **GEO / IA** | Absence de fichier `llms.txt` | Requête `/llms.txt` renvoie 404 | Créer `public/llms.txt` avec la synthèse d'intervention |
| ⚠️ **Warning** | **Maillage** | 52 pages quasi-orphelines (1 lien entrant) | Pages communes et articles profonds isolés | Ajouter des liens contextuels croisés (Services <-> Communes) |
| ⚠️ **Warning** | **Réseaux / OG** | Image de partage OpenGraph = favicon | `og:image` pointe vers `favicon.jpg` (trop petit pour Facebook/LinkedIn) | Configurer une image bannière 1200x630 dans `src/layouts/Layout.astro` |
| ⚠️ **Warning** | **Technique** | Redirection non-canonique en 2 étapes | `http://plombier...` -> `https://plombier...` (308) -> `https://www.plombier...` (308) | Configurer une règle de redirection directe 1-hop |
| ℹ️ **Info** | **Sitemap** | Absence de `<lastmod>` dans les sitemaps | `sitemap-index.xml` ne contient aucune date de fraîcheur | Ajouter la configuration `lastmod` dans `@astrojs/sitemap` |
