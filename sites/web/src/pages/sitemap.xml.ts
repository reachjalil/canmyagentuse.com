import type { APIRoute } from "astro";
import {
  MACHINE_PATHS,
  SITE,
  absoluteUrl,
  categoryPath,
  featurePath,
  harnessPath,
  newsPath,
  pagePath,
  specificationPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import {
  researchAtlas,
  researchFeaturePath,
  researchSurfacePath,
  researchVendorPath,
} from "../lib/research";
import { xmlResponse } from "../lib/security";

function urlEntry(
  path: string,
  changefreq: "daily" | "weekly" | "monthly",
  lastmod?: Date
) {
  const modified = lastmod
    ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>`
    : "";
  return `  <url><loc>${absoluteUrl(path, SITE.url)}</loc>${modified}<changefreq>${changefreq}</changefreq></url>`;
}

export const GET: APIRoute = async () => {
  const [features, harnesses, specifications, categories, pages, news] =
    await Promise.all([
      publishedCollection("features"),
      publishedCollection("harnesses"),
      publishedCollection("specifications"),
      publishedCollection("categories"),
      publishedCollection("pages"),
      publishedCollection("news"),
    ]);

  const allEntries = [
    ...features,
    ...harnesses,
    ...specifications,
    ...categories,
    ...pages,
    ...news,
  ];
  const catalogUpdated = new Date(
    Math.max(...allEntries.map((entry) => entry.data.updated.getTime()))
  );

  const urls = [
    urlEntry("/", "daily", catalogUpdated),
    urlEntry("/features", "daily", catalogUpdated),
    urlEntry("/harnesses", "daily", catalogUpdated),
    urlEntry("/compare", "weekly", catalogUpdated),
    urlEntry("/matrix", "daily", catalogUpdated),
    urlEntry("/specs", "weekly", catalogUpdated),
    urlEntry("/evidence", "daily", catalogUpdated),
    urlEntry("/atlas", "daily", new Date(researchAtlas.seed.research_cutoff)),
    urlEntry(
      "/atlas/sources",
      "weekly",
      new Date(researchAtlas.seed.research_cutoff)
    ),
    urlEntry("/coverage", "daily", catalogUpdated),
    urlEntry("/search", "weekly", catalogUpdated),
    urlEntry("/tests", "weekly", catalogUpdated),
    urlEntry("/changes", "weekly", catalogUpdated),
    urlEntry("/contradictions", "weekly", catalogUpdated),
    urlEntry("/contribute", "monthly", catalogUpdated),
    urlEntry("/report", "monthly", catalogUpdated),
    urlEntry("/provider-marks", "monthly", catalogUpdated),
    urlEntry("/news", "daily", catalogUpdated),
    urlEntry(MACHINE_PATHS.llms, "daily", catalogUpdated),
    urlEntry(MACHINE_PATHS.sitemapMarkdown, "daily", catalogUpdated),
    urlEntry(MACHINE_PATHS.apiCatalog, "weekly", catalogUpdated),
    urlEntry(MACHINE_PATHS.agentSkillsIndex, "weekly", catalogUpdated),
    urlEntry(MACHINE_PATHS.catalogSkill, "weekly", catalogUpdated),
    ...pages.map((page) =>
      urlEntry(pagePath(page.data.slug), "monthly", page.data.updated)
    ),
    ...categories.map((category) =>
      urlEntry(
        categoryPath(category.data.slug),
        "weekly",
        category.data.updated
      )
    ),
    ...news.map((item) =>
      urlEntry(newsPath(item.data.slug), "weekly", item.data.updated)
    ),
    ...features.map((feature) =>
      urlEntry(featurePath(feature.data.slug), "weekly", feature.data.updated)
    ),
    ...harnesses.map((harness) =>
      urlEntry(harnessPath(harness.data.slug), "weekly", harness.data.updated)
    ),
    ...specifications.map((specification) =>
      urlEntry(
        specificationPath(specification.data.slug),
        "weekly",
        specification.data.updated
      )
    ),
    ...researchAtlas.seed.vendors.map((vendor) =>
      urlEntry(
        researchVendorPath(vendor.vendor_id),
        "weekly",
        new Date(researchAtlas.seed.research_cutoff)
      )
    ),
    ...researchAtlas.seed.surfaces.map((surface) =>
      urlEntry(
        researchSurfacePath(surface.surface_id),
        "weekly",
        new Date(researchAtlas.seed.research_cutoff)
      )
    ),
    ...researchAtlas.seed.features.map((feature) =>
      urlEntry(
        researchFeaturePath(feature.feature_id),
        "weekly",
        new Date(researchAtlas.seed.research_cutoff)
      )
    ),
  ];

  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.w3.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`
  );
};
