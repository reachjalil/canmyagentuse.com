import {
  absoluteUrl,
  featureMarkdownPath,
  featurePath,
  harnessMarkdownPath,
  harnessPath,
  MACHINE_PATHS,
  newsMarkdownPath,
  newsPath,
  pageMarkdownPath,
  pagePath,
  specificationMarkdownPath,
  specificationPath,
} from "./paths.ts";
import type {
  FeatureData,
  HarnessData,
  NewsData,
  PageData,
  SpecificationData,
} from "./schema.ts";
import { SITE } from "./site.ts";

export function toLlmsTxt(input: {
  features: readonly FeatureData[];
  harnesses: readonly HarnessData[];
  pages: readonly PageData[];
  specifications?: readonly SpecificationData[];
  news?: readonly NewsData[];
  siteUrl?: string;
}): string {
  const siteUrl = input.siteUrl ?? SITE.url;
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    SITE.foundationNotice,
    "",
    SITE.independentNotice,
    "",
    "## Machine-readable catalog",
    "",
    `- [Markdown index](${absoluteUrl(MACHINE_PATHS.llms, siteUrl)})`,
    `- [Full Markdown corpus](${absoluteUrl(MACHINE_PATHS.llmsFull, siteUrl)})`,
    `- [Markdown sitemap](${absoluteUrl(MACHINE_PATHS.sitemapMarkdown, siteUrl)})`,
    `- [API catalog](${absoluteUrl(MACHINE_PATHS.apiCatalog, siteUrl)})`,
    `- [OpenAPI](${absoluteUrl(MACHINE_PATHS.openapi, siteUrl)})`,
    `- [Features JSON](${absoluteUrl(MACHINE_PATHS.featuresJson, siteUrl)})`,
    `- [Harnesses JSON](${absoluteUrl(MACHINE_PATHS.harnessesJson, siteUrl)})`,
    `- [Support matrix JSON](${absoluteUrl(MACHINE_PATHS.matrixJson, siteUrl)})`,
    `- [Specifications JSON](${absoluteUrl(MACHINE_PATHS.specificationsJson, siteUrl)})`,
    `- [Evidence JSON](${absoluteUrl(MACHINE_PATHS.evidenceJson, siteUrl)})`,
    `- [Coverage JSON](${absoluteUrl(MACHINE_PATHS.coverageJson, siteUrl)})`,
    `- [Conformance test definitions](${absoluteUrl(MACHINE_PATHS.testsJson, siteUrl)})`,
    `- [Evidence Atlas JSON](${absoluteUrl(MACHINE_PATHS.atlasJson, siteUrl)})`,
    `- [Read-only catalog skill](${absoluteUrl(MACHINE_PATHS.catalogSkill, siteUrl)})`,
    "",
    "## Catalog sections",
    "",
    `- [Capabilities](${absoluteUrl(MACHINE_PATHS.featuresLlms, siteUrl)}): ${input.features.length} vendor-neutral capability records.`,
    `- [Harnesses](${absoluteUrl(MACHINE_PATHS.harnessesLlms, siteUrl)}): ${input.harnesses.length} exact web, desktop, and CLI surfaces.`,
    `- [Specifications](${absoluteUrl(MACHINE_PATHS.specificationsLlms, siteUrl)}): ${input.specifications?.length ?? 0} revision-aware references.`,
    `- [News](${absoluteUrl(MACHINE_PATHS.newsLlms, siteUrl)}): ${input.news?.length ?? 0} dated catalog updates.`,
  ];

  lines.push("", "## Pages", "");
  for (const page of input.pages) {
    lines.push(
      `- [${page.title}](${absoluteUrl(pageMarkdownPath(page.slug), siteUrl)}): ${page.llmSummary}`
    );
  }

  return `${lines.join("\n")}\n`;
}

