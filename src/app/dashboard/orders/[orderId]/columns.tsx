"use client";

import { Badge } from "@/components/ui/badge";
import { OrderItem } from "@/types/types";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  render?: (data: any) => React.ReactNode;
}

export const mobileColumns: Column<OrderItem>[] = [
  { header: "Product", accessor: (item: OrderItem) => item?.name },
  {
    header: "Price",
    accessor: (item: OrderItem) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(item.price),
  },
  {
    header: "Quantity",
    accessor: "quantity",
  },
  {
    header: "Order Total",
    accessor: (item: OrderItem) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(item.totalPrice),
  },
  {
    header: "Status",
    accessor: "status",
    render: (status: string) => {
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
  },
];

export const columns: ColumnDef<OrderItem>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      const product = row?.original;
      return (
        <div className="flex items-center gap-6 max-h-16 overflow-hidden rounded-xl">
          <Image
            height={50}
            width={50}
            alt={product?.name}
            src={product?.images[0]}
          />
          {product?.name}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Unit Price",
    cell: ({ row }) => {
      const sellingPrice = parseFloat(row?.original?.price.toString());
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(sellingPrice);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      const quantity = row.original?.quantity;
      return <p>{quantity}</p>;
    },
  },
  {
    accessorKey: "total",
    header: "Order Total",
    cell: ({ row }) => {
      const sellingPrice =
        parseFloat(row?.original?.price.toString()) *
        parseFloat(row?.original?.quantity.toString());
      const total = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(sellingPrice);

      return <div>{total}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original?.status;
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
