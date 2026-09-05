import { MACHINE_PATHS, absoluteUrl } from "./paths.ts";
import { SITE } from "./site.ts";

export const API_CATALOG_PROFILE = "https://www.rfc-editor.org/info/rfc9727";

const JSON_ENDPOINTS = [
  MACHINE_PATHS.productsJson,
  MACHINE_PATHS.featuresJson,
  MACHINE_PATHS.harnessesJson,
  MACHINE_PATHS.specificationsJson,
  MACHINE_PATHS.matrixJson,
  MACHINE_PATHS.evidenceJson,
  MACHINE_PATHS.coverageJson,
  MACHINE_PATHS.reportsJson,
  MACHINE_PATHS.testsJson,
  MACHINE_PATHS.changesJson,
  MACHINE_PATHS.contradictionsJson,
  MACHINE_PATHS.atlasJson,
] as const;

export function catalogApiLinkset(siteUrl: string = SITE.url) {
  return {
    linkset: [
      {
        anchor: absoluteUrl(MACHINE_PATHS.apiRoot, siteUrl),
        item: JSON_ENDPOINTS.map((path) => ({
          href: absoluteUrl(path, siteUrl),
          type: "application/json",
        })),
        "service-desc": [
          {
            href: absoluteUrl(MACHINE_PATHS.openapi, siteUrl),
            type: "application/vnd.oai.openapi+json",
          },
        ],
        "service-doc": [
          {
            href: absoluteUrl("/methodology", siteUrl),
            type: "text/html",
          },
        ],
        "service-meta": [
          {
            href: absoluteUrl(MACHINE_PATHS.llms, siteUrl),
            type: "text/plain",
          },
          {
            href: absoluteUrl("/privacy", siteUrl),
            type: "text/html",
          },
        ],
        status: [
          {
            href: absoluteUrl(MACHINE_PATHS.health, siteUrl),
            type: "application/json",
          },
        ],
      },
    ],
  };
}

export function catalogApiIndex(siteUrl: string = SITE.url) {
  return {
    name: `${SITE.name} Catalog API`,
    version: "v1",
    stability: "stable",
    readOnly: true,
    description:
      "Evidence-backed compatibility records. Unknown means insufficient published evidence, not unsupported.",
    apiCatalog: absoluteUrl(MACHINE_PATHS.apiCatalog, siteUrl),
    openapi: absoluteUrl(MACHINE_PATHS.openapi, siteUrl),
    documentation: absoluteUrl("/methodology", siteUrl),
    endpoints: JSON_ENDPOINTS.map((path) => absoluteUrl(path, siteUrl)),
  };
}
