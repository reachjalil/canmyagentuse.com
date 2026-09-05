---
{
  "title": "Postmark",
  "slug": "postmark",
  "locale": "en",
  "seoTitle": "Can my agent use Postmark? MCP, API and email delivery",
  "description": "Use Postmark through its official MCP server, REST API or SMTP, with verified senders and separate delivery evidence.",
  "socialTitle": "Can an agent use Postmark?",
  "socialDescription": "MCP, API or SMTP with verified senders and delivery evidence.",
  "llmSummary": "Postmark has an experimental Postmark Labs MCP server, official REST Email API, SMTP and delivery-webhook routes for an existing approved account. The MCP package is a local stdio server using a full server token, with both read and write tools; choose a client approval policy and a human must verify a sender or domain and select Live or Sandbox. MCP Apps, CLI and live local-file support remain unverified.",
  "audience": "People evaluating whether an AI agent can safely send and verify transactional email through Postmark.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "email",
    "transactional-email",
    "smtp",
    "api",
    "webhooks",
    "mcp"
  ],
  "updated": "2026-09-05",
  "published": "2026-09-05",
  "vendor": "Postmark",
  "category": "Email & messaging",
  "categorySlug": "email-delivery",
  "order": 22,
  "homepage": "https://postmarkapp.com/",
  "aliases": [
    "transactional email",
    "email delivery",
    "SMTP",
    "Message Streams",
    "Sender Signatures",
    "Postmark MCP"
  ],
  "summary": "Manage transactional email through Postmark’s official MCP server, REST API or SMTP after account and sender setup.",
  "scope": "Existing Postmark accounts and servers, including the experimental Postmark Labs MCP server. Sending depends on a confirmed sender signature or verified domain, the selected Live or Sandbox server, and approval for recipients outside domains you control. The MCP server uses a full server token for one server; MCP Apps, a separate CLI, and a live local-file workspace remain unverified.",
  "bestFor": "Approved transactional sends with delivery evidence.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Postmark Labs publishes an experimental MCP server, and Postmark's current MCP page points to the official ActiveCampaign repository. The pinned v2.1.1 revision exposes 24 tools over local stdio, uses a Node.js 20+ process and a full server token, and includes read-only, mutating and destructive operations.",
      "sourceIds": [
        "mcp-lp",
        "mcp-labs",
        "mcp-repo",
        "mcp-warning"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The documented API, SMTP and webhook pages do not establish an interactive MCP Apps surface. A server that can be called through MCP would not by itself prove an MCP App.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Postmark documents a REST Email API, account and server management APIs, Message Streams APIs and webhook APIs. Server tokens send and search within a server; account tokens manage account-level resources.",
      "sourceIds": [
        "api-overview",
        "email-api",
        "account-guide",
        "webhooks"
      ]
    },
    {
      "kind": "cli",
      "status": "unknown",
      "detail": "No Postmark-maintained command-line client was verified. A script or an official language library called from a terminal does not establish a separate product CLI.",
      "sourceIds": []
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "The reviewed documentation describes HTTP, SMTP and webhook interfaces, not a local-file workspace that can operate the live Postmark account.",
      "sourceIds": []
    }
  ],
  "actions": [
    {
      "id": "sign-up",
      "status": "human-step",
      "summary": "Create and confirm the Postmark account yourself.",
      "detail": "Postmark's getting-started flow assumes a free account and a confirmed email. An Account Owner must submit the account for manual approval before sending to recipients outside domains you own; the reviewed docs do not establish autonomous signup or approval.",
      "sourceIds": [
        "get-started",
        "approval"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Choose a server and grant the narrowest credential.",
      "detail": "A human selects an existing server, Live or Sandbox mode, and a verified sender or domain. Use a server token for sending, a stream SMTP token for SMTP when appropriate, and an Account Token only for account-level administration such as domains or sender signatures. Put any token in the agent's secret store and rotate or delete it from Postmark when access should end.",
      "sourceIds": [
        "servers",
        "sandbox-server",
        "api-overview",
        "smtp",
        "account-guide",
        "domains",
        "signatures",
        "token-cycle"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "human-step",
      "summary": "Upgrade or cancel billing in the Postmark account.",
      "detail": "Postmark documents a Free Developer plan with 100 emails per month and no overages, paid plans starting at 10,000 emails per month, and paid overage billing. The reviewed material describes account billing controls, not an agent checkout flow; a human should choose the plan and approve billing changes.",
      "sourceIds": [
        "pricing"
      ]
    },
    {
      "id": "use-product",
      "status": "conditional",
      "summary": "Use MCP, API or SMTP, then verify delivery separately.",
      "detail": "With an approved account, a confirmed From address, suitable server or stream credential and an explicitly approved recipient and message, an agent can prepare and submit transactional email. A 200 response and MessageID show that Postmark accepted the request; a delivery webhook means the destination server accepted it, not that it reached the inbox. Keep broadcast streams and external recipients behind the same human approval gate.",
      "sourceIds": [
        "get-started",
        "email-api",
        "smtp",
        "delivery",
        "mcp-repo"
      ]
    }
  ],
  "routes": [
    {
      "name": "Postmark Email API",
      "description": "POST a message to https://api.postmarkapp.com/email with X-Postmark-Server-Token. Supply a confirmed From address, recipients, subject and body; specify MessageStream when it is not the default outbound transactional stream.",
      "feature": "connectors",
      "sourceIds": [
        "api-overview",
        "email-api",
        "get-started"
      ]
    },
    {
      "name": "Postmark MCP server",
      "description": "Run the official ActiveCampaign package as a local stdio MCP server with Node.js 20+, POSTMARK_SERVER_TOKEN, DEFAULT_SENDER_EMAIL and DEFAULT_MESSAGE_STREAM. The 24 tools cover sends, templates, message search, delivery diagnostics, bounces, suppressions, stats, server info and webhooks; the token grants the full permissions of its Postmark server.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp-lp",
        "mcp-labs",
        "mcp-repo"
      ]
    },
    {
      "name": "Postmark SMTP",
      "description": "Use smtp.postmarkapp.com for transactional mail or smtp-broadcasts.postmarkapp.com for broadcast mail over STARTTLS on port 25, 2525 or 587. SMTP can use a server API token or a per-stream SMTP token, and SMTP must be enabled in server settings.",
      "feature": "connectors",
      "sourceIds": [
        "smtp",
        "streams"
      ]
    },
    {
      "name": "Delivery webhooks and message history",
      "description": "Configure a webhook for a server and Message Stream, then correlate delivery or bounce events with the returned MessageID. The receiving server's acceptance is useful evidence but is not an inbox guarantee.",
      "feature": "connectors",
      "sourceIds": [
        "delivery",
        "webhooks"
      ]
    }
  ],
  "setup": [
    {
      "title": "Pick the intended server and mode",
      "actor": "You",
      "detail": "Confirm the Postmark account, server, Message Stream and whether the server is Live or Sandbox. A server's type is fixed at creation; a Sandbox Server processes messages without delivering them to a real recipient."
    },
    {
      "title": "Verify the sender or domain",
      "actor": "You",
      "detail": "Confirm a Sender Signature through its email, or add a domain and complete its DNS checks for SPF, DKIM and Return-Path. Only confirmed sender signatures can be used in From; the account and domain APIs require an Account Token and account-owner access."
    },
    {
      "title": "Complete approval for live recipients",
      "actor": "You",
      "detail": "Before manual approval, Postmark limits sending to addresses on domains you own or have added and verified. Only the Account Owner can submit approval. Do not treat a successful test request as approval for external delivery."
    },
    {
      "title": "Choose the credential and transport",
      "actor": "You + agent",
      "detail": "For the REST Email API, give the agent a server token scoped to the chosen server. For SMTP, use the server API token or a stream-specific SMTP Token. Keep the Account Token out of sending code: it is for account-level administration and is available to the owner or admin roles described by Postmark."
    },
    {
      "title": "Start with read-only MCP inspection",
      "actor": "You + agent",
      "detail": "If using MCP, pin the official @activecampaign/postmark-mcp revision and run it locally on Node.js 20+ with a dedicated server token. Ask first for getServerInfo and a narrow searchOutboundMessages query. The server token has the full permissions of that server and there are no per-tool scopes; keep send, template edits, suppression changes and webhook changes behind explicit client confirmation."
    },
    {
      "title": "Run a bounded safe first task",
      "actor": "Agent",
      "detail": "Use a Sandbox Server with its server token, or use POSTMARK_API_TEST to validate request fields without delivery. With the test token, report status, ErrorCode and message; with a Sandbox Server token, retain any returned MessageID. Redact the credential. No live send belongs in this first task."
    },
    {
      "title": "Approve and verify any live send",
      "actor": "You + agent",
      "detail": "If you later request a live send, name the exact recipient or recipients, From address, message, stream and timing, and approve that side effect. After submission, retain the MessageID, inspect the delivery or bounce webhook, and report what the receiving server accepted."
    },
    {
      "title": "Revoke and monitor",
      "actor": "You",
      "detail": "For a server token, Postmark documents the exact cycle: open the server's API Tokens tab, generate a new token, then delete the old token. Account and SMTP token lifecycle controls should be handled by the account owner in Postmark. Revoke the secret at its source; disconnecting an agent session alone is not evidence that the Postmark credential was revoked. Watch webhook status and the documented 429 response rather than assuming an unstated fixed requests-per-second quota."
    }
  ],
  "sources": [
    {
      "id": "introduction",
      "title": "Introduction",
      "href": "https://postmarkapp.com/developer/",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-lp",
      "title": "Explore Postmark's MCP Server – Test Email API Without Code",
      "href": "https://postmarkapp.com/lp/mcp",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-labs",
      "title": "Postmark Labs: Teaching AI to speak email with our new MCP server",
      "href": "https://postmarkapp.com/blog/postmark-labs-teaching-ai-to-speak-email-with-our-new-mcp-server",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-repo",
      "title": "Official Postmark MCP Server (pinned v2.1.1 revision)",
      "href": "https://github.com/ActiveCampaign/postmark-mcp/tree/63ef055861820b12b748697339488d564d754a5c",
      "publisher": "ActiveCampaign / GitHub",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-warning",
      "title": "Information Regarding Malicious \"postmark-mcp\" Package",
      "href": "https://postmarkapp.com/blog/information-regarding-malicious-postmark-mcp-package",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "get-started",
      "title": "Get started",
      "href": "https://postmarkapp.com/developer/get-started",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "api-overview",
      "title": "Overview",
      "href": "https://postmarkapp.com/developer/api/overview",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "email-api",
      "title": "Email API",
      "href": "https://postmarkapp.com/developer/api/email-api",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "smtp",
      "title": "Sending email with SMTP",
      "href": "https://postmarkapp.com/developer/user-guide/send-email-with-smtp",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "approval",
      "title": "How does the account approval process work?",
      "href": "https://postmarkapp.com/support/article/1084-how-does-the-account-approval-process-work",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "sandbox",
      "title": "Sandbox mode",
      "href": "https://postmarkapp.com/developer/user-guide/sandbox-mode/",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "sandbox-server",
      "title": "Server sandbox mode",
      "href": "https://postmarkapp.com/developer/user-guide/sandbox-mode/server-sandbox-mode",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "servers",
      "title": "Managing servers",
      "href": "https://postmarkapp.com/developer/user-guide/managing-your-account/managing-servers",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "account-guide",
      "title": "Managing your account",
      "href": "https://postmarkapp.com/developer/user-guide/managing-your-account",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "signatures",
      "title": "Managing sender signatures",
      "href": "https://postmarkapp.com/developer/user-guide/managing-your-account/managing-sender-signatures",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "domains",
      "title": "Domains API",
      "href": "https://postmarkapp.com/developer/api/domains-api",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "streams",
      "title": "Message Streams API",
      "href": "https://postmarkapp.com/developer/api/message-streams-api",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "streams-howto",
      "title": "How to create and send through Message Streams",
      "href": "https://postmarkapp.com/support/article/how-to-create-and-send-through-message-streams",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "delivery",
      "title": "Delivery webhook",
      "href": "https://postmarkapp.com/developer/webhooks/delivery-webhook",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "webhooks",
      "title": "Webhooks API",
      "href": "https://postmarkapp.com/developer/api/webhooks-api",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pricing",
      "title": "How does Monthly Pricing work?",
      "href": "https://postmarkapp.com/support/article/1107-how-does-monthly-pricing-work",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "testing",
      "title": "Best practices for testing your emails through Postmark",
      "href": "https://postmarkapp.com/support/article/1213-best-practices-for-testing-your-emails-through-postmark",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "token-cycle",
      "title": "How to cycle a Server API Token",
      "href": "https://postmarkapp.com/support/article/1293-how-to-cycle-a-server-api-token",
      "publisher": "Postmark",
      "reviewedAt": "2026-09-05"
    }
  ]
}
---

