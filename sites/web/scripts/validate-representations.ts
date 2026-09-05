import { readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import {
  productSchema,
  productMarkdown,
  productRecord,
  type ProductData,
  type FeatureData,
  type HarnessData,
  type ReportData,
  type ResearchSeed,
  type SpecificationData,
  SUPPORT_STATUS_LABELS,
  buildStateOfHarnessesReport,
  featureJsonPath,
  featureMarkdownPath,
  featurePath,
  featureSchema,
  harnessJsonPath,
  harnessMarkdownPath,
  harnessPath,
  harnessSchema,
  reportJsonPath,
  reportMarkdownPath,
  reportPath,
  reportSchema,
  specificationJsonPath,
  specificationMarkdownPath,
  specificationPath,
  specificationSchema,
} from "../../../packages/catalog/src/index.ts";
import {
  featureMarkdown,
  harnessMarkdown,
  reportEntryMarkdown,
  specificationMarkdown,
} from "../src/lib/markdown.ts";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "../../..");
const contentRoot = resolve(repositoryRoot, "content");
const researchSeedFile = resolve(
  repositoryRoot,
  "md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28/data/compatibility-seed.json"
);

interface SourceEntry<T> {
  data: T;
  body: string;
  file: string;
}

async function sourceEntries<T>(
  directory: string,
  parseEntry: (value: unknown) => T
): Promise<SourceEntry<T>[]> {
  const root = resolve(contentRoot, directory);
  const entries = await readdir(root, { recursive: true, withFileTypes: true });
  return Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map(async (entry) => {
        const file = resolve(entry.parentPath, entry.name);
        const source = await readFile(file, "utf8");
        const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
        if (!match?.[1]) throw new Error(`Missing frontmatter in ${file}`);
        return {
          data: parseEntry(parse(match[1])),
          body: source.slice(match[0].length),
          file,
        };
      })
  );
}

function requireText(
  document: string,
  expected: string,
  field: string,
  file: string
): void {
  if (!document.includes(expected)) {
    throw new Error(
      `Representation parity failed for ${file}: missing ${field} (${expected}).`
    );
  }
}

function requireSharedMetadata(
  document: string,
  data:
    | ProductData
    | FeatureData
    | HarnessData
    | ReportData
    | SpecificationData,
  file: string
): void {
  requireText(document, `title: ${JSON.stringify(data.title)}`, "title", file);
  requireText(
    document,
    `contentKind: ${JSON.stringify(data.contentKind)}`,
    "content kind",
    file
  );
  requireText(
    document,
    `locale: ${JSON.stringify(data.locale)}`,
    "locale",
    file
  );
  requireText(
    document,
    `description: ${JSON.stringify(data.description)}`,
    "description",
    file
  );
  requireText(
    document,
    `llmSummary: ${JSON.stringify(data.llmSummary)}`,
    "LLM summary",
    file
  );
  requireText(document, data.updated.toISOString(), "updated date", file);
  for (const tag of data.tags) requireText(document, tag, "tag", file);
}

const [features, harnesses, specifications, reports] = await Promise.all([
  sourceEntries("features", (value) => featureSchema.parse(value)),
  sourceEntries("harnesses", (value) => harnessSchema.parse(value)),
  sourceEntries("specifications", (value) => specificationSchema.parse(value)),
  sourceEntries("reports", (value) => reportSchema.parse(value)),
]);
const harnessData = harnesses.map((entry) => entry.data);
const featureData = features.map((entry) => entry.data);
const researchSeed = JSON.parse(
  await readFile(researchSeedFile, "utf8")
) as ResearchSeed;
const stateOfHarnessesReport = buildStateOfHarnessesReport(researchSeed);

for (const entry of features) {
  const document = featureMarkdown({
    feature: entry.data,
    harnesses: harnessData,
    body: entry.body,
  });
  requireSharedMetadata(document, entry.data, entry.file);
  requireText(document, featurePath(entry.data.slug), "HTML path", entry.file);
  requireText(
    document,
    featureMarkdownPath(entry.data.slug),
    "Markdown path",
    entry.file
  );
  requireText(
    document,
    featureJsonPath(entry.data.slug),
    "JSON path",
    entry.file
  );
  for (const row of entry.data.support) {
    requireText(document, row.harness, "harness assertion", entry.file);
    for (const version of row.versions ?? []) {
      requireText(
        document,
        SUPPORT_STATUS_LABELS[version.status],
        "support status",
        entry.file
      );
      if (version.target) {
        requireText(document, version.target.revision, "target", entry.file);
      }
      for (const qualifier of version.qualifiers ?? []) {
        requireText(document, qualifier.value, "constraint", entry.file);
      }
      for (const evidence of version.evidence ?? []) {
        const resource = entry.data.resources.find(
          (candidate) => candidate.id === evidence.resourceId
        );
        if (resource) {
          requireText(document, resource.href, "evidence URL", entry.file);
        }
        requireText(
          document,
          evidence.observedAt,
          "verification date",
          entry.file
        );
      }
    }
  }
}

