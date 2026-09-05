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
  "summary": "Read an authorized mailbox through the Gmail API. Google’s official remote MCP server is available in Developer Preview.",
  "scope": "Existing Gmail API mailboxes and Google’s remote Gmail MCP Developer Preview. Preview enrollment, OAuth consent, and Workspace administrator controls apply; account provisioning and paid upgrades remain separate.",
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
      "detail": "A custom integration needs a Cloud project, enabled API, OAuth client, and user consent. External testing requires listed test users. The official MCP preview additionally requires program access and the Gmail MCP API.",
      "sourceIds": [
        "quickstart",
        "audience",
        "mcp",
        "preview"
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
      "summary": "Read first; add write access deliberately.",
      "detail": "The API supports mailbox operations under OAuth scopes. gmail.readonly excludes writes; gmail.compose can draft AND send. Google’s preview MCP tool list includes search, thread retrieval, drafts, and labels, with no sending tool listed.",
      "sourceIds": [
        "scopes",
        "mcp"
      ]
    }
  ],
  "routes": [
    {
      "name": "Gmail API with user OAuth",
      "description": "Expose only the mailbox operations needed for the task; begin with gmail.readonly for message summaries. Consent and the actual granted token scopes determine access.",
      "feature": "connectors",
      "sourceIds": [
        "quickstart",
        "scopes",
        "oauth"
      ]
    },
    {
      "name": "Google’s remote Gmail MCP — Developer Preview",
      "description": "For enrolled Workspace accounts and Cloud projects, connect an OAuth-capable MCP host to Google’s HTTP endpoint. This is a preview route with a defined tool list.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp",
        "preview"
      ]
    }
  ],
  "setup": [
    {
      "title": "Select an existing mailbox",
      "actor": "You",
      "detail": "Confirm the intended Gmail-enabled account. For a managed Workspace account, check whether the organization allows the integration and its requested scopes."
    },
    {
      "title": "Configure the chosen route",
      "actor": "You + agent",
      "detail": "For the API, enable Gmail and create an OAuth client matching the application. Set audience and consent scopes. The official MCP route also needs preview enrollment and Gmail MCP API enablement."
    },
    {
      "title": "Review and grant access",
      "actor": "You",
      "detail": "Select the right account and inspect the requested permissions. An External app in Testing needs your account in its test-user list; Gmail authorizations and offline refresh tokens expire after seven days in that mode."
    },
    {
      "title": "Try a read-only first task",
      "actor": "Agent",
      "detail": "With gmail.readonly, list at most five messages matching a user-chosen search, then retrieve only a selected message for a summary. Keep draft, label-change, and send tools out of this first task."
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
    },
    {
      "id": "mcp",
      "title": "Configure Google’s Gmail MCP server",
      "href": "https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "preview",
      "title": "Google Workspace Developer Preview Program",
      "href": "https://developers.google.com/workspace/preview",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "consent",
      "title": "Configure OAuth consent and choose scopes",
      "href": "https://developers.google.com/workspace/guides/configure-oauth-consent",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "audience",
      "title": "Manage OAuth app audience and testing limits",
      "href": "https://support.google.com/cloud/answer/15549945",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "oauth",
      "title": "Google OAuth 2.0 and refresh-token expiration",
      "href": "https://developers.google.com/identity/protocols/oauth2",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "list",
      "title": "Gmail API: list messages",
      "href": "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/list",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "get",
      "title": "Gmail API: get a message",
      "href": "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "quota",
      "title": "Gmail API and MCP usage limits",
      "href": "https://developers.google.com/workspace/gmail/api/reference/quota",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "revoke",
      "title": "Manage linked apps and remove Google Account access",
      "href": "https://support.google.com/accounts/answer/13533235?hl=en",
      "publisher": "Google",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Gmail? Setup, accounts and actions",
  "socialTitle": "Can my agent use Gmail?",
  "socialDescription": "Read an authorized mailbox through the Gmail API. Google’s official remote MCP server is available in Developer Preview.",
  "description": "Read an authorized mailbox through the Gmail API. Google’s official remote MCP server is available in Developer Preview.",
  "llmSummary": "Read an authorized mailbox through the Gmail API. Google’s official remote MCP server is available in Developer Preview.",
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
  "bestFor": "Summarizing an existing mailbox with scoped API access.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Google’s remote Gmail MCP server is in Developer Preview, requiring enrolled Workspace account/project access and OAuth setup. Its reviewed tool list supports search, threads, drafts, and labels.",
      "sourceIds": [
        "mcp",
        "preview"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The reviewed Google MCP documentation establishes tools, not an interactive MCP Apps interface. Other implementations need their own review.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Gmail REST API uses OAuth. Read, metadata, draft/send, and broader modification permissions are distinct; per-project and per-user quotas apply.",
      "sourceIds": [
        "scopes",
        "quota"
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

## Start with one read-only task

Our suggested first task is to summarize one message you choose. With an API integration granted `gmail.readonly`, request at most five results using `users.messages.list`, `userId=me`, `maxResults=5`, and a search you specify. The list returns message and thread IDs; retrieve only the selected message with `users.messages.get`. This is a proposed evaluation, not a test we ran. [List messages](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/list), [Get a message](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get).

The permission is mailbox-wide read access; limiting the prompt to one message is an application-level boundary, not an OAuth restriction to that message. To inspect headers only, `messages.get` supports `format=METADATA` with selected `metadataHeaders`. The narrower `gmail.metadata` scope cannot use the `q` search parameter. Choose the route based on the actual information needed. [Get formats and headers](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get), [Search parameter restriction](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/list).

## Choose the smallest useful permission

These shorthand names use the prefix `https://www.googleapis.com/auth/`:

| Scope | What it grants | Practical boundary |
| --- | --- | --- |
| `gmail.metadata` | Message headers and labels | No message body; restricted scope |
| `gmail.readonly` | Read messages and settings | No mailbox changes; restricted scope |
| `gmail.send` | Send mail | Sensitive scope; not inbox-reading access |
| `gmail.compose` | Manage drafts **and send** | Not a draft-only permission; restricted scope |
| `gmail.modify` | Read and change mail, including sending | No immediate permanent deletion that bypasses Trash; restricted scope |

Google reserves the broad `https://mail.google.com/` scope for cases that need permanent deletion bypassing Trash. A product that offers “draft only” while holding compose permission must enforce that boundary in its tools. Public apps requesting sensitive or restricted scopes face verification requirements; storing or transmitting restricted-scope data on servers can require a security assessment. [Gmail scope definitions and verification requirements](https://developers.google.com/workspace/gmail/api/auth/scopes).

## Connect once; understand when consent expires

For a custom API integration, enable Gmail in a Cloud project, configure OAuth branding/audience/data access, and create the client type appropriate to the application. A connector can supply that developer setup, but the mailbox owner still needs to authorize the right account. Google’s Python quickstart is a testing example, not a complete production authorization design. [API quickstart](https://developers.google.com/workspace/gmail/api/quickstart/python), [OAuth consent configuration](https://developers.google.com/workspace/guides/configure-oauth-consent).

**Internal** audience is for members of the project’s parent Cloud organization. An **External** app in **Testing** is limited to 100 listed test users. With Gmail scopes, those test authorizations expire seven days after consent; offline refresh tokens expire too. The exception for basic identity-only scopes does not cover mailbox access. Publishing an app and completing required verification are separate steps, and Workspace policy can still block authorization. [Audience, testing, and publication rules](https://support.google.com/cloud/answer/15549945).

## Google’s official MCP route is a preview

Google documents a remote server at `https://gmailmcp.googleapis.com/mcp/v1`, using HTTP and OAuth. Its setup enables both Gmail API and Gmail MCP API and lists `gmail.readonly` plus `gmail.compose` consent scopes. The documented tools search and retrieve threads, manage draft creation, and apply or remove labels. The reviewed list has no send tool; Google’s example leaves a draft for the user to send in Gmail. The underlying compose scope still permits sending through the API. [Gmail MCP setup and tool list](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server).

Access is through the **Google Workspace Developer Preview Program**, which registers a Workspace account and Cloud project. Program terms restrict making pre-GA applications available outside the domain or company without the specified permission. An “official” label here identifies Google’s implementation; it does not mean general availability or automatic access for every personal Gmail account. [Preview enrollment and terms](https://developers.google.com/workspace/preview).

Check [MCP tool support](/features/mcp-tools) in your exact agent, its OAuth configuration, and the Gmail tools it actually exposes. This preview establishes MCP tools; it does not establish an interactive MCP Apps interface or the availability of every third-party Gmail connector.

## Plan for limits before running a recurring agent

Google changed Gmail quotas on May 1, 2026. The published limits for the new regime are **1,200,000 quota units per project per minute** and **6,000 per user per project per minute**. Projects that used the API during November 2025–April 2026 retain their prior quotas, so inspect your project’s actual limits. Requests consume different amounts: listing messages costs 5 units, retrieving a message 20, and sending 100. MCP has a separately documented query-cost table. [Current API and MCP limits](https://developers.google.com/workspace/gmail/api/reference/quota).

For a recurring summary, keep the query small and use bounded retries with backoff when rate-limited. Google also documents an 80-million-unit daily project threshold and future billing changes; this guide does not treat quota access as proof of autonomous purchasing or a storage upgrade. Check the current quota page before estimating costs. [Quota errors and billing notice](https://developers.google.com/workspace/gmail/api/reference/quota).

## Disconnecting is part of the setup

You can inspect an app’s access and revoke it from your Google Account’s linked-app settings. Removing access stops the app from accessing the account; removing a sign-in link is a different control. [Review and remove account access](https://support.google.com/accounts/answer/13533235?hl=en).

A recurring agent must handle lost authorization. Google lists user revocation, six months of refresh-token inactivity, a password change affecting Gmail scopes, and administrator policy among reasons a refresh token can stop working. Renew consent through the account owner when required. [Refresh-token expiration](https://developers.google.com/identity/protocols/oauth2#expiration).
