// Better word counter that uses ts.transpile to get JS, then parses the body array
const fs = require('fs');
const ts = require('typescript');
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

function extractText(block) {
  if (!block || typeof block !== 'object') return '';
  let s = '';
  if (block.text) s += ' ' + block.text;
  if (block.items && Array.isArray(block.items)) {
    if (typeof block.items[0] === 'string') s += ' ' + block.items.join(' ');
    else if (block.items[0] && (block.items[0].q || block.items[0].a)) {
      s += ' ' + block.items.map(i => (i.q || '') + ' ' + (i.a || '')).join(' ');
    } else if (block.items[0] && (block.items[0].value || block.items[0].label)) {
      s += ' ' + block.items.map(i => (i.value || '') + ' ' + (i.label || '')).join(' ');
    }
  }
  if (block.toolA) {
    s += ' ' + (block.toolA.name || '');
    if (block.toolA.pros) s += ' ' + block.toolA.pros.join(' ');
    if (block.toolA.cons) s += ' ' + block.toolA.cons.join(' ');
  }
  if (block.toolB) {
    s += ' ' + (block.toolB.name || '');
    if (block.toolB.pros) s += ' ' + block.toolB.pros.join(' ');
    if (block.toolB.cons) s += ' ' + block.toolB.cons.join(' ');
  }
  if (block.head) s += ' ' + block.head.join(' ');
  if (block.rows) s += ' ' + block.rows.flat().join(' ');
  return s;
}

for (const f of files) {
  const src = fs.readFileSync(dir + f, 'utf8');
  // Strip imports
  let js = src.replace(/^import[\s\S]*?;\s*$/m, '');
  // Wrap in a module pattern
  js = 'const X = ' + js.replace(/export\s+const\s+\w+\s*:/, '').replace(/export\s+\{[\s\S]*?\};?/, '').trim();
  // Easier: just transpile and eval the body
  const transpiled = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  // Find "body:" array start
  const bodyIdx = transpiled.indexOf('body: [');
  if (bodyIdx < 0) { console.log(f, 'NO BODY'); continue; }
  // Find matching closing ] for body. We need bracket counting.
  let depth = 0;
  let startIdx = -1;
  let endIdx = -1;
  for (let i = bodyIdx + 'body:'.length; i < transpiled.length; i++) {
    const ch = transpiled[i];
    if (ch === '[') { if (depth === 0) startIdx = i; depth++; }
    else if (ch === ']') { depth--; if (depth === 0) { endIdx = i; break; } }
  }
  if (endIdx < 0) { console.log(f, 'NO END'); continue; }
  const bodyStr = transpiled.slice(startIdx, endIdx + 1);
  // Eval the array
  let body;
  try { body = eval(bodyStr); } catch (e) { console.log(f, 'EVAL ERR', e.message); continue; }
  // Sum text
  let total = 0;
  for (const blk of body) {
    const t = extractText(blk);
    const words = t.replace(/[^\w\s.\/:-]/g, ' ').split(/\s+/).filter(w => w.length > 1).length;
    total += words;
  }
  console.log(f.padEnd(36), total, 'words');
}