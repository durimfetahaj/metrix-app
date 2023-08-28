"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { usePathname } from "next/navigation";
import { getTitle } from "@/utils/functions";
import UserMenu from "./UserMenu";

type Props = { isHomepage?: boolean };

function Header({ isHomepage = false }: Props) {
  const { status, data: session } = useSession();
  const pageTitle = getTitle(usePathname());

  return (
    <div className="flex h-20 items-center justify-between px-5 py-4">
      {isHomepage ? <Icons.logo /> : <p>{pageTitle}</p>}
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
