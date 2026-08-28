---
title: Contributor and Maintainer Experience
file: 12-developer-experience.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 3
---

# Contributor and Maintainer Experience

## Reader Promise
Provide the end-to-end maintainer and contributor workflow for adding features, updating support and eventually running conformance tests.

## Summary (≤120 words)
The best operating model combines Can I Use’s reviewable feature files with BCD-style evidence detail. Contributions should propose data, not edit rendered pages. CI validates schema/references and generates previews. Publication requires evidence classification and target specificity. Runtime tests arrive later through an isolated runner and produce separate evidence records.

## What We Found
### Contribution workflow

1. **Propose feature definition** — stable ID, family, revision, role, description, source-of-truth URL and parent/children.
2. **Propose target** — surface, release/build or hosted observation, environment profile.
3. **Add assertion** — status plus structured qualifiers.
4. **Attach evidence** — source, locator/section, date, evidence type.
5. **CI validation** — schema, referential integrity, no unsupported positive states, duplicate/overlap detection.
6. **Preview** — generated feature and harness pages show the exact visual diff.
7. **Review** — domain maintainer checks source wording and avoids stronger paraphrases.
8. **Publish** — immutable dataset release + change event.

Can I Use already demonstrates the value of one feature record per file, hidden/draft lifecycle and repository validation. [S-002]

### Source watcher pipeline

Create source adapters for:

- spec changelogs/releases;
- GitHub releases/tags;
- vendor docs with stable anchors;
- product changelogs;
- official compatibility matrices;
- registry metadata.

A watcher should open a **review task**, not autonomously flip support. Diffing vendor docs is useful evidence discovery, not a trustworthy adjudicator.

### Vendor attestation workflow

Offer vendors a signed/verified organization identity that can propose assertions and confirm surface/release identifiers. Their submissions receive `vendor-attested`, not `tested`, until independently reproduced. Public history prevents quiet rewriting.

### Conformance workflow

- v1: test definitions only.
- v2: deterministic open fixtures for MCP/Skills/Plugin manifests/AGENTS.md.
- v3: opt-in host runners for local clients.
- v4: controlled hosted/enterprise profiles where legal/security arrangements exist.

### Developer repository layout

```text
/packages/schema
/data/specs
/data/features
/data/products
/data/surfaces
/data/assertions
/data/evidence
/data/tests
/apps/web
/apps/api          # later
/apps/runner       # isolated, later
```

For the initial user request, an Astro site can read a generated JSON bundle at build time. Do not put test execution in Astro server routes.

## Confidence Notes
High as a design plan.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-013] MDN BCD contributing guide — https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md
- [S-014] MDN BCD governance — https://github.com/mdn/browser-compat-data/blob/main/GOVERNANCE.md
