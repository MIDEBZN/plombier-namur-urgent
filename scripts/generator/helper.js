import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('content/seo-articles');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

export function saveArticle(filename, content) {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, content, 'utf-8');
  const words = content.replace(/[#*`_\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`Saved ${filename}: ${words} words`);
  return words;
}
