---
title: Web fetch
description: Retrieve live web pages or APIs during a run.
slug: web-fetch
locale: en
seoTitle: "Web fetch — Can My Agent Use"
socialTitle: Web fetch
socialDescription: Compare live web-page and API retrieval during a run.
llmSummary: Web fetch retrieves current web pages or API responses during a run. Authentication, network policy, rendering, and source attribution are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-31
published: 2026-08-28
category: tools
summary: Retrieve live web pages or APIs during a run.
specLabel: Common product term
highlight: false
notes:
  - id: 906
    text: "Evidence checked 2026-09-01: the consumer Grok web product can perform real-time web searches to return current information; the reviewed FAQ does not establish arbitrary authenticated URL access, raw response retention, or a user-configurable fetch policy."
  - id: 905
    text: "Evidence checked 2026-08-31: a Chrome WebMCP page can register a site-defined tool whose JavaScript calls fetch and honors cancellation, but that example does not give the browser agent a general cross-site fetch primitive."
  - id: 904
    text: "Evidence checked 2026-08-31: Devin Desktop can read a specifically supplied URL locally, and Devin Local supplies its own web-fetch tools; some pages remain unparseable and open-search policy is separate."
  - id: 903
    text: "Evidence checked 2026-08-29: Gemini Spark retrieves information from live websites it interacts with through its remote browser, while Deep Research performs real-time multi-source research with Google Search included by default."
  - id: 902
    text: "Evidence checked 2026-08-29: the updated Microsoft Copilot web app for individuals can search the public web for current information, ground a response in top web results, include linked citations, and let a signed-in personal-account user turn web search off. The reviewed current-app privacy page is scoped to signed-in Microsoft accounts, so anonymous behavior is not asserted."
  - id: 901
    text: "Evidence checked 2026-08-29: Claude Desktop retrieves and analyzes supplied webpages through Web search and web fetch, returning linked citations."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 documents /web URL ingestion, which scrapes a current webpage, converts its text to Markdown, and adds it to the active chat."
  - id: 80
    text: "Evidence checked 2026-08-29: Claude web can retrieve and analyze a user-supplied webpage when Web search is enabled and returns source links and citations."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Search is available in the desktop app and can automatically or explicitly retrieve current web information with links to sources."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT web can automatically or explicitly search the live web and return current answers with links to relevant sources."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 lists a native fetch tool that retrieves a URL and returns Markdown, and the Agent Panel can also add URLs as explicit context."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 can fetch a supplied web URL, issue HTTP requests, and convert returned HTML into Markdown for the agent."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp documents built-in web search and web page retrieval, including read_web_page and web_search in the CLI tool inventory."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 Agent mode includes built-in fetch_url_content and search_web tools, with the fetch tool retrieving a user-specified live URL."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer performs wide research and parallel web searches, retrieves real-time information, and synthesizes cited web information during a task."
  - id: 8
    text: "Evidence checked 2026-08-29: Replit Agent's built-in Web Search fetches specified websites or URLs and reads entire live web pages, documentation, and authoritative data points with citations."
  - id: 7
    text: "Evidence checked 2026-08-29: a public URL attached to a Warp agent prompt is scraped and its extracted page text is surfaced to the model; only the specified page is processed."
  - id: 6
    text: "Evidence checked 2026-08-29: Devin Agent mode browses the web during hosted sessions, and Cognition documents its browser navigating live documentation and downloading or uploading information."
  - id: 5
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0 documents a Fetch extension that retrieves and processes live web or API content from specified URLs after separate installation and configuration."
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; support for web search alone does not prove URL-fetch support.
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents Claude Code's built-in `WebFetch` tool as fetching content from a specified URL."
  - id: 3
    text: "Evidence checked 2026-08-28: Google documents Gemini CLI's `web_fetch` tool as retrieving and processing content from specific URLs, with URL approval and plan-mode confirmation controls."
  - id: 4
    text: "Evidence checked 2026-08-28: Microsoft documents VS Code's built-in `#web/fetch` agent tool as fetching content from a given web page, subject to URL request and response approvals."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 includes a built-in webfetch tool for retrieving content from a specified URL, separately from web search."
