import { readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import {
  buildCoverageReport,
  buildMatrix,
  featureSchema,
  harnessSchema,
  specificationSchema,
  validateCatalogRelations,
  type CoverageSlice,
  type FeatureData,
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
    files.map(async (file) => parseEntry(await frontmatter(file)))
  );
}

function combinedSlice(slices: readonly CoverageSlice[]): CoverageSlice {
  const total = slices.reduce((sum, item) => sum + item.total, 0);
  const sourced = slices.reduce((sum, item) => sum + item.sourced, 0);
  return {
    total,
    sourced,
    unknown: total - sourced,
    share: total === 0 ? 0 : sourced / total,
  };
}

function percent(share: number): string {
  return `${(share * 100).toFixed(1)}%`;
}

function table(headers: readonly string[], rows: readonly string[][]): string {
  const widths = headers.map((header, index) =>
    Math.max(header.length, ...rows.map((row) => row[index]?.length ?? 0))
  );
  const line = (row: readonly string[]) =>
    row.map((value, index) => value.padEnd(widths[index] ?? 0)).join("  ");
  return [headers, widths.map((width) => "-".repeat(width)), ...rows]
    .map(line)
    .map((row) => row.trimEnd())
    .join("\n");
}

function familyKey(feature: FeatureData): string {
  return feature.parent ?? `standalone:${feature.category}`;
}

const [features, harnesses, specifications] = await Promise.all([
  collection("features", (value) => featureSchema.parse(value)),
  collection("harnesses", (value) => harnessSchema.parse(value)),
  collection("specifications", (value) => specificationSchema.parse(value)),
]);

validateCatalogRelations({ features, harnesses, specifications });

const report = buildCoverageReport(features, harnesses);
const atomicFeatures = features.filter(
  (feature) => feature.capabilityKind === "atomic"
);
const featureSlices = new Map(
  report.features.map((feature) => [feature.slug, feature] as const)
);
const familyTitles = new Map(
  features
    .filter((feature) => feature.capabilityKind === "family")
    .map((feature) => [feature.slug, feature.title] as const)
);
const familyMembers = new Map<string, FeatureData[]>();
for (const feature of atomicFeatures) {
  const key = familyKey(feature);
  familyMembers.set(key, [...(familyMembers.get(key) ?? []), feature]);
}
const families = [...familyMembers].map(([family, members]) => ({
  family,
  title:
    familyTitles.get(family) ??
    `Standalone · ${members[0]?.category ?? "uncategorized"}`,
  features: members.map((feature) => feature.slug).toSorted(),
  ...combinedSlice(
    members.flatMap((feature) => {
      const item = featureSlices.get(feature.slug);
      return item ? [item] : [];
    })
  ),
}));
const previewVersions = buildMatrix(atomicFeatures, harnesses).flatMap((cell) =>
  cell.versions.filter((version) => version.track === "preview")
);
const previewSourced = previewVersions.filter(
  (version) => version.status !== "unknown"
).length;
const preview: CoverageSlice = {
  total: previewVersions.length,
  sourced: previewSourced,
  unknown: previewVersions.length - previewSourced,
  share:
    previewVersions.length === 0 ? 0 : previewSourced / previewVersions.length,
};
const zeroOrOneSourcedFeatures = report.features
  .filter((feature) => feature.sourced <= 1)
  .toSorted(
    (left, right) =>
      left.sourced - right.sourced || left.slug.localeCompare(right.slug)
  );

if (process.argv.includes("--json")) {
  process.stdout.write(
    `${JSON.stringify(
      { ...report, families, preview, zeroOrOneSourcedFeatures },
      null,
      2
    )}\n`
  );
} else {
  const harnessRows = report.harnesses
    .toSorted(
      (left, right) =>
        left.sourced - right.sourced || left.slug.localeCompare(right.slug)
    )
    .map((harness) => [
      harness.slug,
      harness.surface,
      String(harness.sourced),
      String(harness.total),
      percent(harness.share),
    ]);
  const familyRows = families
    .toSorted(
      (left, right) =>
        left.share - right.share || left.family.localeCompare(right.family)
    )
    .map((family) => [
      family.family,
      String(family.features.length),
      String(family.sourced),
      String(family.total),
      percent(family.share),
    ]);

  process.stdout.write(
    [
      "Catalog coverage (published current track)",
      `Total: ${report.totals.sourced}/${report.totals.total} sourced (${percent(report.totals.share)}); ${report.totals.features} atomic features × ${report.totals.harnesses} harnesses`,
      `Preview: ${preview.sourced}/${preview.total} sourced (${percent(preview.share)})`,
      "",
      "Harnesses (ascending coverage)",
      table(["Harness", "Surface", "Sourced", "Total", "Share"], harnessRows),
      "",
      "Capability families (ascending coverage)",
      table(["Family", "Features", "Sourced", "Total", "Share"], familyRows),
      "",
      "Features with 0 or 1 sourced current-track cells",
      table(
        ["Feature", "Sourced", "Total"],
        zeroOrOneSourcedFeatures.map((feature) => [
          feature.slug,
          String(feature.sourced),
          String(feature.total),
        ])
      ),
      "",
    ].join("\n")
  );
}
