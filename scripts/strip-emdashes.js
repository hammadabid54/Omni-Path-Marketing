const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/hamma/OneDrive/Documents/Omni Path Marketing/omni-path-marketing/content/reviews/articles/';
const files = [
  'mangools-vs-semrush.ts',
  'mangools-vs-ahrefs.ts',
  'semrush-vs-ahrefs.ts',
  'semrush-vs-ahrefs-vs-moz.ts',
  'semrush-vs-se-ranking.ts',
  'semrush-vs-surfer-seo.ts',
  'se-ranking-vs-semrush.ts',
  'se-ranking-vs-ahrefs.ts',
  'surfer-seo-vs-frase.ts',
  'surfer-seo-vs-semrush.ts',
  'frase-vs-surfer-seo.ts',
  'frase-vs-jasper.ts'
];

for (const f of files) {
  const fp = path.join(dir, f);
  let src = fs.readFileSync(fp, 'utf8');
  // Replace " — " with ". " but only outside of strings (rough heuristic: only inside the body text)
  // Better: just replace globally; TypeScript/JS doesn't use em dashes so this is safe in source files
  const before = (src.match(/—/g) || []).length;
  // First pass: " — " -> ". "
  src = src.replace(/ — /g, '. ');
  // Second pass: em dash at start of a quoted string after text " — " -> ": "
  // e.g. '"real-time SERP-based scoring — the killer feature' → '. The killer feature'
  src = src.replace(/—/g, '. ');
  const after = (src.match(/—/g) || []).length;
  if (before > 0) {
    fs.writeFileSync(fp, src, 'utf8');
    console.log(f.padEnd(36), 'stripped', before - after, 'em dashes');
  } else {
    console.log(f.padEnd(36), 'no em dashes');
  }
}