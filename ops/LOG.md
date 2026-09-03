# Continuous research cycle log

Append only. Do not rewrite completed cycle blocks or delete attempts. Keep
credentials, private output, and raw secret-bearing diffs out of this file.

## Record grammars

One searched-but-uncitable pair per line:

```text
ATTEMPT feature=<slug> harness=<slug> date=YYYY-MM-DD outcome=not-found note="<where and what was searched>"
```

One source conflict per line:

```text
CONTRADICTION feature=<slug> harness=<slug> date=YYYY-MM-DD src1=<https-url> src2=<https-url> note="<exact conflict>"
```

Use the date as the 30-day attempt cooldown anchor. A first-party changelog hit
may reopen a pair early; append a new attempt rather than editing the old one.

## Cycle block template

```text
## Cycle <k> — YYYY-MM-DD
- Phase: <A|B|C|D|E>
- Briefs: <count>; <compact scopes>
- Cells written: <count>
- Feature files changed: <slugs or none>
- Commit: <hash or pending reconciliation>
- Pushed: <yes|no>; <detail>
- Deployed: <yes|no|not-applicable>; <detail>
- Coverage: <sourced>/<total> (<percent>); delta <signed cells>
- Preview: <sourced>/<total> (<percent>); delta <signed cells>
- News counter: <n>/approximately 150; entry <slug or none>
- Incidents: <typed blockers or none>
```

Because a Git commit cannot contain its own final hash, the next cycle may
reconcile a `pending reconciliation` entry with the prior `HEAD` in the next
append-only block. Never amend a pushed commit merely to backfill its hash.

## Cycle 0 — 2026-08-29

- Phase: A
- Briefs: 0; operations pack initialization only
- Cells written: 0
- Feature files changed: none
- Commit: not a research cycle; pack ship is reported by the installing task
- Pushed: not part of this ledger entry
- Deployed: not part of this ledger entry
- Coverage: 621/3,534 (17.6%); delta +0
- Preview: 0/3,192 (0.0%); delta +0
- News counter: 0/approximately 150; entry none
- Incidents: none; unrelated pre-existing user work was present and preserved

ATTEMPT feature=native-rules harness=amp-cli date=2026-08-29 outcome=not-found note="Searched Amp AGENTS.md, CLI configuration, prompting, plugins, global plugins, skills, and first-party site results; no separate Amp-owned native project-rule format was located."
ATTEMPT feature=multi-file-edit harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched JetBrains AI Assistant Chat, Agents, and next-edit documentation; multi-file modification was documented only for separate Junie, Claude Agent, Codex, Copilot, or ACP agents."
ATTEMPT feature=web-fetch harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched JetBrains AI Assistant Chat and Agents documentation; /web establishes search, not retrieval of an exact URL or API."
ATTEMPT feature=browser-automation harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched official AI Assistant help for browser navigation, clicks, forms, Playwright, and page control; no built-in AI Assistant browser-control surface was located."
ATTEMPT feature=computer-use harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched official AI Assistant help for screenshot-informed clicking, typing, navigation, and desktop control; image attachment did not establish GUI action support."
ATTEMPT feature=diffs-and-patches harness=goose date=2026-08-29 outcome=not-found note="Searched Goose v1.48.0 CLI, Developer extension, PR recipes, and pinned editing implementation; review of existing Git diffs did not establish proposing or applying changes as a diff or patch."
ATTEMPT feature=subagent-delegation harness=aider date=2026-08-29 outcome=not-found note="Searched Aider modes, commands, docs, and v0.86.0 architect source; the two-model architect/editor pipeline did not establish a product-native child-agent boundary."
ATTEMPT feature=scheduled-runs harness=aider date=2026-08-29 outcome=not-found note="Searched Aider scripting, options, watch mode, and docs for schedules, cron, timers, and recurring triggers; no product-native time scheduler was found."
ATTEMPT feature=background-agents harness=aider date=2026-08-29 outcome=not-found note="Searched Aider notifications, scripting, options, and usage for detached or session-independent execution; notifications cover a still-running local process."
ATTEMPT feature=context-window harness=aider date=2026-08-29 outcome=not-found note="Searched Aider model settings, options, and warnings; provider metadata and a soft summarization threshold did not establish one exact Aider product/model/mode context-window limit."
ATTEMPT feature=audit-logs harness=aider date=2026-08-29 outcome=not-found note="Searched Aider analytics, privacy, and options for administrative security-event logging; anonymous analytics JSONL does not meet the catalog audit-log definition."
ATTEMPT feature=data-retention-controls harness=aider date=2026-08-29 outcome=not-found note="Searched Aider analytics, privacy, and options for retention, deletion, expiry, backups, and history controls; future analytics opt-out did not establish covered-data retention or deletion."
ATTEMPT feature=mcp-apps harness=windsurf date=2026-08-29 outcome=not-found note="Searched current Devin Desktop Cascade and Devin Local MCP documentation and indexes; tools, resources, and prompts were documented but no MCP Apps rendering behavior was located."
ATTEMPT feature=conversation-export harness=windsurf date=2026-08-29 outcome=not-found note="Searched current Devin Desktop and legacy Windsurf documentation; the only export statement was explicitly scoped to IDE plugins rather than the standalone desktop workbench."
CONTRADICTION feature=human-approval harness=aider date=2026-08-29 src1=https://aider.chat/docs/scripting.html src2=https://aider.chat/docs/config/options.html note="The Scripting page names --yes/AIDER_YES while the current Options reference names --yes-always/AIDER_YES_ALWAYS; the conflict concerns option spelling, not the existence of approval prompts."
CONTRADICTION feature=native-rules harness=windsurf date=2026-08-29 src1=https://windsurf.com src2=https://docs.devin.ai/desktop/getting-started note="The active marketing site presents Windsurf 2.0 while current installation documentation calls the application Devin Desktop and describes Windsurf as pre-rebrand or transitional naming; identity migration is parked for deliberate review."
ATTEMPT feature=workspace-search harness=replit-agent date=2026-08-29 outcome=not-found note="Searched current Replit Agent, General Agent, Project Editor, Plan versus Build Mode, and build documentation; project inspection and web search did not establish filename, workspace-text, or symbol search."
ATTEMPT feature=multi-file-edit harness=replit-agent date=2026-08-29 outcome=not-found note="Searched current Replit Agent, General Agent, Task board, task lifecycle, checkpoints, and build documentation; explicit multi-file editing was located only for deprecated Replit Assistant."
CONTRADICTION feature=browser-automation harness=replit-agent date=2026-08-29 src1=https://docs.replit.com/features/agent/app-testing src2=https://docs.replit.com/features/agent/overview note="App Testing names Economy, Power, and Lite modes while the current Agent overview names Free, Power, and Max; the exact mode qualifier was removed rather than choosing one page."
CONTRADICTION feature=computer-use harness=replit-agent date=2026-08-29 src1=https://docs.replit.com/features/agent/app-testing src2=https://docs.replit.com/features/agent/overview note="The browser-only partial result remains supported, but App Testing and the current Agent overview conflict on exact mode names."

## Cycle 1 — 2026-08-29

- Phase: A
- Briefs: 8; Agent Plugins, Amp, JetBrains AI Assistant, Goose, Windsurf/Devin Desktop, Aider, Devin, Warp, and Replit evidence sweeps
- Cells written: 136
- Feature files changed: agent-plugin-core, agent-plugin-mcp, agent-plugin-skills, agents-md, browser-automation, code-execution, computer-use, connectors, conversation-export, custom-instructions, diffs-and-patches, git-pull-requests, human-approval, image-input, mcp-apps, mcp-prompts, mcp-resources, mcp-tools, model-selection, multi-file-edit, pdf-documents, skills, terminal, web-fetch, workspace-files, workspace-search
- Commit: pending reconciliation
- Pushed: no; green ship checks pending
- Deployed: no; Cycle 1 pending
- Coverage: 757/3,534 (21.4%); delta +136
- Preview: 0/3,192 (0.0%); delta +0
- News counter: 136/approximately 150; entry none
- Incidents: duplicate note IDs were caught and fixed before validation; product-identity and mode-name conflicts were parked above

## Cycle 2 — 2026-08-29

