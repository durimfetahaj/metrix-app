import { create } from "zustand";
import {
  collection,
  getDocs,
  DocumentData,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Product } from "@/types/types";
import { db } from "@/firebase/firebaseConfig";

type ProductsStoreState = {
  products: DocumentData[] | null;
  error: Error | null;
  loading: boolean;
  get: () => void;
  deleteProduct: (id: string) => void;
  updateStatus: (productId: string, status: string) => void;
  add: (payload: any) => void;
  getProductById: (productId: string) => Promise<Product | null>;
};

const useProducts = create<ProductsStoreState>((set, get) => ({
  products: null,
  loading: false,
  error: null,

  get: async () => {
    try {
      set({ loading: true });
      const querySnapshot = await getDocs(collection(db, "products"));

      const data: DocumentData[] = querySnapshot.docs.map((doc) => doc.data());

      const products: Product[] = data.map((item) => {
        const {
          category,
          dateAdded,
          discount,
          expiryDate,
          id,
          images,
          lastSoldTimestamp,
          longDescription,
          name,
          ratings,
          returnPolicy,
          sellingPrice,
          shortDescription,
          stock,
          status,
          url,
          salesCount,
        } = item;

        return {
          category,
          dateAdded,
          discount,
          expiryDate,
          id,
          images,
          lastSoldTimestamp,
          longDescription: longDescription ? longDescription : null,
          name,
          ratings,
          returnPolicy,
          sellingPrice,
          shortDescription: shortDescription ? shortDescription : null,
          stock,
          status,
          url,
          salesCount,
        };
      });

      set({ products, loading: false, error: null });
    } catch (error) {
      set({ products: null, loading: false, error: error as Error });
    }
  },

  getProductById: async (productId) => {
    set({ loading: true });
    await get().get();

    if (get().products) {
      const products = get().products;
      const product = products?.find((product) => product.id === productId);

      if (product) {
        return product as Product;
      }
      set({ loading: false });
    }
    return null;
  },

  add: async (payload: any) => {
    try {
      await addDoc(collection(db, "products"), { ...payload });
    } catch (error) {
      console.log("Error creating product:", error);
      throw error;
    }
  },

  deleteProduct: async (productId: string) => {
    // Remove the product from the state
    const updatedProducts = get().products?.filter(
      (product) => product.id !== productId
    );
    set({ products: updatedProducts, loading: false, error: null });

    try {
      // Find the document with the matching productId
      const querySnapshot = await getDocs(collection(db, "products"));
      const matchingDoc = querySnapshot.docs.find(
        (doc) => doc.data().id === productId
      );

      if (matchingDoc) {
        const docRef = doc(db, "products", matchingDoc.id);
        await deleteDoc(docRef); // Delete the document from the database
      } else {
        console.log("Product not found.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  updateStatus: async (productId: string, newStatus: string) => {
    const updatedProducts = get().products?.map((product) =>
      product.id === productId ? { ...product, status: newStatus } : product
    );
    set({ products: updatedProducts, loading: false, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const matchingDoc = querySnapshot.docs.find(
        (doc) => doc.data().id === productId
      );

      if (matchingDoc) {
        const docRef = doc(db, "products", matchingDoc.id);
        await updateDoc(docRef, { status: newStatus });
      } else {
        console.log("Product not found.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      throw error;
    }
  },
}));

export default useProducts;
