import { postRepository } from "@/repository/posts";
import { cache } from "react";

export const findAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublic();
});