- Phase: A
- Briefs: 3; Agent Skills cross-client probe, Goose v1.48.0 atomic MCP sweep, and MCP Apps exact-surface probe
- Cells written: 70
- Feature files changed: mcp-apps, mcp-cancellation, mcp-client-role, mcp-elicitation, mcp-legacy-sse, mcp-list-changed, mcp-logging, mcp-oauth, mcp-progress, mcp-prompts-list-changed, mcp-prompts, mcp-registry, mcp-resource-subscriptions, mcp-resources, mcp-revision, mcp-roots, mcp-sampling, mcp-server-instructions, mcp-server-role, mcp-stdio, mcp-streamable-http, mcp-task-listing, mcp-tasks, mcp-tools, skill-manual-invocation, skill-progressive-loading, skill-project-scope, skill-references-assets, skill-scripts, skill-user-scope, skills
- Commit: pending reconciliation; prior Cycle 1 commit `c199f60f342af368318ddd4656fb14627da7d8fc`
- Pushed: no; Cycle 2 green ship checks pending
- Deployed: no; Cycle 2 pending; prior live Cycle 1 coverage verified at 757/3,534
- Coverage: 827/3,534 (23.4%); delta +70
- Preview: 0/3,192 (0.0%); delta +0
- News counter: 0/approximately 150; entry documentation-coverage-23-percent
- Incidents: none; exact ChatGPT CLI product identity remains unestablished and was parked rather than inheriting Codex CLI evidence

