import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

const PostsListAdmin = async () => {
  const posts = await findAllPostAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "p-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Not published)
              </span>
            )}

            <button
              className={clsx(
                "text-red-500 cursor-pointer transition",
                "[&_svg:w-4] [&_svg:h-4]",
                "hover:scale-120"
              )}
              aria-label={`Delete post: ${post.title}`}
              title={`Delete post: ${post.title}`}
            >
              <Trash2Icon size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostsListAdmin;
