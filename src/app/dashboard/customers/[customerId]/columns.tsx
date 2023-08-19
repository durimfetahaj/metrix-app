"use client";

import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/types";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "createdAt",
    header: "Order Date",
    cell: ({ row }) => {
      const createdAt = row.original?.createdAt;
      return <p>{timestampToDate(createdAt)}</p>;
    },
  },
  {
    accessorKey: "type",
    header: "Order Type",
  },
  {
    accessorKey: "trackingId",
    header: "Tracking ID",
  },
  {
    accessorKey: "totalPrice",
    header: "Order Total",
    cell: ({ row }) => {
      const totalPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(parseFloat(row?.original?.totalPrice.toString()));
      return <p>{totalPrice}</p>;
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
