import { readdirSync, statSync, readFileSync } from "node:fs";
import { join, extname } from "node:path";

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const typos = {
  "Personlised": "Personalised",
  "Customised": null, // British spelling, OK
  "colour": null, // British spelling, OK
  "Colour": null,
  "unforgettble": "unforgettable",
  "experiance": "experience",
  "recieve": "receive",
  "seperate": "separate",
  "occassion": "occasion",
  "accomodate": "accommodate",
  "mileston": "milestone",
  "celebraton": "celebration",
  "sophisticaton": "sophistication",
  "enquiry": null, // British, OK
  "brainstoming": "brainstorming",
  "customise": null, // British, OK
};

const files = walk("src").filter((f) => /\.(jsx|js)$/.test(f));
let found = 0;

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");

  for (const [wrong, right] of Object.entries(typos)) {
    if (right === null) continue;
    lines.forEach((line, i) => {
      if (line.toLowerCase().includes(wrong.toLowerCase())) {
        console.log(`${file}:${i + 1}  "${wrong}" -> "${right}"`);
        console.log(`  ${line.trim()}`);
        found++;
      }
    });
  }
}

if (found === 0) console.log("No typos found.");