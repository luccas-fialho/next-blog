import { findPostBySlugCached } from "@/lib/post/queries";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return <div>{post.title}</div>;
};

export default PostSlugPage;
