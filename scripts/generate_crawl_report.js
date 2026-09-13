import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir) {
  let results = [];
  for (const file of fs.readdirSync(dir)) {
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
const pages = {};

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  let urlPath = '/' + relPath.replace(/index\.html$/, '').replace(/\.html$/, '');
  if (urlPath !== '/' && urlPath.endsWith('/')) {
    urlPath = urlPath.slice(0, -1);
  }
  const fullUrl = 'https://www.plombiernamururgent.be' + (urlPath === '/' ? '/' : urlPath);

  const html = fs.readFileSync(file, 'utf-8');

  // Title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Meta Description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : '';

  // Canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

  // Robots
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([\s\S]*?)["']/i);
  const robotsDirective = robotsMatch ? robotsMatch[1].trim() : 'index, follow';

  // H1
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Count = h1Matches.length;
  const h1Text = h1Matches.map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')).join(' | ');

  // Word count (strip tags, scripts, styles)
  const textContent = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = textContent ? textContent.split(' ').length : 0;

  // Schema types
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let schemaTypes = new Set();
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed['@type']) schemaTypes.add(parsed['@type']);
      if (parsed['@graph']) {
        parsed['@graph'].forEach(item => {
          if (item['@type']) schemaTypes.add(item['@type']);
        });
      }
    } catch (e) {}
  }

  // Outbound internal links
  const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"'#:]*?)["']/gi)];
  const outlinks = new Set();
  for (const lm of linkMatches) {
    let link = lm[1].trim().split('?')[0].split('#')[0];
    if (!link || link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('javascript:')) continue;
    if (link !== '/' && link.endsWith('/')) link = link.slice(0, -1);
    if (!link.startsWith('/')) continue;
    outlinks.add(link);
  }

  pages[urlPath] = {
    file: relPath,
    fullUrl,
    urlPath,
    title,
    titleLength: title.length,
    metaDesc,
    canonical,
    robotsDirective,
    h1Count,
    h1Text,
    wordCount,
    outlinks: Array.from(outlinks),
    inlinksCount: 0,
    schemaTypes: Array.from(schemaTypes).join(', '),
    httpStatus: urlPath === '/404' ? '404' : '200',
    indexability: urlPath === '/404' ? 'Noindex (404)' : 'Indexable'
  };
}

// Calculate inlinks
for (const [path, data] of Object.entries(pages)) {
  for (const out of data.outlinks) {
    if (pages[out]) {
      pages[out].inlinksCount++;
    }
  }
}

fs.writeFileSync('scripts/crawl_data.json', JSON.stringify(pages, null, 2));
console.log(`Generated crawl report for ${Object.keys(pages).length} pages in scripts/crawl_data.json`);
