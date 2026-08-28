---
title: Audit logs and actor attribution
description: Record user, agent, subagent, model, tool, policy, data-access, approval, and administrative events with exportable provenance.
slug: audit-logs
locale: en
seoTitle: Audit logs and actor attribution — Can My Agent Use
socialTitle: Audit logs and actor attribution
socialDescription: Compare event coverage, actor identity, retention, export, integrity, and security-system integration.
llmSummary: Audit logs should attribute user, agent, subagent, model, tool, approval, data-access, sharing, and policy events; ordinary conversation history is not an audit trail.
audience: Security operations, compliance, and platform teams.
contentKind: feature
status: published
tags: [security, audit, observability, enterprise]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Attribute and export security-relevant user, agent, tool, data, approval, and policy events.
specLabel: Product capability
aliases: [activity log, security log, admin audit]
parent: data-security-controls
related: [admin-policy-controls, subagent-approval-boundaries, conversation-export]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether security-relevant activity is recorded with enough identity and provenance for investigation. Conversation history is not sufficient when it omits tool parameters, connector reads, file changes, approvals, child-agent actions, model routing, policy decisions, sharing, exports, and administrator changes.

Evidence should record event types and fields, user and service identities, timestamps, model and harness version, retention, search, export or streaming API, SIEM integration, tenant isolation, tamper resistance, redaction, regional placement, and documented gaps.
