import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className={clsx("pb-16 text-center")}>
      <p>
        <span className="block">Made with ❤️ by Luccas Fialho </span>
        <span> {new Date().getFullYear()} - </span>
        <Link className="hover:text-slate-500 hover:underline" href={"/"}>
          The blog
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
