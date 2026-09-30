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
  let count = 0;
  // Fix "Title. Subtitle" patterns in h2/h3 headings — replace period with colon
  // Match: type: "h2", text: "Some words. Some words..." where the second part starts with capital
  src = src.replace(/text: "([A-Z][^"]*?)\. ([A-Z][^"]*)"/g, (m, p1, p2) => {
    count++;
    return 'text: "' + p1 + ': ' + p2 + '"';
  });
  if (count > 0) {
    fs.writeFileSync(fp, src, 'utf8');
    console.log(f.padEnd(36), 'fixed', count, 'headings');
  }
}