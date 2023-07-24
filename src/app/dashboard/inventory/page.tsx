import { Icons } from "@/components/Icons";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Products from "./products";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

export default async function InventoryPage() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products: DocumentData[] = querySnapshot.docs.map((doc) => doc.data());

  return (
    <>
      <PageHead text="Inventory">
        <Link href="/dashboard/inventory/new">
          <Button>
            <Icons.plus /> Add a New Product
          </Button>
        </Link>
      </PageHead>
      <Products products={products} />
    </>
  );
}
