import PostImageCover from "../PostImageCover";
import PostSummary from "../PostSummary";
import clsx from "clsx";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export const PostsList = async () => {
  const posts = await findAllPublicPostsCached();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-4 mb-16",
        "sm:grid-cols-2",
        "lg:grid-cols-3"
      )}
    >
      {posts.slice(1).map((post) => {
        return (
          <div className={clsx("flex flex-col gap-4 group")} key={post.id}>
            <PostImageCover
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
              linkProps={{
                href: `/post/${post.slug}`,
                className: "",
              }}
            />
            <PostSummary postHeading="h2" post={post} />
          </div>
        );
      })}
    </div>
  );
};
