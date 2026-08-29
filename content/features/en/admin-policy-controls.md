---
title: Organization policy controls
description: Centrally enable, disable, constrain, and enforce models, tools, data paths, sharing, and agent behavior.
slug: admin-policy-controls
locale: en
seoTitle: Organization policy controls compatibility — Can My Agent Use
socialTitle: Organization policy controls
socialDescription: Compare organization-wide enforcement for models, tools, connectors, sharing, data, and autonomous actions.
llmSummary: Organization policy controls are centrally enforced product settings; user preferences and prompt instructions are not organization policy.
audience: Enterprise administrators, security teams, and platform owners.
contentKind: feature
status: published
tags: [security, governance, policy, enterprise]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Centrally configure and enforce product settings for an organization.
specLabel: Common product term
aliases: [enterprise policy, organization controls, managed settings]
parent: data-security-controls
related: [audit-logs, training-data-controls, human-approval]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot team administrators can control Cloud Agents, inherit team privacy mode, MCP configuration and team rules, enforce MCP server and network allowlists, restrict member-added servers, and restrict local-computer execution. The reviewed docs do not establish the full policy surface in this row."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-controls
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot team documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: enterprise availability is rolling out and controls vary by organization plan
          - type: policy
            value: documented controls cover cloud agents, privacy mode, MCP and plugins, team rules, network allowlists, and local execution; full model, upload, sharing, retention, and subagent fan-out policy is not established
        evidence:
          - resourceId: xai-grok-bot-team-controls
            type: documented
            observedAt: 2026-08-28
---

This row covers centrally enforced organization policy, not a user preference or a natural-language instruction the agent may ignore. Useful controls cover allowed models and providers, tools and connectors, MCP servers, network destinations, data sharing, uploads, memory, retention, training use, public links, autonomous actions, and sub-agent fan-out.

Evidence should record scope, role required to change policy, inheritance and exceptions, client support, propagation time, offline behavior, precedence over local configuration, change logs, and the user experience when policy blocks an action.
