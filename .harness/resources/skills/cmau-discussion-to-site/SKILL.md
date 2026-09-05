---
name: cmau-discussion-to-site
description: Turn a selected public conversation into source-backed Can My Agent Use content while preserving interface distinctions and task scope.
---

# Discussion to site

Use this skill after a conversation record has been selected and a named task
authorizes site-content work. It translates a discussion into a reviewable,
portable catalog change; the discussion is a lead and context, not proof of a
provider capability.

## Establish scope and evidence

1. Resolve the repository root with `git rev-parse --show-toplevel`; resolve
   every repository path from that root.
2. Read `ops/conversations/README.md`, `ops/conversations/CONTRACT.md`, the
   applicable templates, and the selected record plus its site task. Read the
   repository’s applicable `AGENTS.md`,
   `.harness/resources/skills/canmyagentuse-site-skill/SKILL.md`, and
   `.harness/resources/skills/provider-compatible-ui-skill/SKILL.md` before
   changing provider references or presentation. `VOICES.md` is for reply
   strategy and is not required for site conversion.
3. Confirm the task owner, authorized output paths, selected record IDs, and
   whether it authorizes drafting, validation, or publication. Treat an
   explicit prior user authorization as persistent only within that stated
   scope. Do not expand it to unrelated products, records, routes, or deploys.

## Build the content

- Open and read current first-party documentation, API references, official
  repositories, and provider policy pages needed for every material claim.
  Cite exact URLs, titles, publishers, and review dates in the repository’s
  source fields. Use the public conversation for demand, wording, or context;
  use primary sources for capability proof. Preserve unknown instead of
  converting a missing document, anecdote, or live-test gap into “yes”.
- For product-guide additions, keep the service journey complete across the
  contract’s four actions and
  separate all five interfaces: MCP tools, MCP Apps, API, CLI, and local files.
  Do not imply that a dashboard, HTML form, local attachment, or generic MCP
  client supports a provider action without evidence. State credential scope,
  approval, resource limits, readback, revocation, regions, and preview or plan
  restrictions when they affect the first useful task.
- Produce portable content from one fact set with the repository’s Markdown,
  JSON, and MCP representations in parity. Follow the existing catalog schema,
  product-guide conventions, canonical source rendering, and unknown defaults;
  do not hand-maintain generated routes or duplicate a Sources section that the
  renderer owns. Keep provider marks and visual treatment within the
  provider-compatible UI rules; use text and the independent product identity.

## Ownership, publication, and outcome

Only edit paths explicitly assigned to the named site task. Never overwrite
another owner’s conversation record, batch, task, reply list, or outcome. Keep
conversation IDs such as `conv-x-<statusID>` linked in the task and preserve
source qualifications and evidence gaps in the task work log. The outcome
template is for social activity, not a site release.

A human may triage selected records first. If the user authorizes automatic
selection, record the selection and rationale before authoring. Validate the owned content and conversation task with
`pnpm conversations:check` and the narrowest applicable catalog check. Run
`pnpm conversations:index` only when the task assigns index regeneration.
Publish, deploy, or mutate an external system only when the current task
explicitly authorizes that action; otherwise stop at the reviewable draft and
report what remains. This skill never posts a social reply or contacts authors.

Finish with a task handoff and, when published, an `ops/releases/` report that
names changed paths, validation performed, primary
sources read, material unknowns, and whether publication occurred. Do not claim
live provider use, successful sending, account access, or readback unless that
was explicitly authorized and actually observed.
