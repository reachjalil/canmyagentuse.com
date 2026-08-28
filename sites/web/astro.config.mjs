import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://canmyagentuse.com",
  trailingSlash: "never",
  session: false,
  adapter: cloudflare({
    configPath: "./wrangler.jsonc",
    imageService: "compile",
    persistState: true,
    remoteBindings: false,
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [],
  devToolbar: { enabled: false },
  vite: {
    cacheDir: "../../node_modules/.vite/canmyagentuse-web",
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["cloudflare:workers"],
    },
  },
});
