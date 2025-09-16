import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import PostDate from "../PostDate";

type SinglePostProps = {
  slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);

  return (
    <article>
      <header className="flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <p className="text-3xl font-bold">{post.title}</p>

        <p>
          {post.author} | <PostDate createdAt={post.createdAt} />
        </p>
      </header>

      
      <div>{post.content}</div>
    </article>
  );
};
