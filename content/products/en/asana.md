---
{
  "title": "Asana",
  "slug": "asana",
  "vendor": "Asana",
  "order": 18,
  "category": "Project & issue tracking",
  "categorySlug": "project-management",
  "homepage": "https://asana.com/",
  "aliases": [
    "tasks",
    "projects",
    "work graph",
    "Asana API",
    "Asana MCP"
  ],
  "summary": "Project and task management with official MCP and REST API access after account authorization.",
  "scope": "Asana workspaces and projects that an existing user can access. The V2 hosted MCP server is documented as generally available, with interactive MCP preview tools documented for Claude and ChatGPT; autonomous signup and subscription checkout are not verified.",
  "bestFor": "Summarizing project work and making approved task updates.",
  "routes": [
    {
      "name": "Asana V2 hosted MCP",
      "description": "Connect an OAuth-capable MCP client to https://mcp.asana.com/v2/mcp. A client must use a pre-registered MCP app and the user’s authorization; the retired V1 SSE endpoint is no longer the current route.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp-v2"
      ]
    },
    {
      "name": "Asana REST API",
      "description": "Use https://app.asana.com/api/1.0 with a PAT or standard OAuth access token. Request only the resource scopes needed for the task and keep writes behind an explicit approval.",
      "feature": "connectors",
      "sourceIds": [
        "authentication",
        "oauth-scopes",
        "create-task"
      ]
    },
    {
      "name": "Community Asana CLI",
      "description": "The independently maintained pleaseai/asana CLI documents OAuth and PAT login, task commands, direct REST calls, JSON output and local JSON/CSV or attachment workflows. It is not an Asana-maintained CLI.",
      "feature": "terminal",
      "sourceIds": [
        "community-cli"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Asana documents a generally available V2 Streamable HTTP MCP server. OAuth selects one workspace per session; separate workspaces require separate sessions. The grant permits available MCP tools, including writes, bounded by the authorizing user’s Asana permissions rather than per-tool OAuth scopes.",
      "sourceIds": [
        "mcp-v2",
        "mcp-tools"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "official",
      "detail": "Asana’s V2 MCP reference documents interactive preview tools that render confirmation UI before a write; it lists Claude and ChatGPT as current hosts. This is separate from Asana’s embedded app-components platform, and other host support is not established.",
      "sourceIds": [
        "mcp-tools"
      ]
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Asana’s official REST API supports reads and mutations. PATs inherit the generating user’s product permissions; standard OAuth can be limited to registered resource scopes; Enterprise service accounts are a separate, broad-access option.",
      "sourceIds": [
        "authentication",
        "oauth-scopes"
      ]
    },
    {
      "kind": "cli",
      "status": "community",
      "detail": "The pleaseai/asana repository documents a usable CLI with OAuth/PAT auth and task operations. No Asana-maintained CLI was verified in the reviewed first-party documentation.",
      "sourceIds": [
        "community-cli"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "The community CLI documents JSON/CSV batch input and attachment upload/download, but this does not establish an Asana-native local-file workspace or a first-party local-file agent route.",
      "sourceIds": [
        "community-cli"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose the existing workspace and task",
      "actor": "You",
      "detail": "Name one workspace and, for the first read, one project or a narrow task query. Decide whether the agent may only inspect, create a task, update a task or delete anything; do not make a broad workspace grant by default."
    },
    {
      "title": "Check distribution and admin controls",
      "actor": "Admin",
      "detail": "For a standard or MCP OAuth app, register the redirect URL and choose Specific workspaces or Any workspace in Manage distribution. Workspace administrators may approve or block apps, and Asana’s app management controls can also govern PATs and service accounts."
    },
    {
      "title": "Authorize the minimum connection",
      "actor": "You + agent",
      "detail": "For V2 MCP, use the pre-registered MCP app and user consent; MCP does not use the standard resource scope list, and its token works only with the MCP server. For the REST API, prefer standard OAuth with `tasks:read` for inspection or `tasks:write` only when a task mutation is approved. A PAT is long-lived and mirrors the issuing user’s Asana access."
    },
    {
      "title": "Read before proposing a write",
      "actor": "Agent",
      "detail": "Start with the user’s identity and one named project or task. Return the workspace, project, task GIDs and the fields read. Draft a proposed task or update with its destination before requesting write approval."
    },
    {
      "title": "Approve the concrete task change",
      "actor": "You",
      "detail": "Confirm the exact project or parent task, title, assignee, due date and description before enabling a write. After the operation, have the agent read the returned task again and report its GID and resulting fields."
    },
    {
      "title": "Respect quotas and retire credentials",
      "actor": "You + agent",
      "detail": "Use `Retry-After` for 429 responses, keep concurrent work below Asana’s documented limits, and request only needed fields. Revoke an OAuth grant with the refresh token at Asana’s revocation endpoint; delete unused PATs or apps in the developer console. Removing a client configuration alone is not server-side revocation."
    }
  ],
  "sources": [
    {
      "id": "mcp-v2",
      "title": "Integrating with Asana’s MCP Server",
      "href": "https://developers.asana.com/docs/integrating-with-asanas-mcp-server",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth",
      "title": "OAuth",
      "href": "https://developers.asana.com/docs/oauth",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth-scopes",
      "title": "OAuth scopes",
      "href": "https://developers.asana.com/docs/oauth-scopes",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-tools",
      "title": "MCP Tools Reference",
      "href": "https://developers.asana.com/docs/mcp-tools-reference",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "authentication",
      "title": "Authentication",
      "href": "https://developers.asana.com/docs/authentication",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "rate-limits",
      "title": "Rate limits",
      "href": "https://developers.asana.com/docs/rate-limits",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "create-task",
      "title": "Create a task",
      "href": "https://developers.asana.com/reference/createtask",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "share-app",
      "title": "Share your app",
      "href": "https://developers.asana.com/docs/share-your-app",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "app-components",
      "title": "App components",
      "href": "https://developers.asana.com/docs/app-components",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pricing",
      "title": "Asana pricing",
      "href": "https://asana.com/pricing",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pricing-purchases",
      "title": "Pricing and purchases",
      "href": "https://help.asana.com/s/article/pricing-and-purchases?language=en_US",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "community-cli",
      "title": "Asana CLI",
      "href": "https://github.com/pleaseai/asana/tree/9beea21458b82d9e78278619382b81707401686c",
      "publisher": "pleaseai / Minsu Lee",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "quick-start",
      "title": "Quick start guide",
      "href": "https://developers.asana.com/jd/docs/quick-start",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "manage-app",
      "title": "Manage your app",
      "href": "https://developers.asana.com/docs/manage-and-share-your-app",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "overview",
      "title": "Build an app with Asana",
      "href": "https://developers.asana.com/docs/overview",
      "publisher": "Asana",
      "reviewedAt": "2026-09-05"
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous account creation is not verified.",
      "detail": "Asana’s developer overview says a developer can create a free account or request a sandbox, but the reviewed sources do not establish an agent completing signup, email verification or organization setup autonomously.",
      "sourceIds": [
        "overview"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "A user authorizes OAuth or issues a token.",
      "detail": "V2 MCP requires a pre-registered MCP app, redirect URL and user OAuth consent. Standard API OAuth requires registered scopes and user approval; a PAT is issued in the developer console and inherits the issuing user’s Asana access. App distribution and workspace app controls can add an administrator decision.",
      "sourceIds": [
        "mcp-v2",
        "oauth",
        "authentication",
        "share-app"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Subscription checkout by an agent is not verified.",
      "detail": "Asana’s purchase guidance describes a person creating an account and a billing owner upgrading an organization, team or workspace. Paid subscriptions start at two seats, and the reviewed API and MCP documentation does not establish an automated billing or checkout route.",
      "sourceIds": [
        "pricing",
        "pricing-purchases"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read, create and update permitted tasks and projects.",
      "detail": "Use get_tasks to read incomplete work in one named project and inspect its due dates. The advanced search_tasks tool requires Premium; get_tasks is the documented alternative for non-Premium workspaces. This read plan does not make MCP authorization read-only. Approve any later task change separately and fetch the task again to verify the result.",
      "sourceIds": [
        "mcp-tools",
        "create-task",
        "oauth-scopes"
      ]
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Asana? MCP, API, CLI and permissions",
  "socialTitle": "Can my agent use Asana?",
  "socialDescription": "Project and task management with official MCP and REST API access after account authorization.",
  "description": "Project and task management with official MCP and REST API access after account authorization.",
  "llmSummary": "Asana offers official V2 MCP and REST API access for an authorized user, with interactive MCP preview tools documented in Claude and ChatGPT, plus a community CLI. Autonomous signup, subscription checkout and Asana-native local-file workflows are unverified.",
  "audience": "People choosing project-management tools with documented agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "asana",
    "project-management",
    "tasks",
    "saas",
    "mcp",
    "api",
    "oauth",
    "permissions",
    "cli"
  ],
  "updated": "2026-09-05",
  "published": "2026-09-05",
  "canonicalPath": "/products/asana",
  "previewImageAlt": "Can My Agent Use guide to Asana account setup and agent access."
}
---

## Start with one bounded task

Asana is a useful choice when the finish line is inside an existing workspace: find work, summarize a project, create a task or make a narrowly approved update. The V2 MCP tools reference lists read tools for users, projects and tasks, plus write tools and interactive previews. [MCP Tools Reference](https://developers.asana.com/docs/mcp-tools-reference).

For a safe first request, name one workspace and one project, then ask for incomplete tasks due this week. Have the agent report the workspace and project it searched, the task GIDs and the fields it read. A REST client can first use `GET https://app.asana.com/api/1.0/users/me` to identify the authorized user, as shown in Asana’s [Quick start guide](https://developers.asana.com/jd/docs/quick-start), then read only the fields needed for the decision. This behavioral read plan does not turn the MCP grant into a read-only credential.

## Connect an existing account

The route depends on the client. An MCP client must use a pre-registered MCP app in Asana’s developer console, an exact redirect URL and the V2 server URL. The app distribution setting must include the target workspace, either by selecting specific workspaces or by allowing any workspace. V2 MCP does not use the standard API scope list, and its token is accepted only by the MCP server. [MCP integration and permissions](https://developers.asana.com/docs/integrating-with-asanas-mcp-server).

The old V1 beta endpoint, `https://mcp.asana.com/sse`, was documented for shutdown on August 5, 2026. On the review date, use V2 documentation and confirm the client supports Streamable HTTP. Asana also says dynamic client registration is not supported, so a client cannot necessarily discover and register itself at first connection.

For the standard REST API, OAuth is the multi-user route. Register the app and its scopes first; the authorization request can ask for a subset of those registered scopes. Scope names use `<resource>:<action>`, such as `tasks:read`, `tasks:write` and `tasks:delete`, and actions do not inherit one another. A related field such as `assignee.email` can require `users:read`. If an endpoint has no scope mapping, Asana documents a Full permissions option, which is broader and should be treated as an escalation. [OAuth](https://developers.asana.com/docs/oauth) and [OAuth scopes](https://developers.asana.com/docs/oauth-scopes).

PATs are convenient for a single user or script but are long-lived and carry the same Asana permissions as the person who created them. Asana’s documentation says service accounts are an Enterprise feature created by super admins and provide complete account data access, including private user data. That is an administrative integration credential, not a safer default for a first agent task. [Authentication](https://developers.asana.com/docs/authentication).

## Keep approval and identity visible

An MCP session is scoped to the workspace selected during authorization; another workspace needs a separate session. Actions appear as the user who authorized the app. [MCP session scope](https://developers.asana.com/docs/mcp-tools-reference). They are limited by the user’s existing access to workspaces, projects and tasks, but the current MCP authorization can call the available tool set, including tools added later. This makes the human approval screen, the named workspace and the exact task proposal part of the safety boundary. A workspace administrator may also approve or block an app; Asana’s app distribution guide says the app listing details are shown to admins making that decision. [Share your app](https://developers.asana.com/docs/share-your-app).

For a write, ask the user to confirm the destination project or parent, title, assignee, due date and description. With the REST API, grant `tasks:write` only for the approved operation; keep `tasks:delete` out of the initial connection. After the API returns a task, read it again and compare its GID, project, assignee and completion state. MCP tool names and parameters may change, so a client should use `tools/list` and keep the returned schema in its own evidence trail.

## Limits, plans and revocation

Asana documents minute-based standard limits of 150 requests on free domains and 1,500 on paid domains per authorization token. Search is separately limited to 60 requests per minute. The API also limits concurrent requests to 50 GETs and 15 writes, and duplication, instantiation and export to five concurrent jobs per user. Heavy graph traversals can hit a cost limit even at low request counts. A 429 response includes `Retry-After`; retry that duration instead of assuming a fixed minute. Keep fields narrow with `opt_fields` and page at up to 100 items when the endpoint supports it. [Rate limits](https://developers.asana.com/docs/rate-limits).

The reviewed sources do not provide a complete free-versus-paid entitlement matrix for every MCP tool or API endpoint. One explicit exception is `search_tasks`, which Asana marks as Premium-only in the [MCP Tools Reference](https://developers.asana.com/docs/mcp-tools-reference); `get_tasks` is the fallback for non-Premium workspaces. Verify plan and workspace policy for any other advanced capability before promising it.

Asana’s purchase guidance separates a free user account from an organization, team or workspace upgrade and says the smallest paid subscription is two seats. The reviewed product and integration sources describe web billing-owner actions, not an agent checkout API. Record a human billing handoff before enabling paid features or adding seats. [Pricing](https://asana.com/pricing) and [Pricing and purchases](https://help.asana.com/s/article/pricing-and-purchases?language=en_US).

OAuth access tokens last one hour and can be refreshed while the user’s authorization remains active. To revoke an OAuth grant, Asana documents `POST https://app.asana.com/-/oauth_revoke` with the app’s client ID, client secret and refresh token; access tokens are rejected by that endpoint. PATs and developer apps can be edited or deleted from the developer console. Rotate or delete any credential that was exposed, and do not assume disconnecting an MCP client revoked the server-side grant. [OAuth](https://developers.asana.com/docs/oauth) and [Manage your app](https://developers.asana.com/docs/manage-and-share-your-app).

## Keep MCP Apps separate from app components

Asana’s MCP Tools Reference documents `create_task_preview`, `create_project_preview` and `search_tasks_preview` as interactive tools that render a confirmation or results UI before a change; it says these are currently available in Claude and ChatGPT. That is scoped host evidence, not a guarantee for every MCP client. [MCP Tools Reference](https://developers.asana.com/docs/mcp-tools-reference).

Asana also documents “app components” as embedded UI for Asana tasks and rules. They can provide a modal, lookup, widget or rule action and may require an external app server and Asana’s App Directory review. This is Asana’s separate extension surface, so it should not be used as evidence for MCP Apps. [App components](https://developers.asana.com/docs/app-components).

## A terminal option exists, with community provenance

The public `pleaseai/asana` repository, maintained by Minsu Lee, documents a CLI distributed through Homebrew or npm. Its README describes OAuth and PAT authentication, task create/list/complete/delete commands, direct REST calls, JSON output, and JSON/CSV batch plus attachment upload/download workflows. The repository is community software and was not installed or live-tested for this review. Use a dedicated token, inspect the command and payload before writing, and treat its local file support as client-side input/output around Asana’s remote API. [Asana CLI](https://github.com/pleaseai/asana/tree/9beea21458b82d9e78278619382b81707401686c).

## Sources

All sources above were opened and reviewed on 2026-09-05. This is a documentation review, not a live agent test. Human step means the reviewed route includes user or administrator setup; not verified means the evidence does not establish autonomous completion.
