import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

for (const file of walk("public").filter((f) => extname(f).toLowerCase() === ".png")) {
  const out = file.replace(/\.png$/i, ".webp");
  await sharp(file).webp({ quality: 82 }).toFile(out);
  console.log(out, Math.round(statSync(file).size / 1024) + "KB ->", Math.round(statSync(out).size / 1024) + "KB");
}