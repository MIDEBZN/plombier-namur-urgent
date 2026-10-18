import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
const pages = [];

function findPages(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      findPages(p);
    } else if (f.endsWith('.html')) {
      pages.push(p);
    }
  }
}
findPages(dist);

const inboundCounts = {};
for (const p of pages) {
  let norm = '/' + path.relative(dist, p).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\/$/, '');
  if (norm === '/404.html') norm = '/404';
  inboundCounts[norm || '/'] = 0;
}

for (const p of pages) {
  const html = fs.readFileSync(p, 'utf-8');
  const matches = [...html.matchAll(/href=["'](\/[^"'#?]*?)["']/gi)];
  const seenOnPage = new Set();
  for (const m of matches) {
    let target = m[1].replace(/\/$/, '') || '/';
    if (inboundCounts[target] !== undefined && !seenOnPage.has(target)) {
      seenOnPage.add(target);
      inboundCounts[target]++;
    }
  }
}

let orphans = 0;
let wellLinked = 0;
const orphanList = [];
for (const [url, count] of Object.entries(inboundCounts)) {
  if (count <= 1) {
    orphans++;
    orphanList.push({ url, count });
  } else {
    wellLinked++;
  }
}

console.log(`Internal Links Summary: ${pages.length} pages scanned.`);
console.log(`Well-linked pages (>1 inbound): ${wellLinked}`);
console.log(`Orphan / single-inbound pages (excluding 404): ${orphans}`);
console.log("Pages with <= 1 inbound link:");
for (const item of orphanList) {
  console.log(`  ${item.url} (${item.count})`);
}

const sampleUrls = [
  '/',
  '/services/debouchage',
  '/services/fuites',
  '/locations/jambes',
  '/locations/bouge',
  '/locations/salzinnes',
  '/locations/erpent',
  '/conseils/combien-coute-un-plombier-namur-2026',
  '/conseils/combien-coute-debouchage-canalisation-namur'
];

for (const s of sampleUrls) {
  console.log(`  ${s}: ${inboundCounts[s]} inbound links`);
}
