---
title: Agent harness evaluation guide
description: A practical, evidence-oriented checklist for comparing model access, context, caching, media, tools, subagents, security, cost, reliability, and collaboration.
slug: harness-guide
locale: en
seoTitle: Agent harness evaluation guide | Can My Agent Use
socialTitle: What should you know before choosing an agent harness?
socialDescription: Evaluate exact web, desktop, editor, and CLI surfaces across context, files, tools, subagents, security, cost, reliability, and portability.
llmSummary: A harness evaluation should identify the exact surface and plan, then compare model and context limits, caching, file and media processing, tools, delegated execution, permissions, security and data controls, operational limits, collaboration, portability, and dated evidence.
audience: Individuals and teams selecting or reviewing an agent harness.
contentKind: page
status: published
tags: [guide, harnesses, evaluation, procurement, architecture]
updated: 2026-08-28
published: 2026-08-28
summary: A complete selection checklist for exact agent product surfaces.
---

Choosing an agent harness is not the same as choosing a model. The harness determines which model and context budget are actually available, how files and tools reach it, what work can continue or be delegated, which actions require approval, what data leaves the environment, how usage is billed, and whether the resulting work can be audited or moved elsewhere.

Start with the exact **product surface × plan × model or mode × environment × region × organization policy**. Do not combine a provider’s web chat, desktop application, editor extension, CLI, API, and enterprise workspace into one answer.

## Fast decision checklist

| Decision area | Minimum useful questions |
| --- | --- |
| Product boundary | Which exact web, desktop, editor, or CLI surface? Which release or observation date, plan, account type, region, and policy state? |
| Models and context | Which model actually runs? Can you choose it? What are the advertised and effective input limits, output limit, context meter, compaction behavior, and fallback policy? |
| Caching and cost | Is repeated context cached? Is reuse automatic or controllable? Can you see cache reads, writes, hits, tokens, latency, and price? |
| Files and media | Which document, image, audio, and video formats reach the model? What is extracted or sampled? What are the byte, file-count, page, duration, and storage limits? |
| Tools and environment | Can it read and write workspace files, run a terminal, use a browser, call connectors or MCP, access the network, and isolate side effects? |
| Delegated execution | Can it create child agents? Can they run concurrently or recursively? What context, models, tools, files, secrets, and approvals do they inherit? |
| Security and data | What is retained, used for improvement, regionally processed, encrypted, logged, and deletable? Can admins enforce policy and scope secrets? |
| Operations | What is included in the plan? Which quotas, rate limits, timeouts, retries, checkpoints, resumability, notifications, and status surfaces exist? |
| Collaboration and exit | Can teams share and assign work with roles? Can conversations, provenance, files, patches, and structured artifacts be exported? |
| Evidence quality | Is every claim exact-surface, dated, public, and scoped? Is it documented, tested, observed, inferred, or merely not found? |

## 1. Establish the compatibility target

Record the product name and exact surface first. For installed software, record the release, operating system, architecture, extension or editor version, and relevant configuration. For continuously deployed web products, use a dated hosted observation. Include account type, subscription, region, organization policy, feature flags, model selection, and local versus hosted execution.

This prevents a common category error: copying an API or model capability into a chat, desktop, editor, or CLI column without evidence that the harness exposes it.

## 2. Separate model access from context behavior

Ask which models can be selected, which are automatically routed, whether reasoning effort can be controlled, and whether fallback can silently change the model. Then record both advertised and effective context limits.

An effective budget may be smaller because the harness reserves capacity for output, hidden instructions, tool schemas, memory, retrieval, attachments, images, video frames, or earlier messages. Record the unit, model and mode, input cap, output cap, observation date, and boundary behavior. Acceptance of a large prompt does not prove that all of it remains available; test rejection, truncation, omission, retrieval, and automatic compaction separately.

For long sessions, determine when compaction occurs, whether it is visible, what it preserves, whether it can be triggered or configured, and how commitments survive the boundary. A generic model-card context number does not answer those questions.

## 3. Treat prompt caching as three claims

First ask whether eligible repeated prompt or context prefixes receive documented reuse. Then ask whether the harness exposes controls such as breakpoints, cache objects, retention choices, refresh, or invalidation. Finally ask whether an operator can verify reads, writes, hits, misses, cached tokens, latency, and cost.

Do not confuse model prompt caching with browser or HTTP caches, downloaded-file caches, vector indexes, retrieval caches, build caches, or a chat merely retaining its history. Record minimum prefix size, exact-match rules, supported models, lifetime, isolation boundary, invalidation, read and write pricing, and whether the harness preserves a cache-friendly prompt order.

## 4. Follow every file into model context

A file picker proves upload, not understanding. For each document, image, audio, or video format, identify whether the original reaches a multimodal model, text is extracted, pages or frames are rendered, audio is transcribed, a tool receives the file, or only metadata is available.

