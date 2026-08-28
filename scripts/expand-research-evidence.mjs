import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = resolve(
  "md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28"
);
const dataRoot = resolve(root, "data");
const seedPath = resolve(dataRoot, "compatibility-seed.json");
const seed = JSON.parse(await readFile(seedPath, "utf8"));
const verifiedAt = seed.research_cutoff;
const retrievedAt = "2026-08-28T23:30:00Z";
const archiveFailure =
  "[archive-failed: automated archive submission unavailable in this environment]";

// OpenWork was already present in the curated web catalog, but the research
// package did not include it as a first-class vendor/product/surface. Add the
// publisher's desktop product surface before building the full feature grid.
if (!seed.vendors.some(({ vendor_id }) => vendor_id === "openwork")) {
  seed.vendors.push({
    vendor_id: "openwork",
    vendor_name: "OpenWork",
    website: "https://openworklabs.com",
    coverage_tier: "A",
    inclusion_basis: "first-party documentation and publisher repository",
    category: "agent-harness",
    notes:
      "OpenWork by Different AI; the product name is used nominatively and does not imply catalog affiliation or certification.",
  });
}
if (!seed.products.some(({ product_id }) => product_id === "openwork")) {
  seed.products.push({
    product_id: "openwork",
    vendor_id: "openwork",
    product_name: "OpenWork",
    category: "desktop-agent-harness",
    lifecycle: "active",
    source_key: "S-306",
    notes: "First-party OpenWork desktop product powered by OpenCode.",
  });
}
if (
  !seed.surfaces.some(({ surface_id }) => surface_id === "openwork-desktop")
) {
  seed.surfaces.push({
    surface_id: "openwork-desktop",
    product_id: "openwork",
    surface_name: "OpenWork Desktop",
    surface_type: "desktop-agent",
    version_or_observation: "observed 2026-08-28",
    availability: "ga",
    coverage_tier: "A",
    source_key: "S-306",
    registry_role: "",
    registry_version: "",
    notes:
      "First-party desktop surface; macOS and Linux are documented directly, while Windows distribution conditions differ.",
  });
}

const openworkVendor = seed.vendors.find(
  ({ vendor_id }) => vendor_id === "openwork"
);
const openworkProduct = seed.products.find(
  ({ product_id }) => product_id === "openwork"
);
const openworkSurface = seed.surfaces.find(
  ({ surface_id }) => surface_id === "openwork-desktop"
);
openworkSurface.version_or_observation = "observed 2026-08-28";
for (const feature of seed.features) {
  const existingCell = seed.compatibility_cells.find(
    (cell) =>
      cell.surface_id === openworkSurface.surface_id &&
      cell.feature_id === feature.feature_id
  );
  if (existingCell) {
    existingCell.version_or_observation =
      openworkSurface.version_or_observation;
    continue;
  }
  seed.compatibility_cells.push({
    vendor_id: openworkVendor.vendor_id,
    vendor_name: openworkVendor.vendor_name,
    product_id: openworkProduct.product_id,
    product_name: openworkProduct.product_name,
    surface_id: openworkSurface.surface_id,
    surface_name: openworkSurface.surface_name,
    surface_type: openworkSurface.surface_type,
    version_or_observation: openworkSurface.version_or_observation,
    surface_availability: openworkSurface.availability,
    coverage_tier: openworkSurface.coverage_tier,
    feature_id: feature.feature_id,
    feature_group: feature.feature_group,
    feature_name: feature.feature_name,
    primary_status: "unknown",
    status_detail: "unknown",
    assertion_count: 0,
    evidence_methods: "",
    confidence: "",
    environment_scopes: "",
    qualifiers: "",
    source_keys: "",
    notes: "",
    last_verified_at: verifiedAt,
  });
}

const newSources = [
  [
    "S-290",
    "Overview of customizing GitHub Copilot CLI",
    "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/overview",
    "GitHub",
  ],
  [
    "S-291",
    "GitHub Copilot CLI command reference",
    "https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference",
    "GitHub",
  ],
  [
    "S-292",
    "GitHub Copilot CLI plugin reference",
    "https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference",
    "GitHub",
  ],
  [
    "S-293",
    "Automate with GitHub Copilot CLI",
    "https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli",
    "GitHub",
  ],
  [
    "S-294",
    "Adding custom instructions for GitHub Copilot CLI",
    "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions",
    "GitHub",
  ],
  [
    "S-295",
    "Cline MCP overview",
    "https://docs.cline.bot/mcp/mcp-overview",
    "Cline",
  ],
  [
    "S-296",
    "Cline Skills",
    "https://docs.cline.bot/customization/skills",
    "Cline",
  ],
  [
    "S-297",
    "Cline Plugins",
    "https://docs.cline.bot/customization/plugins",
    "Cline",
  ],
  [
    "S-298",
    "Cline Hooks",
    "https://docs.cline.bot/customization/hooks",
    "Cline",
  ],
  [
    "S-299",
    "Cline Scheduled Agents",
    "https://docs.cline.bot/sdk/guides/scheduled-agents",
    "Cline",
  ],
  [
    "S-300",
    "Cline Connectors",
    "https://docs.cline.bot/cli/connectors",
    "Cline",
  ],
  [
    "S-301",
    "Aider options reference",
    "https://aider.chat/docs/config/options.html",
    "Aider",
  ],
  [
    "S-302",
    "Aider coding conventions",
    "https://aider.chat/docs/usage/conventions.html",
    "Aider",
  ],
  [
    "S-303",
    "Aider in-chat commands",
    "https://aider.chat/docs/usage/commands.html",
    "Aider",
  ],
  [
    "S-304",
    "About GitHub Copilot plugins",
    "https://docs.github.com/en/copilot/concepts/agents/about-plugins",
    "GitHub",
  ],
  [
    "S-305",
    "Administering Copilot CLI for your enterprise",
    "https://docs.github.com/en/copilot/how-tos/copilot-cli/administer-copilot-cli-for-your-enterprise",
    "GitHub",
  ],
  [
    "S-306",
    "OpenWork publisher repository",
    "https://github.com/different-ai/openwork",
    "OpenWork",
    "github",
  ],
  [
    "S-307",
    "Get started with OpenWork",
    "https://openworklabs.com/docs/start-here/get-started",
    "OpenWork",
  ],
  [
    "S-308",
    "Add an MCP server in OpenWork",
    "https://openworklabs.com/docs/start-here/connect-your-stack/add-an-mcp-server",
    "OpenWork",
  ],
  [
    "S-309",
    "Import a skill into OpenWork",
    "https://openworklabs.com/docs/start-here/do-work-with-it/import-a-skill",
    "OpenWork",
  ],
  [
    "S-310",
    "Control the browser with OpenWork",
    "https://openworklabs.com/docs/start-here/do-work-with-it/control-the-browser",
    "OpenWork",
  ],
  [
    "S-311",
    "Get started with OpenWork Cloud",
    "https://openworklabs.com/docs/cloud/get-started",
    "OpenWork",
  ],
  [
    "S-312",
    "OpenWork architecture",
    "https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md",
    "OpenWork",
    "github",
  ],
  [
    "S-313",
    "OpenWork UI MCP control profile",
    "https://github.com/different-ai/openwork/blob/dev/docs/mcp-ui-control-profile.md",
    "OpenWork",
    "github",
  ],
  ["S-314", "OpenWork Connect", "https://openwork.studio/connect", "OpenWork"],
  [
    "S-315",
    "OpenWork roadmap",
    "https://openworklabs.com/docs/roadmap",
    "OpenWork",
  ],
  [
    "S-316",
    "Kiro subagents",
    "https://kiro.dev/docs/custom-agents/subagents/",
    "Kiro",
  ],
  ["S-317", "How Kiro works", "https://kiro.dev/docs/how-kiro-works/", "Kiro"],
  [
    "S-318",
    "Kiro configuration scopes",
    "https://kiro.dev/docs/configuration/",
    "Kiro",
  ],
  [
    "S-319",
    "Kiro enterprise governance",
    "https://kiro.dev/docs/enterprise/governance/",
    "Kiro",
  ],
  [
    "S-320",
    "OpenHands skills overview and support matrix",
    "https://docs.openhands.dev/overview/skills",
    "OpenHands",
  ],
  [
    "S-321",
    "OpenHands SDK plugins",
    "https://docs.openhands.dev/sdk/guides/plugins",
    "OpenHands",
  ],
  [
    "S-322",
    "OpenCode rules and AGENTS.md",
    "https://opencode.ai/docs/rules",
    "OpenCode",
  ],
  [
    "S-323",
    "Warp CLI MCP servers",
    "https://docs.warp.dev/reference/cli/mcp-servers",
    "Warp",
  ],
];

