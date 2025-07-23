import clsx from "clsx";
import React from "react";
import PostHeading from "../PostHeading";
import { PostModelDTO } from "@/models/post/post-model-DTO";
import {
  formatDatetime,
  formatRelativeDatetime,
} from "@/utils/format-datetime";

type PostSummaryProps = {
  postHeading?: "h1" | "h2";
  post: PostModelDTO;
};

const PostSummary = ({ post, postHeading }: PostSummaryProps) => {
  return (
    <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
      <time
        className={clsx("text-sm/tight text-slate-600")}
        dateTime={post.createdAt}
        title={formatRelativeDatetime(post.createdAt)}
      >
        {formatDatetime(post.createdAt)}
      </time>

      <PostHeading as={postHeading} url={`/posts/${post.slug}`}>
        {post.title}
      </PostHeading>

      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostSummary;