Postmark is a transactional email service whose useful agent boundary is clear: a person creates the account, proves the sender, chooses a server and credential, and decides which messages may leave the system. The agent can then prepare a request, submit it through the documented MCP, API or SMTP route, and collect delivery evidence. See Postmark's [introduction](https://postmarkapp.com/developer/) and [getting-started guide](https://postmarkapp.com/developer/get-started).

## Account and sender setup

Start with an existing account and server. When a server is created, Postmark lets it be Live or Sandbox; the type is fixed afterwards. A Sandbox Server runs the message through Postmark without delivering it to a real recipient, while its events can still appear as delivered in the product. That makes it the right boundary for an agent's first request, but sandbox traffic still counts toward the monthly volume. Read the [sandbox guide](https://postmarkapp.com/developer/user-guide/sandbox-mode/) and [server sandbox documentation](https://postmarkapp.com/developer/user-guide/sandbox-mode/server-sandbox-mode).

Before a live message, confirm a Sender Signature by email or verify the sending domain's DNS records. Postmark requires a confirmed sender in `From`; the [sender-signatures guide](https://postmarkapp.com/developer/user-guide/managing-your-account/managing-sender-signatures) recommends domain verification for SPF and DKIM. New accounts can send only to addresses on domains they own or have added and verified until the Account Owner completes Postmark's [manual approval process](https://postmarkapp.com/support/article/1084-how-does-the-account-approval-process-work). Approval is an account decision, not something an agent should try to bypass.

## Credentials, streams and routes

The distinction between credentials matters. Postmark's [API overview](https://postmarkapp.com/developer/api/overview) describes `X-Postmark-Server-Token` for server-level work and `X-Postmark-Account-Token` for account-level work. A server token is the sending credential for the Email API. Account tokens belong to account administration such as domains and sender signatures, and Postmark documents owner or administrator restrictions. The [SMTP guide](https://postmarkapp.com/developer/user-guide/send-email-with-smtp) supports a server API token or a stream-specific SMTP Token; it does not make an Account Token an SMTP credential. Store whichever secret is selected in the agent's secret manager, and remove or rotate it in Postmark when the connection should end.

The [Message Streams documentation](https://postmarkapp.com/developer/api/message-streams-api) separates transactional, broadcast and inbound streams. The default `outbound` stream is transactional; the API or SMTP request should name another stream explicitly. Broadcast mail has different unsubscribe and recipient expectations, so an agent should not silently switch a transactional request to it.

For the [Email API](https://postmarkapp.com/developer/api/email-api), send `POST /email` to `https://api.postmarkapp.com` with the server token, confirmed `From`, recipients, subject, body and optional `MessageStream`. Postmark documents up to 50 combined To/Cc/Bcc recipients for a single email and up to 500 messages for a batch request; payload limits include 10 MB for a single Email API request and 50 MB for a batch. SMTP uses Postmark's transactional or broadcast host over STARTTLS on ports 25, 2525 or 587. A terminal script using an HTTP library can call these interfaces, but this review did not find a maintained Postmark CLI.

## What success means

The first response is not delivery. A successful Email API response returns a `MessageID`, which identifies Postmark's accepted request. Configure a [delivery webhook](https://postmarkapp.com/developer/webhooks/delivery-webhook) for the relevant server and stream, then correlate its per-recipient event with that ID. Postmark defines delivery as the destination email server accepting the message; that is useful evidence, but it does not prove inbox placement. Keep bounce events and webhook status in the result. The API documents a `429` response when rate limits are exceeded, but the reviewed sources do not establish a universal requests-per-second quota, so an agent should honor the response instead of assuming one.

## Plans and approval boundaries

Postmark's [monthly-pricing explanation](https://postmarkapp.com/support/article/1107-how-does-monthly-pricing-work) says the Free Developer plan includes 100 emails per month with no overages, while paid plans start at 10,000 emails per month and charge for overages. Transactional, broadcast, sandbox and inbound messages count toward volume, and Cc/Bcc recipients count individually. Plan changes, card details, cancellation and approval belong to a human account owner; no agent checkout route was established in this review.

## MCP, MCP Apps and local files

Postmark Labs calls its MCP server experimental, while the current [Postmark MCP page](https://postmarkapp.com/lp/mcp) identifies the official `@activecampaign/postmark-mcp` repository and lists 24 tools. The pinned [v2.1.1 repository revision](https://github.com/ActiveCampaign/postmark-mcp/tree/63ef055861820b12b748697339488d564d754a5c) is a local stdio server for Node.js 20+ with `POSTMARK_SERVER_TOKEN`, `DEFAULT_SENDER_EMAIL` and `DEFAULT_MESSAGE_STREAM`. Its tools include sends, templates, message search, `diagnoseDelivery`, bounces, suppressions, stats, server info and webhooks. The configured server token carries the full permissions of that server; there are no per-tool credential scopes, so the safe first call is `getServerInfo` followed by a narrow `searchOutboundMessages` query.

The MCP server automatically enables open and click tracking on sends, which the caller should disclose when that behavior matters. Tool annotations can help a supporting client gate read-only, mutating and destructive operations, but annotations do not reduce the token's server-level authority. Postmark's [security alert](https://postmarkapp.com/blog/information-regarding-malicious-postmark-mcp-package) warns against the unrelated unscoped `postmark-mcp` npm package; use the official repository and pinned revision instead. MCP Apps remain unverified: an MCP tool server and its local stdio transport do not establish an interactive MCP Apps resource. A separate Postmark CLI and live local-file workspace also remain unverified; invoking an MCP package with `npx` is not evidence of a product CLI.

## Safe first task

Ask the agent to validate one small message request in a Sandbox Server with that server's token, or validate request fields with `POSTMARK_API_TEST`. With the test token, report the response status, `ErrorCode` and message; it is not tied to an account or server activity, and it does not deliver. With a Sandbox Server token, a returned `MessageID` can be retained while still treating the event as non-inbox evidence. If a live send is later requested, the user must approve the exact recipient or recipients, message, From address, stream and timing. After the request, the agent should report the delivery or bounce webhook event and distinguish receiving-server acceptance from inbox placement.

This is a documentation review, not a live send or account test. Postmark's own [API overview](https://postmarkapp.com/developer/api/overview) describes the test token and its response behavior; the [testing guidance](https://postmarkapp.com/support/article/1213-best-practices-for-testing-your-emails-through-postmark) also recommends sandbox or test paths. No provider account or credential was used here.

## Compare email workflows

[Resend](/products/resend) documents a hosted MCP server with OAuth and an official CLI. [AgentMail](/products/agentmail) focuses on provisioned agent inboxes and two-way conversations. Use the [email category](/products?category=email-delivery) to compare their setup, permissions and delivery evidence.
