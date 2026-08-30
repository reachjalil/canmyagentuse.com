import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import {
  makeCorrectionId,
  parseStartedAt,
  sha256,
  spamScore,
  validateCorrectionSubmission,
} from "../../../../lib/corrections";
import { publishedCollection } from "../../../../lib/collections";

export const prerender = false;

// This directory-index route intentionally serves POST /api/v1/corrections.

const correctionEnv = env as unknown as {
  CORRECTIONS_DB?: D1Database;
  CORRECTIONS_HASH_SALT?: string;
};

function reply(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "private, no-store",
    },
  });
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export const POST: APIRoute = async ({ request }) => {
  if (!isSameOrigin(request)) {
    return reply({ error: "Cross-origin submissions are not accepted." }, 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return reply({ error: "Send the correction as application/json." }, 415);
  }
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 32_768) {
    return reply({ error: "The correction exceeds the 32 KB limit." }, 413);
  }

  const database = correctionEnv.CORRECTIONS_DB;
  const hashSalt = correctionEnv.CORRECTIONS_HASH_SALT?.trim();
  if (!database || !hashSalt) {
    return reply(
      { error: "The correction queue is temporarily unavailable." },
      503
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return reply({ error: "The request body could not be read." }, 400);
  }
  if (new TextEncoder().encode(rawBody).byteLength > 32_768) {
    return reply({ error: "The correction exceeds the 32 KB limit." }, 413);
  }

  let input: unknown;
  try {
    input = JSON.parse(rawBody);
  } catch {
    return reply({ error: "The correction is not valid JSON." }, 400);
  }
  const validated = validateCorrectionSubmission(input);
  if (!validated.ok) {
    return reply(
      { error: "Check the correction fields.", details: validated.errors },
      422
    );
  }
  const submission = validated.value;

  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  const feature = features.find(
    (entry) => entry.data.slug === submission.feature
  );
  const harness = harnesses.find(
    (entry) => entry.data.slug === submission.harness
  );
  if (submission.feature && !feature) {
    return reply({ error: "The selected capability is not published." }, 422);
  }
  if (submission.harness && !harness) {
    return reply({ error: "The selected product is not published." }, 422);
  }

  const support = feature?.data.support.find(
    (row) => row.harness === submission.harness
  );
  const version = support?.versions?.find(
    (item) => item.track === submission.track
  );
  const evidenceIds = new Set(
    version?.evidence?.map((item) => item.resourceId)
  );
  const sourceSnapshot =
    feature?.data.resources.filter(
      (resource) => resource.id && evidenceIds.has(resource.id)
    ) ?? [];
  const currentSnapshot = {
    feature: feature?.data.slug ?? "",
    featureTitle: feature?.data.title ?? "",
    harness: harness?.data.slug ?? "",
    harnessTitle: harness?.data.title ?? "",
    surface: harness?.data.surface ?? submission.surface,
    track: submission.track,
    status: version?.status ?? support?.status ?? "unknown",
    assessmentBasis: version?.assessmentBasis ?? null,
    confidence: version?.confidence ?? null,
    assessedAt: version?.assessedAt ?? null,
    target: version?.target ?? null,
    qualifiers: version?.qualifiers ?? [],
    evidence: version?.evidence ?? [],
  };
  const submittedSnapshot = {
    status: submission.submittedStatus,
    assessment: submission.submittedAssessment,
    sources: submission.submittedSources,
    observedAt: submission.observedAt,
  };

  const receivedAt = new Date().toISOString();
  const clientAddress =
    request.headers.get("cf-connecting-ip") ?? "unavailable";
  const userAgent = request.headers.get("user-agent") ?? "unavailable";
  const submitterHash = await sha256(
    `${hashSalt}|${clientAddress}|${userAgent}`
  );
  const submissionHash = await sha256(
    JSON.stringify({
      targetType: submission.targetType,
      feature: submission.feature,
      harness: submission.harness,
      track: submission.track,
      proposedStatus: submission.proposedStatus,
      explanation: submission.explanation.toLowerCase(),
      sourceUrls: submission.sourceUrls,
    })
  );
  const oneHourAgo = new Date(Date.now() - 3_600_000).toISOString();
  const oneDayAgo = new Date(Date.now() - 86_400_000).toISOString();
  const rate = await database
    .prepare(
      `SELECT
        SUM(CASE WHEN received_at >= ? THEN 1 ELSE 0 END) AS hour_count,
        COUNT(*) AS day_count
       FROM corrections
       WHERE submitter_hash = ? AND received_at >= ?`
    )
    .bind(oneHourAgo, submitterHash, oneDayAgo)
    .first<{ hour_count: number | null; day_count: number }>();
  if ((rate?.hour_count ?? 0) >= 5 || (rate?.day_count ?? 0) >= 20) {
    return reply(
      {
        error:
          "Too many corrections were submitted from this client. Try later.",
      },
      429
    );
  }

  const duplicateCutoff = new Date(Date.now() - 7 * 86_400_000).toISOString();
  const duplicate = await database
    .prepare(
      `SELECT id FROM corrections
       WHERE submission_hash = ? AND received_at >= ?
       ORDER BY received_at DESC LIMIT 1`
    )
    .bind(submissionHash, duplicateCutoff)
    .first<{ id: string }>();
  const id = makeCorrectionId();
  const state = duplicate ? "duplicate" : "received";
  const elapsed = parseStartedAt(submission.startedAt);
  const score = spamScore(submission, elapsed);
  const permalink =
    submission.catalogPermalink ||
    (feature
      ? `https://canmyagentuse.com/features/${feature.data.slug}`
      : harness
        ? `https://canmyagentuse.com/harnesses/${harness.data.slug}`
        : "https://canmyagentuse.com/report");

  await database.batch([
    database
      .prepare(
        `INSERT INTO corrections (
          id, received_at, updated_at, review_state, target_type,
          feature_slug, harness_slug, track, current_snapshot_json,
          source_snapshot_json, submitted_snapshot_json, catalog_permalink,
          proposed_status, explanation, source_urls_json, reproduction_steps,
          product_version, plan, platform, surface, affiliation,
          affiliation_details, contact, permission_to_contact,
          publication_preference, submitter_hash, submission_hash, spam_score,
          duplicate_of
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        id,
        receivedAt,
        receivedAt,
        state,
        submission.targetType,
        submission.feature,
        submission.harness,
        submission.track,
        JSON.stringify(currentSnapshot),
        JSON.stringify(sourceSnapshot),
        JSON.stringify(submittedSnapshot),
        permalink,
        submission.proposedStatus,
        submission.explanation,
        JSON.stringify(submission.sourceUrls),
        submission.reproductionSteps,
        submission.version,
        submission.plan,
        submission.platform,
        submission.surface,
        submission.affiliation,
        submission.affiliationDetails,
        submission.contact,
        submission.permissionToContact ? 1 : 0,
        submission.publicationPreference,
        submitterHash,
        submissionHash,
        score,
        duplicate?.id ?? null
      ),
    database
      .prepare(
        `INSERT INTO correction_events (
          correction_id, occurred_at, review_state, actor, rationale, outcome
        ) VALUES (?, ?, ?, 'submitter', ?, ?)`
      )
      .bind(
        id,
        receivedAt,
        state,
        duplicate
          ? `Matches recent correction ${duplicate.id}.`
          : "Correction received.",
        duplicate
          ? `Linked as a duplicate of ${duplicate.id}.`
          : "Queued for editorial triage."
      ),
  ]);

  return reply(
    {
      id,
      reviewState: state,
      receivedAt,
      statusUrl: `/corrections/${id}`,
      message:
        state === "duplicate"
          ? `Receipt ${id} was recorded and linked to an earlier matching correction.`
          : `Receipt ${id} was recorded for editorial review.`,
    },
    201
  );
};
