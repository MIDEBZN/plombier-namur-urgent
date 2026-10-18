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

let totalLinks = 0;
let emptyAnchors = [];

for (const p of pages) {
  const rel = path.relative(dist, p).replace(/\\/g, '/');
  const html = fs.readFileSync(p, 'utf-8');
  const matches = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
  
  for (const m of matches) {
    totalLinks++;
    const attrs = m[1];
    const innerHtml = m[2];
    
    // Extract text content without HTML tags
    const textContent = innerHtml.replace(/<[^>]+>/g, '').trim();
    
    // Check aria-label or title
    const ariaLabelMatch = attrs.match(/aria-label=["']([^"']*)["']/i);
    const titleMatch = attrs.match(/title=["']([^"']*)["']/i);
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
    
    const ariaLabel = ariaLabelMatch ? ariaLabelMatch[1].trim() : '';
    const title = titleMatch ? titleMatch[1].trim() : '';
    const href = hrefMatch ? hrefMatch[1].trim() : '';
    
    // If no text, no aria-label, and no title
    if (!textContent && !ariaLabel && !title) {
      emptyAnchors.push({
        file: rel,
        href,
        attrs
      });
    }
  }
}

console.log(`Scanned ${pages.length} pages, found ${totalLinks} total <a> tags.`);
console.log(`Empty anchor tags without text/aria-label/title: ${emptyAnchors.length}`);

if (emptyAnchors.length > 0) {
  console.log('Sample empty anchors:');
  emptyAnchors.slice(0, 10).forEach(a => console.log(`  [${a.file}] href="${a.href}" attrs: ${a.attrs}`));
} else {
  console.log('All links have accessible text or aria-labels!');
}
