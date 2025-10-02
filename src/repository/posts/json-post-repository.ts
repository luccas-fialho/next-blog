import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./posts-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { LOADING_TIME_IN_MS } from "@/lib/constants";

const ROOT_DIR = process.cwd();
const JSON_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");


export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (LOADING_TIME_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, LOADING_TIME_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const json = await readFile(JSON_PATH, "utf-8");
    const parsedJson = JSON.parse(json);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Post not found!");

    return post;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error("Post not found!");

    return post;
  }
}
