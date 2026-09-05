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
      "detail": "Wrangler supports temporary accounts for preview deployments. A person claims the account to retain it; this is not unrestricted permanent account signup.",
      "sourceIds": [
        "preview"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Sign in or supply a scoped token.",
      "detail": "Wrangler opens an OAuth login flow. Cloudflare MCP also accepts scoped API tokens for automation.",
      "sourceIds": [
        "login",
        "mcp"
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
      "description": "Connect a remote MCP client to authorized account tools.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose preview or permanent account",
      "actor": "You + agent",
      "detail": "Use a temporary preview for evaluation, or authenticate an existing account for ongoing deployments."
    },
    {
      "title": "Deploy the preview",
      "actor": "Agent",
      "detail": "Run wrangler deploy --temporary with a supported Wrangler version; keep the claim link private."
    },
    {
      "title": "Claim and authorize",
      "actor": "You",
      "detail": "Complete the claim before its expiry. Configure separate authorization for future deployments."
    },
    {
      "title": "Set the spending boundary",
      "actor": "You",
      "detail": "Review the billing profile and approve paid services before enabling them."
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

## First useful task

Ask for a small Worker preview, inspect its URL, then claim it if you want to keep it. Temporary provisioning is a useful starting point, with a separate handoff to permanent ownership.

## Check your agent

Choose an agent with [terminal access](/features/terminal) for Wrangler or [MCP tools](/features/mcp-tools) for the MCP route. Confirm the exact surface in the [harness catalog](/harnesses).
