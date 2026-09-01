---
title: Subagent delegation
description: Delegate a bounded task to a product-native child agent.
slug: subagent-delegation
locale: en
seoTitle: Subagent delegation compatibility — Can My Agent Use
socialTitle: Subagent delegation
socialDescription: Basic child-agent delegation tracked separately from nesting and permissions.
llmSummary: Basic delegation establishes one child-agent boundary but not recursion, MCP access, or write access.
audience: Engineers comparing multi-agent execution.
contentKind: feature
status: published
tags: [runtime, subagents, delegation]
updated: 2026-08-31
published: 2026-08-28
category: runtime
summary: Delegate a bounded task to another agent process.
specLabel: Common product term
aliases: [child agent, task delegation]
parent: subagents
related: [nested-subagents, subagent-concurrency, subagent-context-isolation, subagent-result-handoff]
highlight: false
notes:
  - id: 86
    text: "Evidence checked 2026-08-31: preview-enabled Devin Local can create foreground or background child agents with separate conversations and shared tools to handle bounded subtasks."
  - id: 85
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork can divide complex work into bounded tasks and coordinate multiple subagents in parallel, but the capability is limited to paid Cowork rather than ordinary Claude chat."
  - id: 80
    text: "Evidence checked 2026-08-29: Claude web Cowork can split complex work into smaller tasks and coordinate multiple subagents in parallel, but the capability is limited to paid Cowork rather than standard web chat."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 documents spawn_agent as a native tool for delegating parallel investigations, self-contained tasks, or research to a child with its own context window."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent can split a larger request into discrete background tasks, each executed independently by Agent in its own thread and isolated project copy, after the user reviews and accepts the proposed tasks."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 can spawn parallel focused research subagents with separate context and result handoff, but the feature is experimental and children are read-only without browser, MCP, or nesting."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp delegates focused work to specialist subagents and can start independent agent threads with explicit instructions and return their results to the parent."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer Skills dispatch dedicated sub-agents for separate parts of a task and coordinate their work toward the parent task's result."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork identifies agents as OpenCode primitives for specialized tasks that may use different models and extra context."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot can create focused named Bots, let Bots message each other asynchronously, and pass work among them. This is persistent peer-Bot delegation, not documented ephemeral child-session spawning."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code documents built-in and custom subagents that receive delegated tasks through the Agent tool, run in their own context, and return a summary to the parent conversation."
  - id: 4
    text: "Evidence checked 2026-08-28: ChatGPT Work and current local Codex releases can spawn specialized agents, expose their activity, and collect results into the parent response."
  - id: 5
    text: "Evidence checked 2026-08-28: Gemini CLI exposes built-in and custom subagents as tools, with automatic delegation or explicit @agent prompting."
  - id: 6
    text: "Evidence checked 2026-08-28: Cursor Agent can automatically or explicitly launch built-in and custom subagents on editor, CLI, and Cloud Agent surfaces."
  - id: 7
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI can automatically run built-in or custom agents as temporary subagents with separate context windows."
  - id: 8
    text: "Evidence checked 2026-08-28: VS Code documents the `agent/runSubagent` tool, built-in and custom child agents, autonomous child work, and final-result return to the main agent."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 lets primary agents invoke bounded subagents in distinct child sessions, automatically or manually, with parent-child session navigation."
  - id: 52
    text: "Evidence checked 2026-08-29: A local Warp parent agent can spawn bounded child Warp Agent conversations on the same machine after explicit orchestration approval."
  - id: 53
    text: "Evidence checked 2026-08-29: A hosted Devin coordinator decomposes a large task and delegates scoped prompts to managed child sessions while monitoring and compiling their work."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native child-agent spawning or delegated subagent lifecycle."
