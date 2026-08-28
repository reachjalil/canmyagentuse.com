# Runtime bindings on Cloudflare (Astro 6)

This reference covers how Astro 6 exposes Cloudflare bindings and the most reliable way to type them.

## Access bindings anywhere on the server

Prefer importing bindings from `cloudflare:workers`:

```astro
---
import { env } from 'cloudflare:workers';
const appName = env.APP_NAME;
---
```

This works in `.astro` files, endpoints, actions, middleware, and other server code.

## Access request metadata and execution context

- Request metadata: `Astro.request.cf`
- Execution context in `.astro`: `Astro.locals.cfContext`

```astro
---
const cf = Astro.request.cf;
const cfContext = Astro.locals.cfContext;

cfContext.waitUntil(Promise.resolve());
---
```

## Local dev: `platformProxy`

When enabled, `platformProxy` lets `astro dev` read bindings from your Wrangler config and local secrets from `.dev.vars`.

```ts
// astro.config.ts
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      persist: true,
    },
  }),
});
```

## Secrets: `.dev.vars` + `wrangler secret`

- Prod: `wrangler secret put <KEY>`
- Local: `.dev.vars` in project root

```bash
npx wrangler secret put DB_PASSWORD
```

```dotenv
# .dev.vars
APP_NAME=my-astro-app
DB_PASSWORD=myPassword
```

## TypeScript: use `wrangler types`

Cloudflare recommends generating runtime and Env types from your Worker config:

```bash
npx wrangler types
```

This generates `worker-configuration.d.ts` with an `Env` interface and runtime APIs based on your Worker’s compatibility date and flags.

### Make TS load the generated types

Add it to your `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "types": ["astro/client", "./worker-configuration.d.ts"]
  }
}
```

If you also enable `nodejs_compat`, add Node types too:

```jsonc
{
  "compilerOptions": {
    "types": ["astro/client", "./worker-configuration.d.ts", "node"]
  }
}
```

## What not to do anymore

- Do not type `App.Locals` around `@astrojs/cloudflare`. `Astro.locals.runtime` was removed.
- Do not keep a Cloudflare-only `src/env.d.ts` shim just to expose runtime bindings.
- Keep `src/env.d.ts` only for app-specific declarations such as `App.SessionData`.

## Practical boundary pattern

- Read Cloudflare bindings at the server boundary.
- Pass plain JSON and serializable props into client islands.
- Avoid importing `cloudflare:workers` in any client bundle.

## Source-of-truth docs

- Astro Cloudflare adapter runtime usage + typing:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Cloudflare TypeScript + `wrangler types`:
  https://developers.cloudflare.com/workers/languages/typescript/
- Bindings overview:
  https://developers.cloudflare.com/workers/runtime-apis/bindings/
