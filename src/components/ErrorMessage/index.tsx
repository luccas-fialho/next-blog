"use client";

import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};

const ErrorMessage = ({
  pageTitle = "",
  contentTitle,
  content,
}: ErrorMessageProps) => {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          "min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl",
          "dark:bg-slate-100 dark:text-slate-900",
          "flex items-center justify-center text-center"
        )}
      >
        <div>
          <h1 className={clsx("text-7xl/tight mb-4 font-extrabold")}>
            {contentTitle}
          </h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
