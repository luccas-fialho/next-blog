import clsx from "clsx";
import React from "react";

type SpinLoaderProps = {
  containerClasses?: string;
};

const SpinLoader = ({ containerClasses }: SpinLoaderProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "dark:text-slate-100",
        containerClasses
      )}
    >
      <div
        className={clsx(
          "w-10 h-10",
          "border-4 border-t-transparent border-slate-900",
          "rounded-full",
          "animate-spin",
          "dark:border-t-transparent dark:border-slate-100"
        )}
      ></div>
    </div>
  );
};

export default SpinLoader;
