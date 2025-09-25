export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

const AdminPostIdPage = async ({ params }: AdminPostIdPageProps) => {
  const { id } = await params;
  return <div>AdminPostIdPage {id}</div>;
};

export default AdminPostIdPage;
