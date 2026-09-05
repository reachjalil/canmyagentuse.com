---
name: cmau-compose-replies
description: Build cited, account-specific Markdown reply lists from selected social research and published Can My Agent Use evidence; use for founder, brand-pending, or both-mode draft planning, never for posting.
---

# Compose replies

Turn selected research records and published Can My Agent Use evidence into a
varied reply list at the requested breadth for one conversation batch. The output is a draft
artifact for review. It never posts, likes, follows, quotes, messages, or
edits a social account.

## Inputs and account modes

Read the selected research records first, then read the linked published-site
evidence before drafting. Preserve the exact source status URL and thread
context for every candidate. Treat a source record as a lead until its claim
is confirmed by the supplied published page or a source URL explicitly marked
as verified.

Accept `mode: jalil | brand | both`:

- `jalil`: write for founder @reachjalil. Use “I” for a proposed opinion or the founder’s known project ownership.
  Personal-experience claims need actual firsthand evidence; a draft must not
  invent a test, customer story or conversation.
- `brand`: write for the Can My Agent Use brand account, but keep the handle
  `brand handle pending` until the user supplies or verifies the exact handle.
  Never invent or guess a brand handle.
- `both`: provide separate alternatives for the same opportunity, labelled
  `@reachjalil` and `Can My Agent Use (handle pending)`. These are alternatives
  for review, not a dual-post campaign.

Read `ops/conversations/VOICES.md` for the voice constraints. If the account mode is unspecified, prepare `both` as alternatives, following
the owner’s stated preference. The missing brand handle does not block drafting.

## Reply-list contract

Reply-list files use frontmatter with `id`, `kind: reply-list`, `status`,
`owner`, `created_at`, `account`, `conversation_ids`, `depends_on`, and
`variants`. Each variant has `id`, `conversation_id`, `account` (`jalil` or
`brand`), `strategy`, `text`, `readiness` (`draft`, `ready`, or `blocked`),
`site_urls`, and `verified_at` (an ISO timestamp or `null`). A `ready` variant
with a site URL requires a fresh verification timestamp plus body evidence of
the page and claim check; a timestamp alone is not evidence. A task dependency
blocks dependent variants until the task outcome is verified.

Each Markdown reply list should include:

- batch date, topic, requested mode, and a one-line draft-only notice;
- one entry per selected opportunity with the stable conversation ID
  `conv-x-<statusID>` when the source is an X status;
- exact source URL, author, post date if verified, and a concise thread-context
  paraphrase;
- the account voice used and one distinct strategy/hook, audience, and
  appropriate hop (reply, quote, or profile/site link when supported);
- ready-to-copy draft, character count/budget, and the claim citations or
  internal Can My Agent Use links used to shape it;
- honest ownership language. Never imply Can My Agent Use built, tested,
  partnered with, sponsored, or officially represents a provider unless the
  supplied evidence says so;
- a publication dependency: `blocked until source and published-site claims
  are re-verified at publication time` unless the artifact contains a current
  verification record.

Keep the opening reply useful before mentioning the catalog. A catalogue
pointer should be a relevant next hop, not a repeated pitch. Use a question
when the thread lacks an answer, an observation when it already has useful
context, and a correction only when the cited evidence supports it. Keep every
claim narrower than its source; preserve “unknown,” “community,” and
“unverified” labels.

## Strategy mix

Across a batch, vary the audience and hook rather than repeating a product
pitch. Choose only strategies that fit the actual thread:

1. answer-first practical clarification;
2. curious question about permissions, scopes, or verification;
3. playful observation with a useful technical point;
4. mini workflow showing a safe first task and handoff;
5. evidence correction with an exact source link;
6. builder story only when the supplied evidence is genuinely firsthand;
7. source-forward pointer to a published Can My Agent Use page;
8. honest product pointer explaining what the catalog can and cannot establish.

Do not impose quotas. Do not force jokes or fabricate urgency, controversy, praise, rankings, or
“best” claims. Do not send mass replies to
one audience, reuse one opening across unrelated threads, or imply that a
reply was sent. A `hop` must identify the intended next step without
performing it.

## Evidence and safety boundary

Use exact URLs, not search-result URLs or shortened links unless the selected
record provides the canonical destination. A social post can establish what
its author said; it does not by itself establish provider support, a live
account result, or a Can My Agent Use test. Separate `source says`, `catalog
published evidence says`, and `draft inference` when they differ. A product
page is a citation, not proof that the current thread’s exact task was tested.

Copy only what is needed for a short reply. Avoid private data, credentials,
contact details, or unverified handles. Use the best available authorized tools to read current context. If a date, author, status ID, published page,
brand handle, or claim is uncertain, mark it and exclude the claim from ready
copy until verified.

## Files

Use the conversation-workflow naming contract:

- `replies/YYYY-MM-DD__<jalil|brand|both>__topic__run.md` for reply lists;
- `tasks/YYYY-MM-DD__replies__topic__owner.md` for task records;
- `outcomes/YYYY-MM-DDTHHMMSSZ__<jalil|brand>__post-id__event.md` files for
  what actually happened, kept separate from approved drafts and proposed
  copy;
- `conv-x-<statusID>` for X conversation IDs, regardless of handle changes.

Read `ops/conversations/README.md`, `ops/conversations/CONTRACT.md`, and the
relevant templates before creating a record. Use the repository workflow
commands `pnpm conversations:new`, `pnpm conversations:check`, and
`pnpm conversations:index` as appropriate; their implementation lives at
`ops/conversations/manage.mjs`. Do not create an outcome file for a draft.
Never call a posting or messaging tool in this skill; publication is a
separate, explicitly authorized task under the user’s explicit posting scope.
