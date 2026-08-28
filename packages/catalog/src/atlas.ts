/**
 * Static, reviewable product data distilled from the 2026-08-28 deep-dive.
 * These records describe the catalog and proposed test surface; they are not
 * runtime certification results.
 */

export const ENVIRONMENT_PROFILES = [
  {
    id: "local-default",
    name: "Local default",
    description:
      "Default local installation with no enterprise policy overrides; exact OS and runtime belong on a future test run.",
  },
  {
    id: "hosted-default",
    name: "Hosted default",
    description:
      "Default hosted surface at the observation date; plan and tenant policy remain separate qualifiers.",
  },
  {
    id: "enterprise-managed",
    name: "Enterprise managed",
    description:
      "Managed tenant with administrator policy gates captured as explicit qualifiers.",
  },
  {
    id: "preview-enabled",
    name: "Preview enabled",
    description:
      "Surface with a documented preview or experimental feature switch enabled.",
  },
  {
    id: "air-gapped",
    name: "Air-gapped / restricted network",
    description:
      "Restricted network profile for evaluating local transports, registries, remote access, and authorization constraints.",
  },
] as const;

export const PROTOCOL_LAYERS = [
  {
    order: 1,
    name: "Workspace instructions",
    examples: "AGENTS.md and host rules",
  },
  { order: 2, name: "Reusable capability bundles", examples: "Agent Skills" },
  {
    order: 3,
    name: "Distribution packages",
    examples: "Agent Plugins and host-native packages",
  },
  { order: 4, name: "Agent to tools and context", examples: "MCP" },
  { order: 5, name: "Website to agent", examples: "WebMCP and NLWeb" },
  {
    order: 6,
    name: "Agent to interactive UI",
    examples: "MCP Apps, AG-UI, and A2UI",
  },
  { order: 7, name: "Editor to coding agent", examples: "ACP" },
  { order: 8, name: "Session host to clients", examples: "AHP" },
  { order: 9, name: "Agent to agent", examples: "A2A" },
] as const;

export const CONFORMANCE_TESTS = [
  [
    "T-MCP-001",
    "MCP initialize and protocolVersion negotiation",
    "MCP",
    "mcp-tools",
    "deterministic fixture",
    "required",
  ],
  [
    "T-MCP-002",
    "tools/list and tools/call round trip",
    "MCP",
    "mcp-tools",
    "deterministic fixture",
    "required",
  ],
  [
    "T-MCP-003",
    "resources/list and resources/read",
    "MCP",
    "mcp-resources",
    "deterministic fixture",
    "optional",
  ],
  [
    "T-MCP-004",
    "prompts/list and prompts/get",
    "MCP",
    "mcp-prompts",
    "deterministic fixture",
    "optional",
  ],
  [
    "T-MCP-005",
    "sampling/createMessage request from server to client",
    "MCP",
    "mcp-sampling",
    "deterministic fixture",
    "optional",
  ],
  [
    "T-MCP-006",
    "Elicitation form request and response",
    "MCP",
    "mcp-elicitation",
    "deterministic fixture",
    "optional",
  ],
  [
    "T-MCP-007",
    "roots/list request from server to client",
    "MCP",
    "mcp-roots",
    "deterministic fixture",
    "optional",
  ],
  [
    "T-MCP-008",
    "Task-augmented request lifecycle",
    "MCP",
    "mcp-tasks",
    "deterministic fixture",
    "experimental",
  ],
  [
    "T-MCP-009",
    "stdio framing and stderr isolation",
    "MCP",
    "mcp-stdio",
    "fixture process",
    "required",
  ],
  [
    "T-MCP-010",
    "Streamable HTTP session lifecycle",
    "MCP",
    "mcp-streamable-http",
    "fixture HTTP server",
    "required",
  ],
  [
    "T-MCP-011",
    "OAuth discovery and authorization flow",
    "MCP",
    "mcp-oauth",
    "isolated auth fixture",
    "optional",
  ],
  [
    "T-MCP-012",
    "notifications/tools/list_changed refresh",
    "MCP",
    "mcp-tools-list-changed",
    "deterministic fixture",
    "optional",
  ],
  [
    "T-APP-001",
    "ui resource discovery and sandbox render",
    "MCP Apps",
    "mcp-apps",
    "sandboxed fixture",
    "optional",
  ],
  [
    "T-SKL-001",
    "SKILL.md frontmatter validation",
    "Agent Skills",
    "skills",
    "static fixture",
    "required",
  ],
  [
    "T-SKL-002",
    "Metadata-only startup discovery",
    "Agent Skills",
    "skills-progressive",
    "instrumented fixture",
    "recommended",
  ],
  [
    "T-SKL-003",
    "Script execution relative to skill root",
    "Agent Skills",
    "skills-scripts",
    "sandboxed fixture",
    "optional",
  ],
  [
    "T-PLG-001",
    "plugin.json Agent Plugins 1.0 validation",
    "Agent Plugins",
    "plugins",
    "static fixture",
    "required",
  ],
  [
    "T-PLG-002",
    "mcp.json PLUGIN_ROOT resolution",
    "Agent Plugins",
    "plugins-mcp",
    "sandboxed fixture",
    "optional",
  ],
  [
    "T-INS-001",
    "Root AGENTS.md discovery",
    "AGENTS.md",
    "agents-md",
    "repository fixture",
    "recommended",
  ],
  [
    "T-INS-002",
    "Nested AGENTS.md precedence",
    "AGENTS.md",
    "agents-md-nested",
    "repository fixture",
    "recommended",
  ],
  [
    "T-ACP-001",
    "ACP initialize, session, and prompt JSON-RPC flow",
    "ACP",
    "acp-agent",
    "subprocess fixture",
    "required",
  ],
  [
    "T-AHP-001",
    "AHP session subscribe and resume",
    "AHP",
    "ahp-host",
    "session fixture",
    "preview",
  ],
  [
    "T-WEB-001",
    "navigator.modelContext tool registration",
    "WebMCP",
    "webmcp",
    "browser fixture",
    "draft",
  ],
  [
    "T-A2A-001",
    "Agent Card discovery and task send",
    "A2A",
    "a2a",
    "HTTP fixture",
    "optional",
  ],
].map(
  ([id, name, specification, featureId, fixtureType, requirementLevel]) => ({
    id,
    name,
    specification,
    featureId,
    fixtureType,
    requirementLevel,
    executionStatus: "proposed-not-run" as const,
  })
);