ATTEMPT feature=skill-manual-invocation harness=amp-cli date=2026-08-29 outcome=not-found note="Searched Amp Skills format, viewing, listing, and reload documentation; model-selected loading is documented, but no direct named user invocation or explicit activation control was located."
ATTEMPT feature=skill-scripts harness=opencode date=2026-08-29 outcome=not-found note="Searched the complete OpenCode Skills page, including project paths, frontmatter, and tool description; no bundled-script discovery or execution behavior was documented."
ATTEMPT feature=skill-references-assets harness=opencode date=2026-08-29 outcome=not-found note="Searched the complete OpenCode Skills page; it documents loading SKILL.md content but not supporting references, templates, or assets."
ATTEMPT feature=skill-project-scope harness=claude-web date=2026-08-29 outcome=not-found note="Searched Claude Skills availability, cross-surface, and sharing-scope documentation; individual and organization scopes are established, but current Claude Project discovery or restriction is not."
ATTEMPT feature=skill-project-scope harness=chatgpt-web date=2026-08-29 outcome=not-found note="Searched OpenAI Build Skills availability, local discovery, and plugin distribution; repository discovery is documented for Codex, not the ChatGPT web surface."
ATTEMPT feature=skill-user-scope harness=chatgpt-web date=2026-08-29 outcome=not-found note="Searched OpenAI Build Skills availability, sidebar, and plugin distribution; plugin-bundled web skills are documented, but no personal or global discovery scope for ChatGPT web was established."
ATTEMPT feature=skill-project-scope harness=chatgpt-desktop date=2026-08-29 outcome=not-found note="Searched ChatGPT desktop Skills, Codex local-discovery, and plugin-distribution documentation; no exact repository or workspace-scoped desktop skill discovery was established."
ATTEMPT feature=mcp-apps harness=aider date=2026-08-29 outcome=not-found note="Searched Aider documentation, releases, maintained repository, and the MCP extension matrix for standard MCP Apps rendering; no exact Aider host evidence was located."
ATTEMPT feature=mcp-apps harness=chatgpt-cli date=2026-08-29 outcome=not-found note="Searched official OpenAI ChatGPT, Codex, plugin, Apps SDK, and developer-mode documentation plus the MCP extension matrix; evidence did not establish an exact ChatGPT CLI surface or renderer."
ATTEMPT feature=mcp-apps harness=chatgpt-desktop date=2026-08-29 outcome=not-found note="Searched official ChatGPT desktop, plugin, Apps SDK, developer-mode, and app-availability documentation; full MCP Apps documentation is scoped to web and does not establish desktop inline rendering."
ATTEMPT feature=mcp-apps harness=chrome-webmcp-preview date=2026-08-29 outcome=not-found note="Searched Chrome WebMCP origin-trial documentation, Chromium sources, Chrome agent guidance, and the MCP extension matrix; WebMCP is distinct and no exact MCP Apps renderer was located."
ATTEMPT feature=mcp-apps harness=claude-cli date=2026-08-29 outcome=not-found note="Searched Claude Code documentation, releases, maintained repository, and the MCP extension matrix; positive entries name Claude web and Desktop, not Claude CLI."
ATTEMPT feature=mcp-apps harness=cline date=2026-08-29 outcome=not-found note="Searched Cline documentation and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, ui resources, and interactive MCP views; ordinary MCP support did not establish Apps rendering."
ATTEMPT feature=mcp-apps harness=codex-cli date=2026-08-29 outcome=not-found note="Searched official Codex CLI documentation and maintained source for MCP Apps host support; app references did not establish an exact Codex CLI inline renderer."
ATTEMPT feature=mcp-apps harness=continue date=2026-08-29 outcome=not-found note="Searched Continue documentation and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, ui resources, and iframe rendering; no exact host evidence was located."
ATTEMPT feature=mcp-apps harness=copilot-cli date=2026-08-29 outcome=not-found note="Searched GitHub Copilot CLI documentation, changelog material, and the MCP extension matrix; the positive VS Code Copilot entry does not establish the CLI surface."
ATTEMPT feature=mcp-apps harness=copilot-web date=2026-08-29 outcome=not-found note="Searched Microsoft Copilot web documentation and the MCP extension matrix; Microsoft 365 Copilot is not the catalog's consumer Copilot web surface."
ATTEMPT feature=mcp-apps harness=devin-web date=2026-08-29 outcome=not-found note="Searched current hosted Devin documentation, MCP configuration, marketplace pages, release notes, and site indexes; ordinary MCP tools did not establish the standard Apps extension."
ATTEMPT feature=mcp-apps harness=gemini-cli date=2026-08-29 outcome=not-found note="Searched Gemini CLI documentation and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, and ui rendering; ordinary MCP tool support did not establish an Apps host."
ATTEMPT feature=mcp-apps harness=gemini-web date=2026-08-29 outcome=not-found note="Searched official Gemini app help, product announcements, and MCP material; no exact consumer-web MCP Apps renderer was documented."
ATTEMPT feature=mcp-apps harness=grok-bot-desktop date=2026-08-29 outcome=not-found note="Searched Grok Bot documentation and xAI launch material for MCP Apps, ui resources, and interactive MCP rendering; no exact evidence was located."
ATTEMPT feature=mcp-apps harness=grok-web date=2026-08-29 outcome=not-found note="Searched official Grok web, xAI product, and MCP documentation; API-level remote MCP support was not mapped to the consumer Grok web surface."
ATTEMPT feature=mcp-apps harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched JetBrains AI Assistant help, release material, blog, and first-party GitHub for MCP Apps; no exact AI Assistant inline renderer was documented."
ATTEMPT feature=mcp-apps harness=le-chat date=2026-08-29 outcome=not-found note="Searched Mistral and Le Chat help, product documentation, and first-party news for MCP Apps and interactive MCP tool UI; no exact host evidence was located."
ATTEMPT feature=mcp-apps harness=opencode date=2026-08-29 outcome=not-found note="Searched OpenCode documentation, releases, changelog, and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, and iframe rendering; ordinary MCP tools did not establish Apps rendering."
ATTEMPT feature=mcp-apps harness=perplexity-web date=2026-08-29 outcome=not-found note="Searched Perplexity Help Center, developer documentation, and changelog for MCP Apps and inline MCP tool views; no exact web host evidence was located."
ATTEMPT feature=mcp-apps harness=replit-agent date=2026-08-29 outcome=not-found note="Searched Replit Agent MCP, connector, integration, Canvas, changelog, and blog documentation; Replit artifacts and ordinary MCP calls did not establish the standard Apps extension."
ATTEMPT feature=mcp-apps harness=warp date=2026-08-29 outcome=not-found note="Searched Warp documentation, changelog, and maintained repository for MCP Apps, ui resources, and interactive MCP views; no exact Warp renderer was documented."
ATTEMPT feature=mcp-apps harness=zed-agent date=2026-08-29 outcome=not-found note="Searched Zed Agent documentation, releases, and maintained repository for MCP Apps, ui resources, and iframe rendering; no exact Zed host evidence was located."
ATTEMPT feature=workspace-files harness=chatgpt-cli date=2026-08-29 outcome=not-found note="Searched OpenAI's current ChatGPT documentation index and CLI documentation; the terminal product is identified as Codex CLI, not a distinct exact ChatGPT CLI surface matching this catalog column."
ATTEMPT feature=mcp-apps harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the v1.18.25 MCP client capabilities, tool and resource rendering paths, MCP documentation, and extension matrix; no exact iframe, AppBridge, or io.modelcontextprotocol/ui host behavior was established."
ATTEMPT feature=multi-file-edit harness=opencode date=2026-08-29 outcome=not-found note="Reviewed v1.18.25 Intro, Tools, Agents, and GitHub documentation; edit, write, and patch primitives did not explicitly establish modifying multiple files during one local task."
ATTEMPT feature=browser-automation harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the exhaustive built-in tools, webfetch and websearch descriptions, local web interface, MCP extension paths, and release source; web retrieval does not establish browser navigation, clicks, or form control."
ATTEMPT feature=computer-use harness=opencode date=2026-08-29 outcome=not-found note="Reviewed v1.18.25 built-in tools, permissions, plugins, and CLI documentation; no first-party evidence established general operating-system visual control."
ATTEMPT feature=background-agents harness=opencode date=2026-08-29 outcome=not-found note="The CLI environment reference names experimental background subagent tasks, but the reviewed documentation does not establish a run continuing after the operator leaves the OpenCode session."
ATTEMPT feature=context-window harness=opencode date=2026-08-29 outcome=not-found note="Reviewed Models, Providers, CLI model metadata, configuration schema, and release source; no exact numeric OpenCode product-level context window was documented."
ATTEMPT feature=pdf-documents harness=opencode date=2026-08-29 outcome=not-found note="The CLI supports generic file attachments, but reviewed documentation did not establish PDF extraction, page-image understanding, OCR, page limits, or useful PDF exposure to the model."
ATTEMPT feature=audit-logs harness=opencode date=2026-08-29 outcome=not-found note="Reviewed enterprise, server, sharing, session, stats, GitHub, and observability documentation; no administrative security-event audit-log surface was established."
ATTEMPT feature=mcp-prompts-list-changed harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the complete v1.18.25 MCP watch and prompt-catalog implementation; tools/list_changed is handled, but no prompt-list notification handler was established."
ATTEMPT feature=mcp-registry harness=opencode date=2026-08-29 outcome=not-found note="Reviewed MCP configuration, add and list commands, organization defaults, examples, and implementation; no official MCP Registry discovery or registry-metadata consumption was documented."
ATTEMPT feature=mcp-resource-subscriptions harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the complete v1.18.25 resource implementation; it lists and reads resources, but no resources/subscribe or resource-update handling was established."
ATTEMPT feature=mcp-server-role harness=opencode date=2026-08-29 outcome=not-found note="Reviewed all v1.18.25 CLI commands and MCP and server documentation; opencode serve exposes an OpenCode HTTP API, while no MCP server role was established."
ATTEMPT feature=mcp-prompts harness=warp date=2026-08-29 outcome=not-found note="Reviewed current local MCP documentation and 2026 changelog; tools, resources, transports, OAuth, and server configuration are documented, but MCP prompts/list or prompts/get are not."
ATTEMPT feature=context-window harness=warp date=2026-08-29 outcome=not-found note="Reviewed local-agent context management, model choice, and credit documentation; Warp says the window depends on the model but publishes no exact product/model/mode numeric limit."
ATTEMPT feature=pdf-documents harness=warp date=2026-08-29 outcome=not-found note="Reviewed local image attachment, interaction, and changelog documentation; general context references and cloud attachments do not establish local PDF input or understanding."
ATTEMPT feature=output-token-limit harness=warp date=2026-08-29 outcome=not-found note="Reviewed model choice, local interaction, and billing documentation; no product-level maximum response or artifact-generation budget was located."
ATTEMPT feature=structured-output harness=warp date=2026-08-29 outcome=not-found note="Reviewed the CLI, API and SDK quickstart, and 2026 changelog; JSON-returning resource commands do not establish schema-constrained local Agent responses."
ATTEMPT feature=subagent-mcp-access harness=warp date=2026-08-29 outcome=not-found note="Reviewed orchestration, MCP, and changelog documentation; no exact local child-agent MCP inheritance or child-specific MCP configuration was established."
ATTEMPT feature=subagent-write-access harness=warp date=2026-08-29 outcome=not-found note="Reviewed orchestration, Agent Profiles, and changelog documentation; examples imply file-sharded work but do not explicitly establish local child write grants."
ATTEMPT feature=mcp-logging harness=warp date=2026-08-29 outcome=not-found note="Warp stores local MCP process logs, but current sources do not identify support for the protocol's structured logging/message notification capability."
ATTEMPT feature=mcp-revision harness=warp date=2026-08-29 outcome=not-found note="Current Warp MCP sources establish transports and primitives but do not name the negotiated MCP specification revision."
ATTEMPT feature=mcp-resources harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted MCP Marketplace, custom-server configuration, releases, and terminology; tools are documented but resources/list, resources/read, templates, and subscriptions are not."
ATTEMPT feature=mcp-prompts harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted MCP Marketplace, releases, documentation index, and protocol terms; Devin documents MCP tool discovery and invocation but not prompts/list or prompts/get."
ATTEMPT feature=conversation-export harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted session tools, releases, sharing, and the Cloud API; JSON session-message APIs were not transferred to a web export cell without a documented web download."
ATTEMPT feature=context-window harness=devin-web date=2026-08-29 outcome=not-found note="Searched session, Usage, Knowledge, insights, model-picker, and hosted index documentation; no exact current Devin web model or mode context window was published."
ATTEMPT feature=image-input harness=devin-web date=2026-08-29 outcome=not-found note="Searched attachment docs, releases, first-session guidance, Computer Use, and the hosted index; image UI and Devin-captured screenshots did not establish operator-supplied image input."
ATTEMPT feature=nested-agents-md harness=devin-web date=2026-08-29 outcome=not-found note="Searched Devin AGENTS.md and Review instruction documentation; project placement and directory-scoped REVIEW.md do not establish general nested AGENTS.md precedence."
ATTEMPT feature=subagent-approval-boundaries harness=devin-web date=2026-08-29 outcome=not-found note="Searched Managed Devins, Dynamic Workflows, Security Profiles, releases, and session schemas; children inherit policy, but no child-specific grants plus approval-request policy was documented."
ATTEMPT feature=subagent-model-selection harness=devin-web date=2026-08-29 outcome=not-found note="Searched Managed Devins, Dynamic Workflows, model picker, schedules, and session fields; child prompts, tags, limits, and placement are documented but per-child model choice is not."
ATTEMPT feature=automatic-context-compaction harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted session tools, Usage, insights, model picker, Knowledge, and the index; no maintained statement says long sessions automatically summarize or prune context."
ATTEMPT feature=context-compaction-controls harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted session tools, Usage, insights, model picker, and the index; no user-facing compaction command or setting was documented."
ATTEMPT feature=context-usage-visibility harness=devin-web date=2026-08-29 outcome=not-found note="Searched Session Insights, Usage, session tools, and releases; ACU use and Context Growth are not the current model's context-budget use or remaining token capacity."
ATTEMPT feature=output-token-limit harness=devin-web date=2026-08-29 outcome=not-found note="Searched first-session, model-picker, structured-output, attachment, Usage, and billing documentation; no hosted-model response-token or generated-artifact output budget was published."
ATTEMPT feature=pdf-documents harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed current AI Chat attachment and chat-mode documentation; files, folders, images, database objects, and IDE references are documented, but no exact PDF understanding workflow was established."
ATTEMPT feature=mcp-resources harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; tools and transports are documented, but MCP resources/list and resources/read are not."
ATTEMPT feature=mcp-prompts harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; no prompts/list or prompts/get behavior was documented."
ATTEMPT feature=mcp-oauth harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; server URLs and transport configuration are documented, but no MCP OAuth flow was established."
ATTEMPT feature=mcp-revision harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; it links MCP generally but does not name a negotiated specification revision."
ATTEMPT feature=mcp-logging harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the current MCP page; local server process logs are available, but the protocol's structured logging notification capability is not established."
CONTRADICTION feature=data-retention-controls harness=jetbrains-ai date=2026-08-29 src1=https://youtrack.jetbrains.com/projects/JUNIE/articles/SUPPORT-A-659/AI-Assistant-data-privacy-storage-and-transmission-what-information-is-sent-to-the-cloud-and-how-it-is-stored src2=https://www.jetbrains.com/legal/docs/terms/product_data_collection/ note="The current support article says opted-in detailed data is stored for no more than 30 days, while the June 2026 Product Data Collection and Usage Notice states one-year retention for detailed code-related data."

