import { describe, expect, it } from "vitest";
import {
  PROVIDER_MARKS,
  providerMark,
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
  it("requires a local asset and complete HTTPS provenance", () => {
    const mark: ProviderMarkAuthorization = {
      id: "example",
      label: "Example",
      assetPath: "/provider-marks/example.svg",
      source: "lobe-icons",
      sourcePackage: "example-icons",
      sourceVersion: "1.0.0",
      sourceRevision: "0123456789abcdef0123456789abcdef01234567",
      sourceAsset: "example",
      sourceUrl: "https://example.com/example.svg",
      repositoryUrl: "https://example.com/repository",
      license: "MIT",
      licenseUrl: "https://example.com/license",
      reviewedAt: "2026-08-28",
      usage: "nominative-reference",
      rightsNotice:
        "Used only to identify the named record; all trademark rights remain with the owner and no endorsement is implied.",
    };
    expect(providerMarkIsDisplayable(mark)).toBe(true);
    expect(
      providerMarkIsDisplayable({
        ...mark,
        assetPath: "https://cdn.example.com/example.svg" as never,
      })
    ).toBe(false);
  });

  it("keeps every reviewed manifest record displayable and uniquely addressed", () => {
    expect(PROVIDER_MARKS.every(providerMarkIsDisplayable)).toBe(true);
    expect(new Set(PROVIDER_MARKS.map((mark) => mark.id)).size).toBe(
      PROVIDER_MARKS.length
    );
    expect(new Set(PROVIDER_MARKS.map((mark) => mark.assetPath)).size).toBe(
      PROVIDER_MARKS.length
    );
  });
});

describe("providerMark", () => {
  it("resolves exact provider aliases", () => {
    expect(providerMark("OpenAI")?.id).toBe("openai");
    expect(providerMark("Microsoft / Visual Studio Code")?.id).toBe(
      "microsoft"
    );
    expect(providerMark("Zed Industries")?.id).toBe("zed");
  });

  it("prefers an exact product mapping over a provider mark", () => {
    expect(providerMark("OpenAI", "codex-cli")?.id).toBe("codex");
    expect(providerMark("Google", "gemini-cli")?.id).toBe("gemini-cli");
    expect(providerMark("Anysphere", "cursor")?.id).toBe("cursor");
  });

  it("does not guess at unreviewed or fuzzy names", () => {
    expect(providerMark("Open AI")).toBeUndefined();
    expect(providerMark("Example Research Systems")).toBeUndefined();
    expect(providerMark("OpenAI", "not-a-real-surface")?.id).toBe("openai");
  });
});
