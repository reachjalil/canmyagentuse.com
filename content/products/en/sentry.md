---
{
  "title": "Sentry",
  "slug": "sentry",
  "vendor": "Sentry",
  "order": 16,
  "category": "Monitoring & observability",
  "categorySlug": "monitoring-observability",
  "homepage": "https://sentry.io/",
  "aliases": [
    "errors",
    "monitoring",
    "observability",
    "issue triage",
    "Seer",
    "sentry-cli"
  ],
  "summary": "Read and triage application errors through official MCP, API or CLI access.",
  "scope": "Sentry SaaS with an existing account and authorized organization/project. Signup and autonomous purchases are unverified; Seer is a separate native agent and paid add-on.",
  "bestFor": "Investigating production issues and making approved triage changes.",
  "routes": [
    {
      "name": "Hosted MCP",
      "description": "Connect an HTTP-capable MCP client to https://mcp.sentry.dev/mcp/{organizationSlug}/{projectSlug}; complete OAuth and select the needed capabilities.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp",
        "mcp-security"
      ]
    },
    {
      "name": "Sentry API integration",
      "description": "Use a scoped bearer token or OAuth integration. Choose endpoint permissions and the correct domain for regional issue data versus account metadata.",
      "feature": "connectors",
      "sourceIds": [
        "api-auth",
        "api-permissions",
        "data-region"
      ]
    },
    {
      "name": "Official Sentry CLI",
      "description": "Use the current sentry command for issue retrieval, JSON output and approved status changes. Authentication can start with a read-only device authorization.",
      "feature": "terminal",
      "sourceIds": [
        "cli-auth",
        "cli-issues",
        "cli-migration"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Sentry hosts an HTTP MCP service with OAuth and organization/project scoping. The permission model separates inspection, Seer, triage and project management.",
      "sourceIds": [
        "mcp",
        "mcp-permissions"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "MCP tools and the native Seer interface do not establish interactive MCP Apps support.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "The documented API supports issue and account-resource operations using scoped authentication. Some endpoints require a user token; API entitlement depends on the plan.",
      "sourceIds": [
        "api-auth",
        "api-permissions",
        "pricing"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "The current sentry CLI supports live issue reads and triage as well as release and build-artifact workflows; older sentry-cli examples may use different commands.",
      "sourceIds": [
        "cli-issues",
        "cli-migration"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "CLI handling of local source maps and debug artifacts does not establish a local-file workspace for operating live Sentry issues.",
      "sourceIds": [
        "cli-migration"
      ]
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous account creation is not verified.",
      "detail": "Sentry documents web signup and organization setup. Creating a project inside an authorized organization is a separate API capability and does not prove an agent can create a new user or organization.",
      "sourceIds": [
        "getting-started",
        "data-region",
        "project-create"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Authorize a project and its permissions.",
      "detail": "The hosted setup includes user OAuth approval. API credentials need selected scopes and an appropriate user or internal integration; organization policy and role still govern access.",
      "sourceIds": [
        "mcp",
        "api-auth",
        "api-token"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Autonomous checkout is not verified.",
      "detail": "MCP is listed on the free Developer plan. API and third-party integrations are listed under Team; Seer requires a separate subscription. Enabling paid features needs an approved billing decision.",
      "sourceIds": [
        "pricing",
        "seer"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read issues and perform approved triage.",
      "detail": "Official MCP and CLI routes support inspection and permitted issue updates. Confirm the organization, project and exact issue before changing status; a resolved issue is not evidence of a deployed code fix.",
      "sourceIds": [
        "mcp-permissions",
        "cli-issues"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose the organization and project",
      "actor": "You",
      "detail": "Provide the exact project and one issue or a narrow search. Confirm the organization’s US or EU data region and account access."
    },
    {
      "title": "Check plan and integration controls",
      "actor": "Admin",
      "detail": "Confirm the selected route is available on the plan. An internal integration needs the documented administrative role and selected permissions; enabling Seer also changes billing."
    },
    {
      "title": "Connect with limited capabilities",
      "actor": "You + agent",
      "detail": "Prefer project-scoped hosted MCP with inspection capabilities. With the current CLI, read-only login requests read scopes before browser approval. Keep tokens in the credential store."
    },
    {
      "title": "Read one useful issue",
      "actor": "Agent",
      "detail": "Fetch one unresolved issue from the named project with fresh data. Report its ID, status and relevant error context; do not start Seer analysis as an implicit read."
    },
    {
      "title": "Approve a specific change",
      "actor": "You",
      "detail": "Confirm the exact issue and intended status or assignment. Add the required write permission only when needed; fetch the issue again after the change."
    },
    {
      "title": "Remove unused access",
      "actor": "You + agent",
      "detail": "Revoke personal tokens through Sentry’s Personal Tokens settings. For OAuth, verify revocation with the account administrator; removing a client configuration alone is not a verified server-side revocation."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "Sentry hosted MCP connection guide",
      "href": "https://mcp.sentry.dev/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp-security",
      "title": "Sentry MCP authorization and token boundaries (pinned source)",
      "href": "https://github.com/getsentry/sentry-mcp/blob/b0f3cd995b98eea7116420a5b7e5cb8fda9cd3e5/docs/operations/security.md",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp-permissions",
      "title": "Sentry MCP skills and token scopes",
      "href": "https://github.com/getsentry/sentry-mcp/blob/b0f3cd995b98eea7116420a5b7e5cb8fda9cd3e5/packages/mcp-core/README.md",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-auth",
      "title": "Sentry API authentication and OAuth",
      "href": "https://docs.sentry.io/api/auth/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-permissions",
      "title": "Sentry API permissions and scopes",
      "href": "https://docs.sentry.io/api/permissions/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-token",
      "title": "Create a Sentry authentication token",
      "href": "https://docs.sentry.io/api/guides/create-auth-token/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "project-create",
      "title": "Create a project for an existing Sentry organization",
      "href": "https://docs.sentry.io/api/projects/create-a-project-for-an-organization/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-auth",
      "title": "Sentry CLI authentication and read-only login",
      "href": "https://cli.sentry.dev/commands/auth/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-issues",
      "title": "Sentry CLI issue reads and status changes",
      "href": "https://cli.sentry.dev/commands/issue/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-migration",
      "title": "Sentry CLI migration from sentry-cli v3",
      "href": "https://cli.sentry.dev/migrating-from-v3/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "pricing",
      "title": "Sentry plans, included MCP and usage quotas",
      "href": "https://sentry.io/pricing/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "data-region",
      "title": "Sentry US and EU data storage and API routing",
      "href": "https://docs.sentry.io/organization/data-storage-location/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "seer",
      "title": "Seer native debugging agent and subscription requirements",
      "href": "https://docs.sentry.io/product/ai-in-sentry/seer/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "revoke",
      "title": "Manage and revoke Sentry personal tokens",
      "href": "https://www.sentry.help/en/articles/15902365-how-do-i-manage-and-secure-personal-tokens-in-sentry-io",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "rate-limits",
      "title": "Sentry API rate limits",
      "href": "https://docs.sentry.io/api/ratelimits/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "getting-started",
      "title": "Sentry signup and initial product setup",
      "href": "https://docs.sentry.io/get-started/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "project-update",
      "title": "Project settings update permissions and exceptions",
      "href": "https://docs.sentry.io/api/projects/update-a-project/",
      "publisher": "Sentry",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Sentry? MCP, API, CLI and permissions",
  "socialTitle": "Can my agent use Sentry?",
  "socialDescription": "Read and triage application errors through official MCP, API or CLI access.",
  "description": "Read and triage application errors through official MCP, API or CLI access.",
  "llmSummary": "Sentry has official MCP, API and CLI access for authorized issue workflows. Signup and purchases are unverified; OAuth, scopes, project access, plans and Seer billing matter.",
  "audience": "People choosing SaaS tools with documented agent access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "sentry",
    "monitoring-observability",
    "saas",
    "mcp",
    "api",
    "cli",
    "oauth",
    "permissions"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/sentry",
  "previewImageAlt": "Can My Agent Use product guide for Sentry"
}
---

## Account creation and project creation are separate

The reviewed route starts with a Sentry account and organization. Sentry links to web signup; its setup flow asks where the new organization’s data should live. These documents do not establish autonomous user signup or organization creation. An agent can separately create a project through the documented API inside an existing organization. That operation needs authorization; disabling member project creation introduces an `org:write` requirement. [Getting started](https://docs.sentry.io/get-started/), [organization setup](https://docs.sentry.io/organization/data-storage-location/), [project creation](https://docs.sentry.io/api/projects/create-a-project-for-an-organization/).

## Connect MCP with the right permission boundary

Use `https://mcp.sentry.dev/mcp/ORG/PROJECT` for a specific project. The published connection guide uses OAuth; narrower URLs constrain discovery and tools. Choose inspection capabilities for the first task. Sentry separates `inspect`, `seer`, `triage` and `project-management`; project-scoped sessions hide project creation. [Hosted setup](https://mcp.sentry.dev/), [MCP capabilities](https://github.com/getsentry/sentry-mcp/blob/b0f3cd995b98eea7116420a5b7e5cb8fda9cd3e5/packages/mcp-core/README.md).

The OAuth implementation requests upstream `org:read project:write team:write event:write`. MCP capability selections and URL constraints narrow what the client can do with that access. Inspect-only MCP therefore does not mean Sentry issued a read-only upstream token. Current source documentation also describes direct `Sentry-Bearer` authentication, while the public setup page still says OAuth for all connections. This review does not establish that alternative’s availability on the deployed service. [Pinned authorization documentation](https://github.com/getsentry/sentry-mcp/blob/b0f3cd995b98eea7116420a5b7e5cb8fda9cd3e5/docs/operations/security.md).

## Choose tokens, scopes and a revocation route

For a custom integration, use authentication tokens or OAuth. An internal integration belongs to the organization; its creation tutorial requires a Manager or Admin. Some endpoints require a user token instead. OAuth connects the organization selected during approval, and its access token expires after 30 days with refresh available. Integration-token permissions can be edited later; personal-token permissions require a replacement token. [Token setup](https://docs.sentry.io/api/guides/create-auth-token/), [authentication](https://docs.sentry.io/api/auth/), [permissions](https://docs.sentry.io/api/permissions/).

A personal-token owner can delete it under Personal Tokens to invalidate it. For hosted OAuth, the implementation documents reauthorization when upstream credentials are rejected; this review did not verify a user-facing MCP grant-management screen. Confirm the revocation route before granting durable access. [Personal-token revocation](https://www.sentry.help/en/articles/15902365-how-do-i-manage-and-secure-personal-tokens-in-sentry-io), [MCP grant behavior](https://github.com/getsentry/sentry-mcp/blob/b0f3cd995b98eea7116420a5b7e5cb8fda9cd3e5/docs/operations/security.md).

## Start with one fresh issue read

The current CLI is `sentry`; version 4 replaces `sentry-cli` and retains release, source-map and debug-file workflows. It also supports live issue listing, viewing, resolving and archiving. Its read-only login requests `project:read`, `org:read`, `event:read`, `member:read` and `team:read`. Browser authorization remains a user step. [CLI migration](https://cli.sentry.dev/migrating-from-v3/), [authentication options](https://cli.sentry.dev/commands/auth/).

The CLI’s read-only label is not a universal no-mutation guarantee for its token: Sentry permits certain project and Seer configuration changes with `project:read`. Keep this initial workflow restricted to issue reads. [Project permission exceptions](https://docs.sentry.io/api/projects/update-a-project/).

After authorization, a useful first query is:

```sh
sentry issue list YOUR_ORG/YOUR_PROJECT --query "is:unresolved" --limit 1 --fresh --json
```

Ask the agent to report the issue ID, status and relevant error context. Approve the exact target and change before changing its status, then read back the result. Changing issue status does not deploy a fix. CLI `issue explain` and `issue plan` invoke Seer, so they should be deliberate follow-up actions. [Issue commands](https://cli.sentry.dev/commands/issue/).

## Check the plan, region and request limits

The free Developer plan lists one user and MCP access. Team adds API and third-party integrations. Event quotas and retention vary by plan; autonomous checkout was not verified. [Current pricing](https://sentry.io/pricing/).

For regional issue data, use `us.sentry.io` or `de.sentry.io`; some account metadata remains in the US and uses `sentry.io`. Region selection does not mean every data type stays there, and changing region requires a new organization. API rate limits apply per caller and endpoint, including concurrency; inspect response limit headers and avoid tight polling. [Data-location rules](https://docs.sentry.io/organization/data-storage-location/), [API limits](https://docs.sentry.io/api/ratelimits/).

## Seer is a separate product decision

Seer is Sentry’s native debugging agent and subscription add-on. Enabling it can incur active-contributor charges for people creating at least two PRs or MRs in a month in an enabled repository or project. It can analyze problems, generate fixes and create pull requests with the required repository integration. Connecting an outside agent to inspect issues does not itself establish approval to enable Seer or publish code. [Seer capabilities and billing](https://docs.sentry.io/product/ai-in-sentry/seer/).

Seer Agent, the conversational interface, is currently in open beta and requires Open Team Membership because its queries span the organization. Seer’s repository features support GitHub.com and GitLab.com cloud; creating pull requests requires the corresponding Seer app. [Seer Agent availability](https://docs.sentry.io/product/ai-in-sentry/seer/).
