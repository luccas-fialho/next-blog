import ManagePostForm from "@/components/ManagePostForm";

export const dynamic = "force-dynamic";

const AdminNewPostPage = async () => {
  return (
    <>
      <h1>Create post</h1>
      <ManagePostForm />
    </>
  );
};

export default AdminNewPostPage;
