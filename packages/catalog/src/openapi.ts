import { MACHINE_PATHS } from "./paths.ts";
import { SITE } from "./site.ts";
import {
  ASSESSMENT_BASES,
  ASSESSMENT_CONFIDENCES,
  EVIDENCE_TYPES,
  CAPABILITY_KINDS,
  ENVIRONMENT_PROFILE_IDS,
  HARNESS_SURFACES,
  QUALIFIER_TYPES,
  SUPPORT_STATUSES,
  SUPPORT_STAGES,
  FEATURE_RELATION_TYPES,
  TARGET_KINDS,
} from "./status.ts";

const reference = (name: string) => ({ $ref: `#/components/schemas/${name}` });
const jsonResponse = (schema: unknown, description: string) => ({
  description,
  headers: {
    "Access-Control-Allow-Origin": {
      description: "Public read-only catalog access.",
      schema: { type: "string", const: "*" },
    },
  },
  content: { "application/json": { schema } },
});
const slugParameter = {
  name: "slug",
  in: "path",
  required: true,
  description: "Stable catalog slug.",
  schema: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
};

const seoProperties = {
  title: { type: "string" },
  description: { type: "string" },
  slug: { type: "string" },
  locale: { type: "string", const: "en" },
  seoTitle: { type: "string" },
  socialTitle: { type: "string" },
  socialDescription: { type: "string" },
  canonicalPath: { type: "string" },
  previewImageAlt: { type: "string" },
  llmSummary: { type: "string" },
  audience: { type: "string" },
  contentKind: { type: "string" },
  status: { type: "string", enum: ["draft", "published"] },
  tags: { type: "array", items: { type: "string" } },
  updated: { type: "string", format: "date-time" },
  published: { type: "string", format: "date-time" },
};

const linkProperties = {
  html: { type: "string", description: "Root-relative human-readable page." },
  markdown: {
    type: "string",
    description: "Root-relative Markdown twin generated from the same record.",
  },
  json: { type: "string", description: "Root-relative JSON detail endpoint." },
};

