---
title: Contradictions and Scope Conflicts
file: 22-contradictions.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: mixed
sources_count: 9
---

# Contradictions and Scope Conflicts

## Reader Promise
Make conflicting or differently scoped claims visible instead of smoothing them into a false green/red consensus.

## Summary (≤120 words)
The initial ledger contains 5 contradictions or scope conflicts. Several are resolved by the proposed data model rather than by choosing one source as “wrong.” Others remain open until revision-specific or runtime evidence is available.

## What We Found
| topic | source A claim | source B claim | handling | source A | source B | status |
| --- | --- | --- | --- | --- | --- | --- |
| Agent Plugins support in ChatGPT/Codex | Agent Plugins compatible-client list says ChatGPT & Codex support the open package format. | OpenAI first-party docs prominently document a vendor package with `.codex-plugin/plugin.json`. | Do not infer package-level conformance from either statement alone; model both an open-standard assertion and a vendor-native package surface. | S-050 | S-090 | open |
| MCP support as a single claim | MCP ecosystem pages often describe a client as “supporting MCP.” | Zed explicitly supports Tools and Prompts while documenting missing feature coverage such as Sampling/Elicitation. | Decompose MCP into primitives and transports; never use one boolean. | S-019 | S-136 | resolved-by-model |
| Hosted product versioning | Browser compatibility assumes enumerable browser versions. | Hosted agent products can change without stable public build identifiers. | Use dated hosted observations/fingerprints instead of fabricated versions. |  | S-088 | open |
| Plugin hooks portability | VS Code can parse Claude-compatible hooks and also supports Copilot namespaces. | Agent Plugins 1.0 states hooks are not a portable core component. | Represent hook support as a host extension capability, not as Agent Plugins core support. | S-113 | S-053 | resolved-by-model |
| Gemini ACP naming/version | Gemini CLI exposes `--acp` mode in current config reference. | ACP evolves independently and remote transport work remains in progress. | Require protocol revision and role; avoid treating CLI flag presence as full conformance. | S-132 | S-065 | open |

## Confidence Notes
Mixed; each row is an explicit research interpretation and should remain reviewable.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-050] Agent Plugins compatible clients — https://agent-plugins.org/clients
- [S-053] Agent Plugins extension namespaces — https://agent-plugins.org/specification/1.0/extensions
- [S-065] ACP remote transport work — https://github.com/agentclientprotocol/agent-client-protocol/discussions
- [S-088] OpenAI MCP support for ChatGPT and Codex — https://learn.chatgpt.com/docs/extend/mcp
- [S-090] OpenAI Build plugins — https://learn.chatgpt.com/docs/build-plugins
- [S-113] Agent plugins in VS Code — https://code.visualstudio.com/docs/agent-customization/agent-plugins
- [S-132] Gemini CLI configuration — https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/configuration.md
- [S-136] Zed MCP support — https://zed.dev/docs/ai/mcp
