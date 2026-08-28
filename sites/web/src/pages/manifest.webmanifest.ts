import type { APIRoute } from "astro";
import { SITE } from "@canmyagentuse/catalog";
import { textResponse } from "../lib/security";

export const GET: APIRoute = () =>
  textResponse(
    JSON.stringify(
      {
        id: "/",
        name: SITE.name,
        short_name: "Can My Agent Use",
        description: SITE.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#efe6d4",
        theme_color: SITE.themeColor,
        icons: [
          {
            src: SITE.markPath,
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
        shortcuts: [
          {
            name: "Search",
            url: "/search",
            icons: [
              { src: SITE.markPath, sizes: "any", type: "image/svg+xml" },
            ],
          },
          {
            name: "Matrix",
            url: "/matrix",
            icons: [
              { src: SITE.markPath, sizes: "any", type: "image/svg+xml" },
            ],
          },
          {
            name: "Coverage",
            url: "/coverage",
            icons: [
              { src: SITE.markPath, sizes: "any", type: "image/svg+xml" },
            ],
          },
        ],
      },
      null,
      2
    ),
    "application/manifest+json; charset=utf-8"
  );
