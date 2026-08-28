---
title: Open Questions
file: 21-open-questions.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 0
---

# Open Questions

## Reader Promise
Give product, engineering, security and governance owners the unresolved decisions that should be made before claiming conformance.

## Summary (≤120 words)
10 material questions remain. None prevents building the evidence-backed v1, but several should block a “verified compatibility” launch.

## What We Found
| id | title | question | owner | priority |
| --- | --- | --- | --- | --- |
| Q-001 | Hosted release identity | How should ChatGPT web, Claude web, cloud agents and other continuously deployed surfaces expose immutable compatibility targets? | data-model | high |
| Q-002 | Normative feature profiles | Who approves the required child features for labels such as “MCP Core Client” or “Agent Plugins 1.0 compatible”? | governance | high |
| Q-003 | Conformance authority | Should CanMyAgentUse publish its own test suite results, vendor attestations, or both—and which may use a “verified” badge? | governance | high |
| Q-004 | Plan/policy matrices | How far should the public grid split by plan, enterprise policy, geographic region, feature flag and admin configuration before it becomes unreadable? | ux | medium |
| Q-005 | Remote auth test safety | What credential and isolation model is acceptable for automated OAuth/MCP tests against third-party hosted products? | security | high |
| Q-006 | Proprietary feature scope | Should vendor-native rules, hooks and plugin formats be peers of open standards or a separate “host extensions” section? | taxonomy | medium |
| Q-007 | Evidence freshness | What expiry windows should apply to hosted observations versus version-pinned desktop/CLI claims? | operations | medium |
| Q-008 | Licensing | Which sourced compatibility claims can be redistributed verbatim versus only referenced/cited? | legal | high |
| Q-009 | Community reports | What minimum corroboration is required before a reported compatibility problem affects the public support color? | governance | medium |
| Q-010 | Test fixtures | Can official standards projects accept shared fixture suites so CanMyAgentUse tests match the protocol’s own intent? | partnerships | medium |

## Confidence Notes
High that these are real design decisions; answers require project governance or future testing.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- No external source keys; this chapter is a synthesis/design proposal derived from the evidence model.
