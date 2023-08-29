import { Customer, Order, OrderItem, Product } from "@/types/types";
import React from "react";
import SummaryCard from "./SummaryCard";
import { Icons } from "./Icons";
import {
  getActiveProducts,
  getStatusClassName,
  isNewUser,
  timestampToDate,
} from "@/utils/functions";
import { Badge } from "./ui/badge";
import Image from "next/image";
import ItemDetails from "./ItemDetails";

function OrdersCards({ orders }: { orders: Order[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
        icon={<Icons.global.bag />}
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
        icon={<Icons.global.bag />}
      />
    </div>
  );
}

function OrderCards({ order }: { order: Order }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
          <div className="flex flex-col gap-4 text-sm md:flex-row md:justify-between md:gap-6">
            <Icons.orders.profile />
            <div>
              <p className="text-brand-black-30 ">{order?.customer?.name}</p>
              <p className="text-brand-black-30">
                Customer since{" "}
                <span className="text-black">
                  {timestampToDate(order?.createdAt)}
                </span>
              </p>
            </div>
            <div>
              <Badge className={getStatusClassName(order?.customer?.status)}>
                {order?.customer?.status}
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
            value: order?.paymentMethod?.cardType,
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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
        icon={<Icons.global.customers />}
      />
      <SummaryCard
        data={[
          { title: "New Customers", value: isNewUser(customers) },
          { title: "Purchasing", value: orders },
        ]}
        icon={<Icons.global.bag />}
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
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
            <div className="flex flex-col gap-4 text-sm md:flex-row md:justify-between md:gap-6">
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
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
          icon={<Icons.global.bag />}
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
          icon={<Icons.global.bag />}
        />
      </div>
    </>
  );
}

function DashboardCards({
  orders,
  customers,
  inventory,
}: {
  customers: Customer[];
  orders: Order[];
  inventory: Product[];
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <SummaryCard
          data={[
            {
              title: "Sales",
              value: orders?.length,
            },
            {
              title: "Volume",
              value: orders.reduce(
                (total, order) => total + order.items?.length,
                0
              ),
            },
          ]}
          icon={<Icons.dashboard.sales />}
        />
        <SummaryCard
          data={[
            {
              title: "Customers",
              value: customers?.length,
            },
            {
              title: "Active",
              value: getActiveProducts(customers).length,
            },
          ]}
          icon={<Icons.global.customers />}
        />
        <SummaryCard
          data={[
            {
              title: "All Orders",
              value: orders?.length,
            },
            {
              title: "Pending",
              value: orders?.filter(
                (order: Order) => order.status === "Pending"
              )?.length,
            },
            {
              title: "Delivered",
              value: orders?.filter(
                (order: Order) => order.status === "Delivered"
              )?.length,
            },
          ]}
          icon={<Icons.global.bag />}
        />
        <SummaryCard
          data={[
            {
              title: "All Products",
              value: inventory?.length,
            },
            {
              title: "Active",
              value: getActiveProducts(inventory)?.length,
            },
            {
              title: "Delivered",
              value: orders?.filter(
                (order: Order) => order.status === "Delivered"
              )?.length,
            },
          ]}
          icon={<Icons.global.folder />}
        />
      </div>
    </>
  );
}

function RecentOrdersCard({ orders }: { orders: Order[] }) {
  return (
    <div className="bg-white rounded-lg p-2 md:p-5">
      {orders?.length === 0 ? (
        <p className="text-brand-black-60 ">No recent orders</p>
      ) : (
        orders?.map((order: Order) => {
          return (
            <div key={order?.id}>
              <p className=" text-brand-black-60 mb-6">Recent orders</p>
              {order.items.map((item: OrderItem) => (
                <div
                  className="flex gap-3 border-b-2 pb-3 mb-6"
                  key={item.productId}
                >
                  <Image
                    alt={item.name}
                    src={
                      item?.images
                        ? item.images[0]
                        : "/images/upload-img-fallback.png"
                    }
                    width={50}
                    height={50}
                  />
                  <ItemDetails item={item} orderDate={order?.createdAt} />
                </div>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
}

export {
  CustomersCards,
  CustomerCards,
  OrderCards,
  OrdersCards,
  DashboardCards,
  RecentOrdersCard,
};
