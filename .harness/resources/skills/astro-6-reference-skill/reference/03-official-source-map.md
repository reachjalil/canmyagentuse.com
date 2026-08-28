# Official Source Map for Astro 6 Work

## Why this file exists

This file tells the agent where to look for truth quickly.

A large Astro skill becomes much safer when it names the **official source of truth** for each topic instead of relying on memory.

## Source precedence rules

### Use Astro docs first for framework behavior

Use Astro docs as the source of truth for:

- routing,
- render modes,
- islands,
- server islands,
- content collections,
- actions,
- sessions,
- middleware,
- integrations,
- configuration,
- view transitions,
- assets,
- fonts,
- CSP.

### Use Cloudflare docs first for platform behavior

Use Cloudflare docs as the source of truth for:

- Workers platform limits,
- cache behavior,
- bindings,
- Pages/Workers product behavior,
- secrets,
- deployment commands,
- asset serving,
- platform analytics and observability.

### Use release posts and upgrade guides for behavior changes

Use release posts and upgrade guides when the agent needs to understand:

- what changed between versions,
- which APIs were removed,
- how migration should be planned,
- whether older examples are safe.

## Astro core sources

- Main docs: https://docs.astro.build/
- AI tools guide: https://docs.astro.build/en/guides/build-with-ai/
- `llms-full.txt`: https://docs.astro.build/llms-full.txt
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- CLI reference: https://docs.astro.build/en/reference/cli-reference/
- Project structure: https://docs.astro.build/en/basics/project-structure/
- Routing: https://docs.astro.build/en/guides/routing/
- Render modes: https://docs.astro.build/en/guides/on-demand-rendering/
- Islands architecture: https://docs.astro.build/en/concepts/islands/
- View transitions: https://docs.astro.build/en/guides/view-transitions/

## Astro content and data sources

- Content collections guide: https://docs.astro.build/en/guides/content-collections/
- `astro:content` reference: https://docs.astro.build/en/reference/modules/astro-content/
- Content loader reference: https://docs.astro.build/en/reference/content-loader-reference/
- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Environment variables: https://docs.astro.build/en/guides/environment-variables/

## Astro full-stack sources

- Actions guide: https://docs.astro.build/en/guides/actions/
- Sessions guide: https://docs.astro.build/en/guides/sessions/
- Middleware guide: https://docs.astro.build/en/guides/middleware/
- Endpoints guide: https://docs.astro.build/en/guides/endpoints/

## Astro integrations and performance sources

- React integration: https://docs.astro.build/en/guides/integrations-guide/react/
- Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Images guide: https://docs.astro.build/en/guides/images/
- Fonts guide: https://docs.astro.build/en/guides/fonts/
- Tailwind integration note: https://docs.astro.build/en/guides/integrations-guide/tailwind/
- Styling guide: https://docs.astro.build/en/guides/styling/
- Bundle analysis recipe: https://docs.astro.build/en/recipes/analyze-bundle-size/

## Astro SEO sources

- Sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- RSS integration: https://docs.astro.build/en/guides/rss/
- i18n guide: https://docs.astro.build/en/guides/internationalization/

## Release and upgrade sources

- Astro 6.0 release: https://astro.build/blog/astro-600/
- Astro 6.1 release: https://astro.build/blog/astro-610/
- Upgrade to Astro v6: https://docs.astro.build/en/guides/upgrade-to/v6/

## Cloudflare sources

- Astro deployment guide to Cloudflare: https://docs.astro.build/en/guides/deploy/cloudflare/
- Cloudflare Workers Astro guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- Cloudflare Pages Astro guide: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Wrangler configuration: https://developers.cloudflare.com/workers/wrangler/configuration/
- Secrets: https://developers.cloudflare.com/workers/configuration/secrets/
- Cache API: https://developers.cloudflare.com/workers/runtime-apis/cache/
- Cache rules: https://developers.cloudflare.com/cache/how-to/cache-rules/
- Pages bindings: https://developers.cloudflare.com/pages/functions/bindings/

## Conflict-resolution guidance for Cloudflare + Astro 6

If the agent finds old examples that reference:

- `Astro.locals.runtime.env`
- `Astro.locals.runtime.cf`
- `Astro.locals.runtime.caches`
- `Astro.locals.runtime.ctx`

then the agent should treat those as legacy patterns for Astro 6 Cloudflare work and verify against the current `@astrojs/cloudflare` docs.

For Astro 6 server work on Cloudflare:

- prefer Workers,
- use the current adapter docs,
- treat Pages primarily as a static-hosting path unless there is a specific legacy Pages setup.

## Minimal reading bundle for emergency debugging

If time is short, read these first:

1. Astro 6.1 release post
2. `@astrojs/cloudflare` docs
3. `@astrojs/react` docs
4. content collections guide
5. actions guide
6. sessions guide
7. Cloudflare Workers Astro guide

## References

This file is itself a reference index. Keep it current when the stack changes.
