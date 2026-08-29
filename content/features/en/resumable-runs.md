---
title: Session resume
description: Continue a previously saved product session through a documented resume feature.
slug: resumable-runs
locale: en
seoTitle: Session resume compatibility — Can My Agent Use
socialTitle: Session resume
socialDescription: Compare documented session continue and resume behavior.
llmSummary: Session resume means a product documents continuing a saved session; preserved state and cross-device behavior are qualifiers.
audience: Operators relying on long-running or mobile agent workflows.
contentKind: feature
status: published
tags: [operations, reliability, resume, checkpoints]
updated: 2026-08-29
published: 2026-08-28
category: operations
summary: Continue a previously saved product session.
specLabel: Common product term
aliases: [resume agent, reconnect run, run checkpoint, session recovery]
parent: usage-and-reliability
related: [background-agents, conversation-export]
notes:
  - id: 901
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork sessions persist so users can leave, reopen from another Claude surface, monitor, answer, and redirect work while cloud execution continues."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 documents --restore-chat-history to reload messages from the previous local chat-history file and continue the conversation."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop syncs cloud Work chats with web and mobile so an eligible session can be reopened and continued on another supported surface."
  - id: 77
    text: "Evidence checked 2026-08-29: cloud ChatGPT Work chats sync across web, mobile, and desktop and can be continued on another supported surface with the saved conversation context."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 keeps archived Agent threads in Thread History, restores a selected conversation into the Agent Panel, and reconstructs a removed linked worktree when needed."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI can attach to a saved thread by ID, continue it across devices, and wake its sleeping orb with conversation, files, and services preserved."
  - id: 70
    text: "Evidence checked 2026-08-29: when Computer runs out of credits, active work is saved and paused rather than canceled, then automatically resumes from the stopping point after credits become available."
  - id: 62
    text: "Evidence checked 2026-08-29: Gemini Apps on the web lists pinned and recent chats, lets a signed-in user open a prior chat to resume it, and supports branching a new conversation from a selected point while preserving the original."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code saves project-scoped sessions continuously and documents `--continue`, `--resume`, named or ID-based resume, and an interactive session picker."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents `--resume`, a searchable `/resume` browser, and restoring chat history and memory for continued work."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code documents persistent Copilot sessions, restoration after window reload, session sync across devices, and continued work through its sessions list."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor Agent CLI documents resuming the latest or a selected prior chat while loading its earlier context."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents local session persistence, account sync, `--continue`, `--resume`, and full-conversation restoration."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp stores past local conversations, lets users reopen them, and continues from prior context across sessions."
  - id: 53
    text: "Evidence checked 2026-08-29: Idle hosted Devin sessions sleep without consuming usage and wake to continue when the operator sends another message."
  - id: 60
    text: "Evidence checked 2026-08-29: Signed-in consumer Microsoft Copilot stores past conversations on copilot.com and lets users reopen them and pick up where they left off."
  - id: 61
    text: "Evidence checked 2026-08-29: Every Grok Automation run is saved as a full conversation that users can open and continue where the automation left off."
