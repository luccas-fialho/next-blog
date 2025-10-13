"use client";

import InputText from "../InputText";
import Button from "../Button";
import InputCheckbox from "../InputCheckbox";
import MarkdownEditor from "../MarkdownEditor";
import { useState } from "react";
import ImageUploader from "../Admin/ImageUploader";

const ManagePostForm = () => {
  const [content, setContent] = useState("");
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          name="id"
          placeholder="ID generated automatically"
          labelText="ID"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          name="slug"
          placeholder="Slug generated automatically"
          labelText="Slug"
          type="text"
          defaultValue={""}
          readOnly
        />

        <InputText
          name="author"
          placeholder="Johnny Test"
          labelText="Author"
          type="text"
          defaultValue={""}
        />

        <InputText
          name="title"
          placeholder="My amazing title!"
          labelText="Title"
          type="text"
          defaultValue={""}
        />

        <InputText
          name="excerpt"
          placeholder="This is my amazing post description"
          labelText="Excerpt"
          type="text"
          defaultValue={""}
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
          defaultValue={""}
        />

        <InputCheckbox
          name="coverImageUrl"
          labelText="Publish?"
          type="checkbox"
        />

        <div className="mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ManagePostForm;
