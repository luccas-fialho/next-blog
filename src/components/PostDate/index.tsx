import {
  formatDatetime,
  formatRelativeDatetime,
} from "@/utils/format-datetime";
import clsx from "clsx";
import React from "react";

type PostDateProps = {
  createdAt: string;
};

const PostDate = ({ createdAt }: PostDateProps) => {
  return (
    <time
      className={clsx("text-sm/tight text-slate-600")}
      dateTime={createdAt}
      title={formatRelativeDatetime(createdAt)}
    >
      {formatDatetime(createdAt)}
    </time>
  );
};

export default PostDate;
