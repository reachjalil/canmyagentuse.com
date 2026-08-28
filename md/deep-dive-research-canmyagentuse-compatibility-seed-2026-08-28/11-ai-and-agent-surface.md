---
title: Vendor and Surface Taxonomy
file: 11-ai-and-agent-surface.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 22
---

# Vendor and Surface Taxonomy

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The seed models web, desktop, mobile, CLI, IDE extension, native editor agent, cloud agent, code-review agent, ACP host, ACP agent, MCP server, adapter, and discontinued surfaces. Several vendors require three or more rows before their support claims become accurate.

## What We Found

### High-impact surface splits

- **OpenAI:** ChatGPT web/mobile hosted plugin tools, ChatGPT desktop/Codex host, Codex CLI, Codex IDE, and an ACP adapter. [S-020] [S-021]
- **Cursor:** editor, CLI ACP agent, and cloud agent. [S-030] [S-034] [S-035]
- **GitHub:** VS Code/IDE, CLI ACP agent, cloud agent, and code review. [S-040] [S-042] [S-044]
- **Zed:** native MCP client versus ACP host. [S-060] [S-061]
- **Kiro:** IDE, CLI, Web, and Mobile with different Skills, Hooks, and Powers support. [S-080] [S-081] [S-082]
- **Cognition:** Cascade, Devin Local, Devin CLI, and Devin Cloud use related but non-identical customization surfaces. [S-120] [S-124] [S-127]
- **OpenHands:** CLI, experimental ACP agent, local Canvas, and cloud Canvas. [S-240] [S-242] [S-244]
- **Warp:** local agent, agent CLI, and cloud agent. [S-260] [S-263] [S-264]

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-021] ChatGPT and Codex MCP — https://learn.chatgpt.com/docs/extend/mcp
- [S-030] Cursor Plugins — https://cursor.com/docs/plugins
- [S-034] Cursor CLI — https://cursor.com/docs/cli/using
- [S-035] Cursor Cloud Agents — https://cursor.com/docs/cloud-agent
- [S-040] VS Code 1.133 release notes — https://code.visualstudio.com/updates/v1_133
- [S-042] GitHub Copilot cloud agent MCP — https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
- [S-044] GitHub Copilot code review — https://docs.github.com/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review
- [S-060] Zed MCP — https://zed.dev/docs/ai/mcp
- [S-061] Zed External Agents — https://zed.dev/docs/ai/external-agents
- [S-080] Kiro Agent Skills — https://kiro.dev/docs/skills/
- [S-081] Kiro Hooks — https://kiro.dev/docs/hooks/
- [S-082] Kiro Powers — https://kiro.dev/docs/powers/create/
- [S-120] Cascade Skills — https://docs.devin.ai/desktop/cascade/skills
- [S-124] Devin Local Agent — https://docs.devin.ai/desktop/devin-local
- [S-127] Devin CLI changelog — https://docs.devin.ai/cli/changelog/stable
- [S-240] OpenHands Agent Canvas Customize — https://docs.openhands.dev/openhands/usage/agent-canvas/customize-and-settings
- [S-242] OpenHands CLI ACP Overview — https://docs.openhands.dev/openhands/usage/cli/ide/overview
- [S-244] OpenHands Agent Canvas local/cloud plugins — https://docs.openhands.dev/openhands/usage/agent-canvas/backend-setup/cloud
- [S-260] Warp Agent Skills — https://docs.warp.dev/agents/capabilities/skills/
- [S-263] Warp Cloud Agents — https://docs.warp.dev/platform/
- [S-264] Warp Agent cloud harness — https://docs.warp.dev/platform/harnesses/warp-agent/
