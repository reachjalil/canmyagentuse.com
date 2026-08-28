# DEEP_DIVE_RESEARCH.md

A self-contained brief for an **external research agent** (or human researcher) tasked with producing a **publishable-grade online deep dive** on a major enterprise-platform vendor's announcement of a *Headless* product line.

The audience for *this brief* is the agent doing the work. The audience for the *deliverable* is described inside the brief itself (decision-makers, builders, evaluators, skeptics).

Treat this document as the contract: scope, sources, structure, methods, and quality bar. The deliverable from the agent is a single zipped folder of markdown files (no website, no code) that another team can later convert into an Astro deep-dive site.

---

## 0. Subject And Framing

**Subject.** A large enterprise SaaS vendor — one that historically shipped a tightly-coupled UI + data + workflow + AI bundle — has announced a *Headless* version of their flagship platform. "Headless" here means the vendor is unbundling its rendered UI layer from its data, identity, workflow, and AI primitives, and exposing the underlying capabilities as APIs, events, SDKs, and composable services that customers can embed inside their own apps, sites, agents, and pipelines.

You should not assume the announcement is "just a marketing rebrand." Your job is to determine, with evidence, **what is actually new, what is repackaged, what is aspirational, and what changes for builders**.

**Reader question your deep dive must answer:**

> *"If I were betting a 12-to-24-month roadmap on this Headless platform, what is real today, what is on the roadmap, what is missing, what does it cost, what does it lock me into, and how does it compare to building on the alternatives?"*

**Framing rule (important).**

Approach this as if no marketing content existed. Imagine a senior architect, a CTO, a developer-experience lead, and a procurement skeptic each sitting next to you. Every claim you write must hold up under all four of their gazes simultaneously.

---

## 1. Why A Deep Dive (Not A Summary)

A vendor announcing a headless version of a giant integrated platform produces three predictable kinds of online noise:

1. **Vendor surface** — keynote, press release, product pages, "what's new" decks, partner blogs, paid media. Optimistic, abstract, demo-driven.
2. **Analyst surface** — industry analysts, system-integrator partners, consultancy briefs. Often contractually positive; occasionally sharp.
3. **Practitioner surface** — community forums, developer Slack/Discord, Hacker News, Reddit, X/Twitter, LinkedIn comment threads, dev.to, conference Q&A, GitHub issues, Stack Overflow, niche newsletters.

The signal is in the gap between (1) and (3), informed by (2). A good deep dive surfaces that gap honestly, with citations, screenshots, version numbers, dates, and quote attribution.

---

## 2. Operating Principles For The Agent

These are non-negotiable.

1. **Audience before extraction.** Before you research, lock the audience (Section 5) and let it decide what to extract and what to skip.
2. **Evidence or it didn't happen.** Every non-trivial claim cites a source: URL, archive link (Wayback or archive.today), publication date, author, retrieval timestamp.
3. **Mark inference.** When you reason past the source, label it `[inference]` and explain *why*.
4. **Verify freshness.** Vendor pages mutate. Capture archive snapshots the day you read them. Note last-modified dates if visible.
5. **Quote sparingly, attribute always.** Short verbatim quotes only when paraphrase would distort meaning. Always link.
6. **Distinguish announcement from availability.** A feature has four states — *announced, pilot/closed beta, general availability, deprecated*. Tag each one.
7. **Distinguish first-party from partner from community.** Do not blur a vendor blog with a SI partner blog with a community blog.
8. **No marketing voice.** Write like a working engineer summarizing for another working engineer. Skeptical, specific, dry.
9. **Surface contradictions.** When two credible sources disagree, you write a `contradictions.md` entry — not a smoothed-over consensus.
10. **No speculation about pricing or NDA-only material** unless you have a citable public source. If pricing is opaque, that is itself a finding.
11. **Reproducibility.** Another researcher should be able to retrace every claim from the citations alone.

---

## 3. The Deliverable

**Format.** A single zipped folder.

**Filename.** `deep-dive-research-{subject-slug}-{YYYY-MM-DD}.zip`

**Top-level structure inside the zip:**