issues: []
resources:
  - id: spacexai-grok-consumer-faq-web-search
    title: "SpaceXAI — Consumer FAQs"
    href: https://x.ai/legal/faq
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "How does Grok work? — real-time web searches"
  - id: chrome-webmcp-imperative-fetch
    title: "Google Chrome — WebMCP Imperative API"
    href: https://developer.chrome.com/docs/ai/webmcp/imperative-api
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Handle tool cancellation — fetch_tool"
  - id: cognition-devin-desktop-web-search
    title: "Cognition — Web search"
    href: https://docs.devin.ai/desktop/cascade/web-search
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Read a specific URL; Devin Local web tools"
  - id: aider-v0860-images-urls
    title: "Aider v0.86.0 — Images and web pages"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/images-urls.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Web pages"
  - id: aider-v0860-commands-web
    title: "Aider v0.86.0 — In-chat commands"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/commands.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "/web"
  - id: anthropic-claude-web-fetch
    title: "Anthropic — Enable and use web search"
    href: https://support.claude.com/en/articles/10684626-enable-and-use-web-search
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Enable web search in a chat; How web search works; Web fetch and direct links"
  - id: openai-chatgpt-desktop-search
    title: "OpenAI — ChatGPT Search"
    href: https://help.openai.com/en/articles/9237897-chatgpt-search
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "availability on desktop apps; How to search in ChatGPT; source links"
  - id: openai-chatgpt-web-search
    title: "OpenAI — ChatGPT Search"
    href: https://help.openai.com/en/articles/9237897-chatgpt-search
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "availability; How to search in ChatGPT; source links"
  - id: zed-v1-17-2-tools
    title: "Zed v1.17.2 — Agent Tools"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/tools.md#L20-L36"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "fetch, lines 30–36"
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L129-L137"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding Context, lines 129–137"
  - id: cline-v4-1-16-web-fetch
    title: "Cline v4.1.16 — All Cline Tools"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/tools-reference/all-cline-tools.mdx#L7-L21"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Built-in tools table, fetch_web"
  - id: amp-2026-08-web-fetch
    title: "Amp — Tools"
    href: https://ampcode.com/docs/tools
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Web search and web page retrieval"
  - id: amp-2026-08-web-tool-inventory
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Init tool inventory"
  - id: continue-v2-agent-tools
    title: "Continue v2.0.0 — Agent built-in tools"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/ide-extensions/agent/how-it-works.mdx#L19-L43
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Agent built-in fetch and search tools"
  - id: continue-v2-fetch-definition
    title: "Continue v2.0.0 — URL-fetch tool definition"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/tools/definitions/fetchUrlContent.ts
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tool description and required URL, lines 9–29"
  - id: perplexity-computer
    title: "Perplexity — What is Computer?"
    href: https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How does Computer work? — Wide Research and Parallel Web Search"
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-tools-reference
    title: Anthropic — Claude Code tools reference
    href: https://code.claude.com/docs/en/tools-reference
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: WebFetch
  - id: google-gemini-cli-web-fetch
    title: Google — Gemini CLI web fetch tool
    href: https://geminicli.com/docs/tools/web-fetch/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Technical reference and technical behavior
  - id: microsoft-vscode-agent-web-fetch
    title: Microsoft — VS Code AI features cheat sheet
    href: https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Agent tools — #web/fetch
  - id: microsoft-vscode-agent-url-approvals
    title: Microsoft — Manage approvals and permissions
    href: https://code.visualstudio.com/docs/agents/run/approvals
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: URL approval
  - id: goose-fetch-v1-48
    title: Goose — Fetch Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/fetch-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI setup and live JSON API retrieval example"
  - id: devin-browser-web-retrieval
    title: Cognition — Introducing Devin
    href: https://docs.devin.ai/get-started/devin-intro
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "General Product Features — Browser"
  - id: warp-url-context
    title: Warp — URLs as Context
    href: https://docs.warp.dev/agents/local-agents/agent-context/urls-as-context/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Referencing websites via URLs"
  - id: replit-agent-web-fetch
    title: Replit — Web Search
    href: https://docs.replit.com/features/agent/web-search
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Features; Usage; Content fetching"
  - id: opencode-v1-18-25-tools-webfetch
    title: "OpenCode v1.18.25 — Tools"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/tools.mdx#L238-L286
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Built-in — webfetch; websearch comparison"
  - id: anthropic-claude-desktop-cycle6-web-fetch
    title: "Enable and use web search"
    href: "https://support.claude.com/en/articles/10684626-enable-and-use-web-search"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Web fetch and direct links"
  - id: microsoft-copilot-individual-privacy-controls-2026-08
    title: "Microsoft Copilot for individuals: your privacy controls and choices"
    href: "https://support.microsoft.com/en-us/privacy/microsoft-copilot/privacy-controls"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Important; Personalization and memory; Chat history; Web search"
  - id: microsoft-copilot-individual-transparency-2026-08
    title: "Transparency Note for Microsoft Copilot (for individuals)"
    href: "https://support.microsoft.com/en-us/privacy/microsoft-copilot/transparency-note"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "System behavior; Use cases; Limitations — Dependence on Internet connectivity"
  - id: google-gemini-web-spark-tasks
    title: "Google Gemini Apps Help — Use Gemini Spark to manage your tasks & workflows in Gemini Apps"
    href: "https://support.google.com/gemini/answer/17094507?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Monitor & take over a task; What Gemini Spark can use to work on your tasks; Remote browser & computer"
  - id: google-gemini-web-deep-research
    title: "Google Gemini Apps Help — Use Deep Research in Gemini Apps"
    href: "https://support.google.com/gemini/answer/15719111?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Start a Deep Research report"