resources:
  - id: aider-v0860-options-restore
    title: "Aider v0.86.0 — Command-line options"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/config/options.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "--restore-chat-history and History Files"
  - id: openai-chatgpt-desktop-work-resume
    title: "OpenAI — ChatGPT Work and Codex"
    href: https://help.openai.com/en/articles/20001275
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Where Work and Codex are available; Start Work on web or mobile"
  - id: openai-chatgpt-web-work-sync
    title: "OpenAI — ChatGPT Work and Codex"
    href: https://help.openai.com/en/articles/20001275
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Where Work and Codex are available; Start Work on web or mobile"
  - id: zed-v1-17-2-parallel-agents
    title: "Zed v1.17.2 — Parallel Agents"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/parallel-agents.md#L28-L38"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Thread History, lines 28–38"
  - id: amp-2026-08-thread-resume
    title: "Amp — Threads"
    href: https://ampcode.com/docs/threads
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Continue a Thread Anywhere"
  - id: amp-2026-08-orb-resume
    title: "Amp — Orbs"
    href: https://ampcode.com/docs/orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Why Use an Orb?"
  - id: perplexity-computer-credits
    title: "Perplexity — How Credits Work on Perplexity"
    href: https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What happens when you run out"
  - id: google-gemini-web-recent-chat-resume
    title: "Google — Find and manage your recent chats in Gemini Apps"
    href: https://support.google.com/gemini/answer/13666746?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Find your pinned and recent chats; Branch a new conversation from a chat"
  - title: Methodology
    href: /methodology
    kind: note
  - title: Anthropic — Claude Code CLI reference
    href: https://docs.anthropic.com/en/docs/claude-code/cli-usage
    kind: docs
    publisher: Anthropic
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-session-management
    title: Anthropic — Manage Claude Code sessions
    href: https://code.claude.com/docs/en/sessions
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Resume a session
  - id: google-gemini-cli-session-management
    title: Google — Manage Gemini CLI sessions and history
    href: https://geminicli.com/docs/cli/tutorials/session-management/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to resume where you left off
  - id: microsoft-vscode-session-management
    title: Microsoft — Manage agent sessions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sessions list and session restoration
  - id: microsoft-vscode-session-sync
    title: Microsoft — Sync and query session history
    href: https://code.visualstudio.com/docs/agents/run/sessions/session-history
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Session sync across devices
  - id: cursor-agent-cli-session-resume
    title: Cursor — Using Agent CLI
    href: https://docs.cursor.com/en/cli/using
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: History
  - id: github-copilot-cli-session-resume
    title: GitHub — Using Copilot CLI session data
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Resuming a previous session
  - id: warp-interacting-agents
    title: "Warp — Interacting with agents"
    href: https://docs.warp.dev/agents/local-agents/interacting-with-agents/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Staying in a conversation; managing past conversations"
  - id: warp-cloud-conversation-resume
    title: "Warp — Cloud-synced conversations"
    href: https://docs.warp.dev/agents/local-agents/cloud-conversations/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managing cloud-synced conversations"
  - id: cognition-devin-usage
    title: "Cognition — Usage"
    href: https://docs.devin.ai/admin/billing/usage
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Sleep and idle behavior"
  - id: microsoft-copilot-conversation-history
    title: "Microsoft — Conversation history in Microsoft Copilot"
    href: https://support.microsoft.com/en-us/microsoft-copilot/conversation-history-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Accessing conversation history"
  - id: spacexai-grok-automations
    title: "SpaceXAI — Automations in Grok"
    href: https://x.ai/news/grok-automations
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Every run is a full conversation"
  - id: anthropic-claude-desktop-cycle6-resumable-runs
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
            value: "persistent cloud Cowork session started or viewed in Claude Desktop"
          - type: policy
            value: "runs using local resources require Desktop to stay connected"
          - type: format
            value: "reopen, monitor, answer questions, and steer the same session"
        evidence:
          - resourceId: anthropic-claude-desktop-cycle6-resumable-runs
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
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
            value: "resume is opt-in and disabled by default"
          - type: runtime
            value: "the primitive restores prior chat messages; no remote sync, session picker, cross-device resume, pending shell state, or full process checkpoint is established"
          - type: format
            value: "restoration uses the configured local chat-history file"
        evidence:
          - resourceId: aider-v0860-options-restore
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Cloud Work is rolling out to eligible paid accounts and remains controlled by workspace permissions"
          - type: runtime
            value: "cloud Work chats sync across desktop, web, and mobile; local chats remain only on the originating computer"
        evidence:
          - resourceId: openai-chatgpt-desktop-work-resume
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "ChatGPT Work is rolling out to eligible paid plans and remains subject to workspace controls"
          - type: runtime
            value: "cloud Work chats sync across web, mobile, and desktop; local desktop chats remain on that computer"
        evidence:
          - resourceId: openai-chatgpt-web-work-sync
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
          - type: runtime
            value: "resumes saved desktop thread history; permanently deleted threads cannot be recovered"
          - type: format
            value: "restoration includes associated worktree state when a linked worktree was archived and removed"
        evidence:
          - resourceId: zed-v1-17-2-parallel-agents
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
            value: "amp threads continue attaches the CLI; orb threads wake when messaged and preserve thread and workspace state"
        evidence:
          - resourceId: amp-2026-08-thread-resume
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-orb-resume
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
            value: "the documented resume path is triggered by exhausted credits and a later refill or monthly reset"
          - type: plan
            value: "Computer access and credits are required"
        evidence:
          - resourceId: perplexity-computer-credits
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "requires sign-in; personal accounts require Keep Activity for recent-chat management"
          - type: runtime
            value: "the documentation establishes reopening a chat to resume it and does not promise retention after deletion or in a temporary chat"
        evidence:
          - resourceId: google-gemini-web-recent-chat-resume
            type: documented
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [61]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Grok.com consumer web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "each automation run has saved history and can be opened to resume the conversation"
        evidence:
          - resourceId: spacexai-grok-automations
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 consumer Microsoft Copilot web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "requires sign-in"
          - type: runtime
            value: "conversation history retains the last 18 months of interactions"
        evidence:
          - resourceId: microsoft-copilot-conversation-history
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
            value: "sleeping hosted session resumes on a new message; terminated sessions are final"
        evidence:
          - resourceId: cognition-devin-usage
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
            value: "local history reopens from the Conversations menu or panel"
          - type: policy
            value: "cross-device persistence requires cloud conversation storage"
        evidence:
          - resourceId: warp-interacting-agents
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-cloud-conversation-resume
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code session-management documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: sessions are stored per project directory as local transcripts; print-mode sessions require their session ID and retention is configurable
        evidence:
          - resourceId: anthropic-claude-code-session-management
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI session-management documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: resume history is project-scoped and subject to configured retention and deletion
        evidence:
          - resourceId: google-gemini-cli-session-management
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code agent-session documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: local sessions restore after window reload; cross-device continuation depends on GitHub-backed session sync and can be disabled or repository-excluded
        evidence:
          - resourceId: microsoft-vscode-session-management
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-session-sync
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Agent CLI usage documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Agent CLI can resume the most recent chat or a selected thread; cloud-agent persistence and retention are separate hosted behaviors
        evidence:
          - resourceId: cursor-agent-cli-session-resume
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI session-data documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: sessions persist locally and sync to the GitHub account by default; organization policy and remote-session availability can limit cross-device behavior
        evidence:
          - resourceId: github-copilot-cli-session-resume
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the product documents continuing or resuming a saved session. Viewing a static transcript without continuing it does not count.

Evidence should identify which state survives, the resume window, cross-device behavior, and cases that force a new session. Those details qualify support; they are not hidden requirements in the term.
