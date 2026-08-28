import { describe, expect, it } from "vitest";
import type { FeatureData, HarnessData } from "@canmyagentuse/catalog";
import { harnessMarkdown } from "./markdown";

const sharedMetadata = {
  locale: "en",
  description: "Fixture description",
  llmSummary: "Fixture summary",
  audience: "Engineers",
  status: "published",
  tags: [] as string[],
  updated: new Date("2026-08-28T00:00:00.000Z"),
  published: new Date("2026-08-28T00:00:00.000Z"),
} as const;

const harness = {
  ...sharedMetadata,
  slug: "example-cli",
  title: "Example CLI",
  seoTitle: "Example CLI",
  socialTitle: "Example CLI",
  socialDescription: "Example CLI",
  contentKind: "harness",
  family: "Example",
  vendor: "Example",
  surface: "cli",
  summary: "Example terminal harness.",
  tracks: ["current"],
  order: 1,
  targetKind: "release",
  execution: "local",
  defaultEnvironmentProfile: "local-default",
} as unknown as HarnessData;

const family = {
  ...sharedMetadata,
  slug: "agent-skills",
  title: "Agent skills",
  seoTitle: "Agent skills",
  socialTitle: "Agent skills",
  socialDescription: "Agent skills",
  contentKind: "feature",
  category: "extensibility",
  summary: "Portable skill packages.",
  specLabel: "Agent Skills",
  aliases: [],
  capabilityKind: "family",
  related: [],
  relations: [],
  highlight: false,
  notes: [],
  issues: [],
  resources: [],
  support: [],
} as unknown as FeatureData;

const child = {
  ...family,
  slug: "skill-manual-invocation",
  title: "Manual skill invocation",
  capabilityKind: "atomic",
  parent: family.slug,
  support: [
    {
      harness: harness.slug,
      versions: [
        {
          track: "current",
          status: "yes",
          noteIds: [],
          qualifiers: [],
          evidence: [],
        },
      ],
    },
  ],
} as FeatureData;

describe("harnessMarkdown", () => {
  it("links derived capability families as well as their atomic children", () => {
    const document = harnessMarkdown({
      harness,
      harnesses: [harness],
      features: [family, child],
      body: "Example harness body.",
    });

    expect(document).toContain("## Capability family summaries");
    expect(document).toContain("[Agent skills](/features/agent-skills.md)");
    expect(document).toContain("1/1 supported or partial; 1/1 reviewed");
    expect(document).toContain(
      "[Manual skill invocation](/features/skill-manual-invocation.md)"
    );
  });
});
