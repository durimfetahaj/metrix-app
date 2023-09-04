import { Product } from "@/types/types";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { wait } from "@/utils/functions";

export async function getBestsellers(): Promise<Product[]> {
  const bestSellers: Product[] = [];

  const querySnapshot = await getDocs(
    query(
      collection(db, "products"),
      where("status", "==", "Published"), // Filter products by status
      orderBy("salesCount", "desc"), // Sort by sales count in descending order
      limit(3) // Limit the result to the top 3 products
    )
  );

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Product;
    bestSellers.push(data);
  });

  return bestSellers;
}
