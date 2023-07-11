"use client";

import { app } from "@/firebase/firebaseConfig";
import { useUserStore } from "@/store/useUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SessionProvider, useSession } from "next-auth/react";
import { FC, ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
