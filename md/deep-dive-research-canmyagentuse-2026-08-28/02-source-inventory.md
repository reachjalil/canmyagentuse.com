---
title: Source Inventory
file: 02-source-inventory.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: mixed
sources_count: 159
---

# Source Inventory

## Reader Promise
Know which source classes the dataset depends on, how they should be ranked, and where evidence is still structurally weak.

## Summary (≤120 words)
The inventory contains 159 public URLs spanning standards, vendor documentation, repositories, registries, changelogs and practitioner discussions. Canonical specifications and first-party product docs carry the strongest compatibility weight. Community material is used to discover ambiguity and failure modes, not to paint support cells green or red by itself.

## What We Found
### Inventory by source type

| type | count |
| --- | --- |
| vendor-doc | 56 |
| standard-doc | 42 |
| github | 22 |
| vendor-blog | 10 |
| forum-post | 9 |
| registry | 5 |
| changelog | 4 |
| website | 3 |
| dataset | 2 |
| license | 2 |
| api-doc | 1 |
| governance | 1 |
| practitioner-doc | 1 |
| test-results | 1 |

### Evidence ranking

**Tier 1 — normative/canonical:** specification revisions, schemas, official registries and explicit host support matrices.  
**Tier 2 — first-party product evidence:** current vendor docs, changelogs and official repositories.  
**Tier 3 — maintainer/vendor attestation:** ecosystem compatibility lists, release notes, issue responses.  
**Tier 4 — independent observations:** reproducible practitioner tests, GitHub issues and bug reports.  
**Tier 5 — community reports:** forum/Reddit/HN statements. These are leads until corroborated.

### Freshness policy proposal

- Version-pinned CLI/desktop assertion: re-check on next release or within 90 days.
- Hosted surface: re-check within 30 days unless the product exposes a durable build/release ID.
- Draft protocol behavior: re-check within 30 days.
- Stable protocol revision semantics: re-check on spec release/changelog.
- Explicit `n`: re-check more aggressively than `y`, because absence can disappear quietly.

### Missing archive snapshots

The research contract asks for an archive URL per cited source. This environment did not provide reliable archive submission, so the ledger preserves every URL with the explicit marker `[archive-failed:not-captured-in-research-environment]` rather than manufacturing an archival citation. Capture these in a publication pipeline before treating the package as immutable historical evidence.

