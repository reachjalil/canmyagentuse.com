---
title: Vendor-by-Vendor Compatibility Seed
file: vendor-by-vendor.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T23:30:00Z
confidence: mixed
sources_count: 183
---

# Vendor-by-Vendor Compatibility Seed

## Reader Promise

Each section shows the exact included surfaces, evidence tier, documented support, explicit limitations, partial or gated behavior, and the most material remaining unknowns.

## Status interpretation

Supported and unsupported lists are generated from the scoped full grid. Registry-only vendors intentionally show ACP agent support and broad unknowns. Counts are evidence coverage, not product quality.

## Agoragentic

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Agoragentic | acp-agent | 1.3.0 | ga | acp-agent |

### Documented/registry-supported

- **Agoragentic · ACP agent/server role** (registry-listed) — Official ACP Registry 1.3.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Agoragentic · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Aider

**Coverage tier:** D  
**Inclusion basis:** watchlist; first-party documentation reviewed but no current protocol claim found  
**Surfaces:** 1  
**Cells:** supported 2 · partial 1 · explicit no 0 · unknown 46

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Aider CLI | cli | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Aider CLI · Native rules/instructions** (documented) — Convention files can be loaded persistently through .aider.conf.yml. [S-302]
- **Aider CLI · Headless / CI execution** (documented) — --message and --message-file process one prompt and exit without interactive chat. [S-301]

### Partial, gated, experimental, or conflicting

- **Aider CLI · Session handoff/import** (documented) — The CLI can export context for manual paste into a web UI; this is a clipboard handoff, not synchronized session state. [S-303]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- No generated high-priority gap in the selected backlog; lower-priority cells may remain unknown.

### Sources

- [S-271] Aider documentation — https://aider.chat/docs/
- [S-302] Aider coding conventions — https://aider.chat/docs/usage/conventions.html
- [S-301] Aider options reference — https://aider.chat/docs/config/options.html
- [S-303] Aider in-chat commands — https://aider.chat/docs/usage/commands.html
## Alibaba / Qwen

**Coverage tier:** A  
**Inclusion basis:** first-party Qwen Code docs + ACP registry  
**Surfaces:** 1  
**Cells:** supported 15 · partial 0 · explicit no 0 · unknown 34

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Qwen Code CLI | cli | 0.22.2 registry / observed 2026-08-28 | ga | acp-agent |

### Documented/registry-supported

- **Qwen Code CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 0.22.2; registry proves the agent role, not every optional ACP method. [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Agent Skills core** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Agent Skills scripts/assets** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Headless / CI execution** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · MCP client role** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · MCP prompts** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · MCP resources** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · MCP tools** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Custom agents** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Native plugin system** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Nested subagents** (documented) — Nested/multi-agent coordination includes experimental features. [S-001;S-210;S-211;S-212;S-213;S-214;S-215]
- **Qwen Code CLI · Subagent MCP access** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Subagent write access** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]
- **Qwen Code CLI · Subagents** (documented) [S-001;S-210;S-211;S-212;S-213;S-214]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Qwen Code CLI · MCP 2026-07-28 (P1)
- Qwen Code CLI · MCP OAuth (P1)
- Qwen Code CLI · MCP roots (P2)
- Qwen Code CLI · MCP sampling (P2)
- Qwen Code CLI · MCP elicitation (P2)
- Qwen Code CLI · MCP tasks (P2)
- Qwen Code CLI · MCP Apps / interactive UI (P2)
- Qwen Code CLI · Agent Plugins failure isolation (P2)
- Qwen Code CLI · ACP session load/resume (P2)
- Qwen Code CLI · ACP session list (P2)
- Qwen Code CLI · ACP terminal reverse RPC (P2)
- Qwen Code CLI · A2A client role (P2)
- Qwen Code CLI · A2A agent/server role (P2)

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-210] Qwen Code Agent Skills — https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/
- [S-211] Qwen Code MCP — https://qwenlm.github.io/qwen-code-docs/en/developers/tools/mcp-server/
- [S-212] Qwen Code Subagents — https://qwenlm.github.io/qwen-code-docs/en/users/features/sub-agents/
- [S-213] Qwen Code Extensions — https://qwenlm.github.io/qwen-code-docs/en/users/extension/introduction/
- [S-214] Qwen Code Architecture — https://qwenlm.github.io/qwen-code-docs/en/developers/architecture/
- [S-215] Qwen Code Multi-Agent Coordination — https://qwenlm.github.io/qwen-code-docs/en/users/features/multi-agent-coordination/

## Amp

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Amp ACP wrapper | acp-wrapper | 0.9.0 | ga | acp-agent |

### Documented/registry-supported

- **Amp ACP wrapper · ACP agent/server role** (registry-listed) — Official ACP Registry 0.9.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Amp ACP wrapper · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Anthropic

**Coverage tier:** A  
**Inclusion basis:** first-party deep dive + ACP registry wrapper  
**Surfaces:** 2  
**Cells:** supported 24 · partial 3 · explicit no 0 · unknown 71

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Claude Code CLI / local host | cli | 2.1.232+ / observed 2026-08-28 | ga |  |
| Claude Agent ACP wrapper | acp-adapter | 0.70.0 | ga | acp-agent |

### Documented/registry-supported

- **Claude Agent ACP wrapper · ACP agent/server role** (registry-listed) — Official ACP Registry 0.70.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Claude Agent ACP wrapper · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]
- **Claude Code CLI / local host · Agent Skills core** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Agent Skills scripts/assets** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Marketplace or registry** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Native rules/instructions** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · MCP OAuth** (documented) [S-010]
- **Claude Code CLI / local host · MCP Streamable HTTP** (documented) [S-010]
- **Claude Code CLI / local host · MCP WebSocket extension** (documented) — Claude-specific WebSocket extension; not MCP core transport. [S-010]
- **Claude Code CLI / local host · MCP client role** (documented) [S-010]
- **Claude Code CLI / local host · MCP elicitation** (documented) [S-010]
- **Claude Code CLI / local host · MCP legacy SSE** (documented) [S-010]
- **Claude Code CLI / local host · MCP list_changed** (documented) [S-010]
- **Claude Code CLI / local host · MCP prompts** (documented) [S-010]
- **Claude Code CLI / local host · MCP resources** (documented) [S-010]
- **Claude Code CLI / local host · MCP roots** (documented) [S-010]
- **Claude Code CLI / local host · MCP server role** (documented) — Claude Code can expose an MCP server surface through its documented serve mode. [S-010]
- **Claude Code CLI / local host · MCP stdio** (documented) [S-010]
- **Claude Code CLI / local host · MCP tools** (documented) [S-010]
- **Claude Code CLI / local host · Custom agents** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Hooks** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Native plugin system** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Subagent write access** (documented) [S-011;S-012;S-013;S-014]
- **Claude Code CLI / local host · Subagents** (documented) [S-011;S-012;S-013;S-014]

### Partial, gated, experimental, or conflicting

- **Claude Code CLI / local host · Agent Skills standard paths** (documented) — Agent Skills core is supported with Claude-specific locations/extensions; standard .agents path behavior is not the sole discovery mechanism. [S-011]
- **Claude Code CLI / local host · MCP 2026-07-28** (documented+reported) — New runtime can negotiate 2026-07-28, but provider/gateway/feature-flag conditions and a reported validation bug limit universal claims. [S-010;S-015]
- **Claude Code CLI / local host · Subagent MCP access** (documented) — Project/user subagents can use tools, but plugin subagents ignore mcpServers frontmatter. [S-014]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Claude Code CLI / local host · MCP sampling (P2)
- Claude Code CLI / local host · MCP tasks (P2)
- Claude Code CLI / local host · MCP Apps / interactive UI (P2)
- Claude Code CLI / local host · Agent Plugins failure isolation (P2)
- Claude Code CLI / local host · ACP session load/resume (P2)
- Claude Code CLI / local host · ACP session list (P2)
- Claude Code CLI / local host · ACP terminal reverse RPC (P2)
- Claude Code CLI / local host · A2A client role (P2)
- Claude Code CLI / local host · A2A agent/server role (P2)

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-010] Claude Code MCP — https://code.claude.com/docs/en/mcp
- [S-011] Claude Code Skills — https://code.claude.com/docs/en/skills
- [S-012] Claude Code Plugins reference — https://code.claude.com/docs/en/plugins-reference
- [S-013] Claude Code Hooks — https://code.claude.com/docs/en/hooks
- [S-014] Claude Code Subagents — https://code.claude.com/docs/en/sub-agents
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128

## Augment Code

**Coverage tier:** A  
**Inclusion basis:** first-party Auggie docs + ACP registry  
**Surfaces:** 2  
**Cells:** supported 28 · partial 0 · explicit no 0 · unknown 70

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Auggie CLI | cli | 0.36.0 registry / observed 2026-08-28 | ga | acp-agent |
| Augment IDE agent | ide-extension | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Auggie CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 0.36.0; registry proves the agent role, not every optional ACP method. [S-001;S-134]
- **Auggie CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-134]
- **Auggie CLI · Agent Skills core** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Agent Skills scripts/assets** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Agent Skills standard paths** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Headless / CI execution** (documented) [S-001;S-134]
- **Auggie CLI · Marketplace or registry** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Organization policy controls** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Native rules/instructions** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · MCP client role** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · MCP server role** (documented) [S-001;S-134]
- **Auggie CLI · MCP tools** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Custom agents** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Hooks** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Native plugin system** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Auggie CLI · Subagents** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Agent Skills core** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Agent Skills scripts/assets** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Agent Skills standard paths** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Marketplace or registry** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Organization policy controls** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Native rules/instructions** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · MCP client role** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · MCP tools** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Custom agents** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Hooks** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Native plugin system** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]
- **Augment IDE agent · Subagents** (documented) [S-130;S-131;S-132;S-133;S-135;S-136]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Auggie CLI · MCP 2026-07-28 (P1)
- Auggie CLI · MCP resources (P1)
- Auggie CLI · MCP prompts (P1)
- Auggie CLI · MCP OAuth (P1)
- Auggie CLI · MCP roots (P2)
- Auggie CLI · MCP sampling (P2)
- Auggie CLI · MCP elicitation (P2)
- Auggie CLI · MCP tasks (P2)
- Auggie CLI · MCP Apps / interactive UI (P2)
- Auggie CLI · Agent Plugins failure isolation (P2)
- Auggie CLI · ACP session load/resume (P2)
- Auggie CLI · ACP session list (P2)
- Auggie CLI · ACP terminal reverse RPC (P2)
- Auggie CLI · A2A client role (P2)
- Auggie CLI · A2A agent/server role (P2)
- Augment IDE agent · MCP 2026-07-28 (P1)
- Augment IDE agent · MCP resources (P1)
- Augment IDE agent · MCP prompts (P1)
- Augment IDE agent · MCP OAuth (P1)
- Augment IDE agent · MCP roots (P2)
- … 10 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-130] Auggie Agent Skills — https://docs.augmentcode.com/cli/skills
- [S-131] Auggie MCP — https://docs.augmentcode.com/cli/integrations
- [S-132] Auggie Plugins — https://docs.augmentcode.com/cli/plugins
- [S-133] Auggie Hooks — https://docs.augmentcode.com/cli/hooks
- [S-134] Auggie CLI reference — https://docs.augmentcode.com/cli/reference
- [S-135] Auggie Rules — https://docs.augmentcode.com/cli/rules
- [S-136] Auggie Permissions — https://docs.augmentcode.com/cli/permissions

## Autohand

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Autohand Code | acp-agent | 0.2.1 | ga | acp-agent |

### Documented/registry-supported

- **Autohand Code · ACP agent/server role** (registry-listed) — Official ACP Registry 0.2.1; registry proves the agent role, not every optional ACP method. [S-001]
- **Autohand Code · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## AWS / Kiro

**Coverage tier:** A  
**Inclusion basis:** first-party surface tables + Agent Plugins + ACP registry  
**Surfaces:** 4  
**Cells:** supported 38 · partial 3 · explicit no 5 · unknown 150

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Kiro IDE | ide-agent | observed 2026-08-28 | ga |  |
| Kiro CLI 3 | cli | 3.x / observed 2026-08-28 | ga |  |
| Kiro Web | web-agent | hosted observed 2026-08-28 | ga |  |
| Kiro Mobile | mobile-agent | preview observed 2026-08-28 | preview |  |

### Documented/registry-supported

- **Kiro CLI 3 · Agent Plugins 1.0 core** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · Agent Plugins packaged MCP** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · Agent Plugins packaged skills** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · Agent Skills core** (documented) [S-080]
- **Kiro CLI 3 · Agent Skills scripts/assets** (documented) [S-080]
- **Kiro CLI 3 · Agent Skills standard paths** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · Headless / CI execution** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · MCP Streamable HTTP** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · MCP client role** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · MCP legacy SSE** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · MCP stdio** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · MCP tools** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · Hooks** (documented) [S-080;S-081;S-082;S-083]
- **Kiro CLI 3 · Native plugin system** (documented) [S-080;S-081;S-082;S-083]
- **Kiro IDE · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Kiro; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-080;S-081;S-082]
- **Kiro IDE · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Kiro; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-080;S-081;S-082]
- **Kiro IDE · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Kiro; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-080;S-081;S-082]
- **Kiro IDE · Agent Skills core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Kiro; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-080]
- **Kiro IDE · Agent Skills scripts/assets** (documented) [S-080]
- **Kiro IDE · Agent Skills standard paths** (documented) [S-002;S-080;S-081;S-082]
- **Kiro IDE · Marketplace or registry** (documented) [S-002;S-080;S-081;S-082]
- **Kiro IDE · Organization policy controls** (documented) [S-002;S-080;S-081;S-082]
- **Kiro IDE · MCP Streamable HTTP** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-080;S-081;S-082]
- **Kiro IDE · MCP client role** (documented) [S-002;S-080;S-081;S-082]
- **Kiro IDE · MCP legacy SSE** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-080;S-081;S-082]
- **Kiro IDE · MCP stdio** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-080;S-081;S-082]
- **Kiro IDE · MCP tools** (documented) [S-002;S-080;S-081;S-082]
- **Kiro IDE · Hooks** (documented) [S-002;S-080;S-081;S-082]
- **Kiro IDE · Native plugin system** (documented) [S-002;S-080;S-081;S-082]
- **Kiro Mobile · Agent Skills core** (documented) [S-080]
- **Kiro Mobile · Agent Skills scripts/assets** (documented) [S-080]
- **Kiro Web · Agent Plugins 1.0 core** (documented) [S-080;S-082]
- **Kiro Web · Agent Plugins packaged MCP** (documented) [S-080;S-082]
- **Kiro Web · Agent Plugins packaged skills** (documented) [S-080;S-082]
- **Kiro Web · Agent Skills core** (documented) [S-080]
- **Kiro Web · Agent Skills scripts/assets** (documented) [S-080]
- **Kiro Web · MCP client role** (documented) [S-080;S-082]
- **Kiro Web · MCP tools** (documented) [S-080;S-082]

### Partial, gated, experimental, or conflicting

- **Kiro CLI 3 · Session handoff/import** (documented) — CLI 3 migration changed session/config behavior; migration risk is explicit. [S-083]
- **Kiro Mobile · Agent Skills standard paths** (documented) — Mobile supports workspace skills but not global skills, Hooks, or Powers/Agent Plugins. [S-080;S-081;S-082]
- **Kiro Web · Agent Skills standard paths** (documented) — Hooks and global skill paths are unavailable on Web; workspace skills remain supported. [S-080;S-081]

### Explicitly unsupported or currently unavailable

- **Kiro Mobile · Agent Plugins 1.0 core** (documented) — Mobile supports workspace skills but not global skills, Hooks, or Powers/Agent Plugins. [S-080;S-081;S-082]
- **Kiro Mobile · Agent Plugins packaged MCP** (documented) — Mobile supports workspace skills but not global skills, Hooks, or Powers/Agent Plugins. [S-080;S-081;S-082]
- **Kiro Mobile · Agent Plugins packaged skills** (documented) — Mobile supports workspace skills but not global skills, Hooks, or Powers/Agent Plugins. [S-080;S-081;S-082]
- **Kiro Mobile · Hooks** (documented) — Mobile supports workspace skills but not global skills, Hooks, or Powers/Agent Plugins. [S-080;S-081;S-082]
- **Kiro Web · Hooks** (documented) — Hooks and global skill paths are unavailable on Web; workspace skills remain supported. [S-080;S-081]

### High-priority unknowns