## Cycle 3 — 2026-08-29

- Phase: A
- Briefs: 4; JetBrains AI Assistant 2026.2, OpenCode v1.18.25, Warp local desktop Agent, and hosted Devin web
- Cells written: 119; 118 current-track and 1 preview-track
- Feature files changed: 72; instructions, inputs, context, runtime, subagents, MCP, governance, security, collaboration, reliability, and pricing rows
- Commit: pending reconciliation; prior Cycle 2 commit `d073d8843138613d53a27c53829a8c3b475edad9`
- Pushed: no; Cycle 3 green ship checks pending; Cycle 2 is live on `origin/main`
- Deployed: no; Cycle 3 pending; prior Cloudflare version `7d0953e3-e511-4f3d-9734-b458eb18d49c`
- Coverage: 945/3,534 (26.7%); delta +118
- Preview: 1/3,192 (0.0%); delta +1
- News counter: 118/approximately 150; entry none
- Incidents: JetBrains retention sources conflict on 30 days versus one year and were parked; no retention cell was authored for that pair

RECONCILE cycle=3 date=2026-08-29 commit=27f81a780d98161892f5b6b0c0eb36b851c54865 pushed=yes deployed=yes cloudflare_version=05353f29-f970-40cc-bbe8-49639cceefc1 live_coverage=945/3534 note="Cycle 3 passed CI and its cache-busted production coverage endpoint matched the committed 945-cell report."

ATTEMPT feature=git-pull-requests harness=cline date=2026-08-29 outcome=not-found note="Searched the pinned v4.1.16 README, changelog, docs, default-tool enumeration, and extension source; no dedicated Cline VS Code pull-request open or review workflow was established."
ATTEMPT feature=mcp-registry harness=cline date=2026-08-29 outcome=not-found note="Reviewed the pinned v4.1.16 MCP overview, McpHub, Marketplace implementation, and official-registry terminology; Cline's own Marketplace and community repositories do not establish official MCP Registry consumption."
ATTEMPT feature=mcp-server-role harness=cline date=2026-08-29 outcome=not-found note="Reviewed the pinned v4.1.16 MCP overview and extension source for server construction, listening transports, and exposed primitives; evidence establishes only Cline's host/client role."
ATTEMPT feature=agents-md harness=replit-agent date=2026-08-29 outcome=not-found note="Current Replit docs establish vendor-native replit.md and /.agents/skills behavior but do not document automatic AGENTS.md discovery; the similarly named .agents directory was not treated as proof."
ATTEMPT feature=conversation-export harness=replit-agent date=2026-08-29 outcome=not-found note="Reviewed Routines, Memories, and the privacy policy; run history and legal portability do not establish a built-in Agent conversation export or format contract."
ATTEMPT feature=context-window harness=replit-agent date=2026-08-29 outcome=not-found note="Replit explains context windows and says sizes vary but publishes no numeric hosted Agent limit by exact model, mode, or plan."
ATTEMPT feature=multi-file-edit harness=replit-agent date=2026-08-29 outcome=not-found note="A dated source assigns multi-file editing to deprecated Replit Assistant; current Agent docs establish file editing but not multiple files in one task, so the legacy guarantee was not carried forward."
ATTEMPT feature=upload-limits harness=replit-agent date=2026-08-29 outcome=not-found note="Current hosted upload pages state methods and input classes but no numeric byte, count, page, storage, or rolling quota."
ATTEMPT feature=skill-scripts harness=replit-agent date=2026-08-29 outcome=not-found note="Agent Skills docs establish SKILL.md and supporting-file resolution but not bundled-script execution or its approval/runtime policy."
ATTEMPT feature=automatic-context-compaction,context-compaction-controls,context-usage-visibility harness=replit-agent date=2026-08-29 outcome=not-found note="Current context guidance recommends a fresh thread when context becomes noisy but documents no automatic summary, compact control, or usage meter."
ATTEMPT feature=mcp-resources,mcp-prompts,mcp-apps,mcp-cancellation,mcp-elicitation,mcp-legacy-sse,mcp-list-changed,mcp-logging,mcp-progress,mcp-prompts-list-changed,mcp-registry,mcp-resource-subscriptions,mcp-revision,mcp-roots,mcp-sampling,mcp-server-instructions,mcp-stdio,mcp-streamable-http,mcp-task-listing,mcp-tasks harness=replit-agent date=2026-08-29 outcome=not-found note="Exact hosted Agent documentation establishes remote server connection, OAuth or custom-header auth, tool retrieval, selection, and confirmation only; it does not name the remaining atomic MCP primitives or a revision."
ATTEMPT feature=mcp-server-role,mcp-streamable-http harness=replit-agent date=2026-08-29 outcome=not-found note="The separate beta Replit MCP Server is an outward-facing integration product and was not projected onto the hosted Replit Agent client surface."
ATTEMPT feature=model-selection harness=continue date=2026-08-29 outcome=source-conflict note="Continue v2.0.0 quick-start says Agent is disabled when a model lacks native tool support, while model setup says any model can use system-message tools; the authored selector cell does not rely on resolving that eligibility conflict."
ATTEMPT feature=source-lifecycle harness=continue date=2026-08-29 outcome=parked note="Continue v2.0.0 is the current stable release, while mutable main contains later work; all new Cycle-4 cells use the exact v2.0.0 tag and older mutable-main cells remain queued for a freshness audit."
ATTEMPT feature=mcp-apps harness=perplexity-web date=2026-08-29 outcome=not-found note="Searched current Perplexity Help Center, developer documentation, and changelog for standard MCP Apps rendering; no exact hosted-web AppBridge or ui:// host was established."
ATTEMPT feature=local-only-mode harness=amp-cli date=2026-08-29 outcome=resolved-no note="Amp's first-party Security Reference explicitly describes the required service architecture and absence of self-hosting, supporting a bounded current no rather than an absence inference."

CONTRADICTION feature=conversation-export harness=cline date=2026-08-29 src1=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/core/controller/task/exportTaskWithId.ts#L5-L20 src2=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/proto/cline/task.proto#L27-L38 note="The same-tag wrapper comment says Markdown export while the protobuf contract and changelog describe opening the complete task directory; the cell records directory/JSON behavior at medium confidence."
CONTRADICTION feature=browser-automation harness=cline date=2026-08-29 src1=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/browser/BrowserSession.ts#L155-L225 src2=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/tools-reference/all-cline-tools.mdx#L9-L32 note="The stable package retains legacy browser_action while the exhaustive ClineCore table omits it; support remains partial and runtime-qualified."
CONTRADICTION feature=custom-instructions harness=le-chat date=2026-08-29 src1=https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe src2=https://content.mistral.ai/le-chat/ note="Mistral says Le Chat became Vibe while retaining URL, account, and conversations; the catalog identity is parked until a deliberate migration defines the exact durable web surface."
CONTRADICTION feature=model-selection harness=replit-agent date=2026-08-29 src1=https://docs.replit.com/features/agent/agent-modes src2=https://docs.replit.com/features/agent/model-selector note="Live canonical docs use Free, Power, and Max modes, while a legacy redirect/search cache uses obsolete mode names; new cells use only the live canonical pages and the older computer-use qualifier remains queued for audit."

