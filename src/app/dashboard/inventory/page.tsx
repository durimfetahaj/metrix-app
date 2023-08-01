"use client";

import { Icons } from "@/components/Icons";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";
import Products from "./products";
import { columns } from "./columns";
import { DataTable } from "@/components/DataTable";
import useProducts from "@/store/useProducts";
import Loader from "@/components/Loader";

export default function InventoryPage() {
  const { get, products, loading } = useProducts();

  useEffect(() => {
    get();
  }, []);

  if (loading || !products) {
    return <Loader variant="form" />;
  }

  return (
    <div className="flex flex-col gap-5">
      <PageHead text="Inventory">
        <Link href="/dashboard/inventory/new">
          <Button>
            <Icons.plus /> Add a New Product
          </Button>
        </Link>
      </PageHead>
      <Products products={products} />
      <DataTable columns={columns} data={products} />
    </div>
  );
}
