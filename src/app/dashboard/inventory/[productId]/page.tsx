"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import useProducts from "@/store/useProducts";
import Loader from "@/components/Loader";
import { Order, Product, orderStatusOptions } from "@/types/types";
import { timestampToDate, truncateString } from "@/utils/functions";
import { DataTable } from "@/components/DataTable";
import { columns, mobileColumns } from "./columns";
import useOrders from "@/store/useOrders";
import { ProductCards } from "@/components/ProductCards";
import MobileTableCard from "@/components/MobileTableCard";

type Props = {
  params: { productId: string };
};

export default function ProductPage({ params }: Props) {
  const { loading, product, dateAdded, orders, fetchData, handleUpdateStatus } =
    useProductData(params.productId);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading || !product) {
    return <Loader variant="form" />;
  }

  //TODO: Check responsiveness on production mobile

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
        <div className="flex flex-col gap-6 md:flex-row">
          <p>{product?.name}</p> {""}
          <p>
            Date Added {""}
            <span className="text-brand-black-30">{dateAdded}</span>
          </p>
          <p>
            Product Url {""}
            <a
              href={product?.url}
              className="text-brand-black-30"
              target="_blank"
            >
              {truncateString(product?.url)}
            </a>
          </p>
        </div>
        <Button onClick={handleUpdateStatus}>
          {product?.status === "Published" ? "Unpublish" : "Publish"}
        </Button>
      </div>

      <ProductCards product={product} orders={orders} />
      <div className="sm:hidden h-screen ">
        <p>Orders List</p>
        <MobileTableCard data={orders} columns={mobileColumns} />
      </div>

      <DataTable
        columns={columns}
        data={orders}
        placeholder=""
        options={orderStatusOptions.map((status) => ({
          value: status,
          label: status,
        }))}
      />
    </div>
  );
}

function useProductData(productId: string) {
  const { getProductById, updateStatus, loading } = useProducts();
  const { getOrdersByProductId } = useOrders();
  const [product, setProduct] = useState<Product | undefined>();
  const [orders, setOrders] = useState<Array<Order>>([]);

  const status = product?.status === "Published" ? "Unpublish" : "Publish";
  const dateAdded = product?.dateAdded
    ? timestampToDate(product?.dateAdded)
    : null;

  const fetchData = async () => {
    const product = await getProductById(productId);
    if (product) {
      setProduct(product);
      const orders = await getOrdersByProductId(product?.id);

      setOrders(orders);
    }
  };

  const handleUpdateStatus = async () => {
    if (product) {
      updateStatus(
        product?.id,
        product?.status === "Published" ? "Unpublished" : "Published"
      );
    }
    fetchData();
  };

  return {
    status,
    dateAdded,
    orders,
    fetchData,
    handleUpdateStatus,
    product,
    loading,
  };
}
