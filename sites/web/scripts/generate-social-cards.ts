import { Buffer } from "node:buffer";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { parse } from "yaml";
import {
  buildCoverageReport,
  featureSchema,
  harnessSchema,
} from "../../../packages/catalog/src/index.ts";
import {
  renderSocialCardSvg,
  type SocialCard,
  type SocialCompatibilityGroup,
  type SocialSupportStatus,
} from "../src/lib/social-card.ts";

interface CardManifestEntry extends SocialCard {
  imagePath: string;
  alt: string;
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "../../..");
const contentRoot = resolve(repositoryRoot, "content");
const outputRoot = resolve(repositoryRoot, "sites/web/public/social");
const coverageBackgroundPath = resolve(
  repositoryRoot,
  "sites/web/src/assets/social/coverage-evidence-frontier-v1.png"
);
const PRIMARY_SOCIAL_FAMILIES = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "Copilot",
] as const;
const SOCIAL_SURFACES = ["web", "desktop", "cli"] as const;

const SYSTEM_CARDS: SocialCard[] = [
  {
    canonicalPath: "/",
    eyebrow: "Independent AI agent compatibility catalog",
    title: "Know what your AI agent can actually do.",
    description:
      "Pick a capability, compare exact products, and check the public evidence behind every answer.",
    meta: "Independent research · unknown stays unknown",
    variant: "home",
  },
  {
    canonicalPath: "/features",
    eyebrow: "Capability index",
    title: "Browse agent capabilities",
    description:
      "Atomic compatibility questions across chat, desktop, and CLI agent harnesses.",
    meta: "Unknown stays unknown until sourced",
  },
  {
    canonicalPath: "/harnesses",
    eyebrow: "Surface catalog",
    title: "Browse agent harnesses",
    description:
      "Compare web, desktop, and CLI surfaces without flattening a product family into one claim.",
    meta: "Exact surfaces · no affiliation implied",
  },
  {
    canonicalPath: "/compare",
    eyebrow: "Side-by-side comparison",
    title: "Compare agent harnesses",
    description:
      "Align two exact surfaces across atomic capability rows. No synthetic compatibility score.",
    meta: "Current tracks · evidence-linked cells",
  },
  {
    canonicalPath: "/matrix",
    eyebrow: "Power-user view",
    title: "Compatibility matrix",
    description:
      "A dense current-track view with explicit unknowns and direct paths to evidence detail.",
    meta: "Capability × surface × environment",
  },
  {
    canonicalPath: "/specs",
    eyebrow: "Protocol anatomy",
    title: "Specifications and conventions",
    description:
      "Revision-aware references for protocols, package formats, instruction files, and UI layers.",
    meta: "Roles · revisions · maturity",
  },
  {
    canonicalPath: "/evidence",
    eyebrow: "Inspect the provenance",
    title: "Evidence ledger",
    description:
      "Public sources, evidence classes, review dates, and the exact statements that cite them.",
    meta: "Documented is not runtime-tested",
  },
  {
    canonicalPath: "/search",
    eyebrow: "Unified catalog search",
    title: "Search every catalog record",
    description:
      "Find capabilities, exact web, desktop, and CLI surfaces, and specification references in one index.",
    meta: "Capabilities · harnesses · specifications",
  },
  {
    canonicalPath: "/tests",
    eyebrow: "Definitions before badges",
    title: "Conformance test registry",
    description:
      "Proposed deterministic fixtures, security boundaries, and execution status kept separate from docs.",
    meta: "Proposed · not run",
  },
  {
    canonicalPath: "/changes",
    eyebrow: "Why compatibility changes",
    title: "Ecosystem timeline",
    description:
      "Dated standards, governance, registry, and host events that shape the compatibility catalog.",
    meta: "Selective chronology · cited sources",
  },
  {
    canonicalPath: "/contradictions",
    eyebrow: "Disagreement is data",
    title: "Contradictions and open questions",
    description:
      "Evidence conflicts and scope mismatches stay visible instead of becoming a false consensus.",
    meta: "Open · resolved by model · governed",
  },
  {
    canonicalPath: "/contribute",
    eyebrow: "Data, not page edits",
    title: "Contribute compatibility evidence",
    description:
      "Propose an atomic feature, exact surface target, environment qualifiers, and a public source.",
    meta: "Define · source · validate · review",
  },
  {
    canonicalPath: "/news",
    eyebrow: "Catalog news",
    title: "What changed in the catalog",
    description:
      "Editorial and dataset changes from Can My Agent Use, separated from vendor launch marketing.",
    meta: "Dated catalog updates",
  },
];

