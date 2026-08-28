---
title: Ecosystem Timeline
file: 18-timeline.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: mixed
sources_count: 19
---

# Ecosystem Timeline

## Reader Promise
Provide a chronology of the standards and host-surface events that shape the initial taxonomy and future change feed.

## Summary (≤120 words)
The timeline contains 19 dated events spanning MCP, ACP, A2A, Agent Plugins, WebMCP, AHP and host integrations. Its purpose is not historical completeness; it demonstrates the data needed for `/changes` and for explaining why a compatibility result changed.

## What We Found
| date | family | event | type | source |
| --- | --- | --- | --- | --- |
| 2024-11-05 | MCP | Legacy HTTP+SSE transport family referenced by later compatibility docs | historical | S-023 |
| 2025-01-29 | Community | MCP-agent discussion shows early framework interest | community | S-156 |
| 2025-06-23 | A2A | Google donated A2A to the Linux Foundation | governance | S-071 |
| 2025-08-27 | ACP | Zed described bring-your-own-agent integration and ACP | announcement | S-063 |
| 2025-10-02 | ACP | Zed published an ACP ecosystem progress report | ecosystem | S-064 |
| 2025-10-16 | ACP | Codex integration in Zed via ACP | product | S-139 |
| 2025-11-06 | ACP | Zed Agent Extensions simplified ACP agent distribution | product | S-138 |
| 2025-11-21 | MCP Apps | MCP Apps proposal announced | proposal | S-040 |
| 2025-11-25 | MCP | MCP 2025-11-25 revision added tasks and expanded elicitation/sampling | standard | S-033 |
| 2026-01-26 | MCP Apps | MCP Apps stable extension revision referenced by current docs | standard | S-039 |
| 2026-01-28 | ACP | ACP Registry went live | registry | S-062 |
| 2026-02-05 | VS Code | MCP Apps and Agent Skills reached major VS Code milestones | product | S-114 |
| 2026-04-10 | Cursor | Practitioner request exposed AGENTS.md auto-loading trade-offs | community | S-159 |
| 2026-06-02 | MCP | Practitioner post described production friction with large MCP tool sets | community | S-151 |
| 2026-06-08 | A2UI | A2UI v1.0 candidate updated | standard | S-081 |
| 2026-08-04 | Kiro | Kiro docs describe Agent Skills and Agent Plugins-based Powers across surfaces | product | S-123 |
| 2026-08-26 | WebMCP | WebMCP Draft Community Group Report dated Aug 26 2026 | standard | S-074 |
| 2026-08-26 | AHP | VS Code announced Agent Host and open Agent Host Protocol | standard/product | S-116 |
| 2026-08-28 | CanMyAgentUse | Research snapshot for this package | research |  |

## Confidence Notes
Medium-to-high; events were selected for relevance to the product model, not as a comprehensive history.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-023] MCP transports — https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- [S-033] MCP specification changelog — https://modelcontextprotocol.io/specification/2025-11-25/changelog
- [S-039] MCP Apps extension specification — https://modelcontextprotocol.io/extensions/apps/specification
- [S-040] MCP Apps announcement — https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/
- [S-062] The ACP Registry is live — https://zed.dev/blog/acp-registry
- [S-063] Bring Your Own Agent to Zed — https://zed.dev/blog/bring-your-own-agent-to-zed
- [S-064] How the community is driving ACP forward — https://zed.dev/blog/acp-progress-report
- [S-071] Agent2Agent joins Linux Foundation — https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/
- [S-074] WebMCP Draft Community Group Report — https://webmachinelearning.github.io/webmcp/
- [S-081] A2UI v1.0 candidate specification — https://github.com/a2ui-project/a2ui/blob/main/specification/v1_0/docs/a2ui_protocol.md
- [S-114] MCP servers in VS Code — https://code.visualstudio.com/docs/copilot/chat/mcp-servers
- [S-116] VS Code Agent Host architecture — https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture
- [S-123] Kiro Agent Skills — https://kiro.dev/docs/skills/
- [S-138] Zed Agent Extensions — https://zed.dev/blog/agent-extensions
- [S-139] Codex is live in Zed — https://zed.dev/blog/codex-is-live-in-zed
- [S-151] Reddit: I ship AI agents in production. The mess is MCP. — https://www.reddit.com/r/ClaudeAI/comments/1tuqqpn/i_ship_ai_agents_in_production_the_mess_is_mcp/
- [S-156] Hacker News: mcp-agent discussion — https://news.ycombinator.com/item?id=42867050
- [S-159] Cursor forum: AGENTS.md handling request — https://forum.cursor.com/t/more-flexible-handling-of-md-files-in-rules/157276
