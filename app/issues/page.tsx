import {
  Button,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  const classname = "hidden md:table-cell";
  return (
    <>
      <div className="mb-5">
        <Button>
          <Link href="/issues/new">+</Link>
        </Button>
      </div>

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
                  {title}
                  <div className="block md:hidden">{status}</div>
                </TableCell>
                <TableCell className={classname}>{status}</TableCell>
                <TableCell className={classname}>
                  {createdAt.toDateString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableRoot>
    </>
  );
};

export default IssuesPage;