export function catalogOpenApi() {
  return {
    openapi: "3.1.0",
    info: {
      title: `${SITE.name} Catalog API`,
      version: "1.2.0",
      summary: "Read-only compatibility catalog and evidence ledger.",
      description: `${SITE.description} Unknown means not yet sufficiently sourced; it does not mean unsupported. Documentation evidence is not runtime certification.`,
    },
    jsonSchemaDialect: "https://json-schema.org/draft/2020-12/schema",
    servers: [{ url: SITE.url, description: "Production catalog" }],
    externalDocs: {
      description: "Methodology and evidence rules",
      url: `${SITE.url}/methodology`,
    },
    tags: [
      {
        name: "Catalog",
        description:
          "Published capabilities, exact harness surfaces, and specifications.",
      },
      {
        name: "Evidence",
        description: "Coverage, source provenance, and support assertions.",
      },
      {
        name: "Research",
        description:
          "Proposed test definitions, changes, contradictions, and open questions.",
      },
      {
        name: "Evidence Atlas",
        description:
          "The full 2026-08-28 vendor, product, exact-surface, feature, source, and compatibility-cell research seed.",
      },
      { name: "Operations", description: "Minimal service health." },
    ],
    paths: {
      [MACHINE_PATHS.featuresJson]: {
        get: {
          operationId: "listFeatures",
          tags: ["Catalog"],
          summary: "List published capabilities",
          responses: {
            "200": jsonResponse(
              {
                type: "object",
                required: ["items"],
                properties: {
                  items: { type: "array", items: reference("FeatureSummary") },
                },
              },
              "Published capability collection."
            ),
          },
        },
      },
      "/api/v1/features/{slug}.json": {
        get: {
          operationId: "getFeature",
          tags: ["Catalog"],
          summary: "Get one capability with Markdown body",
          parameters: [slugParameter],
          responses: {
            "200": jsonResponse(
              reference("FeatureDetail"),
              "Capability record."
            ),
            "404": jsonResponse(reference("Error"), "Unknown capability slug."),
          },
        },
      },
      [MACHINE_PATHS.harnessesJson]: {
        get: {
          operationId: "listHarnesses",
          tags: ["Catalog"],
          summary: "List exact web, desktop, and CLI harness surfaces",
          responses: {
            "200": jsonResponse(
              {
                type: "object",
                required: ["items"],
                properties: {
                  items: { type: "array", items: reference("HarnessSummary") },
                },
              },
              "Published harness surface collection."
            ),
          },
        },
      },
      "/api/v1/harnesses/{slug}.json": {
        get: {
          operationId: "getHarness",
          tags: ["Catalog"],
          summary: "Get one exact harness surface with Markdown body",
          parameters: [slugParameter],
          responses: {
            "200": jsonResponse(
              reference("HarnessDetail"),
              "Harness surface record."
            ),
            "404": jsonResponse(reference("Error"), "Unknown harness slug."),
          },
        },
      },
      [MACHINE_PATHS.specificationsJson]: {
        get: {
          operationId: "listSpecifications",
          tags: ["Catalog"],
          summary:
            "List revision-aware specification and convention references",
          responses: {
            "200": jsonResponse(
              {
                type: "object",
                required: ["items"],
                properties: {
                  items: {
                    type: "array",
                    items: reference("SpecificationSummary"),
                  },
                },
              },
              "Published specification reference collection."
            ),
          },
        },
      },
      "/api/v1/specs/{slug}.json": {
        get: {
          operationId: "getSpecification",
          tags: ["Catalog"],
          summary: "Get one specification reference with Markdown body",
          parameters: [slugParameter],
          responses: {
            "200": jsonResponse(
              reference("SpecificationDetail"),
              "Specification reference."
            ),
            "404": jsonResponse(
              reference("Error"),
              "Unknown specification slug."
            ),
          },
        },
      },
      [MACHINE_PATHS.matrixJson]: {
        get: {
          operationId: "getMatrix",
          tags: ["Evidence"],
          summary: "Get the current and version-track support matrix",
          responses: {
            "200": jsonResponse(
              {
                type: "object",
                required: ["cells"],
                properties: {
                  cells: { type: "array", items: reference("MatrixCell") },
                },
              },
              "One cell per published capability and exact harness surface."
            ),
          },
        },
      },
      [MACHINE_PATHS.coverageJson]: {
        get: {
          operationId: "getCoverage",
          tags: ["Evidence"],
          summary: "Get catalog research completeness",
          description:
            "Counts sourced and explicit-unknown current-track cells. Coverage is not a product score.",
          responses: {
            "200": jsonResponse(
              reference("CoverageReport"),
              "Coverage by total, surface, capability, and harness."
            ),
          },
        },
      },
      [MACHINE_PATHS.evidenceJson]: {
        get: {
          operationId: "listEvidence",
          tags: ["Evidence"],
          summary: "List reviewed evidence and citing statements",
          responses: {
            "200": jsonResponse(
              {
                type: "object",
                required: ["evidenceClassNotice", "items"],
                properties: {
                  evidenceClassNotice: { type: "string" },
                  items: { type: "array", items: reference("EvidenceRecord") },
                },
              },
              "Evidence ledger with exact citing statements."
            ),
          },
        },
      },
      [MACHINE_PATHS.atlasJson]: {
        get: {
          operationId: "getEvidenceAtlas",
          tags: ["Evidence Atlas"],
          summary: "Get the full exact-surface research index",
          description:
            "Lists Atlas metadata, vendors, products, surfaces, atomic features, sources, registry entries, and proposed tests. Use the detail routes for compatibility cells.",
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Evidence Atlas index and discovery document."
            ),
          },
        },
      },
      "/api/v1/atlas/surfaces/{slug}.json": {
        get: {
          operationId: "getEvidenceAtlasSurface",
          tags: ["Evidence Atlas"],
          summary: "Get all atomic compatibility cells for one exact surface",
          parameters: [slugParameter],
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Exact surface, provider and product context, status counts, assertions, sources, and all feature cells."
            ),
          },
        },
      },
      "/api/v1/atlas/features/{slug}.json": {
        get: {
          operationId: "getEvidenceAtlasFeature",
          tags: ["Evidence Atlas"],
          summary: "Get one atomic feature across every exact surface",
          parameters: [slugParameter],
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Atomic feature, status counts, assertions, sources, and all exact-surface cells."
            ),
          },
        },
      },
      "/api/v1/atlas/vendors/{slug}.json": {
        get: {
          operationId: "getEvidenceAtlasVendor",
          tags: ["Evidence Atlas"],
          summary: "Get one vendor and its exact research surfaces",
          parameters: [slugParameter],
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Vendor inclusion basis, products, exact surfaces, and evidence-coverage counts."
            ),
          },
        },
      },
      [MACHINE_PATHS.testsJson]: {
        get: {
          operationId: "listConformanceTests",
          tags: ["Research"],
          summary: "List proposed conformance test definitions",
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Proposed, not-run test registry."
            ),
          },
        },
      },
      [MACHINE_PATHS.changesJson]: {
        get: {
          operationId: "listChanges",
          tags: ["Research"],
          summary: "List relevant ecosystem change events",
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Dated ecosystem change feed."
            ),
          },
        },
      },
      [MACHINE_PATHS.contradictionsJson]: {
        get: {
          operationId: "listContradictions",
          tags: ["Research"],
          summary: "List evidence conflicts and open governance questions",
          responses: {
            "200": jsonResponse(
              { type: "object" },
              "Contradiction and open-question ledger."
            ),
          },
        },
      },
      [MACHINE_PATHS.health]: {
        get: {
          operationId: "getHealth",
          tags: ["Operations"],
          summary: "Get service health",
          responses: {
            "200": jsonResponse(
              {
                type: "object",
                required: ["ok", "service"],
                properties: {
                  ok: { type: "boolean", const: true },
                  service: { type: "string", const: "canmyagentuse" },
                },
              },
              "Service is accepting requests."
            ),
          },
        },
      },
    },
    components: {
      schemas: {
        Status: { type: "string", enum: SUPPORT_STATUSES },
        SupportStage: { type: "string", enum: SUPPORT_STAGES },
        EvidenceType: { type: "string", enum: EVIDENCE_TYPES },
        AssessmentBasis: { type: "string", enum: ASSESSMENT_BASES },
        AssessmentConfidence: {
          type: "string",
          enum: ASSESSMENT_CONFIDENCES,
        },
        Target: {
          type: "object",
          required: ["kind", "revision"],
          properties: {
            kind: { type: "string", enum: TARGET_KINDS },
            revision: { type: "string" },
            observedAt: { type: "string", format: "date" },
          },
        },
        Qualifier: {
          type: "object",
          required: ["type", "value"],
          properties: {
            type: { type: "string", enum: QUALIFIER_TYPES },
            value: { type: "string" },
          },
        },
        EvidenceReference: {
          type: "object",
          required: ["resourceId", "type", "observedAt"],
          properties: {
            resourceId: { type: "string" },
            type: reference("EvidenceType"),
            observedAt: { type: "string", format: "date" },
          },
        },
        VersionCell: {
          type: "object",
          required: ["track", "status", "noteIds"],
          properties: {
            track: { type: "string" },
            status: reference("Status"),
            noteIds: { type: "array", items: { type: "integer" } },
            target: reference("Target"),
            environmentProfile: {
              type: "string",
              enum: ENVIRONMENT_PROFILE_IDS,
            },
            qualifiers: { type: "array", items: reference("Qualifier") },
            evidence: { type: "array", items: reference("EvidenceReference") },
            stage: reference("SupportStage"),
            assessmentBasis: reference("AssessmentBasis"),
            confidence: reference("AssessmentConfidence"),
            assessedAt: { type: "string", format: "date" },
            humanVerificationDesired: { type: "boolean" },
          },
        },
        SupportRow: {
          type: "object",
          required: ["harness"],
          properties: {
            harness: { type: "string" },
            status: reference("Status"),
            versions: { type: "array", items: reference("VersionCell") },
          },
        },
        Resource: {
          type: "object",
          required: ["title", "href", "kind"],
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            href: { type: "string", format: "uri-reference" },
            kind: { type: "string", enum: ["docs", "spec", "note"] },
            publisher: { type: "string" },
            evidenceType: reference("EvidenceType"),
            reviewedAt: { type: "string", format: "date" },
            locator: { type: "string" },
          },
        },
        FeatureSummary: {
          type: "object",
          required: [
            "title",
            "slug",
            "summary",
            "support",
            "html",
            "markdown",
            "json",
          ],
          properties: {
            ...seoProperties,
            ...linkProperties,
            category: { type: "string" },
            summary: { type: "string" },
            specLabel: { type: "string" },
            aliases: { type: "array", items: { type: "string" } },
            capabilityKind: { type: "string", enum: CAPABILITY_KINDS },
            parent: { type: "string" },
            related: { type: "array", items: { type: "string" } },
            relations: {
              type: "array",
              items: {
                type: "object",
                required: ["feature", "type"],
                properties: {
                  feature: { type: "string" },
                  type: { type: "string", enum: FEATURE_RELATION_TYPES },
                  note: { type: "string" },
                },
              },
            },
            highlight: { type: "boolean" },
            notes: { type: "array", items: { type: "object" } },
            issues: { type: "array", items: { type: "object" } },
            resources: { type: "array", items: reference("Resource") },
            support: { type: "array", items: reference("SupportRow") },
          },
        },
        FeatureDetail: {
          allOf: [
            reference("FeatureSummary"),
            {
              type: "object",
              required: ["body"],
              properties: { body: { type: "string" } },
            },
          ],
        },
        BrandReference: {
          type: "object",
          required: [
            "provider",
            "product",
            "productSlug",
            "mark",
            "fallback",
            "index",
          ],
          properties: {
            provider: { type: "string" },
            product: { type: ["string", "null"] },
            productSlug: { type: ["string", "null"] },
            mark: {
              oneOf: [
                {
                  type: "object",
                  required: ["id", "label", "path", "reviewedAt"],
                  properties: {
                    id: { type: "string" },
                    label: { type: "string" },
                    path: { type: "string", pattern: "^/provider-marks/" },
                    reviewedAt: { type: "string", format: "date" },
                  },
                },
                { type: "null" },
              ],
            },
            fallback: {
              type: "object",
              required: ["monogram", "tone"],
              properties: {
                monogram: { type: "string" },
                tone: { type: "string" },
              },
            },
            index: { type: "string", const: "/provider-marks" },
          },
        },
        HarnessSummary: {
          type: "object",
          required: [
            "title",
            "slug",
            "family",
            "vendor",
            "surface",
            "summary",
            "brand",
            "html",
            "markdown",
            "json",
          ],
          properties: {
            ...seoProperties,
            ...linkProperties,
            family: { type: "string" },
            vendor: { type: "string" },
            surface: { type: "string", enum: HARNESS_SURFACES },
            summary: { type: "string" },
            brand: reference("BrandReference"),
            tracks: { type: "array", items: { type: "string" } },
            order: { type: "integer" },
            homepage: { type: "string", format: "uri" },
            targetKind: {
              type: "string",
              enum: ["release", "hosted-observation"],
            },
            execution: { type: "string", enum: ["local", "hosted"] },
            defaultEnvironmentProfile: {
              type: "string",
              enum: ENVIRONMENT_PROFILE_IDS,
            },
          },
        },
        HarnessDetail: {
          allOf: [
            reference("HarnessSummary"),
            {
              type: "object",
              required: ["body"],
              properties: { body: { type: "string" } },
            },
          ],
        },
        SpecificationSummary: {
          type: "object",
          required: [
            "title",
            "slug",
            "authority",
            "revision",
            "maturity",
            "summary",
            "html",
            "markdown",
            "json",
          ],
          properties: {
            ...seoProperties,
            ...linkProperties,
            authority: { type: "string" },
            revision: { type: "string" },
            maturity: { type: "string" },
            structure: { type: "string" },
            sourceId: { type: "string" },
            canonicalUrl: { type: "string", format: "uri" },
            summary: { type: "string" },
            roles: { type: "array", items: { type: "string" } },
            aliases: { type: "array", items: { type: "string" } },
          },
        },
        SpecificationDetail: {
          allOf: [
            reference("SpecificationSummary"),
            {
              type: "object",
              required: ["body"],
              properties: { body: { type: "string" } },
            },
          ],
        },
        MatrixCell: {
          type: "object",
          required: ["feature", "harness", "status", "versions"],
          properties: {
            feature: { type: "string" },
            harness: { type: "string" },
            status: reference("Status"),
            versions: { type: "array", items: reference("VersionCell") },
          },
        },
        CoverageSlice: {
          type: "object",
          required: [
            "total",
            "assessed",
            "assessedShare",
            "sourced",
            "directEvidence",
            "directEvidenceShare",
            "unknown",
            "share",
            "supported",
            "partial",
            "unsupported",
            "notApplicable",
            "compatible",
            "compatibleShareOfAssessed",
          ],
          properties: {
            total: { type: "integer", minimum: 0 },
            assessed: { type: "integer", minimum: 0 },
            assessedShare: { type: "number", minimum: 0, maximum: 1 },
            sourced: { type: "integer", minimum: 0 },
            directEvidence: { type: "integer", minimum: 0 },
            directEvidenceShare: {
              type: "number",
              minimum: 0,
              maximum: 1,
            },
            unknown: { type: "integer", minimum: 0 },
            share: { type: "number", minimum: 0, maximum: 1 },
            supported: { type: "integer", minimum: 0 },
            partial: { type: "integer", minimum: 0 },
            unsupported: { type: "integer", minimum: 0 },
            notApplicable: { type: "integer", minimum: 0 },
            compatible: { type: "integer", minimum: 0 },
            compatibleShareOfAssessed: {
              type: "number",
              minimum: 0,
              maximum: 1,
            },
          },
        },
        CoverageReport: {
          type: "object",
          required: [
            "generatedFrom",
            "totals",
            "surfaces",
            "features",
            "harnesses",
          ],
          properties: {
            generatedFrom: { type: "string", const: "published-current-track" },
            totals: {
              allOf: [
                reference("CoverageSlice"),
                {
                  type: "object",
                  properties: {
                    features: { type: "integer" },
                    harnesses: { type: "integer" },
                  },
                },
              ],
            },
            surfaces: {
              type: "array",
              items: {
                allOf: [
                  reference("CoverageSlice"),
                  {
                    type: "object",
                    properties: {
                      surface: { type: "string", enum: HARNESS_SURFACES },
                      harnesses: { type: "integer" },
                    },
                  },
                ],
              },
            },
            features: {
              type: "array",
              items: {
                allOf: [
                  reference("CoverageSlice"),
                  {
                    type: "object",
                    properties: {
                      slug: { type: "string" },
                      title: { type: "string" },
                    },
                  },
                ],
              },
            },
            harnesses: {
              type: "array",
              items: {
                allOf: [
                  reference("CoverageSlice"),
                  {
                    type: "object",
                    properties: {
                      slug: { type: "string" },
                      title: { type: "string" },
                      surface: { type: "string", enum: HARNESS_SURFACES },
                    },
                  },
                ],
              },
            },
          },
        },
        EvidenceRecord: {
          type: "object",
          required: ["id", "title", "href", "kind", "feature", "statements"],
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            href: { type: "string", format: "uri-reference" },
            kind: { type: "string" },
            publisher: { type: "string" },
            evidenceType: reference("EvidenceType"),
            reviewedAt: { type: "string", format: "date" },
            locator: { type: "string" },
            feature: {
              type: "object",
              properties: {
                slug: { type: "string" },
                title: { type: "string" },
              },
            },
            statements: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  harness: { type: "string" },
                  track: { type: "string" },
                  status: reference("Status"),
                  observedAt: { type: "string", format: "date" },
                },
              },
            },
          },
        },
        Error: {
          type: "object",
          required: ["error"],
          properties: { error: { type: "string" } },
        },
      },
    },
  } as const;
}
