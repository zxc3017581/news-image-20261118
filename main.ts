// News-image entry for 18 November 2026.
//
// The image this entry hands in is entry.png, sitting beside this file.
// This program's whole job is to place a copy of it at
// /output/entry.png, where the gate and the judge read it. It runs with
// no network, on Node 22, using the standard library only.
//
// To run it outside the grader, point MAKEFUN_OUTPUT_DIR at a folder:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The gate allows at most 1 MiB for the image file.
const MAX_BYTES = 1048576;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
copyFileSync(source, target);

// The gate reads the file by its first bytes, so refuse anything that
// is not a PNG before the run is counted a success.
const magic = readFileSync(target).subarray(0, 8);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!magic.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}

const bytes = statSync(target).size;
if (bytes > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB cap`);
}
console.log(`entry.png -> ${target} (${bytes} bytes)`);
