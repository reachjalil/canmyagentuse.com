# Astro 6.x Version and Release Notes Guidance

## Use this file when

- you are upgrading an older Astro repo,
- you suspect examples are using stale APIs,
- you need to understand which 6.0 and 6.1 changes matter for architecture,
- you are validating that a generated solution fits current Astro behavior.

## Why version awareness matters

Astro evolves in ways that can materially change implementation advice. For agents, the risk is not just syntax drift. It is architectural drift:

- recommending old content collection APIs,
- recommending outdated Cloudflare runtime access patterns,
- assuming Node-centric behavior in local development,
- using older Tailwind integration assumptions,
- forgetting newer actions, sessions, or live content patterns.

## Astro 6.0: changes that affect real projects

Astro 6.0 was not a cosmetic release. It materially affects how agents should think about modern Astro projects.

### Architecture-impacting changes

- Node 22+ is the baseline.
- Cloudflare support improved significantly, including a more production-like dev experience.
- The Fonts API became built-in.
- CSP support became stable.
- Live Content Collections became available.
- Vite 7, Shiki 4, and Zod 4 shifts can affect plugin and content assumptions.

### Practical agent implications

For an agent, Astro 6 means:

- verify Node and deployment runtime compatibility early,
- be more willing to recommend built-in fonts and CSP features,
- consider live content only when freshness justifies it,
- treat Cloudflare development behavior as much closer to production than before,
- verify integrations for 6.x compatibility.

## Astro 6.1: changes that especially matter in production work

Astro 6.1 is a refinement release with several details that matter in production-facing apps.

### Image handling

Astro 6.1 introduced codec-specific image defaults through image service configuration. This matters when:

- you are tuning quality across jpeg/webp/avif/png,
- you want consistent image policy across the site,
- you need something more deliberate than per-image ad hoc settings.

### i18n fallback routes

Integrations can now understand fallback routes better. This matters for:

- multilingual sites,
- sitemap generation,
- correct alternate-page discovery,
- consistent SEO behavior in localized sites.

### View transitions

There were improvements around mobile view transitions, which matters if the project depends on the transitions system for polished navigation.

### React and hydration stability

Hydration-related fixes matter in React-heavy Astro projects, especially when agent-generated code starts introducing islands, children, and action-driven interactive forms.

## Upgrade thinking for existing repos

When upgrading an older repo, inspect these first:

- Astro version in `package.json`
- adapter versions
- React integration version
- `astro.config.*`
- `wrangler.*`
- content collections code
- any runtime access code for Cloudflare
- any custom Worker entrypoint

## Upgrade checkpoints by domain

### Content collections

Astro 6 removed older compatibility support around the legacy content collections system. Existing content code should use the current content layer model.

### Cloudflare

Astro 6 changed important Cloudflare adapter behavior:

- development uses `workerd`,
- runtime access patterns changed,
- Pages support was removed from the adapter,
- Wrangler expectations changed.

### Images

If the project previously hard-coded image quality choices all over the codebase, consider centralizing policy through 6.1 image configuration where appropriate.

### i18n and SEO

If the project uses localized pages, re-check sitemap, fallback behavior, canonical strategy, and route alternates.

### React

If the project has hydration issues or outdated island patterns, re-evaluate `client:*` usage and action integration patterns.

## What to audit in a real repo after upgrading

- build and preview scripts,
- Node version in CI and deployment,
- `astro check`,
- content schema and loaders,
- React TS config,
- Cloudflare env and bindings access,
- any usage of removed APIs,
- sitemap, RSS, i18n, and metadata output,
- image component usage,
- end-to-end behavior in preview.

## Practical rule

If you are unsure whether advice is still correct, read:

1. the current docs page,
2. the release note,
3. the upgrade guide,
4. the repo’s installed version.

Do not trust memory over those sources.

## References

- Astro 6.0 release: https://astro.build/blog/astro-600/
- Astro 6.1 release: https://astro.build/blog/astro-610/
- Upgrade to Astro v6: https://docs.astro.build/en/guides/upgrade-to/v6/
- Cloudflare adapter docs: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
