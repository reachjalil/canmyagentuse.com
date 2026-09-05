---
title: Help agents discover and use your app
slug: how-to-submit-your-app
locale: en
seoTitle: Submit your app and prepare its docs for agents | Can My Agent Use
description: Submit your app with public docs and one useful task. Learn how our agents research capabilities, what editorial review checks, and how to make setup and limitations clear.
socialTitle: Your next user might be an agent.
socialDescription: Submit your app. Make its docs easier for agents to use. See what we research and how we assess the evidence.
previewImageAlt: Your next user might be an agent. A Can My Agent Use guide to app submissions, documentation, and independent review.
llmSummary: Providers can request a Can My Agent Use review with an app name, public HTTPS website, one task description, and one public HTTPS evidence link. Agents research public documentation and draft assessments; editorial review checks evidence before publication. The guide explains four user actions, five separate interfaces, optional documentation improvements, receipt tracking, and why llms.txt, submission, or sponsorship does not guarantee support, live testing, listing, or recommendation.
audience: App builders, maintainers, developer relations teams, and people suggesting useful services.
contentKind: news
status: published
tags: [app-usage, submissions, documentation, agent-discovery]
updated: 2026-09-05
published: 2026-09-05
canonicalPath: /news/how-to-submit-your-app
summary: Bring your app and its public docs. We research what agents can actually do, how they connect, and where a person still needs to help. Here’s how to submit and what makes an app easier to assess.
---

Someone asks their agent: “Find a service that can handle this for me.” How does the agent work out whether your app fits, what access it needs, and whether it can finish the job?

That is the question Can My Agent Use investigates. We use research agents to examine how apps document their capabilities, then review the evidence before publishing an assessment. You can help by pointing us to your product and the information that explains it.

**You do not need to write a review of your own app. Start with its name, website, one useful task, and a public documentation link.**

[Submit your app for review →](/submit-app)

## The smallest useful submission

The form asks for four things:

1. **App name:** identify the exact product, especially if your company has several.
2. **Product website:** a public HTTPS URL.
3. **One task:** a sentence about an outcome someone wants, such as “create a support inbox and draft a reply.” Mention a human setup step if you know one is needed.
4. **A starting source:** a public HTTPS link to official documentation, an integration README, API reference, or `llms.txt`.

That is enough to request a review. If documentation is incomplete, say so. A specific public help page is more useful than an unsupported claim that your app works with every agent.

The optional details field can hold links to connection instructions, permissions, pricing, a changelog, and known restrictions. Email is optional. Include it with contact permission if you want us to be able to ask follow-up questions; otherwise, keep the receipt and check it for updates.

You can submit an app you use without being its owner. Tell us your relationship if it helps establish context. **Never send credentials, customer data, or private documents.**

## What happens after you submit

**First, you get a receipt.** The form places your submission in an editorial queue. Save the receipt link: it records review status and any requests for more information. The form does not start an instant compatibility scan, and we do not promise a completion date.

**Then we investigate the public evidence.** Our research agents read relevant documentation, follow setup and reference links, inspect maintained public repositories where useful, and draft an assessment. They look for what your app actually exposes, rather than treating your submission as a finished finding.

**Editorial review checks the claims.** We check that each source supports the exact product, interface, action, and restriction being described. We keep contradictions and missing evidence visible. A submission can lead to a new guide, an update to an existing record, a request for more information, or a decision not to list it.

**Published findings include sources and dates.** Accepted content can be discovered through the website and its generated machine-readable catalog, including the public MCP. Being listed does not guarantee that an agent will choose your app for a particular request.

Submitted notes remain private; published guides cite public evidence. Read our [submission overview](/submit-app), [methodology](/methodology), and [privacy policy](/privacy) for the review and handling details.

## We review the whole journey

Having an integration is one part of the answer. We examine four practical steps separately:

| Step | What we try to establish | Useful documentation |
| --- | --- | --- |
| Sign up | Can an agent start an account? Where must a person verify identity or accept terms? | Account creation, verification, region and eligibility requirements |
| Connect | How does an existing account authorize an agent? What can that access reach? | OAuth or key setup, scopes, roles, administrator approval and revocation |
| Buy or subscribe | Does useful access require a plan change, credits, billing setup or approval? | Public plan details, quotas and purchase requirements |
| Get work done | Which tasks can the agent perform, and how does it check the outcome? | Tool or endpoint references, examples, returned identifiers, status checks and limitations |

