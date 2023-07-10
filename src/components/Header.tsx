"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { usePathname } from "next/navigation";
import { getTitle } from "@/utils/functions";
import UserMenu from "./UserMenu";
import { useUserStore } from "@/store/useUser";

type Props = { isHomepage?: boolean };

function Header({ isHomepage = false }: Props) {
  const { status } = useSession();
  const { user } = useUserStore();
  const pageTitle = getTitle(usePathname());

  return (
    <div className="flex items-center justify-between h-[80px] w-full  p-3  bg-white">
      {isHomepage ? <Icons.logo /> : <p>{pageTitle}</p>}
      {status === "authenticated" ? (
        <div className="mr-5">
          <UserMenu user={user} />
        </div>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </div>
  );
}

export default Header;
