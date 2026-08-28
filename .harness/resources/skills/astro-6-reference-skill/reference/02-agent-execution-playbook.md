# Agent Execution Playbook for Astro 6

## Goal

Use this file when you need the agent to behave like a careful Astro implementation lead, not a generic coder.

The agent should be able to move from **requirements** to **production-ready Astro changes** while staying aligned with the framework.

## Source priority

When the agent needs truth, use this order:

1. The repo’s installed package versions and source code.
2. Official Astro docs.
3. Official Astro release notes and upgrade guides.
4. Official Cloudflare docs for platform behavior.
5. Only then community examples or general web knowledge.

If sources conflict, prefer the source that is:

- newer,
- official,
- closer to the repo’s installed versions,
- closer to the actual runtime target.

## Use the Astro docs for agent context

Astro provides agent-friendly context sources. If your environment supports them, use them.

Preferred order:

1. Astro Docs MCP server
2. `llms-full.txt`
3. normal docs pages and API reference

Why this matters:

- Astro evolves quickly enough that older general model knowledge can drift.
- The Cloudflare adapter in Astro 6 changed in important ways.
- Actions, sessions, live content collections, fonts, and some integration behavior are easy to misremember.

## Phase 0: understand the repo before changing code

Inspect:

- `package.json`
- `astro.config.*`
- `tsconfig.json`
- `src/pages/**`
- `src/layouts/**`
- `src/components/**`
- `src/content.config.*`
- `src/content/**`
- `src/actions/**`
- `src/middleware.ts`
- `public/**`
- `wrangler.*`
- CI files

Record:

- Astro version
- adapter/runtime
- output mode
- integrations
- React presence
- Tailwind or styling stack
- SEO primitives already present
- tests and release scripts

## Phase 1: classify the application

Determine which of these it is:

- marketing site,
- docs site,
- blog or publication,
- headless content frontend,
- commerce frontend,
- hybrid marketing + app,
- authenticated portal,
- dashboard or operational UI.

This classification decides almost everything that follows.

## Phase 2: map rendering boundaries

For each important route, determine:

- can it be fully prerendered?
- does it need on-demand data?
- does it contain personalized regions?
- can a server island isolate those personalized regions?
- does any part need client hydration?

Create a route map with columns like:

- route
- route purpose
- content source
- render mode
- island usage
- caching strategy
- SEO notes

## Phase 3: map component boundaries

For each interactive feature, decide:

- Can this stay pure HTML?
- Can it be a progressive enhancement form?
- Can it be a tiny hydrated island?
- Does it truly need React state or a complex client lifecycle?
- Can it be a server island instead of a client island?

Strong Astro agents are conservative here. They do not hydrate by habit.

## Phase 4: map data boundaries

Separate data into three buckets:

### Build-time content

Examples:

- blog posts,
- docs pages,
- author bios,
- pricing tables that change rarely,
- documentation navigation.

Good fit for:

- local content collections,
- build-time remote loaders,
- MDX.

### Request-time shared data

Examples:

- inventory snapshots,
- rapidly changing CMS content,
- public dashboards,
- search results.

Good fit for:

- live content collections,
- SSR fetch,
- cached endpoints,
- server islands.

### User-specific data

Examples:

- session-backed nav,
- saved items,
- account state,
- experiments by user,
- access-controlled content.

Good fit for:

- on-demand routes,
- actions,
- sessions,
- middleware,
- server islands,
- careful cache segmentation.

## Phase 5: plan deployment before implementation

For Astro, deployment is not an afterthought.

Decide early:

- static only vs server features,
- Cloudflare Pages/static host vs Cloudflare Workers,
- secrets and bindings,
- session storage,
- cache boundaries,
- image strategy,
- operational preview and release flow.

## Phase 6: implement with Astro-native bias

### Prefer these first

- `.astro` layouts and pages
- slots
- content collections
- `getStaticPaths()`
- `prerender` route control
- server forms and actions
- server islands
- minimal `client:*`

### Escalate only when needed

- React islands
- large client state
- live content
- complex server runtime dependencies
- custom Worker entrypoints

## Phase 7: verify before declaring success

The agent should not stop at “the code compiles”.

Verify:

- `astro check`
- type generation
- route behavior in dev/preview
- metadata and canonical output
- sitemap and robots
- JS and image budgets
- Cloudflare bindings/types
- non-JS behavior for forms and navigation
- error states
- authenticated flows
- bundle size and hydration scope

## Repo review questions the agent should answer automatically

- Which routes are static and which are on-demand?
- Where is React actually necessary?
- Are there whole-page islands that should be broken apart?
- Is content modeled with typed collections?
- Are there user-specific responses being cached broadly?
- Are outdated Cloudflare APIs in use?
- Is `site` configured?
- Are sitemaps, canonical tags, and robots present?
- Are fonts and images optimized?
- Is the app shipping more JS than the UX requires?
- Is there a safer or simpler Astro-native pattern available?

## Common failure modes

### Failure mode: “Astro app” is basically a React SPA

Symptoms:

- large layout wrappers hydrated on every page,
- client router mentality everywhere,
- little server-first rendering advantage.

Fix:

- move shell back into `.astro`,
- hydrate only local islands,
- move forms and data mutations server-side where possible.

### Failure mode: content is fetched live with no good reason

Symptoms:

- CMS or API fetches on every request for docs/blog content,
- slower TTFB,
- harder caching.

Fix:

- move editorial content to build-time collections or build-time loaders unless freshness truly requires runtime fetching.

### Failure mode: Cloudflare config is stale

Symptoms:

- old runtime access patterns,
- Wrangler config mismatch,
- Node assumptions that break under `workerd`.

Fix:

- audit against current `@astrojs/cloudflare` docs and actual adapter version.

### Failure mode: SEO is added too late

Symptoms:

- missing canonical URLs,
- wrong base/site configuration,
- incomplete hreflang,
- no staging noindex policy.

Fix:

- design metadata and crawlability at the route/layout level from the beginning.

## Agent delivery format that works best

When the agent finishes analysis or implementation, return:

1. app shape summary,
2. rendering map,
3. component boundary map,
4. content/data strategy,
5. deployment/runtime strategy,
6. SEO/performance findings,
7. prioritized changes,
8. verification checklist.

## References

- Astro AI guide: https://docs.astro.build/en/guides/build-with-ai/
- Astro docs `llms-full.txt`: https://docs.astro.build/llms-full.txt
- Astro CLI reference: https://docs.astro.build/en/reference/cli-reference/
- Astro project structure: https://docs.astro.build/en/basics/project-structure/
