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

// Find any "X. Y" in h2 or h3 headings where X and Y look like a single sentence that got split
// The simplest fix: find headings like "Some title. some word..." where the second part starts lowercase
// and replace ". some word" with ": some word" or just lowercase after the period
function fixHeading(text) {
  // If there's a period followed by lowercase letter, change it to a colon or restructure
  // e.g. "The database comparison. both claim" → "The database comparison: both claim"
  // e.g. "Content tools. Semrush wins" → "Content tools: Semrush wins"
  return text.replace(/\.\s+([a-z])/g, (m, c) => ': ' + c.toUpperCase());
}

for (const f of files) {
  const fp = path.join(dir, f);
  let src = fs.readFileSync(fp, 'utf8');
  let count = 0;
  src = src.replace(/text: "([^"]*\.\s+[a-z][^"]*)"/g, (m, inner) => {
    count++;
    return 'text: "' + fixHeading(inner) + '"';
  });
  if (count > 0) {
    fs.writeFileSync(fp, src, 'utf8');
    console.log(f.padEnd(36), 'fixed', count, 'headings');
  } else {
    console.log(f.padEnd(36), 'no headings to fix');
  }
}