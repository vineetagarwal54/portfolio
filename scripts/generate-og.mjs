// Generates public/og-image.png (1200x630) for social link previews.
// Branded with the portfolio's navy background and orange accent.
// Run: node scripts/generate-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

const fontStack =
  "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f1729" />
      <stop offset="100%" stop-color="#131c33" />
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff9800" />
      <stop offset="100%" stop-color="#f57c00" />
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <rect x="0" y="0" width="14" height="${HEIGHT}" fill="url(#accent)" />

  <text x="90" y="250" font-family="${fontStack}" font-size="44" font-weight="600" fill="#ff9800" letter-spacing="3">VINEET AGARWAL</text>

  <text x="90" y="345" font-family="${fontStack}" font-size="76" font-weight="800" fill="#f8fafc">Full Stack Developer</text>
  <text x="90" y="430" font-family="${fontStack}" font-size="76" font-weight="800" fill="#f8fafc">and AI Engineer</text>

  <text x="90" y="510" font-family="${fontStack}" font-size="30" font-weight="400" fill="#94a3b8">LLM inference, retrieval augmented generation, and cloud native systems.</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("Wrote", out);
