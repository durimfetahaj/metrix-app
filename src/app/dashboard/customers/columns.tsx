"use client";
import Modal from "@/components/Modal";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Customer Name",
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <div className="flex">
          <Link
            href={`/dashboard/customers/${customer?.id}`}
            className="w-full"
          >
            {customer?.name}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "orders",
    header: "Orders",
    cell: ({ row }) => {
      const ordersLength = row?.original?.orders?.length
        ? row?.original?.orders?.length
        : 0;
      return <p>{ordersLength}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <Badge className={getStatusClassName(customer?.status)}>
          {customer?.status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(customer.id)}
              >
                Copy product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href={`/dashboard/customers/${customer.id}`}>
                <DropdownMenuItem>View product</DropdownMenuItem>
              </Link>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>Delete product</DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
            <Modal
              title="Are you absolutely sure?"
              description="This action cannot be undone. This will permanently delete this customer"
              actionText="Delete"
              isDelete
              onSubmit={() => alert("Hi")}
            />
          </DropdownMenu>
        </AlertDialog>
      );
    },
  },
];
