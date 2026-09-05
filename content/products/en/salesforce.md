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
      "detail": "Salesforce CLI can provision a development scratch org using an authorized Dev Hub. Initial Developer Edition signup and paid production-org creation are separate flows.",
      "sourceIds": [
        "scratch",
        "devhub",
        "quickstart"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Admin setup comes before connection.",
      "detail": "Hosted MCP requires an External Client App for OAuth and an administrator to enable the selected MCP servers in the org.",
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
      "detail": "The hosted SObject tools support record operations under the authenticated user’s object, field, and sharing permissions. Choose a narrower server if only reads are needed.",
      "sourceIds": [
        "sobject"
      ]
    }
  ],
  "routes": [
    {
      "name": "Salesforce hosted MCP",
      "description": "An MCP client connects to the servers enabled for your org.",
      "feature": "mcp-tools",
      "sourceIds": [
        "eca",
        "activate",
        "sobject"
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
      "title": "Choose an org with API access",
      "actor": "Admin",
      "detail": "Confirm the edition, API entitlement, and user permissions; use a development org for evaluation."
    },
    {
      "title": "Enable the connection",
      "actor": "Admin",
      "detail": "For hosted MCP, register an External Client App and enable the required servers in API Catalog."
    },
    {
      "title": "Authorize the right user",
      "actor": "You",
      "detail": "Complete the configured OAuth flow for the intended org."
    },
    {
      "title": "Try a scoped CRM task",
      "actor": "Agent",
      "detail": "Query a small set of records first. Add write operations only within the authorized user’s access."
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
      "detail": "Hosted MCP servers require app registration and org activation.",
      "sourceIds": [
        "eca",
        "activate"
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

## First useful task

Ask for a small list of opportunities with only the fields needed for your task. Confirm the org and returned records before requesting updates.

## “Add an account” has two meanings

Connecting a Salesforce org authorizes access to the service. Creating an **Account record** adds a company to the CRM. The latter is a data operation subject to object permissions; it does not create a Salesforce subscription.

## Check your agent

Verify [MCP tool support](/features/mcp-tools) or the [connector route](/features/connectors) for your exact [agent harness](/harnesses). Org policy and client configuration still apply.

## Can an agent create a Salesforce org?

**A development scratch org: conditionally, yes.** An agent with terminal access and an authorized Dev Hub can use the documented `sf org create scratch` command. Dev Hub allocation and permissions apply. This does not prove the agent can sign up for a new paid production organization or bypass the initial account setup.
