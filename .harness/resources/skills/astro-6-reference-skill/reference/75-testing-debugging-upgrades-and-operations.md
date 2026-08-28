# Testing, Debugging, Upgrades, and Operations

## Baseline commands every Astro repo should respect

At minimum, a serious Astro repo should normalize:

- `astro dev`
- `astro build`
- `astro preview`
- `astro check`
- formatter/linter
- test runner(s)

## `astro check`

Treat `astro check` as a quality gate, not a nice-to-have.

It helps catch:

- content/type issues,
- component prop problems,
- route-level issues,
- integration drift.

## `astro sync`

Astro type generation and sync behavior are part of staying correct, especially with content collections and integrations.

Do not fight generated types. Use them.

## Testing layers

### Route-level / e2e

Use for:

- full page behavior,
- metadata output,
- form flows,
- auth and session flows,
- navigation and transitions,
- server rendering behavior.

### Component-level

Use for:

- React islands with logic,
- isolated UI behavior,
- edge cases in local state.

### Integration-level

Use for:

- content pipelines,
- action flows,
- middleware rules,
- endpoint behavior.

## Bundle analysis

If the site or app uses several islands or third-party libraries, analyze the bundle.

This is especially important when:

- React usage grows,
- charts/editors/widgets are added,
- performance regresses without an obvious HTML reason.

## Dev toolbar and debugging

Astro’s developer tooling is useful for inspecting:

- islands,
- performance considerations,
- accessibility concerns,
- route behavior during development.

Use it as part of verification, not just curiosity.

## Upgrade workflow

For upgrades:

1. update Astro and integrations deliberately
2. read the upgrade guide and release notes
3. run `astro check`
4. verify render modes, content, adapter behavior, and preview
5. test production-like runtime paths

## Common debugging themes in Astro repos

- hydration mismatch due to wrong boundary or props
- route render mode assumptions
- stale content schema or loaders
- missing `site` causing metadata issues
- Cloudflare runtime mismatch
- over-hydrated layouts
- environment leaks between server and client

## Operational posture

A production Astro app should have:

- predictable build and preview commands
- typed config
- version-aware upgrade habits
- clear deploy scripts
- a release checklist the team actually uses

## References

- CLI reference: https://docs.astro.build/en/reference/cli-reference/
- Troubleshooting: https://docs.astro.build/en/guides/troubleshooting/
- Bundle analysis recipe: https://docs.astro.build/en/recipes/analyze-bundle-size/
- Testing guide: https://docs.astro.build/en/guides/testing/
