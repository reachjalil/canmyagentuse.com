export const SUPPORT_STATUSES = [
  "yes",
  "partial",
  "no",
  "unknown",
  "na",
] as const;

export type SupportStatus = (typeof SUPPORT_STATUSES)[number];

/** Product lifecycle for a support assertion, kept separate from compatibility. */
export const SUPPORT_STAGES = [
  "untracked",
  "requested",
  "planned",
  "experimental",
  "preview",
  "stable",
  "deprecated",
] as const;

export type SupportStage = (typeof SUPPORT_STAGES)[number];

export const SUPPORT_STAGE_LABELS = {
  untracked: "Untracked",
  requested: "Requested",
  planned: "Planned",
  experimental: "Experimental",
  preview: "Preview",
  stable: "Stable",
  deprecated: "Deprecated",
} as const satisfies Record<SupportStage, string>;

export const CAPABILITY_KINDS = ["atomic", "family"] as const;
export type CapabilityKind = (typeof CAPABILITY_KINDS)[number];

export const FEATURE_RELATION_TYPES = [
  "related",
  "requires",
  "extends",
  "alternative",
] as const;
export type FeatureRelationType = (typeof FEATURE_RELATION_TYPES)[number];

export const SUPPORT_STATUS_LABELS = {
  yes: "Supported",
  partial: "Partial",
  no: "Unsupported",
  unknown: "Unknown",
  na: "Not applicable",
} as const satisfies Record<SupportStatus, string>;

export const SUPPORT_STATUS_MARK = {
  yes: "Y",
  partial: "P",
  no: "N",
  unknown: "?",
  na: "–",
} as const satisfies Record<SupportStatus, string>;

export const HARNESS_SURFACES = ["web", "desktop", "cli"] as const;

export type HarnessSurface = (typeof HARNESS_SURFACES)[number];

export const HARNESS_SURFACE_LABELS = {
  web: "Web",
  desktop: "Desktop",
  cli: "CLI",
} as const satisfies Record<HarnessSurface, string>;

export const ENVIRONMENT_PROFILE_IDS = [
  "local-default",
  "hosted-default",
  "enterprise-managed",
  "preview-enabled",
  "air-gapped",
] as const;

export type EnvironmentProfileId = (typeof ENVIRONMENT_PROFILE_IDS)[number];

export const CONTENT_KINDS = [
  "product",
  "feature",
  "harness",
  "specification",
  "category",
  "page",
  "news",
  "report",
] as const;

export type ContentKind = (typeof CONTENT_KINDS)[number];

export const PUBLICATION_STATUSES = ["draft", "published"] as const;

export type PublicationStatus = (typeof PUBLICATION_STATUSES)[number];

export const MATRIX_VIEWS = ["current", "all"] as const;

export type MatrixView = (typeof MATRIX_VIEWS)[number];

export const TRACK_LABELS: Record<string, string> = {
  current: "Current",
  preview: "Preview",
};

export const TARGET_KINDS = [
  "release",
  "hosted-observation",
  "dated-documentation",
] as const;

export type TargetKind = (typeof TARGET_KINDS)[number];

export const EVIDENCE_TYPES = [
  "documented",
  "tested",
  "vendor-attested",
  "listed",
  "reported",
  "inferred",
  "not-found",
] as const;

export type EvidenceType = (typeof EVIDENCE_TYPES)[number];

/** Why the editorial team assigned a compatibility status. */
export const ASSESSMENT_BASES = [
  "verified-testing",
  "official-documentation",
  "maintained-source",
  "official-demonstration",
  "first-party-signal",
  "credible-reporting",
  "editorial-inference",
] as const;

export type AssessmentBasis = (typeof ASSESSMENT_BASES)[number];

export const ASSESSMENT_BASIS_LABELS = {
  "verified-testing": "verified by testing",
  "official-documentation": "confirmed in official documentation",
  "maintained-source": "confirmed in maintained first-party source code",
  "official-demonstration": "demonstrated by the provider",
  "first-party-signal": "supported by a first-party signal",
  "credible-reporting": "supported by credible reporting",
  "editorial-inference": "high-confidence editorial assessment",
} as const satisfies Record<AssessmentBasis, string>;

export const ASSESSMENT_CONFIDENCES = [
  "verified",
  "high",
  "provisional",
] as const;

