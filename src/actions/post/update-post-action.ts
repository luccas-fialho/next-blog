"use server";

import { PostUpdateSchema } from "@/lib/post/validations";
import {
  makePartialPublicPost,
  makePublicPostFromDb,
  PublicPost,
} from "@/models/post/post-model-DTO";
import { postRepository } from "@/repository/posts";
import asyncDelay from "@/utils/async-delay";
import { getZodErrors } from "@/utils/get-zod-error-messages";
import { makeRandomString } from "@/utils/make-random-string";
import { revalidateTag } from "next/cache";

type UpdatePostActionState = {
  formState: PublicPost;
  errors: string[];
  success?: string;
};

export const updatePostAction = async (
  prevState: UpdatePostActionState,
  formData: FormData
): Promise<UpdatePostActionState> => {
  await asyncDelay(3000);

  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ["Invalid data"],
    };
  }

  const id = formData.get("id")?.toString() || "";

  if (!id || typeof id !== "string") {
    return {
      formState: prevState.formState,
      errors: ["Invalid ID."],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  const zodParsedObj = PostUpdateSchema.safeParse(formDataToObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrors(zodParsedObj);
    console.log(errors);
    return {
      errors,
      formState: makePartialPublicPost(formDataToObj),
    };
  }

  const validPostData = zodParsedObj.data;
  const newPost = {
    ...validPostData,
  };

  let post;

  try {
    post = await postRepository.update(id, newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataToObj),
        errors: [e.message],
      };
    }

    return {
      formState: makePartialPublicPost(formDataToObj),
      errors: ["Unknown error."],
    };
  }

  revalidateTag("posts");
  revalidateTag(`post-${post.slug}`);

  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: makeRandomString(),
  };
};
