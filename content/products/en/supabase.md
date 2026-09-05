---
{
  "title": "Supabase",
  "slug": "supabase",
  "vendor": "Supabase",
  "order": 15,
  "category": "Databases & backend",
  "categorySlug": "databases-backend",
  "homepage": "https://supabase.com/",
  "aliases": [
    "Postgres",
    "PostgreSQL",
    "database",
    "backend",
    "Supabase CLI",
    "Supabase MCP"
  ],
  "summary": "A Postgres backend with official MCP, API and CLI access after account authorization.",
  "scope": "Supabase developer accounts, project management and local database development. Creating a project requires an existing account and organization; autonomous account signup and subscription checkout are unverified.",
  "bestFor": "Building a Postgres app with scoped schema inspection and versioned migrations.",
  "routes": [
    {
      "name": "Hosted or local MCP",
      "description": "Connect a compatible client to the hosted server or the local development endpoint. Scope hosted work to one project before inspecting it.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "name": "Management API integration",
      "description": "Use a PAT or OAuth access token to manage authorized organizations and projects. Project API keys serve application access and are a different credential type.",
      "feature": "connectors",
      "sourceIds": [
        "management-api",
        "api-keys"
      ]
    },
    {
      "name": "CLI and migration files",
      "description": "Use the official CLI for project operations and local database work. Review versioned SQL migrations before applying them to a linked hosted project.",
      "feature": "terminal",
      "sourceIds": [
        "cli",
        "migrations"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Supabase documents hosted and local MCP endpoints, with project scoping and read-only SQL execution.",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The reviewed tools documentation does not establish an interactive MCP Apps interface. MCP tools and an agent plugin are separate capabilities.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "The Management API manages projects; project APIs use application keys and user authorization for data access.",
      "sourceIds": [
        "management-api",
        "api-keys"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "The official CLI supports local development and authenticated hosted project operations, including project creation.",
      "sourceIds": [
        "cli",
        "personal-tokens"
      ]
    },
    {
      "kind": "local-files",
      "status": "official",
      "detail": "SQL migrations and local configuration support a versioned development workflow. Editing them does not itself change a hosted database.",
      "sourceIds": [
        "migrations"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose an existing account and project",
      "actor": "You",
      "detail": "Identify the organization, project reference and environment. If a project must be created, agree on its name, specific region and spending limit first."
    },
    {
      "title": "Authorize the connection",
      "actor": "You + agent",
      "detail": "Complete the hosted MCP browser consent flow, or supply an appropriate management credential through the client's supported secret storage. Confirm the intended organization."
    },
    {
      "title": "Limit the first task",
      "actor": "You + agent",
      "detail": "Start with one project and a schema-only read. Check token permissions and client tool approvals before providing access to any production environment."
    },
    {
      "title": "Inspect and propose",
      "actor": "Agent",
      "detail": "Report the target project and relevant schema or migration history. Prepare a proposed migration with its expected effect and verification steps."
    },
    {
      "title": "Approve the concrete change",
      "actor": "You",
      "detail": "Confirm the SQL, destination environment and any charges before enabling the required write access. Have the agent verify the resulting schema and migration history afterward."
    },
    {
      "title": "Retire access at its source",
      "actor": "You + agent",
      "detail": "Review the issued OAuth grant or token when the work ends. Revoke unused authorization and rotate any exposed project secrets; removing a client configuration is not the credential lifecycle."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "Supabase MCP server: authorization, tools and scoping",
      "href": "https://supabase.com/docs/guides/ai-tools/mcp",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "personal-tokens",
      "title": "Supabase classic and scoped personal access tokens",
      "href": "https://supabase.com/docs/guides/platform/personal-access-tokens",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "management-api",
      "title": "Supabase Management API authentication and limits",
      "href": "https://supabase.com/docs/reference/api/introduction",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "oauth-integration",
      "title": "Supabase OAuth integrations, project creation and revocation",
      "href": "https://supabase.com/docs/guides/integrations/build-a-supabase-oauth-integration",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-keys",
      "title": "Supabase project API key types, privileges and rotation",
      "href": "https://supabase.com/docs/guides/getting-started/api-keys",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli",
      "title": "Supabase CLI reference: project creation",
      "href": "https://supabase.com/docs/reference/cli/supabase-projects-create",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "migrations",
      "title": "Supabase local development and database migrations",
      "href": "https://supabase.com/docs/guides/local-development/database-migrations",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "billing",
      "title": "Supabase organization billing and project compute charges",
      "href": "https://supabase.com/docs/guides/platform/billing-on-supabase",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "regions",
      "title": "Supabase project regions and Management API constraints",
      "href": "https://supabase.com/docs/guides/platform/regions",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "enterprise-auth",
      "title": "Supabase Enterprise MCP authentication and access removal",
      "href": "https://supabase.com/docs/guides/platform/sso/enterprise-mcp-authentication",
      "publisher": "Supabase",
      "reviewedAt": "2026-09-04"
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Account signup is not verified.",
      "detail": "The documented provisioning workflow starts with an existing Supabase account and organization. Creating a database project does not establish autonomous signup of that developer account.",
      "sourceIds": [
        "oauth-integration"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Authorize an organization or issue a token.",
      "detail": "Hosted MCP normally uses browser authorization. Token-based workflows require a user-issued credential; scoped PATs are currently a gradual public-alpha rollout.",
      "sourceIds": [
        "mcp",
        "personal-tokens"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "conditional",
      "summary": "Approve billable project creation first.",
      "detail": "An authorized integration can create a project in an existing organization, adding compute charges on a paid plan. Autonomous subscription checkout is unverified; agree on the organization and cost before provisioning.",
      "sourceIds": [
        "oauth-integration",
        "billing"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Inspect a schema and apply approved changes.",
      "detail": "Official management operations and migration workflows support database development. Permission and environment selection determine which reads and writes the agent can perform.",
      "sourceIds": [
        "management-api",
        "migrations",
        "personal-tokens"
      ]
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Supabase? MCP, database access and setup",
  "socialTitle": "Can my agent use Supabase?",
  "socialDescription": "A Postgres backend with official MCP, API and CLI access after account authorization.",
  "description": "A Postgres backend with official MCP, API and CLI access after account authorization.",
  "llmSummary": "Supabase offers official MCP, API, CLI and migration-file workflows for authorized projects. Developer account signup, subscription checkout and MCP Apps are unverified.",
  "audience": "People and agents choosing a database and backend platform.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "supabase",
    "databases",
    "backend",
    "products",
    "mcp",
    "api",
    "permissions"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/supabase",
  "previewImageAlt": "Can My Agent Use guide to Supabase account setup and agent access."
}
---

## Account signup and project creation are separate

An agent can provision a project through the Management API's `/v1/projects` operation after authorization to an existing organization. The CLI also exposes `supabase projects create`, with organization, region, database-password and size options. This review does not establish autonomous creation of the underlying developer account. Creating users inside an app backed by Supabase Auth is another task. [Integration provisioning](https://supabase.com/docs/guides/integrations/build-a-supabase-oauth-integration), [CLI project creation](https://supabase.com/docs/reference/cli/supabase-projects-create).

## Connect MCP to one project

The hosted server uses browser sign-in and organization consent; the normal flow needs no manually created PAT. Set `project_ref` to disable account-management tools, `read_only=true` to execute SQL as a read-only Postgres user, and `features` to limit tool groups. For an initial inspection, replace the placeholder in:

```text
https://mcp.supabase.com/mcp?project_ref=YOUR_PROJECT_REF&read_only=true&features=database,docs
```

The CLI's local stack exposes `http://localhost:54321/mcp`. These are developer tools; interactive MCP Apps support remains unverified. [MCP setup and configuration](https://supabase.com/docs/guides/ai-tools/mcp).

## Match credentials to the job

| Credential | What it authorizes |
| --- | --- |
| PAT or Supabase integration OAuth token | Management API operations on permitted organizations and projects. |
| Project publishable key | Application access governed by database grants, row-level security and the user's authentication. |
| Project secret key | Elevated server access that bypasses row-level security. |

Management credentials and application keys are not interchangeable. Keep secret keys in server-controlled storage. New project keys also do not automatically revoke legacy keys; replacement requires updating consumers and retiring the old credential. [Management authentication](https://supabase.com/docs/reference/api/introduction), [project API keys](https://supabase.com/docs/guides/getting-started/api-keys).

Scoped PATs can restrict organizations, projects and permissions, but remain a **public alpha rolling out gradually**. If the permissions selector is absent, availability is not established for that account. Classic PATs inherit the user's full access, including future projects and organizations. A scoped token can narrow an existing role, never enlarge it. [Personal access tokens](https://supabase.com/docs/guides/platform/personal-access-tokens).

## Decide the plan and region before provisioning

Free permits two active projects across organizations where the user is an Owner or Administrator. Paid plans attach to organizations; each project adds compute charges independently of database usage. Approve the destination organization and budget before an agent creates another project. [Billing model](https://supabase.com/docs/guides/platform/billing-on-supabase).

A project has one primary region. General regions choose available capacity and currently are **not supported by the Management API**; use a specific region for API provisioning. [Region selection](https://supabase.com/docs/guides/platform/regions). Management API limits also matter for automation: the usual allowance is 120 requests per minute per user and project or organization, with stricter endpoints. Handle HTTP 429 and the returned reset headers. [API limits](https://supabase.com/docs/reference/api/introduction).

## Inspect first, then approve a migration

Suggested first task, not executed for this guide: identify the selected development project, list its tables and migration history, and describe the schema without retrieving customer rows. Keep interactive tool approval enabled. The documented MCP tools include `list_tables`, `list_migrations` and `apply_migration`. [Available MCP tools](https://supabase.com/docs/guides/ai-tools/mcp).

Have the agent prepare a migration file, expected schema change and verification query. Supabase supports SQL files under `supabase/migrations` and local configuration in `supabase/config.toml`; a later push applies migrations to a linked hosted project. Review and test locally, then explicitly approve the SQL and destination before enabling the required write access. Verify the resulting schema and migration record before reporting completion. [Migration workflow](https://supabase.com/docs/guides/local-development/database-migrations).

## End access through its authorization

Revoking an OAuth integration's access invalidates its access tokens and prevents refresh; integrations must handle the resulting unauthorized responses. Manage PATs separately through account Access Tokens settings. [OAuth revocation](https://supabase.com/docs/guides/integrations/build-a-supabase-oauth-integration), [token management](https://supabase.com/docs/reference/api/introduction).

Team and Enterprise organizations with SSO can configure centrally managed MCP authorization when the identity provider and client support it. An organization owner can remove a client through Authorized Apps to revoke access across the organization; removing a member ends that person's access. This managed route requires prior administrator configuration. [Enterprise MCP authentication](https://supabase.com/docs/guides/platform/sso/enterprise-mcp-authentication).
