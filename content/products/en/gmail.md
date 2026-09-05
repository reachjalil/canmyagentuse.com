---
{
  "title": "Gmail",
  "slug": "gmail",
  "vendor": "Google",
  "category": "Email & productivity",
  "order": 2,
  "homepage": "https://mail.google.com/",
  "aliases": [
    "Google Mail",
    "email",
    "inbox"
  ],
  "summary": "An agent can work with an authorized mailbox. Account creation, account selection, and OAuth consent are separate steps.",
  "scope": "An existing Gmail mailbox accessed through the Gmail API. Workspace provisioning and individual connector availability need separate review.",
  "actions": [
    {
      "id": "sign-up",
      "status": "human-step",
      "summary": "Create the Google account first.",
      "detail": "Google documents an interactive account-creation flow. The Gmail API quickstart assumes you already have an account with Gmail enabled. Autonomous signup is not verified here.",
      "sourceIds": [
        "account",
        "quickstart"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Choose the account and grant access.",
      "detail": "A custom API integration needs a Cloud project, the Gmail API enabled, and OAuth credentials. The user signs in and consents. A connector may handle developer setup; check its own instructions.",
      "sourceIds": [
        "quickstart"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Paid account upgrades are not assessed.",
      "detail": "This entry covers mailbox access. It does not establish an agent checkout route for Google Workspace or storage upgrades.",
      "sourceIds": []
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read, draft, or send within granted scopes.",
      "detail": "Gmail separates read-only access from compose, send, and modify permissions. The chosen tool and granted scopes determine which actions the agent can take.",
      "sourceIds": [
        "scopes"
      ]
    }
  ],
  "routes": [
    {
      "name": "Gmail API integration",
      "description": "Use OAuth credentials through a tool that exposes the required mailbox operations.",
      "feature": "connectors",
      "sourceIds": [
        "quickstart",
        "scopes"
      ]
    }
  ],
  "setup": [
    {
      "title": "Have a Gmail-enabled account",
      "actor": "You",
      "detail": "Create or select the mailbox you want the agent to use."
    },
    {
      "title": "Configure the integration",
      "actor": "You + agent",
      "detail": "For a custom integration, enable Gmail API in a Cloud project and configure an OAuth client. For a connector, follow its setup flow."
    },
    {
      "title": "Grant the right access",
      "actor": "You",
      "detail": "Select the intended Google account and review the requested scopes."
    },
    {
      "title": "Start with a bounded task",
      "actor": "Agent",
      "detail": "Read a chosen message or prepare a draft. Sending requires a tool with send access and your authorization."
    }
  ],
  "sources": [
    {
      "id": "account",
      "title": "Create a Google Account",
      "href": "https://support.google.com/accounts/answer/27441",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "quickstart",
      "title": "Gmail API Python quickstart",
      "href": "https://developers.google.com/workspace/gmail/api/quickstart/python",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "scopes",
      "title": "Gmail API authorization scopes",
      "href": "https://developers.google.com/workspace/gmail/api/auth/scopes",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Gmail? Setup, accounts and actions",
  "socialTitle": "Can my agent use Gmail?",
  "socialDescription": "An agent can work with an authorized mailbox. Account creation, account selection, and OAuth consent are separate steps.",
  "description": "An agent can work with an authorized mailbox. Account creation, account selection, and OAuth consent are separate steps.",
  "llmSummary": "An agent can work with an authorized mailbox. Account creation, account selection, and OAuth consent are separate steps.",
  "audience": "People and agents evaluating product setup and account access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "gmail",
    "products",
    "account-setup",
    "agent-access"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/gmail",
  "previewImageAlt": "Can My Agent Use product guide for Gmail: accounts, setup and actions.",
  "categorySlug": "email",
  "bestFor": "Working with an existing mailbox through a scoped API integration.",
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
      "detail": "Gmail API exposes mailbox operations under OAuth scopes.",
      "sourceIds": [
        "quickstart",
        "scopes"
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
  ]
}
---

## First useful task

Try summarizing a selected thread before adding write access. Read-only credentials do not imply the agent can send messages.

## Check your agent

Look for a Gmail integration that exposes the actions you need. [Connector support](/features/connectors) in a harness does not prove that a particular Gmail connector is installed, available on your plan, or authorized for this mailbox.
