"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { usePathname, useRouter } from "next/navigation";
import { getTitle } from "@/utils/functions";
import UserMenu from "./UserMenu";
import Link from "next/link";
import Search from "./Search";
import Cart from "./cart";
import Loader from "./Loader";

function Header() {
  const { status, data: session } = useSession();
  const pageTitle = getTitle(usePathname());

  if (usePathname().includes("/dashboard")) {
    return (
      <div className="flex items-center gap-4 justify-between px-2 md:px-4 py-4 bg-white ">
        {pageTitle && <p>{pageTitle}</p>}
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

  return <Loader />;
}

export default Header;
