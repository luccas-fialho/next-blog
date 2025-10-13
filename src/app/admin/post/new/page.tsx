import ManagePostForm from "@/components/ManagePostForm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create post"
}

const AdminNewPostPage = async () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold">Create post</h1>
      <ManagePostForm />
    </div>
  );
};

export default AdminNewPostPage;
