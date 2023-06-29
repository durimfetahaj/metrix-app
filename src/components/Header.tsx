import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex items-center justify-between h-[80px] w-full  py-3 px-3  bg-white">
      <div>Logo</div>
      <Link href="/login">Sign In</Link>
    </div>
  );
}

export default Header;
