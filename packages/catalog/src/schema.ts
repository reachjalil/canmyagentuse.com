import { z } from "zod";
import { reviewSchema } from "./review.ts";
import { LOCALES } from "./site.ts";
import {
  ASSESSMENT_BASES,
  ASSESSMENT_CONFIDENCES,
  CONTENT_KINDS,
  CAPABILITY_KINDS,
  EVIDENCE_TYPES,
  ENVIRONMENT_PROFILE_IDS,
  HARNESS_SURFACES,
  PUBLICATION_STATUSES,
  QUALIFIER_TYPES,
  SUPPORT_STATUSES,
  SUPPORT_STAGES,
  FEATURE_RELATION_TYPES,
  TARGET_KINDS,
} from "./status.ts";

const localeSchema = z.enum(LOCALES);

export function seoSchema<TKind extends (typeof CONTENT_KINDS)[number]>(
  kind: TKind
) {
  return z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    slug: z.string().min(1),
    locale: localeSchema,
    seoTitle: z.string().min(1),
    socialTitle: z.string().min(1),
    socialDescription: z.string().min(1),
    canonicalPath: z.string().optional(),
    previewImageAlt: z.string().optional(),
    llmSummary: z.string().min(1),
    audience: z.string().min(1),
    contentKind: z.enum(CONTENT_KINDS).default(kind),
    status: z.enum(PUBLICATION_STATUSES).default("published"),
    tags: z.array(z.string()).default([]),
    updated: z.coerce.date(),
    published: z.coerce.date().optional(),
  });
}

const dateStampSchema = z
  .union([
    z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Use an ISO date in YYYY-MM-DD form.",
    }),
    z.date(),
  ])
  .transform((value) =>
    value instanceof Date ? value.toISOString().slice(0, 10) : value
  );

export const supportTargetSchema = z
  .object({
    kind: z.enum(TARGET_KINDS),
    revision: z.string().min(1),
    observedAt: dateStampSchema.optional(),
  })
  .superRefine((target, context) => {
    if (target.kind === "hosted-observation" && !target.observedAt) {
      context.addIssue({
        code: "custom",
        message: "A hosted observation target needs an observation date.",
        path: ["observedAt"],
      });
    }
  });

export const supportQualifierSchema = z.object({
  type: z.enum(QUALIFIER_TYPES),
  value: z.string().min(1),
});

export const evidenceReferenceSchema = z.object({
  resourceId: z.string().min(1),
  type: z.enum(EVIDENCE_TYPES),
  observedAt: dateStampSchema,
});

export const versionCellSchema = z.object({
  track: z.string().min(1),
  status: z.enum(SUPPORT_STATUSES),
  noteIds: z.array(z.number().int()).default([]),
  target: supportTargetSchema.optional(),
  environmentProfile: z.enum(ENVIRONMENT_PROFILE_IDS).optional(),
  qualifiers: z.array(supportQualifierSchema).default([]),
  evidence: z.array(evidenceReferenceSchema).default([]),
  stage: z.enum(SUPPORT_STAGES).optional(),
  assessmentBasis: z.enum(ASSESSMENT_BASES).optional(),
  confidence: z.enum(ASSESSMENT_CONFIDENCES).optional(),
  assessedAt: dateStampSchema.optional(),
  humanVerificationDesired: z.boolean().optional(),
});

export const featureRelationSchema = z.object({
  feature: z.string().min(1),
  type: z.enum(FEATURE_RELATION_TYPES),
  note: z.string().min(1).optional(),
});

export const supportRowSchema = z.object({
  harness: z.string().min(1),
  status: z.enum(SUPPORT_STATUSES).optional(),
  versions: z.array(versionCellSchema).optional(),
});

export const catalogNoteSchema = z.object({
  id: z.number().int(),
  text: z.string().min(1),
});

export const catalogResourceSchema = z.object({
  id: z.string().min(1).optional(),
  title: z.string().min(1),
  href: z
    .string()
    .refine(
      (value) =>
        value.startsWith("/") || z.string().url().safeParse(value).success,
      { message: "Use an absolute URL or a root-relative site path." }
    ),
  kind: z.enum(["docs", "spec", "note"]).default("note"),
  publisher: z.string().min(1).optional(),
  evidenceType: z.enum(EVIDENCE_TYPES).optional(),
  reviewedAt: dateStampSchema.optional(),
  locator: z.string().min(1).optional(),
});

export const specificationReferenceSchema = z.object({
  id: z.string().min(1),
  revision: z.string().min(1),
  maturity: z.string().min(1),
  role: z.string().min(1),
  authority: z.string().min(1),
  canonicalUrl: z.string().url(),
});

