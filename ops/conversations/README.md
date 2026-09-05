# Conversations → research → useful contributions

This is the shared work queue for Can My Agent Use conversation research, site
improvements and social drafts. Markdown records are the source of truth. Skills
live under `.harness/resources/skills/` and are projected into `.agents/skills/`
by `pnpm harness:activate`. On a fresh checkout or after pulling skill changes,
run `pnpm harness:validate`, `pnpm harness:preview`, then `pnpm harness:activate`.

Start with [INDEX.md](INDEX.md) for current work, [CONTRACT.md](CONTRACT.md) for
record fields and [VOICES.md](VOICES.md) for account and strategy choices.

## Three independent jobs

| Job | Skill | Inputs | Deliverable |
| --- | --- | --- | --- |
| Find and understand conversations | `$cmau-find-conversations` | A discovery task, topics, dates and prior records | Extensive sourced records and a batch summary; no promotional drafts |
| Make the site useful to the discussion | `$cmau-discussion-to-site` | Selected conversation IDs and a site task | Primary-source research, owned content changes, validation and release proof when publication is authorized |
| Prepare contributions | `$cmau-compose-replies` | Selected IDs, account mode and verified site destinations | A varied list of drafts with context, evidence, dependencies and suggested priority |

The pipeline is optional, not a mandatory three-step approval chain. A useful
answer can be drafted directly from existing evidence. A site task may be
assigned before discovery is complete. The task defines the requested scope.
Discover broadly; select deliberately. An agent may select its own shortlist
when the owner authorizes that scope. Drafting is not posting authorization.

## Folder and filename contract

```text
ops/conversations/
  README.md                         How to assign and resume work
  CONTRACT.md                       Fields, relationships and state rules
  VOICES.md                         Personal/brand voice and strategies
  INDEX.md                          Generated overview; never hand-edit
  manage.mjs                        Task scaffolding, validation and index
  templates/
    batch.md
    conversation.md
    task.md
    reply-list.md
    outcome.md
  records/
    x-2096294947943227684.md          One stable focal-post record
  batches/
    2026-09-05__agent-abilities__seed.md
  tasks/
    2026-09-05__discovery__agent-abilities__researcher-a.md
    2026-09-05__site__email-workflows__editor-a.md
    2026-09-05__replies__agent-abilities__writer-a.md
  replies/
    YYYY-MM-DD__jalil__topic__run.md
    YYYY-MM-DD__brand__topic__run.md
    YYYY-MM-DD__both__topic__run.md
  outcomes/
    YYYY-MM-DDTHHMMSSZ__account__post-id__event.md
```

Dates are UTC for stable filenames; retain original time zones in context where
useful. Slugs use lowercase letters, numbers and hyphens. A `run` is an owner
chosen unique suffix such as `researcher-a-01`; it is not a hard-coded cycle
number. Conversation IDs are `conv-x-<status-id>` regardless of handle changes.
Related focal replies share `root_url`; they do not inflate thread breadth.

The files are repository records, not public site pages. This repository is
public: store public conversation summaries, not private messages, unpublished
customer data, credentials or confidential contact details. Published research
belongs in `content/`, never in this queue.

## Give an agent a task

Install repository dependencies once with `pnpm install --frozen-lockfile`.
Create named tasks with:

```sh
pnpm conversations:new discovery agent-abilities researcher-a
pnpm conversations:new site email-workflows editor-a
pnpm conversations:new replies agent-abilities writer-a
```

The command creates today's task with `queued` status and never overwrites a
file. Edit its objective, inputs, owned paths, account and publication scope.
Then give an independent agent one of these prompts, replacing the task path
with the actual file the command printed:

**Research agent**

> Use $cmau-find-conversations. Read ops/conversations/README.md and task
> `<task-path>`. Use your best available research tools to build an extensive
> evidence-backed pool of conversations about agent abilities. Follow threads
> and capture context. Work only within the task's owned paths. Do not draft
> replies or publish. Update the task with your outputs and gaps.

**Site agent**

> Use $cmau-discussion-to-site for task `<task-path>`. Read the selected
> conversation records, verify the actual capability questions with primary
> sources, and implement the useful content improvements in scope. Preserve
> other agents' work. Follow the task's publication authorization and record
> exact validation, commit and live proof when applicable.

**Reply agent**

> Use $cmau-compose-replies for task `<task-path>`. Account mode is `both`:
> prepare personal and brand alternatives for the selected conversations.
> Read the thread context and verified site evidence. Vary the contribution,
> tone, audience and link usage. Identify the strongest options and any blocked
> claims. Produce drafts only and record the output path in the task.

Agents without automatic skill discovery can read the matching
`.harness/resources/skills/<skill-name>/SKILL.md` directly. Do not require a
particular model or tool for the workflow; GPT-5.6 Luna is the owner's preferred
delegated researcher when available, with an integrator reviewing material claims.

## Working concurrently

The coordinator assigns each task an owner and explicit `owned_paths` before
dispatch. Only that owner changes the task's outputs until handoff. Agents mark
their own task `in-progress`, then `review-ready`, `blocked` or `done` with a
dated work log. A stale timestamp is not permission to take over another task.

Existing conversation records have one maintainer. If two researchers discover
the same status ID, reference the existing record and put new evidence in the
researcher's batch notes; the maintainer merges it. New IDs can be assigned
disjointly or reconciled by the integrator. Do not overwrite a peer's record.

Separate worktrees do not provide a distributed task lock. Assign owners before
branching, fetch current main before integration, and resolve duplicates as
content merges. Only the integrator regenerates INDEX.md and publishes a release.
Publication uses the existing repo workflow; never deploy an older branch over
a newer release or commit another task's unrelated changes.

## Track decisions and actual outcomes

Run `pnpm conversations:check` before handing off and
`pnpm conversations:index` after integration. The index is generated from the
Markdown frontmatter and links to detailed records. Keep research observations,
editorial selection and social posting outcomes separate.

For actual posting, append an outcome file with the account and exact posted
URL. Approval, copying a draft and opening X are not evidence of posting. A
published site page also does not mean anyone shared it. Record later responses,
useful feedback or measured results with dates; do not invent reach or conversion.

## Current handoff

The seed batch imports earlier research as context, not fresh verification.
Its records explicitly require a current thread check. The prior Zeno original
and Benjamin's original MCP question were already answered by @reachjalil;
the seed includes Benjamin's distinct follow-up about listing evidence.

Earlier uncommitted email article work remains in
`/Users/jalillaaraichi/canmyagentuse-social-release`. The queued site task records
that handoff. Inspect current main and the newly published provider-readiness
guide before integrating anything; some submission guidance has since shipped
from another task. Nothing in this workflow marks those drafts as published.

The existing `continue-catalog-coverage` daily heartbeat should read this queue.
Use the same automation, not a second scheduler. New extensive research can be
recorded without producing a compulsory batch of twenty replies. It should stay
quiet when nothing actionable changes.
