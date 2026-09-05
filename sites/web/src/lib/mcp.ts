import {
  absoluteUrl,
  CATALOG_EVIDENCE_POLICY,
  checkCatalogCompatibility,
  type McpCatalog,
  type SearchKind,
  searchMcpCatalog,
} from "@canmyagentuse/catalog";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";

export interface McpCatalogSource {
  catalog: McpCatalog;
  body: (kind: SearchKind, slug: string) => string;
}
const kinds = z.enum(["product", "feature", "harness", "specification"]);
const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .max(120);
const annotations = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};
const directories = {
  product: "products",
  feature: "features",
  harness: "harnesses",
  specification: "specs",
};
const collections = {
  product: "products",
  feature: "features",
  harness: "harnesses",
  specification: "specifications",
} as const;
function result(data: Record<string, unknown>) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data) }],
    structuredContent: JSON.parse(JSON.stringify(data)) as Record<
      string,
      unknown
    >,
  };
}

export function createCatalogMcpServer(source: McpCatalogSource) {
  const server = new McpServer(
    { name: "can-my-agent-use", version: "1.0.0" },
    { instructions: CATALOG_EVIDENCE_POLICY }
  );
  server.registerTool(
    "search_catalog",
    {
      title: "Search Can My Agent Use",
      description:
        "Find services, agent capabilities, exact web/desktop/CLI harnesses, and specifications in the published evidence catalog. Returns ranked records and canonical URLs. Use concise terms such as 'MCP Apps', 'Codex', or 'Notion'; fetch records before making support claims. Empty query browses the catalog.",
      inputSchema: {
        query: z.string().trim().max(200),
        kind: kinds.optional(),
        limit: z.number().int().min(1).max(25).default(10),
        offset: z.number().int().min(0).max(10000).default(0),
      },
      annotations,
    },
    async ({ query, kind, limit, offset }) =>
      result(searchMcpCatalog(source.catalog, query, kind, limit, offset))
  );
  server.registerTool(
    "get_record",
    {
      title: "Get an evidence record",
      description:
        "Read a complete product, feature, harness, or specification record by exact slug from search_catalog. Includes narrative, primary sources, dates, and qualifications. Product records distinguish signup, connection, purchase, and useful work; documentation is not a live account test.",
      inputSchema: { kind: kinds, slug },
      annotations,
    },
    async ({ kind, slug: recordSlug }) => {
      const record = source.catalog[collections[kind]].find(
        (item) => item.slug === recordSlug
      );
      if (!record)
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Record not found. Use search_catalog for exact identifiers.",
            },
          ],
        };
      const path = `/${directories[kind]}/${recordSlug}`;
      return result({
        evidencePolicy: CATALOG_EVIDENCE_POLICY,
        record,
        body: source.body(kind, recordSlug),
        url: absoluteUrl(path),
        markdown: absoluteUrl(`${path}.md`),
      });
    }
  );
  server.registerTool(
    "check_compatibility",
    {
      title: "Check exact agent compatibility",
      description:
        "Check one atomic feature against an exact agent harness and release track. Returns scoped status, conditions, evidence references, review/observation dates, and source URLs. Does not inspect installed tools or your account. Unknown is not unsupported. Resolve slugs with search_catalog first.",
      inputSchema: {
        feature: slug,
        harness: slug,
        track: z.string().min(1).max(80).default("current"),
      },
      annotations,
    },
    async ({ feature, harness, track }) => {
      try {
        return result(
          checkCatalogCompatibility(source.catalog, feature, harness, track)
        );
      } catch (error) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text:
                error instanceof Error
                  ? error.message
                  : "Unable to check compatibility.",
            },
          ],
        };
      }
    }
  );
  return server;
}

export async function handleCatalogMcp(
  request: Request,
  load: () => Promise<McpCatalogSource>
): Promise<Response> {
  const headers = new Headers({
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "POST, GET, DELETE, OPTIONS",
    "access-control-allow-headers":
      "Content-Type, Accept, MCP-Protocol-Version, MCP-Session-Id",
    "access-control-expose-headers": "MCP-Protocol-Version",
    "cache-control": "no-store",
  });
  // MCP requires Origin validation when the header is present. Native MCP clients
  // normally omit it; browser clients must use a reviewed origin.
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    new URL(request.url).origin,
    "https://canmyagentuse.com",
    "https://chatgpt.com",
    "https://chat.openai.com",
    "https://claude.ai",
  ]);
  if (origin && !allowedOrigins.has(origin))
    return new Response("Origin not allowed", { status: 403 });
  if (request.method === "OPTIONS")
    return new Response(null, { status: 204, headers });
  if (request.method !== "POST") {
    headers.set("allow", "POST, OPTIONS");
    return new Response("Stateless MCP endpoint: use POST.", {
      status: 405,
      headers,
    });
  }
  // Bound the actual streamed body as Content-Length may be missing or inaccurate.
  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;
  if (reader) {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      length += chunk.value.byteLength;
      if (length > 65536) {
        await reader.cancel();
        return new Response("Request too large", { status: 413, headers });
      }
      chunks.push(chunk.value);
    }
  }
  const body = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  const boundedRequest = new Request(request.url, {
    method: "POST",
    headers: request.headers,
    body,
  });
  const server = createCatalogMcpServer(await load());
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  try {
    await server.connect(transport);
    const response = await transport.handleRequest(boundedRequest);
    for (const [name, value] of headers) response.headers.set(name, value);
    return response;
  } finally {
    await server.close();
  }
}
