import { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Not Found Page",
};

const page: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-brand-background">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found</p>
      <Link href="/dashboard">
        <Button
          className="bg-brand-primary-100 hover:bg-brand-primary-80 rounded-xl"
          size="lg"
        >
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default page;
