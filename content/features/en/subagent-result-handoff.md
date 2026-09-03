---
title: Subagent results
description: Return a child agent's findings or work to the parent.
slug: subagent-result-handoff
locale: en
seoTitle: Subagent results compatibility — Can My Agent Use
socialTitle: Subagent results
socialDescription: Compare how child-agent summaries, files, citations, diffs, status, and errors return to the parent.
llmSummary: Subagent results describe what a child returns to its parent. Text summaries, files, citations, diffs, status, errors, and structured result objects are recorded as separate qualifiers.
audience: Engineers building auditable multi-agent workflows.
contentKind: feature
status: published
tags: [runtime, subagents, handoff, provenance]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Return a child agent's findings or work to the parent.
specLabel: Common product term
aliases: [child result, agent handoff, subagent artifacts]
parent: subagents
related: [subagent-delegation, artifact-export, streaming-output]
notes:
  - id: 88
    text: "Evidence checked 2026-09-02: Copilot CLI custom agents and built-in subagents (explore, task, research) report a final text summary or execution status back to the parent conversation part; command execution returns brief summaries on success and full output on failure."
  - id: 901
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork consolidates parallel subagent workstreams into the parent task deliverable, although no manual handoff-payload interface is documented."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop receives a child task's result or error in the parent task-tool part, renders it inline in the parent transcript, and links to the child session when available."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 describes spawn_agent work as delegated tasks whose outcome returns to the parent, which then continues and reviews the child's findings."
  - id: 73
    text: "Evidence checked 2026-08-29: the Amp main agent receives a specialist's final summary, while agent-to-agent work can report results and explicitly exchange files back to the parent."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer's dedicated sub-agents report their part back, and Skills can hand research results to another Skill for formatting or deliverable creation."
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
  - id: 52
    text: "Evidence checked 2026-08-29: Warp children return final output and structured coordination messages to the parent, which can merge or summarize the results."
  - id: 53
    text: "Evidence checked 2026-08-29: Dynamic Workflow children return JSON-Schema-constrained dictionaries, and isolated coding children hand off pushed git branches through structured output."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native child-agent spawning or delegated subagent lifecycle."
issues: []
resources:
  - id: github-copilot-cli-subagent-handoff
    title: "GitHub Copilot CLI — CLI command reference"
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Custom subagents and delegated task summaries returning to parent conversation"
  - id: openwork-v01839-subagent-result
    title: "OpenWork v0.18.39 — subagent result rendering"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/components/chat/subagent-run-line.tsx#L87-L140"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "open child session and render part output or errorText, lines 87–140"
  - id: zed-v1-17-2-tools
    title: "Zed v1.17.2 — Agent Tools"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/tools.md#L108-L112"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "spawn_agent, lines 108–112"
  - id: amp-2026-08-result-handoff
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Specialist Subagents"
  - id: amp-2026-08-file-handoff
    title: "Amp — Agent to Agent"
    href: https://ampcode.com/docs/orbs/agent-to-agent
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Exchange Files"
  - id: perplexity-computer-skills
    title: "Perplexity — How to use Computer Skills"
    href: https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What Are Skills?; Skills Work Together"
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
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Parent/child model; messaging; fan-out / fan-in"
  - id: cognition-devin-dynamic-workflows
    title: "Cognition — Devin Dynamic Workflows"
    href: https://docs.devin.ai/work-with-devin/dynamic-workflows
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Authoring model; separate VM branch handoff"
  - id: aider-v0860-production-tree
    title: "Aider v0.86.0 — complete production package"
    href: "https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete aider package at the stable release commit"
  - id: aider-v0860-args-source
    title: "Aider v0.86.0 — complete CLI argument parser"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete get_parser option declarations"
  - id: aider-v0860-commands-source
    title: "Aider v0.86.0 — complete in-chat command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete command implementation"
  - id: aider-v0860-dependencies
    title: "Aider v0.86.0 — stable runtime dependencies"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/requirements.txt"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete stable runtime dependency manifest"
  - id: anthropic-claude-desktop-cycle6-subagent-result-handoff
    title: "Get started with Claude Cowork"
    href: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Current capability, permissions, and workflow sections"
support:
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [901]
        target:
          kind: dated-documentation
          revision: "Current official Anthropic documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Cowork mode in Claude Desktop"
          - type: format
            value: "parallel workstreams consolidate into the parent result"
          - type: policy
            value: "individual handoff payloads are not a separate user control"
        evidence:
          - resourceId: anthropic-claude-desktop-cycle6-subagent-result-handoff
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: provisional
        assessedAt: 2026-08-29
        humanVerificationDesired: true
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "text result or error plus status; child session can be opened separately when the engine returns its ID"
        evidence:
          - resourceId: openwork-v01839-subagent-result
            type: documented
            observedAt: 2026-08-29
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "documentation establishes findings and outcome handoff but not a schema-constrained result envelope"
        evidence:
          - resourceId: zed-v1-17-2-tools
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
            value: "native specialists return a final summary; separate threads can exchange explicit files and messages"
        evidence:
          - resourceId: amp-2026-08-result-handoff
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-file-handoff
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "documented handoff includes reporting back and cross-Skill transfer; no typed result envelope or size limit is published"
        evidence:
          - resourceId: perplexity-computer-skills
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "JSON Schema structured result and git branch handoff"
        evidence:
          - resourceId: cognition-devin-dynamic-workflows
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
            value: "children send results, status, questions, and decisions; fan-in workflows merge returned work"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
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
        status: yes
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
        status: yes
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
        status: yes
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
        status: yes
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
        status: yes
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
        status: yes
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
        status: yes
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
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [84]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; external orchestration, community wrappers, model-side role prompts, AiderDesk, and unreleased proposals do not count"
          - type: host-role
            value: "Aider's architect/editor model handoff stays inside one CLI editing loop and is not a spawned child-agent lifecycle"
        evidence:
          - resourceId: aider-v0860-production-tree
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-args-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-dependencies
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [88]
        target:
          kind: dated-documentation
          revision: GitHub Copilot CLI documentation observed 2026-09-02
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: returns final text summaries, command output, or structured completion status to the parent
        evidence:
          - resourceId: github-copilot-cli-subagent-handoff
            type: documented
            observedAt: 2026-09-02
---

This row asks what a child agent returns to its parent. A plain text summary counts as a result; files, patches, citations, status, tool output, and structured objects are additional result forms recorded as qualifiers.

Evidence should identify documented result types, size limits, streaming versus final delivery, partial results after cancellation, error representation, and whether created files remain available outside the child's workspace. A typed result envelope is not required for support.
