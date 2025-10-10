"use client";

import InputText from "../InputText";
import Button from "../Button";
import InputCheckbox from "../InputCheckbox";
import MarkdownEditor from "../MarkdownEditor";
import { useState } from "react";

const ManagePostForm = () => {
  const [content, setContent] = useState("");
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText placeholder="Type your name" labelText="Name" />

        <InputText placeholder="Type your last name" labelText="Last Name" />

        <InputCheckbox
          placeholder="Type your last name"
          labelText="Last Name"
        />

        <InputText
          disabled
          placeholder="Type your last name"
          labelText="Last Name"
          defaultValue={"xdxdxds"}
        />

        <MarkdownEditor
          labelText="Content"
          disabled={false}
          textAreaName="content"
          value={content}
          setValue={setContent}
        />

        <InputText
          disabled
          placeholder="Type your last name"
          labelText="Last Name"
        />

        <InputText
          placeholder="Type your last name"
          labelText="Last Name"
          readOnly
        />

        <InputText
          placeholder="Type your last name"
          labelText="Last Name"
          defaultValue={"hehee"}
          readOnly
        />

        <div className="mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default ManagePostForm;
