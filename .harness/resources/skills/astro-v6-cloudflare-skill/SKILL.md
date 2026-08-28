---
name: astro-v6-cloudflare-skill
description: Use when deploying or debugging Astro 6 on Cloudflare Workers. Covers adapter setup, wrangler.jsonc, bindings (KV/D1/R2/DO/Queues/Cron), sessions, server islands, and workerd-specific build issues.
---

# Astro 6 on Cloudflare Workers

## Description

Deploying and running Astro 6 on Cloudflare Workers. Use for `@astrojs/cloudflare` adapter setup, `wrangler.jsonc` config, Workers Static Assets, local dev and preview in `workerd`, Cloudflare bindings (KV/D1/R2/DO/Queues/Cron), sessions/actions/server islands at the edge, and debugging Cloudflare-specific build/runtime issues.

Use this skill for Astro work that is specifically about the Cloudflare runtime:

- configuring `@astrojs/cloudflare`
- writing or debugging `wrangler.jsonc`
- choosing static-only deployment vs Worker-backed on-demand rendering
- binding access (KV/D1/R2/DO/Queues/Cron)
- edge caching + headers + redirects
- local runtime parity in `astro dev` / `astro preview`

For general Astro app work that is not Cloudflare-specific, use the separate Astro platform skill.

Important current platform reality:

- Astro 6’s Cloudflare adapter targets Workers, not Pages.
- `Astro.locals.runtime` is removed. Prefer `import { env } from "cloudflare:workers"` for bindings.
- `astro dev` and `astro preview` now run against Cloudflare’s `workerd`.
- The adapter no longer uses `workerEntryPoint`; custom Workers now use a standard Wrangler `main` entry.

## Default decision path

1. **Static-only site (no on-demand routes, no Actions/Sessions):**
   - Don’t add the adapter.
   - Deploy the built `dist/` as static hosting.

2. **Any on-demand features (Actions, Sessions, server-rendered routes, server islands):**
   - Add `@astrojs/cloudflare`.
   - Target Cloudflare Workers.

3. **Rendering strategy in Astro 6:**
   - `output: 'server'` → SSR-by-default (opt in to prerender per route)
   - `output: 'static'` → static-by-default (opt out of prerender per route with `export const prerender = false`)

## Baseline configs (Workers)

### astro.config.mjs

Keep this minimal and add options only when needed:

```js
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      persist: true,
    },

    // Optional: set when prerendering needs Node-only dependencies.
    // prerenderEnvironment: 'node',

    // Optional: override the default SESSION KV binding name.
    // sessionKVBindingName: 'MY_SESSION_BINDING',
  }),

  // Choose one:
  // output: 'server',
  // output: 'static',
});
```

### wrangler.jsonc

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "my-astro-app",
  "compatibility_date": "2026-01-24",
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

- Astro 6 can generate the default Wrangler config automatically for very simple apps, but keep `wrangler.jsonc` in repo when you need bindings, project naming, custom flags, or a custom `main`.
- Only add `nodejs_compat` when the Worker runtime truly needs Node APIs.

### Required public/.assetsignore for Workers

```txt
_worker.js
```

## Bindings at runtime (Astro)

- In `.astro`, endpoints, and actions: `import { env } from 'cloudflare:workers'`
- Request metadata: `Astro.request.cf`
- Execution context inside `.astro`: `Astro.locals.cfContext`

Use `wrangler types` to generate the `Env` interface and runtime types. See `references/runtime-bindings.md`.

## Sessions

Astro sessions on Cloudflare use **Workers KV**. The adapter expects a KV binding named `SESSION` by default (override with `sessionKVBindingName`).

Wrangler can auto-provision the KV namespace on deploy, but manual binding is still valid.

See `references/sessions-kv.md`.

## Actions + React islands

- Prefer **Astro Actions** for server mutations.
- In React 19 islands, prefer `useActionState` for form submissions.

See `references/actions-react19.md`.

## Custom Worker entrypoint (Durable Objects, Queues, Cron)

If you need Durable Object classes or extra event handlers in the same Worker:

- set `main` in `wrangler.jsonc` to your custom Worker file
- import `handle` from `@astrojs/cloudflare/handler`
- export a standard Cloudflare Worker object directly

See `references/custom-worker-entry.md`.

## Local dev + preview

- `astro dev` uses `workerd` and reads bindings through `platformProxy`.
- `astro build && astro preview` is the current high-fidelity local preview flow.

See `references/deploy-workers.md` and `references/local-dev.md`.

## When something breaks

Common Cloudflare/Astro failure modes:

- **Bindings missing at runtime** → your Wrangler config isn’t being read, or `wrangler types` is stale.
- **Sessions not working** → KV binding name mismatch (`SESSION` vs custom).
- **Worker deploy serves only static files** → `main` points wrong, or assets routing is misconfigured.
- **CommonJS / Node API errors in dev/build** → pre-compile or replace Node-only dependencies, or use `prerenderEnvironment: 'node'` for prerender-only Node requirements.

See `references/troubleshooting.md`.

## Reference files

Read these only when needed:

- `references/deploy-workers.md` — Workers deploy + wrangler config patterns
- `references/deploy-pages.md` — current Pages support status and migration note
- `references/adapter-config.md` — `@astrojs/cloudflare` options
- `references/runtime-bindings.md` — `cloudflare:workers`, `Astro.locals.cfContext`, and `wrangler types`
- `references/actions-react19.md` — Actions + React 19 patterns (correct `accept` modes)
- `references/server-islands.md` — Cloudflare considerations for `server:defer`
- `references/sessions-kv.md` — Sessions KV binding + auto-provision vs manual
- `references/custom-worker-entry.md` — DO/Queues/Cron via Wrangler `main` + `@astrojs/cloudflare/handler`
- `references/routing-assets-headers-redirects.md` — `_headers`, `_redirects`, assets routing, `.assetsignore`
- `references/local-dev.md` — `astro dev`, `astro preview`, and `workerd` parity
