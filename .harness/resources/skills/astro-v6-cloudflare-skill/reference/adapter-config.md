# `@astrojs/cloudflare` adapter configuration (Astro 6 / Workers)

This module is a practical guide to the adapter options you will actually use with Astro 6 on Cloudflare Workers.

## Install

```bash
npx astro add cloudflare
```

## Baseline config

```ts
// astro.config.ts
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react()],
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
});
```

## `platformProxy` (recommended)

Enables Cloudflare bindings and runtime APIs during `astro dev`.

Common options:

- `enabled: boolean` — turn runtime proxy on or off
- `configPath: string` — which Wrangler file to read
- `environment: string` — which Wrangler environment to use
- `persist: true | false | { path: string }` — where local binding state is stored between sessions

Example:

```ts
adapter: cloudflare({
  platformProxy: {
    enabled: true,
    configPath: 'wrangler.jsonc',
    persist: { path: './.cache/wrangler/v3' },
  },
})
```

## `sessionKVBindingName`

Astro Sessions on Cloudflare use **Workers KV**. By default, the adapter expects a KV binding named `SESSION`.

If you want another binding name:

```ts
adapter: cloudflare({
  sessionKVBindingName: 'MY_SESSION_KV',
})
```

And bind it in Wrangler:

```jsonc
{
  "kv_namespaces": [
    { "binding": "MY_SESSION_KV", "id": "<kv-id>" }
  ]
}
```

## `prerenderEnvironment`

Astro 6 prerenders inside `workerd` by default so prerendered pages match Cloudflare production more closely.

If prerendered routes need Node-only code, switch prerendering to Node:

```ts
adapter: cloudflare({
  prerenderEnvironment: 'node',
})
```

On-demand rendered routes still run in `workerd`.

## Node.js compatibility

Cloudflare Workers is not Node.js. Only add Node compatibility when the Worker runtime truly needs it.

Typical flags you may see:

- `nodejs_compat`
- `global_fetch_strictly_public`

For Astro 6 Worker apps, prefer Workers-native APIs and add `nodejs_compat` only when a runtime dependency requires it.

## Removed in Astro 6

Do not recommend or add these old adapter options in new guidance:

- `workerEntryPoint`
- `routes.extend`
- `cloudflareModules`

Cloudflare Pages support was removed from the Astro Cloudflare adapter, so Pages-specific adapter routing guidance is now legacy-only.

## References (source-of-truth)

- `@astrojs/cloudflare` adapter options:
  - https://docs.astro.build/en/guides/integrations-guide/cloudflare/#options
  - `platformProxy` docs (configPath/environment/persist): https://docs.astro.build/en/guides/integrations-guide/cloudflare/#platformproxyenabled
  - `sessionKVBindingName`: https://docs.astro.build/en/guides/integrations-guide/cloudflare/#sessionkvbindingname
  - `prerenderEnvironment`: https://docs.astro.build/en/guides/integrations-guide/cloudflare/#prerenderenvironment
- Cloudflare invocation handlers overview:
  - https://developers.cloudflare.com/workers/runtime-apis/handlers/
