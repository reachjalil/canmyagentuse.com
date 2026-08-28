---
title: Compatibility Timeline and Version Drift
file: 18-timeline.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 8
---

# Compatibility Timeline and Version Drift

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The most important temporal findings are not broad launches but revision and distribution drift: MCP’s dated 2026-07-28 revision, Agent Plugins 1.0, ACP Registry versions, current vendor release lines, preview-only Skills, experimental ACP integrations, and discontinued products. Historical state must remain queryable.

## What We Found

| Date | Event | Compatibility effect |
|---|---|---|
| 2026-07-28 | MCP current dated revision [S-005] | Exact revision becomes a separate feature; most clients remain unknown |
| 2026 | Agent Plugins 1.0.0 published [S-003] | Portable core separated from native plugin systems |
| 2026-08-06 | Gemini CLI Skills preview noted [S-053] | Skills marked partial/preview, not GA |
| 2026-08-12 | VS Code 1.133 Agent Plugins release [S-040] | Release-specific portable plugin support |
| 2026-08 | Current Kimi Code 0.39.x line [S-182] | ACP Registry’s Kimi CLI 1.49.0 is treated as legacy distribution |
| 2026-08 | Current Qoder 1.1.x line [S-204] | ACP Registry’s 0.2.14 entry is stale distribution metadata |
| 2026-05-15 | Roo Code discontinued [S-270] | Current cells become unavailable; historical rows should remain |

Hosted surfaces use an observation date when a public build ID is unavailable.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-040] VS Code 1.133 release notes — https://code.visualstudio.com/updates/v1_133
- [S-053] Gemini CLI release notes — https://geminicli.com/docs/changelogs/
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
- [S-270] Roo Code shutdown notice — https://roocodeinc.github.io/Roo-Code/
