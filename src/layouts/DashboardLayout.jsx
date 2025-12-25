import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
<div className="flex-1 bg-[#020617] p-6 min-h-screen">
  <Outlet />
</div>
    </div>
  );
};

export default DashboardLayout;