for (const [
  source_key,
  title,
  url,
  publisher,
  sourceType = "vendor-doc",
] of newSources) {
  if (seed.sources.some((source) => source.source_key === source_key)) continue;
  seed.sources.push({
    source_key,
    title,
    url,
    archive_url: archiveFailure,
    publisher,
    published_at: "live docs",
    retrieved_at_utc: retrievedAt,
    source_type: sourceType,
    role: "canonical",
    confidence: "high",
    notes: "",
  });
}

const claims = [
  // GitHub Copilot CLI: exact CLI customization and orchestration documentation.
  [
    "copilot-cli",
    "mcp.client",
    "supported",
    "S-290;S-291",
    "MCP servers add external tools and data sources to the CLI.",
  ],
  [
    "copilot-cli",
    "mcp.tools",
    "supported",
    "S-290;S-291",
    "The CLI discovers and invokes tools supplied by configured MCP servers.",
  ],
  [
    "copilot-cli",
    "agent-skills.core",
    "supported",
    "S-290;S-291",
    "CLI skills are SKILL.md packages with instructions, scripts, and resources.",
  ],
  [
    "copilot-cli",
    "agent-skills.standard-paths",
    "supported",
    "S-291",
    "The CLI discovers project and personal skills in .agents/skills in addition to GitHub- and Claude-specific paths.",
  ],
  [
    "copilot-cli",
    "agent-skills.scripts-assets",
    "supported",
    "S-290;S-291",
    "Documented skill packages may include scripts and resources.",
  ],
  [
    "copilot-cli",
    "agent-plugins.core",
    "supported",
    "S-292",
    "The CLI plugin manifest accepts the Agent Plugins/Open Plugin Spec 1.0 schema.",
  ],
  [
    "copilot-cli",
    "agent-plugins.skills",
    "supported",
    "S-292",
    "Plugin manifests can package SKILL.md directories.",
  ],
  [
    "copilot-cli",
    "agent-plugins.mcp",
    "supported",
    "S-292",
    "Plugin manifests can package MCP server configuration.",
  ],
  [
    "copilot-cli",
    "instructions.agents-md",
    "supported",
    "S-291;S-294",
    "AGENTS.md is discovered from documented repository and working-directory scopes.",
  ],
  [
    "copilot-cli",
    "instructions.rules",
    "supported",
    "S-290;S-294",
    "Repository, user, and path-specific persistent instruction files are documented.",
  ],
  [
    "copilot-cli",
    "hooks",
    "supported",
    "S-290;S-291",
    "Lifecycle hooks can run shell commands at session, prompt, task, and error events.",
  ],
  [
    "copilot-cli",
    "subagents",
    "supported",
    "S-290;S-291",
    "Custom agents run as isolated subagents and the CLI includes task-oriented subagent types.",
  ],
  [
    "copilot-cli",
    "subagents.nested",
    "supported",
    "S-291",
    "The CLI documents a configurable subagent tree depth, with a default depth greater than one.",
  ],
  [
    "copilot-cli",
    "subagents.mcp-access",
    "supported",
    "S-292",
    "Plugin-provided agent packages can include MCP server configuration; access remains subject to the agent tool profile.",
  ],
  [
    "copilot-cli",
    "subagents.write-access",
    "supported",
    "S-290;S-291",
    "General-purpose and user-defined subagents can be assigned toolsets that include project modification tools.",
  ],
  [
    "copilot-cli",
    "plugins.native",
    "supported",
    "S-290;S-292",
    "Installable CLI plugins bundle agents, skills, hooks, commands, and integrations.",
  ],
  [
    "copilot-cli",
    "marketplace-registry",
    "supported",
    "S-290;S-292",
    "Plugins can be installed directly or through configured plugin marketplaces.",
  ],
  [
    "copilot-cli",
    "automation.headless",
    "supported",
    "S-293",
    "GitHub documents programmatic, scripted, and Actions workflows for Copilot CLI.",
  ],
  [
    "copilot-cli",
    "governance.org-policy",
    "supported",
    "S-305",
    "Enterprise and organization controls cover CLI enablement, models, custom agents, MCP registries and allowlists, cloud delegation, and audit logging.",
  ],
  [
    "copilot-cli",
    "custom-agents",
    "supported",
    "S-290;S-291",
    "Named custom agents can define expertise, instructions, models, and toolsets.",
  ],

  // GitHub explicitly scopes portable plugins to the cloud-agent surface too.
  [
    "copilot-cloud-agent",
    "agent-plugins.core",
    "supported",
    "S-304",
    "GitHub documents plugin packages as supported by Copilot cloud agent.",
  ],
  [
    "copilot-cloud-agent",
    "agent-plugins.skills",
    "supported",
    "S-304",
    "Cloud-agent plugins may package SKILL.md skills.",
  ],
  [
    "copilot-cloud-agent",
    "agent-plugins.mcp",
    "supported",
    "S-304",
    "Cloud-agent plugins may package MCP server configuration.",
  ],
  [
    "copilot-cloud-agent",
    "hooks",
    "supported",
    "S-304",
    "Cloud-agent plugin packages may include event hooks.",
  ],
  [
    "copilot-cloud-agent",
    "plugins.native",
    "supported",
    "S-304",
    "Copilot cloud agent loads installable Copilot plugin packages.",
  ],
  [
    "copilot-cloud-agent",
    "marketplace-registry",
    "supported",
    "S-304",
    "Cloud-agent plugins can be enabled from registered marketplaces in repository settings.",
  ],
  [
    "copilot-cloud-agent",
    "custom-agents",
    "supported",
    "S-304",
    "Cloud-agent plugins may include specialized custom-agent definitions.",
  ],

  // Cline CLI: CLI-specific docs distinguish this surface from the extension.
  [
    "cline-cli",
    "mcp.client",
    "supported",
    "S-092;S-295",
    "Cline documents MCP server use in both its CLI and VS Code extension.",
  ],
  [
    "cline-cli",
    "mcp.tools",
    "supported",
    "S-295",
    "Cline CLI can discover and execute tools exposed by MCP servers.",
  ],
  [
    "cline-cli",
    "mcp.resources",
    "supported",
    "S-295",
    "Cline documents MCP resources and an access_mcp_resource tool for the CLI harness.",
  ],
  [
    "cline-cli",
    "agent-skills.core",
    "supported",
    "S-092;S-296",
    "Cline CLI discovers on-demand SKILL.md packages.",
  ],
  [
    "cline-cli",
    "agent-skills.standard-paths",
    "partial",
    "S-296",
    "SKILL.md is supported, but discovery uses Cline- and Claude-specific paths rather than the vendor-neutral .agents path.",
  ],
  [
    "cline-cli",
    "agent-skills.scripts-assets",
    "supported",
    "S-296",
    "Cline skills can bundle docs, templates, resources, and executable scripts.",
  ],
  [
    "cline-cli",
    "instructions.rules",
    "supported",
    "S-092",
    "The CLI reference documents global and project rules directories.",
  ],
  [
    "cline-cli",
    "hooks",
    "supported",
    "S-092;S-298",
    "Eight lifecycle hook types are explicitly available in Cline CLI.",
  ],
  [
    "cline-cli",
    "plugins.native",
    "supported",
    "S-092;S-297",
    "Cline CLI installs native plugins from npm, Git, or local paths.",
  ],
  [
    "cline-cli",
    "marketplace-registry",
    "supported",
    "S-295;S-297",
    "The CLI can install MCP integrations from Cline Marketplace and plugins from the npm registry.",
  ],
  [
    "cline-cli",
    "automation.headless",
    "supported",
    "S-299",
    "Persistent cron schedules run new CLI agent sessions independently of a client application.",
  ],
  [
    "cline-cli",
    "session.handoff",
    "supported",
    "S-295;S-300",
    "CLI connectors create or continue the same agent session from messaging surfaces.",
  ],
  [
    "cline-cli",
    "custom-agents",
    "supported",
    "S-092",
    "Project configuration includes agents.yaml agent definitions.",
  ],

  // Cline extension capabilities that its current first-party docs state directly.
  [
    "cline-vscode",
    "mcp.resources",
    "supported",
    "S-091;S-295",
    "The extension exposes access_mcp_resource for configured MCP servers.",
  ],
  [
    "cline-vscode",
    "agent-skills.scripts-assets",
    "supported",
    "S-093;S-296",
    "Cline skills can bundle docs, templates, resources, and executable scripts.",
  ],
  [
    "cline-vscode",
    "plugins.native",
    "unsupported",
    "S-297",
    "Cline states that its native plugin system currently does not apply to the VS Code extension.",
  ],
  [
    "cline-vscode",
    "marketplace-registry",
    "supported",
    "S-295",
    "The extension can discover and install integrations from Cline's MCP Marketplace.",
  ],

  // Aider: non-protocol capabilities documented on the exact CLI surface.
  [
    "aider-cli",
    "instructions.rules",
    "supported",
    "S-302",
    "Convention files can be loaded persistently through .aider.conf.yml.",
  ],
  [
    "aider-cli",
    "automation.headless",
    "supported",
    "S-301",
    "--message and --message-file process one prompt and exit without interactive chat.",
  ],
  [
    "aider-cli",
    "session.handoff",
    "partial",
    "S-303",
    "The CLI can export context for manual paste into a web UI; this is a clipboard handoff, not synchronized session state.",
  ],

  // OpenWork Desktop: first-party desktop, server, Cloud, and extension docs.
  [
    "openwork-desktop",
    "mcp.client",
    "supported",
    "S-307;S-308",
    "OpenWork Desktop can add and consume custom MCP servers at workspace or global scope.",
  ],
  [
    "openwork-desktop",
    "mcp.server",
    "supported",
    "S-313",
    "The companion openwork-ui-mcp package exposes the running desktop app as a semantic MCP server; macOS is the primary documented platform.",
  ],
  [
    "openwork-desktop",
    "mcp.tools",
    "supported",
    "S-307;S-308",
    "Configured MCP servers expose tools that OpenWork can use in agent sessions.",
  ],
  [
    "openwork-desktop",
    "mcp.transport.stdio",
    "supported",
    "S-313",
    "The documented openwork-ui-mcp companion runs as a stdio MCP server and bridges to the local desktop app.",
  ],
  [
    "openwork-desktop",
    "mcp.auth.oauth",
    "partial",
    "S-308",
    "OpenWork documents OAuth MCP setup with dynamic client registration; servers that do not support dynamic registration are currently excluded.",
  ],
  [
    "openwork-desktop",
    "agent-skills.core",
    "supported",
    "S-306;S-309",
    "The desktop app lists, imports, creates, installs, syncs, and loads SKILL.md packages.",
  ],
  [
    "openwork-desktop",
    "agent-skills.standard-paths",
    "partial",
    "S-309",
    "SKILL.md packages are supported, but the native documented workspace path is .opencode/skills rather than the vendor-neutral .agents path.",
  ],
  [
    "openwork-desktop",
    "agent-skills.scripts-assets",
    "supported",
    "S-306;S-102",
    "OpenWork inherits OpenCode's skill runtime, which exposes supporting skill files, while the desktop manages the containing skill directories.",
  ],
  [
    "openwork-desktop",
    "agent-plugins.core",
    "unsupported",
    "S-315",
    "OpenWork's roadmap lists importing Claude-compatible plugin and marketplace manifests as future work; native OpenCode plugins are a separate supported system.",
  ],
  [
    "openwork-desktop",
    "agent-plugins.skills",
    "unsupported",
    "S-315",
    "Packaging skills through the portable Agent Plugins manifest is roadmap work; standalone OpenWork skills are supported separately.",
  ],
  [
    "openwork-desktop",
    "agent-plugins.mcp",
    "unsupported",
    "S-315",
    "Importing MCP configuration from portable Agent Plugins manifests is listed as future work; direct MCP configuration is supported separately.",
  ],
  [
    "openwork-desktop",
    "instructions.agents-md",
    "supported",
    "S-306;S-322",
    "OpenWork exposes the underlying OpenCode runtime, which loads workspace and global AGENTS.md instructions.",
  ],
  [
    "openwork-desktop",
    "instructions.rules",
    "supported",
    "S-306;S-322",
    "The OpenCode-backed workspace supports persistent AGENTS.md and configured instruction sources.",
  ],
  [
    "openwork-desktop",
    "hooks",
    "supported",
    "S-306;S-105",
    "OpenWork loads native OpenCode plugins, whose documented extension API includes lifecycle and tool hooks.",
  ],
  [
    "openwork-desktop",
    "subagents",
    "supported",
    "S-312",
    "OpenWork's documented OpenCode primitives include agents that execute tasks with different models and isolated specialization.",
  ],
  [
    "openwork-desktop",
    "subagents.mcp-access",
    "supported",
    "S-312;S-104",
    "OpenWork agents can interact with MCPs, and the inherited OpenCode agent permission model can expose MCP tools per agent.",
  ],
  [
    "openwork-desktop",
    "subagents.write-access",
    "supported",
    "S-312;S-104",
    "OpenWork inherits OpenCode agent-specific tool permissions, including editable workspace access when allowed.",
  ],
  [
    "openwork-desktop",
    "plugins.native",
    "supported",
    "S-306;S-312",
    "OpenWork manages native OpenCode plugins through the desktop Skills area and opencode.json.",
  ],
  [
    "openwork-desktop",
    "marketplace-registry",
    "partial",
    "S-309;S-312",
    "OpenWork supports curated skill lists, share links, organization skill hubs, and manual sources; the architecture still describes broader registry search as future work.",
  ],
  [
    "openwork-desktop",
    "automation.headless",
    "supported",
    "S-306",
    "The first-party OpenWork Orchestrator CLI runs OpenCode and OpenWork server without the desktop UI and supports automatic approval mode.",
  ],
  [
    "openwork-desktop",
    "automation.cloud-agent",
    "supported",
    "S-306;S-311",
    "Hosted OpenWork Cloud workers continue agent work remotely and connect back to the desktop client.",
  ],
  [
    "openwork-desktop",
    "governance.org-policy",
    "partial",
    "S-311;S-314",
    "OpenWork Cloud and Connect document organization identity, roles, allowed domains, desktop restrictions, allowlists, policy, and audit controls; these controls require the hosted organization layer.",
  ],
  [
    "openwork-desktop",
    "session.handoff",
    "supported",
    "S-306;S-311",
    "The desktop client connects to local or hosted workers and presents the same server-owned sessions across those connection modes.",
  ],
  [
    "openwork-desktop",
    "computer-use",
    "supported",
    "S-310",
    "The first-party OpenWork Browser can open pages, click, fill forms, read content, and take screenshots; this does not imply general operating-system control.",
  ],
  [
    "openwork-desktop",
    "custom-agents",
    "supported",
    "S-306;S-312",
    "OpenWork uses OpenCode's configurable agent primitive and server-owned workspace configuration.",
  ],

  // Kiro's current docs publish exact four-surface subagent and handoff tables.
  ...["kiro-ide", "kiro-cli", "kiro-web", "kiro-mobile"].flatMap((surface) => [
    [
      surface,
      "subagents",
      "supported",
      "S-316",
      "Kiro documents automatic, explicit, and parallel subagent execution on IDE, CLI, Web, and Mobile.",
    ],
    [
      surface,
      "subagents.mcp-access",
      "supported",
      "S-316",
      "Kiro subagents share configured MCP servers and the default subagent receives configured MCP tools.",
    ],
    [
      surface,
      "subagents.write-access",
      "supported",
      "S-316",
      "Kiro's default subagent includes read, write, and shell tools; custom-agent permissions can narrow this access.",
    ],
    [
      surface,
      "session.handoff",
      "supported",
      "S-317",
      "Account-scoped cloud sessions can be started on one Kiro surface and resumed from another.",
    ],
    [
      surface,
      "automation.cloud-agent",
      "supported",
      "S-317;S-319",
      "Kiro cloud sessions run in a managed sandbox and remain reachable across surfaces; availability is preview- and policy-gated for some organizations.",
    ],
  ]),
  [
    "kiro-ide",
    "custom-agents",
    "supported",
    "S-316;S-318",
    "IDE supports project and global custom agents and can invoke them as subagents.",
  ],
  [
    "kiro-cli",
    "custom-agents",
    "supported",
    "S-316;S-318",
    "CLI supports project and global custom agents and can invoke them as subagents.",
  ],
  [
    "kiro-cli",
    "governance.org-policy",
    "supported",
    "S-319",
    "Organization administrators can govern CLI cloud-session availability along with other enterprise controls.",
  ],
  [
    "kiro-web",
    "governance.org-policy",
    "supported",
    "S-319",
    "Organization administrators must enable Cloud Sessions before governed users can start Kiro Web sessions.",
  ],

  // OpenHands publishes an explicit cross-platform skills matrix and exact
  // Agent Canvas plugin composition/availability rules.
  ...[
    "openhands-cli",
    "openhands-canvas-local",
    "openhands-canvas-cloud",
  ].flatMap((surface) => [
    [
      surface,
      "agent-skills.standard-paths",
      "supported",
      "S-320",
      "OpenHands documents the recommended .agents/skills path and SKILL.md packages for this surface.",
    ],
    [
      surface,
      "agent-skills.scripts-assets",
      "supported",
      "S-320",
      "OpenHands Agent Skills can include scripts and reference files with progressive disclosure.",
    ],
    [
      surface,
      "instructions.agents-md",
      "supported",
      "S-320",
      "OpenHands recommends root-level AGENTS.md as always-on repository context.",
    ],
  ]),
  [
    "openhands-cli",
    "marketplace-registry",
    "supported",
    "S-320",
    "The CLI can install skills from the official OpenHands extensions registry into .agents/skills.",
  ],
  [
    "openhands-canvas-cloud",
    "marketplace-registry",
    "supported",
    "S-320",
    "OpenHands Cloud provides an integrated skill marketplace and managed organization skill library.",
  ],
  [
    "openhands-canvas-cloud",
    "governance.org-policy",
    "supported",
    "S-320",
    "OpenHands Cloud documents organization-level skill policies and team-wide managed skills.",
  ],
  [
    "openhands-canvas-local",
    "agent-plugins.core",
    "partial",
    "S-241;S-321",
    "Agent Canvas loads structured plugin bundles compatible with the Claude Code layout; exact Agent Plugins 1.0 conformance is not claimed.",
  ],
  [
    "openhands-canvas-local",
    "agent-plugins.skills",
    "supported",
    "S-241;S-321",
    "Local Agent Canvas plugins explicitly bundle and expose skills.",
  ],
  [
    "openhands-canvas-local",
    "agent-plugins.mcp",
    "supported",
    "S-241;S-321",
    "Local Agent Canvas plugins explicitly bundle MCP server configuration.",
  ],
  [
    "openhands-canvas-cloud",
    "agent-plugins.core",
    "partial",
    "S-241;S-321",
    "The plugin bundle format is documented, but cloud backends can disable management or expose an empty catalog.",
  ],
  [
    "openhands-canvas-cloud",
    "agent-plugins.skills",
    "partial",
    "S-241;S-321",
    "Plugins can bundle skills, but cloud availability depends on backend plugin support.",
  ],
  [
    "openhands-canvas-cloud",
    "agent-plugins.mcp",
    "partial",
    "S-241;S-321",
    "Plugins can bundle MCP configuration, but cloud availability depends on backend plugin support.",
  ],

  // OpenCode's shared engine documentation applies to its CLI, desktop, and
  // IDE clients unless the exact surface documents a narrower boundary.
  ...["opencode-cli", "opencode-desktop", "opencode-ide"].flatMap((surface) => [
    [
      surface,
      "agent-skills.scripts-assets",
      "supported",
      "S-102",
      "OpenCode skills expose supporting files and let the agent read referenced scripts, resources, and assets on demand.",
    ],
    [
      surface,
      "instructions.agents-md",
      "supported",
      "S-322",
      "OpenCode discovers project, nested, and global AGENTS.md instruction files.",
    ],
    [
      surface,
      "hooks",
      "supported",
      "S-105",
      "Native OpenCode plugins register lifecycle, request, event, and tool-execution hooks.",
    ],
    [
      surface,
      "subagents.mcp-access",
      "supported",
      "S-104",
      "Per-agent permissions can allow or restrict tools supplied by configured MCP servers.",
    ],
    [
      surface,
      "subagents.write-access",
      "supported",
      "S-104",
      "OpenCode subagents use their own configured permissions, including edit access when allowed.",
    ],
    [
      surface,
      "marketplace-registry",
      "supported",
      "S-105",
      "OpenCode installs native plugins from npm packages and exposes community plugin discovery; this is not the portable Agent Plugins registry.",
    ],
  ]),

  // Warp: exact Oz CLI transport examples and cross-client session sharing.
  [
    "warp-agent-cli",
    "mcp.transport.stdio",
    "supported",
    "S-323",
    "Oz CLI accepts command-and-args MCP configurations and spawns those local servers for a run.",
  ],
  [
    "warp-agent-cli",
    "mcp.transport.streamable-http",
    "supported",
    "S-323",
    "Oz CLI accepts URL-based remote MCP server configurations for local and cloud runs.",
  ],
  [
    "warp-agent-cli",
    "custom-agents",
    "supported",
    "S-266",
    "Oz CLI accepts reusable agent profiles that control behavior, tools, and execution context.",
  ],
];

