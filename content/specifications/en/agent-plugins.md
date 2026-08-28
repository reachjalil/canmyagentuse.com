---
title: Agent Plugins
description: Cross-vendor package format that composes portable agent components and namespaced host extensions.
slug: agent-plugins
locale: en
seoTitle: Agent Plugins compatibility reference — Can My Agent Use
socialTitle: Agent Plugins compatibility
socialDescription: Portable manifest core, components, and vendor-extension boundaries for Agent Plugins.
llmSummary: Agent Plugins 1.0 uses a closed JSON manifest with optional skills and MCP configuration plus namespaced extensions. Vendor-native plugin formats remain separate.
audience: Architects and engineers evaluating agent extension packaging.
contentKind: specification
status: published
tags: [plugins, skills, mcp, packaging]
updated: 2026-08-28
published: 2026-08-28
authority: Cross-vendor technical steering committee
revision: 1.0.0
maturity: stable
structure: Closed JSON manifest with optional skills, MCP configuration, and vendor namespaces
sourceId: S-049
canonicalUrl: https://agent-plugins.org/specification/1.0
summary: Distribute portable agent components in a versioned manifest package.
roles: [plugin-author, client, host]
aliases: [plugin.json, open agent plugins]
---

Agent Plugins combines a portable manifest core with optional skills and MCP configuration. Namespaced extensions allow hosts to preserve non-portable behavior without redefining the core format.

Open Agent Plugins, Claude plugins, Cursor plugins, Codex plugins, Kiro Powers, and VS Code agent plugins are related packaging families, not automatically interchangeable formats. The catalog keeps their install, trust, hook, and lifecycle semantics distinct.
