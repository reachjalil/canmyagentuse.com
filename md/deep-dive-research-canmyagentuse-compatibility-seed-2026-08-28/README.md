# CanMyAgentUse Compatibility Seed — deep vendor pass

**Research cutoff:** 2026-08-28  
**Generated:** 2026-08-28T19:48:01Z  
**Primary audience:** Builder / Architect  
**Secondary audience:** Evaluator / Skeptic

This package expands the CanMyAgentUse compatibility seed into a surface-specific, evidence-backed vendor dataset. It is **complete for the official ACP Registry (39 agents) and the official Agent Plugins compatible-client list (9 clients) as observed on the cutoff date**. It also includes deeper first-party documentation research for major adjacent harnesses that are not fully represented by those registries.

It does **not** claim to enumerate every agent product in existence. Registry membership proves only the role or portable components listed. All other cells default to `unknown` until first-party or tested evidence exists.

## Package counts

| Item | Count |
|---|---:|
| Vendors | 51 |
| Products | 60 |
| Distinct surfaces | 93 |
| Compatibility features | 49 |
| Long-form assertions | 959 |
| Full surface × feature cells | 4557 |
| Supported cells | 790 |
| Partial cells | 30 |
| Explicit unsupported cells | 42 |
| Unknown cells | 3695 |
| Primary/supporting sources | 183 |
| Proposed conformance tests | 15 |

## Start here

1. `00-status.md` — scope and completion state.
2. `07-feature-matrix.md` — matrix findings and explicit non-support.
3. `15-comparison-tables.md` — vendor and surface comparison.
4. `vendor-by-vendor.md` — every included vendor, surface, supported/partial/unsupported summary, and major unknowns.
5. `data/support-assertions.csv` — canonical sourced assertion seed.
6. `data/compatibility-cells.csv` — full Cartesian grid with unknown defaults.
7. `data/compatibility-matrix-summary.csv` — compact high-demand feature matrix.
8. `data/registry-inventory.csv` — all ACP Registry and Agent Plugins client entries.
9. `validation-report.json` — automated integrity and scope checks.

## Status vocabulary

- `supported` — documented or registry-listed for the exact scoped capability.
- `partial` — gated, experimental, adapter-based, mode-specific, revision-limited, or conflicting.
- `unsupported` — explicit first-party negative or discontinued current surface.
- `unknown` — no defensible evidence; never a synonym for unsupported.

## Next implementation step

Import the normalized CSV/JSON files into the CanMyAgentUse repository, render product and surface pages from `compatibility-cells.csv`, and make every non-unknown cell open an evidence drawer. Run the tests in `data/test-backlog.csv` before upgrading `documented` or `registry-listed` cells to independently verified conformance.
