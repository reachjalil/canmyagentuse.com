import {
  type CategoryData,
  type FeatureData,
  type HarnessData,
  type NewsData,
  type PageData,
  type SpecificationData,
  SUPPORT_STATUS_LABELS,
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
  specificationJsonPath,
  specificationMarkdownPath,
  specificationPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";

type PortableEntry =
  | FeatureData
  | HarnessData
  | SpecificationData
  | CategoryData
  | PageData
  | NewsData;

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
  harnesses: readonly HarnessData[];
  body: string;
}): string {
  const { feature, harnesses, body } = input;
  const specification = feature.specification
    ? `- Specification: [${feature.specification.id}](${specificationMarkdownPath(feature.specification.id)}) — revision ${feature.specification.revision}`
    : `- Specification: ${feature.specLabel}`;
  const details = [
    body.trim(),
    "",
    "## Catalog context",
    "",
    `- Category: [${feature.category}](${categoryMarkdownPath(feature.category)})`,
    specification,
    `- Aliases: ${feature.aliases.length ? feature.aliases.join(", ") : "None"}`,
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
  const assertions = features.map((feature) => {
    const column = expandFeatureSupport(feature, harnesses).find(
      (candidate) => candidate.harness.slug === harness.slug
    );
    const versions = column?.versions ?? [];
    return `- [${feature.title}](${featureMarkdownPath(feature.slug)}): ${versions
      .map(
        (version) =>
          `${version.track} ${SUPPORT_STATUS_LABELS[version.status].toLowerCase()}`
      )
      .join("; ")}`;
  });
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
      `- Default environment: ${harness.defaultEnvironmentProfile}`,
      `- Tracks: ${harness.tracks.join(", ")}`,
      "",
      "## Capability assertions",
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
    body: input.body,
    ...metadata(input.item),
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
