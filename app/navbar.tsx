"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  Text,
} from "@radix-ui/themes";

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  { name: "Issues", href: "/issues/list" },
];

const Navbar = () => {
  const { status, data } = useSession();
  const currentPath = usePathname();

  if (status === "loading") return null;

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14  justify-between items-center">
      <ul className="flex space-x-6 items-center">
        <Link href="/">
          <AiFillBug />
        </Link>
        {links.map(({ href, name }) => {
          return (
            <Link
              key={href}
              href={href}
              className={classnames({
                "text-zinc-900": href === currentPath,
                "text-zinc-500": href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {name}
            </Link>
          );
        })}
      </ul>
      <Box className="flex items-center space-x-4">
        {status === "authenticated" && (
          <DropdownMenuRoot>
            <DropdownMenuTrigger>
              <Avatar
                className="cursor-pointer"
                src={data.user?.image}
                fallback="?"
                size="2"
                radius="full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Text size="2">{data.user?.email}</Text>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="/api/auth/signout">sign out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuRoot>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">
            <Button>sign in</Button>
          </Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
