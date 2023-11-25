import {
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
import CustomLink from "@/app/components/customLink";
import StatusBadge from "../../components/statusBadge";

const classname = "hidden md:table-cell";

const IssueTable = ({ issues }) => {
  return (
    <TableRoot variant="surface">
      <TableHeader>
        <TableRow>
          <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
          <TableColumnHeaderCell className={classname}>
            Status
          </TableColumnHeaderCell>
          <TableColumnHeaderCell className={classname}>
            Created
          </TableColumnHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues?.map(({ id, title, status, createdAt }) => {
          return (
            <TableRow key={id}>
              <TableCell>
                <CustomLink href={`/issues/${id}`}>{title}</CustomLink>
                <div className="block md:hidden">
                  <StatusBadge status={status} />
                </div>
              </TableCell>
              <TableCell className={classname}>
                <StatusBadge status={status} />
              </TableCell>
              <TableCell className={classname}>
                {createdAt.toDateString()}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </TableRoot>
  );
};

export default IssueTable;