- Kiro IDE · MCP 2026-07-28 (P1)
- Kiro IDE · MCP resources (P1)
- Kiro IDE · MCP prompts (P1)
- Kiro IDE · MCP OAuth (P1)
- Kiro IDE · MCP roots (P2)
- Kiro IDE · MCP sampling (P2)
- Kiro IDE · MCP elicitation (P2)
- Kiro IDE · MCP tasks (P2)
- Kiro IDE · MCP Apps / interactive UI (P2)
- Kiro IDE · Agent Plugins failure isolation (P2)
- Kiro IDE · ACP session load/resume (P2)
- Kiro IDE · ACP session list (P2)
- Kiro IDE · ACP terminal reverse RPC (P2)
- Kiro IDE · A2A client role (P2)
- Kiro IDE · A2A agent/server role (P2)
- Kiro CLI 3 · MCP 2026-07-28 (P1)
- Kiro CLI 3 · MCP resources (P1)
- Kiro CLI 3 · MCP prompts (P1)
- Kiro CLI 3 · MCP OAuth (P1)
- Kiro CLI 3 · MCP roots (P2)
- … 40 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-080] Kiro Agent Skills — https://kiro.dev/docs/skills/
- [S-081] Kiro Hooks — https://kiro.dev/docs/hooks/
- [S-082] Kiro Powers — https://kiro.dev/docs/powers/create/
- [S-083] Kiro CLI 3 migration — https://kiro.dev/docs/cli/v3/

## Block / goose

**Coverage tier:** A  
**Inclusion basis:** first-party MCP/Skills/ACP/subagent docs + ACP registry  
**Surfaces:** 3  
**Cells:** supported 31 · partial 2 · explicit no 0 · unknown 114

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| goose CLI | cli | 1.48.0 | ga | acp-agent |
| goose desktop | desktop | observed 2026-08-28 | ga |  |
| goose ACP-agent provider host | acp-client | observed 2026-08-28 | ga | acp-client |

### Documented/registry-supported

- **goose ACP-agent provider host · ACP MCP forwarding** (documented) [S-146]
- **goose ACP-agent provider host · ACP client/host role** (documented) [S-146]
- **goose ACP-agent provider host · ACP stdio** (documented) [S-146]
- **goose CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 1.48.0; registry proves the agent role, not every optional ACP method. [S-001;S-145]
- **goose CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-145]
- **goose CLI · Agent Skills core** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · Agent Skills scripts/assets** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · Agent Skills standard paths** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP client role** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP elicitation** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP prompts** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP resources** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP roots** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP sampling** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · MCP tools** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · Custom agents** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · Native plugin system** (documented) [S-140;S-141;S-142;S-143]
- **goose CLI · Subagents** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · Agent Skills core** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · Agent Skills scripts/assets** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · Agent Skills standard paths** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP client role** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP elicitation** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP prompts** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP resources** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP roots** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP sampling** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · MCP tools** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · Custom agents** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · Native plugin system** (documented) [S-140;S-141;S-142;S-143]
- **goose desktop · Subagents** (documented) [S-140;S-141;S-142;S-143]

### Partial, gated, experimental, or conflicting

- **goose CLI · MCP Apps / interactive UI** (documented) — MCP-UI/MCP Apps-style support is experimental and may change. [S-144]
- **goose desktop · MCP Apps / interactive UI** (documented) — MCP-UI/MCP Apps-style support is experimental and may change. [S-144]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- goose CLI · MCP 2026-07-28 (P1)
- goose CLI · MCP OAuth (P1)
- goose CLI · MCP tasks (P2)
- goose CLI · Agent Plugins failure isolation (P2)
- goose CLI · ACP session load/resume (P2)
- goose CLI · ACP session list (P2)
- goose CLI · ACP terminal reverse RPC (P2)
- goose CLI · A2A client role (P2)
- goose CLI · A2A agent/server role (P2)
- goose desktop · MCP 2026-07-28 (P1)
- goose desktop · MCP OAuth (P1)
- goose desktop · MCP tasks (P2)
- goose desktop · Agent Plugins failure isolation (P2)
- goose desktop · ACP session load/resume (P2)
- goose desktop · ACP session list (P2)
- goose desktop · ACP terminal reverse RPC (P2)
- goose desktop · A2A client role (P2)
- goose desktop · A2A agent/server role (P2)
- goose ACP-agent provider host · MCP 2026-07-28 (P1)
- goose ACP-agent provider host · MCP resources (P1)
- … 13 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-140] goose documentation home — https://goose-docs.ai/
- [S-141] goose Agent Skills — https://goose-docs.ai/docs/guides/context-engineering/using-skills/
- [S-142] goose Subagents — https://goose-docs.ai/docs/guides/context-engineering/subagents/
- [S-143] goose Custom Agents — https://goose-docs.ai/docs/guides/context-engineering/custom-agents/
- [S-144] goose MCP Apps article — https://goose-docs.ai/blog/2025/08/11/mcp-ui-post-browser-world/
- [S-145] goose ACP introduction — https://goose-docs.ai/blog/2025/10/24/intro-to-agent-client-protocol-acp/
- [S-146] goose ACP provider MCP forwarding — https://goose-docs.ai/blog/2026/03/19/use-goose-with-your-ai-subscription/

## Cline

**Coverage tier:** A  
**Inclusion basis:** first-party CLI/extension/subagent docs + ACP registry  
**Surfaces:** 2  
**Cells:** supported 26 · partial 2 · explicit no 4 · unknown 66

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Cline VS Code extension | ide-extension | observed 2026-08-28 | ga |  |
| Cline CLI | cli | 3.0.60 | ga | acp-agent |

### Documented/registry-supported

- **Cline VS Code extension · MCP client role** (documented) [S-091;S-093]
- **Cline VS Code extension · MCP tools** (documented) [S-091;S-093]
- **Cline VS Code extension · MCP resources** (documented) — The extension exposes access_mcp_resource for configured MCP servers. [S-091;S-295]
- **Cline VS Code extension · MCP stdio** (documented) [S-091;S-093]
- **Cline VS Code extension · MCP Streamable HTTP** (documented) [S-091;S-093]
- **Cline VS Code extension · Agent Skills core** (documented) [S-091;S-093]
- **Cline VS Code extension · Agent Skills scripts/assets** (documented) — Cline skills can bundle docs, templates, resources, and executable scripts. [S-093;S-296]
- **Cline VS Code extension · Native rules/instructions** (documented) [S-091;S-093]
- **Cline VS Code extension · Hooks** (documented) [S-091;S-093]
- **Cline VS Code extension · Subagents** (documented) [S-091;S-093]
- **Cline VS Code extension · Marketplace or registry** (documented) — The extension can discover and install integrations from Cline's MCP Marketplace. [S-295]
- **Cline VS Code extension · Custom agents** (documented) [S-091;S-093]
- **Cline CLI · MCP client role** (documented) — Cline documents MCP server use in both its CLI and VS Code extension. [S-092;S-295]
- **Cline CLI · MCP tools** (documented) — Cline CLI can discover and execute tools exposed by MCP servers. [S-295]
- **Cline CLI · MCP resources** (documented) — Cline documents MCP resources and an access_mcp_resource tool for the CLI harness. [S-295]
- **Cline CLI · Agent Skills core** (documented) — Cline CLI discovers on-demand SKILL.md packages. [S-092;S-296]
- **Cline CLI · Agent Skills scripts/assets** (documented) — Cline skills can bundle docs, templates, resources, and executable scripts. [S-296]
- **Cline CLI · ACP agent/server role** (documented; registry-listed) — Official ACP Registry 3.0.60; registry proves the agent role, not every optional ACP method. [S-001;S-092]
- **Cline CLI · ACP stdio** (documented; registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-092]
- **Cline CLI · Native rules/instructions** (documented) — The CLI reference documents global and project rules directories. [S-092]
- **Cline CLI · Hooks** (documented) — Eight lifecycle hook types are explicitly available in Cline CLI. [S-092;S-298]
- **Cline CLI · Native plugin system** (documented) — Cline CLI installs native plugins from npm, Git, or local paths. [S-092;S-297]
- **Cline CLI · Marketplace or registry** (documented) — The CLI can install MCP integrations from Cline Marketplace and plugins from the npm registry. [S-295;S-297]
- **Cline CLI · Headless / CI execution** (documented) — Persistent cron schedules run new CLI agent sessions independently of a client application. [S-092;S-001;S-299]
- **Cline CLI · Session handoff/import** (documented) — CLI connectors create or continue the same agent session from messaging surfaces. [S-295;S-300]
- **Cline CLI · Custom agents** (documented) — Project configuration includes agents.yaml agent definitions. [S-092]

### Partial, gated, experimental, or conflicting

- **Cline VS Code extension · Agent Skills standard paths** (documented) — Skill behavior is documented but includes Cline-specific locations and semantics. [S-093]
- **Cline CLI · Agent Skills standard paths** (documented) — SKILL.md is supported, but discovery uses Cline- and Claude-specific paths rather than the vendor-neutral .agents path. [S-296]

### Explicitly unsupported or currently unavailable

- **Cline VS Code extension · Nested subagents** (documented) [S-090]
- **Cline VS Code extension · Subagent MCP access** (documented) [S-090]
- **Cline VS Code extension · Subagent write access** (documented) [S-090]
- **Cline VS Code extension · Native plugin system** (documented) — Cline states that its native plugin system currently does not apply to the VS Code extension. [S-297]

### High-priority unknowns

- Cline VS Code extension · MCP 2026-07-28 (P1)
- Cline VS Code extension · MCP prompts (P1)
- Cline VS Code extension · MCP OAuth (P1)
- Cline VS Code extension · MCP roots (P2)
- Cline VS Code extension · MCP sampling (P2)
- Cline VS Code extension · MCP elicitation (P2)
- Cline VS Code extension · MCP tasks (P2)
- Cline VS Code extension · MCP Apps / interactive UI (P2)
- Cline VS Code extension · Agent Plugins failure isolation (P2)
- Cline VS Code extension · ACP session load/resume (P2)
- Cline VS Code extension · ACP session list (P2)
- Cline VS Code extension · ACP terminal reverse RPC (P2)
- Cline VS Code extension · A2A client role (P2)
- Cline VS Code extension · A2A agent/server role (P2)
- Cline CLI · MCP 2026-07-28 (P1)
- Cline CLI · MCP prompts (P1)
- Cline CLI · MCP OAuth (P1)
- Cline CLI · MCP roots (P2)
- Cline CLI · MCP sampling (P2)
- Cline CLI · MCP elicitation (P2)

### Sources

- [S-091] Cline Tools reference — https://docs.cline.bot/tools-reference/all-cline-tools
- [S-093] Cline Skills — https://docs.cline.bot/customization/skills
- [S-295] Cline MCP overview — https://docs.cline.bot/mcp/mcp-overview
- [S-296] Cline Skills — https://docs.cline.bot/customization/skills
- [S-090] Cline Subagents — https://docs.cline.bot/features/subagents
- [S-297] Cline Plugins — https://docs.cline.bot/customization/plugins
- [S-092] Cline CLI reference — https://docs.cline.bot/cli/cli-reference
- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-298] Cline Hooks — https://docs.cline.bot/customization/hooks
- [S-299] Cline Scheduled Agents — https://docs.cline.bot/sdk/guides/scheduled-agents
- [S-300] Cline Connectors — https://docs.cline.bot/cli/connectors
## Cognition

**Coverage tier:** A  
**Inclusion basis:** first-party Cascade/Devin surface split + ACP registry  
**Surfaces:** 4  
**Cells:** supported 34 · partial 2 · explicit no 0 · unknown 160

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Cascade desktop agent | desktop-agent | observed 2026-08-28 | ga |  |
| Devin Local | local-agent | observed 2026-08-28 | ga |  |
| Devin CLI | cli | 3000.6.2 registry / observed 2026-08-28 | ga | acp-agent |
| Devin Cloud | cloud-agent | hosted observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Cascade desktop agent · Agent Skills core** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · AGENTS.md** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · Native rules/instructions** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · MCP Streamable HTTP** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · MCP client role** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · MCP legacy SSE** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · MCP stdio** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · MCP tools** (documented) [S-120;S-121;S-122;S-123]
- **Cascade desktop agent · Hooks** (documented) [S-120;S-121;S-122;S-123]
- **Devin CLI · ACP agent/server role** (registry-listed) — Official ACP Registry 3000.6.2; registry proves the agent role, not every optional ACP method. [S-001]
- **Devin CLI · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]
- **Devin CLI · Agent Skills core** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Headless / CI execution** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Native rules/instructions** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · MCP client role** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · MCP tools** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Custom agents** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Hooks** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Native plugin system** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Subagent MCP access** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Subagent write access** (documented) [S-001;S-125;S-126;S-127]
- **Devin CLI · Subagents** (documented) [S-001;S-125;S-126;S-127]
- **Devin Cloud · Agent Skills core** (documented) [S-127]
- **Devin Cloud · Cloud agent** (documented) [S-127]
- **Devin Cloud · MCP client role** (documented) [S-127]
- **Devin Cloud · MCP tools** (documented) [S-127]
- **Devin Cloud · Native plugin system** (documented) [S-127]
- **Devin Cloud · Subagents** (documented) [S-127]
- **Devin Local · Agent Skills core** (documented) [S-124;S-128]
- **Devin Local · Native rules/instructions** (documented) [S-124;S-128]
- **Devin Local · Custom agents** (documented) [S-124;S-128]
- **Devin Local · Hooks** (documented) [S-124;S-128]
- **Devin Local · Native plugin system** (documented) [S-124;S-128]
- **Devin Local · Subagents** (documented) [S-124;S-128]

### Partial, gated, experimental, or conflicting

- **Cascade desktop agent · Organization policy controls** (documented) — Enterprise MCP can require administrator enablement. [S-121]
- **Devin Local · Session handoff/import** (documented) — Feature parity with Cascade is incomplete and migration behavior differs. [S-128]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Cascade desktop agent · MCP 2026-07-28 (P1)
- Cascade desktop agent · MCP resources (P1)
- Cascade desktop agent · MCP prompts (P1)
- Cascade desktop agent · MCP OAuth (P1)
- Cascade desktop agent · MCP roots (P2)
- Cascade desktop agent · MCP sampling (P2)
- Cascade desktop agent · MCP elicitation (P2)
- Cascade desktop agent · MCP tasks (P2)
- Cascade desktop agent · MCP Apps / interactive UI (P2)
- Cascade desktop agent · Agent Plugins failure isolation (P2)
- Cascade desktop agent · ACP session load/resume (P2)
- Cascade desktop agent · ACP session list (P2)
- Cascade desktop agent · ACP terminal reverse RPC (P2)
- Cascade desktop agent · A2A client role (P2)
- Cascade desktop agent · A2A agent/server role (P2)
- Devin Local · MCP 2026-07-28 (P1)
- Devin Local · MCP resources (P1)
- Devin Local · MCP prompts (P1)
- Devin Local · MCP OAuth (P1)
- Devin Local · MCP roots (P2)
- … 40 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-120] Cascade Skills — https://docs.devin.ai/desktop/cascade/skills
- [S-121] Cascade MCP — https://docs.devin.ai/desktop/cascade/mcp
- [S-122] Cascade Hooks — https://docs.devin.ai/desktop/cascade/hooks
- [S-123] Cascade AGENTS.md — https://docs.devin.ai/desktop/cascade/agents-md
- [S-124] Devin Local Agent — https://docs.devin.ai/desktop/devin-local
- [S-125] Devin CLI Skills — https://docs.devin.ai/cli/extensibility/skills/overview
- [S-126] Devin CLI Subagents — https://docs.devin.ai/cli/subagents
- [S-127] Devin CLI changelog — https://docs.devin.ai/cli/changelog/stable
- [S-128] Devin Local enterprise controls — https://docs.devin.ai/cli/enterprise/controls

## Compass AI / Nova

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Nova | acp-agent | 1.1.37 | ga | acp-agent |

### Documented/registry-supported

- **Nova · ACP agent/server role** (registry-listed) — Official ACP Registry 1.1.37; registry proves the agent role, not every optional ACP method. [S-001]
- **Nova · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Continue

**Coverage tier:** A  
**Inclusion basis:** first-party mode-specific MCP docs  
**Surfaces:** 3  
**Cells:** supported 9 · partial 0 · explicit no 10 · unknown 128

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Continue Agent mode | ide-agent-mode | observed 2026-08-28 | ga |  |
| Continue Plan mode | ide-plan-mode | observed 2026-08-28 | ga |  |
| Continue Chat mode | ide-chat-mode | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Continue Agent mode · Headless / CI execution** (documented) [S-110;S-111]
- **Continue Agent mode · Native rules/instructions** (documented) [S-110;S-111]
- **Continue Agent mode · MCP Streamable HTTP** (documented) [S-110;S-111]
- **Continue Agent mode · MCP client role** (documented) [S-110;S-111]
- **Continue Agent mode · MCP legacy SSE** (documented) [S-110;S-111]
- **Continue Agent mode · MCP stdio** (documented) [S-110;S-111]
- **Continue Agent mode · MCP tools** (documented) [S-110;S-111]
- **Continue Chat mode · Native rules/instructions** (documented) [S-111]
- **Continue Plan mode · Native rules/instructions** (documented) [S-111]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

