---
title: Agent Client Protocol
description: Protocol connecting coding agents to editor and client hosts through directional JSON-RPC roles.
slug: acp
locale: en
seoTitle: Agent Client Protocol compatibility reference — Can My Agent Use
socialTitle: Agent Client Protocol compatibility
socialDescription: Client and agent roles, transports, and revision boundaries for ACP.
llmSummary: ACP connects coding agents and editor clients. Local stdio is established while remote transport work evolves, so role, transport, and revision must be explicit.
audience: Architects and engineers evaluating editor-agent interoperability.
contentKind: specification
status: published
tags: [acp, editor, coding-agent, protocol]
updated: 2026-08-28
published: 2026-08-28
authority: ACP / Zed ecosystem
revision: living
maturity: active
structure: JSON-RPC; local stdio established and remote transport evolving
sourceId: S-056
canonicalUrl: https://agentclientprotocol.com/overview/introduction
summary: Connect an editor or client host to an external coding agent.
roles: [client, agent]
aliases: [ACP]
---

ACP defines a boundary between coding agents and clients such as editors. Client and agent are asymmetric roles; a product can participate in one without implementing the other.

Assertions should identify role, transport, protocol revision, distribution method, and target release. A CLI flag or registry listing is not by itself full protocol conformance.
