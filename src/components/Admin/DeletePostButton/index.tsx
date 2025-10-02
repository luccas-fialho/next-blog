"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Trash2Icon } from "lucide-react";
import clsx from "clsx";
import { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

const DeletePostButton = ({ id, title }: DeletePostButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`The result is: ${result}`);
    });
  };

  return (
    <button
      className={clsx(
        "text-red-500 cursor-pointer transition",
        "[&_svg:w-4] [&_svg:h-4]",
        "hover:scale-120 hover:text-red-700",
        "disabled:text-slate-600 disabled:cursor-not-allowed"
      )}
      aria-label={`Delete post: ${title}`}
      title={`Delete post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon size={18} />
    </button>
  );
};

export default DeletePostButton;