```text
deep-dive-research-{subject-slug}/
  README.md
  00-status.md
  01-intent-brief.md
  02-source-inventory.md
  03-audience-and-thesis.md
  04-domain-model.md
  05-current-state-baseline.md
  06-headless-announcement-anatomy.md
  07-feature-matrix.md
  08-api-surface-analysis.md
  09-data-model-and-events.md
  10-identity-and-trust.md
  11-ai-and-agent-surface.md
  12-developer-experience.md
  13-pricing-and-licensing.md
  14-migration-and-coexistence.md
  15-comparison-tables.md
  16-community-signals.md
  17-analyst-and-press-coverage.md
  18-timeline.md
  19-evidence-ledger.md
  20-research-questions.md
  21-open-questions.md
  22-contradictions.md
  23-risks-and-unknowns.md
  24-glossary.md
  25-route-system-proposal.md
  26-site-conversion-brief.md
  27-research-log.md
  28-quality-review.md
  raw/
    sources.csv
    quotes.md
    captures/                # archived HTML, PDFs, screenshots
    transcripts/             # if any official talks were transcribed
  data/
    feature-matrix.csv
    api-endpoints.csv
    timeline.csv
    pricing-signals.csv
    sentiment-samples.csv
  diagrams/
    *.mmd                    # mermaid sources
    *.png or *.svg           # rendered, when needed
```

`README.md` is a 1-page table of contents that explains the folder, the dates of research, and the intended next step (Astro site conversion).

`00-status.md` is the phase ledger (what's done, what's in flight, what blocked you). Update it as you go.

`27-research-log.md` is a running journal: queries you ran, what worked, dead ends. This is what makes the deliverable reproducible.

Every numbered file has a fixed structure described in Section 9.

---

## 4. Research Window And Scope Boundaries

**Time window.** All claims must be valid as of the date stamped in `00-status.md`. Use UTC.

**In scope.**

- The announced *Headless* product surface itself: what it is, what it includes, what is GA vs. pilot vs. roadmap.
- The vendor's pre-existing platform that this Headless surface peels off from: relevant subsystems (data, workflow, identity, integration, analytics, AI/agents, marketplace).
- Adjacent vendor moves in the prior 24 months that set up this announcement (acquisitions, product renames, partner strategy, deprecations).
- Public developer ecosystem reaction during the first 30–90 days post-announcement.
- Direct alternatives: composable / API-first / headless competitors targeting the same buyer.

**Out of scope.**

- Speculation about internal vendor finances or org charts beyond what is public.
- Predictions about acquisition targets unless tied to a public statement.
- Anything under NDA. If you encounter a source that smells leaked, flag and exclude.

---

## 5. Audience Lens (Lock Before You Research)

Pick a **primary audience** from this list and write `03-audience-and-thesis.md` against it. The whole deep dive serves them.

- **Decision-Maker / Buyer.** A CTO, CIO, or VP of Engineering deciding whether to standardize on this Headless platform, expand existing usage, or hold off.
- **Builder / Architect.** A staff engineer or platform architect designing systems that would consume the Headless APIs.
- **Evaluator / Skeptic.** A technical due-diligence reviewer asked: *"is this real, is this stable, is this priced sanely, what are we locked into?"*
- **Migrator.** A team already on the vendor's bundled platform deciding whether to refactor toward the Headless surface, run hybrid, or stay put.
- **Competitor / Strategist.** A product lead at a competing platform deciding how to position.

**Default if the requester didn't specify:** *Builder / Architect*, with secondary lens *Evaluator / Skeptic*. State this explicitly in the intent brief and proceed.

For each audience pick, also record:

- prior knowledge you assume
- the success moment ("they finish reading and now they can ___")
- pain points the deep dive must address
- what to extract heavily
- what to deliberately defer or omit

---

## 6. The Investigation Plan

This is the playbook. It maps to the numbered files in Section 3.

### 6.1 Establish The Pre-Headless Baseline (`05-current-state-baseline.md`)

You cannot evaluate a Headless announcement without a clean snapshot of what existed *before*.

Document:

