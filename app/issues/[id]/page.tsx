import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/statusBadge";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import DeleteIssue from "@/app/issues/_components/deleteIssue";
import AssigneeSelect from "@/app/issues/[id]/assigneeSelect";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } }),
);

const IssieDetail = async ({ params }: Props) => {
  const issue = await fetchUser(Number(params.id));

  if (!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", md: "5" }} gap="5">
      <Box className="lg:col-span-4">
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-3 my-2">
          <StatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose max-w-full mt-4">
          <Text>{issue.description}</Text>
        </Card>
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <Button>
            Edit
            <Link href={`/issues/edit/${issue.id}`}>
              <Pencil2Icon />
            </Link>
          </Button>
          <DeleteIssue issueId={issue.id} />
          <AssigneeSelect issue={issue} />
        </Flex>
      </Box>
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(Number(params.id));

  return {
    title: issue?.title,
    description: "Details of issue " + issue?.id,
  };
}

export default IssieDetail;
