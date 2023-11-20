"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const links = [
  {
    name: "Dashboard",
    href: "/",
  },
  { name: "Issues", href: "/issues" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            className={classnames({
                "text-zinc-900": href === currentPath,
                "text-zinc-500": href !== currentPath,
                "hover:text-zinc-800 transition-colors": true
            })}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
