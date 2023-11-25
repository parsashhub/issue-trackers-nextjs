"use client";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";

const statuses: { label: string; value?: string }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const Filter = () => {
  return (
    <SelectRoot>
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
