// Renders news.html into entry.png, the image this entry hands in.
// Run from this directory:  node render.mjs
// Needs Playwright with Chromium (npx playwright install chromium).
// The output is a 1024 x 1024 PNG; the gate allows at most 1 MiB and
// at most 1024 by 1024 pixels, and this render stays inside both.

import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { statSync } from 'node:fs';

const dir = dirname(fileURLToPath(import.meta.url));
const page_url = new URL('./news.html', import.meta.url).href;
const out_path = join(dir, 'entry.png');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto(page_url, { waitUntil: 'load' });
await page.waitForTimeout(300);
await page.screenshot({ path: out_path });
await browser.close();

const bytes = statSync(out_path).size;
console.log(`wrote ${out_path} (${bytes} bytes)`);
if (bytes > 1048576) {
  throw new Error('entry.png is over the 1 MiB gate cap');
}
