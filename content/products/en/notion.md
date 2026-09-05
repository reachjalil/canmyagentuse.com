---
{
  "title": "Notion",
  "slug": "notion",
  "vendor": "Notion",
  "order": 4,
  "homepage": "https://www.notion.com/",
  "aliases": [
    "notes",
    "note-taking",
    "wiki",
    "knowledge base"
  ],
  "summary": "Use a hosted MCP connection to search and edit workspace content after OAuth authorization.",
  "scope": "Notion workspace access via its hosted MCP server and API. User permissions and the selected client still govern access.",
  "bestFor": "Shared notes and knowledge bases when you want an official hosted MCP route.",
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous workspace signup is not verified.",
      "detail": "The reviewed integration documentation starts from access to a Notion workspace; it does not establish autonomous account creation.",
      "sourceIds": [
        "connect"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Authorize your workspace with OAuth.",
      "detail": "Connect the hosted MCP endpoint in a compatible client, sign in, and complete the workspace authorization flow.",
      "sourceIds": [
        "connect"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Agent checkout is not assessed.",
      "detail": "This guide covers access to existing workspace content, not subscription purchase or upgrades.",
      "sourceIds": []
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Search, create, and edit workspace content.",
      "detail": "Notion publishes MCP tools for workspace content. Availability and permissions depend on the authenticated user and current tool set.",
      "sourceIds": [
        "tools"
      ]
    }
  ],
  "routes": [
    {
      "name": "Hosted Notion MCP",
      "description": "Connect to https://mcp.notion.com/mcp using a compatible OAuth-capable client.",
      "feature": "mcp-tools",
      "sourceIds": [
        "connect"
      ]
    },
    {
      "name": "Notion API",
      "description": "Build an integration using the authentication method and content access appropriate to your workspace.",
      "feature": "connectors",
      "sourceIds": [
        "api"
      ]
    }
  ],
  "setup": [
    {
      "title": "Select the workspace",
      "actor": "You",
      "detail": "Identify the workspace and content the agent should work with."
    },
    {
      "title": "Add the MCP connection",
      "actor": "You + agent",
      "detail": "Use Notion’s hosted endpoint in a supported MCP client."
    },
    {
      "title": "Complete OAuth",
      "actor": "You",
      "detail": "Authorize workspace access using your Notion account."
    },
    {
      "title": "Try a note task",
      "actor": "Agent",
      "detail": "Find an existing page or create a draft in a location you designate."
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Notion hosts its own MCP server with OAuth.",
      "sourceIds": [
        "connect"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Notion documents a public API and integration authentication.",
      "sourceIds": [
        "api"
      ]
    },
    {
      "kind": "cli",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    }
  ],
  "sources": [
    {
      "id": "connect",
      "title": "Connect to Notion MCP",
      "href": "https://developers.notion.com/guides/mcp/get-started-with-mcp",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "tools",
      "title": "Supported MCP tools",
      "href": "https://developers.notion.com/guides/mcp/mcp-supported-tools",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api",
      "title": "Notion API overview",
      "href": "https://developers.notion.com/guides/get-started/overview",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    }
  ],
  "category": "Notes & knowledge",
  "categorySlug": "note-taking",
  "locale": "en",
  "seoTitle": "Can my agent use Notion? MCP, API and account setup",
  "socialTitle": "Can my agent use Notion?",
  "socialDescription": "Use a hosted MCP connection to search and edit workspace content after OAuth authorization.",
  "description": "Use a hosted MCP connection to search and edit workspace content after OAuth authorization.",
  "llmSummary": "Use a hosted MCP connection to search and edit workspace content after OAuth authorization.",
  "audience": "People and agents choosing a note-taking service with suitable agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "notion",
    "note-taking",
    "products",
    "agent-access"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/notion",
  "previewImageAlt": "Can My Agent Use guide to Notion account setup and agent access."
}
---

## Choosing this route

The hosted connection is useful when you want an agent to work with shared workspace notes without running a local server. This is an editorial fit assessment based on the documented connection model.

An MCP tool connection does not by itself establish **MCP Apps** support. Interactive in-chat UI needs its own evidence.