export const featureSchema = seoSchema("feature")
  .extend({
    category: z.string().min(1),
    summary: z.string().min(1),
    specLabel: z.string().default("Common product term"),
    specification: specificationReferenceSchema.optional(),
    aliases: z.array(z.string().min(1)).default([]),
    capabilityKind: z.enum(CAPABILITY_KINDS).default("atomic"),
    parent: z.string().min(1).optional(),
    related: z.array(z.string().min(1)).default([]),
    relations: z.array(featureRelationSchema).default([]),
    highlight: z.boolean().default(false),
    notes: z.array(catalogNoteSchema).default([]),
    issues: z.array(catalogNoteSchema).default([]),
    resources: z.array(catalogResourceSchema).default([]),
    support: z.array(supportRowSchema).default([]),
  })
  .superRefine((feature, context) => {
    if (feature.capabilityKind === "family" && feature.parent) {
      context.addIssue({
        code: "custom",
        message: "A capability family cannot itself have a parent.",
        path: ["parent"],
      });
    }
    if (
      feature.status === "published" &&
      feature.capabilityKind === "atomic" &&
      !feature.resources.some((resource) => /^https:\/\//.test(resource.href))
    ) {
      context.addIssue({
        code: "custom",
        message:
          "A published atomic feature needs a public specification or first-party documentation reference. Internal methodology alone cannot establish a catalog term.",
        path: ["resources"],
      });
    }
    if (
      [
        "Product capability",
        "Measured product capability",
        "Product-native capability",
        "Product capability family",
        "Instruction capability family",
        "Plugin capability family",
      ].includes(feature.specLabel)
    ) {
      context.addIssue({
        code: "custom",
        message:
          "Use an explicit terminology basis such as Common product term, Measured product property, Catalog grouping, or a named public specification.",
        path: ["specLabel"],
      });
    }
    const noteIds = new Set<number>();
    for (const [index, note] of feature.notes.entries()) {
      if (noteIds.has(note.id)) {
        context.addIssue({
          code: "custom",
          message: `Duplicate evidence note id ${note.id}.`,
          path: ["notes", index, "id"],
        });
      }
      noteIds.add(note.id);
    }

    const resourceIds = new Set<string>();
    for (const [index, resource] of feature.resources.entries()) {
      if (!resource.id) continue;
      if (resourceIds.has(resource.id)) {
        context.addIssue({
          code: "custom",
          message: `Duplicate evidence resource id ${resource.id}.`,
          path: ["resources", index, "id"],
        });
      }
      resourceIds.add(resource.id);
    }

    let hasSourcedCell = false;
    const harnessRows = new Set<string>();
    for (const [rowIndex, row] of feature.support.entries()) {
      if (harnessRows.has(row.harness)) {
        context.addIssue({
          code: "custom",
          message: `Duplicate support row for harness ${row.harness}.`,
          path: ["support", rowIndex, "harness"],
        });
      }
      harnessRows.add(row.harness);

      const tracks = new Set<string>();
      for (const [versionIndex, version] of (row.versions ?? []).entries()) {
        if (tracks.has(version.track)) {
          context.addIssue({
            code: "custom",
            message: `Duplicate version track ${version.track} for harness ${row.harness}.`,
            path: ["support", rowIndex, "versions", versionIndex, "track"],
          });
        }
        tracks.add(version.track);
      }

      if (row.status && row.status !== "unknown") {
        hasSourcedCell = true;
        context.addIssue({
          code: "custom",
          message:
            "A sourced current-track status must use versions[] with at least one noteIds reference.",
          path: ["support", rowIndex, "status"],
        });
      }

      for (const [versionIndex, version] of (row.versions ?? []).entries()) {
        if (version.status === "unknown") continue;
        hasSourcedCell = true;
        if (version.noteIds.length === 0) {
          context.addIssue({
            code: "custom",
            message:
              "Every non-unknown version cell needs an evidence note id.",
            path: ["support", rowIndex, "versions", versionIndex, "noteIds"],
          });
        }
        if (!version.target) {
          context.addIssue({
            code: "custom",
            message: "Every non-unknown version cell needs an explicit target.",
            path: ["support", rowIndex, "versions", versionIndex, "target"],
          });
        }
        if (!version.environmentProfile) {
          context.addIssue({
            code: "custom",
            message:
              "Every non-unknown version cell needs an environment profile.",
            path: [
              "support",
              rowIndex,
              "versions",
              versionIndex,
              "environmentProfile",
            ],
          });
        }
        if (version.evidence.length === 0) {
          context.addIssue({
            code: "custom",
            message:
              "Every non-unknown version cell needs a typed evidence reference.",
            path: ["support", rowIndex, "versions", versionIndex, "evidence"],
          });
        }
        for (const [evidenceIndex, evidence] of version.evidence.entries()) {
          if (!resourceIds.has(evidence.resourceId)) {
            context.addIssue({
              code: "custom",
              message: `Evidence resource id ${evidence.resourceId} does not exist on this feature.`,
              path: [
                "support",
                rowIndex,
                "versions",
                versionIndex,
                "evidence",
                evidenceIndex,
                "resourceId",
              ],
            });
            continue;
          }

          const resource = feature.resources.find(
            (candidate) => candidate.id === evidence.resourceId
          );
          if (!resource) continue;
          if (!resource.href.startsWith("https://")) {
            context.addIssue({
              code: "custom",
              message: `Referenced evidence resource ${evidence.resourceId} must use public HTTPS.`,
              path: [
                "support",
                rowIndex,
                "versions",
                versionIndex,
                "evidence",
                evidenceIndex,
                "resourceId",
              ],
            });
          }
          if (
            !resource.publisher ||
            !resource.reviewedAt ||
            !resource.evidenceType
          ) {
            context.addIssue({
              code: "custom",
              message: `Referenced evidence resource ${evidence.resourceId} needs publisher, reviewedAt, and evidenceType metadata.`,
              path: ["resources", feature.resources.indexOf(resource)],
            });
          }
          if (
            resource.evidenceType &&
            resource.evidenceType !== evidence.type
          ) {
            context.addIssue({
              code: "custom",
              message: `Evidence type ${evidence.type} does not match resource ${evidence.resourceId} type ${resource.evidenceType}.`,
              path: [
                "support",
                rowIndex,
                "versions",
                versionIndex,
                "evidence",
                evidenceIndex,
                "type",
              ],
            });
          }
        }
        for (const [noteIndex, noteId] of version.noteIds.entries()) {
          if (!noteIds.has(noteId)) {
            context.addIssue({
              code: "custom",
              message: `Evidence note id ${noteId} does not exist on this feature.`,
              path: [
                "support",
                rowIndex,
                "versions",
                versionIndex,
                "noteIds",
                noteIndex,
              ],
            });
          }
        }
      }
    }

    if (
      hasSourcedCell &&
      !feature.resources.some((resource) => /^https:\/\//.test(resource.href))
    ) {
      context.addIssue({
        code: "custom",
        message:
          "A feature with sourced cells needs at least one public HTTPS evidence resource.",
        path: ["resources"],
      });
    }
  });

export const harnessSchema = seoSchema("harness")
  .extend({
    family: z.string().min(1),
    vendor: z.string().min(1),
    surface: z.enum(HARNESS_SURFACES),
    summary: z.string().min(1),
    tracks: z.array(z.string().min(1)).default(["current", "preview"]),
    order: z.number().int().default(0),
    homepage: z.string().url().optional(),
    targetKind: z.enum(["release", "hosted-observation"]).optional(),
    execution: z.enum(["local", "hosted"]).optional(),
    defaultEnvironmentProfile: z.enum(ENVIRONMENT_PROFILE_IDS).optional(),
  })
  .transform((harness) => ({
    ...harness,
    targetKind:
      harness.targetKind ??
      (harness.surface === "web" ? "hosted-observation" : "release"),
    execution:
      harness.execution ?? (harness.surface === "web" ? "hosted" : "local"),
    defaultEnvironmentProfile:
      harness.defaultEnvironmentProfile ??
      (harness.surface === "web" ? "hosted-default" : "local-default"),
  }));

export const specificationSchema = seoSchema("specification").extend({
  authority: z.string().min(1),
  revision: z.string().min(1),
  maturity: z.string().min(1),
  structure: z.string().min(1),
  sourceId: z.string().min(1),
  canonicalUrl: z.string().url(),
  summary: z.string().min(1),
  roles: z.array(z.string().min(1)).default([]),
  aliases: z.array(z.string().min(1)).default([]),
});

export const categorySchema = seoSchema("category").extend({
  summary: z.string().min(1),
  order: z.number().int().default(0),
});

export const pageSchema = seoSchema("page").extend({
  summary: z.string().min(1),
});

export const newsSchema = seoSchema("news").extend({
  summary: z.string().min(1),
  review: reviewSchema.optional(),
});

export const reportSchema = seoSchema("report").extend({
  summary: z.string().min(1),
  series: z.string().min(1),
  edition: z.string().min(1),
  snapshotDate: dateStampSchema,
  dataSource: z.string().min(1),
  order: z.number().int().default(0),
});

export type FeatureData = z.infer<typeof featureSchema>;
export type HarnessData = z.infer<typeof harnessSchema>;
export type SpecificationData = z.infer<typeof specificationSchema>;
export type CategoryData = z.infer<typeof categorySchema>;
export type PageData = z.infer<typeof pageSchema>;
export type NewsData = z.infer<typeof newsSchema>;
export type ReportData = z.infer<typeof reportSchema>;
export type SupportRowInput = z.infer<typeof supportRowSchema>;
export type AgentData = HarnessData;
export const agentSchema = harnessSchema;
