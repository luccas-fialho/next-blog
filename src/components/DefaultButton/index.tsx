"use client";

import clsx from "clsx";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type DefaultButtonProps = {
  children?: React.ReactNode;
  toggleTheme?: boolean;
} & React.ComponentProps<"button">;

const DefaultButton = ({
  children,
  toggleTheme,
  ...rest
}: DefaultButtonProps) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      {toggleTheme ? (
        <button onClick={handleToggleTheme} {...rest}>
          {theme === "dark" ? (
            <SunIcon className={clsx("text-slate-100")} />
          ) : (
            <MoonIcon />
          )}
        </button>
      ) : (
        <button {...rest}>{children}</button>
      )}
    </>
  );
};

export default DefaultButton;
