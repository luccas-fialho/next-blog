import ManagePostForm from "@/components/ManagePostForm";
import { findPostByIdAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit post",
};

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

const AdminPostIdPage = async ({ params }: AdminPostIdPageProps) => {
  const { id } = await params;
  const post = await findPostByIdAdmin(id).catch();

  if (!post) notFound();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold">Edit post</h1>
      <ManagePostForm post={post} />
    </div>
  );
};

export default AdminPostIdPage;
