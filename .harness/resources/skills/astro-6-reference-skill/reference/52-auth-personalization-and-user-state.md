# Auth, Personalization, and User State

## Goal

This file covers how to build user-aware Astro apps without destroying performance and maintainability.

## Golden rule

Do not make every page fully dynamic just because the user exists.

Personalization should be scoped.

## Strong architecture patterns

### Pattern 1: public shell + personalized fragment

Use when:

- the page is public and SEO-relevant,
- only a small section changes per user.

Good fit for:

- signed-in header state,
- saved-items badge,
- location-aware banner,
- account CTA.

Implementation options:

- server island,
- small client island,
- route-level SSR only if the whole route truly depends on user state.

### Pattern 2: authenticated route with Astro shell

Use when:

- the whole route is protected,
- server state matters,
- app-like widgets exist.

Pattern:

- middleware gate
- session access
- `.astro` layout shell
- React islands for dense widgets

### Pattern 3: server-owned mutation workflow

Use when:

- forms update server state,
- auth is required,
- progressive enhancement matters.

Pattern:

- Action validates input
- session identifies user
- page renders result
- React enhances local state only when justified

## Sessions vs cookies vs client state

### Sessions

Use for:

- auth state
- server-trusted user data
- flash and workflow state

### Cookies alone

Use when:

- the data is tiny,
- trust and confidentiality requirements are limited,
- server-side storage is unnecessary.

### Client state

Use when:

- the state is purely presentational,
- it does not need trust or persistence,
- it improves local UI only.

Do not store trusted auth state purely in ad hoc client state.

## Personalization and caching

This is where many architectures fail.

Rules:

- do not broadly cache personalized full-page HTML
- isolate personalized fragments where possible
- keep public pages public and reusable
- be careful with geo-based and session-based variations together

## Auth-aware SEO rules

- private/account pages should generally be noindex
- public pages should not depend on client auth checks for their primary content
- metadata should not require a hydrated auth shell to be correct

## Good route split

- `/` public marketing
- `/blog/*` public editorial
- `/docs/*` public docs
- `/app/*` authenticated
- `/account/*` authenticated
- optional server islands on public routes for light user awareness

## Common mistakes

- client-only auth gates on pages whose HTML should be protected server-side
- using a giant hydrated auth provider across every route
- combining personalization with static caching indiscriminately
- leaking session-derived data into public client bundles

## References

- Sessions guide: https://docs.astro.build/en/guides/sessions/
- Middleware guide: https://docs.astro.build/en/guides/middleware/
- Server islands: https://docs.astro.build/en/guides/server-islands/
- Actions guide: https://docs.astro.build/en/guides/actions/
