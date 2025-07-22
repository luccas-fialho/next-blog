import Container from "@/components/Container";
import Header from "@/components/Header";
import PostHeading from "@/components/PostHeading";
import PostImageCover from "@/components/PostImageCover";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import clsx from "clsx";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section
        className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
      >
        <PostImageCover
          imageProps={{
            src: "/images/bryen_0.png",
            alt: "Post title",
            width: 1200,
            height: 720,
            priority: true,
          }}
          linkProps={{
            href: "#",
            className: "",
          }}
        />
        <div className={clsx("flex flex-col gap-4", "sm:justify-center")}>
          <time
            className={clsx("text-sm/tight text-slate-600")}
            dateTime="2025-07-22"
          >
            22/07/2025 10:00
          </time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit amet consectetur
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            dolorum debitis? In quia doloribus laudantium velit ducimus rerum
            consectetur quo, voluptate praesentium officiis! Facilis, magnam
            consequuntur assumenda rem magni quos.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className={clsx("text-6xl font-bold text-center py-8")}>
        <p>Footer</p>
      </footer>
    </Container>
  );
}
