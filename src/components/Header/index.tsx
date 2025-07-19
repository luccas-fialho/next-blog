"use client";

import clsx from "clsx";

const Header = () => {
  return (
    <h1
      className={clsx(
        "text-6xl",
        "font-bold",
        "text-blue-500",
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-1000"
      )}
      onClick={() => alert(123)}
    >
      Header component
    </h1>
  );
};

export default Header;
