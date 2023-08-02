"use client";

import { Badge } from "@/components/ui/badge";
import { timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "createdAt",
    header: "Order Date",
    cell: ({ row }) => {
      const order = row.original;
      const orderDate = timestampToDate(order?.createdAt);
      return <p>{orderDate}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Order Type",
  },
  {
    accessorKey: "price",
    header: () => <>Selling Price</>,
    cell: ({ row }) => {
      const sellingPrice = parseFloat(row?.original?.items[0].price);
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(sellingPrice);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <>Quantity</>,
    cell: ({ row }) => {
      const quantity = row?.original?.items.length;
      return <div>{quantity}</div>;
    },
  },
  {
    accessorKey: "total",
    header: "Order Total",
    cell: ({ row }) => {
      const totalAmount =
        parseFloat(row?.original?.items[0].price) *
        parseFloat(row?.original?.items.length);
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(totalAmount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;
      const status = product.status;
      return (
        <Badge
          className={`${
            status === "Completed"
              ? "bg-brand-success hover:bg-brand-success"
              : "bg-brand-secondary-80 hover:bg-brand-secondary-80 text-brand-black-50"
          }  `}
        >
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
