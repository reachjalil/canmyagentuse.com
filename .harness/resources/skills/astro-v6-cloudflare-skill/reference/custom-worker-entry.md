# Custom Worker entrypoint (Durable Objects / Queues / Scheduled)

Astro 6 removed the adapter-level `workerEntryPoint` option.

If your app needs **additional handlers** such as Queues or Scheduled events, or needs to **export a Durable Object**, use a custom Worker file in Wrangler and call Astro through `@astrojs/cloudflare/handler`.

## 1) Configure `wrangler.jsonc`

```jsonc
{
  "main": "./src/worker.ts"
}
```

## 2) Implement `src/worker.ts`

```ts
// src/worker.ts
import { handle } from '@astrojs/cloudflare/handler';
import { DurableObject } from 'cloudflare:workers';

export class ChatRoom extends DurableObject<Env> {
  async sayHello() {
    return 'hello from ChatRoom';
  }
}

export default {
  async fetch(request, env, ctx) {
    ctx.waitUntil(env.MY_QUEUE.send('request'));
    return handle(request, env, ctx);
  },

  async queue(batch, _env) {
    for (const message of batch.messages) {
      console.log('queue message:', message.body);
    }
  },

  async scheduled(_event, env, ctx) {
    ctx.waitUntil(env.MY_QUEUE.send('cron-tick'));
  },
} satisfies ExportedHandler<Env>;
```

## 3) Wrangler config requirements

Add the bindings you used above.

### Queues

```jsonc
{
  "queues": {
    "producers": [{ "binding": "MY_QUEUE", "queue": "my-queue" }],
    "consumers": [{ "queue": "my-queue" }]
  }
}
```

### Durable Objects

```jsonc
{
  "durable_objects": {
    "bindings": [{ "name": "CHATROOM", "class_name": "ChatRoom" }]
  },
  "migrations": [{ "tag": "v1", "new_classes": ["ChatRoom"] }]
}
```

### Cron triggers

```jsonc
{
  "triggers": { "crons": ["*/5 * * * *"] }
}
```

## When to prefer Durable Objects over KV

- You need strong consistency, ordering, coordination, WebSockets, or per-room/per-user state.
- You need single-writer semantics.

KV is eventually consistent across regions.

## References (source-of-truth)

- Astro Cloudflare upgrade notes for custom entrypoints:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Cloudflare Workers handlers:
  https://developers.cloudflare.com/workers/runtime-apis/handlers/
- Durable Objects overview + best practices:
  https://developers.cloudflare.com/durable-objects/
  https://developers.cloudflare.com/durable-objects/best-practices/rules-of-durable-objects/
