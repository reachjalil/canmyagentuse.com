---
title: Route System Proposal
file: 25-route-system-proposal.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 0
---

# Route System Proposal

## Reader Promise
Give the frontend team a route-by-route information architecture with a clear reader job and data dependency.

## Summary (≤120 words)
The proposed site has 15 primary routes. The information architecture supports both Can-I-Use-style feature discovery and the inverse “what can this harness use?” workflow. Evidence and methodology are top-level routes rather than hidden footnotes.

## What We Found
| route | job | audience | primary handoff |
| --- | --- | --- | --- |
| / | Compatibility search, thesis, high-level protocol stack and popular comparisons | all | feature + surface search |
| /features | Browse atomic capabilities and parent profiles | builder | capability explorer |
| /feature/[slug] | Can-I-Use-style deep page for one capability | builder | compatibility matrix + evidence |
| /harnesses | Browse products and surfaces | evaluator | surface catalog |
| /harness/[slug] | All known capabilities for a surface/release | evaluator | surface scorecard |
| /specs | Protocol/specification index | architect | spec family explorer |
| /spec/[slug] | Revision history, feature tree, roles and conformance links | architect | spec anatomy |
| /compare | Side-by-side selected surfaces | buyer | comparison table |
| /matrix | Dense power-user compatibility grid | builder | filterable matrix |
| /evidence | Evidence ledger and freshness filters | skeptic | evidence explorer |
| /tests | Conformance test registry and run status | maintainer | test explorer |
| /changes | Compatibility changes timeline | maintainer | change feed |
| /contradictions | Open evidence conflicts | skeptic | contradiction ledger |
| /contribute | How to submit/update claims | maintainer | contribution flow |
| /about | Method, support tokens, confidence and limits | all | methodology |

### Route rules

- `/feature/[slug]` is the canonical SEO/decision page.
- `/harness/[slug]` is the inverse compatibility view.
- `/compare` does not invent scores; it aligns selected atomic rows.
- `/matrix` is the dense power-user view and should use URL-encoded filters.
- `/evidence` and `/contradictions` make trust inspectable.
- `/tests` is visible even before execution, so users can see what “verified” would mean.
- `/changes` should be generated from assertion/spec/target lifecycle events, not hand-written announcements.

### Canonical URL strategy

Feature IDs should be stable and vendor-neutral (`/feature/mcp-sampling`), with vendor aliases redirecting rather than creating duplicate pages. Harness pages should encode product/surface identity; releases are selected within the page or via query/hash unless historical deep links warrant a release route.

## Confidence Notes
High as an IA proposal.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- No external source keys; this chapter is a synthesis/design proposal derived from the evidence model.
