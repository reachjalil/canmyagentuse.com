# Local dev parity on Cloudflare (Astro 6)

The most common edge failure mode is: "worked locally, broke on Cloudflare."

With Astro 6, local development is much closer to production by default because the adapter uses Cloudflare’s `workerd` runtime during development and preview.

## Default workflow

1. `wrangler types && astro dev`
2. `wrangler types && astro build && astro preview`

`platformProxy` still matters because it controls how `astro dev` loads your Wrangler bindings and persisted local state.

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

## Suggested scripts (Workers)

```jsonc
{
  "scripts": {
    "dev": "wrangler types && astro dev",
    "build": "wrangler types && astro check && astro build",
    "preview": "wrangler types && astro build && astro preview",
    "deploy": "wrangler types && astro build && wrangler deploy"
  }
}
```

Notes:

- `astro dev` now runs against `workerd`, not a weaker simulation layer.
- `astro preview` is now the recommended built-output preview path for Astro on Cloudflare.
- Use `wrangler dev` only when you are debugging a custom non-Astro Worker entry defined in `wrangler.jsonc`.

## Source-of-truth docs

- Astro Cloudflare adapter local preview + upgrade notes:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- `platformProxy` adapter option:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/#platformproxyenabled
- Cloudflare TypeScript + `wrangler types`:
  https://developers.cloudflare.com/workers/languages/typescript/
