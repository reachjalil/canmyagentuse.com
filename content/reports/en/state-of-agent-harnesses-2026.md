---
title: State of Agent Harnesses 2026
description: A data-driven view of 51 vendors, 93 exact agent surfaces, 49 capabilities, and the evidence gaps shaping the agent harness market.
slug: state-of-agent-harnesses-2026
locale: en
seoTitle: State of Agent Harnesses 2026 | Can My Agent Use
socialTitle: State of Agent Harnesses 2026
socialDescription: 93 exact surfaces. 49 capabilities. 4,557 compatibility cells. The first Can My Agent Use report maps what the public evidence can—and cannot—support.
previewImageAlt: State of Agent Harnesses 2026, showing the evidence-backed landscape across exact agent product surfaces and capabilities.
llmSummary: "The inaugural Can My Agent Use report analyzes the Evidence Atlas snapshot dated 2026-08-28: 51 vendors, 60 products, 93 exact surfaces, 49 atomic features, 4,557 cells, 959 assertions, and 183 sources. It finds 18.9% evidence coverage, large surface-level differences, strong documentation concentration in a few capabilities, and a need for exact-surface rather than brand-level comparison."
audience: Engineering leaders, platform teams, agent builders, researchers, and buyers evaluating AI agent harnesses.
contentKind: report
status: published
tags: [report, research, agent-harnesses, interoperability, evidence]
updated: 2026-08-29
published: 2026-08-29
summary: The evidence-backed map of what agent harnesses can do, where their surfaces diverge, and what the public record still cannot answer.
series: State of Agent Harnesses
edition: "2026"
snapshotDate: 2026-08-28
dataSource: evidence-atlas-v1
order: 10
---

Agent products are increasingly described as if they were interchangeable: choose a model, add tools, connect a few systems, and let the agent work. The evidence tells a more complicated story. The surrounding harness—the exact web app, desktop app, editor extension, command-line tool, cloud worker, protocol adapter, or embedded host—determines which capabilities are present, how they are exposed, and what conditions govern them.

This first **State of Agent Harnesses** report turns the Can My Agent Use Evidence Atlas into an editorial view of that market. The snapshot covers **51 vendors, 60 products, 93 exact surfaces, 49 atomic features, 4,557 compatibility cells, 959 long-form assertions, and 183 public sources**, with a research cutoff of **August 28, 2026**.

It is a map of public evidence, not a leaderboard. A supported cell means the source package established a scoped positive claim. An unsupported cell requires explicit negative evidence. A partial cell records a material limit. An unknown cell means the research package could not establish a defensible answer. Unknown does not mean no.

## Executive findings

1. **The market is broad, but its public evidence layer is thin.** Only 862 of 4,557 cells have a non-unknown state, for **18.9% evidence coverage**. The remaining 3,695 cells are open research questions.
2. **“The product supports it” is usually the wrong unit of analysis.** The Atlas found 93 surfaces across 28 source surface types. A CLI, hosted agent, editor mode, mobile app, and protocol adapter from one family can expose materially different capability sets.
3. **Positive evidence is concentrated in foundational capabilities.** MCP tools, the MCP client role, Agent Skills core, and ACP stdio are among the most frequently documented positive capabilities. Newer or role-specific layers remain much less legible.
4. **Conditions are part of compatibility.** Of the 862 reviewed cells, 318—**36.9%**—carry a qualifier. Feature flags, plan boundaries, roles, transport choices, availability stages, or other conditions often separate a usable capability from a misleading yes.
5. **The report is mostly a view of documentation, not runtime conformance.** Vendor documentation accounts for 162 of 183 sources. The Atlas includes proposed deterministic tests, but it does not convert documentation claims into test certification.

<div data-report-chart="status"></div>

## 1. The most important number is the unknown count

The snapshot contains 790 supported cells, 30 partial cells, 42 explicitly unsupported cells, and 3,695 unknown cells. Taken together, 862 cells have a reviewed, evidence-linked state. That is a meaningful research base, but it is not yet dense enough to support simplistic “best agent” rankings.

