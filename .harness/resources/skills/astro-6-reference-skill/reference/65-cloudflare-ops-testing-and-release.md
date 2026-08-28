# Cloudflare Operations, Testing, and Release

## Purpose

This file covers the operational side of Astro on Cloudflare.

## Environment model

Decide early:

- local development
- preview/staging
- production

For each environment, document:

- domain/URL
- secrets/bindings
- analytics behavior
- indexability policy
- whether previews should be crawlable
- rollout/rollback mechanics

## Local development

Astro 6 Cloudflare development is closer to production than older setups because of the `workerd`-based behavior.

That means local dev should catch:

- runtime API issues,
- Node-compat problems,
- some Cloudflare-specific behavior mismatches earlier.

Still verify preview and production behavior for anything binding-heavy or cache-sensitive.

## Type generation

When using Cloudflare bindings, generate/update type information whenever config changes.

Do not rely on memory for binding names or shapes.

## Release scripts

A strong setup often includes scripts for:

- local dev
- Astro build
- preview
- Wrangler type generation
- deploy
- smoke checks

## Preview and staging rules

- previews should be easy to create
- previews should be safe to inspect
- previews should not accidentally become canonical/indexable production URLs
- preview secrets and production secrets should be separated

## Cache and rollout checks

Before a rollout, verify:

- static asset headers
- page cache behavior
- personalized route safety
- image behavior
- headers and redirects
- 404 behavior
- robots/noindex in non-production

## Operational failure modes

### Binding mismatch

Symptoms:

- missing env at runtime
- type drift
- local/prod mismatch

Fix:

- regenerate types
- verify Wrangler config
- verify deployment environment config

### Node incompatibility

Symptoms:

- works in Node-centric assumptions but fails under Workers runtime

Fix:

- inspect server dependencies
- use the `prerenderEnvironment` escape hatch only when justified
- remove incompatible runtime assumptions where possible

### Cache poisoning or personalization leak

Symptoms:

- wrong user state visible
- geo or auth contamination across users

Fix:

- re-evaluate page vs fragment caching
- isolate request-aware content
- tighten cache policy

## Release checklist

- [ ] environment config verified
- [ ] type generation current
- [ ] preview passed
- [ ] sitemap/robots rules correct for environment
- [ ] no stale runtime APIs
- [ ] personalization and cache strategy validated
- [ ] rollback path understood

## References

- Astro Cloudflare integration: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
- Cloudflare Workers Astro guide: https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- Wrangler configuration: https://developers.cloudflare.com/workers/wrangler/configuration/
