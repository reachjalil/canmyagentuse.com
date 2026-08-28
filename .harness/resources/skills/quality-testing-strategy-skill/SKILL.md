---
name: quality-testing-strategy-skill
description: Testing strategy and CI guidance for this repo. Use when adding or updating unit or integration tests with Vitest, organizing test files across apps/workers/lib, or tightening test coverage and troubleshooting failures.
---

# Quality Testing Strategy Skill



## Description

Testing strategy and CI guidance for this repo. Use when adding or updating unit or integration tests with Vitest, organizing test files across apps/workers/lib, or tightening test coverage and troubleshooting failures.

## Overview

Standardize test tiers, keep tests deterministic, and align with the repo's existing Vitest-first approach. Focus on fast unit coverage for helpers and targeted integration checks for agent and worker logic.

## Guideline Structure

```
quality-testing-strategy-skill/
|-- SKILL.md
`-- reference/
    |-- foundations.md
    |-- patterns.md
    |-- agent-testing.md
    `-- ci-and-workflow.md
```

## How to Navigate

- [reference/foundations.md](reference/foundations.md) - Test tiers, existing test locations, toolchain baseline.
- [reference/patterns.md](reference/patterns.md) - Unit test patterns, stubs, deterministic fixtures.
- [reference/agent-testing.md](reference/agent-testing.md) - Agent-specific test guidance aligned with agent-guide-skill.
- [reference/ci-and-workflow.md](reference/ci-and-workflow.md) - Running tests, package scripts, CI expectations.

## Quick Decisions

| Need | Prefer | Notes |
| --- | --- | --- |
| Validate a pure helper | Unit test next to the helper | `*.test.ts` with Vitest |
| Validate a worker route | Test the helper first | Keep integration checks thin |
| Validate agent behavior | Test handlers + state sync | Avoid full WebSocket harness |
| Debug test flakiness | Fix determinism | Control time, randomness, crypto |

## Core Principles

1. **Prefer hermetic unit tests** for helpers and state transforms.
2. **Keep tests deterministic** by stubbing time, randomness, and crypto.
3. **Match current tooling** (Vitest + co-located `*.test.ts`).
4. **For agents, test state transitions** and broadcast behavior, not full runtime plumbing.
5. **Keep CI fast** by scoping tests to the package that changed.

## Related Quality Skills

- **`quality-vitest-4-skill`** — use for Vitest v4 configuration, annotations, reporters, and sharding. This skill covers strategy; that skill covers tooling.
- **`quality-robust-error-handling-skill`** — use for error-path coverage patterns and async error handling.
- **`quality-type-safety-skill`** — use for type-safe test fixtures and schema validation in tests.

## Related Skills

- **platform-cloudflare-workers-skill** - Worker testing notes and Vitest config.
- **agent-guide-skill** - Agent architecture patterns to test against.
- **data-zod-to-sql-skill** - Model helpers that already use Vitest tests.