export const CONTRADICTIONS = [
  {
    id: "plugin-format-scope",
    topic: "Agent Plugins support in ChatGPT and Codex",
    sourceA: {
      id: "S-050",
      claim:
        "The Agent Plugins compatible-client list names ChatGPT and Codex for the open package format.",
      href: "https://agent-plugins.org/clients",
    },
    sourceB: {
      id: "S-090",
      claim:
        "OpenAI first-party documentation describes a vendor package centered on .codex-plugin/plugin.json.",
      href: "https://learn.chatgpt.com/docs/build-plugins",
    },
    handling:
      "Keep open-standard and vendor-native package assertions separate; do not infer package-level conformance from either statement alone.",
    status: "open",
  },
  {
    id: "mcp-brand-claim",
    topic: "MCP support as a single claim",
    sourceA: {
      id: "S-019",
      claim:
        "MCP defines independent client and server primitives, transports, and utilities.",
      href: "https://modelcontextprotocol.io/specification/2025-11-25",
    },
    sourceB: {
      id: "S-136",
      claim:
        "Zed documents implemented MCP primitives and missing coverage separately.",
      href: "https://zed.dev/docs/ai/mcp",
    },
    handling:
      "Decompose MCP into atomic features and never publish one brand-level boolean.",
    status: "resolved-by-model",
  },
  {
    id: "hosted-version-identity",
    topic: "Hosted product versioning",
    sourceA: {
      id: "method",
      claim:
        "Browser compatibility normally targets enumerable product releases.",
      href: "https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md",
    },
    sourceB: {
      id: "S-088",
      claim:
        "Hosted agent surfaces can change without a stable public build identifier.",
      href: "https://learn.chatgpt.com/docs/extend/mcp",
    },
    handling:
      "Use dated hosted observations and evidence timestamps; never fabricate releases.",
    status: "open",
  },
  {
    id: "plugin-hooks-portability",
    topic: "Plugin hooks portability",
    sourceA: {
      id: "S-113",
      claim:
        "VS Code supports host-specific plugin namespaces and compatible hook shapes.",
      href: "https://code.visualstudio.com/docs/agent-customization/agent-plugins",
    },
    sourceB: {
      id: "S-053",
      claim:
        "Agent Plugins 1.0 does not define hooks as a portable core component.",
      href: "https://agent-plugins.org/specification/1.0/extensions",
    },
    handling:
      "Represent hooks as host extensions instead of portable Agent Plugins core support.",
    status: "resolved-by-model",
  },
  {
    id: "gemini-acp-revision",
    topic: "Gemini ACP naming and version",
    sourceA: {
      id: "S-132",
      claim: "Gemini CLI exposes an ACP mode in its configuration surface.",
      href: "https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/configuration.md",
    },
    sourceB: {
      id: "S-065",
      claim:
        "ACP evolves independently and remote transport work remains in progress.",
      href: "https://github.com/agentclientprotocol/agent-client-protocol/discussions",
    },
    handling:
      "Require protocol revision, transport, and role instead of treating a flag as full conformance.",
    status: "open",
  },
] as const;

