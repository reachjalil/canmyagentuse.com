# Repository Guidelines

## Harness Config

This repository uses Harness config for durable agent configuration. Treat
`.harness/` as the source of truth. Do not edit `.agents/`, `.claude/`,
`.cursor/`, `.gemini/`, or root `AGENTS.md` as durable source. Update `.harness`
sources, run `pnpm harness:validate`, preview with `pnpm harness:preview`, then
apply with `pnpm harness:activate`.

Can My Agent Use is a content-first compatibility catalog for chat, desktop,
and CLI agent harnesses. It is inspired by caniuse.com's job and information
architecture — lookup, compare, cite — not a replica of that product's
implementation, assets, or copy.

## Structure

- `content/` is the portable corpus. Author Markdown here, not inside
  `src/pages`.
- `packages/` holds shared typed libraries. Put schemas, path helpers, JSON-LD,
  and machine-document serializers in `@canmyagentuse/catalog` before adding
  site-local copies.
- `sites/` holds Astro sites. `sites/web` is the public Cloudflare Workers site.
- Do not add a top-level `workers/` folder. Worker entrypoints live next to the
  site that deploys them (`sites/web/src/worker.ts`).

## Site architecture

- Astro 7 with `@astrojs/cloudflare` targeting **Cloudflare Workers**.
- Default to **prerendered HTML**. Opt a route out with
  `export const prerender = false` only when the request must see runtime state.
- Keep page shells in `.astro`. Do not add a React island until an interaction
  cannot be done with HTML and a small script.
- Wrangler config is `sites/web/wrangler.jsonc`. The Worker entry is
  `sites/web/src/worker.ts`, which wraps `@astrojs/cloudflare/handler`.
- Access bindings with `import { env } from "cloudflare:workers"`. Do not use
  the removed `Astro.locals.runtime` API.
- Add `nodejs_compat` only when the Worker bundle actually needs Node APIs.

## Content and SEO

Every public entry needs metadata for three consumers:

- Search: `seoTitle`, `description`, canonical path, dates, tags, JSON-LD
- Sharing: `socialTitle`, `socialDescription`, preview image + alt
- Agents: `llmSummary`, `audience`, `contentKind`, and a `.md` twin of the page

Prefer plain Markdown. Use MDX only when a page must embed components. Locale is
required on every entry even while English is the only published locale.

## Agent-ready surfaces

Keep these generated from the same collections as the HTML routes:

- `/llms.txt` and `/llms-full.txt`
- `/features/{slug}.md` and `/harnesses/{slug}.md`
- `/api/v1/*.json` and `/api/v1/openapi.json`
- `/sitemap.xml` and `/robots.txt`

Do not hand-maintain those files in `public/`.

## Provider names and visual identity

This product's identity stays dominant. Provider and agent names may appear as
plain text when they truthfully identify a catalog row. Do not copy provider
HTML, CSS, logos, fonts, screenshots, or microcopy. Do not imply affiliation,
certification, or official status. Use `provider-compatible-ui-skill` before
adding branded marks, comparative marketing, or close visual imitation.

## Tooling

- Package manager: `pnpm`
- Formatter/linter: Biome
- Task runner: Turbo
- TypeScript is strict
- Tests: Vitest, colocated `*.test.ts`

Validate with the narrowest command first (`pnpm --filter <pkg> check`), then
`pnpm check`, `pnpm test`, and `pnpm build`.
