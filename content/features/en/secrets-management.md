---
title: Secrets management
description: Store and provide credentials to product tools or execution environments through a documented secrets feature.
slug: secrets-management
locale: en
seoTitle: Secrets management compatibility — Can My Agent Use
socialTitle: Secrets management
socialDescription: Compare documented secret storage, scope, injection, and masking behavior.
llmSummary: Secrets management is a documented product facility for storing credentials and providing them to tools or execution environments; plain-text configuration is not a secrets manager.
audience: Security engineers and teams connecting agents to real systems.
contentKind: feature
status: published
tags: [security, secrets, credentials, redaction]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Store and provide credentials through a documented secrets feature.
specLabel: Common product term
aliases: [credential vault, secret redaction, environment secrets]
parent: data-security-controls
related: [subagent-approval-boundaries, connectors, mcp-oauth]
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: GitHub — Secrets reference
    href: https://docs.github.com/en/actions/reference/security/secrets
    kind: docs
    publisher: GitHub
    reviewedAt: 2026-08-28
  - title: GitHub — Agentic workflows and repository secrets
    href: https://docs.github.com/en/actions/tutorials/develop-agentic-workflows-in-github-actions
    kind: docs
    publisher: GitHub
    reviewedAt: 2026-08-28
support: []
---

This row asks how a harness handles credentials used by tools, connectors, repositories, terminals, MCP servers, and sub-agents. Plain environment variables or pasted API keys are not equivalent to a managed secret that can be injected without revealing its value to model context or logs.

Evidence should record storage boundary, encryption, user and workspace scope, tool allowlists, just-in-time grants, masking, rotation, revocation, export prevention, prompt-injection defenses, child-agent inheritance, and audit events. Redaction is best-effort unless the documented mechanism prevents the model from receiving the value in the first place.
