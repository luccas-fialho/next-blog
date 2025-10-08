import Button from "@/components/Button";
import { BanIcon, BugIcon, CheckIcon } from "lucide-react";

export const dynamic = "force-dynamic";

const AdminNewPostPage = async () => {
  return (
    <div>
      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm">
          <BugIcon />
          Confirm
        </Button>
        <Button variant="ghost" size="md">
          <BugIcon />
          Confirm
        </Button>
        <Button variant="danger" size="lg">
          <BugIcon />
          Confirm
        </Button>
      </div>

      <div className="py-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm" disabled>
          <BugIcon />
          Confirm
        </Button>
        <Button variant="ghost" size="md" disabled>
          <BugIcon />
          Confirm
        </Button>
        <Button variant="danger" size="lg" disabled>
          <BugIcon />
          Confirm
        </Button>

        <Button variant="danger" size="sm" className="w-full">
          <BugIcon />
          Confirm
        </Button>
        <Button variant="ghost" size="md" className="w-full">
          <BanIcon />
          Cancel
        </Button>
        <Button variant="default" size="lg" className="w-full">
          <CheckIcon />
          OK
        </Button>
      </div>
    </div>
  );
};

export default AdminNewPostPage;
