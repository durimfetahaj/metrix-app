import { ThreeItemGrid } from "@/components/grid/three-items";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <>
      <Suspense
        fallback={<p className="w-full h-screen text-center p-5">Loading...</p>}
      >
        <ThreeItemGrid />
      </Suspense>
    </>
  );
}