support:
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [906]
        target:
          kind: dated-documentation
          revision: current Grok.com consumer FAQ
          observedAt: 2026-09-01
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Grok performs real-time public-web searches for current information; the FAQ does not establish arbitrary authenticated URL retrieval or raw-response controls
        evidence:
          - resourceId: spacexai-grok-consumer-faq-web-search
            type: documented
            observedAt: 2026-09-01
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: partial
        stage: experimental
        noteIds: [905]
        target:
          kind: dated-documentation
          revision: Chrome 153 WebMCP origin-trial documentation
          observedAt: 2026-08-31
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: WebMCP is an experimental Chrome origin trial from Chrome 149; local development requires the enable-webmcp-testing flag
          - type: vendor-extension
            value: fetching is implemented by a site-defined WebMCP tool, not a universal browser-agent fetch capability
          - type: runtime
            value: the tool executes in the open page's context and can pass cancellation to fetch
        evidence:
          - resourceId: chrome-webmcp-imperative-fetch
            type: documented
            observedAt: 2026-08-31
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [904]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: a supplied URL can be read locally; some pages cannot be parsed
          - type: policy
            value: direct URL retrieval is distinct from administrator-controlled open web search
        evidence:
          - resourceId: cognition-devin-desktop-web-search
            type: documented
            observedAt: 2026-08-31
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [903]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini web research and Spark documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "live browser and page retrieval is established; arbitrary raw API-response retrieval is not"
          - type: auth
            value: "Deep Research requires sign-in and age 18 or over; the Spark browser path additionally requires a personal account and Keep Activity"
          - type: plan
            value: "Deep Research is available with plan-dependent limits; the Spark browser path requires Google AI Pro or Ultra"
          - type: experimental
            value: "the direct browser-backed proof uses experimental Gemini Spark"
        evidence:
          - resourceId: google-gemini-web-spark-tasks
            type: documented
            observedAt: 2026-08-29
          - resourceId: google-gemini-web-deep-research
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [902]
        target:
          kind: hosted-observation
          revision: "Microsoft Copilot web for individuals, updated app available 2026-08-18"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "current privacy-control documentation is scoped to a signed-in personal Microsoft account"
          - type: runtime
            value: "public-web search and source-grounded summaries; API retrieval and arbitrary authenticated-page fetching are not established"
        evidence:
          - resourceId: microsoft-copilot-individual-privacy-controls-2026-08
            type: documented
            observedAt: 2026-08-29
          - resourceId: microsoft-copilot-individual-transparency-2026-08
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
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
            value: "Web search in Claude or a Cowork research workflow"
          - type: policy
            value: "Team and Enterprise owners must enable Web search"
          - type: format
            value: "direct URL content retrieval with cited results"
        evidence:
          - resourceId: anthropic-claude-desktop-cycle6-web-fetch
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
            value: "retrieves webpage text into the active local CLI chat"
          - type: format
            value: "fetched content is converted to Markdown"
          - type: policy
            value: "authenticated browsing, API-specific structured responses, citations, and arbitrary page interaction are not established"
        evidence:
          - resourceId: aider-v0860-images-urls
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-web
            type: documented
            observedAt: 2026-08-29
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
          - type: runtime
            value: "enabled per chat from the plus menu and limited to supported models"
          - type: policy
            value: "Team and Enterprise owners must first enable web search workspace-wide"
          - type: format
            value: "direct webpage retrieval and live search return linked, cited conversational responses"
        evidence:
          - resourceId: anthropic-claude-web-fetch
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
            value: "available across Free and paid ChatGPT plans subject to usage limits and managed-workspace settings"
          - type: runtime
            value: "ChatGPT may search automatically or the user can explicitly choose Search where the desktop client exposes it"
          - type: transport
            value: "live queries may be rewritten and sent to third-party search providers; responses include relevant source links"
        evidence:
          - resourceId: openai-chatgpt-desktop-search
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
            value: "available on ChatGPT web across Free and paid plans, including logged-out Free use, subject to plan usage limits and managed-workspace settings"
          - type: runtime
            value: "ChatGPT may search automatically or the user can select Search from tools or the slash menu"
          - type: transport
            value: "live web search may send rewritten queries to third-party search providers and returns linked sources"
        evidence:
          - resourceId: openai-chatgpt-web-search
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
            value: "availability and execution follow Agent Profiles, tool permissions, project trust, and sandbox network policy"
          - type: format
            value: "returned page content is converted to Markdown"
        evidence:
          - resourceId: zed-v1-17-2-tools
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-agent-panel
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
          - type: transport
            value: "HTTP requests"
          - type: format
            value: "HTML responses converted to Markdown"
          - type: runtime
            value: "the user may provide a URL in the task"
        evidence:
          - resourceId: cline-v4-1-16-web-fetch
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
            value: "web retrieval is service-backed and subject to network and product policy"
        evidence:
          - resourceId: amp-2026-08-web-fetch
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-web-tool-inventory
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
            value: "network reachability and the configured environment determine whether a URL can be fetched"
          - type: policy
            value: "tool inclusion and execution remain subject to Agent-mode policy"
        evidence:
          - resourceId: continue-v2-agent-tools
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-fetch-definition
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
            value: "retrieval executes in Computer's hosted cloud environment"
          - type: plan
            value: "Computer requires an active subscription and available credits"
        evidence:
          - resourceId: perplexity-computer
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
          - type: policy
            value: "webfetch permission can be allow, ask, or deny"
          - type: runtime
            value: "retrieves a specified URL rather than controlling a browser"
        evidence:
          - resourceId: opencode-v1-18-25-tools-webfetch
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: "built-in content fetching retrieves page content but does not establish clicks, form entry, or persistent browser-session automation"
        evidence:
          - resourceId: replit-agent-web-fetch
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "only publicly accessible pages are supported"
          - type: runtime
            value: "only the exact user-provided URL is processed; the agent does not follow links or crawl beyond it"
          - type: runtime
            value: "native web search is a separate configurable capability"
        evidence:
          - resourceId: warp-url-context
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Devin hosted web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "live-page retrieval is browser-mediated rather than a dedicated raw HTTP-fetch API"
          - type: auth
            value: "protected sites can require credentials, cookies, multifactor authentication, or operator assistance"
        evidence:
          - resourceId: devin-browser-web-retrieval
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires the separately configured Fetch MCP extension rather than the default Developer extension"
          - type: runtime
            value: "the documented setup requires uv and uvx"
          - type: runtime
            value: "the page says this extension does not work with Google models because its schema uses format uri"
          - type: policy
            value: "API authentication and network policy depend on the requested endpoint and local environment"
        evidence:
          - resourceId: goose-fetch-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code tools reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: WebFetch requires permission and is subject to configured allow and deny rules plus Anthropic's hostname safety check
        evidence:
          - resourceId: anthropic-claude-code-tools-reference
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI web fetch documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: shows a confirmation dialog for converted URLs and always requires explicit confirmation in Plan Mode
        evidence:
          - resourceId: google-gemini-cli-web-fetch
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Visual Studio Code agent tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: URL access uses request pre-approval and fetched-response review unless trusted-domain or approval settings apply
        evidence:
          - resourceId: microsoft-vscode-agent-web-fetch
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-agent-url-approvals
            type: documented
            observedAt: 2026-08-28
---

Retrieve live web pages or APIs during a run.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