- The vendor's flagship platform: top-level modules, naming, current major version.
- Existing API surfaces and their style (REST, GraphQL, SOAP-legacy, bulk, streaming/CDC, webhooks).
- Existing SDKs and their language coverage.
- Existing extension points: serverless functions, low-code builders, marketplace apps, declarative metadata, custom UI shells.
- Existing identity / auth / tenancy model.
- Existing data residency, governance, and compliance posture (named certifications only — do not invent).
- Existing AI/agent features (if any) and how they were wired to the bundled UI.
- The bundled UI's role: is it the main entry, an optional shell, an admin console, all three?

The baseline should be readable by someone who knows the vendor exists but has never built on it.

### 6.2 Anatomize The Announcement (`06-headless-announcement-anatomy.md`)

Treat the announcement as a primary source to be dissected.

For every named capability in the announcement, capture:

| capability | first appearance (date, source) | stated availability | actual availability if knowable | predecessor (if any) | net new vs. rebrand | source links |

Distinguish:

- **Net-new capability** — did not exist in any form before.
- **Repackaged capability** — existed under a different name; now exposed as an API.
- **Renamed capability** — same product, new label, no behavior change.
- **Aspirational / roadmap** — announced but not GA.
- **Deprecation pair** — something old is being phased out; identify the migration path (or absence of one).

Also capture *what was conspicuously not mentioned* — that absence is a finding.

### 6.3 Map The API And Event Surface (`08-api-surface-analysis.md`, `09-data-model-and-events.md`)

For each public API surface in the Headless platform:

- protocol (REST, GraphQL, gRPC, AsyncAPI, webhooks, server-sent events, MQTT, etc.)
- auth model (OAuth 2.x, OIDC, JWT, mTLS, API keys, signed requests)
- pagination / filtering / sorting style
- rate limits and quota model
- versioning strategy (URI, header, date-pinned, evergreen)
- idempotency and consistency guarantees
- error model (problem+json, custom envelopes, status code conventions)
- SDK coverage and parity (does the JS SDK lag the REST? does the Python SDK exist?)
- changelog / deprecation policy

For data and events:

- canonical entities exposed
- relationship model (hard FK, soft refs, polymorphic)
- change-data-capture / event stream availability
- schema-evolution policy
- bulk / batch / large-payload patterns
- search and query languages (vendor-specific or standard)

The goal is that a builder can read this section and predict, with reasonable accuracy, whether the platform fits their architecture *before* writing a line of code.

### 6.4 Identity, Trust, And Tenancy (`10-identity-and-trust.md`)

- multi-tenancy model when consumed headlessly
- end-user auth: bring-your-own IdP? federated? embedded?
- service-to-service auth for agents and pipelines
- audit logging surface
- granular permission model and how it composes when the UI is no longer the gatekeeper
- data residency and regional pinning
- key management and BYOK posture

This section often surfaces the most consequential lock-in or blocker. Treat it carefully.

### 6.5 AI / Agent Surface (`11-ai-and-agent-surface.md`)

Almost every recent enterprise headless announcement bundles AI/agent primitives. Document:

- model providers (first-party, third-party, BYO)
- grounding / retrieval surface tied to platform data
- tool-use protocol (proprietary, function-calling, MCP-like)
- agent runtime (where does it execute, on whose compute, with what latency)
- guardrails, evaluation, and observability story
- pricing axis for AI usage (per token, per action, per agent, per seat)
- how agents authenticate and act on behalf of users

### 6.6 Developer Experience (`12-developer-experience.md`)

Walk the path a first-time builder would walk:

- signup → tenant provisioning → first API call (time, friction, gotchas)
- local dev story (sandboxes, scratch orgs, ephemeral envs, CLI)
- IaC / declarative config (Terraform provider? metadata-as-code?)
- observability into your own usage
- testing story (mock servers, replay, contract tests)
- docs quality (reference vs. how-to vs. tutorial vs. concept — Diátaxis lens)
- community and support channels (response time signals from public forums)
- breaking-change track record (search forums for migration pain)

If you can't actually sign up and try, say so and source from public videos, recorded talks, and screenshots.

### 6.7 Pricing And Licensing (`13-pricing-and-licensing.md`)

Pricing for headless enterprise platforms is famously opaque. Capture only what is publicly cite-able:

