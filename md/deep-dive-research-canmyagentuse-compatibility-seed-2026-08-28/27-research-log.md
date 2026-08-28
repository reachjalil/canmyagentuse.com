---
title: Research Log
file: 27-research-log.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 6
---

# Research Log

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The pass began with the official ACP and Agent Plugins lists, mapped every entry to a surface, then drilled into first-party vendor documentation for roles, transports, primitives, packaging, instructions, hooks, subagents, cloud/headless behavior, policy gates, and explicit negatives. Unsupported claims were reviewed separately and ambiguous absences were downgraded to unknown.

## What We Found

### Query pattern

```text
<vendor> MCP tools resources prompts OAuth stdio HTTP
<vendor> Agent Skills Agent Plugins
<vendor> ACP client agent stdio session
<vendor> hooks subagents AGENTS.md plugins marketplace
<vendor> cloud headless enterprise policy
<vendor> release notes changelog discontinued
```

### High-yield moves

- Start with registry universe, then verify each surface.
- Separate protocol roles before reading feature docs.
- Search explicit “not supported,” “only,” “preview,” and “experimental.”
- Compare local, hosted, IDE, CLI, and ACP pages.
- Check release notes when registry versions look stale.
- Turn runtime issues into tests, not universal negatives.

### Limitations

No client binary, server, plugin, skill script, private tenant, or enterprise policy console was executed. Archives could not be submitted. English-language public documentation was favored.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-016] Claude Code MCP stale tools issue — https://github.com/anthropics/claude-code/issues/88172
- [S-182] Kimi Code Changelog — https://www.kimi.com/code/docs/en/kimi-code-cli/release-notes/changelog.html
- [S-204] Qoder CLI release notes — https://docs.qoder.com/ja/release-notes/qoder-cli
