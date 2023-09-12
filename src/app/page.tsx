"use client";

import { ThreeItemGrid } from "@/components/grid/three-items";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const runtime = "edge";

export const metadata = {
  description: "High-performance e-commerce store built",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  // return (
  <>
    {/* <Suspense
        fallback={<p className="w-full h-screen text-center p-5">Loading...</p>}
      >
        <ThreeItemGrid />
      </Suspense> */}
  </>;
  // );
}
