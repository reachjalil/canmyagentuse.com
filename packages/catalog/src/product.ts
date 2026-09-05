import { z } from "zod";
import { seoSchema } from "./schema.ts";
import { productPath, productMarkdownPath, productJsonPath } from "./paths.ts";
import { toEntryMarkdown } from "./llms.ts";

export const PRODUCT_ACTIONS = [
  "sign-up",
  "connect-account",
  "buy-subscribe",
  "use-product",
] as const;
export const PRODUCT_ACTION_LABELS = {
  "sign-up": "Sign up / create an account",
  "connect-account": "Connect an existing account",
  "buy-subscribe": "Buy / enable paid services",
  "use-product": "Get work done",
} as const;
export const PRODUCT_STATUS_LABELS = {
  "agent-ready": "Agent can do it",
  "human-step": "Human step",
  conditional: "With conditions",
  unknown: "Not verified",
} as const;
export const PRODUCT_INTERFACES = [
  "mcp",
  "mcp-apps",
  "api",
  "cli",
  "local-files",
] as const;
export const PRODUCT_INTERFACE_LABELS = {
  mcp: "MCP tools",
  "mcp-apps": "MCP Apps",
  api: "API",
  cli: "CLI",
  "local-files": "Local files",
} as const;
export const PRODUCT_INTEGRATION_LABELS = {
  official: "Official",
  community: "Community",
  unknown: "Not verified",
  unsupported: "Explicit no",
} as const;
export const PRODUCT_REVIEW_NOTE =
  "These are documentation reviews, not live agent tests. Human step means the reviewed route includes user or admin setup; it does not establish that every alternative is impossible. Not verified means the evidence does not establish autonomous completion.";

const sourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  href: z.url().startsWith("https://"),
  publisher: z.string().min(1),
  reviewedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
export const productSchema = seoSchema("product")
  .extend({
    contentKind: z.literal("product").default("product"),
    category: z.string().min(1),
    vendor: z.string().min(1),
    summary: z.string().min(1),
    homepage: z.url(),
    order: z.number().int().default(0),
    aliases: z.array(z.string()).default([]),
    scope: z.string().min(1),
    categorySlug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    bestFor: z.string().min(1),
    integrations: z
      .array(
        z.object({
          kind: z.enum(PRODUCT_INTERFACES),
          status: z.enum(["official", "community", "unknown", "unsupported"]),
          detail: z.string().min(1),
          sourceIds: z.array(z.string()).default([]),
        })
      )
      .length(PRODUCT_INTERFACES.length),
    actions: z
      .array(
        z.object({
          id: z.enum(PRODUCT_ACTIONS),
          status: z.enum([
            "agent-ready",
            "human-step",
            "conditional",
            "unknown",
          ]),
          summary: z.string().min(1),
          detail: z.string().min(1),
          sourceIds: z.array(z.string()).default([]),
        })
      )
      .length(PRODUCT_ACTIONS.length),
    routes: z
      .array(
        z.object({
          name: z.string().min(1),
          description: z.string().min(1),
          feature: z.string().min(1),
          sourceIds: z.array(z.string()).min(1),
        })
      )
      .min(1),
    setup: z
      .array(
        z.object({
          title: z.string().min(1),
          actor: z.enum(["You", "Agent", "Admin", "You + agent"]),
          detail: z.string().min(1),
        })
      )
      .min(1),
    sources: z.array(sourceSchema).min(1),
  })
  .superRefine((product, context) => {
    const ids = new Set(product.sources.map((source) => source.id));
    if (ids.size !== product.sources.length)
      context.addIssue({
        code: "custom",
        path: ["sources"],
        message: "Source IDs must be unique.",
      });
    if (
      new Set(product.actions.map((action) => action.id)).size !==
      PRODUCT_ACTIONS.length
    )
      context.addIssue({
        code: "custom",
        path: ["actions"],
        message: "Include every product action exactly once.",
      });
    for (const [index, action] of product.actions.entries()) {
      if (action.status !== "unknown" && !action.sourceIds.length)
        context.addIssue({
          code: "custom",
          path: ["actions", index, "sourceIds"],
          message: "An assessed action needs a dated source.",
        });
    }
    if (
      new Set(product.integrations.map((item) => item.kind)).size !==
      PRODUCT_INTERFACES.length
    )
      context.addIssue({
        code: "custom",
        path: ["integrations"],
        message: "Include each access interface exactly once.",
      });
    for (const [index, item] of product.integrations.entries()) {
      if (item.status !== "unknown" && !item.sourceIds.length)
        context.addIssue({
          code: "custom",
          path: ["integrations", index, "sourceIds"],
          message: "An integration claim needs a dated source.",
        });
    }
    for (const collection of ["actions", "routes", "integrations"] as const) {
      for (const [index, item] of product[collection].entries()) {
        for (const id of item.sourceIds)
          if (!ids.has(id))
            context.addIssue({
              code: "custom",
              path: [collection, index, "sourceIds"],
              message: `Unknown source: ${id}`,
            });
      }
    }
  });
