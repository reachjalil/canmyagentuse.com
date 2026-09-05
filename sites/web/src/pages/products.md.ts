import type { APIRoute } from "astro";
import {
  SITE,
  productMarkdownPath,
  PRODUCT_REVIEW_NOTE,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";
export const GET: APIRoute = async () => {
  const products = await publishedCollection("products");
  return markdownResponse(
    toEntryMarkdown({
      title: "Products your agent can use",
      htmlPath: "/products",
      markdownPath: "/products.md",
      jsonPath: "/api/v1/products.json",
      llmSummary: SITE.description,
      body: [
        PRODUCT_REVIEW_NOTE,
        "",
        ...products.map(
          ({ data }) =>
            `- [${data.title}](${productMarkdownPath(data.slug)}): ${data.summary}`
        ),
      ].join("\n"),
    })
  );
};
