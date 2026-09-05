---
{
  "title": "GitHub",
  "slug": "github",
  "vendor": "GitHub",
  "order": 7,
  "category": "Code & collaboration",
  "categorySlug": "developer-tools",
  "homepage": "https://github.com/",
  "aliases": [
    "git",
    "repositories",
    "pull requests",
    "issues"
  ],
  "summary": "An agent can work with repositories and issues through official MCP, CLI, or API routes after authentication.",
  "scope": "GitHub repository and collaboration operations. Organization policy, token permissions, and the selected toolset determine access.",
  "bestFor": "Repository work with a choice of official MCP, CLI, and API integrations.",
  "routes": [
    {
      "name": "GitHub MCP",
      "description": "Use GitHub’s maintained remote or local server.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "name": "GitHub CLI",
      "description": "Authenticate gh for a terminal-enabled agent.",
      "feature": "terminal",
      "sourceIds": [
        "cli"
      ]
    },
    {
      "name": "GitHub REST API",
      "description": "Use a permitted GitHub App or token-based integration.",
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
      "detail": "GitHub maintains remote and local MCP implementations.",
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
      "detail": "GitHub publishes a REST API with documented authentication.",
      "sourceIds": [
        "api"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "The gh CLI supports browser or token authentication.",
      "sourceIds": [
        "cli"
      ]
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
      "title": "Select repositories",
      "actor": "You",
      "detail": "Identify which repositories and organizations the agent needs."
    },
    {
      "title": "Authenticate the route",
      "actor": "You + agent",
      "detail": "Complete CLI or MCP authorization, or configure a suitable token."
    },
    {
      "title": "Restrict operations",
      "actor": "You",
      "detail": "Choose read-only access or the task-specific write permissions."
    },
    {
      "title": "Inspect before changing",
      "actor": "Agent",
      "detail": "Read an issue or file and propose the intended change before publishing it."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "GitHub MCP server",
      "href": "https://github.com/github/github-mcp-server",
      "publisher": "GitHub",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli",
      "title": "GitHub CLI authentication",
      "href": "https://cli.github.com/manual/gh_auth_login",
      "publisher": "GitHub",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api",
      "title": "REST API authentication",
      "href": "https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api",
      "publisher": "GitHub",
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
      "summary": "Authorize the intended GitHub identity.",
      "detail": "Use the CLI login flow, an appropriately scoped token, or a supported MCP OAuth setup. Host-specific configuration and organization policies still apply.",
      "sourceIds": [
        "mcp",
        "cli",
        "api"
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
      "summary": "Read repositories and manage permitted work.",
      "detail": "The MCP server offers configurable toolsets; read-only mode suppresses write tools. Enable only the operations needed for your task.",
      "sourceIds": [
        "mcp"
      ]
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use GitHub? Tools, accounts and setup",
  "socialTitle": "Can my agent use GitHub?",
  "socialDescription": "An agent can work with repositories and issues through official MCP, CLI, or API routes after authentication.",
  "description": "An agent can work with repositories and issues through official MCP, CLI, or API routes after authentication.",
  "llmSummary": "An agent can work with repositories and issues through official MCP, CLI, or API routes after authentication.",
  "audience": "People choosing SaaS tools with documented agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "github",
    "developer-tools",
    "saas",
    "mcp"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/github",
  "previewImageAlt": "Can My Agent Use guide to GitHub agent access and setup."
}
---

## A useful first task

Ask for a summary of one issue and the files likely to need a change. Repository access and permission to publish commits or pull requests are separate decisions.

This product entry describes GitHub as the service being used. It does not collapse GitHub Copilot’s various agent surfaces into the same record.
