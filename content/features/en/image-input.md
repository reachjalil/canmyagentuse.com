---
title: Image input
description: Attach, paste, or select an image for use as model input.
slug: image-input
locale: en
seoTitle: "Image input compatibility — Can My Agent Use"
socialTitle: Image input
socialDescription: Compare image attachment, paste, upload, and file-limit support.
llmSummary: Image input means a product accepts attached, pasted, or selected images as model input. Supported methods, formats, limits, and surfaces are recorded as qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
  - image
  - uploads
updated: 2026-08-29
published: 2026-08-28
category: perception
summary: Attach, paste, or select an image for use as model input.
specLabel: Common product term
aliases: [image input, image attachment, image upload, paste image, vision input]
parent: file-inputs
related: [screenshots, video-input, upload-limits]
highlight: true
notes:
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 accepts image input in the Agent Panel by project-file @-mention, filesystem drag-and-drop, or clipboard paste for supported vision models."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent accepts screenshots, sketches, images, and Canvas annotations as model context, including screenshot-driven layout direction."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 accepts image files through the VS Code attachment picker or drag-and-drop and indicates whether the selected model supports image input."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI streaming input accepts base64 JPEG, PNG, GIF, and WebP image blocks, and interactive prompting can mention image files."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 supports image uploads in the shared editor conversation input used by Agent mode, subject to detected or configured image_input support and provider pass-through."
  - id: 13
    text: "Evidence checked 2026-08-29: Aider accepts image files through /add, clipboard /paste, or image filenames on the command line for use with vision-capable selected models."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents image uploads and image understanding in Grok Web chats."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot messages accept pasted images and local file attachments; its files guide lists images as supported input and documents desktop attachment limits."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenAI documents image attachment, paste, or drag-and-drop in ChatGPT Work on the web; Shift-drag image input in the ChatGPT desktop app; and pasted images or repeated -i/--image paths in Codex CLI."
  - id: 4
    text: "Evidence checked 2026-08-28: Anthropic documents JPEG, PNG, GIF, and WebP uploads in Claude on the web and Claude Desktop, including drag-and-drop and clipboard paste."
  - id: 5
    text: "Evidence checked 2026-08-28: Google documents photo and image uploads among Gemini Apps file inputs on the web, subject to the shared per-prompt and per-file upload limits."
  - id: 6
    text: "Evidence checked 2026-08-28: Cursor Agent can read PNG, JPEG, GIF, WebP, and SVG files and place them in conversation context for a vision-capable model."
  - id: 7
    text: "Evidence checked 2026-08-28: Perplexity web accepts JPEG, HEF, and PNG images up to 40 MB and uses multimodal models to identify images and interpret graphics and captions."
  - id: 8
    text: "Evidence checked 2026-08-28: Microsoft Copilot web accepts PNG, JPEG, PJP, and JFIF uploads and documents prompts that ask Copilot to describe and analyze the attached image."
  - id: 9
    text: "Evidence checked 2026-08-28: Mistral's current Vibe Work documentation, which supersedes Le Chat at chat.mistral.ai, accepts PNG, JPEG, WebP, and GIF uploads and interprets photos, diagrams, screenshots, and scanned pages."
  - id: 10
    text: "Evidence checked 2026-08-28: VS Code Copilot Chat accepts image context for vision-capable models. Current GitHub documentation lists JPEG, PNG, GIF, WebP, HEIC, and HEIF and says image attachments are available on all Copilot plans."
  - id: 11
    text: "Evidence checked 2026-08-28: Claude Code accepts image drag-and-drop, clipboard paste, and image paths and documents analysis of screenshots, diagrams, mockups, and multiple images."
  - id: 12
    text: "Evidence checked 2026-08-28: Gemini CLI custom commands encode supported image paths, including PNG and JPEG examples, and inject them as multimodal input through @{...}."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 accepts images in AI Chat through attachment selection, paste, drag-and-drop, or IDE references, subject to model compatibility and a 20 MB image limit."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 accepts images dragged into the terminal and adds their visual content to the model prompt as reference material."
  - id: 52
    text: "Evidence checked 2026-08-29: Local Warp Agent conversations accept images through upload, paste, or drag-and-drop and send them as visual context."
