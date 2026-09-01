---
title: Long-term memory
description: Persist preferences or working context across sessions.
slug: long-term-memory
locale: en
seoTitle: "Long-term memory — Can My Agent Use"
socialTitle: Long-term memory
socialDescription: Compare persistent preferences and working context across sessions.
llmSummary: Long-term memory persists documented preferences or working context across sessions. Scope, user controls, shared storage, deletion, and security boundaries are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-09-01
published: 2026-08-28
category: runtime
summary: Persist notes across sessions.
specLabel: Common product term
highlight: false
notes:
  - id: 76
    text: "Evidence checked 2026-09-01: Vibe's optional Memories can preserve preferences from past interactions, including automatic or explicit saves, and users can view, add, edit, delete, clear, enable, or disable those memories. Disabling the feature does not itself delete existing memories."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Memories retain preferences and working context across Conversations and Projects, with distinct user, project, and custom memory scopes plus view, edit, disable, and sharing controls."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer maintains persistent memory across sessions, retains context from long conversations, and stores user preferences and shared information for later work."
  - id: 62
    text: "Evidence checked 2026-08-29: Gemini Apps can use memory of past chats to personalize later consumer-web chats; eligible users can turn Memory on or off, inspect whether it was used, and delete source chats, subject to age, account, and Keep Activity requirements."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents that a Grok Bot can retain stable working preferences, important facts, and work summaries over time; it warns that memory is not a substitute for an authoritative source."
  - id: 2
    text: "Evidence checked 2026-08-28: OpenAI documents ChatGPT memory on the web and desktop, plus a separate local Codex memory store controlled from Codex CLI."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude memory applies to chats on the web and Claude Desktop, while Claude Code separately documents repository-scoped, machine-local auto memory."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents project-scoped Memories that preserve generated rules across sessions and can be managed from Settings → Rules."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp Agent Memory persists facts and outcomes across conversations and machines, but access is limited to enabled design-partner teams in a research preview."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin Knowledge is retained across sessions, automatically recalls relevant items from trigger descriptions, and can suggest new or updated memories from chat feedback."
  - id: 60
    text: "Evidence checked 2026-08-29: Signed-in consumer Microsoft Copilot remembers key details across conversations and lets users view, add, edit, delete, or completely disable saved memory."
