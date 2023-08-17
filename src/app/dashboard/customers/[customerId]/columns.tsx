"use client";

import { Badge } from "@/components/ui/badge";
import { OrderItem } from "@/types/types";
import { getStatusClassName } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<OrderItem>[] = [
  {
    accessorKey: "productName",
    header: "Product Name",
    cell: ({ row }) => {
      const productName = row.original?.name;
      return <p>{productName}</p>;
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
