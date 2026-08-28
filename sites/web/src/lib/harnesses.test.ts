import { describe, expect, it } from "vitest";
import type { FeatureData, HarnessData } from "@canmyagentuse/catalog";
import { harnessCapabilitySupport, summarizeHarnessSupport } from "./harnesses";

const harnesses = [
  {
    slug: "example-cli",
    title: "Example CLI",
    tracks: ["current", "preview"],
  },
] as HarnessData[];

function feature(
  slug: string,
  status: "yes" | "partial" | "no" | "unknown",
  options: {
    kind?: "atomic" | "family";
    href?: string;
    observedAt?: string;
  } = {}
): FeatureData {
  const observedAt = options.observedAt ?? "2026-08-01";
  const resource = options.href
    ? [{ id: `${slug}-source`, title: `${slug} docs`, href: options.href }]
    : [];
  const versions =
    status === "unknown"
      ? undefined
      : [
          {
            track: "current",
            status,
            noteIds: [1],
            evidence: [
              {
                resourceId: `${slug}-source`,
                type: "documented" as const,
                observedAt,
              },
            ],
            qualifiers: [],
          },
        ];

  return {
    slug,
    title: slug,
    capabilityKind: options.kind ?? "atomic",
    resources: resource,
    support: [{ harness: "example-cli", versions }],
  } as FeatureData;
}

describe("harness support summaries", () => {
  it("summarizes current atomic capability evidence without double-counting URLs", () => {
    const rows = harnessCapabilitySupport(
      "example-cli",
      [
        feature("supported", "yes", {
          href: "https://example.com/docs",
          observedAt: "2026-08-01",
        }),
        feature("limited", "partial", {
          href: "https://example.com/docs",
          observedAt: "2026-08-10",
        }),
        feature("unsupported", "no", {
          href: "https://example.com/limits",
          observedAt: "2026-08-08",
        }),
        feature("unreviewed", "unknown"),
        feature("umbrella", "unknown", { kind: "family" }),
      ],
      harnesses
    );
    const summary = summarizeHarnessSupport(rows);

    expect(rows).toHaveLength(4);
    expect(summary).toMatchObject({
      total: 4,
      reviewed: 3,
      coverage: 0.75,
      sourceCount: 2,
      latestEvidenceAt: "2026-08-10",
      counts: { yes: 1, partial: 1, no: 1, unknown: 1, na: 0 },
    });
  });
});
