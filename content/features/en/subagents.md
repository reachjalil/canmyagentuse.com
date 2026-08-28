---
title: Subagents
description: Compare basic delegation, nested delegation, MCP availability, and write access as independent subagent capabilities.
slug: subagents
locale: en
seoTitle: Subagent capability coverage — Can My Agent Use
socialTitle: Which subagent capabilities can my agent use?
socialDescription: Compare delegation depth and child-agent permissions without treating subagents as one boolean.
llmSummary: Subagents are a family of claims covering delegation, nesting, MCP access, and project write access.
audience: Engineers comparing multi-agent execution and permission boundaries.
contentKind: feature
status: published
tags: [runtime, subagents, delegation, permissions]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Track delegation depth and child-agent tool permissions independently.
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

A harness may delegate one bounded task while preventing nested delegation, MCP access, or project writes. The family rollup keeps those boundaries visible.
