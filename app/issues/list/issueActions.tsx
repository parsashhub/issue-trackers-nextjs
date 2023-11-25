import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import Filter from "@/app/issues/list/filter";

const IssueActions = () => {
  return (
    <Flex justify="between" className="mb-5">
      <Button>
        <Link href="/issues/new">+</Link>
      </Button>
      <Filter />
    </Flex>
  );
};

export default IssueActions;
