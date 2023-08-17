import { DataTable } from "@/components/DataTable";
import { db } from "@/firebase/firebaseConfig";
import { Order, orderStatusOptions } from "@/types/types";
import { collection, getDocs } from "firebase/firestore";
import { FC } from "react";
import { columns } from "./columns";
import { OrdersCards } from "@/components/Cards";

async function getData(): Promise<Order[]> {
  const orders: Order[] = [];

  const querySnapshot = await getDocs(collection(db, "orders"));

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Order;
    orders.push(data);
  });

  return orders;
}

//TODO: fix search filter

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
          options={orderStatusOptions.map((status) => ({
            value: status,
            label: status,
          }))}
          placeholder="Search for orders..."
        />
      </div>
    </div>
  );
};

export default page;
