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
related: [nested-subagents, subagent-concurrency, subagent-context-isolation, subagent-result-handoff]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork identifies agents as OpenCode primitives for specialized tasks that may use different models and extra context."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot can create focused named Bots, let Bots message each other asynchronously, and pass work among them. This is persistent peer-Bot delegation, not documented ephemeral child-session spawning."
issues: []
resources:
  - id: openwork-subagents
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-collaboration
    title: xAI — Grok Bot messaging and collaboration
    href: https://docs.x.ai/grok-bot/chat-and-collaboration
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Let Bots hand work off
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
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: delegation uses distinct persistent named Bots with asynchronous messages and visible handoffs, rather than documented ephemeral child sessions
          - type: policy
            value: all Bots for an account share one hosted computer, so delegation does not create a separate filesystem, login, or credential security boundary
        evidence:
          - resourceId: xai-grok-bot-collaboration
            type: documented
            observedAt: 2026-08-28
---

This row establishes that one agent can create a distinct child execution boundary for a bounded task. A renamed tool call, background shell command, or single-model chain-of-thought step is not enough unless the product exposes a child-agent execution with its own task state.

Deeper recursion, simultaneous children, inherited context, model choice, permissions, supervision, and result transfer are separate sibling capabilities.
