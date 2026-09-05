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
    "roadmap",
    "GraphQL",
    "Linear API"
  ],
  "summary": "Issue tracking with official MCP and GraphQL API access for an authorized agent.",
  "scope": "Linear hosted MCP and GraphQL for existing workspaces. Account creation and billing automation are unverified; the separate Linear for Agents platform remains a developer preview.",
  "bestFor": "Issue and project workflows through official MCP or a scoped GraphQL integration.",
  "routes": [
    {
      "name": "Linear hosted MCP",
      "description": "Use https://mcp.linear.app/mcp/readonly for reading, or the standard /mcp endpoint with the required permissions. Each workspace needs a separate authentication context.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "name": "GraphQL integration",
      "description": "Send queries and mutations to https://api.linear.app/graphql with a personal API key or OAuth token. An integration must handle authorization, GraphQL errors and rate limits.",
      "feature": "connectors",
      "sourceIds": [
        "graphql",
        "rate-limits"
      ]
    },
    {
      "name": "Installed app actor",
      "description": "A workspace administrator can install an OAuth app using actor=app. Changes are attributed to the app; its team access remains managed by administrators. The agent platform is a developer preview.",
      "feature": "connectors",
      "sourceIds": [
        "agents"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Linear maintains an authenticated Streamable HTTP server, including a read-only endpoint.",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "Hosted MCP tools and Linear’s own agent UI do not establish interactive MCP Apps support.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Linear’s GraphQL API supports reads and mutations with personal keys or OAuth; keys can be restricted by permissions and team.",
      "sourceIds": [
        "graphql",
        "api-settings"
      ]
    },
    {
      "kind": "cli",
      "status": "unknown",
      "detail": "No maintained product CLI was verified in this review. Calling GraphQL from a terminal does not establish a separate official CLI.",
      "sourceIds": []
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "This review does not establish a local-file workflow for operating the live Linear workspace.",
      "sourceIds": []
    }
  ],
  "setup": [
    {
      "title": "Pick the workspace, team and task",
      "actor": "You",
      "detail": "Provide one issue identifier or a clearly named team. Choose reading, creating an issue, or updating existing work before granting access."
    },
    {
      "title": "Check workspace controls",
      "actor": "Admin",
      "detail": "Confirm whether member API keys are allowed and whether third-party app approval is enabled. Choose permitted teams for a key or installed app."
    },
    {
      "title": "Authorize the minimum connection",
      "actor": "You + agent",
      "detail": "Use read-only MCP or a Read-only key for retrieval. OAuth read is always present; issues:create can enable issue creation without broad write access."
    },
    {
      "title": "Read before creating work",
      "actor": "Agent",
      "detail": "Check the authenticated viewer and one requested issue. Report the result; draft any proposed issue before sending a mutation."
    },
    {
      "title": "Approve the actual write",
      "actor": "You",
      "detail": "Confirm the destination team and proposed content. After creation, have the agent report the returned issue ID and any GraphQL errors."
    },
    {
      "title": "Keep access and limits under review",
      "actor": "You + agent",
      "detail": "Refresh expiring OAuth access, check response quotas, and revoke unused credentials through Linear. Reconnecting an MCP client alone does not revoke its authorization."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "Linear MCP server",
      "href": "https://linear.app/docs/mcp",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "graphql",
      "title": "Linear GraphQL API: getting started",
      "href": "https://linear.app/developers/graphql",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-settings",
      "title": "Linear API keys, permissions and team restrictions",
      "href": "https://linear.app/docs/api-and-webhooks",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "oauth",
      "title": "Linear OAuth scopes, token refresh and revocation",
      "href": "https://linear.app/developers/oauth-2-0-authentication",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "agents",
      "title": "Linear for Agents: app actors and workspace access",
      "href": "https://linear.app/developers/agents?noRedirect=1",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "rate-limits",
      "title": "Linear API rate and complexity limits",
      "href": "https://linear.app/developers/rate-limiting",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "pricing",
      "title": "Linear pricing and plan limits",
      "href": "https://linear.app/pricing",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "billing",
      "title": "Linear billing and workspace subscriptions",
      "href": "https://linear.app/docs/billing-and-plans",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "app-approvals",
      "title": "Linear third-party app approvals",
      "href": "https://linear.app/docs/third-party-application-approvals",
      "publisher": "Linear",
      "reviewedAt": "2026-09-04"
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous account creation is not assessed.",
      "detail": "This guide begins with an existing Linear user and workspace. The reviewed integration documentation does not establish autonomous signup.",
      "sourceIds": []
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Choose OAuth or a restricted API key.",
      "detail": "A user authorizes access; workspace controls may require an administrator. Personal keys can limit permissions and teams. An app-actor installation requires admin permissions.",
      "sourceIds": [
        "api-settings",
        "app-approvals",
        "agents"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Autonomous plan purchase is not verified.",
      "detail": "Workspace admins manage plan changes. Paid subscriptions apply to one workspace; API access does not establish permission or an automated checkout route for upgrading it.",
      "sourceIds": [
        "billing"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read issues and make permitted updates.",
      "detail": "Documented GraphQL queries and mutations support issue workflows. Confirm the target team and approved change; inspect both returned data and GraphQL errors before reporting success.",
      "sourceIds": [
        "graphql"
      ]
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Linear? MCP, GraphQL, permissions and setup",
  "socialTitle": "Can my agent use Linear?",
  "socialDescription": "Issue tracking with official MCP and GraphQL API access for an authorized agent.",
  "description": "Issue tracking with official MCP and GraphQL API access for an authorized agent.",
  "llmSummary": "Issue tracking with official MCP and GraphQL API access for an authorized agent.",
  "audience": "People choosing SaaS tools with documented agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "linear",
    "project-management",
    "saas",
    "mcp",
    "api",
    "oauth",
    "permissions"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/linear",
  "previewImageAlt": "Can My Agent Use guide to Linear agent access and setup."
}
---

## Choose the connection for the task

For conversation-based work, Linear hosts `https://mcp.linear.app/mcp`; `/mcp/readonly` exposes only read tools. A client requesting only the `read` OAuth scope on the standard endpoint also gets a token that cannot write. MCP accepts existing OAuth tokens or personal keys through a Bearer header. Each workspace needs its own authentication context; reconnecting does not switch workspaces. [Linear MCP setup](https://linear.app/docs/mcp).

For a custom integration, use the documented GraphQL route. On that API, a personal key uses `Authorization: <API_KEY>`, while OAuth uses `Authorization: Bearer <ACCESS_TOKEN>`. This header distinction matters when moving between GraphQL and MCP. [GraphQL authentication](https://linear.app/developers/graphql).

## Set permissions before handing over work

Personal keys belong to a user. They can be restricted to selected teams and permissions: Read, Write, Admin, Create issues, and Create comments. Admins can disable member key creation and revoke existing keys. [API settings](https://linear.app/docs/api-and-webhooks).

OAuth always includes `read`. Request `issues:create` for issue creation or `comments:create` for comments when those targeted scopes suffice; `write` is broader. Ordinary issue work does not require requesting `admin`. OAuth access tokens last 24 hours and need refresh handling. [OAuth scopes and refresh](https://linear.app/developers/oauth-2-0-authentication).

Paid workspaces can require approval before third-party apps connect. Enterprise workspace owners, or admins on other paid plans, manage that control. [Application approvals](https://linear.app/docs/third-party-application-approvals).

## A workspace agent has its own identity

An installed agent using `actor=app` is different from acting as a person's account. Installation requires an administrator, and the app has a distinct identity in each workspace. Administrators can change or revoke its team access. App actors cannot request `admin`; mention and delegation capabilities have separate scopes. Linear labels its agent platform a developer preview and says installed agents are not billable users. These facts do not establish MCP Apps support. [Linear for Agents](https://linear.app/developers/agents?noRedirect=1).

## Start with one read, then an approved issue

Suggested first check, not executed for this guide: replace `TEAM-123` with the issue the user selected and send this read operation to the GraphQL endpoint.

```graphql
query AgentReadCheck {
  viewer { id name }
  issue(id: "TEAM-123") { id title }
}
```

Confirm the returned identity and issue before drafting a change. Creating an issue needs the correct `teamId`; agree on the team, title, and content before sending `issueCreate`. Check its `success` result, returned issue ID, and `errors` array. HTTP 200 alone can conceal partial GraphQL failure. [Query, mutation and error examples](https://linear.app/developers/graphql).

## Budget for workspace and API limits

Linear lists API/webhook and MCP access on Free, with **2 teams and 250 issues**. Paid plans have different limits; subscriptions belong to individual workspaces. Check the current plan before planning bulk creation. [Plan comparison](https://linear.app/pricing), [billing scope](https://linear.app/docs/billing-and-plans).

The reviewed GraphQL limits are **2,500 requests per user per hour for personal keys**, shared across that user's keys, and **5,000 for OAuth per user or app user**. Hourly complexity budgets are 3,000,000 and 2,000,000 respectively, with a 10,000-point ceiling per query. Specific operations can have lower limits; some workspace app quotas scale with paid seats. Inspect remaining/reset headers and GraphQL `RATELIMITED` errors, which can arrive with HTTP 400. Prefer narrow queries and webhooks over repeated polling. These figures describe GraphQL and do not establish a separate MCP allowance. [Rate-limit documentation](https://linear.app/developers/rate-limiting).

## Disconnect credentials, not just the client

A routine MCP disconnect/reconnect leaves the Linear authentication session in place. [MCP connection behavior](https://linear.app/docs/mcp). To end access, revoke the personal key in Linear's API settings, or use the documented OAuth revocation endpoint, `POST https://api.linear.app/oauth/revoke`, with the credential in the request body's `token` field. An administrator can also revoke an installed app's team access. [Key revocation](https://linear.app/docs/api-and-webhooks), [OAuth revocation](https://linear.app/developers/oauth-2-0-authentication), [app access management](https://linear.app/developers/agents?noRedirect=1).
