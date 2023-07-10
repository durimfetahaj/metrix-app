import { create } from "zustand";
import { User, updateEmail, updateProfile } from "firebase/auth";

interface useUserState {
  user: User | null;
  updateProfile: (currentUser: User, payload: any) => void;
  setUser: (user: User | null) => void;
  loading: boolean;
}

export const useUserStore = create<useUserState>()((set, get) => ({
  user: null,
  loading: false,

  setUser: (user) => set({ user }),

  updateProfile: async (currentUser, payload) => {
    try {
      updateProfile(currentUser, {
        displayName: payload?.displayName,
        photoURL: payload?.image,
      }).then(() => {
        updateEmail(currentUser, payload?.email);
        set({ user: currentUser });
      });
    } catch (error) {
      set({ user: null });
    }
  },
}));
