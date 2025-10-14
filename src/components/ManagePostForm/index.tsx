"use client";

import InputText from "../InputText";
import Button from "../Button";
import InputCheckbox from "../InputCheckbox";
import MarkdownEditor from "../MarkdownEditor";
import { useActionState, useState } from "react";
import ImageUploader from "../Admin/ImageUploader";
import {
  makePartialPublicPost,
  PublicPost,
} from "@/models/post/post-model-DTO";
import { createPostAction } from "@/actions/post/create-post-action";

type ManagePostFormProps = {
  post?: PublicPost;
};

const ManagePostForm = ({ post }: ManagePostFormProps) => {
  const [content, setContent] = useState(post?.content || "");

  const initialState = {
    formState: makePartialPublicPost(post),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState
  );

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
          readOnly
        />

        <InputText
          name="slug"
          placeholder="Slug generated automatically"
          labelText="Slug"
          type="text"
          defaultValue={formState.slug}
          readOnly
        />

        <InputText
          name="author"
          placeholder="Johnny Test"
          labelText="Author"
          type="text"
          defaultValue={formState.author}
        />

        <InputText
          name="title"
          placeholder="My amazing title!"
          labelText="Title"
          type="text"
          defaultValue={formState.title}
        />

        <InputText
          name="excerpt"
          placeholder="This is my amazing post description"
          labelText="Excerpt"
          type="text"
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText="Content"
          value={content}
          setValue={setContent}
          textAreaName="content"
          disabled={false}
        />

        <ImageUploader />

        <InputText
          name="coverImageUrl"
          placeholder="Type/paste image url"
          labelText="Cover post image"
          type="text"
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckbox
          name="coverImageUrl"
          labelText="Publish?"
          type="checkbox"
          defaultChecked={formState.published}
        />

        <div className="mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ManagePostForm;
