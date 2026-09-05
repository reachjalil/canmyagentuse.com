---
{
  "title": "Salesforce",
  "slug": "salesforce",
  "vendor": "Salesforce",
  "category": "CRM & sales",
  "order": 3,
  "homepage": "https://www.salesforce.com/",
  "aliases": [
    "CRM",
    "Sales Cloud",
    "contacts",
    "opportunities"
  ],
  "summary": "An agent can work with CRM records after an administrator enables the integration and the right user permissions are in place.",
  "scope": "Existing Salesforce orgs, hosted MCP, REST API, and CLI scratch-org provisioning. A scratch org, a production subscription, and a CRM Account record are different things.",
  "actions": [
    {
      "id": "sign-up",
      "status": "conditional",
      "summary": "Create a scratch org after Dev Hub setup.",
      "detail": "Salesforce CLI can provision an expiring development scratch org using an authorized Dev Hub with spare allocation. Initial Developer Edition signup and paid production-org creation are separate flows; this is not an autonomous new-customer signup.",
      "sourceIds": [
        "scratch",
        "devhub",
        "quickstart",
        "scratch-lifecycle",
        "devhub-availability"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Admin setup comes before connection.",
      "detail": "Hosted MCP requires an External Client App with mcp_api and refresh_token scopes, an enabled server, and an authorized Salesforce user. Existing Connected Apps cannot replace the External Client App for this route.",
      "sourceIds": [
        "eca",
        "activate"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Check edition and API access first.",
      "detail": "API availability depends on edition; some editions need an add-on. The reviewed access guidance does not verify autonomous subscription purchase.",
      "sourceIds": [
        "editions"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Query and update permitted CRM records.",
      "detail": "Hosted SObject tools query and change CRM records under the authenticated user’s object, field, and sharing permissions. Start with SObject Reads; creation, updates, and deletion require a server that exposes those operations.",
      "sourceIds": [
        "sobject",
        "reads",
        "servers"
      ]
    }
  ],
  "routes": [
    {
      "name": "Salesforce hosted MCP",
      "description": "Connect an MCP client to the selected org and enabled server; SObject Reads exposes query and schema tools without record mutations.",
      "feature": "mcp-tools",
      "sourceIds": [
        "eca",
        "activate",
        "sobject",
        "reads",
        "connections"
      ]
    },
    {
      "name": "REST API integration",
      "description": "An authorized integration calls Salesforce APIs with an OAuth token.",
      "feature": "connectors",
      "sourceIds": [
        "quickstart",
        "editions"
      ]
    },
    {
      "name": "Salesforce CLI scratch orgs",
      "description": "Provision a disposable development org from an authorized Dev Hub, subject to its allocation.",
      "feature": "terminal",
      "sourceIds": [
        "scratch",
        "devhub"
      ]
    }
  ],
  "setup": [
    {
      "title": "Confirm the org and API entitlement",
      "actor": "Admin",
      "detail": "Choose production, sandbox, or a disposable development org. Check API access, the intended user’s permissions, and the org’s remaining API or scratch-org allocation."
    },
    {
      "title": "Enable a narrow MCP connection",
      "actor": "Admin",
      "detail": "Create an External Client App with mcp_api and refresh_token scopes; pre-authorize only the intended users and enable SObject Reads. Allow for app/server activation delays."
    },
    {
      "title": "Authorize the intended user and org",
      "actor": "You",
      "detail": "Complete the configured OAuth connection. Use the sandbox endpoint for sandbox and scratch orgs; Developer Edition uses the non-sandbox endpoint."
    },
    {
      "title": "Inspect schema and read ten records",
      "actor": "Agent",
      "detail": "Confirm the org, inspect permitted Opportunity fields, then retrieve at most ten open opportunities. Report record IDs and omitted or inaccessible fields before any separate write request."
    },
    {
      "title": "Set the connection’s lifetime",
      "actor": "Admin",
      "detail": "Choose the refresh-token policy and record how to revoke the ECA’s tokens from OAuth Usage. Disable an MCP server when the org should stop exposing that server."
    }
  ],
  "sources": [
    {
      "id": "quickstart",
      "title": "Connect REST API quickstart",
      "href": "https://developer.salesforce.com/docs/platform/connect-rest-api/guide/quickstart.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "eca",
      "title": "Create an External Client App",
      "href": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/create-external-client-app.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "activate",
      "title": "Activate MCP servers",
      "href": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/activate-mcp-servers.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "sobject",
      "title": "Hosted MCP SObject tools",
      "href": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/references/reference/sobject-all.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "editions",
      "title": "Salesforce editions with API access",
      "href": "https://help.salesforce.com/s/articleView?id=000005140&language=en_US&type=1",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "scratch",
      "title": "Salesforce CLI: create a scratch org",
      "href": "https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_org_create_scratch.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "devhub",
      "title": "Create an app with scratch orgs",
      "href": "https://trailhead.salesforce.com/content/learn/modules/sfdx_app_dev/sfdx_app_dev_create_app",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "reads",
      "title": "SObject Reads server",
      "href": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/sobject-reads.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "servers",
      "title": "Standard hosted MCP servers and permissions",
      "href": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/servers-reference.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "connections",
      "title": "Hosted MCP server connection troubleshooting",
      "href": "https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/connection-issues.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "scratch-lifecycle",
      "title": "Scratch-org lifetime and development scope",
      "href": "https://admin.salesforce.com/blog/2023/sandboxes-vs-scratch-orgs-and-how-to-use-them",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp-security",
      "title": "Hosted MCP access controls and token revocation",
      "href": "https://developer.salesforce.com/blogs/2026/06/how-to-secure-salesforce-hosted-mcp-servers",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-limits",
      "title": "API limits and usage monitoring",
      "href": "https://developer.salesforce.com/blogs/2024/11/api-limits-and-monitoring-your-api-usage",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "connect-limits",
      "title": "Current Connect REST API rate limits",
      "href": "https://developer.salesforce.com/docs/platform/connect-rest-api/guide/intro_rate_limits.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "devhub-availability",
      "title": "Enable Dev Hub in an eligible org",
      "href": "https://developer.salesforce.com/docs/platform/pkg2-dev/guide/sfdx-pkg-enable-devhub.html",
      "publisher": "Salesforce",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Salesforce? Setup, accounts and actions",
  "socialTitle": "Can my agent use Salesforce?",
  "socialDescription": "An agent can work with CRM records after an administrator enables the integration and the right user permissions are in place.",
  "description": "An agent can work with CRM records after an administrator enables the integration and the right user permissions are in place.",
  "llmSummary": "An agent can work with CRM records after an administrator enables the integration and the right user permissions are in place.",
  "audience": "People and agents evaluating product setup and account access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "salesforce",
    "products",
    "account-setup",
    "agent-access"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/salesforce",
  "previewImageAlt": "Can My Agent Use product guide for Salesforce: accounts, setup and actions.",
  "categorySlug": "crm",
  "bestFor": "Working with an existing CRM org that an administrator can configure.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Official hosted MCP supports separately enabled read and mutation servers. External Client App registration, user authorization, and org permissions apply.",
      "sourceIds": [
        "eca",
        "activate",
        "reads",
        "servers"
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
      "detail": "Salesforce publishes OAuth-based REST APIs; edition access applies.",
      "sourceIds": [
        "quickstart",
        "editions"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "Salesforce CLI supports scratch-org creation with an authorized Dev Hub.",
      "sourceIds": [
        "scratch"
      ]
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

## Can an agent create a Salesforce org?

**A development scratch org: conditionally, yes.** With terminal access and an already authorized Dev Hub, an agent can run the documented `sf org create scratch` command. The Dev Hub needs available allocation; creation requires an edition, definition file, or another supported configuration. This provisions a development environment. It does not establish that an agent can complete a new customer’s signup or purchase a production subscription. [Salesforce CLI reference](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_org_create_scratch.html)

Scratch orgs expire after seven days by default and can last at most 30 days. They are unsuitable as the permanent home for business records; preserve needed source and work before expiry. An authorized Dev Hub is required; Developer Edition signup is one option if you do not already have an eligible org. [Scratch-org lifecycle](https://admin.salesforce.com/blog/2023/sandboxes-vs-scratch-orgs-and-how-to-use-them), [Dev Hub eligibility](https://developer.salesforce.com/docs/platform/pkg2-dev/guide/sfdx-pkg-enable-devhub.html)

## “Add an account” needs one clarification

A Salesforce **Account record** represents a company or customer in the CRM. Creating that record is a data operation inside an existing org. Connecting your login, provisioning a scratch org, and buying a Salesforce subscription are separate tasks with different prerequisites. SObject tools can create and update records when the selected server and authenticated user permit those operations. [SObject tool reference](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/references/reference/sobject-all.html)

## What an administrator must enable

Hosted MCP requires an **External Client App**; a legacy Connected App is not interchangeable for this connection. Configure the `mcp_api` and `refresh_token` scopes, set the client’s redirect details, and authorize the intended users. An administrator can restrict access with pre-authorized permission sets instead of allowing every org user to connect. App creation can take up to 30 minutes to become operational. [External Client App setup](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/create-external-client-app.html)

MCP servers are disabled initially. Enable the required server in Setup’s API Catalog and allow up to two minutes for activation. A scratch-org evaluation has an extra app-registration constraint: Salesforce directs administrators to create the External Client App in a Dev Hub, package it, and install it in the scratch org. [Server activation](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/activate-mcp-servers.html), [Scratch-org app setup](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/create-external-client-app.html)

## Start with a CRM read

Choose **SObject Reads** for schema discovery, queries, and searches. Its tools cannot create, update, or delete records. Other SObject servers expose different mutation sets, and every call still follows the user’s object permissions, field visibility, and sharing rules. [Read server](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/sobject-reads.html), [Server permission model](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/servers-reference.html)

A useful first request is: “Confirm this org, inspect the Opportunity fields I can access, then list up to ten open opportunities with their names, stages, and record IDs.” Check the result before granting a separate write task. For sandbox or scratch orgs, choose the sandbox MCP endpoint; Developer Edition uses the non-sandbox endpoint. A wrong endpoint can look like an authentication failure. [Connection troubleshooting](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/connection-issues.html)

## Editions, quotas, and billing

Confirm the org’s API entitlement before selecting Salesforce for an agent workflow. Access varies by edition and may require an add-on. The reviewed documentation does not establish an autonomous paid-subscription checkout. [API availability by edition](https://help.salesforce.com/s/articleView?id=000005140&language=en_US&type=1)

For direct API workflows, inspect current allocation in Setup or the REST Limits resource. Most Connect REST calls now share the org’s 24-hour Platform API allocation; Chatter resources retain a separate hourly limit. Do not budget against a universal requests-per-minute number. These API limits do not establish a separate hosted-MCP pricing entitlement. [Usage monitoring](https://developer.salesforce.com/blogs/2024/11/api-limits-and-monitoring-your-api-usage), [Current Connect limits](https://developer.salesforce.com/docs/platform/connect-rest-api/guide/intro_rate_limits.html)

## Disconnect and choose an agent

An administrator can revoke individual or all External Client App tokens from **Setup → OAuth Usage**. Review the app’s refresh-token policy and disable an enabled MCP server when it should no longer be exposed. Token revocation and server activation are distinct controls. [Token revocation](https://developer.salesforce.com/blogs/2026/06/how-to-secure-salesforce-hosted-mcp-servers), [Activation controls](https://developer.salesforce.com/docs/platform/hosted-mcp-servers/guide/activate-mcp-servers.html)

Choose a [harness](/harnesses) with [MCP tools](/features/mcp-tools), [connectors](/features/connectors), or [terminal access](/features/terminal) for the route you intend to use. This guide records documentation review; no org creation, CRM mutation, or subscription purchase was performed.
