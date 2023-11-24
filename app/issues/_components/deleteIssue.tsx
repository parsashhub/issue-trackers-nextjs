"use client";
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription,
    AlertDialogRoot,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button, Flex,
} from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

const DeleteIssue = ({ issueId }: { issueId: string }) => {
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
                  <Button color="red"> Delete</Button>
              </AlertDialogAction>
          </Flex>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};

export default DeleteIssue;
