# React Patterns and Migration Paths in Astro

## Goal

This file answers the practical question: how do you integrate React deeply without losing Astro’s advantages?

## Pattern 1: island-first migration

Use when:

- you have a few mature React widgets,
- the page shell can move to `.astro`,
- you want fast wins.

Steps:

1. Keep the React components.
2. Render them inside `.astro` pages/layouts.
3. Add `client:*` only where interactivity is required.
4. Move content and metadata out of React wrappers.
5. Reduce shared root state and providers.

This is often the safest migration path.

## Pattern 2: hybrid content + React demos

Use when:

- the site is docs-heavy,
- prose content is mostly Astro/MDX,
- some pages need embedded playgrounds or interactive examples.

Architecture:

- MDX/content collections for body content
- React islands for demos and playgrounds
- avoid hydrating entire docs layouts

## Pattern 3: app-shell islands inside Astro routes

Use when:

- the route is mostly server-aware,
- the shell still benefits from Astro,
- only some dense panes/widgets need React.

Examples:

- dashboard route with React charts and filters
- billing page with a React invoice widget
- account settings page with a few interactive forms

## Pattern 4: progressive enhancement forms with React action state

Use when:

- mutation logic should stay server-owned,
- the UI benefits from pending or optimistic state,
- you want a path that still respects non-JS fallback.

This is a strong compromise between resilience and rich UX.

## Migrating from a full React SPA

### First classify components

#### Keep in React
- complex widgets,
- charts,
- deeply stateful forms,
- existing library-driven UI with real complexity.

#### Move to `.astro`
- page wrappers,
- layout shells,
- article templates,
- cards and static lists,
- metadata shells,
- content sections.

### Then classify routes

Routes that can become static first:

- marketing pages,
- docs/help,
- content sections,
- legal pages.

Routes that may remain on-demand:

- dashboard,
- account,
- settings,
- internal tools.

## Provider discipline

A common migration smell is preserving a giant global React provider tree even after moving to Astro.

Prefer:

- local providers near the widget that needs them,
- page-level provider only if the whole route truly depends on it,
- no provider at all when plain props or server rendering is enough.

## Data handoff rules

When passing data from Astro to React:

- serialize only what the widget needs,
- normalize shapes,
- avoid passing whole request or content objects,
- do not send secrets or privileged data,
- render content-rich markup in Astro when possible.

## Search and filters

These are often the first thing teams justify for “we need React everywhere.”

Better pattern:

- static shell and results scaffolding in Astro,
- React island for the search/filter controls,
- optionally server or endpoint-backed data loading depending on scale.

## Common migration anti-patterns

- wrapping every page in a hydrated React `App`
- keeping client router assumptions for mostly static content
- maintaining global state for data that can be server-rendered
- porting everything before classifying what truly needs React
- using `client:load` everywhere

## References

- React integration docs: https://docs.astro.build/en/guides/integrations-guide/react/
- Build with Astro concepts: https://docs.astro.build/en/concepts/why-astro/
- Islands concept: https://docs.astro.build/en/concepts/islands/
