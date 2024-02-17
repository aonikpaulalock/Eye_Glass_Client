import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div>
      {/* <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex-1">
            <Outlet />
        </div>
      </div> */}
      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <Sidebar  />
        <div style={{ flex: '1', marginLeft: '200px', overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