// Replace superseded generated assertions with the narrower conclusions from
// this review. Keep every predicate intentionally exact so unrelated or later
// assertions are never removed.
seed.assertions = seed.assertions.filter(
  (assertion) =>
    !(
      (assertion.surface_id === "kiro-cli" &&
        assertion.feature_id === "session.handoff" &&
        assertion.status === "partial" &&
        assertion.source_keys === "S-083") ||
      (assertion.surface_id === "openwork-desktop" &&
        assertion.feature_id === "governance.org-policy" &&
        assertion.status === "supported" &&
        assertion.source_keys === "S-311;S-314") ||
      (assertion.surface_id === "warp-local-agent" &&
        assertion.feature_id === "session.handoff" &&
        assertion.status === "supported" &&
        assertion.source_keys === "S-266") ||
      (assertion.surface_id === "warp-local-agent" &&
        assertion.feature_id === "custom-agents" &&
        assertion.status === "supported" &&
        assertion.source_keys === "S-261;S-266")
    )
);

let nextAssertion =
  Math.max(
    ...seed.assertions.map(({ assertion_id }) => Number(assertion_id.slice(5)))
  ) + 1;
for (const [
  surface_id,
  feature_id,
  status,
  source_keys,
  qualifiers,
] of claims) {
  const duplicate = seed.assertions.some(
    (assertion) =>
      assertion.surface_id === surface_id &&
      assertion.feature_id === feature_id &&
      assertion.status === status &&
      assertion.source_keys === source_keys
  );
  if (duplicate) continue;
  seed.assertions.push({
    assertion_id: `ASRT-${String(nextAssertion++).padStart(5, "0")}`,
    surface_id,
    feature_id,
    status,
    evidence_method: "documented",
    implementation_mode: "native",
    availability: status === "partial" ? "conditional" : "ga",
    confidence: "high",
    environment_scope: "default",
    qualifiers,
    source_keys,
    last_verified_at: verifiedAt,
    notes: "",
  });
}

