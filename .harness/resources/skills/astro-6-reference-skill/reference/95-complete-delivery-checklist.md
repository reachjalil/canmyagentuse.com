# Complete Delivery Checklist

## Use this file before declaring an Astro app “done”

A good Astro app is not done when the UI renders. It is done when the architecture, deployment, SEO, and operations all line up.

## Product and architecture

- [ ] app type classified
- [ ] render modes chosen deliberately
- [ ] route map documented
- [ ] content model chosen
- [ ] React usage justified
- [ ] Cloudflare/static deployment path chosen

## Repo structure

- [ ] layouts, pages, components, content, and server logic are clearly separated
- [ ] islands are easy to locate
- [ ] metadata helpers are centralized
- [ ] server code is not mixed into generic client folders

## Content and data

- [ ] editorial content uses collections or a justified alternative
- [ ] live content is used only where freshness requires it
- [ ] schemas are typed
- [ ] drafts/preview policy is explicit

## Interactivity

- [ ] every island is justified
- [ ] hydration directive is chosen intentionally
- [ ] page shell is not over-hydrated
- [ ] forms work without JS where practical

## React

- [ ] React owns only interactive surfaces that need it
- [ ] layout/content rendering stays in Astro where possible
- [ ] providers are scoped
- [ ] large props are not sent unnecessarily

## Full-stack/server features

- [ ] actions validate input on the server
- [ ] sessions are used deliberately
- [ ] middleware is not overloaded
- [ ] endpoints exist only where resource/API behavior is warranted

## Cloudflare

- [ ] static vs Workers distinction is correct
- [ ] current runtime APIs are used
- [ ] Wrangler config is minimal or justified
- [ ] bindings/secrets are configured safely
- [ ] type generation is current
- [ ] cache/personalization boundaries are safe

## SEO and content discoverability

- [ ] `site` is configured
- [ ] canonical logic is correct
- [ ] metadata system exists
- [ ] sitemap is generated or otherwise handled correctly
- [ ] RSS exists if publication content exists
- [ ] robots policy is correct for each environment
- [ ] i18n/hreflang is correct if multilingual
- [ ] structured data is honest and relevant

## Performance and quality

- [ ] image strategy is deliberate
- [ ] font strategy is deliberate
- [ ] third-party script budget is controlled
- [ ] bundle analysis done for larger sites
- [ ] core routes tested in preview
- [ ] `astro check` passes
- [ ] e2e coverage exists for critical flows

## Release and operations

- [ ] preview/staging environment behaves correctly
- [ ] noindex policy for non-production is understood
- [ ] rollback path is known
- [ ] observability/logging path exists
- [ ] upgrade posture is documented

## Final sign-off questions

- Can you explain why each route is static or dynamic?
- Can you explain why each hydrated island exists?
- Can you explain why React is present where it is present?
- Can you explain why the app needs Workers or does not need Workers?
- Can you explain where SEO data comes from?
- Can you explain how personalized content avoids unsafe caching?

If the answer to any of these is “not really,” the architecture still needs work.
