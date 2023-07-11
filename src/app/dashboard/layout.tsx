"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { app } from "@/firebase/firebaseConfig";
import { useUserStore } from "@/store/useUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { setUser, user } = useUserStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="h-screen flex overflow-y-hidden">
      <Sidebar />
      <div className="w-full h-screen">
        <Header />
        <div className="h-full w-full flex flex-col bg-brand-background p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
