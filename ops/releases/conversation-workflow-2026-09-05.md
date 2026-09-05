# Conversation workflow — implementation record

Date: 2026-09-05. This is a repository configuration/operations release, not a
public Worker deployment. Harness guide version:
`2026-05-29.root-anchored-gitignore`. Existing Harness installation extended;
no migration, cleanup, new target or unrelated configuration replacement.

## Deliverables

- Three source skills under `.harness/resources/skills/`: find conversations,
  turn discussions into site work, and compose contribution lists.
- Active-set allowlist entries; generated copies in `.agents/skills/`.
- `ops/conversations/README.md`, `CONTRACT.md`, `VOICES.md`, five templates,
  `manage.mjs` and generated INDEX.md.
- Thirty-six canonical focal-post records imported from earlier public research,
  one seed batch and three independent queued tasks. Imported timestamps are
  distinguished from unknown original observation times; thread rechecks are
  explicit. These are research leads, not provider capability findings.
- Personal `jalil` and publication `brand` voices; `both` supplies alternatives.
  Exact brand handle remains unspecified. Creative strategies include answers,
  comparisons, questions, research findings, practical examples, light humor,
  original-post and quote-post drafts. No automatic two-account posting.
- Existing daily automation integration; no additional scheduler.

## Validation

- All three `quick_validate.py` skill checks passed. PyYAML was installed in
  an isolated temporary validator environment, not added to repository deps.
- `pnpm harness:validate`, preview, activation and convergence checks passed;
  only declared `.agents` resources and generated AGENTS.md were projected.
- `pnpm conversations:check`: 40 operational records passed.
- Task scaffold positive check plus repeated-name rejection preserved the
  original file. Isolated fixtures rejected dangling references, missing
  posting proof and ready variants with unfinished site dependencies.
- Filename patterns enforce the documented record groups. Helper is structural
  validation, not proof of truth, current context, character weighting or scope.
- Independent GPT-5.6 Luna forward test produced two account-specific blocked
  alternatives offline, with context/evidence gaps recorded. Findings informed
  the task evidence paths, scope, budgets and observation timestamp handling.
- Biome and `git diff --check` passed. Helper syntax and explicit Biome stdin
  formatting checked because ops is excluded by the existing root config.
- Uncached `pnpm check --force`, `pnpm test --force`, `pnpm build --force` passed
  after integrating peer releases: 136 tests (78 catalog, 58 web).

## Preservation and remaining work

The release started from 309cd23 and integrated b298dbc before final checks,
preserving peer provider-readiness and agent-signup publication work. Existing
Evernote/Joplin drafts in the main checkout were untouched. The older social
worktree's unpublished email article is assigned to the new site task; its old
checks do not establish current publication. Nothing in this release posts a
tweet, verifies provider accounts or changes the live Worker.

Next: assign the queued tasks from the index or create named tasks with
`pnpm conversations:new`. Record actual social outcomes only from observed
posted URLs and the selected account.
