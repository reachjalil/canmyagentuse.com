import type { SupportStatus } from "@canmyagentuse/catalog";

export const CORRECTION_TARGET_TYPES = [
  "cell",
  "harness",
  "feature",
  "evidence",
  "methodology",
  "missing-harness",
  "missing-feature",
  "general",
] as const;

export type CorrectionTargetType = (typeof CORRECTION_TARGET_TYPES)[number];

export const CORRECTION_REVIEW_STATES = [
  "received",
  "triaged",
  "needs-more-information",
  "accepted",
  "partially-accepted",
  "declined",
  "duplicate",
  "superseded",
] as const;

export type CorrectionReviewState = (typeof CORRECTION_REVIEW_STATES)[number];

const PROPOSED_STATUSES = [
  "yes",
  "partial",
  "no",
  "unknown",
  "na",
] as const satisfies readonly SupportStatus[];

const AFFILIATIONS = [
  "none",
  "provider-employee",
  "provider-contractor",
  "provider-partner",
  "customer",
  "researcher",
  "other",
] as const;

const PUBLICATION_PREFERENCES = ["internal-only", "may-publish"] as const;

export interface CorrectionSubmission {
  targetType: CorrectionTargetType;
  feature: string;
  harness: string;
  track: string;
  proposedStatus: SupportStatus;
  explanation: string;
  sourceUrls: string[];
  reproductionSteps: string;
  version: string;
  plan: string;
  platform: string;
  surface: string;
  affiliation: (typeof AFFILIATIONS)[number];
  affiliationDetails: string;
  contact: string;
  permissionToContact: boolean;
  publicationPreference: (typeof PUBLICATION_PREFERENCES)[number];
  catalogPermalink: string;
  submittedAssessment: string;
  submittedSources: string;
  submittedStatus: string;
  observedAt: string;
  startedAt: string;
  website: string;
}

export interface CorrectionValidationResult {
  ok: true;
  value: CorrectionSubmission;
}

export interface CorrectionValidationFailure {
  ok: false;
  errors: string[];
}

export function sanitizeCorrectionText(
  value: unknown,
  maximum: number,
  { multiline = false }: { multiline?: boolean } = {}
): string {
  if (typeof value !== "string") return "";
  const normalized = value
    .normalize("NFKC")
    .replace(/<[^>]*>/g, " ")
    .split("")
    .filter((character) => {
      const code = character.charCodeAt(0);
      return (
        code === 9 || code === 10 || code === 13 || (code >= 32 && code !== 127)
      );
    })
    .join("")
    .replace(multiline ? /[ \t]+/g : /\s+/g, " ")
    .trim();
  return normalized.slice(0, maximum);
}

function slug(value: unknown): string {
  const candidate = sanitizeCorrectionText(value, 96).toLowerCase();
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(candidate) ? candidate : "";
}

function track(value: unknown): string {
  const candidate = sanitizeCorrectionText(value, 32).toLowerCase();
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(candidate) ? candidate : "current";
}

function stringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => (typeof item === "string" ? [item] : []));
  }
  if (typeof value !== "string") return [];
  return value.split(/[\n,]/);
}

export function validatedHttpsUrls(value: unknown): string[] {
  const results: string[] = [];
  for (const candidate of stringList(value)) {
    const normalized = sanitizeCorrectionText(candidate, 2_048);
    if (!normalized) continue;
    let url: URL;
    try {
      url = new URL(normalized);
    } catch {
      continue;
    }
    if (url.protocol !== "https:" || url.username || url.password) continue;
    url.hash = "";
    if (!results.includes(url.toString())) results.push(url.toString());
    if (results.length === 5) break;
  }
  return results;
}

function boolean(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === 1;
}

