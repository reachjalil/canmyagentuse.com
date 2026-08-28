# Content Collections and MDX

## Why content modeling matters

Astro is unusually strong for structured content. Use that strength.

A good Astro content system is:

- typed,
- queryable,
- optimized for routing,
- compatible with image handling,
- explicit about freshness.

## Types of content collections

### Build-time collections

Best when:

- performance is critical,
- content is relatively stable,
- content should be optimized and cached well,
- MDX or image processing matters,
- pages are public and indexable.

This is the default for docs, blogs, changelogs, case studies, and most editorial content.

### Live content collections

Best when:

- runtime freshness matters,
- content changes frequently,
- you still want a content-layer API,
- you accept request-time tradeoffs.

Use sparingly. Live is not “better.” It is “fresher.”

## Schema discipline

Every meaningful collection should have a clear schema.

Typical fields:

- title
- description
- slug
- date fields
- updated date
- draft
- image
- tags
- locale
- author reference
- SEO overrides

Strong schema design pays off in:

- route generation,
- metadata,
- listing pages,
- validation,
- editor feedback,
- agent reasoning.

## Local content vs remote content

### Local content

Great for:

- docs,
- blogs,
- legal,
- changelog,
- curated editorial assets.

### Remote content loaded at build time

Great for:

- CMS content that can tolerate rebuild cadence,
- API-backed catalog-like data for SEO pages,
- external content sources that still want fast output.

### Live content

Great for:

- frequently changing CMS content,
- runtime editorial dashboards,
- preview-like flows,
- data that should not wait for rebuilds.

## `render()` and content body strategy

When using content entries, let Astro render body content server-side whenever possible.

Do not push whole content bodies into client islands unless the experience specifically requires it.

## MDX strategy

Use MDX when content authors need:

- embedded components,
- richer prose experiences,
- callouts, demos, custom blocks,
- interactive examples inside content.

Use plain Markdown or simpler content models when MDX flexibility is unnecessary.

## Content architecture patterns

### Blog

- posts collection
- authors collection
- tag/category derivation
- RSS
- article metadata helpers

### Docs

- docs collection
- navigation model
- headings/TOC
- maybe versioning or locale shape
- minimal client JS

### Marketing resources

- case studies
- changelog
- guides
- glossary
- structured landing content

## Strong content rules

- content schema should feed metadata
- content schema should feed route generation
- content collections should be organized by content domain
- drafts and preview policy should be explicit
- image fields should be typed and deliberate

## Common mistakes

- using live content when build-time is enough
- leaving schema too loose
- building route logic that duplicates content schema logic
- sending raw content payloads to client islands
- using MDX everywhere even when simpler content would be easier to manage

## References

- Content collections guide: https://docs.astro.build/en/guides/content-collections/
- `astro:content` API: https://docs.astro.build/en/reference/modules/astro-content/
- Content loader reference: https://docs.astro.build/en/reference/content-loader-reference/
- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
