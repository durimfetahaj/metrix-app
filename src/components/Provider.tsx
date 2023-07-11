"use client";

import { app } from "@/firebase/firebaseConfig";
import { useUserStore } from "@/store/useUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const { setUser, user } = useUserStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      if (user) {
        setUser(user);
      } else {
        alert("User not found");
      }
    });

    return () => unsubscribe();
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