- public price-list pages and dates
- per-API-call, per-event, per-agent-run signals where disclosed
- floor / minimum-commit signals from analyst pieces
- license terms relevant to embedding (e.g., end-user routing, redistribution, white-labeling)
- whether the Headless surface is included in existing SKUs or sold separately
- partner / ISV terms if relevant

If pricing is undisclosed, that is the finding. Document the absence and link to the page that won't tell you.

### 6.8 Migration And Coexistence (`14-migration-and-coexistence.md`)

For an existing customer:

- can the Headless surface and the bundled UI coexist on the same tenant?
- which features cross over identically and which behave differently?
- what does a "strangler-fig" rollout actually look like?
- known footguns from community reports
- vendor-published migration guides vs. partner-published vs. community-published

### 6.9 Comparisons (`15-comparison-tables.md`)

Build at least two comparison tables:

- **Bundled platform vs. Headless platform** — same vendor, before and after. What changed for the builder?
- **This Headless platform vs. credible alternatives.** Pick 3–6 alternatives. Justify each pick. Do not include weak straw-men.

Comparison axes (suggested, adapt):

| axis | this platform | alt 1 | alt 2 | … |
|---|---|---|---|---|
| API style |  |  |  |  |
| Auth model |  |  |  |  |
| Event/CDC |  |  |  |  |
| Data residency options |  |  |  |  |
| Multi-tenant isolation model |  |  |  |  |
| AI/agent surface |  |  |  |  |
| Pricing transparency |  |  |  |  |
| SDK breadth |  |  |  |  |
| IaC support |  |  |  |  |
| Local dev story |  |  |  |  |
| Lock-in profile |  |  |  |  |
| Time-to-first-call |  |  |  |  |
| Public outage history |  |  |  |  |
| Community size signal |  |  |  |  |

Also produce a CSV at `data/feature-matrix.csv` so this can be re-rendered as a sortable table on the future site.

### 6.10 Community Signals (`16-community-signals.md`)

This is the *practitioner surface* and it is where most deep dives skimp. Don't.

Search and capture, with links, dates, and short attributed quotes:

- Hacker News submissions of the announcement and any follow-ups (top-voted comments, dissenters)
- Reddit threads in relevant subs (vendor-specific, /r/programming, /r/devops, /r/sysadmin, industry-specific subs)
- X/Twitter threads from named practitioners (verify identity)
- LinkedIn post threads from current and former platform engineers at the vendor and at SI partners
- Dev.to / Medium / personal blogs published in the first 90 days
- YouTube reactions from named developer-advocate channels (transcript or timestamp the relevant moment)
- Conference Q&A clips
- GitHub issues or discussions on the vendor's official SDK repos
- Stack Overflow tag activity
- Discord / Slack community digests where publicly archived
- Newsletter coverage (name the newsletter, link the archive)

For each signal, capture:

- url, archive url, retrieval date
- author handle and (if knowable) affiliation
- one-line gist
- short attributed quote (≤25 words) only if essential
- sentiment tag: `enthusiastic`, `cautious`, `skeptical`, `negative`, `confused`, `mixed`
- recurrence tag if the same complaint or praise shows up multiple places

Aggregate into `data/sentiment-samples.csv`. The point is not a sentiment score — it is a pattern map. Recurring complaints are leads, not noise.

### 6.11 Analyst And Press (`17-analyst-and-press-coverage.md`)

- Tier-1 tech press
- Industry analysts (named firms; note when they have a paid relationship with the vendor — this is usually disclosed)
- Trade press for the vendor's vertical
- SI partner thought-leadership pieces (treat as friendly press)

For each: link, date, author, gist, your one-line read on bias.

### 6.12 Timeline (`18-timeline.md`, `data/timeline.csv`)

A dated chronology of:

- prior acquisitions / strategic moves leading to the Headless announcement
- the announcement itself (keynote, blog, docs, GA dates)
- post-announcement product updates
- public reactions, retractions, clarifications

Render in markdown and as CSV. The future site will likely turn this into an interactive timeline.

### 6.13 Risks And Unknowns (`23-risks-and-unknowns.md`)

Be specific. Examples of the *shape* of risks worth calling out (do not invent vendor-specific ones — discover them):

