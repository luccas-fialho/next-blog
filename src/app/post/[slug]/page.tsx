import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";
import React from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;
  let post;

  try {
    post = await findPostBySlugCached(slug);
  } catch {
    post = undefined;
  }

  if (!post) notFound();

  return <div>{post.title}</div>;
};

export default PostSlugPage;
