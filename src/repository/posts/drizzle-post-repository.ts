import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./posts-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error("Post not found for this slug!");

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post not found for this ID!");

    return post;
  }
}

// como-a-tecnologia-impacta-nosso-bem-estar false
// os-desafios-do-trabalho-remoto-moderno true
// 9eb8b7ac-2b48-4835-880a-a1c798e1a595 true
// 6b204dab-2312-4525-820a-a0463560835f false

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const post = await repo.findById("6b204dab-2312-4525-820a-a0463560835f");
//   console.log(post);

//   //posts.forEach((post) => console.log(post.id, post.published));
// })();
