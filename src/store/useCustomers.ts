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
import { Customer, Product } from "@/types/types";
import { db } from "@/firebase/firebaseConfig";

type customersStoreState = {
  customers: DocumentData[] | [];
  error: Error | null;
  loading: boolean;
  get: () => void;
  deleteProduct: (id: string) => void;
  updateStatus: (productId: string, status: string) => void;
  add: (payload: any) => void;
  getProductById: (productId: string) => Promise<Product | undefined>;
};

const useCustomers = create<customersStoreState>((set, get) => ({
  customers: [],
  loading: false,
  error: null,

  get: async () => {
    try {
      set({ loading: true });
      const querySnapshot = await getDocs(collection(db, "customers"));
      const customers: Customer[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Customer;
        customers.push(data);
      });

      set({ customers, loading: false, error: null });
    } catch (error) {
      set({ customers: [], loading: false, error: error as Error });
    }
  },

  getProductById: async (productId): Promise<Product | undefined> => {
    try {
      const docRef = doc(db, "customers", productId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const product = docSnap.data();
        set((state) => ({
          customers: [...state.customers, product],
        }));
        if (product) return product as Product;
      } else {
        console.log("Product not found!");
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  add: async (payload: any) => {
    try {
      const docRef = await addDoc(collection(db, "customers"), { ...payload });
      const generatedId = docRef.id;

      await updateDoc(docRef, { id: generatedId });

      set((state) => ({
        customers: [...state.customers, { ...payload }],
        loading: false,
        error: null,
      }));
    } catch (error) {
      console.log("Error creating product:", error);
      throw error;
    }
  },

  deleteProduct: async (productId: string) => {
    try {
      await deleteDoc(doc(db, "customers", productId));
      set({
        customers: get().customers?.filter(
          (product) => product.id !== productId
        ),
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
      const product = doc(db, "customers", productId);
      await updateDoc(product, {
        status: newStatus,
      });
      set((state) => {
        const updatedcustomers = state.customers.map((product) => {
          if (product.id === productId) {
            return { ...product, status: newStatus };
          }
          return product;
        });
        return { customers: updatedcustomers };
      });
      console.log("customers", get().customers[0].status);
    } catch (error) {
      console.error("Error updating status:", error);
      throw error;
    }
  },
}));

export default useCustomers;
