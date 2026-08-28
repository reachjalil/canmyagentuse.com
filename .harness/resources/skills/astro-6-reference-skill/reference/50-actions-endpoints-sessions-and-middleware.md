# Actions, Endpoints, Sessions, and Middleware

## Why these matter together

These are the main Astro primitives for full-stack behavior.

A good agent should know when each one is the right tool.

## Actions

Actions are a strong default for user-driven mutations.

Use Actions when you want:

- server validation,
- typed input,
- clear mutation semantics,
- direct integration with forms,
- simpler page-centric server behavior.

### Good uses

- newsletter signup
- contact forms
- likes
- saves
- settings updates
- profile edits
- small workflow steps

### Strong action rules

- validate on the server
- keep inputs typed
- return structured errors
- let the page render fallback states without JS
- add client enhancement only when valuable

## Endpoints

Endpoints are best when the route is fundamentally an API/file response surface.

Use them for:

- JSON data for explicit consumers
- feeds
- downloadable resources
- machine-readable routes
- integration/webhook style behavior

Avoid using endpoints out of REST habit when an Action or normal page composition would be simpler.

## Sessions

Sessions are for server-stored state associated with a user flow.

Good uses:

- auth/session identity
- flash messages
- temporary workflow state
- user preferences
- lightweight server-side persisted state

Do not confuse sessions with a full application database.

## Middleware

Middleware is best for cross-cutting request behavior.

Use it for:

- access control
- attaching locals
- request-wide normalization
- locale negotiation
- central guardrails

Do not stuff unrelated business logic into middleware just because it runs early.

## Choice framework

### Use an Action when

- a page-driven mutation is happening
- forms are involved
- validation and page integration matter
- non-JS fallback matters

### Use an Endpoint when

- the output is resource/API shaped
- the consumer is not just the page itself
- you need JSON/file/feed semantics

### Use a Session when

- state belongs on the server across requests
- cookies alone are too limited or awkward
- you want server-owned identity/workflow state

### Use Middleware when

- the logic applies across many routes
- it is about request context, not one page’s local behavior

## Access control pattern

A common strong pattern is:

- session-backed identity
- middleware gate for protected routes
- page or server island reads user state
- actions handle mutations
- React only enhances local UX where needed

## Error handling guidance

Good server workflows must handle:

- invalid input
- auth failures
- expired sessions
- missing resources
- upstream failures

Avoid vague “something went wrong” states when typed errors can be expressed more clearly.

## Common mistakes

- putting all server logic in endpoints
- using middleware for too much domain-specific work
- treating sessions like a global app store
- building JS-only mutations that ignore the action model
- making routes SSR just because a small mutation exists

## References

- Actions guide: https://docs.astro.build/en/guides/actions/
- Sessions guide: https://docs.astro.build/en/guides/sessions/
- Middleware guide: https://docs.astro.build/en/guides/middleware/
- Endpoints guide: https://docs.astro.build/en/guides/endpoints/
