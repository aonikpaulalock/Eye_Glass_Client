import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div>
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex-1">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
