# Folder Structure and Conventions for Astro 6

## Goal

The best Astro folder structure makes boundaries obvious:

- route vs layout vs component,
- content vs app data,
- server logic vs client logic,
- public assets vs processed source assets.

## Strong default structure for a content-rich or hybrid Astro app

```text
src/
  actions/
    index.ts
  components/
    marketing/
    docs/
    islands/
    shared/
  content/
    blog/
    docs/
    authors/
  data/
    navigation.ts
    site.ts
  layouts/
    BaseLayout.astro
    MarketingLayout.astro
    DocsLayout.astro
    AppLayout.astro
  lib/
    auth/
    content/
    metadata/
    seo/
    server/
    utils/
  pages/
    index.astro
    pricing.astro
    blog/
      [slug].astro
    docs/
      [...slug].astro
    app/
      dashboard.astro
    api/
      search.json.ts
  styles/
    global.css
  middleware.ts
  content.config.ts
public/
  images/
  fonts/
  robots.txt
```

## Why this structure works

- `pages/` reflects routing.
- `layouts/` owns shell and head logic.
- `components/` stays presentation-focused.
- `actions/` owns server mutations.
- `lib/server/` and auth modules keep runtime logic away from general components.
- `content/` reflects the editorial model.
- `styles/` keeps global design primitives obvious.

## Recommended component naming

### Layouts

Use names that describe the shell, not the page:

- `BaseLayout.astro`
- `DocsLayout.astro`
- `MarketingLayout.astro`
- `AppLayout.astro`

### Components

Use names that describe function and surface:

- `Hero.astro`
- `PricingGrid.astro`
- `ArticleHeader.astro`
- `SearchBox.tsx`
- `UserMenu.server.astro` only if your team values a suffix convention like this

### Islands

Make islands obvious either by folder or naming:

- `components/islands/SearchBox.tsx`
- `components/islands/CartDrawer.tsx`

This helps an agent immediately identify hydration candidates.

## Recommended separation for server code

Keep request-aware code out of generic UI directories when possible.

Good places:

- `src/actions`
- `src/lib/server`
- `src/lib/auth`
- `src/middleware.ts`
- route files under `src/pages/api`

This helps prevent accidental client leakage.

## Content organization rules

### Separate collections by domain

Good:

- `blog`
- `docs`
- `authors`
- `changelog`
- `legal`

Avoid giant mixed collections where entries serve very different route types.

### Keep schema logic centralized

Prefer one `content.config.ts` file with clearly named collection definitions.

### Store route metadata close to content where sensible

Examples:

- slug
- title
- description
- published date
- updated date
- canonical override
- image
- locale
- draft

## Metadata helpers

Create utilities like:

- `src/lib/metadata/site.ts`
- `src/lib/metadata/canonical.ts`
- `src/lib/metadata/open-graph.ts`
- `src/lib/metadata/jsonld.ts`

Avoid scattering metadata formatting logic across page files.

## Route conventions

### Public SEO pages

Keep these simple and obvious:

- `src/pages/index.astro`
- `src/pages/pricing.astro`
- `src/pages/about.astro`

### Content pages

Use dynamic routes only when the content model calls for them:

- `src/pages/blog/[slug].astro`
- `src/pages/docs/[...slug].astro`

### App or authenticated routes

Group under a clear prefix like:

- `src/pages/app/*`
- `src/pages/account/*`

This makes access-control rules easier to reason about.

## Styling conventions

Strong patterns:

- `src/styles/global.css` for global resets/tokens/framework imports
- component-local `<style>` blocks in `.astro` where it improves locality
- colocated CSS modules for some React islands if that fits the team
- one design-token source of truth

## Cloudflare-related files

For Cloudflare deployments, keep these obvious:

- `wrangler.jsonc`
- `.dev.vars` for local secrets
- `src/worker.ts` only if using a custom Worker entrypoint
- scripts for `wrangler types`

## Testing conventions

Possible structure:

```text
tests/
  e2e/
  integration/
src/
  components/
    islands/
      __tests__/
```

The exact tool can vary, but the rule is the same: separate route-level e2e from component-level testing.

## Conventions that help agents

- keep one source of truth for site config,
- keep one source of truth for metadata helpers,
- keep islands in a discoverable place,
- keep server code separated,
- avoid deeply nested abstract component hierarchies without a real benefit.

## Anti-patterns

- putting server code inside generic client component folders,
- mixing editorial content and user data in the same “content” abstraction,
- naming everything `Section`, `Wrapper`, or `Container` without domain meaning,
- hiding all route behavior behind meta-framework abstractions,
- scattering `client:*` usage without a clear island directory.

## References

- Project structure: https://docs.astro.build/en/basics/project-structure/
- Routing: https://docs.astro.build/en/guides/routing/
- Middleware: https://docs.astro.build/en/guides/middleware/
