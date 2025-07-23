import { postRepository } from "@/repository/posts";
import PostImageCover from "../PostImageCover";
import clsx from "clsx";
import PostHeading from "../PostHeading";
import {
  formatDatetime,
  formatRelativeDatetime,
} from "@/utils/format-datetime";

const PostsList = async () => {
  const posts = await postRepository.findAll();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-4",
        "sm:grid-cols-2",
        "lg:grid-cols-3"
      )}
    >
      {posts.map((post) => {
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
                href: `/posts/${post.slug}`,
                className: "",
              }}
            />
            <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
              <time
                className={clsx("text-sm/tight text-slate-600")}
                dateTime={post.createdAt}
                title={formatRelativeDatetime(post.createdAt)}
              >
                {formatDatetime(post.createdAt)}
              </time>

              <PostHeading as="h2" url={`/posts/${post.slug}`}>
                {post.title}
              </PostHeading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
