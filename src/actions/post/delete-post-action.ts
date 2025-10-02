"use server";

import asyncDelay from "@/utils/async-delay";

export const deletePostAction = async (id: string) => {
  await asyncDelay(2000);
  return id;
};
