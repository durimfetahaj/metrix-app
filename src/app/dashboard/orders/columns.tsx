"use client";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/types";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => {
      const customerName = row.original.customer?.name;
      return <p>{customerName}</p>;
    },
  },
  {
    accessorKey: "",
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
    accessorKey: "trackingId",
    header: "Tracking Id",
  },
  {
    accessorKey: "totalPrice",
    header: "Order Total",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;
      const status = product.status;
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
