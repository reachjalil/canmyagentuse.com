---
title: Agent signup — the catalog snapshot
slug: agent-signup
locale: en
seoTitle: What can agents sign up for? A 22-guide evidence snapshot
description: A dated audit of signup versus useful work across 22 product guides, with the account, preview, provisioning and local-file boundaries kept separate.
socialTitle: Agents can use the tools. Getting started is the gap.
socialDescription: 17 guides mark useful work agent-ready after setup; none gives signup that label. Read the qualifications and all 22 records.
llmSummary: "September 5, 2026 snapshot of 22 published product guides: useful work has 17 agent-ready and 5 conditional classifications; signup has 0 agent-ready, 5 human-step, 4 conditional and 13 unknown. These are catalog classifications, not live tests, market prevalence or proof that signup is impossible. Conditional signup rows cover different things: AgentMail initiation with human OTP, Cloudflare temporary previews, Salesforce scratch org provisioning and Obsidian local files."
audience: People choosing services for agents, product builders and readers checking claims about agent signup.
contentKind: page
status: published
tags: [products, agent-signup, onboarding, evidence, research]
updated: 2026-09-05
published: 2026-09-05
canonicalPath: /agent-signup
previewImageAlt: "A dated 22-guide catalog snapshot: useful work is marked agent-ready in 17 guides, signup in zero; signup has five human-step, four conditional and thirteen unverified entries. Documentation only."
summary: Signup, connecting an account, provisioning a resource and doing work are different capabilities.
---

This is the evidence companion to an editorial discussion about agent signup. It records **what the catalog classified on September 5, 2026**, rather than testing whether an agent can complete every provider's registration flow.

![22-guide snapshot: 17 useful-work entries and zero signup entries are marked Agent can do it. Signup has five human steps, four conditional entries and thirteen unverified entries. Unknown does not mean impossible.](/research/agent-signup-2026-09-05.png)

## What the count says

| Catalog action | Agent can do it | With conditions | Human step | Not verified |
| --- | ---: | ---: | ---: | ---: |
| Get work done | 17 | 5 | 0 | 0 |
| Sign up / create an account | 0 | 4 | 5 | 13 |

“Agent can do it” is the display label for `agent-ready`. It describes the bounded task and documented route in that guide, with setup and permissions still attached. It does not mean every action is available to every agent. The other five useful-work entries are conditional, not unsupported.

**Zero signup entries carrying that label is not evidence that no agent can register anywhere.** Thirteen entries are unverified. The sample includes different product categories and two Google services that share an account system. It is an editorial sample of 22 guides, not 22 independent signup systems or a representative survey of the software market. No live signup tests were performed.

## What an agent can initiate

The four conditional rows describe four different starting points. Do not add them together as four verified autonomous customer-signup routes.

| Pattern | Example in the sample | What still matters |
| --- | --- | --- |
| Begin a new registration | [AgentMail](/products/agentmail) | Its agent flow returns an API key, inbox ID and organization ID, then requires the OTP sent to the supplied human email to unlock full permissions. It is for first-time users. |
| Create a temporary preview before the account is claimed | [Cloudflare](/products/cloudflare) | Required policy acceptance comes first. The intended user must finish claiming the temporary account within 60 minutes; unclaimed resources are deleted. |
| Provision inside existing authorization | [Salesforce](/products/salesforce) | A scratch org depends on an authorized Dev Hub and available allocation. It is not a new paid customer signup. |
| Use a route that does not require a service account | [Obsidian](/products/obsidian) | An agent can work with an accessible local vault. Obsidian Sync has separate account and subscription requirements. Local file access is not account creation. |

