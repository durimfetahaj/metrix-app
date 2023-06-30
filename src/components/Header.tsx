"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

type Props = {};

function Header({}: Props) {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center justify-between h-[80px] w-full  py-3 px-3  bg-white">
      <div>Logo</div>
      {status === "authenticated" ? (
        <Button onClick={() => signOut()}>Log out</Button>
      ) : (
        <Link href="/login">Sign In</Link>
      )}
    </div>
  );
}

export default Header;