ATTEMPT feature=git-pull-requests harness=zed-agent date=2026-08-29 outcome=not-found note="Pinned Agent Panel, native Agent, Tools, MCP, and Git documentation did not establish a dedicated native Zed Agent pull-request open or review workflow."
ATTEMPT feature=browser-automation harness=zed-agent date=2026-08-29 outcome=not-found note="A separately installed Puppeteer MCP extension is listed, but stable native Agent docs and source do not enumerate the navigation, click, form, and page-reading contract required by this row."
ATTEMPT feature=computer-use harness=zed-agent date=2026-08-29 outcome=not-found note="The exhaustive native tool documentation covers files, terminal, fetch, web search, skills, diagnostics, and subagents but no screenshot-driven general visual-interface control."
ATTEMPT feature=scheduled-runs harness=zed-agent date=2026-08-29 outcome=not-found note="Agent Panel, Parallel Agents, settings, Tasks, release notes, and tool docs establish concurrent and backgrounded desktop work but no schedule-triggered native Agent run."
ATTEMPT feature=pdf-documents harness=zed-agent date=2026-08-29 outcome=not-found note="The Agent Panel explicitly documents image input, not native PDF attachment; PDF Skills and document MCP extensions are separate tool paths."
ATTEMPT feature=audit-logs harness=zed-agent date=2026-08-29 outcome=not-found note="Pinned AI privacy, Business privacy, admin-control, telemetry, and Agent Panel docs did not establish a security-relevant administrative audit log for native Agent activity."
ATTEMPT feature=mcp-registry harness=zed-agent date=2026-08-29 outcome=not-found note="Zed plans to replace MCP server extensions with the official registry, but stable v1.17.2 docs and source do not establish current registry discovery or metadata lookup."
ATTEMPT feature=mcp-server-role harness=zed-agent date=2026-08-29 outcome=not-found note="The generic context_server crate contains a Unix-socket McpServer helper, but pinned source has no production call site mapping it to the native Agent Panel as a user-facing server."
CONTRADICTION feature=mcp-cancellation harness=zed-agent date=2026-08-29 src1=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/client.rs#L374-L486 src2=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L374-L393 note="The reusable MCP client can emit notifications/cancelled when request_with receives cancel_rx, but the exact native Agent tool path uses request with cancel_rx=None and races UI cancellation outside the protocol client; the current cell is no for the product path."
CONTRADICTION feature=mcp-family harness=zed-agent date=2026-08-29 src1=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs src2=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs note="Generic protocol structs cover more primitives than the active native registry, which stores tools and prompts and subscribes only to tools/list_changed; atomic cells follow the active path."

## Cycle 4 — 2026-08-29

- Phase: A
- Briefs: 9; Microsoft Copilot web, Grok web, Gemini web, Perplexity web, Continue v2.0.0, Amp CLI, Cline v4.1.16, hosted Replit Agent, and Zed v1.17.2
- Cells written: 208; 200 current-track and 8 preview-track
- Feature files changed: 74; instructions, skills, inputs, tools, context, runtime, subagents, MCP, collaboration, governance, security, reliability, and pricing rows
- Commit: pending; prior live Cycle 3 commit `27f81a780d98161892f5b6b0c0eb36b851c54865`
- Pushed: no; Cycle 4 green ship checks pending; Cycle 3 is live on `origin/main`
- Deployed: no; Cycle 4 pending; prior Cloudflare version `05353f29-f970-40cc-bbe8-49639cceefc1`
- Coverage: 1,145/3,534 (32.4%); delta +200
- Preview: 9/3,192 (0.3%); delta +8
- News counter: 0/approximately 150; entry `documentation-coverage-32-percent`
- Incidents: Cline export and browser-runtime contradictions are preserved; Zed generic MCP structs were not mistaken for active product paths; Le Chat-to-Vibe identity migration is parked; Replit legacy mode-name cache was not used

RECONCILE cycle=4 commit=e14e855f28089810dd709174bc0ac2fcf4c325c9 pushed=yes deployed=yes cloudflare=9c15a655-0611-4f6e-8300-d0b891882447 live=1145/3534 ci=success run=33276149996

ATTEMPT feature=workspace-files harness=claude-web date=2026-08-29 outcome=not-found note="Hosted attachments and persistent Project files are documented, but the exact workspace-files boundary was not projected from ordinary uploads."
ATTEMPT feature=workspace-search harness=claude-web date=2026-08-29 outcome=not-found note="Past-chat RAG search is documented, but it does not establish filename, file-text, or symbol search across a selected workspace."
ATTEMPT feature=computer-use harness=claude-web date=2026-08-29 outcome=not-found note="Web Cowork can monitor cloud sessions, but native computer control requires a connected Claude Desktop app."
ATTEMPT feature=git-pull-requests harness=claude-desktop date=2026-08-29 outcome=not-found note="The Desktop Code tab can monitor PR status, but this did not establish native PR creation or review for the broader ChatGPT-style Desktop surface."
ATTEMPT feature=subagent-delegation harness=claude-desktop date=2026-08-29 outcome=not-found note="Cowork and Code subagent references lacked a sufficiently precise exact Desktop contract for activation, plans, and boundaries."
ATTEMPT feature=mcp-revision harness=openwork-desktop date=2026-08-29 outcome=not-found note="A discovery helper initializes 2025-06-18 while the adopted client negotiates automatically; neither proves exact 2026-07-28 support."
ATTEMPT feature=mcp-prompts harness=openwork-desktop date=2026-08-29 outcome=not-found note="The managed gateway advertises tools only and no exact Desktop prompt-list or prompt-selection surface was found."
ATTEMPT feature=skill-progressive-loading harness=openwork-desktop date=2026-08-29 outcome=not-found note="The server parses SKILL.md metadata and the composer lists skills, but metadata-first then on-demand body loading was not established."
ATTEMPT feature=skill-references-assets harness=openwork-desktop date=2026-08-29 outcome=not-found note="The Claude-plugin importer skips extra files and no exact user-skill supporting-file resolution contract was established."
ATTEMPT feature=skill-scripts harness=openwork-desktop date=2026-08-29 outcome=not-found note="Repository-owned tooling includes scripts, but no exact Desktop user-skill script discovery or execution contract was established."
ATTEMPT feature=agents-md harness=openwork-desktop date=2026-08-29 outcome=not-found note="Searched the tagged release for AGENTS.md discovery; custom instructions and .opencode agents do not establish the convention."
ATTEMPT feature=workspace-search harness=openwork-desktop date=2026-08-29 outcome=not-found note="Tagged session search targets conversations, not file names, file text, or symbols across the workspace."
ATTEMPT feature=data-retention-controls harness=openwork-desktop date=2026-08-29 outcome=not-found note="Session and credential deletion exist, but no complete covered-data retention duration or deletion scope was found."
ATTEMPT feature=agents-md harness=aider date=2026-08-29 outcome=not-found note="Complete v0.86.0 docs and source show arbitrary convention files loaded by configuration, not automatic AGENTS.md discovery."
ATTEMPT feature=native-rules harness=aider date=2026-08-29 outcome=not-found note="Aider conventions are arbitrary Markdown files, not a distinct native path-scoped rule hierarchy."
ATTEMPT feature=skills harness=aider date=2026-08-29 outcome=not-found note="Complete stable source and commands show no Agent Skills discovery or metadata/loading model; generic /read and /run do not count."
ATTEMPT feature=connectors harness=aider date=2026-08-29 outcome=not-found note="Model endpoints and /web retrieval do not establish authenticated external-data connectors."
ATTEMPT feature=git-pull-requests harness=aider date=2026-08-29 outcome=not-found note="Local Git commands and commits do not establish a hosting-provider PR create, review, comment, or merge surface."
ATTEMPT feature=browser-automation harness=aider date=2026-08-29 outcome=not-found note="Playwright-assisted scraping only documents webpage text ingestion, not navigation, clicks, typing, forms, or task-oriented browser control."
ATTEMPT feature=computer-use harness=aider date=2026-08-29 outcome=not-found note="No screen observation, pointer control, keyboard control, or arbitrary application automation is documented."
ATTEMPT feature=scheduled-runs harness=aider date=2026-08-29 outcome=not-found note="One-shot scripting can be externally scheduled, but Aider implements no product-native schedule, retry policy, or run history."
ATTEMPT feature=background-agents harness=aider date=2026-08-29 outcome=not-found note="Foreground notifications do not establish detached, hosted, reconnectable, or after-exit execution."
ATTEMPT feature=audit-logs harness=aider date=2026-08-29 outcome=not-found note="Chat history, model history, and analytics JSONL are not administrative security audit records."
ATTEMPT feature=data-retention-controls harness=aider date=2026-08-29 outcome=not-found note="Local history paths do not establish complete retention and deletion behavior across analytics, providers, caches, backups, and legal copies."
ATTEMPT feature=local-only-mode harness=aider date=2026-08-29 outcome=not-found note="Local model endpoints and disabled analytics do not establish an audited offline or air-gapped mode covering every outbound path."
ATTEMPT feature=structured-output harness=aider date=2026-08-29 outcome=not-found note="Provider schema metadata and edit formats do not establish a product-level JSON-schema-constrained response feature."
ATTEMPT feature=output-token-limit harness=aider date=2026-08-29 outcome=not-found note="Pinned metadata and request settings expose conflicting 8,192, 64,000, and beta-header concepts; no exact effective cap was authored."
ATTEMPT feature=realtime-voice harness=aider date=2026-08-29 outcome=not-found note="Push-to-record transcription does not establish spoken responses, duplex audio, interruption, or live turn-taking."
ATTEMPT feature=screenshots harness=aider date=2026-08-29 outcome=not-found note="Existing screenshot-file ingestion is image input, not product-provided screen or window capture."
CONTRADICTION feature=background-agents harness=claude-web date=2026-08-29 src1=https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork src2=https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork note="Cloud Cowork continues without the browser or device, while local files, browser, and computer tasks require connected Desktop availability; the cell remains partial."
CONTRADICTION feature=mcp-revision harness=openwork-desktop date=2026-08-29 src1=https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/connect-mcp-transport.ts src2=https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/packages/enterprise-mcp-client/src/enterprise-mcp-client.ts note="Fixed 2025-06-18 initialization and automatic negotiation coexist; exact 2026-07-28 support remains unknown."
CONTRADICTION feature=skill-scripts harness=openwork-desktop date=2026-08-29 src1=https://github.com/different-ai/openwork/tree/63625a4be566256370eebb84ad91b020a0f6cf06/.agents/skills src2=https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/claude-plugin-bundle.ts note="Developer skills contain supporting files while the imported user-plugin path installs only SKILL.md; no product-wide claim was made."
CONTRADICTION feature=long-term-memory harness=openwork-desktop date=2026-08-29 src1=https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/mcp-ui-control-profile.md src2=https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/memory-bank-architecture.md note="Current UI-control docs say there is no separate memory database; the memory-bank document is draft architecture and was not treated as shipped."
CONTRADICTION feature=output-token-limit harness=aider date=2026-08-29 src1=https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/resources/model-metadata.json src2=https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/resources/model-settings.yml note="Claude 3.7 Sonnet metadata and request settings expose different output values and beta entitlement concepts; the row remains unknown."
CONTRADICTION feature=subagent-delegation harness=aider date=2026-08-29 src1=https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/modes.md src2=https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/coders/architect_coder.py note="Architect/editor mode is a sequential two-model transformation, not a child-agent lifecycle."
CONTRADICTION feature=browser-automation harness=aider date=2026-08-29 src1=https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/scrape.py src2=https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/images-urls.md note="Playwright is an implementation detail of text scraping; documented behavior remains web fetch rather than browser automation."

