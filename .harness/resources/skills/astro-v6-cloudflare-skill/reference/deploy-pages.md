# Cloudflare Pages status for Astro 6

This file exists as a status note because Astro 6 changed the answer here.

## Current recommendation

The Astro Cloudflare adapter no longer supports deployment on **Cloudflare Pages**.

For Astro apps that need on-demand rendering, sessions, actions, or server islands, target **Cloudflare Workers** instead.

## What is still valid

- A fully static Astro site can still be uploaded to any static hosting platform, including Cloudflare Pages, because no adapter is needed for static output.
- The limitation is specifically the Astro Cloudflare adapter and Worker-backed SSR features on Pages.

## Practical repo guidance

- Static Astro site: no adapter, deploy static `dist/` wherever appropriate.
- Full-stack Astro site on Cloudflare: use `@astrojs/cloudflare` and deploy to Workers.

## Migration note

If an older project was depending on Astro + Cloudflare Pages SSR guidance, treat that as legacy and migrate the runtime target to Workers.

Cloudflare publishes a Pages-to-Workers migration guide, but the canonical runtime recommendation for Astro 6 comes from the Astro adapter docs.

## Source-of-truth docs

- Astro Cloudflare adapter upgrade notes:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Cloudflare migration guide from Pages to Workers:
  https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/
