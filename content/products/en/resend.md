---
{
  "title": "Resend",
  "slug": "resend",
  "vendor": "Resend",
  "category": "Email & messaging",
  "order": 20,
  "homepage": "https://resend.com/",
  "aliases": [
    "transactional email",
    "email API",
    "Resend MCP",
    "Resend CLI"
  ],
  "summary": "Send and receive application email through Resend's hosted MCP server, REST API, or official CLI.",
  "scope": "The connected Resend team, verified sender domains, email content and recipients allowed by the selected OAuth grant or API key. Sending is an external side effect; delivery is asynchronous and must be verified with the email record or webhook events.",
  "actions": [
    {
      "id": "sign-up",
      "status": "human-step",
      "summary": "A person creates the Resend account and accepts its terms.",
      "detail": "Resend's signup page supports email and password, Google, or GitHub. The page asks the person to accept Resend's Terms, Acceptable Use, and Privacy Policy. Resend says every account, including Free, has immediate production access with no sandbox or approval wait; DNS verification is still required before sending from a custom domain. This review found no evidence that an agent can independently complete signup, identity checks, or domain ownership.",
      "sourceIds": [
        "signup",
        "production-approval"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "The account owner authorizes OAuth or supplies a deliberately scoped API key.",
      "detail": "The hosted MCP endpoint is https://mcp.resend.com/mcp and uses Resend OAuth in a browser. Resend's OAuth 2.1 flow requires PKCE and supports pre-registration, client metadata documents, and Dynamic Client Registration; `emails:send` covers sending routes, while `full_access` is required for other API routes. A non-browser host can send an API key as a Bearer token. API keys are either `sending_access` (optionally restricted to a domain) or `full_access`; create or copy a key only in an approved secret store. The user can revoke an OAuth grant in Team settings. API keys do not expire automatically and must be deleted or replaced manually.",
      "sourceIds": [
        "remote-mcp",
        "oauth",
        "oauth-client",
        "api-keys",
        "api-key-create"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "human-step",
      "summary": "A team member chooses a plan and approves billing in Resend.",
      "detail": "Resend publishes Free, Pro, Scale, and Enterprise transactional plans. The reviewed pricing material documents dashboard billing and plan limits, but does not establish autonomous checkout or subscription changes by an agent. A plan does not replace sender-domain verification or authorization for a particular team.",
      "sourceIds": [
        "pricing",
        "billing"
      ]
    },
    {
      "id": "use-product",
      "status": "conditional",
      "summary": "An authorized agent can prepare, send, inspect, and track email when the sender and credential permit it.",
      "detail": "The MCP server and REST API cover sending, retrieval, domains, contacts, templates, broadcasts, logs, webhooks, and more; the official CLI exposes the API surface as structured terminal commands. A send call returns an email ID and means Resend accepted the request. It does not prove that the recipient's mail server accepted the message: `email.sent` means Resend will attempt delivery, while `email.delivered` means delivery to the recipient's mail server. Use a webhook or retrieve the email record to read the resulting `last_event`.",
      "sourceIds": [
        "remote-mcp",
        "api-send",
        "api-get",
        "events",
        "webhooks"
      ]
    }
  ],
  "routes": [
    {
      "name": "Resend hosted MCP",
      "description": "Connect an MCP host to https://mcp.resend.com/mcp over Streamable HTTP. The hosted server opens a Resend OAuth consent screen; a headless client can pass a Resend API key as a Bearer token. Its documented coverage includes emails, received emails, templates, contacts, broadcasts, automations, domains, segments, suppressions, topics, API keys, webhooks, logs, and more.",
      "feature": "mcp-tools",
      "sourceIds": [
        "remote-mcp",
        "mcp-repo"
      ]
    },
    {
      "name": "Resend REST API",
      "description": "Call https://api.resend.com with an API key or an OAuth access token. `POST /emails` accepts a sender, up to 50 recipients, subject, text or HTML, attachments, tags, templates, and an optional idempotency key; `GET /emails/:id` returns the sent record and its current `last_event`.",
      "feature": "connectors",
      "sourceIds": [
        "api-send",
        "api-get",
        "oauth"
      ]
    },
    {
      "name": "Official Resend CLI",
      "description": "Install the official `resend` CLI, authenticate with `resend login`, `--api-key`, or `RESEND_API_KEY`, and use commands such as `emails send`, `emails get`, `domains list`, `logs get`, and `webhooks listen`. Piped and `--json` modes provide machine-readable output and errors.",
      "feature": "terminal",
      "sourceIds": [
        "cli",
        "cli-repo"
      ]
    }
  ],
  "setup": [
    {
      "title": "Name the sender, recipient, and purpose",
      "actor": "You",
      "detail": "Give the agent one intended sender address or verified domain, one recipient or test scenario, the subject and content boundary, and whether the task may send anything. Treat recipient addresses and message content as sensitive data. Keep the first task to a single message and an explicit test recipient."
    },
    {
      "title": "Verify a domain you own",
      "actor": "You",
      "detail": "Add a domain or subdomain in Resend and copy the generated DNS records to the authoritative DNS provider. Resend requires SPF and DKIM for verification; DMARC is optional but recommended. The domain guide recommends subdomains to isolate reputation. After verification, any address at that domain may be used as a sender without separately creating that mailbox. Sending-region choice is a domain option; the reviewed material does not establish a universal region default or regional availability guarantee."
    },
    {
      "title": "Choose and authorize the narrowest credential",
      "actor": "You + agent",
      "detail": "For hosted MCP, connect https://mcp.resend.com/mcp and inspect the browser consent screen. For a send-only integration, request OAuth `emails:send` or create an API key with `sending_access` and a domain restriction. Use `full_access` only for approved domain, contact, template, log, webhook, or account-management tasks. Resend shows a newly created API key only once; keep it in an environment variable or secret manager rather than source code or prompts."
    },
    {
      "title": "Read setup before attempting a send",
      "actor": "Agent",
      "detail": "A `sending_access` API key can send only; it cannot list domains or retrieve sent email records. For setup inspection and readback, use a separately approved `full_access` key, an OAuth grant with `full_access`, or the human dashboard. If only a send-only key is available, prefer the official CLI's documented `resend emails send --dry-run` to validate the final payload without an API call. This review did not make a live API or MCP call."
    },
    {
      "title": "Approve one bounded test send",
      "actor": "You",
      "detail": "A send is an external side effect and needs your explicit approval after reviewing the final `from`, `to`, subject, body, attachments, schedule, and idempotency key. During development, Resend documents special `resend.dev` test addresses such as `delivered@resend.dev` and `bounced@resend.dev`; test messages count against quota. The default `resend.dev` sender is restricted to the account owner's email, so sending to other real recipients requires a verified domain."
    },
    {
      "title": "Read back delivery and retire access",
      "actor": "You + agent",
      "detail": "Record the returned email ID. Retrieve `GET /emails/:id` or use the corresponding MCP/CLI operation and report `last_event`, recipient, sender, subject, and timestamps. For durable status, register an HTTPS webhook for `email.sent`, `email.delivered`, `email.bounced`, `email.failed`, and `email.complained` as appropriate; verify its signing secret and handle at-least-once, possibly out-of-order delivery using `svix-id` and event timestamps. Revoke OAuth from Team settings or POST the refresh token to Resend's revoke endpoint. Delete or rotate API keys and remove local CLI credentials with `resend logout`."
    }
  ],
  "sources": [
    {
      "id": "signup",
      "title": "Create a Resend account",
      "href": "https://resend.com/signup",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "remote-mcp",
      "title": "Remote MCP Server",
      "href": "https://resend.com/changelog/remote-mcp-server",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-repo",
      "title": "Resend MCP Server (pinned repository revision)",
      "href": "https://github.com/resend/resend-mcp/tree/59d2380516e44f27ec07a9d2b6c148d2b98c62b6",
      "publisher": "Resend / GitHub",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth",
      "title": "OAuth Support",
      "href": "https://resend.com/changelog/oauth-support",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth-client",
      "title": "Building an OAuth client for Resend",
      "href": "https://resend.com/docs/guides/building-a-resend-oauth-client",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-keys",
      "title": "Manage API keys",
      "href": "https://resend.com/docs/dashboard/api-keys/introduction",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-key-create",
      "title": "Create API key",
      "href": "https://resend.com/docs/api-reference/api-keys/create-api-key",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-send",
      "title": "Send Email",
      "href": "https://resend.com/docs/api-reference/emails/send-email",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-get",
      "title": "Retrieve Sent Email",
      "href": "https://resend.com/docs/api-reference/emails/retrieve-email",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "domains",
      "title": "Verified Domains",
      "href": "https://resend.com/docs/dashboard/domains/introduction",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "test-emails",
      "title": "Send Test Emails",
      "href": "https://resend.com/docs/dashboard/emails/send-test-emails",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "test-domain-error",
      "title": "403 Error Using resend.dev Domain",
      "href": "https://resend.com/docs/knowledge-base/403-error-resend-dev-domain",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pricing",
      "title": "Pricing",
      "href": "https://resend.com/pricing",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "billing",
      "title": "In-App Billing",
      "href": "https://resend.com/changelog/in-app-billing",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "production-approval",
      "title": "Does Resend require production approval?",
      "href": "https://resend.com/docs/knowledge-base/does-resend-require-production-approval",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "limits",
      "title": "What are Resend account quotas and limits?",
      "href": "https://resend.com/docs/knowledge-base/account-quotas-and-limits",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "usage-limits",
      "title": "Usage Limits",
      "href": "https://resend.com/docs/api-reference/rate-limit",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "webhooks",
      "title": "Managing Webhooks",
      "href": "https://resend.com/docs/webhooks/introduction",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events",
      "title": "Event Types",
      "href": "https://resend.com/docs/webhooks/event-types",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "cli",
      "title": "Resend CLI",
      "href": "https://resend.com/docs/cli",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "cli-agents",
      "title": "Resend CLI for AI Agents",
      "href": "https://resend.com/docs/cli-agents",
      "publisher": "Resend",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "cli-repo",
      "title": "Resend CLI (pinned repository revision)",
      "href": "https://github.com/resend/resend-cli/tree/d32d2f906334eee71b8cf3079976f5a6137d2bb9",
      "publisher": "Resend / GitHub",
      "reviewedAt": "2026-09-05"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Resend? MCP, API and CLI email setup",
  "socialTitle": "Can my agent use Resend?",
  "socialDescription": "Send and verify application email with Resend's MCP server, API, or CLI.",
  "description": "Send and verify application email with Resend's MCP server, API, or CLI.",
  "llmSummary": "Resend provides an official hosted MCP server with OAuth, a REST API, an official CLI, and a local MCP package. A human must create or authorize the account, verify a sender domain, choose a credential boundary, and approve sends. The API's send response is acceptance, not delivery; read the email record or webhook events for delivery status.",
  "audience": "People and agents evaluating email service setup, permissions, sending, and delivery verification.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "resend",
    "email",
    "transactional-email",
    "mcp",
    "api",
    "cli",
    "agent-access"
  ],
  "updated": "2026-09-05",
  "published": "2026-09-05",
  "canonicalPath": "/products/resend",
  "previewImageAlt": "Can My Agent Use product guide for Resend: email setup and agent access.",
  "categorySlug": "email-delivery",
  "bestFor": "Transactional email with delivery tracking.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Resend operates https://mcp.resend.com/mcp as a hosted Streamable HTTP MCP server with OAuth; its official repository also documents a self-hosted `resend-mcp` package with stdio and HTTP transports. The documented server covers email, domains, contacts, templates, broadcasts, logs, webhooks, and other Resend resources.",
      "sourceIds": [
        "remote-mcp",
        "mcp-repo"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "Resend's reviewed MCP sources document tools and Streamable HTTP or stdio transports, but do not establish an MCP Apps resource, interactive widget contract, or client rendering support. Resend dashboard features and the MCP tool surface should not be treated as MCP Apps evidence.",
      "sourceIds": [
        "remote-mcp",
        "mcp-repo"
      ]
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Resend documents a REST API at https://api.resend.com. OAuth `emails:send` is a send-only scope, `full_access` covers other routes, and API keys can be `sending_access` with an optional domain restriction or `full_access`.",
      "sourceIds": [
        "oauth",
        "api-keys",
        "api-key-create",
        "api-send"
      ]
    },
    {
      "kind": "cli",
      "status": "official",
      "detail": "Resend publishes the official CLI and its repository. It supports API-key authentication, machine-readable JSON output, email send/retrieve commands, domain and API-key management, logs, and webhook listening; this review did not install or run it.",
      "sourceIds": [
        "cli",
        "cli-repo"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "The official CLI accepts local HTML files, React Email files, and attachment paths for a send, but the reviewed sources do not establish a local Resend data store or offline delivery path. See the CLI route and body for the documented local-input behavior.",
      "sourceIds": [
        "cli"
      ]
    }
  ]
}
---

## Start with a read, then approve one test send

Resend is an email delivery service whose agent routes now sit beside its dashboard. The hosted MCP server can be connected from an MCP client at `https://mcp.resend.com/mcp`; it uses OAuth in a browser and can use a Bearer API key for a headless host. The official local `resend-mcp` package supports stdio by default and an HTTP transport when you want to self-host the MCP process. The reviewed sources do not establish an MCP Apps widget contract, so an MCP tool connection should not be presented as an interactive Resend dashboard replacement. [Remote MCP Server](https://resend.com/changelog/remote-mcp-server), [Resend MCP Server](https://github.com/resend/resend-mcp/tree/59d2380516e44f27ec07a9d2b6c148d2b98c62b6).

The safest first task is to inspect setup and prepare a single test. Ask the agent to list the intended domain, confirm it is verified for sending, show the selected sender and credential boundary, and draft the exact `from`, `to`, subject, body, and any attachments. A send-only credential cannot perform that domain or email readback; use an approved `full_access` connection or the dashboard for those reads. If only a send-only key is available, use the CLI's `resend emails send --dry-run` with the final fields to validate the payload without sending or expanding the credential. If you approve a test send, use one of Resend's documented test addresses, such as `delivered@resend.dev` or `bounced@resend.dev`, and label the test when useful with a `+scenario` suffix. Resend says these test messages count against quota. The default `resend.dev` sender is restricted to testing with the account owner's address; Resend separately documents its special test recipients. To reach other real recipients, use a verified domain you own. [Send Test Emails](https://resend.com/docs/dashboard/emails/send-test-emails), [403 Error Using resend.dev Domain](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).

For the API, the bounded equivalent is `POST https://api.resend.com/emails` with `from`, `to`, `subject`, and `text` or `html`. The `to` field accepts at most 50 recipients and the response contains an email ID. Pass an idempotency key for a retryable request; Resend documents a 24-hour lifetime for those keys. Then retrieve `GET https://api.resend.com/emails/:id` and report the returned `last_event`. The CLI has equivalent `resend emails send` and `resend emails get <id>` commands with JSON output. These examples describe documented routes; this review did not send an email. [Send Email](https://resend.com/docs/api-reference/emails/send-email), [Retrieve Sent Email](https://resend.com/docs/api-reference/emails/retrieve-email), [Resend CLI](https://resend.com/docs/cli).

## Domain, credential, and delivery boundaries

For sending to other real recipients, verify a domain the team owns; the default test sender has separate restrictions. The generated DNS setup uses SPF and DKIM; DMARC is optional. Resend recommends a sending subdomain to isolate reputation, and the domain settings include an email sending region choice. After verification, an address at the domain can be used as the sender without creating that mailbox in Resend. The DNS records and the sender domain are organization-level choices that a domain owner or administrator should approve. [Verified Domains](https://resend.com/docs/dashboard/domains/introduction).

OAuth is the best fit for a hosted connection where the person should see and approve a grant. Resend's OAuth 2.1 flow uses PKCE; its OAuth guide recommends a pre-registered client or Client ID Metadata Document where possible, with Dynamic Client Registration available when the client cannot host metadata. Request `emails:send` for the send-only routes (`POST /emails` and sending a broadcast); Resend documents `full_access` for every other API route. Access tokens expire after 15 minutes, refresh tokens rotate on use, and a user can revoke the grant in Team settings or through the OAuth revoke endpoint. For API-key connections, `sending_access` permits only sends and can be restricted to one domain; `full_access` can create, delete, get, and update resources. Resend shows an API key only once and keys do not expire automatically, so deletion and rotation are the revocation controls. [OAuth Support](https://resend.com/changelog/oauth-support), [Building an OAuth client for Resend](https://resend.com/docs/guides/building-a-resend-oauth-client), [Manage API keys](https://resend.com/docs/dashboard/api-keys/introduction), [Create API key](https://resend.com/docs/api-reference/api-keys/create-api-key).

The send response and the first event are different facts. `email.sent` means the API request succeeded and Resend will attempt delivery. `email.delivered` means Resend delivered the message to the recipient's mail server. `email.bounced`, `email.failed`, `email.delivery_delayed`, `email.complained`, and `email.suppressed` describe later outcomes. To receive these events, register an HTTPS webhook and verify its signing secret. Resend documents at-least-once delivery, no ordering guarantee, and a `svix-id` header that can be used for de-duplication; read the event timestamp when ordering matters. [Event Types](https://resend.com/docs/webhooks/event-types), [Managing Webhooks](https://resend.com/docs/webhooks/introduction).

## Limits and plan choice

Resend's current transactional plans include Free at 3,000 emails per month with a 100-email daily limit; Pro and Scale tiers increase the monthly allowance and remove the daily limit, with overage rules depending on the plan. Multiple `To`, `CC`, or `BCC` recipients count separately. The current pricing page lists three custom domains on Free, ten on Pro, and 1,000 on Scale; webhook endpoints are limited to one, five, and ten respectively, while standard data retention is 30 days on those tiers. The pricing page should be checked again before a purchase because plan prices and included limits can change. [Pricing](https://resend.com/pricing), [What are Resend account quotas and limits?](https://resend.com/docs/knowledge-base/account-quotas-and-limits).

The current account quota documentation says the default rate limit is 10 requests per second per team, shared by all API keys and domains, with `429` responses and `retry-after` guidance. Free accounts have a 100-email daily and 3,000-email monthly transactional quota; paid plans have monthly quotas, pay-as-you-go overages capped at five times the monthly quota by default, and no daily quota. Both sent and received emails count toward the account quota. A region, plan, or quota should be treated as unresolved when the account's own dashboard or contract differs from these public defaults. [Usage Limits](https://resend.com/docs/api-reference/rate-limit), [What are Resend account quotas and limits?](https://resend.com/docs/knowledge-base/account-quotas-and-limits).

## CLI and local files

The official CLI accepts an API key through the `--api-key` flag, the `RESEND_API_KEY` environment variable, or saved credentials from `resend login`; use a secret manager to supply the environment variable when you do not want the CLI to persist credentials. Agents and CI receive structured JSON when output is piped or `--json` is supplied. A local HTML file, React Email file, or attachment path can be handed to `resend emails send`, but the command still performs a remote Resend send and therefore needs the same sender, recipient, quota, and approval checks. The pinned CLI README documents `emails send --dry-run` and `broadcasts create --dry-run` as local payload validation without an API call; other write commands do not gain a general dry-run. The website describes system credential storage, while the pinned README describes a credentials file with owner-only permissions, so verify the installed version's storage before saving a key. [Resend CLI](https://resend.com/docs/cli), [pinned CLI README](https://github.com/resend/resend-cli/tree/d32d2f906334eee71b8cf3079976f5a6137d2bb9), [Resend CLI for AI Agents](https://resend.com/docs/cli-agents).

## Compare email workflows

For an inbox identity that an agent can provision and use for ongoing conversations, read the [AgentMail guide](/products/agentmail). For Postmark's local MCP server, API/SMTP routes, account approval and Sandbox Servers, read the [Postmark guide](/products/postmark). Compare the [email services](/products?category=email-delivery) by the task, credential boundary and evidence you need after a send.
