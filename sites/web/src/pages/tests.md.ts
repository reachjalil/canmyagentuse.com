import type { APIRoute } from "astro";
import { CONFORMANCE_TESTS } from "@canmyagentuse/catalog";
import { generatedPageMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = () => {
  const lines = [
    `${CONFORMANCE_TESTS.length} proposed definitions. None has been executed against a catalog harness.`,
    "",
    "| ID | Specification | Capability | Definition | Fixture | Requirement | Status |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...CONFORMANCE_TESTS.map(
      (test) =>
        `| ${test.id} | ${test.specification} | ${test.featureId} | ${test.name} | ${test.fixtureType} | ${test.requirementLevel} | ${test.executionStatus} |`
    ),
  ];
  return markdownResponse(
    generatedPageMarkdown({
      title: "Conformance test registry",
      path: "/tests",
      jsonPath: "/api/v1/tests.json",
      description:
        "Proposed deterministic and isolated conformance-test definitions, separated from executed results.",
      body: lines.join("\n"),
    })
  );
};
