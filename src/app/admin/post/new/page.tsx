import Button from "@/components/Button";

export const dynamic = "force-dynamic";

const AdminNewPostPage = async () => {
  return <div className="py-16 flex gap-4 flex-wrap">
    <Button variant="default">It works like the JSX</Button>
    <Button variant="ghost">It works like the JSX</Button>
    <Button variant="danger">It works like the JSX</Button>
  </div>;
};

export default AdminNewPostPage;
