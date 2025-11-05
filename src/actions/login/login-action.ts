"use server";

import asyncDelay from "@/utils/async-delay";

type LoginActionState = {
  username: string;
  error: string;
};

export const loginAction = async (
  state: LoginActionState,
  formData: FormData
) => {
  await asyncDelay(5000);
  return {
    username: "",
    error: "Invalid data",
  };
};
