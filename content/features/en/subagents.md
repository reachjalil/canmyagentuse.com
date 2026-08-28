---
title: Subagents
description: Compare delegation, nesting, concurrency, context isolation, model choice, permissions, lifecycle control, and result handoff independently.
slug: subagents
locale: en
seoTitle: Subagent capability coverage — Can My Agent Use
socialTitle: Which subagent capabilities can my agent use?
socialDescription: Compare delegation depth, concurrency, context, models, permissions, controls, and handoff without treating subagents as one boolean.
llmSummary: Subagents are a family of separate claims covering delegation, nesting, concurrency, context isolation, model choice, tool and write permissions, approvals, lifecycle control, and result handoff.
audience: Engineers comparing multi-agent execution and permission boundaries.
contentKind: feature
status: published
tags: [runtime, subagents, delegation, permissions]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Track child-agent execution, isolation, permissions, supervision, and handoff independently.
specLabel: Product capability family
aliases: [child agents, delegated agents, multi-agent delegation]
capabilityKind: family
related: [mcp]
highlight: true
notes: []
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

A harness may delegate one bounded task while preventing parallel work, nested delegation, model selection, MCP access, project writes, or independent approvals. It may return only a text summary even when the child produced files or structured artifacts. The family rollup keeps those boundaries visible instead of promoting one successful child task into a blanket “multi-agent” claim.

Useful evidence records who can create a child, how much context it inherits, whether children share mutable state, concurrency and nesting limits, selectable models, available tools, approval ownership, cancellation and inspection controls, and how results return to the parent.
