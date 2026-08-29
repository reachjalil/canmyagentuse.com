---
title: Structured subagent result handoff
description: Return child findings, citations, artifacts, diffs, status, and errors to the parent without flattening everything into untraceable prose.
slug: subagent-result-handoff
locale: en
seoTitle: Structured subagent result handoff — Can My Agent Use
socialTitle: Structured subagent result handoff
socialDescription: Compare how child-agent results, files, citations, diffs, errors, and provenance return to the parent.
llmSummary: Result handoff asks whether a parent receives structured child status and artifacts with provenance; a free-form text summary is a narrower form of support.
audience: Engineers building auditable multi-agent workflows.
contentKind: feature
status: published
tags: [runtime, subagents, handoff, provenance]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Return structured child status, findings, citations, files, diffs, and errors to the parent.
specLabel: Common product term
aliases: [child result, agent handoff, subagent artifacts]
parent: subagents
related: [subagent-delegation, artifact-export, streaming-output]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bots can hand work to one another through visible asynchronous messages and shared files. Bot-to-group handoff messages are text-only, while images can be sent directly to another Bot; the docs do not define a typed result envelope for status, citations, or errors."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code subagents report a final summary to the parent conversation and can preserve file edits in the shared workspace or an isolated worktree. The docs do not define a typed result envelope for citations, status, artifacts, or errors."
  - id: 3
    text: "Evidence checked 2026-08-28: ChatGPT Work and Codex collect child results into the parent response and preserve inspectable child threads, but the reviewed documentation does not define a typed citation, artifact, diff, or error envelope."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI subagents report findings back to the main agent after completing an isolated context loop; no typed result envelope is defined on the reviewed page."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor subagents return a final message to the parent and can leave work on shared or isolated branches; the reviewed page does not define typed result provenance."
  - id: 6
    text: "Evidence checked 2026-08-28: VS Code returns only a child's final result to the parent while retaining the prompt, full tool trace, and returned result in an inspectable read-only child chat; no typed result envelope is documented."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-collaboration
    title: xAI — Grok Bot messaging and collaboration
    href: https://docs.x.ai/grok-bot/chat-and-collaboration
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Let Bots hand work off
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/sub-agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How subagents work; worktree isolation
  - id: openai-subagents
    title: OpenAI — Subagents in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/agent-configuration/subagents
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-subagents
    title: Google — Gemini CLI subagents
    href: https://geminicli.com/docs/core/subagents/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-subagents
    title: Cursor — Subagents
    href: https://cursor.com/docs/subagents
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What you see in chat; invoke a subagent
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: activity, results, and child threads are inspectable and consolidated into the response, but no typed artifact, citation, diff, status, or error schema is documented
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: child threads and summaries remain inspectable, but no typed artifact, citation, diff, status, or error schema is documented
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /agent exposes child threads and the parent collects results, but no typed artifact, citation, diff, status, or error schema is documented
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: findings return to the parent, but no typed artifact, citation, diff, status, or error schema is documented
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cursor subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: a final message and child branch changes remain available, but no typed artifact, citation, status, or error schema is documented
        evidence:
          - resourceId: cursor-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the parent receives a final result and the operator can inspect the child trace, but no typed artifact, citation, diff, status, or error schema is documented
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the parent receives a prose summary and can observe child file changes, but no typed result schema for citations, artifact identities, status, or errors is documented
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: visible asynchronous messages and shared files preserve useful handoff context, but Bot-to-group handoff messages are text-only and no typed result schema is documented
          - type: policy
            value: shared files live on one account-scoped computer and do not create an isolated provenance boundary
        evidence:
          - resourceId: xai-grok-bot-collaboration
            type: documented
            observedAt: 2026-08-28
---

This row asks what crosses the child-to-parent boundary. A plain prose summary may be useful, but it can lose status, sources, files, patches, tool output, uncertainty, and failure details. Structured handoff preserves enough provenance for the parent and operator to verify and act on the result.

Evidence should identify supported result types, size limits, streaming versus final delivery, partial results after cancellation, error representation, duplicate or late completion handling, and whether created artifacts remain addressable outside the child's private workspace.
