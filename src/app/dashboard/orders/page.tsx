import { DataTable } from "@/components/DataTable";
import OrdersCards from "@/components/OrdersCards";
import { db } from "@/firebase/firebaseConfig";
import { Order } from "@/types/types";
import { collection, getDocs } from "firebase/firestore";
import { FC } from "react";
import { columns } from "./columns";

async function getData(): Promise<Order[]> {
  const orders: Order[] = [];

  const querySnapshot = await getDocs(collection(db, "orders"));

  querySnapshot.forEach((doc) => {
    const {
      createdAt,
      customer,
      items,
      shippingAddress,
      status,
      type,
      trackingId,
      totalPrice,
    } = doc.data() as Order;

    orders.push({
      createdAt,
      customer,
      items,
      shippingAddress,
      status,
      type,
      trackingId,
      totalPrice,
    });
  });

  return orders;
}

const page: FC = async () => {
  const orders = await getData();

  return (
    <div className="max-w-7xl">
      <div className="flex flex-col gap-5">
        <p>Orders Summary</p>
        <OrdersCards orders={orders} />
        <DataTable
          columns={columns}
          data={orders}
          options={[
            { value: "Completed", label: "Completed" },
            { value: "Pending", label: "Pending" },
            { value: "Canceled", label: "Canceled" },
            { value: "Returned", label: "Returned" },
          ]}
          placeholder="Search for orders..."
        />
      </div>
    </div>
  );
};

export default page;
