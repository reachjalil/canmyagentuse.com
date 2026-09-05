import { SITE } from "./site.ts";

export function normalizeSitePath(path: string): string {
  const pathname = path.split("?")[0]?.split("#")[0] || "/";
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export function absoluteUrl(path: string, siteUrl: string = SITE.url): string {
  return new URL(normalizeSitePath(path), `${siteUrl}/`).toString();
}

export function featurePath(slug: string): string {
  return `/features/${slug}`;
}

export function productPath(slug: string): string {
  return `/products/${slug}`;
}
export function productMarkdownPath(slug: string): string {
  return `/products/${slug}.md`;
}
export function productJsonPath(slug: string): string {
  return `/api/v1/products/${slug}.json`;
}

export function featureMarkdownPath(slug: string): string {
  return `/features/${slug}.md`;
}

export function featureJsonPath(slug: string): string {
  return `/api/v1/features/${slug}.json`;
}

export function harnessPath(slug: string): string {
  return `/harnesses/${slug}`;
}

export function harnessMarkdownPath(slug: string): string {
  return `/harnesses/${slug}.md`;
}

export function harnessJsonPath(slug: string): string {
  return `/api/v1/harnesses/${slug}.json`;
}

export function specificationPath(slug: string): string {
  return `/specs/${slug}`;
}

export function specificationMarkdownPath(slug: string): string {
  return `/specs/${slug}.md`;
}

export function specificationJsonPath(slug: string): string {
  return `/api/v1/specs/${slug}.json`;
}

export const agentPath = harnessPath;
export const agentMarkdownPath = harnessMarkdownPath;
export const agentJsonPath = harnessJsonPath;

export function categoryPath(slug: string): string {
  return `/categories/${slug}`;
}

export function categoryMarkdownPath(slug: string): string {
  return `/categories/${slug}.md`;
}

export function newsPath(slug: string): string {
  return `/news/${slug}`;
}

export function newsMarkdownPath(slug: string): string {
  return `/news/${slug}.md`;
}

export function reportPath(slug: string): string {
  return `/reports/${slug}`;
}

export function reportMarkdownPath(slug: string): string {
  return `/reports/${slug}.md`;
}

export function reportJsonPath(slug: string): string {
  return `/api/v1/reports/${slug}.json`;
}

export function pagePath(slug: string): string {
  if (slug === "home") return "/";
  return `/${slug}`;
}

export function pageMarkdownPath(slug: string): string {
  if (slug === "home") return "/index.md";
  return `/${slug}.md`;
}

const STATIC_MARKDOWN_PATHS = new Map<string, string>([
  ["/products", "/products.md"],
  ["/", "/index.md"],
  ["/features", "/features.md"],
  ["/harnesses", "/harnesses.md"],
  ["/specs", "/specs.md"],
  ["/news", "/news.md"],
  ["/reports", "/reports.md"],
  ["/about", "/about.md"],
  ["/sponsors", "/sponsors.md"],
  ["/methodology", "/methodology.md"],
  ["/privacy", "/privacy.md"],
  ["/harness-guide", "/harness-guide.md"],
  ["/compare", "/compare.md"],
  ["/matrix", "/matrix.md"],
  ["/evidence", "/evidence.md"],
  ["/atlas", "/atlas.md"],
  ["/atlas/sources", "/atlas/sources.md"],
  ["/coverage", "/coverage.md"],
  ["/search", "/search.md"],
  ["/tests", "/tests.md"],
  ["/changes", "/changes.md"],
  ["/contradictions", "/contradictions.md"],
  ["/contribute", "/contribute.md"],
  ["/report", "/report.md"],
  ["/submit-app", "/submit-app.md"],
  ["/provider-marks", "/provider-marks.md"],
  ["/press", "/press.md"],
  ["/prompt", "/prompt.md"],
]);

const DYNAMIC_MARKDOWN_PREFIXES = [
  "/products/",
  "/features/",
  "/harnesses/",
  "/specs/",
  "/categories/",
  "/news/",
  "/reports/",
  "/atlas/features/",
  "/atlas/surfaces/",
  "/atlas/vendors/",
] as const;

/**
 * Returns the explicit Markdown twin for a canonical public HTML route.
 * Unknown slugs under catalog prefixes are intentionally mapped so negotiated
 * requests can receive a deterministic Markdown 404 instead of an HTML shell.
 */
export function markdownPathForPagePath(path: string): string | undefined {
  const pathname = normalizeSitePath(path);
  const fixed = STATIC_MARKDOWN_PATHS.get(pathname);
  if (fixed) return fixed;
  if (
    DYNAMIC_MARKDOWN_PREFIXES.some((prefix) => pathname.startsWith(prefix)) &&
    !pathname.endsWith(".md")
  ) {
    return `${pathname}.md`;
  }
  return undefined;
}

/** Returns the canonical HTML route represented by an explicit Markdown URL. */
export function pagePathForMarkdownPath(path: string): string | undefined {
  const pathname = normalizeSitePath(path);
  for (const [htmlPath, markdownPath] of STATIC_MARKDOWN_PATHS) {
    if (markdownPath === pathname) return htmlPath;
  }
  if (
    pathname.endsWith(".md") &&
    DYNAMIC_MARKDOWN_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    return pathname.slice(0, -3);
  }
  return undefined;
}

/** Returns a JSON record or collection representing the same public route. */
export function jsonPathForPagePath(path: string): string | undefined {
  const pathname = normalizeSitePath(path);
  const fixed = new Map<string, string>([
    ["/products", MACHINE_PATHS.productsJson],
    ["/features", MACHINE_PATHS.featuresJson],
    ["/harnesses", MACHINE_PATHS.harnessesJson],
    ["/specs", MACHINE_PATHS.specificationsJson],
    ["/matrix", MACHINE_PATHS.matrixJson],
    ["/evidence", MACHINE_PATHS.evidenceJson],
    ["/atlas", MACHINE_PATHS.atlasJson],
    ["/atlas/sources", MACHINE_PATHS.atlasJson],
    ["/coverage", MACHINE_PATHS.coverageJson],
    ["/reports", MACHINE_PATHS.reportsJson],
    ["/tests", MACHINE_PATHS.testsJson],
    ["/changes", MACHINE_PATHS.changesJson],
    ["/contradictions", MACHINE_PATHS.contradictionsJson],
  ]);
  const known = fixed.get(pathname);
  if (known) return known;

  const detail = pathname.match(
    /^\/(products|features|harnesses|specs|reports)\/([a-z0-9]+(?:-[a-z0-9]+)*)$/
  );
  if (detail?.[1] && detail[2]) {
    return `/api/v1/${detail[1]}/${detail[2]}.json`;
  }

  const atlasDetail = pathname.match(
    /^\/atlas\/(features|surfaces|vendors)\/([a-z0-9]+(?:-[a-z0-9]+)*)$/
  );
  if (!atlasDetail?.[1] || !atlasDetail[2]) return undefined;
  return `/api/v1/atlas/${atlasDetail[1]}/${atlasDetail[2]}.json`;
}

export const MACHINE_PATHS = {
  productsJson: "/api/v1/products.json",
  llms: "/llms.txt",
  llmsFull: "/llms-full.txt",
  featuresLlms: "/features/llms.txt",
  harnessesLlms: "/harnesses/llms.txt",
  specificationsLlms: "/specs/llms.txt",
  newsLlms: "/news/llms.txt",
  sitemap: "/sitemap.xml",
  sitemapMarkdown: "/sitemap.md",
  robots: "/robots.txt",
  feedJson: "/feed.json",
  feedXml: "/feed.xml",
  manifest: "/manifest.webmanifest",
  opensearch: "/opensearch.xml",
  openapi: "/api/v1/openapi.json",
  apiCatalog: "/.well-known/api-catalog",
  apiRoot: "/api/v1/",
  agentSkillsIndex: "/.well-known/agent-skills/index.json",
  catalogSkill: "/skills/can-my-agent-use/SKILL.md",
  promptText: "/prompt.txt",
  featuresJson: "/api/v1/features.json",
  harnessesJson: "/api/v1/harnesses.json",
  specificationsJson: "/api/v1/specs.json",
  evidenceJson: "/api/v1/evidence.json",
  atlasJson: "/api/v1/atlas.json",
  coverageJson: "/api/v1/coverage.json",
  reportsJson: "/api/v1/reports.json",
  testsJson: "/api/v1/tests.json",
  changesJson: "/api/v1/changes.json",
  contradictionsJson: "/api/v1/contradictions.json",
  agentsJson: "/api/v1/harnesses.json",
  matrixJson: "/api/v1/matrix.json",
  health: "/api/health",
} as const;
