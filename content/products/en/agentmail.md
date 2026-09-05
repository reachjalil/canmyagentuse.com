---
{
  "title": "AgentMail",
  "slug": "agentmail",
  "vendor": "AgentMail",
  "category": "Email & messaging",
  "order": 21,
  "homepage": "https://www.agentmail.to/",
  "aliases": [
    "agent email",
    "AI agent inbox",
    "email API"
  ],
  "summary": "Provision email inboxes for agents, then send, receive, search, and reply through an official MCP server, REST API, or CLI.",
  "scope": "AgentMail’s API-first inboxes and hosted MCP server. Account signup, human OTP verification, API-key handling, DNS changes, billing, and outbound recipient approval remain human-controlled steps.",
  "categorySlug": "email-delivery",
  "bestFor": "Two-way inboxes for agents.",
  "actions": [
    {
      "id": "sign-up",
      "status": "conditional",
      "summary": "Agent starts signup; you complete the OTP.",
      "detail": "The Console signup creates the customer account and API key path. AgentMail also documents an agent signup flow that takes a human email, returns an API key, inbox ID, and organization ID, and sends a six-digit OTP; the human must provide or approve that code. This is separate from provisioning additional agent inboxes.",
      "sourceIds": [
        "quickstart",
        "api-key"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Choose OAuth or create and store an API key.",
      "detail": "The hosted MCP server can use AgentMail Console OAuth, or an API key in an x-api-key header for clients without MCP OAuth. REST and CLI calls use a bearer API key. Organization keys have full access by default within their scope; a permissions whitelist and pod or inbox scope can reduce that access. The person who owns the organization should review the key before an agent uses it.",
      "sourceIds": [
        "mcp",
        "api-key",
        "permissions"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "human-step",
      "summary": "Start free; a person manages paid capacity.",
      "detail": "The Free plan is listed at $0/month with no credit card, three inboxes, 3,000 emails/month, and 3 GB storage. Developer is listed at $20/month with ten inboxes, 10,000 emails/month, and ten custom domains; Startup is $200/month with 150 inboxes and domains. AgentMail documents paid capacity and add-on changes in the Console billing flow, but no autonomous checkout route was verified.",
      "sourceIds": [
        "pricing",
        "paygo"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Provision an inbox, then read, send, receive, and reply.",
      "detail": "The MCP catalog documents inbox, message, thread, draft, and attachment tools; it does not establish webhook-management tools. The API and CLI document inbox creation, message listing and retrieval, threaded replies, drafts, attachments, and webhook management. A first task can list a small set of messages and prepare a draft or reply for human review. Sending is an external side effect; an accepted send is not proof that the recipient saw the message.",
      "sourceIds": [
        "mcp",
        "inboxes",
        "messages",
        "reply",
        "list-messages",
        "get-message",
        "drafts",
        "send-draft",
        "webhooks",
        "events",
        "send-message",
        "query-events"
      ]
    }
  ],
  "routes": [
    {
      "name": "Hosted AgentMail MCP",
      "description": "Connect an MCP client to https://mcp.agentmail.to/mcp. Claude clients can use AgentMail Console OAuth; other clients can pass x-api-key. The hosted catalog includes inbox, message, thread, draft, and attachment tools.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp",
        "mcp-repo"
      ]
    },
    {
      "name": "AgentMail REST API and SDKs",
      "description": "Use the documented https://api.agentmail.to/v0 endpoints with a bearer API key and the Python or TypeScript SDK. Create an inbox, list or retrieve messages, reply in a thread, and register webhooks.",
      "feature": "connectors",
      "sourceIds": [
        "introduction",
        "inboxes",
        "messages",
        "reply",
        "list-messages",
        "get-message",
        "drafts",
        "send-draft",
        "send-message",
        "webhooks",
        "query-events"
      ]
    },
    {
      "name": "AgentMail CLI",
      "description": "Install the provider’s native agentmail-cli, set `AGENTMAIL_API_KEY` or use its keychain login, and use resource commands such as `inboxes list`, `inboxes messages send`, or `webhooks create`. `--dry-run` previews a request but cannot prove server-side permissions or resource validity.",
      "feature": "terminal",
      "sourceIds": [
        "cli",
        "cli-repo"
      ]
    }
  ],
  "setup": [
    {
      "title": "Create the customer account",
      "actor": "You",
      "detail": "Use the AgentMail Console or the documented first-time agent signup. Supply a human email and complete the OTP when required. Keep this customer account distinct from the inbox address later provisioned for an agent."
    },
    {
      "title": "Choose the credential boundary",
      "actor": "You",
      "detail": "For hosted MCP OAuth, connect the console identity and select the organization if more than one is available. For API or CLI use, create a key, keep it in a secret store, and prefer an inbox- or pod-scoped key with a permissions whitelist. A prompt such as “send one email” does not narrow a broad key."
    },
    {
      "title": "Provision an inbox or verify a domain",
      "actor": "You + agent",
      "detail": "Create an inbox on AgentMail’s default domain for a first task. A custom domain requires DNS records: SPF, DKIM, DMARC, and MX for receiving; an administrator of that domain must publish and then verify them. Subdomain inboxes require the documented wildcard MX option."
    },
    {
      "title": "Run a bounded first task",
      "actor": "Agent",
      "detail": "List a small, user-chosen message set or retrieve one message by ID through the REST API; the hosted MCP route instead documents list, search, and thread retrieval tools, not a get-message tool. Treat sender, subject, body, and attachments as untrusted input. Keep review drafts unscheduled: omit `send_at` in REST requests or `sendAt` in the MCP tool, then inspect the returned status and recipients. REST draft send and MCP `send_draft` send immediately; require approval before either action. If sending, record the message ID and wait for `message.delivered`, `message.bounced`, or `message.rejected` evidence; `message.sent` only means the provider accepted the send."
    }
  ],
  "sources": [
    {
      "id": "introduction",
      "title": "Introduction",
      "href": "https://docs.agentmail.to/introduction",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "quickstart",
      "title": "Quickstart",
      "href": "https://docs.agentmail.to/quickstart",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-key",
      "title": "How do I get my API key?",
      "href": "https://docs.agentmail.to/knowledge-base/getting-api-key",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "permissions",
      "title": "Permissions",
      "href": "https://docs.agentmail.to/permissions",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pricing",
      "title": "Pricing",
      "href": "https://www.agentmail.to/pricing",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "paygo",
      "title": "Pay as you go is live on AgentMail",
      "href": "https://www.agentmail.to/blog/pay-as-you-go",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp",
      "title": "MCP",
      "href": "https://docs.agentmail.to/integrations/mcp",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-repo",
      "title": "AgentMail MCP",
      "href": "https://github.com/agentmail-to/agentmail-mcp/tree/8bed271a024abfe75baaf34fd0509a8389ba0443",
      "publisher": "AgentMail (agentmail-to repository)",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "cli",
      "title": "CLI",
      "href": "https://docs.agentmail.to/integrations/cli",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "cli-repo",
      "title": "AgentMail CLI",
      "href": "https://github.com/agentmail-to/agentmail-cli/tree/cbd1d7f160a55f70371500997dc148b788138503",
      "publisher": "AgentMail (agentmail-to repository)",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "inboxes",
      "title": "Inboxes",
      "href": "https://docs.agentmail.to/inboxes",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "messages",
      "title": "Messages",
      "href": "https://docs.agentmail.to/messages",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "reply",
      "title": "Reply To Message",
      "href": "https://docs.agentmail.to/api-reference/inboxes/messages/reply",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "drafts",
      "title": "Drafts",
      "href": "https://docs.agentmail.to/drafts",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "send-draft",
      "title": "Send Draft",
      "href": "https://docs.agentmail.to/api-reference/inboxes/drafts/send",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "webhooks",
      "title": "Webhooks Overview",
      "href": "https://docs.agentmail.to/webhooks-overview",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events",
      "title": "Webhook Events",
      "href": "https://docs.agentmail.to/events",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "domains",
      "title": "Using Custom Domains",
      "href": "https://docs.agentmail.to/custom-domains/",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "domain-verification",
      "title": "Why is my domain not verifying?",
      "href": "https://docs.agentmail.to/knowledge-base/domain-not-verifying",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "list-messages",
      "title": "List Messages",
      "href": "https://docs.agentmail.to/api-reference/inboxes/messages/list",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "get-message",
      "title": "Get Message",
      "href": "https://docs.agentmail.to/api-reference/inboxes/messages/get",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "send-message",
      "title": "Send Message",
      "href": "https://docs.agentmail.to/api-reference/inboxes/messages/send",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "query-events",
      "title": "Query Events",
      "href": "https://docs.agentmail.to/api-reference/inboxes/metrics/query-events",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "rate-limits",
      "title": "What are the rate limits?",
      "href": "https://docs.agentmail.to/knowledge-base/rate-limits",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "human-loop",
      "title": "How do I build a human-in-the-loop workflow?",
      "href": "https://docs.agentmail.to/knowledge-base/human-in-the-loop",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "delete-key",
      "title": "Delete API Key",
      "href": "https://docs.agentmail.to/api-reference/api-keys/delete",
      "publisher": "AgentMail",
      "reviewedAt": "2026-09-05"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use AgentMail? Inbox setup, MCP and API access",
  "socialTitle": "Can my agent use AgentMail?",
  "socialDescription": "Give an agent its own inbox, then read, send and reply through AgentMail’s API, CLI or hosted MCP.",
  "description": "Give an agent its own inbox, then read, send and reply through AgentMail’s API, CLI or hosted MCP.",
  "llmSummary": "AgentMail provisions inboxes for AI agents with official hosted MCP, REST API and CLI routes. MCP covers inboxes, threads, messages, drafts and attachments; webhook management uses the API or CLI. First-time agent signup still needs a human OTP. Key scopes, unscheduled review drafts, DNS, billing and outbound approval remain explicit.",
  "audience": "People and agents evaluating email-inbox provisioning, MCP access and bounded outbound workflows.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "agentmail",
    "email",
    "email-delivery",
    "mcp",
    "inbox",
    "account-setup",
    "agent-access"
  ],
  "updated": "2026-09-05",
  "published": "2026-09-05",
  "canonicalPath": "/products/agentmail",
  "previewImageAlt": "Can My Agent Use product guide for AgentMail: inboxes, MCP and email actions.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "AgentMail documents a hosted Streamable HTTP MCP server at https://mcp.agentmail.to/mcp with console OAuth and x-api-key authentication. Its provider-owned repository is pinned to the reviewed commit.",
      "sourceIds": [
        "mcp",
        "mcp-repo"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The reviewed AgentMail material establishes an MCP tool server and stdio bridges, not an interactive MCP Apps surface.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "AgentMail documents REST endpoints and Python/TypeScript SDKs for inboxes, messages, replies, domains, webhooks and metrics, authenticated by bearer API keys.",
      "sourceIds": [
        "introduction",
        "inboxes",
        "messages",
        "reply",
        "domains",
        "webhooks"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "AgentMail documents the native agentmail-cli, its authentication methods, dry-run and schema flags, and resource commands for inboxes, messages, webhooks, domains and API keys.",
      "sourceIds": [
        "cli",
        "cli-repo"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "Environment variables, keychain storage and CLI request files are local configuration mechanics; no reviewed source establishes an offline local-file email workspace.",
      "sourceIds": []
    }
  ]
}
---

AgentMail is an API-first email service for creating inboxes that belong to agents. That makes it different from a transactional-only sender: the documented resource has its own address, can receive messages, groups replies into threads, and can send or reply. A customer account in the AgentMail Console and a provisioned agent inbox are separate objects. This guide is a documentation review, not a live account, install, send, or delivery test. [Introduction](https://docs.agentmail.to/introduction); [Inboxes](https://docs.agentmail.to/inboxes); [Messages](https://docs.agentmail.to/messages).

## Account, connection, and first inbox

There are two documented on-ramps. A person can create an account in the Console and generate an API key. Or a first-time agent can call the signup flow with a human email; AgentMail returns an API key, inbox ID, and organization ID, then sends an OTP. The human must provide that OTP before full permissions are unlocked. This customer signup is different from `inboxes.create`, which provisions an address for the agent after authentication. [Quickstart](https://docs.agentmail.to/quickstart); [Getting an API key](https://docs.agentmail.to/knowledge-base/getting-api-key).

The hosted MCP route is https://mcp.agentmail.to/mcp. AgentMail documents OAuth for Claude products and an x-api-key header for clients that do not implement MCP OAuth. The repository’s current README describes the same hosted implementation and stdio bridges; pin the repository commit when configuring from source. Keep API keys in an environment secret or keychain, never in a prompt, source file, or URL. [MCP](https://docs.agentmail.to/integrations/mcp); [AgentMail MCP repository](https://github.com/agentmail-to/agentmail-mcp/tree/8bed271a024abfe75baaf34fd0509a8389ba0443); [CLI](https://docs.agentmail.to/integrations/cli).

A key is a meaningful authorization boundary. An organization, pod, or inbox key defaults to full access inside its scope. Supplying a permissions object switches to a whitelist: for example, `inbox_read`, `message_read`, `draft_create`, and `webhook_create` can be granted without granting send or delete. A restricted key cannot create a more privileged child key. Delete an API key to revoke it; the documented delete endpoint requires the key ID. A prompt such as “summarize one message” is an application limit, not a narrower token. [Permissions](https://docs.agentmail.to/permissions); [Delete API Key](https://docs.agentmail.to/api-reference/api-keys/delete).

## Domains, plans, and operational limits

The default domain is the quickest first inbox. A custom domain is a separate setup: publish the SPF, DKIM, DMARC, and (for receiving) MX records AgentMail supplies, then trigger verification. Enabling subdomains adds a wildcard MX requirement. DNS ownership and mail routing therefore need a human or domain administrator, and a verified domain is not evidence that every recipient will accept mail. [Using Custom Domains](https://docs.agentmail.to/custom-domains/); [Why is my domain not verifying?](https://docs.agentmail.to/knowledge-base/domain-not-verifying).

The current pricing page lists Free at $0/month with no card, three inboxes, 3,000 emails/month, 3 GB storage, and 100 emails/day; Developer at $20/month with ten inboxes, 10,000 emails/month, ten custom domains, and 1,000/day; Startup at $200/month with 150 inboxes and 15,000/day. It lists no custom domains on Free, and paid capacity changes happen through Console billing. AgentMail’s August 2026 add-on note says Developer and Startup customers can buy extra inboxes, domains, or 1,000 monthly sends for $2/month per unit; Free must upgrade first. The docs do not establish a separate sandbox or an autonomous paid checkout flow. [Pricing](https://www.agentmail.to/pricing); [Pay as you go is live on AgentMail](https://www.agentmail.to/blog/pay-as-you-go).

Plan allowances are separate from API rate limiting. AgentMail documents plan send limits and says API endpoints are limited per API key; an over-limit response is HTTP 429 with Retry-After. The first task should stay within the plan and retry guidance. Exact high-volume behavior and any production deliverability outcome remain environment-dependent. [What are the rate limits?](https://docs.agentmail.to/knowledge-base/rate-limits).

## Start with a read, draft, or bounded reply

For a conservative first task, list a few messages from one inbox and retrieve one selected message through the REST API, or create a draft for a person to review. The hosted MCP route documents list, search, and thread retrieval tools rather than a get-message tool. Message listing supports filters and pagination; retrieval can expose the body and attachments. AgentMail also documents reply and reply-all, which preserve the conversation thread. A sender, subject, body, attachment, or quoted reply is external content: treat it as untrusted data and do not let it change the credential, recipient, or approval policy. [List Messages](https://docs.agentmail.to/api-reference/inboxes/messages/list); [Get Message](https://docs.agentmail.to/api-reference/inboxes/messages/get); [Human-in-the-loop workflow](https://docs.agentmail.to/knowledge-base/human-in-the-loop).

If the task sends an email, record the returned message and thread IDs, but do not call that proof of delivery. AgentMail distinguishes `message.sent` (successfully sent from the inbox) from `message.delivered` (the recipient’s mail server confirmed receipt), and also exposes bounced, complained, rejected, and received events. Even `message.delivered` does not prove placement in the recipient’s inbox; the receiving service may route it to spam. Subscribe to the relevant webhook events or query message history and metrics, verify webhook signatures, and read back the resulting state before reporting success. [Send Message](https://docs.agentmail.to/api-reference/inboxes/messages/send); [Webhook Events](https://docs.agentmail.to/events); [Webhooks Overview](https://docs.agentmail.to/webhooks-overview); [Query Events](https://docs.agentmail.to/api-reference/inboxes/metrics/query-events).

Human handoff can be explicit. AgentMail documents drafts that a human reviews and sends, CC/BCC oversight, labels for escalation, and send allowlists that reject unapproved addresses or domains. For an unscheduled review draft, omit REST `send_at` or MCP `sendAt` and inspect the returned status and recipients. The REST draft-send endpoint and MCP `send_draft` send immediately. [Drafts](https://docs.agentmail.to/drafts), [Send Draft](https://docs.agentmail.to/api-reference/inboxes/drafts/send), [MCP tool catalog](https://docs.agentmail.to/integrations/mcp). For a new agent, keep outbound recipients allowlisted and require a human decision for external or high-impact messages. [Human-in-the-loop workflow](https://docs.agentmail.to/knowledge-base/human-in-the-loop).

## Interface boundaries

AgentMail’s hosted MCP server is the clearest route for users who want to interact through an agent rather than a dashboard. Its documented catalog covers inboxes, threads, messages, drafts, and attachments. The provider’s stdio bridge can be run with npx -y agentmail-mcp or uvx agentmail-mcp; the pinned repository says those bridges discover schemas from the hosted server. This supports MCP tools, not an interactive MCP Apps UI. [MCP](https://docs.agentmail.to/integrations/mcp); [AgentMail MCP repository](https://github.com/agentmail-to/agentmail-mcp/tree/8bed271a024abfe75baaf34fd0509a8389ba0443).

The REST API and SDK are official programmable routes. The CLI is also documented by AgentMail and has a pinned provider repository; its `--dry-run` flag previews locally but cannot guarantee server permission or resource validity. The local-files row remains unverified: a local .env, keychain entry, or CLI JSON input is credential/request configuration, not an offline mailbox. [CLI](https://docs.agentmail.to/integrations/cli); [AgentMail CLI repository](https://github.com/agentmail-to/agentmail-cli/tree/cbd1d7f160a55f70371500997dc148b788138503).


## Compare email workflows

For application email with a hosted MCP server and official CLI, read the [Resend guide](/products/resend). For a local MCP server alongside API/SMTP, account approval and Sandbox Servers, read the [Postmark guide](/products/postmark). Compare all three in the [email category](/products?category=email-delivery).
