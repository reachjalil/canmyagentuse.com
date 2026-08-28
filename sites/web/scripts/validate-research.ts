import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  validateResearchSeed,
  type ResearchSeed,
} from "@canmyagentuse/catalog";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "../../..");
const researchRoot = resolve(
  repositoryRoot,
  "md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28/data"
);

const [seedSource, manifestSource] = await Promise.all([
  readFile(resolve(researchRoot, "compatibility-seed.json"), "utf8"),
  readFile(resolve(researchRoot, "data-manifest.json"), "utf8"),
]);

const seed = JSON.parse(seedSource) as ResearchSeed;
const manifest = JSON.parse(manifestSource) as {
  counts: Record<string, number>;
  research_cutoff: string;
};
const report = validateResearchSeed(seed);

const comparisons: Array<[string, number, number]> = [
  ["vendors", report.vendors, manifest.counts.vendors ?? -1],
  ["products", report.products, manifest.counts.products ?? -1],
  ["surfaces", report.surfaces, manifest.counts.surfaces ?? -1],
  ["features", report.features, manifest.counts.features ?? -1],
  ["assertions", report.assertions, manifest.counts.assertions ?? -1],
  [
    "compatibility cells",
    report.compatibilityCells,
    manifest.counts.compatibility_cells ?? -1,
  ],
  [
    "supported cells",
    report.statuses.supported,
    manifest.counts.supported_cells ?? -1,
  ],
  [
    "partial cells",
    report.statuses.partial,
    manifest.counts.partial_cells ?? -1,
  ],
  [
    "unsupported cells",
    report.statuses.unsupported,
    manifest.counts.unsupported_cells ?? -1,
  ],
  [
    "unknown cells",
    report.statuses.unknown,
    manifest.counts.unknown_cells ?? -1,
  ],
  ["sources", report.sources, manifest.counts.sources ?? -1],
  [
    "registry entries",
    report.registryEntries,
    manifest.counts.registry_inventory_rows ?? -1,
  ],
  [
    "evidence gaps",
    report.evidenceGaps,
    manifest.counts.evidence_gap_rows ?? -1,
  ],
  [
    "proposed tests",
    report.proposedTests,
    manifest.counts.proposed_tests ?? -1,
  ],
];

for (const [label, actual, expected] of comparisons) {
  if (actual !== expected) {
    throw new Error(
      `Research ${label} count is ${actual}; data manifest declares ${expected}.`
    );
  }
}

if (seed.research_cutoff !== manifest.research_cutoff) {
  throw new Error(
    `Research cutoff ${seed.research_cutoff} does not match manifest ${manifest.research_cutoff}.`
  );
}

process.stdout.write(
  `Validated research seed: ${report.vendors} vendors, ${report.surfaces} exact surfaces, ${report.features} features, ${report.compatibilityCells} cells, and ${report.sources} sources.\n`
);