function stringValue(value: unknown, fallback = ""): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : fallback;
}

function slugFor(path: string): string {
  return path === "/" ? "home" : path.slice(1).replaceAll("/", "--");
}

function socialPath(card: SocialCard): string {
  return `/social/${card.imageSlug ?? slugFor(card.canonicalPath)}.png`;
}

function recordValue(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

function socialSupportStatus(value: unknown): SocialSupportStatus {
  return value === "yes" ||
    value === "partial" ||
    value === "no" ||
    value === "na"
    ? value
    : "unknown";
}

function currentSupportStatus(
  row: Record<string, unknown>
): SocialSupportStatus {
  const versions = Array.isArray(row.versions) ? row.versions : [];
  const current = versions
    .map(recordValue)
    .find((version) => version?.track === "current");
  return socialSupportStatus(current?.status ?? row.status);
}

function featureCompatibility(
  feature: Record<string, unknown>,
  harnesses: Record<string, unknown>[]
): SocialCompatibilityGroup[] {
  const support = Array.isArray(feature.support) ? feature.support : [];
  const supportByHarness = new Map(
    support
      .map(recordValue)
      .filter((row): row is Record<string, unknown> => Boolean(row))
      .map((row) => [stringValue(row.harness), row] as const)
  );

  return PRIMARY_SOCIAL_FAMILIES.map((family) => {
    const familyHarnesses = harnesses.filter(
      (harness) => stringValue(harness.family) === family
    );
    const vendor = stringValue(familyHarnesses[0]?.vendor, family);
    return {
      label: family,
      vendor,
      surfaces: SOCIAL_SURFACES.map((surface) => {
        const harness = familyHarnesses.find(
          (entry) => stringValue(entry.surface) === surface
        );
        if (!harness) return { surface, status: "na" as const };
        const row = supportByHarness.get(stringValue(harness.slug));
        return {
          surface,
          status: row ? currentSupportStatus(row) : "unknown",
        };
      }),
    };
  });
}

async function frontmatterFiles(
  directory: string
): Promise<Record<string, unknown>[]> {
  const root = resolve(contentRoot, directory);
  const locales = await readdir(root, { withFileTypes: true });
  const files = (
    await Promise.all(
      locales
        .filter((entry) => entry.isDirectory())
        .map(async (locale) => {
          const localeRoot = resolve(root, locale.name);
          return (await readdir(localeRoot, { withFileTypes: true }))
            .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
            .map((entry) => resolve(localeRoot, entry.name));
        })
    )
  ).flat();

  return Promise.all(
    files.map(async (file) => {
      const source = await readFile(file, "utf8");
      const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!match?.[1]) throw new Error(`Missing frontmatter in ${file}`);
      const data = parse(match[1]);
      if (!data || typeof data !== "object") {
        throw new Error(`Invalid frontmatter in ${file}`);
      }
      return data as Record<string, unknown>;
    })
  );
}

