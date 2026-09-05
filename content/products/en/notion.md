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
  "scope": "Notion workspace access through its hosted MCP server, public API, and official ntn CLI. Authorization type, workspace policy, page permissions, and tool availability govern access.",
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
      "detail": "For the standard hosted MCP route, complete OAuth in a compatible client. The connection acts with your Notion permissions in the selected workspace; Enterprise policies may require an approved client or an administrator-managed connection.",
      "sourceIds": [
        "connect",
        "mcp-controls",
        "managed-connections"
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
      "detail": "Notion publishes tools to read and change accessible workspace content. Check the connected workspace and current tool access before relying on a listed tool; some capabilities depend on plan or Notion AI access.",
      "sourceIds": [
        "tools",
        "mcp-overview"
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
      "description": "Choose a page-scoped internal or public connection, or a user-scoped personal access token, according to who owns the automation and what it should reach.",
      "feature": "connectors",
      "sourceIds": [
        "api",
        "authorization",
        "personal-tokens"
      ]
    },
    {
      "name": "Official Notion CLI",
      "description": "Use ntn for terminal API requests after browser login, or with a permitted personal access token for unattended jobs.",
      "feature": "connectors",
      "sourceIds": [
        "cli",
        "cli-auth"
      ]
    }
  ],
  "setup": [
    {
      "title": "Select the workspace",
      "actor": "You",
      "detail": "Choose the workspace and a specific existing page for the first read. Check whether your organization requires an approved MCP client."
    },
    {
      "title": "Add the MCP connection",
      "actor": "You + agent",
      "detail": "Use Notion’s hosted endpoint in a supported MCP client."
    },
    {
      "title": "Complete OAuth",
      "actor": "You",
      "detail": "Complete the normal OAuth flow, or use an administrator-configured connection where your Enterprise deployment supports it. Treat this as access with your workspace permissions."
    },
    {
      "title": "Read first, then approve a write",
      "actor": "You + agent",
      "detail": "Have the agent identify the connected workspace and summarize the selected page. Review a proposed draft and destination before approving one page write, then fetch the saved result."
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Notion hosts an OAuth-based MCP server. Standard connections require interactive authorization and inherit the connected user’s accessible content; this is distinct from a page-scoped API connection.",
      "sourceIds": [
        "connect",
        "mcp-overview",
        "authorization"
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
      "detail": "Official REST API supports internal connection tokens, public-connection OAuth, and user-scoped personal access tokens. Their permission models differ.",
      "sourceIds": [
        "api",
        "authorization",
        "personal-tokens"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "Notion documents the ntn CLI for authenticated API requests, data sources, uploads, and Notion Workers. Interactive login requires full workspace membership; unattended use can use a permitted personal access token.",
      "sourceIds": [
        "cli",
        "cli-auth"
      ]
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
    },
    {
      "id": "mcp-overview",
      "title": "Notion MCP overview",
      "href": "https://developers.notion.com/guides/mcp/overview",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp-security",
      "title": "Security best practices for Notion MCP",
      "href": "https://developers.notion.com/guides/mcp/mcp-security-best-practices",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp-controls",
      "title": "Notion MCP permissions and admin controls",
      "href": "https://www.notion.com/help/notion-mcp",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "managed-connections",
      "title": "Enterprise-managed connections for Notion MCP",
      "href": "https://www.notion.com/help/set-up-enterprise-managed-connections-for-notion-mcp",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "authorization",
      "title": "Authorization for Notion connections and tokens",
      "href": "https://developers.notion.com/guides/get-started/authorization",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "capabilities",
      "title": "Notion connection capabilities",
      "href": "https://developers.notion.com/reference/capabilities",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "personal-tokens",
      "title": "Personal access tokens and workspace policies",
      "href": "https://developers.notion.com/guides/get-started/personal-access-tokens",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli",
      "title": "Official Notion CLI overview",
      "href": "https://developers.notion.com/cli/get-started/overview",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-auth",
      "title": "Notion CLI authentication",
      "href": "https://developers.notion.com/cli/get-started/authentication",
      "publisher": "Notion",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "request-limits",
      "title": "Notion API request limits",
      "href": "https://developers.notion.com/reference/request-limits",
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

## Choosing the right connection

Notion is a strong fit for shared notes when an external agent should find existing knowledge and turn it into editable workspace pages. The hosted MCP route avoids operating your own server: Notion runs the service, and your client calls its tools after authorization. That is an editorial fit assessment based on the documented architecture. [Notion MCP overview](https://developers.notion.com/guides/mcp/overview).

This guide assesses external agent access, separately from Notion’s own assistant. **MCP tools are verified; MCP Apps remain unverified.** A working tool connection does not establish an interactive app rendered inside a chat. The public API and official CLI are additional routes, with different credentials and controls.

## What authorization grants—and how to remove it

The standard hosted endpoint is `https://mcp.notion.com/mcp`. Its normal setup requires an interactive OAuth flow; the connection guide does not currently offer arbitrary unattended MCP authorization. Notion’s old open-source MCP server is no longer actively maintained, so it should not be mistaken for the hosted service. [Connection guide](https://developers.notion.com/guides/mcp/get-started-with-mcp).

Hosted MCP acts with **your Notion permissions**, including content you can access in the connected workspace. Naming one page in a prompt narrows the task, but is not a technical page-only credential. Enterprise administrators can allow specific clients and block others. A previously connected client can still appear in the settings after removal from the approved list, while its requests are blocked. The documented workspace-wide `Disconnect All Users` control requires users to authenticate again. [MCP permissions and administration](https://www.notion.com/help/notion-mcp).

Enterprise-managed connections are a separate configured route: an identity-provider administrator can arrange access for supported apps so each member need not individually approve the connection. That does not establish general headless signup or unrestricted access. [Enterprise-managed connections](https://www.notion.com/help/set-up-enterprise-managed-connections-for-notion-mcp).

For ordinary client troubleshooting, disconnect or clear authentication in that client’s MCP settings. Workspace owners can manage access in Notion’s `Settings → Connections`; organization owners also have Admin API connection-revocation controls. Content returned to the agent may leave Notion through that client, so include the client in the access decision. [Connection troubleshooting](https://developers.notion.com/guides/mcp/get-started-with-mcp), [MCP security guidance](https://developers.notion.com/guides/mcp/mcp-security-best-practices).

## API permissions are not all the same

| API route | What grants access | Suitable ownership |
| --- | --- | --- |
| Internal connection | A workspace owner creates the connection; pages must be explicitly shared with its bot. | A team-owned automation. |
| Public connection | Each user authorizes OAuth and selects pages they have full access to share. Sharing a parent also grants access to its children. | An app installed by multiple users. |
| Personal access token | A token acts with its creator’s permissions in one workspace; it does not use the connection page picker. | An individual’s script or trusted tool. |

These are separate authorization models, not interchangeable setup instructions. [Authorization guide](https://developers.notion.com/guides/get-started/authorization), [Personal access tokens](https://developers.notion.com/guides/get-started/personal-access-tokens).

For a narrowly scoped reader, an internal connection can have only **Read content** enabled and access to a designated page tree. Adding write capabilities and sharing pages are separate requirements. Access to a parent includes its children, which matters before sharing a broad team home page. [Connection capabilities](https://developers.notion.com/reference/capabilities).

PAT creation also depends on membership and plan policy: guests and restricted members cannot create them; Free defaults to owners, Plus to all full members, and Business or Enterprise have administrator controls. A PAT loses page access when its creator does. Creators can revoke their own tokens in the Developer portal, while workspace administrators can revoke tokens through Connections; revocation immediately stops their use. [PAT administration](https://developers.notion.com/guides/get-started/personal-access-tokens).

## Plan gates and limits that change the result

A tool appearing in the tool list does not guarantee that the workspace can use it. Fetch `self` and inspect `current_tool_access`. AI search requires Notion AI; some richer queries require Business or Enterprise. The documented MCP average is 180 requests per minute per user, with an additional shared workspace limit; keyword search has a separate 30-per-minute limit. [Supported tools and MCP limits](https://developers.notion.com/guides/mcp/mcp-supported-tools).

For direct API jobs, Notion documents an average of three requests per second per connection plus a shared workspace limit. Handle `429` and temporary-overload `529` responses using `Retry-After`, with bounded retries. Request payloads are also capped at 1,000 block elements and 500 KB overall. These are operational limits, not a promise that a paid plan makes every request succeed. [API request limits](https://developers.notion.com/reference/request-limits).

This review does not verify autonomous plan purchase. If the connected workspace requires an upgrade or administrator action, expose that condition before attempting the dependent task.

## The official CLI is another route

Notion now documents **`ntn`**, its official CLI, for API requests, data sources, uploads, and Workers. An agent with terminal access can use this documented route; this guide does not report an installation test. [CLI overview](https://developers.notion.com/cli/get-started/overview).

`ntn login` opens a browser and requires full workspace membership. Its `--no-browser` option still requires someone to open a URL and approve a code elsewhere. For unattended jobs, the CLI documents a PAT supplied through `NOTION_API_TOKEN`. This is a token-based API route, not proof that hosted MCP has a non-interactive login. [CLI authentication](https://developers.notion.com/cli/get-started/authentication).

## A useful first task, with a reviewable write

Try this after connecting: “Confirm which Notion workspace this connection uses, read this page URL, and summarize its decisions with links. Do not change the workspace.” A `self` fetch can identify the connection, and a page fetch supplies the actual content. Starting from a chosen URL avoids guessing between similarly named pages. [Supported tools](https://developers.notion.com/guides/mcp/mcp-supported-tools).

Then ask for a draft in the conversation: “Propose a short follow-up note and show its exact destination.” Once you explicitly approve the text and destination, the agent can create that one page and fetch it again to report the saved link and content. If the service returns an asynchronous job, wait for completion before treating the note as saved. This proposed workflow applies the documented read/write tools and Notion’s recommendation to review content-changing actions; **it has not been executed for this guide**. [Tool behavior](https://developers.notion.com/guides/mcp/mcp-supported-tools), [Action confirmation guidance](https://developers.notion.com/guides/mcp/mcp-security-best-practices).
