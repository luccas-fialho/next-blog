import InputText from "@/components/InputText";

export const dynamic = "force-dynamic";

const AdminNewPostPage = async () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <InputText placeholder="Type your name" labelText="Name" />
      </div>
      <div>
        <InputText placeholder="Type your last name" labelText="Last Name" />
      </div>
      <div>
        <InputText
          disabled
          placeholder="Type your last name"
          labelText="Last Name"
          defaultValue={"xdxdxds"}
        />
      </div>
      <div>
        <InputText
          disabled
          placeholder="Type your last name"
          labelText="Last Name"
        />
      </div>
      <div>
        <InputText
          placeholder="Type your last name"
          labelText="Last Name"
          readOnly
        />
      </div>
      <div>
        <InputText
          placeholder="Type your last name"
          labelText="Last Name"
          defaultValue={"hehee"}
          readOnly
        />
      </div>
    </div>
  );
};

export default AdminNewPostPage;