- **Continue Chat mode · MCP Streamable HTTP** (documented) [S-110;S-111]
- **Continue Chat mode · MCP client role** (documented) [S-110;S-111]
- **Continue Chat mode · MCP legacy SSE** (documented) [S-110;S-111]
- **Continue Chat mode · MCP stdio** (documented) [S-110;S-111]
- **Continue Chat mode · MCP tools** (documented) [S-110;S-111]
- **Continue Plan mode · MCP Streamable HTTP** (documented) [S-110;S-111]
- **Continue Plan mode · MCP client role** (documented) [S-110;S-111]
- **Continue Plan mode · MCP legacy SSE** (documented) [S-110;S-111]
- **Continue Plan mode · MCP stdio** (documented) [S-110;S-111]
- **Continue Plan mode · MCP tools** (documented) [S-110;S-111]

### High-priority unknowns

- Continue Agent mode · MCP 2026-07-28 (P1)
- Continue Agent mode · MCP resources (P1)
- Continue Agent mode · MCP prompts (P1)
- Continue Agent mode · MCP OAuth (P1)
- Continue Agent mode · MCP roots (P2)
- Continue Agent mode · MCP sampling (P2)
- Continue Agent mode · MCP elicitation (P2)
- Continue Agent mode · MCP tasks (P2)
- Continue Agent mode · MCP Apps / interactive UI (P2)
- Continue Agent mode · Agent Plugins failure isolation (P2)
- Continue Agent mode · ACP session load/resume (P2)
- Continue Agent mode · ACP session list (P2)
- Continue Agent mode · ACP terminal reverse RPC (P2)
- Continue Agent mode · A2A client role (P2)
- Continue Agent mode · A2A agent/server role (P2)
- Continue Plan mode · MCP 2026-07-28 (P1)
- Continue Plan mode · MCP resources (P1)
- Continue Plan mode · MCP prompts (P1)
- Continue Plan mode · MCP OAuth (P1)
- Continue Plan mode · MCP roots (P2)
- … 25 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-110] Continue MCP setup — https://docs.continue.dev/customize/deep-dives/mcp
- [S-111] Continue Agent mode — https://docs.continue.dev/ide-extensions/agent/how-it-works

## Corust

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Corust Agent | acp-agent | 0.6.0 | ga | acp-agent |

### Documented/registry-supported

- **Corust Agent · ACP agent/server role** (registry-listed) — Official ACP Registry 0.6.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Corust Agent · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## crow-cli

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| crow-cli | acp-agent | 0.1.24 | ga | acp-agent |

### Documented/registry-supported

- **crow-cli · ACP agent/server role** (registry-listed) — Official ACP Registry 0.1.24; registry proves the agent role, not every optional ACP method. [S-001]
- **crow-cli · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Cursor

**Coverage tier:** A  
**Inclusion basis:** first-party deep dive + both registries  
**Surfaces:** 3  
**Cells:** supported 55 · partial 2 · explicit no 0 · unknown 90

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Cursor editor agent | native-editor-agent | observed 2026-08-28 | ga |  |
| Cursor CLI agent | cli | 2026.08.11 | ga | acp-agent |
| Cursor Cloud Agent | cloud-agent | hosted observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Cursor CLI agent · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 2026.08.11; registry proves the agent role, not every optional ACP method. [S-001;S-034]
- **Cursor CLI agent · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-034]
- **Cursor CLI agent · Agent Plugins 1.0 core** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Agent Plugins packaged MCP** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Agent Plugins packaged skills** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Agent Skills core** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Headless / CI execution** (documented) [S-001;S-034]
- **Cursor CLI agent · Marketplace or registry** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · AGENTS.md** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Native rules/instructions** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · MCP Apps / interactive UI** (documented) [S-031]
- **Cursor CLI agent · MCP OAuth** (documented) [S-031]
- **Cursor CLI agent · MCP Streamable HTTP** (documented) [S-031]
- **Cursor CLI agent · MCP client role** (documented) [S-031]
- **Cursor CLI agent · MCP elicitation** (documented) [S-031]
- **Cursor CLI agent · MCP legacy SSE** (documented) [S-031]
- **Cursor CLI agent · MCP prompts** (documented) [S-031]
- **Cursor CLI agent · MCP resources** (documented) [S-031]
- **Cursor CLI agent · MCP roots** (documented) [S-031]
- **Cursor CLI agent · MCP stdio** (documented) [S-031]
- **Cursor CLI agent · MCP tools** (documented) [S-031]
- **Cursor CLI agent · Custom agents** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Hooks** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Native plugin system** (documented) [S-030;S-032;S-033]
- **Cursor CLI agent · Subagents** (documented) [S-030;S-032;S-033]
- **Cursor Cloud Agent · Cloud agent** (documented) [S-035]
- **Cursor Cloud Agent · Organization policy controls** (documented) [S-035]
- **Cursor Cloud Agent · MCP OAuth** (documented) [S-035]
- **Cursor Cloud Agent · MCP Streamable HTTP** (documented) [S-035]
- **Cursor Cloud Agent · MCP client role** (documented) [S-035]
- **Cursor Cloud Agent · MCP stdio** (documented) [S-035]
- **Cursor Cloud Agent · MCP tools** (documented) [S-035]
- **Cursor Cloud Agent · Subagents** (documented) [S-035]
- **Cursor editor agent · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Cursor; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-030;S-032;S-033]
- **Cursor editor agent · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Cursor; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-030;S-032;S-033]
- **Cursor editor agent · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Cursor; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-030;S-032;S-033]
- **Cursor editor agent · Agent Skills core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Cursor; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-030;S-032;S-033]
- **Cursor editor agent · Marketplace or registry** (documented) [S-030;S-032;S-033]
- **Cursor editor agent · AGENTS.md** (documented) [S-030;S-032;S-033]
- **Cursor editor agent · Native rules/instructions** (documented) [S-030;S-032;S-033]
- **Cursor editor agent · MCP Apps / interactive UI** (documented) [S-031]
- **Cursor editor agent · MCP OAuth** (documented) [S-031]
- **Cursor editor agent · MCP Streamable HTTP** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-031]
- **Cursor editor agent · MCP client role** (documented) [S-031]
- **Cursor editor agent · MCP elicitation** (documented) [S-031]
- **Cursor editor agent · MCP legacy SSE** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-031]
- **Cursor editor agent · MCP prompts** (documented) [S-031]
- **Cursor editor agent · MCP resources** (documented) [S-031]
- **Cursor editor agent · MCP roots** (documented) [S-031]
- **Cursor editor agent · MCP stdio** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-031]
- **Cursor editor agent · MCP tools** (documented) [S-031]
- **Cursor editor agent · Custom agents** (documented) [S-030;S-032;S-033]
- **Cursor editor agent · Hooks** (documented) [S-030;S-032;S-033]
- **Cursor editor agent · Native plugin system** (documented) [S-030;S-032;S-033]
- **Cursor editor agent · Subagents** (documented) [S-030;S-032;S-033]

### Partial, gated, experimental, or conflicting

- **Cursor Cloud Agent · Hooks** (documented) — Command hooks are supported; team hooks and some hook classes depend on plan/surface. [S-035]
- **Cursor editor agent · Organization policy controls** (documented) — Team marketplaces and admin controls are plan-gated. [S-030]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Cursor editor agent · MCP 2026-07-28 (P1)
- Cursor editor agent · MCP sampling (P2)
- Cursor editor agent · MCP tasks (P2)
- Cursor editor agent · Agent Plugins failure isolation (P2)
- Cursor editor agent · ACP session load/resume (P2)
- Cursor editor agent · ACP session list (P2)
- Cursor editor agent · ACP terminal reverse RPC (P2)
- Cursor editor agent · A2A client role (P2)
- Cursor editor agent · A2A agent/server role (P2)
- Cursor CLI agent · MCP 2026-07-28 (P1)
- Cursor CLI agent · MCP sampling (P2)
- Cursor CLI agent · MCP tasks (P2)
- Cursor CLI agent · Agent Plugins failure isolation (P2)
- Cursor CLI agent · ACP session load/resume (P2)
- Cursor CLI agent · ACP session list (P2)
- Cursor CLI agent · ACP terminal reverse RPC (P2)
- Cursor CLI agent · A2A client role (P2)
- Cursor CLI agent · A2A agent/server role (P2)
- Cursor Cloud Agent · MCP 2026-07-28 (P1)
- Cursor Cloud Agent · MCP resources (P1)
- … 12 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-030] Cursor Plugins — https://cursor.com/docs/plugins
- [S-031] Cursor MCP — https://cursor.com/docs/mcp
- [S-032] Cursor Hooks — https://cursor.com/docs/hooks
- [S-033] Cursor Rules and AGENTS.md — https://cursor.com/docs/rules
- [S-034] Cursor CLI — https://cursor.com/docs/cli/using
- [S-035] Cursor Cloud Agents — https://cursor.com/docs/cloud-agent

## DimCode

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| DimCode | acp-agent | 0.3.22 | ga | acp-agent |

### Documented/registry-supported

- **DimCode · ACP agent/server role** (registry-listed) — Official ACP Registry 0.3.22; registry proves the agent role, not every optional ACP method. [S-001]
- **DimCode · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Dirac

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Dirac | acp-agent | 0.5.1 | ga | acp-agent |

### Documented/registry-supported

- **Dirac · ACP agent/server role** (registry-listed) — Official ACP Registry 0.5.1; registry proves the agent role, not every optional ACP method. [S-001]
- **Dirac · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Factory AI

**Coverage tier:** A  
**Inclusion basis:** first-party Droid docs + ACP registry  
**Surfaces:** 2  
**Cells:** supported 19 · partial 0 · explicit no 1 · unknown 78

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Factory Droid CLI | cli | 0.206.0 | ga | acp-agent |
| Factory Droid Exec | headless-agent | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Factory Droid CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 0.206.0; registry proves the agent role, not every optional ACP method. [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Agent Skills core** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Marketplace or registry** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Organization policy controls** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · MCP client role** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · MCP tools** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Custom agents** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Hooks** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Native plugin system** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Subagent MCP access** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid CLI · Subagents** (documented) [S-001;S-220;S-221;S-223]
- **Factory Droid Exec · Agent Skills core** (documented) [S-222]
- **Factory Droid Exec · Headless / CI execution** (documented) [S-222]
- **Factory Droid Exec · MCP client role** (documented) [S-222]
- **Factory Droid Exec · MCP tools** (documented) [S-222]
- **Factory Droid Exec · Hooks** (documented) [S-222]
- **Factory Droid Exec · Native plugin system** (documented) [S-222]
- **Factory Droid Exec · Subagents** (documented) [S-222]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

- **Factory Droid CLI · Nested subagents** (documented) [S-224]

### High-priority unknowns

- Factory Droid CLI · MCP 2026-07-28 (P1)
- Factory Droid CLI · MCP resources (P1)
- Factory Droid CLI · MCP prompts (P1)
- Factory Droid CLI · MCP OAuth (P1)
- Factory Droid CLI · MCP roots (P2)
- Factory Droid CLI · MCP sampling (P2)
- Factory Droid CLI · MCP elicitation (P2)
- Factory Droid CLI · MCP tasks (P2)
- Factory Droid CLI · MCP Apps / interactive UI (P2)
- Factory Droid CLI · Agent Plugins failure isolation (P2)
- Factory Droid CLI · ACP session load/resume (P2)
- Factory Droid CLI · ACP session list (P2)
- Factory Droid CLI · ACP terminal reverse RPC (P2)
- Factory Droid CLI · A2A client role (P2)
- Factory Droid CLI · A2A agent/server role (P2)
- Factory Droid Exec · MCP 2026-07-28 (P1)
- Factory Droid Exec · MCP resources (P1)
- Factory Droid Exec · MCP prompts (P1)
- Factory Droid Exec · MCP OAuth (P1)
- Factory Droid Exec · MCP roots (P2)
- … 10 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-220] Factory Droid Documentation — https://docs.factory.ai/
- [S-221] Factory Droid CLI Quickstart — https://docs.factory.ai/droid-cli/quickstart
- [S-222] Factory Droid Headless — https://docs.factory.ai/droid-exec/overview
- [S-223] Factory Release Notes — https://docs.factory.ai/changelog/release-notes
- [S-224] Factory Custom Droids (Subagents) — https://docs.factory.ai/harness/subagents

## fast-agent

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| fast-agent | acp-agent | 0.10.1 | ga | acp-agent |

### Documented/registry-supported

- **fast-agent · ACP agent/server role** (registry-listed) — Official ACP Registry 0.10.1; registry proves the agent role, not every optional ACP method. [S-001]
- **fast-agent · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## GitHub

**Coverage tier:** A  
**Inclusion basis:** first-party deep dive + both registries  
**Surfaces:** 4  
**Cells:** supported 54 · partial 0 · explicit no 3 · unknown 139

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| GitHub Copilot in VS Code | ide-extension | VS Code 1.133 / observed 2026-08-28 | ga |  |
| GitHub Copilot CLI | cli | 1.0.81 registry observation | ga | acp-agent |
| GitHub Copilot cloud agent | cloud-agent | hosted observed 2026-08-28 | ga |  |
| GitHub Copilot code review | cloud-code-review | hosted observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **GitHub Copilot in VS Code · MCP client role** (documented) [S-040;S-041;S-045]
- **GitHub Copilot in VS Code · MCP tools** (documented) [S-040;S-041;S-045]
- **GitHub Copilot in VS Code · MCP resources** (documented) [S-040;S-041;S-045]
- **GitHub Copilot in VS Code · MCP prompts** (documented) [S-040;S-041;S-045]
- **GitHub Copilot in VS Code · MCP stdio** (documented; registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-040;S-041;S-045]
- **GitHub Copilot in VS Code · MCP Streamable HTTP** (documented; registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-040;S-041;S-045]
- **GitHub Copilot in VS Code · MCP legacy SSE** (documented; registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-040;S-041;S-045]
- **GitHub Copilot in VS Code · Agent Skills core** (registry-listed) — Official Agent Plugins compatible-client listing for GitHub Copilot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004]
- **GitHub Copilot in VS Code · Agent Plugins 1.0 core** (documented; registry-listed) — Official Agent Plugins compatible-client listing for GitHub Copilot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-040;S-041;S-045]
- **GitHub Copilot in VS Code · Agent Plugins packaged skills** (documented; registry-listed) — Official Agent Plugins compatible-client listing for GitHub Copilot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-040;S-041;S-045]
- **GitHub Copilot in VS Code · Agent Plugins packaged MCP** (documented; registry-listed) — Official Agent Plugins compatible-client listing for GitHub Copilot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-040;S-041;S-045]
- **GitHub Copilot in VS Code · Hooks** (documented) [S-040;S-041;S-045]
- **GitHub Copilot in VS Code · Organization policy controls** (documented) [S-040;S-041;S-045]
- **GitHub Copilot in VS Code · Custom agents** (documented) [S-040;S-041;S-045]
- **GitHub Copilot CLI · MCP client role** (documented) — MCP servers add external tools and data sources to the CLI. [S-290;S-291]
- **GitHub Copilot CLI · MCP tools** (documented) — The CLI discovers and invokes tools supplied by configured MCP servers. [S-290;S-291]
- **GitHub Copilot CLI · Agent Skills core** (documented) — CLI skills are SKILL.md packages with instructions, scripts, and resources. [S-290;S-291]
- **GitHub Copilot CLI · Agent Skills standard paths** (documented) — The CLI discovers project and personal skills in .agents/skills in addition to GitHub- and Claude-specific paths. [S-291]
- **GitHub Copilot CLI · Agent Skills scripts/assets** (documented) — Documented skill packages may include scripts and resources. [S-290;S-291]
- **GitHub Copilot CLI · Agent Plugins 1.0 core** (documented) — The CLI plugin manifest accepts the Agent Plugins/Open Plugin Spec 1.0 schema. [S-292]
- **GitHub Copilot CLI · Agent Plugins packaged skills** (documented) — Plugin manifests can package SKILL.md directories. [S-292]
- **GitHub Copilot CLI · Agent Plugins packaged MCP** (documented) — Plugin manifests can package MCP server configuration. [S-292]
- **GitHub Copilot CLI · ACP agent/server role** (registry-listed) — Official ACP Registry 1.0.81; registry proves the agent role, not every optional ACP method. [S-001]
- **GitHub Copilot CLI · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]
- **GitHub Copilot CLI · AGENTS.md** (documented) — AGENTS.md is discovered from documented repository and working-directory scopes. [S-291;S-294]
- **GitHub Copilot CLI · Native rules/instructions** (documented) — Repository, user, and path-specific persistent instruction files are documented. [S-290;S-294]
- **GitHub Copilot CLI · Hooks** (documented) — Lifecycle hooks can run shell commands at session, prompt, task, and error events. [S-290;S-291]
- **GitHub Copilot CLI · Subagents** (documented) — Custom agents run as isolated subagents and the CLI includes task-oriented subagent types. [S-290;S-291]
- **GitHub Copilot CLI · Nested subagents** (documented) — The CLI documents a configurable subagent tree depth, with a default depth greater than one. [S-291]
- **GitHub Copilot CLI · Subagent MCP access** (documented) — Plugin-provided agent packages can include MCP server configuration; access remains subject to the agent tool profile. [S-292]
- **GitHub Copilot CLI · Subagent write access** (documented) — General-purpose and user-defined subagents can be assigned toolsets that include project modification tools. [S-290;S-291]
- **GitHub Copilot CLI · Native plugin system** (documented) — Installable CLI plugins bundle agents, skills, hooks, commands, and integrations. [S-290;S-292]
- **GitHub Copilot CLI · Marketplace or registry** (documented) — Plugins can be installed directly or through configured plugin marketplaces. [S-290;S-292]
- **GitHub Copilot CLI · Headless / CI execution** (documented) — GitHub documents programmatic, scripted, and Actions workflows for Copilot CLI. [S-293]
- **GitHub Copilot CLI · Organization policy controls** (documented) — Enterprise and organization controls cover CLI enablement, models, custom agents, MCP registries and allowlists, cloud delegation, and audit logging. [S-305]
- **GitHub Copilot CLI · Custom agents** (documented) — Named custom agents can define expertise, instructions, models, and toolsets. [S-290;S-291]
- **GitHub Copilot cloud agent · MCP client role** (documented) [S-042;S-043]
- **GitHub Copilot cloud agent · MCP tools** (documented) [S-042;S-043]
- **GitHub Copilot cloud agent · MCP stdio** (documented) — Repository-configured local MCP server command runs in the hosted task environment. [S-042]
- **GitHub Copilot cloud agent · MCP Streamable HTTP** (documented) — Remote servers supported without remote OAuth. [S-042]
- **GitHub Copilot cloud agent · Agent Skills core** (documented) [S-042;S-043]
- **GitHub Copilot cloud agent · Agent Plugins 1.0 core** (documented) — GitHub documents plugin packages as supported by Copilot cloud agent. [S-304]
- **GitHub Copilot cloud agent · Agent Plugins packaged skills** (documented) — Cloud-agent plugins may package SKILL.md skills. [S-304]
- **GitHub Copilot cloud agent · Agent Plugins packaged MCP** (documented) — Cloud-agent plugins may package MCP server configuration. [S-304]
- **GitHub Copilot cloud agent · Hooks** (documented) — Cloud-agent plugin packages may include event hooks. [S-042;S-043;S-304]
- **GitHub Copilot cloud agent · Native plugin system** (documented) — Copilot cloud agent loads installable Copilot plugin packages. [S-304]
- **GitHub Copilot cloud agent · Marketplace or registry** (documented) — Cloud-agent plugins can be enabled from registered marketplaces in repository settings. [S-304]
- **GitHub Copilot cloud agent · Cloud agent** (documented) [S-042;S-043]
- **GitHub Copilot cloud agent · Organization policy controls** (documented) [S-042;S-043]
- **GitHub Copilot cloud agent · Custom agents** (documented) — Cloud-agent plugins may include specialized custom-agent definitions. [S-042;S-043;S-304]
- **GitHub Copilot code review · MCP client role** (documented) [S-044]
- **GitHub Copilot code review · MCP tools** (documented) [S-044]
- **GitHub Copilot code review · Agent Skills core** (documented) [S-044]
- **GitHub Copilot code review · Cloud agent** (documented) [S-044]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

