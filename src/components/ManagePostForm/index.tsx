"use client";

import InputText from '../InputText'
import Button from '../Button'
import InputCheckbox from '../InputCheckbox';


const ManagePostForm = () => {
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
  )
}

export default ManagePostForm