export function toLlmsFullTxt(input: {
  features: readonly { data: FeatureData; body: string }[];
  harnesses: readonly { data: HarnessData; body: string }[];
  pages: readonly { data: PageData; body: string }[];
  specifications?: readonly { data: SpecificationData; body: string }[];
  news?: readonly { data: NewsData; body: string }[];
  siteUrl?: string;
}): string {
  const siteUrl = input.siteUrl ?? SITE.url;
  const sections = [`# ${SITE.name} corpus`, "", SITE.foundationNotice, ""];

  for (const feature of input.features) {
    sections.push(
      `## ${feature.data.title}`,
      "",
      `HTML: ${absoluteUrl(featurePath(feature.data.slug), siteUrl)}`,
      `Markdown: ${absoluteUrl(featureMarkdownPath(feature.data.slug), siteUrl)}`,
      "",
      feature.body.trim(),
      "",
      "---",
      ""
    );
  }

  for (const harness of input.harnesses) {
    sections.push(
      `## ${harness.data.title} (${harness.data.surface})`,
      "",
      `HTML: ${absoluteUrl(harnessPath(harness.data.slug), siteUrl)}`,
      `Markdown: ${absoluteUrl(harnessMarkdownPath(harness.data.slug), siteUrl)}`,
      "",
      harness.body.trim(),
      "",
      "---",
      ""
    );
  }

  for (const specification of input.specifications ?? []) {
    sections.push(
      `## ${specification.data.title}`,
      "",
      `HTML: ${absoluteUrl(specificationPath(specification.data.slug), siteUrl)}`,
      `Markdown: ${absoluteUrl(specificationMarkdownPath(specification.data.slug), siteUrl)}`,
      "",
      specification.body.trim(),
      "",
      "---",
      ""
    );
  }

  for (const page of input.pages) {
    sections.push(
      `## ${page.data.title}`,
      "",
      `HTML: ${absoluteUrl(pagePath(page.data.slug), siteUrl)}`,
      `Markdown: ${absoluteUrl(pageMarkdownPath(page.data.slug), siteUrl)}`,
      "",
      page.body.trim(),
      "",
      "---",
      ""
    );
  }

  for (const item of input.news ?? []) {
    sections.push(
      `## ${item.data.title}`,
      "",
      `HTML: ${absoluteUrl(newsPath(item.data.slug), siteUrl)}`,
      `Markdown: ${absoluteUrl(newsMarkdownPath(item.data.slug), siteUrl)}`,
      "",
      item.body.trim(),
      "",
      "---",
      ""
    );
  }

  return sections.join("\n");
}

export function toEntryMarkdown(input: {
  title: string;
  htmlPath: string;
  jsonPath?: string;
  markdownPath: string;
  llmSummary: string;
  contentKind?: string;
  locale?: string;
  description?: string;
  publishedAt?: Date | string;
  updatedAt?: Date | string;
  verifiedAt?: Date | string;
  tags?: readonly string[];
  body: string;
  siteUrl?: string;
}): string {
  const siteUrl = input.siteUrl ?? SITE.url;
  const dateValue = (value: Date | string | undefined): string | null => {
    if (!value) return null;
    return value instanceof Date ? value.toISOString() : value;
  };
  const canonical = absoluteUrl(input.htmlPath, siteUrl);
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(input.title)}`,
    `canonical: ${JSON.stringify(canonical)}`,
    `contentKind: ${JSON.stringify(input.contentKind ?? "page")}`,
    `locale: ${JSON.stringify(input.locale ?? SITE.defaultLocale)}`,
    `description: ${JSON.stringify(input.description ?? input.llmSummary)}`,
    `llmSummary: ${JSON.stringify(input.llmSummary)}`,
    `publishedAt: ${JSON.stringify(dateValue(input.publishedAt))}`,
    `updatedAt: ${JSON.stringify(dateValue(input.updatedAt))}`,
    `verifiedAt: ${JSON.stringify(dateValue(input.verifiedAt))}`,
    `tags: ${JSON.stringify(input.tags ?? [])}`,
    "---",
  ];
  const representationLinks = [
    `- HTML: ${canonical}`,
    `- Markdown: ${absoluteUrl(input.markdownPath, siteUrl)}`,
  ];
  if (input.jsonPath) {
    representationLinks.splice(
      1,
      0,
      `- JSON: ${absoluteUrl(input.jsonPath, siteUrl)}`
    );
  }
  return [
    ...frontmatter,
    "",
    `# ${input.title}`,
    "",
    input.llmSummary,
    "",
    ...representationLinks,
    "",
    input.body.trim(),
    "",
  ].join("\n");
}
