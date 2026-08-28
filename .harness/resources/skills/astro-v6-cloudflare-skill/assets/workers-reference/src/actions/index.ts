import type { SafeResult } from "astro:actions";
import { defineAction } from "astro:actions";
import { getActionState } from "@astrojs/react/actions";
import { z } from "astro/zod";

export const server = {
  like: defineAction({
    accept: "form",
    input: z.object({
      postId: z.string().min(1),
    }),
    handler: async ({ postId }, ctx) => {
      // Example: read a Cloudflare binding / env var
      const appName = ctx.locals.runtime.env.APP_NAME;

      // Persist React useActionState() state server-side:
      const { data: currentLikes = 0, error } =
        await getActionState<SafeResult<any, number>>(ctx);

      if (error) throw error;

      console.log("liked", postId, "from", appName);
      return currentLikes + 1;
    },
  }),
};
