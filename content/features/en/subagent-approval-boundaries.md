---
title: Subagent approval and permission boundaries
description: Define whether child agents inherit, request, consume, or exceed the parent's tool approvals and permissions.
slug: subagent-approval-boundaries
locale: en
seoTitle: Subagent approval and permission boundaries — Can My Agent Use
socialTitle: Subagent approval and permission boundaries
socialDescription: Compare child-agent approval ownership, inherited grants, least privilege, and escalation behavior.
llmSummary: Subagent approval boundaries define how child tools obtain authority; a parent approval should not be assumed to cover every child, descendant, resource, or later action.
audience: Security engineers and operators supervising delegated actions.
contentKind: feature
status: published
tags: [runtime, subagents, approvals, permissions, security]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Control inherited grants, approval prompts, least privilege, escalation, and descendant authority.
specLabel: Product capability
aliases: [child approvals, delegated permissions, subagent least privilege]
parent: subagents
related: [human-approval, subagent-mcp-access, subagent-write-access, secrets-management]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks how authority crosses a delegation boundary. A child may inherit every parent grant, receive a reduced tool set, prompt the operator directly, ask the parent to broker an action, or be unable to escalate. Each design changes accountability and prompt-injection risk.

Evidence should cover one-time and persistent approvals, resource and command scope, MCP and connector credentials, filesystem and network access, nested descendants, denial propagation, audit identity, and whether the operator can review a combined action plan before fan-out.
