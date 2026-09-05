---
{
  "title": "Obsidian",
  "slug": "obsidian",
  "vendor": "Obsidian",
  "order": 5,
  "homepage": "https://obsidian.md/",
  "aliases": [
    "notes",
    "note-taking",
    "vault",
    "Markdown"
  ],
  "summary": "An agent can work with local Markdown notes, use the official desktop CLI, or connect through a community MCP plugin.",
  "scope": "Local vault files, the Obsidian desktop CLI, and the named community Local REST API plugin. Sync and hosted access are separate.",
  "bestFor": "Local Markdown notes when your agent has access to the vault or desktop.",
  "actions": [
    {
      "id": "sign-up",
      "status": "conditional",
      "summary": "The local file route starts with a vault.",
      "detail": "Obsidian stores notes in a local folder. Working with those files does not establish an account signup flow; Sync has separate account and subscription requirements.",
      "sourceIds": [
        "files",
        "sync"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Grant vault access or configure a plugin.",
      "detail": "Select the local vault for your agent. The optional community REST/MCP route needs the plugin enabled and an API key.",
      "sourceIds": [
        "files",
        "plugin"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Sync purchase automation is not verified.",
      "detail": "Sync setup requires an account and active subscription; the reviewed guide does not establish agent checkout.",
      "sourceIds": [
        "sync"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read and update notes in your vault.",
      "detail": "Use file access or the official CLI. The CLI controls the desktop application and requires it to run; it is not a generic headless server.",
      "sourceIds": [
        "files",
        "cli"
      ]
    }
  ],
  "routes": [
    {
      "name": "Local Markdown files",
      "description": "Use an agent that can read and edit the selected vault folder.",
      "feature": "workspace-files",
      "sourceIds": [
        "files"
      ]
    },
    {
      "name": "Obsidian CLI",
      "description": "Control the desktop app from a terminal after CLI setup.",
      "feature": "terminal",
      "sourceIds": [
        "cli"
      ]
    },
    {
      "name": "Community REST API + MCP",
      "description": "Install and authorize the named Local REST API plugin. This is maintained by a community developer.",
      "feature": "mcp-tools",
      "sourceIds": [
        "plugin"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose a vault",
      "actor": "You",
      "detail": "Give the agent access to the intended folder and define which notes it may edit."
    },
    {
      "title": "Pick an access route",
      "actor": "You + agent",
      "detail": "Use direct file access, enable the official CLI, or configure the community plugin."
    },
    {
      "title": "Keep desktop requirements in view",
      "actor": "You",
      "detail": "The CLI needs the desktop application. The plugin runs inside Obsidian and requires its own API key."
    },
    {
      "title": "Try a small note edit",
      "actor": "Agent",
      "detail": "Create a draft note or append to a chosen file, then read it back."
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "community",
      "detail": "The Local REST API plugin includes an MCP endpoint. It is a community integration.",
      "sourceIds": [
        "plugin"
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
      "status": "community",
      "detail": "The same community plugin offers authenticated local REST operations.",
      "sourceIds": [
        "plugin"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "Obsidian documents a desktop CLI with a running-app requirement.",
      "sourceIds": [
        "cli"
      ]
    },
    {
      "kind": "local-files",
      "status": "official",
      "detail": "Vault notes are stored as Markdown files in a local folder.",
      "sourceIds": [
        "files"
      ]
    }
  ],
  "sources": [
    {
      "id": "files",
      "title": "How Obsidian stores data",
      "href": "https://obsidian.md/help/Files+and+folders/How+Obsidian+stores+data",
      "publisher": "Obsidian",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli",
      "title": "Obsidian CLI",
      "href": "https://obsidian.md/help/cli",
      "publisher": "Obsidian",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "sync",
      "title": "Set up Obsidian Sync",
      "href": "https://obsidian.md/help/sync/setup",
      "publisher": "Obsidian",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "plugin",
      "title": "Local REST API with MCP",
      "href": "https://github.com/coddingtonbear/obsidian-local-rest-api",
      "publisher": "Adam Coddington / community maintainer",
      "reviewedAt": "2026-09-04"
    }
  ],
  "category": "Notes & knowledge",
  "categorySlug": "note-taking",
  "locale": "en",
  "seoTitle": "Can my agent use Obsidian? MCP, API and account setup",
  "socialTitle": "Can my agent use Obsidian?",
  "socialDescription": "An agent can work with local Markdown notes, use the official desktop CLI, or connect through a community MCP plugin.",
  "description": "An agent can work with local Markdown notes, use the official desktop CLI, or connect through a community MCP plugin.",
  "llmSummary": "An agent can work with local Markdown notes, use the official desktop CLI, or connect through a community MCP plugin.",
  "audience": "People and agents choosing a note-taking service with suitable agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "obsidian",
    "note-taking",
    "products",
    "agent-access"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/obsidian",
  "previewImageAlt": "Can My Agent Use guide to Obsidian account setup and agent access."
}
---

## Choosing this route

Local file access is useful for a desktop or CLI agent that already has your chosen vault in its workspace. A hosted chat agent does not automatically have access to those files. This is an editorial fit assessment.

The community MCP route is a separate installation with its own maintainer, credentials, and access scope. It is not an official Obsidian MCP service.
