import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="bg-brand-background p-4 h-screen overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
