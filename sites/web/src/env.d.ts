/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Env {
  CORRECTIONS_DB?: D1Database;
  CORRECTIONS_HASH_SALT?: string;
  CORRECTIONS_ADMIN_TOKEN?: string;
}
