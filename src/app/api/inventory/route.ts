import { db } from "@/firebase/firebaseConfig";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    const products: DocumentData[] = querySnapshot.docs.map((doc) =>
      doc.data()
    );

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
