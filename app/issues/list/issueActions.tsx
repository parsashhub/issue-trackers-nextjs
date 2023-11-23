import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueActions = () => {
  return (
    <Flex justify="between" className="mb-5">
      <Button>
        <Link href="/issues/new">+</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
