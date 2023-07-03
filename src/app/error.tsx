"use client";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Error",
};

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-brand-background">
      <h1 className="text-4xl font-bold mb-4">Error</h1>
      <p className="text-lg text-gray-600 mb-8">{error?.message}</p>
      <Button
        className="bg-brand-primary-100 hover:bg-brand-primary-80 rounded-xl"
        size="lg"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