export type AssessmentConfidence = (typeof ASSESSMENT_CONFIDENCES)[number];

export const ASSESSMENT_CONFIDENCE_LABELS = {
  verified: "Verified",
  high: "High-confidence assessment",
  provisional: "Provisional assessment",
} as const satisfies Record<AssessmentConfidence, string>;

export const DIRECT_REVIEW_EVIDENCE_TYPES = [
  "documented",
  "tested",
  "vendor-attested",
  "listed",
] as const satisfies readonly EvidenceType[];

export const QUALIFIER_TYPES = [
  "preview",
  "experimental",
  "plan",
  "policy",
  "region",
  "auth",
  "format",
  "transport",
  "protocol-revision",
  "host-role",
  "feature-flag",
  "runtime",
  "vendor-extension",
  "origin-trial",
] as const;

export type QualifierType = (typeof QUALIFIER_TYPES)[number];

export interface SupportTarget {
  kind: TargetKind;
  revision: string;
  observedAt?: string;
}

export interface SupportQualifier {
  type: QualifierType;
  value: string;
}

export interface EvidenceReference {
  resourceId: string;
  type: EvidenceType;
  observedAt: string;
}

export interface VersionCell {
  track: string;
  status: SupportStatus;
  noteIds: number[];
  target?: SupportTarget;
  environmentProfile?: EnvironmentProfileId;
  qualifiers?: SupportQualifier[];
  evidence?: EvidenceReference[];
  stage?: SupportStage;
  assessmentBasis?: AssessmentBasis;
  confidence?: AssessmentConfidence;
  assessedAt?: string;
  humanVerificationDesired?: boolean;
}

export function assessmentBasisForVersion(
  version: VersionCell
): AssessmentBasis | undefined {
  if (version.assessmentBasis) return version.assessmentBasis;
  const evidenceTypes = new Set(version.evidence?.map((item) => item.type));
  if (evidenceTypes.has("tested")) return "verified-testing";
  if (evidenceTypes.has("documented")) return "official-documentation";
  if (evidenceTypes.has("vendor-attested") || evidenceTypes.has("listed")) {
    return "first-party-signal";
  }
  if (evidenceTypes.has("reported")) return "credible-reporting";
  if (evidenceTypes.has("inferred") || evidenceTypes.has("not-found")) {
    return "editorial-inference";
  }
  return undefined;
}

export function assessmentConfidenceForVersion(
  version: VersionCell
): AssessmentConfidence | undefined {
  if (version.confidence) return version.confidence;
  const basis = assessmentBasisForVersion(version);
  if (basis === "verified-testing") return "verified";
  if (
    basis === "official-documentation" ||
    basis === "maintained-source" ||
    basis === "official-demonstration" ||
    basis === "first-party-signal"
  ) {
    return "high";
  }
  return basis ? "provisional" : undefined;
}

export function hasDirectReviewedEvidence(version: VersionCell): boolean {
  return Boolean(
    version.evidence?.some((item) =>
      (DIRECT_REVIEW_EVIDENCE_TYPES as readonly EvidenceType[]).includes(
        item.type
      )
    )
  );
}

export interface SupportRow {
  harness: string;
  status?: SupportStatus;
  versions?: VersionCell[];
}

export interface CatalogNote {
  id: number;
  text: string;
}

export interface CatalogResource {
  id?: string;
  title: string;
  href: string;
  kind: "docs" | "spec" | "note";
  publisher?: string;
  evidenceType?: EvidenceType;
  reviewedAt?: string;
  locator?: string;
}

export interface SeoFields {
  title: string;
  description: string;
  slug: string;
  locale: string;
  seoTitle: string;
  socialTitle: string;
  socialDescription: string;
  canonicalPath?: string;
  previewImageAlt?: string;
  llmSummary: string;
  audience: string;
  contentKind: ContentKind;
  status: PublicationStatus;
  tags: string[];
  updated: Date;
  published?: Date;
}

export function isSupportStatus(value: string): value is SupportStatus {
  return (SUPPORT_STATUSES as readonly string[]).includes(value);
}

/** @deprecated Use HARNESS_SURFACES. Kept so older imports fail loudly. */
export const AGENT_KINDS = HARNESS_SURFACES;
export type AgentKind = HarnessSurface;
