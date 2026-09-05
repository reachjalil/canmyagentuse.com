---
{
  "title": "OneNote",
  "slug": "onenote",
  "vendor": "Microsoft",
  "order": 6,
  "homepage": "https://www.onenote.com/",
  "aliases": [
    "notes",
    "note-taking",
    "Microsoft OneNote",
    "notebooks"
  ],
  "summary": "An agent can access OneNote through Microsoft Graph with delegated user authorization. App-only authentication is not supported by the OneNote API.",
  "scope": "The Microsoft Graph OneNote API, not a claim about every Microsoft agent connector or desktop automation route.",
  "bestFor": "Existing Microsoft notebooks when a delegated Graph integration fits your workflow.",
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous account creation is not assessed.",
      "detail": "The reviewed OneNote API documentation covers notebook access rather than creating a Microsoft account.",
      "sourceIds": []
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Use delegated user authorization.",
      "detail": "The OneNote API requires user-context access and does not support app-only authentication. Configure an integration and the appropriate delegated permissions.",
      "sourceIds": [
        "api"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Subscription checkout is not assessed.",
      "detail": "No reviewed source establishes an agent purchase flow for this guide.",
      "sourceIds": []
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read and organize accessible notebook content.",
      "detail": "Microsoft Graph exposes OneNote notebooks, sections, and pages under the authorized user context.",
      "sourceIds": [
        "api",
        "content"
      ]
    }
  ],
  "routes": [
    {
      "name": "Microsoft Graph OneNote API",
      "description": "Use a delegated integration that exposes the required notebook operations.",
      "feature": "connectors",
      "sourceIds": [
        "api",
        "content"
      ]
    }
  ],
  "setup": [
    {
      "title": "Identify the notebook",
      "actor": "You",
      "detail": "Choose the account and notebook the integration should access."
    },
    {
      "title": "Configure Graph access",
      "actor": "You + agent",
      "detail": "Use an integration with delegated OneNote permissions."
    },
    {
      "title": "Complete authorization",
      "actor": "You",
      "detail": "Sign in and complete the user authorization flow; organization policy may affect consent."
    },
    {
      "title": "Read a selected page",
      "actor": "Agent",
      "detail": "Retrieve a chosen page before adding any write operations."
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
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
      "detail": "Microsoft Graph exposes OneNote; app-only authentication is explicitly unsupported.",
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
      "id": "api",
      "title": "Use the OneNote REST API",
      "href": "https://learn.microsoft.com/en-us/graph/api/resources/onenote-api-overview?view=graph-rest-1.0",
      "publisher": "Microsoft",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "content",
      "title": "Get OneNote content and structure",
      "href": "https://learn.microsoft.com/en-us/graph/onenote-get-content",
      "publisher": "Microsoft",
      "reviewedAt": "2026-09-04"
    }
  ],
  "category": "Notes & knowledge",
  "categorySlug": "note-taking",
  "locale": "en",
  "seoTitle": "Can my agent use OneNote? MCP, API and account setup",
  "socialTitle": "Can my agent use OneNote?",
  "socialDescription": "An agent can access OneNote through Microsoft Graph with delegated user authorization. App-only authentication is not supported by the OneNote API.",
  "description": "An agent can access OneNote through Microsoft Graph with delegated user authorization. App-only authentication is not supported by the OneNote API.",
  "llmSummary": "An agent can access OneNote through Microsoft Graph with delegated user authorization. App-only authentication is not supported by the OneNote API.",
  "audience": "People and agents choosing a note-taking service with suitable agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "onenote",
    "note-taking",
    "products",
    "agent-access"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/onenote",
  "previewImageAlt": "Can My Agent Use guide to OneNote account setup and agent access."
}
---

## Choosing this route

Consider the Graph route when your notes already live in Microsoft notebooks and you can authorize a user-context integration. This is an editorial fit assessment, not a universal ranking.

An agent that supports connectors in general is not necessarily configured for OneNote. MCP and MCP Apps remain unverified in this entry.
