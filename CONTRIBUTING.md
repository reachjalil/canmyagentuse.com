# Contributing to Can My Agent Use

Can My Agent Use publishes compatibility claims, not guesses. Keep facts in `content/`, shared behavior in `@canmyagentuse/catalog`, and page shells in `sites/web`.

## Before editing

Use Node.js 22.12 or newer and pnpm. Install dependencies, restore generated agent configuration, and start with the narrowest relevant check:

```sh
pnpm install
pnpm setup:harness
pnpm --filter @canmyagentuse/catalog check
```

Durable agent configuration lives under `.harness/`. Do not edit root `AGENTS.md`, `.agents/`, `.claude/`, `.cursor/`, or `.gemini/` as source. When durable agent configuration changes, update `.harness/`, run `pnpm harness:validate`, review `pnpm harness:preview`, and apply with `pnpm harness:activate`.

## Add a harness

Create `content/harnesses/en/<slug>.md` using an existing entry as a structural reference. Provide all SEO, sharing, and agent metadata plus:

- `family` and `vendor`
- `surface`: `web`, `desktop`, or `cli`
- a plain-language `summary`
- `tracks`: normally `current` and `preview`
- an `order` within the surface group
- an optional public `homepage`

Use the provider name only as plain-text identification. Do not add provider logos, official palettes, screenshots, fonts, badges, copied copy, or affiliation language. A new harness receives unknown cells automatically; do not add support facts to the harness file.

## Add a feature

Create `content/features/en/<slug>.md`. Define the capability narrowly enough that two reviewers would classify the same evidence the same way. Set the appropriate category, summary, spec label, metadata, body copy, and empty `support` list.

Missing support expands to unknown for every published harness track. That is the desired starting state.

## Add or change a support override

Support facts live on the feature. Use an explicit version entry; never use the shorthand `status` field for a sourced claim.

```yaml
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the product documentation says the current harness can invoke tools exposed by configured MCP servers."
resources:
  - id: vendor-mcp-tools
    title: Product MCP documentation
    href: https://vendor.example/docs/mcp
    kind: docs
    publisher: Example Vendor
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: example-cli
    versions:
      - track: current
        status: yes
        noteIds:
          - 1
        target:
          kind: dated-documentation
          revision: current Example CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vendor-mcp-tools
            type: documented
            observedAt: 2026-08-28
```

Every non-unknown cell must:

1. Name an existing harness slug.
2. Target an existing harness track.
3. Use one of `yes`, `partial`, `no`, or `na`.
4. Reference at least one note ID declared on the feature.
5. Identify a release, dated hosted observation, or explicitly dated documentation target.
6. Name an environment profile and retain every material condition as a structured qualifier.
7. Include a typed, dated evidence reference that resolves to a stable resource ID.
8. Link at least one public HTTPS source in `resources` and record its evidence class and review date.

Prefer vendor documentation, vendor changelogs, maintained first-party repositories, or the relevant open-standard documentation. Do not use rumors, private UI screenshots, unsupported inference, or a missing documentation entry as proof of `no`.

- `yes`: evidence demonstrates the capability without a material limit for the row definition.
- `partial`: evidence demonstrates the capability and a meaningful limit. State the limit in the note.
- `no`: a current source explicitly says the capability is unsupported.
- `na`: evidence shows the capability does not apply to the harness type.
- `unknown`: no override is needed; this is the default.

Catalog tracks are `current` and `preview`; they are not vendor channel names. Source them separately.

## Evidence types and conflicts

Keep provenance literal: `documented`, `tested`, `vendor-attested`, `listed`, `reported`, `inferred`, or `not-found`. The production v1 rows are documentation- or listing-derived; the conformance registry contains definitions only. Never label a cell tested because a vendor page documents the feature.

Plan, policy, region, authorization, transport, protocol revision, role, feature flag, runtime, preview state, and vendor extensions belong in `qualifiers`. Do not create synthetic product names to encode those conditions.

When two credible sources disagree, add or update the contradiction ledger instead of selecting the more convenient claim. Community posts are discovery signals: they can open an investigation, but they cannot independently make a definitive support or no-support cell.

## Add a specification reference

Create `content/specifications/en/<slug>.md` with the authority, current reviewed revision, maturity, structure, roles, aliases, canonical source, and full metadata. Specification entries describe the interoperability layer; feature entries remain atomic compatibility questions. Do not replace MCP tools, resources, prompts, transport, authorization, sampling, elicitation, or tasks with one broad “MCP support” row.

## Content and identity rules

Every public entry needs search metadata, sharing metadata, and agent metadata. HTML, Markdown, JSON, `llms.txt`, OpenAPI, robots, and sitemap surfaces are generated from collections; do not hand-maintain generated copies in `public/`.

Read `IDENTITY.md` before changing public product copy or visuals. The Can My Agent Use identity must dominate, the independent notice stays visible, and provider references remain secondary and nominative.

## Tests and review

Catalog helpers use colocated Vitest tests. Add deterministic fixtures next to the helper and assert explicit fields rather than broad snapshots. A support change should at minimum pass the catalog tests and the web content check:

```sh
pnpm --filter @canmyagentuse/catalog test
pnpm --filter @canmyagentuse/catalog check
pnpm --filter @canmyagentuse/web check
```

Before handing off a release:

```sh
pnpm check
pnpm test
pnpm build
```

Then preview from `sites/web`:

```sh
pnpm exec astro preview --host 127.0.0.1 --port 4323
```

Verify home search, a sourced feature matrix, a harness page, compare, news, about, methodology, privacy, and the 404 page at desktop and narrow widths. Confirm sourced and unknown cells remain visually and textually distinct.
