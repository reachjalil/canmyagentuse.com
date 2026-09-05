# Research backlog

## Current priority — product and service coverage

As of 2026-09-04, use `ops/PRODUCT-STRATEGY.md` as the primary mission.
The harness queue below is preserved as secondary work. Ship researched batches
of 2–4 additions or substantial improvements, with citations and validated releases.

1. Deepen the first 13 product guides: exact permission scopes, setup plans,
   regional and quota limits, revocation, and a reproducible first useful task.
   Gmail, Cloudflare, Notion, and Linear received the first depth pass on
   2026-09-04 (30 additional first-party source entries). Next: Salesforce org
   provisioning/permissions and the remaining original product records; revisit
   Gmail MCP preview availability and any announced quota/billing transition.
2. Add Vercel, Supabase, and Sentry with the same full account-to-task contract.
3. Expand notes with Joplin and Evernote; publish an evidence-backed notes
   comparison that separates hosted MCP, local files, and delegated API access.
4. Add Airtable, Figma, HubSpot, Asana, Google Calendar, and Google Drive.
5. Deepen movie ticketing by region and fulfillment route; investigate other
   theater intermediaries before claiming individual-chain agent purchasing.
6. Extend shopping after SaaS: verify outside-agent access independently of
   provider-native assistants, and preserve partner/invite restrictions.

Infrastructure follow-up: Cloudflare returns 1010 for the default Python-urllib
signature on public JSON. Curl and a descriptive catalog-client User-Agent work.
Investigate a narrowly scoped policy for public read-only machine routes; retain
protection for corrections and any write endpoints. Do not disable zone-wide
security protections as a routine workaround.

Only after primary product work is scoped should the historical harness
coverage queue supply an optional maintenance item. Never interpret a sponsor
relationship or a documentation review as a passed live test.

This file stores durable priority policy plus the next queue. Re-derive live
membership from `pnpm --filter @canmyagentuse/web coverage:report` at the start
of every cycle. Counts below are the 2026-08-29 bootstrap baseline, not frozen
truth.

A harness/feature pair is queue-complete when it is sourced or has an
`ATTEMPT` record. An attempt prevents repeat research for 30 days but does not
inflate the published sourced-cell percentage. A first-party changelog hit may
reopen a pair before the cooldown expires.

## Phase policy

### Phase A — Raise the harness floor

Research the live sub-30 harnesses against the Top-30 list, lowest evidence
count first. Bootstrap order is:

1. `chatgpt-cli` — 0/114
2. `amp-cli` — 1/114
3. `goose` — 1/114
4. `jetbrains-ai` — 1/114
5. `aider` — 5/114
6. `windsurf` — 5/114
7. `copilot-web` — 6/114
8. `chrome-webmcp-preview` — 7/114
9. `devin-web` — 9/114
10. `grok-web` — 9/114
11. `warp` — 9/114
12. `opencode` — 11/114

Exit Phase A when every member has at least 30 sourced current-track cells in
the live report. Attempts skip exhausted pairs but do not count as sourced.
Estimated scale: 8–12 cycles at 30–60 accepted cells per cycle.

### Phase B — Fill desert families

Sweep these families across the best-documented 12 harnesses, then widen:

1. `webmcp` — bootstrap 7/217 (3.2%)
2. `plugins` — 25/217 (11.5%)
3. `models-and-context` — 49/372 (13.2%); treat numeric values with the full
   measured-value contract
4. `mcp` — 103/744 (13.8%); do not collapse distinct protocol utilities into
   broad MCP support
5. Every feature currently at zero or one sourced cell, led by
   `output-token-limit`

Exit Phase B when each of `webmcp`, `plugins`, `models-and-context`, and `mcp`
is at least 40% sourced on the current track. From this phase onward, reserve at
most one brief per cycle for discovery/freshness.

### Phase C — Long-tail completion

Work remaining current-track unknowns, best-documented vendors first. Use these
read-only lead lists without copying their identifiers blindly:

- `md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28/data/evidence-gaps.csv`
- `md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28/data/explicit-non-support.csv`

Exit Phase C when at least 85% of current-track pairs are sourced or have an
`ATTEMPT` record in `ops/LOG.md`. Report both numbers separately; never present
attempted coverage as published sourced coverage.

### Phase D — Preview tracks and missing dimensions

Interleave Phase D once Phase C exceeds 60% sourced-or-attempted. Author a
preview cell only from separately scoped preview evidence; current-track
evidence never fills it automatically.

