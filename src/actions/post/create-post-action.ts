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
  const title = formData.get("title")?.toString() || "";

  return {
    formState: {
      ...prevState.formState,
      title,
    },
    errors: [],
  };
};
