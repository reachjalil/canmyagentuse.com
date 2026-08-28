# Actions + React 19 (`useActionState`) on Cloudflare

Astro Actions are the preferred way to build type-safe server functions you can call from client code or plain HTML forms.

Cloudflare note: actions run in the Worker runtime, so server-side handlers can import bindings from `cloudflare:workers`.

## Define actions (JSON + form flavors)

Actions accept JSON by default. If you want HTML form submissions and JS-disabled fallbacks, configure `accept: 'form'`.

```ts
// src/actions/index.ts
import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';
import { env } from 'cloudflare:workers';

async function likePost(postId: string) {
  await env.LIKES.put(`post:${postId}`, String(Date.now()));
  return 1;
}

export const server = {
  like: defineAction({
    input: z.object({ postId: z.string().min(1) }),
    handler: async ({ postId }) => likePost(postId),
  }),

  likeForm: defineAction({
    accept: 'form',
    input: z.object({ postId: z.string().min(1) }),
    handler: async ({ postId }) => likePost(postId),
  }),

  failExample: defineAction({
    input: z.object({ reason: z.string() }),
    handler: async ({ reason }) => {
      throw new ActionError({ code: 'BAD_REQUEST', message: `Nope: ${reason}` });
    },
  }),
};
```

## Call from a React island (JSON)

```tsx
// src/components/Like.tsx
import { actions } from 'astro:actions';

export function Like({ postId }: { postId: string }) {
  return (
    <button
      type="button"
      onClick={async () => {
        const result = await actions.like({ postId });
        if (result.error) {
          console.error(result.error);
          return;
        }
        console.log('likes +', result.data);
      }}
    >
      Like
    </button>
  );
}
```

## React 19 `useActionState()` for forms

```tsx
// src/components/LikeForm.tsx
import { actions } from 'astro:actions';
import { withState } from '@astrojs/react/actions';
import { useActionState } from 'react';

export function LikeForm({ postId }: { postId: string }) {
  const [state, action, pending] = useActionState(
    withState(actions.likeForm),
    { data: 0, error: undefined }
  );

  return (
    <form action={action}>
      <input type="hidden" name="postId" value={postId} />
      <button disabled={pending}>
        {pending ? 'Liking...' : `${state.data} ❤️`}
      </button>
    </form>
  );
}
```

## Call from a plain HTML `<form>`

Pages that submit to actions must be on-demand rendered:

- `output: 'server'`, or
- `output: 'static'` plus `export const prerender = false`

```astro
---
import { actions } from 'astro:actions';
---

<form method="POST" action={actions.likeForm}>
  <input type="hidden" name="postId" value="abc" />
  <button type="submit">Like</button>
</form>
```

## Cloudflare patterns for actions

Actions are a strong fit for:

- KV, D1, and Durable Object mutations
- Turnstile verification and rate limiting
- secrets that must stay server-side

Keep inputs serializable and validate with Zod.

## Source-of-truth docs

- Astro Actions guide:
  https://docs.astro.build/en/guides/actions/
- Actions API reference:
  https://docs.astro.build/en/reference/modules/astro-actions/
- React integration with `useActionState()`:
  https://docs.astro.build/en/guides/integrations-guide/react/#integrate-actions-with-useactionstate