Admit at most two new feature files per cycle. Every new atomic feature needs a
public terminology basis, an HTTPS resource, valid `specLabel`, category/parent
pairing, narrow status semantics, and an all-unknown starting matrix. New rows
must pass the admission policy in `content/pages/en/methodology.md`.

Phase D has no independent percentage exit. It is complete when the parking
lot has been deliberately admitted, rejected with a reason, or retained for
later evidence, while Phase C has met its own exit criterion.

### Phase E — Wide coverage and freshness patrol

Admit one new harness at a time, split by exact surface. An all-unknown start is
correct. Immediately give each new harness a Phase-A Top-30 floor sweep before
admitting the next candidate.

In every steady-state cycle:

- run one vendor changelog sweep;
- prioritize cells whose newest `observedAt` is more than 90 days old;
- reopen cooldowns when a changelog directly affects a recorded attempt;
- refresh broken or superseded source roots append-only in `ops/SOURCES.md`;
- keep one writer and the full validation/ship cycle.

Phase E never exhausts.

## Phase-A Top-30 features

These slugs were verified against `content/features/en/` on 2026-08-29. Keep
the list pinned for comparable floor work; change it only in a deliberate
backlog-policy commit.

### Instructions, interoperability, and portability

1. `agents-md`
2. `custom-instructions`
3. `native-rules`
4. `skills`
5. `mcp-tools`
6. `mcp-resources`
7. `mcp-prompts`
8. `mcp-apps`
9. `connectors`
10. `conversation-export`

### Workspace and tools

11. `workspace-files`
12. `workspace-search`
13. `terminal`
14. `code-execution`
15. `multi-file-edit`
16. `diffs-and-patches`
17. `git-pull-requests`
18. `web-fetch`
19. `browser-automation`
20. `computer-use`

### Runtime, context, input, and governance

21. `human-approval`
22. `subagent-delegation`
23. `scheduled-runs`
24. `background-agents`
25. `model-selection`
26. `context-window`
27. `image-input`
28. `pdf-documents`
29. `audit-logs`
30. `data-retention-controls`

For brief sizing, the three ten-item subsections may be used as bundles. Paste
the actual feature definitions into each research brief; the headings here are
only queue organization.

## Phase-D feature parking lot

These are proposals, not approved catalog facts. Check overlap with existing
rows before admission and preserve protocol roles atomically.

### Product terminology candidates

- `hooks` — lifecycle-triggered user scripts or commands, not plugin packaging.
  Candidate basis: https://code.claude.com/docs/en/hooks
- `custom-agents` — named user-defined agent profiles distinct from transient
  subagent invocation. Candidate basis:
  https://code.visualstudio.com/docs/agent-customization/custom-agents
- `session-handoff` — deliberate transfer of an active task/session between
  execution surfaces or agents; distinguish from `subagent-result-handoff` and
  `resumable-runs`. Candidate basis:
  https://code.visualstudio.com/docs/agents/agents-handoff-tutorial
- `headless-mode` — documented non-interactive product invocation; distinguish
  invocation from output format. Candidate basis:
  https://geminicli.com/docs/cli/headless/
- `cloud-agent-execution` — an exact hosted execution surface, distinct from a
  generic background toggle. Candidate basis:
  https://cursor.com/docs/cloud-agent/capabilities

### Atomic Agent Client Protocol candidates

Use ACP v1 terminology and keep client/agent direction explicit. Candidate
overview: https://agentclientprotocol.com/protocol/v1/overview

- `acp-agent-role` and `acp-client-role` — role participation and direction.
- `acp-initialization` — version/capability negotiation.
- `acp-session-create-load` — create/load/resume behavior; consider splitting
  again if vendor evidence distinguishes the optional methods. Basis:
  https://agentclientprotocol.com/protocol/v1/session-setup
- `acp-prompt-turn` — prompt/update/stop-reason lifecycle. Basis:
  https://agentclientprotocol.com/protocol/v1/prompt-turn
- `acp-tool-calls` — tool call and update representation. Basis:
  https://agentclientprotocol.com/protocol/v1/tool-calls
- `acp-permission-requests` — agent-to-client user authorization. Basis:
  https://agentclientprotocol.com/protocol/v1/tool-calls#requesting-permission
- `acp-filesystem` — client-provided text read/write methods. Basis:
  https://agentclientprotocol.com/protocol/v1/file-system
