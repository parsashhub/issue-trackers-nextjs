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

const AssigneeSelect = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      setUsers(res.data?.data);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SelectRoot>
      <SelectTrigger placeholder="Assign..." />
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value="">Unassigned</SelectItem>
          {users?.map((user) => <SelectItem key={user.id} value={user.id}>{user.name}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  );
};

export default AssigneeSelect;
