"use client";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import useProducts from "@/store/useProducts";
import Loader from "@/components/Loader";
import { Order, Product } from "@/types/types";
import moment from "moment";
import { timestampToDate, truncateString } from "@/utils/functions";
import { DisplayImage } from "@/components/DisplayImage";
import SummaryCard from "@/components/SummaryCard";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";
import useOrders from "@/store/useOrders";

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

  return (
    <div className="flex flex-col gap-5 max-w-[1440px]">
      <div className="flex justify-between">
        <div className="flex gap-6">
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
      <div className="flex gap-5">
        <DisplayImage src={product?.images[0]} alt={product?.name} />
        <div className="grid grid-cols-3 gap-5 w-full">
          <SummaryCard
            data={[
              {
                title: "Last Order",
                value: moment(
                  product?.lastSoldTimestamp?.toDate().toLocaleDateString()
                ).format("D MMM YYYY"),
              },
              { title: "Price", value: product?.sellingPrice + "€" },
              { title: "In-Stock", value: product?.stock },
            ]}
            icon={
              <div>
                <Badge
                  className={`${
                    product?.status === "Published"
                      ? "bg-brand-primary-100 hover:bg-brand-primary-100"
                      : "bg-brand-secondary-80 hover:bg-brand-secondary-80 text-brand-black-50"
                  }   `}
                >
                  {product?.status}
                </Badge>
              </div>
            }
          />
          <SummaryCard
            data={[
              {
                title: "Total Orders",
                value: product?.salesCount * product?.sellingPrice + "€",
              },
            ]}
            icon={<Icons.inventory.orders />}
          />
          <SummaryCard
            data={[
              {
                title: "Views",
                value: 500,
              },
              { title: "Favourite", value: 20 },
            ]}
            icon={<Icons.inventory.views />}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SummaryCard
          data={[
            {
              title: "All Orders",
              value: orders?.length,
            },
            {
              title: "Pending",
              value: orders?.filter((order) => order.status === "Pending")
                .length,
            },
            {
              title: "Completed",
              value: orders?.filter((order) => order.status === "Completed")
                .length,
            },
          ]}
          icon={<Icons.inventory.bag />}
        />
        <SummaryCard
          data={[
            {
              title: "Canceled",
              value: orders?.filter((order) => order.status === "Canceled")
                .length,
            },
            {
              title: "Returned",
              value: orders?.filter((order) => order.status === "Returned")
                .length,
            },
          ]}
          icon={<Icons.inventory.bag />}
        />
      </div>
      <DataTable
        columns={columns}
        data={orders}
        placeholder="Filter orders..."
        options={[
          {
            value: "Pending",
            label: "Pending",
          },
          {
            value: "Completed",
            label: "Completed",
          },
        ]}
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
