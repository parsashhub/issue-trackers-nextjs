"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Flex,
} from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssue = ({ issueId }: { issueId: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues/list");
      router.refresh();
      toast.success("issue deleted successfully");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>
        <Button color="red">
          Delete
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure? This action can not be undone.
        </AlertDialogDescription>
        <Flex className="mt-4" gap="3">
          <AlertDialogCancel>
            <Button color="gray">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button onClick={handleDelete} color="red">
              Delete
            </Button>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};

export default DeleteIssue;
