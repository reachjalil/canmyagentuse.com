import { defineMiddleware } from "astro:middleware";
import { applySecurityHeaders } from "./lib/security";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  return applySecurityHeaders(context.request, response);
});
