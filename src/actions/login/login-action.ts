"use server";

import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";
import asyncDelay from "@/utils/async-delay";
import { redirect } from "next/navigation";

type LoginActionState = {
  username: string;
  error: string;
};

export const loginAction = async (
  state: LoginActionState,
  formData: FormData
) => {
  await asyncDelay(5000);

  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  if (!username || !password) {
    return {
      username,
      error: "Type in both username and password",
    };
  }

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASSWORD || ""
  );

  if (!isUsernameValid || !isPasswordValid) {
    return {
      username,
      error: "Invalid username or password",
    };
  }

  await createLoginSession(username);
  redirect("/admin/post");
};
