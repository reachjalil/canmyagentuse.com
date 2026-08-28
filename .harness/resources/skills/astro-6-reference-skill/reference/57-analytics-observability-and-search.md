# Analytics, Observability, and Search

## Goal

A polished Astro app should not only render well. It should also be measurable and support discovery.

This file covers:

- analytics placement,
- operational observability,
- search architecture.

## Analytics strategy

Astro’s performance advantage can be erased by careless analytics.

Rules:

- minimize third-party scripts
- defer or isolate non-critical analytics
- avoid layout-wide JS wrappers just to track events
- prefer server-side or lightweight client tracking when possible
- document what each script is for

## Event collection approach

Classify events into:

- pageview/basic navigation events
- conversion events
- content engagement
- authenticated app actions
- internal operational telemetry

Do not solve all of these with the same client-side strategy.

## Observability needs by app type

### Content site

Focus on:

- build reliability
- route correctness
- indexability
- page performance
- form submission success

### Hybrid or app surface

Add:

- action errors
- session/auth failures
- backend latency
- binding/runtime failures
- cache behavior

## Cloudflare observability notes

When deploying on Workers, think about:

- runtime logs
- deployment and preview checks
- cache behavior validation
- background task visibility
- platform analytics/observability features if you use them

## Search strategy

Search should be designed according to content size and freshness.

### Static content search

Good when:

- docs/blog content is mostly static
- the index can be generated at build time
- low operational complexity is preferred

### Runtime or external search

Good when:

- the index is large
- content changes frequently
- ranking or filtering is complex
- access control or personalization matters

## Search UI placement

A search box is usually a good island candidate.

But:

- do not hydrate the whole site shell for search
- keep search state local
- make route/content structure index-friendly
- separate the indexing pipeline from the visual shell

## Launch checklist

- [ ] analytics scripts inventoried
- [ ] scripts minimized
- [ ] conversions tracked intentionally
- [ ] action failures observable
- [ ] search strategy chosen
- [ ] preview/staging separated from production reporting when needed

## References

- Cloudflare Workers Astro guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- Astro build concepts: https://docs.astro.build/en/concepts/why-astro/
