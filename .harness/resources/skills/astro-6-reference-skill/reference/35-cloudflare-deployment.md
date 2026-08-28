# Cloudflare Deployment for Astro 6

## This is the most important Cloudflare rule

For modern Astro 6 server features, **Cloudflare Workers is the default target**.

Use Cloudflare static hosting only when the site is genuinely static.

## Why this matters

Astro 6 changed important Cloudflare behavior:

- local development and preview now run much closer to production via `workerd`,
- the Cloudflare adapter uses current Workers-oriented patterns,
- the adapter no longer supports Cloudflare Pages for server deployments,
- runtime APIs changed from older `Astro.locals.runtime.*` access patterns.

## Choose the correct Cloudflare path

### Path A: Static site on Cloudflare

Use when:

- all routes are prerendered,
- no server actions are needed,
- no sessions,
- no server islands,
- no request-aware behavior.

Possible hosts:

- Cloudflare Pages as a static host,
- Cloudflare Workers static asset deployment.

### Path B: Server/hybrid Astro on Cloudflare Workers

Use when:

- any on-demand route exists,
- actions are used,
- sessions are used,
- server islands are used,
- you need bindings or request metadata,
- personalization or auth exists.

This is the correct default for most modern full-stack Astro-on-Cloudflare work.

## Recommended setup flow

### New project that you know belongs on Workers

Start with:

- Astro + Cloudflare from the beginning,
- React only if needed,
- current `@astrojs/cloudflare`,
- scripts that generate Wrangler types.

### Existing Astro project moving to Workers

Audit first:

- render modes,
- Node-only dependencies,
- env access,
- old runtime APIs,
- sessions/storage needs,
- static asset assumptions.

Then wire the adapter and deployment.

## Adapter setup

The Astro Cloudflare adapter should be treated as the source of truth for server deployments on Cloudflare.

Important implementation ideas:

- use the current adapter version compatible with Astro 6,
- avoid copying stale examples from older guides,
- verify whether you actually need a Wrangler config file,
- add one when you need project name, bindings, custom settings, or more explicit control.

## Wrangler configuration posture

Astro 6 makes simple Wrangler config optional for basic projects.

That means:

- do not write a noisy config file if the defaults are enough,
- do add `wrangler.jsonc` when you need bindings, project naming, observability, or custom worker entry behavior.

### Static-only Workers deployment

If the site is entirely prerendered, a simple assets-based Wrangler config can be enough.

### Server deployment

If the site uses the Astro Cloudflare adapter for server features, prefer the current Astro adapter guidance for the Worker entrypoint and generated behavior.

## Current runtime API expectations in Astro 6

Prefer these patterns:

- env and bindings via `cloudflare:workers`
- request metadata via `Astro.request.cf`
- execution context via `Astro.locals.cfContext`
- global `caches` API directly

Avoid outdated patterns such as:

- `Astro.locals.runtime.env`
- `Astro.locals.runtime.cf`
- `Astro.locals.runtime.caches`
- `Astro.locals.runtime.ctx`

## Pages vs Workers nuance

This distinction trips people up:

- **Cloudflare Pages can still host static Astro output.**
- **The Astro Cloudflare adapter no longer supports Cloudflare Pages for server deployments.**

So the decision rule is:

- static Astro → Pages or Workers static hosting
- server/hybrid Astro → Workers

## Local development

Astro 6 on Cloudflare uses `workerd`-based behavior for development and preview, which is a big improvement. It means:

- local behavior is closer to production,
- incompatible Node assumptions show up earlier,
- preview becomes more trustworthy.

## Static assets and headers

Remember the platform split:

- Astro builds static assets into `dist`
- Cloudflare serves hashed assets efficiently
- `_headers` in `public/` apply to static assets
- `_redirects` is useful for static asset redirects
- dynamic route redirects should live in Astro’s routing/configuration logic

## Images on Cloudflare

Decide how images are handled deliberately:

- source images under `src/` for Astro-managed processing
- `public/` for truly static assets that should bypass processing
- consistent quality policy
- responsive image usage
- avoid giant originals and layout shift

## Sessions on Cloudflare

When using Astro sessions with the Cloudflare adapter:

- plan the KV binding up front,
- understand eventual consistency tradeoffs,
- avoid designing session semantics that require immediate global consistency across every edge.

## Deployment checklist

- [ ] current `@astrojs/cloudflare` version
- [ ] render modes verified
- [ ] static vs Workers path chosen
- [ ] runtime env/bindings access updated
- [ ] Wrangler config minimized or justified
- [ ] session storage configured if needed
- [ ] asset handling understood
- [ ] preview tested in a Cloudflare-like runtime
- [ ] no Node-only dependencies left in request-time code

## References

- Astro deploy guide for Cloudflare: https://docs.astro.build/en/guides/deploy/cloudflare/
- Astro Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Cloudflare Workers Astro guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- Cloudflare Pages Astro guide: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
