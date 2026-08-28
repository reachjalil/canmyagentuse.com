# Deploy Astro to Cloudflare Workers (Astro 6)

This reference is for deploying an Astro 6 project to **Cloudflare Workers** using `@astrojs/cloudflare` and Wrangler.

## 0) Decide your rendering mode

Two common patterns:

### Option A: Mostly static + a few on-demand routes

- Keep `output: 'static'` as the default.
- For any route that needs runtime data, add:

```ts
export const prerender = false;
```

This keeps most pages prerendered while running selected routes on demand.

### Option B: SSR-by-default

Set `output: 'server'` in `astro.config.*` so all pages render on demand.

## 1) Add the Cloudflare adapter

If you need on-demand rendering features such as SSR routes, server islands, actions, or sessions:

```bash
npx astro add cloudflare
```

## 2) `astro.config.mjs` baseline

```js
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Option B only:
  // output: 'server',

  adapter: cloudflare({
    platformProxy: { enabled: true, persist: true },
  }),
});
```

## 3) Wrangler config

Create `wrangler.jsonc` in the project root when you need bindings, a project name, custom flags, or a custom `main`:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "my-astro-app",
  "compatibility_date": "YYYY-MM-DD",
  "main": "@astrojs/cloudflare/entrypoints/server",
  "assets": {
    "binding": "ASSETS",
    "directory": "./dist"
  },
  "compatibility_flags": [
    "global_fetch_strictly_public"
  ],
  "observability": { "enabled": true }

  // Bindings (KV/D1/R2/DO/etc) go here.
}
```

Notes:

- Astro 6 can generate this default config automatically for simple apps.
- Add `nodejs_compat` only when your Worker runtime actually needs Node APIs.

## 4) Avoid exposing internal build files as static assets

Create `public/.assetsignore`:

```txt
_worker.js
```

## 5) Local preview + deploy

```bash
# Local preview in workerd
npx wrangler types
npx astro build
npx astro preview

# Deploy
npx wrangler types
npx astro build
npx wrangler deploy
```

## 6) TypeScript: binding types

Whenever you change bindings in `wrangler.*`, regenerate types:

```bash
npx wrangler types
```

Then ensure `worker-configuration.d.ts` is loaded in `tsconfig.json`.

## Source-of-truth docs

- Astro Cloudflare adapter docs:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Astro deploy guide (Cloudflare section):
  https://docs.astro.build/en/guides/deploy/cloudflare/
- Cloudflare Workers Static Assets:
  https://developers.cloudflare.com/workers/static-assets/
- Cloudflare `wrangler types` + TypeScript guidance:
  https://developers.cloudflare.com/workers/languages/typescript/
