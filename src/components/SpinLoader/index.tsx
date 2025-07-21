import clsx from "clsx";
import React from "react";

type SpinLoaderProps = {
  containerClasses?: string;
};

const SpinLoader = ({ containerClasses }: SpinLoaderProps) => {
  return (
    <div className={clsx("flex items-center justify-center", containerClasses)}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-900",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
};

export default SpinLoader;
