---
title: Artifact export
description: Download generated files and other artifacts from an agent product.
slug: artifact-export
locale: en
seoTitle: Artifact export compatibility — Can My Agent Use
socialTitle: Artifact export
socialDescription: Compare downloading generated files and other agent artifacts.
llmSummary: Artifact export means a product lets the user download generated files or other documented outputs beyond the visible chat text.
audience: Teams moving agent output into durable systems and downstream workflows.
contentKind: feature
status: published
tags: [collaboration, portability, artifacts, export]
updated: 2026-08-29
published: 2026-08-28
category: collaboration
summary: Download generated files and other documented outputs.
specLabel: Common product term
aliases: [download artifacts, generated files, file export]
parent: collaboration-and-portability
related: [conversation-export, git-pull-requests, subagent-result-handoff]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot can return documents, spreadsheets, slide decks, folders, screenshots, logs, and other generated files as conversation cards that the operator can preview and save; the reviewed page does not establish full workspace archive or provenance export."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work can create documents, presentations, spreadsheets, and PDFs in a task; the web surface supports review and download, while the desktop app provides artifact previews and local file access. Neither reviewed page establishes a complete workspace archive with checksums and provenance."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude can create and download XLSX, PPTX, DOCX, and PDF files on its web and desktop surfaces, subject to a 30 MB file limit. The reviewed page does not establish complete run-provenance or workspace-archive export."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini Apps on the web can export responses to Google Docs or Gmail, tables to Google Sheets, and supported code to Colab or Replit; availability varies by account and destination."
  - id: 5
    text: "Evidence checked 2026-08-28: Perplexity's web session export supports PDF, Markdown, and DOCX, and its asset workflow supports downloading documents, spreadsheets, presentations, and HTML apps in documented formats."
  - id: 6
    text: "Evidence checked 2026-08-29: Codex CLI can write the final message from a non-interactive run to a file, including a JSON response constrained by a supplied JSON Schema; this is not a complete run or workspace archive."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin can download schema-constrained structured output and inline HTML, PDF, and SVG attachments from the session UI."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openai-artifacts-viewer
    title: OpenAI — Artifacts and previews in ChatGPT Work
    href: https://learn.chatgpt.com/docs/artifacts-viewer
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Create files; review and download; preview capabilities
  - id: openai-codex-cli-output-file
    title: OpenAI — Codex non-interactive mode
    href: https://learn.chatgpt.com/docs/non-interactive-mode
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Save the final output; Create structured outputs with a schema
  - id: xai-grok-bot-files
    title: xAI — Grok Bot files and results
    href: https://docs.x.ai/grok-bot/files-and-results
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Preview generated work
  - id: anthropic-create-edit-files
    title: Anthropic Help Center — Create and edit files with Claude
    href: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file types; download files
  - id: google-gemini-export-responses
    title: Google — Export responses from Gemini Apps
    href: https://support.google.com/gemini/answer/14184041?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Export responses to Google Workspace; Export code
  - id: perplexity-session-export
    title: Perplexity — What is a session?
    href: https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: More actions; Export
  - id: perplexity-assets-export
    title: Perplexity — Creating assets overview
    href: https://www.perplexity.ai/help-center/en/articles/12528830-creating-assets-with-perplexity-overview
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What file types are supported; Export and share
  - id: cognition-devin-release-notes-artifacts
    title: "Cognition — Recent Updates"
    href: https://docs.devin.ai/release-notes/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "2026-03-13 Structured Output Modal; 2026-03-27 Inline File Previews"
support:
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
            value: "structured-output and session-attachment downloads; no complete workspace or provenance archive"
        evidence:
          - resourceId: cognition-devin-release-notes-artifacts
            type: documented
            observedAt: 2026-08-29
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
            value: supported generated files can be previewed and saved from conversation cards; a complete workspace archive or repository transfer is not documented
          - type: policy
            value: citations, action logs, and source links must be requested or produced by the workflow and are not guaranteed metadata on every artifact
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
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
          - type: runtime
            value: generated documents, presentations, spreadsheets, and PDFs can be reviewed and downloaded from the web artifact viewer
          - type: policy
            value: a complete task or workspace archive with checksums, stable provenance, and re-import is not established by the reviewed page
        evidence:
          - resourceId: openai-artifacts-viewer
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the desktop app previews generated documents, presentations, spreadsheets, PDFs, and HTML, with artifacts available as local task files
          - type: policy
            value: a complete task or workspace archive with checksums, stable provenance, and re-import is not established by the reviewed page
        evidence:
          - resourceId: openai-artifacts-viewer
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Codex non-interactive documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: codex exec -o or --output-last-message writes the final response to a chosen file while still printing it to stdout
          - type: runtime
            value: --output-schema can constrain the final response to a JSON Schema before it is written to disk
          - type: policy
            value: the documented path exports the final response only, not the event stream, tool transcript, repository, or a reproducible run bundle
        evidence:
          - resourceId: openai-codex-cli-output-file
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Claude can create and download XLSX, PPTX, DOCX, and PDF files, with a 30 MB per-file limit
          - type: policy
            value: complete workspace transfer, checksums, and source or subagent provenance are not established by the reviewed page
        evidence:
          - resourceId: anthropic-create-edit-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Claude can create and download XLSX, PPTX, DOCX, and PDF files, with a 30 MB per-file limit
          - type: policy
            value: complete workspace transfer, checksums, and source or subagent provenance are not established by the reviewed page
        evidence:
          - resourceId: anthropic-create-edit-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps web export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: responses can be exported to Docs or Gmail, tables to Sheets, Python to Colab, and supported code to Replit
          - type: plan
            value: export options vary by account type, Workspace policy, destination service, response type, and Gemini app
          - type: policy
            value: exported content becomes subject to the destination service's terms and policies
        evidence:
          - resourceId: google-gemini-export-responses
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity web export documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: session answers can be exported as PDF, Markdown, or DOCX; assets can be downloaded as DOCX, PDF, XLSX, PPTX, or HTML according to asset type
          - type: policy
            value: the reviewed pages do not establish a complete project archive, checksums, or reproducible provenance bundle
        evidence:
          - resourceId: perplexity-session-export
            type: documented
            observedAt: 2026-08-28
          - resourceId: perplexity-assets-export
            type: documented
            observedAt: 2026-08-28
---

Artifact export means the product lets the user save or download a generated file or other documented output beyond the visible chat text. It does not imply conversation export, repository transfer, or a complete workspace archive; those are separate claims.

Evidence should record the export path, available formats, conversion behavior, size limits, expiry, and access controls. Metadata, citations, checksums, and re-import support are qualifiers only when the product documents them.
