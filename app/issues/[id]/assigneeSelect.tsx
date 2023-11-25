"use client";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/app/components/skeleton";

const AssigneeSelect = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data?.data),
    retry: 2,
    staleTime: 60 * 1000 * 5, // 5 min
  });

  if (isLoading) return <Skeleton />;

  return (
    <SelectRoot>
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