- API stability under heavy load, based on public outage history
- versioning and deprecation track record on the vendor's existing APIs
- pricing creep or repricing during pilot programs
- features marketed as headless that still require the bundled UI for admin
- AI primitives gated by additional contracts
- features regional-locked at GA
- SDK lag behind REST surface

Each risk: *what it is, evidence, severity, mitigation if any.*

### 6.14 Contradictions (`22-contradictions.md`)

Whenever two credible sources disagree (vendor docs vs. vendor blog, vendor blog vs. partner post, partner post vs. practitioner report), record it:

| topic | source A claim | source B claim | dates | likely explanation | resolved? |

Do not resolve a contradiction by guessing. Leave it open and flag in `21-open-questions.md`.

### 6.15 Glossary (`24-glossary.md`)

Vendors invent terms. Build a glossary of every proprietary or repurposed term used in the announcement, with: vendor's definition, your plain-English translation, and the closest industry-standard equivalent.

---

## 7. Search Strategy (Concrete)

A multi-hour deep dive lives or dies by query craft. Plan the queries; log them.

### 7.1 Query Lattice

Run each topic through this lattice. Keep `27-research-log.md` updated with the queries.

For a topic like "rate limits":

- `"<vendor> headless" rate limit`
- `"<vendor> <api-name>" 429`
- `site:<vendor-docs-domain> rate limit`
- `site:news.ycombinator.com <vendor> headless`
- `site:reddit.com <vendor> headless rate limit`
- `site:stackoverflow.com <vendor> rate limit`
- `"<vendor>" rate limit before:<announcement+90d> after:<announcement-30d>`
- `"<vendor>" "throttle"`
- archive search: `<vendor-docs-url>` on web.archive.org for snapshots before and after announcement
- GitHub code search: `"<vendor-sdk-package>" rate` for real-world handling patterns
- YouTube: `<vendor> headless deep dive` and filter by date

### 7.2 Source Diversification Checklist

For every major topic, you should have at least:

- [ ] one vendor first-party source
- [ ] one independent practitioner source
- [ ] one dated archive snapshot
- [ ] one cross-check from a different surface (forum, video, SDK source, docs)

If any row stays empty, mark the topic `low-confidence` in the evidence ledger.

### 7.3 Archive Discipline

For *every* URL you cite:

1. submit to `web.archive.org/save/<url>` and record the snapshot URL
2. if Wayback fails, try `archive.today`
3. for PDFs and downloadable assets, save to `raw/captures/` with a timestamped filename
4. for screenshots, capture full-page; name as `YYYY-MM-DD_<topic>_<n>.png`
5. record retrieval date in UTC

A claim with no archive is a claim that may not survive the page being edited.

### 7.4 Talks, Videos, And Decks

- Treat conference videos as primary sources. Cite by `URL?t=Ns` deep links.
- If a talk has only a recording, transcribe the relevant minutes (auto-transcript is fine; mark `[auto-transcribed]`).
- Slide decks count if hosted on official domains. Save the PDF.

### 7.5 GitHub As A Signal

- Check the vendor's official org for new SDK repos created near the announcement date.
- Read the first 50 issues filed after announcement — early issues reveal real friction.
- Read commit messages for pre-GA repos; release tags reveal real dates.
- Search for `<vendor>` references in the issues of large open-source projects in the same vertical.

---

## 8. Methods For Hard Questions

Some questions don't yield to keyword search. Use these moves.

### 8.1 The "Three-Click Drilldown"

For each headline capability in the announcement, click three layers deep — overview page → developer page → API reference. The contradictions surface around layer two. Capture them.

### 8.2 The "Diff Two Pages" Move

Save the vendor's *bundled platform* documentation page for capability X today. Save the *headless platform* documentation page for capability X today. Diff them. Differences are findings; equalities are findings; renames are findings.

### 8.3 The "What Was Removed" Sweep

Use Wayback Machine to compare the vendor's product pages from 6 months pre-announcement vs. today. Pages or features that *quietly disappeared* often map to the new headless framing. Document silent deprecations.

### 8.4 The "Job Listings" Tell

Public job listings on the vendor's careers site reveal what they're staffing — which is what they consider unfinished. Cite anonymously by listing URL and date. Flag any listing that contradicts public messaging.

### 8.5 The "Who Disagrees Publicly" Sweep

