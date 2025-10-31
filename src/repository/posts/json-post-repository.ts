import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./posts-repository";
import { resolve } from "path";
import { readFile, writeFile } from "fs/promises";
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

  private async writeToDisk(posts: PostModel[]): Promise<void> {
    const jsonToString = JSON.stringify({ posts }, null, 2);
    await writeFile(JSON_PATH, jsonToString, "utf-8");
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

  async create(post: PostModel): Promise<PostModel> {
    const posts = await this.findAll();

    if (!post.id || !post.slug) {
      throw new Error("Post without ID or Slug");
    }

    const idOrSlugExist = posts.find(
      (savedPost) => savedPost.id === post.id || savedPost.slug === post.slug
    );

    if (idOrSlugExist) {
      throw new Error("ID and Slug must be unique.");
    }

    posts.push(post);
    await this.writeToDisk(posts);

    return post;
  }

  async delete(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex < 0) {
      throw new Error("Post not found.");
    }

    const post = posts[postIndex];
    posts.splice(postIndex, 1);
    await this.writeToDisk(posts);

    return post;
  }

  async update(
    id: string,
    newPostData: Omit<PostModel, "id" | "slug" | "createdAt" | "updatedAt">
  ): Promise<PostModel> {
    const posts = await this.findAll();
    const postIndex = posts.findIndex((p) => p.id === id);
    const savedPost = posts[postIndex];

    if (postIndex < 0) {
      throw new Error("Post not found.");
    }

    const newPost = {
      ...savedPost,
      ...newPostData,
      updatedAt: new Date().toISOString(),
    };
    posts[postIndex] = newPost;
    await this.writeToDisk(posts);
    return newPost;
  }
}
