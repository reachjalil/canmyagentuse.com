---
title: Subagent delegation
description: Delegate a bounded task to a product-native child agent.
slug: subagent-delegation
locale: en
seoTitle: Subagent delegation compatibility — Can My Agent Use
socialTitle: Subagent delegation
socialDescription: Basic child-agent delegation tracked separately from nesting and permissions.
llmSummary: Basic delegation establishes one child-agent boundary but not recursion, MCP access, or write access.
audience: Engineers comparing multi-agent execution.
contentKind: feature
status: published
tags: [runtime, subagents, delegation]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Delegate a bounded task to another agent process.
specLabel: Product capability
aliases: [child agent, task delegation]
parent: subagents
related: [nested-subagents, subagent-mcp-access, subagent-write-access]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork identifies agents as OpenCode primitives for specialized tasks that may use different models and extra context."
issues: []
resources:
  - id: openwork-subagents
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supplied by the embedded OpenCode agent runtime
        evidence:
          - resourceId: openwork-subagents
            type: documented
            observedAt: 2026-08-28
---

This row establishes basic delegation only. Deeper recursion and child-agent permissions are separate siblings.
