# Routing, static assets, headers, redirects (Workers)

This reference covers the platform glue that makes Astro apps behave correctly on Cloudflare Workers.

## Workers routing model

When you configure Workers Static Assets with `assets.directory`, Cloudflare will:

1. serve a matching file from `assets.directory` when it exists
2. otherwise invoke your Worker script through `main`

## Don’t expose internal build files as public assets

Astro’s Cloudflare output includes internal files such as `dist/_worker.js/**`.

These should not be served as public files from your static assets directory.

Create `public/.assetsignore`:

```txt
_worker.js
```

## `_headers`

You can set response headers via `public/_headers`, which Astro copies to `dist/_headers`.

Example:

```txt
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

Headers in `_headers` apply to static assets, not Worker-generated SSR responses.

## `_redirects`

Add `public/_redirects` to define redirects for static asset routing:

```txt
/old-page   /new-page   301
/docs/*     /guides/:splat  302
```

For dynamic routes, prefer Astro route and middleware logic instead of static redirect files.

## Astro-built assets caching

Astro’s hashed build assets can safely be cached long-term. The Cloudflare adapter also sets strong caching defaults for built assets.

## Source-of-truth docs

- Astro Cloudflare adapter platform notes:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/#cloudflare-platform
- Cloudflare Workers Static Assets:
  https://developers.cloudflare.com/workers/static-assets/
