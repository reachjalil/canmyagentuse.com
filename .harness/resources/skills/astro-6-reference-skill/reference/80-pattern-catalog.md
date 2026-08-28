# Pattern Catalog

## Purpose

This file is the quick-reference map of common Astro patterns.

Each pattern lists:

- use when
- typical files
- strengths
- dangers

---

## Pattern: Static content site

### Use when
- the site is mostly editorial or marketing
- freshness can wait for rebuilds
- SEO matters heavily

### Typical files
- `src/pages/**`
- `src/layouts/**`
- `src/content/**`
- `src/content.config.ts`

### Strengths
- fast
- simple
- cache-friendly
- highly crawlable

### Dangers
- adding runtime data too casually
- over-hydrating decorative widgets

---

## Pattern: Hybrid public site with server forms

### Use when
- most routes are static
- forms or small runtime features exist

### Typical files
- content/layout files
- `src/actions/index.ts`
- maybe `src/middleware.ts`

### Strengths
- public performance stays strong
- server behavior remains focused

### Dangers
- escalating to full SSR too early

---

## Pattern: Static shell + server island personalization

### Use when
- only part of a public page varies per request/user

### Typical files
- prerendered route
- deferred server component
- maybe session or `cf` access

### Strengths
- preserves shell cacheability
- avoids full-page SSR

### Dangers
- poor fallback UX
- accidental overuse

---

## Pattern: React widget island

### Use when
- a small interactive widget exists
- local state matters
- the page shell stays mostly static

### Typical files
- `.astro` page
- React component in `components/islands`

### Strengths
- precise hydration
- low blast radius

### Dangers
- duplicate data serialization
- choosing `client:load` for everything

---

## Pattern: Docs with MDX and embedded demos

### Use when
- prose and component demos coexist
- docs should remain largely static

### Typical files
- docs collection
- MDX content
- React or Astro demo islands

### Strengths
- strong content ergonomics
- good SEO
- rich examples

### Dangers
- making docs shell depend on too much JS

---

## Pattern: Authenticated app with Astro shell

### Use when
- routes are protected
- interactive subviews exist
- server state matters

### Typical files
- `src/pages/app/**`
- `src/middleware.ts`
- `src/actions/**`
- session logic
- React islands

### Strengths
- Astro still helps with shell and server composition
- React can stay focused

### Dangers
- rebuilding everything as a hydrated React app inside Astro anyway

---

## Pattern: Headless CMS with build-time loaders

### Use when
- editors use a CMS
- rebuild freshness is acceptable
- SEO pages dominate

### Typical files
- `src/content.config.ts`
- remote loader utilities

### Strengths
- CMS ergonomics + static output

### Dangers
- no preview strategy
- weak schema validation

---

## Pattern: Live content collection for fresh public data

### Use when
- runtime freshness matters
- content-layer APIs are still desirable

### Strengths
- unified content access style
- good for dynamic content domains

### Dangers
- slower runtime behavior if overused
- turning the whole content surface live unnecessarily

---

## Pattern: Search island + external/runtime search source

### Use when
- search is too large or dynamic for a tiny static index

### Strengths
- keeps page shell mostly static
- search UX can stay rich

### Dangers
- hydrating too much around the search box
- unclear indexing strategy

---

## Pattern: Multi-locale content site

### Use when
- multiple locales exist
- SEO and language alternates matter

### Strengths
- clear route and metadata architecture
- reusable content schema patterns

### Dangers
- fallback and canonical confusion
- incomplete hreflang

## How to use the catalog

When analyzing a repo:

1. identify which pattern each route group resembles
2. check whether the implementation matches the intended pattern
3. replace accidental patterns with deliberate ones

## References

- Islands concept: https://docs.astro.build/en/concepts/islands/
- Content collections: https://docs.astro.build/en/guides/content-collections/
- Sessions: https://docs.astro.build/en/guides/sessions/
