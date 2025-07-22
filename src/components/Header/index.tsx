import clsx from "clsx";
import DefaultButton from "../DefaultButton";

const Header = () => {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl/normal font-extrabold py-8",
          "sm:text-5xl/normal sm:py-10",
          "md:text-6xl/normal md:py-11",
          "lg:text-7xl/normal lg:py-12"
        )}
      >
        <a href="#">The blog</a>
      </h1>

      <DefaultButton
        className={clsx(
          "bg-amber-100 hover:bg-amber-300",
          "rounded-2xl text-slate-900 p-3 mb-2 cursor-pointer transition ease-in duration-300"
        )}
        toggleTheme={true}
      >
        Toggle Theme
      </DefaultButton>
    </header>
  );
};

export default Header;
