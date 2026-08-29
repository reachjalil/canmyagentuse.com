import { describe, expect, it } from "vitest";
import { currentSupportSnippet } from "./support.ts";

describe("currentSupportSnippet", () => {
  it("gives a direct answer when current evidence exists", () => {
    expect(
      currentSupportSnippet("MCP tools", {
        total: 12,
        assessed: 8,
        sourced: 8,
        directEvidence: 8,
        counts: { yes: 5, partial: 3, no: 0, unknown: 4, na: 0 },
      })
    ).toBe(
      "MCP tools: 5 supported, 3 partial, 0 unsupported, 4 unreviewed across 12 cataloged products; 8 have direct reviewed evidence."
    );
  });

  it("states the evidence gap without implying lack of support", () => {
    expect(
      currentSupportSnippet("Browser automation", {
        total: 12,
        assessed: 0,
        sourced: 0,
        directEvidence: 0,
        counts: { yes: 0, partial: 0, no: 0, unknown: 12, na: 0 },
      })
    ).toBe(
      "Browser automation: no current status assessments across 12 cataloged products yet; 0 have direct reviewed evidence."
    );
  });
});
