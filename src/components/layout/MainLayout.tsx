import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div>
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex-1 sticky top-0 left-0 bottom-0">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
