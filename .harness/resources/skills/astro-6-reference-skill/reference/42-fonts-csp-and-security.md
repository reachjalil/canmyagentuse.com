# Fonts, CSP, and Security

## Fonts in Astro 6

Astro 6 introduced a built-in Fonts API. This matters because font loading is both a performance and privacy concern.

A good font strategy should answer:

- self-host or provider?
- preload or not?
- fallback stack?
- how many families and weights are actually needed?

## Font strategy rules

- keep font families few
- keep weights constrained
- prefer predictable fallback behavior
- avoid loading decorative families site-wide
- test CLS and rendering stability
- treat typography as part of performance engineering

## Provider choices

Common patterns include:

- local filesystem fonts
- Fontsource-style managed local packages
- Google fonts through Astro’s supported mechanisms when appropriate

Choose based on:

- privacy requirements,
- branding,
- caching behavior,
- operational simplicity.

## CSP in Astro

Astro 6 stabilized CSP support. This allows stronger security posture without improvising everything manually.

Use CSP to control:

- script sources,
- style sources,
- image sources,
- font sources,
- connect sources,
- frame behavior,
- object/embed policy.

## Good CSP workflow

1. inventory scripts and external resources
2. define the minimum allowed sources
3. test in preview/staging
4. ensure images/fonts/analytics actually match policy
5. keep CSP changes intentional and reviewable

## Common CSP pitfalls

- adding permissive wildcards too early
- forgetting image/font/CDN sources
- adding inline scripts without a strategy
- introducing third-party widgets after CSP is already “done”
- not re-testing after analytics or tag-manager changes

## Secret and client boundary rules

- secrets never belong in client-visible props
- do not pass privileged runtime data into islands
- keep auth/session logic server-side
- use public env only for truly public values

## CSRF, cookies, and forms

Astro actions and forms reduce some accidental complexity, but you still need sound form and auth design.

General rules:

- validate on the server
- prefer same-origin server mutation flows when possible
- treat cookie/session behavior explicitly
- review reverse-proxy and edge behavior on the target platform

## Cloudflare-specific security notes

When on Cloudflare:

- use secrets instead of plaintext env for sensitive values
- be careful with cache and personalized content
- confirm static asset header behavior separately from dynamic route behavior
- keep platform/runtime differences out of generic UI code

## Security review checklist

- [ ] secrets isolated to server/runtime code
- [ ] public env usage intentional
- [ ] CSP defined and tested
- [ ] third-party scripts inventoried
- [ ] forms validated on server
- [ ] session/auth logic not leaked into islands
- [ ] cache policy safe for personalized responses

## References

- Fonts guide: https://docs.astro.build/en/guides/fonts/
- Configuration reference (security/CSP): https://docs.astro.build/en/reference/configuration-reference/
- Cloudflare secrets: https://developers.cloudflare.com/workers/configuration/secrets/
