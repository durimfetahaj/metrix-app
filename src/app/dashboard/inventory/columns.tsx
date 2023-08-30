import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
// import DeleteModal from "./DeleteModal";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { getStatusClassName } from "@/utils/functions";
import { Product } from "@/types/types";

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  render?: (data: string) => React.ReactNode;
}

export const mobileColumns: Column<Product>[] = [
  { header: "Product", accessor: (product: Product) => product?.name },
  { header: "Category", accessor: "category" },
  {
    header: "Selling Price",
    accessor: (product: Product) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(product.sellingPrice),
  },
  { header: "In-Stock", accessor: "stock" },
  {
    header: "Total Value",
    accessor: (product: Product) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(product.stock * product.sellingPrice),
  },
  {
    header: "Status",
    accessor: "status",
    render: (status: string) => {
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
  },
];

//TODO: uncomment deleteModal

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      const product = row?.original;
      return (
        <Link href={`/dashboard/inventory/${product.id}`}>
          <div className="flex items-center gap-6 max-h-16 overflow-hidden rounded-xl">
            <Image
              height={50}
              width={50}
              alt={product?.name}
              src={product?.images[0]}
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
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
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
        <AlertDialog>
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
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>Delete product</DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
            {/* <DeleteModal productId={product?.id} productName={product?.name} /> */}
          </DropdownMenu>
        </AlertDialog>
      );
    },
  },
];
