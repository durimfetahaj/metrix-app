import { Icons } from "@/components/Icons";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Products from "./products";

export default async function InventoryPage() {
  const res = await fetch("/api/inventory", {
    cache: "no-cache",
  });
  const products = await res.json();

  return (
    <>
      <PageHead text="Inventory">
        <Link href="/dashboard/inventory/new">
          <Button>
            <Icons.plus /> Add a New Product
          </Button>
        </Link>
      </PageHead>
      <Products products={products} />
    </>
  );
}
