"use server";

import { deleteLoginSession } from "@/lib/login/manage-login";
import { redirect } from "next/navigation";

export const logoutAction = async () => {
  await deleteLoginSession();
  redirect("/");
}