import { Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

const DeleteIssue = ({ issueId }: { issueId: string }) => {
  return (
    <Button color="red">
        Delete
      <TrashIcon />
    </Button>
  );
};

export default DeleteIssue;
