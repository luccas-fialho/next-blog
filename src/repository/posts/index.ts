import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./posts-repository";

export const postRepository: PostRepository = new JsonPostRepository();
