---
title: Runtime and Practitioner Signals
file: 16-community-signals.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: mixed
sources_count: 5
---

# Runtime and Practitioner Signals

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The seed remains documentation-backed, but two Claude Code reports demonstrate why product docs cannot be treated as conformance tests: a valid optional-field omission reportedly failed validation, and dynamic tool discovery reportedly became stale. These incidents are retained as scoped reported evidence and converted into regression-test backlog items.

## What We Found

### Signal map

| Signal | Scope | Seed treatment |
|---|---|---|
| Valid MCP response rejected over optional fields | Claude Code build/revision path | Partial revision claim and regression test [S-015] |
| Dynamic tool list became stale | Claude Code runtime | `list_changed` test lead [S-016] |
| Registry version lags current product version | Kimi and Qoder | Version-drift contradiction, not a support downgrade [S-001] [S-182] [S-204] |
| Native plugin names overlap portable Agent Plugins | Multiple vendors | Separate feature IDs and implementation modes |

Runtime reports do not become universal unsupported claims. They qualify the exact surface/build and remain open until a fixed release is verified.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-016] Claude Code MCP stale tools issue — https://github.com/anthropics/claude-code/issues/88172
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