Find at least three credible practitioners who have publicly criticized the announcement. Read them carefully. If you can't find any, that is itself a finding (and a yellow flag for your write-up — silence is rarely organic for a major announcement).

### 8.6 The "Build A Tiny Mental App" Move

Define a fictional but realistic builder use case (one paragraph) and walk every section of your deep dive against it. If your sections can't answer "would this ship?" for the toy app, you're missing something.

### 8.7 The "Five-Why" On Pricing

When pricing is opaque, ask five times: *why?* The answer is usually structural (sales-led motion, per-customer negotiation, packaging in flux). Document the *why*, not just the *that*.

---

## 9. File Templates

Each numbered file under the deliverable root should follow a consistent skeleton.

### 9.1 Standard Front Matter For Every File

```markdown
---
title: <human title>
file: <NN-name>.md
audience: <primary audience tag>
last_updated_utc: <YYYY-MM-DDTHH:MMZ>
confidence: <high | medium | low | mixed>
sources_count: <n>
---
```

### 9.2 Standard Body Sections

```markdown
# <Title>

## Reader Promise
One sentence. What the reader knows after reading this file.

## Summary (≤120 words)
The honest, citation-light TL;DR.

## What We Found
The full content, with inline citations as `[S-NNN]` keys that resolve in `19-evidence-ledger.md`.

## Confidence Notes
What is solid, what is shaky, what is inferred.

## Open Threads
Unresolved questions that should appear in `21-open-questions.md`.

## Sources Used
Bullet list of `[S-NNN]` keys used in this file.
```

### 9.3 Evidence Ledger Row Format (`19-evidence-ledger.md`)

| key | url | archive_url | author | publisher | published_at | retrieved_at_utc | type | role | confidence | quoted? | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|

Types: `vendor-doc`, `vendor-blog`, `vendor-press`, `vendor-talk`, `partner-blog`, `analyst`, `press`, `practitioner-blog`, `forum-post`, `social-post`, `video`, `slide-deck`, `github`, `archive-snapshot`, `inference`.

Roles: `canonical`, `supporting`, `historical`, `derived`, `external-context`, `unverified`.

### 9.4 Research Questions Format (`20-research-questions.md`)

Group by the question's owner section. Mark whether each question is `answered`, `partially-answered`, `unanswered`. Unanswered questions become `21-open-questions.md` entries.

### 9.5 Site Conversion Brief (`26-site-conversion-brief.md`)

This is for the team that will build the Astro site later. Include:

- proposed routes (from `25-route-system-proposal.md`) with one-line jobs
- which files become which routes
- which CSVs become which interactive widgets
- which diagrams need to render
- which sections benefit from a "skim layer" vs. "deep layer" UI split
- visual-direction suggestions (Evidence Atlas, Field Manual, Editorial Expedition — pick one and justify)
- accessibility and citation-display patterns

---

## 10. Suggested Route System For The Future Site (`25-route-system-proposal.md`)

This is a *proposal* the agent should refine, not a mandate.

```text
/                              # thesis + skim summary + entry to each route
/timeline                      # interactive timeline of the announcement and aftermath
/anatomy                       # capability-by-capability dissection of the announcement
/baseline                      # what existed before
/apis                          # API surface explorer
/data-and-events               # entities, schemas, events, CDC
/identity                      # auth, tenancy, audit, residency
/ai                            # AI/agent surface
/dx                            # developer experience walkthrough
/pricing                       # pricing signals + opacity findings
/migration                     # bundled → headless paths
/compare                       # interactive comparison table
/community                     # practitioner signal map
/press                         # analyst + press tracker
/risks                         # risks, unknowns, contradictions
/sources                       # full evidence ledger with filters
/source/:id                    # individual source detail page
/glossary                      # terms
/about                         # methodology, scope, limits, agent disclosure
```

Each route, in the proposal file, should record: job, audience, reader promise, evidence burden, primary handoff.

---

## 11. Quality Bar (`28-quality-review.md`)

Before zipping, the agent must self-review and produce a review file that confirms each of these or names the exception.

