"use client";

import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/types";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  render?: (data: string) => React.ReactNode;
}

export const mobileColumns: Column<Order>[] = [
  {
    header: "Order Date",
    accessor: (order: Order) => timestampToDate(order?.createdAt),
  },
  {
    header: "Order Type",
    accessor: "type",
  },
  {
    header: "Tracking ID",
    accessor: "trackingId",
  },
  {
    header: "Order Total",
    accessor: (order: Order) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(order.totalPrice),
  },
  {
    header: "Status",
    accessor: "status",
    render: (status: string) => {
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
  },
];

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "name",
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
      }).format(parseFloat(row?.original?.totalPrice?.toString()));
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
