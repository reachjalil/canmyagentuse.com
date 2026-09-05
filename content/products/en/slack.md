---
{
  "title": "Slack",
  "slug": "slack",
  "vendor": "Slack",
  "order": 8,
  "category": "Team communication",
  "categorySlug": "communication",
  "homepage": "https://slack.com/",
  "aliases": [
    "messages",
    "channels",
    "team chat"
  ],
  "summary": "Slack publishes a scoped MCP server and Web API. App eligibility and user authorization matter before an agent can read or write.",
  "scope": "Slack data and actions exposed to an external agent, not every capability of Slackbot as an MCP client.",
  "bestFor": "Team communication through an approved workspace integration with explicit scopes.",
  "routes": [
    {
      "name": "Slack MCP server",
      "description": "Connect an eligible app or supported partner client.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "name": "Slack Web API",
      "description": "Use a scoped Slack app integration.",
      "feature": "connectors",
      "sourceIds": [
        "api"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Slack publishes its MCP server with app eligibility and OAuth requirements.",
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
      "status": "official",
      "detail": "Slack’s Web API exposes methods under app token scopes.",
      "sourceIds": [
        "api"
      ]
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
      "title": "Choose the workspace and channels",
      "actor": "You",
      "detail": "Define the conversations and data relevant to the task."
    },
    {
      "title": "Check app eligibility",
      "actor": "Admin",
      "detail": "Confirm the chosen integration is allowed and its scopes fit workspace policy."
    },
    {
      "title": "Authorize the connection",
      "actor": "You",
      "detail": "Complete OAuth for the intended account and workspace."
    },
    {
      "title": "Start with a read task",
      "actor": "Agent",
      "detail": "Summarize a specified thread before requesting message-writing access."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "Slack MCP server overview",
      "href": "https://docs.slack.dev/ai/slack-mcp-server/",
      "publisher": "Slack",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api",
      "title": "Slack Web API",
      "href": "https://docs.slack.dev/apis/web-api/",
      "publisher": "Slack",
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
      "summary": "Install an eligible app and authorize it.",
      "detail": "Slack MCP uses OAuth and allows Marketplace apps and internal apps; unlisted apps are not eligible. Workspace controls and network restrictions can apply.",
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
      "summary": "Use tools within the granted scopes.",
      "detail": "The server documents search, messages, canvases, and other workspace operations. A read scope does not grant permission to send a message.",
      "sourceIds": [
        "mcp"
      ]
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Slack? Tools, accounts and setup",
  "socialTitle": "Can my agent use Slack?",
  "socialDescription": "Slack publishes a scoped MCP server and Web API. App eligibility and user authorization matter before an agent can read or write.",
  "description": "Slack publishes a scoped MCP server and Web API. App eligibility and user authorization matter before an agent can read or write.",
  "llmSummary": "Slack publishes a scoped MCP server and Web API. App eligibility and user authorization matter before an agent can read or write.",
  "audience": "People choosing SaaS tools with documented agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "slack",
    "communication",
    "saas",
    "mcp"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/slack",
  "previewImageAlt": "Can My Agent Use guide to Slack agent access and setup."
}
---

## Separate the direction of access

This guide asks whether an outside agent can use Slack. A feature that lets Slackbot call an external MCP server answers a different question. Likewise, ordinary Slack interactive messages are not sufficient evidence of MCP Apps support.

For the first task, name a channel or thread and ask for a summary with links to the underlying messages.
