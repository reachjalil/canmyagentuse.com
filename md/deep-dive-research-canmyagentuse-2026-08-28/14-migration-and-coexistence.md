---
title: Build Phases and Format Coexistence
file: 14-migration-and-coexistence.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 6
---

# Build Phases and Format Coexistence

## Reader Promise
Give the engineering team a staged migration path from a static research dataset to a trustworthy, tested compatibility service.

## Summary (≤120 words)
The lowest-risk build starts static and reviewable. First ship versioned feature/surface/evidence files and a generated Astro UI. Add relational APIs after contribution volume warrants them. Add deterministic conformance fixtures only after the evidence model is stable; add untrusted execution last. Vendor-native and open formats should coexist as separate feature families rather than being prematurely normalized as equivalents.

## What We Found
### Phase 0 — research seed

Load the package CSVs. Mark all rows as documentation-derived and show an alpha/data-quality banner.

### Phase 1 — static compatibility product

- checked-in schemas/data;
- build-time validation;
- feature pages, harness pages, compare, evidence;
- historical target records;
- search and filters;
- no write API and no execution.

### Phase 2 — maintained data service

- PostgreSQL canonical store;
- contribution/review workflow;
- signed dataset releases;
- source watchers and freshness jobs;
- vendor-attestation accounts.

### Phase 3 — conformance

- deterministic protocol fixtures;
- isolated local runners;
- publish test provenance separately from docs;
- disagreement UI when docs and runtime diverge.

### Phase 4 — enterprise/private matrices

Organizations add internal surfaces, policies and private evidence. Public and private data share schemas but not access control.

### Coexistence rule for formats

Treat open Agent Plugins, Claude plugins, Cursor plugins, OpenAI `.codex-plugin`, Kiro Powers and VS Code agent plugins as related packaging families—not one interchangeable format. Create feature mappings (“contains skills”, “contains MCP config”) while preserving manifest/lifecycle differences.

## Confidence Notes
High as a phased implementation recommendation.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-090] OpenAI Build plugins — https://learn.chatgpt.com/docs/build-plugins
- [S-100] Claude Code plugins — https://code.claude.com/docs/en/plugins
- [S-106] Cursor plugins — https://prod.cursor.com/docs/plugins
- [S-113] Agent plugins in VS Code — https://code.visualstudio.com/docs/agent-customization/agent-plugins
- [S-126] Create Kiro Powers — https://kiro.dev/docs/powers/create/
