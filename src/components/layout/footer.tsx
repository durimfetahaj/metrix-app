"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "../Icons";
import FooterMenu from "./footer-menu";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = "Metrix";

  const isDashboard = usePathname().startsWith("/dashboard");

  if (isDashboard) {
    return null;
  }

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 ">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Link
            className="flex items-center gap-2 text-black dark:text-white md:pt-1"
            href="/"
          >
            <Icons.logo className="h-10 w-10" />
            <span className="uppercase">{copyrightName}</span>
          </Link>
        </div>
        <FooterMenu />
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>

          <p className="md:ml-auto">
            Crafted by{" "}
            <a
              href="https://durimf-portfolio.vercel.app/"
              className="text-black dark:text-white"
              target="_blank"
            >
              Durim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
