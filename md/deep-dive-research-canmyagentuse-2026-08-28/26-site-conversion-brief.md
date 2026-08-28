---
title: Astro Site Conversion and UI Design Brief
file: 26-site-conversion-brief.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 2
---

# Astro Site Conversion and UI Design Brief

## Reader Promise
Provide an implementation blueprint for an Astro-based site that preserves data trust while feeling as fast and legible as Can I Use.

## Summary (≤120 words)
Build the first release as a static-first Astro application generated from validated compatibility data. Use client islands only for search, matrix filtering, comparison and evidence drawers. Keep citation/evidence content server-rendered for accessibility and indexing. The visual direction should be an Evidence Atlas: dense data, strong typographic hierarchy and explicit provenance.

## What We Found
### Recommended architecture

**Astro static shell:** content routes, SEO metadata, source pages, glossary, changelog.  
**Generated data bundle:** versioned JSON derived from canonical YAML/JSON/CSV, never hand-maintained in components.  
**Client islands:** feature search, column selection, compare builder, matrix virtualization, evidence drawer, historical-date switcher.  
**Later API:** read-only compatibility endpoints can be introduced without changing route rendering contracts.

### Component inventory

- `GlobalSearch` — fuzzy feature/harness/spec aliases.
- `CompatibilityMatrix` — keyboard-navigable grid with sticky feature/surface headers.
- `SupportCell` — state, qualifier chips, evidence class and staleness.
- `EvidenceDrawer` — source history, locators, observation times, contradictions.
- `SpecBadge` — revision/maturity/authority.
- `SurfacePicker` — product grouped by web/CLI/IDE/desktop/cloud.
- `EnvironmentPicker` — plan/policy/auth/runtime dimensions.
- `ProfileExplainer` — parent profile child requirements.
- `ChangeTimeline` — assertion/spec/target history.
- `ConformancePanel` — test definitions/results without conflating docs with tests.

### Feature-page layout

1. Breadcrumb + feature name/aliases.
2. One-sentence practical definition.
3. Spec revision/status/role.
4. Compatibility grid.
5. Conditions/qualifiers summary.
6. “What this means” explanation with child/parent links.
7. Evidence ledger filtered to the feature.
8. Change history.
9. Conformance test coverage.
10. Contribution CTA.

### Visual direction: **Evidence Atlas**

Take Can I Use’s information density, but make provenance a visible design material. Use restrained status colors, non-color icons/patterns, monospaced revision identifiers, source-type badges and a timeline feel. Avoid glossy “AI gradient” branding that competes with the grid.

### Accessibility

- Every status color has text/icon redundancy.
- Matrix uses semantic table/grid roles and logical DOM order.
- Sticky/virtualized headers must remain announced to screen readers.
- Tooltips are not the sole carrier of qualifiers; cells have accessible names and a focusable details path.
- Mobile defaults to one selected surface group and horizontal snap/overflow rather than shrinking unreadably.
- Evidence drawers are dialogs with focus management and stable deep links.

### Performance

Pre-generate feature summaries, split detailed evidence by feature/surface, compress support tokens in the browser bundle, and lazy-load history/community data. A future `canmyagentuse-lite` package can mimic the role of `caniuse-lite` for tooling integrations.

### Search schema

Index canonical name, aliases, acronym, spec family, vendor terminology, feature role, transport and package filename. Searching “connector,” “tool server,” “SKILL.md,” “plugin.json,” or “ACP” should resolve to canonical concepts rather than just text matches.

### Data-to-route handoff

- `data/capabilities.csv` → `/features`, feature metadata.
- `data/feature-matrix.csv` → feature/harness grids.
- `data/specifications.csv` → `/specs`.
- `data/evidence-sources.csv` → `/evidence` and source drawers.
- `data/conformance-tests.csv` → `/tests`.
- `data/timeline.csv` → `/changes`.
- `data/contradictions.csv` → `/contradictions`.

### Minimum v1 acceptance criteria

A developer can answer “does surface X support feature Y, under which conditions, based on what source, as of when?” in no more than two navigational actions from search.

## Confidence Notes
High as an implementation-ready frontend brief.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-006] Can I Use Details & Summary feature page — https://caniuse.com/details
- [S-009] caniuse-lite data package — https://github.com/browserslist/caniuse-lite