- `acp-terminals` — client-provided terminal lifecycle. Basis:
  https://agentclientprotocol.com/protocol/v1/terminals
- `acp-session-modes` — advertised and selected operating modes. Basis:
  https://agentclientprotocol.com/protocol/v1/session-modes
- `acp-transports` — local/remote transport support. Basis:
  https://agentclientprotocol.com/protocol/v1/transports

### Agent2Agent role candidates

- `a2a-client` — exact client-agent role support.
- `a2a-server` — exact remote-agent/server role support.
- Shared terminology basis:
  https://a2a-protocol.org/latest/specification/

Before admitting either A2A role, decide whether discovery, task lifecycle,
streaming, artifacts, and bindings require separate atomic rows rather than a
broad role boolean.

## Ranked wide candidates

1. Kiro — https://kiro.dev/docs/
2. Qwen Code — https://qwenlm.github.io/qwen-code-docs/en/
3. Junie — https://junie.jetbrains.com/docs/
4. Amazon Q Developer —
   https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/
5. Augment — https://docs.augmentcode.com/
6. OpenHands — https://docs.openhands.dev/
7. Roo Code — https://roocodeinc.github.io/Roo-Code/
8. Kilo Code — https://kilo.ai/docs/
9. Trae — https://docs.trae.ai/

Each candidate must be decomposed into exact web/desktop/CLI surfaces. Do not
add a provider mark; use the catalog's original monogram fallback.

## Cycle 1 live queue snapshot — 2026-08-31

- Completed and integrated: `aider` 12/114, `amp-cli` 25/114, `goose` 28/114,
  `jetbrains-ai` 17/114.
- Completed research briefs awaiting single-writer integration:
  `copilot-web` (26 Top-30 candidates plus 10 adjacent candidates), `windsurf`
  (22 Top-30 candidates), and `chrome-webmcp-preview` (7 Top-30 candidates).
- `chatgpt-cli` remains 0/114 because the reviewed first-party OpenAI terminal
  product is Codex CLI, not an exact ChatGPT CLI surface; searched Top-30 pairs
  are recorded as attempts rather than projected from Codex.
- Next lowest unresearched Phase-A harnesses after the completed briefs:
  `devin-web`, `grok-web`, `warp`, `opencode`, `le-chat`, and `replit-agent`.

## Current queue

Queue rewritten: 2026-09-01 after cycle 10 research. Skip recorded attempts until their
30-day cooldown expires unless a first-party changelog directly reopens them.

1. `grok-web` × remaining consumer inputs, sharing, search, voice, and policy
   rows from current xAI Help Center and legal pages.
2. `le-chat` × remaining current Vibe Work and Chat web rows, keeping Vibe
   Code terminal/editor and remote-session behavior outside this column.
3. `chrome-webmcp-preview` × only newly documented exact WebMCP rows; Cycle 8
   completed the currently supportable MCP-boundary and runtime cells.
4. `windsurf` × remaining Devin Desktop rows, preserving qualifiers that
   distinguish Devin Local, legacy Cascade, and hosted Devin execution.
5. `chatgpt-cli` × no capability research until a first-party identity source
   establishes this as a distinct current product rather than Codex CLI.
6. Release-pinned `codex-cli`, `gemini-cli`, `copilot-cli`, and `claude-cli`
   × models/context and subagent atomic rows with measured-value contracts.
7. Best-documented harnesses × `output-token-limit`, the only atomic feature
   still at zero direct reviewed current-track cells.
8. Stable-source exact-scope negative sweeps for narrowly defined MCP and
   WebMCP families only where a complete maintained implementation is auditable.
9. MCP and models/context family sweeps until each reaches the Phase-B 40%
   threshold; current baselines are 32.0% and 25.0% respectively.
10. `jetbrains-ai`, `opencode`, `warp`, `devin-web`, and `aider` only for rows
   reopened by exact first-party evidence; otherwise honor cooldowns.

## Current Phase-A snapshot after Cycle 10 research

The validated local report is 1,359/3,534 current-track cells (38.5%). The
remaining sub-30 harnesses, in ascending sourced count, are:

1. `chatgpt-cli` — 3/114; product identity blocked, so do not inherit Codex CLI
2. `chrome-webmcp-preview` — 17/114; keep current and preview evidence separate
3. `grok-web` — 21/114
4. `le-chat` — 21/114; stable slug now names the Vibe browser continuation

