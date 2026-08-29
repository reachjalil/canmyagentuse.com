---
title: Audit logs
description: Record security-relevant activity in an administrative audit log.
slug: audit-logs
locale: en
seoTitle: Audit log compatibility — Can My Agent Use
socialTitle: Audit logs
socialDescription: Compare documented administrative audit logs and their event coverage.
llmSummary: Audit logs are product-provided administrative records of security-relevant activity; ordinary conversation history is not automatically an audit log.
audience: Security operations, compliance, and platform teams.
contentKind: feature
status: published
tags: [security, audit, observability, enterprise]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Record security-relevant activity in an administrative audit log.
specLabel: Common product term
aliases: [activity log, security log, admin audit]
parent: data-security-controls
related: [admin-policy-controls, subagent-approval-boundaries, conversation-export]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok Bot team documentation says spend and usage are visible in the dashboard but an audit view of Bot actions is still coming. Conversation transcripts expose activity but do not satisfy this row's exportable security-event audit-log definition."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-audit
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Can I see what Bots did on behalf of my team?
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: no
        stage: planned
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: runtime
            value: spend and usage are visible today; the documented Bot-action audit view is not yet available
        evidence:
          - resourceId: xai-grok-bot-team-audit
            type: documented
            observedAt: 2026-08-28
---

This row asks whether security-relevant activity is recorded with enough identity and provenance for investigation. Conversation history is not sufficient when it omits tool parameters, connector reads, file changes, approvals, child-agent actions, model routing, policy decisions, sharing, exports, and administrator changes.

Evidence should record event types and fields, user and service identities, timestamps, model and harness version, retention, search, export or streaming API, SIEM integration, tenant isolation, tamper resistance, redaction, regional placement, and documented gaps.
