# CanMyAgentUse research package

**Research date:** 2026-08-28  
**Audience:** Builder / Architect, with Evaluator / Skeptic as the secondary lens.  
**Purpose:** implementation-ready research for a Can-I-Use-style compatibility product focused on AI agent harnesses, protocols, instruction formats, skills, plugins, interoperability layers, and host extensions.

## Thesis

The browser grid metaphor transfers well; the browser *data model* does not transfer unchanged. The canonical compatibility unit should be **feature revision × harness surface release (or dated hosted observation) × environment profile**. A product brand is navigation, not a compatibility target. “Supports MCP” is likewise too coarse: tools, resources, prompts, sampling, elicitation, roots, tasks, transports, OAuth, notifications and MCP Apps need atomic rows.

## Package at a glance

- 159 catalogued public sources
- 20 target harness surfaces
- 42 atomic capabilities in the seed matrix
- 56 capabilities in the expanded taxonomy
- 840 support assertions; **none are runtime-certified**
- 24 proposed conformance tests
- 15 proposed application routes
- 29 numbered research/design chapters plus machine-readable CSV/JSON products and Mermaid diagrams

## Read in this order

1. `01-intent-brief.md` — scope and success criteria.
2. `03-audience-and-thesis.md` — audience and product thesis.
3. `06-headless-announcement-anatomy.md` — repurposed from the research-contract filename into the **Can I Use anatomy/adaptation** chapter.
4. `04-domain-model.md` and `09-data-model-and-events.md` — canonical data model and evidence system.
5. `07-feature-matrix.md` — taxonomy and support semantics.
6. `08-api-surface-analysis.md` and `11-ai-and-agent-surface.md` — standards stack.
7. `12-developer-experience.md`, `25-route-system-proposal.md`, `26-site-conversion-brief.md` — development handoff.
8. `28-quality-review.md` and `validation-report.json` — limits and automated checks.

## Important boundary

The compatibility seed is **documentation-backed research**, not a conformance certificate. No arbitrary client binaries, private tenants, OAuth credentials, or third-party MCP servers were executed. Unsupported evidence is left `u` (unknown) rather than guessed. Archive capture was not available in the execution environment; every source is explicitly marked `[archive-failed:not-captured-in-research-environment]`.

## Data products

Start with `data/feature-matrix.csv`, `data/capabilities.csv`, `data/surfaces.csv`, `data/specifications.csv`, `data/conformance-tests.csv`, `data/evidence-sources.csv`, and `data/support-assertion.schema.json`.
