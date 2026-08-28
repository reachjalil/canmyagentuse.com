# CI and Workflow

## Scope

This reference covers:
- Running tests locally per package
- Adding new test suites in a package
- Keeping CI-style runs fast and deterministic

This does NOT cover:
- Global CI pipeline configuration (not centralized here)

## Run Tests Locally

Use `pnpm --filter` to target the package you changed:

```bash
pnpm --filter @architect-agents/images-worker test
pnpm --filter @architect-agents/feature-zod-to-sql test
pnpm --filter @architect-agents/app-studio test
```

Prefer targeted runs over `pnpm -r test` when iterating.

## Add a New Test Suite

1. Add a `test` script in the package `package.json` (if missing).
2. Ensure `vitest` is a devDependency (`catalog:` like other packages).
3. Add `vitest.config.ts` when you need a non-default environment (workers use `environment: "node"`).
4. Place tests next to the code they cover (`*.test.ts`).

## Keep CI Deterministic

- Use `vitest run` for CI-style execution.
- Avoid network calls and rely on fixtures or stubs.
- Keep helper tests pure; add thin integration tests only when needed.

## Common Failure Triaging

- **Crypto/time failures**: stub Web Crypto or time APIs (see `patterns.md`).
- **Unexpected async failures**: ensure promises are awaited and use `async` tests.
- **Flaky data**: pin fixtures and avoid random values without a fixed seed.
