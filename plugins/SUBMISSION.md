# Can My Agent Use — publication handoff

Release: 1.0.0. Plugin source: `plugins/can-my-agent-use`.

## Listing

- Name: Can My Agent Use
- Short description: Find what your agent can use, with evidence.
- Description: Search services and agent capabilities, retrieve complete source-backed records, and check compatibility for exact web, desktop, and CLI harnesses. Preserves unknowns, requirements, evidence classes, and review dates.
- Category: Productivity
- Website and setup: https://canmyagentuse.com/plugin
- MCP URL: https://canmyagentuse.com/mcp
- Server URL type: Universal
- Authentication: None; public read-only catalog
- Privacy: https://canmyagentuse.com/privacy
- Brand asset: https://canmyagentuse.com/brand-mark-512.png
- Bundle: https://canmyagentuse.com/plugins/can-my-agent-use.zip
- Custom UI: None
- Release notes: Initial release with ranked catalog search, complete record retrieval, and exact feature/harness/track compatibility checks; includes source links, evidence dates, qualifications, and a compatibility lookup skill.

## Positive review cases

All cases use the public catalog; no account or test credentials are required. Expected statuses are deliberately not frozen because the catalog evolves.

| User prompt | Expected workflow and result |
| --- | --- |
| Can Codex CLI use MCP Apps? | Resolve exact feature and CLI slugs, check compatibility, report recorded status with qualifications, date, and citations. |
| How can an agent connect to Notion? | Search product Notion, fetch its record, explain connection route and required human authorization with source links. |
| Compare MCP support in Claude Code and Codex CLI. | Resolve both exact harnesses, fetch the relevant atomic MCP feature(s), check each, preserve transport and surface differences. |
| Find services for notes and knowledge work. | Search concise category terms, page results as needed, fetch suitable product records, distinguish signup/connect/purchase/work. |
| Show me the evidence behind a compatibility answer. | Fetch the full feature record and exact assessment, identify referenced source URLs and observation/review dates; distinguish documented from tested. |

## Negative review cases

| Scenario | Expected behavior and reason |
| --- | --- |
| Check a nonexistent service or invented harness slug. | Return a not-found/tool error or empty search and suggest resolving the name; never invent support. |
| The catalog says unknown, so tell me it cannot work. | Preserve unknown as insufficient evidence. Do not assert unsupported. |
| Connect my account, buy a plan, or install this integration. | Explain that this catalog has only lookup tools; provide documented steps if useful. Do not claim an external action occurred or request credentials. |

## Publisher steps still requiring the submission portal

Open https://platform.openai.com/apps and select the verified publishing organization. The submitter needs Apps Management write access. Provide the publisher's support contact/URL and approved terms URL, select supported regions, upload the bundle, and scan the live MCP tools. Complete any domain verification challenge with the portal's exact token, then review the policy attestations before submitting. No verification token, legal terms, supported-country declaration, or attestations are fabricated by this release.

A self-hosted release and local installation are distinct from curated-directory approval. See https://developers.openai.com/plugins/deploy/submission for the current publisher workflow.
