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

//TODO: fix last item not fully seen on mobile
//TODO: remove sidebar scroll

const page: FC = async () => {
  const [orders, customers, inventory] = await Promise.all([
    getOrders(),
    getCustomers(),
    getInventory(),
  ]);

  return (
    <div className="flex flex-col gap-5 h-full">
      <DashboardCards
        customers={customers}
        orders={orders}
        inventory={inventory}
      />
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="py-4 hidden md:block rounded-lg bg-white md:w-[70%] md:h-96">
          <BarChartComponent data={aggregateSalesData(orders)} />
        </div>
        <div className="md:w-[30%]">
          <RecentOrdersCard orders={GetRecentOrders(orders)} />
        </div>
      </div>
    </div>
  );
};

export default page;
