import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";
import { Session } from "next-auth";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Metrix",
  description: "Metrix E-commerce build with NextJS and TypeScript",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
