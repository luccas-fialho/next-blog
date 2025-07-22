import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

const PostHeading = ({ children, as: Tag = "h2", url }: PostHeadingProps) => {
  const headingClassesMap = {
    h1: "text-3xl/tight sm:text-4xl",
    h2: "text-2xl/tight sm:text-4xl",
  };

  const commonClasses = "font-extrabold";

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
};

export default PostHeading;
