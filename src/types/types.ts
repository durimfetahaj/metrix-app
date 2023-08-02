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
}

export interface Order {
  createdAt: Timestamp;
  customerId: string;
  items: OrderItem[];
  shippingAddress: string;
  status: "Pending" | "Completed";
}

export interface SummaryCard {
  title: string;
  value: number | string;
  percentage?: number | string;
}
