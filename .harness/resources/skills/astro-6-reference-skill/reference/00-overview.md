# Astro 6 Reference Pack Overview

## What this pack is for

This pack is designed to let an agent go from:

- vague product idea,
- to architecture choice,
- to repo structure,
- to implementation,
- to deployment,
- to optimization and launch.

It is not just a feature catalog. It is a **delivery system**.

## What “a perfect Astro app” means in practice

For this pack, a strong Astro app usually has these traits:

- page shells are rendered as HTML first,
- interactivity is isolated into targeted islands,
- data and content boundaries are deliberate,
- routing and rendering modes are explicit,
- metadata and crawlability are complete,
- performance is treated as a design constraint, not a late optimization,
- deployment is aligned with runtime needs,
- operations are simple, typed, and predictable.

A weak Astro app usually looks like one of these:

- a React SPA accidentally wrapped in Astro,
- too many client islands with weak boundaries,
- build-time and request-time logic mixed together,
- live data fetched everywhere even when not needed,
- stale or incorrect Cloudflare setup,
- missing SEO primitives,
- large JS bundles caused by over-hydration.

## The default recommended stack

For many production Astro builds, these defaults are strong:

- Astro 6.x
- TypeScript strict mode
- `.astro` for page shells and layout composition
- React only for local interactivity
- local or build-time content collections for content-rich sections
- Actions and Sessions for simple server workflows
- Cloudflare Workers for server features
- Cloudflare static hosting for truly static output
- `astro check` in CI
- `@astrojs/sitemap` and `@astrojs/rss` where relevant
- built-in image and font handling
- minimal analytics script footprint

## How to use this pack

### If starting a new app

Read:

1. `02-agent-execution-playbook.md`
2. `08-start-to-finish-blueprint.md`
3. `12-project-shapes-and-decision-matrix.md`
4. `15-project-setup-and-config.md`
5. then the domain files you need

### If auditing an existing repo

Read:

1. `02-agent-execution-playbook.md`
2. `05-version-and-release-notes.md`
3. `10-mental-model-and-architecture.md`
4. `90-decision-matrix-and-anti-patterns.md`
5. `95-complete-delivery-checklist.md`

### If the repo uses React heavily

Read:

1. `30-react-integration.md`
2. `32-react-patterns-and-migration.md`
3. `20-routing-rendering-and-islands.md`
4. `40-assets-images-and-performance.md`

### If the repo deploys to Cloudflare

Read:

1. `35-cloudflare-deployment.md`
2. `36-cloudflare-bindings-caching-and-storage.md`
3. `65-cloudflare-ops-testing-and-release.md`

## Core Astro principles to preserve

### 1. HTML first

Astro’s strength is that most of the page can be served as HTML with little or no JS. Preserve that advantage.

### 2. Interactivity is expensive

Every hydrated island adds JS, complexity, and debugging cost. Use the lightest directive and smallest island possible.

### 3. Content and app data are different

Editorial content often wants build-time modeling. User-specific app data usually wants request-time logic. Do not treat them as the same.

### 4. Edge deployment is a contract

If you target Cloudflare, choose libraries, bindings, cache rules, and runtime APIs that actually fit the Workers model.

### 5. SEO is architecture, not garnish

Canonical logic, site/base config, sitemap generation, i18n, and route shape all affect SEO before you write meta tags.

## Strong default decision order

When designing a new Astro app, decide in this order:

1. What kind of app is this?
2. Which routes are static, hybrid, or on-demand?
3. Which content is editorial vs app data?
4. Which UI needs interactivity?
5. Which parts need React?
6. Which parts need server features?
7. What deployment/runtime does that imply?
8. What metadata, crawlability, and performance constraints must be baked in?

## What this pack deliberately emphasizes

This pack goes deep on:

- Cloudflare deployment and runtime APIs,
- React integration discipline,
- content collections and content strategy,
- actions, sessions, middleware, and endpoints,
- images, fonts, CSP, and performance,
- SEO, i18n, sitemap, and RSS,
- start-to-finish delivery and release workflow.

## What this pack does not try to do

It does not attempt to be:

- a replacement for the official API reference,
- a generic React handbook,
- a complete Cloudflare platform encyclopedia,
- a substitute for reading the current installed package versions in a repo.

## References

- Astro docs home: https://docs.astro.build/
- Astro AI guide and context files: https://docs.astro.build/en/guides/build-with-ai/
- Astro docs llms file: https://docs.astro.build/llms-full.txt
- Astro 6.1 release post: https://astro.build/blog/astro-610/
- Astro 6.0 release post: https://astro.build/blog/astro-600/