const claimKeys = new Set(
  claims.map(([surface, feature]) => `${surface}\0${feature}`)
);
seed.evidence_gaps = seed.evidence_gaps.filter(
  (gap) => !claimKeys.has(`${gap.surface_id}\0${gap.feature_id}`)
);

for (const [
  surface_id,
  feature_id,
  _status,
  source_keys,
  qualifiers,
] of claims.filter((claim) => claim[2] === "unsupported")) {
  if (
    seed.explicit_non_support.some(
      (row) => row.surface_id === surface_id && row.feature_id === feature_id
    )
  ) {
    continue;
  }
  const cell = seed.compatibility_cells.find(
    (candidate) =>
      candidate.surface_id === surface_id && candidate.feature_id === feature_id
  );
  seed.explicit_non_support.push({
    vendor_name: cell.vendor_name,
    product_name: cell.product_name,
    surface_id,
    surface_name: cell.surface_name,
    feature_id,
    feature_name: cell.feature_name,
    environment_scope: "default",
    source_keys,
    qualifiers,
    notes: "",
  });
}

const uniqueJoined = (values, separator = ";") =>
  [...new Set(values.filter(Boolean))].join(separator);
for (const cell of seed.compatibility_cells) {
  const key = `${cell.surface_id}\0${cell.feature_id}`;
  if (!claimKeys.has(key)) continue;
  const assertions = seed.assertions.filter(
    (assertion) =>
      assertion.surface_id === cell.surface_id &&
      assertion.feature_id === cell.feature_id
  );
  const decisive = assertions.filter(
    (assertion) => assertion.status !== "unknown"
  );
  const statuses = [...new Set(decisive.map((assertion) => assertion.status))];
  cell.primary_status = statuses.length === 1 ? statuses[0] : "partial";
  cell.status_detail = statuses.join("|") || "unknown";
  cell.assertion_count = assertions.length;
  cell.evidence_methods = uniqueJoined(
    decisive.map((assertion) => assertion.evidence_method)
  );
  cell.confidence = uniqueJoined(
    decisive.map((assertion) => assertion.confidence),
    "|"
  );
  cell.environment_scopes = uniqueJoined(
    decisive.map((assertion) => assertion.environment_scope)
  );
  cell.qualifiers = uniqueJoined(
    decisive.map((assertion) => assertion.qualifiers),
    " "
  );
  cell.source_keys = uniqueJoined(
    decisive.flatMap((assertion) =>
      assertion.source_keys.split(";").filter(Boolean)
    )
  );
  cell.notes = uniqueJoined(
    decisive.map((assertion) => assertion.notes),
    " "
  );
  cell.last_verified_at = verifiedAt;
}

