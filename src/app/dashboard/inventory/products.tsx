"use client";

import { Icons } from "@/components/Icons";
import SummaryCard from "@/components/SummaryCard";
import React, { useState } from "react";

type Props = {
  products: any;
};

export default function Products({ products }: Props) {
  const [isClicked, setIsClicked] = useState("products");

  console.log("products", products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 max-w-6xl">
      <SummaryCard
        data={[
          { title: "All Products", value: products?.length },
          { title: "Active", value: "90%" },
        ]}
        icon={
          isClicked === "products" ? (
            <Icons.inventory.folderLight />
          ) : (
            <Icons.inventory.folderDark />
          )
        }
        id="products"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />

      <SummaryCard
        data={[
          { title: "All Products", value: products?.length },
          { title: "Active", value: "90%" },
        ]}
        icon={
          isClicked === "low-stock" ? (
            <Icons.inventory.folderLight />
          ) : (
            <Icons.inventory.folderDark />
          )
        }
        id="low-stock"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
    </div>
  );
}
