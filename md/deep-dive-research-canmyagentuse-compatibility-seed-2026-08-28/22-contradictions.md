---
title: Contradictions and Drift Records
file: 22-contradictions.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: mixed
sources_count: 12
---

# Contradictions and Drift Records

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The seed records intended documentation separately from observed runtime reports and current product versions separately from registry distribution versions. It also treats product-family registry listings as provisional when first-party surface docs provide narrower support or explicit exclusions.

## What We Found

| ID | Topic | Evidence A | Evidence B | Treatment |
|---|---|---|---|---|
| C-001 | Claude MCP 2026-07-28 | New runtime/negotiation documented [S-010] | Valid payload rejection reported [S-015] | Partial, open regression test |
| C-002 | OpenAI plugins | Universal directory across supported surfaces [S-020] | IDE extension explicitly unsupported [S-020] | Split by surface |
| C-003 | GitHub “MCP support” | IDE can use resources/prompts [S-041] | Cloud agent tools-only/no OAuth [S-042] | Split IDE/cloud |
| C-004 | Kimi version | ACP Registry 1.49.0 [S-001] | Current Kimi Code 0.39.x [S-182] | Separate legacy/current product lines |
| C-005 | Qoder version | ACP Registry 0.2.14 [S-001] | Current Qoder 1.1.x [S-204] | Flag stale registry metadata |
| C-006 | Native plugins vs Agent Plugins | Similar bundles across Claude/Qoder/Qwen/Devin | Only explicit compatible clients are promoted [S-002] [S-003] | Separate feature IDs |
| C-007 | OpenHands VS Code ACP | OpenHands supports ACP agent mode [S-242] | VS Code path uses community extension, not native support [S-243] | Adapter/host distinction |

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-010] Claude Code MCP — https://code.claude.com/docs/en/mcp
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-041] GitHub Copilot MCP in IDE — https://docs.github.com/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp
- [S-042] GitHub Copilot cloud agent MCP — https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
- [S-242] OpenHands CLI ACP Overview — https://docs.openhands.dev/openhands/usage/cli/ide/overview
- [S-243] OpenHands VS Code ACP — https://docs.openhands.dev/openhands/usage/cli/ide/vscode