- [ ] Audience is locked and used to drive extraction.
- [ ] Every numbered file has front matter, reader promise, and a sources-used list.
- [ ] Every non-trivial claim has a `[S-NNN]` key resolving in the evidence ledger.
- [ ] Every cited URL has an archive snapshot or a `[archive-failed]` note.
- [ ] Vendor / partner / analyst / practitioner sources are visibly distinguished.
- [ ] Announcement state (announced / pilot / GA / deprecated) is tagged everywhere it matters.
- [ ] Comparison tables include at least three credible alternatives, justified.
- [ ] Pricing section either documents prices with citations *or* documents the opacity, not both vaguely.
- [ ] At least three independent practitioner critiques are surfaced and steel-manned.
- [ ] Contradictions are visible, not smoothed.
- [ ] Glossary covers every vendor-coined term used.
- [ ] The research log is detailed enough that another researcher could retrace the work.
- [ ] No section reads as marketing voice.
- [ ] No claim that the agent could not defend in a 20-minute call.

If any check fails, fix or annotate. Do not ship a quietly broken deliverable.

---

## 12. Anti-Patterns To Avoid

Stop and repair the work if any of these appear.

- "This unlocks unprecedented capabilities." — marketing voice.
- A feature presented without GA / pilot / roadmap state.
- A comparison table where competitors are obvious straw-men.
- A pricing section with vendor pricing pages but no archive links or dates.
- A community section with one Hacker News thread and nothing else.
- A timeline based on a single keynote.
- A glossary that just copies vendor definitions.
- A "risks" section that is a list of features described as risks ("integration is complex" without specifics).
- An evidence ledger with rows missing archive URLs or retrieval timestamps.
- An "AI/agent" section that doesn't address provenance, latency, cost, or guardrails.

---

## 13. Tone And Voice

- Working-engineer dry. Past-tense for events; present-tense for current state; future-tense only with explicit dates and citations.
- Use product/service names exactly as the vendor uses them on first reference; abbreviate consistently after.
- Prefer specific over fluent. "Returns 429 with `Retry-After` per the docs as of 2026-04-12" beats "well-behaved rate limiting."
- Never editorialize without evidence; always evidence without editorializing-as-a-replacement-for-thinking.

---

## 14. Time Budget Guidance

This is a multi-hour deep dive. A reasonable allocation for an agent:

| phase | rough share | notes |
|---|---|---|
| 0. Scoping + intent + audience lock | 5% | Output: `01-intent-brief.md`, `03-audience-and-thesis.md`. |
| 1. Baseline + announcement anatomy | 15% | Output: `05`, `06`. |
| 2. API / data / identity / AI deep work | 25% | Output: `08`, `09`, `10`, `11`. |
| 3. DX, pricing, migration | 10% | Output: `12`, `13`, `14`. |
| 4. Comparisons + matrices | 10% | Output: `07`, `15`, `data/*.csv`. |
| 5. Community + analyst + timeline | 15% | Output: `16`, `17`, `18`. |
| 6. Risks, contradictions, glossary | 5% | Output: `22`, `23`, `24`. |
| 7. Evidence ledger + open questions | 5% | Output: `19`, `20`, `21`. |
| 8. Site conversion brief + routes | 5% | Output: `25`, `26`. |
| 9. Self-review + zip | 5% | Output: `28`, plus the zip itself. |

Reorder if a finding demands it, but do not skip phases.

---

## 15. Out-Of-Bound Behaviors

The agent should:

- Not invent product names, feature names, version numbers, or dates.
- Not paraphrase a vendor claim into a stronger claim.
- Not flatten contradictions into false consensus.
- Not omit known weaknesses to keep tone neutral.
- Not include any source the agent cannot link to and timestamp.
- Not include any leaked or NDA-tagged content.
- Stop and ask if scope creeps materially beyond Section 4.

---

## 16. Final Step: Package And Ship

1. Verify the folder tree against Section 3.
2. Run the checklist in Section 11 and complete `28-quality-review.md`.
3. Update `00-status.md` with completion timestamp and final source count.
4. Zip the folder with the filename pattern in Section 3.
5. Return the zip plus a 200-word executive summary in the response body, with the top three findings the future site should lead with and the top three open questions the future site should disclose.

The receiving team's next step is to run this folder through a deep-dive site builder. Your output is *the input* to that pipeline. Treat it accordingly.
