import { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Text as="p" className="text-red-500">
      {children}
    </Text>
  );
};

export default ErrorMessage;
