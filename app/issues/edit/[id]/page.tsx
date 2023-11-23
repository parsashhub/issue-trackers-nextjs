import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "@/app/issues/_components/issueForm";

const EditIssue = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssue;
