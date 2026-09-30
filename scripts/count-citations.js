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

function extractUrls(block) {
  const urls = [];
  if (block.text) {
    const m = block.text.match(/\]\((https?:\/\/[^)]+)\)/g);
    if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
  }
  if (block.items && Array.isArray(block.items)) {
    if (typeof block.items[0] === 'string') {
      for (const it of block.items) {
        const m = it.match(/\]\((https?:\/\/[^)]+)\)/g);
        if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
      }
    } else if (block.items[0] && (block.items[0].q || block.items[0].a)) {
      for (const it of block.items) {
        const m = ((it.q || '') + ' ' + (it.a || '')).match(/\]\((https?:\/\/[^)]+)\)/g);
        if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
      }
    }
  }
  if (block.toolA && block.toolA.pros) {
    for (const p of block.toolA.pros) {
      const m = p.match(/\]\((https?:\/\/[^)]+)\)/g);
      if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
    }
  }
  if (block.toolA && block.toolA.cons) {
    for (const p of block.toolA.cons) {
      const m = p.match(/\]\((https?:\/\/[^)]+)\)/g);
      if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
    }
  }
  if (block.toolB && block.toolB.pros) {
    for (const p of block.toolB.pros) {
      const m = p.match(/\]\((https?:\/\/[^)]+)\)/g);
      if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
    }
  }
  if (block.toolB && block.toolB.cons) {
    for (const p of block.toolB.cons) {
      const m = p.match(/\]\((https?:\/\/[^)]+)\)/g);
      if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
    }
  }
  if (block.rows) {
    for (const row of block.rows) {
      for (const cell of row) {
        const m = cell.match(/\]\((https?:\/\/[^)]+)\)/g);
        if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
      }
    }
  }
  if (block.head) {
    for (const h of block.head) {
      const m = h.match(/\]\((https?:\/\/[^)]+)\)/g);
      if (m) urls.push(...m.map(x => x.match(/\((https?:\/\/[^)]+)\)/)[1]));
    }
  }
  return urls;
}

for (const f of files) {
  const src = fs.readFileSync(dir + f, 'utf8');
  const transpiled = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const bodyIdx = transpiled.indexOf('body: [');
  if (bodyIdx < 0) { console.log(f, 'NO BODY'); continue; }
  let depth = 0;
  let startIdx = -1;
  let endIdx = -1;
  for (let i = bodyIdx + 'body:'.length; i < transpiled.length; i++) {
    const ch = transpiled[i];
    if (ch === '[') { if (depth === 0) startIdx = i; depth++; }
    else if (ch === ']') { depth--; if (depth === 0) { endIdx = i; break; } }
  }
  if (endIdx < 0) continue;
  const bodyStr = transpiled.slice(startIdx, endIdx + 1);
  let body;
  try { body = eval(bodyStr); } catch (e) { console.log(f, 'EVAL ERR'); continue; }

  let inlineUrls = [];
  let sourcesCount = 0;
  for (const blk of body) {
    if (blk.type === 'sources') {
      sourcesCount = (blk.items || []).length;
      continue;
    }
    inlineUrls.push(...extractUrls(blk));
  }
  const uniqueInline = [...new Set(inlineUrls)];
  console.log(f.padEnd(36), 'inline citations:', uniqueInline.length, '(', inlineUrls.length, 'total )', 'sources block:', sourcesCount);
}