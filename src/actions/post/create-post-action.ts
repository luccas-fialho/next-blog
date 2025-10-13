"use server";

type CreatePostActionState = {
  number: number;
};

export const createPostAction = async (
  prevState: CreatePostActionState
): Promise<CreatePostActionState> => {
  console.log({ prevState });
  return {
    number: prevState.number + 1,
  };
};
