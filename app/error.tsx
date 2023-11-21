"use client";

import { Button } from "@radix-ui/themes";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);

  return (
    <>
      <div>something went wrong</div>
      <Button onClick={() => reset()}>Retry</Button>
    </>
  );
};

export default ErrorPage;
