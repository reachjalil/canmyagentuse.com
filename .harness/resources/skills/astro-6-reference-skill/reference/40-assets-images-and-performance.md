# Assets, Images, and Performance

## Astro performance doctrine

Astro gives you a structural advantage, but you can still waste it.

The agent should think of performance in this order:

1. avoid unnecessary JS,
2. render the right things at build time,
3. constrain images,
4. keep fonts sane,
5. minimize third-party scripts,
6. use caching correctly,
7. measure.

## Asset placement rules

### Put assets in `src/` when

- Astro should process them,
- you want image optimization,
- imports should be part of the build graph.

### Put assets in `public/` when

- they should be served as-is,
- they are platform files like `robots.txt`,
- they are static assets that do not need build processing.

## Image strategy

### Prefer Astro’s image tools

Use Astro image primitives for:

- responsive images,
- optimized dimensions,
- better formats,
- predictable layout behavior.

### Use plain `<img>` only when

- optimization is not needed,
- the asset is external/unmanaged in a way that makes optimization impractical,
- you have a specific reason.

### Site-wide image policy

A good Astro project defines image policy centrally:

- preferred codecs,
- default quality expectations,
- aspect ratio and size discipline,
- hero vs thumbnail strategy,
- content-image conventions.

Astro 6.1 makes centralized codec-specific defaults more practical.

## Image performance rules

- set width/height or use helpers that preserve aspect ratio
- avoid giant originals
- use responsive patterns
- do not load decorative images eagerly
- keep hero/LCP assets deliberate
- be careful with remote CMS originals

## Performance cost hierarchy

In Astro sites, large performance regressions often come from:

1. too much hydration
2. large third-party scripts
3. image mistakes
4. over-eager fonts
5. unnecessary live runtime fetches
6. poor cache strategy
7. oversized client-side libraries

## JS budgeting in Astro

Hydration should be a budgeted decision.

Audit:

- number of islands
- directive choices
- shared client dependencies
- large React or chart libraries
- layout-wide provider patterns
- client-only routing assumptions that should not exist

## LCP guidance

To improve LCP in Astro:

- keep hero content server-rendered
- limit above-the-fold JS
- optimize hero image delivery
- preload only what truly matters
- do not force the hero into a large hydrated island

## CLS guidance

To improve CLS:

- give images stable dimensions
- keep font fallback behavior sane
- reserve space for deferred fragments
- avoid client-only insertions that shift layout late

## TTFB guidance

To improve TTFB:

- prerender public pages whenever possible
- avoid unnecessary runtime CMS fetches
- use server islands for small request-aware fragments instead of whole-page SSR when appropriate
- simplify request-time dependencies
- tune caching on Cloudflare correctly

## Performance review checklist

- [ ] all islands justified
- [ ] directives are the latest safe option
- [ ] image components used where beneficial
- [ ] hero assets optimized
- [ ] third-party scripts minimized
- [ ] runtime fetches justified
- [ ] cache strategy explained
- [ ] layout shift sources known
- [ ] bundle analysis performed for larger sites

## References

- Images guide: https://docs.astro.build/en/guides/images/
- Fonts guide: https://docs.astro.build/en/guides/fonts/
- Bundle analysis recipe: https://docs.astro.build/en/recipes/analyze-bundle-size/
