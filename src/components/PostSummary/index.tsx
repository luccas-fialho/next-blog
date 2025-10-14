import clsx from "clsx";
import React from "react";
import PostHeading from "../PostHeading";
import { PublicPost } from "@/models/post/post-model-DTO";
import PostDate from "../PostDate";

type PostSummaryProps = {
  postHeading?: "h1" | "h2";
  post: PublicPost;
};

const PostSummary = ({ post, postHeading }: PostSummaryProps) => {
  return (
    <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
      <PostDate createdAt={post.createdAt} />

      <PostHeading as={postHeading} url={`/post/${post.slug}`}>
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostSummary;
