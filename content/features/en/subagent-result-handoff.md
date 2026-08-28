---
title: Structured subagent result handoff
description: Return child findings, citations, artifacts, diffs, status, and errors to the parent without flattening everything into untraceable prose.
slug: subagent-result-handoff
locale: en
seoTitle: Structured subagent result handoff — Can My Agent Use
socialTitle: Structured subagent result handoff
socialDescription: Compare how child-agent results, files, citations, diffs, errors, and provenance return to the parent.
llmSummary: Result handoff asks whether a parent receives structured child status and artifacts with provenance; a free-form text summary is a narrower form of support.
audience: Engineers building auditable multi-agent workflows.
contentKind: feature
status: published
tags: [runtime, subagents, handoff, provenance]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Return structured child status, findings, citations, files, diffs, and errors to the parent.
specLabel: Product capability
aliases: [child result, agent handoff, subagent artifacts]
parent: subagents
related: [subagent-delegation, artifact-export, streaming-output]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks what crosses the child-to-parent boundary. A plain prose summary may be useful, but it can lose status, sources, files, patches, tool output, uncertainty, and failure details. Structured handoff preserves enough provenance for the parent and operator to verify and act on the result.

Evidence should identify supported result types, size limits, streaming versus final delivery, partial results after cancellation, error representation, duplicate or late completion handling, and whether created artifacts remain addressable outside the child's private workspace.
