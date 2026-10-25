import sharp from "sharp";
import { readdirSync, statSync, writeFileSync, readFileSync } from "node:fs";
import { join, extname } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

let saved = 0;

for (const file of walk("public")) {
  const ext = extname(file).toLowerCase();
  const before = statSync(file).size;

  if (ext === ".webp") {
    const buf = await sharp(file).webp({ quality: 78, effort: 6 }).toBuffer();
    if (buf.length < before) {
      writeFileSync(file, buf);
      saved += before - buf.length;
      console.log(`${file}  ${Math.round(before/1024)}KB -> ${Math.round(buf.length/1024)}KB`);
    }
  }
}

console.log(`\nTotal saved: ${Math.round(saved/1024)}KB`);