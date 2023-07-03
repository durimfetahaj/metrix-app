import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex overflow-y-hidden">
      <Sidebar />
      <div className="w-full h-screen">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
