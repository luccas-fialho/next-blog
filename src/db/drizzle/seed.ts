import { JsonPostRepository } from "@/repository/posts/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostsRepository = new JsonPostRepository();
  const posts = await jsonPostsRepository.findAll();

  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(posts);

    console.log();
    console.log(`${posts.length} posts seeded to database successfully!`);
    console.log()
  } catch (e) {
    console.log()
    console.error("Error seeding database:", e);
    console.log()
  }
  console.log(posts);
})();
