---
title: Streaming output
description: Show text or tool events as they arrive during a run.
slug: streaming-output
locale: en
seoTitle: "Streaming output — Can My Agent Use"
socialTitle: Streaming output
socialDescription: Compare live text, tool-event, progress, and status output.
llmSummary: Streaming output displays text or tool events before a run completes. Event types, ordering, transport, and structured output are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Show text or tool events as they arrive during a run.
specLabel: Common product term
highlight: false
notes:
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 streams model responses in the CLI by default and exposes --stream and --no-stream controls."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI's --stream-json mode emits system, user, assistant, tool-use, tool-result, and final result events one JSON object at a time while a conversation runs."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop's documented host mode subscribes to OpenCode SSE events for live session updates."
  - id: 2
    text: "Evidence checked 2026-08-28: Codex CLI, Claude Code, Gemini CLI, GitHub Copilot CLI, and Cline document progressive or structured streaming output for non-interactive and CLI workflows."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenCode exposes server and global Server-Sent Event streams, and Devin's web progress view shows shell commands, edits, and browser activity while a session runs."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp displays thinking states, tool calls, planning, terminal activity, and output while a local agent run is active."
  - id: 60
    text: "Evidence checked 2026-08-29: Preview Copilot Tasks displays live progress steps, websites, actions, and intermediate results while running, but token-level answer streaming is not established by this evidence."
issues: []
resources:
  - id: aider-v0860-options-stream
    title: "Aider v0.86.0 — Command-line options"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/config/options.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "--stream and --no-stream"
  - id: aider-v0860-scripting
    title: "Aider v0.86.0 — Scripting Aider"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/scripting.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Command line; --message; --message-file; --stream"
  - id: amp-2026-08-streaming
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Basic Usage; Message Schema"
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-streaming
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-codex-streaming
    title: OpenAI — Codex non-interactive mode
    href: https://learn.chatgpt.com/docs/non-interactive-mode
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Basic usage; JSON output
  - id: anthropic-claude-code-streaming
    title: Anthropic — Claude Code CLI reference
    href: https://code.claude.com/docs/en/cli-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: output-format; include-partial-messages
  - id: google-gemini-cli-streaming
    title: Google — Gemini CLI release notes
    href: https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/index.md
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Stream JSON output
  - id: github-copilot-cli-streaming
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: --stream; --output-format
  - id: cline-cli-streaming
    title: Cline — CLI reference
    href: https://docs.cline.bot/cli/cli-reference
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: JSON output format
  - id: opencode-event-stream
    title: OpenCode — Server
    href: https://opencode.ai/docs/server/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Events
  - id: cognition-devin-live-progress
    title: Cognition — Devin session tools
    href: https://docs.devin.ai/work-with-devin/devin-session-tools
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Progress Tab; Reviewing Devin's work in real time
  - id: warp-session-sharing
    title: "Warp — Agent Session Sharing"
    href: https://docs.warp.dev/agents/local-agents/session-sharing/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Watching Agent activity"
  - id: microsoft-copilot-tasks
    title: "Microsoft — Using Copilot Tasks"
    href: https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Task progress and monitoring"
support:
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "streaming responses are enabled by default"
          - type: format
            value: "evidence covers progressive response text in the CLI, not a structured JSONL tool-event protocol"
          - type: policy
            value: "prompt-cache statistics and cost estimates may be unavailable while streaming"
        evidence:
          - resourceId: aider-v0860-options-stream
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-scripting
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "newline-delimited JSON; optional thinking blocks extend Claude Code compatibility"
          - type: runtime
            value: "requires execute mode"
        evidence:
          - resourceId: amp-2026-08-streaming
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: preview
        status: partial
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Microsoft Copilot Tasks preview documentation observation"
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: runtime
            value: "Tasks view shows progress steps, websites, actions, and intermediate results"
          - type: format
            value: "token-level response streaming remains unestablished"
        evidence:
          - resourceId: microsoft-copilot-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "local actions unfold live; shared viewers receive the activity in real time through Warp servers"
        evidence:
          - resourceId: warp-session-sharing
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code CLI reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: print mode supports stream-json; include-partial-messages adds partial streaming events
          - type: runtime
            value: hook and subagent events require separate flags when those details are needed
        evidence:
          - resourceId: anthropic-claude-code-streaming
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex non-interactive documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: codex exec streams human-readable progress to stderr; --json emits newline-delimited JSON events for messages, commands, file changes, MCP, web, and plan updates
        evidence:
          - resourceId: openai-codex-streaming
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: release
          revision: Gemini CLI v0.11.0 or later
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: --output-format stream-json emits real-time JSONL events for monitoring headless agent progress
        evidence:
          - resourceId: google-gemini-cli-streaming
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: streaming is on by default for progressive response display; JSON output uses one object per line
        evidence:
          - resourceId: github-copilot-cli-streaming
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cline CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: --json emits one JSON object per line and marks in-progress messages with partial=true
        evidence:
          - resourceId: cline-cli-streaming
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current OpenCode server documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: /event provides a Server-Sent Events stream beginning with server.connected; /global/event provides global events
        evidence:
          - resourceId: opencode-event-stream
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the web progress view exposes live shell commands, code edits, and browser activity; a structured external event transport is not established
        evidence:
          - resourceId: cognition-devin-live-progress
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openwork-streaming
            type: documented
            observedAt: 2026-08-28
---

Show tokens and tool events as they arrive.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
