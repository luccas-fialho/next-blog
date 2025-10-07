"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Trash2Icon } from "lucide-react";
import clsx from "clsx";
import { useState, useTransition } from "react";
import Dialog from "@/components/Dialog";
import { toast } from "react-toastify";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

const DeletePostButton = ({ id, title }: DeletePostButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleConfirm = () => {
    toast.dismiss();

    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success(`Post "${title}" deleted successfully.`);
    });
  };

  return (
    <>
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
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title={"Are you sure?"}
          content={`Are you sure you want to delete "${title}"? This action can't be undone.`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
};

export default DeletePostButton;
