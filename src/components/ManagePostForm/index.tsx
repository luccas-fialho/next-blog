"use client";

import InputText from "../InputText";
import Button from "../Button";
import InputCheckbox from "../InputCheckbox";
import MarkdownEditor from "../MarkdownEditor";
import { useActionState, useEffect, useState } from "react";
import ImageUploader from "../Admin/ImageUploader";
import {
  makePartialPublicPost,
  PublicPost,
} from "@/models/post/post-model-DTO";
import { createPostAction } from "@/actions/post/create-post-action";
import { toast } from "react-toastify";
import { updatePostAction } from "@/actions/post/update-post-action";
import { useRouter, useSearchParams } from "next/navigation";

type ManagePostFormUpdateProps = {
  mode: "update";
  post: PublicPost;
};

type ManagePostFormCreateProps = {
  mode: "create";
};

type ManagePostFormProps =
  | ManagePostFormUpdateProps
  | ManagePostFormCreateProps;

const ManagePostForm = (props: ManagePostFormProps) => {
  const { mode } = props;
  const searchParams = useSearchParams();
  const created = searchParams.get("created");
  const router = useRouter();

  let post;

  if (mode === "update") {
    post = props.post;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };

  const [content, setContent] = useState(post?.content || "");

  const initialState = {
    formState: makePartialPublicPost(post),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach((error) => toast.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      toast.dismiss();
      toast.success("Post updated successfully!");
    }
  }, [state.success]);

  useEffect(() => {
    if (created === "1") {
      toast.dismiss();
      toast.success("Post created successfully!");
      const url = new URL(window.location.href);
      url.searchParams.delete("created");
      router.replace(url.toString());
    }
  }, [created, router]);

  const { formState } = state;

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          name="id"
          placeholder="ID generated automatically"
          labelText="ID"
          type="text"
          defaultValue={formState.id}
          disabled={isPending}
          readOnly
        />

        <InputText
          name="slug"
          placeholder="Slug generated automatically"
          labelText="Slug"
          type="text"
          defaultValue={formState.slug}
          disabled={isPending}
          readOnly
        />

        <InputText
          name="author"
          placeholder="Johnny Test"
          labelText="Author"
          type="text"
          defaultValue={formState.author}
          disabled={isPending}
        />

        <InputText
          name="title"
          placeholder="My amazing title!"
          labelText="Title"
          type="text"
          defaultValue={formState.title}
          disabled={isPending}
        />

        <InputText
          name="excerpt"
          placeholder="This is my amazing post description"
          labelText="Excerpt"
          type="text"
          defaultValue={formState.excerpt}
          disabled={isPending}
        />

        <MarkdownEditor
          labelText="Content"
          value={content}
          setValue={setContent}
          textAreaName="content"
          disabled={isPending}
        />

        <ImageUploader disabled={isPending} />

        <InputText
          name="coverImageUrl"
          placeholder="Type/paste image url"
          labelText="Cover post image"
          type="text"
          defaultValue={formState.coverImageUrl}
          disabled={isPending}
        />

        <InputCheckbox
          name="published"
          labelText="Publish?"
          type="checkbox"
          defaultChecked={formState.published}
          disabled={isPending}
        />

        <div className="mt-6">
          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ManagePostForm;
