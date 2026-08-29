# Research backlog

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

## Current queue

Queue rewritten: 2026-08-29 for cycle 1. Dispatch the first 5–8 non-conflicting
briefs, then refill from live coverage and fresh attempts.

1. `chatgpt-cli` × Phase-A workspace/tools bundle (10 cells). First establish
   that first-party docs actually describe this exact surface; do not substitute
   Codex CLI.
2. `amp-cli` × Phase-A instructions/interoperability bundle (10 cells), using
   Amp docs and exact product terminology.
3. `goose` × Phase-A workspace/tools bundle (10 cells), using maintained AAIF
   docs/repository pages.
4. `jetbrains-ai` × Phase-A workspace/tools bundle (10 cells), scoped to AI
   Assistant rather than Junie.
5. `aider` × Phase-A runtime/context/input/governance bundle (10 cells), keeping
   local CLI and model-provider claims separate.
6. `windsurf` × Phase-A instructions/interoperability bundle (10 cells),
   checking current Windsurf/Cognition documentation ownership.
7. `copilot-web` × Phase-A runtime/context/input/governance bundle (10 cells),
   separating Microsoft Copilot web from GitHub Copilot cloud agent.
8. `chrome-webmcp-preview` × `webmcp` atomic sweep (7 cells), with origin-trial
   and preview qualifiers; current and preview tracks still need separate
   evidence decisions.
9. `devin-web` × Phase-A workspace/tools bundle (10 cells), scoped to hosted
   Devin sessions.
10. Feature probe: `output-token-limit` across the best-documented product
    surfaces. Reject raw model/API output limits and record plan/mode/reset scope.

## Ledger candidates

Contradictions awaiting possible deliberate promotion to
`packages/catalog/src/atlas.ts` belong here. Routine cycles append candidates
but do not edit the atlas.

No candidates were open at bootstrap.

Use this record shape:

```text
- feature=<slug> harness=<slug> first_seen=YYYY-MM-DD
  src1=<https-url>
  src2=<https-url>
  issue=<one sentence describing the exact conflict>
  next=<what authoritative clarification would resolve it>
```
