import fs from 'fs';
import path from 'path';

function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
    else if (f.endsWith('.html') && !f.includes('404')) res.push(p);
  }
  return res;
}

const files = walk('dist');
let validCount = 0;
let errors = [];
let warnings = [];

let homeChecked = false;
let serviceChecked = false;

for (const f of files) {
  const rel = path.relative(path.resolve('dist'), f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf-8');
  const matches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  
  if (matches.length === 0) {
    errors.push(`No JSON-LD found in ${rel}`);
    continue;
  }
  
  for (const m of matches) {
    let data;
    try {
      data = JSON.parse(m[1]);
      validCount++;
    } catch (e) {
      errors.push(`JSON parse error in ${rel}: ${e.message}`);
      continue;
    }
    
    // Check for any remaining placeholders
    const rawJson = JSON.stringify(data);
    if (rawJson.includes('[À COMPLÉTER') || rawJson.includes('0XXX')) {
      errors.push(`Placeholder found in JSON-LD in ${rel}: ${rawJson.substring(0, 100)}...`);
    }

    if (data['@graph']) {
      for (const node of data['@graph']) {
        // Check baseBusiness node
        if (Array.isArray(node['@type']) && node['@type'].includes('PlumbingService')) {
          if (!node['@type'].includes('LocalBusiness')) {
            warnings.push(`${rel}: PlumbingService node lacks LocalBusiness multi-typing`);
          }
          if (!node.aggregateRating) {
            warnings.push(`${rel}: Business node lacks aggregateRating`);
          }
          if (!node.hasOfferCatalog) {
            warnings.push(`${rel}: Business node lacks hasOfferCatalog`);
          }
          if (!node.legalName || node.legalName.includes('COMPLÉTER')) {
            errors.push(`${rel}: Invalid legalName: ${node.legalName}`);
          }
          if (!node.vatID || node.vatID.includes('XXX')) {
            errors.push(`${rel}: Invalid vatID: ${node.vatID}`);
          }
        }
        
        // Check Service node
        if (node['@type'] === 'Service') {
          serviceChecked = true;
        }

        // Check FAQPage
        if (node['@type'] === 'FAQPage') {
          if (!node.mainEntity || node.mainEntity.length === 0) {
            errors.push(`${rel}: Empty FAQPage mainEntity`);
          }
        }
      }
    }
  }
}

console.log(`Audited JSON-LD: ${validCount} valid schema blocks found across ${files.length} pages.`);
console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);

if (errors.length > 0) {
  console.log('\n--- ERRORS ---');
  errors.forEach(e => console.log('ERROR: ' + e));
}

if (warnings.length > 0) {
  console.log('\n--- WARNINGS ---');
  warnings.forEach(w => console.log('WARN: ' + w));
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('\nALL SCHEMAS VALIDATED PERFECTLY WITH ZERO ERRORS OR WARNINGS!');
}
