---
title: Human approval
description: Pause before a tool action or file change until a person confirms.
slug: human-approval
locale: en
seoTitle: "Human approval — Can My Agent Use"
socialTitle: Human approval
socialDescription: Compare approval prompts, remembered decisions, and policy boundaries.
llmSummary: Human approval pauses an action until a person confirms or denies it. Action scope, remembered decisions, and policy behavior are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-09-02
published: 2026-08-28
category: runtime
summary: Pause before a tool action or file change until a person confirms.
specLabel: Common product term
highlight: false
notes:
  - id: 87
    text: "Evidence checked 2026-09-02: Vibe Work requires confirmation before sensitive actions that touch external systems, including sending messages, creating or deleting records, and modifying shared data; users can approve once, pre-authorize a function for the session, or decline."
  - id: 84
    text: "Evidence checked 2026-08-31: declarative WebMCP forms can preserve a manual Submit confirmation and sites can request confirmation for sensitive actions, but auto-submit and imperative tools mean the API has no universal per-call human gate."
  - id: 83
    text: "Evidence checked 2026-08-31: Devin Local applies allow, ask, or deny decisions to file, command, HTTP, and MCP operations and surfaces approval cards when a requested action needs a person."
  - id: 82
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork supports manual, automatic, and skip-all approval modes, while permanent file deletion still requires explicit confirmation."
  - id: 81
    text: "Evidence checked 2026-08-29: Gemini Spark is designed to request review and confirmation before covered external actions such as sending communications, modifying data, making purchases, submitting forms, or editing shared Workspace files, and can require browser takeover for passwords or payment details."
  - id: 80
    text: "Evidence checked 2026-08-29: Claude web Cowork surfaces approval controls, requires explicit permission before permanent file deletion, and lets users steer or redirect active work."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop Work lets users review progress, answer questions, change direction, and approve important actions, with permissions inherited from the selected experience and workspace."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT Work's cloud browser asks before accessing a new website by default and requires confirmation before supported consequential actions that create hard-to-reverse commitments."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp defaults to running tools without approval, but its permissions system can allow, reject, prompt for approval, or delegate a decision to an external policy helper."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity web connector tools support Allow, Always ask, and Disable states; Always ask requires user confirmation before every tool call."
  - id: 14
    text: "Evidence checked 2026-08-29: Aider v0.86.0 requests confirmation before suggested shell commands and before creating or editing files outside the chat's established editable set."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop surfaces permission requests and documents allow-once, always-allow, and deny responses."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot shows a proposed operation and inputs before approval; desktop controls include Allow once, Deny, and matching Always allow rules, while Require Approval rules take precedence."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code Manual mode stops before most file edits, shell commands, or network access, and its plan flow can keep edits blocked until the person approves the plan."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor requires manual approval for sensitive actions by default, including terminal commands, MCP connections and calls, and configuration-file edits; ordinary workspace-file edits are saved immediately without approval."
  - id: 5
    text: "Evidence checked 2026-08-28: Gemini CLI requires manual confirmation for file-modifying tools and shell commands and shows the proposed diff or exact command before execution."
  - id: 6
    text: "Evidence checked 2026-08-28: VS Code can show a confirmation dialog for tool calls, with approval scopes ranging from one use through future invocations and managed rules that can continue to require approval."
  - id: 7
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI prompts before destructive shell commands, file edits, or URL access unless the relevant permission has already been granted."
  - id: 8
    text: "Evidence checked 2026-08-28: Cline documents approval or auto-approval policies, including requiring approval for risky Bash and write/edit operations."
  - id: 9
    text: "Evidence checked 2026-08-28: Continue Agent mode asks the user for permission between a model tool call and tool execution unless that tool's policy is set to Automatic."
  - id: 10
    text: "Evidence checked 2026-08-28: OpenCode permission rules can resolve a tool call to ask, and an ask prompt offers once, session-scoped always, or reject outcomes."
  - id: 11
    text: "Evidence checked 2026-08-28: Zed Agent tool permissions support confirm, always-allow, and always-deny rules for terminal, edit, write, delete, fetch, MCP, and other tools."
  - id: 12
    text: "Evidence checked 2026-08-28: Warp says local Agent users can review changes and approve actions before they execute."
  - id: 13
    text: "Evidence checked 2026-08-28: Replit Plan mode waits for plan approval before Agent changes project files, but this is an opt-in plan-level gate rather than a documented per-tool approval system."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant hosts integrated agents with approve, deny, and automatic authorization flows, while exact prompts and eligible actions vary by selected agent and mode."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin sessions pause for operator approval before requested blocked-network access and optional testing actions."
  - id: 60
    text: "Evidence checked 2026-08-29: Preview Copilot Tasks requires approval or user takeover for payments, personal-data submission, communications, account changes, and other sensitive actions."
