import { MACHINE_PATHS } from "./paths.ts";

export const CATALOG_SKILL_NAME = "can-my-agent-use";
export const CATALOG_SKILL_DESCRIPTION =
  "Look up and compare agent-harness capabilities using Can My Agent Use's read-only evidence catalog. Use when answering whether an exact web, desktop, or CLI harness supports a capability and the answer needs qualifications, verification dates, and citations.";

export const CATALOG_SKILL_DOCUMENT = `---
name: ${CATALOG_SKILL_NAME}
description: ${CATALOG_SKILL_DESCRIPTION}
---

# Can My Agent Use

Use this public, read-only catalog to answer compatibility questions about exact agent harness surfaces.

## Retrieval workflow

1. Start with the compact index at \`/llms.txt\` or the hierarchy at \`/sitemap.md\`.
2. Prefer the versioned JSON API described by \`/api/v1/openapi.json\` for deterministic lookup and comparison.
3. Use a canonical page with \`Accept: text/markdown\` when a clean narrative representation is useful. Explicit \`.md\` URLs are available as fallbacks.
4. Open the capability record and exact harness record. Do not generalize a claim from one product surface to another surface or to the provider family.
5. Inspect the target, environment profile, constraints, evidence class, observation date, and qualification notes before stating a result.
6. Cite the canonical HTML catalog page and the public evidence URL. Include the last verification or observation date.

For the broader dated research snapshot, use \`/atlas.md\` or \`/api/v1/atlas.json\`. Keep its exact surface IDs and research cutoff intact; do not merge Atlas targets into a provider-wide claim.

## Status interpretation

- \`yes\`: supported for the recorded target and conditions.
- \`partial\`: supported only under the stated constraint or with incomplete scope. Always state the qualification.
- \`no\`: the scoped evidence supports an unsupported result for that exact target.
- \`unknown\`: the catalog lacks sufficient scoped evidence. Never translate this to unsupported.
- \`na\`: the capability does not apply to the exact surface.

## Evidence rules

- Treat documented, listed, vendor-attested, reported, inferred, and tested evidence classes literally.
- Read the evidence class literally: documented, listed, vendor-attested, reported, inferred, and tested describe different kinds of support.
- Prefer newer scoped evidence, but surface contradictions rather than silently choosing a convenient source.
- Preserve plan, policy, platform, region, configuration, preview, runtime, transport, and authorization conditions.

## Comparisons

Use \`/compare?a={left-harness}&b={right-harness}&view=all\` for a readable comparison or \`/api/v1/matrix.json\` for the complete structured matrix. Link each conclusion back to its capability record because the matrix status alone does not carry every qualification.

## Safety and scope

This skill has no scripts and requests no credentials. The catalog is public and read-only. Do not infer private actions or authentication support from a catalog listing.
`;

export function catalogSkillIndex(digest: string) {
  return {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [
      {
        name: CATALOG_SKILL_NAME,
        type: "skill-md",
        description: CATALOG_SKILL_DESCRIPTION,
        url: MACHINE_PATHS.catalogSkill,
        digest,
      },
    ],
  };
}