async function collectCards(): Promise<SocialCard[]> {
  const [features, harnesses, specifications, categories, news, pages] =
    await Promise.all([
      frontmatterFiles("features"),
      frontmatterFiles("harnesses"),
      frontmatterFiles("specifications"),
      frontmatterFiles("categories"),
      frontmatterFiles("news"),
      frontmatterFiles("pages"),
    ]);

  const coverage = buildCoverageReport(
    features.map((entry) => featureSchema.parse(entry)),
    harnesses.map((entry) => harnessSchema.parse(entry))
  );
  const assessed = coverage.totals.assessed;
  const total = coverage.totals.total;
  const unknown = coverage.totals.unknown;
  const percentLabel = `${(coverage.totals.assessedShare * 100).toFixed(1)}%`;
  const coverageCard: SocialCard = {
    canonicalPath: "/coverage",
    eyebrow: "How much can we actually prove?",
    title: "Most of the map is still unknown.",
    description: `${assessed.toLocaleString("en-US")} of ${total.toLocaleString("en-US")} agent capability checks have direct reviewed evidence.`,
    meta: "Explore the living catalog",
    variant: "coverage",
    imageSlug: `coverage-frontier-${assessed}`,
    coverage: { assessed, total, unknown, percentLabel },
  };

  const cards: SocialCard[] = [
    ...SYSTEM_CARDS,
    coverageCard,
    ...features.map((entry) => ({
      canonicalPath: `/features/${stringValue(entry.slug)}`,
      eyebrow: "Capability compatibility",
      title: stringValue(entry.title, stringValue(entry.socialTitle)),
      description: stringValue(
        entry.summary,
        stringValue(entry.socialDescription, stringValue(entry.description))
      ),
      meta: `${stringValue(entry.specLabel, "Product capability")} · ${stringValue(entry.category)}`,
      compatibility: featureCompatibility(entry, harnesses),
    })),
    ...harnesses.map((entry) => ({
      canonicalPath: `/harnesses/${stringValue(entry.slug)}`,
      eyebrow: `${stringValue(entry.surface)} harness profile`,
      title: stringValue(entry.socialTitle, stringValue(entry.title)),
      description: stringValue(
        entry.socialDescription,
        stringValue(entry.description)
      ),
      meta: `${stringValue(entry.family)} · ${stringValue(entry.vendor)} · independent reference`,
    })),
    ...specifications.map((entry) => ({
      canonicalPath: `/specs/${stringValue(entry.slug)}`,
      eyebrow: "Specification reference",
      title: stringValue(entry.socialTitle, stringValue(entry.title)),
      description: stringValue(
        entry.socialDescription,
        stringValue(entry.description)
      ),
      meta: `${stringValue(entry.revision)} · ${stringValue(entry.maturity)}`,
    })),
    ...categories.map((entry) => ({
      canonicalPath: `/categories/${stringValue(entry.slug)}`,
      eyebrow: "Capability group",
      title: stringValue(entry.socialTitle, stringValue(entry.title)),
      description: stringValue(
        entry.socialDescription,
        stringValue(entry.description)
      ),
      meta: "Browse related compatibility rows",
    })),
    ...news.map((entry) => ({
      canonicalPath: `/news/${stringValue(entry.slug)}`,
      eyebrow: "Catalog news",
      title: stringValue(entry.socialTitle, stringValue(entry.title)),
      description: stringValue(
        entry.socialDescription,
        stringValue(entry.description)
      ),
      meta: stringValue(entry.published, "Catalog update"),
    })),
    ...pages.map((entry) => {
      const slug = stringValue(entry.slug);
      return {
        canonicalPath: slug === "home" ? "/" : `/${slug}`,
        eyebrow: "Can My Agent Use guide",
        title: stringValue(entry.socialTitle, stringValue(entry.title)),
        description: stringValue(
          entry.socialDescription,
          stringValue(entry.description)
        ),
        meta: "Independent · evidence-led · agent-readable",
      };
    }),
  ];

  return [...new Map(cards.map((card) => [card.canonicalPath, card])).values()];
}

async function main() {
  const cards = await collectCards();
  const coverageBackground = await readFile(coverageBackgroundPath);
  const coverageBackgroundDataUri = `data:image/png;base64,${Buffer.from(coverageBackground).toString("base64")}`;
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });

  const manifest: CardManifestEntry[] = await Promise.all(
    cards.map(async (card) => {
      const imagePath = socialPath(card);
      const outputPath = resolve(
        repositoryRoot,
        `sites/web/public${imagePath}`
      );
      const png = await sharp(
        Buffer.from(
          renderSocialCardSvg(card, {
            backgroundImageDataUri:
              card.variant === "coverage"
                ? coverageBackgroundDataUri
                : undefined,
          })
        )
      )
        .png({ quality: 92 })
        .toBuffer();
      await writeFile(outputPath, png);
      return {
        ...card,
        imagePath,
        alt: `${card.title} — an independent Can My Agent Use compatibility catalog card.`,
      };
    })
  );

  await writeFile(
    resolve(outputRoot, "manifest.json"),
    `${JSON.stringify({ schemaVersion: 1, items: manifest }, null, 2)}\n`,
    "utf8"
  );
  process.stdout.write(
    `Generated ${manifest.length} social cards in ${outputRoot}\n`
  );
}

await main();
