import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./posts-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {}

  findAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();

console.log(ROOT_DIR);
