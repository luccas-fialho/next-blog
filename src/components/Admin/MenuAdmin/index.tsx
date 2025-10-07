"use client";

import clsx from "clsx";
import Link from "next/link";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MenuAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  const navClasses = clsx(
    "bg-slate-900 text-slate-100 rounded-lg",
    "dark:text-slate-900 dark:bg-slate-100",
    "flex flex-col mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
    "sm-overflow-visible sm:h-auto"
  );

  const linkClasses = clsx(
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4",
    "flex items-center gap-2",
    "transition hover:bg-slate-800 rounded-lg dark:hover:bg-slate-200",
    "h-10",
    "shrink-0",
    "cursor-pointer"
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    "text-blue-200 italic",
    "dark:text-blue-700",
    "sm:hidden"
  );

  return (
    <nav className={navClasses}>
      {!isOpen && (
        <>
          <button
            onClick={() => setIsOpen((s) => !s)}
            className={openCloseBtnClasses}
          >
            <MenuIcon />
            Menu
          </button>
        </>
      )}

      {isOpen && (
        <>
          <button
            onClick={() => setIsOpen((s) => !s)}
            className={openCloseBtnClasses}
          >
            <CircleXIcon />
            Close
          </button>
        </>
      )}
      <a
        className={linkClasses}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Create Post
      </Link>
    </nav>
  );
};

export default MenuAdmin;
