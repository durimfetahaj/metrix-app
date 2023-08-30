"use client";

import { Icons } from "@/components/Icons";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";
import Products from "./products";
import { columns, mobileColumns } from "./columns";
import { DataTable } from "@/components/DataTable";
import useProducts from "@/store/useProducts";
import Loader from "@/components/Loader";
import MobileTableCard from "@/components/MobileTableCard";
import { Product } from "@/types/types";

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
      <div className="sm:hidden h-screen ">
        <p>Products List</p>
        <MobileTableCard
          data={products as Product[]}
          columns={mobileColumns}
          href="inventory"
        />
      </div>
      <div className="h-screen">
        <DataTable
          columns={columns}
          data={products}
          options={[
            { value: "Unpublished", label: "Unpublished" },
            { value: "Published", label: "Published" },
          ]}
          placeholder="Search for products..."
        />
      </div>
    </div>
  );
}
