"use client";

import clsx from "clsx";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type DefaultButtonProps = {
  children?: React.ReactNode;
  toggleTheme?: boolean;
} & React.ComponentProps<"button">;

type AvailableThemes = "dark" | "light";

const DefaultButton = ({
  children,
  toggleTheme,
  ...rest
}: DefaultButtonProps) => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, isReady]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (!isReady) return null;

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
