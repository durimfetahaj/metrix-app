import { Order } from "@/types/types";
import React from "react";
import SummaryCard from "./SummaryCard";
import { Icons } from "./Icons";

type Props = {
  orders: Order[];
};

function OrdersCards({ orders }: Props) {
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
            value: orders.filter((order) => order.status === "Completed")
              .length,
          },
        ]}
        icon={<Icons.inventory.bag />}
      />
      <SummaryCard
        data={[
          {
            title: "Canceled",
            value: orders.filter((order) => order.status === "Canceled").length,
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

export default OrdersCards;
