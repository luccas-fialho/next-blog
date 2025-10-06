"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repository/posts";
import asyncDelay from "@/utils/async-delay";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export const deletePostAction = async (id: string) => {
  // TODO: check user login

  await asyncDelay(2000);

  if (!id || typeof id !== "string") {
    return {
      error: "Invalid data",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return {
      error: "Post not found",
    };
  }

  // TODO: move this method to repository
  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // TODO: revalidateTag or revalidatePath
  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    error: "",
  };
};
