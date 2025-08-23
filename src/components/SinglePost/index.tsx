import { findPostBySlugCached } from "@/lib/post/queries";

type SinglePostProps = {
  slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
};
