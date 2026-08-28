---
title: Domain Model
file: 04-domain-model.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 4
---

# Domain Model

## Reader Promise
Give engineers the canonical entities, keys and relationships needed to implement the database without conflating brands, releases, specifications or evidence.

## Summary (≤120 words)
The database should normalize products, surfaces, targets, feature definitions, spec revisions, assertions, qualifiers and evidence. A compatibility cell is a query result over those entities, not a stored color. Hosted observations are legitimate targets even when a product does not expose a stable version number.

## What We Found
### Canonical compatibility tuple

`feature_revision × target_release_or_observation × environment_profile`

That tuple resolves to zero or more evidence-backed assertions and an effective display state.

### Core entities

| entity | purpose | important fields |
| --- | --- | --- |
| vendor | organization/maintainer identity | id, name, canonical_url |
| product | brand/family navigation | vendor_id, name |
| surface | execution/UI boundary | type, local/hosted, product_id |
| target | versioned compatibility target | surface_id, version/build/observed_at, fingerprint |
| specification | standard/convention family | authority, maturity, canonical_url |
| spec_revision | immutable or dated revision | revision_id, published_at, status |
| feature | atomic capability or derived profile | spec_revision_id, role, parent_id, normative_level |
| environment_profile | conditions outside release | plan, policy, region, auth, OS/runtime, flags |
| assertion | support judgment | feature_revision, target, environment, status, confidence |
| qualifier | condition explaining partiality | type, value, operator |
| evidence | why assertion exists | source_id, evidence_type, locator, observed_at |
| test_case | machine-verifiable claim | feature_id, fixture, protocol revision |
| test_run | execution result | target, environment, runner version, artifacts |
| contradiction | conflicting evidence | assertion/evidence refs, resolution status |

### Why `product_version` is insufficient

A single release can contain multiple agent surfaces, and a hosted web product can deploy continuously. Conversely, a CLI may be tightly versioned while its cloud execution backend is not. Model a **target** as either a release or an observation and make the identifier type explicit.

### Derived profile example

`mcp.core-client` should be a derived profile with an explicit child set rather than a manually colored row. The profile resolver can say `y` only when every required child is `y` under compatible revision/environment constraints; `a` when required children are partial/unknown or the profile intentionally tolerates alternatives.

### Data invariants

1. A brand cannot own a compatibility assertion directly.
2. Every `y/a/n` assertion needs at least one evidence record.
3. `u` may exist without positive/negative evidence and should carry a reason.
4. Evidence never mutates; superseding evidence creates a new row.
5. Support state history is event-sourced or append-only enough to reconstruct “what did we believe on date X?”
6. The UI may aggregate but the raw assertion remains atomic.

## Confidence Notes
High as a proposed implementation model.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-022] MCP lifecycle and capability negotiation — https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
- [S-057] Agent Client Protocol architecture — https://agentclientprotocol.com/overview/architecture
