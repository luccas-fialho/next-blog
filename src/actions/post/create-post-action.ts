"use server";

import { PostCreateSchema } from "@/lib/post/validations";
import { PostModel } from "@/models/post/post-model";
import {
  makePartialPublicPost,
  PublicPost,
} from "@/models/post/post-model-DTO";
import { getZodErrors } from "@/utils/get-zod-error-messages";

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
  const zodParsedObj = PostCreateSchema.safeParse(formDataToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrors(zodParsedObj);
    console.log(errors);
    return {
      errors,
      formState: makePartialPublicPost(formDataToObj),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost: PostModel = {
    ...validPostData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    id: Date.now().toString(),
    slug: Math.random().toString(36),
  };

  return {
    formState: newPost,
    errors: [],
  };
};
