"use client";
import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/types";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Customer Name",
    cell: ({ row }) => {
      const customer = row.original?.customer;
      return (
        <div className="flex">
          <Link href={`/dashboard/orders/${customer?.name}`} className="w-full">
            {customer?.name}
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