# Data Fetching, Caching, and Environment Strategy

## The key distinction

In Astro, you should not ask only “how do I fetch this?”

You should ask:

- when is it fetched?
- where is it fetched?
- who is it personalized for?
- how often does it change?
- can it be cached?
- does it belong in content collections instead?

## Fetching by render mode

### In prerendered routes

A `fetch()` in the page or layout generally runs at build time.

Use this for:

- static public data,
- editorial data,
- CMS content that can be captured at build time,
- catalog-like data when freshness tolerance allows it.

### In on-demand routes

The same `fetch()` may run per request.

Use carefully for:

- live app data,
- user-specific data,
- rapidly changing public data,
- runtime integrations.

## Strong data-source categories

### Editorial content

Examples:

- docs,
- posts,
- case studies,
- legal pages.

Best defaults:

- content collections,
- build-time remote loaders,
- MDX when component-rich prose is needed.

### Shared runtime data

Examples:

- availability snapshots,
- public pricing fetched often,
- live feed blocks,
- search responses.

Best defaults:

- SSR fetch,
- live content collections when the content-layer API is beneficial,
- cache-aware server endpoints.

### User-specific data

Examples:

- sessions,
- account details,
- saved state,
- region/account entitlements.

Best defaults:

- on-demand rendering,
- actions,
- sessions,
- middleware,
- carefully scoped server islands.

## Caching questions every agent should answer

- Is the response the same for everyone?
- How stale can it be?
- Is the data safe to cache at the page level?
- Can the shell cache while a fragment stays dynamic?
- Is a client fetch actually worse than server composition?
- Are you accidentally making personalized content globally cacheable?

## Environment variables

### General Astro rules

- treat client-exposed variables as intentionally public,
- keep secrets on the server,
- centralize env access patterns,
- prefer typed env schema where practical.

### Good env strategy

Create a clear boundary:

- `PUBLIC_*` only for values the browser can know,
- server secrets never passed into islands,
- utility wrappers for frequently used config values.

## `astro:env`

Use Astro’s typed env features when they improve safety and reduce repetitive boilerplate.

This is especially valuable when:

- the app has multiple runtime environments,
- analytics IDs and URLs vary by stage,
- there are several external service integrations.

## Runtime caveat on Cloudflare

Do not assume Node-like env access patterns. The Cloudflare runtime has its own current integration patterns, which should be isolated behind utilities or well-documented modules.

## Decision guide: content collection vs fetch

| Situation | Best default |
| --- | --- |
| markdown-like editorial content | content collections |
| remote CMS content that can wait for rebuild | build-time loader |
| remote content that must be fresh at request time | live content or SSR fetch |
| user-specific state | SSR/session/action |
| tiny public JSON used by client widget | endpoint or small island fetch |

## Anti-patterns

- fetching docs/blog content live on every request with no freshness requirement,
- passing large fetch payloads into hydrated islands,
- mixing secrets into shared utilities that run in both server and client contexts,
- relying on runtime env in places that may be prerendered,
- building internal APIs out of habit instead of using content/actions directly.

## References

- Environment variables: https://docs.astro.build/en/guides/environment-variables/
- Content collections: https://docs.astro.build/en/guides/content-collections/
- Endpoints: https://docs.astro.build/en/guides/endpoints/