- **GitHub Copilot cloud agent · MCP resources** (documented) [S-042]
- **GitHub Copilot cloud agent · MCP prompts** (documented) [S-042]
- **GitHub Copilot cloud agent · MCP OAuth** (documented) [S-042]

### High-priority unknowns

- GitHub Copilot in VS Code · MCP 2026-07-28 (P1)
- GitHub Copilot in VS Code · MCP OAuth (P1)
- GitHub Copilot in VS Code · MCP roots (P2)
- GitHub Copilot in VS Code · MCP sampling (P2)
- GitHub Copilot in VS Code · MCP elicitation (P2)
- GitHub Copilot in VS Code · MCP tasks (P2)
- GitHub Copilot in VS Code · MCP Apps / interactive UI (P2)
- GitHub Copilot in VS Code · Agent Plugins failure isolation (P2)
- GitHub Copilot in VS Code · ACP session load/resume (P2)
- GitHub Copilot in VS Code · ACP session list (P2)
- GitHub Copilot in VS Code · ACP terminal reverse RPC (P2)
- GitHub Copilot in VS Code · A2A client role (P2)
- GitHub Copilot in VS Code · A2A agent/server role (P2)
- GitHub Copilot CLI · MCP 2026-07-28 (P1)
- GitHub Copilot CLI · MCP resources (P1)
- GitHub Copilot CLI · MCP prompts (P1)
- GitHub Copilot CLI · MCP OAuth (P1)
- GitHub Copilot CLI · MCP roots (P2)
- GitHub Copilot CLI · MCP sampling (P2)
- GitHub Copilot CLI · MCP elicitation (P2)

### Sources

- [S-040] VS Code 1.133 release notes — https://code.visualstudio.com/updates/v1_133
- [S-041] GitHub Copilot MCP in IDE — https://docs.github.com/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp
- [S-045] GitHub Copilot enterprise agent management — https://docs.github.com/copilot/concepts/agents/enterprise-management
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-290] Overview of customizing GitHub Copilot CLI — https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/overview
- [S-291] GitHub Copilot CLI command reference — https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
- [S-292] GitHub Copilot CLI plugin reference — https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference
- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-294] Adding custom instructions for GitHub Copilot CLI — https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
- [S-293] Automate with GitHub Copilot CLI — https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli
- [S-305] Administering Copilot CLI for your enterprise — https://docs.github.com/en/copilot/how-tos/copilot-cli/administer-copilot-cli-for-your-enterprise
- [S-042] GitHub Copilot cloud agent MCP — https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
- [S-043] GitHub Copilot cloud agent — https://docs.github.com/copilot/concepts/agents/cloud-agent/about-cloud-agent
- [S-304] About GitHub Copilot plugins — https://docs.github.com/en/copilot/concepts/agents/about-plugins
- [S-044] GitHub Copilot code review — https://docs.github.com/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review
## Google

**Coverage tier:** A  
**Inclusion basis:** first-party Gemini CLI + ACP registry  
**Surfaces:** 2  
**Cells:** supported 15 · partial 2 · explicit no 0 · unknown 81

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Gemini CLI | cli | 0.57.0 registry / observed 2026-08-28 | ga | acp-agent |
| Google Antigravity ACP agent | acp-agent | 1.0.0 | ga | acp-agent |

### Documented/registry-supported

- **Gemini CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 0.57.0; registry proves the agent role, not every optional ACP method. [S-001;S-051]
- **Gemini CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-051]
- **Gemini CLI · MCP OAuth** (documented) [S-050]
- **Gemini CLI · MCP Streamable HTTP** (documented) [S-050]
- **Gemini CLI · MCP client role** (documented) [S-050]
- **Gemini CLI · MCP legacy SSE** (documented) [S-050]
- **Gemini CLI · MCP prompts** (documented) [S-050]
- **Gemini CLI · MCP resources** (documented) [S-050]
- **Gemini CLI · MCP stdio** (documented) [S-050]
- **Gemini CLI · MCP tools** (documented) [S-050]
- **Gemini CLI · Custom agents** (documented) [S-054]
- **Gemini CLI · Hooks** (documented) [S-054]
- **Gemini CLI · Subagents** (documented) [S-054]
- **Google Antigravity ACP agent · ACP agent/server role** (registry-listed) — Official ACP Registry 1.0.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Google Antigravity ACP agent · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

- **Gemini CLI · Agent Skills core** (documented) — Available only in Gemini CLI preview builds at the cutoff. [S-052;S-053]
- **Gemini CLI · Agent Skills scripts/assets** (documented) — Available only in Gemini CLI preview builds at the cutoff. [S-052;S-053]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Gemini CLI · MCP 2026-07-28 (P1)
- Gemini CLI · MCP roots (P2)
- Gemini CLI · MCP sampling (P2)
- Gemini CLI · MCP elicitation (P2)
- Gemini CLI · MCP tasks (P2)
- Gemini CLI · MCP Apps / interactive UI (P2)
- Gemini CLI · Agent Plugins failure isolation (P2)
- Gemini CLI · ACP session load/resume (P2)
- Gemini CLI · ACP session list (P2)
- Gemini CLI · ACP terminal reverse RPC (P2)
- Gemini CLI · A2A client role (P2)
- Gemini CLI · A2A agent/server role (P2)

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-050] Gemini CLI MCP — https://geminicli.com/docs/tools/mcp-server/
- [S-051] Gemini CLI ACP mode — https://geminicli.com/docs/cli/acp-mode/
- [S-052] Gemini CLI Agent Skills — https://geminicli.com/docs/cli/skills/
- [S-053] Gemini CLI release notes — https://geminicli.com/docs/changelogs/
- [S-054] Gemini CLI Subagents — https://geminicli.com/docs/core/subagents/

## Harn

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Harn | acp-agent | 0.10.119 | ga | acp-agent |

### Documented/registry-supported

- **Harn · ACP agent/server role** (registry-listed) — Official ACP Registry 0.10.119; registry proves the agent role, not every optional ACP method. [S-001]
- **Harn · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## JetBrains

**Coverage tier:** A  
**Inclusion basis:** first-party MCP/ACP/agent docs + Junie registry  
**Surfaces:** 3  
**Cells:** supported 13 · partial 1 · explicit no 0 · unknown 133

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| JetBrains native AI Assistant | ide-agent | observed 2026-08-28 | ga |  |
| JetBrains ACP host | acp-client | observed 2026-08-28 | ga | acp-client |
| Junie ACP agent | acp-agent | 3032.2.0 | ga | acp-agent |

### Documented/registry-supported

- **JetBrains ACP host · ACP MCP forwarding** (documented) [S-071;S-074]
- **JetBrains ACP host · ACP client/host role** (documented) [S-071;S-074]
- **JetBrains ACP host · ACP stdio** (documented) [S-071;S-074]
- **JetBrains ACP host · Marketplace or registry** (documented) [S-071;S-074]
- **JetBrains native AI Assistant · MCP Streamable HTTP** (documented) [S-070]
- **JetBrains native AI Assistant · MCP client role** (documented) [S-070]
- **JetBrains native AI Assistant · MCP legacy SSE** (documented) [S-070]
- **JetBrains native AI Assistant · MCP server role** (documented) [S-070]
- **JetBrains native AI Assistant · MCP stdio** (documented) [S-070]
- **JetBrains native AI Assistant · MCP tools** (documented) [S-070]
- **Junie ACP agent · ACP MCP forwarding** (documented) [S-001;S-075]
- **Junie ACP agent · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 3032.2.0; registry proves the agent role, not every optional ACP method. [S-001;S-075]
- **Junie ACP agent · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-075]

### Partial, gated, experimental, or conflicting

- **JetBrains ACP host · Agent Skills core** (documented) — Skills are currently supported only by selected hosted ACP agents, specifically Claude Agent and Codex in the reviewed docs. [S-072;S-073]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- JetBrains native AI Assistant · MCP 2026-07-28 (P1)
- JetBrains native AI Assistant · MCP resources (P1)
- JetBrains native AI Assistant · MCP prompts (P1)
- JetBrains native AI Assistant · MCP OAuth (P1)
- JetBrains native AI Assistant · MCP roots (P2)
- JetBrains native AI Assistant · MCP sampling (P2)
- JetBrains native AI Assistant · MCP elicitation (P2)
- JetBrains native AI Assistant · MCP tasks (P2)
- JetBrains native AI Assistant · MCP Apps / interactive UI (P2)
- JetBrains native AI Assistant · Agent Plugins failure isolation (P2)
- JetBrains native AI Assistant · ACP session load/resume (P2)
- JetBrains native AI Assistant · ACP session list (P2)
- JetBrains native AI Assistant · ACP terminal reverse RPC (P2)
- JetBrains native AI Assistant · A2A client role (P2)
- JetBrains native AI Assistant · A2A agent/server role (P2)
- JetBrains ACP host · MCP 2026-07-28 (P1)
- JetBrains ACP host · MCP resources (P1)
- JetBrains ACP host · MCP prompts (P1)
- JetBrains ACP host · MCP OAuth (P1)
- JetBrains ACP host · MCP roots (P2)
- … 25 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-070] JetBrains MCP — https://www.jetbrains.com/help/ai-assistant/mcp.html
- [S-071] JetBrains ACP — https://www.jetbrains.com/help/ai-assistant/acp.html
- [S-072] JetBrains Agent Skills — https://www.jetbrains.com/help/ai-assistant/agent-skills.html
- [S-073] JetBrains Agents — https://www.jetbrains.com/help/ai-assistant/agents.html
- [S-074] JetBrains ACP Registry settings — https://www.jetbrains.com/help/ai-assistant/settings-reference-agents-registry.html
- [S-075] JetBrains Junie agent — https://www.jetbrains.com/help/ai-assistant/junie-agent.html

## Kilo

**Coverage tier:** A  
**Inclusion basis:** first-party CLI/IDE docs + ACP registry  
**Surfaces:** 2  
**Cells:** supported 15 · partial 0 · explicit no 0 · unknown 83

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Kilo CLI | cli | 7.5.5 registry / observed 2026-08-28 | ga | acp-agent |
| Kilo IDE extension | ide-extension | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Kilo CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 7.5.5; registry proves the agent role, not every optional ACP method. [S-001;S-230;S-231]
- **Kilo CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-230;S-231]
- **Kilo CLI · Agent Skills core** (documented) [S-230;S-231;S-232]
- **Kilo CLI · Headless / CI execution** (documented) [S-001;S-230;S-231]
- **Kilo CLI · Native rules/instructions** (documented) [S-230;S-231;S-232]
- **Kilo CLI · MCP OAuth** (documented) [S-230;S-231;S-232]
- **Kilo CLI · MCP client role** (documented) [S-230;S-231;S-232]
- **Kilo CLI · MCP tools** (documented) [S-230;S-231;S-232]
- **Kilo CLI · Custom agents** (documented) [S-230;S-231;S-232]
- **Kilo IDE extension · Agent Skills core** (documented) [S-230;S-231;S-232]
- **Kilo IDE extension · Native rules/instructions** (documented) [S-230;S-231;S-232]
- **Kilo IDE extension · MCP OAuth** (documented) [S-230;S-231;S-232]
- **Kilo IDE extension · MCP client role** (documented) [S-230;S-231;S-232]
- **Kilo IDE extension · MCP tools** (documented) [S-230;S-231;S-232]
- **Kilo IDE extension · Custom agents** (documented) [S-230;S-231;S-232]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Kilo CLI · MCP 2026-07-28 (P1)
- Kilo CLI · MCP resources (P1)
- Kilo CLI · MCP prompts (P1)
- Kilo CLI · MCP roots (P2)
- Kilo CLI · MCP sampling (P2)
- Kilo CLI · MCP elicitation (P2)
- Kilo CLI · MCP tasks (P2)
- Kilo CLI · MCP Apps / interactive UI (P2)
- Kilo CLI · Agent Plugins failure isolation (P2)
- Kilo CLI · ACP session load/resume (P2)
- Kilo CLI · ACP session list (P2)
- Kilo CLI · ACP terminal reverse RPC (P2)
- Kilo CLI · A2A client role (P2)
- Kilo CLI · A2A agent/server role (P2)
- Kilo IDE extension · MCP 2026-07-28 (P1)
- Kilo IDE extension · MCP resources (P1)
- Kilo IDE extension · MCP prompts (P1)
- Kilo IDE extension · MCP roots (P2)
- Kilo IDE extension · MCP sampling (P2)
- Kilo IDE extension · MCP elicitation (P2)
- … 8 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-230] Kilo CLI — https://kilo.ai/docs/code-with-ai/platforms/cli
- [S-231] Kilo CLI Reference — https://kilo.ai/docs/code-with-ai/platforms/cli-reference
- [S-232] Kilo JetBrains — https://kilo.ai/docs/code-with-ai/platforms/jetbrains

undefined

## LangChain / DeepAgents

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| DeepAgents | acp-agent | 0.1.7 | ga | acp-agent |

### Documented/registry-supported

- **DeepAgents · ACP agent/server role** (registry-listed) — Official ACP Registry 0.1.7; registry proves the agent role, not every optional ACP method. [S-001]
- **DeepAgents · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Microsoft / Visual Studio Code

**Coverage tier:** A  
**Inclusion basis:** Agent Plugins client + release-specific docs  
**Surfaces:** 1  
**Cells:** supported 14 · partial 0 · explicit no 0 · unknown 35

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| VS Code agent/plugin host | ide-host | 1.133 | ga |  |

### Documented/registry-supported

