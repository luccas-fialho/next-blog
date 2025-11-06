"use server";

import { verifyLoginSession } from "@/lib/login/manage-login";
import { postRepository } from "@/repository/posts";
import { revalidateTag } from "next/cache";

export const deletePostAction = async (id: string) => {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: "Login in another tab and try again.",
    };
  }

  if (!id || typeof id !== "string") {
    return {
      error: "Invalid data",
    };
  }

  let post;

  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }

    return {
      error: "Unknown error.",
    };
  }

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    error: "",
  };
};