issues: []
resources:
  - id: mistral-vibe-work-safety-and-approvals
    title: "Mistral Docs — Safety and approvals"
    href: https://docs.mistral.ai/vibe/work/safety-and-approvals
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Approving sensitive actions; Per-function Connector permissions"
  - id: chrome-webmcp-declarative-approval
    title: "Google Chrome — WebMCP Declarative API"
    href: https://developer.chrome.com/docs/ai/webmcp/declarative-api
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Form submission; toolautosubmit"
  - id: chrome-webmcp-security-approval
    title: "Google Chrome — Agent security considerations for WebMCP"
    href: https://developer.chrome.com/docs/agents/security
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Sensitive actions and human confirmation guidance"
  - id: cognition-devin-local-permissions
    title: "Cognition — Devin Local"
    href: https://docs.devin.ai/desktop/devin-local
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Differences — Permissions model; Responding to permission requests"
  - id: anthropic-claude-desktop-cowork-approvals
    title: Anthropic — Use Claude Cowork safely
    href: https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Approval modes; permanent file-deletion confirmation
  - id: anthropic-claude-web-cowork-approvals
    title: "Anthropic — Get started with Claude Cowork"
    href: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Start a Cowork session; What to expect during a task; deletion protection; Choose how Claude checks with you"
  - id: openai-chatgpt-desktop-work-approvals
    title: "OpenAI — ChatGPT Work and Codex"
    href: https://help.openai.com/en/articles/20001275
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Start Work on web or mobile; Start on desktop; Work access controls"
  - id: openai-chatgpt-web-cloud-browser-approvals
    title: "OpenAI — Using cloud browser in ChatGPT"
    href: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Control which websites ChatGPT can access; Review consequential actions; Taking over the cloud browser"
  - id: amp-2026-08-approval
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Prompt Injection Defenses — Permissions"
  - id: amp-2026-08-tool-defaults
    title: "Amp — Tools"
    href: https://ampcode.com/docs/tools
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Permissions"
  - id: perplexity-microsoft-365-connector
    title: "Perplexity — Microsoft 365 connector"
    href: https://www.perplexity.ai/help-center/en/articles/12569435-microsoft-365-connector-sharepoint-and-onedrive
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managing tool permissions"
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-permissions
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-approvals
    title: xAI — Grok Bot approvals, security, and privacy
    href: https://docs.x.ai/grok-bot/approvals-security-and-privacy
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-permission-modes
    title: Anthropic — Claude Code permission modes
    href: https://code.claude.com/docs/en/permission-modes
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Available modes and review and approve a plan
  - id: cursor-agent-security
    title: Cursor — Agent security
    href: https://prod.cursor.com/docs/agent/security
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: First-party tool calls
  - id: gemini-cli-tools-approval
    title: Google — Gemini CLI tools reference
    href: https://geminicli.com/docs/reference/tools/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Automatic execution and security
  - id: vscode-agent-approvals
    title: Microsoft — Manage approvals and permissions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/approvals
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Tool approval
  - id: github-copilot-cli-tool-permissions
    title: GitHub — Allowing and denying tool use in Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-tool-approval-controls
    title: Cline — Tools and approval controls
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Approval and Policy Controls
  - id: continue-agent-tool-handshake
    title: Continue — How Agent mode works
    href: https://docs.continue.dev/features/agent/how-it-works
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How the Tool Handshake Works
  - id: opencode-permissions
    title: OpenCode — Permissions
    href: https://opencode.ai/docs/permissions/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What Ask Does
  - id: zed-tool-permissions
    title: Zed — Tool permissions
    href: https://zed.dev/docs/ai/tool-permissions
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: warp-agent-overview
    title: Warp — Getting started with Warp
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: In the Warp app
  - id: replit-agent-plan-mode
    title: Replit — Build with Agent
    href: https://docs.replit.com/learn/build-with-agent
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Plan the work
  - id: aider-approval-v0-86
    title: Aider source — approval gates at v0.86.0
    href: https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/coders/base_coder.py
    kind: docs
    publisher: Aider AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "allowed_to_edit creation and outside-chat confirmations; handle_shell_commands command confirmation"
  - id: jetbrains-ai-agents
    title: JetBrains AI Assistant — AI agents
    href: https://www.jetbrains.com/help/ai-assistant/agents.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Authorize agent actions
  - id: cognition-devin-release-notes-approvals
    title: "Cognition — Recent Updates"
    href: https://docs.devin.ai/release-notes/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "2026-07-01 Network Access Requests; 2026-06-03 Pre-Approve Testing"
  - id: microsoft-copilot-tasks
    title: "Microsoft — Using Copilot Tasks"
    href: https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "When is user approval required?"
  - id: google-gemini-web-spark-tasks
    title: "Google Gemini Apps Help — Use Gemini Spark to manage your tasks & workflows in Gemini Apps"
    href: "https://support.google.com/gemini/answer/17094507?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How Spark helps you keep you & your info safe; Supervise important & sensitive tasks; What Workspace actions can Gemini Spark perform?"
