import { describe, expect, it } from "vitest";
import {
  PROVIDER_MARKS,
  PROVIDER_MARK_SOURCES,
  providerMark,
  providerMarkIsDisplayable,
  providerMarkSource,
  providerMarkSourceUrl,
  providerReference,
  referenceIdentity,
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
  it("requires a local asset and a reviewed source record", () => {
    const mark: ProviderMarkAuthorization = {
      id: "example",
      label: "Example",
      assetPath: "/provider-marks/example.svg",
      source: "lobe-icons",
      sourceAsset: "example",
      reviewedAt: "2026-08-28",
    };
    expect(providerMarkIsDisplayable(mark)).toBe(true);
    expect(
      providerMarkIsDisplayable({
        ...mark,
        assetPath: "https://cdn.example.com/example.svg" as never,
      })
    ).toBe(false);
  });

  it("stores shared source metadata once and builds exact asset URLs", () => {
    expect(PROVIDER_MARK_SOURCES).toHaveLength(2);
    expect(providerMarkSource("lobe-icons").label).toBe("Lobe Icons");
    const mark = PROVIDER_MARKS.at(0);
    expect(mark).toBeDefined();
    if (!mark) throw new Error("Expected at least one provider mark.");
    expect(providerMarkSourceUrl(mark)).toMatch(/^https:\/\//);
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
    expect(providerMark("pi")?.id).toBe("pi");
  });

  it("prefers an exact product mapping over a provider mark", () => {
    expect(providerMark("OpenAI", "codex-cli")?.id).toBe("codex");
    expect(providerMark("Google", "gemini-cli")?.id).toBe("gemini-cli");
    expect(providerMark("Anysphere", "cursor")?.id).toBe("cursor");
    expect(providerMark("xAI", "grok-bot-desktop")?.id).toBe("grok");
    expect(providerMark("OpenAI", "chatgpt-desktop")?.id).toBe("openai");
    expect(providerMark("Anthropic", "claude-cli")?.id).toBe("claude-code");
    expect(providerMark("Anthropic", "claude-web")?.id).toBe("claude");
    expect(providerMark("Google", "chrome-webmcp-preview")?.id).toBe("chrome");
  });

  it("does not guess at unreviewed or fuzzy names", () => {
    expect(providerMark("Open AI")).toBeUndefined();
    expect(providerMark("Example Research Systems")).toBeUndefined();
    expect(providerMark("OpenAI", "not-a-real-surface")?.id).toBe("openai");
  });
});

describe("referenceIdentity", () => {
  it("resolves mark, fallback, and product context through one API", () => {
    expect(
      referenceIdentity({
        provider: "OpenAI",
        product: "Codex CLI",
        productSlug: "codex-cli",
      })
    ).toMatchObject({
      name: "OpenAI",
      product: "Codex CLI",
      productSlug: "codex-cli",
      monogram: "OA",
      mark: { id: "codex" },
    });
    expect(
      referenceIdentity({
        provider: "OpenWork",
        productSlug: "openwork-desktop",
      })
    ).toMatchObject({ name: "OpenWork", monogram: "OW" });
  });
});
