import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-red-500 h-screen">
      <Sidebar />
      <div className="p-5 max-w-xs md:max-w-7xl w-full overflow-scroll md:overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
