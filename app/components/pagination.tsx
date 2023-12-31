"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  count: number;
  size: number;
  current: number;
}

const reuse = {
  color: "gray",
  variant: "soft",
};

const Pagination = ({ current, size, count }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(count / size);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex className="space-x-2 mt-4 items-center">
      <Text size="2">
        Page {current} of {pageCount}
      </Text>
      <Button disabled={current === 1} onClick={() => changePage(1)} {...reuse}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        disabled={current === 1}
        onClick={() => changePage(current - 1)}
        {...reuse}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        disabled={current === pageCount}
        onClick={() => changePage(current + 1)}
        {...reuse}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        disabled={current === pageCount}
        onClick={() => changePage(pageCount)}
        {...reuse}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
