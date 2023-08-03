import { create } from "zustand";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { Order } from "@/types/types";
import { db } from "@/firebase/firebaseConfig";

type ordersStoreState = {
  orders: DocumentData[] | [];
  error: Error | null;
  loading: boolean;
  getOrdersByProductId: (productId: string) => Promise<Array<Order>>;
};

const useOrders = create<ordersStoreState>((set, get) => ({
  orders: [],
  loading: false,
  error: null,

  getOrdersByProductId: async (productId): Promise<Array<Order>> => {
    const ordersSnapshot = await getDocs(collection(db, "orders"));

    const orders: Order[] = [];
    ordersSnapshot.forEach((doc) => {
      const order = doc.data() as Order;
      const matchingProduct = order?.items?.find(
        (item) => item.productId === productId
      );
      if (matchingProduct) {
        orders.push(order);
      }
    });

    return orders;
  },
}));

export default useOrders;