support:
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: partial
        stage: experimental
        noteIds: [84]
        target:
          kind: dated-documentation
          revision: Chrome 153 WebMCP origin-trial documentation
          observedAt: 2026-08-31
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: WebMCP is an experimental Chrome origin trial from Chrome 149; local development requires the enable-webmcp-testing flag
          - type: policy
            value: a declarative form can require manual Submit, but toolautosubmit and imperative tools prevent a universal human-approval guarantee
          - type: runtime
            value: sites are advised to request confirmation for sensitive actions
        evidence:
          - resourceId: chrome-webmcp-declarative-approval
            type: documented
            observedAt: 2026-08-31
          - resourceId: chrome-webmcp-security-approval
            type: documented
            observedAt: 2026-08-31
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [83]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: file, command, HTTP, and MCP operations can resolve to allow, ask, or deny; ask produces an approval card
        evidence:
          - resourceId: cognition-devin-local-permissions
            type: documented
            observedAt: 2026-08-31
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: dated-documentation
          revision: current official Claude Cowork safety documentation reviewed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: approval controls apply to Cowork tasks in Claude Desktop
          - type: policy
            value: manual, automatic, and skip-all modes change the approval boundary; permanent deletion always requires confirmation
        evidence:
          - resourceId: anthropic-claude-desktop-cowork-approvals
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Spark web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: experimental
            value: "Gemini Spark is described as experimental and in early development"
          - type: plan
            value: "requires Google AI Pro or Ultra"
          - type: auth
            value: "requires age 18 or over, a personal Google Account, and Keep Activity; unavailable to work or school accounts"
          - type: region
            value: "unavailable in the EEA, Nigeria, Switzerland, and the UK"
          - type: policy
            value: "approval behavior is action-class dependent; Google explicitly says Spark can perform bulk actions on private Google Tasks without confirmation"
          - type: runtime
            value: "take-control mode is used for sensitive input such as passwords or payment details"
        evidence:
          - resourceId: google-gemini-web-spark-tasks
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: claude-web
    versions:
      - track: current
        status: yes
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
            value: "requires a paid Cowork plan"
          - type: policy
            value: "explicit Allow is mandatory before permanent file deletion; users review the approach and select how Claude checks in"
          - type: runtime
            value: "the user can course-correct an active Cowork task"
        evidence:
          - resourceId: anthropic-claude-web-cowork-approvals
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
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: "Desktop Work requires an eligible account and workspace role"
          - type: policy
            value: "the operator can review progress, provide answers, redirect work, and approve important actions; local file and app access requires explicit permission"
          - type: runtime
            value: "approval scope follows the tools, local access, network controls, and permissions available to Desktop Work"
        evidence:
          - resourceId: openai-chatgpt-desktop-work-approvals
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
          - type: policy
            value: "website-access policy supports Always ask, Auto approve, Always allow, and per-site overrides; consequential financial, legal, account, or other commitments require a separate confirmation"
          - type: runtime
            value: "ChatGPT Work cloud browser on eligible paid plans; the user can take over the remote browser when needed"
        evidence:
          - resourceId: openai-chatgpt-web-cloud-browser-approvals
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
          - type: policy
            value: "default tools do not ask; approval requires permissions or a policy plugin"
          - type: runtime
            value: "workspace MCP servers independently require first-use approval"
        evidence:
          - resourceId: amp-2026-08-approval
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-tool-defaults
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
            value: "confirmation is configurable by connector tool or tool group"
          - type: policy
            value: "Enterprise administrators can set organization defaults and lock individual tool settings"
        evidence:
          - resourceId: perplexity-microsoft-365-connector
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: preview
        status: yes
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Microsoft Copilot Tasks preview documentation observation"
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: policy
            value: "explicit approval or handoff is documented for monetary, personal-data, communication, account-altering, and sensitive actions"
        evidence:
          - resourceId: microsoft-copilot-tasks
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
          - type: policy
            value: "documented gates cover network destinations and testing, not every file edit"
        evidence:
          - resourceId: cognition-devin-release-notes-approvals
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: approve, deny, and automatic authorization are host flows whose exact scope varies by integrated agent and mode
        evidence:
          - resourceId: jetbrains-ai-agents
            type: documented
            observedAt: 2026-08-29
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [14]
        target:
          kind: release
          revision: Aider v0.86.0 commit a4be6ccd87ebaa59b361f3f028d116ce1761b626
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "ordinary edits to files already added to the chat are not individually gated; confirmation covers suggested shell commands, new files, and files outside the editable set"
        evidence:
          - resourceId: aider-approval-v0-86
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: prompts depend on permission mode and rules; acceptEdits, auto, dontAsk, and bypassPermissions reduce or remove routine prompts
        evidence:
          - resourceId: anthropic-claude-code-permission-modes
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: ordinary workspace-file edits do not prompt; terminal, MCP, configuration-file, and sensitive actions do unless pre-approved or another run mode applies
        evidence:
          - resourceId: cursor-agent-security
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
          - type: policy
            value: security policy and sandbox configuration still determine the effective execution boundary
        evidence:
          - resourceId: gemini-cli-tools-approval
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current VS Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: permission level, tool settings, saved approvals, and organization-managed rules determine which calls prompt
        evidence:
          - resourceId: vscode-agent-approvals
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
          - type: policy
            value: command-line and saved permissions can pre-authorize calls; deny rules take precedence
        evidence:
          - resourceId: github-copilot-cli-tool-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Cline documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: settings and policy can require approval, auto-approve, or disable specific tools
        evidence:
          - resourceId: cline-tool-approval-controls
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Continue documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: a tool whose policy is Automatic skips the human permission step
        evidence:
          - resourceId: continue-agent-tool-handshake
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current OpenCode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: approval requires an ask rule; tools are enabled without prompts by default
        evidence:
          - resourceId: opencode-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Zed documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: per-tool defaults and matching allow, deny, and confirm patterns determine prompts
        evidence:
          - resourceId: zed-tool-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Warp documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: warp-agent-overview
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [13]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Agent documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the documented gate applies when Plan mode is selected and approves the plan before file changes, not each tool call
        evidence:
          - resourceId: replit-agent-plan-mode
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: effective prompts depend on workspace and server approval configuration
        evidence:
          - resourceId: openwork-permissions
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
          - type: policy
            value: Auto Review is model-based and complements rather than replaces explicit approval boundaries and least privilege
          - type: runtime
            value: local-computer execution defaults to asking every time and is configured separately from cloud-computer actions
        evidence:
          - resourceId: xai-grok-bot-approvals
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [87]
        target:
          kind: hosted-observation
          revision: 2026-09-02 Vibe Work safety and approvals documentation observation
          observedAt: 2026-09-02
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "Work stops before actions that touch external systems (sending email, modifying data, deleting) and presents Continue, Always allow, or Decline options"
          - type: policy
            value: "each Connector's Functions tab allows toggling Always allow versus manual approval on individual interactive tools"
        evidence:
          - resourceId: mistral-vibe-work-safety-and-approvals
            type: documented
            observedAt: 2026-09-02
---

Pause before a tool action or file change until a person confirms.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
