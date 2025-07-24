import React from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;

  return <h1 className="font-extrabold py-16">Dynamic rote: {slug}</h1>;
};

export default PostSlugPage;
