import { Timestamp } from "firebase/firestore";

export interface Product {
  category: string;
  dateAdded: Date;
  discount: number;
  expiryDate: Date | null;
  id: string;
  images: string;
  lastTimeSold: Timestamp;
  longDescription: string | null;
  name: string;
  rating: number;
  returnPolicy: string;
  sellingPrice: number;
  shortDescription: string | null;
  stock: number;
  status: "Published" | "Unpublished";
  url: string;
}

export interface SummaryCard {
  title: string;
  value: number | string;
  percentage?: number | string;
}
