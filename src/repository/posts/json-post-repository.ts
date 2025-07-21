import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./posts-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const json = await readFile(JSON_PATH, "utf-8");
    const parsedJson = JSON.parse(json);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Post not found!");

    return post;
  }
}
