import { postRepository } from "@/repository/posts";
import { cache } from "react";

export const findAllPublicPostsCached = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findPostBySlugCached = cache(async (slug: string) => {
  return await postRepository.findBySlug(slug);
});

export const findPostByIdCached = cache(async (id: string) => {
  return await postRepository.findById(id);
});
