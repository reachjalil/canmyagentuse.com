---
{
  "title": "Linear",
  "slug": "linear",
  "vendor": "Linear",
  "order": 9,
  "category": "Project & issue tracking",
  "categorySlug": "project-management",
  "homepage": "https://linear.app/",
  "aliases": [
    "issues",
    "projects",
    "tasks",
    "roadmap"
  ],
  "summary": "A hosted MCP server lets an authorized agent work with issues, projects, and comments, with a separate read-only endpoint.",
  "scope": "Linear’s hosted MCP route. This entry does not assess every developer API, CLI wrapper, or agent integration.",
  "bestFor": "Issue and project workflows through an official hosted MCP connection.",
  "routes": [
    {
      "name": "Linear hosted MCP",
      "description": "Use the standard endpoint for permitted writes or the documented read-only endpoint for reads.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Linear hosts MCP over Streamable HTTP with a documented read-only route.",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "This interface has not been established by the sources reviewed for this guide.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "unknown",
      "detail": "This interface has not been established by the sources reviewed for this guide.",
      "sourceIds": []
    },
    {
      "kind": "cli",
      "status": "unknown",
      "detail": "This interface has not been established by the sources reviewed for this guide.",
      "sourceIds": []
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "This interface has not been established by the sources reviewed for this guide.",
      "sourceIds": []
    }
  ],
  "setup": [
    {
      "title": "Choose a team and project",
      "actor": "You",
      "detail": "Specify where the agent should look and what it should produce."
    },
    {
      "title": "Select read-only or write access",
      "actor": "You",
      "detail": "Prefer the read-only endpoint for retrieval-only tasks."
    },
    {
      "title": "Authorize the connection",
      "actor": "You + agent",
      "detail": "Complete the documented OAuth flow or configure an authorized token."
    },
    {
      "title": "Try one work item",
      "actor": "Agent",
      "detail": "Find a named issue and propose an update before modifying team work."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "Linear MCP server",
      "href": "https://linear.app/docs/mcp",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous account creation is not assessed.",
      "detail": "This guide starts from an existing service account and evaluates its connection routes.",
      "sourceIds": []
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Authorize the hosted MCP endpoint.",
      "detail": "Linear documents OAuth setup as well as direct bearer-token or API-key authentication. Select the read-only route when writes are unnecessary.",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Agent subscription purchase is not verified.",
      "detail": "Integration support does not establish an end-to-end plan purchase or billing upgrade.",
      "sourceIds": []
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Find, create, and update work items.",
      "detail": "The hosted server exposes issue, project, and comment tools. Use the enabled tools and permissions for the authorized workspace.",
      "sourceIds": [
        "mcp"
      ]
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Linear? Tools, accounts and setup",
  "socialTitle": "Can my agent use Linear?",
  "socialDescription": "A hosted MCP server lets an authorized agent work with issues, projects, and comments, with a separate read-only endpoint.",
  "description": "A hosted MCP server lets an authorized agent work with issues, projects, and comments, with a separate read-only endpoint.",
  "llmSummary": "A hosted MCP server lets an authorized agent work with issues, projects, and comments, with a separate read-only endpoint.",
  "audience": "People choosing SaaS tools with documented agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "linear",
    "project-management",
    "saas",
    "mcp"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/linear",
  "previewImageAlt": "Can My Agent Use guide to Linear agent access and setup."
}
---

## A useful first task

Ask the agent to find a specific issue and summarize its context. Treat the ability to modify a project as separate from permission to perform the requested change.

The suggested fit follows the documented connection model. It is not a ranking of project-management products.
