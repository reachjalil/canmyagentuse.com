import { describe, expect, it } from "vitest";
import {
  providerMarkIsDisplayable,
  providerReference,
  type ProviderMarkAuthorization,
} from "./provider";

describe("providerReference", () => {
  it("uses reviewed reference cues for known providers", () => {
    expect(providerReference("OpenAI")).toEqual({
      name: "OpenAI",
      monogram: "OA",
      tone: "ink",
    });
    expect(providerReference("Anthropic")).toEqual({
      name: "Anthropic",
      monogram: "AN",
      tone: "clay",
    });
  });

  it("creates deterministic original cues for other providers", () => {
    const first = providerReference("Example Research Systems");
    const second = providerReference("Example Research Systems");
    expect(first).toEqual(second);
    expect(first.monogram).toBe("ER");
  });
});

describe("providerMarkIsDisplayable", () => {
  it("requires a local asset and documented HTTPS provenance", () => {
    const mark: ProviderMarkAuthorization = {
      assetPath: "/provider-marks/example.svg",
      sourceUrl: "https://example.com/media-kit",
      termsUrl: "https://example.com/brand-terms",
      reviewedAt: "2026-08-28",
      permissionBasis: "Written media-kit permission",
    };
    expect(providerMarkIsDisplayable(mark)).toBe(true);
    expect(
      providerMarkIsDisplayable({
        ...mark,
        permissionBasis: "unknown",
      })
    ).toBe(false);
  });
});
