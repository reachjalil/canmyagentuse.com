# Can My Agent Use

Independent, evidence-led support tables for chat, desktop, and CLI agent
harnesses. Look up a capability, compare columns, read the documented limits,
and leave with a public citation. The implementation, night-ledger identity,
assets, and copy are original.

Catalog v1 sources a deliberately tight current-track wave: MCP tools, MCP
Apps, workspace files, terminal, computer use, and skills across selected major
harnesses. Every other matrix cell stays **unknown** until a dated note cites
public evidence. See `IDENTITY.md`, the methodology at `/methodology`, and
`CONTRIBUTING.md`.

The production model incorporates the 2026-08-28 deep-dive in `md/`: the
canonical assertion is feature revision × exact surface target × environment
profile. Support statements retain structured qualifiers, typed evidence,
review dates, source IDs, contradictions, and proposed conformance definitions.
Documentation evidence is never presented as runtime certification.

## Layout

```text
content/                 portable Markdown corpus
  specifications/        revision-aware protocol and convention references
packages/catalog         schemas, relations, search, coverage, OpenAPI, matrix
sites/web                Astro 7 site on Cloudflare Workers
.harness/                durable agent configuration
```

## Why this shape

Reviewed against the Workspaces Hub Astro sites (`hello-mcp`, `hire-jalil`) and
current Astro 7 / `@astrojs/cloudflare` 14 / Wrangler 4 docs:

- **Workers, not Pages.** Astro 6+ dropped Pages as the adapter target.
- **Wrangler in repo.** `sites/web/wrangler.jsonc` names the Worker, points
  `main` at `src/worker.ts`, and serves `dist/` as Workers Static Assets.
- **Custom Worker wrapper.** `handle()` from `@astrojs/cloudflare/handler`
  applies host redirects and security headers, matching Hub sites that need
  more than the generated entrypoint.
- **Static-first HTML.** Content pages are prerendered. `/search` and
  `/api/health` opt into on-demand rendering because the request query or live
  Worker state is part of their response; the corpus and dense catalog views
  remain static.
- **Scoped lookup.** The sentence-style query composer searches the complete
  index or narrows to capabilities, harness surfaces, or specifications. Scope
  survives server rendering and exact matches open their canonical record.
- **Bindings only when needed.** KV/D1 are documented, not provisioned. Bindings
  are unavailable on purely static hosting.
- **Portable corpus.** `content/` is locale-aware Markdown with SEO and
  `llmSummary` fields. Collections load it from the site; facts do not live in
  route files.
- **Agent twins.** HTML, `.md`, JSON, OpenAPI, `llms.txt`, and `llms-full.txt`
  are generated from the same collections.
- **Inspectable trust.** `/evidence`, `/coverage`, `/tests`, `/changes`, and
  `/contradictions` expose provenance, research completeness, test boundaries,
  history, and unresolved scope conflicts instead of collapsing them into the
  grid.
- **Pre-deploy integrity.** `catalog:validate` applies the Zod schemas and then
  rejects duplicate support rows or tracks, invalid environment profiles,
  evidence metadata mismatches, unresolved parent/related/specification links,
  and unknown harness references.
- **No synthetic score.** Coverage counts reviewed cells only. The catalog does
  not invent usage share, market share, quality rankings, or parent conformance.

## Commands

```sh
pnpm install
pnpm setup:harness
pnpm dev
pnpm --filter @canmyagentuse/web catalog:validate
pnpm check
pnpm test
pnpm build
pnpm preview
```

From `sites/web`, preview with `pnpm exec astro preview --host 127.0.0.1 --port 4323`
(do not insert an extra `--` after `pnpm preview`).

Deploy from `sites/web` after a Cloudflare account is connected. Astro writes
the deployable Worker config to `dist/server/wrangler.json`:

```sh
pnpm --filter @canmyagentuse/web deploy
```

No KV, D1, R2, or secret binding is required for the current static-first
catalog. Do not provision one unless a runtime route needs it.

### Attach `canmyagentuse.com`

Domain attachment is a human Cloudflare account step; the repository does not
contain account IDs or credentials.

1. Add `canmyagentuse.com` as an active Cloudflare zone and deploy the
   `canmyagentuse` Worker.
2. In **Workers & Pages → canmyagentuse → Settings → Domains & Routes**, add
   `canmyagentuse.com` as a Custom Domain. Cloudflare creates the DNS record and
   certificate for the exact hostname.
3. Add `www.canmyagentuse.com` as a second Custom Domain if both hostnames should
   serve the Worker, or create a Cloudflare redirect rule from `www` to the apex.
   A redirect hostname needs a proxied DNS record.
4. Verify the apex, the chosen `www` behavior, `/api/health`, `/robots.txt`, and
   `/sitemap.xml` after certificates are active.

Cloudflare's current Custom Domains guide is the operational source:
<https://developers.cloudflare.com/workers/configuration/routing/custom-domains/>.

## Agent-readable surfaces

| Path | Job |
| --- | --- |
| `/llms.txt` | Bounded index of Markdown twins |
| `/llms-full.txt` | Full corpus |
| `/prompt.txt` | Canonical agent prompt (HTML page at `/prompt`, press kit at `/press`) |
| `/features/{slug}.md` | Capability as Markdown |
| `/harnesses/{slug}.md` | Harness as Markdown |
| `/specs/{slug}.md` | Specification reference as Markdown |
| `/api/v1/openapi.json` | Catalog API description |
| `/api/v1/harnesses.json` | Harness columns |
| `/api/v1/specs.json` | Specification and convention references |
| `/api/v1/matrix.json` | Feature × harness cells |
| `/api/v1/evidence.json` | Reviewed sources and citing statements |
| `/api/v1/coverage.json` | Current-track research completeness by surface, capability, and harness |
| `/api/v1/tests.json` | Proposed, not-run conformance definitions |
| `/api/v1/changes.json` | Standards and host milestone feed |
| `/api/v1/contradictions.json` | Scope conflicts and governance questions |
| `/sitemap.xml` | Indexable HTML routes |
| `/feed.xml` and `/feed.json` | Catalog news in RSS 2.0 and JSON Feed 1.1 |
| `/opensearch.xml` | Browser search discovery for the unified catalog index |
| `/.well-known/ai.txt` | Short machine pointer |

`/agents` redirects to `/harnesses`.

## Content

Author entries under `content/<collection>/<locale>/<slug>.md`. Required
frontmatter is defined by `@canmyagentuse/catalog`. Keep support cells
`unknown` until a dated, citable note, exact target, environment profile, and
typed evidence record exist.

The build runs structural and cross-entry catalog validation before generating
deterministic social cards and Astro output. The JSON API is documented with
OpenAPI 3.1 reusable schemas, operation IDs, evidence semantics, and CORS-ready
read-only responses.

Harness names are plain-text nominative references. Do not copy logos, HTML,
CSS, or microcopy from those products. See `provider-compatible-ui-skill`.
