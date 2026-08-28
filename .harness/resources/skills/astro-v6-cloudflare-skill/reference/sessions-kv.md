# Sessions on Cloudflare (Workers KV)

Astro Sessions let you store server-side state between requests without pushing that state into the client.

On Cloudflare, the adapter uses **Workers KV** for session storage.

## 1) Requirements

- `@astrojs/cloudflare` adapter installed
- The route is on-demand rendered (`output: 'server'` or `export const prerender = false`)

## 2) Bind a KV namespace for sessions

By default, Astro expects the KV binding to be named `SESSION`.

### Option A: Auto-provision on deploy

Wrangler can automatically provision the KV namespace during deploy for supported workflows.

If deploy succeeds and `SESSION` exists, you are done.

### Option B: Manual KV creation

```bash
npx wrangler kv namespace create "SESSION"
```

Add to `wrangler.jsonc`:

```jsonc
{
  "kv_namespaces": [
    { "binding": "SESSION", "id": "<KV_NAMESPACE_ID>" }
  ]
}
```

### Custom binding name

If you want `MY_SESSION_KV` instead:

- set adapter option `sessionKVBindingName: 'MY_SESSION_KV'`
- bind KV with `binding: "MY_SESSION_KV"` in Wrangler

## 3) Read and write session data in pages

```astro
---
export const prerender = false;

const cart = (await Astro.session?.get('cart')) ?? [];
---

<a href="/checkout">{cart.length} items</a>
```

## 4) Read and write session data in an endpoint

```ts
// src/pages/api/addToCart.ts
import type { APIContext } from 'astro';

export async function POST(context: APIContext) {
  const cart = (await context.session?.get('cart')) ?? [];
  const data = await context.request.json<{ item: string }>();

  if (!data?.item) return new Response('Item is required', { status: 400 });

  cart.push(data.item);
  await context.session?.set('cart', cart);

  return Response.json(cart);
}
```

## 5) Read and write session data in an Action

```ts
import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
  addToCart: defineAction({
    input: z.object({ productId: z.string() }),
    handler: async (input, context) => {
      const cart = (await context.session?.get('cart')) ?? [];
      cart.push(input.productId);
      await context.session?.set('cart', cart);
      return cart;
    },
  }),
};
```

## 6) Type your session data

Create `src/env.d.ts` only when you need app-specific session typing:

```ts
/// <reference types="astro/client" />

declare namespace App {
  interface SessionData {
    user?: { id: string; name: string };
    cart?: string[];
  }
}
```

## 7) Cloudflare KV consistency note

Workers KV is eventually consistent across regions. For state that must be strongly consistent, prefer Durable Objects.

## Source-of-truth docs

- Astro Sessions guide:
  https://docs.astro.build/en/guides/sessions/
- Astro Cloudflare adapter sessions section:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/#sessions
- Cloudflare Workers KV docs:
  https://developers.cloudflare.com/kv/
