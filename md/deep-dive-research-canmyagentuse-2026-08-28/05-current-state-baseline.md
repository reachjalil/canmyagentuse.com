---
title: Current-State Baseline: Can I Use and BCD
file: 05-current-state-baseline.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 9
---

# Current-State Baseline: Can I Use and BCD

## Reader Promise
Understand what Can I Use and MDN BCD already solve, and where the agent ecosystem has fundamentally different compatibility dimensions.

## Summary (≤120 words)
Can I Use demonstrates an effective feature-first compatibility product: one record per feature, compact support tokens, browser-version columns, notes and reusable exports. MDN BCD demonstrates a richer hierarchical compatibility schema with arrays of support statements and version-added/removed semantics. CanMyAgentUse should borrow both patterns but replace browser/version assumptions with agent-surface targets, protocol revisions and environment qualifiers.

## What We Found
### Can I Use baseline

The open Can I Use data repository stores individual feature records and combines them into distributable exports. Its contribution guide defines support tokens such as `y`, `a`, `n`, `u` plus modifiers/notes, and new features can be hidden until ready. [S-002] [S-003] [S-004]

The website renders a feature title and description, specification status, notes and a browser-version compatibility grid. Usage percentages help web developers prioritize browsers, but that concept should **not** be copied as fake “agent market share.” [S-006] [S-007]

### MDN BCD baseline

BCD stores features in a hierarchy with a `__compat` payload and one or more support statements per browser. Statements can capture `version_added`, `version_removed`, prefixes, flags, notes and partial implementation. That array-of-statements approach is closer to what agent compatibility needs than a single cell token. [S-012] [S-018]

### Agent-specific deltas

| browser world | agent world adaptation |
| --- | --- |
| Browser | Harness **surface** (CLI, IDE, web, desktop, cloud agent) |
| Browser version | Release/build **or dated hosted observation** |
| Web feature | Atomic agent capability / role / transport |
| Spec status | Authority + revision + maturity + normative level |
| Support token | State + structured qualifiers + evidence class |
| Prefix | Vendor extension / namespaced packaging / proprietary convention |
| Flag | Preview switch / admin policy / plan / beta gate |
| Polyfill | Adapter, shim, compatibility bridge or host plugin |
| Usage % | Do not fabricate; optionally show measured adoption only with a defensible dataset |
| Notes | First-class machine-readable qualifiers with source links |

### Baseline principle

Copy the **interaction grammar** of Can I Use—fast search, dense version grid, notes and explicit unknowns—while adopting a BCD-like richer support-statement model underneath.

## Confidence Notes
High for Can I Use/BCD structure; agent adaptation is design synthesis.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-001] Can I Use raw compatibility data repository — https://github.com/Fyrd/caniuse
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-003] Can I Use full data export — https://github.com/Fyrd/caniuse/blob/main/fulldata-json/data-2.0.json
- [S-004] Can I Use details feature record — https://github.com/Fyrd/caniuse/blob/main/features-json/details.json
- [S-006] Can I Use Details & Summary feature page — https://caniuse.com/details
- [S-007] Can I Use browser usage table — https://caniuse.com/usage-table
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-014] MDN BCD governance — https://github.com/mdn/browser-compat-data/blob/main/GOVERNANCE.md
- [S-018] MDN BCD TypeScript types — https://github.com/mdn/browser-compat-data/blob/main/types.d.ts