## Confidence Notes
High on classification; archive completeness is low because snapshots were not captured.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-001] Can I Use raw compatibility data repository — https://github.com/Fyrd/caniuse
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-003] Can I Use full data export — https://github.com/Fyrd/caniuse/blob/main/fulldata-json/data-2.0.json
- [S-004] Can I Use details feature record — https://github.com/Fyrd/caniuse/blob/main/features-json/details.json
- [S-005] Can I Use website — https://caniuse.com/
- [S-006] Can I Use Details & Summary feature page — https://caniuse.com/details
- [S-007] Can I Use browser usage table — https://caniuse.com/usage-table
- [S-008] Can I Use support-data issues — https://github.com/Fyrd/caniuse/issues
- [S-009] caniuse-lite data package — https://github.com/browserslist/caniuse-lite
- [S-010] Can I Use CC BY 4.0 license — https://github.com/Fyrd/caniuse/blob/main/LICENSE
- [S-011] MDN browser-compat-data repository — https://github.com/mdn/browser-compat-data
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-013] MDN BCD contributing guide — https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md
- [S-014] MDN BCD governance — https://github.com/mdn/browser-compat-data/blob/main/GOVERNANCE.md
- [S-015] MDN BCD release notes — https://github.com/mdn/browser-compat-data/blob/main/RELEASE_NOTES.md
- [S-016] MDN BCD package metadata — https://github.com/mdn/browser-compat-data/blob/main/package.json
- [S-017] MDN BCD CC0 license — https://github.com/mdn/browser-compat-data/blob/main/LICENSE
- [S-018] MDN BCD TypeScript types — https://github.com/mdn/browser-compat-data/blob/main/types.d.ts
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-020] MCP architecture and overview — https://modelcontextprotocol.io/specification/2025-11-25/architecture
- [S-021] MCP basic protocol — https://modelcontextprotocol.io/specification/2025-11-25/basic
- [S-022] MCP lifecycle and capability negotiation — https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
- [S-023] MCP transports — https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- [S-024] MCP authorization — https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- [S-025] MCP tools — https://modelcontextprotocol.io/specification/2025-11-25/server/tools
- [S-026] MCP resources — https://modelcontextprotocol.io/specification/2025-11-25/server/resources
- [S-027] MCP prompts — https://modelcontextprotocol.io/specification/2025-11-25/server/prompts
- [S-028] MCP sampling — https://modelcontextprotocol.io/specification/2025-11-25/client/sampling
- [S-029] MCP elicitation — https://modelcontextprotocol.io/specification/2025-11-25/client/elicitation
- [S-030] MCP roots — https://modelcontextprotocol.io/specification/2025-11-25/client/roots
- [S-031] MCP tasks — https://modelcontextprotocol.io/specification/2025-11-25/basic/utilities/tasks
- [S-032] MCP TypeScript schema — https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/schema/2025-11-25/schema.ts
- [S-033] MCP specification changelog — https://modelcontextprotocol.io/specification/2025-11-25/changelog
- [S-034] MCP security best practices — https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices
- [S-035] Official MCP Registry — https://registry.modelcontextprotocol.io/
- [S-036] Official MCP Registry documentation — https://modelcontextprotocol.io/registry/about
- [S-037] Official MCP Registry API — https://registry.modelcontextprotocol.io/docs
- [S-038] MCP Apps documentation — https://modelcontextprotocol.io/extensions/apps/overview
- [S-039] MCP Apps extension specification — https://modelcontextprotocol.io/extensions/apps/specification
- [S-040] MCP Apps announcement — https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/
- [S-041] SEP-1865 MCP Apps proposal — https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1865
- [S-042] Agent Skills overview — https://agentskills.io/home
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-044] Integrate Agent Skills into an agent — https://agentskills.io/integrate-skills
- [S-045] Agent Skills reference repository — https://github.com/agentskills/agentskills
- [S-046] Agent Skills reference tooling — https://github.com/agentskills/agentskills/tree/main/skills-ref
- [S-047] Agent Skills examples — https://github.com/agentskills/agentskills/tree/main/examples
- [S-048] Agent Plugins open standard — https://agent-plugins.org/
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-050] Agent Plugins compatible clients — https://agent-plugins.org/clients
- [S-051] Implement an Agent Plugins client — https://agent-plugins.org/implement-client
- [S-052] Agent Plugins MCP configuration — https://agent-plugins.org/specification/1.0/mcp
- [S-053] Agent Plugins extension namespaces — https://agent-plugins.org/specification/1.0/extensions
- [S-054] Agent Plugins specification repository — https://github.com/agent-plugins/agent-plugins
- [S-055] Agent Plugins working draft — https://github.com/agent-plugins/agent-plugins/tree/main/specification
- [S-056] Agent Client Protocol overview — https://agentclientprotocol.com/overview/introduction
- [S-057] Agent Client Protocol architecture — https://agentclientprotocol.com/overview/architecture
- [S-058] Agent Client Protocol protocol reference — https://agentclientprotocol.com/protocol/overview
- [S-059] ACP clients — https://agentclientprotocol.com/overview/clients
- [S-060] ACP agents — https://agentclientprotocol.com/overview/agents
- [S-061] ACP registry — https://agentclientprotocol.com/get-started/registry
- [S-062] The ACP Registry is live — https://zed.dev/blog/acp-registry
- [S-063] Bring Your Own Agent to Zed — https://zed.dev/blog/bring-your-own-agent-to-zed
- [S-064] How the community is driving ACP forward — https://zed.dev/blog/acp-progress-report
- [S-065] ACP remote transport work — https://github.com/agentclientprotocol/agent-client-protocol/discussions
- [S-066] Agent2Agent protocol documentation — https://a2a-protocol.org/latest/
- [S-067] A2A protocol specification — https://a2a-protocol.org/latest/specification/
- [S-068] A2A core concepts — https://a2a-protocol.org/latest/topics/key-concepts/
- [S-069] A2A protocol bindings — https://a2a-protocol.org/latest/specification/#protocol-bindings
- [S-070] A2A protocol repository — https://github.com/a2aproject/A2A
- [S-071] Agent2Agent joins Linux Foundation — https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
- [S-072] AGENTS.md convention — https://agents.md/
- [S-073] AGENTS.md supported agents — https://agents.md/#supported-agents
- [S-074] WebMCP Draft Community Group Report — https://webmachinelearning.github.io/webmcp/
- [S-075] WebMCP web-platform-tests results — https://wpt.fyi/results/webmcp
- [S-076] WebMCP in Chrome documentation — https://developer.chrome.com/docs/ai/webmcp
- [S-077] AG-UI overview — https://docs.ag-ui.com/
- [S-078] MCP, A2A, and AG-UI — https://docs.ag-ui.com/agentic-protocols
- [S-079] AG-UI repository — https://github.com/ag-ui-protocol/ag-ui
- [S-080] AG-UI generative UI specifications — https://docs.ag-ui.com/concepts/generative-ui-specs
- [S-081] A2UI v1.0 candidate specification — https://github.com/a2ui-project/a2ui/blob/main/specification/v1_0/docs/a2ui_protocol.md
- [S-082] A2UI v0.9 stable specification — https://a2ui.org/specification/v0.9-a2ui/
- [S-083] A2UI repository — https://github.com/a2ui-project/a2ui
- [S-084] NLWeb reference implementation — https://github.com/nlweb-ai/NLWeb
- [S-085] NLWeb TypeSpec protocol — https://github.com/nlweb-ai/nlweb-typespec
- [S-086] NLWeb .NET implementation — https://github.com/nlweb-ai/nlweb-net
- [S-087] Microsoft agentic protocols lesson — https://github.com/microsoft/ai-agents-for-beginners/blob/main/11-agentic-protocols/README.md
- [S-088] OpenAI MCP support for ChatGPT and Codex — https://learn.chatgpt.com/docs/extend/mcp
- [S-089] OpenAI Build skills — https://learn.chatgpt.com/docs/build-skills
- [S-090] OpenAI Build plugins — https://learn.chatgpt.com/docs/build-plugins
- [S-091] OpenAI package your plugin — https://developers.openai.com/plugins/build/plugins
- [S-092] OpenAI AGENTS.md behavior — https://learn.chatgpt.com/docs/agent-configuration/agents-md
- [S-093] OpenAI Codex subagents — https://learn.chatgpt.com/docs/agent-configuration/subagents
- [S-094] OpenAI Codex hooks — https://learn.chatgpt.com/docs/hooks
- [S-095] OpenAI Site tools (WebMCP) — https://learn.chatgpt.com/docs/webmcp
- [S-096] Developer mode and MCP apps in ChatGPT — https://help.openai.com/en/articles/12584461
- [S-097] OpenAI Responses API MCP tool — https://platform.openai.com/docs/guides/tools-remote-mcp
- [S-098] Claude Code MCP documentation — https://code.claude.com/docs/en/mcp
- [S-099] Claude Agent Skills overview — https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- [S-100] Claude Code plugins — https://code.claude.com/docs/en/plugins
- [S-101] Claude Code plugin reference — https://code.claude.com/docs/en/plugins-reference
- [S-102] Claude Code plugin marketplaces — https://code.claude.com/docs/en/plugin-marketplaces
- [S-103] Claude Code extension mechanisms — https://code.claude.com/docs/en/features-overview
- [S-104] Claude Code subagents — https://code.claude.com/docs/en/sub-agents
- [S-105] Claude Code hooks — https://code.claude.com/docs/en/hooks
- [S-106] Cursor plugins — https://prod.cursor.com/docs/plugins
- [S-107] Cursor MCP — https://prod.cursor.com/docs/context/mcp
- [S-108] Cursor Agent Skills — https://prod.cursor.com/docs/context/skills
- [S-109] Cursor rules and AGENTS.md — https://prod.cursor.com/docs/rules
- [S-110] Cursor CLI agent / ACP — https://prod.cursor.com/docs/cli/using
- [S-111] Cursor plugins reference — https://prod.cursor.com/docs/reference/plugins
- [S-112] Cursor Cloud Agent best practices — https://prod.cursor.com/docs/cloud-agent/best-practices
- [S-113] Agent plugins in VS Code — https://code.visualstudio.com/docs/agent-customization/agent-plugins
- [S-114] MCP servers in VS Code — https://code.visualstudio.com/docs/copilot/chat/mcp-servers
- [S-115] Agent Skills in VS Code — https://code.visualstudio.com/docs/copilot/customization/agent-skills
- [S-116] VS Code Agent Host architecture — https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture
- [S-117] Agent Host Protocol repository — https://github.com/microsoft/agent-host-protocol
- [S-118] Agent Host Protocol changelog — https://github.com/microsoft/agent-host-protocol/blob/main/CHANGELOG.md
- [S-119] GitHub Copilot plugins — https://docs.github.com/en/copilot/customizing-copilot/using-plugins
- [S-120] GitHub Copilot Agent Skills — https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-with-skills
- [S-121] GitHub custom instructions support — https://docs.github.com/en/copilot/reference/custom-instructions-support
- [S-122] GitHub Copilot code review customization — https://docs.github.com/en/copilot/concepts/agents/code-review
- [S-123] Kiro Agent Skills — https://kiro.dev/docs/skills/
- [S-124] Kiro MCP support matrix — https://kiro.dev/docs/mcp/
- [S-125] Kiro Powers — https://kiro.dev/docs/powers/
- [S-126] Create Kiro Powers — https://kiro.dev/docs/powers/create/
- [S-127] Install Kiro Powers — https://kiro.dev/docs/powers/installation/
- [S-128] Kiro IDE — https://kiro.dev/docs/ide/
- [S-129] Kiro Web Powers and MCP — https://kiro.dev/docs/autonomous-agent/sandbox/mcp/
- [S-130] Gemini CLI MCP servers — https://google-gemini.github.io/gemini-cli/docs/tools/mcp-server.html
- [S-131] Gemini CLI extensions — https://google-gemini.github.io/gemini-cli/docs/extensions/
- [S-132] Gemini CLI configuration — https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/configuration.md
- [S-133] Gemini CLI reference — https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/cli-reference.md
- [S-134] Gemini CLI changelog — https://google-gemini.github.io/gemini-cli/docs/changelogs/
- [S-135] Gemini CLI extension releasing — https://google-gemini.github.io/gemini-cli/docs/extensions/extension-releasing.html
- [S-136] Zed MCP support — https://zed.dev/docs/ai/mcp
- [S-137] Zed Agent Client Protocol — https://zed.dev/acp
- [S-138] Zed Agent Extensions — https://zed.dev/blog/agent-extensions
- [S-139] Codex is live in Zed — https://zed.dev/blog/codex-is-live-in-zed
- [S-140] Claude Code via ACP in Zed — https://zed.dev/blog/claude-code-via-acp
- [S-141] Terminal Threads are live in Zed — https://zed.dev/blog/terminal-threads
- [S-142] JetBrains AI Assistant agents — https://www.jetbrains.com/help/ai-assistant/agents.html
- [S-143] JetBrains ACP support — https://www.jetbrains.com/help/ai-assistant/acp.html
- [S-144] JetBrains MCP support — https://www.jetbrains.com/help/ai-assistant/mcp.html
- [S-145] JetBrains Skills — https://www.jetbrains.com/help/ai-assistant/agent-skills.html
- [S-146] Junie by JetBrains — https://www.jetbrains.com/help/ai-assistant/junie-agent.html
- [S-147] goose agent overview — https://block.github.io/goose/
- [S-148] goose extensions and MCP — https://block.github.io/goose/docs/getting-started/using-extensions/
- [S-149] OpenCode Agent Skills — https://opencode.ai/docs/skills
- [S-150] OpenCode MCP servers — https://opencode.ai/docs/mcp-servers
- [S-151] Reddit: I ship AI agents in production. The mess is MCP. — https://www.reddit.com/r/ClaudeAI/comments/1tuqqpn/i_ship_ai_agents_in_production_the_mess_is_mcp/
- [S-152] Reddit: compiled MCP servers Q3 2026 — https://www.reddit.com/r/mcp/comments/1vsuinw/compiled_a_list_of_mcp_servers_q3_2026/
- [S-153] Reddit: compiled best MCP 2026 discussion — https://www.reddit.com/r/ClaudeAI/comments/1vttte2/compiled_a_list_of_best_mcp_2026/
- [S-154] Reddit: cataloguing Claude Code tools — https://www.reddit.com/r/ClaudeAI/comments/1ofltdr/i_spent_way_too_long_cataloguing_claude_code/
- [S-155] Reddit: Anthropic MCP directory review notes — https://www.reddit.com/r/mcp/comments/1vana5k/anthropic_approved_my_mcp_server_into_the_claude/
- [S-156] Hacker News: mcp-agent discussion — https://news.ycombinator.com/item?id=42867050
- [S-157] Hacker News: ACP discussion — https://news.ycombinator.com/item?id=47285633
- [S-158] Cursor forum: rules, AGENTS.md and hooks setup — https://forum.cursor.com/t/cursor-setup-with-rules-mdc-agents-md-and-hooks/161005/6
- [S-159] Cursor forum: AGENTS.md handling request — https://forum.cursor.com/t/more-flexible-handling-of-md-files-in-rules/157276
