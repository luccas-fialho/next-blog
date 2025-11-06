import LoginForm from "@/components/Admin/LoginForm";
import ErrorMessage from "@/components/ErrorMessage";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Login"
}

const AdminLoginPage = async () => {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTitle="403"
        content="Allow login system using ALLOW_LOGIN"
      />
    );
  }

  return <LoginForm />;
};

export default AdminLoginPage;
