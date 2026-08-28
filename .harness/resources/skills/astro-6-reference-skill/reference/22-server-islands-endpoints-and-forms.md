# Server Islands, Endpoints, and Forms

## Why these features belong together

A lot of “should this be a client widget?” questions are actually about choosing among:

- server islands,
- actions,
- endpoints,
- progressive enhancement forms.

This file helps make that choice correctly.

## Server islands

### Use server islands when

- a mostly static page needs a request-aware fragment,
- the data is personalized or geo-aware,
- the shell should still be highly cacheable,
- the fragment can load independently.

### Good examples

- account state in a header,
- localized promo or shipping notice,
- saved-items badge,
- personalized recommendations block,
- region-aware CTA.

### Bad examples

- entire page content that is already request-aware,
- heavy app surfaces with lots of shared state,
- fragments that could be simpler as a normal SSR route.

## Fallback design for server islands

Always think about the fallback state.

Good fallback choices:

- skeleton placeholder,
- generic CTA,
- signed-out version,
- loading summary.

A server island with poor fallback can feel slower than a simpler SSR route.

## Endpoints

Use endpoints when the output is not best represented as a normal page or action.

Good endpoint uses:

- JSON for explicit API consumers,
- RSS feeds,
- robots or dynamic machine-readable outputs,
- webhook-like server responses,
- download/file responses.

Do not use endpoints to re-create an unnecessary internal API layer when the page or action can do the job directly.

## Actions vs endpoints

### Choose Actions when

- you are handling a mutation from a form,
- you want input validation baked into the pattern,
- you want stronger end-to-end typing,
- the operation is primarily part of page UX.

### Choose Endpoints when

- the route is a general API surface,
- non-form consumers need it,
- the response is a file/JSON/stream rather than page UX state,
- the shape is closer to “resource endpoint” than “user action”.

## Progressive enhancement forms

Astro is especially strong when forms work without JS first.

Good pattern:

- form posts to an action,
- server validates and responds,
- page can render errors/success without JS,
- optional client enhancement can layer on top.

This is often simpler and more resilient than a client-only fetch flow.

## Form design guidelines

- validate on the server,
- keep client validation additive, not authoritative,
- return useful error messages,
- make success and failure states visible without JS,
- avoid putting trivial forms behind a heavy client state machine.

## When React belongs in a form

React can be a good fit when:

- the form has dynamic, multi-step local state,
- complex optimistic UX matters,
- `useActionState()` provides a clean enhancement path,
- the interaction is truly application-like.

But even then, keep the mutation model server-driven.

## Choice matrix

| Need | Best default |
| --- | --- |
| request-aware fragment inside static page | server island |
| standard user mutation from a page form | action |
| machine-readable route or file response | endpoint |
| basic newsletter/signup/contact form | action + progressive enhancement |
| complex app-like form wizard | React island + action |

## Common mistakes

- using endpoints for every mutation instead of actions,
- shipping client-only forms that could work without JS,
- turning a whole page SSR because one small fragment is request-aware,
- using server islands for complex stateful app surfaces,
- forgetting fallback UX for deferred fragments.

## References

- Server islands: https://docs.astro.build/en/guides/server-islands/
- Actions: https://docs.astro.build/en/guides/actions/
- Endpoints: https://docs.astro.build/en/guides/endpoints/
