# Routing, Rendering, and Islands

## Routing basics that matter architecturally

Astro routes are file-based under `src/pages/`. This is simple, but the real power comes from combining routing with render-mode choices.

An agent should inspect the route tree and understand:

- page routes,
- dynamic routes,
- catch-all routes,
- endpoint routes,
- which routes are prerendered,
- which routes hydrate islands,
- which routes include server-aware behavior.

## Dynamic routing and `getStaticPaths()`

Use `getStaticPaths()` when:

- the route can be generated at build time,
- the path set is known or derivable at build time,
- the content source is stable enough for prerendering.

Typical uses:

- blog posts,
- docs pages,
- author pages,
- tags/categories,
- product pages when catalog data is build-friendly.

## Islands architecture refresher

By default, framework components in Astro render as HTML only. They become interactive only when you opt into hydration with a `client:*` directive.

This is the heart of Astro’s performance model.

## `client:*` directive decision guide

### `client:load`

Use when:

- the widget must be interactive immediately,
- it is above the fold and UX-critical,
- delay would noticeably hurt functionality.

Use sparingly.

### `client:idle`

Use when:

- the widget is useful but not immediately critical,
- it can wait until the browser is idle.

Good default for many non-critical enhancements.

### `client:visible`

Use when:

- the island is below the fold,
- it only matters once seen,
- you want to protect initial JS cost.

Great for media widgets, lower-page demos, related-content tools.

### `client:media`

Use when:

- the interactivity only makes sense at certain breakpoints or media conditions.

### `client:only`

Use when:

- the component cannot render meaningfully on the server,
- the dependency truly requires client-only rendering.

Treat this as an escalation, not a default.

## How to choose the directive

Ask:

- Must this work before any idle time?
- Is it above the fold?
- Can HTML still provide a useful first render?
- Is this actually a server-aware feature better served by a server island?
- Is this below the fold?

## Server islands

Use `server:defer` when:

- the shell should render immediately,
- the fragment can load separately on the server,
- personalization or request-specific data exists,
- you want to keep the outer page cacheable.

Remember:

- props passed to a server island must be serializable,
- use fallback content for perceived performance,
- do not overuse server islands when a normal SSR route is simpler.

## Route design patterns

### Content route

- prerendered page
- content collection entry
- metadata from content frontmatter/schema
- minimal or no hydration

### Search route

Two possible shapes:

- mostly static page with a small client island for client-side or external search UX
- server route if search must be runtime and request-aware

### Hybrid public route

- static shell
- server island for request-aware or personalized block
- small client island only if UX requires it

### Authenticated route

- on-demand page
- middleware/session
- React islands where needed for dense client interaction

## Internal API and endpoint usage

You can use endpoints for:

- JSON responses,
- file generation,
- image or feed-like responses,
- explicit machine-consumable routes.

Do not create endpoints when a server action or normal page composition would be simpler.

## Rules for route files

A route file should make these things easy to infer:

- content source,
- rendering mode,
- metadata source,
- whether islands exist,
- whether server-only data is used.

If a route file hides all this behind too many abstractions, maintainability drops quickly.

## Hydration smell test

A route likely needs refactoring if:

- the hero is hydrated,
- the entire nav is hydrated,
- article content is inside a client island,
- multiple sibling islands duplicate large shared props,
- the page shell is mostly React for no strong reason.

## References

- Routing: https://docs.astro.build/en/guides/routing/
- Islands concept: https://docs.astro.build/en/concepts/islands/
- Server islands: https://docs.astro.build/en/guides/server-islands/
- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
