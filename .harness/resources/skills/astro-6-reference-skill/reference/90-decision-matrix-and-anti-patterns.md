# Decision Matrix and Anti-Patterns

## Core decision matrix

### Should this route be prerendered?

Use prerender when:

- the HTML is shared,
- freshness can wait for rebuild,
- SEO matters,
- user state does not affect the primary output.

Do not prerender when:

- auth gates the route,
- request-time freshness is central,
- the page is user-specific.

### Should this feature use React?

Use React when:

- local interactive state is real,
- the feature is widget-like,
- the React ecosystem materially helps.

Do not use React when:

- the feature is mostly layout/content,
- the interaction is trivial,
- server composition would be cleaner.

### Should this content use collections?

Use collections when:

- the data is content-like,
- type safety matters,
- route generation depends on structured fields,
- build-time optimization is helpful.

Do not force collections when:

- the data is purely app/runtime data,
- request-time personalization is the main concern.

### Should this mutation be an Action?

Use an Action when:

- the user is mutating data from a page/form,
- validation and page integration matter,
- progressive enhancement is desirable.

Use an Endpoint instead when:

- the route is a general API/file/resource.

### Should this app use Cloudflare Workers?

Use Workers when:

- server rendering exists,
- sessions/actions/server islands are required,
- bindings/runtime metadata matter.

Use static hosting when:

- the whole site is truly prerendered.

## High-value anti-patterns to avoid

### Anti-pattern: Astro as accidental SPA host

Symptoms:

- whole layouts hydrated,
- giant root providers,
- public content routes client-rendered.

### Anti-pattern: All content fetched live

Symptoms:

- docs/blog rely on runtime fetch for everything,
- SEO and performance lose their static advantages.

### Anti-pattern: Outdated Cloudflare runtime APIs

Symptoms:

- `Astro.locals.runtime.*`
- old Pages-first assumptions for server deployments.

### Anti-pattern: One render mode for the whole repo

Symptoms:

- `output: 'server'` chosen because of one feature,
- or fully static chosen even though auth and personalization are central.

### Anti-pattern: Metadata as an afterthought

Symptoms:

- no centralized metadata system,
- no canonical discipline,
- broken `site` config,
- launch without sitemap/RSS/i18n review.

### Anti-pattern: Giant props into islands

Symptoms:

- entire content objects serialized to React
- hydration cost spikes
- debugging gets harder

### Anti-pattern: Search justifies everything being client-side

Symptoms:

- docs/blog shell becomes app-like
- search UX drives whole-architecture overreaction

## Refactor priorities when a repo is in trouble

1. make render modes explicit
2. reduce hydration scope
3. fix Cloudflare/runtime drift
4. move editorial content to collections/build-time
5. centralize metadata
6. correct caching and personalization boundaries
7. add verification and release gates

## References

- On-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
- React integration: https://docs.astro.build/en/guides/integrations-guide/react/
- Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