Within the reviewed subset, 820 cells are supported or partial—95.1%. That number is easy to misuse. It does **not** mean agent harnesses support 95.1% of the capabilities in this report. Positive features are more likely to be documented, listed in registries, and described in product material. Explicit non-support is comparatively rare, and absence from documentation must remain unknown. The reviewed subset therefore has a built-in positive selection effect.

The honest denominator is the full grid. Across all 4,557 surface-by-feature questions, positive evidence exists for 18.0%; explicit unsupported evidence exists for 0.9%; and 81.1% remains unknown. That is not a verdict on product quality. It is a verdict on the present ability of public information to answer exact compatibility questions.

For buyers and builders, this changes the first question. Before asking “which product has the feature?”, ask “which exact surface, version or observation, environment, and role has evidence for the feature?”

## 2. The agent harness market is a surface market

The Atlas identifies 93 exact surfaces described by 28 source-level surface types. To make the landscape readable, this report groups those types into five editorial families: terminal and headless; editors and IDEs; web, desktop, and mobile apps; cloud and autonomous agents; and protocol components. The raw surface type is preserved in the dataset.

<div data-report-chart="surface-groups"></div>

Terminal and headless surfaces are the largest conventional product group and the best documented of the five normalized groups: 341 of 1,127 cells are reviewed, or 30.3%. Web, desktop, and mobile apps reach 25.7%; cloud and autonomous surfaces reach 25.7%; editors and IDEs reach 22.4%.

Protocol components are different. They account for 33 of the 93 exact surfaces because the Atlas includes ACP registry agents, clients, wrappers, adapters, and MCP server surfaces. Yet only 82 of their 1,617 cells are reviewed, or 5.1%. Registry presence can establish a narrow protocol role; it cannot fill in dozens of unrelated product capabilities. A listed ACP agent is evidence for an ACP relationship, not evidence for MCP, Agent Skills, governance controls, automation, or every other row in the grid.

That is why Can My Agent Use treats a surface—not a vendor and not even a product family—as the compatibility column. A hosted product can change without a user-visible version. A local CLI can expose filesystem and process boundaries that its web sibling cannot. An editor extension can inherit permissions and context from the editor host. A protocol adapter may expose one role while deliberately omitting the rest of the product.

<div data-report-chart="heatmap"></div>

The heatmap makes the consequence visible: evidence density changes with both the surface family and the feature family. Empty regions are not silently painted red. They remain open.

## 3. Interoperability is becoming a stack, not a checkbox

The 49 atomic features fall into 11 groups: MCP, ACP, A2A, Agent Skills, Agent Plugins, native extensibility, instructions, automation, governance, sessions, and distribution. These layers answer different questions.

- **MCP** connects a host or client to tools, resources, prompts, sampling, tasks, transport, and other protocol capabilities.
- **ACP** connects editors and other clients to coding agents, with roles and operations distinct from MCP.
- **A2A** concerns agent-to-agent interaction rather than tool access inside one host.
- **Agent Skills, instructions, native plugins, and Agent Plugins** describe different packaging, customization, distribution, and runtime extension models.

Treating all of this as “supports agents” erases the architecture. A product can be an MCP client but not an MCP server. It can load instruction files without implementing a portable skill package. It can support subagents without allowing nested delegation or write access. It can appear in an ACP registry while having no documented A2A surface.

<div data-report-chart="feature-groups"></div>

Agent Skills has the highest evidence coverage of the 11 groups at 37.3%, followed by distribution at 26.9% and native extensibility at 23.8%. MCP—the largest group, with 17 atomic features—has 17.5% evidence coverage. ACP has 14.0%. Both A2A features remain unknown across all 93 surfaces in this snapshot.

These percentages measure what this research pass could substantiate. They do not measure adoption, market share, maturity, or technical merit. A compact feature family can be easier to document than a broad protocol with multiple optional roles and transports. A new standard can have strong specifications but little surface-level product evidence. A registry can be complete for its stated scope and still answer only a narrow slice of the compatibility grid.

## 4. A small set of capabilities anchors the current ecosystem

The most frequently documented positive capabilities reveal the practical center of gravity. MCP tools has positive evidence on 56 exact surfaces, and the MCP client role on 54. Agent Skills core has positive evidence on 53. ACP stdio and the ACP agent/server role follow with 46 and 42 positive surfaces respectively.

