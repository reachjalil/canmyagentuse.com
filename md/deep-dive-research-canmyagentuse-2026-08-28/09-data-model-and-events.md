---
title: Data Model, Evidence, and Change Events
file: 09-data-model-and-events.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 3
---

# Data Model, Evidence, and Change Events

## Reader Promise
Define the assertion/evidence lifecycle, change model, API shape and validation rules that keep the compatibility grid auditable.

## Summary (≤120 words)
Compatibility data should be append-oriented and evidence-linked. A visible cell is computed from assertions; assertions point to immutable evidence; evidence can expire or be contradicted without erasing history. The architecture should support static generation initially and a relational/API layer as contribution and test volume grows.

## What We Found
### Assertion record

Recommended minimum:

```json
{
  "feature_revision": "mcp.tools@2025-11-25",
  "target": "codex-cli@<release>",
  "environment_profile": "local-default",
  "status": "y",
  "qualifiers": [{"type":"transport","value":"stdio"}],
  "evidence": [{"source_id":"S-...","evidence_type":"documented","observed_at":"..."}]
}
```

### Resolution algorithm

1. Resolve requested feature to a revision.
2. Resolve product selection to one or more concrete surface targets.
3. Apply environment filters.
4. Fetch active assertions at the requested historical date.
5. Mark evidence stale using family-specific freshness policy.
6. Surface contradictions separately.
7. Compute derived parent profiles from child assertions.
8. Render a support token **without discarding qualifiers**.

### Change events

Treat `assertion.created`, `assertion.superseded`, `evidence.added`, `evidence.expired`, `contradiction.opened`, `contradiction.resolved`, `target.released`, `spec.revised`, and `test.completed` as explicit lifecycle events. This enables a `/changes` feed and historical snapshots.

### Public API

The proposed endpoint list is in `data/api-endpoints.csv`. Keep reads cacheable and versioned. Contribution writes should create review proposals rather than mutate published assertions directly.

### Validation rules

- Every foreign key resolves.
- Every `y/a/n` has evidence.
- Every feature belongs to a revisionable family/convention.
- Qualifier types are enumerated.
- Hosted targets require `observed_at` and a source/build fingerprint.
- Test evidence requires runner/test version and artifacts.
- `inferred` evidence can never by itself produce a certified/verified badge.
- A parent profile cannot be directly overridden without an explicit governance exception.

### Storage recommendation

Start with checked-in YAML/JSON + generated CSV to make review easy. Move canonical publication state to PostgreSQL when automated observations, vendors and community submissions require concurrency. Keep repository snapshots/releases as the durable public distribution format.

## Confidence Notes
High as an architecture recommendation.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-022] MCP lifecycle and capability negotiation — https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
