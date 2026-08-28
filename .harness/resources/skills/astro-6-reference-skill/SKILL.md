---
name: astro-6-reference-skill
description: Use when you need an end-to-end guide for Astro 6.x architecture, React islands, Cloudflare deployment, content, actions, sessions, SEO, performance, and production hardening. Do NOT use for non-Astro or generic frontend-only work.
---

# Astro 6 Reference Skill

## Purpose

This skill is meant to be a **build-from-zero to production** reference pack for Astro 6.x.

It is intentionally optimized for agentic work. An agent using this skill should be able to:

- choose the correct Astro architecture before writing code,
- scaffold a clean project with safe defaults,
- decide what belongs in `.astro`, what belongs in React, and what must stay on the server,
- structure content, routes, layouts, metadata, and interactivity correctly,
- deploy and harden the app on Cloudflare,
- optimize for performance, SEO, accessibility, and maintainability,
- upgrade or audit an existing Astro codebase without falling back to SPA habits.

## Version Scope

This pack targets **Astro 6.x**, with extra attention to **Astro 6.1** behavior and surrounding documentation.

Important clarification:

- The release post URL ends in `astro-610`, but the release is **Astro 6.1**, not 6.10.
- Astro 6 introduced several meaningful shifts that affect architecture and deployment:
  - Node 22+ requirement,
  - improved Cloudflare runtime parity in development,
  - built-in Fonts API,
  - stable CSP support,
  - Live Content Collections,
  - modernized Cloudflare adapter behavior.
- Astro 6.1 added improvements relevant to production quality:
  - codec-specific image defaults,
  - i18n fallback route support for integrations,
  - smoother mobile view transitions,
  - hydration-related React fixes.

When repo behavior and docs disagree, prefer the current official docs and the repo’s installed package versions.

## Primary Outcome

An agent using this skill should be able to produce a **high-quality Astro application** from beginning to end, including:

- architecture decisions,
- project layout,
- rendering strategy,
- component boundaries,
- React integration,
- content model,
- forms and actions,
- sessions and middleware,
- deployment to Cloudflare,
- performance tuning,
- SEO and internationalization,
- testing, release, and operations.

## When to Use

Use this skill when the task involves one or more of these:

- starting a new Astro project,
- migrating a React-heavy or framework-heavy frontend to Astro,
- reviewing or repairing an Astro codebase,
- integrating React into Astro responsibly,
- deploying Astro to Cloudflare Workers or static hosting on Cloudflare,
- building a content site, docs site, hybrid marketing + app surface, or edge-rendered site,
- designing structured content with collections or live content,
- implementing SEO, sitemaps, RSS, i18n, or metadata systems,
- implementing forms, actions, sessions, middleware, endpoints, or personalization,
- reducing JS, fixing hydration problems, or improving core performance.

## Do NOT Use

Do NOT use this as the primary skill when:

- the project is a plain React SPA with no Astro shell,
- the runtime is unrelated to Astro,
- the task is generic CSS or UI design critique with no Astro code implications,
- the deployment target is not Astro-compatible and Astro is not part of the final solution,
- the user only needs a tiny syntax answer better served by the official API reference alone.

## Inputs

The more of these the agent has, the better the output:

- Astro version and adapter version,
- package manager and Node version,
- deployment target,
- whether the app is fully static, hybrid, or mostly on-demand,
- desired use of React and other UI frameworks,
- route inventory,
- content sources,
- authentication and personalization needs,
- SEO, i18n, and analytics requirements,
- performance budget,
- current repository structure,
- existing pain points or migration blockers.

## Outputs

This skill should help produce:

- implementation plans,
- repo audits,
- architecture decisions,
- route and rendering maps,
- Cloudflare deployment plans,
- React integration plans,
- SEO and performance remediation plans,
- content model guidance,
- code-navigation checklists,
- production hardening checklists.

## Default Architecture Bias

Unless the repo or requirements clearly demand something else, bias toward:

1. **Astro-first HTML** for page shells and layout composition.
2. **Static or hybrid rendering** unless user-specific freshness requires full on-demand rendering.
3. **Minimal React islands** only where interactivity actually exists.
4. **Build-time content collections** for most editorial content.
5. **Server-side forms/actions/sessions** instead of client-side state machines when progressive enhancement is possible.
6. **Cloudflare Workers for server features** and Cloudflare static hosting only for truly static output.
7. **Typed configuration and predictable deployment** over clever runtime magic.

## Workflow

