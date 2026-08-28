# Can My Agent Use identity

`@canmyagentuse/catalog` exports `SITE`, the typed source of truth for the public name, URL, positioning, theme color, global notices, mark path, and social image. This document explains how those values become a product.

## Name and voice

The product name is **Can My Agent Use**. The domain and compact signature are `canmyagentuse.com`.

The lookup sentence is first person: **Can my agent use this?** The voice is short, factual, and skeptical of hype. It says what the evidence proves, calls out documented limits, and leaves gaps unknown. It never describes the catalog or a listed product as certified, official, approved, partnered, or vendor-affiliated.

Preferred copy:

- “The current track is supported by the linked product documentation.”
- “Partial: the documented implementation is limited to a browser session.”
- “Unknown: no public evidence has been reviewed for this cell.”
- “Catalog coverage” or “sourced cells,” never “usage share” or “market share.”

Avoid claims such as “best agent,” “industry-leading,” “fully compatible,” or any comparative superlative the corpus cannot prove.

## Positioning and audience

Can My Agent Use is an independent compatibility catalog for engineers choosing among chat, desktop, and CLI agent harnesses. Its answer is useful only when a reader can inspect the public source behind it.

Humans use the HTML catalog to search, scan the surface stacks, compare harnesses, and read notes. Agents use the Markdown twins, JSON API, OpenAPI description, and `llms.txt` surfaces generated from the same content collections.

## Visual identity: night ledger

The visual system is a **night ledger**: ink-black chrome (`#12100e`), a deep-copper query belt (`#8f431c`) with bright copper accents (`#c45c26`), warm paper surfaces, IBM Plex Sans and Mono, sharp corners, dense tables, and visible evidence annotations. Copper signals the product’s question, not a provider or a support outcome. Green, amber, brick, and neutral paper are reserved for matrix statuses.

The query belt uses the familiar functional convention of completing a question, recomposed as an original evidence-ledger control. It includes a large underlined catalog field, an explicit lookup action, and a working scope panel for capabilities, harness surfaces, and specifications. It does not copy another site's header shell, icons, type, microcopy, color values, or settings interface.

The original mark is the **evidence aperture**: four warm ledger corners frame one exact copper compatibility cell. It represents the product's job of narrowing a large matrix to a single reviewable assertion. It is not traced from a provider mark, does not contain a provider initial, and is not derived from caniuse.com assets. Source assets are:

- `/sites/web/public/brand-mark.svg` — header mark
- `/sites/web/public/favicon.svg` — compact browser mark
- `/sites/web/public/og-card.svg` — editable social-card source
- `/sites/web/public/og-card.png` — 1200 × 630 Open Graph and Twitter card

The header pairs the mark with a plain-text wordmark and the operating line **lookup · compare · cite**. Do not style provider names as wordmarks or add provider logos to matrix columns.

## Copy system

- **Homepage:** ask the question, explain the lookup → compare → cite job, and label coverage honestly.
- **Feature page:** define the capability, show current/all tracks, show catalog coverage, then place evidence notes and public resources next to the matrix.
- **Harness page:** identify the harness surface and provider in plain text; the product identity stays dominant.
- **About:** explain the audience, independent status, and human/agent output parity.
- **Methodology:** define every status and the evidence rule that moves a cell.
- **News:** report changes to this catalog, not vendor news or popularity narratives.
- **Unknown state:** “No public evidence has been reviewed for this cell.” Unknown is a work queue, not an implied no.
- **Empty state:** explain what evidence is missing and point to the methodology or contribution guide.
- **Error page:** state that the path is not published and provide routes back into the catalog.
- **Footer:** keep the independent notice visible on every page and link both human and machine surfaces.

## Editorial rules

The only support statuses are:

| Status | Meaning |
| --- | --- |
| `yes` | Public documentation demonstrates the capability on the named harness and track without a material limit for the row definition. |
| `partial` | The capability exists, but public documentation records a meaningful limit such as plan, platform, transport, rollout, environment, or interaction scope. |
| `no` | A current public source explicitly says the harness does not support the capability. Absence from a feature list is not enough. |
| `unknown` | Default. The project has not reviewed sufficient public evidence for the cell. |
| `na` | Public evidence shows the row does not apply to this kind of harness. This still requires a note. |

Every non-unknown cell must be a `versions[]` entry with at least one `noteIds` reference, one explicit target, an environment profile, and a dated typed evidence reference to a stable resource ID. The note states what was checked and when; the feature’s `resources` list links public evidence. The shared Zod schema enforces those invariants. Evidence may come from public vendor documentation, release notes, maintained first-party repositories, or the relevant open-standard documentation. Do not use rumors, unsourced community claims, or screenshots of private interfaces.

Evidence classes are literal: documented, vendor-attested, listed, tested, reported, inferred, and not-found. Only independently executed, reproducible fixture results may be called tested. Current catalog v1 support cells are documentation or listing evidence; the conformance registry is proposed and not run.

`current` and `preview` are catalog tracks. They make the tables scannable; they do not claim that a vendor uses those channel names. A current-track source never fills preview automatically.

## Legal and product boundary

Provider and product names are plain-text nominative references used only to identify a catalog column or evidence source. Can My Agent Use uses original icons, layout, copy, palette, and code. The independent notice remains visible site-wide.

Provider-compatible review for this identity:

| Risk | Finding |
| --- | --- |
| Green | Original task-focused catalog; plain-text provider names; original ledger query mark; independent notice; public evidence links. |
| Yellow | Comparative marketing, marketplace publication, provider screenshots, official palettes, or provider names promoted into the product identity require policy and legal review. |
| Red | Provider logos, copied shells or microcopy, official/certified/partner claims, or an interface that can pass as a provider product are not permitted without documented authorization and qualified review. |

The notice supports an already distinct design; it is not permission to copy. All third-party terms, data rights, and trademark policies remain separate obligations.

## Identity acceptance check

Before shipping a public surface, confirm that the Can My Agent Use mark/name dominates, provider references are necessary and secondary, claims are linked to evidence, unknowns remain visible, social metadata resolves to the real 1200 × 630 card, and the page remains recognizable in monochrome without provider marks.
