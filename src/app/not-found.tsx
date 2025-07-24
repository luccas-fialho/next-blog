import clsx from "clsx";

const NotFound = () => {
  return (
    <div
      className={clsx(
        "min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8",
        "dark:bg-slate-100 dark:text-slate-900",
        "flex items-center justify-center text-center"
      )}
    >
      <div>
        <h1 className={clsx("text-7xl/tight mb-4 font-extrabold")}>404</h1>
        <p>Oops! This page wasn&apos;t found 🤔.</p>
      </div>
    </div>
  );
};

export default NotFound;