export type ProductData = z.infer<typeof productSchema>;

export function productRecord(product: ProductData, body?: string) {
  return {
    ...product,
    html: productPath(product.slug),
    markdown: productMarkdownPath(product.slug),
    json: productJsonPath(product.slug),
    reviewNote: PRODUCT_REVIEW_NOTE,
    ...(body === undefined ? {} : { body }),
  };
}

export function productMarkdown(product: ProductData, body = ""): string {
  const sourcesFor = (ids: string[]) =>
    ids
      .map((id) => product.sources.find((source) => source.id === id))
      .filter((source) => source !== undefined)
      .map((source) => `[${source.title}](${source.href})`)
      .join("; ");
  return toEntryMarkdown({
    title: product.title,
    htmlPath: productPath(product.slug),
    markdownPath: productMarkdownPath(product.slug),
    jsonPath: productJsonPath(product.slug),
    contentKind: "product",
    locale: product.locale,
    description: product.description,
    llmSummary: product.llmSummary,
    audience: product.audience,
    tags: product.tags,
    updatedAt: product.updated,
    publishedAt: product.published,
    body: [
      product.summary,
      "",
      `Scope: ${product.scope}`,
      "",
      PRODUCT_REVIEW_NOTE,
      "",
      "## Account to first task",
      "",
      ...product.actions.flatMap((action) => [
        `### ${PRODUCT_ACTION_LABELS[action.id]} — ${PRODUCT_STATUS_LABELS[action.status]}`,
        "",
        action.summary,
        "",
        action.detail,
        "",
        `Sources: ${sourcesFor(action.sourceIds) || "No conclusive evidence recorded."}`,
        "",
      ]),
      "## Agent access",
      "",
      `Best suited to: ${product.bestFor}`,
      "",
      ...product.integrations.map(
        (item) =>
          `- ${PRODUCT_INTERFACE_LABELS[item.kind]}: ${PRODUCT_INTEGRATION_LABELS[item.status]}. ${item.detail} Sources: ${sourcesFor(item.sourceIds) || "Not verified."}`
      ),
      "",
      "## Ways in",
      "",
      ...product.routes.map(
        (route) =>
          `- ${route.name}: ${route.description} [Agent capability](/features/${route.feature}.md). Sources: ${sourcesFor(route.sourceIds)}`
      ),
      "",
      "## What it takes",
      "",
      ...product.setup.map(
        (step, index) =>
          `${index + 1}. **${step.title}** (${step.actor}): ${step.detail}`
      ),
      "",
      body,
      "",
      "## Sources",
      "",
      ...product.sources.map(
        (source) =>
          `- [${source.title}](${source.href}) — ${source.publisher}; reviewed ${source.reviewedAt}.`
      ),
    ].join("\n"),
  });
}

export function filterProducts(
  products: readonly ProductData[],
  filters: {
    category?: string;
    interfaces?: readonly string[];
    officialOnly?: boolean;
    query?: string;
  }
) {
  const query = filters.query?.trim().toLocaleLowerCase("en");
  return products.filter(
    (product) =>
      (!filters.category || product.categorySlug === filters.category) &&
      (!query ||
        [
          product.title,
          product.category,
          product.summary,
          product.bestFor,
          ...product.aliases,
        ]
          .join(" ")
          .toLocaleLowerCase("en")
          .includes(query)) &&
      (filters.interfaces ?? []).every((kind) =>
        product.integrations.some(
          (item) =>
            item.kind === kind &&
            (item.status === "official" ||
              (!filters.officialOnly && item.status === "community"))
        )
      )
  );
}

/** JSON contract mirrors the serializer, replacing in-memory Date values with ISO strings. */
export const productJsonSchema = z.toJSONSchema(
  z.object({
    ...productSchema.shape,
    updated: z.iso.datetime(),
    published: z.iso.datetime().optional(),
    html: z.string(),
    markdown: z.string(),
    json: z.string(),
    reviewNote: z.string(),
    body: z.string().optional(),
  })
);
