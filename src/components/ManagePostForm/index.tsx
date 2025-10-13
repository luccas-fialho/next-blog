"use client";

import InputText from "../InputText";
import Button from "../Button";
import InputCheckbox from "../InputCheckbox";
import MarkdownEditor from "../MarkdownEditor";
import { useActionState, useEffect, useState } from "react";
import ImageUploader from "../Admin/ImageUploader";
import { PostModelDTO } from "@/models/post/post-model-DTO";
import { createPostAction } from "@/actions/post/create-post-action";

type ManagePostFormProps = {
  post?: PostModelDTO;
};

const ManagePostForm = ({ post }: ManagePostFormProps) => {
  const [content, setContent] = useState(post?.content || "");

  const initialState = {
    number: 0,
  };

  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState
  );

  useEffect(() => {
    console.log(state.number);
  }, [state.number]);

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          name="id"
          placeholder="ID generated automatically"
          labelText="ID"
          type="text"
          defaultValue={post?.id || ""}
          readOnly
        />

        <InputText
          name="slug"
          placeholder="Slug generated automatically"
          labelText="Slug"
          type="text"
          defaultValue={post?.slug || ""}
          readOnly
        />

        <InputText
          name="author"
          placeholder="Johnny Test"
          labelText="Author"
          type="text"
          defaultValue={post?.author || ""}
        />

        <InputText
          name="title"
          placeholder="My amazing title!"
          labelText="Title"
          type="text"
          defaultValue={post?.title || ""}
        />

        <InputText
          name="excerpt"
          placeholder="This is my amazing post description"
          labelText="Excerpt"
          type="text"
          defaultValue={post?.excerpt || ""}
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
          defaultValue={post?.coverImageUrl || ""}
        />

        <InputCheckbox
          name="coverImageUrl"
          labelText="Publish?"
          type="checkbox"
          defaultChecked={post?.published || false}
        />

        <div className="mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ManagePostForm;
