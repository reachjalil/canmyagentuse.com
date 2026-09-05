import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname, resolve } from "node:path";

import {
  PROVIDER_MARKS,
  providerMarkIsDisplayable,
  providerMarkSource,
} from "@canmyagentuse/catalog";

const outputDirectory = resolve("public/provider-marks");
const forbiddenSvgPatterns = [
  /<script\b/i,
  /<!DOCTYPE\b/i,
  /<!ENTITY\b/i,
  /<foreignObject\b/i,
  /\son[a-z]+\s*=/i,
  /(?:href|src)\s*=\s*["']\s*(?:https?:|\/\/)/i,
  /url\(\s*["']?\s*(?:https?:|\/\/)/i,
];

function sourcePath(mark: (typeof PROVIDER_MARKS)[number]): string {
  if (providerMarkSource(mark.source).kind === "provider-download") {
    if (basename(mark.sourceAsset) !== mark.sourceAsset) {
      throw new Error(`Provider asset must be a filename: ${mark.id}`);
    }
    return resolve("assets/provider-marks", mark.sourceAsset);
  }
  const asset = `${mark.sourceAsset}.svg`;
  if (mark.source === "lobe-icons") {
    return resolve("node_modules/@lobehub/icons-static-svg/icons", asset);
  }
  return resolve("node_modules/simple-icons/icons", asset);
}

function validateAsset(bytes: Uint8Array, source: string): void {
  const extension = extname(source);
  if (extension === ".svg") {
    const svg = new TextDecoder()
      .decode(bytes)
      .replace(/^\s*<\?xml[^?]*\?>/, "");
    if (!/^\s*<svg\b/i.test(svg) || !/<\/svg>\s*$/i.test(svg)) {
      throw new Error(`${source} is not a complete SVG document.`);
    }
    const forbidden = forbiddenSvgPatterns.find((pattern) => pattern.test(svg));
    if (forbidden) {
      throw new Error(
        `${source} contains a forbidden active or remote SVG construct.`
      );
    }
  } else if (extension === ".png") {
    if (
      ![137, 80, 78, 71, 13, 10, 26, 10].every(
        (value, index) => bytes[index] === value
      )
    ) {
      throw new Error(`${source} is not a PNG image.`);
    }
  } else if (extension === ".webp") {
    if (
      new TextDecoder().decode(bytes.subarray(0, 4)) !== "RIFF" ||
      new TextDecoder().decode(bytes.subarray(8, 12)) !== "WEBP"
    ) {
      throw new Error(`${source} is not a WebP image.`);
    }
  } else {
    throw new Error(`${source} has an unsupported asset format.`);
  }
}

await mkdir(outputDirectory, { recursive: true });

for (const mark of PROVIDER_MARKS) {
  const markId = mark.id;
  if (!providerMarkIsDisplayable(mark))
    throw new Error(`Incomplete provider provenance: ${markId}`);
  const source = sourcePath(mark);
  const bytes = await readFile(source);
  validateAsset(bytes, source);
  if (
    mark.sha256 &&
    createHash("sha256").update(bytes).digest("hex") !== mark.sha256
  ) {
    throw new Error(
      `Provider asset checksum mismatch: ${mark.id}. Review the source before updating its fingerprint.`
    );
  }
  await writeFile(resolve(outputDirectory, basename(mark.assetPath)), bytes);
}

console.log(
  `Generated ${PROVIDER_MARKS.length} reviewed provider marks from pinned local sources.`
);