<div data-report-chart="capabilities"></div>

The ordering is useful only with its coverage context. MCP tools is reviewed on 59 of 93 surfaces; 34 remain unknown. Agent Skills core is reviewed on 54; 39 remain unknown. A longer green bar does not prove broader real-world use. It shows that more exact surfaces have a public record supporting that claim.

Still, the pattern matters. Tool calling, client roles, local transports, reusable instructions, and agent packaging are becoming the connective tissue of the ecosystem. The market is not converging on one monolithic harness. It is assembling a stack of narrower contracts that can travel between hosts, agents, editors, and services.

The next stage of maturity will depend less on adding another umbrella “agent platform” label and more on making those contracts precise: protocol revision, client or server role, supported transport, extension loading path, permission boundary, and observable failure behavior.

## 5. Compatibility is conditional more often than product pages imply

A binary matrix hides the most operationally important details. The Atlas records qualifiers alongside status, and 318 of the 862 reviewed cells—36.9%—have at least one condition or qualification.

<div data-report-chart="constraints"></div>

A qualifier can mean that support is preview-only, requires a developer setting, depends on a plan, applies to a specific host role, uses a vendor extension, requires a transport, or is limited to a named environment. Some conditions narrow an otherwise supported claim. Others explain why a partial result is still useful.

This is the difference between feature presence and deployable compatibility. “Supports MCP” is less actionable than “acts as an MCP client on the current CLI release, over stdio and Streamable HTTP, with OAuth behavior documented separately.” “Supports skills” is less actionable than “loads skills from these scopes, progressively reveals these resources, and executes scripts inside this permission boundary.”

Teams evaluating harnesses should preserve conditions through procurement, architecture, and testing. If qualifiers disappear when a comparison becomes a slide or scorecard, the comparison has discarded the information most likely to cause an implementation failure.

## 6. The evidence base is strong enough to navigate, not to certify

The snapshot draws on 183 public source records and 2,286 cell-to-source references. Vendor documentation represents 162 sources, or 88.5% of the source ledger. GitHub repositories and vendor release notes contribute six records each; standards and specifications contribute four; vendor engineering posts contribute three; and public registries contribute two.

<div data-report-chart="evidence"></div>

Across reviewed cells, the evidence method includes documentation 791 times and registry listing 141 times; some cells use both. The research labels 720 reviewed cells high confidence, 71 medium confidence, and 71 mixed confidence. Those labels describe the source package and scope agreement, not a probabilistic guarantee that a capability will work in every environment.

Documentation-led evidence has real value. It establishes names, roles, availability, supported paths, and vendor claims. But it cannot substitute for runtime verification when behavior depends on permissions, network policy, account state, model choice, plan, region, or a rapidly changing hosted interface.

The Atlas therefore carries a backlog of 15 proposed conformance tests and 949 evidence gaps. Tests remain proposed until run. A documented cell is never silently relabeled as tested. This separation is intentional: one of the fastest ways to make a compatibility catalog look complete is to collapse different evidence classes into one confidence theater.

## 7. Compare research coverage without turning it into a product score

The vendor view below plots exact surface count against evidence coverage. It defaults to the deepest research tier and can reveal all tiers. Provider names appear only to identify the source records; no provider logo or brand styling is used.

<div data-report-chart="vendors"></div>

The plot is a research operations view. A vendor with one tightly documented surface can appear above a vendor with six heterogeneous surfaces because its denominator is smaller. A registry-derived vendor can have a low coverage percentage because only its registered role was established. A broad product family can accumulate more reviewed cells while also carrying more unknowns.

Use the plot to find where the Atlas is dense or sparse, not to select a winner. Product selection requires the exact capabilities your workflow needs, the conditions attached to them, the relevant security boundary, and—when the stakes justify it—a runtime test against the target environment.

## What this means for engineering leaders

### Build requirements as atomic questions

Replace “we need an agent platform with MCP and skills” with a list of observable requirements. Name the exact role, transport, scope, permission, target surface, and failure behavior. The catalog can answer atomic questions more honestly than umbrella requirements.