issues: []
resources:
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L143-L149"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Images as Context, lines 143–149"
  - id: replit-build-with-agent-current
    title: "Replit — Build with Agent"
    href: "https://docs.replit.com/learn/build-with-agent"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Add context"
  - id: replit-upload-use-files-current
    title: "Replit — Upload and use files"
    href: "https://docs.replit.com/chat/upload-and-use-files"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How to upload a file; Use files to"
  - id: cline-v4-1-16-image-input
    title: "Cline v4.1.16 — Working with Files"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/core-workflows/working-with-files.mdx#L42-L58"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding files; image model-support notice"
  - id: amp-2026-08-image-input
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Streaming JSON Input image schema"
  - id: amp-2026-08-image-prompts
    title: "Amp — Prompting"
    href: https://ampcode.com/docs/prompting
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Image pasting and file mentions"
  - id: continue-v2-image-capabilities
    title: "Continue v2.0.0 — image-input capability documentation"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/customize/deep-dives/model-capabilities.mdx#L12-L21
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Image-upload enablement"
  - id: continue-v2-image-faq
    title: "Continue v2.0.0 — image-upload troubleshooting"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/faqs.mdx#L110-L141
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "image_input, vision model, and provider requirements"
  - id: continue-v2-agent-shared-input
    title: "Continue v2.0.0 — Agent shared input"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/ide-extensions/agent/quick-start.mdx#L54-L56
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How to Chat with Agent mode"
  - id: xai-grok-files-faq
    title: xAI — Grok files and data FAQ
    href: https://docs.x.ai/grok/faq
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Files & Data
  - id: xai-grok-bot-files
    title: xAI — Grok Bot files and results
    href: https://docs.x.ai/grok-bot/files-and-results
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Attach files
  - id: openai-image-inputs
    title: OpenAI — Image inputs
    href: https://learn.chatgpt.com/docs/image-inputs
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-upload-files
    title: Anthropic — Upload files to Claude
    href: https://support.claude.com/en/articles/8241126-upload-files-to-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-upload-files
    title: Google — Upload and analyze files in Gemini Apps
    href: https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-agent-overview
    title: Cursor — Agent overview
    href: https://cursor.com/docs/agent/overview
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: perplexity-image-uploads
    title: Perplexity Help Center — Uploading images
    href: https://www.perplexity.ai/help-center/en/articles/10354840-uploading-images-on-perplexity
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Uploading images; formats and maximum size
  - id: microsoft-copilot-file-upload
    title: Microsoft Support — File upload in Microsoft Copilot
    href: https://support.microsoft.com/en-US/microsoft-copilot/file-upload-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file formats; how to use file upload
  - id: mistral-vibe-files
    title: Mistral Docs — Work with Files and Canvas
    href: https://docs.mistral.ai/vibe/work/files-and-canvas
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported formats; analyzing images
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat is now Vibe; product entry point
  - id: github-copilot-images
    title: GitHub Docs — Asking GitHub Copilot questions in your IDE
    href: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/chat-with-copilot/chat-in-ide?tool=vscode
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Using images in Copilot Chat
  - id: anthropic-claude-code-images
    title: Claude Code Docs — Common workflows
    href: https://code.claude.com/docs/en/common-workflows
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Work with images
  - id: gemini-cli-custom-commands
    title: Gemini CLI — Custom commands
    href: https://geminicli.com/docs/cli/custom-commands/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Injecting file content with @{...}; multimodal support
  - id: aider-image-input
    title: Aider — Images and web pages
    href: https://aider.chat/docs/usage/images-urls.html
    kind: docs
    publisher: Aider AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Images"
  - id: jetbrains-ai-chat-mode
    title: JetBrains AI Assistant — Configure chat mode
    href: https://www.jetbrains.com/help/ai-assistant/chat-mode.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Attach files and images to a prompt
  - id: opencode-v1-18-25-image-input
    title: "OpenCode v1.18.25 — Intro"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/index.mdx#L249-L266
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Usage — Add features; drag-and-drop image tip"
  - id: warp-images-context
    title: "Warp — Images as Context"
    href: https://docs.warp.dev/agents/local-agents/agent-context/images-as-context/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Attaching images as context; model behavior"
