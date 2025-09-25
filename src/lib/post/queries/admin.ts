import { postRepository } from "@/repository/posts";
import { cache } from "react";

export const findPostByIdAdmin = cache(async (id: string) => {
  return await postRepository.findById(id);
});

export const findAllPostAdmin = cache(async () => {
  return await postRepository.findAll();
});
