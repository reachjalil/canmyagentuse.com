import { actions } from "astro:actions";
import { withState } from "@astrojs/react/actions";
import { useActionState } from "react";

export function LikeForm({ postId }: { postId: string }) {
  const [state, action, pending] = useActionState(withState(actions.like), {
    data: 0,
    error: undefined,
  });

  return (
    <form action={action}>
      <input type="hidden" name="postId" value={postId} />
      <button disabled={pending}>
        {pending ? "Liking…" : `${state.data} ❤️`}
      </button>
      {state.error && <p role="alert">Error: {String(state.error)}</p>}
    </form>
  );
}
