---
title: Long-term memory
description: Persist preferences and working context across sessions, with current Grok Bot evidence and shared-computer boundaries.
slug: long-term-memory
locale: en
seoTitle: "Long-term memory — Can My Agent Use"
socialTitle: Long-term memory
socialDescription: Current long-term memory support for Grok Bot, including the distinction between per-Bot memory and account-wide shared files.
llmSummary: Grok Bot documents durable named agents that retain stable preferences, facts, and work summaries across turns. Bots have separate roles and conversations but share one account-scoped computer, so memory is not a security boundary or an authoritative source.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Persist notes across sessions.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents that a Grok Bot can retain stable working preferences, important facts, and work summaries over time; it warns that memory is not a substitute for an authoritative source."
issues: []
resources:
  - id: xai-grok-bot-memory
    title: xAI — Create and manage Grok Bots
    href: https://docs.x.ai/grok-bot/bots
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What a Bot remembers
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: stable preferences, facts, and summaries persist with the named Bot; shared files and sign-ins belong to the account-scoped computer
          - type: policy
            value: memory is not an authoritative source and can become stale
        evidence:
          - resourceId: xai-grok-bot-memory
            type: documented
            observedAt: 2026-08-28
---

Persist preferences and working context across sessions.

The sourced Grok Bot cell covers the documented memory of a named Bot. It does not imply perfect recall, a user-visible memory editor, isolation between Bots, or that remembered facts are current.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
