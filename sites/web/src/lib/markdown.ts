import {
  reviewMarkdown,
  type CategoryData,
  type FeatureData,
  type HarnessData,
  type NewsData,
  type PageData,
  type ReportData,
  type StateOfHarnessesReport,
  type SpecificationData,
  SUPPORT_STATUS_LABELS,
  buildCapabilityProgress,
  capabilityNode,
  currentSupportSnapshot,
  categoryMarkdownPath,
  categoryPath,
  expandFeatureSupport,
  featureJsonPath,
  featureMarkdownPath,
  featurePath,
  harnessJsonPath,
  harnessMarkdownPath,
  harnessPath,
  newsMarkdownPath,
  newsPath,
  pageMarkdownPath,
  pagePath,
  reportJsonPath,
  reportMarkdownPath,
  reportPath,
  referenceIdentity,
  specificationJsonPath,
  specificationMarkdownPath,
  specificationPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { currentSupportSnippet } from "./support.ts";

type PortableEntry =
  | FeatureData
  | HarnessData
  | SpecificationData
  | CategoryData
  | PageData
  | NewsData
  | ReportData;

export function latestUpdatedAt(
  entries: readonly { updated: Date }[]
): Date | undefined {
  if (entries.length === 0) return undefined;
  return new Date(Math.max(...entries.map((entry) => entry.updated.getTime())));
}

export function generatedPageMarkdown(input: {
  title: string;
  path: string;
  markdownPath?: string;
  jsonPath?: string;
  description: string;
  llmSummary?: string;
  body: string;
  updatedAt?: Date | string;
}): string {
  return toEntryMarkdown({
    title: input.title,
    htmlPath: input.path,
    markdownPath: input.markdownPath ?? `${input.path}.md`,
    jsonPath: input.jsonPath,
    llmSummary: input.llmSummary ?? input.description,
    contentKind: "page",
    locale: "en",
    description: input.description,
    updatedAt: input.updatedAt,
    body: input.body,
  });
}

function isoDate(value: Date | string | undefined): string | undefined {
  if (!value) return undefined;
  return value instanceof Date ? value.toISOString() : value;
}

export function latestFeatureVerification(
  feature: FeatureData
): string | undefined {
  return feature.support
    .flatMap((row) => row.versions ?? [])
    .flatMap((version) => version.evidence ?? [])
    .map((evidence) => evidence.observedAt)
    .toSorted()
    .at(-1);
}

function metadata(entry: PortableEntry) {
  return {
    contentKind: entry.contentKind,
    locale: entry.locale,
    description: entry.description,
    publishedAt: isoDate(entry.published),
    updatedAt: isoDate(entry.updated),
    tags: entry.tags,
  };
}

function featureAssertions(
  feature: FeatureData,
  harnesses: readonly HarnessData[]
): string {
  const resources = new Map(
    feature.resources
      .filter((resource) => resource.id)
      .map((resource) => [resource.id as string, resource] as const)
  );
  const lines = [
    "## Compatibility assertions",
    "",
    "Unknown means insufficient published evidence; it does not mean unsupported.",
    "",
  ];

  for (const column of expandFeatureSupport(feature, harnesses)) {
    lines.push(
      `### ${column.harness.title} (${column.harness.surface})`,
      "",
      `- Harness: [${column.harness.title}](${harnessMarkdownPath(column.harness.slug)})`
    );
    for (const version of column.versions) {
      lines.push(
        `- ${version.track}: **${SUPPORT_STATUS_LABELS[version.status]}**`
      );
      if (version.target) {
        const observed = version.target.observedAt
          ? `; observed ${version.target.observedAt}`
          : "";
        lines.push(
          `  - Target: ${version.target.kind} — ${version.target.revision}${observed}`
        );
      }
      if (version.environmentProfile) {
        lines.push(`  - Environment: ${version.environmentProfile}`);
      }
      for (const qualifier of version.qualifiers ?? []) {
        lines.push(`  - Constraint (${qualifier.type}): ${qualifier.value}`);
      }
      for (const evidence of version.evidence ?? []) {
        const resource = resources.get(evidence.resourceId);
        const label = resource?.title ?? evidence.resourceId;
        const target = resource?.href ?? "#evidence";
        lines.push(
          `  - Evidence: [${label}](${target}) — ${evidence.type}; observed ${evidence.observedAt}`
        );
      }
      for (const noteId of version.noteIds) {
        const note = feature.notes.find((candidate) => candidate.id === noteId);
        if (note) lines.push(`  - Qualification note ${note.id}: ${note.text}`);
      }
    }
    lines.push("");
  }
  return lines.join("\n");
}

export function featureMarkdown(input: {
  feature: FeatureData;
  features?: readonly FeatureData[];
  harnesses: readonly HarnessData[];
  body: string;
}): string {
  const { feature, features = [input.feature], harnesses, body } = input;
  const graph = capabilityNode(feature.slug, features);
  if (feature.capabilityKind === "family") {
    const progress = buildCapabilityProgress(feature.slug, features, harnesses);
    const broadSupport = currentSupportSnapshot(
      expandFeatureSupport(feature, harnesses)
    );
    const childLines = (graph?.children ?? []).map(
      (child) =>
        `- [${child.title}](${featureMarkdownPath(child.slug)}) — ${child.summary}`
    );
    const progressLines = progress.map((item) => {
      const harness = harnesses.find(
        (candidate) => candidate.slug === item.harness
      );
      return `- [${harness?.title ?? item.harness}](${harnessMarkdownPath(item.harness)}): ${item.supported}/${item.total} supported or partial; ${item.reviewed}/${item.total} reviewed; yes ${item.counts.yes}, partial ${item.counts.partial}, no ${item.counts.no}, unknown ${item.counts.unknown}`;
    });
    return toEntryMarkdown({
      title: feature.title,
      htmlPath: featurePath(feature.slug),
      jsonPath: featureJsonPath(feature.slug),
      markdownPath: featureMarkdownPath(feature.slug),
      llmSummary: feature.llmSummary,
      body: [
        "Terminology basis: Catalog grouping with an optional broad practical assessment. Exact standard-format behaviors remain independent child checks.",
        "",
        body.trim(),
        ...(feature.support.length > 0
          ? [
              "",
              "## Broad practical assessment",
              "",
              currentSupportSnippet(feature.title, broadSupport),
              "",
              `- Assessed current products: ${broadSupport.assessed} of ${broadSupport.total}`,
              `- Direct reviewed evidence: ${broadSupport.directEvidence} of ${broadSupport.total}`,
              `- Supported: ${broadSupport.counts.yes}`,
              `- Partial: ${broadSupport.counts.partial}`,
              `- Unsupported: ${broadSupport.counts.no}`,
              `- Unknown: ${broadSupport.counts.unknown}`,
              `- Not applicable: ${broadSupport.counts.na}`,
              "",
              featureAssertions(feature, harnesses),
            ]
          : []),
        "",
        "## Atomic capabilities",
        "",
        ...childLines,
        "",
        "## Current family progress by product",
        "",
        "Child progress is derived from atomic records and remains independent of any broad practical assessment.",
        "",
        ...progressLines,
      ].join("\n"),
      ...metadata(feature),
    });
  }
  const currentSupport = currentSupportSnapshot(
    expandFeatureSupport(feature, harnesses)
  );
  const specification = feature.specification
    ? `- Specification: [${feature.specification.id}](${specificationMarkdownPath(feature.specification.id)}) — revision ${feature.specification.revision}`
    : `- Terminology basis: ${feature.specLabel}`;
  const terminologyReference =
    feature.specification?.canonicalUrl ??
    feature.resources.find((resource) => resource.href.startsWith("https://"))
      ?.href;
  const details = [
    `Terminology basis: **${feature.specLabel}**${terminologyReference ? ` — ${terminologyReference}` : ""}.`,
    "",
    "## Current support at a glance",
    "",
    currentSupportSnippet(feature.title, currentSupport),
    "",
    `- Assessed current products: ${currentSupport.assessed} of ${currentSupport.total}`,
    `- Direct reviewed evidence: ${currentSupport.directEvidence} of ${currentSupport.total}`,
    `- Supported: ${currentSupport.counts.yes}`,
    `- Partial: ${currentSupport.counts.partial}`,
    `- Unsupported: ${currentSupport.counts.no}`,
    `- Unreviewed: ${currentSupport.counts.unknown}`,
    `- Not applicable: ${currentSupport.counts.na}`,
    "",
    "Unknown or unreviewed means insufficient published evidence; it does not mean unsupported.",
    "",
    body.trim(),
    "",
    "## Catalog context",
    "",
    `- Category: [${feature.category}](${categoryMarkdownPath(feature.category)})`,
    specification,
    `- Aliases: ${feature.aliases.length ? feature.aliases.join(", ") : "None"}`,
    ...(graph?.parent
      ? [
          `- Family: [${graph.parent.title}](${featureMarkdownPath(graph.parent.slug)})`,
          `- Siblings: ${graph.siblings.length ? graph.siblings.map((sibling) => `[${sibling.title}](${featureMarkdownPath(sibling.slug)})`).join(", ") : "None"}`,
        ]
      : []),
    "",
    featureAssertions(feature, harnesses),
  ].join("\n");

  return toEntryMarkdown({
    title: feature.title,
    htmlPath: featurePath(feature.slug),
    jsonPath: featureJsonPath(feature.slug),
    markdownPath: featureMarkdownPath(feature.slug),
    llmSummary: feature.llmSummary,
    verifiedAt: latestFeatureVerification(feature),
    body: details,
    ...metadata(feature),
  });
}

export function harnessMarkdown(input: {
  harness: HarnessData;
  harnesses: readonly HarnessData[];
  features: readonly FeatureData[];
  body: string;
}): string {
  const { harness, harnesses, features, body } = input;
  const brand = referenceIdentity({
    provider: harness.vendor,
    product: harness.title,
    productSlug: harness.slug,
  });
  const atomicFeatures = features.filter(
    (feature) => feature.capabilityKind === "atomic"
  );
  const capabilityRows = atomicFeatures.map((feature) => {
    const column = expandFeatureSupport(feature, harnesses).find(
      (candidate) => candidate.harness.slug === harness.slug
    );
    const versions = column?.versions ?? [];
    const current =
      versions.find((version) => version.track === "current") ?? versions[0];
    return { feature, versions, current };
  });
  const familyAssertions = features
    .filter((feature) => feature.capabilityKind === "family")
    .map((feature) => {
      const progress = buildCapabilityProgress(
        feature.slug,
        features,
        harnesses
      ).find((candidate) => candidate.harness === harness.slug);
      return `- [${feature.title}](${featureMarkdownPath(feature.slug)}): derived current family progress; ${progress?.supported ?? 0}/${progress?.total ?? 0} supported or partial; ${progress?.reviewed ?? 0}/${progress?.total ?? 0} reviewed`;
    });
  const assertions = capabilityRows.map(
    ({ feature, versions }) =>
      `- [${feature.title}](${featureMarkdownPath(feature.slug)}): ${versions
        .map(
          (version) =>
            `${version.track} ${SUPPORT_STATUS_LABELS[version.status].toLowerCase()}`
        )
        .join("; ")}`
  );
  const currentCounts = {
    yes: 0,
    partial: 0,
    no: 0,
    unknown: 0,
    na: 0,
  };
  const currentSourceUrls = new Set<string>();
  let latestCurrentEvidence: string | undefined;
  for (const { feature, current } of capabilityRows) {
    const status = current?.status ?? "unknown";
    currentCounts[status] += 1;
    for (const evidence of current?.evidence ?? []) {
      if (
        !latestCurrentEvidence ||
        evidence.observedAt > latestCurrentEvidence
      ) {
        latestCurrentEvidence = evidence.observedAt;
      }
      const resource = feature.resources.find(
        (candidate) => candidate.id === evidence.resourceId
      );
      if (resource?.href.startsWith("https://")) {
        currentSourceUrls.add(resource.href);
      }
    }
  }
  const reviewed = atomicFeatures.length - currentCounts.unknown;
  return toEntryMarkdown({
    title: harness.title,
    htmlPath: harnessPath(harness.slug),
    jsonPath: harnessJsonPath(harness.slug),
    markdownPath: harnessMarkdownPath(harness.slug),
    llmSummary: harness.llmSummary,
    body: [
      body.trim(),
      "",
      "## Exact surface",
      "",
      `- Family: ${harness.family}`,
      `- Provider: ${harness.vendor}`,
      `- Surface: ${harness.surface}`,
      `- Execution: ${harness.execution}`,
      `- Target type: ${harness.targetKind}`,
      `- Default environment: ${harness.defaultEnvironmentProfile}`,
      `- Tracks: ${harness.tracks.join(", ")}`,
      `- Product site: ${harness.homepage ?? "Not recorded"}`,
      `- Brand reference: ${brand.mark ? `[${brand.mark.label}](/provider-marks#${brand.mark.id})` : "Text fallback"}`,
      "",
      "## Current support summary",
      "",
      `- Reviewed: ${reviewed}/${atomicFeatures.length}`,
      `- Supported: ${currentCounts.yes}`,
      `- Partial: ${currentCounts.partial}`,
      `- Unsupported: ${currentCounts.no}`,
      `- Unknown: ${currentCounts.unknown}`,
      `- Not applicable: ${currentCounts.na}`,
      `- Unique public sources: ${currentSourceUrls.size}`,
      `- Latest current evidence: ${latestCurrentEvidence ?? "Review pending"}`,
      "",
      "## Capability family summaries",
      "",
      "Family summaries are derived from atomic child records; no umbrella compatibility value is authored.",
      "",
      ...familyAssertions,
      "",
      "## Atomic capability assertions",
      "",
      "Unknown means insufficient published evidence; it does not mean unsupported.",
      "",
      ...assertions,
    ].join("\n"),
    ...metadata(harness),
  });
}

export function specificationMarkdown(input: {
  specification: SpecificationData;
  body: string;
}): string {
  const { specification, body } = input;
  return toEntryMarkdown({
    title: specification.title,
    htmlPath: specificationPath(specification.slug),
    jsonPath: specificationJsonPath(specification.slug),
    markdownPath: specificationMarkdownPath(specification.slug),
    llmSummary: specification.llmSummary,
    body: [
      body.trim(),
      "",
      "## Revision identity",
      "",
      `- Authority: ${specification.authority}`,
      `- Revision: ${specification.revision}`,
      `- Maturity: ${specification.maturity}`,
      `- Structure: ${specification.structure}`,
      `- Canonical specification: ${specification.canonicalUrl}`,
      `- Roles: ${specification.roles.join(", ") || "Not recorded"}`,
    ].join("\n"),
    ...metadata(specification),
  });
}

export function pageEntryMarkdown(input: {
  page: PageData;
  body: string;
}): string {
  return toEntryMarkdown({
    title: input.page.title,
    htmlPath: pagePath(input.page.slug),
    markdownPath: pageMarkdownPath(input.page.slug),
    llmSummary: input.page.llmSummary,
    body: input.body,
    ...metadata(input.page),
  });
}

export function newsEntryMarkdown(input: {
  item: NewsData;
  body: string;
}): string {
  return toEntryMarkdown({
    title: input.item.title,
    htmlPath: newsPath(input.item.slug),
    markdownPath: newsMarkdownPath(input.item.slug),
    llmSummary: input.item.llmSummary,
    body: [reviewMarkdown(input.item.review), input.body]
      .filter(Boolean)
      .join("\n\n"),
    ...metadata(input.item),
  });
}

export function reportEntryMarkdown(input: {
  report: ReportData;
  body: string;
  snapshot: StateOfHarnessesReport;
}): string {
  const { report, snapshot } = input;
  const body = input.body.replace(
    /<div\s+data-report-chart="[^"]+"\s*><\/div>/g,
    ""
  );
  const surfaceRows = snapshot.surfaceGroups.map(
    (row) =>
      `| ${row.label} | ${row.surfaces} | ${row.statuses.sourced} | ${row.statuses.supported} | ${row.statuses.partial} | ${row.statuses.unsupported} | ${row.statuses.unknown} | ${(row.statuses.coverage * 100).toFixed(1)}% |`
  );
  const featureRows = snapshot.featureGroups.map(
    (row) =>
      `| ${row.label} | ${row.features} | ${row.statuses.sourced} | ${row.statuses.positive} | ${row.statuses.unsupported} | ${row.statuses.unknown} | ${(row.statuses.coverage * 100).toFixed(1)}% |`
  );
  return toEntryMarkdown({
    title: report.title,
    htmlPath: reportPath(report.slug),
    jsonPath: reportJsonPath(report.slug),
    markdownPath: reportMarkdownPath(report.slug),
    llmSummary: report.llmSummary,
    verifiedAt: report.snapshotDate,
    body: [
      body.trim(),
      "",
      "## Report data appendix",
      "",
      `- Research cutoff: ${snapshot.researchCutoff}`,
      `- Vendors: ${snapshot.totals.vendors}`,
      `- Products: ${snapshot.totals.products}`,
      `- Exact surfaces: ${snapshot.totals.surfaces}`,
      `- Atomic features: ${snapshot.totals.features}`,
      `- Compatibility cells: ${snapshot.totals.compatibilityCells}`,
      `- Reviewed cells: ${snapshot.statuses.sourced}`,
      `- Supported: ${snapshot.statuses.supported}`,
      `- Partial: ${snapshot.statuses.partial}`,
      `- Explicit unsupported: ${snapshot.statuses.unsupported}`,
      `- Unknown: ${snapshot.statuses.unknown}`,
      `- Evidence coverage: ${(snapshot.statuses.coverage * 100).toFixed(1)}%`,
      `- Public source records: ${snapshot.totals.sources}`,
      `- Long-form assertions: ${snapshot.totals.assertions}`,
      "",
      "### Surface groups",
      "",
      "| Surface group | Surfaces | Reviewed | Supported | Partial | Unsupported | Unknown | Coverage |",
      "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
      ...surfaceRows,
      "",
      "### Feature groups",
      "",
      "| Feature group | Features | Reviewed | Supported or partial | Unsupported | Unknown | Coverage |",
      "| --- | ---: | ---: | ---: | ---: | ---: | ---: |",
      ...featureRows,
    ].join("\n"),
    ...metadata(report),
  });
}

export function categoryEntryMarkdown(input: {
  category: CategoryData;
  features: readonly FeatureData[];
  body: string;
}): string {
  const items = input.features
    .filter((feature) => feature.category === input.category.slug)
    .map(
      (feature) =>
        `- [${feature.title}](${featureMarkdownPath(feature.slug)}) — ${feature.llmSummary}`
    );
  return toEntryMarkdown({
    title: input.category.title,
    htmlPath: categoryPath(input.category.slug),
    markdownPath: categoryMarkdownPath(input.category.slug),
    llmSummary: input.category.llmSummary,
    body: [input.body.trim(), "", "## Capabilities", "", ...items].join("\n"),
    ...metadata(input.category),
  });
}
