"use server";

import { PublicPost } from "@/models/post/post-model-DTO";

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};

export const createPostAction = async (
  prevState: CreatePostActionState,
  formData: FormData
): Promise<CreatePostActionState> => {
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Invalid data"],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());

  console.log(formDataToObj);

  return {
    formState: prevState.formState,
    errors: [""],
  };
};
