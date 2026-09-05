---
{
  "title": "Vercel",
  "slug": "vercel",
  "vendor": "Vercel",
  "category": "Cloud & deployment",
  "categorySlug": "cloud-deployment",
  "order": 14,
  "homepage": "https://vercel.com/",
  "aliases": [
    "Vercel CLI",
    "Vercel MCP",
    "preview deployment"
  ],
  "summary": "Deploy previews through official MCP, CLI or API access. Claimable previews and approved purchases have separate conditions.",
  "scope": "Vercel project hosting and account access. MCP is in Beta for approved clients; purchase tools have a gradual rollout. This is a documentation review, not a live deployment or checkout test.",
  "bestFor": "Shipping web previews and managing an existing deployment project.",
  "actions": [
    {
      "id": "sign-up",
      "status": "human-step",
      "summary": "Verify an account and claim the preview.",
      "detail": "Vercel Labs documents sandbox-specific no-auth deployment fallbacks that return preview and claim links. Normal signup uses email verification or a Git provider; the owner completes the account and ownership handoff.",
      "sourceIds": [
        "accounts",
        "claim-skill",
        "claim-ownership"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Authorize OAuth or provide a scoped token.",
      "detail": "Approve the remote MCP connection in a supported client, or provide API/CLI credentials. Project-scoped tokens limit resources to one project; team scope reaches every project in that team.",
      "sourceIds": [
        "mcp",
        "access-tokens"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "conditional",
      "summary": "Review the terms, then approve a purchase.",
      "detail": "MCP purchase tools require a quote, confirmation and a team payment method, and may not be enabled yet. The CLI also documents purchases of Pro, credits and domains.",
      "sourceIds": [
        "mcp-tools",
        "cli-buy"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Inspect projects and deploy approved changes.",
      "detail": "Use the CLI or REST API for deployment workflows, or the available MCP tools. Choose the intended project, team and deployment target before uploading code.",
      "sourceIds": [
        "cli-deploy",
        "api",
        "mcp"
      ]
    }
  ],
  "routes": [
    {
      "name": "Vercel MCP",
      "description": "Connect an approved client to https://mcp.vercel.com with OAuth over Streamable HTTP.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "name": "Vercel CLI",
      "description": "Deploy repository files, select a preview or production target, and inspect build status from a terminal agent.",
      "feature": "terminal",
      "sourceIds": [
        "cli-deploy",
        "claim-skill"
      ]
    },
    {
      "name": "Vercel REST API",
      "description": "Use bearer authentication for project and deployment operations; choose the narrowest suitable token scope.",
      "feature": "connectors",
      "sourceIds": [
        "api",
        "access-tokens"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose the owner and first task",
      "actor": "You",
      "detail": "Name the team, project and preview goal. For a claimable fallback, identify who will claim ownership before treating it as an ongoing deployment workflow."
    },
    {
      "title": "Authorize a suitable connection",
      "actor": "You",
      "detail": "Approve MCP OAuth in an eligible client, or create a token with the needed project or team scope and an expiry. Keep the token in the agent's secret storage."
    },
    {
      "title": "Start with inspection",
      "actor": "Agent",
      "detail": "Retrieve the named project's details and report its current deployment state. Propose the files and target for any deployment before changing resources."
    },
    {
      "title": "Approve the deployment and any charge",
      "actor": "You + agent",
      "detail": "Review the preview target, code, plan and function region. Approve a purchase separately after reviewing its quote or linked pricing, renewal terms and the team being charged."
    },
    {
      "title": "Verify the result and retire access",
      "actor": "You + agent",
      "detail": "Check build completion and the preview URL; finish any claim handoff. Remove temporary personal tokens by their token ID when the work ends."
    }
  ],
  "sources": [
    {
      "id": "accounts",
      "title": "Vercel account signup and login methods",
      "href": "https://vercel.com/docs/accounts",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "claim-skill",
      "title": "Vercel Labs deployment skill and no-auth fallbacks",
      "href": "https://github.com/vercel-labs/agent-skills/blob/main/skills/deploy-to-vercel/SKILL.md",
      "publisher": "Vercel Labs",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "claim-ownership",
      "title": "AI agent deployment ownership and claiming",
      "href": "https://vercel.com/kb/guide/ai-agents",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp",
      "title": "Vercel MCP availability, clients and authorization",
      "href": "https://vercel.com/docs/agent-resources/vercel-mcp",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "mcp-tools",
      "title": "Vercel MCP tools and purchase confirmation",
      "href": "https://vercel.com/docs/agent-resources/vercel-mcp/tools",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "access-tokens",
      "title": "Account, team and project access tokens",
      "href": "https://vercel.com/docs/accounts/access-tokens",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "api",
      "title": "Vercel REST API reference",
      "href": "https://vercel.com/docs/rest-api",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-deploy",
      "title": "Vercel CLI deployment targets and build output",
      "href": "https://vercel.com/docs/cli/deploy",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-buy",
      "title": "Vercel CLI purchases and confirmation options",
      "href": "https://vercel.com/docs/cli/buy",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "cli-tokens",
      "title": "Create, list and revoke Vercel personal tokens",
      "href": "https://vercel.com/docs/cli/tokens",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "hobby",
      "title": "Hobby plan use and included limits",
      "href": "https://vercel.com/docs/plans/hobby",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "regions",
      "title": "Function regions and plan limits",
      "href": "https://vercel.com/docs/functions/configuring-functions/region",
      "publisher": "Vercel",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Vercel? Accounts, deployments and purchases",
  "socialTitle": "Can my agent use Vercel?",
  "socialDescription": "Deploy previews through official MCP, CLI or API access. Claimable previews and approved purchases have separate conditions.",
  "description": "Deploy previews through official MCP, CLI or API access. Claimable previews and approved purchases have separate conditions.",
  "llmSummary": "Deploy previews through official MCP, CLI or API access. Claimable previews and approved purchases have separate conditions.",
  "audience": "People and agents evaluating product setup and account access.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "vercel",
    "products",
    "account-setup",
    "agent-access",
    "deployment"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/vercel",
  "previewImageAlt": "Can My Agent Use product guide for Vercel: accounts, setup and actions.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Vercel's remote MCP is in Beta on all plans, with OAuth and an approved-client requirement.",
      "sourceIds": [
        "mcp"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The reviewed sources establish MCP tools, but do not verify an MCP Apps interface for this product.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Vercel documents REST operations for projects, deployments and other account resources.",
      "sourceIds": [
        "api"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "The official CLI supports deployment and documented purchase workflows.",
      "sourceIds": [
        "cli-deploy",
        "cli-buy"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "Local source and configuration files are deployment inputs; a standalone file interface for managing the hosted account is not verified.",
      "sourceIds": []
    }
  ]
}
---

## Can a preview come before signup?

Vercel Labs' deployment skill documents no-auth fallbacks for specific Claude and Codex sandbox situations when the normal CLI route is unavailable. They return a preview URL and a claim URL. This supports a **preview before ownership handoff**; it does not establish general autonomous account creation. [Official deployment skill](https://github.com/vercel-labs/agent-skills/blob/main/skills/deploy-to-vercel/SKILL.md)

Normal signup uses an emailed six-digit code or authorization through a supported Git provider. Vercel's claim workflow asks the recipient to sign in, select the destination account or team, and complete the transfer. Our suggested handoff is to review the preview first, then claim it and configure ongoing access. [Account signup](https://vercel.com/docs/accounts) · [Claiming agent deployments](https://vercel.com/kb/guide/ai-agents)

## Connect the agent to the right resources

The remote endpoint `https://mcp.vercel.com` uses OAuth and Streamable HTTP. It is **Beta on all Vercel plans**, with access limited to clients Vercel has approved. Check the supported-client list before selecting a harness. Public documentation tools and authenticated project tools have different access requirements. [Vercel MCP setup](https://vercel.com/docs/agent-resources/vercel-mcp)

For API or CLI automation, select an expiring token for one project when the task permits. Project scope allows reads and writes within that project and denies team-level or user-level operations. Team scope covers all its projects; full-account scope reaches every team you belong to. Resource scope is not a read-only permission. A full-account API token still needs `teamId` for team resources; narrower tokens infer their scope. [Access-token boundaries](https://vercel.com/docs/accounts/access-tokens)

## Start with a read, then deploy a preview

Suggested first task: “Inspect this project's current deployment state and explain the proposed preview.” MCP offers `get_project` with explicit project and team identifiers. Its `deploy_to_vercel` tool accepts files and a required preview or production target. [MCP tools](https://vercel.com/docs/agent-resources/vercel-mcp/tools)

Before approving a deployment, review the files, destination and environment settings. With the CLI, `--target preview` makes the target explicit. A returned deployment URL is not proof of a successful build: `--no-wait` returns before completion. Inspect build status and open the resulting preview before promoting work to production. These are suggested steps, not actions tested by this catalog. [Deployment options](https://vercel.com/docs/cli/deploy) · [Inspecting deployment results](https://github.com/vercel-labs/agent-skills/blob/main/skills/deploy-to-vercel/SKILL.md)

## Can the agent buy services?

**Conditionally.** MCP purchases are rolling out gradually. `get_purchase_quote` is read-only; confirmation requires matching parameters, `confirm: true` and its five-minute `idempotencyKey`. A team payment method is required. Charges are immediate and non-refundable; Pro starts recurring billing. Some quotes link to pricing instead of returning a number, so review those terms before approval. Successful purchases return billing and proof links. [Purchase requirements](https://vercel.com/docs/agent-resources/vercel-mcp/tools)

The CLI also supports Pro, credits and domain purchases. Its `--yes` option skips confirmation for applicable subcommands; that flag cannot stand in for the owner's spending approval. [CLI purchasing](https://vercel.com/docs/cli/buy)

## Match the plan and function region to the app

Hobby is limited to personal, non-commercial use. An agent publishing a commercial application should resolve the suitable paid plan before launch. Most exhausted Hobby allowances require waiting until 30 days have passed; a working preview does not establish capacity for production traffic. [Hobby plan](https://vercel.com/docs/plans/hobby)

New projects default Vercel Functions to Washington, D.C. (`iad1`). The reviewed limits allow one function region on Hobby, five on Pro and all regions on Enterprise. Exceeding that allowance fails deployment before the build. Choose a location near the app's external data services. Function placement alone does not establish where every service in an application stores data. [Function region configuration](https://vercel.com/docs/functions/configuring-functions/region)

## Revoke temporary credentials after the task

Personal tokens can be listed and revoked by ID with `vercel tokens rm`. Keep that ID in the access handoff, separate from the secret value. Creating tokens through the CLI requires an existing classic token with account-level scope; a CLI OAuth login cannot mint one. Use the dashboard to provision the narrow credential instead of granting an agent broad access just to create its own token. [Token lifecycle](https://vercel.com/docs/cli/tokens)

Choose [MCP tools](/features/mcp-tools) for a supported remote client or [terminal access](/features/terminal) for CLI work. Compare the actual agent surface in the [harness catalog](/harnesses).
