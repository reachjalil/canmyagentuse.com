import { readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import {
  featureSchema,
  harnessSchema,
  providerMarkIsDisplayable,
  referenceIdentity,
  reportSchema,
  specificationSchema,
  validateCatalogRelations,
} from "../../../packages/catalog/src/index.ts";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "../../..");
const contentRoot = resolve(repositoryRoot, "content");

async function markdownFiles(directory: string): Promise<string[]> {
  const root = resolve(contentRoot, directory);
  const entries = await readdir(root, { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => resolve(entry.parentPath, entry.name))
    .toSorted();
}

async function frontmatter(file: string): Promise<unknown> {
  const source = await readFile(file, "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match?.[1]) throw new Error(`Missing frontmatter in ${file}`);
  return parse(match[1]);
}

async function collection<T>(
  directory: string,
  parseEntry: (value: unknown) => T
): Promise<T[]> {
  const files = await markdownFiles(directory);
  return Promise.all(
    files.map(async (file) => {
      try {
        return parseEntry(await frontmatter(file));
      } catch (error) {
        throw new Error(
          `Catalog validation failed in ${file}:\n${error instanceof Error ? error.message : String(error)}`,
          { cause: error }
        );
      }
    })
  );
}

const [features, harnesses, specifications, reports] = await Promise.all([
  collection("features", (value) => featureSchema.parse(value)),
  collection("harnesses", (value) => harnessSchema.parse(value)),
  collection("specifications", (value) => specificationSchema.parse(value)),
  collection("reports", (value) => reportSchema.parse(value)),
]);

validateCatalogRelations({ features, harnesses, specifications });
for (const harness of harnesses) {
  const identity = referenceIdentity({
    provider: harness.vendor,
    product: harness.title,
    productSlug: harness.slug,
  });
  if (!identity.name || !identity.monogram || !identity.tone) {
    throw new Error(`Incomplete brand reference for harness ${harness.slug}.`);
  }
  if (identity.mark && !providerMarkIsDisplayable(identity.mark)) {
    throw new Error(`Invalid brand mark mapping for harness ${harness.slug}.`);
  }
}
process.stdout.write(
  `Validated ${features.length} features, ${harnesses.length} harnesses, ${specifications.length} specifications, and ${reports.length} reports with cross-entry and brand references.\n`
);
