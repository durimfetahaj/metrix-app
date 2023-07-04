import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
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
