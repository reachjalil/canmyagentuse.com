# Copy-Paste Starters

## Important note

These starters are intentionally conservative and meant to be adapted. Always verify against the installed package versions in the repo.

---

## 1. Baseline `astro.config.mjs` for a hybrid Astro + React + Cloudflare project

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  integrations: [
    react(),
    sitemap(),
  ],
  adapter: cloudflare({
    sessionKVBindingName: 'SESSION',
  }),
});
```

Use this when:

- public and server routes coexist,
- React islands exist,
- sitemap should be generated,
- Cloudflare Workers is the deployment target.

---

## 2. Minimal static `wrangler.jsonc`

```jsonc
{
  "name": "my-astro-static-site",
  "compatibility_date": "2026-04-15",
  "assets": {
    "directory": "./dist"
  }
}
```

Use this when:

- the site is entirely prerendered,
- Cloudflare is acting as a static host.

---

## 3. Minimal server-oriented `wrangler.jsonc`

```jsonc
{
  "name": "my-astro-workers-app",
  "compatibility_date": "2026-04-15",
  "main": "@astrojs/cloudflare/entrypoints/server",
  "assets": {
    "binding": "ASSETS",
    "directory": "./dist"
  },
  "kv_namespaces": [
    {
      "binding": "SESSION",
      "id": "replace-with-real-id"
    }
  ]
}
```

Use this when:

- Astro server features run on Workers,
- you want explicit project config,
- sessions use KV.

If the project is simple, Astro can often generate the basic Cloudflare config automatically.

---

## 4. React island in an Astro page

```astro
---
import SearchBox from '../components/islands/SearchBox.tsx';
---

<section>
  <h2>Search docs</h2>
  <SearchBox client:idle />
</section>
```

Rule:

- keep the shell in `.astro`,
- hydrate the smallest widget possible.

---

## 5. Server island in an Astro page

```astro
---
import UserGreeting from '../components/UserGreeting.astro';
---

<section>
  <h2>Welcome</h2>
  <UserGreeting server:defer>
    <p slot="fallback">Welcome back.</p>
  </UserGreeting>
</section>
```

Use when:

- only the fragment is request-aware or personalized,
- the page shell should remain cache-friendly.

---

## 6. Content collection starter

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

Use when:

- the site has typed editorial content,
- blog/docs/changelog pages should be generated from content.

---

## 7. Action starter

```ts
import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      const ok = true;

      if (!ok) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Subscription failed.',
        });
      }

      return { success: true, email };
    },
  }),
};
```

Use when:

- a form mutation should be server-owned and validated.

---

## 8. Session usage starter

```astro
---
const userId = await Astro.session.get('userId');

if (!userId) {
  return Astro.redirect('/login');
}
---
<h1>Account</h1>
<p>User: {userId}</p>
```

Use when:

- the route is on-demand,
- server-owned session state is appropriate.

---

## 9. Metadata layout starter

```astro
---
interface Props {
  title: string;
  description?: string;
  canonical?: string;
}

const {
  title,
  description = 'Default description',
  canonical = new URL(Astro.url.pathname, Astro.site).toString(),
} = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

Use when:

- you want metadata centralized instead of handwritten on every page.

---

## 10. `package.json` script baseline

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "cf:typegen": "wrangler types"
  }
}
```

If bindings or config change frequently, consider running type generation before build/preview/dev scripts as part of team workflow.

## References

- React integration: https://docs.astro.build/en/guides/integrations-guide/react/
- Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Actions guide: https://docs.astro.build/en/guides/actions/
- Content collections guide: https://docs.astro.build/en/guides/content-collections/