Record accepted extensions and MIME types; per-file and aggregate bytes; files per message or project; pages, duration, resolution, and storage; preprocessing; truncation or sampling; model and plan restrictions; latency; retention; and failure behavior. For video, test temporal order, scene changes, audio-visual alignment, on-screen text, and time-specific citations. A correct transcript answer does not prove visual or temporal understanding.

Workspace access is different from upload. A coding agent may read repository files without accepting an interactive attachment, while a hosted chat may accept files without exposing a filesystem.

## 5. Map tools, side effects, and approval boundaries

Inventory filesystem search and writes, patches, terminal execution, code sandboxes, git and pull requests, browser automation, computer use, web fetch, connectors, MCP roles and transports, plugins, skills, and structured output.

For each tool path, record authentication, network policy, filesystem scope, sandbox lifetime, environment variables, secrets, approval rules, allowed destinations, logs, failure behavior, and whether an action is proposed or verified after execution. Read access does not imply write access; browser navigation does not imply general desktop control; MCP tools do not imply MCP prompts, resources, sampling, Apps, or every transport.

## 6. Decompose subagents and background work

Basic delegation establishes only one child execution boundary. Evaluate nesting, concurrent children, queue and fan-out limits, context inheritance, isolation, per-child model choice, MCP and filesystem permissions, secret access, approval ownership, lifecycle controls, and result handoff independently.

Ask whether the operator can list, inspect, pause, resume, cancel, retry, and time-limit children; whether cancellation reaches descendant tools; how simultaneous writers avoid conflicts; and whether results return as traceable files, diffs, citations, status, and errors rather than unstructured prose.

For background or scheduled work, record where it executes after the client closes, maximum duration, checkpoints, reconnect and resume behavior, notifications, plan requirements, and what happens to pending approvals.

## 7. Trace data and administrative control end to end

Follow prompts, uploads, repository content, retrieved data, tool results, memory, generated artifacts, feedback, telemetry, logs, caches, safety copies, and backups. For each, ask about retention, deletion, training or improvement use, human review, storage and processing regions, encryption, customer-managed keys, support access, and subprocessors.

Then evaluate managed secrets, identity, role and policy enforcement, audit logs, connector authorization, local-only or offline behavior, and organization controls over models, tools, sharing, uploads, memory, data use, and sub-agent fan-out. A native app is not automatically local-only, and a provider-wide certification is not a substitute for exact-surface data-flow evidence.

## 8. Price the real workload and its failure modes

Record plan price and billing period, included usage, model premiums, tool or connector charges, hosted compute, storage, media processing, sub-agent usage, overages, hard caps, seat minimums, and enterprise-only terms. Pair that with per-run and aggregate meters so estimates can be reconciled with actual use.

Document request, token, concurrency, upload, tool, and rolling quotas; foreground and background timeouts; approval and idle deadlines; retry and backoff; model fallback; checkpoints; idempotency; rollback or reconciliation; and preservation of partial results. A safe retry policy must distinguish reads from externally visible writes such as sending a message, changing a database, deploying code, or purchasing an item.

## 9. Check collaboration and the exit path

Separate a public share link from named access, comments, edits, continuation rights, shared project context, granular roles, and accountable handoff. Record revocation, expiration, external access, recipient account requirements, inherited connector permissions, ownership transfer, and audit attribution.

Test export before committing important work. A useful run export contains roles, timestamps, models, instructions, tool calls and results, approvals, citations, attachments, sub-agent relationships, errors, usage, and status. Artifact export should preserve original files, patches, repositories, reports, media, structured results, metadata, and checksums in a form that remains usable outside the harness.

## 10. Keep evidence proportional to the claim

Prefer current public product documentation, release notes, maintained first-party repositories, standards text, and reproducible tests. Record what was reviewed and when. Search snippets, rumors, private beta screens, provider-family assumptions, and silence do not justify a definitive support state.

Use **unknown** when the exact claim has not passed the evidence bar. Use **partial** when the capability is constrained by plan, platform, model, region, rollout, policy, runtime, transport, format, size, or another material boundary. Reserve **no** for explicit current evidence of non-support. Keep lifecycle labels such as planned, preview, stable, and deprecated separate from compatibility.

## Minimum decision record

Before selecting a harness, preserve:

1. Exact surface, release or observation date, plan, region, policy state, environment, model, and mode.
2. Required capabilities and hard limits, including context, output, uploads, concurrency, duration, quotas, and cost ceiling.
3. Data classes and permitted storage, processing, retention, training, sharing, and export paths.
4. Required tool, connector, secret, approval, audit, and administrative controls.
5. Retry behavior, resumable sessions, approval prompts, and operational limits.
6. Dated sources, tested observations, unresolved contradictions, and every remaining unknown.

That record turns a vague product preference into a reviewable engineering and procurement decision.
