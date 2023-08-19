import { create } from "zustand";
import {
  collection,
  getDocs,
  DocumentData,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { Product } from "@/types/types";
import { db } from "@/firebase/firebaseConfig";

type ProductsStoreState = {
  products: DocumentData[] | [];
  error: Error | null;
  loading: boolean;
  get: () => void;
  remove: (id: string) => void;
  updateStatus: (productId: string, status: string) => void;
  add: (payload: any) => void;
  getProductById: (productId: string) => Promise<Product | undefined>;
};

const useProducts = create<ProductsStoreState>((set, get) => ({
  products: [],
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
      set({ products: [], loading: false, error: error as Error });
    }
  },

  getProductById: async (productId): Promise<Product | undefined> => {
    try {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const product = docSnap.data();
        set((state) => ({
          products: [...state.products, product],
        }));
        if (product) return product as Product;
      } else {
        console.log("Product not found!");
      }
    } catch (error) {
      throw error;
    }
  },

  add: async (payload: any) => {
    try {
      await addDoc(collection(db, "products"), { ...payload });
    } catch (error) {
      throw error;
    }
  },

  remove: async (productId: string) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      set({
        products: get().products?.filter((product) => product.id !== productId),
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  updateStatus: async (productId: string, newStatus: string) => {
    try {
      const product = doc(db, "products", productId);
      await updateDoc(product, {
        status: newStatus,
      });
      set((state) => {
        const updatedProducts = state.products.map((product) => {
          if (product.id === productId) {
            return { ...product, status: newStatus };
          }
          return product;
        });
        return { products: updatedProducts };
      });
    } catch (error) {
      console.error("Error updating status:", error);
      throw error;
    }
  },
}));

export default useProducts;
