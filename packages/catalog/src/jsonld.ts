import { absoluteUrl } from "./paths.ts";
import type { ResolvedMetadata } from "./metadata.ts";
import { SITE } from "./site.ts";

export interface JsonLdSite {
  name: string;
  url: string;
}

export function websiteJsonLd(site: JsonLdSite = SITE) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: SITE.description,
    inLanguage: SITE.defaultLocale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd(site: JsonLdSite = SITE) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: SITE.independentNotice,
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
  site: JsonLdSite = SITE
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site.url),
    })),
  };
}

export function techArticleJsonLd(
  metadata: ResolvedMetadata,
  site: JsonLdSite = SITE
) {
  const url = absoluteUrl(metadata.canonicalPath, site.url);
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: metadata.seoTitle,
    description: metadata.socialDescription,
    url,
    inLanguage: metadata.locale,
    abstract: metadata.llmSummary,
    audience: metadata.audience,
    keywords: metadata.tags,
    dateModified: metadata.updated.toISOString(),
    ...(metadata.published
      ? { datePublished: metadata.published.toISOString() }
      : {}),
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

export function datasetJsonLd(cells: number, site: JsonLdSite = SITE) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${site.name} support matrix`,
    description: SITE.description,
    url: site.url,
    license: `${site.url}/about`,
    creator: organizationJsonLd(site),
    variableMeasured: "Harness capability support",
    size: String(cells),
  };
}
