# Can My Agent Use plugin

Public, read-only compatibility lookup from the same published collections as [Can My Agent Use](https://canmyagentuse.com). No API key or account is required. Requests go to `https://canmyagentuse.com/mcp` over MCP Streamable HTTP.

## Tools

- `search_catalog`: ranked search of products, features, exact harness surfaces, and specifications; supports kind, limit (1–25), and offset.
- `get_record`: full metadata, narrative, source links, dates, and requirements by kind and slug.
- `check_compatibility`: an atomic feature × exact harness × track assessment, including unknowns, qualifications, sources, and dates.

Example: search `Codex` with kind `harness`, search `MCP Apps` with kind `feature`, then check the resulting exact slugs. Search summaries are discovery results, not proof of support.

## Connect

Install the ZIP through a host's plugin import workflow where supported. It contains `.codex-plugin/plugin.json`, `.mcp.json`, and a skill. Hosts without this plugin format can connect to the MCP URL directly:

```json
{
  "mcpServers": {
    "can-my-agent-use": {
      "type": "http",
      "url": "https://canmyagentuse.com/mcp"
    }
  }
}
```

Use the host's remote MCP configuration when its config shape differs. The server is stateless: POST requests, JSON responses, no session persistence or standalone SSE subscription. GET and DELETE return 405. Requests are limited to 64 KiB. Native clients may omit Origin. Browser Origin headers must match the endpoint origin, https://canmyagentuse.com, https://chatgpt.com, https://chat.openai.com, or https://claude.ai; other origins return 403. Search does not access private accounts or inspect the client's installed tools.

## Evidence and privacy

Catalog data reflects recorded research, not a live test of the user's account. Preserve exact surfaces, observation dates, requirements, and evidence classes. Unknown does not mean unsupported. Product signup, connection, purchase, and useful work are separate assessments. Cite catalog and primary source URLs.

Do not send credentials or private context in queries. The MCP handler does not store queries or call third-party URLs. Hosting infrastructure may process request metadata under the site's [privacy policy](https://canmyagentuse.com/privacy).

## Release

From the repository root run `pnpm plugin:package`; the downloadable archive is generated at `sites/web/public/plugins/can-my-agent-use.zip` and published with the site. The implementation lives at `sites/web/src/lib/mcp.ts`; shared query semantics live in `packages/catalog/src/mcp-catalog.ts`.

A downloadable plugin and working MCP endpoint do not establish a listing in a provider's curated directory. OpenAI directory submission requires the publisher's organization, verification, and review workflow: https://developers.openai.com/plugins/deploy/submission.