export const ECOSYSTEM_CHANGES = [
  [
    "2024-11-05",
    "MCP",
    "Legacy HTTP and SSE transport family is referenced by later compatibility documentation",
    "historical",
    "https://modelcontextprotocol.io/specification/2025-11-25/basic/transports",
  ],
  [
    "2025-06-23",
    "A2A",
    "Google donated A2A to the Linux Foundation",
    "governance",
    "https://developers.googleblog.com/en/google-cloud-donates-a2a-to-linux-foundation/",
  ],
  [
    "2025-08-27",
    "ACP",
    "Zed described bring-your-own-agent integration and ACP",
    "announcement",
    "https://zed.dev/blog/bring-your-own-agent-to-zed",
  ],
  [
    "2025-10-02",
    "ACP",
    "Zed published an ACP ecosystem progress report",
    "ecosystem",
    "https://zed.dev/blog/acp-progress-report",
  ],
  [
    "2025-10-16",
    "ACP",
    "Codex integration in Zed shipped through ACP",
    "product",
    "https://zed.dev/blog/codex-is-live-in-zed",
  ],
  [
    "2025-11-06",
    "ACP",
    "Zed Agent Extensions simplified ACP agent distribution",
    "product",
    "https://zed.dev/blog/agent-extensions",
  ],
  [
    "2025-11-21",
    "MCP Apps",
    "MCP Apps proposal was announced",
    "proposal",
    "https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/",
  ],
  [
    "2025-11-25",
    "MCP",
    "MCP revision added tasks and expanded elicitation and sampling",
    "standard",
    "https://modelcontextprotocol.io/specification/2025-11-25/changelog",
  ],
  [
    "2026-01-26",
    "MCP Apps",
    "Stable MCP Apps extension revision was published",
    "standard",
    "https://modelcontextprotocol.io/extensions/apps/specification",
  ],
  [
    "2026-01-28",
    "ACP",
    "The ACP Registry went live",
    "registry",
    "https://zed.dev/blog/acp-registry",
  ],
  [
    "2026-02-05",
    "VS Code",
    "MCP Apps and Agent Skills reached documented VS Code milestones",
    "product",
    "https://code.visualstudio.com/docs/copilot/chat/mcp-servers",
  ],
  [
    "2026-06-08",
    "A2UI",
    "A2UI 1.0 candidate was updated",
    "standard",
    "https://github.com/a2ui-project/a2ui/blob/main/specification/v1_0/docs/a2ui_protocol.md",
  ],
  [
    "2026-08-04",
    "Kiro",
    "Kiro documented Agent Skills and Agent Plugins-based Powers across surfaces",
    "product",
    "https://kiro.dev/docs/skills/",
  ],
  [
    "2026-08-26",
    "WebMCP",
    "WebMCP Draft Community Group Report was dated August 26, 2026",
    "standard",
    "https://webmachinelearning.github.io/webmcp/",
  ],
  [
    "2026-08-26",
    "AHP",
    "VS Code announced Agent Host and the open Agent Host Protocol",
    "standard-product",
    "https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture",
  ],
  [
    "2026-08-28",
    "Can My Agent Use",
    "Evidence Atlas research snapshot and product-model review",
    "research",
    "/methodology",
  ],
].map(([date, family, event, type, href]) => ({
  date,
  family,
  event,
  type,
  href,
}));

export const OPEN_GOVERNANCE_QUESTIONS = [
  [
    "Q-001",
    "Hosted release identity",
    "How should continuously deployed web and cloud-agent surfaces expose immutable compatibility targets?",
    "data-model",
    "high",
  ],
  [
    "Q-002",
    "Normative feature profiles",
    "Who approves required child features for a parent compatibility label?",
    "governance",
    "high",
  ],
  [
    "Q-003",
    "Conformance authority",
    "Which badge language may apply to project tests, vendor attestations, and community reproductions?",
    "governance",
    "high",
  ],
  [
    "Q-004",
    "Plan and policy matrices",
    "How far should public grids split by plan, policy, region, feature flag, and administrator configuration?",
    "ux",
    "medium",
  ],
  [
    "Q-005",
    "Remote authorization safety",
    "What credential and isolation model is acceptable for automated OAuth and remote MCP tests?",
    "security",
    "high",
  ],
  [
    "Q-006",
    "Proprietary feature scope",
    "Should vendor-native rules, hooks, and package formats be peers or a separate host-extension layer?",
    "taxonomy",
    "medium",
  ],
  [
    "Q-007",
    "Evidence freshness",
    "Which expiry windows apply to hosted observations and version-pinned local claims?",
    "operations",
    "medium",
  ],
  [
    "Q-008",
    "Licensing",
    "Which sourced facts may be redistributed and which should only be paraphrased and cited?",
    "legal",
    "high",
  ],
  [
    "Q-009",
    "Community reports",
    "What corroboration is required before a report affects the public support state?",
    "governance",
    "medium",
  ],
  [
    "Q-010",
    "Test fixtures",
    "Can standards projects share or review fixtures so tests match normative intent?",
    "partnerships",
    "medium",
  ],
].map(([id, title, question, owner, priority]) => ({
  id,
  title,
  question,
  owner,
  priority,
}));