for (const entry of harnesses) {
  const document = harnessMarkdown({
    harness: entry.data,
    harnesses: harnessData,
    features: featureData,
    body: entry.body,
  });
  requireSharedMetadata(document, entry.data, entry.file);
  requireText(document, harnessPath(entry.data.slug), "HTML path", entry.file);
  requireText(
    document,
    harnessMarkdownPath(entry.data.slug),
    "Markdown path",
    entry.file
  );
  requireText(
    document,
    harnessJsonPath(entry.data.slug),
    "JSON path",
    entry.file
  );
  for (const feature of featureData) {
    requireText(
      document,
      featureMarkdownPath(feature.slug),
      "capability assertion",
      entry.file
    );
  }
}

for (const entry of specifications) {
  const document = specificationMarkdown({
    specification: entry.data,
    body: entry.body,
  });
  requireSharedMetadata(document, entry.data, entry.file);
  requireText(
    document,
    specificationPath(entry.data.slug),
    "HTML path",
    entry.file
  );
  requireText(
    document,
    specificationMarkdownPath(entry.data.slug),
    "Markdown path",
    entry.file
  );
  requireText(
    document,
    specificationJsonPath(entry.data.slug),
    "JSON path",
    entry.file
  );
  requireText(
    document,
    entry.data.revision,
    "specification revision",
    entry.file
  );
  requireText(
    document,
    entry.data.canonicalUrl,
    "canonical specification URL",
    entry.file
  );
}

for (const entry of reports) {
  const document = reportEntryMarkdown({
    report: entry.data,
    body: entry.body,
    snapshot: stateOfHarnessesReport,
  });
  requireSharedMetadata(document, entry.data, entry.file);
  requireText(document, reportPath(entry.data.slug), "HTML path", entry.file);
  requireText(
    document,
    reportMarkdownPath(entry.data.slug),
    "Markdown path",
    entry.file
  );
  requireText(
    document,
    reportJsonPath(entry.data.slug),
    "JSON path",
    entry.file
  );
  requireText(
    document,
    stateOfHarnessesReport.researchCutoff,
    "research cutoff",
    entry.file
  );
  requireText(
    document,
    stateOfHarnessesReport.totals.compatibilityCells.toLocaleString("en-US"),
    "compatibility-cell total",
    entry.file
  );
}

process.stdout.write(
  `Validated HTML/Markdown/JSON parity fields for ${features.length} features, ${harnesses.length} harnesses, ${specifications.length} specifications, and ${reports.length} reports.\n`
);

const products = await sourceEntries("products", (value) =>
  productSchema.parse(value)
);
const productSlugs = new Set<string>();
for (const entry of products) {
  if (productSlugs.has(entry.data.slug))
    throw new Error(`Duplicate product slug: ${entry.data.slug}`);
  productSlugs.add(entry.data.slug);
  const document = productMarkdown(entry.data, entry.body);
  requireSharedMetadata(document, entry.data, entry.file);
  const record = productRecord(entry.data, entry.body);
  for (const path of [record.html, record.markdown, record.json])
    requireText(document, path, "representation path", entry.file);
  for (const source of entry.data.sources) {
    requireText(document, source.href, "source URL", entry.file);
    requireText(document, source.reviewedAt, "source date", entry.file);
  }
  for (const route of entry.data.routes) {
    if (!featureData.some((feature) => feature.slug === route.feature))
      throw new Error(`${entry.file}: Unknown capability ${route.feature}`);
  }
  for (const assertion of [...entry.data.actions, ...entry.data.integrations])
    requireText(document, assertion.detail, "assertion detail", entry.file);
}
process.stdout.write(
  `Validated ${products.length} product guides, evidence references, and Markdown/JSON parity.\n`
);