- **VS Code agent/plugin host · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for VS Code; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-040;S-041]
- **VS Code agent/plugin host · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for VS Code; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-040;S-041]
- **VS Code agent/plugin host · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for VS Code; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-040;S-041]
- **VS Code agent/plugin host · Agent Skills core** (registry-listed) — Official Agent Plugins compatible-client listing for VS Code; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004]
- **VS Code agent/plugin host · MCP Streamable HTTP** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-040;S-041]
- **VS Code agent/plugin host · MCP client role** (documented) [S-002;S-040;S-041]
- **VS Code agent/plugin host · MCP legacy SSE** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-040;S-041]
- **VS Code agent/plugin host · MCP prompts** (documented) [S-002;S-040;S-041]
- **VS Code agent/plugin host · MCP resources** (documented) [S-002;S-040;S-041]
- **VS Code agent/plugin host · MCP stdio** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-040;S-041]
- **VS Code agent/plugin host · MCP tools** (documented) [S-002;S-040;S-041]
- **VS Code agent/plugin host · Custom agents** (documented) [S-002;S-040;S-041]
- **VS Code agent/plugin host · Hooks** (documented) [S-002;S-040;S-041]
- **VS Code agent/plugin host · Native plugin system** (documented) [S-002;S-040;S-041]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- VS Code agent/plugin host · MCP 2026-07-28 (P1)
- VS Code agent/plugin host · MCP OAuth (P1)
- VS Code agent/plugin host · MCP roots (P2)
- VS Code agent/plugin host · MCP sampling (P2)
- VS Code agent/plugin host · MCP elicitation (P2)
- VS Code agent/plugin host · MCP tasks (P2)
- VS Code agent/plugin host · MCP Apps / interactive UI (P2)
- VS Code agent/plugin host · Agent Plugins failure isolation (P2)
- VS Code agent/plugin host · ACP session load/resume (P2)
- VS Code agent/plugin host · ACP session list (P2)
- VS Code agent/plugin host · ACP terminal reverse RPC (P2)
- VS Code agent/plugin host · A2A client role (P2)
- VS Code agent/plugin host · A2A agent/server role (P2)

### Sources

- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-040] VS Code 1.133 release notes — https://code.visualstudio.com/updates/v1_133
- [S-041] GitHub Copilot MCP in IDE — https://docs.github.com/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp

## Minion Code

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Minion Code | acp-agent | 0.1.44 | ga | acp-agent |

### Documented/registry-supported

- **Minion Code · ACP agent/server role** (registry-listed) — Official ACP Registry 0.1.44; registry proves the agent role, not every optional ACP method. [S-001]
- **Minion Code · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Mistral AI

**Coverage tier:** A  
**Inclusion basis:** first-party Vibe MCP docs + ACP registry  
**Surfaces:** 1  
**Cells:** supported 10 · partial 0 · explicit no 1 · unknown 38

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Mistral Vibe CLI | cli | 2.24.1 | ga | acp-agent |

### Documented/registry-supported

- **Mistral Vibe CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 2.24.1; registry proves the agent role, not every optional ACP method. [S-001;S-190;S-191]
- **Mistral Vibe CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-190;S-191]
- **Mistral Vibe CLI · Agent Skills core** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · Headless / CI execution** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · AGENTS.md** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · MCP Streamable HTTP** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · MCP client role** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · MCP stdio** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · MCP tools** (documented) [S-001;S-190;S-191]
- **Mistral Vibe CLI · Custom agents** (documented) [S-001;S-190;S-191]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

- **Mistral Vibe CLI · MCP OAuth** (documented) [S-190]

### High-priority unknowns

- Mistral Vibe CLI · MCP 2026-07-28 (P1)
- Mistral Vibe CLI · MCP resources (P1)
- Mistral Vibe CLI · MCP prompts (P1)
- Mistral Vibe CLI · MCP roots (P2)
- Mistral Vibe CLI · MCP sampling (P2)
- Mistral Vibe CLI · MCP elicitation (P2)
- Mistral Vibe CLI · MCP tasks (P2)
- Mistral Vibe CLI · MCP Apps / interactive UI (P2)
- Mistral Vibe CLI · Agent Plugins failure isolation (P2)
- Mistral Vibe CLI · ACP session load/resume (P2)
- Mistral Vibe CLI · ACP session list (P2)
- Mistral Vibe CLI · ACP terminal reverse RPC (P2)
- Mistral Vibe CLI · A2A client role (P2)
- Mistral Vibe CLI · A2A agent/server role (P2)

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-190] Mistral Vibe MCP servers — https://docs.mistral.ai/vibe/code/cli/mcp-servers
- [S-191] Mistral Vibe documentation — https://docs.mistral.ai/vibe/code/

## Moonshot AI

**Coverage tier:** A  
**Inclusion basis:** current Kimi Code docs + stale ACP registry entry  
**Surfaces:** 2  
**Cells:** supported 22 · partial 0 · explicit no 1 · unknown 75

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Kimi Code CLI | cli | 0.39.1 current docs | ga |  |
| Kimi CLI ACP registry entry | acp-agent | 1.49.0 registry | deprecated | acp-agent |

### Documented/registry-supported

- **Kimi CLI ACP registry entry · ACP agent/server role** (registry-listed) — Legacy registry distribution; current Kimi Code CLI uses a separate 0.x version line. | Official ACP Registry 1.49.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Kimi CLI ACP registry entry · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]
- **Kimi Code CLI · ACP MCP forwarding** (documented) [S-180]
- **Kimi Code CLI · ACP agent/server role** (documented) [S-180]
- **Kimi Code CLI · ACP elicitation/approval** (documented) [S-180]
- **Kimi Code CLI · ACP session list** (documented) [S-180]
- **Kimi Code CLI · ACP session load/resume** (documented) [S-180]
- **Kimi Code CLI · ACP stdio** (documented) [S-180]
- **Kimi Code CLI · Agent Skills core** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Agent Skills scripts/assets** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Agent Skills standard paths** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Headless / CI execution** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · MCP OAuth** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · MCP Streamable HTTP** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · MCP client role** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · MCP legacy SSE** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · MCP stdio** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · MCP tools** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Custom agents** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Hooks** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Native plugin system** (documented) [S-181;S-182;S-183;S-184]
- **Kimi Code CLI · Subagents** (documented) [S-181;S-182;S-183;S-184]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

- **Kimi Code CLI · ACP terminal reverse RPC** (documented) [S-180]

### High-priority unknowns

- Kimi Code CLI · MCP 2026-07-28 (P1)
- Kimi Code CLI · MCP resources (P1)
- Kimi Code CLI · MCP prompts (P1)
- Kimi Code CLI · MCP roots (P2)
- Kimi Code CLI · MCP sampling (P2)
- Kimi Code CLI · MCP elicitation (P2)
- Kimi Code CLI · MCP tasks (P2)
- Kimi Code CLI · MCP Apps / interactive UI (P2)
- Kimi Code CLI · Agent Plugins failure isolation (P2)
- Kimi Code CLI · A2A client role (P2)
- Kimi Code CLI · A2A agent/server role (P2)

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-180] Kimi Code ACP — https://www.kimi.com/code/docs/en/kimi-code-cli/reference/kimi-acp.html
- [S-181] Kimi Code MCP — https://www.kimi.com/code/docs/en/kimi-code-cli/customization/mcp.html
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-183] Kimi Code Skills — https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html
- [S-184] Kimi Code Subagents — https://www.kimi.com/code/docs/en/kimi-code-cli/customization/subagents.html

## NanoClaw

**Coverage tier:** B  
**Inclusion basis:** official Agent Plugins client + repository  
**Surfaces:** 1  
**Cells:** supported 9 · partial 0 · explicit no 0 · unknown 40

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| NanoClaw agent | messaging-agent | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **NanoClaw agent · Agent Plugins 1.0 core** (registry-listed) — Official Agent Plugins compatible-client listing for NanoClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-280]
- **NanoClaw agent · Agent Plugins packaged MCP** (registry-listed) — Official Agent Plugins compatible-client listing for NanoClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-280]
- **NanoClaw agent · Agent Plugins packaged skills** (registry-listed) — Official Agent Plugins compatible-client listing for NanoClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-280]
- **NanoClaw agent · Agent Skills core** (registry-listed) — Official Agent Plugins compatible-client listing for NanoClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-280]
- **NanoClaw agent · MCP Streamable HTTP** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-280]
- **NanoClaw agent · MCP client role** (registry-listed) [S-002;S-280]
- **NanoClaw agent · MCP stdio** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-280]
- **NanoClaw agent · MCP tools** (registry-listed) [S-002;S-280]
- **NanoClaw agent · Subagents** (registry-listed) [S-002;S-280]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- NanoClaw agent · MCP 2026-07-28 (P1)
- NanoClaw agent · MCP resources (P1)
- NanoClaw agent · MCP prompts (P1)
- NanoClaw agent · MCP OAuth (P1)
- NanoClaw agent · MCP roots (P2)
- NanoClaw agent · MCP sampling (P2)
- NanoClaw agent · MCP elicitation (P2)
- NanoClaw agent · MCP tasks (P2)
- NanoClaw agent · MCP Apps / interactive UI (P2)
- NanoClaw agent · Agent Plugins failure isolation (P2)
- NanoClaw agent · ACP session load/resume (P2)
- NanoClaw agent · ACP session list (P2)
- NanoClaw agent · ACP terminal reverse RPC (P2)
- NanoClaw agent · A2A client role (P2)
- NanoClaw agent · A2A agent/server role (P2)

### Sources

- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-280] NanoClaw repository — https://github.com/qwibitai/nanoclaw

## Nous Research / Hermes

**Coverage tier:** A  
**Inclusion basis:** first-party docs + Agent Plugins client  
**Surfaces:** 2  
**Cells:** supported 17 · partial 0 · explicit no 0 · unknown 81

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Hermes CLI/desktop/messaging core | multi-surface-agent | observed 2026-08-28 | ga |  |
| Hermes ACP agent | acp-agent | observed 2026-08-28 | ga | acp-agent |

### Documented/registry-supported

- **Hermes ACP agent · ACP agent/server role** (documented) [S-150;S-154]
- **Hermes ACP agent · ACP elicitation/approval** (documented) [S-150;S-154]
- **Hermes ACP agent · ACP stdio** (documented) [S-150;S-154]
- **Hermes ACP agent · Computer/browser use** (documented) [S-150;S-154]
- **Hermes ACP agent · Subagents** (documented) [S-150;S-154]
- **Hermes CLI/desktop/messaging core · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Hermes Agent; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Hermes Agent; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Hermes Agent; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Agent Skills core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Hermes Agent; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Agent Skills scripts/assets** (documented) [S-002;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Headless / CI execution** (documented) [S-002;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · MCP Streamable HTTP** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **Hermes CLI/desktop/messaging core · MCP client role** (documented) [S-002;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · MCP stdio** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **Hermes CLI/desktop/messaging core · MCP tools** (documented) [S-002;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Computer/browser use** (documented) [S-002;S-151;S-152;S-153]
- **Hermes CLI/desktop/messaging core · Native plugin system** (documented) [S-002;S-151;S-152;S-153]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Hermes CLI/desktop/messaging core · MCP 2026-07-28 (P1)
- Hermes CLI/desktop/messaging core · MCP resources (P1)
- Hermes CLI/desktop/messaging core · MCP prompts (P1)
- Hermes CLI/desktop/messaging core · MCP OAuth (P1)
- Hermes CLI/desktop/messaging core · MCP roots (P2)
- Hermes CLI/desktop/messaging core · MCP sampling (P2)
- Hermes CLI/desktop/messaging core · MCP elicitation (P2)
- Hermes CLI/desktop/messaging core · MCP tasks (P2)
- Hermes CLI/desktop/messaging core · MCP Apps / interactive UI (P2)
- Hermes CLI/desktop/messaging core · Agent Plugins failure isolation (P2)
- Hermes CLI/desktop/messaging core · ACP session load/resume (P2)
- Hermes CLI/desktop/messaging core · ACP session list (P2)
- Hermes CLI/desktop/messaging core · ACP terminal reverse RPC (P2)
- Hermes CLI/desktop/messaging core · A2A client role (P2)
- Hermes CLI/desktop/messaging core · A2A agent/server role (P2)
- Hermes ACP agent · MCP 2026-07-28 (P1)
- Hermes ACP agent · MCP resources (P1)
- Hermes ACP agent · MCP prompts (P1)
- Hermes ACP agent · MCP OAuth (P1)
- Hermes ACP agent · MCP roots (P2)
- … 10 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-150] Hermes ACP Host Integration — https://hermes-agent.nousresearch.com/docs/user-guide/features/acp
- [S-151] Hermes Skills — https://hermes-agent.nousresearch.com/docs/user-guide/features/skills
- [S-152] Hermes MCP — https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp
- [S-153] Hermes Plugins — https://hermes-agent.nousresearch.com/docs/user-guide/features/plugins
- [S-154] Hermes Programmatic Integration — https://hermes-agent.nousresearch.com/docs/developer-guide/programmatic-integration

## OpenAI

**Coverage tier:** A  
**Inclusion basis:** first-party deep dive + Agent Plugins + ACP adapter  
**Surfaces:** 6  
**Cells:** supported 63 · partial 1 · explicit no 5 · unknown 225

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| ChatGPT web | web | hosted observed 2026-08-28 | ga |  |
| ChatGPT desktop / Codex host | desktop | observed 2026-08-28 | ga |  |
| ChatGPT mobile | mobile | observed 2026-08-28 | ga |  |
| Codex CLI | cli | observed 2026-08-28 | ga |  |
| Codex IDE extension | ide-extension | observed 2026-08-28 | ga |  |
| Codex ACP adapter | acp-adapter | 1.7.0 | ga | acp-agent |

### Documented/registry-supported

- **ChatGPT desktop / Codex host · Agent Plugins 1.0 core** (documented) [S-002;S-020]
- **ChatGPT desktop / Codex host · Agent Plugins packaged MCP** (documented) [S-002;S-020]
- **ChatGPT desktop / Codex host · Agent Plugins packaged skills** (documented) [S-002;S-020]
- **ChatGPT desktop / Codex host · Agent Skills core** (documented) [S-020;S-023]
- **ChatGPT desktop / Codex host · Agent Skills scripts/assets** (documented) [S-020;S-023]
- **ChatGPT desktop / Codex host · Marketplace or registry** (documented) [S-002;S-020]
- **ChatGPT desktop / Codex host · MCP OAuth** (documented) [S-021]
- **ChatGPT desktop / Codex host · MCP Streamable HTTP** (documented) [S-021]
- **ChatGPT desktop / Codex host · MCP client role** (documented) [S-021]
- **ChatGPT desktop / Codex host · MCP stdio** (documented) [S-021]
- **ChatGPT desktop / Codex host · MCP tools** (documented) [S-021]
- **ChatGPT mobile · Agent Plugins 1.0 core** (documented) [S-002;S-020]
- **ChatGPT mobile · Agent Plugins packaged MCP** (documented) [S-002;S-020]
- **ChatGPT mobile · Agent Plugins packaged skills** (documented) [S-002;S-020]
- **ChatGPT mobile · Agent Skills core** (documented) [S-020;S-023]
- **ChatGPT mobile · Agent Skills scripts/assets** (documented) [S-020;S-023]
- **ChatGPT mobile · Marketplace or registry** (documented) [S-002;S-020]
- **ChatGPT mobile · MCP OAuth** (documented) — Remote plugin-backed tools only. [S-020;S-021]
- **ChatGPT mobile · MCP Streamable HTTP** (documented) — Remote plugin-backed tools only. [S-020;S-021]
- **ChatGPT mobile · MCP client role** (documented) — Remote plugin-backed tools only. [S-020;S-021]
- **ChatGPT mobile · MCP tools** (documented) — Remote plugin-backed tools only. [S-020;S-021]
- **ChatGPT web · Agent Plugins 1.0 core** (documented) [S-002;S-020]
- **ChatGPT web · Agent Plugins packaged MCP** (documented) [S-002;S-020]
- **ChatGPT web · Agent Plugins packaged skills** (documented) [S-002;S-020]
- **ChatGPT web · Agent Skills core** (documented) [S-020;S-023]
- **ChatGPT web · Agent Skills scripts/assets** (documented) [S-020;S-023]
- **ChatGPT web · Marketplace or registry** (documented) [S-002;S-020]
- **ChatGPT web · MCP Apps / interactive UI** (documented) — Connectors/plugins can include custom UI. [S-020]
- **ChatGPT web · MCP OAuth** (documented) — Remote MCP-backed tools supplied through plugins; hosted tool capabilities may differ from local Codex hosts. [S-021]
- **ChatGPT web · MCP Streamable HTTP** (documented) — Remote MCP-backed tools supplied through plugins; hosted tool capabilities may differ from local Codex hosts. [S-021]
- **ChatGPT web · MCP client role** (documented) — Remote MCP-backed tools supplied through plugins; hosted tool capabilities may differ from local Codex hosts. [S-021]
- **ChatGPT web · MCP tools** (documented) — Remote MCP-backed tools supplied through plugins; hosted tool capabilities may differ from local Codex hosts. [S-021]
- **Codex ACP adapter · ACP agent/server role** (registry-listed) — Official ACP Registry 1.7.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Codex ACP adapter · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]
- **Codex CLI · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for ChatGPT & Codex; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-020]
- **Codex CLI · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for ChatGPT & Codex; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-020]
- **Codex CLI · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for ChatGPT & Codex; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-020]
- **Codex CLI · Agent Skills core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for ChatGPT & Codex; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-020;S-023]
- **Codex CLI · Agent Skills scripts/assets** (documented) [S-020;S-023]
- **Codex CLI · Headless / CI execution** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Marketplace or registry** (documented) [S-002;S-020]
- **Codex CLI · AGENTS.md** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Native rules/instructions** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · MCP OAuth** (documented) [S-021]
- **Codex CLI · MCP Streamable HTTP** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-021]
- **Codex CLI · MCP client role** (documented) [S-021]
- **Codex CLI · MCP stdio** (documented;registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002;S-021]
- **Codex CLI · MCP tools** (documented) [S-021]
- **Codex CLI · Custom agents** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Hooks** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Native plugin system** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Subagent MCP access** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Subagents** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex CLI · Session handoff/import** (documented) [S-022;S-024;S-025;S-026;S-028]
- **Codex IDE extension · Agent Skills core** (documented) [S-023]
- **Codex IDE extension · AGENTS.md** (documented) [S-024;S-026;S-028]
- **Codex IDE extension · MCP OAuth** (documented) [S-021]
- **Codex IDE extension · MCP Streamable HTTP** (documented) [S-021]
- **Codex IDE extension · MCP client role** (documented) [S-021]
- **Codex IDE extension · MCP stdio** (documented) [S-021]
- **Codex IDE extension · MCP tools** (documented) [S-021]
- **Codex IDE extension · Hooks** (documented) [S-024;S-026;S-028]
- **Codex IDE extension · Subagents** (documented) [S-024;S-026;S-028]

