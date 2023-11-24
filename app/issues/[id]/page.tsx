import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/statusBadge";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import DeleteIssue from "@/app/issues/_components/deleteIssue";

interface Props {
  params: { id: string };
}

const IssieDetail = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

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
      <Box className="space-x-4">
        <Link href={`/issues/edit/${issue.id}`}>
          <Button>
            Edit
            <Pencil2Icon />
          </Button>
        </Link>
        <DeleteIssue issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssieDetail;
