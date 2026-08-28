import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { PROVIDER_MARKS } from "@canmyagentuse/catalog";

const outputDirectory = resolve("public/provider-marks");
const forbiddenSvgPatterns = [
  /<script\b/i,
  /<foreignObject\b/i,
  /\son[a-z]+\s*=/i,
  /(?:href|src)\s*=\s*["']\s*(?:https?:|\/\/)/i,
  /url\(\s*["']?\s*(?:https?:|\/\/)/i,
];

function sourcePath(mark: (typeof PROVIDER_MARKS)[number]): string {
  const asset = `${mark.sourceAsset}.svg`;
  if (mark.source === "lobe-icons") {
    return resolve("node_modules/@lobehub/icons-static-svg/icons", asset);
  }
  return resolve("node_modules/simple-icons/icons", asset);
}

function validateSvg(svg: string, source: string): void {
  if (!/^\s*<svg\b/i.test(svg) || !/<\/svg>\s*$/i.test(svg)) {
    throw new Error(`${source} is not a complete SVG document.`);
  }
  const forbidden = forbiddenSvgPatterns.find((pattern) => pattern.test(svg));
  if (forbidden) {
    throw new Error(
      `${source} contains a forbidden active or remote SVG construct.`
    );
  }
}

await mkdir(outputDirectory, { recursive: true });

for (const mark of PROVIDER_MARKS) {
  const source = sourcePath(mark);
  const svg = await readFile(source, "utf8");
  validateSvg(svg, source);
  await writeFile(resolve(outputDirectory, `${mark.id}.svg`), svg, "utf8");
}

console.log(`Generated ${PROVIDER_MARKS.length} reviewed provider marks.`);
