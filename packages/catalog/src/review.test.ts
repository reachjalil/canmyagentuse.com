import { describe, expect, it } from "vitest";
import { reviewSchema, reviewMarkdown } from "./review.ts";

const draft = {
  number: 1,
  version: 1,
  reviewedAt: "2026-09-05",
  verdict: "conditional",
  headline: "Possible, with the right access.",
  summary: "An eligible integration is required.",
  evidence: "documentation",
  sources: ["https://example.com/official-docs"],
  works: "Find showings.",
  catch: "Partner access.",
  nextCheck: "Verify a fulfilled order.",
  history: [
    { version: 1, date: "2026-09-05", change: "Initial documentation review." },
  ],
};

describe("living review evidence and editions", () => {
  it("keeps unversioned catalog news compatible", () => {
    expect(reviewMarkdown()).toBe("");
  });
  it("publishes the verdict, limitations, evidence and history together", () => {
    const md = reviewMarkdown(reviewSchema.parse(draft));
    for (const text of [
      "Possible, with the right access.",
      "Partner access.",
      "No live test",
      "https://example.com/official-docs",
      "Version 1",
      "Initial documentation review.",
    ]) {
      expect(md).toContain(text);
    }
  });
  it("requires test evidence for live or mixed claims", () => {
    for (const evidence of ["live-test", "mixed"]) {
      expect(reviewSchema.safeParse({ ...draft, evidence }).success).toBe(
        false
      );
      expect(
        reviewSchema.safeParse({
          ...draft,
          evidence,
          testReports: ["https://example.com/test-report"],
        }).success
      ).toBe(true);
    }
  });
  it("rejects lost, repeated or stale version histories", () => {
    expect(reviewSchema.safeParse({ ...draft, version: 2 }).success).toBe(
      false
    );
    expect(
      reviewSchema.safeParse({
        ...draft,
        history: [...draft.history, ...draft.history],
      }).success
    ).toBe(false);
    expect(
      reviewSchema.safeParse({ ...draft, reviewedAt: "2026-09-06" }).success
    ).toBe(false);
  });
  it("retains previous editions when a verdict changes", () => {
    const review = reviewSchema.parse({
      ...draft,
      version: 2,
      verdict: "handoff",
      history: [
        ...draft.history,
        {
          version: 2,
          date: "2026-09-05",
          change: "Confirmed checkout handoff only.",
        },
      ],
    });
    expect(reviewMarkdown(review)).toContain("Initial documentation review.");
    expect(reviewMarkdown(review)).toContain(
      "Confirmed checkout handoff only."
    );
    expect(reviewMarkdown(review)).toContain("You finish the job");
  });
});
