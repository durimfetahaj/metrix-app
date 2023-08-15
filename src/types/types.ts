import { Timestamp } from "firebase/firestore";

export interface Product {
  category: string;
  dateAdded: Timestamp;
  discount: number;
  expiryDate: Date | null;
  id: string;
  images: string;
  lastSoldTimestamp: Timestamp;
  longDescription: string | null;
  name: string;
  returnPolicy: string;
  sellingPrice: number;
  shortDescription: string | null;
  stock: number;
  status: "Published" | "Unpublished";
  url: string;
  ratings: {
    comment: string;
    stars: number;
  };
  salesCount: number;
}

interface OrderItem {
  price: number;
  productId: string;
  quantity: number;
  totalPrice: number;
}
interface Customer {
  email: string;
  name: string;
}

export interface Order {
  createdAt: Timestamp;
  customer: Customer;
  items: OrderItem[];
  shippingAddress: string;
  status: "Pending" | "Completed" | "Canceled" | "Returned";
  type: "Take Yourself" | "Home Delivery";
  trackingId: string;
  totalPrice: number;
}

export interface SummaryCard {
  title: string;
  value: number | string;
  percentage?: number | string;
}
