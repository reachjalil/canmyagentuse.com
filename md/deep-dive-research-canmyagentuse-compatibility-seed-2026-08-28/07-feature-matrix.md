---
title: Expanded Feature Matrix
file: 07-feature-matrix.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 13
---

# Expanded Feature Matrix

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The generated matrix covers 92 surfaces and 49 features. It contains 670 supported, 21 partial, 38 explicit unsupported, and 3779 unknown cells. Unknown remains the dominant state because exact revisions and optional protocol primitives are rarely documented across all surfaces.

## What We Found

| Vendor | Tier | Surfaces | Supported | Partial | Explicit no | Unknown | Evidence coverage |
|---|---:|---:|---:|---:|---:|---:|---:|
| OpenAI | A | 6 | 63 | 1 | 5 | 225 | 23.5% |
| Cursor | A | 3 | 55 | 2 | 0 | 90 | 38.8% |
| AWS / Kiro | A | 4 | 38 | 3 | 5 | 150 | 23.5% |
| Cognition | A | 4 | 34 | 2 | 0 | 160 | 18.4% |
| OpenCode | A | 3 | 36 | 0 | 0 | 111 | 24.5% |
| Block / goose | A | 3 | 31 | 2 | 0 | 114 | 22.4% |
| GitHub | A | 4 | 29 | 0 | 3 | 164 | 16.3% |
| Augment Code | A | 2 | 28 | 0 | 0 | 70 | 28.6% |
| Anthropic | A | 2 | 24 | 3 | 0 | 71 | 27.6% |
| xAI | A | 2 | 25 | 0 | 0 | 73 | 25.5% |
| Moonshot AI | A | 2 | 22 | 0 | 1 | 75 | 23.5% |
| OpenClaw | A | 3 | 20 | 1 | 0 | 126 | 14.3% |
| OpenHands | A | 4 | 20 | 1 | 0 | 175 | 10.7% |
| Warp | A | 3 | 20 | 1 | 0 | 126 | 14.3% |
| Factory AI | A | 2 | 19 | 0 | 1 | 78 | 20.4% |
| Continue | A | 3 | 9 | 0 | 10 | 128 | 12.9% |
| Google | A | 2 | 15 | 2 | 0 | 81 | 17.3% |
| Nous Research / Hermes | A | 2 | 17 | 0 | 0 | 81 | 17.3% |
| Cline | A | 2 | 12 | 1 | 3 | 82 | 16.3% |
| Qoder | A | 1 | 16 | 0 | 0 | 33 | 32.7% |
| Alibaba / Qwen | A | 1 | 15 | 0 | 0 | 34 | 30.6% |
| Kilo | A | 2 | 15 | 0 | 0 | 83 | 15.3% |
| JetBrains | A | 3 | 13 | 1 | 0 | 133 | 9.5% |
| Microsoft / Visual Studio Code | A | 1 | 14 | 0 | 0 | 35 | 28.6% |
| Zed Industries | A | 2 | 9 | 1 | 3 | 85 | 13.3% |
| Replit | A | 2 | 12 | 0 | 0 | 86 | 12.2% |
| Mistral AI | A | 1 | 10 | 0 | 1 | 38 | 22.4% |
| NanoClaw | B | 1 | 9 | 0 | 0 | 40 | 18.4% |
| Roo Code | B | 1 | 0 | 0 | 6 | 43 | 12.2% |
| Agoragentic | C | 1 | 2 | 0 | 0 | 47 | 4.1% |

    ### Explicit non-support patterns worth leading with

    - **Codex IDE extension:** direct MCP and standalone skills work, but plugins are explicitly unsupported. [S-020] [S-021]
    - **GitHub Copilot cloud agent:** MCP tools are supported; resources, prompts, and remote OAuth are explicitly not. [S-042]
    - **Zed native Agent:** tools, prompts, and list-change updates are supported; resources, sampling, and elicitation are not. [S-060]
    - **Kiro Web/Mobile:** workspace skills work, but hooks are absent; Mobile also lacks Powers/Agent Plugins. [S-080] [S-081] [S-082]
    - **Cline subagents:** cannot use MCP, write files, or nest. [S-090]
    - **Continue Chat/Plan:** MCP is Agent-mode-only. [S-110] [S-111]
    - **Mistral Vibe:** MCP OAuth is explicitly unsupported. [S-190]
    - **Kimi Code ACP:** terminal reverse RPC is not implemented in the current capability table. [S-180]
    - **Roo Code:** current support is unavailable because the product was discontinued. [S-270]

    ### Matrix usage

    Use `data/support-assertions.csv` for editorial changes, `data/compatibility-cells.csv` for complete querying, and `data/compatibility-matrix-summary.csv` for a compact product comparison. Do not manually edit the wide matrix.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-021] ChatGPT and Codex MCP — https://learn.chatgpt.com/docs/extend/mcp
- [S-042] GitHub Copilot cloud agent MCP — https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
- [S-060] Zed MCP — https://zed.dev/docs/ai/mcp
- [S-080] Kiro Agent Skills — https://kiro.dev/docs/skills/
- [S-081] Kiro Hooks — https://kiro.dev/docs/hooks/
- [S-082] Kiro Powers — https://kiro.dev/docs/powers/create/
- [S-090] Cline Subagents — https://docs.cline.bot/features/subagents
- [S-110] Continue MCP setup — https://docs.continue.dev/customize/deep-dives/mcp
- [S-111] Continue Agent mode — https://docs.continue.dev/ide-extensions/agent/how-it-works
- [S-180] Kimi Code ACP — https://www.kimi.com/code/docs/en/kimi-code-cli/reference/kimi-acp.html
- [S-190] Mistral Vibe MCP servers — https://docs.mistral.ai/vibe/code/cli/mcp-servers
- [S-270] Roo Code shutdown notice — https://roocodeinc.github.io/Roo-Code/
