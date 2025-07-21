"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      className={clsx(
        "bg-amber-100 rounded-2xl text-slate-900 p-3 mb-2 cursor-pointer hover:bg-amber-300 transition ease-in duration-300"
      )}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default Header;
