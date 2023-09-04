"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { usePathname } from "next/navigation";
import { getTitle } from "@/utils/functions";
import UserMenu from "./UserMenu";
import Link from "next/link";
import Search from "./Search";

function Header() {
  const { status, data: session } = useSession();
  const pageTitle = getTitle(usePathname());

  return (
    <div className="flex h-20 items-center justify-between px-2 md:px-4 py-4 ">
      {pageTitle ? (
        <p>{pageTitle}</p>
      ) : (
        <div className="flex items-center w-full">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Icons.logo />
            </Link>

            <ul className="flex gap-4 text-xs">
              <li>
                <Link href="/search">All</Link>
              </li>
              <li>
                <Link href="/phones">Phones</Link>
              </li>
              <li>
                <Link href="/builds">Pc Builds</Link>
              </li>
            </ul>
          </div>
          <div className="hidden flex-1 md:flex justify-center">
            <Search />
          </div>
        </div>
      )}
      {status === "authenticated" ? (
        <div>
          <UserMenu user={session?.user} />
        </div>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </div>
  );
}

export default Header;
