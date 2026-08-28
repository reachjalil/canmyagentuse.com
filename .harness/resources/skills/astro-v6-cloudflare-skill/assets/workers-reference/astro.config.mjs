import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  // Default is 'static'. This reference uses a single on-demand page via `prerender = false`.
  adapter: cloudflare({
    platformProxy: { enabled: true, persist: true },
  }),
  integrations: [react()],
});
