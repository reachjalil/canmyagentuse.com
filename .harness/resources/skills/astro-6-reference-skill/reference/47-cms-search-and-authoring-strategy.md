# CMS, Search, and Authoring Strategy

## Purpose

This file is about the operational side of content-heavy Astro projects:

- how authors work,
- how CMS data fits Astro,
- how search should be planned.

## Choosing the content source

### Local files and Git-based authoring

Best when:

- the team is comfortable with Git,
- docs/blog content is reviewed in pull requests,
- strong versioning matters,
- content changes are not minute-to-minute.

### Headless CMS with build-time sync

Best when:

- editors need a CMS UI,
- content is mostly public and SEO-driven,
- rebuild-based freshness is acceptable,
- you still want static performance.

### Headless CMS with live/runtime delivery

Best when:

- immediate publication matters,
- preview must reflect runtime state,
- editorial workflows demand no rebuild wait,
- you accept server/runtime complexity.

## Search strategy decision tree

### Small docs/blog

Possible strategy:

- prebuilt static search index,
- client island for query UI,
- prerendered content pages remain static.

### Larger or frequently updated search

Possible strategy:

- external search service,
- runtime query endpoint,
- React island for search UX,
- careful indexing pipeline.

### Authenticated or personalized search

Possible strategy:

- server-rendered or endpoint-backed search,
- access control in middleware/backend,
- avoid exposing restricted index data client-side.

## Authoring ergonomics checklist

- can editors preview changes?
- is the content schema understandable?
- are image and metadata fields explicit?
- can drafts exist safely?
- does route generation follow the content model naturally?
- does the search/indexing system understand the same source of truth?

## Docs-authoring best practices

- headings should be structured for TOC generation
- frontmatter/schema should include nav and SEO fields if needed
- examples and embeds should stay as close to content as possible
- avoid requiring client JS for core reading/navigation

## CMS integration rules

- validate remote data shape before route generation
- separate editorial content from volatile app data
- keep preview mode strategy explicit
- do not let CMS flexibility erase routing or metadata discipline

## Search UX rules

- keep the search UI small and targeted
- do not hydrate the whole docs shell for search
- index the content actually visible to users
- think about locale/version scoping if applicable
- treat “search” as a distinct domain, not an excuse for full SPA architecture

## References

- Content collections guide: https://docs.astro.build/en/guides/content-collections/
- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Routing guide: https://docs.astro.build/en/guides/routing/
