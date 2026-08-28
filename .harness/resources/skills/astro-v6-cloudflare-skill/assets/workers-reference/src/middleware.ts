import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  // Access Cloudflare bindings through context.locals.runtime
  const appName = context.locals.runtime.env.APP_NAME;

  const response = await next();
  response.headers.set("X-App-Name", appName);
  return response;
};
