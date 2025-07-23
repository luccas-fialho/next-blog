import clsx from "clsx";
import PostImageCover from "../PostImageCover";
import PostHeading from "../PostHeading";

const PostFeatured = () => {
  const slug = "anything";
  const postLink = `/posts/${slug}`;

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
      <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
        <time
          className={clsx("text-sm/tight text-slate-600")}
          dateTime="2025-07-22"
        >
          22/07/2025 10:00
        </time>

        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet consectetur
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          dolorum debitis? In quia doloribus laudantium velit ducimus rerum
          consectetur quo, voluptate praesentium officiis! Facilis, magnam
          consequuntur assumenda rem magni quos.
        </p>
      </div>
    </section>
  );
};

export default PostFeatured;
