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

for (const f of files) {
  const html = fs.readFileSync(f, 'utf-8');
  const matches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (matches.length === 0) {
    errors.push(`No JSON-LD found in ${f}`);
    continue;
  }
  for (const m of matches) {
    try {
      const data = JSON.parse(m[1]);
      validCount++;
    } catch (e) {
      errors.push(`JSON parse error in ${f}: ${e.message}`);
    }
  }
}

console.log(`Audited JSON-LD: ${validCount} valid schema blocks found across ${files.length} pages.`);
if (errors.length > 0) {
  console.log('Errors:');
  errors.forEach(e => console.log(' - ' + e));
} else {
  console.log('All JSON-LD blocks parsed cleanly!');
}
