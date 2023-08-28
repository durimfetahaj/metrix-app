import { BarChartComponent } from "@/components/BarChart";
import { DashboardCards, RecentOrdersCard } from "@/components/Cards";
import { db } from "@/firebase/firebaseConfig";
import { Customer, Order, Product } from "@/types/types";
import { GetRecentOrders, aggregateSalesData } from "@/utils/functions";
import { collection, getDocs } from "firebase/firestore";
import { FC } from "react";

async function getOrders(): Promise<Order[]> {
  const orders: Order[] = [];

  const querySnapshot = await getDocs(collection(db, "orders"));

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Order;
    orders.push(data);
  });

  return orders;
}

async function getCustomers(): Promise<Customer[]> {
  const customers: Customer[] = [];

  const querySnapshot = await getDocs(collection(db, "customers"));

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Customer;
    customers.push(data);
  });

  return customers;
}

async function getInventory(): Promise<Product[]> {
  const inventory: Product[] = [];

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Product;
    inventory.push(data);
  });

  return inventory;
}

const page: FC = async () => {
  const [orders, customers, inventory] = await Promise.all([
    getOrders(),
    getCustomers(),
    getInventory(),
  ]);

  return (
    <div className="flex flex-col gap-5">
      <DashboardCards
        customers={customers}
        orders={orders}
        inventory={inventory}
      />
      <div className="flex gap-5">
        <div className="h-96 w-3/5 py-4 rounded-lg bg-white">
          <BarChartComponent data={aggregateSalesData(orders)} />
        </div>
        <div className="w-2/5">
          <RecentOrdersCard orders={GetRecentOrders(orders)} />
        </div>
      </div>
    </div>
  );
};

export default page;