### Choose the surface before the family

Decide whether the workflow belongs in a CLI, editor, desktop app, hosted agent, or protocol component. Then compare exact products within that surface. Brand-level selection first can lock a team into the wrong execution and permission model.

### Treat unknown as a research task

Unknown should create a verification step, not an automatic rejection or assumption of support. Ask for a first-party source, run a scoped test, and record the environment. If the answer matters to a production commitment, absence of evidence is itself a planning risk even though it is not evidence of absence.

### Preserve evidence class and date

A dated vendor document, a registry entry, a runtime test, and a user report should not collapse into the same badge. Keep the evidence method and observation date with the decision. Hosted surfaces and preview features can change faster than a procurement cycle.

## What providers can do better

Providers can make the ecosystem substantially easier to evaluate without publishing a giant comparison matrix.

1. Publish capability documentation for each exact surface instead of relying on family-level marketing.
2. State protocol roles and revisions explicitly: client, server, agent, host, adapter, or extension.
3. Document plan, policy, region, authentication, transport, and feature-flag constraints next to the capability claim.
4. Maintain stable changelogs for hosted surfaces and deprecation notices for local releases.
5. Provide deterministic conformance fixtures where a behavior can be tested safely.
6. State explicit non-support when a commonly assumed capability is intentionally absent.

Clear negative documentation is valuable. It prevents wasted integration work and allows a catalog to distinguish unsupported from merely unknown.

## What this report cannot tell you

This report does not measure model quality, task completion rate, latency, reliability, security posture, user satisfaction, installed base, revenue, or market share. It does not certify conformance. It does not infer support from silence, reuse a claim across sibling surfaces, or treat registry membership as product-wide compatibility.

The Atlas emphasizes public first-party documentation and named registries. Private betas, account-specific behavior, unannounced experiments, inaccessible enterprise controls, and undocumented runtime behavior may not appear. Documentation can change after the research cutoff. The source ledger should be checked again before a high-stakes decision.

## Methodology

The unit of analysis is one **exact surface × one atomic feature**. The 93 surfaces are expanded across 49 features to produce 4,557 cells. Each cell uses one primary status:

- **Supported:** public evidence establishes the capability for the named surface and scope.
- **Partial:** evidence establishes useful support with a material limitation.
- **Unsupported:** public evidence explicitly establishes non-support in the named scope.
- **Unknown:** the source package does not establish a defensible claim.

Non-unknown cells retain source keys, evidence method, confidence, last-verified date, environment scope, qualifiers, and long-form assertions where available. Surface groups in this article are an editorial normalization of the 28 raw surface types; the JSON report preserves both the normalized group and its member types.

The report is generated from **Evidence Atlas v1**, frozen at the August 28, 2026 research cutoff. The HTML charts, Markdown article, and JSON report derive from the same typed snapshot. The complete source ledger, exact-surface pages, capability pages, status records, limitations, and proposed test backlog remain available in the [Evidence Atlas](/atlas) and its [source ledger](/atlas/sources).

## Can My Agent Use is the foundation, not the conclusion

This report is the first editorial layer built on Can My Agent Use. The catalog’s core job remains simple: **lookup, compare, cite**. It names vendor-neutral capabilities, separates exact harness surfaces, keeps unknown visible, and attaches evidence to the smallest truthful claim.

Reports add a second job: explain what the accumulating evidence says about the ecosystem without flattening it into a synthetic score. Future editions can measure change over time, compare protocol layers, study documentation quality, examine runtime test results, and trace how capabilities move from experimental to stable—provided the underlying data can support those claims.

The foundation is deliberately inspectable. Read the [methodology](/methodology), explore the [compatibility matrix](/matrix), inspect [coverage](/coverage), download the [report JSON](/api/v1/reports/state-of-agent-harnesses-2026.json), or open the [Markdown edition](/reports/state-of-agent-harnesses-2026.md). If a result is incomplete or stale, [prepare a structured correction](/report).

*Can My Agent Use is independent and is not affiliated with, endorsed by, or sponsored by the providers referenced in this report. Provider names are used only to identify products and sources. All trademarks are the property of their respective owners.*
