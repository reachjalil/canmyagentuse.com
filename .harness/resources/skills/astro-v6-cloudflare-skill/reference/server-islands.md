# Server Islands (`server:defer`) on Cloudflare

Server islands let you keep most of a page static while rendering small dynamic fragments on demand.

## Requirements

- A server adapter must be installed. `@astrojs/cloudflare` qualifies.
- The island is rendered through the Worker runtime under `/_server-islands/...`.

Your page can still be statically rendered while the island fetches separately.

## Turn an Astro component into a server island

```astro
---
import UserAvatar from '../components/UserAvatar.astro';
---

<UserAvatar server:defer>
  <div slot="fallback">Loading avatar...</div>
</UserAvatar>
```

## Example island that uses Cloudflare bindings

```astro
---
// src/components/UserAvatar.astro
import { env } from 'cloudflare:workers';

const userId = Astro.cookies.get('uid')?.value;
const avatarUrl = userId ? await env.PROFILES.get(`avatar:${userId}`) : null;
---

<img src={avatarUrl ?? '/default-avatar.png'} alt="User avatar" />
```

## Caching pattern on Cloudflare

Typical approach:

- Cache the outer HTML aggressively when it is safe.
- Keep personalized server islands private:
  - use `Cache-Control: private, no-store` for user-specific fragments, or
  - use short TTLs plus `Vary` when that model is correct.

## Gotchas

- Props passed to server islands must be serializable.
- Inside the island request, the URL is a special `/_server-islands/...` URL. Use Astro’s documented guidance when you need the original page URL.
- If you override routing or add a custom Worker entry, make sure `/_server-islands/*` still reaches Astro’s handler.

## Source-of-truth docs

- Server islands guide:
  https://docs.astro.build/en/guides/server-islands/
- Server directives reference:
  https://docs.astro.build/en/reference/directives-reference/#server-directives
- Cloudflare adapter guide:
  https://docs.astro.build/en/guides/integrations-guide/cloudflare/
