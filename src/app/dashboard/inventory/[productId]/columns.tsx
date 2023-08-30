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
  { header: "Order Type", accessor: "type" },
  {
    header: "Selling Price",
    accessor: (order: Order) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(order?.items[0]?.price),
  },
  {
    header: "Quantity",
    accessor: (order: Order) => order.items[0].quantity,
  },
  {
    header: "Total Value",
    accessor: (order: Order) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(order?.items[0]?.price * order?.items[0]?.quantity),
  },
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
      const quantity = row?.original?.items[0]?.quantity;
      return <div>{quantity}</div>;
    },
  },
  {
    accessorKey: "total",
    header: "Order Total",
    cell: ({ row }) => {
      const totalAmount = parseFloat(row?.original?.items[0]?.totalPrice);
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
      return <Badge className={getStatusClassName(status)}>{status}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
