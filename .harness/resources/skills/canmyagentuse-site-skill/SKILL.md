# Can My Agent Use site

## Product job

Help a person or an agent answer: **can this harness use this capability?**
The site is a sourced lookup table with HTML, Markdown, and JSON twins of the
same records.

It borrows the *job* and *information architecture* of caniuse.com (search a
capability, scan version stacks, read notes). It must not copy that site's
implementation, assets, palette signature, or copy.

Persistent chrome:

1. Home / News / Compare / About
2. Sentence search: **Can my agent use [____]?**
3. Index of capabilities
4. Feature page: title, spec mark, sourced-cell share, version stacks grouped
   Web / Desktop / CLI, notes tabs
5. Compare two harness columns

## Canonical layers

Keep these separate:

1. `content/` — authored corpus (Markdown + YAML frontmatter)
2. `@canmyagentuse/catalog` — schemas, paths, matrix, JSON-LD, llms serializers
3. `sites/web` — Astro routes, layouts, Worker, Cloudflare config
4. Generated surfaces — sitemap, robots, llms.txt, JSON API, `.md` pages

Do not duplicate facts in route files. Read collections, then render.

## Rendering

| Route class | Mode |
| --- | --- |
| Home, feature, harness, news, compare, about, methodology | Prerender |
| `llms.txt`, `*.md`, JSON API, OpenAPI, sitemap, robots | Prerender |
| `/api/health` | On-demand (`prerender = false`) |

`/agents` 301s to `/harnesses`. Add Cloudflare bindings only when a route needs
them.

## Cloudflare

- Adapter: `@astrojs/cloudflare` with `configPath: "./wrangler.jsonc"`
- Entry: `src/worker.ts` → `handle()` from `@astrojs/cloudflare/handler`
- Assets: `directory: "./dist"`, binding `ASSETS`
- Keep `public/.assetsignore` with `_worker.js` and `_routes.json`
- `_headers` applies to static assets only; Worker responses get headers in
  `src/lib/security.ts`
- Local check: `pnpm build` then `pnpm preview` (workerd)

## Content schema

Every collection entry includes SEO + `llmSummary` fields from the catalog
package.

Features include `category`, `specLabel`, `notes`, `issues`, `resources`, and
optional `support[]` overrides. Missing support expands to **unknown** for every
harness track.

Harnesses include `family`, `vendor`, `surface` (`web` | `desktop` | `cli`),
`tracks`, and `order`.

Unknown is the honest default. Do not invent yes/no cells. Do not publish a
global usage percentage. The feature-page figure is **sourced cells**, the share
of version tracks that are not unknown.

## Public copy

Sample catalog rows are allowed while evidence is empty. They must read as
sample records, not as fake support claims. Do not ship authoring residue such
as `TODO`, `WIP`, or `placeholder` in visible HTML.

## Provider references

Plain-text harness names (ChatGPT, Claude, Cursor, OpenCode, OpenWork Desktop,
and others) are nominative when they identify a column. Original icons only. No
logos, no official badges, no “certified” language. Escalate branded assets
through `provider-compatible-ui-skill`.

## Visual system

Night ledger: ink chrome, copper search belt, warm paper body, IBM Plex, sharp
corners, dense version stacks. Do not reuse caniuse brown/orange hex values or
microcopy.