const openworkGapPriorities = new Map([
  ["mcp.revision.2026-07-28", "P1"],
  ["mcp.resources", "P1"],
  ["mcp.prompts", "P1"],
  ["mcp.transport.streamable-http", "P1"],
  ["mcp.roots", "P2"],
  ["mcp.sampling", "P2"],
  ["mcp.elicitation", "P2"],
  ["mcp.tasks", "P2"],
  ["mcp.apps", "P2"],
  ["agent-plugins.failure-isolation", "P2"],
  ["subagents.nested", "P2"],
  ["acp.client", "P2"],
]);
for (const [feature_id, priority] of openworkGapPriorities) {
  const cell = seed.compatibility_cells.find(
    (candidate) =>
      candidate.surface_id === "openwork-desktop" &&
      candidate.feature_id === feature_id
  );
  if (
    cell?.primary_status !== "unknown" ||
    seed.evidence_gaps.some(
      (gap) =>
        gap.surface_id === "openwork-desktop" && gap.feature_id === feature_id
    )
  ) {
    continue;
  }
  seed.evidence_gaps.push({
    vendor_name: "OpenWork",
    surface_id: "openwork-desktop",
    surface_name: "OpenWork Desktop",
    feature_id,
    feature_name: cell.feature_name,
    priority,
    recommended_resolution:
      "release-pinned first-party clarification plus deterministic conformance test",
    notes:
      "Unknown is intentional; reviewed sources did not establish this exact optional capability.",
  });
}

