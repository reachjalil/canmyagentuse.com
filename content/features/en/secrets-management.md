---
title: Secrets management and redaction
description: Store, scope, inject, rotate, redact, and audit credentials used by tools, connectors, code, and subagents.
slug: secrets-management
locale: en
seoTitle: Secrets management and redaction compatibility — Can My Agent Use
socialTitle: Secrets management and redaction
socialDescription: Compare secret storage, least-privilege injection, rotation, masking, approvals, and audit trails.
llmSummary: Secrets management covers credential storage and scoped runtime injection without exposing values to prompts or logs; environment-variable support alone is a narrower claim.
audience: Security engineers and teams connecting agents to real systems.
contentKind: feature
status: published
tags: [security, secrets, credentials, redaction]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Store and inject credentials with scoping, masking, rotation, approval, and audit controls.
specLabel: Product capability
aliases: [credential vault, secret redaction, environment secrets]
parent: data-security-controls
related: [subagent-approval-boundaries, connectors, mcp-oauth]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks how a harness handles credentials used by tools, connectors, repositories, terminals, MCP servers, and sub-agents. Plain environment variables or pasted API keys are not equivalent to a managed secret that can be injected without revealing its value to model context or logs.

Evidence should record storage boundary, encryption, user and workspace scope, tool allowlists, just-in-time grants, masking, rotation, revocation, export prevention, prompt-injection defenses, child-agent inheritance, and audit events. Redaction is best-effort unless the documented mechanism prevents the model from receiving the value in the first place.
