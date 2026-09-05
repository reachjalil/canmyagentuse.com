import {
  categoryPath,
  productPath,
  featurePath,
  harnessPath,
  newsPath,
  normalizeSitePath,
  pagePath,
  reportPath,
  specificationPath,
} from "./paths.ts";
import type { ContentKind, SeoFields } from "./status.ts";

export interface ResolvedMetadata {
  title: string;
  description: string;
  seoTitle: string;
  socialTitle: string;
  socialDescription: string;
  canonicalPath: string;
  locale: string;
  contentKind: ContentKind;
  previewImageAlt?: string;
  llmSummary: string;
  audience: string;
  tags: string[];
  published?: Date;
  updated: Date;
}

function defaultPath(kind: ContentKind, slug: string): string {
  switch (kind) {
    case "product":
      return productPath(slug);
    case "feature":
      return featurePath(slug);
    case "harness":
      return harnessPath(slug);
    case "specification":
      return specificationPath(slug);
    case "category":
      return categoryPath(slug);
    case "news":
      return newsPath(slug);
    case "report":
      return reportPath(slug);
    case "page":
      return pagePath(slug);
  }
}

export function resolveMetadata(entry: SeoFields): ResolvedMetadata {
  return {
    title: entry.title,
    description: entry.description,
    seoTitle: entry.seoTitle,
    socialTitle: entry.socialTitle,
    socialDescription: entry.socialDescription,
    canonicalPath: normalizeSitePath(
      entry.canonicalPath ?? defaultPath(entry.contentKind, entry.slug)
    ),
    locale: entry.locale,
    contentKind: entry.contentKind,
    previewImageAlt: entry.previewImageAlt,
    llmSummary: entry.llmSummary,
    audience: entry.audience,
    tags: entry.tags,
    published: entry.published,
    updated: entry.updated,
  };
}

export function isPublished(
  entry: { status?: string },
  includeDrafts = false
): boolean {
  return includeDrafts || entry.status !== "draft";
}
