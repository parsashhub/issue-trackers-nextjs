import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssieDetail = async ({ params }: Props) => {
  if (typeof params.id !== "number") return notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return <div></div>;
};

export default IssieDetail;