### Partial, gated, experimental, or conflicting

- **Codex CLI · MCP server role** (documented) — Legacy codex mcp-server command is deprecated; App Server is preferred. [S-027;S-028]

### Explicitly unsupported or currently unavailable

- **ChatGPT mobile · MCP stdio** (documented) [S-021]
- **ChatGPT web · MCP stdio** (documented) [S-021]
- **Codex IDE extension · Agent Plugins 1.0 core** (documented) [S-020]
- **Codex IDE extension · Agent Plugins packaged MCP** (documented) [S-020]
- **Codex IDE extension · Agent Plugins packaged skills** (documented) [S-020]

### High-priority unknowns

- ChatGPT web · MCP 2026-07-28 (P1)
- ChatGPT web · MCP resources (P1)
- ChatGPT web · MCP prompts (P1)
- ChatGPT web · MCP roots (P2)
- ChatGPT web · MCP sampling (P2)
- ChatGPT web · MCP elicitation (P2)
- ChatGPT web · MCP tasks (P2)
- ChatGPT web · Agent Plugins failure isolation (P2)
- ChatGPT web · ACP session load/resume (P2)
- ChatGPT web · ACP session list (P2)
- ChatGPT web · ACP terminal reverse RPC (P2)
- ChatGPT web · A2A client role (P2)
- ChatGPT web · A2A agent/server role (P2)
- ChatGPT desktop / Codex host · MCP 2026-07-28 (P1)
- ChatGPT desktop / Codex host · MCP resources (P1)
- ChatGPT desktop / Codex host · MCP prompts (P1)
- ChatGPT desktop / Codex host · MCP roots (P2)
- ChatGPT desktop / Codex host · MCP sampling (P2)
- ChatGPT desktop / Codex host · MCP elicitation (P2)
- ChatGPT desktop / Codex host · MCP tasks (P2)
- … 49 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-021] ChatGPT and Codex MCP — https://learn.chatgpt.com/docs/extend/mcp
- [S-022] Codex CLI — https://developers.openai.com/codex/cli
- [S-023] Build Agent Skills for ChatGPT and Codex — https://developers.openai.com/codex/build-skills
- [S-024] Codex AGENTS.md — https://developers.openai.com/codex/agent-configuration/agents-md
- [S-025] Codex non-interactive mode — https://developers.openai.com/codex/non-interactive-mode
- [S-026] Codex Hooks — https://developers.openai.com/codex/hooks
- [S-027] Codex MCP server — https://developers.openai.com/codex/mcp-server
- [S-028] Codex App Server — https://developers.openai.com/codex/app-server

## OpenClaw