const statusNames = ["supported", "partial", "unsupported", "unknown"];
if (!seed.summary_by_vendor.some(({ vendor_id }) => vendor_id === "openwork")) {
  seed.summary_by_vendor.push({
    vendor_id: "openwork",
    vendor_name: "OpenWork",
    coverage_tier: "A",
    surface_count: 1,
    supported_cells: 0,
    partial_cells: 0,
    unsupported_cells: 0,
    unknown_cells: seed.features.length,
    non_unknown_cells: 0,
    evidence_coverage_percent: 0,
    inclusion_basis: "first-party documentation and publisher repository",
    notes:
      "First-party product surface; catalog references remain independent and nominative.",
  });
}
for (const summary of seed.summary_by_vendor) {
  const vendorCells = seed.compatibility_cells.filter(
    (cell) => cell.vendor_id === summary.vendor_id
  );
  const counts = Object.fromEntries(
    statusNames.map((status) => [
      status,
      vendorCells.filter((cell) => cell.primary_status === status).length,
    ])
  );
  summary.supported_cells = counts.supported;
  summary.partial_cells = counts.partial;
  summary.unsupported_cells = counts.unsupported;
  summary.unknown_cells = counts.unknown;
  summary.non_unknown_cells = vendorCells.length - counts.unknown;
  summary.evidence_coverage_percent = Number(
    ((summary.non_unknown_cells / vendorCells.length) * 100).toFixed(1)
  );
  summary.surface_count = new Set(
    vendorCells.map((cell) => cell.surface_id)
  ).size;
}

const projectedFeatures = Object.keys(
  seed.compatibility_matrix_summary[0]
).slice(7);
seed.compatibility_matrix_summary = seed.surfaces.map((surface) => {
  const product = seed.products.find(
    (item) => item.product_id === surface.product_id
  );
  const vendor = seed.vendors.find(
    (item) => item.vendor_id === product.vendor_id
  );
  const row = {
    vendor_name: vendor.vendor_name,
    product_name: product.product_name,
    surface_id: surface.surface_id,
    surface_name: surface.surface_name,
    surface_type: surface.surface_type,
    version_or_observation: surface.version_or_observation,
    coverage_tier: surface.coverage_tier,
  };
  for (const feature of projectedFeatures) {
    row[feature] = seed.compatibility_cells.find(
      (cell) =>
        cell.surface_id === surface.surface_id && cell.feature_id === feature
    ).primary_status;
  }
  return row;
});

