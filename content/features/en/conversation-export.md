---
title: Conversation export
description: Export conversation history through a documented product feature.
slug: conversation-export
locale: en
seoTitle: Conversation export compatibility — Can My Agent Use
socialTitle: Conversation export
socialDescription: Compare documented conversation export formats and scope.
llmSummary: Conversation export means a product provides a documented way to export chat or conversation history; exported fields and formats are recorded as qualifiers.
audience: Teams preserving, auditing, migrating, or analyzing agent work.
contentKind: feature
status: published
tags: [collaboration, portability, export, provenance]
updated: 2026-08-29
published: 2026-08-28
category: collaboration
summary: Export conversation history in a documented format.
specLabel: Common product term
aliases: [chat export, run export, conversation backup, data portability]
parent: collaboration-and-portability
related: [artifact-export, audit-logs, data-retention-controls]
notes:
  - id: 7
    text: "Evidence checked 2026-08-29: Amp CLI documents per-thread Markdown and full-JSON export commands for conversations containing prompts, replies, tool calls, and changed-file history."
  - id: 1
    text: "Evidence checked 2026-08-28: Individual Claude Free, Pro, and Max users can request an account export containing conversation and user data from either Claude web or Desktop. Team and Enterprise exports require the Primary Owner, the email link expires after 24 hours, and exported data cannot be re-imported into another personal account."
  - id: 2
    text: "Evidence checked 2026-08-28: Google Takeout can export Gemini chats, generated media, uploads, and Gems, with one-time or recurring archives, multiple delivery destinations, and ZIP or TGZ output. The reviewed page does not establish a replayable run schema containing model, tool, approval, and subagent provenance."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents a Markdown export action for locally stored Agent chat history. Background Agent chats use a separate remote history and are not established as part of the same export."
  - id: 5
    text: "Evidence checked 2026-08-28: Perplexity sessions expose an Export action for a session answer in PDF, Markdown, or DOCX. The reviewed page does not establish a bulk account export or guarantee that every turn and attachment in the session is included, so this is partial conversation-export support."
  - id: 6
    text: "Evidence checked 2026-08-28: Mistral documents a dedicated Vibe export tool that downloads all personal Vibe data stored on its servers at request time. The page does not enumerate whether every conversation, attachment, model field, tool event, or other run-provenance field is included, and it does not state the archive format."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains publishes an official read-only workaround script that extracts saved AI Assistant workspace chat XML to Markdown, rather than a built-in or restorable general export surface."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 documents per-session JSON export, optional sensitive-data sanitization, and import from exported JSON or a share URL."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp can copy a complete AI conversation to the clipboard, but current docs specify no durable file format, structured schema, or restore path."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-export-data
    title: Anthropic Help Center — Export your Claude data
    href: https://support.claude.com/en/articles/9450526-export-your-claude-data
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Export availability; download link; import limitations
  - id: google-gemini-export
    title: Google Gemini Apps Help — Download your Gemini Apps data
    href: https://support.google.com/gemini/answer/16920332?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Select data; archive format; delivery
  - id: cursor-chat-history-export
    title: Cursor Docs — Chat history
    href: https://docs.cursor.com/en/agent/chat/history
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Managing chats; Background Agents
  - id: perplexity-session-export
    title: Perplexity Help Center — What is a Session?
    href: https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sharing your Sessions and more actions; Export
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat rename; chat.mistral.ai entry point
  - id: mistral-vibe-data-export
    title: Mistral Help Center — How do I export my data from Vibe?
    href: https://help.mistral.ai/en/articles/347623-how-do-i-export-my-data-from-vibe
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Dedicated export tool; stored data scope
  - id: amp-thread-export
    title: Amp — Threads
    href: https://ampcode.com/docs/threads
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Thread definition; Continue a Thread Anywhere; Export a Thread"
  - id: jetbrains-ai-chat-export
    title: JetBrains — Export AI Assistant chat history to Markdown
    href: https://youtrack.jetbrains.com/projects/JUNIE/articles/SUPPORT-A-4167/Export-AI-Assistant-chat-history-to-Markdown
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Official workspace_chat_parser.py workaround and generated chat_history.md
  - id: opencode-v1-18-25-cli-export
    title: "OpenCode v1.18.25 — CLI"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/cli.mdx#L466-L496
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "export; import"
  - id: warp-block-actions
    title: "Warp — Block Actions"
    href: https://docs.warp.dev/terminal/blocks/block-actions
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Copy Input / Output of Block"
support:
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
          - type: format
            value: "clipboard copy of prompt, output, both, or complete conversation; no Markdown, JSON, archive, or replay schema"
        evidence:
          - resourceId: warp-block-actions
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
          - type: format
            value: "per-session JSON; optional --sanitize redaction; matching JSON and share-URL import"
        evidence:
          - resourceId: opencode-v1-18-25-cli-export
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains support article observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: official workaround exports saved workspace chat XML to Markdown with messages and text attachments; it is not a built-in bulk or restorable export
        evidence:
          - resourceId: jetbrains-ai-chat-export
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Amp Threads documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "amp threads markdown exports Markdown and amp threads export provides the full JSON form"
          - type: runtime
            value: "export is per thread identifier rather than a documented bulk account archive"
          - type: policy
            value: "full JSON export is available to the thread creator; Markdown is also exposed through the thread's .md URL"
          - type: runtime
            value: "the documentation names prompts, replies, tool calls, and changed files but does not provide a field-by-field JSON schema"
        evidence:
          - resourceId: amp-thread-export
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude data export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Free, Pro, and Max users can export their own conversation and account data; Team and Enterprise organization exports are restricted to the Primary Owner
          - type: runtime
            value: export is requested in Settings and delivered by an authenticated email link that expires after 24 hours
          - type: policy
            value: exported data cannot be re-imported into another personal Claude account
        evidence:
          - resourceId: anthropic-export-data
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Desktop data export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Free, Pro, and Max users can initiate their own conversation and account-data export from Claude Desktop; Team and Enterprise exports require the Primary Owner
          - type: runtime
            value: the export arrives through an authenticated email link that expires after 24 hours and cannot be imported into another personal account
        evidence:
          - resourceId: anthropic-export-data
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Google Takeout can export Gemini chats, generated media, uploads, and Gems as a one-time or recurring ZIP or TGZ archive
          - type: transport
            value: delivery options include an email download link, Google Drive, Dropbox, OneDrive, or Box; exports may take hours or days and can be split by archive size
          - type: policy
            value: exporting does not delete source data
        evidence:
          - resourceId: google-gemini-export
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor chat-history documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local Agent chats can be exported as Markdown
          - type: runtime
            value: chat history is stored in a local SQLite database; Background Agent chats are stored separately in a remote database and are not documented as part of this export
        evidence:
          - resourceId: cursor-chat-history-export
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity session-export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the session interface can export an answer as PDF, Markdown, or DOCX
          - type: runtime
            value: the reviewed documentation does not establish a bulk account export or guarantee that the export contains every session turn, attachment, source field, and execution detail
        evidence:
          - resourceId: perplexity-session-export
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: partial
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe data-export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: a dedicated export tool downloads all personal Vibe data stored on Mistral servers at the time of the request
          - type: format
            value: the reviewed page does not state the download format or enumerate conversation, attachment, model, tool, approval, or provenance fields
          - type: runtime
            value: Le Chat is now Vibe and chat.mistral.ai remains the web entry point
        evidence:
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-data-export
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the product documents a conversation-export feature. A manual copy-and-paste action does not count as product-supported export.

Evidence should record the export format, included fields, single or bulk scope, availability delay, attachment handling, and whether the export can be imported elsewhere. Those details qualify support; they are not additional requirements hidden inside the term.
