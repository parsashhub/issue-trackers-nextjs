import prisma from "@/prisma/client";
import IssueActions from "@/app/issues/list/issueActions";
import Pagination from "@/app/components/pagination";
import IssueTable from "@/app/issues/list/issueTable";
import {Metadata} from "next";

enum Status {
  "IN_PROGRESS",
  "OPEN",
  "CLOSED",
}

interface Props {
  searchParams: { status; page: string };
}

const IssueList = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page) || 1;
  const pageSize = 10;
  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };
  const issues = await prisma.issue.findMany({
    where: { status },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.findMany({ where });

  return (
    <>
      <IssueActions />
      <IssueTable issues={issues} />
      <Pagination count={issueCount.length} size={pageSize} current={page} />
    </>
  );
};

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues",
};

export const dynamic = "force-dynamic";

export default IssueList;
