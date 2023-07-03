"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signOut, signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { usePathname } from "next/navigation";
import { getTitle } from "@/utils/functions";

type Props = { isHomepage?: boolean };

function Header({ isHomepage = false }: Props) {
  const { data: session, status } = useSession();
  const pageTitle = getTitle(usePathname());

  return (
    <div className="flex items-center justify-between h-[80px] w-full  py-3 px-3  bg-white">
      {isHomepage ? <Icons.logo /> : <p>{pageTitle}</p>}
      {status === "authenticated" ? (
        <Button onClick={() => signOut()}>Log out</Button>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </div>
  );
}

export default Header;