1. **Identify the app shape.** Decide whether the app is a marketing site, docs site, blog, commerce frontend, hybrid app, or authenticated app shell.
2. **Identify the rendering model.** Decide static vs hybrid vs server output, and route-level `prerender` overrides.
3. **Map the content system.** Decide local content collections vs build-time remote loaders vs live content vs app data from a database/API.
4. **Set the component boundary.** Keep shells in `.astro`, put islands in React only where needed, and keep server-only code on the server.
5. **Set Cloudflare strategy.** Decide static vs Workers, bindings, caching, and runtime APIs.
6. **Plan metadata and crawlability.** Build canonical, sitemap, RSS, robots, hreflang, and schema strategy before launch.
7. **Constrain JS aggressively.** Hydrate the fewest possible components using the latest possible `client:*` directive.
8. **Implement testing and operations.** Add `astro check`, typing, e2e verification, bundle analysis, and release checklists.

## Quality Checklist

Before completing a task that uses this skill, verify that:

- The rendering mode is explicit at the route level where it matters.
- `.astro` remains the default for shells, layout, and HTML-first rendering.
- React is only hydrated where interactivity requires it.
- Content is typed and sourced deliberately.
- Cloudflare guidance matches current Astro 6 adapter behavior.
- Runtime APIs use current access patterns, not removed ones.
- SEO includes canonical, robots, sitemap, social metadata, and i18n/hreflang where needed.
- Performance guidance includes islands, images, fonts, cache strategy, and JS budget.
- Personalized or authenticated features do not poison full-page caching.
- The final advice includes operational verification, not just implementation notes.

## Read Order

### Start here for almost every task

1. `reference/00-overview.md`
2. `reference/02-agent-execution-playbook.md`
3. `reference/05-version-and-release-notes.md`
4. `reference/08-start-to-finish-blueprint.md`
5. `reference/10-mental-model-and-architecture.md`

### Then branch by task

- **Project setup and structure**
  - `reference/12-project-shapes-and-decision-matrix.md`
  - `reference/14-folder-structure-and-conventions.md`
  - `reference/15-project-setup-and-config.md`

- **Rendering and routing**
  - `reference/18-rendering-modes-prerender-server-partial.md`
  - `reference/20-routing-rendering-and-islands.md`
  - `reference/22-server-islands-endpoints-and-forms.md`

- **Data and content**
  - `reference/25-data-fetching-caching-and-env.md`
  - `reference/45-content-collections-and-mdx.md`
  - `reference/47-cms-search-and-authoring-strategy.md`

- **React**
  - `reference/30-react-integration.md`
  - `reference/32-react-patterns-and-migration.md`

- **Cloudflare**
  - `reference/35-cloudflare-deployment.md`
  - `reference/36-cloudflare-bindings-caching-and-storage.md`
  - `reference/65-cloudflare-ops-testing-and-release.md`

- **Performance, SEO, security**
  - `reference/40-assets-images-and-performance.md`
  - `reference/42-fonts-csp-and-security.md`
  - `reference/55-seo-metadata-sitemaps-and-i18n.md`
  - `reference/57-analytics-observability-and-search.md`

- **Productivity and release**
  - `reference/70-view-transitions-and-navigation.md`
  - `reference/75-testing-debugging-upgrades-and-operations.md`
  - `reference/80-pattern-catalog.md`
  - `reference/85-scenario-recipes.md`
  - `reference/90-decision-matrix-and-anti-patterns.md`
  - `reference/95-complete-delivery-checklist.md`
  - `reference/98-copy-paste-starters.md`

## Source-First Repo Navigation

When working in a real Astro repo, inspect these first:

- `package.json`
- `astro.config.mjs` or `astro.config.ts`
- `tsconfig.json`
- `src/pages/**`
- `src/layouts/**`
- `src/components/**`
- `src/content.config.ts`
- `src/content/**`
- `src/actions/**` or `src/actions/index.ts`
- `src/middleware.ts`
- `public/**`
- `wrangler.jsonc` or `wrangler.toml`
- any Cloudflare-specific worker entrypoints
- test config and CI config

Then trace all files using:

- `client:*`
- `server:defer`
- `getStaticPaths()`
- `prerender`
- `partial`
- `Astro.request`
- `Astro.locals`
- `Astro.session`
- `astro:content`
- `astro:assets`
- `astro:actions`
- `astro:env`
- `astro:transitions`

## Operating Rules for Agents

- Do not default to a SPA architecture.
- Do not hydrate entire pages when a small island will do.
- Do not use live/runtime data for editorial content unless freshness genuinely requires it.
- Do not use outdated Cloudflare runtime APIs in Astro 6.
- Do not suggest generic React patterns when Astro-native patterns are better.
- Do not ship an Astro site without metadata, sitemap, and deployment verification.

## References

See all files under `reference/`.
