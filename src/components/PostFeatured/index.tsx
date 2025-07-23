import clsx from "clsx";
import PostImageCover from "../PostImageCover";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";
import { PostModel } from "@/models/post/post-model";

const PostFeatured = async () => {
  const posts: PostModel[] = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
    >
      <PostImageCover
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
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
