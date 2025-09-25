import { Metadata } from "next";
import { Suspense } from "react";
import { findPostBySlugCached } from "@/lib/post/queries/public";
import { SpinLoader } from "@/components/SpinLoader";
import { SinglePost } from "@/components/SinglePost";

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

  return (
    <Suspense fallback={<SpinLoader containerClasses="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
};

export default PostSlugPage;
