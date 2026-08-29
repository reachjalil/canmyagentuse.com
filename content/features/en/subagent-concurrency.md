---
title: Concurrent subagents
description: Run more than one child-agent task at the same time with documented concurrency and queue limits.
slug: subagent-concurrency
locale: en
seoTitle: Concurrent subagents compatibility — Can My Agent Use
socialTitle: Concurrent subagents
socialDescription: Compare parallel child-agent execution, queueing, and concurrency limits.
llmSummary: Concurrent subagents means multiple child-agent tasks can overlap in time; sequential delegation, tool-call parallelism, and background shell processes are separate behaviors.
audience: Engineers comparing multi-agent throughput and coordination.
contentKind: feature
status: published
tags: [runtime, subagents, concurrency, delegation]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Run multiple child-agent tasks concurrently with explicit queue and fan-out limits.
specLabel: Common product term
aliases: [parallel subagents, agent fan-out, concurrent child agents]
parent: subagents
related: [subagent-delegation, nested-subagents, subagent-context-isolation]
notes:
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Pro supports up to ten concurrent Agent background tasks, while Core runs one at a time and queues additional accepted tasks."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp can split independent work across several specialist subagents and documents fan-out to multiple independent agent threads at the same time."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer documents Skills that dispatch several dedicated sub-agents in parallel, including simultaneous specialist research."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents multiple foreground or background subagents, describes parallel subagent work, and exposes live subagents in the `/agents` panel and background work in `/tasks`."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work and local Codex can run specialized agents in parallel; local Codex configuration exposes a maximum concurrent spawned-thread setting."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor can send multiple Task calls in one parent turn so subagents run simultaneously; isolated worktrees or cloud environments are available for parallel writers."
  - id: 4
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents plan-based concurrent-subagent limits from 2 to 32 and a usage-billing override capped at 32."
  - id: 5
    text: "Evidence checked 2026-08-28: VS Code explicitly documents spawning multiple subagents in parallel and provides examples that run several specialized reviewers concurrently."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp runs multiple children in parallel with fan-out/fan-in and a parallelism picker, but publishes no numeric concurrent-child or queue limit."
  - id: 53
    text: "Evidence checked 2026-08-29: Managed Devins and Dynamic Workflows run multiple child sessions in parallel with wide fan-out, but the current pages publish no universal numeric concurrency or queue limit."
issues: []
resources:
  - id: replit-agent-task-system-current
    title: "Replit — Task system"
    href: "https://docs.replit.com/core-concepts/agent/task-system"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tasks start running; Frequently asked questions; Availability"
  - id: amp-2026-08-subagent-concurrency
    title: "Amp — Agent to Agent"
    href: https://ampcode.com/docs/orbs/agent-to-agent
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Fan Out Independent Work"
  - id: amp-2026-08-specialist-parallelism
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Specialist Subagents"
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
  - id: anthropic-claude-code-parallel-agents
    title: Anthropic — Run agents in parallel
    href: https://code.claude.com/docs/en/agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Choose an approach; check on running work
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/sub-agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Run subagents in foreground or background
  - id: openai-subagents
    title: OpenAI — Subagents in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/agent-configuration/subagents
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-subagents
    title: Cursor — Subagents
    href: https://cursor.com/docs/subagents
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-reference
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
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
    locator: Parallel code analysis; orchestration patterns
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Fan-out / fan-in; Approval mode"
  - id: cognition-devin-advanced-capabilities
    title: "Cognition — Advanced Capabilities"
    href: https://docs.devin.ai/work-with-devin/advanced-capabilities
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managed Devins; parallel team"
  - id: cognition-devin-dynamic-workflows-concurrency
    title: "Cognition — Devin Dynamic Workflows"
    href: https://docs.devin.ai/work-with-devin/dynamic-workflows
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Parallel agent fan-out and combine stages"
support:
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
            value: "Core permits one active background task; Pro permits up to ten concurrent background tasks"
          - type: runtime
            value: "accepted tasks beyond the plan's active limit queue until a slot opens"
        evidence:
          - resourceId: replit-agent-task-system-current
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
            value: "parallelism is explicit, but no universal native-specialist maximum is published"
        evidence:
          - resourceId: amp-2026-08-subagent-concurrency
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-specialist-parallelism
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
            value: "the documentation establishes overlapping sub-agent work but publishes no maximum active or queued child count"
          - type: plan
            value: "Computer requires an active subscription and credits"
        evidence:
          - resourceId: perplexity-computer-skills
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: partial
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "parallel managed sessions and wide workflow fan-out"
          - type: policy
            value: "no universal numeric concurrent-child or queue limit is documented"
        evidence:
          - resourceId: cognition-devin-advanced-capabilities
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-devin-dynamic-workflows-concurrency
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: partial
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "local children execute in parallel and approval exposes a parallelism setting"
          - type: policy
            value: "no numeric maximum concurrent-child or queued-child count is documented"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: available to eligible accounts; the reviewed page establishes parallel execution but does not publish a numeric web fan-out cap
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local Codex supports parallel child threads; agents.max_concurrent_threads_per_session caps spawned threads and excludes the primary thread
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: agents.max_concurrent_threads_per_session caps spawned threads and excludes the primary; leaving it unset delegates the default to Codex
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: multiple Task calls can start simultaneously; shared-checkout writers can collide unless worktree or cloud isolation is requested
        evidence:
          - resourceId: cursor-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: default concurrent limits are 2 Free/Education, 4 Pro/Pro+, 8 Max, 16 Business, and 32 Enterprise; usage-based billing can configure up to 32
        evidence:
          - resourceId: github-copilot-cli-reference
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code parallel-agent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: running several subagents at once multiplies token use and shares the account's rate limits
        evidence:
          - resourceId: anthropic-claude-code-parallel-agents
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to GitHub Copilot's local VS Code agent surface; published documentation does not state a fixed maximum parallel-child count
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
---

This row requires two or more child-agent executions whose active intervals overlap. Sequential delegation, concurrent ordinary tool calls, and detached shell commands do not establish concurrent subagents.

Evidence should record maximum active and queued children, nesting effects, per-plan or per-organization quotas, scheduling order, cancellation behavior, rate-limit sharing, and whether concurrent children can safely write to the same workspace. Tests should detect accidental serialization as well as unsafe shared-state races.