## Cycle 5 — 2026-08-29

- Phase: A with exact-source family sweeps
- Briefs: 5; ChatGPT web and Desktop, Claude Desktop and web, OpenWork Desktop v0.18.39, and Aider v0.86.0
- Cells written: 105 current-track
- Feature files changed: 70; collaboration, files, voice, browser/runtime, governance, models/context, MCP, Skills, subagents, and reliability rows
- Commit: pending; prior live Cycle 4 commit `e14e855f28089810dd709174bc0ac2fcf4c325c9`
- Pushed: no; Cycle 5 green ship checks pending
- Deployed: no; Cycle 5 pending; prior Cloudflare version `9c15a655-0611-4f6e-8300-d0b891882447`
- Coverage: 1,250/3,534 (35.4%); delta +105
- Preview: 9/3,192 (0.3%); delta +0
- News counter: 105/approximately 150; no entry this cycle
- Incidents: deprecated ChatGPT agent-mode documentation was not reused for current Work claims; Aider MCP `no` cells are pinned to a complete stable-source audit; OpenWork and Claude scope contradictions remain explicit

## Cycle 6 — 2026-08-29

- Phase: A with a catalog-wide assessment and correction-operations release
- Briefs: 3; Microsoft Copilot consumer web, Gemini web, and Claude Desktop
- Cells written: 67 current-track; 39 exact brief cells plus reconciled broad assessments and source corrections
- Feature files changed: 54; consumer collaboration, inputs, governance, runtime, Agent Skills, and exact-surface corrections
- Commit: `ac5a1af9e4583665e07e00221747eb3cc272594b`; reconciles pending Cycle 5 and ships Cycle 6
- Pushed: yes; fast-forwarded `origin/main`
- Deployed: yes; Cloudflare version `9c4f7f95-596d-4142-ad69-bf311739ba54`
- Coverage: 1,317/3,534 (37.3%); delta +67
- Preview: 9/3,192 (0.3%); delta +0
- News counter: 172/approximately 150; deferred to the end-to-end reconciliation release
- Incidents: none; all Copilot and Gemini brief cells were integrated, while twelve valid Claude Desktop candidates were identified as an incomplete merge for Cycle 7

ATTEMPT feature=context-window harness=copilot-web date=2026-08-29 outcome=not-found note="Cowork's prompt-entry cap and Notebook reference limits are not a model context-window limit."
ATTEMPT feature=output-token-limit harness=copilot-web date=2026-08-29 outcome=not-found note="No exact maximum generated-token or output-length budget for current consumer Copilot web was found."
ATTEMPT feature=automatic-context-compaction harness=copilot-web date=2026-08-29 outcome=not-found note="Current documentation covers recent history and memory but not summarization, pruning, compaction thresholds, or continuation semantics."
ATTEMPT feature=context-usage-visibility harness=copilot-web date=2026-08-29 outcome=not-found note="No token or context meter or remaining-context indicator was documented."
ATTEMPT feature=model-fallback harness=copilot-web date=2026-08-29 outcome=not-found note="Microsoft says Copilot selects a model but does not document failure-triggered fallback, disclosure, configuration, or opt-out."
ATTEMPT feature=data-residency harness=copilot-web date=2026-08-29 outcome=not-found note="No exact storage or inference geography for current consumer Copilot web content was found; generic privacy-statement transfer language is not exact enough."
ATTEMPT feature=video-input harness=copilot-web date=2026-08-29 outcome=not-found note="The free-chat file list is non-exhaustive and current Cowork documentation has no authoritative supported-video-format table; omission cannot establish no."
ATTEMPT feature=native-plugins harness=copilot-web date=2026-08-29 outcome=not-found note="Personal plans document built-in Agents, but Agent Store installation documentation is organization-oriented and does not establish consumer installation."
ATTEMPT feature=plugin-marketplace harness=copilot-web date=2026-08-29 outcome=not-found note="Agent Store pages do not state that personal Microsoft accounts can browse and install marketplace entries."
ATTEMPT feature=role-based-access harness=copilot-web date=2026-08-29 outcome=not-found note="Consumer Notebook sharing is unavailable, generic Notebook roles do not apply, and Page or conversation links do not establish role-based access."
CONTRADICTION feature=training-data-controls harness=copilot-web date=2026-08-29 src1=https://support.microsoft.com/en-US/microsoft-copilot/microsoft-copilot-privacy-controls src2=https://support.microsoft.com/en-us/privacy/microsoft-copilot/activity-history note="The former page now identifies itself as older-app documentation; the current individual web app states that prompts, responses, and uploaded-file contents do not train foundation models. The catalog source and wording were replaced."
CONTRADICTION feature=data-retention-controls harness=copilot-web date=2026-08-29 src1=https://support.microsoft.com/en-us/Microsoft-Copilot/privacy-faq-for-microsoft-copilot src2=https://support.microsoft.com/en-us/privacy/microsoft-copilot/privacy-controls note="The older-app FAQ's 18-month duration no longer establishes the current individual web surface; current deletion controls were retained without the stale duration."

