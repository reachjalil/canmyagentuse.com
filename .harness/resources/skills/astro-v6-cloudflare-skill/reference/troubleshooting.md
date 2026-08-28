# Troubleshooting Astro on Cloudflare (Astro 6)

This is a grab-bag of the most common issues when deploying Astro 6 to Cloudflare Workers.

## 1) Everything is 404 or only static files are served

Checklist:

- Did you run a build first?
  ```bash
  npx astro build
  ```
- Does `wrangler.jsonc` point to the current Astro server entry, or to your custom worker file?
  ```jsonc
  { "main": "@astrojs/cloudflare/entrypoints/server" }
  ```
- Are Workers Static Assets configured correctly?
  ```jsonc
  { "assets": { "binding": "ASSETS", "directory": "./dist" } }
  ```
- Do you have `public/.assetsignore` so internal build files are not uploaded as public assets?
  ```txt
  _worker.js
  ```

## 2) Bindings are undefined in dev

Most common causes:

- `platformProxy` is disabled
- the wrong Wrangler config file is being read
- `worker-configuration.d.ts` is stale so TypeScript masked the real issue

Fixes:

- Enable `platformProxy`
- set `platformProxy.configPath` when needed
- rerun `npx wrangler types`
- confirm local secrets exist in `.dev.vars`

## 3) Binding not found in production

Cloudflare bindings must exist in the deployed Worker environment.

- Confirm the binding exists in `wrangler.jsonc`
- Rebuild and redeploy
- If you are using environments, verify the binding is defined for the correct environment

## 4) Actions do not work

Typical causes:

- the page was prerendered
- the action expects form input but the definition still uses JSON defaults

Fixes:

- If `output: 'static'`, add `export const prerender = false` on that page
- For HTML forms, use `defineAction({ accept: 'form', ... })`

## 5) Sessions do not persist

Fixes:

- Ensure the route is on-demand rendered
- Ensure the KV binding name matches `SESSION` or your configured `sessionKVBindingName`
- If auto-provisioning did not happen, create the KV namespace manually

## 6) Node or CommonJS runtime errors

Typical symptoms:

- `require is not defined`
- `module is not defined`
- Node-only packages fail during dev or build

Fixes:

- Prefer Workers-native or ESM-compatible dependencies
- Add `nodejs_compat` only if the Worker runtime truly needs Node APIs
- If the problem is only in prerendered routes, set `prerenderEnvironment: 'node'`
- Pre-compile problematic dependencies when needed

## 7) `astro preview` or dev runtime differs from expectations

Astro 6 uses `workerd` for both development and preview.

If behavior still diverges:

- rerun `wrangler types`
- confirm the right Wrangler environment is being read
- check for Node-only dependencies leaking into Worker runtime code

## 8) Server islands fail on Cloudflare

Checklist:

- Adapter installed
- `/_server-islands/*` still reaches Astro’s handler
- personalized responses are not being cached incorrectly

## 9) Custom worker entry issues

Checklist:

- `wrangler.jsonc` points `main` at your custom worker file
- the custom worker imports `handle` from `@astrojs/cloudflare/handler`
- Durable Object bindings and migrations are declared in Wrangler

## If you need a known-good baseline

Start from:

- `deploy-workers.md` for a basic Workers config
- `runtime-bindings.md` for `cloudflare:workers` and type generation
- `custom-worker-entry.md` only if you need DOs, Queues, or Cron handlers