A human handoff is useful information. If an owner must connect an account or verify a domain, document it plainly. A clear limitation makes the guide more accurate.

## Five interfaces, five separate questions

We distinguish **MCP tools, MCP Apps, APIs, CLIs, and local-file access**. A product can be useful with one route; implementing all five is not a submission requirement.

For each route you offer, point to its exact setup and capabilities. Identify whether your team maintains it or it is a community integration, whether it is available generally or in preview, and which versions or plans it covers.

An MCP server does not establish support for interactive MCP Apps. A command that launches that server does not establish a separate product CLI. A downloadable export does not establish ongoing access to local files. And one agent host working with an integration does not prove that every web, desktop, and CLI host can use it.

Our [product guides](/products) show how those distinctions appear in the catalog. Unknown means there is not enough evidence for the recorded question; it is not a judgment about the overall quality of your app.

## Make the docs answer the next question

You can submit now and improve the documentation later. These are useful improvements, not admission requirements or a scorecard.

**Lead with real tasks.** Give two or three examples of what someone would ask an agent to accomplish. Explain when your app is a good fit and what it does not handle. “Draft a reply in an existing inbox” is more informative than “AI-powered communication.”

**Make setup reproducible.** Name the official endpoint or package, supported connection method, prerequisites, and authorization steps. Show which work needs an owner or administrator. Separate an account from a workspace, project, or inbox inside it.

**Describe permission boundaries.** Explain what a credential can read or change, whether access can be narrowed, and how to revoke it. If a read-only tool still uses a credential with write access, make that distinction explicit.

**Show a first task and its result.** A small example should include inputs, the expected response, and how to check the resulting state. Where available, explain draft, preview, sandbox, and dry-run behavior. Label irreversible or externally visible actions, such as sending a message, separately from preparing one. State when an accepted request still needs a later status check.

**Keep restrictions close to the instructions.** Put relevant plan, version, region, quota, and preview limitations beside the affected feature. Date the documentation or maintain a changelog so reviewers can tell when behavior changed.

**Make key information readable and linked.** Public documentation with stable URLs gives people and research agents a place to verify claims. Markdown versions and an index can help when a documentation site is difficult to navigate.

## Where llms.txt helps

The [llms.txt proposal](https://llmstxt.org/) describes a Markdown file that provides context and points agents to more detailed documentation. Think of it as a short guide to your docs. It can link to the quickstart, authentication, task examples, API or MCP reference, limitations, and changelog.

It is **optional for a Can My Agent Use submission**. It does not grant account access, implement an integration, prove a capability, or guarantee a listing or recommendation. The documentation behind the links still needs to explain how the app works.

A useful self-check is to give an agent only your public docs entry point and ask:

> “Explain how to connect this app, the permissions required, one useful first task, and the remaining human steps. Cite the page for each answer. If a detail is missing, say so. Do not sign up, install anything, or perform actions.”

Review the answer against your actual product. Missing answers tell you where the docs need work; they are not proof that an undocumented feature is unsupported.

## An optional outline for your docs

Publish this information wherever it fits your existing documentation. There is no required filename or special submission package.

```text
App name and official website:
Who it helps and two or three useful tasks:
Available access: MCP tools / MCP Apps / API / CLI / local files
Official setup or maintained integration links:
Authentication, permission scopes, and revocation:
Human setup or approval steps:
Plan, version, region, and quota restrictions:
First task, expected result, and how to verify it:
Known limitations:
Changelog or last-updated date:
```

Link the supporting pages rather than pasting a long marketing deck into the form. The goal is to make the evidence easy to find, not to tell the reviewer what conclusion to reach.

## A review is not a live test or a paid ranking

Our published guides distinguish documentation review from live testing. A submission does not authorize us to sign into your app, install an integration, purchase a plan, or take actions on your behalf. Any live exercise needs separately agreed access and scope, with the result described as a specific observation.

You cannot buy a favorable finding. [Sponsorship](/sponsors) supports the research separately from editorial decisions. Better evidence can change an assessment; payment or promotional language cannot substitute for it.

Already listed, but something has changed? [Send a correction](/contribute) with the catalog record, the exact change, a current public source, and the affected version or plan. That gives us something concrete to recheck.

**Ready? Bring your app, one useful task, and a documentation link. We’ll investigate the rest.**

[Submit your app →](/submit-app)
