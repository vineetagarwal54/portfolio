// Converts every PNG and JPG in src/assets to a sibling .webp file.
// Originals are kept so they can serve as a <picture> fallback.
// Run: node scripts/convert-webp.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve, extname, basename, join } from "node:path";
import { readdir, stat } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, "../src/assets");

const RASTER = new Set([".png", ".jpg", ".jpeg"]);

const files = await readdir(assetsDir);
let converted = 0;
let savedBytes = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!RASTER.has(ext)) continue;

  const input = join(assetsDir, file);
  const output = join(assetsDir, basename(file, ext) + ".webp");

  const before = (await stat(input)).size;
  await sharp(input).webp({ quality: 80 }).toFile(output);
  const after = (await stat(output)).size;

  converted += 1;
  savedBytes += before - after;
  console.log(
    `${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(6)} KB  to  ${(
      after / 1024
    )
      .toFixed(0)
      .padStart(6)} KB webp`
  );
}

console.log(
  `\nConverted ${converted} images. Approx ${(savedBytes / 1024 / 1024).toFixed(
    2
  )} MB saved versus originals.`
);
