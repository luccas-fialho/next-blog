import clsx from "clsx";
import PostImageCover from "../PostImageCover";
import PostSummary from "../PostSummary";
import { PostModelDTO } from "@/models/post/post-model-DTO";

const PostFeatured = () => {
  const slug = "anything";
  const postLink = `/posts/${slug}`;

  const post: PostModelDTO = {
    title: "Lorem ipsum dolor sit amet consectetur",
    slug,
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia obcaecati adipisci quasi id suscipit, sunt recusandae magnam odit fugit distinctio!",
    createdAt: "2025-02-22T04:32:54",
  };

  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
    >
      <PostImageCover
        imageProps={{
          src: "/images/bryen_0.png",
          alt: "Post title",
          width: 1200,
          height: 720,
          priority: true,
        }}
        linkProps={{
          href: postLink,
          className: "",
        }}
      />
      <PostSummary postHeading="h1" post={post} />
    </section>
  );
};

export default PostFeatured;
