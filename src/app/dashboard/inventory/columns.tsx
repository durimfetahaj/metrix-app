"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Select from "@/components/Select";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      const product = row?.original;
      return (
        <Link href={`/dashboard/inventory/${product.id}`}>
          <div className="flex items-center gap-6 max-h-16">
            <Image
              height={50}
              width={50}
              alt={product?.name}
              src={product?.images[0]}
              className="rounded-xl "
            />
            {product?.name}
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "sellingPrice",
    header: () => <div>Selling Price</div>,
    cell: ({ row }) => {
      const sellingPrice = parseFloat(row.getValue("sellingPrice"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(sellingPrice);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: "In-Stock",
  },
  {
    accessorKey: "",
    header: "Total Value",
    cell: ({ row }) => {
      const totalAmount =
        parseFloat(row.getValue("sellingPrice")) *
        parseFloat(row.getValue("stock"));
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
      const status =
        product.status === "Published" ? "Published" : "Unpublished";
      return (
        <Badge
          className={`${
            status === "Published"
              ? "bg-brand-primary-100 hover:bg-brand-primary-100"
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
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/inventory/${product.id}`}>
              <DropdownMenuItem>View product</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Delete product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
