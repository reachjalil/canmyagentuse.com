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
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Persist notes across sessions.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents that a Grok Bot can retain stable working preferences, important facts, and work summaries over time; it warns that memory is not a substitute for an authoritative source."
  - id: 2
    text: "Evidence checked 2026-08-28: OpenAI documents ChatGPT memory on the web and desktop, plus a separate local Codex memory store controlled from Codex CLI."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude memory applies to chats on the web and Claude Desktop, while Claude Code separately documents repository-scoped, machine-local auto memory."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents project-scoped Memories that preserve generated rules across sessions and can be managed from Settings → Rules."
issues: []
resources:
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
support:
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
