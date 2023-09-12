import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";
import Header from "@/components/Header";
import Footer from "@/components/layout/footer";

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
    <html lang="en" className={poppins.className}>
      <body className="bg-brand-background selection:bg-brand-secondary-100">
        <Provider>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