const counts = Object.fromEntries(
  statusNames.map((status) => [
    status,
    seed.compatibility_cells.filter((cell) => cell.primary_status === status)
      .length,
  ])
);
const manifestPath = resolve(dataRoot, "data-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
manifest.generated_at_utc = retrievedAt;
Object.assign(manifest.counts, {
  vendors: seed.vendors.length,
  products: seed.products.length,
  surfaces: seed.surfaces.length,
  features: seed.features.length,
  assertions: seed.assertions.length,
  compatibility_cells: seed.compatibility_cells.length,
  supported_cells: counts.supported,
  partial_cells: counts.partial,
  unsupported_cells: counts.unsupported,
  unknown_cells: counts.unknown,
  sources: seed.sources.length,
  explicit_non_support_rows: seed.explicit_non_support.length,
  evidence_gap_rows: seed.evidence_gaps.length,
});

const csvValue = (value) => {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};
const csv = (rows) => {
  if (rows.length === 0) return "";
  const fields = Object.keys(rows[0]);
  return `${fields.join(",")}\r\n${rows.map((row) => fields.map((field) => csvValue(row[field])).join(",")).join("\r\n")}\r\n`;
};

seed.generated_at_utc = retrievedAt;
await writeFile(seedPath, `${JSON.stringify(seed, null, 2)}\n`);
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
await Promise.all([
  writeFile(resolve(dataRoot, "vendors.csv"), csv(seed.vendors)),
  writeFile(resolve(dataRoot, "products.csv"), csv(seed.products)),
  writeFile(resolve(dataRoot, "surfaces.csv"), csv(seed.surfaces)),
  writeFile(resolve(dataRoot, "support-assertions.csv"), csv(seed.assertions)),
  writeFile(
    resolve(dataRoot, "compatibility-cells.csv"),
    csv(seed.compatibility_cells)
  ),
  writeFile(
    resolve(dataRoot, "compatibility-matrix-summary.csv"),
    csv(seed.compatibility_matrix_summary)
  ),
  writeFile(resolve(dataRoot, "source-ledger.csv"), csv(seed.sources)),
  writeFile(resolve(root, "raw/source-ledger.csv"), csv(seed.sources)),
  writeFile(
    resolve(dataRoot, "summary-by-vendor.csv"),
    csv(seed.summary_by_vendor)
  ),
  writeFile(resolve(dataRoot, "evidence-gaps.csv"), csv(seed.evidence_gaps)),
  writeFile(
    resolve(dataRoot, "explicit-non-support.csv"),
    csv(seed.explicit_non_support)
  ),
]);

const validationPath = resolve(root, "validation-report.json");
const validation = JSON.parse(await readFile(validationPath, "utf8"));
validation.generated_at_utc = retrievedAt;
validation.checks.used_source_reference_count = seed.sources.length;
validation.checks.expected_cell_count =
  seed.surfaces.length * seed.features.length;
validation.checks.actual_cell_count = seed.compatibility_cells.length;
validation.warnings = [{ archive_remediation_required: seed.sources.length }];
await writeFile(validationPath, `${JSON.stringify(validation, null, 2)}\n`);

const updateNarrative = async (relativePath, transforms) => {
  const path = resolve(root, relativePath);
  let source = await readFile(path, "utf8");
  for (const [pattern, replacement] of transforms)
    source = source.replace(pattern, replacement);
  await writeFile(path, source);
};
const countTransforms = [
  [/\| Vendors \| \d+ \|/, `| Vendors | ${seed.vendors.length} |`],
  [/\| Products \| \d+ \|/, `| Products | ${seed.products.length} |`],
  [
    /\| Distinct surfaces \| \d+ \|/,
    `| Distinct surfaces | ${seed.surfaces.length} |`,
  ],
  [/\| Surfaces \| \d+ \|/, `| Surfaces | ${seed.surfaces.length} |`],
  [
    /\| Full surface × feature cells \| \d+ \|/,
    `| Full surface × feature cells | ${seed.compatibility_cells.length} |`,
  ],
  [
    /\| Full compatibility cells \| \d+ \|/,
    `| Full compatibility cells | ${seed.compatibility_cells.length} |`,
  ],
  [
    /\| Long-form assertions \| \d+ \|/,
    `| Long-form assertions | ${seed.assertions.length} |`,
  ],
  [/\| Supported cells \| \d+ \|/, `| Supported cells | ${counts.supported} |`],
  [/\| Partial cells \| \d+ \|/, `| Partial cells | ${counts.partial} |`],
  [
    /\| Explicit unsupported cells \| \d+ \|/,
    `| Explicit unsupported cells | ${counts.unsupported} |`,
  ],
  [/\| Unknown cells \| \d+ \|/, `| Unknown cells | ${counts.unknown} |`],
  [
    /\| Primary\/supporting sources \| \d+ \|/,
    `| Primary/supporting sources | ${seed.sources.length} |`,
  ],
  [
    /\| Source records \| \d+ \|/,
    `| Source records | ${seed.sources.length} |`,
  ],
];
await updateNarrative("README.md", countTransforms);
await updateNarrative("28-quality-review.md", countTransforms);
await updateNarrative("02-source-inventory.md", [
  [
    /The package contains \d+ source records/,
    `The package contains ${seed.sources.length} source records`,
  ],
]);
await updateNarrative("07-feature-matrix.md", [
  [
    /The generated matrix covers \d+ surfaces and \d+ features\./,
    `The generated matrix covers ${seed.surfaces.length} surfaces and ${seed.features.length} features.`,
  ],
  [
    /It contains \d+ supported, \d+ partial, \d+ explicit unsupported, and \d+ unknown cells\./,
    `It contains ${counts.supported} supported, ${counts.partial} partial, ${counts.unsupported} explicit unsupported, and ${counts.unknown} unknown cells.`,
  ],
]);
await updateNarrative("23-risks-and-unknowns.md", [
  [
    /Current full-grid unknown cells: \*\*\d+\*\*/,
    `Current full-grid unknown cells: **${counts.unknown}**`,
  ],
]);
await updateNarrative("00-status.md", [
  [
    /\| Major vendor surface split \| complete \| \d+ surfaces across \d+ vendors \|/,
    `| Major vendor surface split | complete | ${seed.surfaces.length} surfaces across ${seed.vendors.length} vendors |`,
  ],
  [
    /\| Full compatibility grid \| complete \| \d+ surface-feature cells \|/,
    `| Full compatibility grid | complete | ${seed.compatibility_cells.length} surface-feature cells |`,
  ],
]);
await updateNarrative("05-current-state-baseline.md", [
  [
    /- Full cells: \*\*\d+\*\*\./,
    `- Full cells: **${seed.compatibility_cells.length}**.`,
  ],
]);
await updateNarrative("raw/archive-status.md", [
  [/All \d+ source rows/, `All ${seed.sources.length} source rows`],
]);

const sourceLink = (source) =>
  `- [${source.source_key}] ${source.title} — ${source.url}`;
const ledgerRows = seed.sources
  .map(
    (source) =>
      `| ${source.source_key} | [${source.title}](${source.url}) | ${source.publisher} | ${source.source_type} | ${source.role} | ${source.confidence} | ${source.retrieved_at_utc} | ${source.archive_url} |`
  )
  .join("\n");
const evidenceLedger = `---
title: Evidence Ledger
file: 19-evidence-ledger.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: ${retrievedAt}
confidence: high
sources_count: ${seed.sources.length}
---

# Evidence Ledger

## Reader Promise

After reading this file, a development team can audit every source retained by the compatibility seed and distinguish evidence inventory from a scoped support assertion.

## Summary

The ledger contains ${seed.sources.length} specification, registry, first-party documentation, release, repository, and issue sources. Every live URL has a retrieval timestamp and an explicit archive-failed marker. The source ledger is evidence inventory; support assertions remain the scoped compatibility facts.

## Source inventory

| ID | Source | Publisher | Type | Role | Confidence | Retrieved | Archive |
|---|---|---|---|---|---|---|---|
${ledgerRows}

## Confidence Notes

Normative specifications define protocol behavior but do not prove implementation. Registry listings prove only the listed role or portable component. First-party product documentation supports the exact surface statements recorded in \`support-assertions.csv\`; no runtime conformance suite was executed.

## Sources Used

${seed.sources.map(sourceLink).join("\n")}
`;
await writeFile(resolve(root, "19-evidence-ledger.md"), evidenceLedger);

const sourceMap = new Map(
  seed.sources.map((source) => [source.source_key, source])
);
const renderCell = (cell) => {
  const methods = cell.evidence_methods.replaceAll(";", "; ");
  const qualifier = cell.qualifiers ? ` — ${cell.qualifiers}` : "";
  return `- **${cell.surface_name} · ${cell.feature_name}** (${methods})${qualifier} [${cell.source_keys}]`;
};
const vendorSections = new Map(
  seed.vendors
    .toSorted((left, right) =>
      left.vendor_name.localeCompare(right.vendor_name)
    )
    .map((vendor) => {
      const summary = seed.summary_by_vendor.find(
        (row) => row.vendor_id === vendor.vendor_id
      );
      const products = seed.products.filter(
        (product) => product.vendor_id === vendor.vendor_id
      );
      const productIds = new Set(products.map((product) => product.product_id));
      const surfaces = seed.surfaces.filter((surface) =>
        productIds.has(surface.product_id)
      );
      const surfaceIds = new Set(surfaces.map((surface) => surface.surface_id));
      const cells = seed.compatibility_cells.filter((cell) =>
        surfaceIds.has(cell.surface_id)
      );
      const gaps = seed.evidence_gaps.filter((gap) =>
        surfaceIds.has(gap.surface_id)
      );
      const rows = surfaces
        .map(
          (surface) =>
            `| ${surface.surface_name} | ${surface.surface_type} | ${surface.version_or_observation} | ${surface.availability} | ${surface.registry_role} |`
        )
        .join("\n");
      const byStatus = (status) =>
        cells
          .filter((cell) => cell.primary_status === status)
          .map(renderCell)
          .join("\n") || "None established in this pass.";
      const sourceKeys = [
        ...new Set(
          cells.flatMap((cell) => cell.source_keys.split(";").filter(Boolean))
        ),
      ];
      const sources =
        sourceKeys
          .map((key) => sourceMap.get(key))
          .filter(Boolean)
          .map(sourceLink)
          .join("\n") || "None.";
      const unknowns =
        gaps
          .slice(0, 20)
          .map(
            (gap) =>
              `- ${gap.surface_name} · ${gap.feature_name} (${gap.priority})`
          )
          .join("\n") ||
        "- No generated high-priority gap in the selected backlog; lower-priority cells may remain unknown.";
      return [
        vendor.vendor_name,
        `## ${vendor.vendor_name}

**Coverage tier:** ${summary.coverage_tier}  
**Inclusion basis:** ${summary.inclusion_basis}  
**Surfaces:** ${summary.surface_count}  
**Cells:** supported ${summary.supported_cells} · partial ${summary.partial_cells} · explicit no ${summary.unsupported_cells} · unknown ${summary.unknown_cells}

| Surface | Type | Version/observation | Availability | Registry role |
|---|---|---|---|---|
${rows}

### Documented/registry-supported

${byStatus("supported")}

### Partial, gated, experimental, or conflicting

${byStatus("partial")}

### Explicitly unsupported or currently unavailable

${byStatus("unsupported")}

### High-priority unknowns

${unknowns}

### Sources

${sources}`,
      ];
    })
);
const vendorPath =
  "md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28/vendor-by-vendor.md";
let vendorReport = execFileSync("git", ["show", `HEAD:${vendorPath}`], {
  cwd: resolve("."),
  encoding: "utf8",
});
vendorReport = vendorReport
  .replace(/last_updated_utc: .+/, `last_updated_utc: ${retrievedAt}`)
  .replace(/sources_count: \d+/, `sources_count: ${seed.sources.length}`);
for (const vendorName of [
  "Aider",
  "Cline",
  "GitHub",
  "Kiro",
  "OpenCode",
  "OpenHands",
  "OpenWork",
  "Warp",
]) {
  const section = vendorSections.get(vendorName);
  const pattern = new RegExp(`## ${vendorName}\\n[\\s\\S]*?(?=\\n## |$)`);
  if (pattern.test(vendorReport)) {
    vendorReport = vendorReport.replace(pattern, section);
    continue;
  }
  const nextVendor = [...vendorSections.keys()].find(
    (candidate) =>
      candidate.localeCompare(vendorName) > 0 &&
      vendorReport.includes(`\n## ${candidate}\n`)
  );
  if (nextVendor) {
    vendorReport = vendorReport.replace(
      `\n## ${nextVendor}\n`,
      `\n${section}\n\n## ${nextVendor}\n`
    );
  } else {
    vendorReport = `${vendorReport.trimEnd()}\n\n${section}\n`;
  }
}
await writeFile(resolve(root, "vendor-by-vendor.md"), vendorReport);

process.stdout.write(
  `Expanded evidence to ${seed.assertions.length} assertions and ${seed.sources.length} sources; unknown cells reduced to ${counts.unknown}.\n`
);
