"use client";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/app/components/skeleton";
import { Issue, User } from "@prisma/client";
import { toast } from "react-toastify";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data?.data),
    retry: 2,
    staleTime: 60 * 1000 * 5, // 5 min
  });

  const assignIssue = async (userId: string) => {
    try {
      await axios.put("/api/issues/" + issue.id, {
        assignedToUserId: userId || null,
      });
      toast.success("issue assigned to user successfully");
    } catch (e: any) {
      toast.error("Changes could not be saved.");
    }
  };

  if (isLoading) return <Skeleton />;

  return (
    <SelectRoot
      defaultValue={issue.assignedToUserId || ""}
      onValueChange={assignIssue}
    >
      <SelectTrigger placeholder="Assign..." />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="">Unassigned</SelectItem>
          {users?.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
};

export default AssigneeSelect;
