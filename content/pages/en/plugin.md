---
title: Agent plugin and MCP server
description: Search Can My Agent Use from your agent with a public MCP server and an installable plugin that returns evidence, requirements, and review dates.
slug: plugin
locale: en
seoTitle: Agent plugin and MCP server | Can My Agent Use
socialTitle: Ask your agent what it can use
socialDescription: Search services and agent capabilities with sources, dates, and exact compatibility requirements.
llmSummary: Connect to https://canmyagentuse.com/mcp over Streamable HTTP without authentication. Tools are search_catalog, get_record, and check_compatibility. Download the plugin at /plugins/can-my-agent-use.zip.
audience: People connecting an agent to the compatibility catalog.
contentKind: page
status: published
tags:
  - agents
  - mcp
  - plugin
updated: 2026-09-05
published: 2026-09-05
summary: Evidence-backed compatibility lookup inside your agent.
---

Ask your agent which services it can use, what a particular agent supports, and what setup or limitations apply. The Can My Agent Use plugin reads the same published catalog as this website and returns source links, evidence dates, and qualifications.

[Download the Can My Agent Use plugin](/plugins/can-my-agent-use.zip)

Import the archive in an agent that supports the Codex plugin format. For other agents with remote MCP support, add **https://canmyagentuse.com/mcp** as a Streamable HTTP server. No account or API key is required. A downloadable release does not imply a listing in an agent provider's curated directory.

## Connect an MCP client

Use your agent's remote MCP settings. Clients that accept an `mcpServers` JSON configuration can use:

```json
{
  "mcpServers": {
    "can-my-agent-use": {
      "type": "http",
      "url": "https://canmyagentuse.com/mcp"
    }
  }
}
```

Client configuration formats vary. Select Streamable HTTP when your client asks for a transport. The endpoint is intended for MCP clients; opening it as a normal browser page returns a method message.

## Try asking

- “Can Codex CLI use MCP Apps? Show me the evidence and limitations.”
- “Which services have an MCP integration? Explain how to connect them.”
- “Compare MCP support in Claude Code and Codex CLI.”
- “Can an agent sign up for this service, purchase a plan, and do useful work?”

## What the tools return

**Search catalog** finds services, features, exact web/desktop/CLI harnesses, and specifications. Results include canonical record links and support pagination. Use a few descriptive terms rather than an entire conversation.

**Get record** reads the full record, including source links, narrative guidance, requirements, and dates. Product records separate signup, connection, purchase, and useful work.

**Check compatibility** looks up one specific capability on an exact agent surface and release track. It preserves qualifications, evidence classes, confidence when recorded, and unknown results. Broad capability families require checking the relevant child capabilities.

## Evidence and privacy

These are published research records. A documentation review does not mean a transaction was tested. The plugin does not inspect your agent's installed tools, sign into your services, or establish permissions in your account. An unknown result means evidence is insufficient.

Queries are sent to Can My Agent Use. Send service names and compatibility questions; omit passwords, tokens, and private account details. The MCP handler does not persist query bodies. See our [privacy policy](/privacy) and [methodology](/methodology).

The public [JSON API](/api/v1/) and [Markdown index](/llms.txt) remain available for clients that do not use MCP.
