import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} HTML files in ${distDir}...\n`);

let errors = [];
let warnings = [];
let pagesReport = [];

const canonicalSet = new Set();
const titleSet = new Set();

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf-8');

  // Check H1
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Count = h1Matches.length;
  const h1Text = h1Matches.map(m => m[1].replace(/<[^>]+>/g, '').trim()).join(' | ');

  if (h1Count === 0) {
    errors.push(`[${relPath}] Missing H1 tag!`);
  } else if (h1Count > 1) {
    errors.push(`[${relPath}] Multiple H1 tags found (${h1Count}): ${h1Text}`);
  }

  // Check Title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (!title) {
    errors.push(`[${relPath}] Missing <title> tag!`);
  } else {
    if (titleSet.has(title) && !relPath.includes('404')) {
      warnings.push(`[${relPath}] Duplicate title: "${title}"`);
    }
    titleSet.add(title);
  }

  // Check Meta Description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : '';
  if (!metaDesc && !relPath.includes('404')) {
    errors.push(`[${relPath}] Missing meta description!`);
  }

  // Check Canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';
  if (!canonical) {
    errors.push(`[${relPath}] Missing canonical link!`);
  } else {
    if (!canonical.startsWith('https://www.plombiernamururgent.be/')) {
      errors.push(`[${relPath}] Canonical does not start with https://www.plombiernamururgent.be/: ${canonical}`);
    }
    if (canonical.includes('?')) {
      errors.push(`[${relPath}] Canonical contains query parameter: ${canonical}`);
    }
    if (canonicalSet.has(canonical) && !relPath.includes('404')) {
      errors.push(`[${relPath}] Duplicate canonical URL detected: ${canonical}`);
    }
    canonicalSet.add(canonical);
  }

  // Check JSON-LD
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let jsonLdValid = true;
  let schemaTypes = [];
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed['@type']) schemaTypes.push(parsed['@type']);
      if (parsed['@graph']) {
        for (const item of parsed['@graph']) {
          if (item['@type']) schemaTypes.push(item['@type']);
        }
      }
    } catch (e) {
      errors.push(`[${relPath}] Invalid JSON-LD schema: ${e.message}`);
      jsonLdValid = false;
    }
  }

  // Check internal links
  const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"'#:]*?)["']/gi)];
  for (const lm of linkMatches) {
    let link = lm[1].trim();
    if (!link || link.startsWith('javascript:') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('http')) {
      continue;
    }
    // Clean query/hash
    link = link.split('?')[0].split('#')[0];
    if (link === '') continue;

    // Resolve link against dist
    let target = '';
    if (link.startsWith('/')) {
      target = path.join(distDir, link.slice(1));
    } else {
      target = path.resolve(path.dirname(file), link);
    }

    const possibleHtml = target.endsWith('.html') ? target : path.join(target, 'index.html');
    const directFile = target;

    if (!fs.existsSync(possibleHtml) && !fs.existsSync(directFile)) {
      errors.push(`[${relPath}] Broken internal link: "${lm[1]}" -> looked for ${possibleHtml}`);
    }
  }

  pagesReport.push({
    file: relPath,
    title,
    h1Count,
    h1Text,
    canonical,
    schemaTypes: [...new Set(schemaTypes)].join(', ')
  });
}

// Check robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf-8');
  if (!robots.includes('Sitemap: https://www.plombiernamururgent.be/sitemap-0.xml')) {
    errors.push('robots.txt does not contain Sitemap: https://www.plombiernamururgent.be/sitemap-0.xml');
  }
} else {
  errors.push('robots.txt missing in dist!');
}

// Check sitemap
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
if (!fs.existsSync(sitemap0Path) && !fs.existsSync(sitemapIndexPath)) {
  errors.push('Neither sitemap-0.xml nor sitemap-index.xml found in dist!');
}

console.log('=== AUDIT RESULTS ===');
console.log(`Total Pages Scanned: ${htmlFiles.length}`);
console.log(`Total Errors: ${errors.length}`);
console.log(`Total Warnings: ${warnings.length}`);

if (errors.length > 0) {
  console.log('\n--- ERRORS ---');
  errors.forEach(e => console.log('ERROR: ' + e));
}

if (warnings.length > 0) {
  console.log('\n--- WARNINGS ---');
  warnings.forEach(w => console.log('WARN: ' + w));
}

if (errors.length === 0) {
  console.log('\nALL CHECKS PASSED PERFECTLY!');
}
