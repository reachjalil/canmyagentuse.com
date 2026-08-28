# SEO, Metadata, Sitemaps, RSS, and i18n

## This domain should be designed early

For Astro apps, SEO is not a post-processing concern. It is tied to:

- route shape,
- `site` config,
- content schema,
- render mode,
- metadata helpers,
- i18n strategy.

## `site`, `base`, and `trailingSlash`

These configuration choices affect canonical URLs and sitemap behavior.

Strong rule:

- set `site` correctly and early
- only use `base` when the deployment path truly requires it
- choose `trailingSlash` intentionally and keep links consistent

## Metadata architecture

A good Astro app centralizes metadata decisions.

Typical pattern:

- base layout accepts metadata props
- page routes derive metadata from content or route-specific logic
- canonical generation is shared
- OG/Twitter/image helpers are reusable
- JSON-LD helpers live in a utility layer

## Minimum metadata set for public pages

- title
- description
- canonical URL
- OG title/description/image
- Twitter/X card equivalents if relevant
- robots directives where needed

## Canonical strategy

Use canonicals intentionally for:

- pagination variants
- filtered/listing variants
- locale alternates
- campaign or duplicate-ish pages
- content mirrored under multiple route shapes

Do not generate canonicals casually without understanding the route model.

## Sitemap

Use sitemap generation for public indexable routes.

Important rule:

- sitemaps are great for static and build-known routes
- they cannot invent runtime-only dynamic URLs you do not know at build time

If the site mixes static and dynamic behavior, ensure the sitemap strategy matches what is actually indexable.

## RSS

Use RSS when the site has publication-like content:

- blog
- changelog
- newsroom
- essays
- announcements

Keep feed generation aligned with the same content source as the page routes.

## `robots.txt`

Decide:

- what is public,
- what should be disallowed,
- how staging/preview should behave,
- whether the sitemap is referenced.

A good launch process also includes a clear noindex strategy for non-production environments when needed.

## Structured data

Common strong uses:

- article/blog post schema
- organization/site schema
- breadcrumbs
- product schema when relevant
- FAQ or other special content schema when legitimately present

Do not add schema types that do not match the visible content.

## i18n architecture

Design locale behavior before the route tree becomes large.

Decide:

- default locale
- locale-prefixed route policy
- fallback policy
- content sourcing per locale
- hreflang generation
- sitemap behavior by locale
- metadata translation strategy

## i18n fallback routes

Astro 6.1 improved the story around fallback routes for integrations. This matters for multilingual sites, especially when sitemap or other integrations need to understand all discoverable pages.

## SEO checklist by page type

### Landing page
- clear title/description
- canonical
- OG image
- indexable
- structured data if appropriate

### Article page
- title/description
- canonical
- publish/update dates
- author
- article schema
- social image
- RSS source alignment

### Docs page
- title/description
- canonical
- locale alternates if multilingual
- breadcrumb schema if appropriate
- no unnecessary client dependency for primary content

### Account/app page
- generally noindex
- auth protected server-side
- metadata still explicit

## Common mistakes

- missing `site`
- generating relative canonicals in production
- forgetting staging noindex policy
- mismatched locale and hreflang logic
- no sitemap or broken sitemap on launch
- stuffing metadata logic into many route files instead of a system
- making core public content depend on hydrated client logic

## References

- Sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- RSS guide: https://docs.astro.build/en/guides/rss/
- Internationalization guide: https://docs.astro.build/en/guides/internationalization/
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
