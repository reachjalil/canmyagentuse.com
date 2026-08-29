import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import {
  CORRECTION_REVIEW_STATES,
  sanitizeCorrectionText,
  tokensMatch,
  type CorrectionReviewState,
} from "../../../../lib/corrections";

export const prerender = false;

const correctionEnv = env as unknown as {
  CORRECTIONS_DB?: D1Database;
  CORRECTIONS_ADMIN_TOKEN?: string;
};

function reply(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "private, no-store",
      vary: "authorization",
    },
  });
}

async function authorized(request: Request): Promise<boolean> {
  const header = request.headers.get("authorization") ?? "";
  const supplied = header.startsWith("Bearer ") ? header.slice(7) : "";
  return tokensMatch(
    supplied,
    correctionEnv.CORRECTIONS_ADMIN_TOKEN?.trim() ?? ""
  );
}

export const GET: APIRoute = async ({ request, url }) => {
  if (!(await authorized(request)))
    return reply({ error: "Unauthorized." }, 401);
  const database = correctionEnv.CORRECTIONS_DB;
  if (!database)
    return reply({ error: "Correction storage is unavailable." }, 503);
  const requestedState = url.searchParams.get("state") ?? "";
  const state = CORRECTION_REVIEW_STATES.includes(
    requestedState as CorrectionReviewState
  )
    ? requestedState
    : "";
  const limit = Math.min(
    Math.max(Number(url.searchParams.get("limit") ?? 50), 1),
    100
  );
  const statement = state
    ? database
        .prepare(
          "SELECT * FROM corrections WHERE review_state = ? ORDER BY updated_at DESC LIMIT ?"
        )
        .bind(state, limit)
    : database
        .prepare("SELECT * FROM corrections ORDER BY updated_at DESC LIMIT ?")
        .bind(limit);
  const records = await statement.all();
  return reply({ records: records.results ?? [] });
};

export const PATCH: APIRoute = async ({ request }) => {
  if (!(await authorized(request)))
    return reply({ error: "Unauthorized." }, 401);
  const database = correctionEnv.CORRECTIONS_DB;
  if (!database)
    return reply({ error: "Correction storage is unavailable." }, 503);
  let input: Record<string, unknown>;
  try {
    input = (await request.json()) as Record<string, unknown>;
  } catch {
    return reply({ error: "The moderation update is not valid JSON." }, 400);
  }
  const id = sanitizeCorrectionText(input.id, 32);
  const reviewState = sanitizeCorrectionText(input.reviewState, 40);
  if (
    !/^CMAU-[2-9A-HJ-NP-Z]{10}$/.test(id) ||
    !CORRECTION_REVIEW_STATES.includes(reviewState as CorrectionReviewState)
  ) {
    return reply(
      { error: "Provide a valid receipt ID and review state." },
      422
    );
  }
  const decision = sanitizeCorrectionText(input.decision, 500, {
    multiline: true,
  });
  const rationale = sanitizeCorrectionText(input.rationale, 4_000, {
    multiline: true,
  });
  const outcome = sanitizeCorrectionText(input.outcome, 2_000, {
    multiline: true,
  });
  const duplicateOf = sanitizeCorrectionText(input.duplicateOf, 32) || null;
  const supersededBy = sanitizeCorrectionText(input.supersededBy, 32) || null;
  const actor =
    sanitizeCorrectionText(input.actor, 160) || "editorial-reviewer";
  const now = new Date().toISOString();
  const existing = await database
    .prepare("SELECT id FROM corrections WHERE id = ?")
    .bind(id)
    .first<{ id: string }>();
  if (!existing) return reply({ error: "Correction receipt not found." }, 404);
  await database.batch([
    database
      .prepare(
        `UPDATE corrections SET
          updated_at = ?, review_state = ?, decision = ?,
          decision_rationale = ?, outcome = ?, duplicate_of = ?,
          superseded_by = ?
         WHERE id = ?`
      )
      .bind(
        now,
        reviewState,
        decision,
        rationale,
        outcome,
        duplicateOf,
        supersededBy,
        id
      ),
    database
      .prepare(
        `INSERT INTO correction_events (
          correction_id, occurred_at, review_state, actor, rationale, outcome
        ) VALUES (?, ?, ?, ?, ?, ?)`
      )
      .bind(id, now, reviewState, actor, rationale, outcome),
  ]);
  return reply({ id, reviewState, updatedAt: now });
};
