---
title: Agent2Agent Protocol
description: Linux Foundation protocol family for agent discovery, task exchange, artifacts, streaming, and bindings.
slug: a2a
locale: en
seoTitle: Agent2Agent Protocol compatibility reference — Can My Agent Use
socialTitle: Agent2Agent Protocol compatibility
socialDescription: Roles, tasks, artifacts, discovery, and binding boundaries for A2A.
llmSummary: A2A covers agent-to-agent discovery and task exchange. Agent Cards, tasks, artifacts, streaming, and bindings should be assessed as revision-specific capabilities.
audience: Architects and engineers evaluating agent-to-agent interoperability.
contentKind: specification
status: published
tags: [a2a, agents, tasks, protocol]
updated: 2026-08-28
published: 2026-08-28
authority: Linux Foundation project
revision: 1.0.x
maturity: stable family
structure: Agent Cards, tasks, artifacts, streaming, and protocol bindings
sourceId: S-067
canonicalUrl: https://a2a-protocol.org/latest/specification/
summary: Let agents discover one another and exchange tasks, artifacts, and updates.
roles: [client-agent, remote-agent]
aliases: [A2A, Agent2Agent]
---

A2A occupies the agent-to-agent layer. It does not replace MCP’s tool/context boundary, ACP’s editor/agent boundary, or a UI event protocol.

Catalog records should identify specification revision, role, discovery behavior, task lifecycle, streaming support, and protocol binding rather than collapsing the family into one support check.
