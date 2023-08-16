import { Order } from "@/types/types";
import React from "react";
import SummaryCard from "./SummaryCard";
import { Icons } from "./Icons";
import { getStatusClassName, timestampToDate } from "@/utils/functions";
import { Badge } from "./ui/badge";

type Props = {
  orders: Order[];
};

export function OrdersCards({ orders }: Props) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <SummaryCard
        data={[
          { title: "All Orders", value: orders.length },
          {
            title: "Pending",
            value: orders.filter((order) => order.status === "Pending").length,
          },
          {
            title: "Completed",
            value: orders.filter((order) => order.status === "Delivered")
              .length,
          },
        ]}
        icon={<Icons.inventory.bag />}
      />
      <SummaryCard
        data={[
          {
            title: "Canceled",
            value: orders.filter((order) => order.status === "Cancelled")
              .length,
          },
          {
            title: "Returned",
            value: orders.filter((order) => order.status === "Returned").length,
          },
        ]}
        icon={<Icons.inventory.bag />}
      />
    </div>
  );
}

export function OrderCards({ order }: { order: Order }) {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      <SummaryCard
        data={[
          {
            title: "Phone",
            value: order?.customer.phone,
          },
          {
            title: "Email",
            value: order?.customer.email,
          },
        ]}
        icon={
          <div className="flex justify-between gap-6 text-sm">
            <Icons.orders.profile />
            <div>
              <p className="text-brand-black-30">{order?.customer?.name}</p>
              <p className="text-brand-black-30">
                Customer since{" "}
                <span className="text-black">
                  {timestampToDate(order.customer.accountCreatedAt)}
                </span>
              </p>
            </div>
            <div>
              <Badge className={getStatusClassName(order?.status)}>
                {order?.status}
              </Badge>
            </div>
          </div>
        }
      />
      <SummaryCard
        data={[
          {
            title: "Home Address",
            value: order?.shippingAddress?.street,
          },
          {
            title: "Billing Address",
            value: order?.billingAddress?.street,
          },
        ]}
        icon={<Icons.orders.location />}
      />
      <SummaryCard
        data={[
          {
            title: "Payment Method",
            value: order?.paymentMethod.cardType,
          },
          {
            title: "Order Type",
            value: order?.type,
          },
        ]}
        icon={<Icons.orders.card />}
      />
    </div>
  );
}
