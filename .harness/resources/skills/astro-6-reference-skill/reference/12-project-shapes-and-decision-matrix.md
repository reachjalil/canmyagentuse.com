# Project Shapes and Decision Matrix

## Purpose

Not every Astro app should look the same.

This file maps common product shapes to recommended Astro architecture.

---

## 1. Marketing site

### Typical traits

- mostly static pages,
- landing pages,
- pricing,
- product pages,
- testimonials,
- lead capture,
- strong SEO.

### Recommended Astro shape

- `output: 'static'` or hybrid if forms/actions need server behavior
- `.astro` for all shell/layout/content sections
- React only for focused widgets such as calculators, demo controls, or complex forms
- content collections for case studies, changelog, docs teasers, or blog
- strong metadata and structured data

### Cloudflare recommendation

- deploy statically if truly static
- move to Workers only if actions, sessions, server islands, or runtime personalization are needed

### Common mistakes

- hydrating hero sections and nav by default
- pulling CMS data live for every request
- forgetting canonical strategy across campaign pages

---

## 2. Docs site

### Typical traits

- many content pages,
- hierarchy and navigation,
- search,
- versioning or locale complexity,
- embedded code demos.

### Recommended Astro shape

- prerender almost everything
- build-time content collections or MDX
- `.astro` layouts for docs structure
- React islands only for demo sandboxes, search, or advanced navigation behaviors
- `@astrojs/sitemap`, RSS only if a publication layer exists
- i18n planned early if multilingual

### Cloudflare recommendation

- static by default
- Workers only if preview/auth/search/runtime content requires it

### Common mistakes

- runtime-fetching docs pages from CMS without a real need
- letting docs navigation depend on hydrated global state
- failing to type content schema

---

## 3. Blog or publication

### Typical traits

- article pages,
- author pages,
- tags/categories,
- archive pages,
- image-heavy content,
- RSS.

### Recommended Astro shape

- prerender all editorial pages
- content collections with image fields and schema
- layout-driven metadata and OG image strategy
- React only for newsletter widgets, comments, or advanced search/filter UX

### Common mistakes

- generating archive/tag pages without canonical discipline
- missing RSS
- using client-side rendering for article body enhancements that could be HTML

---

## 4. Headless CMS frontend

### Typical traits

- content originates in a CMS,
- editors need flexibility,
- content may update frequently,
- preview or freshness may matter.

### Recommended Astro shape

Choose one of two paths:

#### Build-time remote content

Use when:

- content freshness can wait for rebuilds,
- performance and simplicity matter,
- SEO pages dominate.

#### Live content / SSR fetch

Use when:

- content changes must appear immediately,
- preview must reflect runtime state,
- certain pages depend on request-time data.

### Common mistakes

- making the whole site live when only one section needs freshness
- not validating CMS data shape
- passing huge CMS payloads into client islands

---

## 5. Commerce frontend

### Typical traits

- collection pages,
- product detail pages,
- search/filtering,
- cart and account state,
- inventory/pricing freshness,
- strong SEO.

### Recommended Astro shape

- prerender category and product pages where possible
- use server islands or request-time logic for availability/pricing fragments if needed
- React islands for cart, filters, or complex selectors
- actions for wishlist/contact/request flows
- careful structured data and canonical handling

### Common mistakes

- client-rendering product detail shells
- over-hydrating collection pages
- treating search/facets as a reason to make the whole app a SPA

---

## 6. Hybrid marketing + app surface

### Typical traits

- public marketing pages,
- blog/docs/resources,
- logged-in account area,
- maybe shared design system and nav.

### Recommended Astro shape

- public surfaces prerendered
- account routes on-demand
- shared shell in `.astro`
- React only for app features that genuinely need it
- sessions and middleware for authenticated routes
- possibly server islands on public pages for account-aware header states

### Common mistakes

- turning the entire repo into SSR because of the account section
- reusing app-state assumptions inside the public content surface
- failing to separate SEO and noindex logic for public vs private routes

---

## 7. Authenticated portal or dashboard

### Typical traits

- user-specific data,
- protected routes,
- actions and mutations,
- client interactivity,
- lower SEO importance except public entry routes.

### Recommended Astro shape

- `output: 'server'`
- middleware for access control and locals
- sessions for server-stored user state
- React islands for dense interactive widgets
- `.astro` still used for page shell, metadata, layout, and server-aware composition

### Common mistakes

- over-fetching user data on the client when server composition would be simpler
- not segmenting personalized fragments for caching
- forgetting that Astro is still useful even for app surfaces

---

## 8. Multi-locale site

### Typical traits

- translated routes,
- locale-aware metadata,
- hreflang,
- fallback rules,
- locale-based content sourcing.

### Recommended Astro shape

- design locale URLs and default locale policy first
- build metadata and canonical helpers centrally
- ensure sitemap and fallback behavior are correct
- prefer static generation for localized editorial pages when possible

### Common mistakes

- bolting locale onto finished route structure
- inconsistent canonical URLs
- missing alternate links or fallback pages

---

## Quick decision matrix

| Situation | Best default |
| --- | --- |
| Mostly editorial content | prerender + content collections |
| Some request-aware fragments on public pages | prerender + server islands |
| Authenticated app surface | server output + sessions + middleware |
| Rich client widget on otherwise static page | React island |
| Frequent content changes with SEO pages | consider live content only where needed |
| Cloudflare server features required | Workers + `@astrojs/cloudflare` |
| Truly static delivery | static build + Cloudflare static hosting |

## References

- Project structure: https://docs.astro.build/en/basics/project-structure/
- Content collections: https://docs.astro.build/en/guides/content-collections/
- Sessions: https://docs.astro.build/en/guides/sessions/
- Internationalization: https://docs.astro.build/en/guides/internationalization/
