import { z } from "zod";

export const REVIEW_VERDICTS = {
  ready: "Ready for this task",
  conditional: "Possible, with conditions",
  handoff: "You finish the job",
  unverified: "Still exploring",
} as const;

export const REVIEW_EVIDENCE = {
  documentation: "Documentation review",
  "live-test": "Live test recorded",
  mixed: "Documentation + live test",
} as const;

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const httpsUrl = z
  .string()
  .url()
  .refine((value) => value.startsWith("https://"));

export const reviewSchema = z
  .object({
    number: z.number().int().positive(),
    version: z.number().int().positive(),
    reviewedAt: date,
    verdict: z.enum(["ready", "conditional", "handoff", "unverified"]),
    headline: z.string().min(1),
    summary: z.string().min(1),
    evidence: z.enum(["documentation", "live-test", "mixed"]),
    sources: z.array(httpsUrl).min(1),
    testReports: z.array(httpsUrl).default([]),
    works: z.string().min(1),
    catch: z.string().min(1),
    nextCheck: z.string().min(1),
    history: z
      .array(
        z.object({
          version: z.number().int().positive(),
          date,
          change: z.string().min(1),
          archiveUrl: httpsUrl.optional(),
        })
      )
      .min(1),
  })
  .superRefine((review, ctx) => {
    const latest = review.history.at(-1);
    if (
      latest?.version !== review.version ||
      latest?.date !== review.reviewedAt
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["history"],
        message:
          "Latest history entry must match the current version and review date.",
      });
    }
    if (
      review.history.some(
        (entry, index) =>
          entry.version !== index + 1 ||
          (index > 0 &&
            entry.date < (review.history[index - 1]?.date ?? entry.date))
      )
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["history"],
        message: "Keep all versions in chronological order, starting at 1.",
      });
    }
    if (
      review.evidence !== "documentation" &&
      review.testReports.length === 0
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["testReports"],
        message: "Live-test claims require a published test report.",
      });
    }
  });

export type LivingReview = z.infer<typeof reviewSchema>;

export function reviewMarkdown(review?: LivingReview): string {
  if (!review) return "";
  return [
    "## The verdict",
    "",
    `**${review.headline}** — ${REVIEW_VERDICTS[review.verdict]}`,
    "",
    review.summary,
    "",
    `App usage ${String(review.number).padStart(2, "0")} · Version ${review.version} · Reviewed ${review.reviewedAt}`,
    `Evidence: ${REVIEW_EVIDENCE[review.evidence]}`,
    ...(review.evidence === "documentation"
      ? ["No live test is claimed by this verdict."]
      : []),
    "",
    `- What works: ${review.works}`,
    `- The catch: ${review.catch}`,
    `- Next check: ${review.nextCheck}`,
    "",
    "Verdict sources:",
    ...review.sources.map(
      (source, index) => `- [Source ${index + 1}](${source})`
    ),
    ...review.testReports.map(
      (source, index) => `- [Live test report ${index + 1}](${source})`
    ),
    "",
    "## Update history",
    "",
    ...[...review.history]
      .reverse()
      .map(
        (entry) =>
          `- **Version ${entry.version} · ${entry.date}:** ${entry.change}${entry.archiveUrl ? ` [Read this edition](${entry.archiveUrl})` : ""}`
      ),
    "",
  ].join("\n");
}

export const reviewJsonSchema = z.toJSONSchema(reviewSchema, {
  target: "draft-2020-12",
});
