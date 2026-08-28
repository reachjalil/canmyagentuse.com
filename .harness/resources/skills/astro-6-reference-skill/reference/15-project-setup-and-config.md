# Project Setup and Config for Astro 6

## Goal

This file covers how to scaffold and configure an Astro 6 app so later decisions stay clean.

## Step 1: choose the right starter shape

Before running setup commands, decide if you need:

- a mostly static content site,
- a hybrid site,
- a mostly server-rendered app,
- Cloudflare Workers from day one,
- React integration from day one,
- MDX/content collections immediately.

Do not install every integration “just in case.”

## Step 2: create the project

Typical starting points:

- `npm create astro@latest`
- or Cloudflare’s `create cloudflare` flow if Workers is definitely the target

Pick TypeScript early. It pays off across content, actions, React props, env, and metadata.

## Step 3: install only the integrations you know you need

Common integrations:

- `@astrojs/react`
- `@astrojs/mdx`
- `@astrojs/sitemap`
- `@astrojs/cloudflare`

Optional, depending on project shape:

- Tailwind or other styling tooling
- analytics or monitoring packages
- content-source SDKs

## Step 4: configure `astro.config.*`

### Minimum critical settings

Almost every production app should think about:

- `site`
- `base` if deployed under a subpath
- `trailingSlash`
- `output`
- integrations
- adapter
- image strategy
- security/CSP if relevant
- fonts if you are using the built-in system

### Important rule for `site`

Set `site` early. It affects:

- canonical URL generation,
- sitemap,
- RSS,
- metadata helpers,
- social image URLs,
- absolute link correctness.

### `output`

Choose deliberately:

- `static` for all-prerendered sites
- `server` for primarily on-demand app surfaces
- hybrid through route-level `prerender` patterns when needed

## Step 5: TypeScript setup

### Recommended posture

- strict mode on
- no casual `any`
- explicit props and content schema
- React JSX settings only if React is installed

### React TS config reminders

When using React in Astro, ensure JSX settings match the React integration expectations.

## Step 6: add scripts that reinforce correctness

Typical scripts:

- `dev`
- `build`
- `preview`
- `check`
- `lint`
- `test`
- `cf:typegen` or equivalent Wrangler type generation

Important principle:

Make the safe path the easy path. If type generation or checks are required for Cloudflare or content types, automate them.

## Step 7: environment strategy

Plan env variables early.

### General rules

- server-only secrets stay server-only
- client-exposed values use the public env mechanism intentionally
- use typed env schema where helpful
- do not hardcode site URLs, analytics IDs, or API origins all over the repo

### On Cloudflare

Remember that runtime env access differs from generic Node assumptions. Keep Cloudflare-specific env access patterns isolated and documented.

## Step 8: formatting and consistency

A good setup should also include:

- Astro-aware formatting
- consistent import style
- predictable aliasing if used
- style/token conventions

Avoid adding complicated tooling before the architecture is clear.

## Recommended setup checklist

- [ ] TypeScript enabled
- [ ] Astro version and Node version aligned
- [ ] `site` configured
- [ ] `output` chosen deliberately
- [ ] integrations limited to actual needs
- [ ] content strategy identified
- [ ] React TS config applied if React exists
- [ ] scripts include `astro check`
- [ ] Cloudflare scripts/types added if relevant
- [ ] metadata helper location chosen
- [ ] styling approach chosen
- [ ] preview and CI path understood

## Example setup philosophy by app type

### Static docs/blog

- TypeScript
- MDX/content collections
- sitemap
- RSS if publication
- maybe React for search or code demos
- static deployment path

### Hybrid marketing + forms

- TypeScript
- sitemap
- maybe React for select widgets
- Cloudflare adapter if actions/server features needed

### Authenticated app shell

- TypeScript
- React integration
- Cloudflare adapter
- sessions and middleware
- server output

## Common mistakes

- failing to set `site`
- installing React then using it for everything
- choosing server output for a mostly static site without a real need
- copying stale adapter config from older examples
- not adding check/type scripts early
- mixing deployment concerns into page components

## References

- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- Environment variables: https://docs.astro.build/en/guides/environment-variables/
- React integration: https://docs.astro.build/en/guides/integrations-guide/react/
- Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
