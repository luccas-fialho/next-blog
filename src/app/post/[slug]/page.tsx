import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PostSlugPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return <div>{post.title}</div>;
};

export default PostSlugPage;
