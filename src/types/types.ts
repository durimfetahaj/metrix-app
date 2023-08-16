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

export const orderItemStatusOptions = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
  "Returned",
  "Refunded",
  "Out of Stock",
  "Damaged",
] as const;

export const orderStatusOptions = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
  "On Hold",
  "Returned",
] as const;

export interface OrderItem {
  name: string;
  price: number;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: (typeof orderItemStatusOptions)[number];
}
interface Customer {
  email: string;
  name: string;
  phone: string;
  accountCreatedAt: {
    seconds: number;
    nanoseconds: number;
  };
}

interface ShippingAddress {
  city: string;
  name: string;
  state: string;
  street: string;
  zip: string;
}
interface BillingAddress {
  city: string;
  name: string;
  state: string;
  street: string;
  zip: string;
}
interface PaymentMethod {
  cardType: string;
  expirationMonth: string;
  expirationYear: string;
}

export interface Order {
  orderNumber: string;
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  customer: Customer;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
  status: (typeof orderStatusOptions)[number];
  type: "Take Yourself" | "Home Delivery";
  trackingId: string;
  totalPrice: number;
  paymentMethod: PaymentMethod;
}

export interface SummaryCard {
  title: string;
  value: number | string;
  percentage?: number | string;
}
