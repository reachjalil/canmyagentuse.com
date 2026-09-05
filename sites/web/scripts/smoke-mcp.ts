import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const url = new URL(process.argv[2] ?? "https://canmyagentuse.com/mcp");
const client = new Client({
  name: "can-my-agent-use-release-check",
  version: "1.0.0",
});
try {
  await client.connect(new StreamableHTTPClientTransport(url));
  const { tools } = await client.listTools();
  assert.equal(tools.length, 3);
  const search = await client.callTool({
    name: "search_catalog",
    arguments: { query: "Notion", kind: "product" },
  });
  assert.ok(!search.isError);
  const hits = search.structuredContent as { results: { slug: string }[] };
  assert.equal(hits.results[0]?.slug, "notion");
  const record = await client.callTool({
    name: "get_record",
    arguments: { kind: "product", slug: "notion" },
  });
  assert.ok(!record.isError);
  assert.equal(
    (record.structuredContent as { url: string }).url,
    "https://canmyagentuse.com/products/notion"
  );
  const checked = await client.callTool({
    name: "check_compatibility",
    arguments: { feature: "mcp-apps", harness: "codex-cli" },
  });
  assert.ok(!checked.isError);
  const assessment = checked.structuredContent as {
    assessment: { status: string };
    resources: unknown[];
  };
  assert.ok(
    ["yes", "partial", "no", "unknown", "na"].includes(
      assessment.assessment.status
    )
  );
  assert.ok(assessment.resources.length > 0);
  const unknown = await client.callTool({
    name: "get_record",
    arguments: { kind: "product", slug: "does-not-exist" },
  });
  assert.equal(unknown.isError, true);
  console.log(
    JSON.stringify(
      {
        endpoint: url.href,
        tools: tools.map((tool) => tool.name),
        product: hits.results[0]?.slug,
        codexCliMcpApps: assessment.assessment.status,
        checks: "passed",
      },
      null,
      2
    )
  );
} finally {
  await client.close();
}
