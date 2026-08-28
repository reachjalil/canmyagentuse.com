import { describe, expect, it } from "vitest";
import { currentSupportSnippet } from "./support.ts";

describe("currentSupportSnippet", () => {
  it("gives a direct answer when current evidence exists", () => {
    expect(
      currentSupportSnippet("MCP tools", {
        total: 12,
        sourced: 8,
        counts: { yes: 5, partial: 3, no: 0, unknown: 4, na: 0 },
      })
    ).toBe(
      "MCP tools: 5 supported, 3 partial, 0 unsupported, 4 unreviewed across 12 cataloged products."
    );
  });

  it("states the evidence gap without implying lack of support", () => {
    expect(
      currentSupportSnippet("Browser automation", {
        total: 12,
        sourced: 0,
        counts: { yes: 0, partial: 0, no: 0, unknown: 12, na: 0 },
      })
    ).toBe(
      "Browser automation: no reviewed current support evidence across 12 cataloged products yet."
    );
  });
});
