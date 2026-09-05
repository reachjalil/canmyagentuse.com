# Markdown record contract

Every operational record uses YAML frontmatter and a freeform Markdown body.
Templates live in `templates/`; replace example values before use. Tooling reads
frontmatter, while humans and agents read the body. Templates are not live work.
`id`, `kind` and `status` are required everywhere. IDs are globally unique.

## Conversation (`kind: conversation`)

Path `records/x-<status-id>.md`, ID `conv-x-<status-id>`.

Required metadata: `title`, `url` (exact X post), `root_url` (exact thread post),
`author`, `handle`, `posted_at` (ISO timestamp or null if unknown), `date_method`
(`direct`, `snowflake`, `source`, `unknown`), `observed_at` (ISO timestamp or null when an imported observation time is unknown),
`verification` (`direct`, `mirror`, `snippet`, `unverified`), `sources` (URL array),
`topics` (slug array), `products` (slug array), `opportunity` (plain description),
`our_reply` (`not-observed`, `observed`, `unknown`), and `related_ids` (ID array).
Optional `imported_at` records import time separately from source observation.
Optional `site_urls` contains existing relevant destinations; it never proves
freshness or publication by itself. Optional `batch_id` links the originating batch.

Statuses: `untriaged`, `shortlisted`, `research-needed`, `ready-to-contribute`,
`resolved`, `skipped`. These are editorial decisions, not source confidence.
Keep confidence separate from recency; compute age from `posted_at`, not crawl time.

Body: context; root/reply development; question versus assertion versus reported
experience; important reply links; open/resolved state; observed existing owner
participation; what we could research or contribute; evidence limitations and
dated updates. A mirror-derived timestamp does not prove direct observation.

## Batch (`kind: batch`)

Path `batches/YYYY-MM-DD__topic__run.md`. Required: `owner`, `created_at`,
`conversation_ids` (ID array), `status` (`collecting`, `review-ready`, `integrated`).
Body: research brief and queries/themes, scope and freshness, candidate counts,
thread-level deduplication, interesting clusters, strongest candidates, unresolved
leads and exclusions. Existing IDs may appear in several batches; records remain
canonical. Extensive research is not a hard quota or a posting queue.

## Task (`kind: task`)

Path `tasks/YYYY-MM-DD__<discovery|site|replies>__topic__owner.md`.
Required: `task_type`, `owner`, `created_at`, `updated_at`, `conversation_ids`,
`depends_on` (task ID array), `owned_paths` (repo-relative paths/prefixes),
`outputs` (repo-relative existing file paths), `account` (`jalil`, `brand`, `both`,
`none`), `publish_site` (boolean), and `post_social` (boolean).

Statuses: `queued`, `in-progress`, `blocked`, `review-ready`, `done`, `cancelled`.
Use `depends_on` only for a real blocker, not an automatic pipeline gate. Record
the blocker and next condition in the body. `done` requires outputs and a result
log; for site publication it also requires commit, deployment and live proof.
The booleans record authorization; they do not create it. Cite the user's actual
scope in the body. Prior explicit authorization persists. Defaults are false.

## Reply list (`kind: reply-list`)

Path `replies/YYYY-MM-DD__<jalil|brand|both>__topic__run.md`.
Required: `owner`, `created_at`, `account`, `conversation_ids`, `depends_on` (task
IDs), `status` (`draft`, `review-ready`, `approved`, `archived`), `variants` (array).

A variant may add `format: reply | quote | post` (default `reply`) to distinguish
contribution formats while retaining its source conversation.

Each variant has `id` (unique within this list), `conversation_id`, `account`
(`jalil` or `brand`), `strategy`, `text`, `readiness` (`draft`, `ready`, `blocked`),
`site_urls` (URL array), and `verified_at` (ISO timestamp or null). A ready variant
with a site URL requires a fresh verification timestamp and body evidence of
the page/claim check. A task dependency still blocks its dependent variants until
the task's required outcome is verified; a timestamp alone is not proof.

The Markdown body presents each draft with context, evidence, audience, tone,
priority, optional alternatives, publication dependencies and character count.
`both` means personal/brand alternatives. Choose one account unless the owner
explicitly wants a distinct contribution from both. List approval does not mean
the account posted anything. Brand drafts are allowed before the exact handle is
known; actual posting requires the correct account identity.

## Outcome (`kind: outcome`)

Path `outcomes/YYYY-MM-DDTHHMMSSZ__<jalil|brand>__post-id__event.md`.
Required: `conversation_id`, `account`, `account_handle` (string or null),
`occurred_at`, `reply_list_id` (ID or null), `variant_id` (string or null),
`status` (`approved`, `posted`, `response-observed`, `skipped`, `withdrawn`),
`posted_url` (exact X status URL or null), `evidence_url` (URL or null).

`posted` requires a posted URL, actual account handle and evidence URL. An observed
response needs its evidence URL; it is not proof that we posted. Body records the
observed facts, human feedback and any next task. Use a new outcome file for a
later event instead of rewriting history. If a previously published tweet is
deleted, record the later observation; retain the original evidence record.

## Identity and measurements

`jalil` identifies @reachjalil. `brand` identifies the Can My Agent Use voice;
its exact X handle has not been supplied. Never invent it. Validate actual
posting against the account the user chose. Only record observed engagement,
with observation date and source. Never treat impressions, clicks, replies,
signups and conversions as interchangeable.

## Validation limits

`pnpm conversations:check` checks structural fields, IDs, references and basic
publication-evidence gates. It cannot verify truth, permissions, fresh threads,
semantic claim support or reach. It does not send, fetch, deploy or approve.
`pnpm conversations:index` first validates, then regenerates the overview.
Humans and agents must still read the evidence and task scope.