issues: []
resources:
  - id: mistral-vibe-memories
    title: "Mistral Help Center — How do you handle my data when using the Memories feature?"
    href: https://help.mistral.ai/en/articles/396497-how-do-you-handle-my-data-when-using-the-memories-feature
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "What is the Memories feature?; What about privacy?; How do I turn off Memories?; How long does Vibe store my Memories?"
  - id: replit-memories-current
    title: "Replit — Memories"
    href: "https://docs.replit.com/chat/memories"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Manage your Memories; FAQ — What can Memories retain?; Where do Memories apply?; Can I view, edit, or turn off Memories?"
  - id: perplexity-computer
    title: "Perplexity — What is Computer?"
    href: https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is Computer?; Personal Cloud Sandbox"
  - id: perplexity-computer-brain
    title: "Perplexity — Brain"
    href: https://www.perplexity.ai/help-center/en/articles/19700001-what-is-brain
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is Brain?; Brain versus Memory; inspect and edit learned entries"
  - id: google-gemini-web-past-chat-memory
    title: "Google — Get personalization with memory of your past Gemini chats"
    href: https://support.google.com/gemini/answer/16598469?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What you need; Turn Memory on or off; Find and delete your past chats"
  - id: xai-grok-bot-memory
    title: xAI — Create and manage Grok Bots
    href: https://docs.x.ai/grok-bot/bots
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What a Bot remembers
  - id: openai-chatgpt-codex-memories
    title: OpenAI — Memories
    href: https://learn.chatgpt.com/docs/customization/memories
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: ChatGPT and Codex memory controls; How local Codex memories work
  - id: anthropic-claude-chat-memory
    title: Anthropic — Use Claude chat search and memory
    href: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What is Claude's memory; platform and plan availability
  - id: anthropic-claude-code-auto-memory
    title: Anthropic — How Claude remembers your project
    href: https://code.claude.com/docs/en/memory
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Auto memory
  - id: cursor-memories
    title: Cursor — Memories
    href: https://docs.cursor.com/en/context/memories
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How memories are created; Manage memories
  - id: warp-agent-memory-preview
    title: "Warp — Agent Memory Research Preview"
    href: https://docs.warp.dev/agents/agent-memory/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Key features; where Agent Memory runs"
  - id: cognition-devin-knowledge
    title: "Cognition — Knowledge"
    href: https://docs.devin.ai/product-guides/knowledge
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is Knowledge?; Knowledge Suggestions; Tips and tricks"
  - id: microsoft-copilot-privacy-controls
    title: "Microsoft Copilot for individuals — privacy controls"
    href: https://support.microsoft.com/en-us/privacy/microsoft-copilot/privacy-controls
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Personalization and memory"
support:
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [76]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Vibe Memories documentation observation
          observedAt: 2026-09-01
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: optional memories preserve explicit or automatically saved preferences from Vibe interactions and are retained for the subscription duration while the feature is in beta
          - type: policy
            value: users can view, add, edit, delete, or clear memories and enable or disable the feature; disabling alone does not delete existing memories
        evidence:
          - resourceId: mistral-vibe-memories
            type: documented
            observedAt: 2026-09-01
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Memory is opt-in and can be disabled; user memory belongs to one builder and Workspace, while project memory stays with one Project and is retrieved when relevant"
          - type: policy
            value: "Memories are private by default; collaborator sharing is off by default"
        evidence:
          - resourceId: replit-memories-current
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
            value: "baseline Memory persists preferences and shared information; Brain adds a source-linked work graph"
          - type: plan
            value: "Brain is explicitly Research Preview for Max and Enterprise Max"
          - type: policy
            value: "Brain ignores Incognito sessions and lets users inspect, edit, delete, or disable learned entries"
        evidence:
          - resourceId: perplexity-computer
            type: documented
            observedAt: 2026-08-29
          - resourceId: perplexity-computer-brain
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
            value: "requires age 18 or over, a personal Google Account, and Keep Activity enabled"
          - type: runtime
            value: "available on gemini.google.com but not in Gems or Live chats; deletion can take a short time to affect personalization"
        evidence:
          - resourceId: google-gemini-web-past-chat-memory
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
            value: "requires a signed-in personal Microsoft Account or supported third-party account"
          - type: policy
            value: "users can disable memory, delete individual memories, or delete all memory independently of chat history"
        evidence:
          - resourceId: microsoft-copilot-privacy-controls
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
            value: "cross-session relevance-triggered retrieval rather than loading every item at session start"
        evidence:
          - resourceId: cognition-devin-knowledge
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: preview
        status: partial
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "Warp Agent Memory Research Preview documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: plan
            value: "research preview for enabled design-partner teams"
          - type: runtime
            value: "supports local and cloud Warp agents; creation and retrieval are asynchronous"
          - type: policy
            value: "memory stores can be read-only or read-write and attached to selected agents"
        evidence:
          - resourceId: warp-agent-memory-preview
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT web memory documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: ChatGPT web uses account and workspace memory settings rather than the local Codex memory store
          - type: policy
            value: availability and controls depend on account and workspace memory settings
        evidence:
          - resourceId: openai-chatgpt-codex-memories
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT desktop memory documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the desktop app exposes /memories chat controls and Settings > Personalization management
          - type: policy
            value: ChatGPT memory and local Codex memory are distinct stores
        evidence:
          - resourceId: openai-chatgpt-codex-memories
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web memory documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the current memory experience and migration path vary across Free, Pro, Max, Team, and Enterprise plans
          - type: policy
            value: users can disable memory or use incognito chats; enterprise encryption and retention settings can constrain chat search
        evidence:
          - resourceId: anthropic-claude-chat-memory
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Desktop memory documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the current memory experience and migration path vary across Free, Pro, Max, Team, and Enterprise plans
          - type: policy
            value: memory applies to Claude Desktop chats and can be disabled; it is separate from Claude Code auto memory
        evidence:
          - resourceId: anthropic-claude-chat-memory
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: Claude Code v2.1.59 or later documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: auto memory is on by default, stored per repository in local Markdown files, and shared across worktrees on the same machine
          - type: policy
            value: users can inspect, edit, disable, or delete memory; files are not shared across machines or cloud environments
        evidence:
          - resourceId: anthropic-claude-code-auto-memory
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Memories documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: memories are generated from Chat conversations, scoped to a project, and maintained across sessions
          - type: policy
            value: background-generated memories require user approval before saving and can be managed in Settings > Rules
        evidence:
          - resourceId: cursor-memories
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex local-memory documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /memories controls whether a chat can use existing local memories or contribute to future memories
          - type: policy
            value: Codex skips active or short-lived sessions and redacts secrets from generated memory fields
        evidence:
          - resourceId: openai-chatgpt-codex-memories
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
            value: stable preferences, facts, and summaries persist with the named Bot; shared files and sign-ins belong to the account-scoped computer
          - type: policy
            value: memory is not an authoritative source and can become stale
        evidence:
          - resourceId: xai-grok-bot-memory
            type: documented
            observedAt: 2026-08-28
---

Persist preferences and working context across sessions.

The sourced Grok Bot cell covers the documented memory of a named Bot. It does not imply perfect recall, a user-visible memory editor, isolation between Bots, or that remembered facts are current.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
