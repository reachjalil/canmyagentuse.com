export const SUPPORT_STATUSES = [
  "yes",
  "partial",
  "no",
  "unknown",
  "na",
] as const;

export type SupportStatus = (typeof SUPPORT_STATUSES)[number];

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
  "feature",
  "harness",
  "specification",
  "category",
  "page",
  "news",
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

export const QUALIFIER_TYPES = [
  "preview",
  "experimental",
  "plan",
  "policy",
  "region",
  "auth",
  "transport",
  "protocol-revision",
  "host-role",
  "feature-flag",
  "runtime",
  "vendor-extension",
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