support:
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
            value: "requires a selected model and provider that support image input"
          - type: format
            value: "attachment methods and representative model families are documented, but not a complete format or size table"
        evidence:
          - resourceId: zed-v1-17-2-agent-panel
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "documented image context includes screenshots, sketches, ordinary image files, and Canvas annotations; numeric limits are not published"
        evidence:
          - resourceId: replit-build-with-agent-current
            type: documented
            observedAt: 2026-08-29
          - resourceId: replit-upload-use-files-current
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires a multimodal model"
          - type: format
            value: "browse or drag image files; format and size limits are not enumerated"
        evidence:
          - resourceId: cline-v4-1-16-image-input
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
            value: "JPEG, PNG, GIF, and WebP; declared media type must match decoded bytes"
          - type: runtime
            value: "--stream-json-input requires --stream-json"
        evidence:
          - resourceId: amp-2026-08-image-input
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-image-prompts
            type: documented
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires a selected model that accepts images and a provider that passes image data"
          - type: format
            value: "the stable documentation does not enumerate a complete format or size table"
        evidence:
          - resourceId: continue-v2-image-capabilities
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-image-faq
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-agent-shared-input
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
          - type: format
            value: "jpg, jpeg, png, gif, and webp"
          - type: runtime
            value: "up to 5 images per request and 20 per conversation; Warp may resize images"
        evidence:
          - resourceId: warp-images-context
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
            value: "terminal drag-and-drop"
          - type: runtime
            value: "useful interpretation depends on a selected model that accepts images"
        evidence:
          - resourceId: opencode-v1-18-25-image-input
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: selected model must support image input
          - type: format
            value: attach, paste, drag-and-drop, or reference an image; maximum documented image size is 20 MB
        evidence:
          - resourceId: jetbrains-ai-chat-mode
            type: documented
            observedAt: 2026-08-29
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [13]
        target:
          kind: dated-documentation
          revision: current Aider image-input documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the selected model must be vision-capable"
          - type: format
            value: "documented input paths are in-chat /add, clipboard /paste, and command-line filenames"
        evidence:
          - resourceId: aider-image-input
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
            value: images can be attached, pasted, or dragged into the web composer
        evidence:
          - resourceId: openai-image-inputs
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
            value: Shift-drag supplies an image for inspection in the desktop app
        evidence:
          - resourceId: openai-image-inputs
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
            value: accepts pasted images and one or more paths through -i/--image; OpenAI names common formats including PNG and JPEG
        evidence:
          - resourceId: openai-image-inputs
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: supports JPEG, PNG, GIF, and WebP through file selection, drag-and-drop, or clipboard paste
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supports JPEG, PNG, GIF, and WebP through the shared Claude chat attachment workflow
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: photos and images share Gemini Apps' documented file-count and size limits
        evidence:
          - resourceId: google-gemini-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cursor Agent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: PNG, JPEG, GIF, WebP, and SVG files enter conversation context when the selected model is vision-capable
        evidence:
          - resourceId: cursor-agent-overview
            type: documented
            observedAt: 2026-08-28
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: file support and limits can vary by platform; this cell is scoped to the web surface
        evidence:
          - resourceId: xai-grok-files-faq
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: desktop composer accepts up to six attachments per message and documents a 25 MB limit per image
          - type: policy
            value: damaged or unusually formatted files may not be readable
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: JPEG, HEF, and PNG can be attached or dragged into desktop web and are interpreted by multimodal models, including graphics and captions
          - type: runtime
            value: maximum image size is 40 MB; animation, metadata, and exact resolution handling are not established
        evidence:
          - resourceId: perplexity-image-uploads
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Microsoft Copilot web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: supported image uploads are PNG, JPEG, PJP, and JFIF; the file-upload workflow documents asking Copilot to describe or analyze the image
          - type: runtime
            value: each file is limited to 50 MB and up to 20 files can be added to one conversation
        evidence:
          - resourceId: microsoft-copilot-file-upload
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Mistral Vibe web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: PNG, JPEG, WebP, and GIF uploads can be interpreted as photos, diagrams, screenshots, or scanned pages
          - type: policy
            value: Le Chat is now Vibe at the same chat.mistral.ai entry point; this claim is scoped to the documented Work upload path
        evidence:
          - resourceId: mistral-vibe-files
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot Chat documentation for VS Code
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: JPEG, PNG, GIF, WebP, HEIC, and HEIF images can be pasted, dragged, or added from the VS Code Explorer when the selected model supports image input
          - type: plan
            value: image attachments are documented as available on all Copilot plans and enabled by default
        evidence:
          - resourceId: github-copilot-images
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Claude Code workflow documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: images can be dragged into the Claude Code window, pasted with the documented terminal shortcut, or referenced by path and are analyzed as visual context
          - type: runtime
            value: multiple images, diagrams, screenshots, and mockups are documented; accepted formats and complete model-specific limits are not listed on the workflow page
        evidence:
          - resourceId: anthropic-claude-code-images
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Gemini CLI custom-command documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supported image files, with PNG and JPEG given as examples, are encoded and injected as multimodal input when referenced with @{...} in a custom command
          - type: runtime
            value: this evidence establishes custom-command file injection, not every ordinary-prompt attachment or clipboard path
        evidence:
          - resourceId: gemini-cli-custom-commands
            type: documented
            observedAt: 2026-08-28
---

This row asks whether an image selected, dragged, or pasted into the exact harness is interpreted as visual model context. Merely uploading the file to storage, extracting only its filename, or making it available to an unrelated tool does not establish image input.

Evidence should record accepted formats, per-file and per-message limits, animation handling, resolution or detail controls, whether metadata is stripped, and whether availability changes by model, plan, or client. Screenshot capture is a separate capability because it concerns acquiring the current interface rather than supplying an existing image.

Image input does not by itself establish screenshot capture, computer use, image generation, or reliable interpretation of every image format.
