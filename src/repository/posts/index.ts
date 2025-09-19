import { DrizzlePostRepository } from "./drizzle-post-repository";
import { PostRepository } from "./posts-repository";

export const postRepository: PostRepository = new DrizzlePostRepository();
