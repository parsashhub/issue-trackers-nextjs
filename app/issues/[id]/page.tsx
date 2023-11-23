import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/statusBadge";

interface Props {
  params: { id: string };
}

const IssieDetail = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3 my-2">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full mt-4">
        <Text>{issue.description}</Text>
      </Card>
    </>
  );
};

export default IssieDetail;