ATTEMPT feature=pdf-documents harness=gemini-web date=2026-08-29 outcome=not-found note="Current exact Gemini web upload text says documents or most file types but did not explicitly identify PDF; older localized copies were not used."
ATTEMPT feature=screenshots harness=gemini-web date=2026-08-29 outcome=not-found note="Explicit screen capture and sharing documentation applies to Android or Gemini in Chrome; ordinary image upload does not establish screenshot capture on gemini.google.com."
ATTEMPT feature=skill-project-scope harness=gemini-web date=2026-08-29 outcome=not-found note="Gemini web Skills are account-level; no repository, workspace, or project-scoped installation or discovery contract was documented."
ATTEMPT feature=multi-file-edit harness=gemini-web date=2026-08-29 outcome=not-found note="Plural file and artifact language did not establish one inspectable operation modifying multiple user files."
ATTEMPT feature=diffs-and-patches harness=gemini-web date=2026-08-29 outcome=not-found note="Canvas recent-change visibility does not establish a unified diff, patch, hunk, or apply/reject interface."
ATTEMPT feature=computer-use harness=gemini-web date=2026-08-29 outcome=not-found note="Spark documents qualified code execution and browser interaction, not a general-purpose remote desktop or unrestricted computer-use primitive."
ATTEMPT feature=secrets-management harness=gemini-web date=2026-08-29 outcome=not-found note="Browser cookies, sign-in takeover, and session state do not establish an encrypted product secret store, named secret lifecycle, injection, or redaction."
ATTEMPT feature=encryption-key-controls harness=gemini-web date=2026-08-29 outcome=not-found note="Workspace limitations involving customer-key-encrypted source content do not establish a Gemini Apps prompt/output customer-managed key contract."
CONTRADICTION feature=realtime-voice harness=gemini-web date=2026-08-29 src1=https://support.google.com/gemini/answer/15274899?co=GENIE.Platform%3DAndroid%26hl=en src2=https://support.google.com/gemini/answer/16363185?hl=en note="The exact source states Gemini Live is unavailable in the web app while the adjacent source documents Live in Chrome; the web cell remains no and the Chrome capability is not transferred."
CONTRADICTION feature=skill-references-assets harness=gemini-web date=2026-08-29 src1=https://support.google.com/gemini/answer/17102773?hl=en src2=https://support.google.com/gemini/answer/17094296?co=GENIE.Platform%3DDesktop%26hl=en note="One Skills page generically mentions spreadsheets while the upload contract excludes XLSX and rich binary formats; the cell is limited to enumerated plain-text supporting files."

ATTEMPT feature=mcp-streamable-http harness=claude-desktop date=2026-08-29 outcome=not-found note="Remote MCP is explicit, but the reviewed Claude Desktop help page does not name the Streamable HTTP transport."
ATTEMPT feature=mcp-oauth harness=claude-desktop date=2026-08-29 outcome=not-found note="Connector authorization and revocation are explicit, but the exact atomic OAuth protocol flow is not."
ATTEMPT feature=structured-output harness=claude-desktop date=2026-08-29 outcome=not-found note="Claude Desktop documents polished files and artifacts, not schema-constrained structured output."
ATTEMPT feature=video-input harness=claude-desktop date=2026-08-29 outcome=not-found note="The current supported-file list omits video but provides no explicit non-support statement."
ATTEMPT feature=subagent-context-isolation harness=claude-desktop date=2026-08-29 outcome=not-found note="Cowork documents parallel subagents but not their context-isolation boundary."
ATTEMPT feature=subagent-write-access harness=claude-desktop date=2026-08-29 outcome=not-found note="Cowork documents parallel subagents but not a distinct child-agent write-access policy."
ATTEMPT feature=subagent-approval-boundaries harness=claude-desktop date=2026-08-29 outcome=not-found note="Cowork documents approvals and parallel subagents but not how approval boundaries propagate to children."
ATTEMPT feature=subagent-lifecycle-controls harness=claude-desktop date=2026-08-29 outcome=not-found note="Cowork documents coordinated subagents but not explicit child create, pause, cancel, resume, or terminate controls."
ATTEMPT feature=subagent-mcp-access harness=claude-desktop date=2026-08-29 outcome=not-found note="Claude Desktop documents MCP and Cowork subagents separately but not child-agent MCP inheritance or isolation."

## Cycle 7 — 2026-08-29

- Phase: A completion and end-to-end release reconciliation
- Briefs: 0 new; audited all three completed Cycle 6 briefs against the catalog and original operations pack
- Cells written: 11 atomic current-track plus one family rollup; Claude Desktop Skills broad assessment corrected from partial to supported
- Feature files changed: 13; files, code execution, sandbox network, approvals, MCP client and stdio, secrets, chat and project sharing, training controls, Skills, delegation, and Agent Skills rollup
- Commit: `012585f1865f61d099b2f73ca12478f99d405774`
- Pushed: yes; fast-forwarded `origin/main` and preserved `origin/codex/research-50`
- Deployed: yes; Cloudflare version `48769686-c958-4405-98d2-adc11d35533e`
- Coverage: 1,328/3,534 assessed and direct reviewed (37.6%); delta +11
- Preview: 9/3,192 (0.3%); delta +0
- News counter: reset to 0 with entry `assessed-catalog-37-percent`
- Incidents: the first remote D1 migration request returned transient Cloudflare code 7403; identity and database listing succeeded and the immediate retry applied migration 0002. MCP stdio remains a provisional editorial inference with human verification desired; no other brief cell was omitted without a documented attempt or exact-surface exclusion

RECONCILE cycle=7 date=2026-08-29 commit=012585f1865f61d099b2f73ca12478f99d405774 pushed=origin/main deploy=48769686-c958-4405-98d2-adc11d35533e coverage=1328/3534 ci=33292153994:success d1=0002:applied correction=CMAU-SPDEJSWZJC:declined note="Production API, news, feature pages, desktop and mobile evidence expansion, correction privacy, public receipt, and moderation were verified on canmyagentuse.com."

RECONCILE ui=coverage-facelift date=2026-08-30 commit=a108b0d8e1e18e20beb7df8a0f9e0a02e4baf25b pushed=origin/main deploy=68970527-b30c-4d19-9d30-47e87850c014 coverage=1328/3534 ci=33322097863:success note="The production coverage page now presents the 50% milestone above the fold, replaces the red warning banner with a neutral evidence note, and passed desktop and narrow-browser visual verification without horizontal overflow."

RECONCILE ui=coverage-social-card date=2026-08-30 commit=46f860c7ba6f75e8031650c349e949748c7730ca pushed=origin/main deploy=889ad868-ddfb-42e9-b28f-386756e72f93 coverage=1328/3534 ci=33323694848:success asset=/social/coverage-frontier-1328.png sha256=e33d5e7df02076832aaceecf7423ee769ce1887d576511cbb512b6f1fee1f4ad note="The coverage Open Graph and X summary card now renders the live 37.6% figure with 1,328 evidenced, 2,206 responsibly unknown, and 3,534 total cells from the catalog report; production metadata, dimensions, asset bytes, and browser rendering were verified."

RECONCILE ui=coverage-social-card-v2 date=2026-08-30 commit=ce83e02d6cb051a05bbfbdd5835c9a22479160a8 pushed=origin/main deploy=def01aaf-3a0c-4306-8199-ff4488873fe3 coverage=1328/3534 ci=33324487257:success asset=/social/coverage-frontier-v2-1328.png sha256=a8cd8c71b4f852e7d697879bd54f72513dbb75ea80e7fc9b3b83a94689e91059 note="The coverage social card now leads with the question 'What can AI agents actually do?', retains 'Most of the map is still unknown' as its answer, clips the generated evidence artwork to the inner frame, insets the live-map badge, and preserves the data-driven 37.6%, 1,328 evidenced, 2,206 responsibly unknown, and 3,534 total figures; live metadata, asset bytes, deployment traffic, native dimensions, and browser rendering were verified."

## Cycle 8 — 2026-08-31

