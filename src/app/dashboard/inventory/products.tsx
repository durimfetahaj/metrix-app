import { Icons } from "@/components/Icons";
import SummaryCard from "@/components/SummaryCard";
import { Product } from "@/types/types";
import {
  getActiveProducts,
  getExpiredProducts,
  getLowStockProducts,
} from "@/utils/functions";
import React from "react";

type Props = {
  products: any;
};

export default function Products({ products }: Props) {
  const lowStockProducts = getLowStockProducts(products).length;
  const expiredProducts = getExpiredProducts(products).length;
  const oneStarRating = products.filter(
    (product: Product) => product?.ratings?.stars === 1
  ).length;
  const activeProducts = getActiveProducts(products).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 max-w-6xl">
      <SummaryCard
        data={[
          { title: "All Products", value: products?.length },
          { title: "Active", value: activeProducts },
        ]}
        icon={<Icons.inventory.folder />}
      />

      <SummaryCard
        data={[
          { title: "Low Stock Alert", value: lowStockProducts },
          { title: "Expired", value: expiredProducts },
          { title: "1 Star Rating", value: oneStarRating },
        ]}
        icon={<Icons.upAndDown />}
      />
    </div>
  );
}
