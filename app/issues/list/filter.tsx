"use client";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: string; value?: string }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleValueChange = (status) => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push("/issues/list" + query);
  };

  return (
    <SelectRoot
      onValueChange={(status) => handleValueChange(status)}
      defaultValue={searchParams.get("status") || ""}
    >
      <SelectTrigger placeholder="Filter by status..." />
      <SelectContent>
        {statuses.map((status) => (
          <SelectItem key={status.value || "asd"} value={status.value || ""}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default Filter;
