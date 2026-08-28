# Rendering Modes, `prerender`, Server Output, and Partials

## Why this matters

Most Astro architecture errors begin with the wrong rendering choice.

An agent should never treat render mode as an implementation detail. It is a first-order architectural decision.

## The three main shapes

### 1. Fully prerendered/static

Good when:

- pages are public,
- content does not vary per user,
- freshness can wait for rebuilds,
- SEO and performance matter heavily.

Typical examples:

- landing pages,
- docs,
- blog posts,
- legal pages,
- feature pages.

### 2. Hybrid

Good when:

- most routes are static,
- some routes or fragments need runtime behavior,
- you want static performance with selective server capabilities.

Typical examples:

- marketing site with account-aware header,
- publication with runtime newsletter action,
- content site with a personalized saved-items widget.

### 3. Server output

Good when:

- most routes are user-specific,
- the app is authenticated,
- request-time freshness is core behavior,
- sessions and middleware are central.

Typical examples:

- portals,
- dashboards,
- account areas.

## Route-level `prerender`

Astro allows route-level control. This is one of the most useful architecture tools in the framework.

Use it to avoid global over-correction.

Examples:

- static site with one dynamic API route,
- server app with a few fully prerendered docs/help routes,
- hybrid app with content pages static and account pages dynamic.

## Good render-mode workflow

For each route, answer:

- is the HTML the same for all users?
- does freshness require runtime?
- does auth gate access?
- could a server island isolate the dynamic piece?
- does the route need request headers or geo?
- would build-time generation be materially simpler?

## Static first, but not static dogma

Astro’s strength makes static a strong default, but not a religion.

Choose runtime rendering when:

- user-specific data exists,
- mutation flows are central,
- freshness matters more than CDN-only simplicity,
- server islands would otherwise become an awkward workaround.

## Server islands as a middle ground

Server islands are valuable when:

- the shell should stay cacheable,
- only one fragment needs request-aware logic,
- personalization is light or localized,
- the rest of the page is SEO-critical and static.

This is often a better choice than making the whole route on-demand.

## `partial`

Partials are useful when a route should render a fragment rather than a full HTML document.

Good uses:

- HTML snippets for embeds,
- composable server-delivered fragments,
- special-purpose response shapes that still benefit from Astro templating.

Do not use partials as a substitute for clear component design or a route architecture you can explain.

## Build-time vs request-time side effects

Be very careful about code that behaves differently depending on render mode.

Examples:

- `fetch()` inside a page script
- environment access
- filesystem access
- runtime bindings
- request headers and cookies

A pattern that works in prerender may fail or change meaning under SSR, especially on Cloudflare.

## Strong defaults by route type

| Route type | Best default |
| --- | --- |
| landing page | prerender |
| docs page | prerender |
| blog post | prerender |
| pricing calculator | prerender shell + small client island |
| account dashboard | on-demand |
| authenticated settings | on-demand |
| public page with personalized greeting | prerender shell + server island |
| API endpoint with live data | on-demand endpoint |

## Mistakes to avoid

- making the whole site `output: 'server'` because of one form
- using runtime rendering for docs/blog content with no freshness need
- forgetting that on-demand rendering changes caching assumptions
- overusing server islands where plain SSR is actually simpler
- treating partials like mini-SPA fragments instead of specialized route outputs

## References

- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
- Server islands: https://docs.astro.build/en/guides/server-islands/
- Routing guide: https://docs.astro.build/en/guides/routing/
