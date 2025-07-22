import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

type PostImageCoverProps = {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
};

const PostImageCover = ({ linkProps, imageProps }: PostImageCoverProps) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full h-full overflow-hidden transition rounded-xl",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "group-hover:scale-105 w-full h-full object-cover object-center",
          imageProps.className
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
};

export default PostImageCover;