- Phase: A harness floor with an exact WebMCP boundary sweep
- Briefs: 2 integrated; Devin Desktop/Windsurf and Chrome WebMCP origin trial
- Cells written: 24 current-track; 17 Devin Desktop/Windsurf and 7 Chrome WebMCP
- Feature files changed: 22; 20 workspace/runtime, collaboration, models, governance, MCP, and browser rows plus stale non-atomic support removal from two family pages
- Identity decision: the stable `windsurf` slug now labels Devin Desktop after Cognition documented an in-place rename that preserves the product workspace and settings
- Commit: `f9d066c6f0be0689e69aa77925d9f7e0a1fc0537`
- Pushed: yes; fast-forwarded `origin/main`
- Deployed: yes; Cloudflare version `e5dca0d2-d1a0-414a-af0e-77776e21cf95`
- Coverage: 1,352/3,534 assessed and direct reviewed (38.3%); delta +24
- Preview: 9/3,192 (0.3%); delta +0
- Incidents: an uncached Astro check exposed stale authored support blocks on the Agent Skills and file-input family pages; those non-atomic blocks were removed as required by the current derived-family schema without changing atomic coverage. WebMCP rows explicitly remain experimental, tab-bound, and distinct from MCP

RECONCILE cycle=8 date=2026-08-31 commit=f9d066c6f0be0689e69aa77925d9f7e0a1fc0537 pushed=origin/main deploy=e5dca0d2-d1a0-414a-af0e-77776e21cf95 coverage=1352/3534 ci=not-observed note="Production coverage, the Devin Desktop formerly Windsurf harness identity, a representative Windsurf workspace-files cell, and the Chrome WebMCP MCP-tools boundary were cache-busted and verified on canmyagentuse.com."

## Cycle 9 — 2026-09-01

- Phase: A low-coverage harness sweep
- Briefs: 1 narrow Grok.com consumer-web first-party FAQ review
- Cells written: 1 current-track; public real-time web retrieval
- Feature files changed: 1; web fetch
- Commit: `7d5472b`
- Pushed: yes; fast-forwarded `origin/main`
- Deployed: yes; Cloudflare version `37cb25d0-7929-4325-9392-8f28074bf61e`
- Coverage: 1,353/3,534 assessed and direct reviewed (38.3%); delta +1
- Preview: 9/3,192 (0.3%); delta +0
- Incidents: no additional Grok web cells were written because the reviewed consumer FAQ's other direct claims already had evidence or did not establish the exact atomic boundary

RECONCILE cycle=9 date=2026-09-01 commit=7d5472b pushed=origin/main deploy=37cb25d0-7929-4325-9392-8f28074bf61e coverage=1353/3534 note="Production coverage and the Grok web-fetch cell were cache-busted and verified on canmyagentuse.com."

## Cycle 10 — 2026-09-01

- Phase: A low-coverage harness sweep
- Briefs: 1 Mistral first-party Vibe browser identity and exact-feature review
- Cells written: 6 current-track; Project instructions and files, MCP connectors, retention boundaries, training opt-out, and Memories
- Feature files changed: 6; custom instructions, workspace files, connectors, retention, training controls, and long-term memory
- Identity decision: Mistral documents that Le Chat is now Vibe while the `chat.mistral.ai` entry point, plan, history, and settings continue; the stable `le-chat` slug now displays Vibe (formerly Le Chat) and remains restricted to documented browser Work and Chat behavior
- Validation: narrow catalog validation, uncached `check`, 97 tests, and an uncached build passed with Astro reporting 0 errors, 0 warnings, and 0 hints
- Coverage: 1,359/3,534 assessed and direct reviewed (38.5%); delta +6

RECONCILE cycle=10 date=2026-09-01 commit=80da182 pushed=origin/main deploy=7437292e-e79e-48e3-8305-680b2221b2f1 coverage=1359/3534 note="Cache-busted production coverage reported 1,359/3,534, and the preserved /api/v1/harnesses/le-chat.json route reported Vibe (formerly Le Chat) with the scoped browser Work and Chat summary."

## Cycle 11 — 2026-09-01

- Phase: A low-coverage harness sweep
- Briefs: 1 current SpaceXAI Grok web product and Business management review
- Cells written: 4 current-track; Business Project sharing, centralized sharing policy, shared-weekly usage visibility, and shared-weekly usage-limit disclosure
- Feature files changed: 4; shared projects, organization policy controls, usage metering, and rate-limit disclosure
- Validation: narrow catalog validation, uncached `check`, 97 tests, and an uncached build passed with Astro reporting 0 errors, 0 warnings, and 0 hints
- Coverage: 1,363/3,534 assessed and direct reviewed (38.6%); delta +4

RECONCILE cycle=11 date=2026-09-01 commit=3b9b58f pushed=origin/main deploy=ccfd5090-958d-4f05-981f-a90dd9ab5357 coverage=1363/3534 note="Cache-busted production coverage reported 1,363/3,534 and Grok web reported 25/114 assessed cells."

## Cycle 12 — 2026-09-01

- Phase: A low-coverage harness sweep
- Briefs: 1 current SpaceXAI Grok Enterprise organization-management review
- Cells written: 1 current-track; identity-provider group-mapped custom RBAC roles for Enterprise Grok
- Feature files changed: 1; role-based access
- Validation: narrow catalog validation, uncached `check`, 97 tests, and an uncached build passed with Astro reporting 0 errors, 0 warnings, and 0 hints
- Coverage: 1,364/3,534 assessed and direct reviewed (38.6%); delta +1

RECONCILE cycle=12 date=2026-09-01 commit=c8531ed pushed=origin/main deploy=5ec204f6-855b-435e-9525-a49746282b19 coverage=1364/3534 note="Cache-busted production coverage reported 1,364/3,534 and Grok web reported 26/114 assessed cells."

## Cycle 13 — 2026-09-01

- Phase: A low-coverage harness sweep
- Briefs: 1 current Mistral Vibe Work web-retrieval and Scheduled Tasks review
- Cells written: 2 current-track; web search/Open URL retrieval and time-based scheduled Work runs
- Feature files changed: 2; web fetch and scheduled runs
- Validation: narrow catalog validation, uncached `check`, 97 tests, and an uncached build passed with Astro reporting 0 errors, 0 warnings, and 0 hints
- Coverage: 1,366/3,534 assessed and direct reviewed (38.7%); delta +2

RECONCILE cycle=13 date=2026-09-01 commit=968cc0b pushed=origin/main deploy=1b9ca136-4147-4a5b-acf3-7beb682b6088 coverage=1366/3534 note="Cache-busted production coverage reported 1,366/3,534 and Vibe web reported 23/114 assessed cells."

## Cycle 14 — 2026-09-02

- Phase: A low-coverage harness sweep and desert-family breaker
- Briefs: Multi-source research targeting Mistral Vibe web, Devin Desktop (Windsurf) MCP/skills/policies, and desert-breaker output-token limits (Aider, Cline)
- Cells written: 24 current-track:
  - Mistral Vibe (`le-chat`): human approval (sensitive connectors/destructive actions), code execution (sandboxed Python in Chat, TypeScript in Work), reasoning effort controls (manual toggle in Chat, auto in Work), agent skills, skill progressive loading, skill manual invocation (`/{name}`), skill user scope (personal skills), skill project scope (workspace skills), and skill references/assets (+9 cells)
  - Devin Desktop (`windsurf`): skill progressive loading, skill manual invocation (`@skill-name`), skill user scope (`~/.codeium/windsurf/skills/`), skill project scope (`.windsurf/skills/`, `.devin/skills/`, `.agents/skills/`), skill references/assets, MCP stdio, MCP Streamable HTTP, MCP legacy SSE, MCP OAuth, MCP Registry, MCP client role, organization policy controls (ADMX/profiles/JSON policies), and role-based access controls (+13 cells)
  - Desert breaker (`output-token-limit`): Aider v0.86.0 (`max_output_tokens` metadata tracking) and Cline v4.1.16 (`maxTokens` model declarations), eliminating the last zero-sourced feature in the entire catalog (+2 cells)
- Feature files changed: 18 features
- Validation: narrow catalog validation, uncached check, 97 tests, and full build passed
- Coverage: 1,390/3,534 assessed and direct reviewed (39.3%); delta +24
- Preview: 9/3,192 (0.3%); delta +0
