import { describe, expect, it } from "vitest";
import {
  appSubmissionReviewSummary,
  correctionDeduplicationKey,
  correctionReceiptPath,
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
    expect(result.value.publicationPreference).toBe("internal-only");
  });

  it("records explicit permission to publish the submitted explanation", () => {
    const result = validateCorrectionSubmission({
      targetType: "general",
      explanation: "This explanation is deliberately long enough to validate.",
      affiliation: "none",
      publicationPreference: "may-publish",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.publicationPreference).toBe("may-publish");
  });

  it("queues an app submission with its identity, evidence, and an unverified status", () => {
    const result = validateCorrectionSubmission({
      targetType: "missing-product",
      appName: "Example Notes",
      productWebsite: "https://example.com/",
      explanation: "An agent can create notes using the documented MCP tools.",
      sourceUrls: ["https://example.com/docs/mcp"],
      proposedStatus: "yes",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.targetType).toBe("missing-product");
    expect(result.value.appName).toBe("Example Notes");
    expect(result.value.productWebsite).toBe("https://example.com/");
    expect(result.value.reproductionSteps).toContain("App name: Example Notes");
    expect(result.value.reproductionSteps).toContain(
      "Product website: https://example.com/"
    );
    expect(result.value.sourceUrls).toEqual([
      "https://example.com/",
      "https://example.com/docs/mcp",
    ]);
    expect(result.value.proposedStatus).toBe("unknown");
    expect(result.value.publicationPreference).toBe("internal-only");
    expect(result.value.catalogPermalink).toBe(
      "https://canmyagentuse.com/products"
    );
  });

  it("rejects an app submission without a name, HTTPS website, or usable evidence", () => {
    const result = validateCorrectionSubmission({
      targetType: "missing-product",
      appName: "",
      productWebsite: "https://user:secret@example.com/",
      explanation: "An agent can create notes using the documented MCP tools.",
      sourceUrls: ["javascript:alert(1)", "http://example.com/docs"],
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors).toEqual([
      "Provide an app or product name.",
      "Provide a public HTTPS product website.",
      "Include at least one public HTTPS source for the agent capability.",
    ]);
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
  it("distinguishes vendor apps while treating normalized retries as duplicates", () => {
    const submission = (
      appName: string,
      productWebsite = "https://example.com/"
    ) => {
      const result = validateCorrectionSubmission({
        targetType: "missing-product",
        appName,
        productWebsite,
        explanation: "An agent can create documents through the official API.",
        sourceUrls: ["https://example.com/docs"],
      });
      if (!result.ok) throw new Error(result.errors.join(" "));
      return correctionDeduplicationKey(result.value);
    };
    const original = submission("Document Studio");
    expect(submission("Presentation Studio")).not.toBe(original);
    expect(
      submission("Document Studio", "https://other.example.com/")
    ).not.toBe(original);
    expect(
      submission("  DOCUMENT   Studio ", "https://EXAMPLE.com/#intro")
    ).toBe(original);
  });

  it("preserves existing correction duplicate keys without app identity", () => {
    const result = validateCorrectionSubmission({
      targetType: "feature",
      feature: "web-fetch",
      explanation: "The published documentation establishes this capability.",
      sourceUrls: "https://example.com/docs",
      appName: "An unrelated app field",
      productWebsite: "https://other.example.com/",
    });
    if (!result.ok) throw new Error(result.errors.join(" "));
    expect(correctionDeduplicationKey(result.value)).toBe(
      JSON.stringify({
        targetType: "feature",
        feature: "web-fetch",
        harness: "",
        track: "current",
        proposedStatus: "unknown",
        explanation: "the published documentation establishes this capability.",
        sourceUrls: ["https://example.com/docs"],
      })
    );
  });

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

describe("public correction receipts", () => {
  it("only links complete receipt IDs and excludes self-references", () => {
    const original = "CMAU-23456789AB";
    expect(correctionReceiptPath(original)).toBe(`/corrections/${original}`);
    expect(correctionReceiptPath(original, original)).toBeUndefined();
    for (const invalid of [
      null,
      "",
      "../../submit-app",
      "https://example.com",
      `${original}/extra`,
      "CMAU-0000000000",
    ]) {
      expect(correctionReceiptPath(invalid)).toBeUndefined();
    }
  });

  it("describes terminal decisions and directs duplicate retries to their original", () => {
    expect(appSubmissionReviewSummary("accepted")).toContain("was accepted");
    expect(appSubmissionReviewSummary("declined")).toContain("was declined");
    expect(appSubmissionReviewSummary("duplicate")).toContain(
      "original receipt"
    );
    expect(appSubmissionReviewSummary("superseded")).toContain("replacement");
    for (const state of [
      "accepted",
      "partially-accepted",
      "declined",
      "duplicate",
      "superseded",
    ]) {
      expect(appSubmissionReviewSummary(state)).not.toMatch(
        /awaiting|in the.*queue/
      );
    }
    expect(appSubmissionReviewSummary("unknown-state")).toContain(
      "editorial history"
    );
  });
});
