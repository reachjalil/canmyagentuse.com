---
{
  "title": "Airtable",
  "slug": "airtable",
  "vendor": "Airtable",
  "order": 17,
  "category": "Databases & backend",
  "categorySlug": "databases-backend",
  "homepage": "https://airtable.com/",
  "aliases": [
    "bases",
    "tables",
    "records",
    "Airtable MCP",
    "Airtable API",
    "Airtable MCP CLI"
  ],
  "summary": "Ask an agent to inspect, analyze and update Airtable bases through the official MCP server, Web API or MCP-backed CLI.",
  "scope": "Airtable accounts, workspaces and bases that the connected user or token can reach. MCP and API actions remain subject to base, table and field permissions; account signup and agent checkout are not established routes.",
  "bestFor": "Reading selected records and making approved updates in an Airtable base.",
  "routes": [
    {
      "name": "Hosted Airtable MCP",
      "description": "Connect an MCP-capable host to https://mcp.airtable.com/mcp using the host's OAuth flow, or use the documented personal access token path. The server can discover bases and tables, read and analyze records, and perform permitted writes.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp-dev",
        "mcp"
      ]
    },
    {
      "name": "Airtable Web API",
      "description": "Use the REST API at https://api.airtable.com/v0 with a Personal Access Token or OAuth token. Select the exact base resources and endpoint scopes, then handle pagination, batching and rate limits.",
      "feature": "connectors",
      "sourceIds": [
        "api",
        "pat",
        "oauth"
      ]
    },
    {
      "name": "Official Airtable MCP CLI",
      "description": "Install @airtable/mcp-cli and configure a Personal Access Token, then discover the server's current tools before invoking list-bases, list-records or another command. The CLI is experimental and tool names and output schemas can change.",
      "feature": "terminal",
      "sourceIds": [
        "cli"
      ]
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Airtable publishes and operates an MCP server at https://mcp.airtable.com/mcp. It supports compatible hosts such as ChatGPT, Claude and Cursor, mirrors the connected Airtable permissions, and can search, analyze, create and update records. Workspace Owners or Creators can create bases; Editors can write only where their base permissions and the connection allow it.",
      "sourceIds": [
        "mcp-dev",
        "mcp"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The MCP tool reference documents display_records_for_table as an interactive kanban or levels widget. This review has not established its MCP Apps extension contract or client rendering requirements; native Airtable Interfaces alone do not settle that question.",
      "sourceIds": [
        "mcp-tools"
      ]
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Airtable's official Web API is REST and supports Personal Access Tokens and OAuth tokens. Record, schema and comment operations are controlled by token scopes, selected resources and the underlying Airtable collaborator and field/table permissions.",
      "sourceIds": [
        "api",
        "api-scopes",
        "api-rate",
        "pat",
        "oauth",
        "base-permissions"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "Airtable publishes the @airtable/mcp-cli repository and package. It drives the official MCP server with a Personal Access Token, exposes discovery and JSON output, and is explicitly experimental; this review did not install or run it.",
      "sourceIds": [
        "cli"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "The reviewed Airtable documentation does not establish a local-files interface for an agent to operate Airtable data. The CLI's local credential and cache files are implementation details, not evidence of local Airtable file access.",
      "sourceIds": []
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Web account signup is documented; autonomous signup is not verified.",
      "detail": "Airtable documents creating an account at airtable.com/signup with email, SSO, Google or Apple credentials. The reviewed sources do not establish that an outside agent can complete identity checks, create the account and reliably receive the resulting workspace without a person.",
      "sourceIds": [
        "signup"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "A person must authorize the host and choose the Airtable resources.",
      "detail": "For hosted MCP, add https://mcp.airtable.com/mcp in an MCP-capable host and complete the browser authorization. For a PAT route, an authorized user creates the token in Builder Hub and chooses both scopes and resources. A least-privilege MCP reader uses only data.records:read, schema.bases:read, data.recordComments:read and workspacesAndBases:read; add data.records:write only for approved record changes. The token or OAuth grant cannot exceed the creator's Airtable permissions. Enterprise administrators may need to allow-list the integration.",
      "sourceIds": [
        "mcp",
        "mcp-dev",
        "pat",
        "oauth",
        "builder",
        "admin"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "human-step",
      "summary": "A workspace Owner must choose the plan and approve payment.",
      "detail": "MCP is included in existing Airtable plans and consumes their API allowance. Airtable bills paid self-serve plans per workspace; an Owner chooses the plan and payment method. Free and Team plans have monthly API caps, while paid collaborator and record limits also affect the task. No agent checkout or autonomous subscription change was verified.",
      "sourceIds": [
        "plans",
        "limits",
        "billing",
        "mcp"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read, analyze and make approved record changes through documented routes.",
      "detail": "After connection, an agent can list or inspect records, analyze them, create records and update existing records when the user has the needed Airtable role and scopes. Commenter and Read-only users can read through MCP but cannot create or update records. Base field and table restrictions also apply to API and MCP writes. This is a documentation review, not a live agent test.",
      "sourceIds": [
        "mcp",
        "mcp-dev",
        "api",
        "base-permissions"
      ]
    }
  ],
  "setup": [
    {
      "title": "Name one base, table and finish line",
      "actor": "You",
      "detail": "Give the agent the exact workspace or base, table, view or record filter, and desired outcome. Start with one narrow read so a similarly named base cannot be mistaken for the target. Decide whether the run may only read, may comment, or may create/update records."
    },
    {
      "title": "Authorize a least-privilege connection",
      "actor": "You + agent",
      "detail": "For MCP, connect https://mcp.airtable.com/mcp in a compatible host and approve the browser consent. For a PAT, create it in Builder Hub with data.records:read, schema.bases:read, data.recordComments:read and workspacesAndBases:read for a read-only discovery task, and add only the exact base resources. Add data.records:write only after deciding which table and fields the agent may change."
    },
    {
      "title": "Resolve the organization policy",
      "actor": "Admin",
      "detail": "If the enterprise blocks third-party integrations or API access, an organization admin must allow-list the MCP client or adjust the relevant policy. A base-level Editor or higher role is needed for record writes; Creator or Owner is needed for structural changes such as fields, tables or a new base."
    },
    {
      "title": "Read back the target before writing",
      "actor": "Agent",
      "detail": "Ask: “Identify the selected base and table, show the schema needed for this task, and return the first matching record IDs and relevant fields. Do not change anything.” Check that the base, table, filter and record IDs are correct."
    },
    {
      "title": "Approve one bounded change",
      "actor": "You",
      "detail": "Review the proposed record IDs, field names, old values, new values and count. Explicitly approve the write or keep the connection read-only. MCP record creation is limited to 10 records per request; the API is limited to 5 requests per second per base and 100 records per page."
    },
    {
      "title": "Verify the result and retire access",
      "actor": "You + agent",
      "detail": "Fetch the exact record IDs again and report the resulting values, any errors and the Airtable URL or IDs needed to audit the change. Remove bases or delete the MCP integration under Profile → Integrations → Third-party Integrations. Delete or regenerate a PAT in Builder Hub. OAuth grants can be narrowed or revoked there; Airtable does not expose a dedicated API endpoint for programmatic OAuth refresh-token revocation."
    }
  ],
  "sources": [
    {
      "id": "mcp",
      "title": "Using the Airtable MCP server",
      "href": "https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-dev",
      "title": "MCP server overview",
      "href": "https://airtable.com/developers/agents/mcp/getting-started",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api",
      "title": "Getting started with Airtable's Web API",
      "href": "https://support.airtable.com/articles/6292134965-getting-started-with-airtable-s-web-api",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-scopes",
      "title": "Airtable Web API scopes",
      "href": "https://airtable.com/developers/web/api/scopes",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-rate",
      "title": "Airtable Web API rate limits",
      "href": "https://airtable.com/developers/web/api/rate-limits",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pat",
      "title": "Creating personal access tokens",
      "href": "https://support.airtable.com/articles/9934989703-creating-personal-access-tokens",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth",
      "title": "Third-party integrations via OAuth overview",
      "href": "https://support.airtable.com/articles/6811769763-third-party-integrations-via-oauth-overview",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "builder",
      "title": "Using Builder Hub in Airtable",
      "href": "https://support.airtable.com/articles/9362950318-using-builder-hub-in-airtable",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "base-permissions",
      "title": "Airtable base permissions",
      "href": "https://support.airtable.com/articles/5450095623-airtable-base-permissions",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "cli",
      "title": "Airtable MCP CLI (official repository)",
      "href": "https://github.com/Airtable/airtable-mcp-cli/tree/6847f24e318e366a2afac4967f72b1b976ea9654",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "plans",
      "title": "Airtable plans overview",
      "href": "https://support.airtable.com/articles/2277136852-airtable-plans-overview",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "limits",
      "title": "Managing API call limits in Airtable",
      "href": "https://support.airtable.com/articles/7735693959-managing-api-call-limits-in-airtable",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "signup",
      "title": "Creating, canceling, and deleting your Airtable account",
      "href": "https://support.airtable.com/articles/2675548758-creating-canceling-and-deleting-your-airtable-account",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "billing",
      "title": "Airtable billing overview",
      "href": "https://support.airtable.com/articles/6347253266-airtable-billing-overview",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "admin",
      "title": "Settings — Airtable admin panel",
      "href": "https://support.airtable.com/articles/9656884884-settings-airtable-admin-panel",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-tools",
      "title": "Airtable MCP Tools Reference",
      "href": "https://airtable.com/developers/agents/mcp/tools",
      "publisher": "Airtable",
      "reviewedAt": "2026-09-05"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Airtable? MCP, API, CLI and permissions",
  "socialTitle": "Can my agent use Airtable?",
  "socialDescription": "Inspect and update Airtable bases through the official MCP server, Web API or MCP-backed CLI.",
  "description": "Inspect and update Airtable bases through the official MCP server, Web API or MCP-backed CLI.",
  "llmSummary": "Airtable has an official MCP server, REST API and experimental MCP-backed CLI. A human must authorize the account and choose bases and scopes; record writes require suitable Airtable permissions. Signup and paid-plan checkout are not verified, while MCP Apps and local-files remain unverified.",
  "audience": "People choosing a structured database service for scoped agent-assisted record workflows.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "airtable",
    "databases-backend",
    "saas",
    "mcp",
    "api",
    "cli",
    "permissions",
    "oauth",
    "personal-access-token"
  ],
  "updated": "2026-09-05",
  "published": "2026-09-05",
  "canonicalPath": "/products/airtable",
  "previewImageAlt": "Can My Agent Use product guide for Airtable"
}
---

## A practical first Airtable task

Airtable is a good match when the finish line is a bounded record workflow: identify one base and table, find matching records, explain what is there, then make one approved update and fetch the changed records again. MCP is the easiest route for a compatible host; the REST API is the most explicit for an integration; the official CLI is useful from a terminal but remains experimental. **This guide is a documentation review, not a live test.** [MCP server overview](https://airtable.com/developers/agents/mcp/getting-started), [Web API](https://support.airtable.com/articles/6292134965-getting-started-with-airtable-s-web-api), [official MCP CLI](https://github.com/Airtable/airtable-mcp-cli/tree/6847f24e318e366a2afac4967f72b1b976ea9654).

## What the connection can reach

For hosted MCP, use `https://mcp.airtable.com/mcp` in an MCP-capable host and complete browser authorization. Airtable says the server mirrors existing permissions: Owners, Creators and Editors can update records where allowed, while Commenters and Read-only users can read without creating or updating. Enterprise policy can require an admin allow-list. [MCP permissions](https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server), [base permissions](https://support.airtable.com/articles/5450095623-airtable-base-permissions).

For a PAT, scope and resource selection are separate. The developer scope reference names `data.records:read` for record reads, `data.records:write` for create/update/delete, and `schema.bases:read` or `schema.bases:write` for schema inspection or changes. Airtable's MCP guide gives a four-scope read-only set: add `data.recordComments:read` and `workspacesAndBases:read` to the record and schema read scopes. A token cannot exceed its creator's Airtable permissions. OAuth grants likewise show requested actions and let the user choose bases or workspaces. [API scopes](https://airtable.com/developers/web/api/scopes), [MCP read-only scopes](https://airtable.com/developers/agents/mcp/getting-started), [PAT setup](https://support.airtable.com/articles/9934989703-creating-personal-access-tokens), [OAuth resource selection](https://support.airtable.com/articles/6811769763-third-party-integrations-via-oauth-overview).

## A useful read, write and read-back loop

Start with: “Identify the exact base and table named here, show the schema needed for this task, and return the first matching record IDs and relevant fields. Do not change anything.” Check the target and filter before enabling a write. Airtable documents search, analysis, record creation and record updates through MCP; native Interfaces and their interface-only reads are a separate surface. [MCP tools](https://airtable.com/developers/agents/mcp/tools), [MCP capabilities and interface access](https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server).

For the write step, ask for a preview containing record IDs, old values, new values and the affected count. Approve that exact preview, then fetch those IDs again and report the resulting values. The developer API reference and limits guide document pagination, 5 requests per second per base and plan-level monthly caps; MCP record creation is limited to 10 records per request. [API tools](https://airtable.com/developers/agents/mcp/tools), [API rate limits](https://airtable.com/developers/web/api/rate-limits), [API call limits](https://support.airtable.com/articles/7735693959-managing-api-call-limits-in-airtable).

## Plan and billing boundaries

MCP is currently included in every Airtable plan and uses the public API underneath, so it still consumes API allowance. The current plan guide lists Free at 1,000 records per base, 1,000 API calls per workspace per month and 1 GB of attachment storage per base; Team at $24 per collaborator per month when billed monthly, or $20 per collaborator per month when billed annually, 50,000 records per base and 100,000 API calls per workspace per month; and self-serve Business at $54 per collaborator per month when billed monthly, or $45 per collaborator per month when billed annually, 125,000 records per base and unlimited monthly API calls. The 5-requests-per-second-per-base limit applies across plans. [Plans](https://support.airtable.com/articles/2277136852-airtable-plans-overview), [API call limits](https://support.airtable.com/articles/7735693959-managing-api-call-limits-in-airtable).

The reviewed purchase route is a human step. Airtable bills self-serve plans per workspace; an Owner manages plan changes and payment. A new account's first workspace receives a complimentary 14-day Team trial, after which it can remain Free or be upgraded. Adding a payment method during the trial automatically upgrades the workspace and bills it. No reviewed source establishes that an outside agent can choose a plan, enter payment details or complete checkout. [Plans and trial](https://support.airtable.com/articles/2277136852-airtable-plans-overview), [billing](https://support.airtable.com/articles/6347253266-airtable-billing-overview).

## Revocation and credential cleanup

Remove specific bases or delete the MCP integration under Airtable's Profile → Integrations → Third-party Integrations. For OAuth, users can narrow or revoke a grant there, and enterprise admins can revoke grants for users and service accounts. Airtable documents no dedicated API endpoint for programmatic OAuth refresh-token revocation; refresh tokens are also automatically invalidated after 60 days of inactivity. Delete or regenerate a PAT in Builder Hub when the job ends, and update any client that used a regenerated value. [MCP revocation](https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server), [OAuth management and revocation](https://support.airtable.com/articles/6811769763-third-party-integrations-via-oauth-overview), [PAT lifecycle](https://support.airtable.com/articles/9934989703-creating-personal-access-tokens).

## The CLI is a separate terminal route

Airtable's official `@airtable/mcp-cli` package discovers the tools exposed by the MCP server at runtime. The documented commands include `configure`, `whoami`, `tools`, `list-bases` and `list-records`; `AIRTABLE_TOKEN` can supply a PAT in scripts, and `--input -` accepts JSON. The CLI stores profiles and its short-lived tool cache with restrictive local permissions, but that does not make Airtable a local-files product. The repository labels the CLI experimental: names, arguments and output formats can change, so discover tools before scripting against them. This guide did not install or execute the CLI. [Official CLI repository](https://github.com/Airtable/airtable-mcp-cli/tree/6847f24e318e366a2afac4967f72b1b976ea9654).

The MCP tool reference describes `display_records_for_table` as rendering an interactive kanban or levels widget. That is a useful research lead, but this review has not established the MCP Apps extension contract or which clients render it. MCP Apps therefore remain unverified here. Native Airtable Interfaces are a separate surface. [MCP Tools Reference](https://airtable.com/developers/agents/mcp/tools).
