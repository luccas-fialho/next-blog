import Container from "@/components/Container";
import Header from "@/components/Header";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import clsx from "clsx";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <header className={clsx("text-6xl font-bold text-center py-8")}>
        <h1>Header</h1>
      </header>

      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className={clsx("text-6xl font-bold text-center py-8")}>
        <p>Footer</p>
      </footer>
    </Container>
  );
}
