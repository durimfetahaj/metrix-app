"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
}
