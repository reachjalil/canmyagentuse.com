import { describe, expect, it } from "vitest";
import {
  makeCorrectionId,
  parseStartedAt,
  spamScore,
  tokensMatch,
  validateCorrectionSubmission,
  validatedHttpsUrls,
} from "./corrections.ts";

describe("correction submission validation", () => {
  it("sanitizes text, validates cell identity, and keeps only safe HTTPS URLs", () => {
    const result = validateCorrectionSubmission({
      targetType: "cell",
      feature: "web-fetch",
      harness: "claude-web",
      track: "current",
      proposedStatus: "yes",
      explanation: "<b>Official docs</b> now establish this exact behavior.",
      sourceUrls: [
        "https://example.com/docs#section",
        "http://insecure.example.com",
        "https://user:secret@example.com/private",
      ],
      affiliation: "none",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.explanation).toBe(
      "Official docs now establish this exact behavior."
    );
    expect(result.value.sourceUrls).toEqual(["https://example.com/docs"]);
  });

  it("rejects short explanations, invalid contact, and the honeypot", () => {
    const result = validateCorrectionSubmission({
      targetType: "general",
      explanation: "too short",
      contact: "not-an-email",
      website: "spam",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors).toHaveLength(3);
  });
});

describe("correction abuse controls", () => {
  it("deduplicates and filters source URLs", () => {
    expect(
      validatedHttpsUrls(
        "https://example.com/a, https://example.com/a\nftp://example.com/file"
      )
    ).toEqual(["https://example.com/a"]);
  });

  it("creates receipt-shaped IDs and scores implausibly fast submissions", () => {
    expect(makeCorrectionId(new Uint8Array(10))).toMatch(
      /^CMAU-[2-9A-HJ-NP-Z]{10}$/
    );
    const validated = validateCorrectionSubmission({
      targetType: "general",
      proposedStatus: "unknown",
      explanation: "This explanation is deliberately long enough to validate.",
      affiliation: "none",
    });
    expect(validated.ok).toBe(true);
    if (!validated.ok) return;
    expect(spamScore(validated.value, 100)).toBe(4);
    expect(
      parseStartedAt(new Date(Date.now() - 5_000).toISOString())
    ).toBeGreaterThan(4_000);
  });

  it("compares moderation tokens without exposing the original values", async () => {
    await expect(tokensMatch("correct", "correct")).resolves.toBe(true);
    await expect(tokensMatch("incorrect", "correct")).resolves.toBe(false);
  });
});
