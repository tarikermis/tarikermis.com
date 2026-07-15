import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const failures = [];
const htmlFiles = [];
const allFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else {
      allFiles.push(path);
      if (entry.name.endsWith('.html')) htmlFiles.push(path);
    }
  }
}

function fail(message) {
  failures.push(message);
}

function resolvePublicPath(pathname) {
  const clean = decodeURIComponent(pathname.split(/[?#]/)[0]).replace(/^\//, '');
  const direct = join(root, clean);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  if (extname(clean)) return direct;
  return join(root, clean, 'index.html');
}

if (!existsSync(root)) {
  console.error('dist/ does not exist. Run the Astro build first.');
  process.exit(1);
}

walk(root);

const requiredFiles = [
  'index.html',
  'de/index.html',
  'legal/index.html',
  'de/impressum/index.html',
  '404.html',
  '_headers',
  '_redirects',
  'robots.txt',
  'llms.txt',
  'humans.txt',
  'contact.vcf',
  'contact-qr.svg',
  'og-image.png',
  '.well-known/security.txt',
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`Missing required output: ${file}`);
}

for (const path of allFiles) {
  const size = statSync(path).size;
  if (size > 25 * 1024 * 1024) fail(`${relative(root, path)} exceeds Cloudflare Workers' 25 MiB static asset limit`);
}

for (const path of htmlFiles) {
  const rel = relative(root, path);
  const html = readFileSync(path, 'utf8');
  const titleCount = (html.match(/<title>/g) || []).length;
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  const mainCount = (html.match(/<main(?:\s|>)/g) || []).length;

  if (!/^<!doctype html>/i.test(html)) fail(`${rel}: missing HTML doctype`);
  if (!/<html\s+lang="(?:en|de)"/.test(html)) fail(`${rel}: missing supported html lang`);
  if (titleCount !== 1) fail(`${rel}: expected one title, found ${titleCount}`);
  if (!/<meta\s+name="description"\s+content="[^"]{80,180}"/.test(html)) fail(`${rel}: missing or poorly sized description`);
  if (!/<link\s+rel="canonical"\s+href="https:\/\/tarikermis\.com\//.test(html)) fail(`${rel}: missing canonical tarikermis.com URL`);
  if (h1Count !== 1) fail(`${rel}: expected one h1, found ${h1Count}`);
  if (mainCount !== 1) fail(`${rel}: expected one main, found ${mainCount}`);

  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(image[0])) fail(`${rel}: image without alt attribute: ${image[0].slice(0, 100)}`);
    if (!/\bwidth="\d+"/.test(image[0]) || !/\bheight="\d+"/.test(image[0])) {
      fail(`${rel}: image missing intrinsic dimensions: ${image[0].slice(0, 100)}`);
    }
  }

  for (const link of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    if (!/\brel="[^"]*noopener/.test(link[0])) fail(`${rel}: target=_blank link missing noopener`);
  }

  for (const attribute of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const pathname = attribute[1];
    if (pathname === '/' || pathname.startsWith('/#')) continue;
    const target = resolvePublicPath(pathname);
    if (!existsSync(target)) fail(`${rel}: broken internal asset or link ${pathname}`);
  }
}

const combinedHtml = htmlFiles.map((path) => readFileSync(path, 'utf8')).join('\n');
for (const forbidden of ['tarik.n3tz.io', 'developer-portfolio-1hanzla100', 'AI Expert & Pioneer', '100% proficiency']) {
  if (combinedHtml.includes(forbidden)) fail(`Forbidden legacy content found: ${forbidden}`);
}

const headers = readFileSync(join(root, '_headers'), 'utf8');
for (const header of ['Content-Security-Policy', 'Permissions-Policy', 'Referrer-Policy', 'X-Content-Type-Options']) {
  if (!headers.includes(header)) fail(`_headers is missing ${header}`);
}

const vcard = readFileSync(join(root, 'contact.vcf'), 'utf8');
for (const field of ['BEGIN:VCARD', 'FN:Tarik Ermis', 'EMAIL;TYPE=INTERNET,WORK:tarik@n3tz.ai', 'END:VCARD']) {
  if (!vcard.includes(field)) fail(`contact.vcf is missing ${field}`);
}

if (failures.length) {
  console.error(`\nSite check failed with ${failures.length} problem(s):`);
  failures.forEach((message) => console.error(`  - ${message}`));
  process.exit(1);
}

const bytes = allFiles.reduce((sum, path) => sum + statSync(path).size, 0);
console.log(`Site check passed: ${htmlFiles.length} HTML pages, ${allFiles.length} files, ${(bytes / 1024).toFixed(1)} KiB.`);
