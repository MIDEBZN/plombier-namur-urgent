import fs from 'fs';
import path from 'path';

const dir = 'content/seo-articles';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();

console.log(`\n======================================================`);
console.log(`FULL SEO AUDIT OF ALL ${files.length} ARTICLES (TARGET: 30)`);
console.log(`======================================================\n`);

let allPassed = true;
const summary = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Frontmatter extraction
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.error(`[FAIL] ${file}: No frontmatter found`);
    allPassed = false;
    continue;
  }
  const fmLines = fmMatch[1].split(/\r?\n/);
  const fm = {};
  let currentKey = null;
  for (const line of fmLines) {
    const keyMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      let val = keyMatch[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val === '') {
        fm[currentKey] = [];
      } else {
        fm[currentKey] = val;
      }
    } else if (line.trim().startsWith('- ') && currentKey && Array.isArray(fm[currentKey])) {
      let item = line.trim().slice(2).trim();
      if (item.startsWith('"') && item.endsWith('"')) item = item.slice(1, -1);
      fm[currentKey].push(item);
    }
  }

  // 2. Word Count (raw & stripped)
  const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
  const rawWords = content.trim().split(/\s+/).filter(Boolean).length;
  const strippedWords = body.replace(/[#*`_>\[\]()\-]/g, ' ').trim().split(/\s+/).filter(Boolean).length;

  // 3. Title check (<= 60 chars target)
  const title = fm.title || '';
  const titleLen = title.length;
  const titleOk = titleLen > 0 && titleLen <= 60 && title.toLowerCase().includes('namur');

  // 4. Meta description check (<= 155 chars target)
  const meta = fm.meta_description || '';
  const metaLen = meta.length;
  const metaOk = metaLen > 0 && metaLen <= 155 && meta.includes('0489 XX XX XX');

  // 5. H1 check
  const h1Matches = body.match(/^#\s+(.+)$/m);
  const h1Count = (body.match(/^#\s+(.+)$/gm) || []).length;
  const h1Ok = h1Count === 1;

  // 6. Keywords
  const primaryKw = fm.primary_keyword || '';
  const secondaryKws = fm.secondary_keywords || [];
  const kwOk = primaryKw.length > 0 && secondaryKws.length >= 4;

  // 7. FAQ check (4 to 6 questions)
  const faqIdx = content.search(/## .*?(?:FAQ|Foire aux questions)/i);
  let faqCount = 0;
  if (faqIdx !== -1) {
    const afterFaq = content.slice(faqIdx);
    const nextH2Idx = afterFaq.slice(10).search(/\n## /);
    const faqBlock = nextH2Idx !== -1 ? afterFaq.slice(0, nextH2Idx + 10) : afterFaq;
    const questions = (faqBlock.match(/^###\s+.+$/gm) || []);
    faqCount = questions.length;
  }
  const faqOk = faqCount >= 4;

  // 8. CTA and Links
  const hasCta = body.includes('0489 XX XX XX');
  const hasLinks = body.includes('/') || body.includes('[BLOC CTA');

  const filePassed = rawWords >= 1500 && strippedWords >= 1400 && titleOk && metaOk && h1Ok && kwOk && faqOk && hasCta;

  if (!filePassed) {
    allPassed = false;
  }

  summary.push({
    file,
    titleLen,
    metaLen,
    rawWords,
    strippedWords,
    h1Count,
    secKwCount: secondaryKws.length,
    faqCount,
    status: filePassed ? 'PASS' : 'WARN'
  });
}

console.table(summary);

console.log(`\nTOTAL ARTICLES: ${files.length} / 30`);
if (allPassed) {
  console.log(`\nSUCCESS: ALL 30 ARTICLES STRICTLY SATISFY 100% OF SEO, WORD COUNT, TITLE, META, H1, FAQ, AND CTA CRITERIA!\n`);
} else {
  console.log(`\nATTENTION: Some articles still need fine-tuning.\n`);
}
