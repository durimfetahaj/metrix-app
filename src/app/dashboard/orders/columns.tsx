"use client";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/types";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  render?: (data: string) => React.ReactNode;
}

export const mobileColumns: Column<Order>[] = [
  { header: "Customer", accessor: (order: Order) => order.customer.name },
  {
    header: "Order Date",
    accessor: (order: Order) => timestampToDate(order.createdAt),
  },
  { header: "Order Type", accessor: "type" },
  { header: "Tracking Id", accessor: "trackingId" },
  { header: "Order Total", accessor: "totalPrice" },
  {
    header: "Status",
    accessor: "status",
    render: (status: string) => {
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
  },
];

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Customer Name",
    accessorFn: (order) => order?.customer?.name,
    cell: ({ row }) => {
      const order = row.original;
      return (
        <div className="flex">
          <Link href={`/dashboard/orders/${order?.id}`} className="w-full">
            {order?.customer?.name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "orderDate",
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
