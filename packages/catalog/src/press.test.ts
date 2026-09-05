import { describe, expect, it } from "vitest";
import {
  CANONICAL_PROMPTS,
  PRESS_BOILERPLATES,
  PRESS_KIT,
  canonicalPromptDocument,
} from "./press.ts";
import { SITE } from "./site.ts";

describe("press kit", () => {
  it("keeps boilerplates independent and free of endorsement claims", () => {
    for (const boilerplate of PRESS_BOILERPLATES) {
      expect(boilerplate.text).toContain("canmyagentuse.com");
      expect(boilerplate.text).toContain("independent");
      expect(boilerplate.text).not.toMatch(
        /certified|partnered|industry-leading|world-class|market share/i
      );
    }
  });

  it("orders boilerplates from short to extended", () => {
    const words = PRESS_BOILERPLATES.map((entry) => entry.words);
    expect(words).toEqual([...words].toSorted((a, b) => a - b));
    expect(PRESS_BOILERPLATES[0]?.words).toBeGreaterThan(20);
  });

  it("records the affiliation boundary in the fact sheet", () => {
    const affiliation = PRESS_KIT.factSheet.find(
      (fact) => fact.label === "Affiliation"
    );
    expect(affiliation?.value).toContain("OpenWork");
    expect(affiliation?.value).toContain("does not change research findings");
    expect(affiliation?.value).toContain("Independent");
  });

  it("uses the site theme color as the chrome color", () => {
    const chrome = PRESS_KIT.colors.find((color) => color.name === "Chrome");
    expect(chrome?.hex).toBe(SITE.themeColor);
  });

  it("lists only local brand assets", () => {
    for (const asset of PRESS_KIT.assets) {
      expect(asset.path.startsWith("/")).toBe(true);
      expect(asset.path).not.toContain("//");
    }
  });
});

describe("canonical prompts", () => {
  it("routes every prompt through the canonical site URL", () => {
    for (const prompt of CANONICAL_PROMPTS) {
      expect(prompt.text).toContain("https://canmyagentuse.com");
    }
  });

  it("keeps the unknown-is-unreviewed rule in every prompt", () => {
    for (const prompt of CANONICAL_PROMPTS) {
      expect(prompt.text.toLowerCase()).toContain("unknown");
      expect(prompt.text.toLowerCase()).toMatch(
        /unreviewed|no public evidence has been reviewed/
      );
    }
  });

  it("keeps the exact-surface rule in every prompt", () => {
    for (const prompt of CANONICAL_PROMPTS) {
      expect(prompt.text).toMatch(/web, desktop, (?:and|or) CLI/);
      expect(prompt.text.toLowerCase()).toContain("famil");
    }
  });

  it("gives the research prompt the full retrieval order", () => {
    const research = CANONICAL_PROMPTS.find(
      (prompt) => prompt.id === "research"
    );
    expect(research?.text).toContain("/llms.txt");
    expect(research?.text).toContain("/api/v1/openapi.json");
    expect(research?.text).toContain("/api/v1/matrix.json");
    expect(research?.text).toContain("/atlas.md");
  });

  it("renders the plain-text document from the research prompt", () => {
    const document = canonicalPromptDocument();
    expect(document.startsWith(`# ${SITE.name}`)).toBe(true);
    expect(document).toContain("https://canmyagentuse.com/prompt");
    expect(document).toContain("Rules");
    expect(document.endsWith("\n")).toBe(true);
  });
});
