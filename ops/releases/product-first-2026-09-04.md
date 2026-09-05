# Product-first launch proof

Local date: 2026-09-04 (America/Los_Angeles); deployment UTC date: 2026-09-05.

- Content commit: `9ce2f846fc2e3ece67581abe7491e322cd03c6a7`.
- Main push: fast-forward from `1ec49df`; clean tree after content commit.
- Cloudflare Worker: `canmyagentuse`.
- Production version: `d9ba2790-ba60-464d-8803-3c90e00aa1c4`.
- Public site: https://canmyagentuse.com.
- CI: https://github.com/reachjalil/canmyagentuse.com/actions/runs/33938774288 (success).

## Scope

13 guides: Cloudflare, Gmail, Salesforce, Notion, Obsidian, OneNote, GitHub,
Slack, Linear, Atom Tickets, AMC Theatres, Best Buy, and Amazon. Each guide
has four distinct lifecycle answers and five distinct interface checks. This
is an initial documented set, not exhaustive service coverage or a live-test
certification. Existing 125 features, 31 harnesses, 12 specifications, one
report, and the dated Evidence Atlas are retained.

The movie-ticket article explains documented Atom partner flows, chain-level
coverage, AMC's restricted commerce access, and the proposed receipt-based live
test. No third-party accounts, seats, payments, or messages were created.
OpenWork's placement and funding disclosure were explicitly authorized by the
owner. Advertising does not change research assertions.

## Validation

- `pnpm biome:check`: clean, 167 supported files checked after final edits.
- `pnpm check --force`: all three packages passed; Astro 173 files with zero errors, warnings, or hints.
- `pnpm test --force`: 71 catalog tests and 45 web tests passed (116 total).
- `pnpm build --force`: all three packages passed with no cache reuse.
- Compiled Worker preview: all 13 guide HTML, Markdown, JSON, source URLs, and social PNGs returned HTTP 200; shared action/interface data and narrative bodies matched.
- Browser: category, MCP filter, official-only option, combined-requirement empty state, text search, reset, URL restoration, Salesforce details, and movie article verified. Notes plus MCP showed two records; official-only narrowed to Notion; adding MCP Apps showed the explicit evidence gap.
- Visual review: desktop homepage/article and 390px product detail/finder. No page-width overflow; comparison scrolls within its region. No browser console errors observed during these checks.
- Production: cache-busted HTML/Markdown/JSON and source/asset checks passed for all 13 guides, along with OpenAPI Product schema, llms indexes, sitemap, product search HTML/Markdown, sponsor policy, press kit, canonical prompt, public skill, movie article, matrix, coverage API, and representative old harness/feature routes. The browser verified the live official-MCP notes filter and labeled sponsor placement.

## Hosting observation

Python-urllib's default User-Agent returned HTTP 403 with Cloudflare error
1010 at the edge. Curl, the browser, and Python identifying itself honestly as
`CanMyAgentUse-ReleaseCheck/1.0 (+https://canmyagentuse.com)` returned HTTP 200.
The full automated production readback used that descriptive User-Agent.
[Cloudflare's 1010 documentation](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1010/)
identifies a browser-signature restriction. No zone security settings were
changed. The backlog records investigation of a narrow public-machine-route
policy, preserving write-endpoint protections.

## Ongoing publication

Updated the existing `continue-catalog-coverage` heartbeat through Codex's
automation tool; did not create a duplicate. It is ACTIVE, named “Expand
product coverage”, hourly, and attached to task
`01a06f37-e7d0-7bd2-855b-5a676462bf2b`. The saved prompt follows
`ops/PRODUCT-STRATEGY.md`, preserves unrelated work, prioritizes 2–4 sourced
product additions/improvements per batch, runs checks before publishing,
verifies production, reconciles the ledger, and stays quiet on unchanged
cycles. Live transactions and outreach remain outside its authority.
