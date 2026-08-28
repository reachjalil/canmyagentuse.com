---
title: MCP Apps
description: Stable MCP extension for interactive interfaces returned by tools and rendered by compatible hosts.
slug: mcp-apps
locale: en
seoTitle: MCP Apps compatibility reference — Can My Agent Use
socialTitle: MCP Apps compatibility
socialDescription: Host roles, stable revision, and evidence boundaries for MCP Apps.
llmSummary: MCP Apps is an MCP extension for ui resources and sandboxed interactive interfaces. A host can support MCP tools without supporting MCP Apps.
audience: Architects and engineers evaluating agent interoperability.
contentKind: specification
status: published
tags: [mcp, ui, apps, protocol]
updated: 2026-08-28
published: 2026-08-28
authority: MCP project
revision: "2026-01-26"
maturity: stable extension
structure: MCP extension, ui resource, and sandboxed frame
sourceId: S-039
canonicalUrl: https://modelcontextprotocol.io/extensions/apps/specification
summary: Return an interactive interface from an MCP tool for rendering inside a compatible host.
roles: [host, server, app]
aliases: [MCP UI, MCP interactive apps]
---

MCP Apps defines an interactive UI layer on top of MCP. The host discovers a declared UI resource, renders it in an isolated frame, and mediates communication with the tool and host.

Tool calling and app rendering remain separate catalog capabilities. Host listing, plan availability, developer-mode access, sandbox behavior, and extension revision should remain visible in the evidence.