**Coverage tier:** A  
**Inclusion basis:** first-party MCP/ACP/Skills docs + Agent Plugins client  
**Surfaces:** 3  
**Cells:** supported 20 · partial 1 · explicit no 0 · unknown 126

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| OpenClaw core agent | multi-surface-agent | observed 2026-08-28 | ga |  |
| OpenClaw ACP host | acp-client | observed 2026-08-28 | ga | acp-client |
| OpenClaw MCP server | mcp-server | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **OpenClaw ACP host · ACP client/host role** (documented) [S-162]
- **OpenClaw ACP host · ACP stdio** (documented) [S-162]
- **OpenClaw ACP host · Session handoff/import** (documented) [S-162]
- **OpenClaw MCP server · MCP server role** (documented) [S-161]
- **OpenClaw MCP server · MCP stdio** (documented) [S-161]
- **OpenClaw MCP server · MCP tools** (documented) [S-161]
- **OpenClaw core agent · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for OpenClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for OpenClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for OpenClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Agent Skills core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for OpenClaw; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Marketplace or registry** (documented) [S-002;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · MCP Streamable HTTP** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **OpenClaw core agent · MCP client role** (documented) [S-002;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · MCP legacy SSE** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **OpenClaw core agent · MCP stdio** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **OpenClaw core agent · MCP tools** (documented) [S-002;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Computer/browser use** (documented) [S-002;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Native plugin system** (documented) [S-002;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Nested subagents** (documented) [S-002;S-160;S-162;S-163;S-164]
- **OpenClaw core agent · Subagents** (documented) [S-002;S-160;S-162;S-163;S-164]

### Partial, gated, experimental, or conflicting

- **OpenClaw ACP host · ACP MCP forwarding** (documented) — ACP bridge does not accept arbitrary per-session MCP injection; gateway/plugin bridges are configured separately. [S-161;S-162]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- OpenClaw core agent · MCP 2026-07-28 (P1)
- OpenClaw core agent · MCP resources (P1)
- OpenClaw core agent · MCP prompts (P1)
- OpenClaw core agent · MCP OAuth (P1)
- OpenClaw core agent · MCP roots (P2)
- OpenClaw core agent · MCP sampling (P2)
- OpenClaw core agent · MCP elicitation (P2)
- OpenClaw core agent · MCP tasks (P2)
- OpenClaw core agent · MCP Apps / interactive UI (P2)
- OpenClaw core agent · Agent Plugins failure isolation (P2)
- OpenClaw core agent · ACP session load/resume (P2)
- OpenClaw core agent · ACP session list (P2)
- OpenClaw core agent · ACP terminal reverse RPC (P2)
- OpenClaw core agent · A2A client role (P2)
- OpenClaw core agent · A2A agent/server role (P2)
- OpenClaw ACP host · MCP 2026-07-28 (P1)
- OpenClaw ACP host · MCP resources (P1)
- OpenClaw ACP host · MCP prompts (P1)
- OpenClaw ACP host · MCP OAuth (P1)
- OpenClaw ACP host · MCP roots (P2)
- … 25 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-160] OpenClaw Skills — https://docs.openclaw.ai/tools/skills
- [S-161] OpenClaw MCP — https://docs.openclaw.ai/cli/mcp
- [S-162] OpenClaw ACP agents — https://docs.openclaw.ai/tools/acp-agents
- [S-163] OpenClaw Subagents — https://docs.openclaw.ai/tools/subagents
- [S-164] OpenClaw Plugin bundles — https://docs.openclaw.ai/plugins/bundles

## OpenCode

**Coverage tier:** A  
**Inclusion basis:** first-party CLI/desktop/IDE docs + ACP registry  
**Surfaces:** 3  
**Cells:** supported 54 · partial 0 · explicit no 0 · unknown 93

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| OpenCode CLI/TUI | cli | 1.18.25 | ga | acp-agent |
| OpenCode desktop | desktop | observed 2026-08-28 | ga |  |
| OpenCode IDE extension | ide-extension | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **OpenCode CLI/TUI · MCP client role** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · MCP tools** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · MCP stdio** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · MCP Streamable HTTP** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · MCP OAuth** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · Agent Skills core** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · Agent Skills standard paths** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · Agent Skills scripts/assets** (documented) — OpenCode skills expose supporting files and let the agent read referenced scripts, resources, and assets on demand. [S-102]
- **OpenCode CLI/TUI · ACP agent/server role** (documented; registry-listed) — Official ACP Registry 1.18.25; registry proves the agent role, not every optional ACP method. [S-001;S-103]
- **OpenCode CLI/TUI · ACP stdio** (documented; registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-103]
- **OpenCode CLI/TUI · AGENTS.md** (documented) — OpenCode discovers project, nested, and global AGENTS.md instruction files. [S-322]
- **OpenCode CLI/TUI · Native rules/instructions** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · Hooks** (documented) — Native OpenCode plugins register lifecycle, request, event, and tool-execution hooks. [S-105]
- **OpenCode CLI/TUI · Subagents** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · Subagent MCP access** (documented) — Per-agent permissions can allow or restrict tools supplied by configured MCP servers. [S-104]
- **OpenCode CLI/TUI · Subagent write access** (documented) — OpenCode subagents use their own configured permissions, including edit access when allowed. [S-104]
- **OpenCode CLI/TUI · Native plugin system** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode CLI/TUI · Marketplace or registry** (documented) — OpenCode installs native plugins from npm packages and exposes community plugin discovery; this is not the portable Agent Plugins registry. [S-105]
- **OpenCode CLI/TUI · Headless / CI execution** (documented) [S-001;S-103]
- **OpenCode CLI/TUI · Custom agents** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · MCP client role** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · MCP tools** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · MCP stdio** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · MCP Streamable HTTP** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · MCP OAuth** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · Agent Skills core** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · Agent Skills standard paths** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · Agent Skills scripts/assets** (documented) — OpenCode skills expose supporting files and let the agent read referenced scripts, resources, and assets on demand. [S-102]
- **OpenCode desktop · AGENTS.md** (documented) — OpenCode discovers project, nested, and global AGENTS.md instruction files. [S-322]
- **OpenCode desktop · Native rules/instructions** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · Hooks** (documented) — Native OpenCode plugins register lifecycle, request, event, and tool-execution hooks. [S-105]
- **OpenCode desktop · Subagents** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · Subagent MCP access** (documented) — Per-agent permissions can allow or restrict tools supplied by configured MCP servers. [S-104]
- **OpenCode desktop · Subagent write access** (documented) — OpenCode subagents use their own configured permissions, including edit access when allowed. [S-104]
- **OpenCode desktop · Native plugin system** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode desktop · Marketplace or registry** (documented) — OpenCode installs native plugins from npm packages and exposes community plugin discovery; this is not the portable Agent Plugins registry. [S-105]
- **OpenCode desktop · Custom agents** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · MCP client role** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · MCP tools** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · MCP stdio** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · MCP Streamable HTTP** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · MCP OAuth** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · Agent Skills core** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · Agent Skills standard paths** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · Agent Skills scripts/assets** (documented) — OpenCode skills expose supporting files and let the agent read referenced scripts, resources, and assets on demand. [S-102]
- **OpenCode IDE extension · AGENTS.md** (documented) — OpenCode discovers project, nested, and global AGENTS.md instruction files. [S-322]
- **OpenCode IDE extension · Native rules/instructions** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · Hooks** (documented) — Native OpenCode plugins register lifecycle, request, event, and tool-execution hooks. [S-105]
- **OpenCode IDE extension · Subagents** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · Subagent MCP access** (documented) — Per-agent permissions can allow or restrict tools supplied by configured MCP servers. [S-104]
- **OpenCode IDE extension · Subagent write access** (documented) — OpenCode subagents use their own configured permissions, including edit access when allowed. [S-104]
- **OpenCode IDE extension · Native plugin system** (documented) [S-100;S-101;S-102;S-104;S-105]
- **OpenCode IDE extension · Marketplace or registry** (documented) — OpenCode installs native plugins from npm packages and exposes community plugin discovery; this is not the portable Agent Plugins registry. [S-105]
- **OpenCode IDE extension · Custom agents** (documented) [S-100;S-101;S-102;S-104;S-105]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- OpenCode CLI/TUI · MCP 2026-07-28 (P1)
- OpenCode CLI/TUI · MCP resources (P1)
- OpenCode CLI/TUI · MCP prompts (P1)
- OpenCode CLI/TUI · MCP roots (P2)
- OpenCode CLI/TUI · MCP sampling (P2)
- OpenCode CLI/TUI · MCP elicitation (P2)
- OpenCode CLI/TUI · MCP tasks (P2)
- OpenCode CLI/TUI · MCP Apps / interactive UI (P2)
- OpenCode CLI/TUI · Agent Plugins failure isolation (P2)
- OpenCode CLI/TUI · ACP session load/resume (P2)
- OpenCode CLI/TUI · ACP session list (P2)
- OpenCode CLI/TUI · ACP terminal reverse RPC (P2)
- OpenCode CLI/TUI · A2A client role (P2)
- OpenCode CLI/TUI · A2A agent/server role (P2)
- OpenCode desktop · MCP 2026-07-28 (P1)
- OpenCode desktop · MCP resources (P1)
- OpenCode desktop · MCP prompts (P1)
- OpenCode desktop · MCP roots (P2)
- OpenCode desktop · MCP sampling (P2)
- OpenCode desktop · MCP elicitation (P2)

### Sources

- [S-100] OpenCode Overview — https://opencode.ai/docs/
- [S-101] OpenCode MCP servers — https://opencode.ai/docs/mcp-servers/
- [S-102] OpenCode Agent Skills — https://opencode.ai/docs/skills/
- [S-104] OpenCode Agents — https://opencode.ai/docs/agents/
- [S-105] OpenCode Plugins — https://opencode.ai/docs/plugins/
- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-103] OpenCode ACP — https://opencode.ai/docs/acp/
- [S-322] OpenCode rules and AGENTS.md — https://opencode.ai/docs/rules
## OpenHands

**Coverage tier:** A  
**Inclusion basis:** first-party CLI/Canvas/ACP docs  
**Surfaces:** 4  
**Cells:** supported 34 · partial 5 · explicit no 0 · unknown 157

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| OpenHands CLI | cli | observed 2026-08-28 | ga |  |
| OpenHands ACP agent | acp-agent | experimental observed 2026-08-28 | experimental | acp-agent |
| OpenHands Agent Canvas local backend | web-desktop-host | 1.15.x observed 2026-08-28 | ga |  |
| OpenHands Agent Canvas cloud backend | cloud-agent-host | hosted observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **OpenHands CLI · MCP client role** (documented) [S-240;S-242]
- **OpenHands CLI · MCP tools** (documented) [S-240;S-242]
- **OpenHands CLI · Agent Skills core** (documented) [S-240;S-242]
- **OpenHands CLI · Agent Skills standard paths** (documented) — OpenHands documents the recommended .agents/skills path and SKILL.md packages for this surface. [S-320]
- **OpenHands CLI · Agent Skills scripts/assets** (documented) — OpenHands Agent Skills can include scripts and reference files with progressive disclosure. [S-320]
- **OpenHands CLI · AGENTS.md** (documented) — OpenHands recommends root-level AGENTS.md as always-on repository context. [S-320]
- **OpenHands CLI · Marketplace or registry** (documented) — The CLI can install skills from the official OpenHands extensions registry into .agents/skills. [S-320]
- **OpenHands CLI · Headless / CI execution** (documented) [S-240;S-242]
- **OpenHands CLI · Custom agents** (documented) [S-240;S-242]
- **OpenHands ACP agent · ACP agent/server role** (documented) — OpenHands marks IDE/ACP integration experimental. [S-242]
- **OpenHands ACP agent · ACP stdio** (documented) — OpenHands marks IDE/ACP integration experimental. [S-242]
- **OpenHands Agent Canvas local backend · MCP client role** (documented) [S-240;S-241]
- **OpenHands Agent Canvas local backend · MCP tools** (documented) [S-240;S-241]
- **OpenHands Agent Canvas local backend · Agent Skills core** (documented) [S-240;S-241]
- **OpenHands Agent Canvas local backend · Agent Skills standard paths** (documented) — OpenHands documents the recommended .agents/skills path and SKILL.md packages for this surface. [S-320]
- **OpenHands Agent Canvas local backend · Agent Skills scripts/assets** (documented) — OpenHands Agent Skills can include scripts and reference files with progressive disclosure. [S-320]
- **OpenHands Agent Canvas local backend · Agent Plugins packaged skills** (documented) — Local Agent Canvas plugins explicitly bundle and expose skills. [S-241;S-321]
- **OpenHands Agent Canvas local backend · Agent Plugins packaged MCP** (documented) — Local Agent Canvas plugins explicitly bundle MCP server configuration. [S-241;S-321]
- **OpenHands Agent Canvas local backend · ACP client/host role** (documented) — Agent Canvas can use ACP agents in experimental workflows. [S-245]
- **OpenHands Agent Canvas local backend · AGENTS.md** (documented) — OpenHands recommends root-level AGENTS.md as always-on repository context. [S-320]
- **OpenHands Agent Canvas local backend · Hooks** (documented) [S-240;S-241]
- **OpenHands Agent Canvas local backend · Native plugin system** (documented) [S-240;S-241]
- **OpenHands Agent Canvas local backend · Marketplace or registry** (documented) [S-240;S-241]
- **OpenHands Agent Canvas local backend · Custom agents** (documented) [S-240;S-241]
- **OpenHands Agent Canvas cloud backend · MCP client role** (documented) [S-240;S-244]
- **OpenHands Agent Canvas cloud backend · MCP tools** (documented) [S-240;S-244]
- **OpenHands Agent Canvas cloud backend · Agent Skills core** (documented) [S-240;S-244]
- **OpenHands Agent Canvas cloud backend · Agent Skills standard paths** (documented) — OpenHands documents the recommended .agents/skills path and SKILL.md packages for this surface. [S-320]
- **OpenHands Agent Canvas cloud backend · Agent Skills scripts/assets** (documented) — OpenHands Agent Skills can include scripts and reference files with progressive disclosure. [S-320]
- **OpenHands Agent Canvas cloud backend · AGENTS.md** (documented) — OpenHands recommends root-level AGENTS.md as always-on repository context. [S-320]
- **OpenHands Agent Canvas cloud backend · Marketplace or registry** (documented) — OpenHands Cloud provides an integrated skill marketplace and managed organization skill library. [S-320]
- **OpenHands Agent Canvas cloud backend · Cloud agent** (documented) [S-240;S-244]
- **OpenHands Agent Canvas cloud backend · Organization policy controls** (documented) — OpenHands Cloud documents organization-level skill policies and team-wide managed skills. [S-320]
- **OpenHands Agent Canvas cloud backend · Custom agents** (documented) [S-240;S-244]

### Partial, gated, experimental, or conflicting

- **OpenHands Agent Canvas local backend · Agent Plugins 1.0 core** (documented) — Agent Canvas loads structured plugin bundles compatible with the Claude Code layout; exact Agent Plugins 1.0 conformance is not claimed. [S-241;S-321]
- **OpenHands Agent Canvas cloud backend · Agent Plugins 1.0 core** (documented) — The plugin bundle format is documented, but cloud backends can disable management or expose an empty catalog. [S-241;S-321]
- **OpenHands Agent Canvas cloud backend · Agent Plugins packaged skills** (documented) — Plugins can bundle skills, but cloud availability depends on backend plugin support. [S-241;S-321]
- **OpenHands Agent Canvas cloud backend · Agent Plugins packaged MCP** (documented) — Plugins can bundle MCP configuration, but cloud availability depends on backend plugin support. [S-241;S-321]
- **OpenHands Agent Canvas cloud backend · Native plugin system** (documented) — Cloud backend manages skills/plugins differently and hides the local Plugins page. [S-244]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- OpenHands CLI · MCP 2026-07-28 (P1)
- OpenHands CLI · MCP resources (P1)
- OpenHands CLI · MCP prompts (P1)
- OpenHands CLI · MCP OAuth (P1)
- OpenHands CLI · MCP roots (P2)
- OpenHands CLI · MCP sampling (P2)
- OpenHands CLI · MCP elicitation (P2)
- OpenHands CLI · MCP tasks (P2)
- OpenHands CLI · MCP Apps / interactive UI (P2)
- OpenHands CLI · Agent Plugins failure isolation (P2)
- OpenHands CLI · ACP session load/resume (P2)
- OpenHands CLI · ACP session list (P2)
- OpenHands CLI · ACP terminal reverse RPC (P2)
- OpenHands CLI · A2A client role (P2)
- OpenHands CLI · A2A agent/server role (P2)
- OpenHands ACP agent · MCP 2026-07-28 (P1)
- OpenHands ACP agent · MCP resources (P1)
- OpenHands ACP agent · MCP prompts (P1)
- OpenHands ACP agent · MCP OAuth (P1)
- OpenHands ACP agent · MCP roots (P2)

### Sources

- [S-240] OpenHands Agent Canvas Customize — https://docs.openhands.dev/openhands/usage/agent-canvas/customize-and-settings
- [S-242] OpenHands CLI ACP Overview — https://docs.openhands.dev/openhands/usage/cli/ide/overview
- [S-320] OpenHands skills overview and support matrix — https://docs.openhands.dev/overview/skills
- [S-241] OpenHands Agent Canvas Plugins — https://docs.openhands.dev/openhands/usage/agent-canvas/plugins
- [S-321] OpenHands SDK plugins — https://docs.openhands.dev/sdk/guides/plugins
- [S-245] OpenHands PR review ACP backend — https://docs.openhands.dev/openhands/usage/use-cases/code-review
- [S-244] OpenHands Agent Canvas local/cloud plugins — https://docs.openhands.dev/openhands/usage/agent-canvas/backend-setup/cloud
## OpenWork

**Coverage tier:** A  
**Inclusion basis:** first-party documentation and publisher repository  
**Surfaces:** 1  
**Cells:** supported 18 · partial 4 · explicit no 3 · unknown 24

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| OpenWork Desktop | desktop-agent | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **OpenWork Desktop · MCP client role** (documented) — OpenWork Desktop can add and consume custom MCP servers at workspace or global scope. [S-307;S-308]
- **OpenWork Desktop · MCP server role** (documented) — The companion openwork-ui-mcp package exposes the running desktop app as a semantic MCP server; macOS is the primary documented platform. [S-313]
- **OpenWork Desktop · MCP tools** (documented) — Configured MCP servers expose tools that OpenWork can use in agent sessions. [S-307;S-308]
- **OpenWork Desktop · MCP stdio** (documented) — The documented openwork-ui-mcp companion runs as a stdio MCP server and bridges to the local desktop app. [S-313]
- **OpenWork Desktop · Agent Skills core** (documented) — The desktop app lists, imports, creates, installs, syncs, and loads SKILL.md packages. [S-306;S-309]
- **OpenWork Desktop · Agent Skills scripts/assets** (documented) — OpenWork inherits OpenCode's skill runtime, which exposes supporting skill files, while the desktop manages the containing skill directories. [S-306;S-102]
- **OpenWork Desktop · AGENTS.md** (documented) — OpenWork exposes the underlying OpenCode runtime, which loads workspace and global AGENTS.md instructions. [S-306;S-322]
- **OpenWork Desktop · Native rules/instructions** (documented) — The OpenCode-backed workspace supports persistent AGENTS.md and configured instruction sources. [S-306;S-322]
- **OpenWork Desktop · Hooks** (documented) — OpenWork loads native OpenCode plugins, whose documented extension API includes lifecycle and tool hooks. [S-306;S-105]
- **OpenWork Desktop · Subagents** (documented) — OpenWork's documented OpenCode primitives include agents that execute tasks with different models and isolated specialization. [S-312]
- **OpenWork Desktop · Subagent MCP access** (documented) — OpenWork agents can interact with MCPs, and the inherited OpenCode agent permission model can expose MCP tools per agent. [S-312;S-104]
- **OpenWork Desktop · Subagent write access** (documented) — OpenWork inherits OpenCode agent-specific tool permissions, including editable workspace access when allowed. [S-312;S-104]
- **OpenWork Desktop · Native plugin system** (documented) — OpenWork manages native OpenCode plugins through the desktop Skills area and opencode.json. [S-306;S-312]
- **OpenWork Desktop · Headless / CI execution** (documented) — The first-party OpenWork Orchestrator CLI runs OpenCode and OpenWork server without the desktop UI and supports automatic approval mode. [S-306]
- **OpenWork Desktop · Cloud agent** (documented) — Hosted OpenWork Cloud workers continue agent work remotely and connect back to the desktop client. [S-306;S-311]
- **OpenWork Desktop · Session handoff/import** (documented) — The desktop client connects to local or hosted workers and presents the same server-owned sessions across those connection modes. [S-306;S-311]
- **OpenWork Desktop · Computer/browser use** (documented) — The first-party OpenWork Browser can open pages, click, fill forms, read content, and take screenshots; this does not imply general operating-system control. [S-310]
- **OpenWork Desktop · Custom agents** (documented) — OpenWork uses OpenCode's configurable agent primitive and server-owned workspace configuration. [S-306;S-312]

### Partial, gated, experimental, or conflicting

- **OpenWork Desktop · MCP OAuth** (documented) — OpenWork documents OAuth MCP setup with dynamic client registration; servers that do not support dynamic registration are currently excluded. [S-308]
- **OpenWork Desktop · Agent Skills standard paths** (documented) — SKILL.md packages are supported, but the native documented workspace path is .opencode/skills rather than the vendor-neutral .agents path. [S-309]
- **OpenWork Desktop · Marketplace or registry** (documented) — OpenWork supports curated skill lists, share links, organization skill hubs, and manual sources; the architecture still describes broader registry search as future work. [S-309;S-312]
- **OpenWork Desktop · Organization policy controls** (documented) — OpenWork Cloud and Connect document organization identity, roles, allowed domains, desktop restrictions, allowlists, policy, and audit controls; these controls require the hosted organization layer. [S-311;S-314]

### Explicitly unsupported or currently unavailable

- **OpenWork Desktop · Agent Plugins 1.0 core** (documented) — OpenWork's roadmap lists importing Claude-compatible plugin and marketplace manifests as future work; native OpenCode plugins are a separate supported system. [S-315]
- **OpenWork Desktop · Agent Plugins packaged skills** (documented) — Packaging skills through the portable Agent Plugins manifest is roadmap work; standalone OpenWork skills are supported separately. [S-315]
- **OpenWork Desktop · Agent Plugins packaged MCP** (documented) — Importing MCP configuration from portable Agent Plugins manifests is listed as future work; direct MCP configuration is supported separately. [S-315]

### High-priority unknowns

- OpenWork Desktop · MCP 2026-07-28 (P1)
- OpenWork Desktop · MCP resources (P1)
- OpenWork Desktop · MCP prompts (P1)
- OpenWork Desktop · MCP Streamable HTTP (P1)
- OpenWork Desktop · MCP roots (P2)
- OpenWork Desktop · MCP sampling (P2)
- OpenWork Desktop · MCP elicitation (P2)
- OpenWork Desktop · MCP tasks (P2)
- OpenWork Desktop · MCP Apps / interactive UI (P2)
- OpenWork Desktop · Agent Plugins failure isolation (P2)
- OpenWork Desktop · Nested subagents (P2)
- OpenWork Desktop · ACP client/host role (P2)

### Sources

- [S-307] Get started with OpenWork — https://openworklabs.com/docs/start-here/get-started
- [S-308] Add an MCP server in OpenWork — https://openworklabs.com/docs/start-here/connect-your-stack/add-an-mcp-server
- [S-313] OpenWork UI MCP control profile — https://github.com/different-ai/openwork/blob/dev/docs/mcp-ui-control-profile.md
- [S-306] OpenWork publisher repository — https://github.com/different-ai/openwork
- [S-309] Import a skill into OpenWork — https://openworklabs.com/docs/start-here/do-work-with-it/import-a-skill
- [S-102] OpenCode Agent Skills — https://opencode.ai/docs/skills/
- [S-315] OpenWork roadmap — https://openworklabs.com/docs/roadmap
- [S-322] OpenCode rules and AGENTS.md — https://opencode.ai/docs/rules
- [S-105] OpenCode Plugins — https://opencode.ai/docs/plugins/
- [S-312] OpenWork architecture — https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
- [S-104] OpenCode Agents — https://opencode.ai/docs/agents/
- [S-311] Get started with OpenWork Cloud — https://openworklabs.com/docs/cloud/get-started
- [S-314] OpenWork Connect — https://openwork.studio/connect
- [S-310] Control the browser with OpenWork — https://openworklabs.com/docs/start-here/do-work-with-it/control-the-browser

## pi

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| pi ACP | acp-adapter | 0.0.33 | ga | acp-agent |

### Documented/registry-supported

- **pi ACP · ACP agent/server role** (registry-listed) — Official ACP Registry 0.0.33; registry proves the agent role, not every optional ACP method. [S-001]
- **pi ACP · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Poolside

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Poolside | acp-agent | 1.0.16 | ga | acp-agent |

### Documented/registry-supported

- **Poolside · ACP agent/server role** (registry-listed) — Official ACP Registry 1.0.16; registry proves the agent role, not every optional ACP method. [S-001]
- **Poolside · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Qoder

**Coverage tier:** A  
**Inclusion basis:** first-party CLI docs + stale ACP registry entry  
**Surfaces:** 1  
**Cells:** supported 16 · partial 0 · explicit no 0 · unknown 33

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Qoder CLI | cli | 1.1.25+ current docs / registry 0.2.14 | ga | acp-agent |

### Documented/registry-supported

- **Qoder CLI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 0.2.14; registry proves the agent role, not every optional ACP method. [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Agent Skills core** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Agent Skills standard paths** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Headless / CI execution** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Native rules/instructions** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · MCP OAuth** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · MCP client role** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · MCP tools** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Custom agents** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Hooks** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Native plugin system** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Subagent MCP access** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Subagent write access** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Subagents** (documented) [S-001;S-200;S-201;S-202;S-203;S-204;S-205]
- **Qoder CLI · Session handoff/import** (documented) — Current release line supports session browsing/resume and cross-session messaging. [S-204]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Qoder CLI · MCP 2026-07-28 (P1)
- Qoder CLI · MCP resources (P1)
- Qoder CLI · MCP prompts (P1)
- Qoder CLI · MCP roots (P2)
- Qoder CLI · MCP sampling (P2)
- Qoder CLI · MCP elicitation (P2)
- Qoder CLI · MCP tasks (P2)
- Qoder CLI · MCP Apps / interactive UI (P2)
- Qoder CLI · Agent Plugins failure isolation (P2)
- Qoder CLI · ACP session load/resume (P2)
- Qoder CLI · ACP session list (P2)
- Qoder CLI · ACP terminal reverse RPC (P2)
- Qoder CLI · A2A client role (P2)
- Qoder CLI · A2A agent/server role (P2)

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-200] Qoder CLI Overview — https://docs.qoder.com/cli/overview
- [S-201] Qoder Plugins — https://docs.qoder.com/cli/plugins
- [S-202] Qoder Subagents — https://docs.qoder.com/cli/subagent
- [S-203] Qoder Permissions — https://docs.qoder.com/cli/permissions
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
- [S-205] Qoder MCP SDK — https://docs.qoder.com/en/cli/sdk/python/mcp

## Replit

**Coverage tier:** A  
**Inclusion basis:** first-party Agent/MCP client/server/Skills docs  
**Surfaces:** 2  
**Cells:** supported 12 · partial 0 · explicit no 0 · unknown 86

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Replit Agent | cloud-ide-agent | hosted observed 2026-08-28 | ga |  |
| Replit MCP Server | mcp-server | observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Replit Agent · Agent Skills core** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · Agent Skills scripts/assets** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · Agent Skills standard paths** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · Cloud agent** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · Organization policy controls** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · Native rules/instructions** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · MCP client role** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit Agent · MCP tools** (documented) [S-250;S-251;S-252;S-254;S-255]
- **Replit MCP Server · MCP OAuth** (documented) [S-253;S-254]
- **Replit MCP Server · MCP Streamable HTTP** (documented) [S-253;S-254]
- **Replit MCP Server · MCP server role** (documented) [S-253;S-254]
- **Replit MCP Server · MCP tools** (documented) [S-253;S-254]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Replit Agent · MCP 2026-07-28 (P1)
- Replit Agent · MCP resources (P1)
- Replit Agent · MCP prompts (P1)
- Replit Agent · MCP OAuth (P1)
- Replit Agent · MCP roots (P2)
- Replit Agent · MCP sampling (P2)
- Replit Agent · MCP elicitation (P2)
- Replit Agent · MCP tasks (P2)
- Replit Agent · MCP Apps / interactive UI (P2)
- Replit Agent · Agent Plugins failure isolation (P2)
- Replit Agent · ACP session load/resume (P2)
- Replit Agent · ACP session list (P2)
- Replit Agent · ACP terminal reverse RPC (P2)
- Replit Agent · A2A client role (P2)
- Replit Agent · A2A agent/server role (P2)
- Replit MCP Server · MCP 2026-07-28 (P1)
- Replit MCP Server · MCP resources (P1)
- Replit MCP Server · MCP prompts (P1)
- Replit MCP Server · MCP roots (P2)
- Replit MCP Server · MCP sampling (P2)
- … 9 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-250] Replit Agent — https://docs.replit.com/features/agent/overview
- [S-251] Replit Agent Skills — https://docs.replit.com/features/agent/skills
- [S-252] Replit MCP list — https://docs.replit.com/features/mcp/overview
- [S-253] Replit MCP Server — https://docs.replit.com/platforms/mcp-server
- [S-254] Replit connect through MCP — https://docs.replit.com/chat/connect-through-mcp
- [S-255] replit.md — https://docs.replit.com/features/project-setup/replit-dot-md

## Roo Code

**Coverage tier:** B  
**Inclusion basis:** historical lifecycle  
**Surfaces:** 1  
**Cells:** supported 0 · partial 0 · explicit no 6 · unknown 43

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Roo Code VS Code extension | ide-extension | discontinued 2026-05-15 | discontinued |  |

### Documented/registry-supported

None established in this pass.

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

- **Roo Code VS Code extension · Agent Skills core** (documented) [S-270]
- **Roo Code VS Code extension · MCP client role** (documented) [S-270]
- **Roo Code VS Code extension · MCP tools** (documented) [S-270]
- **Roo Code VS Code extension · Hooks** (documented) [S-270]
- **Roo Code VS Code extension · Native plugin system** (documented) [S-270]
- **Roo Code VS Code extension · Subagents** (documented) [S-270]

### High-priority unknowns

- Roo Code VS Code extension · MCP 2026-07-28 (P1)
- Roo Code VS Code extension · MCP resources (P1)
- Roo Code VS Code extension · MCP prompts (P1)
- Roo Code VS Code extension · MCP OAuth (P1)
- Roo Code VS Code extension · MCP roots (P2)
- Roo Code VS Code extension · MCP sampling (P2)
- Roo Code VS Code extension · MCP elicitation (P2)
- Roo Code VS Code extension · MCP tasks (P2)
- Roo Code VS Code extension · MCP Apps / interactive UI (P2)
- Roo Code VS Code extension · Agent Plugins failure isolation (P2)
- Roo Code VS Code extension · ACP session load/resume (P2)
- Roo Code VS Code extension · ACP session list (P2)
- Roo Code VS Code extension · ACP terminal reverse RPC (P2)
- Roo Code VS Code extension · A2A client role (P2)
- Roo Code VS Code extension · A2A agent/server role (P2)

### Sources

- [S-270] Roo Code shutdown notice — https://roocodeinc.github.io/Roo-Code/

## siGit Code

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| siGit Code | acp-agent | 1.5.2 | ga | acp-agent |

### Documented/registry-supported

- **siGit Code · ACP agent/server role** (registry-listed) — Official ACP Registry 1.5.2; registry proves the agent role, not every optional ACP method. [S-001]
- **siGit Code · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Snowflake

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Cortex Code | acp-agent | 1.0.73 | ga | acp-agent |

### Documented/registry-supported

- **Cortex Code · ACP agent/server role** (registry-listed) — Official ACP Registry 1.0.73; registry proves the agent role, not every optional ACP method. [S-001]
- **Cortex Code · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Stakpak

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Stakpak | acp-agent | 0.3.88 | ga | acp-agent |

### Documented/registry-supported

- **Stakpak · ACP agent/server role** (registry-listed) — Official ACP Registry 0.3.88; registry proves the agent role, not every optional ACP method. [S-001]
- **Stakpak · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Tencent Cloud / CodeBuddy

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Codebuddy Code | acp-agent | 2.141.0 | ga | acp-agent |

### Documented/registry-supported

- **Codebuddy Code · ACP agent/server role** (registry-listed) — Official ACP Registry 2.141.0; registry proves the agent role, not every optional ACP method. [S-001]
- **Codebuddy Code · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## VT Code

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| VT Code | acp-agent | 0.96.14 | ga | acp-agent |

### Documented/registry-supported

- **VT Code · ACP agent/server role** (registry-listed) — Official ACP Registry 0.96.14; registry proves the agent role, not every optional ACP method. [S-001]
- **VT Code · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Warp

**Coverage tier:** A  
**Inclusion basis:** first-party local/CLI/cloud docs  
**Surfaces:** 3  
**Cells:** supported 25 · partial 1 · explicit no 0 · unknown 121

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Warp local Agent | desktop-agent | observed 2026-08-28 | ga |  |
| Warp Agent CLI / Oz CLI | cli | observed 2026-08-28 | ga |  |
| Warp Cloud Agent | cloud-agent | hosted observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Warp local Agent · MCP client role** (documented) [S-260;S-261;S-262;S-264]
- **Warp local Agent · MCP tools** (documented) [S-260;S-261;S-262;S-264]
- **Warp local Agent · MCP stdio** (documented) [S-262]
- **Warp local Agent · Agent Skills core** (documented) [S-260;S-261;S-262;S-264]
- **Warp local Agent · Native rules/instructions** (documented) [S-260;S-261;S-262;S-264]
- **Warp local Agent · Session handoff/import** (documented) — Warp can share a local agent session for access from a browser or another device. [S-266]
- **Warp local Agent · Custom agents** (documented) — Warp agent profiles provide reusable custom agent behavior for local runs. [S-261;S-266]
- **Warp Agent CLI / Oz CLI · MCP client role** (documented) [S-260;S-261;S-262;S-264]
- **Warp Agent CLI / Oz CLI · MCP tools** (documented) [S-260;S-261;S-262;S-264]
- **Warp Agent CLI / Oz CLI · MCP stdio** (documented) — Oz CLI accepts command-and-args MCP configurations and spawns those local servers for a run. [S-323]
- **Warp Agent CLI / Oz CLI · MCP Streamable HTTP** (documented) — Oz CLI accepts URL-based remote MCP server configurations for local and cloud runs. [S-323]
- **Warp Agent CLI / Oz CLI · Agent Skills core** (documented) [S-260;S-261;S-262;S-264]
- **Warp Agent CLI / Oz CLI · Native rules/instructions** (documented) [S-260;S-261;S-262;S-264]
- **Warp Agent CLI / Oz CLI · Headless / CI execution** (documented) [S-266]
- **Warp Agent CLI / Oz CLI · Session handoff/import** (documented) [S-266]
- **Warp Agent CLI / Oz CLI · Custom agents** (documented) — Oz CLI accepts reusable agent profiles that control behavior, tools, and execution context. [S-266]
- **Warp Cloud Agent · MCP client role** (documented) [S-260;S-261;S-262;S-264]
- **Warp Cloud Agent · MCP tools** (documented) [S-260;S-261;S-262;S-264]
- **Warp Cloud Agent · MCP Streamable HTTP** (documented) [S-263;S-264]
- **Warp Cloud Agent · Agent Skills core** (documented) [S-260;S-261;S-262;S-264]
- **Warp Cloud Agent · Native rules/instructions** (documented) [S-260;S-261;S-262;S-264]
- **Warp Cloud Agent · Cloud agent** (documented) [S-263;S-264]
- **Warp Cloud Agent · Organization policy controls** (documented) [S-263;S-264]
- **Warp Cloud Agent · Session handoff/import** (documented) [S-263;S-264]
- **Warp Cloud Agent · Custom agents** (documented) [S-263;S-264]

### Partial, gated, experimental, or conflicting

- **Warp Cloud Agent · MCP stdio** (documented) — Cloud MCP configuration is passed by agent config/shared UUID; local-process semantics depend on the cloud environment. [S-262]

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Warp local Agent · MCP 2026-07-28 (P1)
- Warp local Agent · MCP resources (P1)
- Warp local Agent · MCP prompts (P1)
- Warp local Agent · MCP OAuth (P1)
- Warp local Agent · MCP roots (P2)
- Warp local Agent · MCP sampling (P2)
- Warp local Agent · MCP elicitation (P2)
- Warp local Agent · MCP tasks (P2)
- Warp local Agent · MCP Apps / interactive UI (P2)
- Warp local Agent · Agent Plugins failure isolation (P2)
- Warp local Agent · ACP session load/resume (P2)
- Warp local Agent · ACP session list (P2)
- Warp local Agent · ACP terminal reverse RPC (P2)
- Warp local Agent · A2A client role (P2)
- Warp local Agent · A2A agent/server role (P2)
- Warp Agent CLI / Oz CLI · MCP 2026-07-28 (P1)
- Warp Agent CLI / Oz CLI · MCP resources (P1)
- Warp Agent CLI / Oz CLI · MCP prompts (P1)
- Warp Agent CLI / Oz CLI · MCP OAuth (P1)
- Warp Agent CLI / Oz CLI · MCP roots (P2)

### Sources

- [S-260] Warp Agent Skills — https://docs.warp.dev/agents/capabilities/skills/
- [S-261] Warp Agents Overview — https://docs.warp.dev/agents/
- [S-262] Warp MCP workflows — https://docs.warp.dev/guides/external-tools/using-mcp-servers-with-warp/
- [S-264] Warp Agent cloud harness — https://docs.warp.dev/platform/harnesses/warp-agent/
- [S-266] Warp Oz CLI — https://docs.warp.dev/reference/cli/
- [S-323] Warp CLI MCP servers — https://docs.warp.dev/reference/cli/mcp-servers
- [S-263] Warp Cloud Agents — https://docs.warp.dev/platform/
## xAI

**Coverage tier:** A  
**Inclusion basis:** Grok Build ACP + Grok Bot Agent Plugins  
**Surfaces:** 2  
**Cells:** supported 25 · partial 0 · explicit no 0 · unknown 73

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Grok Build CLI/TUI | cli | 1.0.12 | ga | acp-agent |
| Grok Bot cloud | cloud-agent | hosted observed 2026-08-28 | ga |  |

### Documented/registry-supported

- **Grok Bot cloud · Agent Plugins 1.0 core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Grok Bot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-173]
- **Grok Bot cloud · Agent Plugins packaged MCP** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Grok Bot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-173]
- **Grok Bot cloud · Agent Plugins packaged skills** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Grok Bot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-173]
- **Grok Bot cloud · Agent Skills core** (documented;registry-listed) — Official Agent Plugins compatible-client listing for Grok Bot; exact surface behavior is refined by first-party docs where available. [S-002;S-003;S-004;S-173]
- **Grok Bot cloud · Cloud agent** (documented) [S-002;S-173]
- **Grok Bot cloud · MCP Streamable HTTP** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **Grok Bot cloud · MCP client role** (documented) [S-002;S-173]
- **Grok Bot cloud · MCP legacy SSE** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **Grok Bot cloud · MCP stdio** (registry-listed) — Transport listed by the Agent Plugins compatible-client page. [S-002]
- **Grok Bot cloud · MCP tools** (documented) [S-002;S-173]
- **Grok Bot cloud · Computer/browser use** (documented) [S-002;S-173]
- **Grok Bot cloud · Subagents** (documented) [S-002;S-173]
- **Grok Bot cloud · Session handoff/import** (documented) [S-002;S-173]
- **Grok Build CLI/TUI · ACP agent/server role** (documented;registry-listed) — Official ACP Registry 1.0.12; registry proves the agent role, not every optional ACP method. [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · ACP stdio** (documented;registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Agent Skills core** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Headless / CI execution** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Marketplace or registry** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Native rules/instructions** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · MCP client role** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · MCP tools** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Custom agents** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Hooks** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Native plugin system** (documented) [S-001;S-170;S-171;S-172]
- **Grok Build CLI/TUI · Session handoff/import** (documented) [S-001;S-170;S-171;S-172]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- Grok Build CLI/TUI · MCP 2026-07-28 (P1)
- Grok Build CLI/TUI · MCP resources (P1)
- Grok Build CLI/TUI · MCP prompts (P1)
- Grok Build CLI/TUI · MCP OAuth (P1)
- Grok Build CLI/TUI · MCP roots (P2)
- Grok Build CLI/TUI · MCP sampling (P2)
- Grok Build CLI/TUI · MCP elicitation (P2)
- Grok Build CLI/TUI · MCP tasks (P2)
- Grok Build CLI/TUI · MCP Apps / interactive UI (P2)
- Grok Build CLI/TUI · Agent Plugins failure isolation (P2)
- Grok Build CLI/TUI · ACP session load/resume (P2)
- Grok Build CLI/TUI · ACP session list (P2)
- Grok Build CLI/TUI · ACP terminal reverse RPC (P2)
- Grok Build CLI/TUI · A2A client role (P2)
- Grok Build CLI/TUI · A2A agent/server role (P2)
- Grok Bot cloud · MCP 2026-07-28 (P1)
- Grok Bot cloud · MCP resources (P1)
- Grok Bot cloud · MCP prompts (P1)
- Grok Bot cloud · MCP OAuth (P1)
- Grok Bot cloud · MCP roots (P2)
- … 10 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-170] Grok Build Overview — https://docs.x.ai/build/overview
- [S-171] Grok Build CLI reference — https://docs.x.ai/build/cli/reference
- [S-172] Grok Build Sessions — https://docs.x.ai/build/features/sessions
- [S-173] Grok Bot Overview — https://docs.x.ai/grok-bot/overview

## Z.AI / GLM Agent

**Coverage tier:** C  
**Inclusion basis:** ACP Registry only  
**Surfaces:** 1  
**Cells:** supported 2 · partial 0 · explicit no 0 · unknown 47

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| GLM Agent | acp-agent | 1.6.1 | ga | acp-agent |

### Documented/registry-supported

- **GLM Agent · ACP agent/server role** (registry-listed) — Official ACP Registry 1.6.1; registry proves the agent role, not every optional ACP method. [S-001]
- **GLM Agent · ACP stdio** (registry-listed) — Registry-distributed ACP agent launcher; exact optional capabilities remain unknown. [S-001]

### Partial, gated, experimental, or conflicting

None established in this pass.

### Explicitly unsupported or currently unavailable

None established in this pass.

### High-priority unknowns

- All capabilities beyond the ACP agent role and registry version remain unknown.

### Sources

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry

## Zed Industries

**Coverage tier:** A  
**Inclusion basis:** first-party MCP and ACP host docs  
**Surfaces:** 2  
**Cells:** supported 9 · partial 1 · explicit no 3 · unknown 85

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
| Zed native Agent | native-editor-agent | observed 2026-08-28 | ga |  |
| Zed external-agent ACP host | acp-client | observed 2026-08-28 | ga | acp-client |

### Documented/registry-supported

- **Zed external-agent ACP host · ACP MCP forwarding** (documented) [S-061]
- **Zed external-agent ACP host · ACP client/host role** (documented) [S-061]
- **Zed external-agent ACP host · ACP stdio** (documented) [S-061]
- **Zed external-agent ACP host · Session handoff/import** (documented) [S-061]
- **Zed native Agent · MCP OAuth** (documented) [S-060]
- **Zed native Agent · MCP client role** (documented) [S-060]
- **Zed native Agent · MCP list_changed** (documented) [S-060]
- **Zed native Agent · MCP prompts** (documented) [S-060]
- **Zed native Agent · MCP tools** (documented) [S-060]

### Partial, gated, experimental, or conflicting

- **Zed external-agent ACP host · Organization policy controls** (documented) — Responsibility is split: external agent owns much of model/auth/tool configuration while Zed owns the host UI and forwarding choices. [S-061]

### Explicitly unsupported or currently unavailable

- **Zed native Agent · MCP elicitation** (documented) [S-060]
- **Zed native Agent · MCP resources** (documented) [S-060]
- **Zed native Agent · MCP sampling** (documented) [S-060]

### High-priority unknowns

- Zed native Agent · MCP 2026-07-28 (P1)
- Zed native Agent · MCP roots (P2)
- Zed native Agent · MCP tasks (P2)
- Zed native Agent · MCP Apps / interactive UI (P2)
- Zed native Agent · Agent Plugins failure isolation (P2)
- Zed native Agent · ACP session load/resume (P2)
- Zed native Agent · ACP session list (P2)
- Zed native Agent · ACP terminal reverse RPC (P2)
- Zed native Agent · A2A client role (P2)
- Zed native Agent · A2A agent/server role (P2)
- Zed external-agent ACP host · MCP 2026-07-28 (P1)
- Zed external-agent ACP host · MCP resources (P1)
- Zed external-agent ACP host · MCP prompts (P1)
- Zed external-agent ACP host · MCP OAuth (P1)
- Zed external-agent ACP host · MCP roots (P2)
- Zed external-agent ACP host · MCP sampling (P2)
- Zed external-agent ACP host · MCP elicitation (P2)
- Zed external-agent ACP host · MCP tasks (P2)
- Zed external-agent ACP host · MCP Apps / interactive UI (P2)
- Zed external-agent ACP host · Agent Plugins failure isolation (P2)
- … 5 additional high-priority unknowns in `data/evidence-gaps.csv`.

### Sources

- [S-060] Zed MCP — https://zed.dev/docs/ai/mcp
- [S-061] Zed External Agents — https://zed.dev/docs/ai/external-agents
