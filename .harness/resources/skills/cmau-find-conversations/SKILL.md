---
name: cmau-find-conversations
description: Discover and normalize public conversations into reviewable Can My Agent Use records without drafting replies or publishing.
---

# Find conversations

Use this skill when the task is to find public posts or threads that may be
useful to Can My Agent Use. It produces traceable discovery records. It does
not write replies, contact authors, or publish anything.

## Read the contract first

1. Resolve the repository root with `git rev-parse --show-toplevel`; run all
   path operations from that root, even when the shell starts elsewhere.
2. Read `ops/conversations/README.md` and `ops/conversations/CONTRACT.md`. Read the
   applicable templates in `ops/conversations/templates/` and inspect
   `ops/conversations/manage.mjs` before choosing commands. `VOICES.md` is for
   reply strategy and is not needed for discovery. Treat the README, contract,
   templates, and manager as the source of truth for fields and statuses.
3. Create the task with the documented
   `pnpm conversations:new discovery <topic> <owner>` command when it does not
   already exist; it creates `tasks/YYYY-MM-DD__discovery__topic__owner.md`
   without overwriting. Use a stable owner name, then fill its required
   metadata, owned paths, outputs, authorization booleans, objective, and work
   log. When doing a run, create its batch at
   `batches/YYYY-MM-DD__topic__run.md` with the batch template. State the
   search window, topic, tools used, and authorized scope.

## Search and verification

- Search broadly with the best available search, browser, or public-index
  tools. The default target is 100–200 candidate opportunities when the task
  asks for an extensive search; it is a breadth target, not a hard quota.
  Stop with fewer candidates when the available evidence is thin or repetitive.
- Open and read the public result behind each candidate. Do not rely on a
  search snippet alone. Capture the exact status URL/ID, author, actual post
  date, parent/thread URL, and enough surrounding context to explain the fit.
  Derive a date from a platform ID only when necessary and label that method.
- Record the source URL, title or publisher, retrieval date, and verification
  confidence. Distinguish the original post, a reply, a quote, and a mirror.
  A mirror can discover a candidate but cannot silently upgrade confidence.
- Dedupe by exact status ID and canonical URL. Exclude already handled records
  when the task or existing index identifies them. Preserve unresolved dates,
  inaccessible threads, and platform uncertainty as explicit unknowns.
- Store neutral context, fit rationale, and evidence gaps. Do not draft a
  reply, suggest final wording, or imply that an author agreed to anything.

## Record layout and ownership

For each qualifying post, use ID `conv-x-<statusID>` and write only its own
record at `ops/conversations/records/x-<id>.md`. Use YAML frontmatter followed
by Markdown context, exactly as the contract and conversation template specify.
A record should point to the canonical status URL, author, date and date method,
thread position, discovery sources, confidence, topic tags, and unresolved
verification. A missing field stays unknown; never infer it from a similar post.

Keep the task, batch, and records within the current named owner’s scope. Never
rewrite another owner’s record, batch, task, or reply file. If a path collision
or duplicate is found, link to the existing record and report the conflict.
Update the batch with candidate IDs and selection state using the batch template;
do not copy reply text into it. Set record status from the contract’s editorial
values (`untriaged`, `shortlisted`, `research-needed`, `ready-to-contribute`,
`resolved`, or `skipped`) and keep the discovery task’s lifecycle status
separate (`in-progress`, `review-ready`, `blocked`, `done`, or `cancelled`).

Human triage is optional. If no selection instruction exists, leave candidates
reviewable and ask for selection. If the user has authorized automatic
selection, select by fit, recency, diversity, and evidence confidence, record
the rationale, and still do not compose or send replies. This skill never posts,
likes, follows, messages, or publishes site content.

Before reporting completion, mark the task’s outputs and work log, then run
`pnpm conversations:check`; run `pnpm conversations:index` only when you are
assigned to integrate or regenerate the generated index. Inspect the resulting
errors. Report
the task, batch, record paths, candidate count, exact URLs, confidence limits,
and any unreachable or mirror-only evidence. Do not claim platform access or a
live action that did not occur.
