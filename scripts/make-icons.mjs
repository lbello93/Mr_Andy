import sharp from "sharp";

const src = "public/favicon.png";
const clear = { r: 0, g: 0, b: 0, alpha: 0 };

await sharp(src).resize(32, 32, { fit: "contain", background: clear }).png().toFile("public/favicon-32.png");
await sharp(src).resize(192, 192, { fit: "contain", background: clear }).png().toFile("public/icon-192.png");
// iOS fills transparency with black, so give this one a white background
await sharp(src)
  .resize(180, 180, { fit: "contain", background: "#ffffff" })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile("public/apple-touch-icon.png");
console.log("icons written");