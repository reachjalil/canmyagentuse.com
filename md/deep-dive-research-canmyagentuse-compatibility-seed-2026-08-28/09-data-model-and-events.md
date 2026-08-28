---
title: Data Model and Update Events
file: 09-data-model-and-events.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 3
---

# Data Model and Update Events

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The canonical seed is normalized around immutable IDs and long-form assertions. Full matrix cells are rebuilt from assertions so newly discovered surface-specific gates do not require schema changes. Registry updates, release observations, source changes, contradictions, and conformance runs should create append-only events rather than silently overwriting history.

## What We Found

### Tables

```text
vendors products surfaces features
support_assertions sources registry_inventory
compatibility_cells evidence_gaps test_backlog
lifecycle_events contradiction_events
```

### Assertion key

```text
(surface_id, feature_id, environment_scope, assertion_version)
```

### Events

```text
registry.entry.added
registry.entry.version_changed
surface.observed
assertion.created
assertion.superseded
explicit_non_support.added
evidence.retracted
contradiction.opened
test.completed
lifecycle.changed
```

The Kimi and Qoder rows demonstrate why registry version and current product version are separate fields: a registry distribution can remain valid while lagging the vendor’s current release line. [S-001] [S-182] [S-204]

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