Primary evidence: [AgentMail quickstart](https://docs.agentmail.to/quickstart), [Cloudflare claim deployments](https://developers.cloudflare.com/workers/platform/claim-deployments/), [Salesforce scratch-org command](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_org_create_scratch.html), [Obsidian file storage](https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data) and [Sync setup](https://obsidian.md/help/sync/setup). These route distinctions were rechecked on September 5, 2026.

[Vercel](/products/vercel) also has documented claimable deployment paths. Its signup row remains a human step: producing a deployment or claim link does not establish independent completion of the owner's account signup. [Vercel claim-deployment documentation](https://vercel.com/docs/deployments/claim-deployments).

## A relevant development outside the sample

[Claimable Neon](https://neon.com/claimable-neon) documents agent provisioning of a project without an account or payment details, scoped project credentials, and a later human claim into a Neon organization. Unclaimed projects expire in 72 hours and have storage and transfer caps. This is a useful example of work beginning before account ownership is completed. **Neon is not included in the 22-guide count**, and this focused source check is not a complete Neon product assessment or a performed provisioning test.

## Every record in the snapshot

The following summaries are extracted from the published product corpus at commit `309cd23b4cb51ca80a983e62cf61dc5c26ba1b7c`. Linked guides may receive later updates; this dated snapshot remains fixed.

| Product guide | Signup classification | What the record establishes |
| --- | --- | --- |
| [Cloudflare](/products/cloudflare) | With conditions | Start a preview before signing in. |
| [Gmail](/products/gmail) | Human step | Create the Google account first. |
| [Salesforce](/products/salesforce) | With conditions | Create a scratch org after Dev Hub setup. |
| [Notion](/products/notion) | Not verified | Autonomous workspace signup is not verified. |
| [Obsidian](/products/obsidian) | With conditions | The local file route starts with a vault. |
| [OneNote](/products/onenote) | Not verified | Autonomous account creation is not assessed. |
| [GitHub](/products/github) | Not verified | Autonomous account creation is not assessed. |
| [Slack](/products/slack) | Not verified | Autonomous account creation is not assessed. |
| [Linear](/products/linear) | Not verified | Autonomous account creation is not assessed. |
| [Atom Tickets](/products/atom-tickets) | Not verified | Autonomous account signup is not verified. |
| [AMC Theatres](/products/amc-theatres) | Not verified | Autonomous consumer signup is not verified. |
| [Best Buy](/products/best-buy) | Not verified | Agent-created shopping accounts are unverified. |
| [Amazon](/products/amazon) | Not verified | Autonomous Amazon signup is not verified. |
| [Vercel](/products/vercel) | Human step | Verify an account and claim the preview. |
| [Supabase](/products/supabase) | Not verified | Account signup is not verified. |
| [Sentry](/products/sentry) | Not verified | Autonomous account creation is not verified. |
| [Airtable](/products/airtable) | Not verified | Web account signup is documented; autonomous signup is not verified. |
| [Asana](/products/asana) | Not verified | Autonomous account creation is not verified. |
| [Google Calendar](/products/google-calendar) | Human step | Create or select the Google account first. |
| [Resend](/products/resend) | Human step | A person creates the Resend account and accepts its terms. |
| [AgentMail](/products/agentmail) | With conditions | Agent starts signup; you complete the OTP. |
| [Postmark](/products/postmark) | Human step | Create and confirm the Postmark account yourself. |

## Reproduce and interpret the result

The analysis reads the `sign-up` and `use-product` action statuses from all 22 English product Markdown records at the pinned commit and counts each guide once. It does not infer signup ability from MCP availability, from a generic “create” operation, or from an agent receiving an email address. The downloadable CSV contains the recorded labels, summaries, guide links and signup source URLs.

[Download the snapshot CSV](/research/agent-signup-2026-09-05.csv) · [Download the rendered graphic](/research/agent-signup-2026-09-05.png) · [Read the methodology](/methodology)

For a current task, use the [product finder](/products) or [catalog MCP](/plugin) to retrieve documented routes and constraints. The catalog does not inspect installed connections or a user's actual account permissions. Those must be established in the connected environment.

If you maintain a product, [submit its signup and authorization evidence](/submit-app). Show the exact entry point, what the agent can initiate, which human or team owns the result, what approval remains and how completion is verified. A submission is reviewed; it does not automatically change the classification.