export function validateCorrectionSubmission(
  input: unknown
): CorrectionValidationResult | CorrectionValidationFailure {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: ["The submission must be a JSON object."] };
  }
  const source = input as Record<string, unknown>;
  const targetType = CORRECTION_TARGET_TYPES.includes(
    source.targetType as CorrectionTargetType
  )
    ? (source.targetType as CorrectionTargetType)
    : "cell";
  const proposedStatus = PROPOSED_STATUSES.includes(
    source.proposedStatus as SupportStatus
  )
    ? (source.proposedStatus as SupportStatus)
    : "unknown";
  const affiliation = AFFILIATIONS.includes(
    source.affiliation as (typeof AFFILIATIONS)[number]
  )
    ? (source.affiliation as (typeof AFFILIATIONS)[number])
    : "none";
  const publicationPreference = PUBLICATION_PREFERENCES.includes(
    source.publicationPreference as (typeof PUBLICATION_PREFERENCES)[number]
  )
    ? (source.publicationPreference as (typeof PUBLICATION_PREFERENCES)[number])
    : "internal-only";
  const value: CorrectionSubmission = {
    targetType,
    feature: slug(source.feature),
    harness: slug(source.harness),
    track: track(source.track),
    proposedStatus,
    explanation: sanitizeCorrectionText(source.explanation, 6_000, {
      multiline: true,
    }),
    sourceUrls: validatedHttpsUrls(source.sourceUrls),
    reproductionSteps: sanitizeCorrectionText(source.reproductionSteps, 6_000, {
      multiline: true,
    }),
    version: sanitizeCorrectionText(source.version, 160),
    plan: sanitizeCorrectionText(source.plan, 160),
    platform: sanitizeCorrectionText(source.platform, 160),
    surface: sanitizeCorrectionText(source.surface, 160),
    affiliation,
    affiliationDetails: sanitizeCorrectionText(source.affiliationDetails, 500),
    contact: sanitizeCorrectionText(source.contact, 254),
    permissionToContact: boolean(source.permissionToContact),
    publicationPreference,
    catalogPermalink: validatedHttpsUrls(source.catalogPermalink)[0] ?? "",
    submittedAssessment: sanitizeCorrectionText(
      source.submittedAssessment,
      500
    ),
    submittedSources: sanitizeCorrectionText(source.submittedSources, 2_000),
    submittedStatus: sanitizeCorrectionText(source.submittedStatus, 32),
    observedAt: sanitizeCorrectionText(source.observedAt, 32),
    startedAt: sanitizeCorrectionText(source.startedAt, 64),
    website: sanitizeCorrectionText(source.website, 500),
  };
  const errors: string[] = [];
  if (
    targetType === "cell" &&
    (!value.feature || !value.harness || !value.track)
  ) {
    errors.push("A cell correction requires a capability, product, and track.");
  }
  if (targetType === "feature" && !value.feature) {
    errors.push("A feature correction requires a capability.");
  }
  if (targetType === "harness" && !value.harness) {
    errors.push("A product correction requires a product.");
  }
  if (value.explanation.length < 20) {
    errors.push("Explain the proposed correction in at least 20 characters.");
  }
  if (value.contact && !/^\S+@\S+\.\S+$/.test(value.contact)) {
    errors.push("Contact must be a valid email address or left blank.");
  }
  if (value.permissionToContact && !value.contact) {
    errors.push("Provide a contact email when granting contact permission.");
  }
  if (value.website) {
    errors.push("Automated submissions are not accepted.");
  }
  return errors.length > 0 ? { ok: false, errors } : { ok: true, value };
}

const ID_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export function makeCorrectionId(
  random = crypto.getRandomValues(new Uint8Array(10))
): string {
  return `CMAU-${[...random]
    .map((byte) => ID_ALPHABET[byte % ID_ALPHABET.length])
    .join("")}`;
}

export async function sha256(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value)
  );
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function tokensMatch(
  supplied: string,
  expected: string
): Promise<boolean> {
  if (!supplied || !expected) return false;
  const [left, right] = await Promise.all([sha256(supplied), sha256(expected)]);
  let mismatch = left.length ^ right.length;
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    mismatch |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }
  return mismatch === 0;
}

export function spamScore(
  submission: CorrectionSubmission,
  elapsedMilliseconds: number | undefined
): number {
  let score = 0;
  if (elapsedMilliseconds !== undefined && elapsedMilliseconds < 3_000)
    score += 4;
  if (submission.sourceUrls.length === 5) score += 1;
  if ((submission.explanation.match(/https?:\/\//g) ?? []).length > 2)
    score += 2;
  if (/(.)\1{12,}/.test(submission.explanation)) score += 2;
  return score;
}

export function parseStartedAt(
  startedAt: string,
  now = Date.now()
): number | undefined {
  if (!startedAt) return undefined;
  const value = Date.parse(startedAt);
  if (!Number.isFinite(value) || value > now || now - value > 86_400_000) {
    return undefined;
  }
  return now - value;
}
