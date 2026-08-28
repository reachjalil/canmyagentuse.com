---
title: Subagent context isolation and inheritance
description: Control which conversation, instructions, files, memory, tools, and secrets a child agent receives.
slug: subagent-context-isolation
locale: en
seoTitle: Subagent context isolation compatibility — Can My Agent Use
socialTitle: Subagent context isolation and inheritance
socialDescription: Compare selective context inheritance, isolation boundaries, and child-agent context budgets.
llmSummary: Subagent context isolation means the harness defines and controls what a child inherits; fresh context, full cloning, selected attachments, shared memory, and summary-only handoff are distinct modes.
audience: Engineers evaluating multi-agent correctness, privacy, and token cost.
contentKind: feature
status: published
tags: [runtime, subagents, context, isolation, security]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Define and control the conversation, instructions, files, memory, tools, and secrets inherited by a child.
specLabel: Product capability
aliases: [child context, subagent isolation, context inheritance]
parent: subagents
related: [context-window, subagent-approval-boundaries, secrets-management]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether the child-agent boundary has documented context semantics. A child may start fresh, receive the full parent transcript, inherit only a task prompt and selected files, share project memory, or receive a compacted summary. Those modes have different correctness, privacy, and token-cost consequences.

Evidence should record inherited system and project instructions, conversation turns, tool schemas, environment variables, files, long-term memory, credentials, approval state, and context budget. It should also say whether later parent changes propagate and whether the operator can inspect the exact handoff.
