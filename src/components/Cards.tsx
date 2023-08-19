import { Customer, Order } from "@/types/types";
import React from "react";
import SummaryCard from "./SummaryCard";
import { Icons } from "./Icons";
import {
  getStatusClassName,
  isNewUser,
  timestampToDate,
} from "@/utils/functions";
import { Badge } from "./ui/badge";

function OrdersCards({ orders }: { orders: Order[] }) {
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

function OrderCards({ order }: { order: Order }) {
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
                  {timestampToDate(order?.createdAt)}
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

type CustomersCardsProps = {
  customers: Customer[];
  orders: number;
};

function CustomersCards({ customers, orders }: CustomersCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <SummaryCard
        data={[
          { title: "All Customers", value: customers.length },
          {
            title: "Active",
            value: customers.filter((customer) => customer.status === "Active")
              .length,
          },
          {
            title: "In-Active",
            value: customers.filter(
              (customer) => customer.status === "Inactive"
            ).length,
          },
        ]}
        icon={<Icons.customers.customers />}
      />
      <SummaryCard
        data={[
          { title: "New Customers", value: isNewUser(customers) },
          { title: "Purchasing", value: orders },
        ]}
        icon={<Icons.inventory.bag />}
      />
    </div>
  );
}

function CustomerCards({
  customer,
  order,
}: {
  customer: Customer;
  order: Order;
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 ">
        <SummaryCard
          data={[
            {
              title: "Phone",
              value: customer?.phone,
            },
            {
              title: "Email",
              value: customer?.email,
            },
          ]}
          icon={
            <div className="flex justify-between gap-6 text-sm">
              <Icons.orders.profile />
              <div>
                <p className="text-brand-black-30">{customer?.name}</p>
                <p className="text-brand-black-30">
                  Customer since{" "}
                  <span className="text-black">
                    {timestampToDate(customer.createdAt)}
                  </span>
                </p>
              </div>
              <div>
                <Badge className={getStatusClassName(customer?.status)}>
                  {customer?.status}
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
              title: "Total Orders",
              value: new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
              }).format(
                customer?.orders.reduce(
                  (total, order) => total + order.totalPrice,
                  0
                )
              ),
            },
          ]}
          icon={<Icons.inventory.orders />}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        <SummaryCard
          data={[
            {
              title: "All Orders",
              value: customer?.orders?.length,
            },
            {
              title: "Pending",
              value: customer?.orders?.filter(
                (order) => order?.status === "Pending"
              ).length,
            },
            {
              title: "Delivered",
              value: customer?.orders?.filter(
                (order) => order?.status === "Delivered"
              ).length,
            },
          ]}
          icon={<Icons.inventory.bag />}
        />
        <SummaryCard
          data={[
            {
              title: "Cancelled",
              value: customer?.orders?.filter(
                (order) => order?.status === "Cancelled"
              ).length,
            },
            {
              title: "Returned",
              value: customer?.orders?.filter(
                (order) => order?.status === "Returned"
              ).length,
            },
          ]}
          icon={<Icons.inventory.bag />}
        />
      </div>
    </>
  );
}

export { CustomersCards, CustomerCards, OrderCards, OrdersCards };
