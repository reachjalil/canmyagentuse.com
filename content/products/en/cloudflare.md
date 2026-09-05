---
{
  "title": "Cloudflare",
  "slug": "cloudflare",
  "vendor": "Cloudflare",
  "category": "Cloud & deployment",
  "order": 1,
  "homepage": "https://www.cloudflare.com/",
  "aliases": [
    "Workers",
    "Wrangler",
    "deploy a website"
  ],
  "summary": "An agent can start with a temporary Worker preview, then use your claimed account through CLI or MCP access.",
  "scope": "Workers previews and account tooling. Other Cloudflare services have their own permissions and billing requirements.",
  "actions": [
    {
      "id": "sign-up",
      "status": "conditional",
      "summary": "Start a preview before signing in.",
      "detail": "Wrangler 4.102.0+ can provision a temporary preview after the required policy acceptance. The owner must complete the claim within 60 minutes; permanent signup and ongoing authorization remain separate.",
      "sourceIds": [
        "preview"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Sign in or supply a scoped token.",
      "detail": "Choose permissions during MCP OAuth, use a scoped API token for automation, or authorize Wrangler. Its default login requests every available scope unless you narrow the selection.",
      "sourceIds": [
        "login",
        "mcp",
        "tokens"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Autonomous checkout is not verified.",
      "detail": "Paid products use a billing profile and payment method. The reviewed billing overview does not establish an end-to-end agent purchase flow.",
      "sourceIds": [
        "billing"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Deploy Workers and use authorized tools.",
      "detail": "Wrangler provides the deployment route; Cloudflare MCP exposes account operations within the granted permissions. Preview credentials have limited capabilities.",
      "sourceIds": [
        "preview",
        "mcp"
      ]
    }
  ],
  "routes": [
    {
      "name": "Wrangler CLI",
      "description": "Build and deploy from an agent with terminal access.",
      "feature": "terminal",
      "sourceIds": [
        "preview",
        "login"
      ]
    },
    {
      "name": "Cloudflare MCP",
      "description": "Connect to https://mcp.cloudflare.com/mcp using Streamable HTTP and selected OAuth permissions or a bearer API token.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose the account and task",
      "actor": "You",
      "detail": "Select a temporary preview for evaluation or an existing account for ongoing work. Identify the Worker and any required resources before granting access."
    },
    {
      "title": "Limit the authorization",
      "actor": "You",
      "detail": "Choose MCP OAuth permissions or token permissions and account/zone resources for the task. Use read access for inspection; approve write permissions separately."
    },
    {
      "title": "Verify access before changing resources",
      "actor": "Agent",
      "detail": "For Wrangler, run whoami to confirm the account. For MCP, retrieve only the selected configuration and propose a change before executing it."
    },
    {
      "title": "Complete the ownership handoff",
      "actor": "You",
      "detail": "For a temporary account, complete the claim within 60 minutes, keep its bearer claim link private, then configure separate ongoing access."
    },
    {
      "title": "Review costs and disconnect",
      "actor": "You",
      "detail": "Check the applicable Workers plan and bound resources before approving deployment. Revoke the specific token or Wrangler OAuth access when the task is finished."
    }
  ],
  "sources": [
    {
      "id": "preview",
      "title": "Temporary accounts and claim deployments",
      "href": "https://developers.cloudflare.com/workers/platform/claim-deployments/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "login",
      "title": "Wrangler login",
      "href": "https://developers.cloudflare.com/workers/wrangler/commands/general/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp",
      "title": "Cloudflare MCP servers",
      "href": "https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "billing",
      "title": "Billing overview",
      "href": "https://developers.cloudflare.com/billing/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "tokens",
      "title": "Create and scope a Cloudflare API token",
      "href": "https://developers.cloudflare.com/fundamentals/api/get-started/create-token/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "pricing",
      "title": "Workers pricing and included limits",
      "href": "https://developers.cloudflare.com/workers/platform/pricing/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api-limits",
      "title": "Cloudflare API rate limits",
      "href": "https://developers.cloudflare.com/fundamentals/api/reference/limits/",
      "publisher": "Cloudflare",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Cloudflare? Setup, accounts and actions",
  "socialTitle": "Can my agent use Cloudflare?",
  "socialDescription": "An agent can start with a temporary Worker preview, then use your claimed account through CLI or MCP access.",
  "description": "An agent can start with a temporary Worker preview, then use your claimed account through CLI or MCP access.",
  "llmSummary": "An agent can start with a temporary Worker preview, then use your claimed account through CLI or MCP access.",
  "audience": "People and agents evaluating product setup and account access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "cloudflare",
    "products",
    "account-setup",
    "agent-access"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/cloudflare",
  "previewImageAlt": "Can My Agent Use product guide for Cloudflare: accounts, setup and actions.",
  "categorySlug": "cloud-deployment",
  "bestFor": "Deploying web applications with a CLI or hosted MCP tools.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Cloudflare maintains authenticated MCP servers.",
      "sourceIds": [
        "mcp"
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
      "detail": "The preview flow and account services expose REST endpoints.",
      "sourceIds": [
        "preview",
        "mcp"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "Wrangler supports deployment and OAuth login.",
      "sourceIds": [
        "login",
        "preview"
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

## Pick the connection for the task

Use **Wrangler** for a repository deployment and **MCP** for account inspection or supported changes. Cloudflare's API MCP endpoint is `https://mcp.cloudflare.com/mcp`; it accepts OAuth with selected permissions or user/account API tokens. Its `search` and `execute` tools expose API operations, and product-specific servers offer narrower tool sets. New clients should use Streamable HTTP. An MCP connection still needs permission for the requested resource. [Cloudflare MCP servers](https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/)

## What the temporary preview really includes

Wrangler 4.102.0+ supports `wrangler deploy --temporary`. Cloudflare requires policy acceptance; the intended owner must **complete the claim within 60 minutes**. Unclaimed resources are deleted. The claim URL is a bearer credential: keep it private. Supported previews include Workers on workers.dev, up to 1,000 static files of 5 MiB each, and one D1 database up to 100 MB. Claiming preserves supported resources but does not authorize future deployments. [Temporary accounts and claim deployments](https://developers.cloudflare.com/workers/platform/claim-deployments/)

## Grant only the access the task needs

API tokens can restrict permissions, account or zone resources, expiry, and client IPs. For a configuration review, select the relevant **Read** permission and specific resource; deployment needs the applicable write permissions. A token that can read one zone does not authorize another. The exact set depends on the products the Worker uses. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)

Wrangler's default OAuth login asks for all available scopes. Inspect `wrangler login --scopes-list` and select the needed set with `--scopes`. Remote environments can use `wrangler login --device` when the installed version supports it; a person still approves the authorization. [Wrangler authentication commands](https://developers.cloudflare.com/workers/wrangler/commands/general/)

## Know the plan and limits

Workers Free includes **100,000 dynamic requests per day** with **10 ms of CPU time per invocation**. Workers Paid has a **$5 USD monthly minimum per account**, with usage charges beyond included allowances. These are the reviewed 2026-09-04 terms; check current pricing and any bound storage or compute products before approving work. A plan's availability is not evidence that an agent can complete checkout. [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)

The general API limit is **1,200 requests per five minutes per user/account token**, with cumulative user limits and some endpoint-specific limits. On HTTP 429, follow `retry-after` and stop retrying aggressively. This is an API-control limit, separate from traffic to a deployed Worker. [API rate limits](https://developers.cloudflare.com/fundamentals/api/reference/limits/)

## A first useful task, then disconnect

Our suggested first task for an existing account is: “Confirm the selected account and inspect the named Worker's configuration. Explain the proposed change before deploying.” With Wrangler, `wrangler whoami` checks the authenticated identity; it does not deploy anything. For a new preview, ask for a small Worker, inspect its URL, then complete the ownership handoff if you want to keep it. These are suggested workflows, not live tests by this catalog. [Wrangler commands](https://developers.cloudflare.com/workers/wrangler/commands/general/) · [Preview lifecycle](https://developers.cloudflare.com/workers/platform/claim-deployments/)

After using Wrangler OAuth, `wrangler logout` invalidates the current OAuth token and removes stored credentials. An API token requires separate deletion in the Cloudflare dashboard; deleting a client configuration alone is not token revocation. [Disconnect Wrangler or its API token](https://developers.cloudflare.com/workers/wrangler/commands/general/#logout)

Choose an agent with [terminal access](/features/terminal) for Wrangler or [MCP tools](/features/mcp-tools) for MCP. Confirm the exact surface in the [harness catalog](/harnesses). Product-specific regional or data-location requirements need a separate check; this guide does not establish worldwide availability for every Cloudflare service.