Windsurf cleared the Phase-A floor at 30/114 after Cognition's first-party
rename statement permitted the catalog to track the in-place Devin Desktop
continuation deliberately. Mistral's current Vibe docs likewise establish an
in-place browser continuation at chat.mistral.ai while keeping Work/Chat and
Code modes distinct. The next cycle should prioritize Grok web and Vibe;
the ambiguous ChatGPT CLI column remains parked.

## Ledger candidates

Contradictions awaiting possible deliberate promotion to
`packages/catalog/src/atlas.ts` belong here. Routine cycles append candidates
but do not edit the atlas.

- feature=native-rules harness=windsurf first_seen=2026-08-29 status=resolved-2026-08-31
  src1=https://windsurf.com
  src2=https://devin.ai/desktop
  issue=Cognition now states that Devin Desktop is the new name for Windsurf, delivered as an in-place update with the IDE, extensions, workflows, settings, and in-progress work preserved.
  next=Keep the stable windsurf slug for compatibility while labeling the exact surface Devin Desktop and qualifying Devin Local, legacy Cascade, and hosted Devin behavior separately.

- feature=workspace-files harness=chatgpt-cli first_seen=2026-08-29
  src1=https://learn.chatgpt.com/docs/llms.txt
  src2=https://developers.openai.com/codex/cli/
  issue=OpenAI's current documentation index identifies the terminal product as Codex CLI and does not establish a separate exact ChatGPT CLI product surface matching the catalog column.
  next=Obtain a current first-party product-identity statement for ChatGPT CLI or deliberately migrate or retire the ambiguous catalog column before sourcing product capabilities.

- feature=data-retention-controls harness=jetbrains-ai first_seen=2026-08-29
  src1=https://youtrack.jetbrains.com/projects/JUNIE/articles/SUPPORT-A-659/AI-Assistant-data-privacy-storage-and-transmission-what-information-is-sent-to-the-cloud-and-how-it-is-stored
  src2=https://www.jetbrains.com/legal/docs/terms/product_data_collection/
  issue=The current support article states no more than 30 days for opted-in detailed data while the June 2026 legal notice states one year for detailed code-related data.
  next=Obtain a current authoritative JetBrains scope or version statement reconciling which retention term governs AI Assistant before authoring the cell.

- feature=custom-instructions harness=le-chat first_seen=2026-08-29 status=resolved-2026-09-01
  src1=https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe
  src2=https://content.mistral.ai/le-chat/
  issue=Mistral says Le Chat became Vibe while retaining the same URL, account, and conversations, leaving the existing exact-surface catalog identity stale or ambiguous.
  next=Resolved: keep the stable le-chat slug as Vibe (formerly Le Chat) for the browser entry point, source Work/Chat browser behavior only, and do not transfer Vibe Code terminal, editor, or remote-session behavior into this web column.

- feature=conversation-export harness=cline first_seen=2026-08-29
  src1=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/core/controller/task/exportTaskWithId.ts#L5-L20
  src2=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/proto/cline/task.proto#L27-L38
  issue=The same stable release labels the wrapper as Markdown export while the protobuf contract describes opening the complete task directory.
  next=Recheck the next stable release and retain medium-confidence directory and JSON wording until implementation and public documentation converge.

- feature=browser-automation harness=cline first_seen=2026-08-29
  src1=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/browser/BrowserSession.ts#L155-L225
  src2=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/tools-reference/all-cline-tools.mdx#L9-L32
  issue=The stable package retains the legacy browser_action runtime while the exhaustive ClineCore built-in tool table omits browser automation.
  next=Recheck release packaging and runtime selection in the next stable tag; keep support partial and runtime-qualified meanwhile.

- feature=mcp-cancellation harness=zed-agent first_seen=2026-08-29
  src1=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/client.rs#L374-L486
  src2=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L374-L393
  issue=The generic MCP client can emit notifications/cancelled, but the exact native Agent call path supplies no cancellation receiver and races local UI cancellation outside the protocol client.
  next=Reopen when the native registry wires request_with or another protocol cancellation channel into tool calls.

Use this record shape:

```text
- feature=<slug> harness=<slug> first_seen=YYYY-MM-DD
  src1=<https-url>
  src2=<https-url>
  issue=<one sentence describing the exact conflict>
  next=<what authoritative clarification would resolve it>
```
