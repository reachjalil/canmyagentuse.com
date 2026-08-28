# Cloudflare Bindings, Caching, Storage, and Runtime APIs

## Purpose

This file goes deeper than deployment. It covers how Astro should actually *behave* on Cloudflare.

## Runtime access in Astro 6

For Cloudflare work in Astro 6, the current runtime access model is:

- environment variables and bindings through `cloudflare:workers`
- request metadata through `Astro.request.cf`
- execution context through `Astro.locals.cfContext`
- cache access through the global `caches` API

If you see `Astro.locals.runtime.*`, treat it as old code and verify against the current docs.

## Bindings overview

Cloudflare bindings may include:

- environment variables,
- secrets,
- KV,
- D1,
- R2,
- Durable Objects,
- Queues,
- Hyperdrive,
- Analytics Engine,
- AI bindings,
- service bindings.

Not every Astro app needs these. Do not over-spec platform features.

## Binding choice by use case

### Plain environment values

Use for:

- public API origins for server-side use,
- deployment environment markers,
- feature flags,
- service base URLs.

### Secrets

Use for:

- API keys,
- tokens,
- credentials,
- signing secrets,
- webhook secrets.

Never store sensitive values as plain non-secret config if the platform provides a secret mechanism.

### KV

Good for:

- simple session storage,
- edge-friendly lookup data,
- lightweight cross-request state with relaxed consistency needs.

Be careful with globally immediate consistency assumptions.

### D1

Good for:

- relational app data,
- account settings,
- lighter data-backed features needing query semantics.

### R2

Good for:

- object storage,
- uploads,
- asset-like content,
- document/media storage.

### Durable Objects

Good for:

- coordinated state,
- chat/room/session coordination,
- edge-aware coordination patterns that require stronger locality or sequencing than KV.

## Cache layers to reason about

### Browser cache

Impacts repeat visits and static asset efficiency.

### Cloudflare CDN/static asset cache

Excellent for public immutable assets and public cacheable pages.

### Workers Cache API

Useful, but it has platform-specific behavior. Do not assume it is a globally replicated magic store.

### Application-level cache assumptions

Avoid designing request-time logic that silently depends on in-memory persistence or global consistency.

## Strong cache strategy by content type

### Immutable built assets

- aggressive cache
- hashed filenames
- let the platform do its job

### Public static pages

- prerender when possible
- deploy as static assets when truly static

### Public dynamic but shared data

- consider response caching carefully
- prefer cache segmentation by route/resource
- use explicit invalidation strategy when needed

### Personalized responses

- avoid broad page caching
- prefer shell caching plus server islands if possible
- never cache user-specific full pages publicly

## `cf` request metadata

The `cf` object can be valuable for:

- country or region-aware UX,
- geolocation-driven copy or currency hints,
- coarse personalization.

But use it carefully:

- do not let geo-only behavior explode route complexity,
- do not turn the whole site dynamic if a fragment can be isolated,
- do not combine personalized behavior with unsafe caching.

## Execution context and background work

`Astro.locals.cfContext` is useful for things like:

- `waitUntil()` background tasks,
- integrating with Durable Object exports,
- non-blocking logging or side work.

Use background work for things like:

- analytics beacons,
- non-critical logging,
- fire-and-forget notifications.

Do not hide core business logic behind background tasks that must succeed before the user receives a trustworthy response.

## Sessions on Cloudflare

Astro’s session story on Cloudflare can be very productive, but design for the storage model.

Good uses:

- auth/session identity,
- simple flash messages,
- light user preferences,
- temporary workflow state.

Use caution for:

- cross-region instant consistency assumptions,
- sensitive state coordination that needs stronger guarantees,
- complex write-heavy collaboration logic.

## Static asset platform files

### `_headers`

Useful for static asset headers.

### `_redirects`

Useful for static asset redirect behavior.

But dynamic route redirect logic should still be handled in Astro where appropriate.

## Common Cloudflare-on-Astro mistakes

- using old runtime APIs,
- assuming Pages is the server default for Astro 6,
- forgetting to generate/update Wrangler types,
- treating KV like a globally consistent database,
- caching personalized content too broadly,
- leaving Node-only modules in request-time paths under `workerd`.

## References

- Astro Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Cloudflare bindings overview: https://developers.cloudflare.com/pages/functions/bindings/
- Workers Cache API: https://developers.cloudflare.com/workers/runtime-apis/cache/
- Secrets: https://developers.cloudflare.com/workers/configuration/secrets/
