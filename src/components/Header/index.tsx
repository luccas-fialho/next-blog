import clsx from "clsx";
import DefaultButton from "../DefaultButton";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={clsx(
        "flex justify-between items-center py-8",
        "sm:py-10",
        "md:py-11",
        "lg:py-12"
      )}
    >
      <h1
        className={clsx(
          "text-4xl/normal font-extrabold",
          "sm:text-5xl/normal ",
          "md:text-6xl/normal ",
          "lg:text-7xl/normal "
        )}
      >
        <Link href="#">The blog</Link>
      </h1>

      <DefaultButton
        className={clsx(
          "rounded-2xl text-slate-900 p-3 cursor-pointer transition ease-in duration-300"
        )}
        toggleTheme={true}
      ></DefaultButton>
    </header>
  );
};

export default Header;
