import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        "bg-slate-100 text-slate-900",
        "min-h-screen",
        "dark:bg-slate-900 dark:text-slate-100"
      )}
    >
      <div className={clsx("max-w-screen-lg", "mx-auto px-8")}>{children}</div>
    </div>
  );
};

export default Container;
