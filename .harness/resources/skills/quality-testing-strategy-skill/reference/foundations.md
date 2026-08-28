# Foundations

## Scope

This reference covers:
- Test tiers used in the repo
- Where tests live today
- Naming and placement conventions

This does NOT cover:
- Full end-to-end browser testing (not standardized yet)
- Accessibility test workflows (see ui-accessibility skill when it exists)

## Baseline Tooling

- **Vitest** is the standard test runner (see `pnpm-workspace.yaml` and package scripts).
- Workers use a `vitest.config.ts` with `environment: "node"` (see `workers/images-worker/vitest.config.ts`).
- Packages typically expose a `test` script that runs `vitest` or `vitest run`.

## Existing Test Locations

Use these as patterns for placement and style:

| Package | Location | Notes |
| --- | --- | --- |
| `workers/images-worker` | `workers/images-worker/src/helpers/*.test.ts` | Pure helper tests, node env |
| `lib/zod-to-sql` | `lib/zod-to-sql/src/*.test.ts` | Uses `vi` mocks and in-memory stubs |

Other packages (e.g. workers and apps) declare `test` scripts but may not yet have tests. When you add tests, follow the above placement conventions.

## Test Tiers

- **Unit tests**: Prefer for pure helpers and data transforms. Keep IO mocked.
- **Thin integration tests**: Use only when a helper does not cover a route or service boundary. Keep the boundary narrow.
- **UI tests**: Use React Testing Library sparingly for critical state or rendering logic.
- **E2E tests**: Not standardized in this repo; only add after aligning on tooling.

## Naming and Placement

- Use `*.test.ts` (or `*.test.tsx` for React).
- Co-locate tests with the modules they cover.
- Keep worker helper tests under `src/helpers/` to match existing patterns.

## Baseline Commands

- Run a package test suite via `pnpm --filter <package-name> test`.
- Use `vitest run` for CI-style deterministic runs when available.
