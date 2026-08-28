---
title: Import and Coexistence Plan
file: 14-migration-and-coexistence.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 8
---

# Import and Coexistence Plan

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The expanded seed should replace the earlier compact seed through ID-based imports rather than a manual matrix rewrite. Preserve old assertion IDs where scope is unchanged, add new product surfaces, import registry records as narrow evidence, and rebuild all derived cells. Historical rows and current rows coexist through lifecycle and version fields.

## What We Found

### Migration sequence

1. Import vendors and products.
2. Add or map distinct surfaces.
3. Import the 49-feature taxonomy.
4. Import official ACP and Agent Plugins inventory.
5. Import long-form assertions.
6. Resolve duplicate evidence into one cell roll-up without deleting scoped assertions.
7. Generate full and compact matrices.
8. Open drift records for Kimi, Qoder, and other registry/version mismatches.
9. Preserve Roo Code as historical rather than deleting it.

### Coexistence rule

Native plugin systems coexist with Agent Plugins rows; ACP hosts coexist with native agents; hosted and local MCP configuration coexist as separate surfaces. A richer native plugin must never be labeled as portable Agent Plugins conformance without an explicit claim or test.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-012] Claude Code Plugins reference — https://code.claude.com/docs/en/plugins-reference
- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-030] Cursor Plugins — https://cursor.com/docs/plugins
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
- [S-270] Roo Code shutdown notice — https://roocodeinc.github.io/Roo-Code/