issues: []
resources:
  - id: cognition-devin-local-subagents
    title: "Cognition — Devin Local"
    href: https://docs.devin.ai/desktop/devin-local
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Key improvements — subagents; preview toggle"
  - id: anthropic-claude-web-cowork-subagents
    title: "Anthropic — Get started with Claude Cowork"
    href: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Key capabilities — sub-agent coordination; Start a Cowork session; parallel work"
  - id: zed-v1-17-2-tools
    title: "Zed v1.17.2 — Agent Tools"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/tools.md#L100-L112"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "spawn_agent, lines 108–112"
  - id: replit-agent-task-system-current
    title: "Replit — Task system"
    href: "https://docs.replit.com/core-concepts/agent/task-system"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is the task system?; Review and accept; Tasks start running; Availability"
  - id: cline-v4-1-16-subagent-delegation
    title: "Cline v4.1.16 — Subagents"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/features/subagents.mdx#L7-L29"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview, limitations, and availability; invocation and approval at lines 31–48"
  - id: amp-2026-08-delegation
    title: "Amp — Agent to Agent"
    href: https://ampcode.com/docs/orbs/agent-to-agent
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Send Out a Side Quest; Delegate Across Projects or Machines"
  - id: perplexity-computer-skills
    title: "Perplexity — How to use Computer Skills"
    href: https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What Are Skills?; Skills Work Together"
  - id: openwork-subagents
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
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
    locator: How subagents work
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
  - id: github-copilot-cli-custom-agents
    title: GitHub — Custom agents and subagents in Copilot CLI
    href: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Invoke a subagent
  - id: opencode-v1-18-25-agents
    title: "OpenCode v1.18.25 — Agents"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/agents.mdx#L35-L39
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Types — Subagents; Usage"
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Parent/child model; where agents run; Approval mode"
  - id: cognition-devin-advanced-capabilities
    title: "Cognition — Advanced Capabilities"
    href: https://docs.devin.ai/work-with-devin/advanced-capabilities
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managed Devins"
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
support:
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [86]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: preview-enabled
        stage: preview
        qualifiers:
          - type: preview
            value: subagents require the Devin Local preview toggle
          - type: runtime
            value: child agents can run in foreground or background with their own conversation and shared tools
        evidence:
          - resourceId: cognition-devin-local-subagents
            type: documented
            observedAt: 2026-08-31
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [85]
        target:
          kind: dated-documentation
          revision: current official Claude Cowork documentation reviewed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Cowork requires a paid Claude plan and Enterprise owner enablement can apply
          - type: runtime
            value: delegation is limited to Cowork mode; Claude coordinates multiple subagents for complex tasks
        evidence:
          - resourceId: anthropic-claude-web-cowork-subagents
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [80]
        target:
          kind: dated-documentation
          revision: "Anthropic Claude web documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: preview
            value: "Cowork on web is beta"
          - type: plan
            value: "paid Claude plans; Enterprise requires owner enablement"
          - type: runtime
            value: "Cowork mode only; Claude can automatically coordinate multiple subagents for complex tasks"
        evidence:
          - resourceId: anthropic-claude-web-cowork-subagents
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
          - type: policy
            value: "the exact built-in tool list varies with Agent Profile, selected model provider, and Zed version"
          - type: host-role
            value: "claim is native Zed Agent only; no capability is transferred from an ACP External Agent"
        evidence:
          - resourceId: zed-v1-17-2-tools
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent task-system documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "the documented task-system availability table covers Core and Pro"
          - type: policy
            value: "the user must accept proposed tasks before execution; completed changes remain isolated until applied"
          - type: runtime
            value: "child work uses hosted background task threads and isolated project copies"
        evidence:
          - resourceId: replit-agent-task-system-current
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: partial
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "experimental read-only research agents with no browser, MCP, or nested subagents"
          - type: policy
            value: "spawning requires approval unless auto-approval is enabled"
        evidence:
          - resourceId: cline-v4-1-16-subagent-delegation
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
          - type: runtime
            value: "delegated work can run in a separate orb, project, or configured runner"
        evidence:
          - resourceId: amp-2026-08-delegation
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
            value: "sub-agents are deployed by relevant Skills and coordinated automatically"
          - type: plan
            value: "Computer requires an active subscription and credits"
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
          - type: runtime
            value: "product-native managed Devin child sessions"
        evidence:
          - resourceId: cognition-devin-advanced-capabilities
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
            value: "local-to-local parent and child Warp Agents run on the user's machine"
          - type: policy
            value: "child launch requires explicit approval through /orchestrate or an orchestration-containing /plan"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "primary agent creates a distinct child session"
          - type: policy
            value: "configured agent permissions determine child tool access"
        evidence:
          - resourceId: opencode-v1-18-25-agents
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: subagent workflows and visible activity require an eligible account; Ultra may delegate proactively while other levels generally require an explicit request
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: current local Codex releases delegate after a direct request or applicable AGENTS.md or skill instruction and surface each child thread
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: delegates after a direct request or applicable project or skill instruction; /agent opens child threads while the parent collects their results
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the main agent can automatically choose a matching subagent or be nudged to a named specialist with @agent syntax
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cursor subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: applies to Cursor editor, CLI, and Cloud Agents; named subagents can be invoked with /name or natural language
        evidence:
          - resourceId: cursor-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the main Copilot agent can automatically invoke built-in or custom agents as temporary subagents
        evidence:
          - resourceId: github-copilot-cli-custom-agents
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to GitHub Copilot's local VS Code agent surface with the subagent tool enabled
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supplied by the embedded OpenCode agent runtime
        evidence:
          - resourceId: openwork-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: delegation uses distinct persistent named Bots with asynchronous messages and visible handoffs, rather than documented ephemeral child sessions
          - type: policy
            value: all Bots for an account share one hosted computer, so delegation does not create a separate filesystem, login, or credential security boundary
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
---

This row establishes that one agent can create a distinct child execution boundary for a bounded task. A renamed tool call, background shell command, or single-model chain-of-thought step is not enough unless the product exposes a child-agent execution with its own task state.

Deeper recursion, simultaneous children, inherited context, model choice, permissions, supervision, and result transfer are separate sibling capabilities.
