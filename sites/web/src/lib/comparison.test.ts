import { describe, expect, it } from "vitest";
import {
  cellsDiffer,
  comparisonSummary,
  filterComparisonRows,
  type ComparisonRow,
} from "./comparison";

const rows: ComparisonRow[] = [
  {
    slug: "tools",
    title: "MCP tools",
    summary: "Call tools exposed by MCP servers.",
    category: "interfaces",
    cells: {
      alpha: { status: "yes", evidenceCount: 1, qualifiers: [] },
      beta: {
        status: "partial",
        evidenceCount: 1,
        qualifiers: ["preview: opt-in"],
      },
    },
  },
  {
    slug: "vision",
    title: "Image input",
    summary: "Interpret image attachments.",
    category: "perception",
    cells: {
      alpha: { status: "unknown", evidenceCount: 0, qualifiers: [] },
      beta: { status: "unknown", evidenceCount: 0, qualifiers: [] },
    },
  },
];

describe("harness comparison", () => {
  it("treats status and constraints as meaningful differences", () => {
    expect(cellsDiffer(rows[0].cells.alpha, rows[0].cells.beta)).toBe(true);
    expect(cellsDiffer(rows[1].cells.alpha, rows[1].cells.beta)).toBe(false);
  });

  it("summarizes differences without inventing a winner score", () => {
    expect(comparisonSummary(rows, "alpha", "beta")).toEqual({
      total: 2,
      matched: 1,
      different: 1,
      evidenceGaps: 1,
      leftSupported: 1,
      rightSupported: 0,
    });
  });

  it("combines category, text, and evidence lenses", () => {
    expect(
      filterComparisonRows(rows, {
        leftSlug: "alpha",
        rightSlug: "beta",
        lens: "evidence-gaps",
        category: "perception",
        query: "image",
      }).map((row) => row.slug)
    ).toEqual(["vision"]);
  });
});
