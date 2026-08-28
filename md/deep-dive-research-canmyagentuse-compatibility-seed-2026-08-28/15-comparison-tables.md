---
title: Vendor Comparison Tables
file: 15-comparison-tables.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 2
---

# Vendor Comparison Tables

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The vendor comparison deliberately measures evidence coverage rather than ranking agent quality. Tier A vendors have surface-specific first-party evidence; Tier C vendors are complete registry imports whose non-ACP capabilities remain unknown. A high unknown count is therefore an honest coverage signal, not a product score.

## What We Found

| Vendor | Tier | Included surfaces | Supported | Partial | No | Unknown | Basis |
|---|---:|---:|---:|---:|---:|---:|---|
| AWS / Kiro | A | 4 | 38 | 3 | 5 | 150 | first-party surface tables + Agent Plugins + ACP registry |
| Agoragentic | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Aider | D | 1 | 0 | 0 | 0 | 49 | watchlist; first-party documentation reviewed but no current protocol claim found |
| Alibaba / Qwen | A | 1 | 15 | 0 | 0 | 34 | first-party Qwen Code docs + ACP registry |
| Amp | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Anthropic | A | 2 | 24 | 3 | 0 | 71 | first-party deep dive + ACP registry wrapper |
| Augment Code | A | 2 | 28 | 0 | 0 | 70 | first-party Auggie docs + ACP registry |
| Autohand | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Block / goose | A | 3 | 31 | 2 | 0 | 114 | first-party MCP/Skills/ACP/subagent docs + ACP registry |
| Cline | A | 2 | 12 | 1 | 3 | 82 | first-party CLI/extension/subagent docs + ACP registry |
| Cognition | A | 4 | 34 | 2 | 0 | 160 | first-party Cascade/Devin surface split + ACP registry |
| Compass AI / Nova | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Continue | A | 3 | 9 | 0 | 10 | 128 | first-party mode-specific MCP docs |
| Corust | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Cursor | A | 3 | 55 | 2 | 0 | 90 | first-party deep dive + both registries |
| DimCode | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Dirac | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Factory AI | A | 2 | 19 | 0 | 1 | 78 | first-party Droid docs + ACP registry |
| GitHub | A | 4 | 29 | 0 | 3 | 164 | first-party deep dive + both registries |
| Google | A | 2 | 15 | 2 | 0 | 81 | first-party Gemini CLI + ACP registry |
| Harn | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| JetBrains | A | 3 | 13 | 1 | 0 | 133 | first-party MCP/ACP/agent docs + Junie registry |
| Kilo | A | 2 | 15 | 0 | 0 | 83 | first-party CLI/IDE docs + ACP registry |
| LangChain / DeepAgents | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Microsoft / Visual Studio Code | A | 1 | 14 | 0 | 0 | 35 | Agent Plugins client + release-specific docs |
| Minion Code | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Mistral AI | A | 1 | 10 | 0 | 1 | 38 | first-party Vibe MCP docs + ACP registry |
| Moonshot AI | A | 2 | 22 | 0 | 1 | 75 | current Kimi Code docs + stale ACP registry entry |
| NanoClaw | B | 1 | 9 | 0 | 0 | 40 | official Agent Plugins client + repository |
| Nous Research / Hermes | A | 2 | 17 | 0 | 0 | 81 | first-party docs + Agent Plugins client |
| OpenAI | A | 6 | 63 | 1 | 5 | 225 | first-party deep dive + Agent Plugins + ACP adapter |
| OpenClaw | A | 3 | 20 | 1 | 0 | 126 | first-party MCP/ACP/Skills docs + Agent Plugins client |
| OpenCode | A | 3 | 36 | 0 | 0 | 111 | first-party CLI/desktop/IDE docs + ACP registry |
| OpenHands | A | 4 | 20 | 1 | 0 | 175 | first-party CLI/Canvas/ACP docs |
| Poolside | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Qoder | A | 1 | 16 | 0 | 0 | 33 | first-party CLI docs + stale ACP registry entry |
| Replit | A | 2 | 12 | 0 | 0 | 86 | first-party Agent/MCP client/server/Skills docs |
| Roo Code | B | 1 | 0 | 0 | 6 | 43 | historical lifecycle |
| Snowflake | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Stakpak | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Tencent Cloud / CodeBuddy | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| VT Code | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Warp | A | 3 | 20 | 1 | 0 | 126 | first-party local/CLI/cloud docs |
| Z.AI / GLM Agent | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| Zed Industries | A | 2 | 9 | 1 | 3 | 85 | first-party MCP and ACP host docs |
| crow-cli | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| fast-agent | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| pi | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| siGit Code | C | 1 | 2 | 0 | 0 | 47 | ACP Registry only |
| xAI | A | 2 | 25 | 0 | 0 | 73 | Grok Build ACP + Grok Bot Agent Plugins |

    ### Interpretation

    Do not compare raw supported-cell counts as a quality ranking. Vendors with more documented surfaces or richer first-party references naturally have more populated cells. Use filters for the exact feature and surface needed by an integration.

    The complete per-surface comparison is in `data/compatibility-matrix-summary.csv`; the full grid is in `data/compatibility-cells.csv`.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
