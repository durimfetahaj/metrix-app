"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarWidth = isOpen ? "w-80" : "w-24";
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      id: 0,
      href: "/dashboard",
      label: "Dashboard",
      icon: <Icons.sidebar.dashboard />,
    },
    {
      id: 1,
      href: "/dashboard/orders",
      label: "Orders",
      icon: <Icons.sidebar.orders />,
    },
    {
      id: 2,
      href: "/dashboard/customers",
      label: "Customers",
      icon: <Icons.sidebar.customers />,
    },
    {
      id: 3,
      href: "/dashboard/inventory",
      label: "Inventory",
      icon: <Icons.sidebar.inventory />,
    },
    {
      id: 4,
      href: "/dashboard/conversations",
      label: "Conversations",
      icon: <Icons.sidebar.conversations />,
    },
    {
      id: 5,
      href: "/dashboard/settings",
      label: "Settings",
      icon: <Icons.sidebar.settings />,
    },
  ];

  return (
    <nav className="flex h-screen">
      <div
        className={`flex flex-col  bg-white  text-brand-black-50 py-8  ${sidebarWidth} ${
          isOpen ? `items-start px-8` : `items-center px-4`
        } ease-in duration-300 `}
      >
        <div className="flex items-center mb-12 w-full ">
          <div>
            <Icons.logo />
          </div>
          {isOpen && <p className="ml-2 text-xl font-bold">Metrix</p>}
        </div>
        <ul className="space-y-2 w-full flex flex-col  ">
          {navItems.map(({ id, href, icon, label }) => (
            <Link
              key={id}
              href={href}
              className={`${
                pathName === href
                  ? "bg-brand-primary-100 text-white font-normal rounded-xl"
                  : ""
              } flex gap-4 py-4 px-5`}
            >
              <span>
                {React.cloneElement(icon, {
                  className:
                    pathName === href
                      ? "stroke-white"
                      : "stroke-brand-black-50",
                })}
              </span>
              {isOpen && label}
            </Link>
          ))}
        </ul>
        <div className="flex items-end justify-end h-full w-full">
          {isOpen ? (
            <Icons.sidebar.close
              onClick={toggleSidebar}
              className="cursor-pointer "
            />
          ) : (
            <Icons.sidebar.open
              onClick={toggleSidebar}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
