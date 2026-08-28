---
title: Press, Analyst, and Source-Bias Strategy
file: 17-analyst-and-press-coverage.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 3
---

# Press, Analyst, and Source-Bias Strategy

## Reader Promise
Explain the source-bias strategy and why this compatibility project should prioritize normative and implementation evidence over announcement coverage.

## Summary (≤120 words)
For a compatibility database, press and analyst coverage are secondary. They are useful for discovering launches, names and strategic context, but rarely precise enough to establish protocol primitives or transport behavior. The evidence hierarchy therefore privileges standards, schemas, first-party product docs and reproducible implementation observations.

## What We Found
### Coverage strategy

The original deep-dive contract was designed around an enterprise product announcement and therefore emphasized analyst/press. This subject is different: it is an interoperability knowledge base. For this project, press is a **discovery surface**, not a compatibility authority.

### Bias model

- Standards project: authoritative on normative intent; may be optimistic about ecosystem compatibility.
- Vendor docs: authoritative on promised/documented product behavior; can be incomplete or lag deployed behavior.
- Vendor changelog/repo: strongest for release timing and implementation details.
- Registry/list: authoritative on listing state, not automatically on conformance.
- Independent test: strongest for observed behavior if environment/revision is reproducible.
- Community report: useful lead; weak alone.

### Publication pattern

Every feature page should visibly distinguish **Specification says**, **Vendor documents**, **CanMyAgentUse tested**, and **Community reports**. This prevents source status from disappearing when information is collapsed into a colored grid.

### Future press/analyst expansion

Use it only for ecosystem timeline and governance changes: standards moving foundations, major client announcements, protocol donations, cross-vendor collaborations and deprecations. Never use an analyst phrase such as “full MCP support” as a substitute for a primitive-level source.

## Confidence Notes
High as methodology; this package intentionally did not attempt a comprehensive tech-press archive because it would add little to feature-level compatibility.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-033] MCP specification changelog — https://modelcontextprotocol.io/specification/2025-11-25/changelog
- [S-064] How the community is driving ACP forward — https://zed.dev/blog/acp-progress-report
- [S-071] Agent2Agent joins Linux Foundation — https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
