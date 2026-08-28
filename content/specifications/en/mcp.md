---
title: Model Context Protocol
description: Revision-aware reference for the protocol connecting agent hosts and clients to tools, resources, prompts, and related server capabilities.
slug: mcp
locale: en
seoTitle: Model Context Protocol compatibility reference — Can My Agent Use
socialTitle: Model Context Protocol compatibility
socialDescription: Roles, revision, maturity, and atomic capability coverage for MCP.
llmSummary: MCP is a JSON-RPC protocol family with asymmetric client and server roles. Compatibility must be evaluated by primitive, transport, authorization profile, revision, and surface.
audience: Architects and engineers evaluating agent interoperability.
contentKind: specification
status: published
tags: [mcp, tools, context, protocol]
updated: 2026-08-28
published: 2026-08-28
authority: MCP project / AAIF ecosystem
revision: "2026-07-28"
maturity: published
structure: JSON-RPC, normative prose, and a TypeScript schema
sourceId: S-005
canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
summary: Connect hosts and clients to server-provided tools, resources, prompts, and related primitives.
roles: [host, client, server]
aliases: [MCP]
---

MCP is not one boolean capability. Tools, resources, prompts, sampling, elicitation, roots, tasks, transports, and authorization are independent questions with direction-specific roles.

Catalog assertions should pin this revision (or another named revision), identify the exact harness surface, and retain transport, authorization, plan, policy, and runtime conditions as qualifiers. A broad product statement that it “supports MCP” is discovery evidence, not proof of every primitive.
